
	switch (new Date().getDay()) {
		case 0:
			day = 'Sunday';
			break;
		case 1:
			day = 'Monday';
				break;
		case 2:
			day = 'Tuesday';
				break;
		case 3:
			day = 'Wednesday';
				break;
		case 4:
			day = 'Thursday';
			break;
		case 5:
			day = 'Friday';
			break;
		case 6:
			day = 'Saturday';
				break;
	}
	document.querySelector('.day-name').innerHTML = day;

	let today = new Date();
	let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	document.querySelector('.date-today').innerHTML = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();

	let city = document.querySelector('select').value;
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8c3350d536348a1d32a533e2e08f7fe5')
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			console.log(data);
			document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&#8451';
			document.querySelector('.weather-desc').innerHTML = data.weather[0]['description'];
		})
		
	document.querySelector('#city').onchange = function () {
		let city = document.querySelector('select').value;
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8c3350d536348a1d32a533e2e08f7fe5')
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			console.log(data);
			document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&#8451';
			document.querySelector('.weather-desc').innerHTML = data.weather[0]['description'];
		})
	}
	
	
