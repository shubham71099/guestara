const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    taxType: { type: String },
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }]
});

module.exports = mongoose.model('Category', categorySchema);
