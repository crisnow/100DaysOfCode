const api = {
    key: "f7055ee0784f710e1ea4087d44224139",
    baseurl: "api.openweathermap.org/data/2.5/"
}


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {

    // 13 is the "enter" key.
    if(evt.keyCode == 13) {
      getResults(searchbox.value);
    }
}

function getResults(query){
    //https://${api.baseurl}weather?q=${query}&appid=${api.key}
    fetch(`https://${api.baseurl}weather?q=${query}&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${weather.main.temp}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°F / ${weather.main.temp_max}°F`;
}