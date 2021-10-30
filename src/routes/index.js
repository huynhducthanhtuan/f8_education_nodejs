const loginRouter = require('./login.js');
const homeRouter = require('./home.js');

function route (app) {
    app.use('/login', loginRouter);
    app.use('/', homeRouter);
}

module.exports = route;
