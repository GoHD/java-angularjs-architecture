(function() {
    'use strict';

    angular
      .module('gohd')
      .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(clienteService, $log) {
      var vm = this;

      vm.salvar = salvarFn;
      vm.clientes = [];

      buscarClientes();

      function salvarFn(cliente) {
        cliente.dataNascimento = moment().format("YYYY-MM-DD");
        clienteService.adicionarCliente(cliente).then(
          function(data) {
            vm.clientes.push(data);
            delete vm.cliente;
          },
          function(e) {
            $log.debug("Ocorreu um erro ao salvar um cliente: " + e);
          }
        );
      }

      function buscarClientes() {
        clienteService.buscarClientes().then(
          function(data) {
            vm.clientes.push(data);
          },
          function(e) {
            $log.debug("Ocorreu um erro ao buscar os clientes cadastrados: " + e);
          }
        );
      }

  }

})();
