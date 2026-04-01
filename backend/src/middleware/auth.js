const jwt = require("jsonwebtoken");
const { config } = require("../lib/config");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid authorization token." });
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    req.auth = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

function requireRoles(...roles) {
  return (req, res, next) => {
    const role = req.auth && req.auth.role;
    if (!role || !roles.includes(role)) {
      return res.status(403).json({ message: "Access denied." });
    }
    return next();
  };
}

module.exports = { authenticate, requireRoles };
