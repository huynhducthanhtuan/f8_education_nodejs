const express = require('express');
const PORT = process.env.PORT || 5000;
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const router = require('./routes');
const database = require('./config/db');
const helpers = require('./helpers/handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware');
const { exec } = require('child_process');

const app = express();
require('dotenv').config();

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

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(sortMiddleware);

router(app);

database.connect();

app.listen(PORT, async() =>
    {
        var server = `http://localhost:${PORT}`;
        console.log(`App is listening at ${server}`);
        exec(`start ${server}`);
    }
);
