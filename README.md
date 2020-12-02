# UDCanvasAPI Usage
> Note: The `udcanvas` javascript object is globally accessible.
> For now, these functions return all of the available data because I am not sure which variables are needed and which are not.
> In the future you may want to filter only needed variables.Currently, the UDCanvasAPI offers these helper functions.

## Functions()
|function|value|
|:---|:---|
|**udcanvas.getCourses()**|returns an array of **course** objects|
|**udcanvas.getCourse(Course ID)**|returns a **course** object matching a **Course ID**|
|**udcanvas.getCalendars()**|returns an array of **calendar** objects for all courses|
|**udcanvas.getCalendar(Course ID)**|returns a **calendar** object matching a **Course ID**|
|**udcanvas.getAssignments(CourseID)**|returns an array of **assignment** objects for all assignments matching a **Course ID**|
|**udcanvas.getAssignment(Course ID, Assignment ID)**|returns a **assignment** object matching a **Course ID**|

## Objects
**course**

|key|value|
|---:|:---|
|course_id|the unique identifier for the course|
|name|the full name of the course|
|course_code|the course code|
|start_at|the start date for the course|
|uuid|the UUID of the course|
|enrollments|A list of enrollments linking the current user to the course.|
|calendar|course calendar|
|assignments|list of assignments for the current course|

**assignment**

|key|value|
|---:|:---|
|assignment_id|the ID of the assignment|
|course_id|the ID of the course the assignment belongs to|
|name|the name of the assignment||due_at|the due date for the assignment|
|description|the assignment description, in an HTML fragment|
|html_url|the URL to the assignment's web page|
|submissions_download_url|the URL to download all submissions as a zip|
|grading_type|grading type: 'pass_fail', 'percent', 'letter_grade', 'gpa_scale', or 'points'|

**enrollment**

|key|value|
|---:|:---|
|enrollment_status|The state of the user's enrollment in the course|
|limit_privileges_to_course_section|User can only access his or her own course section|
|role|The enrollment role, for course-level permissions|
|role_id|The id of the enrollment role|
|type|The enrollment type|
|user_id|The unique id of the user|

# UDCanvasAPI Examples

## udcanvas.getCourses()
> ```js
> var courses = udcanvas.getCourses();
> ```
>
> ```js
> console.table(courses, ['course_id', 'start_at', 'name', 'course_code']);
> ```
>
> |(index)|course_id|start_at|name|course_code|
> |:---|:---|:---|:---|:---|
> |0|1375937|"2017-08-27T12:19:55Z"|"17F-CISC106-010/011/012: GEN COMPUTER SCIEN FOR ENGNR"|"17F-CISC106-010/011/012"|
> |1|1392399|"2018-01-13T21:14:00Z"|"18S-CPEG202-010: INTRO TO DIGITAL SYSTEMS"|"18S-CPEG202-010"|
> |2|1393983|"2018-01-30T16:08:41Z"|"18S-CISC181-012/013: INTRO TO COMPUTER SCIENCE II"|"18S-CISC181-012/013"|
> |3|1394170|"2018-02-05T05:58:06Z"|"18S-ENGL110-027: SEMINAR IN COMPOSITION"|"18S-ENGL110-027"|
> |4|1413912|"2018-08-28T15:29:03Z"|"18F-CPEG222-010: MICROPROCESSOR SYSTEMS"|"18F-CPEG222-010"|
> |5|1417869|"2018-08-28T16:44:44Z"|"18F-ELEG205-010: ANALOG CIRCUITS I"|"18F-ELEG205-010"|
> |...|...|...|...|...|

