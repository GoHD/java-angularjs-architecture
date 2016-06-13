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
      // isAuthorized: isAuthorized
    };

    return service;

    function login(credentials) {
      return loginDao.save(credentials, function(res) {
          var auth = res.data;
          $log.debug(auth.id, auth.username);
          SessionStorage.create(auth.id, auth.username, auth.roles);
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        });
    }

    function logout() {
        SessionStorage.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        return;
    }

    function isAuthenticated() {
      return !!SessionStorage.userId;
    }

    /*
    function isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (isAuthenticated() && authorizedRoles.indexOf(.userRole) !== -1);
    }
    */
  }


})();
