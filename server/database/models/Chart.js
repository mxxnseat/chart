const mongoose = require("mongoose");
const chartSchema = require("../schems/chart");

const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart;