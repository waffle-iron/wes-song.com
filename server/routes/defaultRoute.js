let path = require('path');

module.exports = (app) => {
	app.get('*', function(req, res) {
		console.log('getCatchAll');
		res.sendFile(path.resolve(__dirname + 'public/index.html'));
	});
};