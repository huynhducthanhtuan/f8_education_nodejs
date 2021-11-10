const loginRoute = require('./login');
const sitesRoute = require('./sites');
const coursesRoute = require('./courses');
const storedCoursesRoute = require('./storedCourses');

function route(app) {
    app.use('/me/stored/courses', storedCoursesRoute);
    app.use('/courses', coursesRoute);
    app.use('/login', loginRoute);
    app.use('/', sitesRoute);
}

module.exports = route;
