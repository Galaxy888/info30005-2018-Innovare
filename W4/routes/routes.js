const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
router.get('/', controllers.fetchMainPage);
router.get('/users', controllers.fetchAllPosts);
router.get('/users/:id', controllers.fetchPost);
module.exports= router;