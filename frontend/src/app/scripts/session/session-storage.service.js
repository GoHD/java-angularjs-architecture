(function() {
  'use strict';

  angular
    .module('gohd')
    .factory('SessionStorage', function($rootScope, localStorageService) {
      var sessionStorage = localStorageService.get('session') || {};

      sessionStorage.create = function(token) {
        this.token = token;
        localStorageService.set('session', this);
      };

      sessionStorage.destroy = function() {
        this.token = null;
        localStorageService.remove('session');
      };

      return sessionStorage;
    });

})();
