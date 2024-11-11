const orderService = require("../services/orderService");
const catchAsync = require("../Utils/catchAsync")

const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
}

const createOrder = async (req, res) => {
  const { dateOfRequest, dateOfDelivery, customer, description } = req.body;
  const newOrder = await orderService.createOrder({ dateOfRequest, dateOfDelivery, customer, description });
  res.status(201).json(newOrder);
}

module.exports = {
  getAllOrders: catchAsync(getAllOrders),
  createOrder: catchAsync(createOrder)
};
