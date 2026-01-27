const db=require('../config/db');
exports.getAllCategories=(req,res)=>{
    const sql='select * from categories';

    db.query(sql,(err,results)=>{
        if(err){
            console.err(err);
            res.status(500).send('Database error');
        }
        else{
            res.json(results);
        }
    });
};

exports.createCategory = (req, res) => {
  const { category_name } = req.body;

  const sql = 'INSERT INTO categories (category_name) VALUES (?)';

  db.query(sql, [category_name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting category');
    } else {
      res.send('Category added successfully');
    }
  });
};

exports.updateCategory = (req, res) => {
  const { category_name } = req.body;
  const { id } = req.params;

  const sql = 'UPDATE categories SET category_name = ? WHERE category_id = ?';

  db.query(sql, [category_name, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating category');
    } else {
      res.send('Category updated successfully');
    }
  });
};

exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM categories WHERE category_id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Cannot delete category (it may be in use)');
    } else {
      res.send('Category deleted successfully');
    }
  });
};


