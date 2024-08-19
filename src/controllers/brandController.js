import { createBrand, getBrands } from '../services/brandService.js';

export const create = async (req, res) => {
  try {
    const brand = await createBrand(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const brands = await getBrands();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};