const express = require("express");
const bcrypt = require("bcryptjs");
const { z } = require("zod");
const { UserRole } = require("@prisma/client");
const prisma = require("../lib/prisma");
const { config } = require("../lib/config");
const { authenticate, requireRoles } = require("../middleware/auth");
const { asyncHandler } = require("../lib/http");

const router = express.Router();

const createUserSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.nativeEnum(UserRole).default(UserRole.CLIENT),
  accessDisabled: z.boolean().optional()
});

const updateUserSchema = z.object({
  name: z.string().min(1).max(120).optional(),
  role: z.nativeEnum(UserRole).optional(),
  accessDisabled: z.boolean().optional(),
  password: z.string().min(6).optional()
});

router.get(
  "/users",
  authenticate,
  requireRoles(UserRole.ADMIN),
  asyncHandler(async (_req, res) => {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        accessDisabled: true,
        createdAt: true,
        updatedAt: true
      }
    });
    res.json(users);
  })
);

router.post(
  "/users",
  authenticate,
  requireRoles(UserRole.ADMIN),
  asyncHandler(async (req, res) => {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid user payload.", details: parsed.error.flatten() });
    }

    const data = parsed.data;
    const email = data.email.trim().toLowerCase();
    const rounds = Number.isFinite(config.bcryptRounds) ? config.bcryptRounds : 10;
    const passwordHash = await bcrypt.hash(data.password, rounds);

    const user = await prisma.user.create({
      data: {
        name: data.name.trim(),
        email,
        role: data.role,
        accessDisabled: Boolean(data.accessDisabled),
        passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        accessDisabled: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return res.status(201).json(user);
  })
);

router.patch(
  "/users/:id",
  authenticate,
  requireRoles(UserRole.ADMIN),
  asyncHandler(async (req, res) => {
    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid user payload.", details: parsed.error.flatten() });
    }

    const payload = { ...parsed.data };
    if (payload.password) {
      const rounds = Number.isFinite(config.bcryptRounds) ? config.bcryptRounds : 10;
      payload.passwordHash = await bcrypt.hash(payload.password, rounds);
      delete payload.password;
    }

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: payload,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        accessDisabled: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return res.json(user);
  })
);

router.delete(
  "/users/:id",
  authenticate,
  requireRoles(UserRole.ADMIN),
  asyncHandler(async (req, res) => {
    if (req.params.id === req.auth.sub) {
      return res.status(400).json({ message: "You cannot delete your own account." });
    }
    await prisma.user.delete({ where: { id: req.params.id } });
    return res.status(204).send();
  })
);

module.exports = router;
