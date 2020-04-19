//Admin

//TODO - change locale, localstorage with locale specific info
//TODO - clear all week storage

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

