(function() {
  'use strict';

  angular
    .module('gohd')
    .service('AlertMessagesConfigService', AlertMessagesConfigService);

  /* @ngInject */
  function AlertMessagesConfigService() {

    var COLOR_GREEN = '#509f5a';
    var COLOR_YELLOW = '#fa9039';
    var COLOR_RED = '#b52b2b';

    var service = {

      SUCCESS_MSG: 'Operação efetuada!',
      SUCCESS_TITLE: 'Sucesso!',

      ERROR_TYPE: 'error',
      ERROR_MSG: 'Não foi possível processar a sua solicitação',
      ERROR_TITLE: 'Ocorreu um erro!',
      ERROR_BTN_COLOR: COLOR_RED,

      WARNING_TYPE: 'warning',
      WARNING_MSG: 'Certifique-se de que você tem certeza do que está fazendo...',
      WARNING_TITLE: 'Cuidado!',
      WARNING_CONFIRM_BTN_COLOR: COLOR_YELLOW,

      LEAVE_TYPE: 'warning',
      LEAVE_MSG: 'Deseja realmente sair sem salvar?',
      LEAVE_TITLE: 'Tem certeza?',
      LEAVE_CONFIRM_BTN_COLOR: COLOR_GREEN,
      LEAVE_CONFIRM_BTN_TEXT: 'Sim',
      LEAVE_SHOW_CANCEL: true,
      LEAVE_CANCEL_BTN_TEXT: 'Não',

      DELETE_TYPE: 'warning',
      DELETE_MSG: 'Deseja realmente excluir o item selecionado?',
      DELETE_TITLE: 'Você tem certeza?',
      DELETE_CONFIRM_BTN_COLOR: COLOR_RED,
      DELETE_CONFIRM_BTN_TEXT: 'Sim',
      DELETE_SHOW_CANCEL: true,
      DELETE_CANCEL_BTN_TEXT: 'Não',

      CONFIRM_TYPE: 'warning',
      CONFIRM_MSG: 'Deseja realmente executar esta ação?',
      CONFIRM_TITLE: 'Você tem certeza?',
      CONFIRM_CONFIRM_BTN_COLOR: COLOR_RED,
      CONFIRM_CONFIRM_BTN_TEXT: 'Sim',
      CONFIRM_SHOW_CANCEL: true,
      CONFIRM_CANCEL_BTN_TEXT: 'Não',

      CONFIRM_INPUT_TYPE: 'input',
      CONFIRM_INPUT_MSG: 'Deseja realmente executar esta ação?',
      CONFIRM_INPUT_TITLE: 'Você tem certeza?',
      CONFIRM_INPUT_CONFIRM_BTN_COLOR: COLOR_RED,
      CONFIRM_INPUT_CONFIRM_BTN_TEXT: 'Sim',
      CONFIRM_INPUT_SHOW_CANCEL: true,
      CONFIRM_INPUT_CANCEL_BTN_TEXT: 'Não'

    };

    return service;
  }
})();
