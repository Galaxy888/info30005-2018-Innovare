/* Routes.js specifies the url relative paths that can be used and links them to functions
   inside controllers.js.
*/

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

// main
router.get('/', controllers.fetchMainPage);
router.get('/index',controllers.fetchMainPage);

// log in and log out
router.post('/login', controllers.logUserIn);
router.get('/logout', controllers.logUserOut);

// sign_up
router.post('/signup_teacher',controllers.createTeacher);
router.post('/signup_school',controllers.createSchool);
router.get('/signup_school', controllers.fetchSignUP_school);
router.get('/signup_teacher', controllers.fetchSignUP_teacher);


//Update db
router.post('/edit_teacher_profile',controllers.updateTeacherProfile);
router.post('/edit_teacher_subject',controllers.updateTeacherSubject);
router.post('/edit_teacher_timetable',controllers.updateTeacherTimetable);
router.post('/edit_school_profile',controllers.updateSchoolProfile);


//hire teacher - PERHAPS WE COULD CALL THIS "ADD CLASS"?
router.post('/hire_teacher',controllers.schoolHireTeacher);


// "REMOVE CLASS" CAN PROBABLY REPLACE "DELETE TEACHER"
router.post('/remove_class',controllers.removeClass);

// profile
router.get('/teacher_profile', controllers.fetchTeacher_profile);
router.get('/school_profile', controllers.fetchSchool_profile);


module.exports = router;