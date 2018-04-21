const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.fetchMainPage);
router.get('/index.css', controllers.fetchMainPageCSS);
// router.get('/srilanka_school.jpg', controllers.fetchMainPageBg);
router.get('/school_above.jpg', controllers.fetchMainPageBg);
router.get('/users', controllers.fetchAllUsers);
router.get('/users/:id', controllers.fetchUser);

router.get('/signup_school.html', controllers.fetchSignUP_school);
router.get('/signup_teacher.html', controllers.fetchSignUP_teacher);
router.get('/signup.css', controllers.fetchSignUpCSS);
router.get('/teacher_profile.html', controllers.fetchTeacher_profile);
router.get('/school_profile.html', controllers.fetchSchool_profile);
router.get('/profile.css', controllers.fetchProfileCSS);



module.exports = router;