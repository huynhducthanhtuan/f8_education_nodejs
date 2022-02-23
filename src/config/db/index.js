const mongoose = require('mongoose');
// const MONGODB_URI_LOCAL = 'mongodb://localhost:27017/f8_education_nodejs';
const MONGODB_URI =
    'mongodb+srv://zyxnone120:SAKHFWEKJWE@f8-education.i9nau.mongodb.net/f8_education_nodejs?retryWrites=true&w=majority';

async function connect() {
    try {
        mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
        mongoose.connection.on('error', (error) => console.log(error));
        mongoose.connection.on('open', () => {
            console.log('Connected to MongoDB database.');
        });
    } catch (err) {
        console.log('Connect DB fail with error:', err);
    }
}

module.exports = {connect};
