var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "teacher_name":String,
        "email":String,
        "password":String
        // "timezone":String,
        // "bio":String,
        // "photo":String
    }
);

// mongoose.model('Teacher', teacherSchema);
var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);