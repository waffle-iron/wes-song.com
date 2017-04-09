let path = require('path');

module.exports = (app, options) => {
    
    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve('public/index.html'));
    });
    
};