const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    firstname: {
        type:String,
        //required:true
    },

    laststname: {
        type:String,
        //required:true
    },

    gender: {
        type:String,
        //required:true
    },

    email: {
        type:String,
        //required:true,
        unique:true
    },

    Dateofbirth: {
        type:String,
        //required:true
    },

    Age: {
        type:String,
       // required:true
    },

    Address: {
        type:String,
        //required:true
    },

    Phone : {
        type:Number,
        required:true,
        unique:true
    },

    Password: {
        type:String,
        //required:true
    },

    confirmPassword: {
        type:String,
        //required:true
    }

})

const Register =  new mongoose.model("Register", formSchema);

module.exports = Register;