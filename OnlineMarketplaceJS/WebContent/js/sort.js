// Getting order by Title sort
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

// Getting order by Best offer sort
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