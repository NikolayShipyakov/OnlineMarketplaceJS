var tbody;
var sortTitleElement;
var sortOfferElement;
var titleImg;
var offerImg;

//Controller
var onLoad = function(){
  initView();
  getAllItems();
  checkUser();
};

var sortTitle = function(){
  clearTable();
  var order = getTypeTitleSort();
  Model.sortItemsByTitle(order);
  showItems();
};

var sortBestOffer = function(){
  clearTable();
  var order = getTypeOfferSort();
  Model.sortItemsByBestOffer(order);
  showItems();
};

var getAllItems = function(){
    var func = function(){
        showItems();
    };
    Model.getItems(func);
};

var checkUser = function(){
    var login = User.getUserLogin();
    if((login != null) && (login != "")){
        setUserName(login);
    } else {
        setGuestUserParameters();
    }
};


//View
var showItems = function () {
    var items = Model.items;
    for (var i = 0; i < items.length; i++) {
        addItem(items[i]);
    }
};

var addItem = function(item){
    var tr = document.createElement('TR');
    tbody.appendChild(tr);

    var td = document.createElement('TD');
    td.innerHTML = item.UID;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.Title;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.Description;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.Seller;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.StartPrice;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.BinInc;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.BestOffer;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.Bidder;
    tr.appendChild(td);

    td = document.createElement('TD');
    td.innerHTML = item.TimeLeft;
    tr.appendChild(td);

    td = document.createElement('TD');
    tr.appendChild(td);
};

var setUserName = function(userName){
    document.getElementById("user").innerHTML = userName;
};

var setGuestUserParameters = function(){
    document.getElementById("myitems").hidden = true;
    document.getElementById("sell").hidden = true;
    var log = document.getElementById("log");
    log.innerHTML = "login";
    log.href = "login.html";
};

var initView = function(){
    tbody = document.getElementById("items");
    sortTitleElement = document.getElementById("titleSort");
    sortOfferElement = document.getElementById("offerSort");
    titleImg = document.getElementById("imgTitle");
    offerImg = document.getElementById("imgOffer");
};

var clearTable = function() {
    var table = document.getElementById("items");
    var rows = table.rows;
    for (i = (rows.length-1); i > 0; i--) {
        table.removeChild(rows[i]);
    }
};

var getTypeTitleSort = function(){
    if ((sortTitleElement.value == "updown") || (sortTitleElement.value == "down")){
        sortTitleElement.value = "up";
        titleImg.src = Constants.upImg;
        offerImg.src = Constants.updownImg;
        return "ask";
    } else {
        sortTitleElement.value = "down";
        titleImg.src = Constants.downImg;
        offerImg.src = Constants.updownImg;
        return "desk";
    }
};

var getTypeOfferSort = function(){
    if((sortOfferElement.value == "updown") || (sortOfferElement.value == "down")) {
        sortOfferElement.value = "up";
        offerImg.src = Constants.upImg;
        titleImg.src = Constants.updownImg;
        return "ask";
    } else {
        sortOfferElement.value = "down";
        offerImg.src = Constants.downImg;
        titleImg.src = Constants.updownImg;
        return "desk";
    }
};

