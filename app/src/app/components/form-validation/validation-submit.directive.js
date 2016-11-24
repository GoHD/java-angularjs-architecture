(function() {
  'use strict';

  angular
    .module('gohd')
    .directive('validationSubmit', ValidationSubmit);

  /* @ngInject */
  function ValidationSubmit() {
    var directive = {
      restrict: 'A',
      require: '^validationContainer',
      scope: {
        validationSubmit: '&'
      },
      link: linkFn
    };

    return directive;

    function linkFn(scope, element, attrs, ctrl) {
      var controller = ctrl;

      element.bind('click', function () {
        if (controller.finalValidation()) {
          scope.$apply(function () {
            scope.validationSubmit();
          });
        }
      });
    }
  }
})();
