(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($scope, $rootScope, AuthService, AUTH_EVENTS, $log) {
    var vm = this;

    vm.login = login;
    vm.credentials = {
      login: '',
      senha: ''
    };

    function login(credentials) {
      AuthService.login(credentials).then(function(user) {
        $log.debug('Usuário logado com sucesso: ' + user);
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }, function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    }
  }

})();
