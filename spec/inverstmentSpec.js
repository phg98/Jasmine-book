describe('investment', () => {
    var stock, investment;

    beforeEach(() => {        
        stock = new Stock();
        investment = new Investment({
            stock: stock,
            shares: 100,
            sharePrice: 20
        });

    });
    it('should have stock', () => {
        expect(investment.stock).toBe(stock);
    });

    it('should have shares', () => {
        expect(investment.shares).toEqual(100);
    });

    it('should have share price', () => {
        expect(investment.sharePrice).toEqual(20);
    });

    it('should have cost', () => {
        expect(investment.cost).toEqual(2000);
    });
})