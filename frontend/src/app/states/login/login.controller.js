(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController(AuthService) {

    var vm = this;
    vm.loading = false;

    vm.efetuarLogin = efetuarLogin;

    function efetuarLogin(credenciais) {
      vm.loading = true;
      AuthService.login(credenciais, function() {
        vm.loading = false;
      });
    }
  }
})();
