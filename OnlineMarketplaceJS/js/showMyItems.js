var tbody;
var sortTitleElement;
var sortOfferElement;
var titleImg;
var offerImg;

//Controller
var onLoad = function(){
    setUserItemsTestData();//Заполнение тестовыми данными
    checkUser();
    initView();
    getAllItems();
};

var checkUser = function(){
    var login = User.getUserLogin();
    if((login != null) && (login != "")){
        setUserName(login);
    } else {
        window.location.href = "login.html";
    }
};

var getAllItems = function(){
    var func = function(){
        showItems();
    };
    Model.getItems(func);
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

//View
var initView = function(){
    tbody = document.getElementById("items");
    sortTitleElement = document.getElementById("sortTitle");
    sortOfferElement = document.getElementById("offerSort");
    titleImg = document.getElementById("imgTitle");
    offerImg = document.getElementById("imgOffer");
};

var setUserName = function(userName){
    document.getElementById("user").innerHTML = userName;
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
};

var clearTable = function() {
    var table = document.getElementById("items");
    var rows = table.rows;
    for (i = (rows.length-1); i > 0; i--) {
        table.removeChild(rows[i]);
    }
};
