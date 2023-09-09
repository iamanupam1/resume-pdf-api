const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const pdfRouter = require("./routes/pdfRoutes");
const healthRouter = require("./routes/healthRoutes");

app.use(express.json());
app.use(morgan("dev"));

require("dotenv").config(); // Loads environment variables from .env
const mongoURL = process.env.MONGO_URI;

// DB Connection
mongoose
  .connect(mongoURL, {
    dbName: "resume-db",
  })
  .then(() => {
    console.log("Database Connection is Ready");
  })
  .catch((err) => {
    console.error(err);
  });
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Resume Builder API" });
});
app.use("/api/v1/pdf", pdfRouter);
app.use("/api/v1/health-check", healthRouter);

app.listen(8080, () => console.log("server running on port 8080"));