## udcanvas.getCourse(course_id)
> ```js
> var course = udcanvas.getCourse(course_id = 1375937);
> ```
> 
> ```js
> console.log(JSON.stringify(course, null, 2))
> ```
>
> ```js
> {
>   "course_id": 1375937,
>   "name": "17F-CISC106-010/011/012: GEN COMPUTER SCIEN FOR ENGNR",
>   "course_code": "17F-CISC106-010/011/012",
>   "start_at": "2017-08-27T12:19:55Z",
>   "uuid": "7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61",
>   "enrollments": [
>     {
>       "type": "student",
>       "role": "StudentEnrollment",
>       "role_id": 5215,
>       "user_id": 5430089,
>       "enrollment_state": "active",
>       "limit_privileges_to_course_section": false
>     }
>   ],
>   "calendar": {
>     "ics": "https://udel.instructure.com/feeds/calendars/course_7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61.ics",
>     "course_id": 1375937,
>     "name": "17F-CISC106-010/011/012: GEN COMPUTER SCIEN FOR ENGNR",
>     "uuid": "7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61"
>   },
>   "assignments": [
>     {
>       "assignment_id": 5936825,
>       "course_id": 1375937,
>       "name": "Quiz 1",
>       "due_at": "2017-09-08T03:59:00Z",
>       "description": "<link rel=\"stylesheet\" href=\"https://instructure-uploads.s3.amazonaws.com/account_250000000085416/attachments/79354153/canvas_global_app.css\"><p><a class=\"external\" href=\"https://quiz.cis.udel.edu/\" target=\"_blank\"><span>https://quiz.cis.udel.edu<span class=\"screenreader-only\"> (Links to an external site.)</span></span></a></p><script src=\"https://instructure-uploads.s3.amazonaws.com/account_250000000085416/attachments/79354152/canvas_global_app.js\"></script>",
>       "html_url": "https://udel.instructure.com/courses/1375937/assignments/5936825",
>       "submissions_download_url": "https://udel.instructure.com/courses/1375937/assignments/5936825/submissions?zip=1",
>       "grading_type": "percent"
>     },
>     ...
>   ]
> }
> ```

## udcanvas.getCalendars()
> ```js
> var calendars = udcanvas.getCalendars();
> ```
>
> ```js
> console.table(calendars, ['course_id', 'name', 'ics', 'uuid']);
> ```
> |(index)|course_id|name|ics|uuid|
> |:---|:---|:---|:---|:---|
> |0|1375937|"17F-CISC106-010/011/012: GEN COMPUTER SCIEN FOR ENGNR"|"https://udel.instructure.com/feeds/calendars/course_7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61.ics"|"7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61"|
> |1|1392399|"18S-CPEG202-010: INTRO TO DIGITAL SYSTEMS"|"https://udel.instructure.com/feeds/calendars/course_d1ZADthGQUp6fHzfEaLpXqRjPuMUQb6Kph4MmvAH.ics"|"d1ZADthGQUp6fHzfEaLpXqRjPuMUQb6Kph4MmvAH"|
> |2|1393983|"18S-CISC181-012/013: INTRO TO COMPUTER SCIENCE II"|"https://udel.instructure.com/feeds/calendars/course_4MBlzGLh0jPDnQOWdZYcYIS5885wuqDq3Tq9QrBn.ics"|"4MBlzGLh0jPDnQOWdZYcYIS5885wuqDq3Tq9QrBn"|
> |3|1394170|"18S-ENGL110-027: SEMINAR IN COMPOSITION"|"https://udel.instructure.com/feeds/calendars/course_oxWRysWIT8udwnHOvxXSjzKsXzCB8C3l6GaenbRD.ics"|"oxWRysWIT8udwnHOvxXSjzKsXzCB8C3l6GaenbRD"|
> |4|1413912|"18F-CPEG222-010: MICROPROCESSOR SYSTEMS"|"https://udel.instructure.com/feeds/calendars/course_b1dBq4kglviZmCEQet2jexe4EyusdkaSqvj3dB3F.ics"|"b1dBq4kglviZmCEQet2jexe4EyusdkaSqvj3dB3F"|
> |...|...|...|...|...|

## udcanvas.getCalendar(course_id = 1375937)
> ```js
> var calendar = udcanvas.getCalendar(course_id = 1375937);
> ```
> 
> ```js
> console.log(JSON.stringify(calendar, null, 2));
> ```
>
> ```js
> {
>   "ics": "https://udel.instructure.com/feeds/calendars/course_7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61.ics",
>   "course_id": 1375937,
>   "name": "17F-CISC106-010/011/012: GEN COMPUTER SCIEN FOR ENGNR",
>   "uuid": "7k6YOF6VZ5vKjrGPAd7ZebKSzK3mpiTtBRbC4O61"
> }
> ```

