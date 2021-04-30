(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluQ2FwaXRhbExldHRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2hlY2tJbnB1dENvbnRhaW5DYXBpdGFsTGV0dGVyc3tcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG4gICAgICAgIGxldCB0eXBlb2ZQcm9wZXJ0eVZhbHVlID0gdHlwZW9mIChwcm9wZXJ0eVZhbHVlKTtcclxuXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHRydWUgaWYgaW5wdXQgaXMgYmVpbmcgdXNlZCAvIHJldHVybiBmYWxzZSBpZiBub3RcclxuICAgICAgICBsZXQgaW5wdXRJc0JlaW5nVXNlZCA9IGZ1bmN0aW9uKGZvcm1JbnB1dFZhbHVlKXtcclxuICAgICAgICAgICAgaWYoZm9ybUlucHV0VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZm9ybUlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgbnVtYmVyT2ZDYXBpdGFsTGV0dGVycyA9IDA7XHJcbiAgICAgICAgbGV0IGNhcGl0YWxMZXR0ZXJzQ291bnRlciA9IGZ1bmN0aW9uIChmb3JtSW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dFZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybUlucHV0VmFsdWVbaV0gPT09IGZvcm1JbnB1dFZhbHVlW2ldLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAmJiBmb3JtSW5wdXRWYWx1ZVtpXSAhPT0gZm9ybUlucHV0VmFsdWVbaV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mQ2FwaXRhbExldHRlcnMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL1thLXpdLztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gaW4gb3JkZXIgdG8gdGVzdCBpZiBhbGwgY2hhcmFjdGVycyBhcmUgVXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bQS1aXS87XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaW5wdXRJc0JlaW5nVXNlZChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuXHJcbiAgICAgICAgICAgIGNhcGl0YWxMZXR0ZXJzQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSAhPT0gbnVtYmVyT2ZDYXBpdGFsTGV0dGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZQcm9wZXJ0eVZhbHVlID09PSBcIm9iamVjdFwiICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWluaW11bSA9IHByb3BlcnR5VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWF4aW11bSA9IHByb3BlcnR5VmFsdWVbMV07XHJcbiAgICAgICAgICAgIGxldCB0eXBlb2ZQcm9wZXJ0eVZhbHVlTWluaW11bSA9IHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pO1xyXG4gICAgICAgICAgICBsZXQgdHlwZW9mUHJvcGVydHlWYWx1ZU1heGltdW0gPSB0eXBlb2YgKHByb3BlcnR5VmFsdWVNYXhpbXVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IHRydWUgJiYgdHlwZW9mUHJvcGVydHlWYWx1ZU1heGltdW0gPT09IFwibnVtYmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mQ2FwaXRhbExldHRlcnMgPT09IDAgfHwgbnVtYmVyT2ZDYXBpdGFsTGV0dGVycyA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUscHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mUHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHlWYWx1ZU1heGltdW0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhcGl0YWxMZXR0ZXJzQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZDYXBpdGFsTGV0dGVycyA9PT0gMCB8fCBudW1iZXJPZkNhcGl0YWxMZXR0ZXJzIDwgcHJvcGVydHlWYWx1ZU1pbmltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZlByb3BlcnR5VmFsdWVNaW5pbXVtID09PSBcIm51bWJlclwiICYmIHR5cGVvZlByb3BlcnR5VmFsdWVNYXhpbXVtID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsTGV0dGVyc0NvdW50ZXIoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mQ2FwaXRhbExldHRlcnMgPCBwcm9wZXJ0eVZhbHVlTWluaW11bSB8fCBudW1iZXJPZkNhcGl0YWxMZXR0ZXJzID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSxwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=