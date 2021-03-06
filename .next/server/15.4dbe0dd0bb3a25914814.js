exports.ids = [15];
exports.modules = {

/***/ "QiHo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputEmail", function() { return CheckInputEmail; });
class CheckInputEmail{
    constructor() {
        this.validationErrorArray = [];
    }


    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        //return true if input is being used / return false if not
        let inputIsBeingUsed = function(formInputValue){
            if(formInputValue.length > 0) {
                return true;
            }
            if(formInputValue.length === 0) {
                return false;
            }
        }



        if (propertyValue === true && inputIsBeingUsed(formInputValue)) {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex.test(String(formInputValue).toLowerCase())) {
                return true;
            } else {
                this.validationErrorArray.push(formInputName,propertyErrorText);
            }
        }
    }
}

/***/ })

};;