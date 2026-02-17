// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL for Trier, Germany
const url = `https://api.openweathermap.org/data/2.5/weather?p=Abidjan&lat=5.35&lon=-4.02&units=metric&appid=0edd533614458f51faad6081561a82ca`;

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
apiFetch();
