const express = require("express");
const app = express();
const PORT = 3000;


// Home route 
app.get('/',(req,res)=>{
    console.log(req.baseUrl)
    res.send("You are at home route")
})

const errHandler = (err,req,res,next)=>{
    console.log(err);
    res.status(500).send("There is a problem in server side");
};

app.use(errHandler);

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})