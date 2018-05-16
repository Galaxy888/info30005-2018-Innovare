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
        "teacher_emails":[]
    }
);
mongoose.model('School', schoolSchema);