function handleSubmit(event) {
	event.preventDefault()

	/* Global Variables */
	const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

	// Personal API Key for OpenWeatherMap API
	const keyAPI= '&appid=a7676115f0cff66c4c21188403d28750&units=imperial';

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
		document.getElementById('results').innerHTML = res.message
	})

	// get the zip code input
	const userZipCode = document.getElementById('zip').value
	fetch(baseURL + userZipCode + keyAPI)
	.then(res => res.json())
	.then(function(res) {
		document.getElementById('temperature').innerHTML = res.main.temp
	})
}

export { handleSubmit }
