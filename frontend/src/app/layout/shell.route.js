(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd', {
        url: '/gohd',
        authenticate: true,
        templateUrl: "app/layout/shell.html",
        controller: 'ShellController',
        controllerAs: 'sc'
      });
  }

})();
