beforeEach(function () {
  
  jasmine.addMatchers({
    toBeAGoodInvestment: function() {
      return {
        compare: function (actual, expected) {
          var investment = actual;
          var what = this.isNot ? 'bad' : 'good';
          return {
              pass: investment.isGood(),
              message: 'Expected investment to be a '+what+ ' investment'
          };
        }
      };
    }
  });
});
