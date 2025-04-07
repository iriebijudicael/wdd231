// OpenWeatherMap API Key
const apiKey = '0edd533614458f51faad6081561a82c'; // Replace with your API key
const city = 'Abidjan'; // Replace with your city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?p=Abidjan&lat=5.35&lon=-4.02&units=metric&appid=0edd533614458f51faad6081561a82ca`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.67&units=metric&appid=0edd533614458f51faad6081561a82ca`;

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display weather data
function displayWeather(data) {
    const weatherIcon = document.getElementById('weatherIcon');
    const currentTemp = document.getElementById('currentTemp');
    const captionDesc = document.getElementById('captionDesc');
    const windSpeed = document.getElementById('windSpeed');
    const humidity = document.getElementById('humidity');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = data.weather[0].description;

    currentTemp.textContent = `Temperature: ${data.main.temp}°C`;
    captionDesc.textContent = `Description: ${data.weather[0].description}`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    sunrise.textContent = `Sunrise: ${sunriseTime}`;
    sunset.textContent = `Sunset: ${sunsetTime}`;
}


// Display 3-day forecast data
function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast-cards');
    forecastContainer.innerHTML = ''; // Clear existing content

    // Filter forecast data to show only one entry per day
    const dailyForecast = forecastData.filter((entry, index) => index % 8 === 0).slice(0, 3); // Show 3 days

    dailyForecast.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');

        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        forecastCard.innerHTML = `
            <h4>${date}</h4>
            <img src="${iconUrl}" alt="${day.weather[0].description}">
            <p>${day.weather[0].description}</p>
            <p>Temp: ${day.main.temp}°C</p>
            <p>Wind: ${day.wind.speed} m/s</p>
            <p>Humidity: ${day.main.humidity}%</p>
        `;

        forecastContainer.appendChild(forecastCard);
    });
}

// Initialize weather and forecast data
fetchWeather();
fetchForecast();






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