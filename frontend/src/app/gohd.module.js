(function() {
  'use strict';

  var requires = [
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
