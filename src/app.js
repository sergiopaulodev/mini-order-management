const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

//middleware para parsar JSON (global)
app.use(express.json());

//rutas
app.use('/', healthRoutes);

module.exports = app;