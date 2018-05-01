const express = require('express');
const users = require("./models/db");
const router = require('./routes/routes');

const app = express();

app.use(router);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/node_modules');
app.use(express.static('public'));

app.set('view engine','ejs');

const PORT = process.env.PORT||3000;

app.listen(PORT, function(){
    console.log('Express listening on port 3000npm ');
});

