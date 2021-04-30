exports.ids = [4];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5TcGVjaWFsQ2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJbnB1dENvbnRhaW5TcGVjaWFsQ2hhcmFjdGVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBpbnB1dCBpcyBiZWluZyB1c2VkIC8gcmV0dXJuIGZhbHNlIGlmIG5vdFxyXG4gICAgICAgIGxldCBpbnB1dElzQmVpbmdVc2VkID0gZnVuY3Rpb24oZm9ybUlucHV0VmFsdWUpe1xyXG4gICAgICAgICAgICBpZihmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmb3JtSW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAvWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw+XFwvP10vZztcclxuICAgICAgICBsZXQgc3BlY2lhbENoYXJhY3RlckNvdW50ID0gKHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHN0cmluZy5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBudW1iZXJPZlNwZWNpYWxDaGFyYWN0ZXJzID0gc3BlY2lhbENoYXJhY3RlckNvdW50KGZvcm1JbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1JbnB1dExlbmd0aCA9IGZvcm1JbnB1dFZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZSA9PT0gXCJib29sZWFuXCIpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dExlbmd0aCA+IG51bWJlck9mU3BlY2lhbENoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eVZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QoZm9ybUlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZSkgPT09IFwibnVtYmVyXCIgJiYgaW5wdXRJc0JlaW5nVXNlZChmb3JtSW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKG51bWJlck9mU3BlY2lhbENoYXJhY3RlcnMgIT09IHByb3BlcnR5VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChwcm9wZXJ0eVZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dElzQmVpbmdVc2VkKGZvcm1JbnB1dFZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1pbmltdW0gPSBwcm9wZXJ0eVZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZU1heGltdW0gPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAocHJvcGVydHlWYWx1ZU1pbmltdW0pID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAmJiBwcm9wZXJ0eVZhbHVlTWF4aW11bSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mU3BlY2lhbENoYXJhY3RlcnMgPCBwcm9wZXJ0eVZhbHVlTWluaW11bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5VmFsdWVNaW5pbXVtID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgKHByb3BlcnR5VmFsdWVNYXhpbXVtKSA9PT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlNwZWNpYWxDaGFyYWN0ZXJzID4gcHJvcGVydHlWYWx1ZU1heGltdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKHByb3BlcnR5VmFsdWVNaW5pbXVtKSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIChwcm9wZXJ0eVZhbHVlTWF4aW11bSkgPT09IFwibnVtYmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZTcGVjaWFsQ2hhcmFjdGVycyA8IHByb3BlcnR5VmFsdWVNaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVtYmVyT2ZTcGVjaWFsQ2hhcmFjdGVycyA+IHByb3BlcnR5VmFsdWVNYXhpbXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==