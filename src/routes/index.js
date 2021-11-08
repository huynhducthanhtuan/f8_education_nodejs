const loginRouter = require('./login.js');
const siteRouter = require('./site.js');

function route (app) {

    // Trang chính: login
    app.use('/login', loginRouter);

    // Những trang nhỏ khác: search, blog, contact, ...
    app.use('/', siteRouter);
}

module.exports = route;
