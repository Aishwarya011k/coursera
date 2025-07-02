function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value.trim();
  const apiKey = 'd13bb6129f475978eab7329b667d0a80'; // Replace with your actual API key

  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}`;

   fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failed to fetch weather: ${error.message}</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
