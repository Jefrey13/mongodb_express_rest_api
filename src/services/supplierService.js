import Supplier from '../models/supplierModel.js';

export const createSupplier = async (supplierData) => {
  const supplier = new Supplier(supplierData);
  await supplier.save();
  return supplier;
};

export const getSuppliers = async () => {
  return await Supplier.find();
};