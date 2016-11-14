(function() {
  'use strict';

  angular
    .module('gohd.components')
    .directive('messageContent', messageContent);

  /* @ngInject */
  function messageContent() {
    var directive = {
        template: '<div ng-if="directiveData.title" style="margin-bottom: 2px; z-index: 9999;">' +
                    '<strong>{{ directiveData.title }}</strong>' +
                  '</div>' +
                  '<div>{{ directiveData.msg }}</div>'
    };

    return directive;
  }

})();
