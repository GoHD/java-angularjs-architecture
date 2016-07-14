(function() {
  'use strict';

  angular
    .module('gohd')
    .service('clienteService', clienteService);

  /* @ngInject */
  function clienteService($q, $http, $log, ClienteModel) {

    var service = {
      buscarClientes: buscarClientes,
      adicionarCliente: adicionarCliente
    };

    return service;

    function adicionarCliente(cliente) {
      var deferred = $q.defer();
      ClienteModel.save(cliente, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarClientes() {
      var deferred = $q.defer();
      ClienteModel.getAll(
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
