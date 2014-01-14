//Controller
var save = function(){
    var item = getItem();
    var errors = Model.checkItem(item);
    if(errors.length == 0){
        Model.insertItem(item, function(){toAllItems()});
    } else {
        showErrors(errors);
    }

};

var toAllItems = function() {
    window.location.href = "showItems.html";
};

var buyCheck = function(){
    changeBidIncrStatus();
};

//View
var getItem = function(){
    var form =document.getElementById("dataForm");
    return {
        Title: form.title.value,
        Description: form.description.value,
        StartPrice: form.startprice.value,
        BinInc:form.bidincrement.value,
        BuyNow:form.buyitnow.checked,
        TimeLeft:form.timeleft.value
    }
};

var changeBidIncrStatus = function() {
    var bidIncr = document.getElementById("bidincrement");
    bidIncr.disabled = (bidIncr.disabled == false) ? true : false;
};

var showErrors = function(errors){
     var warningText = "";
     for(var i = 0; i < errors.length; i++){
         warningText += errors[i] + "</br>"
     }
     document.getElementById("resultop").innerHTML = warningText;
};

