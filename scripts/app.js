const apikey = "932ccbb1a2ee79c0e7df7f8aea195d3e";

export async function getWeatherData(location) 
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) 
    {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
}

function displayWeather(data) 
{
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

function displayError(message) 
{
    weatherInfoElement.innerHTML = `<p style="color: blue;">Error: ${message}</p>`; // Cambio 'wheatherInfoHTML' a 'weatherInfoElement'
}
