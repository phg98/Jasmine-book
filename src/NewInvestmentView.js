(function ($, Investment, Stock) {
    function NewInvestmentView(params) {
        this.$el = $(params.selector);        
    };

    NewInvestmentView.prototype = {
        $: function() {
            return this.$el.find.apply(this.$el, arguments);
        },
        setSymbol: function() {
            this.$('.new-investment-stock-symbol').val(value);
        },
        getSymbolInput : function () {
            return this.$('.new-investment-stock-symbol');
        }
    };
    this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);