const authenticateConsumer = (req, res, next) => {
  const { headers } = req;
  if (!headers["x-api-token"]) {
    res.status(401).json({ data: "Invalid Consumer" });
  }
  if (headers["x-api-token"] !== process.env.X_API_TOKEN) {
    res.status(401).json({ data: "Invalid API Token" });
  }
  next();
};

module.exports = authenticateConsumer;
