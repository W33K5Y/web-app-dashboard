let test1 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850,2250,1500,2500];
// ! Line chart top of page
const lineChart = document.getElementById('lineChart').getContext('2d');
const lChart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            label: 'Traffic',
            backgroundColor: 'rgb(77,76,114,.8)',
            borderColor: 'rgb(116,119,191)',
            data: test1,
            borderWidth: 1,
        }]
    },

    // Configuration options go here
    options: {}
});
// ! barChart here 
const barChart = document.getElementById('barChart').getContext('2d');
const bChart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: 'rgba(77,76,114,.8)',
            borderColor: 'rgb(116,119,191)',
            data: [50, 100, 150, 200, 250,200],
        }]
        
    },

    // Configuration options go here
    options: {}
});

// ! dougnut chart goes here 
// ! barChart here 
const doughnutChart = document.getElementById('doughnutChart').getContext('2d');
const dChart = new Chart(doughnutChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: 'Mobile Users',
            backgroundColor:['rgb(77,76,114,.8)','lightblue','lightgreen'],
            borderColor: 'rgb(116,119,191)',
            data: [2000, 550, 500],
        }]
       
    },

    // Configuration options go here
    options: {}
});

