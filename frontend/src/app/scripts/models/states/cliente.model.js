(function(){
  'use strict';

  angular
    .module('gohd.models')
    .factory('ClienteModel', ClienteModelFn);

  /* @ngInject */
  function ClienteModelFn($resource, ModelsConstants) {
    var factory = $resource(ModelsConstants.API.url + '/cliente');

    return factory;
  }
})();
