const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tạo 1 lượt đồ (Schema)
const Course = new Schema({
    name: { type: String, minlength: 10, maxLength: 255 },
    description: { type: String, minlength: 10, maxLength: 600 },
    image: { type: String, minlength: 10, maxLength: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// export ra 1 Model
module.exports = mongoose.model('Course', Course);
