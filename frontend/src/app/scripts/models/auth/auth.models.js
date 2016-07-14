(function(){
  'use strict';

  angular
    .module('gohd.models')
    .factory('AuthModel', AuthModelFn);

  /* @ngInject */
  function AuthModelFn($resource, ModelsConstants) {

    var factory = {
      Login: $resource(ModelsConstants.API.url + '/login'),
      Token: $resource(ModelsConstants.API.url + '/login/busca-usuario-por-token')
    };

    return factory;
  }
})();
