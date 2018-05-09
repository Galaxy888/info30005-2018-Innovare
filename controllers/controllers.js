// const users = require('../models/db_old')
// var mongoose = require('mongoose');
// var Teacher = mongoose.model('Teacher');
var session = require('express-session');
var Teacher = require('../models/db')
// var School = mongoose.model('School');

//main
module.exports.fetchMainPage =
    function(req,res){
        // var path = require("path");
        // res.sendFile(path.join(__dirname, '..', '/views/index.ejs'));
        res.render('index.ejs');
    };

module.exports.fetchAllUsers =
    function(req,res){
        res.send(users);
    };

module.exports.fetchUser =
    function(req,res){
        const user = users[req.params.id];
        res.render('user.ejs',{user:user});
    };



// sign_up
module.exports.fetchSignUP_school =
    function(req,res){
        // var path = require("path");
        // res.sendFile(path.join(__dirname, '..', '/views/signup_school.ejs'));
        res.render('signup_school.ejs');
    };

module.exports.fetchSignUP_teacher =
    function(req,res){
        // var path = require("path");
        // res.sendFile(path.join(__dirname, '..', '/views/signup_teacher.ejs'));
        res.render('signup_teacher.ejs');
    };


// profile
module.exports.fetchTeacher_profile =
    function(req,res) {
        //if (!logged in) {
        //    return res.status(401).send();
        //}
        res.render('teacher_profile.ejs');
    };

module.exports.fetchSchool_profile =
    function(req,res){
        // var path = require("path");
        // res.sendFile(path.join(__dirname, '..', '/views/school_profile.ejs'));
        res.render('school_profile.ejs');
    };





// var createTeacher = function(req,res){
//     var teacher = new Teacher({
//         "email":req.b.email,
//         "name":req.body.name,
//         "password":req.body.password,
//         // "photo":req.body.photo
//     });
//     teacher.save(function(err,newTeacher){
//         if(!err){
//             res.send(newTeacher);
//         }else{
//             res.sendStatus(400);
//         }
//     });
// };
// module.exports.createTeacher = createTeacher;

module.exports.createTeacher =
    function(req,res){
        var teacher = new Teacher({
            "teacher_name":req.body.teacher_name,
            "email":req.body.email,
            "password":req.body.password,
            "country":req.body.country,
            "timezone":req.body.timezone,
            "bio":req.body.bio
            // "photo":req.body.photo
        });
        // console.log(req.body.email);
        // console.log("666666666");

        teacher.save(function(err,newTeacher){
            if(!err){
                res.send(newTeacher);
            }else{
                res.sendStatus(400);
            }
        });
         res.render('teacher_profile.ejs', teacher); // SHOULD ACCESS DATABASE DIRECTLY
    };

module.exports.logUserIn =
    function(req,res){
        var email = req.body.email;
        var password = req.body.password;
        console.log("Email: " + email + ", Password: " + password);

        Teacher.findOne({'email': email, 'password': password}, function (err, teacher) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!teacher) {
                console.log("Not there, pal!");
                return res.status(404).send();
            }

            res.render('teacher_profile.ejs', teacher);
        })




        //res.render('teacher_profile.ejs', teacher); // SHOULD ACCESS DATABASE DIRECTLY
    };




// module.exports.createTeacher =
//     function(req,res){
//         var teacher_name = req.body.teacher_name;
//         var email = req.body.email;
//         var password = req.body.password
//         // console.log(teacher_name)
//
//         var newTeacher = new Teacher({
//             teacher_name :teacher_name,
//             email :email,
//             password :password
//
//         });
//         Teacher.createTeacher(newTeacher,function (err,teacher) {
//             if(err) throw err;
//             console.log(teacher);
//         });
//
//         res.redirect('/')
//     };

module.exports.findAllTeachers =
    function (req,res) {
        Teacher.find(function(err,teachers){
            if(!err){
                res.send(teachers);
            }else{
                res.sendStatus(404);
            }
        });

    };

module.exports.findOneTeacher =
    function (req,res) {
        var teacherInx = req.params.id;
        Teacher.findById(teacherInx,function(err,teacher){
            if(!err){
                res.send(teacher);
            }else{
                res.sendStatus(404);
            }
        });

    };


// var Teacher= [
//     {
//         "email":"99809",
//         "name": "jack",
//         "password":"787879"
//     },
//     {
//         "email":"999",
//         "name": "jak",
//         "password":"78789"
//     },
//
// ]