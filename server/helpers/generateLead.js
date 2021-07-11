const moment = require("moment");
const Chart = require("../database/models/Chart.js");


function generateLead(){
    const timeoutTime = Math.random()*(20000 - 1500)+1500;
    
    const timeout = setTimeout(()=>{
        const leadValue = Math.random()*(12000-50)+50;
        const dateInFormat = moment().format('yyyy-MM-DD HH:mm:ss');
        const timecur = moment().format('yyyy-MM-DD HH:mm:ss');

        

        const AppleChart = new Chart({
            value: leadValue,
            date: dateInFormat,
            dateSec: moment(timecur, 'yyyy-MM-DD HH:mm:ss').unix(),
            company: "Apple"
        });

        AppleChart.save();

        clearTimeout(timeout);
        generateLead();
    }, timeoutTime);
}

module.exports = generateLead;