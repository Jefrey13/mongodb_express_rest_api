import { createShipping, getShippings } from '../services/shippingService.js';

export const create = async (req, res) => {
  try {
    const shipping = await createShipping(req.body);
    res.status(201).json(shipping);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const shippings = await getShippings();
    res.status(200).json(shippings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};