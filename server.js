var config = require('./config.js');
var access_token = config.access_token;
var express = require('express');
var https = require("https");
var app = express();

app.use('/js', express.static('js'));

// http://localhost
app.get('/', function(req, res) {
    var html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Get Courses TEST </title>';
    html += '<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>';
    html += '<script>var access_token="'+access_token+'";</script>';
    html += '<script src="/js/UDCanvasAPI.js"></script>';
    html += '</head>';
    html += '<body>';
    html += '<a href="/courses">';
    html += '<button style="height:100px;width:300px;margin: 0 auto;display: block;">Click Here to Get Courses</button>';
    html += '</a>';
    html += '</body>';
    html += '</html>';
    res.send(html);
});

app.listen(80, function() {
    console.log('server running at http://localhost:80');
});
