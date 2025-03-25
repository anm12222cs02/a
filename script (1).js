async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "<p>City not found!</p>";
            return;
        }

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <img class="weather-icon" src="${icon}" alt="${description}">
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Condition:</strong> ${description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = "<p>Something went wrong. Try again later.</p>";
    }
}

