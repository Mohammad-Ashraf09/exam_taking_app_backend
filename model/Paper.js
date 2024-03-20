const mongoose = require("mongoose");

const PaperSchema = new mongoose.Schema(
  {
    paperTitle: {
      type: String,
      required: true,
    },
    totalQuestion: {
      type: Number,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Paper", PaperSchema);
