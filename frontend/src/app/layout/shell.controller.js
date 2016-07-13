(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController(AuthService, $rootScope, UsuarioLogadoService) {
    var vm = this;

    vm.logout = AuthService.logout;
    vm.id = UsuarioLogadoService.id;
    vm.nome = UsuarioLogadoService.nome;
    vm.email = UsuarioLogadoService.email;
    vm.token = UsuarioLogadoService.token;

    var menuWrapperId = "#wrapper";
    var menuToggleId = "#menu-toggle";

    $(menuWrapperId).toggleClass("active");
    $(menuToggleId).click(function(e) {
            e.preventDefault();
            $(menuWrapperId).toggleClass("active");
    });
  }
})();
