const path = require('path');

module.exports = {
    entry: './client/app/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'ng-annotate']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};