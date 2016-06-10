(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($scope, $state) {
    var vm = this;

    vm.autenticaUsuario = autenticaUsuarioFn;

    function autenticaUsuarioFn(nome, senha) {
      console.log(nome + senha);
      $state.go('gohd');
    }
  }

})();
