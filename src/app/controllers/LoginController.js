class LoginController {
    index(req, res) {
        res.render('login');
    }
    show(req, res) {
        res.send('LOGIN DETAIL...');
    }
}

module.exports = new LoginController();
