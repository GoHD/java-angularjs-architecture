(function() {
  'use strict';

  angular
    .module('gohd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, $log, AuthService) {

    $rootScope.$on("$stateChangeStart", function(event, toState/*, toParams, fromState, fromParams*/) {
      if (toState.authenticate && AuthService.isAuthenticated === false) {
        $log.debug('nao está autenticado');
        $state.transitionTo("login");
        event.preventDefault();
      }
    });

    $log.debug('runBlock end');
  }

})();
