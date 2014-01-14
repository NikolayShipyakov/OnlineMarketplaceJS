var testData = [
    {
        UID:1,
        Title: "Spring 3",
        Description: "Book",
        Seller:"",
        StartPrice: 13.5,
        BinInc:0.5,
        BestOffer:0,
        Bidder:"Pitt",
        TimeLeft:"21.05.2012",
        BuyNow:false
    },

    {
        UID:2,
        Title: "Harry Potter and the Philosopher's Stone",
        Description: "Book",
        Seller:"",
        StartPrice: 13.5,
        BinInc:0.5,
        BestOffer:1,
        Bidder:"Pup",
        TimeLeft:"21.05.2013",
        BuyNow:false
    },

    {
        UID:3,
        Title: "The Lord of the Rings Trilogy",
        Description: "Book",
        Seller:"Pup",
        StartPrice: 13.5,
        BinInc:0.5,
        BestOffer:4,
        Bidder:"Pitt",
        TimeLeft:"21.05.2013",
        BuyNow:false
    },
    {
        UID:4,
        Title: "WW",
        Description: "Car",
        Seller:"Pup",
        StartPrice: 13.5,
        BinInc:0.5,
        BestOffer:4,
        Bidder:"Pitt",
        TimeLeft:"21.05.2013",
        BuyNow:true
    }
];

var setTestData = function(){
   for(var i = 0; i < testData.length; i++){
      Model.insertTestItem(testData[i]);
   }
};

var setUserItemsTestData = function(){
    var login = User.getUserLogin();
    for(var i = 0; i < testData.length; i++){
        if(testData[i].Seller == login || testData[i].Bidder == login){
            Model.insertTestItem(testData[i]);
        }
    }
};

