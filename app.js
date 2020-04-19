
$(document).ready(function(){
  setLocale('da');
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
  document.getElementById('weekText').innerHTML = getText('weekText') + momentWeek;
  createGraph(data);
  calcWeekTotalHeadache(week);
  toggleHeadache();
}
