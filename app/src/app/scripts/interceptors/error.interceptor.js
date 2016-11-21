(function () {
  'use strict';

  angular
    .module('gohd.scripts')
    .factory('errorInterceptor', errorInterceptorFn);

  /* @ngInject */
  function errorInterceptorFn($q, $location) {

    var interceptor = {
      responseError: responseErrorFn
    };

    return interceptor;

    function responseErrorFn(response) {
      if (response.status === 404) {
        $location.path('/error');
      }

      return $q.reject(response);
    }
  }
})();
