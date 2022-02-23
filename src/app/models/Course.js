const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Tạo lược đồ Course
const Course = new Schema(
    {
        _id: {type: Number},
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        slug: {type: String, slug: 'name', unique: true},
        videoId: {type: String, required: true},
        deleted: {type: Boolean, default: false},
        createdAt: {type: Date},
        updatedAt: {type: Date},
        deletedAt: {type: Date},
        __v: {type: Number},
    },
    {
        _id: false,
        timestamps: true,
    }
);

// Plugin giúp auto generate slug từ field khác trong cùng 1 document
mongoose.plugin(slug);

// Plugin giúp override những method của mongoose
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

// Plugin giúp tự động tăng _id
Course.plugin(AutoIncrement);

// Query helper method
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        // check valid type
        const isValidType = ['asc', 'desc'].includes(req.query.type);

        // sort courses follow field name
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    } else {
        return this;
    }
};

// Export 1 model Course
module.exports = mongoose.model('Course', Course);
