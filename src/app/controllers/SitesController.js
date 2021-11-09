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

        //#region Notes
        // Course.findOne({name: 'ReactJS'}) -> promise
        // Course.findById('61893af06253e1c22842f97f') -> promise

        // Phản hồi về json
        // res.json({course: 1, index: 1});
        // res.send({course: 2, index: 2});
        //#endregion
    };

    // [GET] /search
    this.search = (req, res) => res.render('search');
}

module.exports = new SitesController();
