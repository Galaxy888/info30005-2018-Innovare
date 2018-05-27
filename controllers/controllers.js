var alert = require('alert-node');
var mongoose = require('mongoose');
var Teacher = mongoose.model('Teacher');
var School = mongoose.model('School');

//main
module.exports.fetchMainPage =
    function(req,res){
        if (!req.session.user) {
            res.render('index.ejs');
        }
        else if (req.session.user.teacher_name != null) {
            School.collection.find().toArray(function (err, school_array) {
                res.render('teacher_profile.ejs', {teacher: req.session.user, school_array: school_array});
            })
        }
        else {
            Teacher.collection.find().toArray(function (err, teacher_array) {
                res.render('school_profile.ejs', {school: req.session.user, teacher_array: teacher_array});
            })
        }
    };

// sign_up
module.exports.fetchSignUP_school =
    function(req,res){
        res.render('signup_school.ejs');
    };

module.exports.fetchSignUP_teacher =
    function(req,res){
        res.render('signup_teacher.ejs');
    };


// Display teacher profile if signed in
module.exports.fetchTeacher_profile =
    function(req,res) {
     School.collection.find().toArray(function (err, school_array) {
                res.render('teacher_profile.ejs', {teacher: req.session.user, school_array: school_array});
            })
    };

// Display school profile if signed in
module.exports.fetchSchool_profile =
    function(req,res){
        Teacher.collection.find().toArray(function (err, teacher_array) {
            res.render('school_profile.ejs', {school: req.session.user, teacher_array: teacher_array});
        })

    };

module.exports.createTeacher =
    function(req,res){
        var teacher = new Teacher({
            "teacher_name":req.body.teacher_name,
            "email":req.body.email,
            "password":req.body.password,
            "country":req.body.country,
            "timezone":req.body.timezone,
            "bio":req.body.bio,
            "img_url": req.body.img_url
        });

        //"push" subject values from form into subjects array
        for (var i=0; i<req.body.subjects.length; i++) {
            teacher.subjects.push(req.body.subjects[i])
        }

        // "push" time values from form into each weekday array
        if (req.body.Monday != null) {
            for (var i = 0; i < req.body.Monday.length; i++) {
                teacher.Monday.push(req.body.Monday[i])
            }
        }
        if (req.body.Tuesday != null) {
            for (i = 0; i < req.body.Tuesday.length; i++) {
                teacher.Tuesday.push(req.body.Tuesday[i])
            }
        }
        if (req.body.Wednesday != null) {
            for (i = 0; i < req.body.Wednesday.length; i++) {
                teacher.Wednesday.push(req.body.Wednesday[i])
            }
        }
        if (req.body.Thursday != null) {
            for (i = 0; i < req.body.Thursday.length; i++) {
                teacher.Thursday.push(req.body.Thursday[i])
            }
        }
        if (req.body.Friday != null) {
            for (i = 0; i < req.body.Friday.length; i++) {
                teacher.Friday.push(req.body.Friday[i])
            }
        }
        if (req.body.Saturday != null) {
            for (i = 0; i < req.body.Saturday.length; i++) {
                teacher.Saturday.push(req.body.Saturday[i])
            }
        }
        if (req.body.Sunday != null) {
            for (i = 0; i < req.body.Sunday.length; i++) {
                teacher.Sunday.push(req.body.Sunday[i])
            }
        }

        // console.log(req.body.email);

        teacher.save(function(err,newTeacher){
            if(!err){
                School.collection.find().toArray(function (err, school_array) {
                    res.render('teacher_profile.ejs', {teacher: teacher, school_array: school_array});
                })
            }else{
                // res.sendStatus(400);
                alert('User email already exist!');
                res.render('signup_teacher.ejs');
            }
        });

    };

module.exports.updateTeacherAvailabilities =
    function(req,res){
        console.log(req.body.t_name);
        Teacher.collection.update(
            {email: req.session.user.email},
            {$set:
                    {teacher_name: req.body.t_name,
                        image_url: req.body.t_image_url,
                        bio: req.body.t_bio
                    }},
            function(err, res) {
                if (err) throw err;
            });
    };

module.exports.updateTeacherSubject =
    function(req,res){
        console.log(req.body.subjects);
        console.log(req.session.user.email);
        Teacher.collection.update(
            {email: req.session.user.email},
            {$set:
                    {subjects: req.body.subjects
                    }},
            function(err, res) {
                if (err) throw err;
            });

        req.session.user.subjects = req.body.subjects;
        School.collection.find().toArray(function (err, school_array) {
            res.render('teacher_profile.ejs', {teacher: req.session.user, school_array: school_array});
        })

    };

