const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
        mongoose.connection.on('error', (error) => console.log(error));
        mongoose.connection.on('open', () => {
            console.log('Connected to MongoDB database.');
        });
    } catch (err) {
        console.log('Connect DB fail with error:', err);
    }
}

module.exports = {connect};
