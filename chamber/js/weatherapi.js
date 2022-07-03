// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.getElementById('wind-speed');
const windChill = document.getElementById('wind-chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bentonville&appid=6beaf1e9063ef152c17c08af9e120a6a&units=imperial';


async function apiFetch(apiurl) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call

      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}


function displayResults(weatherData) {
  let tempapi = weatherData.main.temp;
  let windspeedapi = weatherData.wind.speed;
  let descrip = weatherData.weather[0].description;
  let iconSrcUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
  currentTemp.innerHTML = `<strong>${tempapi.toFixed(0)}</strong>`;
  windSpeed.innerHTML = `<strong>${windspeedapi.toFixed(0)}</strong>`;
  if (tempapi <=50 && windspeedapi > 3.0){
    windChill.innerHTML = `<strong>${windChill(windspeedapi, tempapi).toFixed(0)}</strong>`;
  }
  else{
    windChill.innerHTML = `<strong>N/A</strong>`;
  }
  weatherIcon.setAttribute('src', iconSrcUrl);
  weatherIcon.setAttribute('alt', descrip);
  apiFetch(url);

}

displayResults(apiFetch(url));

function windchillf(s, t){
  f = 35.74 + .6215 * t - 35.75 * (s**.16) + .4275 * t * (s**.16);
  return f;
}
