(function(){
  'use strict';

  angular
    .module('gohd.scripts')
    .constant('ModelsConstants', {
      environment: 'production',
      API: {
        url: 'http://localhost:8080/app-rest',
        useMocks: false,
        fakeDelay: 0
      }
  });
})();
