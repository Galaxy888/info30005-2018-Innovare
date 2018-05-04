const express = require('express');
const users = require("./models/db");
const router = require('./routes/routes');

const mongoose = require('mongoose')

const app = express();

app.set('view engine','ejs');

app.use(router);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/public'));
// app.use( express.static( "public" ))

const PORT = process.env.PORT||3000;

app.listen(PORT, function(){
    console.log('Express listening on port 3000npm ');
});

