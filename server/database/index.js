const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chart_data", err=>{
    if(err){
        return console.log("cannot connect to database chart");
    }

    console.log("success connection");
});