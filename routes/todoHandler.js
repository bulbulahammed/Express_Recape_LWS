const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = mongoose.model("Todo", todoSchema);


// Get all the todo
router.get('/',async(req,res)=>{
    res.send("You will see to do here")
});
// Post A the todo
router.post('/', async(req,res)=>{
   const newTodo = new Todo(req.body);
   await newTodo.save((err)=>{
    if(err){
        res.status(500).json({
            error: "There is a server side error"
        });
    }else{
        res.status(200).json({
            message: "Todo inserted successfully!"
        });
    }
   });
});


// Get A the todo by ID
router.get('/:id',async(req,res)=>{
    
});


// Post multiple todo
router.post('/all',async(req,res)=>{

});

// update a todo
router.put('/:id',async(req,res)=>{
    
});

// Delete a todo
router.delete('/:id',async(req,res)=>{
    
});

module.exports = router;