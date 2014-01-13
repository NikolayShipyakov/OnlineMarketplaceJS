var User = {
    getUserLogin : function(){
        return localStorage["login"];
    },

    setUserLogin : function(login){
        localStorage["login"] = login;
    },

    checkUserData : function(userData){
        var login = userData.login;
        var password = userData.password;
        var errors = [];
        var notNullLogin = (login.length >= Constants.loginLength) ? true : false;
        var notNullPassword = (password.length >= Constants.passwordLength) ? true : false;
        if(!notNullLogin){
            errors.push("The minimum length of Login is"+ Constants.loginLength);
        }
        if(!notNullPassword){
            errors.push("The minimum length of Password is "+ Constants.passwordLength);
        }
        return errors;
    }

}