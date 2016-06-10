(function () {
    'use strict';

    angular
        .module('gohd')
        .factory('errorInterceptor', errorInterceptorFn);

    /* @ngInject */
    function errorInterceptorFn($q, $location) {
        var interceptor = {
            responseError: responseErrorFn
        };

        return interceptor;

        function responseErrorFn(rejection) {
            if (rejection.status === 404) {
                $location.path('/error');
            }
            return $q.reject(rejection);
        }
    }

})();
