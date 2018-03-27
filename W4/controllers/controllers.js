const users = require('../models/db');
module.exports.fetchMainPage =
    function(req,res){
        res.sendFile(__dirname + "/" + "index.html");
    };

module.exports.fetchAllUsers =
    function(req,res){
        res.send(users);
    };

module.exports.fetchUser =
    function(req,res){
    const user = users[req.params.id];
    res.render('post_template',{user:user});
    };
