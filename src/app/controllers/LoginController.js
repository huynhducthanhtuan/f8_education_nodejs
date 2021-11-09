class LoginController {
    // [GET] /
    index(req, res) {
        res.render('login');
    }

    // [GET] /:slug
    show(req, res) {
        res.send('LOGIN DETAIL...');
    }
}

module.exports = new LoginController();
