const User = require("../models/User");
const { createOrder } = require("./orderService");

module.exports = {
  getUsers: async () => {
    const users = await User.find();
    return users;
  },

  getUserById: async (id) => {
    const user = await User.findById(id).populate("orders");
    return user;
  },

  findUserByName: async (name) => {
    const user = await User.findOne({ name });
    return user;
  },

  createUser: async (user) => {
    const newUser = await User.create(user);
    return newUser;
  },

  addOrder: async (data) => {
    const {
      userId,
      dateOfRequest,
      dateOfDelivery,
      customer,
      description,
    } = data;
    const user = await User.findById(userId);
    const order = await createOrder({
      dateOfRequest,
      dateOfDelivery,
      customer,
      description,
    });
    user.orders.push(order);
    await user.save();
    return user;
  },
};
