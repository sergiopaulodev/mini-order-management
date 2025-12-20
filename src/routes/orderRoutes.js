const express = require('express');
const router = express.Router();
const { getAllOrders, createOrder,updateOrdersStatus } = require('../controllers/ordersController');


router.get('/orders', getAllOrders);
router.post('/orders', createOrder);
router.put('/orders/:id/status', updateOrdersStatus);


module.exports = router;