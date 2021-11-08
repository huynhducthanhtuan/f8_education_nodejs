
// Class constructor
class LoginController {

    index (req, res) {
        res.render('login');
    }
    show (req, res) {
        res.send('LOGIN PAGE DETAIL');
    }
}

module.exports = new LoginController;
