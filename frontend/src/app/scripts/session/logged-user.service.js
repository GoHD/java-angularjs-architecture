(function() {
  'use strict';

  angular
    .module('gohd')
    .service('UsuarioLogadoService', UsuarioLogadoService);

  /* @ngInject */
  function UsuarioLogadoService() {
    var service = {
      id: "",
      nome: "",
      email: "",
      token: "",
      atualizar: atualizar
    };

    return service;

    function atualizar(id, nome, email, token) {
      service.id = id;
      service.nome = nome;
      service.email = email;
      service.token = token;
    }
  }
})();
