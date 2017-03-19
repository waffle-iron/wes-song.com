"use strict";
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    };
};
app.use(forceSSL());

app.get('/angular1/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/angular1/index.html'));
});

app.get('/angular1/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/angular1/index.html'));
});

app.get('/react/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/react/index.html'));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);