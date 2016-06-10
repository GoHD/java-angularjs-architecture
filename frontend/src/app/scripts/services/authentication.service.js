(function(){
  'use strict';

  angular
    .module('gohd')
    .service('AuthService', AuthService);

  function AuthService() {
    var service = {
      isAuthenticated: true
    };

    return service;
  }

})();
