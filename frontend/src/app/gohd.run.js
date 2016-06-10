(function() {
  'use strict';

  angular
    .module('gohd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, $log, AuthService) {

    var stateChangeStartFn = $rootScope.$on("$stateChangeStart", function(event, toState /*, toParams, fromState, fromParams*/ ) {
      if (toState.authenticate && AuthService.isAuthenticated === false) {
        $state.transitionTo("login");
        event.preventDefault();
      }
    });

    $rootScope.$on("$destroy", stateChangeStartFn);
    $log.debug('runBlock end');
  }

})();
