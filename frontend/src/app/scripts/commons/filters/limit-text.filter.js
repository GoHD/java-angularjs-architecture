(function () {
  'use strict';

  angular
    .module('gohd')
    .filter('limitText', LimitText);

  function LimitText() {
    return function (text, limit) {
      if (!limit) { return text; }

      var ellipsis = '…';
      var maxCharRegex = RegExp('.{' + limit + '}');
      var cleanedText = text.replace(/<[^>]*?>/g);

      if (limit && cleanedText.length > limit) {
        cleanedText = maxCharRegex.exec(cleanedText) + ellipsis;
      }

      return cleanedText;
    };
  }
})();
