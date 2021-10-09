const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  qty: {
    type: Number,
    default: 0,
  },
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItem;
