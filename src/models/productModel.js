const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    const data = fs.readFileSync(dataPath,'utf-8');
    return JSON.parse(data);
    };

const writeProducts = (products) => {
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    };

module.exports = {
    readProducts,
    writeProducts
    };