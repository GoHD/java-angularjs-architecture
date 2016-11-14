(function() {
  'use strict';

  angular
    .module('gohd.components')
    .service('sideMessages', SideMessages);

  /* @ngInject */
  function SideMessages(SideMessagesConfig, toaster) {

    var service = {
      success:            success,
      error:              error,
      warning:            warning,
      infoBottom:         infoBottom,
      infoBottomWithUser: infoBottomWithUser
    };

    return service;

    function success(msg, title) {
      toaster.pop({
        type: SideMessagesConfig.SUCCESS_TYPE,
        body: 'message-content',
        bodyOutputType: 'directive',
        directiveData: {
          title: title,
          msg: msg
        },
        toasterId: SideMessagesConfig.SUCCESS_ID
      });
    }

    function error(msg, title) {
      toaster.pop({
        type: SideMessagesConfig.ERROR_TYPE,
        body: 'message-content',
        bodyOutputType: 'directive',
        directiveData: {
          title: title,
          msg: msg
        },
        toasterId: SideMessagesConfig.ERROR_ID
      });
    }

    function warning(msg, title) {
      toaster.pop({
        type: SideMessagesConfig.WARNING_TYPE,
        body: 'message-content',
        bodyOutputType: 'directive',
        directiveData: {
          title: title,
          msg: msg
        },
        toasterId: SideMessagesConfig.WARNING_ID
      });
    }

    function infoBottomWithUser(msg) {
      toaster.pop({
        type: SideMessagesConfig.INFO_BOTTOM_TYPE,
        body: 'logged-user',
        bodyOutputType: 'directive',
        directiveData: {
          msg: msg
        },
        toasterId: SideMessagesConfig.INFO_BOTTOM_ID
      });
    }

    function infoBottom(title, msg) {
      toaster.pop({
        type: SideMessagesConfig.INFO_BOTTOM_TYPE,
        title: title,
        body: msg,
        toasterId: SideMessagesConfig.INFO_BOTTOM_ID
      });
    }
  }
})();
