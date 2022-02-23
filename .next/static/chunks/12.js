(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./node_modules/formriderjs/src/validators/checkInputNumberSmallerThan.js":
/*!********************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputNumberSmallerThan.js ***!
  \********************************************************************************/
/*! exports provided: CheckInputNumberSmallerThan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputNumberSmallerThan", function() { return CheckInputNumberSmallerThan; });
class CheckInputNumberSmallerThan {
    constructor() {
        this.validationErrorArray = [];
    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        if (formInputValue < propertyValue) {
            return true;
        } else {
            this.validationErrorArray.push(formInputName,propertyErrorText);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXROdW1iZXJTbWFsbGVyVGhhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXROdW1iZXJTbWFsbGVyVGhhbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlIDwgcHJvcGVydHlWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=