require("dotenv").config();

function parseOrigins(raw) {
  return String(raw || "")
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean);
}

const config = {
  port: Number(process.env.PORT || 4000),
  jwtSecret: String(process.env.JWT_SECRET || "change-this-in-production"),
  corsOrigins: parseOrigins(process.env.CORS_ORIGIN || "http://127.0.0.1:5500,http://localhost:5500"),
  bcryptRounds: Number(process.env.BCRYPT_ROUNDS || 10)
};

module.exports = { config };
