// DOM Elements
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const currentDesc = document.getElementById('current-desc');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const forecastCards = document.getElementById('forecast-cards');

// API URL for Abidjan, CI
const apiKey = '0edd533614458f51faad6081561a82ca';
const city = 'Abidjan, CI';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Abidjan&units=metric&appid=0edd533614458f51faad6081561a82ca`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Abidjan&units=metric&appid=0edd533614458f51faad6081561a82ca`;

// Fetch weather data
async function fetchWeather() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(apiUrl).catch(error => {
            console.error('Network error:', error);
            throw new Error('Network error');
        });
        if (!weatherResponse.ok) {
            console.error('Failed to fetch weather data:', weatherResponse.statusText);
            throw new Error('Weather data not available');
        }
        const weatherData = await weatherResponse.json();
        displayCurrentWeather(weatherData);

        // Fetch forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error('Forecast data not available');
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display current weather data
function displayCurrentWeather(data) {
    // Display temperature
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

    // Display weather icon and description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    currentDesc.textContent = data.weather[0].description;

    // Display additional weather information
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    sunrise.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
    sunset.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;
}

// Display 3-day forecast
function displayForecast(data) {
    const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3); // Get one forecast per day for the next 3 days
    forecastCards.innerHTML = forecast.map(day => `
        <div class="forecast-card">
            <p><strong>Date:</strong> ${formatDate(day.dt * 1000)}</p>
            <p><strong>Temperature:</strong> ${Math.round(day.main.temp)}°C</p>
            <p><strong>Conditions:</strong> ${capitalizeWords(day.weather[0].description)}</p>
        </div>
    `).join('');
}

// Format date as "Weekday, Month Day, Year"
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Format time as "HH:MM AM/PM"
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Capitalize each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Initialize weather fetch
fetchWeather();






// API URL for Trier, Germany
/*const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.67&units=metric&appid=0edd533614458f51faad6081561a82ca';

// Fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data); // Display results
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display weather data
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display temperature
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Construct icon URL
    let desc = data.weather[0].description; // Get weather description
    weatherIcon.setAttribute('src', iconsrc); // Set icon source
    weatherIcon.setAttribute('alt', desc); // Set icon alt text
    captionDesc.textContent = `${desc}`; // Set weather description
}

// Call the function
apiFetch();*/