(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /* @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.cliente', {
        url: '/cliente',
        authenticate: true,
        templateUrl: "app/states/cliente/cliente.cadastro.html",
        controller: 'ClienteController',
        controllerAs: 'cc'
      });
  }

})();
