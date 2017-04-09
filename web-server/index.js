//web-server entry point

let server = require('./server/server');
let config = require('./config/config');

console.log('web-server index.js', config);

server.start({
    port: config.port
});