import "./index.css";

import canvas from "./js/canvas";
import { Chart } from "./js/chart";

const data = [
    {
        date: 60,
        value: 20
    },
    {
        date: 120,
        value: 50
    },
    {
        date: 180,
        value: 120
    }
];

const chart = new Chart(data, "#f00");

chart.draw( canvas.ctx);