(function() {
  'use strict';

  angular
    .module('gohd.components')
    .run(runFunction);

  /* @ngInject */
  function runFunction($templateCache) {
    $templateCache.put(
      'app/components/tdate/tdate.html',
      '<p class="input-group">' +
        '<input type="text" ' +
                'class="form-control" ' +
                'placeholder="dd/mm/yyyy" ' +
                'uib-datepicker-popup="dd/MM/yyyy" ' +
                'ng-required="true" ' +
                'ng-model="ngModel" ' +
                'is-open="vm.dtOpen" ' +
                'current-text="Hoje" ' +
                'clear-text="Limpar" ' +
                'close-text="Fechar" '+
                'validation-input />' +
        '<span class="input-group-btn">' +
          '<button type="button" ' +
                  'class="btn btn-default" ' +
                  'ng-click="vm.dtOpen = !vm.dtOpen">' +
                  '<i class="glyphicon glyphicon-calendar"></i>' +
           '</button>' +
        '</span>' +
      '</p>'
    );
  }

  angular
    .module('gohd.components')
    .directive('hotDate', hotDate);

  /* @ngInject */
  function hotDate() {
    return {
      templateUrl: 'app/components/tdate/tdate.html',
      controller: TDateController,
      controllerAs: 'vm',
      scope: {
        ngModel: '='
      },
      compile: function(element, $attrs) {
        var el = angular.element(element.context.childNodes[0].childNodes[0]);

        if (!$attrs.hasOwnProperty('validationInput')) {
          el.removeAttr('validation-input');
        }

        return {
          pre: function preLink(scope, element, attributes) {},
          post: function postLink() {}
        };
      }
    };
  }

  angular
    .module('gohd.components')
    .controller('TDateController', TDateController);

  /* @ngInject */
  function TDateController() {}
})();
