let gulp = require('gulp');
let gutil = require('gulp-util');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
let uglify = require('gulp-uglify');
let sourceMaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let livereload = require('gulp-livereload');
let debug = require('gulp-debug');

// File paths
const VENDOR_SCRIPTS = [
	'node_modules/angular/angular.js',
	'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
	'node_modules/@uirouter/angularjs/release/resolveService.js',
	'node_modules/@uirouter/angularjs/release/stateEvents.js',
	'node_modules/angular-animate/angular-animate.js',
	'node_modules/angular-aria/angular-aria.js',
	'node_modules/angular-sanitize/angular-sanitize.js',
];
const CLIENT_SCRIPTS_PATH = ['client/app/**/*.module.js', 'client/app/**/*.js'];
const SERVER_SCRIPTS_PATH = 'server/**/*.js';
const STYLE_PATH = 'client/sass/**/*.scss';
const IMAGE_PATH = 'assets/images/*';
const INDEX_PATH = 'assets/index.html';

// Assets
gulp.task('copyImages', function () {
	console.log('---Starting Copy Images task---');
	return gulp.src([IMAGE_PATH])
		.pipe(gulp.dest('public/images'))
		.pipe(livereload());
});

gulp.task('copyIndex', function () {
	console.log('---Starting Copy Index task---');
	return gulp.src([INDEX_PATH])
		.pipe(gulp.dest('public'))
		.pipe(livereload());
});
// Styles
gulp.task('styles', function () {
	console.log('---Starting Styles task---');
	return gulp.src('client/sass/style.scss')
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/styles'))
		.pipe(livereload());
});

// Vendor Scripts
gulp.task('vendorScripts', function () {
	console.log('---Starting Vendor Scripts task---');
	return gulp.src(VENDOR_SCRIPTS)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/scripts'));
});

// Client Scripts
gulp.task('clientScripts', function () {
	console.log('---Starting Client Scripts task---');
	return gulp.src(CLIENT_SCRIPTS_PATH)
		.pipe(ngAnnotate())
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('angular.bundle.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/scripts'))
		.pipe(livereload());
});

// Server Scripts
gulp.task('serverScripts', function() {
	console.log('---Starting Server Scripts task---');
	return gulp.src([SERVER_SCRIPTS_PATH])
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
		.pipe(livereload());
});

// Images
gulp.task('images', function () {
	console.log('---Starting Images task---');
});

// Default
gulp.task('default', function () {
	console.log('---Starting Default task---');
});

// Watch
gulp.task('watch', function () {
	// gulp.('serverScripts');
	console.log('---Starting Watch task---');
	require('./index.js');
	livereload.listen();
	gulp.watch(INDEX_PATH, ['copyIndex']);
	gulp.watch(IMAGE_PATH, ['copyImage']);
	gulp.watch(CLIENT_SCRIPTS_PATH, ['clientScripts']);
	gulp.watch(STYLE_PATH, ['styles']);
	gulp.watch(SERVER_SCRIPTS_PATH, ['serverScripts']);
});

// Serve
gulp.task('serve', function () {
	console.log('---Starting Serve task---');
});