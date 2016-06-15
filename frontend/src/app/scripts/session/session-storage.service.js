(function() {
  'use strict';

  angular
    .module('gohd')
    .factory('SessionStorage', function($rootScope, localStorageService, UsuarioLogadoService) {
      var sessionStorage = localStorageService.get('session') || {};

      sessionStorage.create = function(id, nome, login, token, email) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.token = token;
        this.email = email;
        localStorageService.set('session', this);
      };

      sessionStorage.destroy = function() {
        this.id = null;
        this.nome = null;
        this.login = null;
        this.token = null;
        this.email = null;
        localStorageService.remove('session');
      };

      sessionStorage.getToken = function() {
        return this.token;
      };

      sessionStorage.atualizaUsuarioLogado = function() {
        UsuarioLogadoService.atualizar(
          this.id, this.nome, this.email, this.token
        );
      };

      return sessionStorage;
    });

})();
