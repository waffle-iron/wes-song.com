let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
let resume = './data/resume.json';

app.set('port', process.env.PORT || 5000);

app.use(express.static('public'));

app.get('/api/resume', function (req, res) {
    res.json(resume);
});

app.get('/angularjs/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/angularjs/index.html'));
});

app.get('/react/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/react/index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});