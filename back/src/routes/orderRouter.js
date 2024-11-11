const { Router } = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = Router();

orderRouter.get("/", orderController.getAllOrders);
orderRouter.post("/", orderController.createOrder);

module.exports = orderRouter;
