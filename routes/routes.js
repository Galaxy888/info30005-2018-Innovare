const express = require('express');
const router = express.Router(); // ADD ARGUMENT? PERHAPS "EXPRESS"?
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);

// sign_up
router.get('/signup_school.ejs', controllers.fetchSignUP_school);
router.get('/signup_teacher.ejs', controllers.fetchSignUP_teacher);


// profile
router.get('/teacher_profile.ejs', controllers.fetchTeacher_profile);
router.get('/school_profile.ejs', controllers.fetchSchool_profile);

module.exports = router;