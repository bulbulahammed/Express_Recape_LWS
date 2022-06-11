const express = require("express");
const app = express();
const PORT = 3000;

// Home route 
app.get('/',(req,res)=>{
    res.send("You are at home route")
})
// app.use express.json
app.use(express.raw());
// Home route with post method
// toString to convert the buffer
app.post('/',(req,res)=>{
    console.log(req.body.toString());
    res.send("You are at home with  post method")
})

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})