const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

// Trong coursesController.show(): dùng req.params.slug để nhận được giá trị slug
router.get('/:slug', coursesController.show);

module.exports = router;
