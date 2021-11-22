const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

// Tạo lược đồ Course
const Course = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        slug: {type: String, slug: 'name', unique: true},
        videoId: {type: String, required: true},
        deleted: {type: Boolean, default: false},
    },
    {
        timestamps: true,
    }
);

// Plugin giúp auto generate slug từ field khác trong cùng document (DB)
mongoose.plugin(slug);

// Plugin giúp override những method của mongoose
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

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
