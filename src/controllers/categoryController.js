const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
    const { name, image, description, taxApplicability, tax, taxType } = req.body;

    try {
        const category = new Category({ name, image, description, taxApplicability, tax, taxType });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('subCategories');
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('subCategories');
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
