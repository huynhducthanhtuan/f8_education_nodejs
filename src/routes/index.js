const coursesRoute = require('./courses');
const loginRoute = require('./login');
const meRoute = require('./me');
const sitesRoute = require('./sites');

function route(app) {
    app.use('/courses', coursesRoute);
    app.use('/login', loginRoute);
    app.use('/me', meRoute);
    app.use('/', sitesRoute);
}

module.exports = route;
