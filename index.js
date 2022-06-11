const express = require("express");
const app = express();
const PORT = 3000;
const router = express.Router();


// use router in app
app.use(router);

// Home route 
router.get('/',(req,res)=>{
    res.send("You are at home route, using the express router")
})
// app.use express.json
app.use(express.static(__dirname + "/public/"));
// Home route with post method
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("You are at home with  post method")
})

app.listen(PORT,()=>{
    console.log(`App is listening at localhost:${PORT}`)
})