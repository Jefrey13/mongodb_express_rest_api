import Product from '../models/productModel.js';

export const createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

export const getProducts = async () => {
  return await Product.find().populate('category').populate('brand');
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId).populate('category').populate('brand');
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const updateProduct = async (productId, updateData) => {
  const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};