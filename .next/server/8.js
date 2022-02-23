exports.ids = [8];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dE1heExlbmd0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0TWF4TGVuZ3RoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGVjayBpbnB1dCBtYXggbGVuZ3RoLCB0aGlzIGZ1bmN0aW9uIGlzIHNlbnNpYmxlIHRvIGVtcHR5IHNwYWNlXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBpbnB1dCBpcyBiZWluZyB1c2VkIC8gcmV0dXJuIGZhbHNlIGlmIG5vdFxyXG4gICAgICAgIGxldCBpbnB1dElzQmVpbmdVc2VkID0gZnVuY3Rpb24gKGZvcm1JbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZm9ybUlucHV0VmFsdWUgPSBmb3JtSW5wdXRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPiBwcm9wZXJ0eVZhbHVlICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==