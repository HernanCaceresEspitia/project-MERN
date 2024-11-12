const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  dateOfRequest: String,
  dateOfDelivery: String,
  customer: String,
  description: String,
  status: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
