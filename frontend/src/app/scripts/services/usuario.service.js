(function() {
  'use strict';

  angular
    .module('gohd')
    .service('usuarioService', usuarioService);

  /* @ngInject */
  function usuarioService($q, $http, $log, $resource) {

    var users = $resource('http://localhost:8080/app-rest/usuario');

    var service = {
      buscarUsuarios: buscarUsuarios,
      adicionarUsuario: adicionarUsuario
    };

    return service;

    function adicionarUsuario(usuario) {
      var deferred = $q.defer();
      users.save(usuario, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarUsuarios() {
      var deferred = $q.defer();
      users.getAll(
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
