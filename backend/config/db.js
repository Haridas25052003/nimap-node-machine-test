const mysql=require('mysql2');

//database connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'nimap_db'
});

db.connect((err)=>{
    if(err){
        console.error('MySQL connection failed:', err);
    }
    else{
        console.log('MySQL connected successfully');
    }
});

module.exports=db;