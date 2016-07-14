'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('.././config');
var globals = require('.././globals');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(globals.paths.tmp, '/serve/app/*.css'),
    path.join('!' + globals.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(globals.paths.src, '/app/**/**/**/**/*.js'),
    path.join('!' + globals.paths.src, '/app/**/*.spec.js'),
    path.join('!' + globals.paths.src, '/app/**/*.mock.js'),
  ])
  .pipe($.angularFilesort()).on('error', config.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [globals.paths.src, path.join(globals.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(globals.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, config.wiredep)))
    .pipe(gulp.dest(path.join(globals.paths.tmp, '/serve')));
});
