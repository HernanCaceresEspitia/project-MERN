const User = require("../models/User");
const { findById } = require("../models/Vehicle");

module.exports = {
  getUsers: async () => {
    const users = await User.find();
    return users;
  },

  getUserById: async (id) => {
    const user = await User.findById(id);
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

  addVehicleTest: async (data) => {
    const { userId, vehicleId } = data;
    const user = await User.findById(userId);
    user.vehicle = vehicleId;
    await user.save();
    return user;
  },
};
