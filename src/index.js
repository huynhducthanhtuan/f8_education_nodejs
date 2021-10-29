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

// config static files
app.use(express.static(path.join(__dirname, 'resources/public')));


app.get('/', (req, res) => res.render('home'));
app.get('/login', (req, res) => res.render('login'));


app.listen(port, () => console.log('listening at http://localhost:' + port));


