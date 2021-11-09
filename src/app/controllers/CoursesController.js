const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CoursesController {
    // [GET] /:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('course', {
                    course: mongooseToObject(course),
                });
            })
            .catch((error) => next(error));
    }
}

module.exports = new CoursesController();
