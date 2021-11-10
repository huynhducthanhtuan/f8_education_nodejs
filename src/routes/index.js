const loginRoute = require('./login');
const sitesRoute = require('./sites');
const coursesRoute = require('./courses');

function route(app) {
    app.use('/courses', coursesRoute);
    app.use('/login', loginRoute);
    app.use('/', sitesRoute);
}

module.exports = route;
