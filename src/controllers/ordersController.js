const { readOrders, writeOrders } = require('../models/orderModel');

const createOrder = (req,res) => {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({error: 'Order must contain at least one item'});
        }

    const orders = readOrders();

    const newOrder = {
        id: Date.now().toString(),
        items,
        status:'pending',
        createdAt: new Date().toISOString()
    };

    orders.push(newOrder);
    writeOrders(orders);

    res.status(201).json(newOrder);
}

module.exports = {
    createOrder
};
