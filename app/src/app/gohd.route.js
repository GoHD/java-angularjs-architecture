(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /* @ngInject */
  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.when('', '/gohd/inicio');
    $urlRouterProvider.otherwise('/gohd/inicio');
  }
})();
