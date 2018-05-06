const express = require('express');
const router = express.Router(); // ADD ARGUMENT? PERHAPS "EXPRESS"?
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);

// sign_up
router.get('/signup_school', controllers.fetchSignUP_school);
router.get('/signup_teacher', controllers.fetchSignUP_teacher);


// profile
router.get('/teacher_profile', controllers.fetchTeacher_profile);
router.get('/school_profile', controllers.fetchSchool_profile);


// Create new teacher
router.post('/signup_teacher',controllers.createTeacher);

// Find all teacher
router.get('/signup_teacher',controllers.findAllTeachers);

// Find one teacher by id
router.get('/signup_teacher/:id',controllers.findOneTeacher);

module.exports = router;