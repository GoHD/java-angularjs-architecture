'use strict';

var path = require('path');
var gulp = require('gulp');
var globals = require('.././globals');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

// var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === globals.paths.src || (util.isArray(baseDir) && baseDir.indexOf(globals.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * Você pode adicionar um proxy para o backend descomentando a linha abaixo.
   * Você precisa apenas configurar o contexto ao qual seremos redirecionados e a url final.
   * Exemplo: os requests $http.get('/users') passarão pelo proxy.
   *
   * Referencia: https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */

   // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(globals.paths.tmp, '/serve'), globals.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(globals.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([globals.paths.tmp + '/serve', globals.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(globals.paths.dist, []);
});
