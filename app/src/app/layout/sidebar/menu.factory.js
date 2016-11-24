(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .factory('MenuFactory', MenuFactory);

  /* @ngInject */
  function MenuFactory() {
    var factory = {
      itens: itensFn
    };

    return factory;

    function itensFn() {
      return [{
          nome: 'Inicio',
          state: 'gohd.inicio',
          icon: 'fa fa-home',
          hasSubMenu: false
        }, {
          nome: 'Usuário',
          state: 'gohd.usuario',
          icon: 'fa fa-user',
          hasSubMenu: false
        }, {
          nome: 'Cliente',
          state: 'gohd.cliente',
          icon: 'fa fa-male',
          hasSubMenu: false
        }, {
        nome: 'Componentes',
        state: 'gohd.componentes',
        icon: 'fa fa-wrench',
        hasSubMenu: false
      }
      ];
    }
  }
})();
