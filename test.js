require("dotenv").config();
const axios = require('axios');

( async () => {
    const response = await axios.get(process.env.API_URL, { 
        params: { 
            key : process.env.API_KEY,
            q: "Toulouse",
            days: 7
        }  
    });

    if(response.status != 200){
        console.error(response.status);
        return;
    }
    console.log(response.data);
    console.log(response.data.forecast.forecastday);
})();