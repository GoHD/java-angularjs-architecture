(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .directive('gohdItem', gohdItem);

  /* @ngInject */
  function gohdItem($rootScope) {
    var directive = {
      restrict: 'AE',
      require: '^gohdSidebar',
      link: linkFn
    };

    return directive;

    function linkFn(scope, element, attributes, ctrl) {
      ctrl.registerItens(scope);

      scope.subMenuOpened = false;
      scope.btnClickFn = btnClickFn;
      scope.btnClickSubItemFn = btnClickSubItemFn;

      function btnClickFn(state, hasSubMenu) {
        $rootScope.$broadcast('click-on-menu-item');

        if (!hasSubMenu) {
          ctrl.state(state);
        }
        selectMenuItem(hasSubMenu);
      }

      function btnClickSubItemFn(state, hasSubMenu) {
        $rootScope.$broadcast('click-on-menu-item');

        if (!hasSubMenu) {
          ctrl.state(state);
        }

        selectSubItem(state);
      }

      function selectSubItem(state) {
        ctrl.updateSelectedSubItem(scope, state);
      }

      function selectMenuItem(hasSubMenu) {
        if (hasSubMenu) {
          ctrl.closeAllSubMenusBut(scope);
          scope.subMenuOpened = !scope.subMenuOpened;
        }

        ctrl.updateSelectedItem(scope);
      }
    }
  }
})();
