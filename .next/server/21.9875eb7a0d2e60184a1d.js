exports.ids = [21];
exports.modules = {

/***/ "dDQ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputNumberSmallerThan", function() { return CheckInputNumberSmallerThan; });
class CheckInputNumberSmallerThan {
    constructor() {
        this.validationErrorArray = [];
    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        if (formInputValue < propertyValue) {
            return true;
        } else {
            this.validationErrorArray.push(formInputName,propertyErrorText);
        }
    }
}


/***/ })

};;