(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('UsuarioController', UsuarioController);

  /** @ngInject */
  function UsuarioController($log) {
    var vm = this;

    vm.salvar = salvarFn;
    vm.usuario = {
      id: 1,
      nome: "João",
      email: "jao@jaozinho.com"
    };

    function salvarFn() {
      $log.debug("Salvou");
    }
  }

})();
