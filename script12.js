// linked to index6.html

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherInfo = document.querySelector(".weatherInfo");
// API_KEY is provided by config.js
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city name");
    }
})

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }], wind: { speed } } = data;
    weatherInfo.textContent = "";
    weatherInfo.style.display = "flex";
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const conditionDisplay = document.createElement("p");
    const windSpeedDisplay = document.createElement("p");
    const iconDisplay = document.createElement("p");
    const errorDisplay = document.createElement("p");
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    conditionDisplay.classList.add("conditionDisplay");
    windSpeedDisplay.classList.add("windSpeedDisplay");
    iconDisplay.classList.add("iconDisplay");
    errorDisplay.classList.add("errorDisplay");
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    conditionDisplay.textContent = description;
    windSpeedDisplay.textContent = `Wind Speed: ${speed}km/h`;
    iconDisplay.textContent = getWeatherIcon(id, temp);
    errorDisplay.textContent = "";
    weatherInfo.appendChild(cityDisplay);
    weatherInfo.appendChild(tempDisplay);
    weatherInfo.appendChild(humidityDisplay);
    weatherInfo.appendChild(conditionDisplay);
    weatherInfo.appendChild(windSpeedDisplay);
    weatherInfo.appendChild(iconDisplay);
    weatherInfo.appendChild(errorDisplay);
}
function getWeatherIcon(weatherId, temp) {
    if (temp <= 0) {
        return "🥶❄️";
    }

    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️☔";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "🌞";
        case (weatherId >= 801 && weatherId <= 804):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.querySelector(".errorDisplay");
    errorDisplay.classList.add("errorDisplay");
    weatherInfo.style.display = "none";
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
    setTimeout(() => {
        errorDisplay.textContent = "";
        weatherInfo.style.display = "flex";
    }, 5000);
}
