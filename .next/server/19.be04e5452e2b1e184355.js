exports.ids = [19];
exports.modules = {

/***/ "HXT7":
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