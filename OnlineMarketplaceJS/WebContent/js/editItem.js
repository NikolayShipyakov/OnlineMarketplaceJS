//Controller
// Save button listener
var save = function(){
    var item = getItem();
    var errors = Model.checkItem(item);
    if(errors.length == 0){
        Model.insertItem(item, function(){toAllItems()});
    } else {
        showErrors(errors);
    }

};

// Check box listener
var buyCheck = function(){
    changeBidIncrStatus();
};

// Reset button listener
var reset = function(){
    clearAllFields();
};

// Back button listener
var back = function() {
    toAllItems();
};

var toAllItems = function() {
    window.location.href = "showItems.html";
};

//View
// Getting data from field with item info
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

// Change status field with bid increment
var changeBidIncrStatus = function() {
    var bidIncr = document.getElementById("bidincrement");
    bidIncr.disabled = (bidIncr.disabled == false) ? true : false;
};

// Chow error messages
var showErrors = function(errors){
     var warningText = "";
     for(var i = 0; i < errors.length; i++){
         warningText += errors[i] + "</br>"
     }
     document.getElementById("resultop").innerHTML = warningText;
};

// Clear all fields
var clearAllFields = function() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var startPrice = document.getElementById("startprice");
    var bidIncr = document.getElementById("bidincrement");
    var timeLeft = document.getElementById("timeleft");
    var buyItNow = document.getElementById("buyitnow");
    title.value = "";
    description.value = "";
    startPrice.value = "";
    bidIncr.value = "";
    bidIncr.disabled = false;
    timeLeft.value = "";
    timeLeft.disabled = false;
    buyItNow.checked = false;
};

