(function () {
    'use strict';

    angular
        .module('gohd')
        .factory('requestInterceptor', requestInterceptor);

    /* @ngInject */
    function requestInterceptor($q, SessionStorage) {
        var interceptor = {
            request: request
        };

        return interceptor;

        function request(config) {
              config.headers = config.headers || {};
              var token = SessionStorage.getToken();
              config.headers.Authorization = token;
              return config || $q.when(config);
        }
    }

})();
