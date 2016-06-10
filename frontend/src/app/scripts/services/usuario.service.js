(function() {
  'use strict';

  angular
    .module('gohd')
    .service('usuarioService', usuarioService);

  /* @ngInject */
  function usuarioService($q, $http) {
    var service = {
      buscarUsuarios: buscarUsuariosFn,
      adicionarUsuario: adicionarUsuarioFn
    };

    return service;

    function buscarUsuariosFn() {
      var deferred = $q.defer();

      $http.get('http://localhost:8080/app-rest/usuario')
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function adicionarUsuarioFn(usuario) {
      var deferred = $q.defer();

      $http.post('http://localhost:8080/app-rest/usuario', usuario)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
  }

})();
