const puppeteer = require("puppeteer");
const PDF_TEMPLATES = require("../template/pdfTemplates");
const ejs = require("ejs");
const exportPDF = async (req, res) => {
  try {
    const { body } = req;
    const { templateType, data } = body;
    if (!data.pdfContent) {
      res.status(400).json({ data: "Invalid Payload" });
    }
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    const pdfTemplate = pdfTemplateBuilder(templateType);
    const htmlContent = ejs.render(pdfTemplate, {
      contextData: data,
    });
    const outputFileName = data.pdfContent?.header?.name || "Resume";
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${outputFileName}.pdf`
    );
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json("Error generating PDF");
  }
};

const pdfTemplateBuilder = (templateType) => {
  switch (templateType) {
    case "hero":
      break;

    default:
      return PDF_TEMPLATES["default"];
  }
};

module.exports = exportPDF;
