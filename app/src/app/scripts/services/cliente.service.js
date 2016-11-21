(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .service('clienteService', clienteService);

  /* @ngInject */
  function clienteService($q, $http, ModelsConstants) {

    var clienteUrl = ModelsConstants.API.url + '/cliente';

    var service = {
      buscarClientes: buscarClientes,
      adicionarCliente: adicionarCliente
    };

    return service;

    function adicionarCliente(cliente) {
      var deferred = $q.defer();
      $http.post(clienteUrl, cliente).then(function(res) {
        deferred.resolve(res.data);
      });
      return deferred.promise;
    }

    function buscarClientes() {
      var deferred = $q.defer();
      $http.get(clienteUrl).then(function(res){
        deferred.resolve(res.data);
      });
      return deferred.promise;
    }
  }

})();
