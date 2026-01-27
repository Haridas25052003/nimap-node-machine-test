require('./config/db');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const categoryRoutes = require('./routes/category.routes');
app.set('view engine', 'ejs');



//middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/categories', categoryRoutes);



//basic routes for test
app.get('/',(req,res)=>{
    res.send('backend server is running');
});

//start server
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});