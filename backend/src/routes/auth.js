const express = require("express");
const bcrypt = require("bcryptjs");
const { z } = require("zod");
const { UserRole } = require("@prisma/client");
const prisma = require("../lib/prisma");
const { signToken } = require("../lib/security");
const { asyncHandler } = require("../lib/http");

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

function normalizeClientConfig(config) {
  if (!config || typeof config !== "object" || Array.isArray(config)) return {};
  if (config.snapshot && typeof config.snapshot === "object" && !Array.isArray(config.snapshot)) {
    return config.snapshot;
  }
  return config;
}

function normalizeClientUsers(users) {
  if (!Array.isArray(users)) return [];
  return users
    .map(user => ({
      name: String(user && user.name ? user.name : "").trim(),
      email: String(user && user.email ? user.email : "").trim().toLowerCase(),
      password: String(user && user.password ? user.password : ""),
      accessDisabled: Boolean(user && user.accessDisabled)
    }))
    .filter(user => Boolean(user.email));
}

function getClientCredentialBundle(client) {
  const payload = normalizeClientConfig(client.config);
  return {
    loginEmail: String(payload.loginEmail || "").trim().toLowerCase(),
    loginPassword: String(payload.loginPassword || ""),
    forcePasswordReset: Boolean(payload.forcePasswordReset),
    clientUsers: normalizeClientUsers(payload.clientUsers)
  };
}

async function authenticateClientFromConfig(email, password) {
  const candidateClients = await prisma.client.findMany({
    where: { accessDisabled: false },
    select: {
      id: true,
      name: true,
      config: true
    }
  });

  for (const client of candidateClients) {
    const creds = getClientCredentialBundle(client);
    if (creds.loginEmail === email) {
      if (creds.forcePasswordReset) {
        return {
          client,
          email: creds.loginEmail,
          actorName: client.name || "Client",
          requiresPasswordReset: true
        };
      }
      if (creds.loginPassword !== password) {
        return null;
      }
      return {
        client,
        email: creds.loginEmail,
        actorName: client.name || "Client",
        requiresPasswordReset: false
      };
    }

    const matchedSubUser = creds.clientUsers.find(user => user.email === email);
    if (matchedSubUser) {
      if (matchedSubUser.accessDisabled) {
        return null;
      }
      if (matchedSubUser.password !== password) {
        return null;
      }
      return {
        client,
        email: matchedSubUser.email,
        actorName: matchedSubUser.name || client.name || "Client User",
        requiresPasswordReset: false
      };
    }
  }

  return null;
}

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid login payload.", details: parsed.error.flatten() });
    }

    const email = parsed.data.email.trim().toLowerCase();
    const password = parsed.data.password;
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && user.accessDisabled) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (user) {
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ message: "Invalid credentials." });

      const token = signToken(user);
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      });
    }

    const clientAuth = await authenticateClientFromConfig(email, password);
    if (!clientAuth) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = signToken(
      {
        id: clientAuth.client.id,
        email: clientAuth.email,
        role: UserRole.CLIENT,
        name: clientAuth.actorName
      },
      {
        clientId: clientAuth.client.id,
        authType: "client_config"
      }
    );

    return res.json({
      token,
      user: {
        id: clientAuth.client.id,
        email: clientAuth.email,
        name: clientAuth.actorName,
        role: UserRole.CLIENT,
        clientId: clientAuth.client.id,
        requiresPasswordReset: clientAuth.requiresPasswordReset
      }
    });
  })
);

module.exports = router;
