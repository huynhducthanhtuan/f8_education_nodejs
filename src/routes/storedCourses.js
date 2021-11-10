const express = require('express');
const router = express.Router();
const storedCoursesController = require('../app/controllers/StoredCoursesController');

router.get('/:id/edit', storedCoursesController.edit);
router.get('/', storedCoursesController.show);

module.exports = router;
