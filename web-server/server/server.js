let express = require('express');
let morgan = require('morgan');

module.exports.start = (options) => {
    let app = express();
    
    app.use(morgan('dev'));
    
    require('../api/default')(app, options);
    
    let server = app.listen(options.port, () =>{
        resolve(server);
    });
};