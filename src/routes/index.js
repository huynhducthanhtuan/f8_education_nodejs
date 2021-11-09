const loginRoute = require('./login');
const siteRoute = require('./site');

function route(app) {
    app.use('/login', loginRoute);
    app.use('/', siteRoute);
}

module.exports = route;
