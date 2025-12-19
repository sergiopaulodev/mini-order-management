const express = require('express');
const router = express.Router();
const { getAllOrders, createOrder } = require('../controllers/ordersController');


router.get('/orders', getAllOrders);
router.post('/orders', createOrder);

module.exports = router;