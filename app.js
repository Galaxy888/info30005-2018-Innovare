var express = require('express');
// var users = require("./models/db");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Database setup
require('./models/db.js')


app.set('view engine','ejs');

var router = require('./routes/routes.js');
app.use(router);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/public'));


// Start the server
var PORT = process.env.PORT||3000;
app.listen(PORT, function(){
    console.log('Express listening on port 3000npm ');
});

