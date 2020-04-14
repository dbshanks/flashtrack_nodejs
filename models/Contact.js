const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
