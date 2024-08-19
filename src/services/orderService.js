import Order from '../models/orderModel.js';

export const createOrder = async (orderData) => {
  const order = new Order(orderData);
  await order.save();
  return order;
};

export const getOrders = async (userId) => {
  return await Order.find({ user: userId }).populate('products.product');
};

export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate('products.product');
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};

export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};