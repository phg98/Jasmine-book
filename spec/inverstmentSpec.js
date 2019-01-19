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

    describe('when the price goes high', () => {
        beforeEach(() => {
            stock.sharePrice = 40;
        });

        it('should have positive roi', () => {
            expect(investment.roi()).toEqual(1);
        });

        it('should be a good investment', () => {
            expect(investment).toBeAGoodInvestment();
        });
    });

    describe('when the price goes down', () => {
        beforeEach(() => {
            stock.sharePrice = 0;
        });
        it('should be a bad investment', () => {
            expect(investment).not.toBeAGoodInvestment();
        });
    });

})


describe('toEqual test', () => {
    it('same number', () => {
        expect(1).toEqual(1);
    });
    
    it('same string', () => {
        expect('testing').toEqual('testing');
    });

    it('same boolean', () => {
        expect(true).toEqual(true);
    });

    it('same object', () => {
        expect({a: 'testing'}).toEqual({a:'testing'});
    });

    it('same array', () => {
        expect([1,2,3]).toEqual([1,2,3]);
    });
});

describe('toBe test', () => {
    it('same number', () => {
        expect(1).toBe(1);
    });
    
    it('same string', () => {
        expect('testing').toBe('testing');
    });

    it('same boolean', () => {
        expect(true).toBe(true);
    });

    it('same object', () => {
        var object = {a: 'testing'};
        expect(object).toEqual(object);
    });

    it('same array', () => {
        var array = [1,2,3];
        expect(array).toEqual(array);
    });

    it('not same object', () => {
        expect({a: 'testing'}).not.toBe({a:'testing'});
    });

    it('not same array', () => {
        expect([1,2,3]).not.toBe([1,2,3]);
    });
    
});

describe('toBeFalsy test', () => {
    it('undefined should be falsy', () => {
        expect(undefined).toBeFalsy();
    });

    it('null should be falsy', () => {
        expect(null).toBeFalsy();
    });

    it('NaN should be falsy', () => {
        expect(NaN).toBeFalsy();
    });

    it('false should be falsy', () => {
        expect(false).toBeFalsy();  
    });

    it('0 should be falsy', () => {
        expect(0).toBeFalsy();
    });

    it('empty string should be falsy', () => {
        expect('').toBeFalsy();
    });

});

describe('toBeTruthy', () => {
    it('true should be truthy', () => {
        expect(true).toBeTruthy();
    });

    it('non zero value should be truthy', () => {
        expect(1).toBeTruthy();
    });

    it('not empty string should be truthy', () => {
        expect('1').toBeTruthy();
    });

    it('object should be truthy', () => {
        expect({}).toBeTruthy();
        expect([]).toBeTruthy();
    });
});

describe('Null, Undefined, NaN test', () => {
    it('null should be null', () => {
        expect(null).toBeNull();
    });

    it('undefined should be undefined', () => {
        expect(undefined).toBeUndefined();
    });

    it('NaN should be Nan', () => {
        expect(NaN).toBeNaN();
    });
});

describe('toBeDefined test', () => {
    it('should be defined', () => {
        expect(null).toBeDefined();
    });
});

describe('toContain test', () => {
    it('includes substring', () => {
        expect("abf").toContain("b");
    });

    it('array contains value', () => {
        expect([1,2,3]).toContain(2);
    });
});

describe('toMatch', () => {
    it('regex should match', () => {
        expect("My big matched string").toMatch(/My(.+)string/);
    });
});

describe('less greater test', () => {
    it('less', () => {
        expect(1).toBeLessThan(2);
    });

    it('greater', () => {
        expect(2).toBeGreaterThan(1);
    });
});

describe('toThrow test', () => {
    it('should throw', () => {
        expect(function() {
            throw('Some exception');
        }).toThrow("Some exception");
    });
});