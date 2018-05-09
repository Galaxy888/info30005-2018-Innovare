var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "email":String,
        "name":String,
        "password":String
        // "timezone":String,
        // "bio":String,
        // "photo":String
    }
);
mongoose.model('Teacher', teacherSchema);
