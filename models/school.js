var mongoose = require("mongoose");

var schoolSchema = mongoose.Schema(
    {
    "school_name":String,
    "email":String,
    "password":String,
    "country":String,
    "timezone":String,
    "bio":String,
    "img_url": String
    }
);
mongoose.model('School', schoolSchema);