
$(document).ready(function(){
  moment.updateLocale('en', {
    week: {
      dow: 1
    }
  })
  calcWeekTotalHeadache();
})

//Clickers

var clicksWater = 0;
function clickMeWater() {
  clicksWater += 1;
  document.getElementById("clicksWater").innerHTML = clicksWater;
}

function clickMeHead() {
  var element = document.getElementById("clicksHead"); 
  var currentValue = parseInt(element.innerHTML);
  element.innerHTML = currentValue + 1;
  
  saveDataToStorage();
}

function clickMeGraph() {
  var momentWeek = moment().week();
  var week = 'week-' + momentWeek;
  var data = getDataFromStorage(week);
  document.getElementById('weekText').innerHTML = 'Week ' + momentWeek;
  createGraph(data);
  calcWeekTotalHeadache(week);
  toggleHeadache();
}

function changeWeek(back) {
  var week = document.getElementById('weekText').innerHTML;
  week = parseInt(week.split(' ')[1]);

  if(back) {
    if(week < 2) {
      return;
    }
    week -= 1;
  } else {
    if(week > 51) {
      return
    }
    week += 1;
  }

  var storageWeek = 'week-' + week;
  var data = getDataFromStorage(storageWeek);
  createGraph(data);
  document.getElementById('weekText').innerHTML = 'Week ' + week;
  calcWeekTotalHeadache(storageWeek);
  
  toggleHeadache(week != moment().week());
  //TODO - test
}

function toggleHeadache(toggle = false) {
  document.getElementById('headBtn').disabled = toggle;
}

//Local storage

function calcWeekTotalHeadache(week = false) {
  var week = week ? week : 'week-' + moment().week();
  var data = getDataFromStorage(week);

  var weekTotal = 0;
  for (let index = 0; index < data.length; index++) {
    weekTotal += data[index];
  } 

  document.getElementById("clicksHead").innerHTML = weekTotal;
}

function saveDataToStorage() {
  var week = 'week-' + moment().week();
  var weekData = getCurrentWeekData(week);
  var jsonWeekData = JSON.parse(weekData);
  
  var day = moment().day();
  switch(day) {
    case 0: //Sunday
      var current = jsonWeekData.sunday;
      jsonWeekData.sunday = current + 1;                     
      break;
    case 1: //Monday
      var current = jsonWeekData.monday;
      jsonWeekData.monday = current + 1;
      break;
    case 2: //Tuesday
      var current = jsonWeekData.tuesday;
      jsonWeekData.tuesday = current + 1;
      break;
    case 3: //Wednesday
      var current = jsonWeekData.wednesday;
      jsonWeekData.wednesday = current + 1;
      break;
    case 4: //Thursday
      var current = jsonWeekData.thursday;
      jsonWeekData.thursday = current + 1;
      break;
    case 5: //Friday
      var current = jsonWeekData.friday;
      jsonWeekData.friday = current + 1;
      break;
    case 6: //Saturday
      var current = jsonWeekData.saturday;
      jsonWeekData.saturday = current + 1;
      break;
    default:
      break;
  }

  var data = JSON.stringify(jsonWeekData);

  localStorage.setItem(week, data);
}

function getCurrentWeekData(currentWeek) {
  var thisWeek = localStorage.getItem(currentWeek);
  thisWeek = thisWeek ? thisWeek : initWeekData();

  return thisWeek;
}

function getDataFromStorage(week) {  
  var weekData = getCurrentWeekData(week);
  var jsonWeekData = JSON.parse(weekData);

  var data = [
    jsonWeekData.monday,
    jsonWeekData.tuesday,
    jsonWeekData.wednesday,
    jsonWeekData.thursday,
    jsonWeekData.friday,
    jsonWeekData.saturday,
    jsonWeekData.sunday
  ];

  return data;
}

function initWeekData() {
  var weekData =  {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
  }

  return JSON.stringify(weekData);
}

//CSV

function generateCSV() {

  var header = 'week,monday,tuesday,wednesday,thursday,friday,saturday,sunday'
  var newline = '/n'
  var csvString = header + newline;


  //Loop 52 times to get each week a year
  for (var index = 1; index < 53; index++) {
    var weekData = getDataFromStorage('week-' + index);
    if(weekData) {
      csvString = csvString.concat(weekData.toString(), newline);
    }
  }



  //TODO - loop week localstorage
  //TODO - add to single text string
  //TODO - create file
  //TODO - download file

}

//Admin

//TODO - change locale, localstorage with locale specific info
  //TODO - add locale in moment
  //Change text to danish
//TODO - clear all week storage

//Graph
var headacheChart; //Global variable to store the chart

function createGraph(data) {
  var ctx = document.getElementById('headacheChart');

  if(ctx.classList.contains('chartCreated')) {
    update();
  } else {
    create();
    ctx.classList.add('chartCreated');
    document.getElementById('weekButtons').removeAttribute('hidden');
    document.getElementById('weekText').innerHTML = 'Week ' + moment().week();
  }

  function update() {
    headacheChart.data.datasets.forEach((dataset) => {
      dataset.data = data;
    });
    headacheChart.update();
  }

  function create() {
    headacheChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Times you had headaches',
          data: data,
          backgroundColor: [
            'rgba(114, 147, 203, 0.8)',
            'rgba(225, 151, 76, 0.8)',
            'rgba(132, 186, 91, 0.8)',
            'rgba(211, 94, 96, 0.8)',
            'rgba(144, 103, 167, 0.8)',
            'rgba(171, 104, 87, 0.8)',
            'rgba(204, 194, 12, 0.8)',
          ]
        }]
      },
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
  }
}
  