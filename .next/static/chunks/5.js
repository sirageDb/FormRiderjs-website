(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./node_modules/formriderjs/src/validators/checkInputContainSpecialCharacters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputContainSpecialCharacters.js ***!
  \***************************************************************************************/
/*! exports provided: CheckInputContainSpecialCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputContainSpecialCharacters", function() { return CheckInputContainSpecialCharacters; });
class CheckInputContainSpecialCharacters {
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



        let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        let specialCharacterCount = (string) => {
            return (string.match(regex) || []).length;
        };
        let numberOfSpecialCharacters = specialCharacterCount(formInputValue);

        let formInputLength = formInputValue.length;

        if (typeof (propertyValue === "boolean")) {

            if (propertyValue === true) {
                if (formInputLength > numberOfSpecialCharacters) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            } else if (propertyValue === false) {
                if (regex.test(formInputValue)) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            }
        }
        if (typeof (propertyValue) === "number" && inputIsBeingUsed(formInputValue)) {
            if (numberOfSpecialCharacters !== propertyValue) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                return true;
            }
        }
        if (typeof (propertyValue) === "object" && inputIsBeingUsed(formInputValue)) {
            let propertyValueMinimum = propertyValue[0];
            let propertyValueMaximum = propertyValue[1];

            if (typeof (propertyValueMinimum) === "number"
                && propertyValueMaximum === true) {
                if (numberOfSpecialCharacters < propertyValueMinimum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            } else if (propertyValueMinimum === true
                && typeof (propertyValueMaximum) === "number") {

                if (numberOfSpecialCharacters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                } else {
                    return true;
                }
            } else if (typeof (propertyValueMinimum) === "number"
                && typeof (propertyValueMaximum) === "number") {

                if (numberOfSpecialCharacters < propertyValueMinimum
                    || numberOfSpecialCharacters > propertyValueMaximum) {
                    this.validationErrorArray.push(formInputName, propertyErrorText);
                }
            }
        }
    }
}






/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluU3BlY2lhbENoYXJhY3RlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0Q29udGFpblNwZWNpYWxDaGFyYWN0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkgPSBbXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGlucHV0IGlzIGJlaW5nIHVzZWQgLyByZXR1cm4gZmFsc2UgaWYgbm90XHJcbiAgICAgICAgbGV0IGlucHV0SXNCZWluZ1VzZWQgPSBmdW5jdGlvbihmb3JtSW5wdXRWYWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZvcm1JbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XS9nO1xyXG4gICAgICAgIGxldCBzcGVjaWFsQ2hhcmFjdGVyQ291bnQgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3RyaW5nLm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG51bWJlck9mU3BlY2lhbENoYXJhY3RlcnMgPSBzcGVjaWFsQ2hhcmFjdGVyQ291bnQoZm9ybUlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybUlucHV0TGVuZ3RoID0gZm9ybUlucHV0VmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlID09PSBcImJvb2xlYW5cIikpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybUlucHV0TGVuZ3RoID4gbnVtYmVyT2ZTcGVjaWFsQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5VmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiBpbnB1dElzQmVpbmdVc2VkKGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZTcGVjaWFsQ2hhcmFjdGVycyAhPT0gcHJvcGVydHlWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKHByb3BlcnR5VmFsdWUpID09PSBcIm9iamVjdFwiICYmIGlucHV0SXNCZWluZ1VzZWQoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWluaW11bSA9IHByb3BlcnR5VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVZhbHVlTWF4aW11bSA9IHByb3BlcnR5VmFsdWVbMV07XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlTWluaW11bSkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICYmIHByb3BlcnR5VmFsdWVNYXhpbXVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZTcGVjaWFsQ2hhcmFjdGVycyA8IHByb3BlcnR5VmFsdWVNaW5pbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlWYWx1ZU1pbmltdW0gPT09IHRydWVcclxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiAocHJvcGVydHlWYWx1ZU1heGltdW0pID09PSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mU3BlY2lhbENoYXJhY3RlcnMgPiBwcm9wZXJ0eVZhbHVlTWF4aW11bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgKHByb3BlcnR5VmFsdWVNYXhpbXVtKSA9PT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlNwZWNpYWxDaGFyYWN0ZXJzIDwgcHJvcGVydHlWYWx1ZU1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICB8fCBudW1iZXJPZlNwZWNpYWxDaGFyYWN0ZXJzID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9