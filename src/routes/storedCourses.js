const express = require('express');
const router = express.Router();
const storedCoursesController = require('../app/controllers/StoredCoursesController');

router.get('/:id/edit', storedCoursesController.edit);
router.put('/:id/update', storedCoursesController.update);
router.delete('/:id/delete', storedCoursesController.delete);
router.get('/', storedCoursesController.show);

module.exports = router;
