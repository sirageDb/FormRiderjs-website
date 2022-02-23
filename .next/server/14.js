exports.ids = [14];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dFJlcXVpcmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0UmVxdWlyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5Db21tb25WYWxpZGF0ZWRTdGF0dXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFsaWRhdGVJbkNvbW1vbihwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJvYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL15cXHMrLztcclxuICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoU3RyaW5nKGZvcm1JbnB1dFZhbHVlKSkgfHwgZm9ybUlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2gocHJvcGVydHlWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGZvcm1JbnB1dFZhbHVlKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKHByb3BlcnR5VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5Db21tb25WYWxpZGF0ZWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoU3RyaW5nKGZvcm1JbnB1dFZhbHVlKSkgJiYgZm9ybUlucHV0VmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL3dlIHB1c2hpbmcgZXZlbiB3aGVuIHZhbGlkYXRlZCBiZWNhdXNlIG90aGVyd2lzZSB3aGVuIGNoZWNraW5nIGFsbCBjaGVja2JveGVzIHdlIHdpbGwgZ2V0IGFuIGVtcHR5IHZhbGlkYXRpb24gZXJyb3IgYXJyYXkgYW5kIGl0IHdvbnQgZ2V0IHB1cmlmaWVkIGxhdGVyLCBzbyBpbkNvbW1vbkdpdmVuUG9pbnRzIHdvbnQgZXZlbiBnZXQgbm90aWNlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKHByb3BlcnR5VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5Db21tb25WYWxpZGF0ZWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL15cXHMrLztcclxuICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoU3RyaW5nKGZvcm1JbnB1dFZhbHVlKSkgfHwgZm9ybUlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZm9ybUlucHV0VmFsdWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==