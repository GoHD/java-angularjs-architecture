(function(){
  'use strict';

  angular
    .module('gohd.scripts')
    .factory('UsuarioDao', UsuarioDaoFn);

  /* @ngInject */
  function UsuarioDaoFn($resource, ModelsConstants) {
    var factory = $resource(ModelsConstants.API.url + '/usuario');

    return factory;
  }
})();
