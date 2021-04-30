(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluU21hbGxMZXR0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJbnB1dENvbnRhaW5TbWFsbExldHRlcnMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpIHtcclxuICAgICAgICBsZXQgdHlwZW9mUHJvcGVydHlWYWx1ZSA9IHR5cGVvZiAocHJvcGVydHlWYWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGlucHV0IGlzIGJlaW5nIHVzZWQgLyByZXR1cm4gZmFsc2UgaWYgbm90XHJcbiAgICAgICAgbGV0IGlucHV0SXNCZWluZ1VzZWQgPSBmdW5jdGlvbihmb3JtSW5wdXRWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBudW1iZXJPZlNtYWxsTGV0dGVycyA9IDA7XHJcbiAgICAgICAgbGV0IHNtYWxsTGV0dGVyc0NvdW50ZXIgPSBmdW5jdGlvbiAoZm9ybUlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlW2ldID09PSBmb3JtSW5wdXRWYWx1ZVtpXS50b0xvd2VyQ2FzZSgpICYmIGZvcm1JbnB1dFZhbHVlW2ldICE9PSBmb3JtSW5wdXRWYWx1ZVtpXS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTbWFsbExldHRlcnMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL1tBLVpdLztcclxuICAgICAgICAgICAgICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBpbiBvcmRlciB0byB0ZXN0IGlmIGFsbCBjaGFyYWN0ZXJzIGFyZSBVcHBlcmNhc2VcclxuICAgICAgICAgICAgICAgIGlmIChyZWdleC50ZXN0KGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bYS16XS87XHJcbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaW5wdXRJc0JlaW5nVXNlZChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuXHJcbiAgICAgICAgICAgIHNtYWxsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSAhPT0gbnVtYmVyT2ZTbWFsbExldHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5wdXRJc0JlaW5nVXNlZChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWVNaW5pbXVtID0gcHJvcGVydHlWYWx1ZVswXTtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWVNYXhpbXVtID0gcHJvcGVydHlWYWx1ZVsxXTtcclxuICAgICAgICAgICAgbGV0IHR5cGVvZlByb3BlcnR5VmFsdWVNaW5pbXVtID0gdHlwZW9mIChwcm9wZXJ0eVZhbHVlTWluaW11bSk7XHJcbiAgICAgICAgICAgIGxldCB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWF4aW11bSA9IHR5cGVvZiAocHJvcGVydHlWYWx1ZU1heGltdW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlTWluaW11bSA9PT0gdHJ1ZSAmJiB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWF4aW11bSA9PT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIHNtYWxsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mU21hbGxMZXR0ZXJzID09PSAwIHx8IG51bWJlck9mU21hbGxMZXR0ZXJzID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHlWYWx1ZU1heGltdW0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHNtYWxsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mU21hbGxMZXR0ZXJzID09PSAwIHx8IG51bWJlck9mU21hbGxMZXR0ZXJzIDwgcHJvcGVydHlWYWx1ZU1pbmltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlTWluaW11bSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWF4aW11bSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgc21hbGxMZXR0ZXJzQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZTbWFsbExldHRlcnMgPCBwcm9wZXJ0eVZhbHVlTWluaW11bSB8fCBudW1iZXJPZlNtYWxsTGV0dGVycyA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=