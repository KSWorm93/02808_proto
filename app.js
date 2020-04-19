
$(document).ready(function () {
	setLocale('da');
	//TODO - save preference in localstorage and check there first
	calcWeekTotalHeadache();
})

function clickMeWater() {
	var element = document.getElementById("clicksWater");
	var currentValue = parseInt(element.innerHTML);
	element.innerHTML = currentValue + 1;
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
	renderGraph(data);
	calcWeekTotalHeadache(week);
	toggleHeadache();
}

function changeWeek(back) {
	var week = getDisplayedWeekNum();

	if (back) {
		if (week < 2) {
			return;
		}
		week -= 1;
	} else {
		if (week > 51) {
			return
		}
		week += 1;
	}

	var storageWeek = 'week-' + week;
	var data = getDataFromStorage(storageWeek);
	renderGraph(data);
	document.getElementById('weekText').innerHTML = getText('weekText') + week;
	calcWeekTotalHeadache(storageWeek);

	toggleHeadache(week != moment().week());
}
