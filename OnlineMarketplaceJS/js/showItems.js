var tbody;

//Controller
var onLoad = function(){
  initView();
  getAllItems();
  checkUser();
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
};


