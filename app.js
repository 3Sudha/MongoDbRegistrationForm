
const express = require("express");
const path =require("path");
const app = express();
require("./db/conn");
const Register =require("./models/registers");
const port = process.env.PORT || 3000;


const static_path =path.join(__dirname, "../public" );


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.set('view engine', 'hbs');



app.get("/", (req,res) =>{
    
    res.render('index');
});

app.post("/register", async(req,res) =>{
    try
    {
       const password =req.body.Password;
       const cpassword= req.body.confirmPassword;

       if(password === cpassword)
       {
           const registerForm= new Register({
            firstname: req.body.fname,
            lastname: req.body.lname,
            gender: req.body.gender,
            email: req.body.email,
            Dateofbirth: req.body.dob,
            Age: req.body.age,
            Address: req.body.add,
            Phone : req.body.phone,
            Password: password,
            confirmPassword: cpassword

           })

           const registered = await registerForm.save();
           res.status(201).render("index");

       }else{
           res.send("Password is not matching");
       }
    }
    catch(error)
    {
      res.send(error);
    }
    //res.render("index");
});


app.listen(port, () =>{
    console.log('Yes! Its Running.....');
})