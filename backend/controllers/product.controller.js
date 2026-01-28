const db=require('../config/db');
exports.getAllProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const sql = `
    SELECT 
      p.product_id,
      p.product_name,
      c.category_id,
      c.category_name
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    LIMIT ? OFFSET ?
  `;

  db.query(sql, [pageSize, offset], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching paginated products');
    } else {
      res.json({
        page,
        pageSize,
        data: results
      });
    }
  });
};


exports.createProduct = (req, res) => {
  const { product_name, category_id } = req.body;

  const sql = 'INSERT INTO products (product_name, category_id) VALUES (?, ?)';

  db.query(sql, [product_name, category_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding product');
    } else {
      res.send('Product added successfully');
    }
  });
};

exports.updateProduct = (req, res) => {
  const { product_name, category_id } = req.body;
  const { id } = req.params;

  const sql = `
    UPDATE products 
    SET product_name = ?, category_id = ? 
    WHERE product_id = ?
  `;

  db.query(sql, [product_name, category_id, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating product');
    } else {
      res.send('Product updated successfully');
    }
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM products WHERE product_id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting product');
    } else {
      res.send('Product deleted successfully');
    }
  });
};
