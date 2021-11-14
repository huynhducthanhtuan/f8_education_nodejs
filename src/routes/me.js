const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/courses/:id/edit', meController.edit);
router.put('/stored/courses/:id/update', meController.update);
router.delete('/stored/courses/:id/delete', meController.delete);
router.get('/stored/courses/', meController.showStored);

router.patch('/trash/courses/:id/restore', meController.restore);
router.delete('/trash/courses/:id', meController.forceDestroy);
router.get('/trash/courses', meController.showTrash);

module.exports = router;
