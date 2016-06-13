(function() {
  'use strict';

  angular
    .module('gohd')
    .directive('gohdNavbar', gohdNavbar);

  /** @ngInject */
  function gohdNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(AuthService) {
      var vm = this;

      vm.logout = AuthService.logout;
    }
  }

})();
