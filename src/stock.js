(function ($) {
    function Stock (paramaters) {
      var params = paramaters || {};
      this.symbol = params.symbol;
      this.sharePrice = params.sharePrice;
      this.fetched = 10;
    };
  
    Stock.prototype.fetch = function(parameters, done) {
      var that = this;
      var params = parameters || {};
      var url = 'http://127.0.0.1:8000/stocks/'+that.symbol;
  
      jQuery.getJSON(url, function (data) {
        //throw url;
        that.sharePrice = data.sharePrice;
        that.fetched = 1;
        done();
      });
    };
  
    this.Stock = Stock;
  })(jQuery);