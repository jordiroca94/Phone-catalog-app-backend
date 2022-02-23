const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  brand: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: Array, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Phone", phoneSchema)