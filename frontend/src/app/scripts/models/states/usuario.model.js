(function() {
  'use strict';

  angular
    .module('gohd.models', [])
    .factory('UsuarioModel', UsuarioModelFn);

  /* @ngInject */
  function UsuarioModelFn($resource) {
    var factory = $resource('/api/jobs/:jobId', {
      full: 'true',
      jobId: '@id'
    });

    return factory;
  }
})();
