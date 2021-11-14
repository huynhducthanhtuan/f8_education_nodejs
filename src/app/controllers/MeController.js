const Course = require('../models/Course');
const {mongooseToObject, mongoosesToObject} = require('../../util/mongoose');

class MeController {
    // [GET] /stored/courses
    showStored(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored/courses/courses', {
                    courses: mongoosesToObject(courses),
                })
            )
            .catch((error) => next(error));
    }

    // [GET] /stored/courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('me/stored/courses/edit', {
                    course: mongooseToObject(course),
                })
            )
            .catch((error) => next(error));
    }

    // [PUT] /stored/courses/:id/update
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then((course) => res.redirect('/me/stored/courses'))
            .catch((error) => next(error));
    }

    // [DELETE] /stored/courses/:id/delete
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
            .then((course) => res.redirect('back'))
            .catch((error) => next(error));
    }

    // [GET] /trash/courses
    showTrash(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash/courses/courses', {
                    courses: mongoosesToObject(courses),
                })
            )
            .catch((error) => next(error));
    }

    // [PATCH] /trash/courses/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then((course) => res.redirect('/me/trash/courses/courses'))
            .catch((error) => next(error));
    }

    // [DELETE] /trash/courses/:id
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then((course) => res.redirect('back'))
            .catch((error) => next(error));
    }
}

module.exports = new MeController();
