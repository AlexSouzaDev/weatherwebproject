const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '47f21c3cdab472348306241125f2a094';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-deatils .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/sun.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snowy.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = 'images/clouds.png';

        }

    })

});