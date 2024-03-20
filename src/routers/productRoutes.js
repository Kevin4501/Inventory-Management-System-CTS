const express = require("express");
const authenticateToken = require('../middleware/authenticateToken')
const router = express.Router();
const productController = require("../controllers/productControllers");
//const authenticateToken = require("../middleware/authenticateToken");

router.get('/products', authenticateToken, productController.getAllProducts);
router.get('/products/:category', authenticateToken, productController.getProductByCategory);
router.post('/products', authenticateToken, productController.createProduct); // Add createProduct controller
router.put('/products/:id', authenticateToken, productController.updateProduct); // Add updateProduct controller
router.delete('/products/:id', authenticateToken, productController.deleteProduct); // Add deleteProduct controller

module.exports = router;