const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0-5eye0.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
    console.log("Connected sucessfully...");

}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;