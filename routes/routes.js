const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

//main
router.get('/', controllers.fetchMainPage);
router.get('/index',controllers.fetchMainPage);

router.post('/login', controllers.logUserIn);
router.get('/logout', controllers.logUserOut);


// sign_up
router.post('/signup_teacher',controllers.createTeacher);
router.post('/signup_school',controllers.createSchool);
router.get('/signup_school', controllers.fetchSignUP_school);
router.get('/signup_teacher', controllers.fetchSignUP_teacher);


//Update db
router.post('/update_teacher',controllers.updateTeacherAvailabilities);
router.post('/edit_teacher_profile',controllers.updateTeacherProfile);
router.post('/edit_school_profile',controllers.updateSchoolProfile);


//add teacher (OBSOLETE - JUST HIRE, NOW)
// router.post('/add_teacher',controllers.schoolAddTeacher);

//hire teacher - PERHAPS WE COULD CALL THIS "ADD CLASS"?
router.post('/hire_teacher',controllers.schoolHireTeacher);

//delete teacher
router.post('/delete_teacher',controllers.schoolDeleteTeacher);

// "REMOVE CLASS" CAN PROBABLY REPLACE "DELETE TEACHER"
router.post('/remove_class',controllers.removeClass);

// router.post('/signup_success',controllers.createTeacher);
// router.post('/signup_success',controllers.createSchool);
// router.get('/signup_success', controllers.fetchSignup_success);


// profile
router.get('/teacher_profile', controllers.fetchTeacher_profile);
router.get('/school_profile', controllers.fetchSchool_profile);


// Create new teacher
// router.post('/sign_teacher_up',controllers.createTeacher);


// Find all teacher
// router.get('/signup_teacher',controllers.findAllTeachers);

// Find one teacher by id
// router.get('/signup_teacher/:id',controllers.findOneTeacher);

module.exports = router;