(function () {
  'use strict';

  angular
    .module('gohd')
    .directive('validationInput', ValidationInput);

  /* @ngInject */
  function ValidationInput(formValidationMessages) {
    var directive = {
      restrict: 'AE',
      require: ['^validationContainer', 'ngModel'],
      link: linkFn
    };

    return directive;

    function linkFn(scope, element, attrs, ctrl) {
      var controller = ctrl[0];
      var model = ctrl[1];

      var elementType = element.context.localName || '';
      var elementAttrType = attrs.type;
      var elementName = attrs.name;

      var min = {value: attrs.min, isValidated: false};
      var max = {value: attrs.max, isValidated: false};
      var required = {value: attrs.ngRequired, isValidated: false};
      var requiredIf = {value: attrs.requiredIf, isValidated: false};

      scope.$watch(attrs.requiredIf, function (newVal) {
        requiredIf = {value: newVal, isValidated: false};
      });

      var validations = {
        isValidMin: true,
        isValidMax: true,
        isValidRequired: true,
        isRequiredIf: true
      };

      element.bind('blur', function () {
        validateInput();
        applyCss();
        checkNonsenseErrors();
      });

      var destroy = scope.$on('formSubmited', function () {
        model.$setDirty();
        validateInput();
        applyCss();
        checkNonsenseErrors();
      });

      scope.$on('$destroy', destroy);

      function validateInput() {
        var modelValueLength = getInputLength();
        var requiredResult = requiredRule(modelValueLength);

        validations.isValidMax = genericValidator(max, (modelValueLength <= max.value), getMaxMessage());
        validations.isValidMin = genericValidator(min, (modelValueLength >= min.value), getMinMessage());
        validations.isValidRequired = genericValidator(required, requiredResult, formValidationMessages.REQUIRED);
        validations.isRequiredIf = genericValidator(requiredIf, !requiredIf.value, formValidationMessages.REQUIRED);
      }

      function genericValidator(attr, rule, msg) {
        if (angular.isUndefined(attr.value) || attr.value === null) {
          return true;
        }

        if (model.$pristine) {
          return true;
        }

        if (rule) {
          removeValidationMessage(msg);

          attr.isValidated = false;
          return true;
        }

        if (!rule && !attr.isValidated) {
          addValidationMessage(msg);

          attr.isValidated = true;
          return false;
        }

        return false;
      }

      function applyCss() {
        var hasError = false;

        for (var key in validations) {
          if (Object.prototype.hasOwnProperty.call(validations, key)) {
            if (validations[key] === false) {
              hasError = true;
            }
          }
        }

        if (hasError) {
          if (!model.$pristine) {
            element.addClass('input-with-error');
          }
        } else {
          element.removeClass('input-with-error');
        }
      }

      function getMaxMessage() {
        if (hasNumericAttributes()) {
          return formValidationMessages.getMaxValue(max.value);
        } else {
          return formValidationMessages.getMaxLength(max.value);
        }
      }

      function getMinMessage() {
        if (hasNumericAttributes()) {
          return formValidationMessages.getMinValue(min.value);
        } else {
          return formValidationMessages.getMinLength(min.value);
        }
      }

      function addValidationMessage(message) {
        removeValidationMessage(message);

        controller
          .addValidationMessage({
            element: elementName,
            message: message
          });
      }

      function removeValidationMessage(message) {
        controller
          .removeValidationMessage({
            element: elementName,
            message: message
          });
      }

      function requiredRule(value) {
        return value > 0;
      }

      function checkNonsenseErrors() {
        if (!validations.isValidMin && !validations.isValidRequired) {
          min.isValidated = false;
          removeValidationMessage(getMinMessage());
        }
      }

      function hasNumericAttributes() {
        return attrs.uiMoneyMask || attrs.uiNumberMask;
      }

      function getInputLength() {
        if (elementType === 'select') {
          if (model.$modelValue) {
            return (_.isNumber(model.$modelValue)) ? model.$modelValue : model.$modelValue.length;
          } else {
            return 0;
          }
        } else if (attrs.uiMoneyMask || attrs.uiNumberMask) {
          /* eslint-disable */
          return model.$$rawModelValue || 0;
          /* eslint-enable */
        }

        if (isDateElement()) {
          return model.$viewValue ? model.$viewValue.length : 0;
        }

        return model.$modelValue ? model.$modelValue.length : 0;
      }

      function isDateElement() {
        return elementAttrType === 'date';
      }
    }
  }
})();
