let date_user;
let city_user;

const date = document.querySelector('.date');
date.addEventListener('keypress', setQuery);

function setQuery(evt) {

    // 13 is the "enter" key.
    if(evt.keyCode == 13) {
      date_user = date.value;
      console.log(date_user);
    }
}

const city = document.querySelector('.city');
city.addEventListener('keypress', setQuery2);

function setQuery2(evt) {

    // 13 is the "enter" key.
    if(evt.keyCode == 13) {
      city_user = city.value;
      getResults(date_user, city_user);
    }
}


function getResults(date_u, city_u){
    //https://covid-api.com/api/reports?date=${date_u}&region_province=${city_u}
    fetch(`https://covid-api.com/api/reports?date=${date_u}&region_province=${city_u}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let confirmed = document.querySelector('.results .confirmed');
    confirmed.innerText = `new confirmed: ${weather.data[0].confirmed_diff}`;

    let death= document.querySelector('.results .death');
    death.innerText = `new death: ${weather.data[0].deaths_diff}`;

    let recover= document.querySelector('.results .recover');
    recover.innerText = `new recovery: ${weather.data[0].recovered_diff}`;

    // let temp = document.querySelector('.current .temp');
    // temp.innerHTML = `${weather.main.temp}<span>°c</span>`;

    // let weather_el = document.querySelector('.current .weather');
    // weather_el.innerText = weather.weather[0].main;

    // let hilow = document.querySelector('.hi-low');
    // hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}
