const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);
router.post('/login', controllers.logUserIn);


// sign_up
router.get('/signup_school', controllers.fetchSignUP_school);
router.get('/signup_teacher', controllers.fetchSignUP_teacher);

router.post('/signup_teacher',controllers.createTeacher);


// profile
router.get('/teacher_profile', controllers.fetchTeacher_profile);
router.get('/school_profile', controllers.fetchSchool_profile);


// Create new teacher
// router.post('/sign_teacher_up',controllers.createTeacher);


// Find all teacher
// router.get('/signup_teacher',controllers.findAllTeachers);

// Find one teacher by id
router.get('/signup_teacher/:id',controllers.findOneTeacher);

module.exports = router;