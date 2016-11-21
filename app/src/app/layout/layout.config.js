(function() {
  'use strict';

  angular
    .module('gohd.layout')
    .run(runFunction);

  /* @ngInject */
  function runFunction($templateCache) {
    $templateCache.put(
      'app/layouy/loading-template.html',
      '<div class="blockUI">' +
        '<div class="block-wrapper">' +
          '<div class="loading-wrapper">' +
            '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br>' +
            '<p>Loading...</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  angular
    .module('gohd.layout')
    .config(configFn);

  /* @ngInject */
  function configFn(blockUIConfig) {
      blockUIConfig.delay = 0;
      blockUIConfig.autoBlock = true;
      blockUIConfig.autoInjectBodyBlock = false;
      blockUIConfig.message = 'Please stop clicking!';
      blockUIConfig.templateUrl = 'app/layouy/loading-template.html';
  }
})();
