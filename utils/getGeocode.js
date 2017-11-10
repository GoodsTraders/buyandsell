const axios = require('axios');
const {MAP_KEY} = require('../database/config');

const getGeocode = (address, callback) => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?parameters', {
        params: {
            'address': address,
            'key': MAP_KEY
        }
    })
    .then(function (response) {
        callback(response.data.results.geometry.location);
    })
    .catch(function (error) {
        console.log(error);
    })
}

module.exports.getGeocode = getGeocode;