const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');
const store = require('../config/localStorage');

// Trong coursesController.show(): dùng req.params.slug để nhận được giá trị slug

router.post('/handle-form-actions', coursesController.handleFormActions);

if (store('isLoggedIn')) {
    router.get('/create', coursesController.create);
} else {
    router.get('/create', (req, res) => {
        res.redirect('/login');
    });
}

router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

module.exports = router;
