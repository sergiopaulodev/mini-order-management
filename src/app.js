const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

//middleware para parsar JSON (global)
app.use(express.json());

//rutas
app.use('/', healthRoutes);
app.use('/', productRoutes);
app.use('/', orderRoutes);

module.exports = app;