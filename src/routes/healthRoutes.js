const express = require('express');
const router = express.Router();

const { healthCheck} = require('../controllers/healthCotrollers');

router.get('/health', healthCheck);

module.exports = router;