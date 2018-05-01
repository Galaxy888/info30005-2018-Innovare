const express = require('express');
const router = express.Router(); // ADD ARGUMENT? PERHAPS "EXPRESS"?
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);
router.get('/public/css/index.css', controllers.fetchMainPageCSS);
// router.get('/srilanka_school.jpg', controllers.fetchMainPageBg);
//router.get('/public/img/school_above.jpg', controllers.fetchMainPageBg);
router.get('/public/img/live_school.png', controllers.fetchMainPageLogo);
router.get('/public/img/innovare_logo.png', controllers.fetchMainPageLogo2);
router.get('/users', controllers.fetchAllUsers);
router.get('/users/:id', controllers.fetchUser);

// sign_up
router.get('/signup_school.html', controllers.fetchSignUP_school);
router.get('/signup_teacher.html', controllers.fetchSignUP_teacher);
router.get('/public/css/signup.css', controllers.fetchSignUpCSS);
router.get('/public/img/srilanka_school.jpg', controllers.fetchSignUpBg);

router.post('/signup_school.html', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var newuser = new User();
})

// profile
router.get('/teacher_profile.html', controllers.fetchTeacher_profile);
router.get('/school_profile.html', controllers.fetchSchool_profile);
router.get('/public/css/profile.css', controllers.fetchProfileCSS);
router.get('/public/img/dashboard.svg', controllers.fetchProfile_dashboard);
router.get('/public/img/setting.svg', controllers.fetchProfile_setting);
router.get('/public/img/school.svg', controllers.fetchProfile_school);
router.get('/public/img/teacher.svg', controllers.fetchProfile_teacher);
router.get('/public/img/timetable.svg', controllers.fetchProfile_timetable);
router.get('/public/img/classroom.svg', controllers.fetchProfile_classroom);
router.get('/public/img/signOut.svg', controllers.fetchProfile_signOut);

router.get('/public/img/martin_profile.jpg', controllers.fetchProfile_martin);
router.get('/public/img/colegio_intisana.jpeg', controllers.fetchProfile_colegio_intisana);
router.get('/public/img/sri_lanka_jungle.jpg', controllers.fetchProfileBg_school);
router.get('/public/img/sri_lanka_tea_plantation.jpg', controllers.fetchProfileBg_teacher);
//timetable part
router.get('/public/css/jquery.schedule.css', controllers.fetchProfile_schedule);
router.get('/public/css/jquery-ui.css', controllers.fetchProfile_ui);
router.get('/public/js/jquery.js', controllers.fetchProfile_jquery);
router.get('/public/js/jquery.schedule.js', controllers.fetchProfile_jquery_schedule);
router.get('/public/js/jquery-ui.js', controllers.fetchProfile_jquery_ui);

//live_school
router.get('/live_school_school.html', controllers.fetchLiveSchool_school);
router.get('/live_school_teacher.html', controllers.fetchLiveSchool_teacher);
router.get('/public/css/live_school.css', controllers.fetchLiveSchool_css);


module.exports = router;