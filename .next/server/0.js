exports.ids = [0];
exports.modules = {

/***/ "./node_modules/formriderjs/src/validators/checkInputCheckboxRequired.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputCheckboxRequired.js ***!
  \*******************************************************************************/
/*! exports provided: CheckInputCheckboxRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputCheckboxRequired", function() { return CheckInputCheckboxRequired; });
class CheckInputCheckboxRequired {
    constructor() {
        this.validationErrorArray = [];
        this.inCommonValidatedStatus = false;
    }


    validateInCommon(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {

        if (formInputValue === "frCheckBoxNoValue") {
            this.validationErrorArray.push(propertyValue,propertyErrorText);
            this.inCommonValidatedStatus = false;
        }
        if (formInputValue !== "frCheckBoxNoValue") {
            //we pushing even when validated because otherwise when checking all checkboxes we will get an empty validation error array and it wont get purified later, so inCommonGivenPoints wont even get noticed
            this.validationErrorArray.push(propertyValue,propertyErrorText);
            this.inCommonValidatedStatus = true;
        }
    }




    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        if (formInputValue === "frCheckBoxNoValue") {
            this.validationErrorArray.push(formInputName,propertyErrorText);
        }
    }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENoZWNrYm94UmVxdWlyZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0Q2hlY2tib3hSZXF1aXJlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YWxpZGF0ZUluQ29tbW9uKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG5cclxuICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUgPT09IFwiZnJDaGVja0JveE5vVmFsdWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2gocHJvcGVydHlWYWx1ZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Db21tb25WYWxpZGF0ZWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlICE9PSBcImZyQ2hlY2tCb3hOb1ZhbHVlXCIpIHtcclxuICAgICAgICAgICAgLy93ZSBwdXNoaW5nIGV2ZW4gd2hlbiB2YWxpZGF0ZWQgYmVjYXVzZSBvdGhlcndpc2Ugd2hlbiBjaGVja2luZyBhbGwgY2hlY2tib3hlcyB3ZSB3aWxsIGdldCBhbiBlbXB0eSB2YWxpZGF0aW9uIGVycm9yIGFycmF5IGFuZCBpdCB3b250IGdldCBwdXJpZmllZCBsYXRlciwgc28gaW5Db21tb25HaXZlblBvaW50cyB3b250IGV2ZW4gZ2V0IG5vdGljZWRcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKHByb3BlcnR5VmFsdWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmluQ29tbW9uVmFsaWRhdGVkU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlID09PSBcImZyQ2hlY2tCb3hOb1ZhbHVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=