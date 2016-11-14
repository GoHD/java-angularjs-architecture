(function() {
  'use strict';

  angular
    .module('gohd')
    .run(runBlock);

  /* @ngInject */
  function runBlock($state, AuthService, $rootScope, AUTH_EVENTS, $timeout) {

    $rootScope.$on("$stateChangeStart", function() {
      AuthService.verifyAuthenticated();
    });

    function login() {
      $timeout(function() {
        $state.go('login');
      });
    }

    $rootScope.$on(AUTH_EVENTS.loginSuccess, function() {
      $state.go('gohd.inicio');
    });

    $rootScope.$on(AUTH_EVENTS.logoutSuccess, function() {
      login();
    });

    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
      login();
    });

    $rootScope.$on(AUTH_EVENTS.forbidden, function() {
      login();
    });

    $rootScope.$on(AUTH_EVENTS.sessionTimeout, function() {
      login();
    });
  }
})();
