const express = require('express');
const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
    console.log(req.baseUrl);
    res.send("You are at home route")
})


app.get('/user/:id',(req,res)=>{
    res.send("You are at home route");
})

app.listen(PORT,()=>{
    console.log(`App listening at localhost:${PORT}`)
})