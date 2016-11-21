(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /* @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.exemplos', {
        url: '/exemplos',
        authenticate: false,
        templateUrl: "app/states/exemplos/exemplos.html",
        controller: 'ExemplosController',
        controllerAs: 'vm'
      });
  }
})();
