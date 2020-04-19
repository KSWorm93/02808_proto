//Translations
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
    sunday: 'Søndag'
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
    sunday: 'Sunday'
  }
  
  var thisLocale = currentLocale == 'en' ? englishLocale : danishLocale;
  return thisLocale[text];
}