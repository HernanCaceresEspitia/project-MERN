const mongoose = require("mongoose");
const Order = require("../models/Order");

const validateOrder = async (req, res, next) => {
  const { orderId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    return next({ message: "Formato de ID no válido", statusCode: 400 });
  }
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return next({ message: "Orden no encontrada", statusCode: 404 });
    }
    next();
  } catch (error) {
    next({ message: "Error al validar la orden", statusCode: 500 });
  }
};

module.exports = validateOrder;
