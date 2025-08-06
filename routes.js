const express=require('express');
const router=express.Router();
const controller=require('./controllers');


router.post('/students', controller.createStudent);   // Create
router.get('/students', controller.getStudents);      // Read all
//router.get('/students/:id', controller.getStudent);   // Read one
//router.put('/students/:id', controller.updateStudent);// Update
//router.delete('/students/:id', controller.deleteStudent); // Delete


router.get('/students/:id',controller.getStudent);
router.put('/students/:id',controller.updateStudent);
router.delete('/students/:id',controller.deleteStudent);

module.exports = router;