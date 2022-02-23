const mongoose = require('mongoose');
const MONGODB_URI = require('./mongouri');

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
