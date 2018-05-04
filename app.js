var express = require('express');
// var users = require("./models/db");
var bodyParser = require('body-parser');

// Database setup
require('./models/db.js')

var router = require('./routes/routes');
var app = express();


app.use(bodyParser.json());

app.set('view engine','ejs');

app.use(router);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/public'));



// Start the server
var PORT = process.env.PORT||3000;
app.listen(PORT, function(){
    console.log('Express listening on port 3000npm ');
});

