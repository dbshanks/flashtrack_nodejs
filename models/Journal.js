const mongoose = require("mongoose");

const JournalSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
  },
});

module.exports = mongoose.model("journal", JournalSchema);
