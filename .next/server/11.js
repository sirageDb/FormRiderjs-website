exports.ids = [11];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dE51bWJlclNtYWxsZXJUaGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0TnVtYmVyU21hbGxlclRoYW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG4gICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZSA8IHByb3BlcnR5VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9