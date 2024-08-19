import Warehouse from '../models/warehouseModel.js';

export const createWarehouse = async (warehouseData) => {
  const warehouse = new Warehouse(warehouseData);
  await warehouse.save();
  return warehouse;
};

export const getWarehouses = async () => {
  return await Warehouse.find();
};