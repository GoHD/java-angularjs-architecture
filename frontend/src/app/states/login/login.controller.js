(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($scope, $rootScope, AuthService, AUTH_EVENTS) {
    var vm = this;

    vm.title = "Bem vindo!";
    vm.login = login;
    vm.credentials = {
      login: '',
      senha: ''
    };

    function login(credentials) {
      AuthService.login(credentials, function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }, function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    }
  }

})();
