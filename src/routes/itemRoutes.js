const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/category/:categoryId', itemController.getItemsByCategory);
router.get('/subcategory/:subCategoryId', itemController.getItemsBySubCategory);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.get('/search', itemController.searchItemByName);

module.exports = router;
