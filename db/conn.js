const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/formdata",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(() => {
    console.log('Connection Successful');
}).catch((e)=> {
    console.log("There is error....No Proper Connection");
})