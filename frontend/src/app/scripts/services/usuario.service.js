(function() {
  'use strict';

  angular
    .module('gohd')
    .service('usuarioService', usuarioService);

  /* @ngInject */
  function usuarioService($q, $http, $log, UsuarioModel) {

    var service = {
      buscarUsuarios: buscarUsuarios,
      adicionarUsuario: adicionarUsuario
    };

    return service;

    function adicionarUsuario(usuario) {
      var deferred = $q.defer();
      UsuarioModel.save(usuario, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarUsuarios() {
      var deferred = $q.defer();
      UsuarioModel.getAll(
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
