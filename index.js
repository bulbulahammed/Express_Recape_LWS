const express = require("express");
const app = express();
const PORT = 3000;

// Home route 
app.get('/',(req,res)=>{
    res.send("You are at home route")
})
// app.use express.json
app.use(express.text());
// Home route with post method
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("You are at home with  post method")
})

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})