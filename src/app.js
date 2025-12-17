const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

//middleware para parsar JSON (global)
app.use(express.json());

//rutas
app.use('/', healthRoutes);
app.use('/', productRoutes);

module.exports = app;