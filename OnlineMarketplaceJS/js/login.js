//Controller
var sign = function(){
    var errors = User.checkUserData(getLoginPassword());

}

//View
var getLoginPassword = function(){
    var login = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    return {
        login:login,
        password:pass
    }
}