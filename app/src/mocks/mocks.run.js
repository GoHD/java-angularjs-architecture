(function() {
  'use strict';

  console.log('======== ATENÇÃO!!! USANDO BACKEND FAKE ========');

  angular.module('gohd')
    .config(function($provide) {
      $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    })
    .run(function($httpBackend) {

      $httpBackend.whenGET(/.html$/).passThrough();
      $httpBackend.whenGET('http://localhost:8080/app-rest/usuario').respond([]);
      $httpBackend.whenGET('http://localhost:8080/app-rest/cliente').respond([]);
      $httpBackend.whenGET('http://localhost:8080/app-rest/login/busca-usuario-por-token')
        .respond(200, {
          "id":1,
          "nome":"Usuário Mock",
          "email":"usuario@mock.com"
        });

      $httpBackend.whenPOST('http://localhost:8080/app-rest/login')
        .respond(200, {
          "id":1,
          "nome":"Usuário Mock",
          "email":"usuario@mock.com"
        });

      $httpBackend.whenGET('http://localhost:8080/app-rest/login')
        .respond(200, {
          "id":1,
          "nome":"Usuário Mock",
          "email":"usuario@mock.com"
        });

    });
})();
