export function validateCompletedQuery(req, res, next) {
  const { completed } = req.query;

  if (completed === undefined) {
    req.completedFilter = undefined;
    return next();
  }

  if (completed === "true") {
    req.completedFilter = true;
    return next();
  }

  if (completed === "false") {
    req.completedFilter = false;
    return next();
  }

  return res.status(400).json({ error: "Invalid completed query parameter" });
}