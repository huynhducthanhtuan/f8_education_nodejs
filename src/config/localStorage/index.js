// library help work with localStorage in NodeJS
const store = require('store2');

// set automatic value for isLoggedIn
store('isLoggedIn', false);

// export localStorage object
module.exports = store;
