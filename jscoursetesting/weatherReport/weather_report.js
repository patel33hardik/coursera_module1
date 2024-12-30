
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'LHTBXUM6KMXN94P9DWRHTDHX4'; // Replace 'YOUR_API_KEY' with your actual API key
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${ data.resolvedAddress}</h2>
                              <p>Temperature: ${data.currentConditions.temp} &#8451;</p>
                              <p>Weather: ${data.description}</p>`;
    }).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


