const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);
router.get('/index',controllers.fetchMainPage);

router.post('/login', controllers.logUserIn);
router.get('/logout', controllers.logUserOut);


// sign_up
router.get('/signup_school', controllers.fetchSignUP_school);
router.get('/signup_teacher', controllers.fetchSignUP_teacher);
router.post('/signup_teacher',controllers.createTeacher);
router.post('/signup_school',controllers.createSchool);

//Update db
router.post('/update_teacher',controllers.updateTeacherAvailabilities);

//router.post('/signup_success',controllers.createTeacher);
//router.post('/signup_success',controllers.createSchool);

router.get('/signup_success', controllers.fetchSignup_success);


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