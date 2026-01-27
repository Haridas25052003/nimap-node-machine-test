const express =require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/',categoryController.getAllCategories);
router.post('/add', categoryController.createCategory);
router.post('/edit/:id', categoryController.updateCategory);
router.get('/delete/:id', categoryController.deleteCategory);

module.exports=router;