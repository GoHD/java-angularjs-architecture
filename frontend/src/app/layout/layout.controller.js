(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .controller('LayoutController', LayoutController);

  /* @ngInject */
  function LayoutController(AuthService, $rootScope, UsuarioLogadoService, AUTH_EVENTS) {
    var vm = this;

    vm.logout = AuthService.logout;
    vm.nome = UsuarioLogadoService.nome;
    vm.email = UsuarioLogadoService.email;

    $rootScope.$on('$destroy', $rootScope.$on(AUTH_EVENTS.userInfoChanged, function() {
      atualizaDadosUsuarioLogado();
    }));

    function atualizaDadosUsuarioLogado() {
      vm.nome = UsuarioLogadoService.nome;
      vm.email = UsuarioLogadoService.email;
    }
  }
})();
