exports.ids = [13];
exports.modules = {

/***/ "KqvW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainWhiteSpace", function() { return CheckInputContainWhiteSpace; });
class CheckInputContainWhiteSpace {
    constructor() {
        this.validationErrorArray = [];
    }
    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let propertyContain = propertyValue[0];
        let propertyStart = propertyValue[1];

        let regexPropertyStart = /^\s/;
        let regexPropertyContain = /\s+/g;

        //cannot contain and cannot start
        if (propertyContain === false && propertyStart === false) {
            if (regexPropertyContain.test(formInputValue)) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }
            //can contain but cannot start with white spaces
        } else if (propertyContain === true && propertyStart === false) {
            if (regexPropertyStart.test(formInputValue)) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }
            //can contain and can start
        } else {
            return true;
        }
    }
}

/***/ })

};;