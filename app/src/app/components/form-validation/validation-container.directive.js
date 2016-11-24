(function() {
  'use strict';

  angular
    .module('gohd')
    .directive('validationContainer', validationContainer);

  /* @ngInject */
  function validationContainer() {
    var directive = {
      restrict: 'E',
      controller: ValidationContainerController,
      controllerAs: 'valCtrl',
      scope: true
    };

    return directive;

    /* @ngInject */
    function ValidationContainerController(setFocus, $scope) {

      var vm = this;
      var LIMIT_MESSAGES = 6;

      vm.focus = focusFn;
      vm.showDivMore = showDivMore;
      vm.showDivLess = showDivLess;
      vm.exibirTodosOsErros = exibirTodosOsErros;
      vm.exibirMenosErros = exibirMenosErros;
      vm.closeAlert = closeAlert;

      vm.limit = LIMIT_MESSAGES;
      vm.errorMessages = [];
      vm.alerts = [];

      vm.addValidationMessage = addValidationMessage;
      vm.removeValidationMessage = removeValidationMessage;
      vm.finalValidation = finalValidation;

      /**
       *
       * Funções referentes as validações de inputs.
       */

      function finalValidation() {
        var erros = [];

        $scope.$broadcast('formSubmited');

        closeAllMessages();

        vm.errorMessages.forEach(function(e) {
          erros.push({
            title: e.element,
            description: e.message
          });
        });

        addMessage(erros, 'warning');

        return erros.length === 0;
      }

      function removeValidationMessage(validation) {
        vm.errorMessages = _.reject(vm.errorMessages, function(filter) {
          return angular.equals(filter.element, validation.element) &&
            angular.equals(filter.message, validation.message);
        });
      }

      function addValidationMessage(validation) {
        vm.errorMessages.push(validation);
      }

      /**
       *
       * Funções referentes as mensagens de validação.
       */

      function focusFn(fieldName) {
        setFocus(fieldName);
      }

      function showDivLess(messages) {
        if (_.isArray(messages)) {
          if (messages.length < vm.limit) {
            if (vm.limit === 50) {
              return true;
            }
          }
        }
        return false;
      }

      function showDivMore(messages) {
        if (_.isArray(messages)) {
          if (messages.length > 4) {
            if (messages.length > vm.limit) {
              return true;
            }
          }
        }
        return false;
      }

      function exibirTodosOsErros() {
        vm.limit = 50;
      }

      function exibirMenosErros() {
        vm.limit = LIMIT_MESSAGES;
      }

      function addMessage(message, type) {
        validadeLimitOfAlerts();

        if (_.isArray(message)) {
          var newMessage = {
            type: 'alert-' + type,
            subMessages: []
          };

          message.forEach(function(msg) {
            newMessage.subMessages.push(msg);
          });

          if (newMessage.subMessages.length > 0) {
            vm.alerts.push(newMessage);
          } else {
            closeAllMessages();
          }
        } else if (_.isObject(message)) {
          message.type = 'alert-' + type;

          if (message.title || message.description) {
            vm.alerts.push(message);
          } else {
            closeAllMessages();
          }
        }

        _.defer(function() {
          $scope.$apply();
        });
      }

      function validadeLimitOfAlerts() {
        var size = vm.alerts.length;

        if (size === 3) {
          vm.alerts.splice(0, 1);
        }
      }

      function closeAlert(alert) {
        vm.limit = LIMIT_MESSAGES;
        vm.alerts.removeItem(alert);
      }

      function closeAllMessages() {
        vm.alerts = [];
      }
    }
  }
})();
