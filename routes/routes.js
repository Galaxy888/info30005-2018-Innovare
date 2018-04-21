const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);
router.get('/index.css', controllers.fetchMainPageCSS);
// router.get('/srilanka_school.jpg', controllers.fetchMainPageBg);
router.get('/school_above.jpg', controllers.fetchMainPageBg);
router.get('/logo.png', controllers.fetchMainPageLogo);
router.get('/users', controllers.fetchAllUsers);
router.get('/users/:id', controllers.fetchUser);

// sign_up
router.get('/signup_school.html', controllers.fetchSignUP_school);
router.get('/signup_teacher.html', controllers.fetchSignUP_teacher);
router.get('/signup.css', controllers.fetchSignUpCSS);

// profile
router.get('/teacher_profile.html', controllers.fetchTeacher_profile);
router.get('/school_profile.html', controllers.fetchSchool_profile);
router.get('/profile.css', controllers.fetchProfileCSS);
router.get('/dashboard.svg', controllers.fetchProfile_dashboard);
router.get('/setting.svg', controllers.fetchProfile_setting);
router.get('/subject.svg', controllers.fetchProfile_subject);
router.get('/teacher.svg', controllers.fetchProfile_teacher);
router.get('/timetable.svg', controllers.fetchProfile_timetable);
router.get('/Sign out.svg', controllers.fetchProfile_signOut);




module.exports = router;