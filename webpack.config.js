module.exports = {
	entry: [
		'./client/react/app/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/public/react/',
		filename: 'react.bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};