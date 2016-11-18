(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .service('clienteService', clienteService);

  /* @ngInject */
  function clienteService($q, $http, $log, ClienteDao) {

    var service = {
      buscarClientes: buscarClientes,
      adicionarCliente: adicionarCliente
    };

    return service;

    function adicionarCliente(cliente) {
      var deferred = $q.defer();
      ClienteDao.save(cliente, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarClientes() {
      var deferred = $q.defer();
      ClienteDao.getAll(
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
