(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/gohd');
        $urlRouterProvider.otherwise('/error?code=404');
  }

})();
