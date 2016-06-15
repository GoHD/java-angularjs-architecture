(function() {
  'use strict';

  angular
    .module('gohd')
    .config(configFn);

  /* @ngInject */
  function configFn($httpProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
    $httpProvider.interceptors.push('AuthInterceptor');
    $httpProvider.interceptors.push('requestInterceptor');
  }

})();
