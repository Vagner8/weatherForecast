import { createDeta } from "./tools.js";

export const createChart = (data, locales) => {
    const days = data.map(day => createDeta(day.dt, locales))
    const temperatures = data.map(day => Math.round(day.temp.day))
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: days,
            datasets: [{
                label: 'Weather forecast chart',
                borderColor: '#0d6efd',
                data: temperatures
            }]
        },

        // Configuration options go here
        options: {}
    });
    return chart
}