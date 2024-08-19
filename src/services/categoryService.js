import Category from '../models/categoryModel.js';

export const createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  await category.save();
  return category;
};

export const getCategories = async () => {
  return await Category.find();
};