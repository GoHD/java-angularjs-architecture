(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .service('usuarioService', usuarioService);

  /* @ngInject */
  function usuarioService($q, $http, $log, UsuarioDao) {

    var service = {
      buscarUsuarios: buscarUsuarios,
      adicionarUsuario: adicionarUsuario
    };

    return service;

    function adicionarUsuario(usuario) {
      var deferred = $q.defer();
      UsuarioDao.save(usuario, function(data) {
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function buscarUsuarios() {
      var deferred = $q.defer();
      UsuarioDao.getAll(
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
