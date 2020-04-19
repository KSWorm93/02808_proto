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
    
    document.getElementById('welcomeText').innerHTML = getText('welcomeText');
    document.getElementById('weekText').innerHTML = getText('weekText') + getDisplayedWeekNum();;
  }
  
  