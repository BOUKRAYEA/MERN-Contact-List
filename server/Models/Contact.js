const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

module.exports = Contact = mongoose.model("contact", contactSchema);
