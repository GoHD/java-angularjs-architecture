(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .service('AuthService', AuthService);

  /* @ngInject */
  function AuthService($rootScope, SessionStorage, AUTH_EVENTS, UsuarioLogadoService, AuthDao) {

    var service = {
      login: login,
      logout: logout,
      verifyAuthenticated: verifyAuthenticated
    };

    return service;

    function login(credentials) {
      return AuthDao.Login.save(credentials, function(res) {
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
          AuthDao.Login.get();
        }
    }

    function findLoggedUserByToken() {
      AuthDao.Token.get({token: SessionStorage.token}, function(res) {
        UsuarioLogadoService.atualizaUsuarioLogado(res);
        $rootScope.$broadcast(AUTH_EVENTS.userInfoChanged);
      });
    }
  }
})();
