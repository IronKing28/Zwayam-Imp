const jwt = require("jsonwebtoken");
const { config } = require("./config");

function signToken(subject, overrides = {}) {
  const payload = {
    sub: subject.id || subject.sub,
    email: subject.email,
    role: subject.role,
    name: subject.name,
    ...overrides
  };
  return jwt.sign(
    payload,
    config.jwtSecret,
    { expiresIn: "12h" }
  );
}

module.exports = { signToken };
