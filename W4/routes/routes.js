const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
router.get('/', controllers.fetchMainPage);
router.get('/users', controllers.fetchAllUsers);
router.get('/users/:id', controllers.fetchUser);
module.exports = router;