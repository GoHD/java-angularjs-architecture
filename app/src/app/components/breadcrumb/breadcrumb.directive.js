(function() {
  'use strict';

  angular
    .module('gohd.components')
    .directive('breadcrumb', Breadcrumb);

  /* @ngInject */
  function Breadcrumb($location, $rootScope) {
    var directive = {
      transclude: true,
      restrict: 'E',
      template: '<div class="breadcrumb" ng-bind="vm.path"></div>',
      controller: controllerFn,
      controllerAs: 'vm',
      scope: {
        path: "@"
      },
      link: linkFn
    };

    return directive;

    function controllerFn() {
      var vm = this;
      vm.path = '';
      vm.updatePath = updatePathFn;

      function updatePathFn(path) {
        vm.path = path;
      }
    }

    function linkFn(scope, element, attrs, ctrl) {
      if (ctrl.path === '') { atualizaPath(); }

      $rootScope.$on('$destroy', $rootScope.$on('$locationChangeStart', function() {
        atualizaPath();
      }));

      function atualizaPath() {
        var tempPath = parsePath($location.path());
        ctrl.updatePath(tempPath);
      }

      function parsePath(path) {
        var finalPath = '';
        var x = path.split("/");

        x.forEach(function(text) {
          if (text === '') { return; }
          if (_.contains(text, '-')) {
            text = splitTextWithHyphen(text);
          }

          finalPath += text.charAt(0).toUpperCase() + text.slice(1) + " / ";
        });

        return finalPath.slice(0, -3);
      }

      function splitTextWithHyphen(text) {
        var k = '';
        var x = text.split('-');
        x.forEach(function(text) {
          k += text + ' ';
        });
        return k;
      }
    }
  }
})();
