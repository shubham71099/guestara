const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

// Create a new sub-category under a specific category
router.post('/:categoryId', subCategoryController.createSubCategory);

// Get all sub-categories
router.get('/', subCategoryController.getSubCategories);

// Get all sub-categories under a specific category
router.get('/category/:categoryId', subCategoryController.getSubCategoriesByCategory);

// Get a specific sub-category by ID
router.get('/:id', subCategoryController.getSubCategoryById);

// Update a sub-category
router.put('/:id', subCategoryController.updateSubCategory);

module.exports = router;
