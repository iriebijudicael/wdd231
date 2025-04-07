// OpenWeatherMap API Key
const apiKey = '0edd533614458f51faad6081561a82c'; // Replace with your API key
const city = 'Abidjan'; // Replace with your city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?p=Abidjan&lat=5.35&lon=-4.02&units=metric&appid=0edd533614458f51faad6081561a82ca`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.67&units=metric&appid=0edd533614458f51faad6081561a82ca`;

// Fetch Current Weather
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Display Current Weather
        document.getElementById('currentTemp').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('captionDesc').textContent = data.weather[0].description;
        document.getElementById('weatherCondition').textContent = `Condition: ${data.weather[0].main}`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

        // Convert sunrise and sunset timestamps to readable time
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById('sunrise').textContent = `Sunrise: ${sunriseTime}`;
        document.getElementById('sunset').textContent = `Sunset: ${sunsetTime}`;

        // Set weather icon
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('weatherIcon').src = iconUrl;
    })
    .catch(error => console.error('Error fetching current weather:', error));

// Fetch 3-Day Forecast
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastCards = document.getElementById('forecast-cards');
        const forecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 3); // Get 3 days

        forecasts.forEach(forecast => {
            const card = document.createElement('div');
            card.classList.add('forecast-card');
            card.innerHTML = `
                <p>${new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}">
                <p>${forecast.main.temp}°C</p>
                <p>${forecast.weather[0].main}</p>
            `;
            forecastCards.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching forecast:', error));