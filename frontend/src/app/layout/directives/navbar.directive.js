(function(){
  'use strict';

  angular
    .module('gohd.layout')
    .directive('gohdNavbar', gohdNavbarFn);

  /* @ngInject */
  function gohdNavbarFn() {
      return {
        restrict: 'A',
        link: linkFn
      };

    function linkFn() {
      var menuWrapper = angular.element(document.getElementById('wrapper'));
      var menuToggle = angular.element(document.getElementById('menu-toggle'));

      menuToggle.on('click', function(e) {
        menuWrapper.toggleClass("active");
        e.preventDefault();
      });
    }
  }
})();
