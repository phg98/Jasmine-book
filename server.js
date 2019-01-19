'use strict';
const express = require('express');
const app = express();

app.get('/stocks/:symbol', function(req, res) {
    res.setHeader('Content-TYpe', 'application/json');
    res.send({ sharePrice: 20.18 });
});

app.use(express.static(__dirname));

app.listen(8000);
