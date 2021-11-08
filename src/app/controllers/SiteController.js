
function SiteController () {

    this.index = (req, res) => res.render('home');

    this.search = (req, res) => res.send('SEARCH PAGE...');

    this.blog = (req, res) => res.send('BLOG PAGE...');
}

module.exports = new SiteController;
