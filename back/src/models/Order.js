const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    dateOfRequest: String,
    dateOfDelivery: String,
    customer: String,
    description: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;