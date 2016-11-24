(function () {
  'use strict';

  angular
    .module('gohd')
    .run(runFunction);

  /* @ngInject */
  function runFunction($templateCache) {
    $templateCache.put(
      'app/components/basic-components/fixed-message.html',
      '<div class="alert alert-{{type}} alert-dismissible" style="margin: 4px;" role="alert">' +
      '<button ng-if="false" type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
      '{{message}}' +
      '</div>'
    );
  }

  angular
    .module('gohd')
    .directive('fixedMessage', fixedMessage);

  /* @ngInject */
  function fixedMessage() {
    return {
      templateUrl: 'app/components/basic-components/fixed-message.html',
      scope: {
        type: '@',
        message: '@'
      },
      link: linkFn
    };

    function linkFn(scope) {
      // TODO: Parse de HTML no texto e scope.close
    }
  }
})();
