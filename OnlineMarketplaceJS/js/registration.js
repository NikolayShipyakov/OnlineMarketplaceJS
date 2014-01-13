//Controller
var validUserData = function(){
    var userData = getUserData();
    var errors = User.valideUserData(userData);
    if(errors.length == 0){
        User.setUserLogin(userData.login);
        return true;
    } else {
        showErrorRegistration(errors);
        return false;
    }
};

var reset = function(){
    clearAllFields();
};

function back() {
    window.location = "login.html";
}

//View
var getUserData = function(){
    var name = document.getElementById("name").value;
    var adress = document.getElementById("adress").value;
    var phone = document.getElementById("phone").value;
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var repassword = rePasswordElement = document.getElementById("repassword").value;
    return {
        name : name,
        adress : adress,
        phone : phone,
        login : login,
        password : password,
        repassword : repassword
    }
};

var showErrorRegistration = function(errors){
    var warningText = "";
    for(var i = 0; i < errors.length; i++){
        warningText += errors[i] + "</br>";
    }
    document.getElementById("warningtext").innerHTML = warningText;
};

var clearAllFields = function(){
    document.getElementById("name").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repassword").value = "";
    document.getElementById("phone").value = "(xxx)xxx-xx-xx";
};
