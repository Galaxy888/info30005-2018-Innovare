var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
    "email":String,
    "name":String,
    "password":String
    // "timezone":String,
    // "bio":String,
    // "photo":String
})
var School = mongoose.model('School', userSchema);
module.exports = School;