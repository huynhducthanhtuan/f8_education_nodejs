const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path');
const port = 5000;

// HTTP logger, nodemon: lắng nghe sự thay đổi file và debug
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Config static files
app.use(express.static(path.join(__dirname, '/resources/public')));

// Middleware
//  -> xử lý form HTML
app.use(express.urlencoded({
    extended: true
}));
//  -> xử lý JS
app.use(express.json());


// Query parameters
// + Syntax: `url?key=value&key=value`
// + Đính lên URL những cặp key=value 
//      .key: value của attribute name của thẻ input) 
//      .value: value của ô input đó
// + Header object: Query String Parameters
// + Get data: => req.query

// Form Data
// + Lưu dữ liệu khi submit form, ko đính lên URL (khi form có method: post)
// + Header object: Form Data
// + Get data: => req.body


// Routing
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


app.listen(port, () => console.log('listening at http://localhost:' + port));
