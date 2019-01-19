describe('주식이 조회되면', () => {
    var originalSharePrice = 10;
    var stock = new Stock({
        symbol: 'AOUE',
        sharePrice: originalSharePrice
    });

    beforeEach(function(done) {   
        spyOn($, 'getJSON').and.callFake(function(url, callback) {
            callback({sharePrice: 20.18});
        });
        stock.fetch(null, done);
    });

    it('주가를 업데이트해야한다', (done) => {
        //expect(stock.fetched).toEqual(1);
        expect(stock.sharePrice).toEqual(20.18);
        done();
    });
})