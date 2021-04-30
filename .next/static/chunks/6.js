(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./node_modules/formriderjs/src/validators/checkInputContainWhiteSpace.js":
/*!********************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputContainWhiteSpace.js ***!
  \********************************************************************************/
/*! exports provided: CheckInputContainWhiteSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainWhiteSpace", function() { return CheckInputContainWhiteSpace; });
class CheckInputContainWhiteSpace {
    constructor() {
        this.validationErrorArray = [];
    }
    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let propertyContain = propertyValue[0];
        let propertyStart = propertyValue[1];

        let regexPropertyStart = /^\s/;
        let regexPropertyContain = /\s+/g;

        //cannot contain and cannot start
        if (propertyContain === false && propertyStart === false) {
            if (regexPropertyContain.test(formInputValue)) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }
            //can contain but cannot start with white spaces
        } else if (propertyContain === true && propertyStart === false) {
            if (regexPropertyStart.test(formInputValue)) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }
            //can contain and can start
        } else {
            return true;
        }
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluV2hpdGVTcGFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL2NodW5rcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRDb250YWluV2hpdGVTcGFjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBsZXQgcHJvcGVydHlDb250YWluID0gcHJvcGVydHlWYWx1ZVswXTtcclxuICAgICAgICBsZXQgcHJvcGVydHlTdGFydCA9IHByb3BlcnR5VmFsdWVbMV07XHJcblxyXG4gICAgICAgIGxldCByZWdleFByb3BlcnR5U3RhcnQgPSAvXlxccy87XHJcbiAgICAgICAgbGV0IHJlZ2V4UHJvcGVydHlDb250YWluID0gL1xccysvZztcclxuXHJcbiAgICAgICAgLy9jYW5ub3QgY29udGFpbiBhbmQgY2Fubm90IHN0YXJ0XHJcbiAgICAgICAgaWYgKHByb3BlcnR5Q29udGFpbiA9PT0gZmFsc2UgJiYgcHJvcGVydHlTdGFydCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlZ2V4UHJvcGVydHlDb250YWluLnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYW4gY29udGFpbiBidXQgY2Fubm90IHN0YXJ0IHdpdGggd2hpdGUgc3BhY2VzXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eUNvbnRhaW4gPT09IHRydWUgJiYgcHJvcGVydHlTdGFydCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlZ2V4UHJvcGVydHlTdGFydC50ZXN0KGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2FuIGNvbnRhaW4gYW5kIGNhbiBzdGFydFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=