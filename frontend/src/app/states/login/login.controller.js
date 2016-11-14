(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController(AuthService) {

    var vm = this;
    vm.efetuarLogin = efetuarLogin;

    function efetuarLogin(credenciais) {
      AuthService.login(credenciais, function() {
      });
    }
  }
})();
