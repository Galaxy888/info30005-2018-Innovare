var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    country: {type: String},
    timezone: {type: String},
    bio: {type: String}

});

var User = mongoose.model('myuser', userSchema);
module.exports = User;