'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    fontmin = require('gulp-fontmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    connect = require('gulp-connect'),
    babelify = require('babelify');

//-----------------------------------------------------------------------------------
// PARAMETERS
//-----------------------------------------------------------------------------------
var path = {
    prod: {
        url: 'prod',
        js: 'prod/js/',
        css: 'prod/css/',
        img: 'prod/img/',
        fonts: 'prod/fonts/',
        maps: '/'
    },
    dev: {
        js: 'dev/js/',
        css: 'dev/sass/',
        img: 'dev/img/',
        fonts: 'dev/fonts/',
    },
    watch: {
        js: 'dev/js/',
        css: 'dev/sass/',
        img: 'dev/img/',
        fonts: 'dev/fonts/',
    }
}
//-----------------------------------------------------------------------------------
// PROJECT CLEAN
//-----------------------------------------------------------------------------------
gulp.task('clean', function () {
    return gulp.src(path.prod.url, {read: false})
        .pipe(clean());
});

//-----------------------------------------------------------------------------------
// SASS
//-----------------------------------------------------------------------------------
gulp.task('sass', function () {
    return gulp.src(path.dev.css + '**/*.scss')
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(cleanCSS({debug: true}))
        .pipe(sourcemaps.write(path.prod.maps))
        .pipe(gulp.dest(path.prod.css))
        .pipe(livereload());
});

//-----------------------------------------------------------------------------------
// JS
//-----------------------------------------------------------------------------------
gulp.task('js', function() {
    return browserify({
        entries: path.dev.js + 'main.js'
    })
    .transform( babelify, {presets: ['@babel/preset-env']} )
    .bundle()
    .on('error', function (err) {
        console.log(err.toString());

        this.emit('end');
    })
    .pipe( source('main.js') )
    .pipe( rename({ extname: '.min.js' }) )
    .pipe( buffer() )
    .pipe( sourcemaps.init({ loadMpas: true }) )
    .pipe( uglify() )
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest(path.prod.js) )
});

//-----------------------------------------------------------------------------------
// IMAGES
//-----------------------------------------------------------------------------------
gulp.task('images', function() {
    return gulp.src(path.dev.img + '**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng(),
            imagemin.svgo([{removeViewBox: false}, {minifyStyles: false}])
        ], {verbose: true}))
        .pipe(gulp.dest(path.prod.img));
});

//-----------------------------------------------------------------------------------
// FONTS
//-----------------------------------------------------------------------------------
gulp.task('fonts', function () {
    return gulp.src(path.dev.fonts + '**/*.*')
        .pipe(fontmin())
        .pipe(gulp.dest(path.prod.fonts));
});

//-----------------------------------------------------------------------------------
// BUILD
//-----------------------------------------------------------------------------------
gulp.task('build', ['sass', 'js', 'images', 'fonts']);

//-----------------------------------------------------------------------------------
// WATCH
//-----------------------------------------------------------------------------------
gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(path.watch.css + '**/*.scss', ['sass']);
    gulp.watch(path.watch.js + '**/*.js', ['js']);
    gulp.watch(path.watch.img + '**/*.*', ['images']);
    gulp.watch(path.watch.img + '**/*.*', ['fonts']);
});

var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('default', ['build', 'watch']);