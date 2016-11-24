(function() {
  'use strict';

  angular
    .module('gohd')
    .service('formValidationMessages', formValidationMessages);

  /* @ngInject */
  function formValidationMessages() {
    var service = {

      REQUIRED: 'Informação obrigatória!',

      getMaxLength: getMaxLengthFn,
      getMinLength: getMinLengthFn,
      getMaxValue:  getMaxValueFn,
      getMinValue:  getMinValueFn

    };

    return service;

    function getMaxLengthFn(value) {
      return 'Tamanho máximo de ' + value + ' caracteres não está sendo respeitado.';
    }

    function getMinLengthFn(value) {
      return 'Tamanho mínimo de ' + value + ' caracteres não está sendo respeitado.';
    }

    function getMaxValueFn(value) {
      return 'O valor máximo deve ser ' + value;
    }

    function getMinValueFn(value) {
      return 'O valor mínimo deve ser ' + value;
    }
  }
})();
