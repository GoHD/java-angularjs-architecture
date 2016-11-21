(function() {
  'use strict';

  angular
    .module('gohd.components')
    .service('SideMessagesConfig', SideMessagesConfig);

  /* @ngInject */
  function SideMessagesConfig() {
    var service = {

      SUCCESS_ID:     1,
      SUCCESS_TYPE:   'success',
      SUCCESS_TITLE:  'Sucesso!',
      SUCCESS_MSG:    'Item salvo!',

      ERROR_ID:       1,
      ERROR_TYPE:     'error',
      ERROR_TITLE:    'Erro!',
      ERROR_MSG:      'Erro!',

      WARNING_ID:     1,
      WARNING_TYPE:   'warning',
      WARNING_TITLE:  'Warning!',
      WARNING_MSG:    'Warning!',

      INFO_BOTTOM_ID:    2,
      INFO_BOTTOM_TYPE:  'note',
      INFO_BOTTOM_TITLE: 'Olá!',
      INFO_BOTTOM_MSG:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    };

    return service;
  }
})();
