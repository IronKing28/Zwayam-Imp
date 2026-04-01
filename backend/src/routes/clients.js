const express = require("express");
const { z } = require("zod");
const { ProductTier, UserRole } = require("@prisma/client");
const prisma = require("../lib/prisma");
const { authenticate, requireRoles } = require("../middleware/auth");
const { asyncHandler } = require("../lib/http");

const router = express.Router();

const createClientSchema = z.object({
  name: z.string().min(1).max(200),
  ownerUserId: z.string().optional(),
  product: z.nativeEnum(ProductTier).optional(),
  accessDisabled: z.boolean().optional(),
  config: z.any().optional()
});

const updateClientSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  ownerUserId: z.string().nullable().optional(),
  product: z.nativeEnum(ProductTier).optional(),
  accessDisabled: z.boolean().optional(),
  config: z.any().optional()
});

function slugify(name) {
  const seed = String(name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${seed || "client"}-${suffix}`;
}

async function canAccessClient(clientId, auth) {
  if (auth.role === UserRole.ADMIN) return true;
  if (auth.role === UserRole.MANAGER) {
    const match = await prisma.client.findFirst({
      where: { id: clientId, ownerUserId: auth.sub },
      select: { id: true }
    });
    return Boolean(match);
  }
  if (auth.role === UserRole.CLIENT) {
    return Boolean(auth.clientId && auth.clientId === clientId);
  }
  return false;
}

router.get(
  "/clients",
  authenticate,
  asyncHandler(async (req, res) => {
    let where = {};
    if (req.auth.role === UserRole.ADMIN) {
      where = {};
    } else if (req.auth.role === UserRole.MANAGER) {
      where = { ownerUserId: req.auth.sub };
    } else if (req.auth.role === UserRole.CLIENT) {
      if (!req.auth.clientId) return res.status(403).json({ message: "Access denied." });
      where = { id: req.auth.clientId };
    } else {
      return res.status(403).json({ message: "Access denied." });
    }

    const clients = await prisma.client.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        owner: {
          select: { id: true, name: true, email: true, role: true }
        }
      }
    });
    return res.json(clients);
  })
);

router.post(
  "/clients",
  authenticate,
  requireRoles(UserRole.ADMIN, UserRole.MANAGER),
  asyncHandler(async (req, res) => {
    const parsed = createClientSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid client payload.", details: parsed.error.flatten() });
    }

    const input = parsed.data;
    const ownerUserId = req.auth.role === UserRole.ADMIN ? input.ownerUserId || null : req.auth.sub;

    const client = await prisma.client.create({
      data: {
        name: input.name.trim(),
        slug: slugify(input.name),
        ownerUserId,
        product: input.product || ProductTier.STANDARD,
        accessDisabled: Boolean(input.accessDisabled),
        config: input.config || {}
      },
      include: {
        owner: {
          select: { id: true, name: true, email: true, role: true }
        }
      }
    });

    return res.status(201).json(client);
  })
);

router.get(
  "/clients/:id",
  authenticate,
  asyncHandler(async (req, res) => {
    if (![UserRole.ADMIN, UserRole.MANAGER, UserRole.CLIENT].includes(req.auth.role)) {
      return res.status(403).json({ message: "Access denied." });
    }
    const allowed = await canAccessClient(req.params.id, req.auth);
    if (!allowed) return res.status(403).json({ message: "Access denied." });

    const client = await prisma.client.findUnique({
      where: { id: req.params.id },
      include: {
        owner: {
          select: { id: true, name: true, email: true, role: true }
        }
      }
    });
    if (!client) return res.status(404).json({ message: "Client not found." });
    return res.json(client);
  })
);

router.patch(
  "/clients/:id",
  authenticate,
  asyncHandler(async (req, res) => {
    if (![UserRole.ADMIN, UserRole.MANAGER, UserRole.CLIENT].includes(req.auth.role)) {
      return res.status(403).json({ message: "Access denied." });
    }
    const allowed = await canAccessClient(req.params.id, req.auth);
    if (!allowed) return res.status(403).json({ message: "Access denied." });

    const parsed = updateClientSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid client payload.", details: parsed.error.flatten() });
    }

    const input = parsed.data;
    if (req.auth.role === UserRole.CLIENT) {
      const payload = {};
      if (Object.prototype.hasOwnProperty.call(input, "config")) {
        payload.config = input.config;
      }
      if (!Object.keys(payload).length) {
        return res.status(400).json({ message: "Client users can only update config." });
      }

      const client = await prisma.client.update({
        where: { id: req.params.id },
        data: payload,
        include: {
          owner: {
            select: { id: true, name: true, email: true, role: true }
          }
        }
      });
      return res.json(client);
    }

    if (req.auth.role !== UserRole.ADMIN && Object.prototype.hasOwnProperty.call(input, "ownerUserId")) {
      delete input.ownerUserId;
    }

    const payload = { ...input };
    if (payload.name) payload.name = payload.name.trim();

    const client = await prisma.client.update({
      where: { id: req.params.id },
      data: payload,
      include: {
        owner: {
          select: { id: true, name: true, email: true, role: true }
        }
      }
    });

    return res.json(client);
  })
);

router.delete(
  "/clients/:id",
  authenticate,
  requireRoles(UserRole.ADMIN),
  asyncHandler(async (req, res) => {
    await prisma.client.delete({ where: { id: req.params.id } });
    return res.status(204).send();
  })
);

module.exports = router;
