let test1 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850,2250,1500,2500];
let test2 = [1850, 1450, 3000, 6000, 9500, 1750, 1250, 1850,2250,1500,2500];
let test3 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850,2250,1500,2500];
let test4 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850,2250,1500,2500];

const trafficData =  {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
        label: 'Traffic',
        backgroundColor: 'rgb(77,76,114,.8)',
        borderColor: 'rgb(116,119,191)',
        data: test4,
        borderWidth: 1,
    }]
}
const trafficData2 =  {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
        label: 'Traffic',
        backgroundColor: 'rgb(77,76,114,.8)',
        borderColor: 'rgb(116,119,191)',
        data: test2,
        borderWidth: 1,
    }]
}

// ! Line chart top of page
const lineChart = document.getElementById('lineChart').getContext('2d');
const lChart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: trafficData,

    // Configuration options go here
    options: {
        legend: {
           display: false
        },
        events: ['click'],
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const dashLineBtns = document.querySelector('.dash-line-btns');
dashLineBtns.addEventListener('click', (e) => {
    const hourly = document.querySelector('#hourly');
    const daily = document.querySelector('#daily');
    const weekly = document.querySelector('#weekly');
    const monthly = document.querySelector('#monthly');
    if (e.target === hourly ) return lChart.data = trafficData2;
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
            data: [50, 100, 150, 200, 250,200, 60],
        }]
       
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// ! dougnut chart goes here 
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
    options: {
        legend: {
            position: 'right',
            align: 'center',
            labels: {
                boxWidth: 15,
                padding: 20
                
            }
        },
        scales: {
            xAxes: [{
                display: false,
               gridLines: {
                  display: false,
                  drawborder: false
               }
            }],
            yAxes: [{
                display:false,
               gridLines: {
                  display: false
               }
            }]
         }
    }
});
