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
          icon: 'fa fa-file-text-o',
          hasSubMenu: false
        }
      ];
    }
  }
})();
