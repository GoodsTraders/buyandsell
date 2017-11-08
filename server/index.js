const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client/build/'));

app.listen(1337, function() {
    console.log('Server is listening...');
})