## udcanvas.getAssignments(course_id = 1375937)
> ```js
> var assignments = udcanvas.getAssignments(course_id = 1375937);
> ```
>
> ```js
> console.table(assignments, ['assignment_id', 'due_at', 'grading_type', 'name', 'html_url']);
> ```
>
> |(index)|assignment_id|due_at|grading_type|name|html_url|
> |:---|:---|:---|:---|:---|:---|
> |0|5936825|"2017-09-08T03:59:00Z"|"percent"|"Quiz 1"|"https://udel.instructure.com/courses/1375937/assignments/5936825"|
> |1|5938884|"2017-09-13T03:59:00Z"|"percent"|"Quiz 2"|"https://udel.instructure.com/courses/1375937/assignments/5938884"|
> |2|5939027|"2017-10-04T21:00:00Z"|"points"|"Midterm 1"|"https://udel.instructure.com/courses/1375937/assignments/5939027"|
> |3|5939028|"2017-11-08T22:00:00Z"|"points"|"Midterm 2"|"https://udel.instructure.com/courses/1375937/assignments/5939028"|
> |4|5939029|"2017-12-13T04:59:00Z"|"points"|"Final Exam"|"https://udel.instructure.com/courses/1375937/assignments/5939029"|
> |5|5939088|"2017-09-12T03:59:00Z"|"points"|"Lab 1 - Due"|"https://udel.instructure.com/courses/1375937/assignments/5939088"|
> |6|5939089|"2017-09-19T03:59:59Z"|"points"|"Lab 2"|"https://udel.instructure.com/courses/1375937/assignments/5939089"|
> |...|...|...|...|...|...|

## udcanvas.getAssignment(course_id = 1375937, assignment_id = 5939029);
> ```js
> var assignment = udcanvas.getAssignment(course_id = 1375937, assignment_id = 5939029);
> ```
> 
> ```js
> console.log(JSON.stringify(assignment, null, 2));
> ```
>
> ```js
> {
>   "assignment_id": 5939029,
>   "course_id": 1375937,
>   "name": "Final Exam",
>   "due_at": "2017-12-13T04:59:00Z",
>   "description": "<link rel=\"stylesheet\" href=\"https://instructure-uploads.s3.amazonaws.com/account_250000000085416/attachments/79354153/canvas_global_app.css\"><ul>\r\n<li>Covers:</li>\r\n<li>\n<a href=\"http://interactivepython.org/runestone/static/thinkcspy/index.html\">How to Think Like a Computer Scientist - Interactive Textbook</a>\r\n<ul>\r\n<li>Chapter 15 – Recursion</li>\r\n<li>Chapter 11 – Files</li>\r\n<li>Chapter 12 – Dictionaries</li>\r\n<li>Chapter 16 – Objects and Classes</li>\r\n</ul>\r\n</li>\r\n<li>\n<a href=\"http://interactivepython.org/runestone/static/pythonds/index.html\">Problem Solving with Algorithms and Data Structures -Interactive Textbook</a>\r\n<ul>\r\n<li>Chapter 2 – Algorithm Analysis - Sections 2.2 &amp; 2.3</li>\r\n<li>Chapter 5 – Sorting - Sections 5.3 - 5.9, 5.11 Skip(5.5 - Hashing)</li>\r\n</ul>\r\n</li>\r\n</ul><script src=\"https://instructure-uploads.s3.amazonaws.com/account_250000000085416/attachments/79354152/canvas_global_app.js\"></script>",
>   "html_url": "https://udel.instructure.com/courses/1375937/assignments/5939029",
>   "submissions_download_url": "https://udel.instructure.com/courses/1375937/assignments/5939029/submissions?zip=1",
>   "grading_type": "points"
> }
> ```

## udcanvas.coursesRAW;
The `udcanvas.coursesRAW` object contains all of the raw data and additional (assignments, calendars, etc) data.
Use if you really need additional data.

