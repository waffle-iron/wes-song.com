var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api', function(req, res){
    console.log('getApi call', req);
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});