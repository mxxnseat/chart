const {Schema} = require("mongoose");

const chartSchema = Schema({
    value: Number,
    date: String,
    dateSec: String,
    company: String
});

module.exports = chartSchema;