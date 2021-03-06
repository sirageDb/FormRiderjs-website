exports.ids = [22];
exports.modules = {

/***/ "DN1G":
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