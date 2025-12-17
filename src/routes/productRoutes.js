//    console.log('Product routes loaded'); //indica que el router está cargado


const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
    updateProduct
} = require('../controllers/productsController');

// console.log('Product routes loaded'); //este console.log me dice que las rutas estan bien montadas

router.get('/products', getAllProducts);
router.post('/products', 
   // (req,res,next) => {
   // console.log('POST /products hit'); //si el log no aparece la ruta no existe, si apareciera el problema estaría después
   // next();
   // },
     createProduct);
router.put('/products/:id', updateProduct);

module.exports = router;

