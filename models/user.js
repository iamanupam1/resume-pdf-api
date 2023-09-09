const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  position: String,
  email: String,
  phone: String,
  section: Object,
});

module.exports = mongoose.model("User", userSchema);
