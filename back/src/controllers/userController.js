const usersService = require("../services/userService");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await usersService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      error = { message: error };
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await usersService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserByName: async (req, res) => {
    const { name } = req.body;
    const user = await usersService.findUserByName(name);
    res.status(200).json(user);
  },

  createUser: async (req, res) => {
    const { name, email, age } = req.body;
    const newUser = await usersService.createUser({ name, email, age });
    res.status(201).json(newUser);
  },

  addVehicleToUser: async (req, res) => {
    const { userId, vehicleId } = req.body;
    usersService.addVehicleTest({ userId, vehicleId });
    res.status(200).json({ message: "Todo correcto" });
  },
};
