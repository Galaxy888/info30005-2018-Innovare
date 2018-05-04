var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "email":String,
        "name":String,
        "password":String
        // "address":String,
        // "distance":String,
        // "rating":String,
        // "photo":String
    }
);
mongoose.model('Teacher', teacherSchema);
