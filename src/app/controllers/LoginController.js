class LoginController {
    // [GET] /
    index(req, res) {
        res.render('login');
    }
}

module.exports = new LoginController();
