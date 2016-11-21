(function() {
  'use strict';

  angular
    .module('gohd.components')
    .directive('loggedUser', LoggedUser);

  /* @ngInject */
  function LoggedUser(UsuarioLogadoService) {
    var directive = {
        template: '<div style="margin-bottom: 5px;"><strong>Olá, {{vm.loggedUser}}</strong></div><div>{{ directiveData.msg }}</div>',
        controller: controllerFn,
        controllerAs: 'vm'
    };

    return directive;

    function controllerFn() {
      var vm = this;
      vm.loggedUser = UsuarioLogadoService.nome;
    }
  }
})();
