const Product = require('../models/ProductModels');

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getProductByCategory = async (category) => {
  try {
    const products = await Product.find({ category });
    return products;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  try {
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateProduct = async (id, updates) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    return updatedProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllProducts,
  getProductByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};