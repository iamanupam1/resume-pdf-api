const User = require("../models/user");

const cachePDFRequestPayload = async (req, res, next) => {
  const { data } = req.body;
  if (!data.pdfContent) {
    res.status(400).json({ data: "Invalid Payload" });
  }
  try {
    const { pdfContent } = data;
    await User.findOneAndUpdate(
      {
        name: pdfContent.header.name,
        email: pdfContent.header.email,
        phone: pdfContent.header.phone,
      },
      {
        name: pdfContent.header.name,
        position: pdfContent.header.position,
        email: pdfContent.header.email,
        phone: pdfContent.header.phone,
        section: pdfContent.section,
      },
      { upsert: true, new: true }
    );
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = cachePDFRequestPayload;
