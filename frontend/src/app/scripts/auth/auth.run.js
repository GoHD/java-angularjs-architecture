(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .run(runBlock);

  /* @ngInject */
  function runBlock($state, AuthService, $rootScope, AUTH_EVENTS, $timeout) {

    /* eslint-disable */
    $rootScope.$on("$stateChangeStart", stateChangeStartFn);
    $rootScope.$on(AUTH_EVENTS.loginSuccess, loginSuccessFn);
    $rootScope.$on(AUTH_EVENTS.logoutSuccess, logoutSuccessFn);
    $rootScope.$on(AUTH_EVENTS.notAuthenticated, notAuthenticatedFn);
    $rootScope.$on(AUTH_EVENTS.forbidden, forbiddenFn);
    $rootScope.$on(AUTH_EVENTS.sessionTimeout, sessionTimeoutFn);
    /* eslint-enable */

    function login() {
      $timeout(function() {
        $state.go('login');
      });
    }

    function stateChangeStartFn() {
      AuthService.verifyAuthenticated();
    }

    function loginSuccessFn() {
      $state.go('dashboard.inicio');
    }

    function logoutSuccessFn() {
      login();
    }

    function notAuthenticatedFn() {
      login();
    }

    function forbiddenFn() {
      login();
    }

    function sessionTimeoutFn() {
      login();
    }
  }
})();
