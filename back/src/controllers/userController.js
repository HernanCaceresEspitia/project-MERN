const usersService = require("../services/userService");
const catchAsync = require("../Utils/catchAsync");

const getUsers = async (req, res) => {
  const users = await usersService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  res.status(200).json(user);
};

const getUserByName = async (req, res) => {
  const { name } = req.body;
  const user = await usersService.findUserByName(name);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await usersService.createUser({ name, email, password });
  res.status(201).json(newUser);
};

const addOrder = async (req, res) => {
  const { userId, dateOfRequest, dateOfDelivery, customer, description } = req.body;
  const newOrder = await usersService.addOrder({ userId, dateOfRequest, dateOfDelivery, customer, description });
  res.status(200).json(newOrder);
};

module.exports = {
  getUsers: catchAsync(getUsers),
  getUserById: catchAsync(getUserById),
  getUserByName: catchAsync(getUserByName),
  createUser: catchAsync(createUser),
  addOrder: catchAsync(addOrder)
};
