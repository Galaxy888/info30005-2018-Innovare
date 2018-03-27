const users = require('../models/db');

module.exports.fetchMainPage =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', 'index.html'));
    };

module.exports.fetchMainPageCSS =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', 'index.css'));
    };

module.exports.fetchMainPageBg =
    function(req,res){
        var path = require("path");
        res.sendFile(path.join(__dirname, '..', 'srilanka_school.jpg'));
    };

module.exports.fetchAllUsers =
    function(req,res){
        res.send(users);
    };

module.exports.fetchUser =
    function(req,res){
    const user = users[req.params.id];
    res.render('user.ejs',{user:user});
    };
