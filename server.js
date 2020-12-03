var config = require('./config.js');
var access_token = config.access_token;
const express = require('express');

var app = express();

app.use(express.static(__dirname + '/js'));

// http://localhost
app.get('/', function(req, res) {
    var html = '';
    html += '<!DOCTYPE html>';
    html += '<html>\n';
    html += '    <head>\n';
    html += '        <title>Get Courses TEST</title>\n';
    html += '        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>\n';
    html += '        <script>\n';
    html += '            var access_token="25~LDtz4FPmgvVumQULtrkjOUrdQvKnniad2r56u33mCOqZHNjnnB2wIkScp8c56F8E";\n';
    html += '        </script>\n';
    html += '        <script src="UDCanvasAPI.js"></script>\n';
    html += '    </head>\n';
    html += '    <body>\n';
    html += '        <button id="courses_button" style="height:100px;width:300px;margin: 0 auto;display: block;">\n';
    html += '            Click Here to Get Courses\n';
    html += '        </button>\n';
    html += '        <div id="results" style="width:1200px;margin: 0 auto;display: block;">\n';
    html += '            <table>\n';
    html += '                <tbody>\n';
    html += '                    <tr><td>course_id</td><td>start_at</td><td>name</td><td>course_code</td></tr>\n';
    html += '                </tbody>\n';
    html += '            </table>\n';
    html += '        </div>\n';
    html += '\n';
    html += '        <script>\n';
    html += '         $(document).ready(function () {\n';
    html += '             $("#courses_button").on("click", function() {\n';
    html += '                 var courses = udcanvas.getCourses();\n';
    html += '                 console.table(courses, ["course_id", "start_at", "name", "course_code"]);\n';
    html += '                 $.each(courses, function(index, course) {\n';
    html += '                     var course_id   = course["course_id"];\n';
    html += '                     var start_at    = course["start_at"];\n';
    html += '                     var name        = course["name"];\n';
    html += '                     var course_code = course["course_code"];\n';
    html += '                     $("tbody").append(`<tr><td>${course_id}</td><td>${start_at}</td><td>${name}</td><td>${course_code}</td></tr>`)\n';
    html += '                 });\n';
    html += '             });\n';
    html += '         });\n';
    html += '        </script>\n';
    html += '    </body>\n';
    html += '</html>\n';
    /*
    html += '<html>';
    html += '<head>';
    html += '<title>Get Courses TEST </title>';
    html += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>';
    html += '<script>var access_token="'+access_token+'";</script>';
    html += '<script src="UDCanvasAPI.js"></script>';
    html += '</head>';
    html += '<body>';
    html += '<p>';
    html += '<button id="courses_button" style="height:100px;width:300px;margin: 0 auto;display: block;">Click Here to Get Courses</button>';
    html += '</p>';
    html += '<script>\n';
    html += '$(document).ready(function () {\n';
    html += '$("#courses_button").on("click", function() {\n';
    html += 'event.preventDefault();\n'
    html += 'var courses = udcanvas.getCourses();\n';
    html += 'console.table(courses, ["course_id", "start_at", "name", "course_code"]);\n';
    html += 'var course = udcanvas.getCourse(course_id = 1535463);\n';
    html += 'console.log(JSON.stringify(course, null, 2));\n';
    html += '});\n';
    html += '});\n';
    html += '</script>\n';
    html += '</body>';
    html += '</html>';
    */
    res.send(html);
});

app.listen(80, function() {
    console.log('server running at http://localhost:80');
});
