let gulp = require('gulp');
let del = require('del');
let gutil = require('gulp-util');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
let uglify = require('gulp-uglify');
let sourceMaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let livereload = require('gulp-livereload');
let angularjs = require('./build/angularjs.build');

// File paths
const CONFIG = {
	GATEWAY: {
		IMAGES: 'assets/images/*',
		FONTS: 'assets/fonts/*',
		STYLES: {
			PATH: 'assets/styles/**/*.scss',
			MAIN: 'assets/styles/style.scss'
		},
		INDEX: 'assets/index.html'
	},
	ANGULARJS: {
		VENDOR: [
			'node_modules/angular/angular.js',
			'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
			'node_modules/@uirouter/angularjs/release/resolveService.js',
			'node_modules/@uirouter/angularjs/release/stateEvents.js',
			'node_modules/angular-animate/angular-animate.js',
			'node_modules/angular-aria/angular-aria.js',
			'node_modules/angular-sanitize/angular-sanitize.js'
		],
		SCRIPTS: [
			'client/angularjs/app/**/*.module.js',
			'client/angularjs/app/**/*.js'
		],
		STYLES: {
			MAIN: 'client/angularjs/sass/style.scss',
			PATH: 'client/angularjs/sass/**/*.scss'
		},
		INDEX: 'client/angularjs/index.html'
	},
	REACT: {
		VENDOR: [],
		SCRIPTS: ['client/react/app/**/*.js'],
		STYLES: {
			MAIN: '',
			PATH: 'client/react/sass/**/*.scss'
		},
		INDEX: 'client/react/index.html'
	},
	SERVER: {
		MAIN: 'server/server.js',
		PATH: 'server/**/*.js'
	}
};

// Images
gulp.task('images', function () {
	console.log('---Starting Images task---');
});

// Assets
gulp.task('copyImages', function () {
	return gulp.src(CONFIG.GATEWAY.IMAGES)
		.pipe(gulp.dest('public/images'))
		.on('error', gutil.log)
		.pipe(livereload());
});

// Fonts
gulp.task('copyFonts', function () {
	return gulp.src(CONFIG.GATEWAY.FONTS)
		.pipe(gulp.dest('public/fonts'))
		.on('error', gutil.log)
		.pipe(livereload());
});

// Gateway tasks
gulp.task('gatewayIndex', function () {
	return gulp.src(CONFIG.GATEWAY.INDEX)
		.pipe(gulp.dest('public'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('gatewayStyles', function () {
	return gulp.src(CONFIG.GATEWAY.STYLES.MAIN)
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/styles'))
		.pipe(livereload());
});

// Angular tasks
gulp.task('angularVendorScripts', function () {
	return gulp.src(CONFIG.ANGULARJS.VENDOR)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/angularjs/scripts'))
		.on('error', gutil.log);
});

gulp.task('angularScripts', function () {
	return gulp.src(CONFIG.ANGULARJS.SCRIPTS)
		.pipe(ngAnnotate())
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('angular.bundle.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/angularjs/scripts'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('angularStyles', function () {
	return gulp.src(CONFIG.ANGULARJS.STYLES.MAIN)
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/angularjs/styles'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('angularIndex', function () {
	return gulp.src(CONFIG.ANGULARJS.INDEX)
		.pipe(gulp.dest('public/angularjs'))
		.on('error', gutil.log)
		.pipe(livereload());
});

// React tasks

gulp.task('reactVendorScripts', function () {
	return gulp.src(CONFIG.REACT.VENDOR)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/react/scripts'))
		.on('error', gutil.log);
});

gulp.task('reactScripts', function () {
	return gulp.src(CONFIG.REACT.SCRIPTS)
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('angular.bundle.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/react/scripts'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('reactStyles', function () {
	return gulp.src(CONFIG.REACT.STYLES.MAIN)
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/react/styles'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('reactIndex', function () {
	return gulp.src(CONFIG.REACT.INDEX)
		.pipe(gulp.dest('public/react'))
		.on('error', gutil.log)
		.pipe(livereload());
});

// Server Scripts
gulp.task('serverScripts', function () {
	console.log('---Starting Server Scripts task---');
	return gulp.src(CONFIG.SERVER.MAIN)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
		.on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('clean', function () {
	return del.sync([
		'public/',
		'index.js'
	]);
});

// Default
gulp.task('default', [
	'clean',
	'copyFonts',
	'copyImages',
	'gatewayIndex',
	'gatewayStyles',
	'angularVendorScripts',
	'angularIndex',
	'angularScripts',
	'angularStyles',
	'reactVendorScripts',
	'reactIndex',
	'reactScripts',
	'reactStyles',
	'serverScripts'
], function () {
	console.log('---Starting Default task---');
});

// Watch
gulp.task('serve', ['default'], function () {
	console.log('---Starting Watch task---');
	require('./index.js');
	livereload.listen();
	gulp.watch(CONFIG.GATEWAY.INDEX, ['gatewayIndex']);
	gulp.watch(CONFIG.GATEWAY.STYLES.PATH, ['gatewayStyles']);
	gulp.watch(CONFIG.GATEWAY.IMAGES, ['copyImages']);
	gulp.watch(CONFIG.ANGULARJS.INDEX, ['angularIndex']);
	gulp.watch(CONFIG.ANGULARJS.SCRIPTS, ['angularScripts']);
	gulp.watch(CONFIG.ANGULARJS.STYLES.PATH, ['angularStyle']);
	gulp.watch(CONFIG.REACT.INDEX, ['reactIndex']);
	gulp.watch(CONFIG.REACT.SCRIPTS, ['reactScripts']);
	gulp.watch(CONFIG.REACT.STYLES.PATH, ['reactStyle']);
	gulp.watch(CONFIG.SERVER.MAIN, ['serverScripts']);
});
