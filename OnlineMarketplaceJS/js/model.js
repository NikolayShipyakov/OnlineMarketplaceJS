var Model = {
    items : [],

    getItems : function(func){
      console.log("func call");
      func();
    },

    removeItem : function(item){
      delete this.items.slice(item);
    },

    insertItem : function(item){
      this.items.push(item);
    },

    updateItem : function(oldItem, newItem){

    },

    checkItem: function (item) {
        var title = item.Title;
        var description = item.Description;
        var price = item.StartPrice;
        var incr = item.BinInc;
        var time = item.TimeLeft;
        var buyNow = item.BuyNow;

        var errors = [];
        var titleNotNull = (title.length > Constants.lengthTitle) ? true : false;
        var descrNotNull = (description.length > Constants.lengthDescription) ? true : false;
        var priceIsNumber = (isNaN(price) || price <= 0) ? false : true;
        var incrIsNumber = (isNaN(incr) || incr <= 0) ? false : true;
        var timeGood = false;
        if ((time == "") && (buyNow == true)) {
            timeGood = true;
        } else {
            var massTime = time.split(":");
            if (massTime.length == 2) {
                var hours = Number(massTime[0]);
                var min = Number(massTime[1]);
                timeGood = ((isNaN(hours) == false) && (isNaN(min) == false)) ? true
                    : false;
                if (hours < 0 || min < 0 || min > 60) {
                    timeGood = false;
                }
            }
        }
        if (buyNow == true) {
            incrIsNumber = true;
        }
        if (!titleNotNull) {
            errors.push(Constants.warningShortTitle);
        }
        if (!descrNotNull) {
            errors.push(Constants.warningShortDescription);
        }
        if (!priceIsNumber) {
            errors.push(Constants.incorrectPrice);
        }
        if (!incrIsNumber) {
            errors.push(Constants.incorrectIncr);
        }
        if (!timeGood) {
            errors.push(Constants.incorrectTime);
        }
        return errors;
    },

    sortItemsByTitle : function(orderBy){
        this.items.sort(function(item1, item2){
            if(item1.Title > item2.Title){
                return 1;
            } else if (item2.Title > item1.Title){
                return -1;
            } else {
                return 0;
            }
        });
        if(orderBy != null && "desk" == orderBy) {
            this.items.reverse();
        }
    },

    sortItemsByBestOffer : function(orderBy){
        this.items.sort(function(item1, item2){
            if(item1.BestOffer > item2.BestOffer){
                return 1;
            } else if (item2.BestOffer > item1.BestOffer){
                return -1;
            } else{
                return 0;
            }
        });
        if(orderBy != null && "desk" == orderBy) {
            this.items.reverse();
        }
    }
};
