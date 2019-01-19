// capture.js 파일
// 사용법 : phantomjs.exe capture.js
var page = require('webpage').create();
var t0 = performance.now();
var t1 = 0;
page.viewportSize = { width: 1525, height: 1240 };
page.open('http://127.0.0.1:8000/SpecRunner.html', function () {
    page.render('test.png');
    t1 = performance.now();
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
    phantom.exit();
});