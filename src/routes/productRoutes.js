const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
    updateProduct
} = require('../controllers/productsController');

// console.log('Product routes loaded'); //este console.log me dice que las rutas estan bien montadas

router.get('/products', getAllProducts);
router.post('products', createProduct);
router.put('products/:id', updateProduct);

module.exports = router;

