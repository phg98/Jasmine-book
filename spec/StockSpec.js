describe('주식이 조회되면', () => {
    var xhr;
    var originalSharePrice = 10;
    var stock = new Stock({
        symbol: 'AOUE',
        sharePrice: originalSharePrice
    });

    beforeEach(function(done) {   
        /*
        spyOn($, 'getJSON').and.callFake(function(url, callback) {
            callback({sharePrice: 20.18});
        });
        */

        /*
        var fetchRequest;
        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = function (request) {
            fetchRequest = request;
        };
        */
        xhr = sinon.fakeServer.create();
        xhr.respondWith(
            '/stocks/AOUE',
            [
            200,
            { "Content-Type": "application/json" },
            '{ "sharePrice": 20.18}'
        ]);

        stock.fetch(null, done);

        xhr.respond();

        /*
        fetchRequest.respond(
            200,
            { "Content-Type": "application/json" },
            '{ "sharePrice": 20.18}'
        );
        */
    });

    afterEach(() => {
        xhr.restore();
    });

    it('주가를 업데이트해야한다', (done) => {
        //expect(stock.fetched).toEqual(1);
        expect(stock.sharePrice).toEqual(20.18);
        done();
    });
})