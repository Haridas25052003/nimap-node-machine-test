const express=require('express');
const router= express.Router();
const productController= require('../controllers/product.controller');

router.get('/',productController.getAllProducts);
router.post('/add', productController.createProduct);
router.post('/edit/:id', productController.updateProduct);
router.get('/delete/:id', productController.deleteProduct);

module.exports=router;