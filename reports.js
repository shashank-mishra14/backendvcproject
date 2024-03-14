const mongoose = require("mongoose");

const reportsSchema = mongoose.Schema({
  title: String,
  category: String,
  subcategory: String,
  author: String,
  year: String,
  imgsrc: String,
  link: String,
  month: String,
});

module.exports = mongoose.model("reports", reportsSchema);
