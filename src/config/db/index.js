const Course = require('../../app/models/Course.js');
const mongoose = require('mongoose');
// const mongouri = "mongodb://localhost:27017/f8_education_nodejs";
const mongouri =
    'mongodb+srv://zyxnone120:SAKHFWEKJWE@f8-education.i9nau.mongodb.net/f8_education_nodejs?retryWrites=true&w=majority';

async function connect() {
    try {
        mongoose.connect(mongouri, {useNewUrlParser: true});
        mongoose.connection.on('error', (error) => console.log(error));
        mongoose.connection.on('open', () => {
            console.log('Connected to MongoDB database.');
        });
    } catch (err) {
        console.log('Connect DB fail with error:', err);
    }
}

module.exports = {connect};
