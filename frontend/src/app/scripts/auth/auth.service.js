(function() {
  'use strict';

  angular
    .module('gohd')
    .service('AuthService', AuthService);

  /* @ngInject */
  function AuthService($resource, Session, $state, $log) {

    var loginDao = $resource('http://localhost:8080/app-rest/login');

    var service = {
      login: login,
      isAuthenticated: isAuthenticated,
      isAuthorized: isAuthorized
    };

    return service;

    function login(credentials) {
      return loginDao.save(credentials, function(res) {
          // Session.create(res.data.id, res.data.user.id, res.data.user.role);
          // return res.data.user;
          $log.debug(res);
          $state.go('gohd');
        });
    }

    function isAuthenticated() {
      return !!Session.userId;
    }

    function isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
    }

  }


})();
