$(document).ready(function() {
    $("#teacher_sign_up").click(function () {
        $.ajax({
            type: 'GET',
            url: '/signup_teacher',
            success: function (data) {
                alert(data);
            }
        });
    });
    // $("#loginBtn").click(function(){
    //     $.ajax({
    //         type : 'GET',
    //         url : '/login',
    //         success: function(data){
    //             $("#loginDiv").html(data);
    //         }
    //     });
    // });
    // //=====Login Form Request=============================================
    // $("#loginForm").click(function(){
    //     var uname  = $("#uname").val();
    //     var upass = $("#upass").val();
    //     var loginData ={'name': uname,'pass':upass};
    //     $.ajax({
    //         type : 'POST',
    //         url : '/demo',
    //         data : loginData,
    //         success: function(data){
    //             $("#mainDiv").html(data);
    //         }
    //     });
    // });
    //
//=====Register Form=============================================
    $("#regForm").click(function () {
        var uemail = $("#email").val();
        var uname = $("#name").val();
        var upass = $("#password").val();
        var regData = {'email': uemail, 'name': uname, 'pass': upass};
        $.ajax({
            type: 'POST',
            url: '/regiterToDb',
            data: regData,
            success: function (data) {
                // $("#mainDiv").html(data);
                alert(data)
            }
        });
    });
});
