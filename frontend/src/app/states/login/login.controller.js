(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($scope, $state) {
    var vm = this;

    vm.autenticaUsuario = autenticaUsuarioFn;

    function autenticaUsuarioFn() {
      $state.go('gohd');
    }
  }

})();
