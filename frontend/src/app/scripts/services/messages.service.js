(function() {
  'use strict';

  angular
    .module('gohd')
    .service('messagesService', messagesService);

  /* @ngInject */
  function messagesService() {


    var service = {
      addErrorMessage: addErrorMessage
    };

    return service;

    function addErrorMessage(message) {
    }
  }
})();
