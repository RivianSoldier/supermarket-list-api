const mongoose = require("mongoose");

const listItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

module.exports = mongoose.model("List_Item", listItemSchema);
