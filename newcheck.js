
const express = require("express");
const path =require("path");
const app = express();
require("./db/conn");
const Register =require("./models/registers");
const port = process.env.PORT || 3000;


const static_path =path.join(__dirname, "../public" );


app.use(express.json());
//app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.set('view engine', 'hbs');



app.get("/", (req,res) =>{
    
    res.render('my');
});

app.post("/register", async(req,res) =>{
    try
    {
       console.log(req.body.firstname);
       res.send(req.body.firstname);
    }
    catch(error)
    {
      res.send(error);
    }
    res.render("index");
});


app.listen(port, () =>{
    console.log('Yes! Its Running.....');
})