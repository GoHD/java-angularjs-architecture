(function() {
  'use strict';

  angular
    .module('gohd')
    .controller('ComponentesController', ComponentesController);

  /* @ngInject */
  function ComponentesController(sideMessages, topMessagesService) {
    var vm = this;
    vm.formulario3 = {};

    vm.exibirMensagemInfo = exibirMensagemInfo;
    vm.exibirMensagemInfoWithUser = exibirMensagemInfoWithUser;
    vm.exibirMensagemDeErro = exibirMensagemDeErro;
    vm.exibirMensagemDeAviso = exibirMensagemDeAviso;
    vm.exibirMensagemDeSucesso = exibirMensagemDeSucesso;

    vm.exibirMensagemTopInfo = exibirMensagemTopInfo;
    vm.exibirMensagemTopWarning = exibirMensagemTopWarning;
    vm.exibirMensagemTopErro = exibirMensagemTopErro;
    vm.exibirMensagemTopSucesso = exibirMensagemTopSucesso;
    vm.exibirMensagemTopComMuitasMensagens = exibirMensagemTopComMuitasMensagens;

    vm.validarFormulario = validarFormulario;
    vm.obrigaCampoTeste = obrigaCampoTeste;

    function obrigaCampoTeste() {
      return vm.formulario3.nome;
    }
    function validarFormulario() {
      sideMessages.success('Cadastro efetuado com sucesso.', 'Woah!');
    }

    function exibirMensagemTopComMuitasMensagens() {
      topMessagesService.addMessage([
        {title:'Titulo 1', description: 'Primeira mensagem!'},
        {title:'Titulo 2', description: 'Segunda mensagem!'},
        {title:'Titulo 3', description: 'Terceira mensagemo!'}], 'success');
    }

    function exibirMensagemTopSucesso() {
      topMessagesService.addMessage({title:'Titulo', description: 'Uma mensagem de sucesso!'}, 'success');
    }

    function exibirMensagemTopErro() {
      topMessagesService.addMessage({title:'Titulo', description: 'Uma mensagem de erro!'}, 'danger');
    }

    function exibirMensagemTopWarning() {
      topMessagesService.addMessage({title:'Titulo', description: 'Uma mensagem de aviso!'}, 'warning');
    }

    function exibirMensagemTopInfo() {
      topMessagesService.addMessage({title:'Titulo', description: 'Uma mensagem de aviso!'}, 'info');
    }

    function exibirMensagemDeSucesso() {
      sideMessages.success('Parabéns pela conquista.', 'Woah!');
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
