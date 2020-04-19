//Admin

//TODO - change locale, localstorage with locale specific info
//TODO - add locale in moment
//Change text to danish
//TODO - clear all week storage

function changeLocale() {
	setLocale('da');
}

function setLocale(locale,
	options = {
		week: {
			dow: 1
		}
	}
) {
	currentLocale = locale;
	moment.updateLocale(locale, options);
	translateHTML();
}

