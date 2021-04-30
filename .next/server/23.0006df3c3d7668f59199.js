exports.ids = [23];
exports.modules = {

/***/ "p6K9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputRegexTest", function() { return CheckInputRegexTest; });
class CheckInputRegexTest {
    constructor() {
        this.validationErrorArray = [];
    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let regexSource = propertyValue[0];
        let regexFlag = propertyValue[1];

        let regex = new RegExp(regexSource, regexFlag);

        if (typeof (propertyValue) === "object") {
            if (regex.test(formInputValue)) {
                this.validationErrorArray.push(formInputName,propertyErrorText);
            } else {
                return true;
            }
        }
    }
}


/***/ })

};;