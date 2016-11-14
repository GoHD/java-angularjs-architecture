(function() {
  'use strict';

  var requires = [
    'gohd.components',
    'gohd.layout',
    'gohd.scripts',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'formly',
    'formlyBootstrap'
  ];

  angular.module('gohd', requires);
})();
