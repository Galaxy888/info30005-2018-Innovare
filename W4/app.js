const express = require('express');
const users = require("./models/db");
const router = require('./routes/routes');

const app = express();

app.use(router);

app.set('view engine','ejs');


const PORT = process.env.PORT||3000;

app.listen(3000,function(){
    console.log('Express serving at port 3000')
});
