(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./node_modules/formriderjs/src/validators/checkInputMaxLength.js":
/*!************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputMaxLength.js ***!
  \************************************************************************/
/*! exports provided: CheckInputMaxLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputMaxLength", function() { return CheckInputMaxLength; });
class CheckInputMaxLength {
    constructor() {
        this.validationErrorArray = [];

    }

    //check input max length, this function is sensible to empty space
    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {

        //return true if input is being used / return false if not
        let inputIsBeingUsed = function (formInputValue) {
            if (formInputValue.length > 0) {
                return true;
            }
            if (formInputValue.length === 0) {
                return false;
            }
        }



        formInputValue = formInputValue.toString();
        if (formInputValue.length > propertyValue && inputIsBeingUsed(formInputValue)) {
            this.validationErrorArray.push(formInputName,propertyErrorText);
        } else {
            return true;
        }
    }
}





/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRNYXhMZW5ndGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy85LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRNYXhMZW5ndGgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2NoZWNrIGlucHV0IG1heCBsZW5ndGgsIHRoaXMgZnVuY3Rpb24gaXMgc2Vuc2libGUgdG8gZW1wdHkgc3BhY2VcclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG5cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGlucHV0IGlzIGJlaW5nIHVzZWQgLyByZXR1cm4gZmFsc2UgaWYgbm90XHJcbiAgICAgICAgbGV0IGlucHV0SXNCZWluZ1VzZWQgPSBmdW5jdGlvbiAoZm9ybUlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBmb3JtSW5wdXRWYWx1ZSA9IGZvcm1JbnB1dFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA+IHByb3BlcnR5VmFsdWUgJiYgaW5wdXRJc0JlaW5nVXNlZChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9