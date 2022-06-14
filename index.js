const express = require("express");
const app = express();
const PORT = 3000;


const adminRoute = express.Router();

// Admin route
adminRoute.get("/dashboard",(req,res)=>{
    console.log(req.baseUrl);
    res.send("You are at Admin route");
})
// Home route 
app.get('/',(req,res)=>{
    console.log(req.baseUrl)
    res.send("You are at home route")
})
// 
app.use('/admin',adminRoute)
// Home route with post method
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("You are at home with  post method")
})

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})