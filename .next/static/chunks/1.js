(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDaGVja2JveFJlcXVpcmVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRDaGVja2JveFJlcXVpcmVkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmluQ29tbW9uVmFsaWRhdGVkU3RhdHVzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhbGlkYXRlSW5Db21tb24ocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcblxyXG4gICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZSA9PT0gXCJmckNoZWNrQm94Tm9WYWx1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChwcm9wZXJ0eVZhbHVlLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUgIT09IFwiZnJDaGVja0JveE5vVmFsdWVcIikge1xyXG4gICAgICAgICAgICAvL3dlIHB1c2hpbmcgZXZlbiB3aGVuIHZhbGlkYXRlZCBiZWNhdXNlIG90aGVyd2lzZSB3aGVuIGNoZWNraW5nIGFsbCBjaGVja2JveGVzIHdlIHdpbGwgZ2V0IGFuIGVtcHR5IHZhbGlkYXRpb24gZXJyb3IgYXJyYXkgYW5kIGl0IHdvbnQgZ2V0IHB1cmlmaWVkIGxhdGVyLCBzbyBpbkNvbW1vbkdpdmVuUG9pbnRzIHdvbnQgZXZlbiBnZXQgbm90aWNlZFxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2gocHJvcGVydHlWYWx1ZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Db21tb25WYWxpZGF0ZWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWUgPT09IFwiZnJDaGVja0JveE5vVmFsdWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==