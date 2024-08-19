import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  } from '../services/productService.js';
  
  export const create = async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getAll = async (req, res) => {
    try {
      const products = await getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getById = async (req, res) => {
    try {
      const product = await getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const update = async (req, res) => {
    try {
      const product = await updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const remove = async (req, res) => {
    try {
      await deleteProduct(req.params.id);
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };  