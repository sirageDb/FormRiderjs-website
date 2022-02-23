exports.ids = [13];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dFJlZ2V4VGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJbnB1dFJlZ2V4VGVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgbGV0IHJlZ2V4U291cmNlID0gcHJvcGVydHlWYWx1ZVswXTtcclxuICAgICAgICBsZXQgcmVnZXhGbGFnID0gcHJvcGVydHlWYWx1ZVsxXTtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFNvdXJjZSwgcmVnZXhGbGFnKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZSkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9