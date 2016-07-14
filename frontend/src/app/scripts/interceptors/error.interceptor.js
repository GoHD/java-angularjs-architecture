(function () {
    'use strict';

    angular
        .module('gohd')
        .factory('errorInterceptor', errorInterceptorFn);

    /* @ngInject */
    function errorInterceptorFn($q, $location, messagesService, AUTH_EVENTS) {
        var interceptor = {
            responseError: responseErrorFn
        };

        return interceptor;

        function responseErrorFn(response) {
            if (response.status === 404) {
                $location.path('/error');
            } else if (response.status === 400) {
                messagesService.addErrorMessage(response.data.tituloDoErro);
            }
            return $q.reject(response);
        }
    }

})();
