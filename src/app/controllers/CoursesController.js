const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CoursesController {
    // [GET] /create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /store
    store(req, res, next) {
        // insert a course into document in DB
        const newCourse = new Course(req.body);
        newCourse.save();
        res.redirect('/');
    }

    // [GET] /:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/course', {
                    course: mongooseToObject(course),
                });
            })
            .catch((error) => next(error));
    }
}

module.exports = new CoursesController();
