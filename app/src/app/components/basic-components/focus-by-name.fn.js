(function () {

  angular
    .module('gohd')
    .factory('setFocus', focusFn);

  /* @ngInject */
  function focusFn($timeout, $window) {
    return function (name) {
      $timeout(function () {
        NodeList.prototype.forEach = Array.prototype.forEach;

        var element = $window.document.getElementsByName(name);

        if (element) {
          var elementForSecondTab = getTab(element[0]);
          if (elementForSecondTab) {
            getTab(elementForSecondTab);
          }

          $timeout(function () {
            element[0].focus();
          }, 10);
        }
      });

      function getTab(el) {
        var lastMainElement = {};
        var loop = true;
        var indexToClick = 0;

        while (loop) {
          el = el.parentElement;

          if (!el) { break; }

          if (el.localName == 'tab-index-generator') {
            indexToClick = el.attributes['index-for-click'].value;
          } else if (el.localName == 'validation-container') {
            break;
          }

          if (el.className == 'tab-content') {
            loop = false;
            var siblingElement = el.previousElementSibling

            siblingElement.childNodes.forEach(function (obj) {
              if (obj.firstElementChild) {
                var isElementToClick = obj.attributes.index.value == indexToClick ? true : false;
                if (isElementToClick) {
                  obj.firstElementChild.click();
                }
              }
            });

            lastMainElement = el;
            break;
          }
        }

        return lastMainElement;
      }
    };
  }
})();
