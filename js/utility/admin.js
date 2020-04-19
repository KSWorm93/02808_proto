
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
	saveLocalePreference(locale);
}

function clearLocalData() {
	$.confirm({
		backgroundDismiss: true,
		icon: 'fa fa-warning',
		title: getText('confirmTitleText'),
		content: getText('confirmBodyText'),
		type: 'red',
		buttons: {   
			ok: {
				text: getText('yes'),
				btnClass: 'btn-danger',
				keys: ['enter'],
				action: function(){
					clearLocalStorage();
					showSuccessPrompt();
					if(graphVisible()) {
						renderGraph();
					}
				}
			},
			cancel: {
				text: getText('cancel')
			}
		}
	});
}

function showSuccessPrompt() {
	$.confirm({
		backgroundDismiss: true,
		title: getText('deletedTitleText'),
		content: getText('deletedBodyText'),
		type: 'green',
		buttons: {   
			ok: {
				text: getText('close'),
			}
		}
	});
}