/* This is the basic MongoDB schema for a school. All class information
   is stored here - teachers can find their connected classes by
   searching for any class that includes their email. We did consider
   creating a separate schema for classes, but decided that integrating
   them into the school schema was simple enough. */

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