(function() {
  'use strict';

  angular
    .module('gohd')
    .service('AuthService', AuthService);

  /* @ngInject */
  function AuthService($rootScope, $resource, $state, $log, SessionStorage, AUTH_EVENTS, UsuarioLogadoService) {

    var loginDao = $resource('http://localhost:8080/app-rest/login');
    var tokenDao = $resource('http://localhost:8080/app-rest/login/busca-usuario-por-token');

    var service = {
      login: login,
      logout: logout,
      verifyAuthenticated: verifyAuthenticated
    };

    return service;

    function login(credentials) {
      return loginDao.save(credentials, function(res) {
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
          loginDao.get();
        }
    }

    function findLoggedUserByToken() {
      tokenDao.get({token: SessionStorage.token}, function(res) {
        UsuarioLogadoService.atualizaUsuarioLogado(res);
        $rootScope.$broadcast(AUTH_EVENTS.userInfoChanged);
      });
    }
  }

})();
