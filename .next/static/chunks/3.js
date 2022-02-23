(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./node_modules/formriderjs/src/validators/checkInputContainNumber.js":
/*!****************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputContainNumber.js ***!
  \****************************************************************************/
/*! exports provided: CheckInputContainNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainNumber", function() { return CheckInputContainNumber; });
class CheckInputContainNumber{
    constructor() {
        this.validationErrorArray = [];
    }

    //verify if the input type is int or float (number)
    //chek if inputs value is a number
    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let formInputValueLength = formInputValue.length;

        let numberOfNumbersInFormInput = 0;
        let numberCounter = function (formInputValue) {
            for (let character of formInputValue) {
                let characterAsNumber = Number(character);
                if (characterAsNumber !== characterAsNumber || character === " ") {
                } else {
                    numberOfNumbersInFormInput++;
                }
            }
        };

        if (typeof (propertyValue) === "object" && formInputValueLength > 0) {
            let propertyValueMinimum = propertyValue[0];
            let propertyValueMaximum = propertyValue[1];


            if (propertyValueMinimum === true && typeof (propertyValueMaximum) === "number") {
                numberCounter(formInputValue);
                if (numberOfNumbersInFormInput > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                }

            } else if (typeof (propertyValueMinimum) === "number" && propertyValueMaximum === true) {
                numberCounter(formInputValue);

                // here below : && numberOfNumbersInFormInput > 0 is for empty inputs
                if (numberOfNumbersInFormInput < propertyValueMinimum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                }
            } else if (typeof (propertyValueMinimum) === "number" && typeof (propertyValueMaximum) === "number") {
                numberCounter(formInputValue);

                if (numberOfNumbersInFormInput < propertyValueMinimum || numberOfNumbersInFormInput > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                }
            }

        } else if (typeof (propertyValue) === "boolean" && formInputValueLength > 0) {
            if (propertyValue === true) {
                numberCounter(formInputValue);
                if (numberOfNumbersInFormInput < formInputValueLength) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                }
            } else if (propertyValue === false) {

                numberCounter(formInputValue);
                if (numberOfNumbersInFormInput > 0) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                }
            }
        }
        else if (typeof (propertyValue) === "number" && formInputValueLength > 0){
            numberCounter(formInputValue);
            if(numberOfNumbersInFormInput !== propertyValue){
                this.validationErrorArray.push(formInputName, propertyErrorText);
            }
        }
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRDb250YWluTnVtYmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdmVyaWZ5IGlmIHRoZSBpbnB1dCB0eXBlIGlzIGludCBvciBmbG9hdCAobnVtYmVyKVxyXG4gICAgLy9jaGVrIGlmIGlucHV0cyB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgbGV0IGZvcm1JbnB1dFZhbHVlTGVuZ3RoID0gZm9ybUlucHV0VmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgPSAwO1xyXG4gICAgICAgIGxldCBudW1iZXJDb3VudGVyID0gZnVuY3Rpb24gKGZvcm1JbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXJhY3RlciBvZiBmb3JtSW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlckFzTnVtYmVyID0gTnVtYmVyKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyQXNOdW1iZXIgIT09IGNoYXJhY3RlckFzTnVtYmVyIHx8IGNoYXJhY3RlciA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKHByb3BlcnR5VmFsdWUpID09PSBcIm9iamVjdFwiICYmIGZvcm1JbnB1dFZhbHVlTGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1pbmltdW0gPSBwcm9wZXJ0eVZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1heGltdW0gPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlTWluaW11bSA9PT0gdHJ1ZSAmJiB0eXBlb2YgKHByb3BlcnR5VmFsdWVNYXhpbXVtKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgPiBwcm9wZXJ0eVZhbHVlTWF4aW11bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlTWluaW11bSkgPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHlWYWx1ZU1heGltdW0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlckNvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGhlcmUgYmVsb3cgOiAmJiBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA+IDAgaXMgZm9yIGVtcHR5IGlucHV0c1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0IDwgcHJvcGVydHlWYWx1ZU1pbmltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlTWluaW11bSkgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIChwcm9wZXJ0eVZhbHVlTWF4aW11bSkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlckNvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA8IHByb3BlcnR5VmFsdWVNaW5pbXVtIHx8IG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0ID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKHByb3BlcnR5VmFsdWUpID09PSBcImJvb2xlYW5cIiAmJiBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlckNvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0IDwgZm9ybUlucHV0VmFsdWVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlWYWx1ZSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgIT09IHByb3BlcnR5VmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=