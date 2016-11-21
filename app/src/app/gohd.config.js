(function() {
  'use strict';

  angular
    .module('gohd')
    .config(config);

  /* @ngInject */
  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }
})();
