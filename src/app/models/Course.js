const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tạo lược đồ Course
const Course = new Schema({
    name: {type: String, minLength: 10, maxLength: 255},
    description: {type: String, minLength: 10, maxLength: 600, default: ''},
    image: {type: String, minLength: 10, maxLength: 255},
    slug: {type: String, minLength: 10, maxLength: 255},
    videoId: {type: String, minLength: 10, maxLength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

// Tạo model Course
const courseModel = mongoose.model('Course', Course);

module.exports = courseModel;
