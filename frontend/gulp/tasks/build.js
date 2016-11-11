'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('.././config');
var globals = require('.././globals');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    path.join(globals.paths.src, '/app/**/*.html'),
    path.join(globals.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'gohd',
      root: 'app'
    }))
    .pipe(gulp.dest(globals.paths.tmp + '/partials/'));
});

gulp.task('html', ['inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(path.join(globals.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(globals.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html', { restore: true });
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp
    .src(path.join(globals.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.ngAnnotate())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', config.errorHandler('Uglify'))
    .pipe($.rev())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    //.pipe($.sourcemaps.init())
    .pipe($.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
    .pipe($.replace('../../bower_components/font-awesome/fonts/', '../fonts/'))
    .pipe($.cssnano())
    .pipe($.rev())
    //.pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(path.join(globals.paths.dist, '/')))
    .pipe($.size({ title: path.join(globals.paths.dist, '/'), showFiles: true }));
});

gulp.task('fonts', ['copy-bs-fonts', 'copy-fa-fonts', 'copy-roboto-fonts'], function () {});
gulp.task('fonts-serve', ['copy-bs-fonts-serve', 'copy-fa-fonts-serve', 'copy-roboto-fonts-serve'], function () {});

gulp.task('copy-roboto-fonts', function() {
  return gulp
    .src(config.wiredep.directory + '/roboto-fontface/fonts/roboto/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.dist, '/fonts/Roboto/')));
});

gulp.task('copy-roboto-fonts-serve', function() {
  return gulp
    .src(config.wiredep.directory + '/roboto-fontface/fonts/roboto/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.tmp, '/serve/fonts/roboto/')));
});

gulp.task('copy-bs-fonts', function(){
  return gulp
    .src(config.wiredep.directory + '/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.dist, '/fonts/bootstrap/')));
});

gulp.task('copy-bs-fonts-serve', function(){
  return gulp
    .src(config.wiredep.directory + '/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.tmp, '/serve/fonts/bootstrap/')));
});

gulp.task('copy-fa-fonts', function(){
  return gulp
    .src(config.wiredep.directory + '/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.dist, '/fonts/')));
});

gulp.task('copy-fa-fonts-serve', function(){
  return gulp
    .src(config.wiredep.directory + '/fonta-wesome/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(path.join(globals.paths.tmp, '/serve/fonts/')));
});

gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(globals.paths.src, '/**/*'),
    path.join('!' + globals.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(globals.paths.dist, '/')));
});

gulp.task('clean', function () {
  return $.del([path.join(globals.paths.dist, '/'), path.join(globals.paths.tmp, '/')]);
});

gulp.task('build', ['html', 'fonts', 'other']);
