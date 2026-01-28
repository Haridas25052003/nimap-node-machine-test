require('./config/db');

const express = require('express');
const app = express();

const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');

app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// routes
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Backend server running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
