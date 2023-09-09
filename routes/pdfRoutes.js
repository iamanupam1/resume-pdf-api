const express = require("express");
const exportPDF = require("../controllers/pdfController");
const authenticateConsumer = require("../middleware/authMiddleware");
const cachePDFRequestPayload = require("../middleware/cacheMiddleware");
const router = express.Router();

router.post("/export", authenticateConsumer, cachePDFRequestPayload, exportPDF);

module.exports = router;
