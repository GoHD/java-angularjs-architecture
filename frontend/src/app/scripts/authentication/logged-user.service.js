(function() {
  'use strict';

  angular
    .module('gohd')
    .service('UsuarioLogadoService', UsuarioLogadoService);

  /* @ngInject */
  function UsuarioLogadoService() {
    var service = {
      id: '',
      login: '',
      nome: '',
      email: '',
      token: '',
      atualizaUsuarioLogado: atualizaUsuarioLogado
    };

    return service;

    function atualizaUsuarioLogado(usuarioLogado) {
      service.id = usuarioLogado.id;
      service.login = usuarioLogado.login;
      service.nome = usuarioLogado.nome;
      service.email = usuarioLogado.email;
      service.token = usuarioLogado.token;
    }
  }
})();
