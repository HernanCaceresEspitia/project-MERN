const orderService = require("../services/orderService");
const catchAsync = require("../Utils/catchAsync");

const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

const createOrder = async (req, res) => {
  const { dateOfRequest, dateOfDelivery, customer, description } = req.body;
  const newOrder = await orderService.createOrder({
    dateOfRequest,
    dateOfDelivery,
    customer,
    description,
  });
  res.status(201).json(newOrder);
};

const updateOrder = async (req, res) => {
  const { orderId, newDateOfDelivery, newDescription } = req.body;
  const updatedOrder = await orderService.updateOrder({
    orderId,
    newDateOfDelivery,
    newDescription,
  });
  res.status(202).json(updatedOrder);
};

const orderAcomplished = async (req, res) => {
  const { orderId } = req.params;
  const order = await orderService.orderAcomplished(orderId);
  res.status(202).json(order);
};

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await orderService.deleteOrder(orderId);
  res.status(200).json(order);
};

module.exports = {
  getAllOrders: catchAsync(getAllOrders),
  createOrder: catchAsync(createOrder),
  updateOrder: catchAsync(updateOrder),
  orderAcomplished: catchAsync(orderAcomplished),
  deleteOrder: catchAsync(deleteOrder),
};
