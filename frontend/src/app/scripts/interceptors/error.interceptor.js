(function () {
    'use strict';

    angular
        .module('gohd')
        .factory('errorInterceptor', errorInterceptorFn);

    /* @ngInject */
    function errorInterceptorFn($q, $location, messagesService) {
        var interceptor = {
            responseError: responseErrorFn
        };

        return interceptor;

        function responseErrorFn(rejection) {
            if (rejection.status === 404) {
                $location.path('/error');
            } else if(rejection.status === 400) {
                messagesService.addErrorMessage(rejection.data.tituloDoErro);
            }
            return $q.reject(rejection);
        }
    }

})();
