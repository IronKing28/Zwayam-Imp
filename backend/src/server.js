const app = require("./app");
const { config } = require("./lib/config");
const prisma = require("./lib/prisma");

const server = app.listen(config.port, () => {
  console.log(`API server running on http://localhost:${config.port}`);
});

async function shutdown(signal) {
  console.log(`Received ${signal}. Closing server...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
