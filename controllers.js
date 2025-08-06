const db=require('./db');

exports.createStudent=(req,res)=>{
   const{first_name,last_name,mobile,email,dob,address}=req.body;

   const sql='INSERT INTO students(first_name,last_name,mobile,email,dob,address) VALUES(?,?,?,?,?,?)';
   db.query(sql, [first_name,last_name,mobile,email,dob,address], (err,result)=>{
    if(err) return res.status(500).send(err);
    res.send({success:true,message:'Student created',id:result.insertId});
    });
};



exports.getStudents=(req,res)=>{
    db.query('SELECT * FROM students',(err,results)=>{
        if(err) return res.status(500).send(err);
        res.send(results)
    });
};

exports.getStudent=(req,res)=>{
    const {id}=req.params;
    db.query('SELECT * FROM students where id=?',[id],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.send(result[0]||{})
    });
};

exports.updateStudent=(req,res)=>{
    const{id}=req.params;
    const { first_name, last_name, mobile, email, dob, address } = req.body;
    const sql='UPDATE students SET first_name=?,last_name=?,mobile=?,email=?,dob=?,address=? where id=?';
    db.query(sql,[first_name, last_name, mobile, email, dob, address, id], (err,result)=>{
        if(err) return res.status(500).send(err);
         res.send({ success: true, message: 'Student updated' });
    });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true, message: 'Student deleted' });
  });
};
