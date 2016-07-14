(function() {
  'use strict';

  angular
    .module('gohd')
    .config(configFn);

  /* @ngInject */
  function configFn(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('gohd')
      .setStorageType('localStorage');
  }
})();
