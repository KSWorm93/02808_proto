
function getText(text, locale = currentLocale) {
	var localeTexts = getLocale(locale);
	return localeTexts[text];
}

function translateHTML() {
	document.getElementById('welcomeText').innerHTML = getText('welcomeText');
	
	if(graphVisible()) {
		translateGraph();
	}
}

function translateGraph() {
	document.getElementById('forwardBtn').innerHTML = getText('forwardBtn');
	document.getElementById('backBtn').innerHTML = getText('backBtn');
	document.getElementById('weekText').innerHTML = getText('weekText') + getDisplayedWeekNum();
	var translations = {
		week: [
			getText('monday'),
			getText('tuesday'),
			getText('wednesday'),
			getText('thursday'),
			getText('friday'),
			getText('saturday'),
			getText('sunday')
		],
		label: getText('graphText')
	}
	renderGraph(false, translations);
}