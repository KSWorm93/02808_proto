
function getText(text) {
	var danishLocale = {
		welcomeText: 'Velkommen til MigraNo!',
		weekText: 'Uge: ',
		graphText: 'Antal gange du har haft hovedpine',
		monday: 'Mandag',
		tuesday: 'Tirsdag',
		wednesday: 'Onsdag',
		thursday: 'Torsdag',
		friday: 'Fredag',
		saturday: 'Lørdag',
		sunday: 'Søndag',
		forwardBtn: 'Næste uge',
		backBtn: 'Forrige uge'
	}

	var englishLocale = {
		welcomeText: 'Welcome to MigraNo!',
		weekText: 'Week: ',
		graphText: 'Times you had headaches',
		monday: 'Monday',
		tuesday: 'Tuesday',
		wednesday: 'Wednesday',
		thursday: 'Thursday',
		friday: 'Friday',
		saturday: 'Saturday',
		sunday: 'Sunday',
		forwardBtn: 'Next week',
		backBtn: 'Last wee'
	}

	var thisLocale = currentLocale == 'en' ? englishLocale : danishLocale;
	return thisLocale[text];
}

function translateHTML() {
	document.getElementById('welcomeText').innerHTML = getText('welcomeText');
	document.getElementById('forwardBtn').innerHTML = getText('forwardBtn');
	document.getElementById('backBtn').innerHTML = getText('backBtn');
	document.getElementById('weekText').innerHTML = getText('weekText') + getDisplayedWeekNum();
	translateGraph();
}

function translateGraph() {
	var translations = [
		getText('monday'),
		getText('tuesday'),
		getText('wednesday'),
		getText('thursday'),
		getText('friday'),
		getText('saturday'),
		getText('sunday')
	]

	renderGraph(false, translations);
}