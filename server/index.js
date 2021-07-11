require("dotenv");
require("./database");

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//helpers
const generateLead = require("./helpers/generateLead");

//routes
const api = require("./routes/api");

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.json());
app.use("/api", api);



app.listen(PORT, err=>{
    if(err) return console.log(`Some troubles on backed ${PORT}`);

    console.log(`Server started ${PORT}`);

    generateLead();
});