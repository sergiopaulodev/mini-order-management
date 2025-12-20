const { readOrders, writeOrders } = require('../models/orderModel');

const getAllOrders = (req, res) =>{
    const orders = readOrders();
    res.json(orders);
    }

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

const updateOrdersStatus = (req, res) => {

    if (!req.params || !req.params.id) {
        return res.status(400).json({ error: 'Order id is required'});
    }


    const id = req.params.id;


    const { status } = req.body;

    const allowedStatuses = ['pending','processed','shipped', 'cancelled'];
    


    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid order status'});
        }
    const orders = readOrders();
    const orderIndex = orders.findIndex(o => o.id === id);
    
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Order not found'});
        }
    const currentStatus = orders[orderIndex].status;

    const allowedTransitions = {
        pending:['processed', 'cancelled'],
        processed:['shipped', 'cancelled'],
        shipped: [],
        cancelled:[]
        };
    
    if(!allowedTransitions[currentStatus].includes(status)){
        return res.status(400).json({
             error: `Cannot change status from ${currentStatus} to ${status}`
            });
        }

    orders[orderIndex].status = status;
    writeOrders(orders);

    res.json(orders[orderIndex]);

    };

module.exports = {
    getAllOrders,
    createOrder,
    updateOrdersStatus
};
