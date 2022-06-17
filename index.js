const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const todoHandler = require("./routes/todoHandler");

app.use(express.json());

// Home route 
app.get('/',(req,res)=>{
    res.send("You are at home route")
});

// mongoose connect
mongoose.connect('mongodb://localhost/todos',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("connection successful"))
.catch(err=> console.log(err))


// Default Error handler
function errHandler (err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error:err});
};

// app route
app.use("/todo", todoHandler);

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})