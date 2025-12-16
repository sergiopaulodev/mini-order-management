const express = require('express');

const app = express();

//middleware para parsar JSON
app.use(express.json());

module.exports = app;