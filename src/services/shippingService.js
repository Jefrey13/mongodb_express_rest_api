import Shipping from '../models/shippingModel.js';

export const createShipping = async (shippingData) => {
  const shipping = new Shipping(shippingData);
  await shipping.save();
  return shipping;
};

export const getShippings = async () => {
  return await Shipping.find().populate('order');
};