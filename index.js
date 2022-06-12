// Example of sub path mount
const express = require("express");
// Create app
const app = express();
// Create sub app
const admin = express();
const PORT = 3000;

// Home route
app.get('/',(req,res)=>{
    res.send("You are at app's home route")
});

// Admin Dashboard route
admin.get("/dashboard",(req,res)=>{
    res.send("Welcome to Dashboard")
});

app.use("/admin", admin)


app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})