module.exports.updateTeacherTimetable =
    function(req,res){
        console.log(req.body.Monday);
        console.log(req.body.Tuesday);
        Teacher.collection.update(
            //???
            {email: req.session.user.email},
            {$set:
                    {Monday: req.body.Monday,
                    Tuesday: req.body.Tuesday,
                    Wednesday: req.body.Wednesday,
                    Thursday: req.body.Thursday,
                    Friday: req.body.Friday,
                    Saturday: req.body.Saturday,
                    Sunday: req.body.Sunday
                    }},
            function(err, res) {
                if (err) throw err;
            });
        req.session.user.Monday = req.body.Monday;
        req.session.user.Tuesday = req.body.Tuesday;
        req.session.user.Wednesday = req.body.Wednesday;
        req.session.user.Thursday = req.body.Thursday;
        req.session.user.Friday = req.body.Friday;
        req.session.user.Saturday = req.body.Saturday;
        req.session.user.Sunday = req.body.Sunday;
        School.collection.find().toArray(function (err, school_array) {
            res.render('teacher_profile.ejs', {teacher: req.session.user, school_array: school_array});
        })

    };

module.exports.updateTeacherProfile =
    function(req,res){
        // console.log(req.body.t_name);
        console.log(req.body.t_image_url);
        Teacher.collection.update(
            //???
            {email: req.session.user.email},
            {$set:
                    {teacher_name: req.body.t_name,
                    img_url: req.body.t_image_url,
                    bio: req.body.t_bio
                    }},
            function(err, res) {
            if (err) throw err;

        });

        req.session.user.teacher_name = req.body.t_name;
        req.session.user.img_url = req.body.t_image_url;
        req.session.user.bio = req.body.t_bio;

        School.collection.find().toArray(function (err, school_array) {
            res.render('teacher_profile.ejs', {teacher: req.session.user, school_array: school_array});
        })

    };

module.exports.updateSchoolProfile =
    function(req,res){
        console.log(req.body.s_name);
        School.collection.update(
            //???
            {email: req.session.user.email},
            {$set:
                    {school_name: req.body.s_name,
                        img_url: req.body.s_image_url,
                        bio: req.body.s_bio
                    }
            },
            function(err, res) {
                if (err) throw err;

            });

        req.session.user.school_name = req.body.s_name;
        req.session.user.img_url = req.body.s_image_url;
        req.session.user.bio = req.body.s_bio;

        Teacher.collection.find().toArray(function (err, teacher_array) {
            res.render('school_profile.ejs', {school: req.session.user, teacher_array: teacher_array});
        })

    };

module.exports.createSchool =
    function(req,res){
        var school = new School({
            "school_name":req.body.school_name,
            "email":req.body.email,
            "password":req.body.password,
            "country": req.body.country,
            "timezone": req.body.timezone,
            "bio": req.body.bio,
            "img_url": req.body.img_url
        });
        console.log(req.body.email);

        req.session.user = school;

        school.save(function(err,newSchool){
            if(!err){
                Teacher.collection.find().toArray(function (err, teacher_array) {
                    res.render('school_profile.ejs', {school: req.session.user, teacher_array: teacher_array});
                })
            }else{
                // res.sendStatus(400);
                    // Duplicate username
                alert('User email already exist!');
                res.render('signup_school.ejs');
            }
        });
    };


module.exports.logUserIn =
    function(req,res) {
        var email = req.body.email;
        var password = req.body.password;

        console.log("Email: " + email + ", Password: " + password);

        Teacher.findOne({'email': email, 'password': password}, function (err, teacher) {

            if (err) {
                console.log(err);
                req.flash('notify', '500: Error.'); // Error message - not working yet
                res.render('index.ejs');
            }
            else if (!teacher) {
               // Do nothing for now - need to check if user is a school

                School.findOne({'email': email, 'password': password}, function (err, school) {
                    if (err) {
                        console.log(err);
                        req.flash('notify', '500: Error.');
                        res.render('index.ejs');
                    }
                    else if (!school) {
                        console.log("Not there, pal!");
                        req.flash('notify', 'User not found, champ.');
                        res.render('index.ejs');
                    }
                    else {
                        Teacher.collection.find().toArray(function (err, teacher_array) {
                            req.session.user = school;
                            res.render('school_profile.ejs', {school: school, teacher_array: teacher_array});
                        })
                    }
                })

            }
            else {
                School.collection.find().toArray(function (err, school_array) {
                    req.session.user = teacher;
                    res.render('teacher_profile.ejs', {teacher: teacher, school_array: school_array});
                })
            }
        });


    };


