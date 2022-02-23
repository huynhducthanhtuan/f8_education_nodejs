const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');
const store = require('../config/localStorage');

router.get('/stored/courses/:id/edit', meController.edit);
router.put('/stored/courses/:id/update', meController.update);
router.delete('/stored/courses/:id/delete', meController.delete);

if (store('isLoggedIn')) {
    router.get('/stored/courses/', meController.showStored);
} else {
    router.get('/stored/courses/', (req, res) => {
        res.redirect('/login');
    });
}

router.patch('/trash/courses/:id/restore', meController.restore);
router.delete('/trash/courses/:id', meController.forceDestroy);
router.get('/trash/courses', meController.showTrash);

module.exports = router;
