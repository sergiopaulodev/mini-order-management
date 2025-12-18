const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
    updateProduct
} = require('../controllers/productsController');

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);

module.exports = router;

