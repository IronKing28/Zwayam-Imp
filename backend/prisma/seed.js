require("dotenv").config();
const bcrypt = require("bcryptjs");
const { PrismaClient, UserRole } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const adminEmail = String(process.env.ADMIN_EMAIL || "admin@example.com").trim().toLowerCase();
  const adminPassword = String(process.env.ADMIN_PASSWORD || "ChangeMe123!").trim();
  const rounds = Number(process.env.BCRYPT_ROUNDS || 10);

  if (!adminEmail || !adminPassword) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required for seed.");
  }

  const passwordHash = await bcrypt.hash(adminPassword, Number.isFinite(rounds) ? rounds : 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: "Admin",
      role: UserRole.ADMIN,
      accessDisabled: false,
      passwordHash
    },
    create: {
      email: adminEmail,
      name: "Admin",
      role: UserRole.ADMIN,
      accessDisabled: false,
      passwordHash
    }
  });

  console.log("Seeded admin user:", admin.email);
}

main()
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
