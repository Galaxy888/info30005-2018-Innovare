const users = require('../models/db');
module.exports.fetchMainPage =
    function(req,res){
        res.send(url("index.html"));
    };

module.exports.fetchAllPosts =
    function(req,res){
        res.send(users);
    };

module.exports.fetchPost =
    function(req,res){
    const user = users[req.params.id];
    res.render('post_template',{user:user});
    };
