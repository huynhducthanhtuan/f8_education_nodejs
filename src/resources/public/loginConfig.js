var store = require('../../config/localStorage');

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = $('.login-form');
    var loginBtn = $('.login-btn');

    loginBtn.click(function (e) {
        e.preventDefault();
        store('isLoggedIn', true);
        loginForm.submit();
    });
});
