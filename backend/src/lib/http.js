function normalizePrismaError(error) {
  if (!error || typeof error !== "object") return null;
  if (error.code === "P2002") return { status: 409, message: "Duplicate value violates unique constraint." };
  if (error.code === "P2025") return { status: 404, message: "Record not found." };
  return null;
}

function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

module.exports = { normalizePrismaError, asyncHandler };
