describe('NewInvestmentView', () => {
    beforeEach(() => {
        loadFixtures('NewInverstmentView.html');
        view = new NewInvestmentView({selector: '#new-investment'});
    });
    
    it('DOM 엘리먼트를 프로퍼티로 노출시켜야 한다.', () => {
        expect(view.$el).toExist();
    });

    it('빈 종목 코드를 가져야 한다.', () => {
        expect(view.getSymbolInput()).toHaveValue('');
    });
    
    it('should input stock code', () => {
        
    });

    it('should input buy share count', () => {
        
    });

    it('매수단가를 입력받아야 한다.', () => {
        
    });

    /*
    afterEach(() => {
        $('#my-form').remove();
    });
    */
});

describe('InvestmentListView는', () => {
    beforeEach(() => {
        loadFixtures('NewInvestmentView.html');
        appendLoadFixtures('InvestmentListView.html');

        listView = new InvestmentListView({
            id: 'investment-list'
        });

        view = new NewInvestmentView({
            id: 'new-investment',
            listView: listView
        });
    });

    describe('Add버튼을 클릭했을 때', () => {
        beforeEach(() => {
            // input 엘리먼트 내용을 채운다.
            // 버튼을 클릭한 것처럼 처리한다.
        });

        it('투자 종목 리스트에 해당 건이 추가되어야 한다.', () => {
            expect(listView.count()).toEqual(1);
        });
    });
});

//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files
