(function () {
  'use strict';

  angular
    .module('gohd')
    .controller('UsuarioController', UsuarioController);

  /* @ngInject */
  function UsuarioController(usuarioService, $log) {

    var vm = this;
    vm.usuarios = [];
    vm.camposUsuario = getUserFields();

    vm.salvar = salvarFn;

    buscarUsuarios();

    function salvarFn(usuario) {
      usuarioService.adicionarUsuario(usuario).then(
        function (data) {
          vm.usuarios.push(data);
          delete vm.usuario;
        },
        function (e) {
          $log.debug("Ocorreu um erro ao salvar um usuario: " + e);
        }
      );
    }

    function buscarUsuarios() {
      usuarioService.buscarUsuarios().then(
        function (data) {
          vm.usuarios = data;
        },
        function (e) {
          $log.debug("Ocorreu um erro ao buscar os usuarios cadastrados: " + e);
        }
      );
    }

    function getUserFields() {
      return [
        {
          key: 'nome',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Nome',
            placeholder: 'Digite seu nome'
          }
        }, {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email',
            placeholder: 'Digite seu E-mail'
          }
        }, {
          key: 'login',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Login',
            placeholder: 'Digite seu login'
          }
        }, {
          key: 'senha',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Senha',
            placeholder: 'Digite sua senha'
          }
        }
      ];
    }
  }
})();
