(function() {
  'use strict';

  angular
    .module('gohd')
    .factory('SessionStorage', function($rootScope, localStorageService) {

      var sessionStorage = localStorageService.get('session') || {
        empty: empty,
        create: create,
        destroy: destroy,
        isAdmin: isAdmin,
        getName: getName
      };

      return sessionStorage;

      function empty() {
        $rootScope.roles = sessionStorage.roles;
        return !sessionStorage.token || !sessionStorage.roles;
      }

      function create(id, nome, username, email, admin, roles, token) {
        sessionStorage.id = id;
        sessionStorage.nome = nome;
        sessionStorage.username = username;
        sessionStorage.email = email;
        sessionStorage.admin = admin;
        sessionStorage.roles = roles;
        sessionStorage.token = token;
        localStorageService.set('session', sessionStorage);
        broadcastSessionChanges();
      }

      function destroy() {
        sessionStorage.id = null;
        sessionStorage.nome = null;
        sessionStorage.username = null;
        sessionStorage.email = null;
        sessionStorage.admin = null;
        sessionStorage.roles = null;
        sessionStorage.token = null;
        localStorageService.remove('session');
      }

      function isAdmin() {
        return !!sessionStorage.admin;
      }

      function getName() {
        return sessionStorage.nome;
      }

      function broadcastSessionChanges() {
        $rootScope.$broadcast('sessionStorageChanged', sessionStorage);
      }
    });

})();
