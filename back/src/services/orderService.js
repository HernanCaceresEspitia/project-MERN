const Order = require("../models/Order");

module.exports = {
  //* Obtener todas las órdenes

  getAllOrders: async () => {
    const orders = await Order.find();
    if (!orders) {
      return "No hay órdenes existentes";
    }
    return orders;
  },

  //* Crear una orden

  createOrder: async (order) => {
    const newOrder = await Order.create(order);
    return newOrder;
  },

  //* Modificar una orden

  updateOrder: async (data) => {
    const { orderId, newDateOfDelivery, newDescription } = data;
    const order = await Order.findById(orderId);
    if(!order){
      return "Orden inexistente"
    }
    order.dateOfDelivery = newDateOfDelivery;
    order.description = newDescription;
    await order.save();
    return order;
  },

  //* Cambiar de status de orden

  orderAcomplished: async (orderId) => {
    const order = await Order.findById(orderId);
    if(!order){
      return "Orden inexistente"
    }
    order.status = false; //Orden completada
    await order.save();
    return order;
  },

  //* Eliminado lógico de la orden

  deleteOrder: async (id) => {
    const order = await Order.findById(id);
    if(!order){
      return "Orden inexistente"
    }
    order.isDeleted = true;
    await order.save();
    return `Orden ${id} eliminada exitosamente`;
  },
};
