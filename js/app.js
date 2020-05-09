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
// ! Switch between line graph data using the ul dashLineBtns 
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






// ! ============ BARCHART here =================
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
           display:false
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

// ! ========== DOUGNNUT chart goes here ================
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


// const alertMessage = () => {
//     const alertDiv = document.querySelector('.alert-message');
//     const alert = document.createElement('p');
//     alert.innerHTML = `<span class="make-bold">Alert</span> this is an alert, alerting you about its alertiness`;
//     alertDiv.appendChild(alert);
// }
// alertMessage();

// ! Selectors for alerts 
const alertDiv = document.querySelector('.alert-message');
const alertDiv2 = document.querySelector('.alert-message2');
const alertDiv3= document.querySelector('.alert-message3-js');
const bell = document.querySelector('.icon-bell');
const cross = document.querySelector('.cross');
const cross2 = document.querySelector('.cross2');
const cross3 = document.querySelector('.cross3');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const alert1 = document.querySelector('.alert-1');
const alert2 = document.querySelector('.alert-2');
const dropdownWrap = document.querySelector('.dropdown-wrap');
const dropdownContent = document.querySelector('.dropdown-content');

// !======== object created to clean up code ==========

 const toggle = {
   alertMessage1: function () { 
    alertDiv.classList.toggle('alert-message');
    alertDiv.classList.toggle('alert');
    cross.classList.toggle('alert');
 },
 alertMessage2: function () { 
 alertDiv2.classList.toggle('alert-message2');
 alertDiv2.classList.toggle('alert');
 cross2.classList.toggle('alert');
},
messageSent: function ()  {
    alertDiv3.classList.toggle('alert-message3');
    alertDiv3.classList.toggle('alert');
    cross3.classList.toggle('alert');
},
dropDownMenu: function () {
    dropdownContent.classList.toggle('.dropdown-content');
    dropdownWrap.classList.toggle('dropdown-wrap-js');
    dropdownContent.classList.toggle('dropdown-content-js');
    dropdownContent.classList.toggle('dropdown-content');
}
 }

// ! may not be used causing issues 
// bell.addEventListener('click', () => {
// toggle.alertMessage1();
// toggle.alertMessage2();
// });

// ! both close/croses for alerts 
cross.addEventListener('click', () => toggle.alertMessage1());
cross2.addEventListener('click', () => toggle.alertMessage2());

// ! dropDownMenu 
bell.addEventListener('click', (e) => toggle.dropDownMenu());

dropdownContent.addEventListener('click', e => {
    if(e.target === link1) {
 toggle.alertMessage1();
    }
   else if (e.target === link2) {
toggle.alertMessage2();
   }
});
// ! ======== sent alert for MESSAGE USER ========== 
const sendBtn = document.querySelector('.send-message');
// ! prevent the default action to prevent the button trying to submit to a server 
sendBtn.addEventListener('click', (e) => {
e.preventDefault()
toggle.messageSent();
});
cross3.addEventListener('click', () => toggle.messageSent());


// ! ======== Radio slider ==========
const sliderEl = document.querySelectorAll('.slider');
const toggleWrap  =   document.querySelector('.t-wrap1');
const toggleWrap2 =   document.querySelector('.t-wrap2');
const sliderJs1   =   document.querySelector('.slider-js-1');
const sliderJs2   =   document.querySelector('.slider-js-2');
// ! Toggle the textContent 
function onAlert(el) {
el.innerHTML = `<p class="on-js">ON</p>`
}
function offAlert(el) {
    el.innerHTML = ``;
    }
//   ! Attach the listener to toggle  
toggleWrap.addEventListener('click', () => {
 document.getElementById('email-noti').checked ?
  onAlert(sliderJs1)   :  offAlert(sliderJs1);
});

toggleWrap2.addEventListener('click', () => {
 document.getElementById('profile-noti').checked ?
onAlert(sliderJs2) : offAlert(sliderJs2);
});


