// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://Yu:Yu12345678@ds115420.mlab.com:15420/teacher',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./teacher.js');
require('./school.js');

