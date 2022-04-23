require("dotenv").config();
const json = require('../data/worldCity.json');
const axios = require('axios');

const weatherController = {

    /**
     * function de demande de données météo à l'API
     * @param {*} req l'API meteo avec paramètres
     * @param {*} res les données sous forme d'objet
     * @returns 
     */
    async getMeteo(req, res){
        const response = await axios.get(process.env.API_URL, { 
            params: { 
                key : process.env.API_KEY,
                q: req.query.q || "toulouse",
                days: 3
            }  
        });
        // s'il y a une erreur 
        if(response.status != 200){
            console.error(response.status);
            return;
        }

        // envoies des données
        const location = response.data.location;
        const currentWeather = response.data.current;
        const forecasts = response.data.forecast.forecastday;
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
        switch (currentWeather.condition.text) {
            case "Sunny" : 
                currentWeather.condition.text = "Ensoleillé";
                break;
            case "Partly cloudy" : 
                currentWeather.condition.text = "Partiellement nuageux";
                break;
            case "Cloudy" : 
                currentWeather.condition.text = "Nuageux";
                break;
            case "Overcast" : 
                currentWeather.condition.text = "Couvert";
                break;
            case "Rain" : 
                currentWeather.condition.text = "Pluie";
                break;
            case "Light rain" : 
                currentWeather.condition.text = "Pluie légère";
                break;
            case "Patchy rain possible" : 
                currentWeather.condition.text = "Pluie éparse possible";
                break;
            case "Light rain shower" : 
                currentWeather.condition.text = "Légère averse de pluie";
                break;
            case "Light drizzle" : 
                currentWeather.condition.text = "Bruine légère";
                break;
            case "Clear" : 
                currentWeather.condition.text = "Dégagé";
                break;
            case "Snow" : 
                currentWeather.condition.text = "Neige";
                break;
            case "Moderate or heavy snow with thunder" : 
                currentWeather.condition.text = "Neige modérée ou forte avec tonnerre";
                break;
            case "Patchy light snow" : 
                currentWeather.condition.text = "Légère neige éparse";
                break;
            case "Mist" : 
                currentWeather.condition.text = "Brouillard";
                break;
        }
        res.render("meteo", { location, currentWeather, forecasts, json});
    },
};

module.exports = weatherController;