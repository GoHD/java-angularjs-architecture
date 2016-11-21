(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .service('usuarioService', usuarioService);

  /* @ngInject */
  function usuarioService($q, $http, ModelsConstants) {

    var usuarioUrl = ModelsConstants.API.url + '/usuario';

    var service = {
      buscarUsuarios: buscarUsuarios,
      adicionarUsuario: adicionarUsuario
    };

    return service;

    function adicionarUsuario(usuario) {
      var deferred = $q.defer();
      $http.post(usuarioUrl, usuario).then(function(res) {
        deferred.resolve(res.data);
      });
      return deferred.promise;
    }

    function buscarUsuarios() {
      var deferred = $q.defer();
      $http.get(usuarioUrl).then(function(res){
        deferred.resolve(res.data);
      });
      return deferred.promise;
    }
  }

})();
