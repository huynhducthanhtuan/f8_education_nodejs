// Import libraries.
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const router = require('./routes');
const database = require('./config/db');
const helpers = require('./helpers/handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: helpers,
    })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Config static files
app.use(express.static(path.join(__dirname, 'resources', 'public')));

// Middleware: xử lý form HTML, JS
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// override-method expressjs
app.use(methodOverride('_method'));

// Use Middleware
app.use(sortMiddleware);

// Routing
router(app);

// Connect database
database.connect();

// Listen port
app.listen(port, () =>
    console.log('App is listening at http://localhost:' + port)
);

//#region Notes
/*
    1. Nodemon: lắng nghe sự thay đổi file và debug

    2a. Query parameters
        + Syntax: `url?key=value&key=value`
        + Đính lên URL những cặp key=value
            .key: value của attribute name của thẻ input)
            .value: value của ô input đó
        + Header object: Query String Parameters
        + Get data: => req.query

    2b. Form Data
        + Lưu dữ liệu khi submit form, ko đính lên URL (khi form có method: post)
        + Header object: Form Data
        + Get data: => req.body

    3. Routing
        app.get('/', (req, res) => res.render('home'));
        app.post('/', (req, res) => {
            console.log(req.body);
            res.render('home');
        });

        app.get('/login', (req, res) => res.render('login'));
        app.post('/login', (req, res) => {
            console.log(req.body);
            res.render('login');
        });
*/
//#endregion
