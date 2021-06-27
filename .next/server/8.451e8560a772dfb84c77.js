exports.ids = [8];
exports.modules = {

/***/ "M77w":
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