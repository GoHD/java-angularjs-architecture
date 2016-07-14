(function(){
  'use strict';

  angular
    .module('gohd.models')
    .factory('UsuarioModel', UsuarioModelFn);

  /* @ngInject */
  function UsuarioModelFn($resource, ModelsConstants) {
    var factory = $resource(ModelsConstants.API.url + '/usuario');

    return factory;
  }
})();
