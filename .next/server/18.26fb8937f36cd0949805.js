exports.ids = [18];
exports.modules = {

/***/ "BiHr":
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