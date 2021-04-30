exports.ids = [2];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5OdW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0Q29udGFpbk51bWJlcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ZlcmlmeSBpZiB0aGUgaW5wdXQgdHlwZSBpcyBpbnQgb3IgZmxvYXQgKG51bWJlcilcclxuICAgIC8vY2hlayBpZiBpbnB1dHMgdmFsdWUgaXMgYSBudW1iZXJcclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG4gICAgICAgIGxldCBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA9IGZvcm1JbnB1dFZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgbGV0IG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0ID0gMDtcclxuICAgICAgICBsZXQgbnVtYmVyQ291bnRlciA9IGZ1bmN0aW9uIChmb3JtSW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGFyYWN0ZXIgb2YgZm9ybUlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJBc051bWJlciA9IE51bWJlcihjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckFzTnVtYmVyICE9PSBjaGFyYWN0ZXJBc051bWJlciB8fCBjaGFyYWN0ZXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWVNaW5pbXVtID0gcHJvcGVydHlWYWx1ZVswXTtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWVNYXhpbXVtID0gcHJvcGVydHlWYWx1ZVsxXTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IHRydWUgJiYgdHlwZW9mIChwcm9wZXJ0eVZhbHVlTWF4aW11bSkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlckNvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0ID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pID09PSBcIm51bWJlclwiICYmIHByb3BlcnR5VmFsdWVNYXhpbXVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBoZXJlIGJlbG93IDogJiYgbnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgPiAwIGlzIGZvciBlbXB0eSBpbnB1dHNcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA8IHByb3BlcnR5VmFsdWVNaW5pbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pID09PSBcIm51bWJlclwiICYmIHR5cGVvZiAocHJvcGVydHlWYWx1ZU1heGltdW0pID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgPCBwcm9wZXJ0eVZhbHVlTWluaW11bSB8fCBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJib29sZWFuXCIgJiYgZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA8IGZvcm1JbnB1dFZhbHVlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5VmFsdWUgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbnVtYmVyQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZSkgPT09IFwibnVtYmVyXCIgJiYgZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbnVtYmVyQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0ICE9PSBwcm9wZXJ0eVZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9