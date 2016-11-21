(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.usuario', {
        url: '/usuario',
        authenticate: true,
        templateUrl: "app/states/usuario/usuario.cadastro.html",
        controller: 'UsuarioController',
        controllerAs: 'vm'
      });
  }

})();
