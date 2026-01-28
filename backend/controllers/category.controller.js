const db = require('../config/db');

// list categories
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).send('Error');
    res.render('categories', { categories: results });
  });
};

// add category
exports.createCategory = (req, res) => {
  const { category_name } = req.body;
  db.query(
    'INSERT INTO categories (category_name) VALUES (?)',
    [category_name],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/categories');
    }
  );
};

// update category
exports.updateCategory = (req, res) => {
  const { category_name } = req.body;
  const { id } = req.params;

  db.query(
    'UPDATE categories SET category_name = ? WHERE category_id = ?',
    [category_name, id],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/categories');
    }
  );
};

// delete category
exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  db.query(
    'DELETE FROM categories WHERE category_id = ?',
    [id],
    err => {
      if (err) return res.status(500).send('Error');
      res.redirect('/categories');
    }
  );
};
