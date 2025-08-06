const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Password@12345',
    database:'school'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected');
})

module.exports=db;