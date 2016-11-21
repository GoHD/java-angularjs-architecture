(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd', {
        url: '/gohd',
        templateUrl: "app/layout/layout.html",
        controller: 'LayoutController',
        controllerAs: 'vm'
      });
  }
})();
