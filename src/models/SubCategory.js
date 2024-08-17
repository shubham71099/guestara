const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('SubCategory', subCategorySchema);
