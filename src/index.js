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

// sortMiddleware
app.use(sortMiddleware);

// Routing
router(app);

// Connect database
database.connect();

// Listen port
app.listen(port, () =>
    console.log('App is listening at http://localhost:' + port)
);
