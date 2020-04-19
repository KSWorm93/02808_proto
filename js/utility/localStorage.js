
function calcWeekTotalHeadache(week = false) {
	var week = week ? week : 'week-' + moment().week();
	var data = getDataFromStorage(week);

	var weekTotal = 0;
	for (var index = 0; index < data.length; index++) {
		weekTotal += data[index];
	}

	document.getElementById("clicksHead").innerHTML = weekTotal;
}

function saveDataToStorage() {
	var week = 'week-' + moment().week();
	var weekData = getCurrentWeekData(week);
	var jsonWeekData = JSON.parse(weekData);

	var day = moment().day();
	switch (day) {
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

function getDataFromStorage(week = 'week-' + moment().week()) {
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
	var weekData = {
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

function clearLocalStorage() {
	localStorage.clear();
}