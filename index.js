const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");


//  implement Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 
app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/register.html");
})


// Send html file to the backend with post method
app.post("/register",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`<h2>Your Name: ${name}, age: ${age}.</h2>`);
});

app.get("/",(req,res)=>{
    res.send("You are at Home Page");
});


app.listen(PORT,()=>{
    console.log(`Your Server is running at localhost:${PORT}`);
})



