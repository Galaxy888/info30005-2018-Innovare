// var app = express();
const express = require('express');
const app = express();


app.set('view engine','ejs');
// const route = require('./routes/routes');
// app.use(route);

const users=require("./models/db");
const PORT = process.env.PORT||3000;

app.get('/',function(req,res){
    // res.send("Hello World");
    // res.sendFile('index.html', {root: __dirname })
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/index.css', function(req, res) {
    res.sendFile(__dirname + "/" + "index.css");
});

app.get('/srilanka_school.jpg', function(req, res) {
    res.sendFile(__dirname + "/" + "srilanka_school.jpg");
});



app.get('/users',function(req,res){
        res.send(users);
});


app.get('/users/:id' ,function(req,res) {

    const userId = req.params.id;
    // res.render('user');
    if (userId < 10) {
        res.render('user.ejs', {user: users[userId]});
    }else{
        res.send("can not find");
    }
        // res.send("<h1>"+users[userId]+"</h1>");
});


app.listen(3000,function(){
    console.log('Express serving at port 3000')
});
