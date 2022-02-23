(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "./node_modules/formriderjs/src/validators/checkInputRequired.js":
/*!***********************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputRequired.js ***!
  \***********************************************************************/
/*! exports provided: CheckInputRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputRequired", function() { return CheckInputRequired; });
class CheckInputRequired {
    constructor() {
        this.validationErrorArray = [];
        this.inCommonValidatedStatus = false;
    }


    validateInCommon(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        if (typeof (propertyValue) === "object") {

            let regex = /^\s+/;
            if (regex.test(String(formInputValue)) || formInputValue.length === 0) {
                this.validationErrorArray.push(propertyValue, propertyErrorText);
                this.inCommonValidatedStatus = false;
            }
            if (typeof (formInputValue) === "undefined") {
                this.validationErrorArray.push(propertyValue, propertyErrorText);
                this.inCommonValidatedStatus = false;
            }
            if (!regex.test(String(formInputValue)) && formInputValue.length !== 0) {
                //we pushing even when validated because otherwise when checking all checkboxes we will get an empty validation error array and it wont get purified later, so inCommonGivenPoints wont even get noticed
                this.validationErrorArray.push(propertyValue, propertyErrorText);
                this.inCommonValidatedStatus = true;
            }
        }
    }


    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {

        if (propertyValue === true) {
            let regex = /^\s+/;
            if (regex.test(String(formInputValue)) || formInputValue.length === 0) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else if (typeof (formInputValue) === "undefined") {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            }
        }
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRSZXF1aXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRSZXF1aXJlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YWxpZGF0ZUluQ29tbW9uKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHByb3BlcnR5VmFsdWUpID09PSBcIm9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVnZXggPSAvXlxccysvO1xyXG4gICAgICAgICAgICBpZiAocmVnZXgudGVzdChTdHJpbmcoZm9ybUlucHV0VmFsdWUpKSB8fCBmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChwcm9wZXJ0eVZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluQ29tbW9uVmFsaWRhdGVkU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoZm9ybUlucHV0VmFsdWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2gocHJvcGVydHlWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChTdHJpbmcoZm9ybUlucHV0VmFsdWUpKSAmJiBmb3JtSW5wdXRWYWx1ZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vd2UgcHVzaGluZyBldmVuIHdoZW4gdmFsaWRhdGVkIGJlY2F1c2Ugb3RoZXJ3aXNlIHdoZW4gY2hlY2tpbmcgYWxsIGNoZWNrYm94ZXMgd2Ugd2lsbCBnZXQgYW4gZW1wdHkgdmFsaWRhdGlvbiBlcnJvciBhcnJheSBhbmQgaXQgd29udCBnZXQgcHVyaWZpZWQgbGF0ZXIsIHNvIGluQ29tbW9uR2l2ZW5Qb2ludHMgd29udCBldmVuIGdldCBub3RpY2VkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2gocHJvcGVydHlWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVnZXggPSAvXlxccysvO1xyXG4gICAgICAgICAgICBpZiAocmVnZXgudGVzdChTdHJpbmcoZm9ybUlucHV0VmFsdWUpKSB8fCBmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChmb3JtSW5wdXRWYWx1ZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9