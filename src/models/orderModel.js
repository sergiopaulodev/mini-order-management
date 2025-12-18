//Leer y escribir pedido
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/orders.json');

const readOrders = () => {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
    };

const writeOrders = (orders) => {
    fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));
    };

module.exports = {
    readOrders,
    writeOrders
    };