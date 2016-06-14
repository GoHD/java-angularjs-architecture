(function() {
  'use strict';

  angular
    .module('gohd')
    .factory('SessionStorage', function($rootScope, localStorageService) {
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

      sessionStorage.getName = function() {
        return this.nome;
      };

      sessionStorage.getToken = function() {
        return this.token;
      };

      sessionStorage.atualiza = function() {
        $rootScope.id = this.id;
        $rootScope.nome = this.nome;
        $rootScope.token = this.token;
      };

      return sessionStorage;
    });

})();
