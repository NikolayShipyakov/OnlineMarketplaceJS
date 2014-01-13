var testData = [
    {
        UID:1,
        Title: "Spring 3",
        Description: "Book",
        Seller:"",
        StartPrice: 13.5,
        BinInc:0.5,
        BestOffer:0,
        Bidder:"Mr. Pitt",
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
        Bidder:"Mr. Pitt",
        TimeLeft:"21.05.2013",
        BuyNow:false
    }
];

var setTestData = function(){
   for(var i = 0; i < testData.length; i++){
      Model.insertItem(testData[i]);
   }
};

setTestData();