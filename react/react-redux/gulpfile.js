"use strict";

var gulp = require("gulp");
var connect = require('gulp-connect'); // local dev server
var open = require('gulp-open'); // open URL in browser
var browserify = require('browserify'); // bundler
var reactify = require('reactify'); // JSX to JS
var vinylSource = require('vinyl-source-stream'); // use text streams with gulp
var lint = require('gulp-eslint');
var concat = require('gulp-concat') // concatenate files

var config = {
    port: 11111,
    devBaseUrl: 'http://localhost',
    paths: {
        dist: './dist',
        html: './src/*.html',
        js: './src/**/*.js',
        mainJs: './src/main.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        ],
    }
};

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);

// Start dev server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        //.pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
    ;
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(vinylSource('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format()) ;
});
