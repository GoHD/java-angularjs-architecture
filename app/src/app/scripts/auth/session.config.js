(function() {
  'use strict';

  angular
    .module('gohd.scripts')
    .config(configFn);

  /* @ngInject */
  function configFn(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('gohd')
      .setStorageType('localStorage');
  }
})();
