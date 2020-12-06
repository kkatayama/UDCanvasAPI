var config = require('./config.js');
var access_token = config.access_token;
const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('index.html');
});

app.listen(80, function() {
    console.log('server running at http://localhost:80');
});
