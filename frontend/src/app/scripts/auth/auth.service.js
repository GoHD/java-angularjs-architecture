(function() {
  'use strict';

  angular
    .module('gohd')
    .service('AuthService', AuthService);

  /* @ngInject */
  function AuthService($rootScope, $resource, $state, $log, SessionStorage, AUTH_EVENTS) {

    var loginDao = $resource('http://localhost:8080/app-rest/login');

    var service = {
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated
    };

    return service;

    function login(credentials) {
      return loginDao.save(credentials, function(res) {
          var auth = res;
          SessionStorage.create(auth.id, auth.nome, auth.login, auth.token);
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        });
    }

    function logout() {
        SessionStorage.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        return;
    }

    function isAuthenticated() {
      return !!SessionStorage.getName();
    }
  }

})();
