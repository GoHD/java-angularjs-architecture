(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController(AuthService, $rootScope) {
    var vm = this;

    vm.logout = AuthService.logout;
    vm.id = $rootScope.id;
    vm.nome = $rootScope.nome;
    vm.email = $rootScope.email;
    vm.token = $rootScope.token;
  }
})();
