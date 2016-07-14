(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController(AuthService, $rootScope, UsuarioLogadoService, AUTH_EVENTS) {
    var vm = this;

    vm.logout = AuthService.logout;
    vm.id = UsuarioLogadoService.id;
    vm.nome = UsuarioLogadoService.nome;
    vm.email = UsuarioLogadoService.email;

    $rootScope.$on(AUTH_EVENTS.userInfoChanged, function() {
      atualizaDadosUsuarioLogado();
    });

    function atualizaDadosUsuarioLogado() {
      vm.id = UsuarioLogadoService.id;
      vm.nome = UsuarioLogadoService.nome;
      vm.email = UsuarioLogadoService.email;
    }
  }
})();
