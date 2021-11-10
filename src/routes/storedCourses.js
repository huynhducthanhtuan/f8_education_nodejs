const express = require('express');
const router = express.Router();
const storedCoursesController = require('../app/controllers/StoredCoursesController');

router.get('/:id/edit', storedCoursesController.edit);
router.put('/:id', storedCoursesController.update);
router.get('/', storedCoursesController.show);

module.exports = router;
