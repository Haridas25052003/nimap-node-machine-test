const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', controller.getAllProducts);
router.post('/add', controller.createProduct);
router.post('/edit/:id', controller.updateProduct);
router.get('/delete/:id', controller.deleteProduct);

module.exports = router;
