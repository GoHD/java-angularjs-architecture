(function(){
  'use strict';

  angular
    .module('gohd')
    .run(runFunction);

  /* @ngInject */
  function runFunction($templateCache, $rootScope, topMessagesService) {

    $rootScope.alerts = [];

    /* eslint-disable */
    $rootScope.$on("$stateChangeStart", function() {
        topMessagesService.closeAllMessages();
    });
    /* eslint-enable */

    $templateCache.put(
      'app/components/top-messages/top-messages-container.html',
      '<div class="top-m-container">' +
        '<div ng-repeat="alert in alerts" class="bottom5 alert {{alert.type}}">' +
          '<button type="button" class="close" ng-click="vm.closeAlert(alert)">' +
            '<span aria-hidden="true">&times;</span>' +
            '<span class="sr-only">Close</span>' +
          '</button>' +
          '<strong ng-show="alert.title" id="#tFocus"> {{ alert.title }} - </strong> {{ alert.description }}' +
          '<div ng-repeat="subMessage in alert.subMessages | limitTo: vm.limit">' +
            '<strong class="top-messages-title" ng-show="subMessage.title" ng-click="vm.focus(subMessage.title)"> {{ subMessage.title }} - </strong> {{ subMessage.description }}' +
          '</div>' +
          '<div class="more-messages" ng-show="vm.showDivMore(alert.subMessages)">' +
            '<p ng-click="vm.exibirMaisErros()">Exibir mais...</p>' +
          '</div>' +
          '<div class="more-messages" ng-show="vm.showDivLess(alert.subMessages)">' +
            '<p ng-click="vm.exibirMenosErros()">Exibir menos...</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  angular
    .module('gohd')
    .directive('topAlertContainer', topAlertContainer);

  /* @ngInject */
  function topAlertContainer(topMessagesService, setFocus) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/top-messages/top-messages-container.html',
      controller: Controller,
      controllerAs: 'vm'
    };

    return directive;

    function Controller() {

      var LIMIT_MESSAGES = 6;

      var vm = this;
      vm.limit = LIMIT_MESSAGES;

      vm.focus = focusFn;
      vm.showDivMore = showDivMore;
      vm.showDivLess = showDivLess;
      vm.exibirMaisErros = exibirMaisErros;
      vm.exibirMenosErros = exibirMenosErros;
      vm.closeAlert = closeAlert;

      function focusFn(fieldName) {
        setFocus(fieldName);
      }

      function showDivLess(messages) {
        if (_.isArray(messages)) {
          if (messages.length < vm.limit) {
            if (messages.length > 12) {
              return true;
            }
          }
        }
        return false;
      }

      function showDivMore(messages) {
        if (_.isArray(messages)) {
          if (messages.length > 4) {
            if (messages.length > vm.limit) {
              return true;
            }
          }
        }
        return false;
      }

      function exibirMaisErros() {
        vm.limit += 3;
      }

      function exibirMenosErros() {
        vm.limit = LIMIT_MESSAGES;
      }

      function closeAlert(alert) {
        vm.limit = LIMIT_MESSAGES;
        topMessagesService.closeAlert(alert);
      }
    }
  }

  angular
    .module('gohd')
    .factory('topMessagesInterceptor', topMessagesInterceptorFn)
    .config(topMessagesConfig);

  /* @ngInject */
  function topMessagesConfig($httpProvider) {
    $httpProvider.interceptors.push('topMessagesInterceptor');
  }

  /* @ngInject */
  function topMessagesInterceptorFn($q, topMessagesService) {

    var interceptor = {
      response: response,
      responseError: responseError
    };

    return interceptor;

    function response(response) {
      topMessagesService.closeAllMessages();
      return response;
    }

    function responseError(response) {
      topMessagesService.closeAllMessages();
      return $q.reject(response);
    }
  }
})();
