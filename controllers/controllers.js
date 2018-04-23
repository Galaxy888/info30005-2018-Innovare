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
        res.sendFile(path.join(__dirname, '..', '/public/css/index.css'));
    };

module.exports.fetchMainPageLogo =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/live_school.png'));
    };

module.exports.fetchMainPageLogo2 =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/innovare_logo.png'));
    };

module.exports.fetchMainPageBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/school_above.jpg'));
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
        res.sendFile(path.join(__dirname, '..', '/views/signup_school.html'));
    };

module.exports.fetchSignUP_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/signup_teacher.html'));
    };

module.exports.fetchSignUpCSS =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/css/signup.css'));
    };

module.exports.fetchSignUpBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/srilanka_school.jpg'));
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
        res.sendFile(path.join(__dirname, '..', '/public/css/profile.css'));
    };

module.exports.fetchProfile_dashboard =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/dashboard.svg'));
    };

module.exports.fetchProfile_setting =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/setting.svg'));
    };

module.exports.fetchProfile_school =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/school.svg'));
    };

module.exports.fetchProfile_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/teacher.svg'));
    };


module.exports.fetchProfile_timetable =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/timetable.svg'));
    };

module.exports.fetchProfile_classroom =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/classroom.svg'));
    };

module.exports.fetchProfile_signOut =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/signOut.svg'));
    };

module.exports.fetchProfile_martin =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/martin_profile.jpg'));
    };

module.exports.fetchProfileBg_school =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/sri_lanka_jungle.jpg'));
    };
module.exports.fetchProfileBg_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/sri_lanka_tea_plantation.jpg'));
    };
module.exports.fetchProfile_melbUni =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/img/melb_uni.svg'));
    };
//timetable part
module.exports.fetchProfile_schedule =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/css/jquery.schedule.css'));
    };
module.exports.fetchProfile_ui =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/css/jquery-ui.css'));
    };
module.exports.fetchProfile_jquery =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/js/jquery.js'));
    };
module.exports.fetchProfile_jquery_schedule =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/js/jquery.schedule.js'));
    };
module.exports.fetchProfile_jquery_ui =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/js/jquery-ui.js'));
    };



//live_school
module.exports.fetchLiveSchool_school =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/live_school_school.html'));
    };

module.exports.fetchLiveSchool_teacher =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/views/live_school_teacher.html'));
    };

module.exports.fetchLiveSchool_css =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', '/public/css/profile.css'));
    };