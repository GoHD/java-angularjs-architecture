(function(){
  'use strict';

  angular
    .module('gohd.scripts')
    .factory('ClienteDao', ClienteDaoFn);

  /* @ngInject */
  function ClienteDaoFn($resource, ModelsConstants) {
    var factory = $resource(ModelsConstants.API.url + '/cliente');

    return factory;
  }
})();
