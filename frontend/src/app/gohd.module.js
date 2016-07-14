(function() {
  'use strict';

  var requires = [
    'gohd.models',
    'gohd.layout',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'angular-growl'
  ];

  angular
    .module('gohd', requires);

})();
