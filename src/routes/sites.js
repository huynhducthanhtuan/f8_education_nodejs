const express = require('express');
const router = express.Router();
const sitesController = require('../app/controllers/SitesController');
const store = require('../config/localStorage');

if (store('isLoggedIn')) {
    router.get('/search', sitesController.search);
    router.get('/', sitesController.index);
} else {
    router.get('/search', (req, res) => {
        res.redirect('/login');
    });
    router.get('/', (req, res) => {
        res.redirect('/login');
    });
}

module.exports = router;
