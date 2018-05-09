// const users = require('../models/db_old')
// var mongoose = require('mongoose');
// var Teacher = mongoose.model('Teacher');
var alert = require('alert-node');
var Teacher = require('../models/db');
var School = require('../models/db');

//main
module.exports.fetchMainPage =
    function(req,res){
        if (!req.session.user) {
            res.render('index.ejs');
        }
        else res.render('teacher_profile.ejs', req.session.user);
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


// Display teacher profile if signed in
module.exports.fetchTeacher_profile =
    function(req,res) {
        if (!req.session.user) {
            return res.status(401).send();
        }
        res.render('teacher_profile.ejs');
    };

module.exports.fetchSchool_profile =
    function(req,res){
        // var path = require("path");
        // res.sendFile(path.join(__dirname, '..', '/views/school_profile.ejs'));
        res.render('school_profile.ejs');
    };


module.exports.fetchSignup_success =
    function(req,res){
        res.render('signup_success.ejs');
    };


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
        //res.render('signup_success.ejs')
    };

module.exports.createSchool =
    function(req,res){
        var school = new School({
            "school_name":req.body.school_name,
            "email":req.body.email,
            "password":req.body.password,
            "countryId": req.body.countryId,
            "timezoneId": req.body.timezoneId
            // "photo":req.body.photo
        });
        // console.log(req.body.email);
        // console.log("666666666");

        school.save(function(err,newSchool){
            if(!err){
                res.send(newSchool);

            }else{
                res.sendStatus(400);
            }
        });
        res.render('school_profile.ejs', school);
        //res.render('signup_success.ejs')
    };


module.exports.logUserIn =
    function(req,res) {
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
            req.session.user = teacher;
            res.render('teacher_profile.ejs', teacher);
        })
    }


module.exports.logUserOut = function (req, res, next) {
    if (req.session) {
        req.session.user = null; // My own fix
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.render('index.ejs');
            }
        });
        console.log('Logged out.');
    }
}


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
