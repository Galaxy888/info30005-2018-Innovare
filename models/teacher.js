var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "teacher_name":String,
        "email":String,
        "password":String,
        "country":String,
        "timezone":String,
        "bio":String,
        "availabilities": Object
    }
);

mongoose.model('Teacher', teacherSchema);
//var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);