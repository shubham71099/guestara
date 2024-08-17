const express = require('express');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/category');
const subCategoryRoutes = require('./routes/subCategory');
const itemRoutes = require('./routes/item');

const app = express();
dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
