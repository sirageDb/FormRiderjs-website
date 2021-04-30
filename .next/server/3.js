exports.ids = [3];
exports.modules = {

/***/ "./node_modules/formriderjs/src/validators/checkInputContainSmallLetters.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputContainSmallLetters.js ***!
  \**********************************************************************************/
/*! exports provided: CheckInputContainSmallLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainSmallLetters", function() { return CheckInputContainSmallLetters; });
class CheckInputContainSmallLetters {
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



        let numberOfSmallLetters = 0;
        let smallLettersCounter = function (formInputValue) {
            for (let i = 0; i < formInputValue.length; i++) {
                if (formInputValue[i] === formInputValue[i].toLowerCase() && formInputValue[i] !== formInputValue[i].toUpperCase()) {
                    numberOfSmallLetters++;
                }
            }
        };

        if (typeofPropertyValue === "boolean") {
            if (propertyValue === true) {
                let regex = /[A-Z]/;
                // Regular expression in order to test if all characters are Uppercase
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            }

            if (propertyValue === false) {
                let regex = /[a-z]/;
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            }

        } else if (typeofPropertyValue === "number" && inputIsBeingUsed(formInputValue)) {

            smallLettersCounter(formInputValue);
            if (propertyValue !== numberOfSmallLetters) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }

        } else if (typeofPropertyValue === "object" && inputIsBeingUsed(formInputValue)) {
            let propertyValueMinimum = propertyValue[0];
            let propertyValueMaximum = propertyValue[1];
            let typeofPropertyValueMinimum = typeof (propertyValueMinimum);
            let typeofPropertyValueMaximum = typeof (propertyValueMaximum);


            if (propertyValueMinimum === true && typeofPropertyValueMaximum === "number") {

                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters === 0 || numberOfSmallLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }

            } else if (typeofPropertyValueMinimum === "number" && propertyValueMaximum === true) {
                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters === 0 || numberOfSmallLetters < propertyValueMinimum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            } else if (typeofPropertyValueMinimum === "number" && typeofPropertyValueMaximum === "number") {
                smallLettersCounter(formInputValue);
                if (numberOfSmallLetters < propertyValueMinimum || numberOfSmallLetters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            }
        }
    }

}


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5TbWFsbExldHRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrSW5wdXRDb250YWluU21hbGxMZXR0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgbGV0IHR5cGVvZlByb3BlcnR5VmFsdWUgPSB0eXBlb2YgKHByb3BlcnR5VmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBpbnB1dCBpcyBiZWluZyB1c2VkIC8gcmV0dXJuIGZhbHNlIGlmIG5vdFxyXG4gICAgICAgIGxldCBpbnB1dElzQmVpbmdVc2VkID0gZnVuY3Rpb24oZm9ybUlucHV0VmFsdWUpe1xyXG4gICAgICAgICAgICBpZihmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgbnVtYmVyT2ZTbWFsbExldHRlcnMgPSAwO1xyXG4gICAgICAgIGxldCBzbWFsbExldHRlcnNDb3VudGVyID0gZnVuY3Rpb24gKGZvcm1JbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0VmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZVtpXSA9PT0gZm9ybUlucHV0VmFsdWVbaV0udG9Mb3dlckNhc2UoKSAmJiBmb3JtSW5wdXRWYWx1ZVtpXSAhPT0gZm9ybUlucHV0VmFsdWVbaV0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mU21hbGxMZXR0ZXJzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bQS1aXS87XHJcbiAgICAgICAgICAgICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gaW4gb3JkZXIgdG8gdGVzdCBpZiBhbGwgY2hhcmFjdGVycyBhcmUgVXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAvW2Etel0vO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcIm51bWJlclwiICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcblxyXG4gICAgICAgICAgICBzbWFsbExldHRlcnNDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgIT09IG51bWJlck9mU21hbGxMZXR0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcIm9iamVjdFwiICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWluaW11bSA9IHByb3BlcnR5VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWF4aW11bSA9IHByb3BlcnR5VmFsdWVbMV07XHJcbiAgICAgICAgICAgIGxldCB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWluaW11bSA9IHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pO1xyXG4gICAgICAgICAgICBsZXQgdHlwZW9mUHJvcGVydHlWYWx1ZU1heGltdW0gPSB0eXBlb2YgKHByb3BlcnR5VmFsdWVNYXhpbXVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IHRydWUgJiYgdHlwZW9mUHJvcGVydHlWYWx1ZU1heGltdW0gPT09IFwibnVtYmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzbWFsbExldHRlcnNDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlNtYWxsTGV0dGVycyA9PT0gMCB8fCBudW1iZXJPZlNtYWxsTGV0dGVycyA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWVNaW5pbXVtID09PSBcIm51bWJlclwiICYmIHByb3BlcnR5VmFsdWVNYXhpbXVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzbWFsbExldHRlcnNDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlNtYWxsTGV0dGVycyA9PT0gMCB8fCBudW1iZXJPZlNtYWxsTGV0dGVycyA8IHByb3BlcnR5VmFsdWVNaW5pbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mUHJvcGVydHlWYWx1ZU1heGltdW0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHNtYWxsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mU21hbGxMZXR0ZXJzIDwgcHJvcGVydHlWYWx1ZU1pbmltdW0gfHwgbnVtYmVyT2ZTbWFsbExldHRlcnMgPiBwcm9wZXJ0eVZhbHVlTWF4aW11bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9