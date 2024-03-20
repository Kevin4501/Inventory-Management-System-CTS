const productService = require('../services/productServices');
const verifyToken = require('../middleware/authenticateToken');

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await productService.getProductByCategory(category);
    if (!products) return res.status(404).json({ message: 'No products found in this category' });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  const { productId, category, name, description, units } = req.body;
  try {
    console.log(req.body)
    const newProduct = await productService.createProduct({ productId, category, name, description, units });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle specific errors (e.g., validation)
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updatedProduct = await productService.updateProduct(id, updates);
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle specific errors (e.g., validation)
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};