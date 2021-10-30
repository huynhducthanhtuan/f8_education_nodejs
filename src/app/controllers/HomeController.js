
// Constructor (function constructor)
function HomeController () {

    this.index = (req, res) => {
        res.render('home');
    }
    this.show = (req, res) => {
        res.send('HOME PAGE DETAIL');
    }
}

module.exports = new HomeController();
