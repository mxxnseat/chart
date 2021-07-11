const express = require("express");
const router = express.Router();

const Chart = require("../database/models/Chart");


router.get("/getChart", (req,res)=>{
    res.statusCode = 200;
    
    Chart.find({}, (err, docs)=>{
        if(err){
            return console.log("some trouble", err);
        }
        res.json(docs);

    })
});


module.exports = router;