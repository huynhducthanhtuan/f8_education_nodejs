const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Plugin của mongose, giúp auto generate slug từ field khác trong cùng document (DB)
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// Tạo lược đồ Course
const Course = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        slug: {type: String, slug: 'name', unique: true},
        videoId: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

// Tạo model Course
const courseModel = mongoose.model('Course', Course);

module.exports = courseModel;
