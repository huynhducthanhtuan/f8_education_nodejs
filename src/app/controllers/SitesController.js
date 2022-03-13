const Course = require('../models/Course');
const {mongoosesToObject} = require('../../util/mongoose.js');

function SitesController() {
    // [GET] /
    this.index = (req, res, next) => {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mongoosesToObject(courses),
                });
            })
            .catch((error) => next(error));
    };

    // [GET] /search
    this.search = (req, res) => res.render('search');
}

module.exports = new SitesController();
