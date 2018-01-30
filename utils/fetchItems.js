const axios = require('axios');

const fetchItems = (callback) => {
    axios.get('/getDb')
    .then(function (response) {
        console.log("GET RESPONSE", response.data);
        callback(response.data);
    })
    .catch(function (error) {
        console.log('Error', error);
    })
}

module.exports.fetchItems = fetchItems;