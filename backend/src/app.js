const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { config } = require("./lib/config");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const clientRoutes = require("./routes/clients");
const { normalizePrismaError } = require("./lib/http");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (config.corsOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true
  })
);
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", clientRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found." });
});

app.use((error, _req, res, _next) => {
  const prismaError = normalizePrismaError(error);
  if (prismaError) {
    return res.status(prismaError.status).json({ message: prismaError.message });
  }

  if (error && error.message && String(error.message).startsWith("CORS blocked")) {
    return res.status(403).json({ message: error.message });
  }

  console.error(error);
  return res.status(500).json({ message: "Internal server error." });
});

module.exports = app;
