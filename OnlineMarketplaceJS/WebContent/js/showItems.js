var tbody;
var sortTitleElement;
var sortOfferElement;
var titleImg;
var offerImg;

var getXmlHttp = function () {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
};


//Controller
var onLoad = function(){
  setTestData();//Заполнение тестовыми данными
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

var checkAndBuy = function(uid, max) {
    var bidElement = document.getElementById("bid" + uid);
    var bid = Number(bidElement.value);
    if (bid >= max) {
        buy(uid, bid);
    } else {
        if (isNaN(bid)) {
            alert(Constants.incorrectOfferType);
        } else {
            alert(Constants.smallOffer + " " + max);
        }
    }
};

var buy = function(uid, price){
    var req = getXmlHttp();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                alert("Ответ сервера: " + req.responseText);

            }
        }
    };
    req.open('POST', 'http:\\lala?uid=' + uid + "&price=" + price, true);
    req.send();
};

var search = function(){
    clearTable();
    var parameters = getSearchParameters();
    setTestDataByParameter(parameters.field, parameters.value);
    getAllItems();
};

var showAllItems = function(){
    clearTable();
    setTestData();
    getAllItems();
};

//View
var showItems = function () {
    var items = Model.items;
    var user = User.getUserLogin();
    for (var i = 0; i < items.length; i++) {
        addItem(items[i], user);
    }
};

var addItem = function(item, login){
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
    if(item.Seller != login){
       td.appendChild(getBidding(item));
    }
    tr.appendChild(td);
};

var getBidding = function(item) {
    var form = document.createElement("div");
    var hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "id";
    hidden.value = item.UID;
    form.appendChild(hidden);
    var element;
    var button = document.createElement("input");
    button.type = "button";
    if (item.BuyNow) {
        element = button;
        element.className = "buybutton";
        element.value = "Buy";
        button.onclick = function(){
            buy(item.UID, item.StartPrice);
        };
    } else {
        var bestPrice = document.createElement("input");
        bestPrice.type = "hidden";
        bestPrice.value = item.BestOffer;
        element = document.createElement("div");
        element.className = "biddiv";
        var bid = document.createElement("input");
        bid.name = "bid";
        bid.id = "bid" + item.UID;
        bid.type = "text";
        element.appendChild(bid);
        button.className = "bidbutton";
        button.onclick = function() {
            checkAndBuy(item.UID, maxPrice(item));
        };
        button.value = "Bid";
        element.appendChild(button);
    }
    form.appendChild(element);
    return form;
};

var maxPrice = function(item) {
    var incr = item.BinInc;
    var bestOffer = item.BestOffer + incr;
    var price = item.StartPrice + incr;
    var bestPrice = bestOffer;
    if (bestPrice < price) {
        bestPrice = price;
    }
    return bestPrice;
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

var getSearchParameters = function(){
    return {
        field : document.getElementById("typeSearch").value,
        value : document.getElementById("keyword").value
    }
};


