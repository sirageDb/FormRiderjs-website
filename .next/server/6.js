exports.ids = [6];
exports.modules = {

/***/ "./node_modules/formriderjs/src/validators/checkInputDateFormat.js":
/*!*************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators/checkInputDateFormat.js ***!
  \*************************************************************************/
/*! exports provided: CheckInputDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInputDateFormat", function() { return CheckInputDateFormat; });
class CheckInputDateFormat {
    constructor() {
        this.validationErrorArray = [];
    }

    validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText) {


        let propertyDateValueArray = propertyValue[0];
        let propertyDateLimitationArray = propertyValue[1];
        let propertyDateSeparator = propertyValue[2][0];
        let propertyDateValueArrayLength = propertyDateValueArray.length;
        let propertyDateLimitationArrayLength = propertyDateLimitationArray.length;
        let formInputValueLength = formInputValue.length;


        //=====================================================================================
        let dateSeparatorCounter = function(string, regex) {
                return (string.match(regex) || []).length;
            }
            //=====================================================================================




        //=====================================================================================
        let numberCounter = function(string) {
            let numberOfNumbersInFormInput = 0;

            for (let character of string) {
                let characterAsNumber = Number(character);
                if (characterAsNumber !== characterAsNumber || character === " ") {} else {
                    numberOfNumbersInFormInput++;
                }
            }
            return numberOfNumbersInFormInput;
        };
        //=====================================================================================



        //=====================================================================================
        let sumOfNumbersInPropertyDateValueArray = function() {
            let characterNumber = 0;
            for (let i = 0; i < propertyDateValueArrayLength; i++) {
                if (typeof(propertyDateValueArray[i]) === "number") {
                    characterNumber = characterNumber + propertyDateValueArray[i];
                }
            }
            return characterNumber;
        };
        //=====================================================================================



        //=====================================================================================
        let numberOfDateValueFieldContainingNumber = 0;
        let indexOfDateValueFieldContainingNumber = [];
        let numberOfDateValueFieldsContainingTrue = 0;
        let indexOfDateValueFieldContainingTrue = [];


        //check all date values, if it is a number or true, then increment values above here ^
        let checkAllDateValueArrayFieldsType = function() {
            for (let i = 0; i < propertyDateValueArrayLength; i++) {
                if (typeof(propertyDateValueArray[i]) === "number") {
                    numberOfDateValueFieldContainingNumber++;
                    indexOfDateValueFieldContainingNumber.push(i);
                }

                if (propertyDateValueArray[i] === true) {
                    numberOfDateValueFieldsContainingTrue++;
                    indexOfDateValueFieldContainingTrue.push(i);
                }



                //throw an error, when  it is nor true nor number type
                if (propertyDateValueArray[i] !== true && typeof(propertyDateValueArray[i]) !== "number") {
                    window.alert("FormRider.js ERROR : Property value of dateFormat can only contain values type of number or true");
                }
            }
        };
        checkAllDateValueArrayFieldsType();
        //=====================================================================================



        //=====================================================================================
        //return true if a character is number, otherwise return false
        let checkCharacterIfNumber = function(character) {
                let regex = /[0-9]/g;
                return regex.test(character);
            }
            //=====================================================================================



        //=====================================================================================
        //return true if a string contains white space, otherwise return false
        let doCheckForWhiteSpace = function(string) {
                let regex = /\s+/g;
                return regex.test(string);
            }
            //=====================================================================================


        //=====================================================================================
        //return true if a string contains special characters, otherwise return false
        let doTestStringForSpecialChars = function(string) {
                let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
                return regex.test(string);
            }
            //=====================================================================================


        let numberOfNumbersInFormInputValue = numberCounter(formInputValue);
        let testForSpecialChars = doTestStringForSpecialChars(formInputValue);
        let numberOfNumbersInPropertyDateValueArray = sumOfNumbersInPropertyDateValueArray();
        let startingIndex = 0;


        if (checkCharacterIfNumber(formInputValue[formInputValueLength - 1]) === false && formInputValueLength > 0) {
            this.validationErrorArray.push(formInputName, propertyErrorText);
        }


        //when there is no separator
        if (propertyDateSeparator === "" && formInputValueLength > 0) {
            /*  ERROR CASES MANAGEMENT
                -if the input is not only numbers but but JSON said the input should be only numbers
                -if the input is only numbers but JSON said it should be numbers and characters
                -if sum of numbers in JSON is not equal to number of numbers in form input
                -if there is white spaces in the input
            * */
            if ((testForSpecialChars === true) ||
                ((numberOfNumbersInFormInputValue !== formInputValueLength && numberOfDateValueFieldContainingNumber === propertyDateValueArrayLength) && (formInputValueLength > 0)) ||
                ((numberOfNumbersInFormInputValue === formInputValueLength && numberOfDateValueFieldsContainingTrue > 0) && (formInputValueLength > 0)) ||
                ((numberOfNumbersInFormInputValue !== numberOfNumbersInPropertyDateValueArray) && (formInputValueLength > 0)) ||
                doCheckForWhiteSpace(formInputValue) === true) {

                this.validationErrorArray.push(formInputName, propertyErrorText);
            } else {
                //another way of saying that JSON wants "Input should contain only numbers"
                if (numberOfDateValueFieldContainingNumber === propertyDateValueArrayLength) {

                    for (let i = 0; i < propertyDateValueArrayLength; i++) {

                        let propertyDateValue = propertyDateValueArray[i];

                        let propertyDateLimitationMinValue = propertyDateLimitationArray[i][0];
                        let propertyDateLimitationMaxValue = propertyDateLimitationArray[i][1];

                        let slicedValue = formInputValue.slice(startingIndex, startingIndex + propertyDateValue);
                        startingIndex += propertyDateValue;

                        // incrementing the startingIndex so next value will be a new slice
                        if (slicedValue < propertyDateLimitationMinValue ||
                            slicedValue > propertyDateLimitationMaxValue) {

                            this.validationErrorArray.push(formInputName, propertyErrorText);
                        }
                    }
                }

                //====================================================================================================
                // IT SHOULD CONTAIN a STRING e.g. 04september1994
                if (numberOfDateValueFieldsContainingTrue === 1) {

                    for (let i = 0; i < propertyDateValueArrayLength; i++) {
                        let characterIsNumber = checkCharacterIfNumber(formInputValue[startingIndex]);
                        let propertyDateValue = propertyDateValueArray[i];
                        let stringLength = 0;
                        let slicedValue;



                        if (typeof(propertyDateValue) === "number") {

                            //thi"s might only catch the first character in the input
                            if (characterIsNumber === false) {
                                this.validationErrorArray.push(formInputName, propertyErrorText);
                            }


                            if (characterIsNumber === true) {
                                let propertyDateLimitationMinValue = propertyDateLimitationArray[i][0];
                                let propertyDateLimitationMaxValue = propertyDateLimitationArray[i][1];

                                slicedValue = formInputValue.slice(startingIndex, startingIndex + propertyDateValue);
                                startingIndex += propertyDateValue;


                                if (slicedValue < propertyDateLimitationMinValue ||
                                    slicedValue > propertyDateLimitationMaxValue) {
                                    this.validationErrorArray.push(formInputName, propertyErrorText);
                                }
                            }
                        }

                        if (propertyDateValue === true) {

                            if (characterIsNumber === true) {
                                this.validationErrorArray.push(formInputName, propertyErrorText);
                            }

                            for (let x = startingIndex; x < formInputValueLength; x++) {

                                let characterIsNumber = checkCharacterIfNumber(formInputValue[x]);

                                if (characterIsNumber === false) {
                                    stringLength++;
                                } else if (stringLength >= 20) {

                                    this.validationErrorArray.push(formInputName, propertyErrorText);
                                } else if (characterIsNumber === true) {
                                    startingIndex += stringLength;

                                    //get out of loop if it encounters a number
                                    break;
                                }
                            }
                        }
                    }
                }

                //when there is more than one field in property date value containing true
                if (numberOfDateValueFieldsContainingTrue > 1) {
                    window.alert("FormRider.js ERROR ::: Property value of dateFormat more than a single true value located at the propertyDateValueArray[1]");
                }
                //====================================================================================================

            }
        }



        //when there is a separator
        if (propertyDateSeparator !== "" && formInputValueLength > 0) {
            let dateSeparatorRegex = new RegExp(propertyDateSeparator, "g");

            //number of date separator in formInput
            let dateSeparatorNumberInFormInput = dateSeparatorCounter(formInputValue, dateSeparatorRegex);

            if (dateSeparatorNumberInFormInput !== propertyDateValueArrayLength - 1) {
                this.validationErrorArray.push(formInputName, propertyErrorText);
            }

            if (dateSeparatorNumberInFormInput === propertyDateValueArrayLength - 1) {
                let formInputValueSplit = formInputValue.split(propertyDateSeparator);
                for (let i = 0; i < propertyDateValueArrayLength; i++) {
                    let numberOfNumbersInOneSplit = numberCounter(formInputValueSplit[i]);

                    if (typeof(propertyDateValueArray[i]) === "number") {
                        if (numberOfNumbersInOneSplit !== propertyDateValueArray[i] ||
                            formInputValueSplit[i].length !== propertyDateValueArray[i]) {
                            this.validationErrorArray.push(formInputName, propertyErrorText);
                        } else {
                            let propertyDateLimitationMinValue = propertyDateLimitationArray[i][0];
                            let propertyDateLimitationMaxValue = propertyDateLimitationArray[i][1];

                            if (formInputValueSplit[i] < propertyDateLimitationMinValue ||
                                formInputValueSplit[i] > propertyDateLimitationMaxValue) {
                                this.validationErrorArray.push(formInputName, propertyErrorText);
                            }
                        }
                    }

                    if (propertyDateValueArray[i] === true) {
                        let characterIsNumber = checkCharacterIfNumber(formInputValueSplit[i]);


                        if ((formInputValueSplit[i].length > 12) ||
                            (characterIsNumber === true)) {
                            this.validationErrorArray.push(formInputName, propertyErrorText);
                        }
                    }
                }
            }
        }
    }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dERhdGVGb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0NBQWtDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxtQ0FBbUMsa0NBQWtDOztBQUVyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCwwQkFBMEI7O0FBRWpGOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tJbnB1dERhdGVGb3JtYXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKHByb3BlcnR5S2V5Q2FwaXRhbGl6ZWQsIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXkgPSBwcm9wZXJ0eVZhbHVlWzBdO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXkgPSBwcm9wZXJ0eVZhbHVlWzFdO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eURhdGVTZXBhcmF0b3IgPSBwcm9wZXJ0eVZhbHVlWzJdWzBdO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5TGVuZ3RoID0gcHJvcGVydHlEYXRlVmFsdWVBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheUxlbmd0aCA9IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGZvcm1JbnB1dFZhbHVlTGVuZ3RoID0gZm9ybUlucHV0VmFsdWUubGVuZ3RoO1xyXG5cclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgbGV0IGRhdGVTZXBhcmF0b3JDb3VudGVyID0gZnVuY3Rpb24oc3RyaW5nLCByZWdleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzdHJpbmcubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGxldCBudW1iZXJDb3VudGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGFyYWN0ZXIgb2Ygc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVyQXNOdW1iZXIgPSBOdW1iZXIoY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJBc051bWJlciAhPT0gY2hhcmFjdGVyQXNOdW1iZXIgfHwgY2hhcmFjdGVyID09PSBcIiBcIikge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBsZXQgc3VtT2ZOdW1iZXJzSW5Qcm9wZXJ0eURhdGVWYWx1ZUFycmF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJOdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlck51bWJlciA9IGNoYXJhY3Rlck51bWJlciArIHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3Rlck51bWJlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGxldCBudW1iZXJPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ051bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4T2ZEYXRlVmFsdWVGaWVsZENvbnRhaW5pbmdOdW1iZXIgPSBbXTtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZEYXRlVmFsdWVGaWVsZHNDb250YWluaW5nVHJ1ZSA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4T2ZEYXRlVmFsdWVGaWVsZENvbnRhaW5pbmdUcnVlID0gW107XHJcblxyXG5cclxuICAgICAgICAvL2NoZWNrIGFsbCBkYXRlIHZhbHVlcywgaWYgaXQgaXMgYSBudW1iZXIgb3IgdHJ1ZSwgdGhlbiBpbmNyZW1lbnQgdmFsdWVzIGFib3ZlIGhlcmUgXlxyXG4gICAgICAgIGxldCBjaGVja0FsbERhdGVWYWx1ZUFycmF5RmllbGRzVHlwZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldKSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mRGF0ZVZhbHVlRmllbGRDb250YWluaW5nTnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ051bWJlci5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZEYXRlVmFsdWVGaWVsZHNDb250YWluaW5nVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2ZEYXRlVmFsdWVGaWVsZENvbnRhaW5pbmdUcnVlLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IGFuIGVycm9yLCB3aGVuICBpdCBpcyBub3IgdHJ1ZSBub3IgbnVtYmVyIHR5cGVcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldICE9PSB0cnVlICYmIHR5cGVvZihwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldKSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkZvcm1SaWRlci5qcyBFUlJPUiA6IFByb3BlcnR5IHZhbHVlIG9mIGRhdGVGb3JtYXQgY2FuIG9ubHkgY29udGFpbiB2YWx1ZXMgdHlwZSBvZiBudW1iZXIgb3IgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hlY2tBbGxEYXRlVmFsdWVBcnJheUZpZWxkc1R5cGUoKTtcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGEgY2hhcmFjdGVyIGlzIG51bWJlciwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBjaGVja0NoYXJhY3RlcklmTnVtYmVyID0gZnVuY3Rpb24oY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAvWzAtOV0vZztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBhIHN0cmluZyBjb250YWlucyB3aGl0ZSBzcGFjZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBkb0NoZWNrRm9yV2hpdGVTcGFjZSA9IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL1xccysvZztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHNwZWNpYWwgY2hhcmFjdGVycywgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCBkb1Rlc3RTdHJpbmdGb3JTcGVjaWFsQ2hhcnMgPSBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XS9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gICAgICAgIGxldCBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dFZhbHVlID0gbnVtYmVyQ291bnRlcihmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgbGV0IHRlc3RGb3JTcGVjaWFsQ2hhcnMgPSBkb1Rlc3RTdHJpbmdGb3JTcGVjaWFsQ2hhcnMoZm9ybUlucHV0VmFsdWUpO1xyXG4gICAgICAgIGxldCBudW1iZXJPZk51bWJlcnNJblByb3BlcnR5RGF0ZVZhbHVlQXJyYXkgPSBzdW1PZk51bWJlcnNJblByb3BlcnR5RGF0ZVZhbHVlQXJyYXkoKTtcclxuICAgICAgICBsZXQgc3RhcnRpbmdJbmRleCA9IDA7XHJcblxyXG5cclxuICAgICAgICBpZiAoY2hlY2tDaGFyYWN0ZXJJZk51bWJlcihmb3JtSW5wdXRWYWx1ZVtmb3JtSW5wdXRWYWx1ZUxlbmd0aCAtIDFdKSA9PT0gZmFsc2UgJiYgZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy93aGVuIHRoZXJlIGlzIG5vIHNlcGFyYXRvclxyXG4gICAgICAgIGlmIChwcm9wZXJ0eURhdGVTZXBhcmF0b3IgPT09IFwiXCIgJiYgZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8qICBFUlJPUiBDQVNFUyBNQU5BR0VNRU5UXHJcbiAgICAgICAgICAgICAgICAtaWYgdGhlIGlucHV0IGlzIG5vdCBvbmx5IG51bWJlcnMgYnV0IGJ1dCBKU09OIHNhaWQgdGhlIGlucHV0IHNob3VsZCBiZSBvbmx5IG51bWJlcnNcclxuICAgICAgICAgICAgICAgIC1pZiB0aGUgaW5wdXQgaXMgb25seSBudW1iZXJzIGJ1dCBKU09OIHNhaWQgaXQgc2hvdWxkIGJlIG51bWJlcnMgYW5kIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgIC1pZiBzdW0gb2YgbnVtYmVycyBpbiBKU09OIGlzIG5vdCBlcXVhbCB0byBudW1iZXIgb2YgbnVtYmVycyBpbiBmb3JtIGlucHV0XHJcbiAgICAgICAgICAgICAgICAtaWYgdGhlcmUgaXMgd2hpdGUgc3BhY2VzIGluIHRoZSBpbnB1dFxyXG4gICAgICAgICAgICAqICovXHJcbiAgICAgICAgICAgIGlmICgodGVzdEZvclNwZWNpYWxDaGFycyA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgICAgICgobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXRWYWx1ZSAhPT0gZm9ybUlucHV0VmFsdWVMZW5ndGggJiYgbnVtYmVyT2ZEYXRlVmFsdWVGaWVsZENvbnRhaW5pbmdOdW1iZXIgPT09IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGgpICYmIChmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApKSB8fFxyXG4gICAgICAgICAgICAgICAgKChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dFZhbHVlID09PSBmb3JtSW5wdXRWYWx1ZUxlbmd0aCAmJiBudW1iZXJPZkRhdGVWYWx1ZUZpZWxkc0NvbnRhaW5pbmdUcnVlID4gMCkgJiYgKGZvcm1JbnB1dFZhbHVlTGVuZ3RoID4gMCkpIHx8XHJcbiAgICAgICAgICAgICAgICAoKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0VmFsdWUgIT09IG51bWJlck9mTnVtYmVyc0luUHJvcGVydHlEYXRlVmFsdWVBcnJheSkgJiYgKGZvcm1JbnB1dFZhbHVlTGVuZ3RoID4gMCkpIHx8XHJcbiAgICAgICAgICAgICAgICBkb0NoZWNrRm9yV2hpdGVTcGFjZShmb3JtSW5wdXRWYWx1ZSkgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9hbm90aGVyIHdheSBvZiBzYXlpbmcgdGhhdCBKU09OIHdhbnRzIFwiSW5wdXQgc2hvdWxkIGNvbnRhaW4gb25seSBudW1iZXJzXCJcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ051bWJlciA9PT0gcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZVZhbHVlID0gcHJvcGVydHlEYXRlVmFsdWVBcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWluVmFsdWUgPSBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXlbaV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWF4VmFsdWUgPSBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXlbaV1bMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2xpY2VkVmFsdWUgPSBmb3JtSW5wdXRWYWx1ZS5zbGljZShzdGFydGluZ0luZGV4LCBzdGFydGluZ0luZGV4ICsgcHJvcGVydHlEYXRlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0luZGV4ICs9IHByb3BlcnR5RGF0ZVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50aW5nIHRoZSBzdGFydGluZ0luZGV4IHNvIG5leHQgdmFsdWUgd2lsbCBiZSBhIG5ldyBzbGljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VkVmFsdWUgPCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWluVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlZFZhbHVlID4gcHJvcGVydHlEYXRlTGltaXRhdGlvbk1heFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIC8vIElUIFNIT1VMRCBDT05UQUlOIGEgU1RSSU5HIGUuZy4gMDRzZXB0ZW1iZXIxOTk0XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZEYXRlVmFsdWVGaWVsZHNDb250YWluaW5nVHJ1ZSA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVySXNOdW1iZXIgPSBjaGVja0NoYXJhY3RlcklmTnVtYmVyKGZvcm1JbnB1dFZhbHVlW3N0YXJ0aW5nSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZVZhbHVlID0gcHJvcGVydHlEYXRlVmFsdWVBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cmluZ0xlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbGljZWRWYWx1ZTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihwcm9wZXJ0eURhdGVWYWx1ZSkgPT09IFwibnVtYmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaVwicyBtaWdodCBvbmx5IGNhdGNoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVySXNOdW1iZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcklzTnVtYmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NaW5WYWx1ZSA9IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheVtpXVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlEYXRlTGltaXRhdGlvbk1heFZhbHVlID0gcHJvcGVydHlEYXRlTGltaXRhdGlvbkFycmF5W2ldWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZWRWYWx1ZSA9IGZvcm1JbnB1dFZhbHVlLnNsaWNlKHN0YXJ0aW5nSW5kZXgsIHN0YXJ0aW5nSW5kZXggKyBwcm9wZXJ0eURhdGVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdJbmRleCArPSBwcm9wZXJ0eURhdGVWYWx1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZWRWYWx1ZSA8IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NaW5WYWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZWRWYWx1ZSA+IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5RGF0ZVZhbHVlID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcklzTnVtYmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gc3RhcnRpbmdJbmRleDsgeCA8IGZvcm1JbnB1dFZhbHVlTGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcklzTnVtYmVyID0gY2hlY2tDaGFyYWN0ZXJJZk51bWJlcihmb3JtSW5wdXRWYWx1ZVt4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJJc051bWJlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nTGVuZ3RoKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpbmdMZW5ndGggPj0gMjApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJJc051bWJlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0luZGV4ICs9IHN0cmluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0IG91dCBvZiBsb29wIGlmIGl0IGVuY291bnRlcnMgYSBudW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGZpZWxkIGluIHByb3BlcnR5IGRhdGUgdmFsdWUgY29udGFpbmluZyB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZEYXRlVmFsdWVGaWVsZHNDb250YWluaW5nVHJ1ZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJGb3JtUmlkZXIuanMgRVJST1IgOjo6IFByb3BlcnR5IHZhbHVlIG9mIGRhdGVGb3JtYXQgbW9yZSB0aGFuIGEgc2luZ2xlIHRydWUgdmFsdWUgbG9jYXRlZCBhdCB0aGUgcHJvcGVydHlEYXRlVmFsdWVBcnJheVsxXVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvL3doZW4gdGhlcmUgaXMgYSBzZXBhcmF0b3JcclxuICAgICAgICBpZiAocHJvcGVydHlEYXRlU2VwYXJhdG9yICE9PSBcIlwiICYmIGZvcm1JbnB1dFZhbHVlTGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZVNlcGFyYXRvclJlZ2V4ID0gbmV3IFJlZ0V4cChwcm9wZXJ0eURhdGVTZXBhcmF0b3IsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vbnVtYmVyIG9mIGRhdGUgc2VwYXJhdG9yIGluIGZvcm1JbnB1dFxyXG4gICAgICAgICAgICBsZXQgZGF0ZVNlcGFyYXRvck51bWJlckluRm9ybUlucHV0ID0gZGF0ZVNlcGFyYXRvckNvdW50ZXIoZm9ybUlucHV0VmFsdWUsIGRhdGVTZXBhcmF0b3JSZWdleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0ZVNlcGFyYXRvck51bWJlckluRm9ybUlucHV0ICE9PSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5TGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGVTZXBhcmF0b3JOdW1iZXJJbkZvcm1JbnB1dCA9PT0gcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtSW5wdXRWYWx1ZVNwbGl0ID0gZm9ybUlucHV0VmFsdWUuc3BsaXQocHJvcGVydHlEYXRlU2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlck9mTnVtYmVyc0luT25lU3BsaXQgPSBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlU3BsaXRbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0pID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZk51bWJlcnNJbk9uZVNwbGl0ICE9PSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRWYWx1ZVNwbGl0W2ldLmxlbmd0aCAhPT0gcHJvcGVydHlEYXRlVmFsdWVBcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWluVmFsdWUgPSBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXlbaV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlEYXRlTGltaXRhdGlvbk1heFZhbHVlID0gcHJvcGVydHlEYXRlTGltaXRhdGlvbkFycmF5W2ldWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtSW5wdXRWYWx1ZVNwbGl0W2ldIDwgcHJvcGVydHlEYXRlTGltaXRhdGlvbk1pblZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0VmFsdWVTcGxpdFtpXSA+IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJJc051bWJlciA9IGNoZWNrQ2hhcmFjdGVySWZOdW1iZXIoZm9ybUlucHV0VmFsdWVTcGxpdFtpXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmb3JtSW5wdXRWYWx1ZVNwbGl0W2ldLmxlbmd0aCA+IDEyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYXJhY3RlcklzTnVtYmVyID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=