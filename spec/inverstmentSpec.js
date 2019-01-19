describe('investment', () => {
    it('should have stock', () => {
        var stock = new Stock();
        var investment = new Investment(stock);
        expect(investment.stock).toBe(stock);
    });
})