(function() {
  'use strict';

  angular
    .module('gohd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('gohd.home', {
        url: '/home',
        authenticate: true,
        templateUrl: "app/states/home/home.html"
      });
  }
})();
