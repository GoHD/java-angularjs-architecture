(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /* @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.inicio', {
        url: '/inicio',
        authenticate: false,
        templateUrl: "app/states/inicio/inicio.html",
        controller: 'InicioController',
        controllerAs: 'vm'
      });
  }
})();
