(function() {
  'use strict';

  angular
    .module('gohd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
