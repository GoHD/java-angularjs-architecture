(function () {
  'use strict';

  angular
    .module('gohd')
    .directive('validationMessages', ValidationMessages);

  /* @ngInject */
  function ValidationMessages($compile) {
    var directive = {
      restrict: 'E',
      require: '^validationContainer',
      compile: function (element) {

        var newHTML =
          '<div>' +
          '<div id="validation-container-id" name="validation-container" class="md-top-m-container" ng-if="valCtrl.alerts.length > 0">' +
          '<div ng-repeat="alert in valCtrl.alerts" class="alert {{alert.type}}">' +
          '<button type="button" class="close" ng-click="valCtrl.closeAlert(alert)">' +
          '<span aria-hidden="true">&times;</span>' +
          '<span class="sr-only">Close</span>' +
          '</button>' +
          '<strong ng-show="alert.title" id="#tFocus"> {{ alert.title }} - </strong> {{ alert.description }}' +
          '<div ng-repeat="subMessage in alert.subMessages | limitTo: valCtrl.limit">' +
          '<strong class="md-top-messages-title" ng-show="subMessage.title" ng-click="valCtrl.focus(subMessage.title)"> {{ subMessage.title }} - </strong> {{ subMessage.description }}' +
          '</div>' +
          '<div class="md-more-messages" ng-show="valCtrl.showDivMore(alert.subMessages)">' +
          '<p ng-click="valCtrl.exibirTodosOsErros()">Exibir todos...</p>' +
          '</div>' +
          '<div class="md-more-messages" ng-show="valCtrl.showDivLess(alert.subMessages)">' +
          '<p ng-click="valCtrl.exibirMenosErros()">Exibir menos...</p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        var newElement = angular.element(newHTML);
        element[0].innerHTML = newElement[0].innerHTML;

        return {
          pre: function preLink(scope) {
            $compile(newElement)(scope.$parent);
          },
          post: function postLink() {
          }
        };
      }
    };

    return directive;
  }
})();
