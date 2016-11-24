(function () {
  'use strict';

  angular
    .module('gohd')
    .service('alertMessagesService', AlertMessages);

  /* @ngInject */
  function AlertMessages(SweetAlert, AlertMessagesConfigService, $q) {
    var service = {
      success: success,
      error: error,
      warning: warning,
      confirmLeave: leave,
      confirmDelete: confirmDelete,
      confirm: confirm,
      confirmWithInput: confirmWithInput
    };

    return service;

    function success(title, msg) {
      SweetAlert.success(
        msg || AlertMessagesConfigService.SUCCESS_MSG, {
          title: title || AlertMessagesConfigService.SUCCESS_TITLE
        });
    }

    function error(title, msg) {
      SweetAlert.alert(
        msg || AlertMessagesConfigService.ERROR_MSG, {
          type: AlertMessagesConfigService.ERROR_TYPE,
          title: title || AlertMessagesConfigService.ERROR_TITLE,
          confirmButtonColor: AlertMessagesConfigService.ERROR_BTN_COLOR
        });
    }

    function warning(title, msg) {
      SweetAlert.alert(
        msg || AlertMessagesConfigService.WARNING_MSG, {
          type: AlertMessagesConfigService.WARNING_TYPE,
          title: title || AlertMessagesConfigService.WARNING_TITLE,
          confirmButtonColor: AlertMessagesConfigService.WARNING_CONFIRM_BTN_COLOR
        });
    }

    function leave(title, msg) {
      return SweetAlert.confirm(
        msg || AlertMessagesConfigService.LEAVE_MSG, {
          type: AlertMessagesConfigService.LEAVE_TYPE,
          title: title || AlertMessagesConfigService.LEAVE_TITLE,
          confirmButtonColor: AlertMessagesConfigService.LEAVE_CONFIRM_BTN_COLOR,
          confirmButtonText: AlertMessagesConfigService.LEAVE_CONFIRM_BTN_TEXT,
          showCancelButton: AlertMessagesConfigService.LEAVE_SHOW_CANCEL,
          cancelButtonText: AlertMessagesConfigService.LEAVE_CANCEL_BTN_TEXT
        });
    }

    function confirm(title, msg) {
      return SweetAlert.confirm(
        msg || AlertMessagesConfigService.CONFIRM_MSG, {
          type: AlertMessagesConfigService.CONFIRM_TYPE,
          title: title || AlertMessagesConfigService.CONFIRM_TITLE,
          confirmButtonColor: AlertMessagesConfigService.CONFIRM_CONFIRM_BTN_COLOR,
          confirmButtonText: AlertMessagesConfigService.CONFIRM_CONFIRM_BTN_TEXT,
          showCancelButton: AlertMessagesConfigService.CONFIRM_SHOW_CANCEL,
          cancelButtonText: AlertMessagesConfigService.CONFIRM_CANCEL_BTN_TEXT
        });
    }

    function confirmDelete(title, msg) {
      return SweetAlert.confirm(
        msg || AlertMessagesConfigService.DELETE_MSG, {
          type: AlertMessagesConfigService.DELETE_TYPE,
          title: title || AlertMessagesConfigService.DELETE_TITLE,
          confirmButtonColor: AlertMessagesConfigService.DELETE_CONFIRM_BTN_COLOR,
          confirmButtonText: AlertMessagesConfigService.DELETE_CONFIRM_BTN_TEXT,
          showCancelButton: AlertMessagesConfigService.DELETE_SHOW_CANCEL,
          cancelButtonText: AlertMessagesConfigService.DELETE_CANCEL_BTN_TEXT
        });
    }

    function confirmWithInput(options) {
      var defered = $q.defer();
      swal({
        title: options.title || AlertMessagesConfigService.CONFIRM_INPUT_TITLE,
        text: options.msg || AlertMessagesConfigService.CONFIRM_INPUT_MSG,
        type: AlertMessagesConfigService.CONFIRM_INPUT_TYPE,
        closeOnConfirm: false,
        inputValue: options.defaultInputText || '',
        showCancelButton: AlertMessagesConfigService.CONFIRM_INPUT_SHOW_CANCEL,
        confirmButtonColor: AlertMessagesConfigService.CONFIRM_INPUT_CONFIRM_BTN_COLOR,
        confirmButtonText: AlertMessagesConfigService.CONFIRM_INPUT_CONFIRM_BTN_TEXT,
        cancelButtonText: AlertMessagesConfigService.CONFIRM_INPUT_CANCEL_BTN_TEXT
      }, function (inputValue) {

        var minLength = options.minLength;
        var maxLength = options.maxLength;

        if (options.required && !inputValue) {
          swal.showInputError("Campo obrigatório!");
          return false;
        } else if (minLength && inputValue.length && inputValue.length < minLength) {
          swal.showInputError('Tamanho mínimo ' + minLength + ' caracteres!');
        } else if (maxLength && inputValue.length > maxLength) {
          swal.showInputError('Tamanho máximo ' + maxLength + ' caracteres!');
        } else {
          swal.close();
          defered.resolve(inputValue);
        }
      }, function (e) {
        defered.reject(e);
      });
      return defered.promise;
    }
  }
})();
