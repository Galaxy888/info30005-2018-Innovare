var mongoose = require("mongoose");

var schoolSchema = mongoose.Schema(
    {
    "school_name":String,
    "email":String,
    "password":String,
    "country":String,
    "timezone":String,
    "bio":String
    }
);
mongoose.model('School', schoolSchema);