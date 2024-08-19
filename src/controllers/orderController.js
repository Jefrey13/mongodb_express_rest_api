import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus,
  } from '../services/orderService.js';
  
  export const create = async (req, res) => {
    try {
      const order = await createOrder({ ...req.body, user: req.user.id });
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getAll = async (req, res) => {
    try {
      const orders = await getOrders(req.user.id);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getById = async (req, res) => {
    try {
      const order = await getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const updateStatus = async (req, res) => {
    try {
      const order = await updateOrderStatus(req.params.id, req.body.status);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };  