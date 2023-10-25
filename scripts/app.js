const apikey = "d561b25471e94f0eb00c10ec3e1a0825";
const weatherInfoElement = document.querySelector('#weather-info');

async function getWeather() {
    const locationInput = document.querySelector('#location'); // Cambio 'location' a '#location'
    const location = locationInput.value;

    if (!location) {
        alert('Please enter a location');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`; // Cambio 'weatherq' a 'q' y 'unit' a 'units'

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('An error occurred while fetching weather data'); // Cambio 'ocurred' a 'occurred'
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    const weatherInfoHTML = `
    <h2>${name}</h2>
    <p>${temperature}°C estos son celcius</p>
    <p>${description}</p>
    `;

    weatherInfoElement.innerHTML = weatherInfoHTML;
}

function displayError(message) {
    weatherInfoElement.innerHTML = `<p style="color: blue;">Error: ${message}</p>`; // Cambio 'wheatherInfoHTML' a 'weatherInfoElement'
}
