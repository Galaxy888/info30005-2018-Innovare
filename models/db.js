// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://YU:YU12345678@ds237610.mlab.com:37610/live_school',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./teacher.js');
require('./school.js');

