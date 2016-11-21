'use strict';

var path = require('path');
var gulp = require('gulp');
var globals = require('.././globals');

var karma = require('karma');

var pathSrcHtml = [
  path.join(globals.paths.src, '/**/*.html')
];

var pathSrcJs = [
  path.join(globals.paths.src, '/**/!(*.spec).js')
];

function runTests (singleRun, done) {
  var reporters = ['progress'];
  var preprocessors = {};

  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage');
  }

  var localConfig = {
    configFile: path.join(__dirname, '/../../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    preprocessors: preprocessors
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  });

  /**
   * Descomentar para funcionar os tests.
   */
  //server.start();
}

gulp.task('test', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
  runTests(false, done);
});
