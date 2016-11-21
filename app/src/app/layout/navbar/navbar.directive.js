(function(){
  'use strict';

  angular
    .module('gohd.layout')
    .directive('gohdNavbar', gohdNavbarFn);

  /* @ngInject */
  function gohdNavbarFn() {
      return {
        restrict: 'E',
        templateUrl: 'app/layout/navbar/navbar.html'
      };
  }
})();
