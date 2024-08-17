const Item = require('../models/Item'); 

exports.searchItemByName = async (req, res) => {
    const { name } = req.query;

    try {
        const items = await Item.find({ name: new RegExp(name, 'i') });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
