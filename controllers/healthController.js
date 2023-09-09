const healthCheck = (req, res) => {
  res.status(200).json({ message: "Health Check Passed" });
};

module.exports = healthCheck;
