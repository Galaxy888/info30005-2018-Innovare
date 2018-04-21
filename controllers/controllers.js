const users = require('../models/db');

//main
module.exports.fetchMainPage =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/index.html'));
    };

module.exports.fetchMainPageCSS =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/index.css'));
    };

module.exports.fetchMainPageLogo =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/innovare_logo.png'));
    };

module.exports.fetchMainPageBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/school_above.jpg'));
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
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/signup-school.html'));
    };

module.exports.fetchSignUP_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/signup-teacher.html'));
    };

module.exports.fetchSignUpCSS =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/signup.css'));
    };

module.exports.fetchSignUPBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/srilanka_school.jpg'));
    };


// profile
module.exports.fetchTeacher_profile =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/teacher_profile.html'));
    };

module.exports.fetchSchool_profile =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/school_profile.html'));
    };

module.exports.fetchProfileCSS =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/profile.css'));
    };

module.exports.fetchProfile_dashboard =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/dashboard.svg'));
    };

module.exports.fetchProfile_setting =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/setting.svg'));
    };

module.exports.fetchProfile_school =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/school.svg'));
    };

module.exports.fetchProfile_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/teacher.svg'));
    };


module.exports.fetchProfile_timetable =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/timetable.svg'));
    };

module.exports.fetchProfile_signOut =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/Sign out.svg'));
    };

module.exports.fetchProfile_martin =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/martin_profile.jpg'));
    };

module.exports.fetchProfileBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/sri_lanka_jungle.jpg'));
    };

