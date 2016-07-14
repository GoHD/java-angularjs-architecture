(function(){
  'use strict';

  angular
    .module('gohd.models')
    .config(configFn);

  /* @ngInject */
  function configFn($resourceProvider) {
    $resourceProvider.defaults.actions = {
      save:   {method: 'POST'},
      get:    {method: 'GET'},
      getAll: {method: 'GET', isArray:true},
      update: {method: 'PUT'},
      delete: {method: 'DELETE'}
    };
  }
})();
