(function(){
  'use strict';

  angular
    .module('gohd.scripts')
    .factory('AuthDao', AuthDaoFn);

  /* @ngInject */
  function AuthDaoFn($resource, ModelsConstants) {

    var factory = {
      Login: $resource(ModelsConstants.API.url + '/login'),
      Token: $resource(ModelsConstants.API.url + '/login/busca-usuario-por-token')
    };

    return factory;
  }
})();
