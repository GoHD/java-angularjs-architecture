(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        authenticate: false,
        templateUrl: "app/states/login/login.html",
        controller: 'LoginController',
        controllerAs: 'lc'
      });
  }
})();
