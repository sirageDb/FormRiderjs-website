(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXREYXRlRm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0NBQWtDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxtQ0FBbUMsa0NBQWtDOztBQUVyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCwwQkFBMEI7O0FBRWpGOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGVja0lucHV0RGF0ZUZvcm1hdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUocHJvcGVydHlLZXlDYXBpdGFsaXplZCwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJvcGVydHlEYXRlVmFsdWVBcnJheSA9IHByb3BlcnR5VmFsdWVbMF07XHJcbiAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheSA9IHByb3BlcnR5VmFsdWVbMV07XHJcbiAgICAgICAgbGV0IHByb3BlcnR5RGF0ZVNlcGFyYXRvciA9IHByb3BlcnR5VmFsdWVbMl1bMF07XHJcbiAgICAgICAgbGV0IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGggPSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5Lmxlbmd0aDtcclxuICAgICAgICBsZXQgcHJvcGVydHlEYXRlTGltaXRhdGlvbkFycmF5TGVuZ3RoID0gcHJvcGVydHlEYXRlTGltaXRhdGlvbkFycmF5Lmxlbmd0aDtcclxuICAgICAgICBsZXQgZm9ybUlucHV0VmFsdWVMZW5ndGggPSBmb3JtSW5wdXRWYWx1ZS5sZW5ndGg7XHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBsZXQgZGF0ZVNlcGFyYXRvckNvdW50ZXIgPSBmdW5jdGlvbihzdHJpbmcsIHJlZ2V4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHN0cmluZy5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgbGV0IG51bWJlckNvdW50ZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXJhY3RlciBvZiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJBc051bWJlciA9IE51bWJlcihjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckFzTnVtYmVyICE9PSBjaGFyYWN0ZXJBc051bWJlciB8fCBjaGFyYWN0ZXIgPT09IFwiIFwiKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGxldCBzdW1PZk51bWJlcnNJblByb3BlcnR5RGF0ZVZhbHVlQXJyYXkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXJhY3Rlck51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0pID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyTnVtYmVyID0gY2hhcmFjdGVyTnVtYmVyICsgcHJvcGVydHlEYXRlVmFsdWVBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyTnVtYmVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgbGV0IG51bWJlck9mRGF0ZVZhbHVlRmllbGRDb250YWluaW5nTnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ051bWJlciA9IFtdO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkRhdGVWYWx1ZUZpZWxkc0NvbnRhaW5pbmdUcnVlID0gMDtcclxuICAgICAgICBsZXQgaW5kZXhPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ1RydWUgPSBbXTtcclxuXHJcblxyXG4gICAgICAgIC8vY2hlY2sgYWxsIGRhdGUgdmFsdWVzLCBpZiBpdCBpcyBhIG51bWJlciBvciB0cnVlLCB0aGVuIGluY3JlbWVudCB2YWx1ZXMgYWJvdmUgaGVyZSBeXHJcbiAgICAgICAgbGV0IGNoZWNrQWxsRGF0ZVZhbHVlQXJyYXlGaWVsZHNUeXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0pID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZEYXRlVmFsdWVGaWVsZENvbnRhaW5pbmdOdW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mRGF0ZVZhbHVlRmllbGRDb250YWluaW5nTnVtYmVyLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkRhdGVWYWx1ZUZpZWxkc0NvbnRhaW5pbmdUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ1RydWUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3IsIHdoZW4gIGl0IGlzIG5vciB0cnVlIG5vciBudW1iZXIgdHlwZVxyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0gIT09IHRydWUgJiYgdHlwZW9mKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0pICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRm9ybVJpZGVyLmpzIEVSUk9SIDogUHJvcGVydHkgdmFsdWUgb2YgZGF0ZUZvcm1hdCBjYW4gb25seSBjb250YWluIHZhbHVlcyB0eXBlIG9mIG51bWJlciBvciB0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVja0FsbERhdGVWYWx1ZUFycmF5RmllbGRzVHlwZSgpO1xyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vcmV0dXJuIHRydWUgaWYgYSBjaGFyYWN0ZXIgaXMgbnVtYmVyLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGNoZWNrQ2hhcmFjdGVySWZOdW1iZXIgPSBmdW5jdGlvbihjaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9IC9bMC05XS9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvL3JldHVybiB0cnVlIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHdoaXRlIHNwYWNlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGRvQ2hlY2tGb3JXaGl0ZVNwYWNlID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAvXFxzKy9nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vcmV0dXJuIHRydWUgaWYgYSBzdHJpbmcgY29udGFpbnMgc3BlY2lhbCBjaGFyYWN0ZXJzLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGRvVGVzdFN0cmluZ0ZvclNwZWNpYWxDaGFycyA9IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dL2c7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChzdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiAgICAgICAgbGV0IG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0VmFsdWUgPSBudW1iZXJDb3VudGVyKGZvcm1JbnB1dFZhbHVlKTtcclxuICAgICAgICBsZXQgdGVzdEZvclNwZWNpYWxDaGFycyA9IGRvVGVzdFN0cmluZ0ZvclNwZWNpYWxDaGFycyhmb3JtSW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgbGV0IG51bWJlck9mTnVtYmVyc0luUHJvcGVydHlEYXRlVmFsdWVBcnJheSA9IHN1bU9mTnVtYmVyc0luUHJvcGVydHlEYXRlVmFsdWVBcnJheSgpO1xyXG4gICAgICAgIGxldCBzdGFydGluZ0luZGV4ID0gMDtcclxuXHJcblxyXG4gICAgICAgIGlmIChjaGVja0NoYXJhY3RlcklmTnVtYmVyKGZvcm1JbnB1dFZhbHVlW2Zvcm1JbnB1dFZhbHVlTGVuZ3RoIC0gMV0pID09PSBmYWxzZSAmJiBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3doZW4gdGhlcmUgaXMgbm8gc2VwYXJhdG9yXHJcbiAgICAgICAgaWYgKHByb3BlcnR5RGF0ZVNlcGFyYXRvciA9PT0gXCJcIiAmJiBmb3JtSW5wdXRWYWx1ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLyogIEVSUk9SIENBU0VTIE1BTkFHRU1FTlRcclxuICAgICAgICAgICAgICAgIC1pZiB0aGUgaW5wdXQgaXMgbm90IG9ubHkgbnVtYmVycyBidXQgYnV0IEpTT04gc2FpZCB0aGUgaW5wdXQgc2hvdWxkIGJlIG9ubHkgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgLWlmIHRoZSBpbnB1dCBpcyBvbmx5IG51bWJlcnMgYnV0IEpTT04gc2FpZCBpdCBzaG91bGQgYmUgbnVtYmVycyBhbmQgY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgLWlmIHN1bSBvZiBudW1iZXJzIGluIEpTT04gaXMgbm90IGVxdWFsIHRvIG51bWJlciBvZiBudW1iZXJzIGluIGZvcm0gaW5wdXRcclxuICAgICAgICAgICAgICAgIC1pZiB0aGVyZSBpcyB3aGl0ZSBzcGFjZXMgaW4gdGhlIGlucHV0XHJcbiAgICAgICAgICAgICogKi9cclxuICAgICAgICAgICAgaWYgKCh0ZXN0Rm9yU3BlY2lhbENoYXJzID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAgICAgKChudW1iZXJPZk51bWJlcnNJbkZvcm1JbnB1dFZhbHVlICE9PSBmb3JtSW5wdXRWYWx1ZUxlbmd0aCAmJiBudW1iZXJPZkRhdGVWYWx1ZUZpZWxkQ29udGFpbmluZ051bWJlciA9PT0gcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aCkgJiYgKGZvcm1JbnB1dFZhbHVlTGVuZ3RoID4gMCkpIHx8XHJcbiAgICAgICAgICAgICAgICAoKG51bWJlck9mTnVtYmVyc0luRm9ybUlucHV0VmFsdWUgPT09IGZvcm1JbnB1dFZhbHVlTGVuZ3RoICYmIG51bWJlck9mRGF0ZVZhbHVlRmllbGRzQ29udGFpbmluZ1RydWUgPiAwKSAmJiAoZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSkgfHxcclxuICAgICAgICAgICAgICAgICgobnVtYmVyT2ZOdW1iZXJzSW5Gb3JtSW5wdXRWYWx1ZSAhPT0gbnVtYmVyT2ZOdW1iZXJzSW5Qcm9wZXJ0eURhdGVWYWx1ZUFycmF5KSAmJiAoZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSkgfHxcclxuICAgICAgICAgICAgICAgIGRvQ2hlY2tGb3JXaGl0ZVNwYWNlKGZvcm1JbnB1dFZhbHVlKSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2Fub3RoZXIgd2F5IG9mIHNheWluZyB0aGF0IEpTT04gd2FudHMgXCJJbnB1dCBzaG91bGQgY29udGFpbiBvbmx5IG51bWJlcnNcIlxyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mRGF0ZVZhbHVlRmllbGRDb250YWluaW5nTnVtYmVyID09PSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5TGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlEYXRlVmFsdWUgPSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NaW5WYWx1ZSA9IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheVtpXVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NYXhWYWx1ZSA9IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheVtpXVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbGljZWRWYWx1ZSA9IGZvcm1JbnB1dFZhbHVlLnNsaWNlKHN0YXJ0aW5nSW5kZXgsIHN0YXJ0aW5nSW5kZXggKyBwcm9wZXJ0eURhdGVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nSW5kZXggKz0gcHJvcGVydHlEYXRlVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnRpbmcgdGhlIHN0YXJ0aW5nSW5kZXggc28gbmV4dCB2YWx1ZSB3aWxsIGJlIGEgbmV3IHNsaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZWRWYWx1ZSA8IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NaW5WYWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VkVmFsdWUgPiBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWF4VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgLy8gSVQgU0hPVUxEIENPTlRBSU4gYSBTVFJJTkcgZS5nLiAwNHNlcHRlbWJlcjE5OTRcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkRhdGVWYWx1ZUZpZWxkc0NvbnRhaW5pbmdUcnVlID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlEYXRlVmFsdWVBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJJc051bWJlciA9IGNoZWNrQ2hhcmFjdGVySWZOdW1iZXIoZm9ybUlucHV0VmFsdWVbc3RhcnRpbmdJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlEYXRlVmFsdWUgPSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyaW5nTGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNsaWNlZFZhbHVlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKHByb3BlcnR5RGF0ZVZhbHVlKSA9PT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpXCJzIG1pZ2h0IG9ubHkgY2F0Y2ggdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJJc051bWJlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVySXNOdW1iZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlEYXRlTGltaXRhdGlvbk1pblZhbHVlID0gcHJvcGVydHlEYXRlTGltaXRhdGlvbkFycmF5W2ldWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWF4VmFsdWUgPSBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXlbaV1bMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlZFZhbHVlID0gZm9ybUlucHV0VmFsdWUuc2xpY2Uoc3RhcnRpbmdJbmRleCwgc3RhcnRpbmdJbmRleCArIHByb3BlcnR5RGF0ZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0luZGV4ICs9IHByb3BlcnR5RGF0ZVZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWNlZFZhbHVlIDwgcHJvcGVydHlEYXRlTGltaXRhdGlvbk1pblZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlZFZhbHVlID4gcHJvcGVydHlEYXRlTGltaXRhdGlvbk1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkucHVzaChmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlEYXRlVmFsdWUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVySXNOdW1iZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBzdGFydGluZ0luZGV4OyB4IDwgZm9ybUlucHV0VmFsdWVMZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVySXNOdW1iZXIgPSBjaGVja0NoYXJhY3RlcklmTnVtYmVyKGZvcm1JbnB1dFZhbHVlW3hdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcklzTnVtYmVyID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdMZW5ndGgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+PSAyMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlcklzTnVtYmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nSW5kZXggKz0gc3RyaW5nTGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXQgb3V0IG9mIGxvb3AgaWYgaXQgZW5jb3VudGVycyBhIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy93aGVuIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgZmllbGQgaW4gcHJvcGVydHkgZGF0ZSB2YWx1ZSBjb250YWluaW5nIHRydWVcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkRhdGVWYWx1ZUZpZWxkc0NvbnRhaW5pbmdUcnVlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkZvcm1SaWRlci5qcyBFUlJPUiA6OjogUHJvcGVydHkgdmFsdWUgb2YgZGF0ZUZvcm1hdCBtb3JlIHRoYW4gYSBzaW5nbGUgdHJ1ZSB2YWx1ZSBsb2NhdGVkIGF0IHRoZSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5WzFdXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vd2hlbiB0aGVyZSBpcyBhIHNlcGFyYXRvclxyXG4gICAgICAgIGlmIChwcm9wZXJ0eURhdGVTZXBhcmF0b3IgIT09IFwiXCIgJiYgZm9ybUlucHV0VmFsdWVMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlU2VwYXJhdG9yUmVnZXggPSBuZXcgUmVnRXhwKHByb3BlcnR5RGF0ZVNlcGFyYXRvciwgXCJnXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9udW1iZXIgb2YgZGF0ZSBzZXBhcmF0b3IgaW4gZm9ybUlucHV0XHJcbiAgICAgICAgICAgIGxldCBkYXRlU2VwYXJhdG9yTnVtYmVySW5Gb3JtSW5wdXQgPSBkYXRlU2VwYXJhdG9yQ291bnRlcihmb3JtSW5wdXRWYWx1ZSwgZGF0ZVNlcGFyYXRvclJlZ2V4KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRlU2VwYXJhdG9yTnVtYmVySW5Gb3JtSW5wdXQgIT09IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlMZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0ZVNlcGFyYXRvck51bWJlckluRm9ybUlucHV0ID09PSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5TGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1JbnB1dFZhbHVlU3BsaXQgPSBmb3JtSW5wdXRWYWx1ZS5zcGxpdChwcm9wZXJ0eURhdGVTZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyT2ZOdW1iZXJzSW5PbmVTcGxpdCA9IG51bWJlckNvdW50ZXIoZm9ybUlucHV0VmFsdWVTcGxpdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YocHJvcGVydHlEYXRlVmFsdWVBcnJheVtpXSkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlck9mTnVtYmVyc0luT25lU3BsaXQgIT09IHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dFZhbHVlU3BsaXRbaV0ubGVuZ3RoICE9PSBwcm9wZXJ0eURhdGVWYWx1ZUFycmF5W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25NaW5WYWx1ZSA9IHByb3BlcnR5RGF0ZUxpbWl0YXRpb25BcnJheVtpXVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWF4VmFsdWUgPSBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uQXJyYXlbaV1bMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dFZhbHVlU3BsaXRbaV0gPCBwcm9wZXJ0eURhdGVMaW1pdGF0aW9uTWluVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRWYWx1ZVNwbGl0W2ldID4gcHJvcGVydHlEYXRlTGltaXRhdGlvbk1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKGZvcm1JbnB1dE5hbWUsIHByb3BlcnR5RXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5RGF0ZVZhbHVlQXJyYXlbaV0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlcklzTnVtYmVyID0gY2hlY2tDaGFyYWN0ZXJJZk51bWJlcihmb3JtSW5wdXRWYWx1ZVNwbGl0W2ldKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZvcm1JbnB1dFZhbHVlU3BsaXRbaV0ubGVuZ3RoID4gMTIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhcmFjdGVySXNOdW1iZXIgPT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LnB1c2goZm9ybUlucHV0TmFtZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==