const Order = require("../models/Order");

module.exports = {
  getAllOrders: async () => {
    const orders = await Order.find();
    return orders;
  },

  createOrder: async (order) => {
    const newOrder = await Order.create(order);
    return newOrder;
  },
};
