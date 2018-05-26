var mongoose = require("mongoose");

var schoolSchema = mongoose.Schema(
    {
        "school_name": String,
        "email": {type: String, unique: true},
        "password": String,
        "country": String,
        "timezone": String,
        "bio": String,
        "img_url": String,
        "classes": [{teacher_email: String, teacher_name: String, subject: String, day: String, time: String}],
        "teacher_emails":[]
    }
);
mongoose.model('School', schoolSchema);