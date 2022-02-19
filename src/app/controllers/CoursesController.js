const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CoursesController {
    // [POST] /handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete': {
                Course.delete({_id: {$in: req.body.courseIds}})
                    .then((courses) => res.redirect('back'))
                    .catch((error) => next(error));
                break;
            }
            case 'restore': {
                Course.restore({_id: {$in: req.body.courseIds}})
                    .then((courses) => res.redirect('back'))
                    .catch((error) => next(error));
                break;
            }
            case 'force-destroy': {
                Course.deleteMany({_id: {$in: req.body.courseIds}})
                    .then((courses) => res.redirect('back'))
                    .catch((error) => next(error));
                break;
            }
            default: {
                throw new Error('Invalid action!');
            }
        }
    }

    // [GET] /create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /store
    store(req, res, next) {
        // insert a course into document in DB
        const newCourse = new Course(req.body);

        newCourse
            .save()
            .then((course) => res.redirect('/'))
            .catch((error) => next(error));
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
