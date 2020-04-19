
function generateCSV() {
	var header = 'week,monday,tuesday,wednesday,thursday,friday,saturday,sunday'
	var newline = '\r\n'
	var csv = header + newline;

	//Loop 52 times to get each week a year
	for (var index = 1; index < 53; index++) {
		var weekData = getDataFromStorage('week-' + index);
		if (weekData) {
			csv = csv.concat(index, ',', weekData.toString(), newline);
		}
	}

	var fileName = getFileName();
	downloadCSVFile(fileName, data);
}

function downloadCSVFile(fileName, data) {
	var blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
	var url = URL.createObjectURL(blob);
	var link = document.createElement("a");
	link.setAttribute('href', url);
	link.setAttribute('download', fileName);
	link.style.visibility = 'hidden';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function getFileName() {
	var dateFormat = 'YYYY-MM-DD';
	var date = moment().format(dateFormat);
	var ext = '.csv';
	var fileName = 'MigraNo';
	var exportedFileName = fileName + date + ext;

	return exportedFileName;
}