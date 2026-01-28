# Node.js Machine Test – Category & Product Management

This project is developed as part of a **Node.js Machine Test**.  
It implements **Category** and **Product** master modules with full CRUD operations, proper relational mapping, and **server-side pagination** using a relational database.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js  
- **View Engine:** EJS  
- **Database:** MySQL (RDBMS)  
- **Architecture:** MVC (Routes, Controllers, Views)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 📂 Features

### Category Master
- Add new categories
- Update existing categories
- Delete categories
- View category list

### Product Master
- Add new products
- Update product details
- Delete products
- Each product belongs to a category (Foreign Key)
- Displays:
  - Product ID
  - Product Name
  - Category ID
  - Category Name

### Pagination
- Server-side pagination implemented using SQL `LIMIT` and `OFFSET`
- Page size: **10 records per page**

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🗄️ Database Design

### Categories Table
- `category_id` (Primary Key)
- `category_name`

### Products Table
- `product_id` (Primary Key)
- `product_name`
- `category_id` (Foreign Key → categories.category_id)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🗂️ Database Setup

A SQL script is provided to easily create the required database and tables.

### Steps:
1. Open **MySQL Workbench** (or MySQL CLI)
2. Run the SQL file:
backend/schema.sql


This script will:
- Create the database
- Create `categories` and `products` tables
- Define the foreign key relationship

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd backend
2️⃣ Install Dependencies
npm install
3️⃣ Configure Database
Update MySQL credentials in:

config/db.js
4️⃣ Start the Server
npm run dev
You should see:

MySQL connected successfully
Server running on http://localhost:3000
🌐 Application URLs
Category Master
http://localhost:3000/categories
Product Master (with Pagination)
http://localhost:3000/products?page=1
