let hourArr = [75, 125, 16, 200, 150, 127, 25, 183,778,130,117];
let dailyArr = [850, 1450, 1326, 1117, 2550, 252, 1250, 1850,2250,1500,2500];
let weeklyArr = [1950, 6250, 3000, 5070, 4500, 1750, 1250, 1850,2650,1500,2500];
let monthlyArr = [12750, 41280, 37000, 26800, 71500, 51750, 21250, 41850,21250,25500,22500];



// ! Line chart top of page's initial value
const lineChart = document.getElementById('lineChart').getContext('2d');
const start = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data:  {
         labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
        label: 'Traffic',
        backgroundColor: 'rgb(77,76,114,.8)',
        borderColor: 'rgb(116,119,191)',
        data: hourArr,
        borderWidth: 1,
    }]
},

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
// ! Switch between line graph data 
const dashLineBtns = document.querySelector('.dash-line-btns');
dashLineBtns.addEventListener('click', (e) => {
    const hourlyLi = document.querySelector('#hourly');
    const dailyLi = document.querySelector('#daily');
    const weeklyLi= document.querySelector('#weekly');
    const monthlyLi= document.querySelector('#monthly');
    if (e.target === hourlyLi ) {
        const hourly = new Chart(lineChart, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data:  {
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
    }
    if (e.target === dailyLi ) {
        const daily = new Chart(lineChart, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data:  {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
           datasets: [{
               label: 'Traffic',
               backgroundColor: 'rgb(77,76,114,.8)',
               borderColor: 'rgb(116,119,191)',
               data: dailyArr,
               borderWidth: 1,
           }]
        },
        
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
    }
    if (e.target === weeklyLi ){
        const weekly = new Chart(lineChart, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data:  {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
           datasets: [{
               label: 'Traffic',
               backgroundColor: 'rgb(77,76,114,.8)',
               borderColor: 'rgb(116,119,191)',
               data: weeklyArr,
               borderWidth: 1,
           }]
        },
        
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
    }
    if (e.target === monthlyLi ) {
        const monthly = new Chart(lineChart, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data:  {
                labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
           datasets: [{
               label: 'Traffic',
               backgroundColor: 'rgb(77,76,114,.8)',
               borderColor: 'rgb(116,119,191)',
               data: monthlyArr,
               borderWidth: 1,
           }]
        },
        
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
    }
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
        legend: {
            position: 'top',
            align: 'start',
            labels: {
                boxWidth: 15,
                padding: 20
                
            }
        },
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

// ! the code for the alert to go here
const alertDiv = document.querySelector('.alert-message');

const alertMessage = () => {
    const alertDiv = document.querySelector('.alert-message');
    const alert = document.createElement('p');
    alert.innerHTML = `this is a test informing myself about the test and its testiness`
    alertDiv.appendChild(alert);
}
alertMessage();
const bell = document.querySelector('.icon-bell');
bell.addEventListener('click', () =>  alertDiv.classList.toggle('alert'));