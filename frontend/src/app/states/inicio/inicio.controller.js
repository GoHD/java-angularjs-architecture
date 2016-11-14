(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('InicioController', InicioController);

  /* @ngInject */
  function InicioController(sideMessages) {
    var vm = this;

    vm.exibirMensagemInfo = exibirMensagemInfo;
    vm.exibirMensagemInfoWithUser = exibirMensagemInfoWithUser;
    vm.exibirMensagemDeErro = exibirMensagemDeErro;
    vm.exibirMensagemDeAviso = exibirMensagemDeAviso;
    vm.exibirMensagemDeSucesso = exibirMensagemDeSucesso;

    function exibirMensagemDeSucesso() {
      sideMessages.success('Parabén pela conquista.', 'Woah!');
    }

    function exibirMensagemDeAviso() {
      sideMessages.warning('Cuidado! Algo pode estar incorreto...')
    }

    function exibirMensagemDeErro() {
      sideMessages.error('Aconteceu um erro.', 'Ops!');
    }

    function exibirMensagemInfo() {
      sideMessages.infoBottom('Olá!', 'Essa é uma mensagem de informação.');
    }

    function exibirMensagemInfoWithUser() {
      sideMessages.infoBottomWithUser('Essa é uma mensagem para você!');
    }
  }
})();
