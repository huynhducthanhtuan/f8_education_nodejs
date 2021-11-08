// Import libraries
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const port = 5000;
const router = require('./routes/index.js');


// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Config static files
app.use(express.static(path.join(__dirname, '/resources/public')));

// Middleware: xử lý form HTML, JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing
router(app);

// Listen port
app.listen(port, () => console.log('Listening at http://localhost:' + port));


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


