const mongosoe = require("mongoose");

// Define Schema
const CategorySchema = mongosoe.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongosoe.model("Category", CategorySchema);
