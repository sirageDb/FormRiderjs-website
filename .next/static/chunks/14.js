(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "./node_modules/formriderjs/src/validators/checkInputRegexTest.js":
/*!************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputRegexTest.js ***!
  \************************************************************************/
/*! exports provided: CheckInputRegexTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputRegexTest", function() { return CheckInputRegexTest; });
class CheckInputRegexTest {
    constructor() {
        this.validationErrorArray = [];
    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let regexSource = propertyValue[0];
        let regexFlag = propertyValue[1];

        let regex = new RegExp(regexSource, regexFlag);

        if (typeof (propertyValue) === "object") {
            if (regex.test(formInputValue)) {
                this.validationErrorArray.push(formInputName,propertyErrorText);
            } else {
                return true;
            }
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRSZWdleFRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0UmVnZXhUZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBsZXQgcmVnZXhTb3VyY2UgPSBwcm9wZXJ0eVZhbHVlWzBdO1xyXG4gICAgICAgIGxldCByZWdleEZsYWcgPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4U291cmNlLCByZWdleEZsYWcpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAocmVnZXgudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=