module.exports.logUserOut = function (req, res, next) {
    if (req.session) {
        req.session.user = null; // My own fix
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.render('index.ejs');
            }
        });
        console.log('Logged out.');
    }
};


module.exports.schoolHireTeacher =
    function(req,res){
        var weekday;
        var time;
        if (req.body.Monday != null) {
            console.log("Monday's the day!");
            weekday = "Monday";
            time = req.body.Monday;
        }
        else if (req.body.Tuesday != null) {
            console.log("Tuesday's the day!");
            weekday = "Tuesday";
            time = req.body.Tuesday;
        }
        else if (req.body.Wednesday != null) {
            console.log("wednesday's the day!");
            weekday = "Wednesday";
            time = req.body.Wednesday;
        }
        else if (req.body.Thursday != null) {
            console.log("thursday's the day!");
            weekday = "Thursday";
            time = req.body.Thursday;
        }
        else if (req.body.Friday != null) {
            console.log("friday's the day!");
            weekday = "Friday";
            time = req.body.Friday;
        }
        else if (req.body.Saturday != null) {
            console.log("saturday's the day!");
            weekday = "Saturday";
            time = req.body.Saturday;
        }
        else if (req.body.Sunday != null) {
            console.log("sunday's the day!");
            weekday = "Sunday";
            time = req.body.Sunday;
        }

        console.log(req.body.teacher_name);

        var len = req.session.user.classes.length;
        var already_add = false;
        for(var i=0; i<len; i++){
            if(req.session.user.classes[i].teacher_email == req.body.teacher_email &&
                req.session.user.classes[i].day == weekday && req.session.user.classes[i].time == time){
                alert("You have already add the teacher at that time");
                already_add = true;
                break;
            }
        }

        if (already_add==false){
            req.session.user.classes.push({teacher_email: req.body.teacher_email, teacher_name: req.body.teacher_name,
                subject: req.body.subject, day: weekday, time: time});

            School.collection.update(
                {email: req.session.user.email},
                {$push: {classes: {teacher_email: req.body.teacher_email, teacher_name: req.body.teacher_name,
                            subject: req.body.subject, day: weekday, time: time}}}, function (err, res) {
                    if (err) throw err;
                    console.log("New class with " + req.body.teacher_name + " added to school schema");
                });
        }


        Teacher.collection.find().toArray(function (err, teacher_array) {
            res.render('school_profile.ejs', {school: req.session.user , teacher_array: teacher_array});
        })
    };


module.exports.removeClass = function(req,res) {
    School.collection.update(
        {email: req.session.user.email},
        {$pull: {classes: {teacher_email: req.body.cemail,
                            teacher_name: req.body.cname,
                            subject: req.body.csubject,
                            day: req.body.cday,
                            time: req.body.ctime}}

        }, function (err, res) {
            if (err) throw err;
            console.log("School email delete teacher schema");
        });

    var classes_array = req.session.user.classes;
    for (var i =0; i < classes_array.length; i++)
        if (classes_array[i].teacher_email === req.body.cemail && classes_array[i].subject === req.body.csubject
        && classes_array[i].day === req.body.cday && classes_array[i].time === req.body.ctime) {
            classes_array.splice(i,1);
            break;
        }

    Teacher.collection.find().toArray(function (err, teacher_array) {
        res.render('school_profile.ejs', {school: req.session.user , teacher_array: teacher_array});
    })
};

module.exports.schoolDeleteTeacher =
     function(req,res) {
         console.log(req.body.teacher_email);
         School.collection.update(
             {email: req.session.user.email},
             {$pull: {teacher_emails: req.body.teacher_email}}, function (err, res) {
             if (err) throw err;
             console.log("School email delete teacher schema");
         });

         var emails_array = req.session.user.teacher_emails;
         console.log("Before: ",emails_array);
         var index = emails_array.indexOf(req.body.teacher_email);
         if (index > -1) {
             emails_array.splice(index, 1);
         }
         console.log("After: ",emails_array);


         School.findOne({'email': req.session.user.email, 'password': req.session.user.password}, function (err, school) {
             req.session.user.teacher_emails = school.teacher_emails;
         });

         Teacher.collection.find().toArray(function (err, teacher_array) {
             res.render('school_profile.ejs', {school: req.session.user , teacher_array: teacher_array});
         });
     };



//
// module.exports.createSchool =
//     function(req,res){
//         var school = new data_time({
//
//         });
//         // console.log(req.body.email);
//         // console.log("666666666");
//
//         school.save(function(err,newSchool){
//             if(!err){
//                 res.send(data_time);
//
//             }else{
//                 res.sendStatus(400);
//             }
//         });
//         res.render('school_profile.ejs', school);
//         //res.render('signup_success.ejs')
//     };