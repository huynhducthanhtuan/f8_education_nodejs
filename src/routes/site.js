const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

router.use('/search', siteController.search);
router.use('/blog', siteController.blog);
router.use('/', siteController.index);

module.exports = router;
