var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var resume = './data/resume.json';

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.get('/api/resume', function(req, res){
    res.json(resume);
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});