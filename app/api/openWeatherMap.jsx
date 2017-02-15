const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=876ad3c5ad6eb09b019d7f70441822e9&units=imperial';

module.exports = {
    getTemp: function(location) {
        const encodedLocation = encodeURIComponent(location);
        const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then((res) => {
            // debugger;
            if (res.data.cod && res.data.message) {
                // throw new Error(res.data.message);
                throw new Error('Unable to fetch weather data');
            } else {
                return res.data.main.temp;
            }
        }, (err) => {
            throw new Error(err.response.data.message);
        });
    }
};