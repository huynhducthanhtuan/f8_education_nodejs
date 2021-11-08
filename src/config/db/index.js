const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_blog_dev');
        console.log("Connect DB successfully");
    }
    catch (err) {
        console.log("Connect DB fail with error:", err);
    }
}

module.exports = { connect };
