(function() {
  'use strict';

  angular
    .module('gohd')
    .run(runBlock);

  /* @ngInject */
  function runBlock() {

    /**
     * Remove item do Array buscando por indexOf.
     *
     * Modo de uso: [someArray].removeItem([itemToBeRemoved]);
     */
    Object.defineProperty(Array.prototype, 'removeItem', {
      enumerable: false,
      value: function(item) {
        var index = this.indexOf(item);
        if (index > -1) {
          this.splice(index, 1);
          return true;
        }
        return false;
      }
    });

    /**
     * Adiciona ou substitui objeto no Array.
     *
     * Funciona também para objetos feitos a partir do angular.copy(), necessitando apenas
     * da adição do objeto antigo a uma propriedade nomeada "oldObj" no objeto copiado.
     *
     * Modo de uso:
     *
     *    let clone = angular.copy(someObj);
     *    clone.oldObj = someObj;
     *    [someArray].add(clone);
     */
    Object.defineProperty(Array.prototype, 'add', {
      enumerable: false,
      value: function(obj) {
        var index = this.indexOf(obj);

        if (obj.hasOwnProperty('oldObj')) {
          var oldIndex = this.indexOf(obj.oldObj);
          delete obj.oldObj;
          this[oldIndex] = obj;
        } else {
          (index < 0) ? this.push(obj) : this[index] = obj;
        }
      }
    });
  }
})();
