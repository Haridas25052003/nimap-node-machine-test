const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');

router.get('/', controller.getAllCategories);
router.post('/add', controller.createCategory);
router.post('/edit/:id', controller.updateCategory);
router.get('/delete/:id', controller.deleteCategory);

module.exports = router;
