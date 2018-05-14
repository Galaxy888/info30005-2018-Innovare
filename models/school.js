var mongoose = require("mongoose");

var schoolSchema;
schoolSchema = mongoose.Schema(
    {
        "school_name": String,
        "email": String,
        "password": String,
        "country": String,
        "timezone": String,
        "bio": String,
        "teacher_emails":[]
    }
);
mongoose.model('School', schoolSchema);