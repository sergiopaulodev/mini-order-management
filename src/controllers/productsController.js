// console.log('Model import:', require('../models/productModel')); //model importa lo que tiene que importar?

const { readProducts, writeProducts } = require('../models/productModel');

const getAllProducts = (req, res) => {
  //console.log('GET /products hit');//este console.log me asegura que getAllProducts sí se ejecuta
    const products = readProducts();
    res.json(products);
};

const createProduct = (req, res) => {

    //console.log('BODY:', req.body); log de debug

    const { name, price, stock } = req.body;

    if(!name || price == null || stock == null) {
        return res.status(400).json({error: 'name, price and stock are required'});
    }
    const products = readProducts();

    const newProduct = {
        id: Date.now().toString(),
        name,
        price,
        stock
    };

    products.push(newProduct);
    writeProducts(products);

    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {

    //console.log('PUT /products/:id BODY:', req.body); log de debug

    const { id } = req.params;
    const { name, price, stock } = req.body;

    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found'});
    }

    products[productIndex] = {
        ...products[productIndex],
        name: name ?? products[productIndex].name,
        price: price ?? products[productIndex].price,
        stock: stock ?? products[productIndex].stock
    };
    
    writeProducts(products);
    res.json(products[productIndex]);
};


module.exports = {
    getAllProducts,
    createProduct,
    updateProduct
};