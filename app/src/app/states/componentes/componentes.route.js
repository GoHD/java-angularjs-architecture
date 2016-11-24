(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /* @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.componentes', {
        url: '/componentes',
        authenticate: false,
        templateUrl: "app/states/componentes/componentes.html",
        controller: 'ComponentesController',
        controllerAs: 'vm'
      });
  }
})();
