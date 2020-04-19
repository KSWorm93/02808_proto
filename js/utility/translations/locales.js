
function getLocale(locale = currentLocale) {
    var thisLocale;
	switch (locale) {
		case 'en':
			thisLocale = englishLocale;
			break;
		case 'da':
			thisLocale = danishLocale;
			break;
		default:
			thisLocale = englishLocale;
			break;
	}
    return thisLocale;
} 