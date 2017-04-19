var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

app.set('port', (process.env.PORT || 3000));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api', function(req, res){
    console.log('getApi call', req);
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});