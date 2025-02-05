// OpenWeatherMap API Key and Location (Replace with your API key and chamber location)
const apiKey = '0edd533614458f51faad6081561a82ca';
const city = 'Abidjan, Ivory Coast';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Abidjan&units=metric&appid=0edd533614458f51faad6081561a82ca`;

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display weather data
function displayWeather(data) {
    const currentTemp = document.getElementById('current-temp');
    const weatherDescription = document.getElementById('weather-description');
    const forecastCards = document.getElementById('forecast-cards');

    // Current weather
    const current = data.list[0];
    currentTemp.textContent = `${Math.round(current.main.temp)}°C`;
    const description = current.weather.map(event => capitalizeWords(event.description)).join(', ');
    weatherDescription.textContent = description;

    // 3-Day Forecast
    const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3); // Get one forecast per day
    forecastCards.innerHTML = forecast.map(day => `
        <div class="forecast-card">
            <p><strong>Date:</strong> ${new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p><strong>Temperature:</strong> ${Math.round(day.main.temp)}°C</p>
            <p><strong>Weather:</strong> ${day.weather.map(event => capitalizeWords(event.description)).join(', ')}</p>
        </div>
    `).join('');
}

// Capitalize each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Initialize weather fetch
fetchWeather();