(function() {
  'use strict';

  angular
    .module('gohd')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {

    $logProvider.debugEnabled(true);

    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
