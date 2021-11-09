const Course = require('../models/Course');
const {mongoosesToObject} = require('../../util/mongoose.js');

function SiteController() {
    this.index = (req, res, next) => {
        Course.find({})
            .then((courses) => {
                //courses = courses.map((course) => course.toObject());

                res.render('home', {
                    courses,
                });
            })
            .catch((error) => next(error));

        // Course.findOne({name: 'ReactJS'})
        //     .then((course) => res.json(course))
        //     .catch((error) => next(error));

        // Course.findById('61893af06253e1c22842f97f')
        //     .then((course) => res.json(course))
        //     .catch((error) => next(error));

        // Phản hồi về json
        // res.json({course: 1, index: 1});
        // res.send({course: 2, index: 2});
    };

    this.search = (req, res) => res.render('search');
    this.blog = (req, res) => res.send('BLOG PAGE...');
}

module.exports = new SiteController();
