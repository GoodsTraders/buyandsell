const pg = require('pg');
const {DB_KEY} = require('./config');


//our DB credendials in the long postgres string
var conString = process.env.ELEPHANTSQL_URL || DB_KEY;

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
});

module.exports = client;