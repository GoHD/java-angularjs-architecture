(function() {
  'use strict';

  angular
    .module('gohd')
    .service('Session', Session);

  /* @ngInject */
  function Session() {
    var service = {
      /*create: create,
      destroy: destroy*/
    };

    return service;

    /*
    function create(sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    }

    function destroy() {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    }
    */
  }
})();
