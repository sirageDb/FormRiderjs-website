exports.ids = [1];
exports.modules = {

/***/ "./node_modules/formriderjs/src/validators/checkInputContainCapitalLetters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputContainCapitalLetters.js ***!
  \************************************************************************************/
/*! exports provided: CheckInputContainCapitalLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainCapitalLetters", function() { return CheckInputContainCapitalLetters; });

class CheckInputContainCapitalLetters{
    constructor() {
        this.validationErrorArray = [];
    }



    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {
        let typeofPropertyValue = typeof (propertyValue);


        //return true if input is being used / return false if not
        let inputIsBeingUsed = function(formInputValue){
            if(formInputValue.length > 0) {
                return true;
            }
            if(formInputValue.length === 0) {
                return false;
            }
        }


        let numberOfCapitalLetters = 0;
        let capitalLettersCounter = function (formInputValue) {
            for (let i = 0; i < formInputValue.length; i++) {
                if (formInputValue[i] === formInputValue[i].toUpperCase()
                    && formInputValue[i] !== formInputValue[i].toLowerCase()) {
                    numberOfCapitalLetters++;
                }
            }
        };

        if (typeofPropertyValue === "boolean") {
            if (propertyValue === true) {
                let regex = /[a-z]/;

                // Regular expression in order to test if all characters are Uppercase
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                } else {
                    return true;
                }
            }

            if (propertyValue === false) {
                let regex = /[A-Z]/;

                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                } else {
                    return true;
                }
            }

        } else if (typeofPropertyValue === "number" && inputIsBeingUsed(formInputValue)) {

            capitalLettersCounter(formInputValue);

            if (propertyValue !== numberOfCapitalLetters) {
                this.validationErrorArray.push(formInputName,propertyErrorText);
            } else {
                return true;
            }

        } else if (typeofPropertyValue === "object" && inputIsBeingUsed(formInputValue)) {
            let propertyValueMinimum = propertyValue[0];
            let propertyValueMaximum = propertyValue[1];
            let typeofPropertyValueMinimum = typeof (propertyValueMinimum);
            let typeofPropertyValueMaximum = typeof (propertyValueMaximum);


            if (propertyValueMinimum === true && typeofPropertyValueMaximum === "number") {

                capitalLettersCounter(formInputValue);
                if (numberOfCapitalLetters === 0 || numberOfCapitalLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                } else {
                    return true;
                }

            } else if (typeofPropertyValueMinimum === "number" && propertyValueMaximum === true) {
                capitalLettersCounter(formInputValue);
                if (numberOfCapitalLetters === 0 || numberOfCapitalLetters < propertyValueMinimum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                } else {
                    return true;
                }
            } else if (typeofPropertyValueMinimum === "number" && typeofPropertyValueMaximum === "number") {
                capitalLettersCounter(formInputValue);
                if (numberOfCapitalLetters < propertyValueMinimum || numberOfCapitalLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName,propertyErrorText);
                } else {
                    return true;
                }
            }
        }
    }
}


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5DYXBpdGFsTGV0dGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRDb250YWluQ2FwaXRhbExldHRlcnN7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBsZXQgdHlwZW9mUHJvcGVydHlWYWx1ZSA9IHR5cGVvZiAocHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGlucHV0IGlzIGJlaW5nIHVzZWQgLyByZXR1cm4gZmFsc2UgaWYgbm90XHJcbiAgICAgICAgbGV0IGlucHV0SXNCZWluZ1VzZWQgPSBmdW5jdGlvbihmb3JtSW5wdXRWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IG51bWJlck9mQ2FwaXRhbExldHRlcnMgPSAwO1xyXG4gICAgICAgIGxldCBjYXBpdGFsTGV0dGVyc0NvdW50ZXIgPSBmdW5jdGlvbiAoZm9ybUlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlW2ldID09PSBmb3JtSW5wdXRWYWx1ZVtpXS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZm9ybUlucHV0VmFsdWVbaV0gIT09IGZvcm1JbnB1dFZhbHVlW2ldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkNhcGl0YWxMZXR0ZXJzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bYS16XS87XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVndWxhciBleHByZXNzaW9uIGluIG9yZGVyIHRvIHRlc3QgaWYgYWxsIGNoYXJhY3RlcnMgYXJlIFVwcGVyY2FzZVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAvW0EtWl0vO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZWdleC50ZXN0KGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcIm51bWJlclwiICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcblxyXG4gICAgICAgICAgICBjYXBpdGFsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgIT09IG51bWJlck9mQ2FwaXRhbExldHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dElzQmVpbmdVc2VkKGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1pbmltdW0gPSBwcm9wZXJ0eVZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1heGltdW0gPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG4gICAgICAgICAgICBsZXQgdHlwZW9mUHJvcGVydHlWYWx1ZU1pbmltdW0gPSB0eXBlb2YgKHByb3BlcnR5VmFsdWVNaW5pbXVtKTtcclxuICAgICAgICAgICAgbGV0IHR5cGVvZlByb3BlcnR5VmFsdWVNYXhpbXVtID0gdHlwZW9mIChwcm9wZXJ0eVZhbHVlTWF4aW11bSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWVNaW5pbXVtID09PSB0cnVlICYmIHR5cGVvZlByb3BlcnR5VmFsdWVNYXhpbXVtID09PSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FwaXRhbExldHRlcnNDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkNhcGl0YWxMZXR0ZXJzID09PSAwIHx8IG51bWJlck9mQ2FwaXRhbExldHRlcnMgPiBwcm9wZXJ0eVZhbHVlTWF4aW11bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWVNaW5pbXVtID09PSBcIm51bWJlclwiICYmIHByb3BlcnR5VmFsdWVNYXhpbXVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mQ2FwaXRhbExldHRlcnMgPT09IDAgfHwgbnVtYmVyT2ZDYXBpdGFsTGV0dGVycyA8IHByb3BlcnR5VmFsdWVNaW5pbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlTWluaW11bSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWF4aW11bSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgY2FwaXRhbExldHRlcnNDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkNhcGl0YWxMZXR0ZXJzIDwgcHJvcGVydHlWYWx1ZU1pbmltdW0gfHwgbnVtYmVyT2ZDYXBpdGFsTGV0dGVycyA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9