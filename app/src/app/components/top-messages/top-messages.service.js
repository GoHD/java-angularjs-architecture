(function() {
  'use strict';

  angular
    .module('gohd')
    .service('topMessagesService', TopMessagesService);

  /* @ngInject */
  function TopMessagesService($rootScope) {

    var service = {
      addMessage: addMessage,
      closeAlert: closeAlert,
      closeAlertIdx: closeAlertIdx,
      closeAllMessages: closeAllMessages
    };

    return service;

    function addMessage(message, type) {
      validadeLimitOfAlerts();

      if (_.isArray(message)) {
        var newMessage = newMessageFn(type);

        message.forEach(function(msg) {
          newMessage.subMessages.push(msg);
        });

        if (newMessage.subMessages.length > 0) {
          pushMessageToRootScope(newMessage);
        } else {
          closeAllMessages();
        }
      } else if (_.isObject(message)) {

        message.type = 'alert-' + type;
        message.close = function() {
          service.closeAlert(this);
        };

        if (message.title || message.description) {
          pushMessageToRootScope(message);
        } else {
          closeAllMessages();
        }
      }

      _.defer(function() {
        $rootScope.$apply();
      });
    }

    function newMessageFn(type) {
      return {
        type: 'alert-' + type,
        close: function() {
          service.closeAlert(this);
        },
        subMessages: []
      };
    }

    function closeAlertIdx(index) {
      $rootScope.alerts.splice(index, 1);
    }

    function closeAlert(alert) {
      service.closeAlertIdx($rootScope.alerts.indexOf(alert));
    }

    function closeAllMessages() {
      $rootScope.alerts = [];
    }

    function validadeLimitOfAlerts() {
      var size = $rootScope.alerts.length;

      if (size === 3) {
        $rootScope.alerts.splice(0, 1);
      }
    }

    function pushMessageToRootScope(newMessage) {
      _.defer(function() {
        $rootScope.$apply(function() {
          $rootScope.alerts.push(newMessage);
        });
      });
    }
  }
})();
