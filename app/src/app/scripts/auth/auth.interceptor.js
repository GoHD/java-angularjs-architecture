(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .factory('AuthInterceptor', AuthInterceptor);

  /* @ngInject */
  function AuthInterceptor($rootScope, $q, SessionStorage, AUTH_EVENTS) {

    var interceptor = {
      request: request,
      responseError: responseError
    };

    return interceptor;

    function request(config) {
      config.headers = config.headers || {};
      if (SessionStorage.token && !config.headers.Authorization) {
        config.headers.Authorization = SessionStorage.token;
      }
      return config;
    }

    function responseError(response) {
      if (response.status === 401 || response.status === 403 || response.status === 419) {
        $rootScope.$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized,
          419: AUTH_EVENTS.sessionTimeout
        }[response.status], response);

        SessionStorage.destroy();
      }

      return $q.reject(response);
    }
  }
})();
