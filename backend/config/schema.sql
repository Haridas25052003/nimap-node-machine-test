-- Create database
CREATE DATABASE nimap_db;
USE nimap_db;

-- Create categories table
CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

-- Create products table
CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  category_id INT NOT NULL,
  CONSTRAINT products_ibfk_1
    FOREIGN KEY (category_id)
    REFERENCES categories(category_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);
