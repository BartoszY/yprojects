const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserify = require('gulp-browserify');
const buffer = require('vinyl-buffer');

const config = {
    static: {
        html: './*.html',
        php: './*.php',
    },
    app: {
        js: './dev/js',
        scss: './dev/sass/**/*.scss',
        fonts: './dev/fonts/*',
        images: './dev/img/**',
        html: './dev/*.html'
    },
    dist: {
        base: './prod/',
        scss: './prod/css',
        js: './prod/js',
        fonts: './prod/fonts',
        images: './prod/img'
    }
}

function jsTask(done) {
    src(config.app.js + '/main.js', { read: false })
    .pipe(browserify({
        transform: ['babelify'],
        presets: ['babel-preset-env'],
    }))
    .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(rename('main.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(dest(config.dist.js))
    done();
}

function cssTask(done) {
    src(config.app.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest(config.dist.scss))
    done();
}

function fontTask(done) {
    src(config.app.fonts)
        .pipe(dest(config.dist.fonts))
    done();
}

function imagesTask(done) {
    src(config.app.images)
        .pipe(dest(config.dist.images))
    done();
}

function watchFiles() {
    watch(config.app.js, series(jsTask, reload));
    watch(config.app.scss, series(cssTask, reload));
    watch(config.app.fonts, series(fontTask, reload));
    watch(config.app.images, series(imagesTask, reload));
    watch(config.static.html, reload);
    watch(config.static.php, reload);
}

function liveReload(done) {
    browserSync.init({
        open: 'external',
        host: 'yprojects.local',
        proxy: 'yprojects.local'
    });
    done();
}

function reload (done) {
    browserSync.reload();
    done();
}

function cleanUp() {
    return del([config.dist.base]);
}

exports.default = parallel(jsTask, cssTask, fontTask, imagesTask, watchFiles, liveReload);
exports.build = series(cleanUp, parallel(jsTask, cssTask, fontTask, imagesTask));