exports.ids = [5];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5XaGl0ZVNwYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0Q29udGFpbldoaXRlU3BhY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5Q29udGFpbiA9IHByb3BlcnR5VmFsdWVbMF07XHJcbiAgICAgICAgbGV0IHByb3BlcnR5U3RhcnQgPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG5cclxuICAgICAgICBsZXQgcmVnZXhQcm9wZXJ0eVN0YXJ0ID0gL15cXHMvO1xyXG4gICAgICAgIGxldCByZWdleFByb3BlcnR5Q29udGFpbiA9IC9cXHMrL2c7XHJcblxyXG4gICAgICAgIC8vY2Fubm90IGNvbnRhaW4gYW5kIGNhbm5vdCBzdGFydFxyXG4gICAgICAgIGlmIChwcm9wZXJ0eUNvbnRhaW4gPT09IGZhbHNlICYmIHByb3BlcnR5U3RhcnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWdleFByb3BlcnR5Q29udGFpbi50ZXN0KGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2FuIGNvbnRhaW4gYnV0IGNhbm5vdCBzdGFydCB3aXRoIHdoaXRlIHNwYWNlc1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlDb250YWluID09PSB0cnVlICYmIHByb3BlcnR5U3RhcnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWdleFByb3BlcnR5U3RhcnQudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NhbiBjb250YWluIGFuZCBjYW4gc3RhcnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9