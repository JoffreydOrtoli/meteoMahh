function switchs() {
    switch (currentWeather.wind_dir) {
        case "N" :
            currentWeather.wind_dir = 'Nord';
            break;
        case "NNW" :
            currentWeather.wind_dir = 'Nord / Nord-Ouest';
            break;
        case "NW" :
            currentWeather.wind_dir = 'Nord-Ouest';
            break;
        case "WNW" :
            currentWeather.wind_dir = 'Ouest / Nord-Ouest';
            break;
        case "W" :
            currentWeather.wind_dir = 'Ouest';
            break;
        case "WSW" :
            currentWeather.wind_dir = 'Ouest / Sud-Ouest';
            break;
        case "SW" :
            currentWeather.wind_dir = 'Sud-Ouest';
            break;
        case "SSW" :
            currentWeather.wind_dir = 'Sud / Sud-Ouest';
            break;
        case "S" :
            currentWeather.wind_dir = 'Sud';
            break;
        case "SSE" :
            currentWeather.wind_dir = 'Sud / Sud-Est';
            break;
        case "SE" :
            currentWeather.wind_dir = 'Sud-Est';
            break;
        case "ESE" :
            currentWeather.wind_dir = 'Est / Sud-Est';
            break;
        case "E" :
            currentWeather.wind_dir = 'Est';
            break;
        case "ENE" :
            currentWeather.wind_dir = 'Est / Nord-Est';
            break;
        case "NE" :
            currentWeather.wind_dir = 'Nord-Est';
            break;
        case "NNE" :
            currentWeather.wind_dir = 'Nord / Nord-Est';
            break;
    }
}

module.exports = switchs;