const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("product", productSchema);
