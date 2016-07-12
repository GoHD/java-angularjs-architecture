(function() {
  'use strict';

  angular
    .module('gohd')
    .config(config);

  /** @ngInject */
  function config($logProvider, growlProvider) {
    $logProvider.debugEnabled(true);
      growlProvider.globalTimeToLive(5000);
  }
    
})();
