var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "teacher_name":String,
        "email":{type: String, unique: true},
        "password":String,
        "country":String,
        "timezone":String,
        "bio":String,
        "img_url": String,
        "school_emails": [], // remove later
        "subjects": [],
        "monday": [],
        "tuesday": [],
        "wednesday": [],
        "thursday": [],
        "friday": [],
        "saturday": [],
        "sunday": []
    }
);

mongoose.model('Teacher', teacherSchema);
//var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);