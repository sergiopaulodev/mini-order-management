const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/ordersController');

router.post('/orders', createOrder);

module.exports = router;