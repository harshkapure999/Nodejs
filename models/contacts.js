var mongoose = require('mongoose');

var contactsSchenma = mongoose.Schema({
    "name":"string",
    "status":"string",
});

module.exports = contactsSchenma;
