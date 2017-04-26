'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';

module.exports = (function makeWebpackConfig () {
	let config = {};
	
	config.entry = {
		angular1: './src/angular1/app/app.js'
	};
	
	config.output = {
		path: path.resolve(__dirname, './dist'),
		publicPath: isProd ? '/' : 'http://localhost:8080/',
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
		chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
	};
	
	if (isProd) {
		config.devtool = 'source-map';
	} else {
		config.devtool = 'eval-source-map';
	}
	
	config.resolve = {
		modules: [
			'node_modules',
			'src/public'
		]
	};
	
	config.module = {
		rules: [{
			test: /\.js$/,
			use: ['ng-annotate-loader', 'babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.(woff|woff2|ttf|eot)$/,
			use: 'file-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg)$/,
			use: [
				{
					loader: 'url-loader',
					options: {limit: 40000}
				},
				'image-webpack-loader'
			]
		}, {
			test: /\.html$/,
			loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
			exclude: /index\.html/
		}]
	};
	
	config.plugins = [];
	
	config.plugins.push(
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			inject: 'body'
		})
	);
	
	if (isProd) {
		config.plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new CopyWebpackPlugin([{
				from: path.resolve(__dirname, './src/public')
			}], { ignore: ['*.html'] })
		);
	}
	
	config.devServer = {
		contentBase: './src/angular1/public',
		stats: 'minimal'
	};
	
	return config;
}());