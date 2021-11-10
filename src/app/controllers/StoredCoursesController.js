const Course = require('../models/Course');
const {mongooseToObject, mongoosesToObject} = require('../../util/mongoose');

class StoredCoursesController {
    // [GET] /show
    show(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('stored/courses/courses', {
                    courses: mongoosesToObject(courses),
                })
            )
            .catch((error) => next(error));
    }

    // [GET] /:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('stored/courses/edit', {
                    course: mongooseToObject(course),
                })
            )
            .catch((error) => next(error));
    }
}

module.exports = new StoredCoursesController();
