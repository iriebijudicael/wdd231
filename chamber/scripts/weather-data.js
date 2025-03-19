// API URL for Abidjan, CI
const apiKey = '0edd533614458f51faad6081561a82ca';
const city = 'Abidjan, CI';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?p=Abidjan&lat=5.35&lon=-4.02&units=metric&appid=0edd533614458f51faad6081561a82ca`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.67&units=metric&appid=0edd533614458f51faad6081561a82ca`;


// DOM Elements
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const currentDesc = document.getElementById('current-desc');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const forecastCards = document.getElementById('forecast-cards');

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        displayCurrentWeather(data);
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display current weather
function displayCurrentWeather(data) {
    const current = data.list[0];
    const weather = current.weather[0];

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    currentTemp.textContent = `${Math.round(current.main.temp)}°C`;
    currentDesc.textContent = capitalizeWords(weather.description);
    windSpeed.textContent = `${current.wind.speed} m/s`;
    humidity.textContent = `${current.main.humidity}%`;
}

// Display 3-day forecast
function displayForecast(data) {
    const forecast = data.list.filter((item, index) => index % 8 === 0).slice(1, 4); // Get one forecast per day
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