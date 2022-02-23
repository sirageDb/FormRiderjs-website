exports.ids = [9];
exports.modules = {

/***/ "./node_modules/formriderjs/src/validators/checkInputMinLength.js":
/*!************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputMinLength.js ***!
  \************************************************************************/
/*! exports provided: CheckInputMinLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputMinLength", function() { return CheckInputMinLength; });
class CheckInputMinLength {
    constructor() {
        this.validationErrorArray = [];
    }

    //check input min length, this function is sensible to empty space
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
        if (formInputValue.length < propertyValue && inputIsBeingUsed(formInputValue)) {
            this.validationErrorArray.push(formInputName, propertyErrorText);
        } else {
            return true;
        }
    }

}




/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dE1pbkxlbmd0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJbnB1dE1pbkxlbmd0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGVjayBpbnB1dCBtaW4gbGVuZ3RoLCB0aGlzIGZ1bmN0aW9uIGlzIHNlbnNpYmxlIHRvIGVtcHR5IHNwYWNlXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBpbnB1dCBpcyBiZWluZyB1c2VkIC8gcmV0dXJuIGZhbHNlIGlmIG5vdFxyXG4gICAgICAgIGxldCBpbnB1dElzQmVpbmdVc2VkID0gZnVuY3Rpb24gKGZvcm1JbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dFZhbHVlID0gZm9ybUlucHV0VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUubGVuZ3RoIDwgcHJvcGVydHlWYWx1ZSAmJiBpbnB1dElzQmVpbmdVc2VkKGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9