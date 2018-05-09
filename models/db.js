// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://Yu:Yu12345678@ds115420.mlab.com:15420/teacher',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

// require('./teacher.js');
// require('./school.js')

var teacherSchema = mongoose.Schema(
    {
        teacher_name:String,
        email:String,
        password:String
        // "address":String,
        // "distance":String,
        // "rating":String,
        // "photo":String
    }
);
var Teacher = module.exports = mongoose.model('Teacher', teacherSchema);

// module.exports.createTeacher = function (newTeacher,callback) {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(newTeacher, password, salt, function (err, hash) {
//             // Store hash in your password DB.
//             newTeacher.password = hash;
//             newTeacher.save(callback);
//         });
//     });
//
// }
