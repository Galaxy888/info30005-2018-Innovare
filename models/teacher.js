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
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": []
    }
);

mongoose.model('Teacher', teacherSchema);
//var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);