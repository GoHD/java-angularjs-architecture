(function(){
  'use strict';

  angular
    .module('gohd.layout')
    .directive('gohdSidebar', gohdSidebar)
    .directive('overflowSidebar', overflowSidebar);

  /* @ngInject */
  function gohdSidebar(MenuFactory, UsuarioLogadoService, $state, $rootScope) {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/layout/sidebar/sidebar.html',
      controller: controllerFn,
      controllerAs: 'dvm'
    };

    return directive;

    function controllerFn() {
      var dvm = this;
      dvm.menuItens = [];

      dvm.registerItens = registerItens;
      dvm.updateSelectedItem = updateSelectedItem;
      dvm.updateSelectedSubItem = updateSelectedSubItem;
      dvm.closeAllSubMenusBut = closeAllSubMenusBut;
      dvm.verifyPermissionSetor = verifyPermissionSetor;
      dvm.state = goToState;
      dvm.typeAheadSelectFn = typeAheadSelectFn
      dvm.typeAheadOnBlur = typeAheadOnBlur;
      dvm.itensMenu = MenuFactory.itens();
      dvm.menuFastSearchList = [];
      dvm.typeAheadHover = false;

      /* eslint-disable */
      $rootScope.$on("$stateChangeStart", defaultMenuChangesOnStateChange);
      /* eslint-enable */

      function defaultMenuChangesOnStateChange(e, toState) {
        setAllMenuItensAsNotSelected();
        setAllSubMenuItensAsNotSelected();
        closeAllMenuItens();
        setMenuAsSelectedByState(toState.name);
      }

      function typeAheadOnBlur() {
        dvm.modelTypeAhead = '';
      }

      function goToState(state) {
        $state.transitionTo(state, null);
      }

      function registerItens(menuItem) {
        dvm.menuItens.push(menuItem);
        fillFastSearchList(menuItem);
      }

      function fillFastSearchList(menuItem) {
        if (menuItem.item.hasSubMenu) {
          menuItem.item.subItens.forEach(function(subItem) {
            if (verifyPermissionSetor(subItem)) {
              dvm.menuFastSearchList.push({
                name: subItem.nome,
                state: subItem.state
              });
            }
          });
        } else {
          if (verifyPermissionSetor(menuItem.item)) {
            dvm.menuFastSearchList.push({
              name: menuItem.item.nome,
              state: menuItem.item.state
            });
          }
        }
      }

      function typeAheadSelectFn(selectedMenuItem) {
        dvm.state(selectedMenuItem.state);
        dvm.modelTypeAhead = '';

        setAllMenuItensAsNotSelected();
        setAllSubMenuItensAsNotSelected();
        closeAllMenuItens();

        setMenuAsSelectedByState(selectedMenuItem.state)
      }

      function closeAllSubMenusBut(scope) {
        dvm.menuItens.forEach(function(menuItem) {
          if (menuItem !== scope) {
            menuItem.subMenuOpened = false;
          }
        });
      }

      function updateSelectedItem(scope) {
        if (_.contains(dvm.menuItens, scope)) {
          if (scope.item.hasSubMenu) {
            return;
          }
        }

        setAllSubMenuItensAsNotSelected();
        closeAllMenuItens();

        dvm.menuItens.forEach(function (menuItem) {
          if (menuItem !== scope) {
            menuItem.item.isSelected = false;
          } else {
            menuItem.item.isSelected = true;
          }
        });
      }

      function updateSelectedSubItem(scope, state) {
        setAllMenuItensAsNotSelected();
        setAllSubMenuItensAsNotSelected()

        dvm.menuItens.forEach(function(menuItem) {
          if (menuItem == scope) {
            menuItem.item.subItens.forEach(function(subItem) {
              if (subItem.state == state) {
                subItem.isSelected = true;
              }
            });
          }
        });
      }

      function setAllMenuItensAsNotSelected() {
        dvm.menuItens.forEach(function(menuItem) {
            menuItem.item.isSelected = false;
        });
      }

      function closeAllMenuItens() {
        dvm.menuItens.forEach(function(menuItem) {
          menuItem.subMenuOpened = false;
        });
      }

      function setAllSubMenuItensAsNotSelected() {
        dvm.menuItens.forEach(function(menuItem) {
          if (menuItem.item.subItens) {
            menuItem.item.subItens.forEach(function(subItem) {
              subItem.isSelected = false;
            });
          }
        });
      }

      function setMenuAsSelectedByState(state) {
        dvm.menuItens.forEach(function(menuItem) {
          if (menuItem.item.state == state) {
            menuItem.item.isSelected = true;
          }

          if (menuItem.item.subItens) {
            menuItem.item.subItens.forEach(function(subItem) {
              if (subItem.state == state) {
                subItem.isSelected = true;
                menuItem.subMenuOpened = true;
              }
            });
          }
        });
      }

      function verifyPermissionSetor(item) {
        if (item.subItens) {

          var listaDeValidados = item.subItens.map(function(subItem) {
            if (subItem.hasOwnProperty('setores')) {
              return _.contains(subItem.setores, UsuarioLogadoService.setor.id);
            } else {
              return true;
            }
          });

          return _.contains(listaDeValidados, true);

        } else if (item.setores) {
            return _.contains(item.setores, UsuarioLogadoService.setor.id);
        }

        return true;
      }
    }
  }

  /* @ngInject */
  function overflowSidebar($rootScope, $timeout) {
    var directive = {
      restrict: 'A',
      link: linkFn
    };

    return directive;

    function linkFn(scope, element) {
      checkScrollingAndAddClass();
      var destroy = $rootScope.$on('click-on-menu-item', function() { checkScrollingAndAddClass(); });
      $rootScope.$on('$destroy', destroy);

      function checkScrollingAndAddClass() {
        $timeout(function() {
          var hasVerticalScrollbar = element[0].scrollHeight > element[0].clientHeight;

          if (hasVerticalScrollbar) {
            angular.element(element[0]).addClass('sidebar-when-scrolling');
          } else {
            angular.element(element[0]).removeClass('sidebar-when-scrolling');
          }
        }, 30);
      }
    }
  }
})();
