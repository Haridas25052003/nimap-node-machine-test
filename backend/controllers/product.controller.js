const db = require('../config/db');

// list products with pagination
exports.getAllProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const sql = `
    SELECT p.product_id, p.product_name,
           c.category_id, c.category_name
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    LIMIT ? OFFSET ?
  `;

  db.query(sql, [pageSize, offset], (err, results) => {
    if (err) return res.status(500).send('Error');
    res.render('products', { products: results, page });
  });
};

// add product
exports.createProduct = (req, res) => {
  const { product_name, category_id } = req.body;

  db.query(
    'INSERT INTO products (product_name, category_id) VALUES (?, ?)',
    [product_name, category_id],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/products?page=1');
    }
  );
};

// update product
exports.updateProduct = (req, res) => {
  const { product_name, category_id } = req.body;
  const { id } = req.params;

  db.query(
    'UPDATE products SET product_name = ?, category_id = ? WHERE product_id = ?',
    [product_name, category_id, id],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/products?page=1');
    }
  );
};

// delete product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query(
    'DELETE FROM products WHERE product_id = ?',
    [id],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/products?page=1');
    }
  );
};
