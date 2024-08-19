import Brand from '../models/brandModel.js';

export const createBrand = async (brandData) => {
  const brand = new Brand(brandData);
  await brand.save();
  return brand;
};

export const getBrands = async () => {
  return await Brand.find();
};