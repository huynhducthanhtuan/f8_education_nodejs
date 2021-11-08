// Lấy ra thành phần Model
const Course = require('../models/Course');

class LoginController {
    index(req, res) {
        Course.find({}, (err, course) => {
            if (!err) {
                res.send(course);
            }
            else {
                console.log("Error", err);
            }
        });
        // res.render('login');
    }
    show(req, res) {
        res.send('LOGIN DETAIL...');
    }
}

module.exports = new LoginController;
