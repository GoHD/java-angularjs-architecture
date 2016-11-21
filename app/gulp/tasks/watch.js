'use strict';

var path = require('path');
var gulp = require('gulp');
var globals = require('.././globals');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject', 'fonts-serve'], function () {

  gulp.watch([path.join(globals.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch([
    path.join(globals.paths.src, '/app/**/*.css'),
    path.join(globals.paths.src, '/app/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(globals.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(globals.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
