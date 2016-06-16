(function() {
  'use strict';

  angular
    .module('gohd')
    .service('clienteService', clienteService);

  /* @ngInject */
  function clienteService($q, $http, $log, $resource) {

    var clientes = $resource('http://localhost:8080/app-rest/cliente');

    var service = {
      buscarClientes: buscarClientes,
      adicionarCliente: adicionarCliente
    };

    return service;

    function adicionarCliente(cliente) {
      var deferred = $q.defer();
      clientes.save(cliente, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarClientes() {
      var deferred = $q.defer();
      clientes.getAll(
        function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        }
      );

      return deferred.promise;
    }
  }

})();
