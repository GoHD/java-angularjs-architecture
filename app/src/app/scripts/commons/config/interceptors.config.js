(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .config(configFn);

  /* @ngInject */
  function configFn($httpProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
    $httpProvider.interceptors.push('AuthInterceptor');
  }

})();
