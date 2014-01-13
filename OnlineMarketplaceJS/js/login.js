//Controller
var sign = function(){
    var userInfo = getLoginPassword();
    var errors = User.checkUserData(userInfo);
    if(errors.length == 0){
        User.setUserLogin(userInfo.login);
        submit();
    } else {
        showErrorAuth(errors);
    }
};

//View
var getLoginPassword = function(){
    var login = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    return {
        login:login,
        password:pass
    }
};

var submit = function (){
    document.getElementById("registrationForm").submit();
};

var showErrorAuth = function(errors){
    var warningText = "";
    for(var i = 0; i < errors.length; i++){
        warningText += errors[i]+"</br>";
    }
    document.getElementById("details").innerHTML = warningText;
};