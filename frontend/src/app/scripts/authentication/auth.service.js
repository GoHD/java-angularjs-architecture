(function() {
  'use strict';

  angular
    .module('gohd')
    .service('AuthService', AuthService);

  /* @ngInject */
  function AuthService($rootScope, $log, SessionStorage, AUTH_EVENTS, UsuarioLogadoService, AuthModel) {

    var service = {
      login: login,
      logout: logout,
      verifyAuthenticated: verifyAuthenticated
    };

    return service;

    function login(credentials) {
      return AuthModel.Login.save(credentials, function(res) {
          var auth = res;
          SessionStorage.create(auth.token);
          UsuarioLogadoService.atualizaUsuarioLogado(auth);
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        });
    }

    function logout() {
        SessionStorage.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        return;
    }

    function verifyAuthenticated() {
        if (UsuarioLogadoService.login === '') {
          findLoggedUserByToken();
        } else {
          AuthModel.Login.get();
        }
    }

    function findLoggedUserByToken() {
      AuthModel.Token.get({token: SessionStorage.token}, function(res) {
        UsuarioLogadoService.atualizaUsuarioLogado(res);
        $rootScope.$broadcast(AUTH_EVENTS.userInfoChanged);
      });
    }
  }

})();
