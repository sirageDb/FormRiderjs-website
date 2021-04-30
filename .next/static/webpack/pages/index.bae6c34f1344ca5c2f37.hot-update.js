webpackHotUpdate_N_E("pages/index",{

/***/ "./formRiderJsonConfig.json":
/*!**********************************!*\
  !*** ./formRiderJsonConfig.json ***!
  \**********************************/
/*! exports provided: notifications, elementsToApplyValidationOn, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"notifications\":[{\"notificationCode\":1,\"text\":\"notification 1\",\"textColor\":\"#ffffff\",\"backgroundColor\":\"#E56C6C\"},{\"notificationCode\":2,\"text\":\"notification 2\",\"textColor\":\"#ffffff\",\"backgroundColor\":\"#50CF96\"}],\"elementsToApplyValidationOn\":{\"example1\":{\"notificationCode\":{\"validated\":2,\"notValidated\":1},\"resetFormUponSubmit\":false,\"inputNameToValidate\":{\"username\":{\"required\":[true,\"A username is required\"]},\"password\":{\"required\":[true,\"A Passwird is required\"]}}}}}");

/***/ }),

/***/ "./node_modules/formriderjs/customError.js":
/*!*************************************************!*\
  !*** ./node_modules/formriderjs/customError.js ***!
  \*************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
class CustomError extends Error{
    constructor(errorName, message) {
        super(message);
        this.name = errorName;
    }


    static yup(){
        throw new CustomError("FormRider.js ERROR", "Property value of dateFormat more that a single true value located at the propertyDateValueArray[1] ");
    }
}

/***/ }),

/***/ "./node_modules/formriderjs/index.js":
/*!*******************************************!*\
  !*** ./node_modules/formriderjs/index.js ***!
  \*******************************************/
/*! exports provided: FormRiderjs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRiderjs", function() { return FormRiderjs; });
/* harmony import */ var _processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processor.js */ "./node_modules/formriderjs/processor.js");


class FormRiderjs {
    //===================================================================================================

    constructor() {
        console.log("FormRider.js loaded successfully, thank you for using it, Happy validating ❤️ ");
        // let jsonConfig = require("./formRiderJsonConfig.json");
        let jsonConfig = __webpack_require__(/*! ../../formRiderJsonConfig.json */ "./formRiderJsonConfig.json");
        new _processor_js__WEBPACK_IMPORTED_MODULE_0__["Processor"](jsonConfig);
    }

    static setValidationStatus(status) {
        if (status === true) {
            this.validationStatus = true;
        }
        if (status === false) {
            this.validationStatus = false;
        }
    }


    static getValidationStatus() {
        return this.validationStatus;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (FormRiderjs);



/***/ }),

/***/ "./node_modules/formriderjs/inputValidation.js":
/*!*****************************************************!*\
  !*** ./node_modules/formriderjs/inputValidation.js ***!
  \*****************************************************/
/*! exports provided: InputValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidation", function() { return InputValidation; });
/* harmony import */ var _customError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customError.js */ "./node_modules/formriderjs/customError.js");


class InputValidation {
    constructor(frFormNameToProcess, formData, formRiderConfigs) {
        /*this array is accessible from all methods. whenever an error occurred, it
                    will be pushed to this array and passed to notificationGenerator after  */
        this.inputValidationRecap = [];
        this.validationErrorArray = [];

        //validated is always set to true, but will be set to false in case there is an error when calling a validator/importing it e.g when there is an error and the validator does not exist for example
        this.validated = true;

        this.resetFormUponSubmitValue = false;

        //for every formInputName, store the inCommonStatus, like true,false,true,true etc..
        this.hasInCommon = [];
        //always set to false, changes to true only when there is a inCommon => so purifyErrorValidation could be called
        this.doesHasInCommon = false;

        //put every validated "propertyValue" here, knowing that property values are replaced by the data-name in json configs and the inCommon value
        this.validatedInCommonGroup = [];

        //extracting the elementsToApplyValidationOn from json file and passing it to the next then
        let elementToApplyValidationOn = this.extractJsonElementToApplyValidationOn(
            formRiderConfigs,
            frFormNameToProcess
        );
        this.jsonInputNameToValidate = elementToApplyValidationOn.inputNameToValidate;

        this.resetFormUponSubmitValue = elementToApplyValidationOn.resetFormUponSubmit;
        this.extractNotificationCode(elementToApplyValidationOn);

        //get the inCommonCorrespondence arrays located in the json file
        this.inCommonCorrespondence = elementToApplyValidationOn.inCommonCorrespondence;

        //==================================================================
        //array of arrays where in every array : key is the input and value is the inputs value
        let formKeyValueOfInputValue = [];
        for (let i = 0; i < formData.length; i++) {
            //splitting because "=" was added in getFormDataToKeyValueArray function in processor class in order to encode the form data
            formKeyValueOfInputValue.push(formData[i].split("="));
        }
        //==================================================================

        //only get inputNameToValidate from json configs
        let jsonInputNameToValidateKeys = Object.keys(elementToApplyValidationOn["inputNameToValidate"]);

        for (let i = 0; i < formKeyValueOfInputValue.length; i++) {
            let formInputName = formKeyValueOfInputValue[i][0]; //data-name
            let formInputValue = formKeyValueOfInputValue[i][1]; //data-value
            let jsonInputNameToValidateKey = jsonInputNameToValidateKeys[i]; //indicated inputNameToValidate in json configs

            //Throw an error when formInputName in HTML is not defined in formRiderJsonConfigs
            if (formInputName !== jsonInputNameToValidateKey) {
                if (jsonInputNameToValidateKey === undefined) {
                    throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "Unknown data-name" + ' "' + formInputName + '" ' + "not declared in formRiderJsonConfig");
                }
                throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "Unknown data-name" + ' "' + jsonInputNameToValidateKey + '" ' + "in formRiderJsonConfig ");
            }

            //propertyKey will give us only the function in string format
            for (let propertyKey in this.jsonInputNameToValidate[formInputName]) {
                //wantedFunctionValues will give us propertyKey values in an object format !
                let wantedFunctionValues = this.jsonInputNameToValidate[formInputName][propertyKey];
                let propertyValue = wantedFunctionValues[0];
                let propertyErrorText = wantedFunctionValues[1];

                //======================================================================================
                //get all inCommon from json file => put it in a inCommon array => replace propertyValue by inCommon => send this value  to the concerned function
                let hasOwnPropertyInCommon = propertyValue.hasOwnProperty("inCommon");

                //for every formInputName in json configs check if it has an inCommon, if it does then set doesHasInCommon to true and tell there is an inCommon here
                if (hasOwnPropertyInCommon) {
                    //when there is an inCommon, replace property value by an array of formInputName and the inCommon value
                    propertyValue = [formInputName, propertyValue.inCommon];
                    this.hasInCommon.push(true);
                    this.doesHasInCommon = true;
                }

                if (!hasOwnPropertyInCommon) {
                    this.hasInCommon.push(false);
                }
                //======================================================================================

                this.callFunction(
                    this.hasInCommon, propertyKey, propertyValue, formInputName, formInputValue, propertyErrorText);
            }
        }


        //when there is an inCommon => purify error array, otherwise do the normal procedure
        window.setTimeout(() => {
            //when there is an inCommon => purify error array, otherwise do the normal procedure
            if (this.doesHasInCommon === true) {
                let purifiedValidationErrorArray = this.purifyValidationErrorArray(this.validationErrorArray, this.validatedInCommonGroup, this.inCommonCorrespondence);
                this.inputValidationRecap.push(purifiedValidationErrorArray);
            }
            if (this.doesHasInCommon === false) {
                this.inputValidationRecap.push(this.validationErrorArray);
            }
            this.resetFormUponSubmit(frFormNameToProcess, this.resetFormUponSubmitValue, this.validationErrorArray);
            return this;
        }, 100);
    }

    //==============================================================================
    // this function will call other functions starting with "checkInput" prefix
    callFunction(hasInCommon, propertyKey, propertyValue, formInputName, formInputValue, propertyErrorText) {
        //only detecting the last element because we are getting an array and the last element of it is the element we want to check
        let lastElementInHasInCommon = hasInCommon.slice(-1)[0];

        //Capitalize first letter of the property key
        let propertyKeyCapitalized =
            propertyKey.charAt(0).toUpperCase() + propertyKey.slice(1);

        __webpack_require__("./node_modules/formriderjs/src/validators lazy recursive ^\\.\\/checkInput.*\\.js$")("./checkInput" + propertyKeyCapitalized + ".js")
        .then((validator) => {
            let usedValidation = new validator[
                "CheckInput" + propertyKeyCapitalized
            ]();
            //if the element has an inCommon then launch the validateInCommon function
            if (lastElementInHasInCommon === true) {
                usedValidation.validateInCommon(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText);

                //when validated push into validatedInCommonGroup array
                if (usedValidation.inCommonValidatedStatus === true) {
                    this.validatedInCommonGroup.push(propertyValue);
                }
            }

            //when the element does not have an inCommon then launch the normal validate function
            if (lastElementInHasInCommon === false) {
                usedValidation.validate(propertyKeyCapitalized, propertyValue, formInputName, formInputValue, propertyErrorText);
            }

            let usedValidationErrorArray = usedValidation.validationErrorArray;
            //push into errors array only when usedValidationErrorArray is not empty
            if (usedValidationErrorArray.length !== 0) {
                this.validationErrorArray.push(usedValidationErrorArray);
            }
        })

        .catch((error) => {
            this.validated = false;
            throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "Unknown validator property '" + propertyKey + "' in formRiderJsonConfig ");
        });
    }

    //==============================================================================

    purifyValidationErrorArray(
        validationErrorArray,
        validatedInCommonGroup,
        inCommonCorrespondence
    ) {
        //for every input, the inCommon name will be put in [0], the sum of givenPoints will be put in [1], in [2] false will be replace by true if the inCommon is validated otherwise it well be kept false
        let sumValidatedInCommonPointsGiven = [
            [undefined, 0, false]
        ];

        //index in sumValidatedInCommonPointsGiven to be filled, this value will be incremented every time the validatedInCommonName of a validatedInCommonGroup is not equal to the validatedInCommonName of the next validatedInCommonGroup
        let indexToBeFilled = 0;

        for (let i = 0; i < validatedInCommonGroup.length; i++) {
            let validatedInCommonName = validatedInCommonGroup[i][1].name;
            let inCommonPointsGiven = validatedInCommonGroup[i][1].pointsGiven;
            let validatedInCommonNextName;
            if (i !== validatedInCommonGroup.length) {
                if (validatedInCommonGroup[i + 1] !== undefined) {
                    validatedInCommonNextName = validatedInCommonGroup[i + 1][1].name;

                    if (validatedInCommonName === validatedInCommonNextName) {
                        sumValidatedInCommonPointsGiven[indexToBeFilled][0] = validatedInCommonName;
                        sumValidatedInCommonPointsGiven[indexToBeFilled][1] += inCommonPointsGiven;
                    }
                    if (validatedInCommonName !== validatedInCommonNextName) {
                        sumValidatedInCommonPointsGiven[indexToBeFilled][0] = validatedInCommonName;
                        sumValidatedInCommonPointsGiven[indexToBeFilled][1] += inCommonPointsGiven;
                        let array = [undefined, 0, false];
                        sumValidatedInCommonPointsGiven.push(array);
                        indexToBeFilled++;
                    }
                }

                if (validatedInCommonGroup[i + 1] === undefined) {
                    sumValidatedInCommonPointsGiven[indexToBeFilled][0] = validatedInCommonName;
                    sumValidatedInCommonPointsGiven[indexToBeFilled][1] += inCommonPointsGiven;
                }
            }
        }

        let inCommonCorrespondenceLength = inCommonCorrespondence.length;
        let declaredInCommonNameCounter = 0; //used for testing
        let inCommonNameCounter = 0; //used for testing

        for (let j = 0; j < inCommonCorrespondenceLength; j++) {
            for (let i = 0; i < sumValidatedInCommonPointsGiven.length; i++) {
                if (inCommonCorrespondence[j].name === sumValidatedInCommonPointsGiven[i][0]) {
                    if (
                        inCommonCorrespondence[j].neededPointsToValidate === sumValidatedInCommonPointsGiven[i][1]) {
                        sumValidatedInCommonPointsGiven[i][2] = true;
                    }
                    if (
                        inCommonCorrespondence[j].neededPointsToValidate !== sumValidatedInCommonPointsGiven[i][1]) {
                        sumValidatedInCommonPointsGiven[i][2] = false;
                    }
                    //incrementation used for testing
                    declaredInCommonNameCounter++;
                }
                //incrementation used for testing
                inCommonNameCounter++;
            }
        }

        //TESTING ======================================================================================================
        /*
         * Testing if inCommon name is not defined, test only working when the checkbox is clicked, how it works ?
         * declaredInCommonNameCounter : incremented every time the inCommon name is declared
         * inCommonNameCounter : incremented every time, whether it is declared or not.
         * */
        if (inCommonNameCounter / declaredInCommonNameCounter === Infinity && sumValidatedInCommonPointsGiven[0][0] !== undefined) {
            throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "an inCommon name was not defined in inCommon correspondence");
        }
        if (inCommonNameCounter / declaredInCommonNameCounter !== Infinity) {
            if (
                declaredInCommonNameCounter * inCommonCorrespondenceLength !== inCommonNameCounter) {
                throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "an inCommon name was not defined in inCommon correspondence");
            }
        }
        //==============================================================================================================

        for (let i = 0; i < sumValidatedInCommonPointsGiven.length; i++) {
            if (sumValidatedInCommonPointsGiven[i][2] === true) {
                for (let j = 0; j < validationErrorArray.length; j++) {
                    if (
                        validationErrorArray[j][0][1].name ===
                        sumValidatedInCommonPointsGiven[i][0]
                    ) {
                        validationErrorArray.splice(j, 1);
                        j--;
                    }
                }
            }
        }

        return validationErrorArray;
    }

    //extract the elementsToApplyValidationOn depending on form id, so frFormNameToProcess should be the same as the formId in json file
    extractJsonElementToApplyValidationOn(jsonData, frFormNameToProcess) {
        return jsonData["elementsToApplyValidationOn"][frFormNameToProcess];
    }

    //returning notification Code from json File
    extractNotificationCode(jsonData) {
            this.inputValidationRecap.push(jsonData["notificationCode"]);
        }
        //==============================================================================

    //resetting form upon submit
    resetFormUponSubmit(frFormNameToProcess, resetFormUponSubmitValue, errorArray) {
        if (resetFormUponSubmitValue === true && errorArray.length === 0) {
            document.querySelector("[data-otfForm = " + frFormNameToProcess + "]").reset();
        }
    }
}

/***/ }),

/***/ "./node_modules/formriderjs/notificationGenerator.js":
/*!***********************************************************!*\
  !*** ./node_modules/formriderjs/notificationGenerator.js ***!
  \***********************************************************/
/*! exports provided: NotificationGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationGenerator", function() { return NotificationGenerator; });
/* harmony import */ var _customError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customError.js */ "./node_modules/formriderjs/customError.js");
/* harmony import */ var _src_uiNotification_uiNotification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/uiNotification/uiNotification.js */ "./node_modules/formriderjs/src/uiNotification/uiNotification.js");





class NotificationGenerator {
    constructor(inputValidationRecap, formRiderConfigs) {

        this.notificationText = "";
        this.notificationTextColor = "";
        this.notificationBackgroundColor = "";


        let inputValidationErrorArray = inputValidationRecap[1];
        let inputValidationErrorLength = inputValidationErrorArray.length;

        //terminate process and show uncaught error, anyway...this will happen only if there is previous errors it is done to prevent unnecessary errors to be shown
        if (inputValidationErrorArray === undefined) {
            throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "Uncaught error");
        }


        let formNotificationCode = this.extractFormNotificationCode(inputValidationRecap[0], inputValidationErrorLength);
        this.notificationAssembler(formRiderConfigs.notifications, formNotificationCode, inputValidationErrorArray);


        let activationStatus = NotificationGenerator.getActivationStatus();

        if (activationStatus === true) {

            let notification = NotificationGenerator.getNotification();
            _src_uiNotification_uiNotification_js__WEBPACK_IMPORTED_MODULE_1__["UINotification"].closePrecedentNotifications(notification);
            NotificationGenerator.setActivationStatus(false);
        }


        let notification = new _src_uiNotification_uiNotification_js__WEBPACK_IMPORTED_MODULE_1__["UINotification"](inputValidationErrorArray, this.notificationText, this.notificationTextColor, this.notificationBackgroundColor);

        NotificationGenerator.setNotification(notification);
        NotificationGenerator.setActivationStatus(true);

    }



    //==================================================================================================================

    static setNotification(notification) {
        this.notification = notification.notification;
    }

    static getNotification() {
        return this.notification;
    }

    static setActivationStatus(newStatus) {
        if (newStatus === false) {
            this.activationStatus = false;
        }
        if (newStatus === true) {
            this.activationStatus = true;
        }
    }
    static getActivationStatus() {
            return this.activationStatus;
        }
        //==================================================================================================================



    notificationAssembler(jsonNotifications, formNotificationCode) {

        let notificationCodeIsFound = false;

        for (let i = 0; i < jsonNotifications.length; i++) {
            if (jsonNotifications[i].notificationCode === formNotificationCode) {
                this.notificationText = jsonNotifications[i]["text"];
                this.notificationTextColor = jsonNotifications[i]["textColor"];
                this.notificationBackgroundColor = jsonNotifications[i]["backgroundColor"];
                notificationCodeIsFound = true;
            }
        }

        if (notificationCodeIsFound === false) {
            throw new _customError_js__WEBPACK_IMPORTED_MODULE_0__["CustomError"]("FormRider.js ERROR", "Notification code is not defined in notifications");
        }
    }


    extractFormNotificationCode(notificationCodeObject, inputValidationErrorLength) {
        if (inputValidationErrorLength !== 0) {
            return notificationCodeObject["notValidated"];
        } else {
            return notificationCodeObject["validated"];
        }
    }

}

/***/ }),

/***/ "./node_modules/formriderjs/processor.js":
/*!***********************************************!*\
  !*** ./node_modules/formriderjs/processor.js ***!
  \***********************************************/
/*! exports provided: Processor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Processor", function() { return Processor; });
/* harmony import */ var _inputValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputValidation.js */ "./node_modules/formriderjs/inputValidation.js");
/* harmony import */ var _notificationGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationGenerator.js */ "./node_modules/formriderjs/notificationGenerator.js");
/* harmony import */ var _customError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customError.js */ "./node_modules/formriderjs/customError.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./node_modules/formriderjs/index.js");
// this class will get formData, process data, call other necessary class





class Processor {
  constructor(formRiderConfigs) {
    let elementsToApplyValidationOn =
      formRiderConfigs["elementsToApplyValidationOn"];

    let frForms = document.querySelectorAll("[data-frform]");

    /*      1- detect all frForms in the page
                2- check if the data-frform is declared in the jsonConfigs file
                3- if it is declared call the processing function otherwise show an error*/
    frForms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        let frFormNameToProcess =
          event.currentTarget.attributes["data-frform"].nodeValue;
        if (elementsToApplyValidationOn.hasOwnProperty(frFormNameToProcess)) {
          this.processing(form, frFormNameToProcess, formRiderConfigs);
        }
        //Throw an error when the custom form name does not exist in json configs
        if (!elementsToApplyValidationOn.hasOwnProperty(frFormNameToProcess)) {
          throw new _customError_js__WEBPACK_IMPORTED_MODULE_2__["CustomError"](
            "FormRider.js ERROR",
            "Unknown data-frform" +
            ' "' +
            frFormNameToProcess +
            '"' +
            ", was not declared in formRiderJsonConfig"
          );
        }
      });
    });
  }

  /*  1- Block the submit while validating
        2- Block the DOM using setTimeout while validating
        3- when validation is done => show error notification / show confirmation notification + unblock the DOM + submit
        */
  processing(frForm, frFormNameToProcess, formRiderConfigs) {
    //when there is no "action" replace by the other value. this is typically used in npm evironments where no "action" is needed
    let postURL = this.getFormAction(frForm) || "npmFormAction";
    //when there is no "method" replace by the other value. this is typically used in npm evironments where no "method" is needed
    let requestMethod = this.getFormRequestMethod(frForm) || "npmRequestMethod";
    let formDataEncoded = this.getFormDataToKeyValueArrayEncodedURL(frForm);
    let formData = this.getFormDataToKeyValue(frForm);
    let dataToSubmit = formDataEncoded.join("&");

    //create a new instance of InputValidation in order to validate the input
    let _this = this;
    let inputValidation = new _inputValidation_js__WEBPACK_IMPORTED_MODULE_0__["InputValidation"](
      frFormNameToProcess,
      formData,
      formRiderConfigs
    );

    let timer = setTimeout(function () {
      if (inputValidation.validated) {
        //check if the error array is empty or not, if it is empty then submit data and then show the notification, if not then do noting and only show the notification

        try {
          if (inputValidation.inputValidationRecap[1].length === 0) {

            if (requestMethod !== "npmRequestMethod" && postURL !== "npmFormAction") {
              _this.sendData(requestMethod, postURL, dataToSubmit);
            }
            _index_js__WEBPACK_IMPORTED_MODULE_3__["FormRiderjs"].setValidationStatus(true);
          }
          if (inputValidation.inputValidationRecap[1].length !== 0) {
            _index_js__WEBPACK_IMPORTED_MODULE_3__["FormRiderjs"].setValidationStatus(false);
          }
        } catch (error) {
          throw new _customError_js__WEBPACK_IMPORTED_MODULE_2__["CustomError"](
            "FormRider.js ERROR",
            "Process stopped, an error has occurred"
          );
        }
        new _notificationGenerator_js__WEBPACK_IMPORTED_MODULE_1__["NotificationGenerator"](
          inputValidation.inputValidationRecap,
          formRiderConfigs
        );
      }
      clearTimeout(timer);
    }, 100);
  }

  //get all form inputs and values as key value into an array
  getFormDataToKeyValueArrayEncodedURL(form) {
    let formDataEncoded = [];
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
      formDataEncoded.push(
        encodeURIComponent(element.name) +
        "=" +
        encodeURIComponent(element.value)
      );
    }
    return formDataEncoded;
  }

  //convert form data to array of key value, key is inputName, value is input value
  getFormDataToKeyValue(form) {
    let formData = [];
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];

      //HTML custom attribute
      let elementName = element.getAttribute("data-name");
      let elementValue = element.value;
      if (elementName !== null) {
        //anticipate checkbox validation
        if (element.type === "checkbox") {
          if (element.checked === false) {
            elementValue = "frCheckBoxNoValue";
          }
        }

        //anticipate radio validation
        if (element.type === "radio") {
          if (element.checked === false) {
            elementValue = "frRadioNoValue";
          }
        }

        formData.push(elementName + "=" + elementValue);
      }
    }
    return formData;
  }

  /*     //get the form ID
    getFormId(element) {
        return element.getAttribute("id");
    } */

  //getting the action attribute from a form
  getFormAction(element) {
    return element.getAttribute("action");
  }

  //getting the method attribute from a form
  getFormRequestMethod(element) {
    return element.getAttribute("method");
  }

  //sending data with an ajax request
  sendData(requestMethod, postURL, dataToSubmit) {
    //when it is not in used as an npm module then submit form, because otherwise the form will be submit as a fetch api
    let request = new XMLHttpRequest();
    request.open(requestMethod, postURL, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send(dataToSubmit);
  }
}
// module.exports.Processor = new Processor;


/***/ }),

/***/ "./node_modules/formriderjs/src/uiNotification/uiNotification.js":
/*!***********************************************************************!*\
  !*** ./node_modules/formriderjs/src/uiNotification/uiNotification.js ***!
  \***********************************************************************/
/*! exports provided: UINotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINotification", function() { return UINotification; });
/* harmony import */ var _notificationGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notificationGenerator.js */ "./node_modules/formriderjs/notificationGenerator.js");



class UINotification {


    constructor(inputValidationErrorArray, notificationText, notificationTextColor, notificationBackgroundColor) {

        this.notificationBox = this.createNotificationBox(notificationBackgroundColor);
        this.errorBox = this.createErrorBox();
        let closeBoxButton = this.createCloseBoxButton(notificationTextColor);
        this.notificationContent = this.createNotificationContent(notificationTextColor, notificationText);


        this.notificationContent.appendChild(closeBoxButton);
        this.notificationBox.appendChild(this.notificationContent);

        this.createNotification(inputValidationErrorArray);

        this.notification = this.uiShowNotification(this.notificationBox);


        //=========================================================================================
        //In case you want to modify uiNotification.js, keep these two methods, they are both connected to notificationGenerator.js
        //=========================================================================================
        //notification will be closed automatocally only when there is no errors
        this.closeNotificationAutomatically(this.notification, inputValidationErrorArray, 10000);
        //notification can ve closed manually when there is errors or no errors
        this.closeNotificationManually(this.notification, closeBoxButton);
        //=========================================================================================
    }

    //=========================================================================================
    //In case you want to modify uiNotification.js, keep the functionality of this method.
    //=========================================================================================
    static closePrecedentNotifications(notification) {
            notification.parentNode.removeChild(notification);
        }
        //=========================================================================================

    createNotificationBox(notificationBackgroundColor) {

        let uiNotificationBox = document.createElement("div");

        uiNotificationBox.style.position = "fixed";
        uiNotificationBox.style.zIndex = "1000";
        uiNotificationBox.style.left = "0";
        uiNotificationBox.style.top = "0";
        uiNotificationBox.style.width = "100%";
        uiNotificationBox.style.margin = "auto";
        uiNotificationBox.style.padding = "17px";
        uiNotificationBox.style.textAlign = "";
        uiNotificationBox.style.fontSize = "16px";
        uiNotificationBox.style.fontWeight = "bold";
        uiNotificationBox.style.backgroundColor = notificationBackgroundColor;

        return uiNotificationBox;
    }

    createErrorBox() {
        let uiErrorBox = document.createElement("div");

        uiErrorBox.style.marginTop = "10px";
        uiErrorBox.style.fontWeight = "normal";

        return uiErrorBox;
    }

    createCloseBoxButton(notificationTextColor) {

        let uiCloseBoxButton = document.createElement("span");
        uiCloseBoxButton.innerHTML = "close Notification";
        uiCloseBoxButton.style.marginLeft = "5px";
        uiCloseBoxButton.style.cursor = "pointer";
        uiCloseBoxButton.style.color = notificationTextColor
        uiCloseBoxButton.style.borderBottom = "solid 2px" + notificationTextColor;
        return uiCloseBoxButton;
    }

    createNotificationContent(notificationTextColor, notificationText) {
        let uiNotificationContent = document.createElement("div");
        uiNotificationContent.style.color = notificationTextColor;
        uiNotificationContent.innerHTML = notificationText;

        return uiNotificationContent;
    }

    createSingleLineError(errorLine) {
        let uiErrorLine = document.createElement("div");
        uiErrorLine.innerHTML = "<span style='line-height: 125%'>&#8226;</span> " + errorLine;

        return uiErrorLine
    }


    createNotification(inputValidationErrorArray) {

        for (let i = 0; i < inputValidationErrorArray.length; i++) {
            this.errorBox.append(this.createSingleLineError(inputValidationErrorArray[i][1]));
        }
        if (inputValidationErrorArray.length !== 0) {
            this.notificationContent.appendChild(this.errorBox);
        }

    }

    uiShowNotification(notification) {
        return document.body.appendChild(notification);
    }


    closeNotificationAutomatically(notification, inputValidationErrorArray, delayBeforeClosing) {
        //Close notification automatically only when there is no errors
        if (inputValidationErrorArray.length === 0) {
            setTimeout(() => {
                //if notification is already closed then do nothing
                if (notification.parentNode !== null) {
                    notification.parentNode.removeChild(notification);
                    _notificationGenerator_js__WEBPACK_IMPORTED_MODULE_0__["NotificationGenerator"].setActivationStatus(false);
                }
            }, delayBeforeClosing);
        }

    }

    closeNotificationManually(notification, closeBoxButton) {
        closeBoxButton.addEventListener("click", (e) => {
            notification.parentNode.removeChild(notification);
            _notificationGenerator_js__WEBPACK_IMPORTED_MODULE_0__["NotificationGenerator"].setActivationStatus(false);
        });
    }
}

/***/ }),

/***/ "./node_modules/formriderjs/src/validators lazy recursive ^\\.\\/checkInput.*\\.js$":
/*!**********************************************************************************************!*\
  !*** ./node_modules/formriderjs/src/validators lazy ^\.\/checkInput.*\.js$ namespace object ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./checkInputCheckboxRequired.js": [
		"./node_modules/formriderjs/src/validators/checkInputCheckboxRequired.js",
		1
	],
	"./checkInputContainCapitalLetters.js": [
		"./node_modules/formriderjs/src/validators/checkInputContainCapitalLetters.js",
		2
	],
	"./checkInputContainNumber.js": [
		"./node_modules/formriderjs/src/validators/checkInputContainNumber.js",
		3
	],
	"./checkInputContainSmallLetters.js": [
		"./node_modules/formriderjs/src/validators/checkInputContainSmallLetters.js",
		4
	],
	"./checkInputContainSpecialCharacters.js": [
		"./node_modules/formriderjs/src/validators/checkInputContainSpecialCharacters.js",
		5
	],
	"./checkInputContainWhiteSpace.js": [
		"./node_modules/formriderjs/src/validators/checkInputContainWhiteSpace.js",
		6
	],
	"./checkInputDateFormat.js": [
		"./node_modules/formriderjs/src/validators/checkInputDateFormat.js",
		7
	],
	"./checkInputEmail.js": [
		"./node_modules/formriderjs/src/validators/checkInputEmail.js",
		8
	],
	"./checkInputMaxLength.js": [
		"./node_modules/formriderjs/src/validators/checkInputMaxLength.js",
		9
	],
	"./checkInputMinLength.js": [
		"./node_modules/formriderjs/src/validators/checkInputMinLength.js",
		10
	],
	"./checkInputNumberBiggerThan.js": [
		"./node_modules/formriderjs/src/validators/checkInputNumberBiggerThan.js",
		11
	],
	"./checkInputNumberSmallerThan.js": [
		"./node_modules/formriderjs/src/validators/checkInputNumberSmallerThan.js",
		12
	],
	"./checkInputRadioRequired.js": [
		"./node_modules/formriderjs/src/validators/checkInputRadioRequired.js",
		13
	],
	"./checkInputRegexTest.js": [
		"./node_modules/formriderjs/src/validators/checkInputRegexTest.js",
		14
	],
	"./checkInputRequired.js": [
		"./node_modules/formriderjs/src/validators/checkInputRequired.js",
		15
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/formriderjs/src/validators lazy recursive ^\\.\\/checkInput.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layoutStandard_LayoutStandard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layoutStandard/LayoutStandard */ "./components/layoutStandard/LayoutStandard.js");
/* harmony import */ var _components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/singleWhy/SingleWhy */ "./components/singleWhy/SingleWhy.js");
/* harmony import */ var _components_example1Form_Example1Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/example1Form/Example1Form */ "./components/example1Form/Example1Form.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formriderjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formriderjs */ "./node_modules/formriderjs/index.js");

var _jsxFileName = "C:\\Me\\Amigos\\formriderjs\\FormRiderjs-website\\pages\\index.js";






function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBanner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/brand.png",
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerBrand,
            alt: "From Rider logo home page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerText,
              children: "FormRider.js"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerText,
              children: "A Javascript form validation plugin, based on JSON"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerButtonsContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/docs/introduction",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerButton + " " + _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.gettingStartedButton,
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 52
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/FormRiderjs.zip",
              download: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topBannerButton + " " + _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.downloadButton,
                children: "Download"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 55
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                color: "#ffffff"
              },
              children: "or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 144
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.npmInstall,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  color: "#FFAF26"
                },
                children: "$"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 224
              }, this), " npm -i formriderjs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 188
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layoutStandard_LayoutStandard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.whyUsingTitle,
        children: "Why using FormRirder.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.whyRowContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "Automatic Code Loading",
          explanation: "Only necessary validators are loaded, resulting in a fast loading time.",
          reasonBarColor: "#4568DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "No Coding",
          explanation: "No code typing other than adding HTML attributes and editing a JSON document.",
          reasonBarColor: "#FFCB26"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "No dependencies",
          explanation: "Since Form Rider is coded using vanilla javascript, you won't worry about other dependecies.",
          reasonBarColor: "#50CF96"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.whyRowContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "Maintained & Documented",
          explanation: "Form Rider documentation is constantly scanned and the library is continuously updated for better performance",
          reasonBarColor: "#FF512F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "Open Source",
          explanation: "Join the Discord channel, give new ideas or code it your self, feel free to add new notification designs to the library ! :)",
          reasonBarColor: "#4D4D4D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_singleWhy_SingleWhy__WEBPACK_IMPORTED_MODULE_3__["default"], {
          reason: "Automatic Code Loading",
          explanation: "Form Rider size is only 193kb.",
          reasonBarColor: "#E56C6C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1Container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1LeftContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1LeftContainerTitle,
            children: "Don't go into boring coding."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["Form Rider has many validation functionalities, starting from basic validators such as ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/docs/required",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1LeftContainerLink,
                children: "\"required\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 70
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 40
            }, this), " till \"regex\" and ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/docs/conditionalRequired",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1LeftContainerLink,
                children: "conditional validators"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 204
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 163
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1Form,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_example1Form_Example1Form__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1RightContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1TextAreaContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example1TextArea,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.code,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 62
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"notifications\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 22
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: ["[", "{"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 83
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 133
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"notificationCode\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 88
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 143
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"text\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"Cannot subscribe, error with some inputs\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 76
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 169
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"textColor\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"#ffffff\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 81
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 141
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"backgroundColor\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"#E56C6C\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 87
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 146
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 22
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 72
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 22
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 71
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"notificationCode\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 88
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 143
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"text\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"Thank you for subscribing !\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 76
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 156
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"textColor\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"#ffffff\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 81
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 141
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"backgroundColor\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"#50CF96\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 87
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 146
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 22
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 72
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"elementsToApplyValidationOn\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 22
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 97
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 146
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"signupTest\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 24
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 82
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 131
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 13
                }, this), "      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"notificationCode\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 26
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 90
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 139
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"validated\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 28
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 85
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 140
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"notValidated\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 28
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 88
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 142
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 13
                }, this), "      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 26
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 76
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 13
                }, this), "      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"resetFormUponSubmit\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 26
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 93
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 152
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 13
                }, this), "      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"inputNameToValidate\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 26
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 93
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 142
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"userName\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 28
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 84
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 133
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"required\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 30
                }, this), ": [", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 87
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"A user name is required\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 146
                }, this), "]", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 222
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 28
                }, this), ",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 78
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"password\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 28
                }, this), ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "{"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 84
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 133
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"required\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 30
                }, this), ": [", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 87
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"A password is required\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 146
                }, this), "],", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 222
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"minLength\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 30
                }, this), ": [", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 88
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"password should have at least 6 characters\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 144
                }, this), "],", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 240
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"containNumber\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 30
                }, this), ": [[", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 93
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 149
                }, this), "], ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"password should have at least 1 number\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 209
                }, this), "],", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 301
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"containSpecialCharacters\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 30
                }, this), ": [[", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 104
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 160
                }, this), "], ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"password should contain at least one special character\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 220
                }, this), "],", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 328
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"containWhiteSpace\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 30
                }, this), ": [[", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 97
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 157
                }, this), "], ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"password should not contain any white spaces\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 218
                }, this), "],", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 316
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 13
                }, this), "          ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyKey,
                  children: "\"containCapitalLetters\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 30
                }, this), ": [[", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 101
                }, this), ", ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueNotText,
                  children: "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 157
                }, this), "], ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.propertyValueText,
                  children: "\"password should contain at least one capital letter\""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 217
                }, this), "]", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 321
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 13
                }, this), "        ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 28
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 77
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 13
                }, this), "      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 26
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 75
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 13
                }, this), "    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 24
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 73
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 13
                }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 22
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 71
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ponctuation,
                  children: "}"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 20
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 69
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL2N1c3RvbUVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9pbnB1dFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9ub3RpZmljYXRpb25HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdWlOb3RpZmljYXRpb24vdWlOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycyBsYXp5IF5cXC5cXC9jaGVja0lucHV0LipcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyIsInRvcEJhbm5lckNvbnRhaW5lciIsInRvcEJhbm5lciIsInRvcEJhbm5lckJyYW5kIiwidG9wQmFubmVyVGV4dCIsInRvcEJhbm5lckJ1dHRvbnNDb250YWluZXIiLCJ0b3BCYW5uZXJCdXR0b24iLCJnZXR0aW5nU3RhcnRlZEJ1dHRvbiIsImRvd25sb2FkQnV0dG9uIiwiY29sb3IiLCJucG1JbnN0YWxsIiwid2h5VXNpbmdUaXRsZSIsIndoeVJvd0NvbnRhaW5lciIsImV4YW1wbGUxQ29udGFpbmVyIiwiZXhhbXBsZTFMZWZ0Q29udGFpbmVyIiwiZXhhbXBsZTFMZWZ0Q29udGFpbmVyVGl0bGUiLCJleGFtcGxlMUxlZnRDb250YWluZXJMaW5rIiwiZXhhbXBsZTFGb3JtIiwiZXhhbXBsZTFSaWdodENvbnRhaW5lciIsImV4YW1wbGUxVGV4dEFyZWFDb250YWluZXIiLCJleGFtcGxlMVRleHRBcmVhIiwiY29kZSIsInBvbmN0dWF0aW9uIiwicHJvcGVydHlLZXkiLCJwcm9wZXJ0eVZhbHVlTm90VGV4dCIsInByb3BlcnR5VmFsdWVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQTJDOztBQUVwQztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLGtFQUFnQztBQUNqRSxZQUFZLHVEQUFTO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDM0IzQjtBQUFBO0FBQUE7QUFBK0M7O0FBRXhDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHFDQUFxQztBQUM1RCwrREFBK0Q7QUFDL0QsZ0VBQWdFO0FBQ2hFLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0EsMEJBQTBCLDJEQUFXO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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QU0sQ0FBQ3NCLFdBQXhCO0FBQUEsNEJBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbENiLGVBa0M4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWxDOUQsZUFtQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFuQ0EsdUJBbUNXO0FBQU0sMkJBQVMsRUFBRXRCLHlEQUFNLENBQUNzQixXQUF4QjtBQUFBLDRCQUFzQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5DWCxlQW1DNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFuQzVELGVBb0NBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBcENBLHFCQW9DUztBQUFNLDJCQUFTLEVBQUV0Qix5REFBTSxDQUFDc0IsV0FBeEI7QUFBQSw0QkFBc0M7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwQ1QsZUFvQzBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBcEMxRCxlQXFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXJDQSxlQXFDTztBQUFNLDJCQUFTLEVBQUV0Qix5REFBTSxDQUFDc0IsV0FBeEI7QUFBQSw0QkFBc0M7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQ1AsZUFxQ3dEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBckN4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlJRDtLQTNJdUJ2QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhZTZjMzRmMTM0NGNhNWMyZjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvcntcclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTmFtZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGVycm9yTmFtZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHl1cCgpe1xyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkZvcm1SaWRlci5qcyBFUlJPUlwiLCBcIlByb3BlcnR5IHZhbHVlIG9mIGRhdGVGb3JtYXQgbW9yZSB0aGF0IGEgc2luZ2xlIHRydWUgdmFsdWUgbG9jYXRlZCBhdCB0aGUgcHJvcGVydHlEYXRlVmFsdWVBcnJheVsxXSBcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9jZXNzb3IgfSBmcm9tIFwiLi9wcm9jZXNzb3IuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtUmlkZXJqcyB7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybVJpZGVyLmpzIGxvYWRlZCBzdWNjZXNzZnVsbHksIHRoYW5rIHlvdSBmb3IgdXNpbmcgaXQsIEhhcHB5IHZhbGlkYXRpbmcg4p2k77iPIFwiKTtcclxuICAgICAgICAvLyBsZXQganNvbkNvbmZpZyA9IHJlcXVpcmUoXCIuL2Zvcm1SaWRlckpzb25Db25maWcuanNvblwiKTtcclxuICAgICAgICBsZXQganNvbkNvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi9mb3JtUmlkZXJKc29uQ29uZmlnLmpzb25cIik7XHJcbiAgICAgICAgbmV3IFByb2Nlc3Nvcihqc29uQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0VmFsaWRhdGlvblN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFZhbGlkYXRpb25TdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblN0YXR1cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVJpZGVyanM7XHJcblxyXG4iLCJpbXBvcnQgeyBDdXN0b21FcnJvciB9IGZyb20gXCIuL2N1c3RvbUVycm9yLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGZyRm9ybU5hbWVUb1Byb2Nlc3MsIGZvcm1EYXRhLCBmb3JtUmlkZXJDb25maWdzKSB7XHJcbiAgICAgICAgLyp0aGlzIGFycmF5IGlzIGFjY2Vzc2libGUgZnJvbSBhbGwgbWV0aG9kcy4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJyZWQsIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lsbCBiZSBwdXNoZWQgdG8gdGhpcyBhcnJheSBhbmQgcGFzc2VkIHRvIG5vdGlmaWNhdGlvbkdlbmVyYXRvciBhZnRlciAgKi9cclxuICAgICAgICB0aGlzLmlucHV0VmFsaWRhdGlvblJlY2FwID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAvL3ZhbGlkYXRlZCBpcyBhbHdheXMgc2V0IHRvIHRydWUsIGJ1dCB3aWxsIGJlIHNldCB0byBmYWxzZSBpbiBjYXNlIHRoZXJlIGlzIGFuIGVycm9yIHdoZW4gY2FsbGluZyBhIHZhbGlkYXRvci9pbXBvcnRpbmcgaXQgZS5nIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgYW5kIHRoZSB2YWxpZGF0b3IgZG9lcyBub3QgZXhpc3QgZm9yIGV4YW1wbGVcclxuICAgICAgICB0aGlzLnZhbGlkYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRGb3JtVXBvblN1Ym1pdFZhbHVlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vZm9yIGV2ZXJ5IGZvcm1JbnB1dE5hbWUsIHN0b3JlIHRoZSBpbkNvbW1vblN0YXR1cywgbGlrZSB0cnVlLGZhbHNlLHRydWUsdHJ1ZSBldGMuLlxyXG4gICAgICAgIHRoaXMuaGFzSW5Db21tb24gPSBbXTtcclxuICAgICAgICAvL2Fsd2F5cyBzZXQgdG8gZmFsc2UsIGNoYW5nZXMgdG8gdHJ1ZSBvbmx5IHdoZW4gdGhlcmUgaXMgYSBpbkNvbW1vbiA9PiBzbyBwdXJpZnlFcnJvclZhbGlkYXRpb24gY291bGQgYmUgY2FsbGVkXHJcbiAgICAgICAgdGhpcy5kb2VzSGFzSW5Db21tb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9wdXQgZXZlcnkgdmFsaWRhdGVkIFwicHJvcGVydHlWYWx1ZVwiIGhlcmUsIGtub3dpbmcgdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIHJlcGxhY2VkIGJ5IHRoZSBkYXRhLW5hbWUgaW4ganNvbiBjb25maWdzIGFuZCB0aGUgaW5Db21tb24gdmFsdWVcclxuICAgICAgICB0aGlzLnZhbGlkYXRlZEluQ29tbW9uR3JvdXAgPSBbXTtcclxuXHJcbiAgICAgICAgLy9leHRyYWN0aW5nIHRoZSBlbGVtZW50c1RvQXBwbHlWYWxpZGF0aW9uT24gZnJvbSBqc29uIGZpbGUgYW5kIHBhc3NpbmcgaXQgdG8gdGhlIG5leHQgdGhlblxyXG4gICAgICAgIGxldCBlbGVtZW50VG9BcHBseVZhbGlkYXRpb25PbiA9IHRoaXMuZXh0cmFjdEpzb25FbGVtZW50VG9BcHBseVZhbGlkYXRpb25PbihcclxuICAgICAgICAgICAgZm9ybVJpZGVyQ29uZmlncyxcclxuICAgICAgICAgICAgZnJGb3JtTmFtZVRvUHJvY2Vzc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5qc29uSW5wdXROYW1lVG9WYWxpZGF0ZSA9IGVsZW1lbnRUb0FwcGx5VmFsaWRhdGlvbk9uLmlucHV0TmFtZVRvVmFsaWRhdGU7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRGb3JtVXBvblN1Ym1pdFZhbHVlID0gZWxlbWVudFRvQXBwbHlWYWxpZGF0aW9uT24ucmVzZXRGb3JtVXBvblN1Ym1pdDtcclxuICAgICAgICB0aGlzLmV4dHJhY3ROb3RpZmljYXRpb25Db2RlKGVsZW1lbnRUb0FwcGx5VmFsaWRhdGlvbk9uKTtcclxuXHJcbiAgICAgICAgLy9nZXQgdGhlIGluQ29tbW9uQ29ycmVzcG9uZGVuY2UgYXJyYXlzIGxvY2F0ZWQgaW4gdGhlIGpzb24gZmlsZVxyXG4gICAgICAgIHRoaXMuaW5Db21tb25Db3JyZXNwb25kZW5jZSA9IGVsZW1lbnRUb0FwcGx5VmFsaWRhdGlvbk9uLmluQ29tbW9uQ29ycmVzcG9uZGVuY2U7XHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy9hcnJheSBvZiBhcnJheXMgd2hlcmUgaW4gZXZlcnkgYXJyYXkgOiBrZXkgaXMgdGhlIGlucHV0IGFuZCB2YWx1ZSBpcyB0aGUgaW5wdXRzIHZhbHVlXHJcbiAgICAgICAgbGV0IGZvcm1LZXlWYWx1ZU9mSW5wdXRWYWx1ZSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9zcGxpdHRpbmcgYmVjYXVzZSBcIj1cIiB3YXMgYWRkZWQgaW4gZ2V0Rm9ybURhdGFUb0tleVZhbHVlQXJyYXkgZnVuY3Rpb24gaW4gcHJvY2Vzc29yIGNsYXNzIGluIG9yZGVyIHRvIGVuY29kZSB0aGUgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgIGZvcm1LZXlWYWx1ZU9mSW5wdXRWYWx1ZS5wdXNoKGZvcm1EYXRhW2ldLnNwbGl0KFwiPVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIC8vb25seSBnZXQgaW5wdXROYW1lVG9WYWxpZGF0ZSBmcm9tIGpzb24gY29uZmlnc1xyXG4gICAgICAgIGxldCBqc29uSW5wdXROYW1lVG9WYWxpZGF0ZUtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50VG9BcHBseVZhbGlkYXRpb25PbltcImlucHV0TmFtZVRvVmFsaWRhdGVcIl0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1LZXlWYWx1ZU9mSW5wdXRWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZm9ybUlucHV0TmFtZSA9IGZvcm1LZXlWYWx1ZU9mSW5wdXRWYWx1ZVtpXVswXTsgLy9kYXRhLW5hbWVcclxuICAgICAgICAgICAgbGV0IGZvcm1JbnB1dFZhbHVlID0gZm9ybUtleVZhbHVlT2ZJbnB1dFZhbHVlW2ldWzFdOyAvL2RhdGEtdmFsdWVcclxuICAgICAgICAgICAgbGV0IGpzb25JbnB1dE5hbWVUb1ZhbGlkYXRlS2V5ID0ganNvbklucHV0TmFtZVRvVmFsaWRhdGVLZXlzW2ldOyAvL2luZGljYXRlZCBpbnB1dE5hbWVUb1ZhbGlkYXRlIGluIGpzb24gY29uZmlnc1xyXG5cclxuICAgICAgICAgICAgLy9UaHJvdyBhbiBlcnJvciB3aGVuIGZvcm1JbnB1dE5hbWUgaW4gSFRNTCBpcyBub3QgZGVmaW5lZCBpbiBmb3JtUmlkZXJKc29uQ29uZmlnc1xyXG4gICAgICAgICAgICBpZiAoZm9ybUlucHV0TmFtZSAhPT0ganNvbklucHV0TmFtZVRvVmFsaWRhdGVLZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uSW5wdXROYW1lVG9WYWxpZGF0ZUtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiRm9ybVJpZGVyLmpzIEVSUk9SXCIsIFwiVW5rbm93biBkYXRhLW5hbWVcIiArICcgXCInICsgZm9ybUlucHV0TmFtZSArICdcIiAnICsgXCJub3QgZGVjbGFyZWQgaW4gZm9ybVJpZGVySnNvbkNvbmZpZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkZvcm1SaWRlci5qcyBFUlJPUlwiLCBcIlVua25vd24gZGF0YS1uYW1lXCIgKyAnIFwiJyArIGpzb25JbnB1dE5hbWVUb1ZhbGlkYXRlS2V5ICsgJ1wiICcgKyBcImluIGZvcm1SaWRlckpzb25Db25maWcgXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3Byb3BlcnR5S2V5IHdpbGwgZ2l2ZSB1cyBvbmx5IHRoZSBmdW5jdGlvbiBpbiBzdHJpbmcgZm9ybWF0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5S2V5IGluIHRoaXMuanNvbklucHV0TmFtZVRvVmFsaWRhdGVbZm9ybUlucHV0TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIC8vd2FudGVkRnVuY3Rpb25WYWx1ZXMgd2lsbCBnaXZlIHVzIHByb3BlcnR5S2V5IHZhbHVlcyBpbiBhbiBvYmplY3QgZm9ybWF0ICFcclxuICAgICAgICAgICAgICAgIGxldCB3YW50ZWRGdW5jdGlvblZhbHVlcyA9IHRoaXMuanNvbklucHV0TmFtZVRvVmFsaWRhdGVbZm9ybUlucHV0TmFtZV1bcHJvcGVydHlLZXldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5VmFsdWUgPSB3YW50ZWRGdW5jdGlvblZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUVycm9yVGV4dCA9IHdhbnRlZEZ1bmN0aW9uVmFsdWVzWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBpbkNvbW1vbiBmcm9tIGpzb24gZmlsZSA9PiBwdXQgaXQgaW4gYSBpbkNvbW1vbiBhcnJheSA9PiByZXBsYWNlIHByb3BlcnR5VmFsdWUgYnkgaW5Db21tb24gPT4gc2VuZCB0aGlzIHZhbHVlICB0byB0aGUgY29uY2VybmVkIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzT3duUHJvcGVydHlJbkNvbW1vbiA9IHByb3BlcnR5VmFsdWUuaGFzT3duUHJvcGVydHkoXCJpbkNvbW1vblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBldmVyeSBmb3JtSW5wdXROYW1lIGluIGpzb24gY29uZmlncyBjaGVjayBpZiBpdCBoYXMgYW4gaW5Db21tb24sIGlmIGl0IGRvZXMgdGhlbiBzZXQgZG9lc0hhc0luQ29tbW9uIHRvIHRydWUgYW5kIHRlbGwgdGhlcmUgaXMgYW4gaW5Db21tb24gaGVyZVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5SW5Db21tb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3doZW4gdGhlcmUgaXMgYW4gaW5Db21tb24sIHJlcGxhY2UgcHJvcGVydHkgdmFsdWUgYnkgYW4gYXJyYXkgb2YgZm9ybUlucHV0TmFtZSBhbmQgdGhlIGluQ29tbW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IFtmb3JtSW5wdXROYW1lLCBwcm9wZXJ0eVZhbHVlLmluQ29tbW9uXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0luQ29tbW9uLnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2VzSGFzSW5Db21tb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHlJbkNvbW1vbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzSW5Db21tb24ucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRnVuY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNJbkNvbW1vbiwgcHJvcGVydHlLZXksIHByb3BlcnR5VmFsdWUsIGZvcm1JbnB1dE5hbWUsIGZvcm1JbnB1dFZhbHVlLCBwcm9wZXJ0eUVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3doZW4gdGhlcmUgaXMgYW4gaW5Db21tb24gPT4gcHVyaWZ5IGVycm9yIGFycmF5LCBvdGhlcndpc2UgZG8gdGhlIG5vcm1hbCBwcm9jZWR1cmVcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vd2hlbiB0aGVyZSBpcyBhbiBpbkNvbW1vbiA9PiBwdXJpZnkgZXJyb3IgYXJyYXksIG90aGVyd2lzZSBkbyB0aGUgbm9ybWFsIHByb2NlZHVyZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kb2VzSGFzSW5Db21tb24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwdXJpZmllZFZhbGlkYXRpb25FcnJvckFycmF5ID0gdGhpcy5wdXJpZnlWYWxpZGF0aW9uRXJyb3JBcnJheSh0aGlzLnZhbGlkYXRpb25FcnJvckFycmF5LCB0aGlzLnZhbGlkYXRlZEluQ29tbW9uR3JvdXAsIHRoaXMuaW5Db21tb25Db3JyZXNwb25kZW5jZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsaWRhdGlvblJlY2FwLnB1c2gocHVyaWZpZWRWYWxpZGF0aW9uRXJyb3JBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9lc0hhc0luQ29tbW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbGlkYXRpb25SZWNhcC5wdXNoKHRoaXMudmFsaWRhdGlvbkVycm9yQXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtVXBvblN1Ym1pdChmckZvcm1OYW1lVG9Qcm9jZXNzLCB0aGlzLnJlc2V0Rm9ybVVwb25TdWJtaXRWYWx1ZSwgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gd2lsbCBjYWxsIG90aGVyIGZ1bmN0aW9ucyBzdGFydGluZyB3aXRoIFwiY2hlY2tJbnB1dFwiIHByZWZpeFxyXG4gICAgY2FsbEZ1bmN0aW9uKGhhc0luQ29tbW9uLCBwcm9wZXJ0eUtleSwgcHJvcGVydHlWYWx1ZSwgZm9ybUlucHV0TmFtZSwgZm9ybUlucHV0VmFsdWUsIHByb3BlcnR5RXJyb3JUZXh0KSB7XHJcbiAgICAgICAgLy9vbmx5IGRldGVjdGluZyB0aGUgbGFzdCBlbGVtZW50IGJlY2F1c2Ugd2UgYXJlIGdldHRpbmcgYW4gYXJyYXkgYW5kIHRoZSBsYXN0IGVsZW1lbnQgb2YgaXQgaXMgdGhlIGVsZW1lbnQgd2Ugd2FudCB0byBjaGVja1xyXG4gICAgICAgIGxldCBsYXN0RWxlbWVudEluSGFzSW5Db21tb24gPSBoYXNJbkNvbW1vbi5zbGljZSgtMSlbMF07XHJcblxyXG4gICAgICAgIC8vQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHByb3BlcnR5IGtleVxyXG4gICAgICAgIGxldCBwcm9wZXJ0eUtleUNhcGl0YWxpemVkID1cclxuICAgICAgICAgICAgcHJvcGVydHlLZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eUtleS5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgaW1wb3J0IChcIi4vc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dFwiICsgcHJvcGVydHlLZXlDYXBpdGFsaXplZCArIFwiLmpzXCIpXHJcbiAgICAgICAgLnRoZW4oKHZhbGlkYXRvcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXNlZFZhbGlkYXRpb24gPSBuZXcgdmFsaWRhdG9yW1xyXG4gICAgICAgICAgICAgICAgXCJDaGVja0lucHV0XCIgKyBwcm9wZXJ0eUtleUNhcGl0YWxpemVkXHJcbiAgICAgICAgICAgIF0oKTtcclxuICAgICAgICAgICAgLy9pZiB0aGUgZWxlbWVudCBoYXMgYW4gaW5Db21tb24gdGhlbiBsYXVuY2ggdGhlIHZhbGlkYXRlSW5Db21tb24gZnVuY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxhc3RFbGVtZW50SW5IYXNJbkNvbW1vbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdXNlZFZhbGlkYXRpb24udmFsaWRhdGVJbkNvbW1vbihwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiB2YWxpZGF0ZWQgcHVzaCBpbnRvIHZhbGlkYXRlZEluQ29tbW9uR3JvdXAgYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh1c2VkVmFsaWRhdGlvbi5pbkNvbW1vblZhbGlkYXRlZFN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkSW5Db21tb25Hcm91cC5wdXNoKHByb3BlcnR5VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3doZW4gdGhlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhbiBpbkNvbW1vbiB0aGVuIGxhdW5jaCB0aGUgbm9ybWFsIHZhbGlkYXRlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsYXN0RWxlbWVudEluSGFzSW5Db21tb24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VkVmFsaWRhdGlvbi52YWxpZGF0ZShwcm9wZXJ0eUtleUNhcGl0YWxpemVkLCBwcm9wZXJ0eVZhbHVlLCBmb3JtSW5wdXROYW1lLCBmb3JtSW5wdXRWYWx1ZSwgcHJvcGVydHlFcnJvclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlZFZhbGlkYXRpb25FcnJvckFycmF5ID0gdXNlZFZhbGlkYXRpb24udmFsaWRhdGlvbkVycm9yQXJyYXk7XHJcbiAgICAgICAgICAgIC8vcHVzaCBpbnRvIGVycm9ycyBhcnJheSBvbmx5IHdoZW4gdXNlZFZhbGlkYXRpb25FcnJvckFycmF5IGlzIG5vdCBlbXB0eVxyXG4gICAgICAgICAgICBpZiAodXNlZFZhbGlkYXRpb25FcnJvckFycmF5Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JBcnJheS5wdXNoKHVzZWRWYWxpZGF0aW9uRXJyb3JBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkZvcm1SaWRlci5qcyBFUlJPUlwiLCBcIlVua25vd24gdmFsaWRhdG9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5S2V5ICsgXCInIGluIGZvcm1SaWRlckpzb25Db25maWcgXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcHVyaWZ5VmFsaWRhdGlvbkVycm9yQXJyYXkoXHJcbiAgICAgICAgdmFsaWRhdGlvbkVycm9yQXJyYXksXHJcbiAgICAgICAgdmFsaWRhdGVkSW5Db21tb25Hcm91cCxcclxuICAgICAgICBpbkNvbW1vbkNvcnJlc3BvbmRlbmNlXHJcbiAgICApIHtcclxuICAgICAgICAvL2ZvciBldmVyeSBpbnB1dCwgdGhlIGluQ29tbW9uIG5hbWUgd2lsbCBiZSBwdXQgaW4gWzBdLCB0aGUgc3VtIG9mIGdpdmVuUG9pbnRzIHdpbGwgYmUgcHV0IGluIFsxXSwgaW4gWzJdIGZhbHNlIHdpbGwgYmUgcmVwbGFjZSBieSB0cnVlIGlmIHRoZSBpbkNvbW1vbiBpcyB2YWxpZGF0ZWQgb3RoZXJ3aXNlIGl0IHdlbGwgYmUga2VwdCBmYWxzZVxyXG4gICAgICAgIGxldCBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuID0gW1xyXG4gICAgICAgICAgICBbdW5kZWZpbmVkLCAwLCBmYWxzZV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvL2luZGV4IGluIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW4gdG8gYmUgZmlsbGVkLCB0aGlzIHZhbHVlIHdpbGwgYmUgaW5jcmVtZW50ZWQgZXZlcnkgdGltZSB0aGUgdmFsaWRhdGVkSW5Db21tb25OYW1lIG9mIGEgdmFsaWRhdGVkSW5Db21tb25Hcm91cCBpcyBub3QgZXF1YWwgdG8gdGhlIHZhbGlkYXRlZEluQ29tbW9uTmFtZSBvZiB0aGUgbmV4dCB2YWxpZGF0ZWRJbkNvbW1vbkdyb3VwXHJcbiAgICAgICAgbGV0IGluZGV4VG9CZUZpbGxlZCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGVkSW5Db21tb25Hcm91cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVkSW5Db21tb25OYW1lID0gdmFsaWRhdGVkSW5Db21tb25Hcm91cFtpXVsxXS5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgaW5Db21tb25Qb2ludHNHaXZlbiA9IHZhbGlkYXRlZEluQ29tbW9uR3JvdXBbaV1bMV0ucG9pbnRzR2l2ZW47XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRJbkNvbW1vbk5leHROYW1lO1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gdmFsaWRhdGVkSW5Db21tb25Hcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZWRJbkNvbW1vbkdyb3VwW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkSW5Db21tb25OZXh0TmFtZSA9IHZhbGlkYXRlZEluQ29tbW9uR3JvdXBbaSArIDFdWzFdLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZWRJbkNvbW1vbk5hbWUgPT09IHZhbGlkYXRlZEluQ29tbW9uTmV4dE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtVmFsaWRhdGVkSW5Db21tb25Qb2ludHNHaXZlbltpbmRleFRvQmVGaWxsZWRdWzBdID0gdmFsaWRhdGVkSW5Db21tb25OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuW2luZGV4VG9CZUZpbGxlZF1bMV0gKz0gaW5Db21tb25Qb2ludHNHaXZlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlZEluQ29tbW9uTmFtZSAhPT0gdmFsaWRhdGVkSW5Db21tb25OZXh0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuW2luZGV4VG9CZUZpbGxlZF1bMF0gPSB2YWxpZGF0ZWRJbkNvbW1vbk5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baW5kZXhUb0JlRmlsbGVkXVsxXSArPSBpbkNvbW1vblBvaW50c0dpdmVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBbdW5kZWZpbmVkLCAwLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW4ucHVzaChhcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4VG9CZUZpbGxlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVkSW5Db21tb25Hcm91cFtpICsgMV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baW5kZXhUb0JlRmlsbGVkXVswXSA9IHZhbGlkYXRlZEluQ29tbW9uTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuW2luZGV4VG9CZUZpbGxlZF1bMV0gKz0gaW5Db21tb25Qb2ludHNHaXZlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluQ29tbW9uQ29ycmVzcG9uZGVuY2VMZW5ndGggPSBpbkNvbW1vbkNvcnJlc3BvbmRlbmNlLmxlbmd0aDtcclxuICAgICAgICBsZXQgZGVjbGFyZWRJbkNvbW1vbk5hbWVDb3VudGVyID0gMDsgLy91c2VkIGZvciB0ZXN0aW5nXHJcbiAgICAgICAgbGV0IGluQ29tbW9uTmFtZUNvdW50ZXIgPSAwOyAvL3VzZWQgZm9yIHRlc3RpbmdcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbkNvbW1vbkNvcnJlc3BvbmRlbmNlTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5Db21tb25Db3JyZXNwb25kZW5jZVtqXS5uYW1lID09PSBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuW2ldWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbkNvbW1vbkNvcnJlc3BvbmRlbmNlW2pdLm5lZWRlZFBvaW50c1RvVmFsaWRhdGUgPT09IHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baV1bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtVmFsaWRhdGVkSW5Db21tb25Qb2ludHNHaXZlbltpXVsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5Db21tb25Db3JyZXNwb25kZW5jZVtqXS5uZWVkZWRQb2ludHNUb1ZhbGlkYXRlICE9PSBzdW1WYWxpZGF0ZWRJbkNvbW1vblBvaW50c0dpdmVuW2ldWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baV1bMl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbmNyZW1lbnRhdGlvbiB1c2VkIGZvciB0ZXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyZWRJbkNvbW1vbk5hbWVDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2luY3JlbWVudGF0aW9uIHVzZWQgZm9yIHRlc3RpbmdcclxuICAgICAgICAgICAgICAgIGluQ29tbW9uTmFtZUNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9URVNUSU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGVzdGluZyBpZiBpbkNvbW1vbiBuYW1lIGlzIG5vdCBkZWZpbmVkLCB0ZXN0IG9ubHkgd29ya2luZyB3aGVuIHRoZSBjaGVja2JveCBpcyBjbGlja2VkLCBob3cgaXQgd29ya3MgP1xyXG4gICAgICAgICAqIGRlY2xhcmVkSW5Db21tb25OYW1lQ291bnRlciA6IGluY3JlbWVudGVkIGV2ZXJ5IHRpbWUgdGhlIGluQ29tbW9uIG5hbWUgaXMgZGVjbGFyZWRcclxuICAgICAgICAgKiBpbkNvbW1vbk5hbWVDb3VudGVyIDogaW5jcmVtZW50ZWQgZXZlcnkgdGltZSwgd2hldGhlciBpdCBpcyBkZWNsYXJlZCBvciBub3QuXHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBpZiAoaW5Db21tb25OYW1lQ291bnRlciAvIGRlY2xhcmVkSW5Db21tb25OYW1lQ291bnRlciA9PT0gSW5maW5pdHkgJiYgc3VtVmFsaWRhdGVkSW5Db21tb25Qb2ludHNHaXZlblswXVswXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcIkZvcm1SaWRlci5qcyBFUlJPUlwiLCBcImFuIGluQ29tbW9uIG5hbWUgd2FzIG5vdCBkZWZpbmVkIGluIGluQ29tbW9uIGNvcnJlc3BvbmRlbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5Db21tb25OYW1lQ291bnRlciAvIGRlY2xhcmVkSW5Db21tb25OYW1lQ291bnRlciAhPT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZGVjbGFyZWRJbkNvbW1vbk5hbWVDb3VudGVyICogaW5Db21tb25Db3JyZXNwb25kZW5jZUxlbmd0aCAhPT0gaW5Db21tb25OYW1lQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiRm9ybVJpZGVyLmpzIEVSUk9SXCIsIFwiYW4gaW5Db21tb24gbmFtZSB3YXMgbm90IGRlZmluZWQgaW4gaW5Db21tb24gY29ycmVzcG9uZGVuY2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baV1bMl0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsaWRhdGlvbkVycm9yQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvckFycmF5W2pdWzBdWzFdLm5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bVZhbGlkYXRlZEluQ29tbW9uUG9pbnRzR2l2ZW5baV1bMF1cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yQXJyYXkuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9leHRyYWN0IHRoZSBlbGVtZW50c1RvQXBwbHlWYWxpZGF0aW9uT24gZGVwZW5kaW5nIG9uIGZvcm0gaWQsIHNvIGZyRm9ybU5hbWVUb1Byb2Nlc3Mgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIHRoZSBmb3JtSWQgaW4ganNvbiBmaWxlXHJcbiAgICBleHRyYWN0SnNvbkVsZW1lbnRUb0FwcGx5VmFsaWRhdGlvbk9uKGpzb25EYXRhLCBmckZvcm1OYW1lVG9Qcm9jZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIGpzb25EYXRhW1wiZWxlbWVudHNUb0FwcGx5VmFsaWRhdGlvbk9uXCJdW2ZyRm9ybU5hbWVUb1Byb2Nlc3NdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0dXJuaW5nIG5vdGlmaWNhdGlvbiBDb2RlIGZyb20ganNvbiBGaWxlXHJcbiAgICBleHRyYWN0Tm90aWZpY2F0aW9uQ29kZShqc29uRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsaWRhdGlvblJlY2FwLnB1c2goanNvbkRhdGFbXCJub3RpZmljYXRpb25Db2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvL3Jlc2V0dGluZyBmb3JtIHVwb24gc3VibWl0XHJcbiAgICByZXNldEZvcm1VcG9uU3VibWl0KGZyRm9ybU5hbWVUb1Byb2Nlc3MsIHJlc2V0Rm9ybVVwb25TdWJtaXRWYWx1ZSwgZXJyb3JBcnJheSkge1xyXG4gICAgICAgIGlmIChyZXNldEZvcm1VcG9uU3VibWl0VmFsdWUgPT09IHRydWUgJiYgZXJyb3JBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW90ZkZvcm0gPSBcIiArIGZyRm9ybU5hbWVUb1Byb2Nlc3MgKyBcIl1cIikucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDdXN0b21FcnJvciB9IGZyb20gXCIuL2N1c3RvbUVycm9yLmpzXCI7XHJcbmltcG9ydCB7IFVJTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vc3JjL3VpTm90aWZpY2F0aW9uL3VpTm90aWZpY2F0aW9uLmpzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25HZW5lcmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoaW5wdXRWYWxpZGF0aW9uUmVjYXAsIGZvcm1SaWRlckNvbmZpZ3MpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25UZXh0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblRleHRDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25CYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXkgPSBpbnB1dFZhbGlkYXRpb25SZWNhcFsxXTtcclxuICAgICAgICBsZXQgaW5wdXRWYWxpZGF0aW9uRXJyb3JMZW5ndGggPSBpbnB1dFZhbGlkYXRpb25FcnJvckFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy90ZXJtaW5hdGUgcHJvY2VzcyBhbmQgc2hvdyB1bmNhdWdodCBlcnJvciwgYW55d2F5Li4udGhpcyB3aWxsIGhhcHBlbiBvbmx5IGlmIHRoZXJlIGlzIHByZXZpb3VzIGVycm9ycyBpdCBpcyBkb25lIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgZXJyb3JzIHRvIGJlIHNob3duXHJcbiAgICAgICAgaWYgKGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJGb3JtUmlkZXIuanMgRVJST1JcIiwgXCJVbmNhdWdodCBlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgZm9ybU5vdGlmaWNhdGlvbkNvZGUgPSB0aGlzLmV4dHJhY3RGb3JtTm90aWZpY2F0aW9uQ29kZShpbnB1dFZhbGlkYXRpb25SZWNhcFswXSwgaW5wdXRWYWxpZGF0aW9uRXJyb3JMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQXNzZW1ibGVyKGZvcm1SaWRlckNvbmZpZ3Mubm90aWZpY2F0aW9ucywgZm9ybU5vdGlmaWNhdGlvbkNvZGUsIGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXkpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGFjdGl2YXRpb25TdGF0dXMgPSBOb3RpZmljYXRpb25HZW5lcmF0b3IuZ2V0QWN0aXZhdGlvblN0YXR1cygpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvbiA9IE5vdGlmaWNhdGlvbkdlbmVyYXRvci5nZXROb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgVUlOb3RpZmljYXRpb24uY2xvc2VQcmVjZWRlbnROb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkdlbmVyYXRvci5zZXRBY3RpdmF0aW9uU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9uID0gbmV3IFVJTm90aWZpY2F0aW9uKGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXksIHRoaXMubm90aWZpY2F0aW9uVGV4dCwgdGhpcy5ub3RpZmljYXRpb25UZXh0Q29sb3IsIHRoaXMubm90aWZpY2F0aW9uQmFja2dyb3VuZENvbG9yKTtcclxuXHJcbiAgICAgICAgTm90aWZpY2F0aW9uR2VuZXJhdG9yLnNldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbkdlbmVyYXRvci5zZXRBY3RpdmF0aW9uU3RhdHVzKHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc3RhdGljIHNldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEFjdGl2YXRpb25TdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKG5ld1N0YXR1cyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWN0aXZhdGlvblN0YXR1cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAgIG5vdGlmaWNhdGlvbkFzc2VtYmxlcihqc29uTm90aWZpY2F0aW9ucywgZm9ybU5vdGlmaWNhdGlvbkNvZGUpIHtcclxuXHJcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvbkNvZGVJc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk5vdGlmaWNhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGpzb25Ob3RpZmljYXRpb25zW2ldLm5vdGlmaWNhdGlvbkNvZGUgPT09IGZvcm1Ob3RpZmljYXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblRleHQgPSBqc29uTm90aWZpY2F0aW9uc1tpXVtcInRleHRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblRleHRDb2xvciA9IGpzb25Ob3RpZmljYXRpb25zW2ldW1widGV4dENvbG9yXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25CYWNrZ3JvdW5kQ29sb3IgPSBqc29uTm90aWZpY2F0aW9uc1tpXVtcImJhY2tncm91bmRDb2xvclwiXTtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvZGVJc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbkNvZGVJc0ZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJGb3JtUmlkZXIuanMgRVJST1JcIiwgXCJOb3RpZmljYXRpb24gY29kZSBpcyBub3QgZGVmaW5lZCBpbiBub3RpZmljYXRpb25zXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZXh0cmFjdEZvcm1Ob3RpZmljYXRpb25Db2RlKG5vdGlmaWNhdGlvbkNvZGVPYmplY3QsIGlucHV0VmFsaWRhdGlvbkVycm9yTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VmFsaWRhdGlvbkVycm9yTGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub3RpZmljYXRpb25Db2RlT2JqZWN0W1wibm90VmFsaWRhdGVkXCJdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub3RpZmljYXRpb25Db2RlT2JqZWN0W1widmFsaWRhdGVkXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLyB0aGlzIGNsYXNzIHdpbGwgZ2V0IGZvcm1EYXRhLCBwcm9jZXNzIGRhdGEsIGNhbGwgb3RoZXIgbmVjZXNzYXJ5IGNsYXNzXHJcbmltcG9ydCB7IElucHV0VmFsaWRhdGlvbiB9IGZyb20gXCIuL2lucHV0VmFsaWRhdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25HZW5lcmF0b3IgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25HZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgQ3VzdG9tRXJyb3IgfSBmcm9tIFwiLi9jdXN0b21FcnJvci5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtUmlkZXJqcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvY2Vzc29yIHtcclxuICBjb25zdHJ1Y3Rvcihmb3JtUmlkZXJDb25maWdzKSB7XHJcbiAgICBsZXQgZWxlbWVudHNUb0FwcGx5VmFsaWRhdGlvbk9uID1cclxuICAgICAgZm9ybVJpZGVyQ29uZmlnc1tcImVsZW1lbnRzVG9BcHBseVZhbGlkYXRpb25PblwiXTtcclxuXHJcbiAgICBsZXQgZnJGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mcmZvcm1dXCIpO1xyXG5cclxuICAgIC8qICAgICAgMS0gZGV0ZWN0IGFsbCBmckZvcm1zIGluIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICAyLSBjaGVjayBpZiB0aGUgZGF0YS1mcmZvcm0gaXMgZGVjbGFyZWQgaW4gdGhlIGpzb25Db25maWdzIGZpbGVcclxuICAgICAgICAgICAgICAgIDMtIGlmIGl0IGlzIGRlY2xhcmVkIGNhbGwgdGhlIHByb2Nlc3NpbmcgZnVuY3Rpb24gb3RoZXJ3aXNlIHNob3cgYW4gZXJyb3IqL1xyXG4gICAgZnJGb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZnJGb3JtTmFtZVRvUHJvY2VzcyA9XHJcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWZyZm9ybVwiXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzVG9BcHBseVZhbGlkYXRpb25Pbi5oYXNPd25Qcm9wZXJ0eShmckZvcm1OYW1lVG9Qcm9jZXNzKSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9jZXNzaW5nKGZvcm0sIGZyRm9ybU5hbWVUb1Byb2Nlc3MsIGZvcm1SaWRlckNvbmZpZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Rocm93IGFuIGVycm9yIHdoZW4gdGhlIGN1c3RvbSBmb3JtIG5hbWUgZG9lcyBub3QgZXhpc3QgaW4ganNvbiBjb25maWdzXHJcbiAgICAgICAgaWYgKCFlbGVtZW50c1RvQXBwbHlWYWxpZGF0aW9uT24uaGFzT3duUHJvcGVydHkoZnJGb3JtTmFtZVRvUHJvY2VzcykpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgICAgICAgXCJGb3JtUmlkZXIuanMgRVJST1JcIixcclxuICAgICAgICAgICAgXCJVbmtub3duIGRhdGEtZnJmb3JtXCIgK1xyXG4gICAgICAgICAgICAnIFwiJyArXHJcbiAgICAgICAgICAgIGZyRm9ybU5hbWVUb1Byb2Nlc3MgK1xyXG4gICAgICAgICAgICAnXCInICtcclxuICAgICAgICAgICAgXCIsIHdhcyBub3QgZGVjbGFyZWQgaW4gZm9ybVJpZGVySnNvbkNvbmZpZ1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qICAxLSBCbG9jayB0aGUgc3VibWl0IHdoaWxlIHZhbGlkYXRpbmdcclxuICAgICAgICAyLSBCbG9jayB0aGUgRE9NIHVzaW5nIHNldFRpbWVvdXQgd2hpbGUgdmFsaWRhdGluZ1xyXG4gICAgICAgIDMtIHdoZW4gdmFsaWRhdGlvbiBpcyBkb25lID0+IHNob3cgZXJyb3Igbm90aWZpY2F0aW9uIC8gc2hvdyBjb25maXJtYXRpb24gbm90aWZpY2F0aW9uICsgdW5ibG9jayB0aGUgRE9NICsgc3VibWl0XHJcbiAgICAgICAgKi9cclxuICBwcm9jZXNzaW5nKGZyRm9ybSwgZnJGb3JtTmFtZVRvUHJvY2VzcywgZm9ybVJpZGVyQ29uZmlncykge1xyXG4gICAgLy93aGVuIHRoZXJlIGlzIG5vIFwiYWN0aW9uXCIgcmVwbGFjZSBieSB0aGUgb3RoZXIgdmFsdWUuIHRoaXMgaXMgdHlwaWNhbGx5IHVzZWQgaW4gbnBtIGV2aXJvbm1lbnRzIHdoZXJlIG5vIFwiYWN0aW9uXCIgaXMgbmVlZGVkXHJcbiAgICBsZXQgcG9zdFVSTCA9IHRoaXMuZ2V0Rm9ybUFjdGlvbihmckZvcm0pIHx8IFwibnBtRm9ybUFjdGlvblwiO1xyXG4gICAgLy93aGVuIHRoZXJlIGlzIG5vIFwibWV0aG9kXCIgcmVwbGFjZSBieSB0aGUgb3RoZXIgdmFsdWUuIHRoaXMgaXMgdHlwaWNhbGx5IHVzZWQgaW4gbnBtIGV2aXJvbm1lbnRzIHdoZXJlIG5vIFwibWV0aG9kXCIgaXMgbmVlZGVkXHJcbiAgICBsZXQgcmVxdWVzdE1ldGhvZCA9IHRoaXMuZ2V0Rm9ybVJlcXVlc3RNZXRob2QoZnJGb3JtKSB8fCBcIm5wbVJlcXVlc3RNZXRob2RcIjtcclxuICAgIGxldCBmb3JtRGF0YUVuY29kZWQgPSB0aGlzLmdldEZvcm1EYXRhVG9LZXlWYWx1ZUFycmF5RW5jb2RlZFVSTChmckZvcm0pO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5nZXRGb3JtRGF0YVRvS2V5VmFsdWUoZnJGb3JtKTtcclxuICAgIGxldCBkYXRhVG9TdWJtaXQgPSBmb3JtRGF0YUVuY29kZWQuam9pbihcIiZcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgSW5wdXRWYWxpZGF0aW9uIGluIG9yZGVyIHRvIHZhbGlkYXRlIHRoZSBpbnB1dFxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBpbnB1dFZhbGlkYXRpb24gPSBuZXcgSW5wdXRWYWxpZGF0aW9uKFxyXG4gICAgICBmckZvcm1OYW1lVG9Qcm9jZXNzLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAgZm9ybVJpZGVyQ29uZmlnc1xyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGlucHV0VmFsaWRhdGlvbi52YWxpZGF0ZWQpIHtcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBlcnJvciBhcnJheSBpcyBlbXB0eSBvciBub3QsIGlmIGl0IGlzIGVtcHR5IHRoZW4gc3VibWl0IGRhdGEgYW5kIHRoZW4gc2hvdyB0aGUgbm90aWZpY2F0aW9uLCBpZiBub3QgdGhlbiBkbyBub3RpbmcgYW5kIG9ubHkgc2hvdyB0aGUgbm90aWZpY2F0aW9uXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoaW5wdXRWYWxpZGF0aW9uLmlucHV0VmFsaWRhdGlvblJlY2FwWzFdLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3RNZXRob2QgIT09IFwibnBtUmVxdWVzdE1ldGhvZFwiICYmIHBvc3RVUkwgIT09IFwibnBtRm9ybUFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuc2VuZERhdGEocmVxdWVzdE1ldGhvZCwgcG9zdFVSTCwgZGF0YVRvU3VibWl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBGb3JtUmlkZXJqcy5zZXRWYWxpZGF0aW9uU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlucHV0VmFsaWRhdGlvbi5pbnB1dFZhbGlkYXRpb25SZWNhcFsxXS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgRm9ybVJpZGVyanMuc2V0VmFsaWRhdGlvblN0YXR1cyhmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgICAgICAgXCJGb3JtUmlkZXIuanMgRVJST1JcIixcclxuICAgICAgICAgICAgXCJQcm9jZXNzIHN0b3BwZWQsIGFuIGVycm9yIGhhcyBvY2N1cnJlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9uR2VuZXJhdG9yKFxyXG4gICAgICAgICAgaW5wdXRWYWxpZGF0aW9uLmlucHV0VmFsaWRhdGlvblJlY2FwLFxyXG4gICAgICAgICAgZm9ybVJpZGVyQ29uZmlnc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICAvL2dldCBhbGwgZm9ybSBpbnB1dHMgYW5kIHZhbHVlcyBhcyBrZXkgdmFsdWUgaW50byBhbiBhcnJheVxyXG4gIGdldEZvcm1EYXRhVG9LZXlWYWx1ZUFycmF5RW5jb2RlZFVSTChmb3JtKSB7XHJcbiAgICBsZXQgZm9ybURhdGFFbmNvZGVkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0uZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBmb3JtLmVsZW1lbnRzW2ldO1xyXG4gICAgICBmb3JtRGF0YUVuY29kZWQucHVzaChcclxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudC5uYW1lKSArXHJcbiAgICAgICAgXCI9XCIgK1xyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChlbGVtZW50LnZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1EYXRhRW5jb2RlZDtcclxuICB9XHJcblxyXG4gIC8vY29udmVydCBmb3JtIGRhdGEgdG8gYXJyYXkgb2Yga2V5IHZhbHVlLCBrZXkgaXMgaW5wdXROYW1lLCB2YWx1ZSBpcyBpbnB1dCB2YWx1ZVxyXG4gIGdldEZvcm1EYXRhVG9LZXlWYWx1ZShmb3JtKSB7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGZvcm0uZWxlbWVudHNbaV07XHJcblxyXG4gICAgICAvL0hUTUwgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gICAgICBsZXQgZWxlbWVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcclxuICAgICAgbGV0IGVsZW1lbnRWYWx1ZSA9IGVsZW1lbnQudmFsdWU7XHJcbiAgICAgIGlmIChlbGVtZW50TmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vYW50aWNpcGF0ZSBjaGVja2JveCB2YWxpZGF0aW9uXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50VmFsdWUgPSBcImZyQ2hlY2tCb3hOb1ZhbHVlXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FudGljaXBhdGUgcmFkaW8gdmFsaWRhdGlvblxyXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZWxlbWVudFZhbHVlID0gXCJmclJhZGlvTm9WYWx1ZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEucHVzaChlbGVtZW50TmFtZSArIFwiPVwiICsgZWxlbWVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gIH1cclxuXHJcbiAgLyogICAgIC8vZ2V0IHRoZSBmb3JtIElEXHJcbiAgICBnZXRGb3JtSWQoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgfSAqL1xyXG5cclxuICAvL2dldHRpbmcgdGhlIGFjdGlvbiBhdHRyaWJ1dGUgZnJvbSBhIGZvcm1cclxuICBnZXRGb3JtQWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcclxuICB9XHJcblxyXG4gIC8vZ2V0dGluZyB0aGUgbWV0aG9kIGF0dHJpYnV0ZSBmcm9tIGEgZm9ybVxyXG4gIGdldEZvcm1SZXF1ZXN0TWV0aG9kKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKTtcclxuICB9XHJcblxyXG4gIC8vc2VuZGluZyBkYXRhIHdpdGggYW4gYWpheCByZXF1ZXN0XHJcbiAgc2VuZERhdGEocmVxdWVzdE1ldGhvZCwgcG9zdFVSTCwgZGF0YVRvU3VibWl0KSB7XHJcbiAgICAvL3doZW4gaXQgaXMgbm90IGluIHVzZWQgYXMgYW4gbnBtIG1vZHVsZSB0aGVuIHN1Ym1pdCBmb3JtLCBiZWNhdXNlIG90aGVyd2lzZSB0aGUgZm9ybSB3aWxsIGJlIHN1Ym1pdCBhcyBhIGZldGNoIGFwaVxyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihyZXF1ZXN0TWV0aG9kLCBwb3N0VVJMLCB0cnVlKTtcclxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcclxuICAgICAgXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIlxyXG4gICAgKTtcclxuICAgIHJlcXVlc3Quc2VuZChkYXRhVG9TdWJtaXQpO1xyXG4gIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cy5Qcm9jZXNzb3IgPSBuZXcgUHJvY2Vzc29yO1xyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25HZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vbm90aWZpY2F0aW9uR2VuZXJhdG9yLmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTm90aWZpY2F0aW9uIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5wdXRWYWxpZGF0aW9uRXJyb3JBcnJheSwgbm90aWZpY2F0aW9uVGV4dCwgbm90aWZpY2F0aW9uVGV4dENvbG9yLCBub3RpZmljYXRpb25CYWNrZ3JvdW5kQ29sb3IpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Cb3ggPSB0aGlzLmNyZWF0ZU5vdGlmaWNhdGlvbkJveChub3RpZmljYXRpb25CYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JCb3ggPSB0aGlzLmNyZWF0ZUVycm9yQm94KCk7XHJcbiAgICAgICAgbGV0IGNsb3NlQm94QnV0dG9uID0gdGhpcy5jcmVhdGVDbG9zZUJveEJ1dHRvbihub3RpZmljYXRpb25UZXh0Q29sb3IpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29udGVudCA9IHRoaXMuY3JlYXRlTm90aWZpY2F0aW9uQ29udGVudChub3RpZmljYXRpb25UZXh0Q29sb3IsIG5vdGlmaWNhdGlvblRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db250ZW50LmFwcGVuZENoaWxkKGNsb3NlQm94QnV0dG9uKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkJveC5hcHBlbmRDaGlsZCh0aGlzLm5vdGlmaWNhdGlvbkNvbnRlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZU5vdGlmaWNhdGlvbihpbnB1dFZhbGlkYXRpb25FcnJvckFycmF5KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB0aGlzLnVpU2hvd05vdGlmaWNhdGlvbih0aGlzLm5vdGlmaWNhdGlvbkJveCk7XHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy9JbiBjYXNlIHlvdSB3YW50IHRvIG1vZGlmeSB1aU5vdGlmaWNhdGlvbi5qcywga2VlcCB0aGVzZSB0d28gbWV0aG9kcywgdGhleSBhcmUgYm90aCBjb25uZWN0ZWQgdG8gbm90aWZpY2F0aW9uR2VuZXJhdG9yLmpzXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vbm90aWZpY2F0aW9uIHdpbGwgYmUgY2xvc2VkIGF1dG9tYXRvY2FsbHkgb25seSB3aGVuIHRoZXJlIGlzIG5vIGVycm9yc1xyXG4gICAgICAgIHRoaXMuY2xvc2VOb3RpZmljYXRpb25BdXRvbWF0aWNhbGx5KHRoaXMubm90aWZpY2F0aW9uLCBpbnB1dFZhbGlkYXRpb25FcnJvckFycmF5LCAxMDAwMCk7XHJcbiAgICAgICAgLy9ub3RpZmljYXRpb24gY2FuIHZlIGNsb3NlZCBtYW51YWxseSB3aGVuIHRoZXJlIGlzIGVycm9ycyBvciBubyBlcnJvcnNcclxuICAgICAgICB0aGlzLmNsb3NlTm90aWZpY2F0aW9uTWFudWFsbHkodGhpcy5ub3RpZmljYXRpb24sIGNsb3NlQm94QnV0dG9uKTtcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB9XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy9JbiBjYXNlIHlvdSB3YW50IHRvIG1vZGlmeSB1aU5vdGlmaWNhdGlvbi5qcywga2VlcCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGlzIG1ldGhvZC5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHN0YXRpYyBjbG9zZVByZWNlZGVudE5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjcmVhdGVOb3RpZmljYXRpb25Cb3gobm90aWZpY2F0aW9uQmFja2dyb3VuZENvbG9yKSB7XHJcblxyXG4gICAgICAgIGxldCB1aU5vdGlmaWNhdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICB1aU5vdGlmaWNhdGlvbkJveC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICB1aU5vdGlmaWNhdGlvbkJveC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLnBhZGRpbmcgPSBcIjE3cHhcIjtcclxuICAgICAgICB1aU5vdGlmaWNhdGlvbkJveC5zdHlsZS50ZXh0QWxpZ24gPSBcIlwiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgdWlOb3RpZmljYXRpb25Cb3guc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIHVpTm90aWZpY2F0aW9uQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5vdGlmaWNhdGlvbkJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVpTm90aWZpY2F0aW9uQm94O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVycm9yQm94KCkge1xyXG4gICAgICAgIGxldCB1aUVycm9yQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgdWlFcnJvckJveC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgICAgICB1aUVycm9yQm94LnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdWlFcnJvckJveDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDbG9zZUJveEJ1dHRvbihub3RpZmljYXRpb25UZXh0Q29sb3IpIHtcclxuXHJcbiAgICAgICAgbGV0IHVpQ2xvc2VCb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB1aUNsb3NlQm94QnV0dG9uLmlubmVySFRNTCA9IFwiY2xvc2UgTm90aWZpY2F0aW9uXCI7XHJcbiAgICAgICAgdWlDbG9zZUJveEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICB1aUNsb3NlQm94QnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIHVpQ2xvc2VCb3hCdXR0b24uc3R5bGUuY29sb3IgPSBub3RpZmljYXRpb25UZXh0Q29sb3JcclxuICAgICAgICB1aUNsb3NlQm94QnV0dG9uLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMnB4XCIgKyBub3RpZmljYXRpb25UZXh0Q29sb3I7XHJcbiAgICAgICAgcmV0dXJuIHVpQ2xvc2VCb3hCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTm90aWZpY2F0aW9uQ29udGVudChub3RpZmljYXRpb25UZXh0Q29sb3IsIG5vdGlmaWNhdGlvblRleHQpIHtcclxuICAgICAgICBsZXQgdWlOb3RpZmljYXRpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB1aU5vdGlmaWNhdGlvbkNvbnRlbnQuc3R5bGUuY29sb3IgPSBub3RpZmljYXRpb25UZXh0Q29sb3I7XHJcbiAgICAgICAgdWlOb3RpZmljYXRpb25Db250ZW50LmlubmVySFRNTCA9IG5vdGlmaWNhdGlvblRleHQ7XHJcblxyXG4gICAgICAgIHJldHVybiB1aU5vdGlmaWNhdGlvbkNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2luZ2xlTGluZUVycm9yKGVycm9yTGluZSkge1xyXG4gICAgICAgIGxldCB1aUVycm9yTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdWlFcnJvckxpbmUuaW5uZXJIVE1MID0gXCI8c3BhbiBzdHlsZT0nbGluZS1oZWlnaHQ6IDEyNSUnPiYjODIyNjs8L3NwYW4+IFwiICsgZXJyb3JMaW5lO1xyXG5cclxuICAgICAgICByZXR1cm4gdWlFcnJvckxpbmVcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlTm90aWZpY2F0aW9uKGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXkpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dFZhbGlkYXRpb25FcnJvckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JCb3guYXBwZW5kKHRoaXMuY3JlYXRlU2luZ2xlTGluZUVycm9yKGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXlbaV1bMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0VmFsaWRhdGlvbkVycm9yQXJyYXkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmVycm9yQm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVpU2hvd05vdGlmaWNhdGlvbihub3RpZmljYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbG9zZU5vdGlmaWNhdGlvbkF1dG9tYXRpY2FsbHkobm90aWZpY2F0aW9uLCBpbnB1dFZhbGlkYXRpb25FcnJvckFycmF5LCBkZWxheUJlZm9yZUNsb3NpbmcpIHtcclxuICAgICAgICAvL0Nsb3NlIG5vdGlmaWNhdGlvbiBhdXRvbWF0aWNhbGx5IG9ubHkgd2hlbiB0aGVyZSBpcyBubyBlcnJvcnNcclxuICAgICAgICBpZiAoaW5wdXRWYWxpZGF0aW9uRXJyb3JBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIG5vdGlmaWNhdGlvbiBpcyBhbHJlYWR5IGNsb3NlZCB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uR2VuZXJhdG9yLnNldEFjdGl2YXRpb25TdGF0dXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkZWxheUJlZm9yZUNsb3NpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VOb3RpZmljYXRpb25NYW51YWxseShub3RpZmljYXRpb24sIGNsb3NlQm94QnV0dG9uKSB7XHJcbiAgICAgICAgY2xvc2VCb3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkdlbmVyYXRvci5zZXRBY3RpdmF0aW9uU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9jaGVja0lucHV0Q2hlY2tib3hSZXF1aXJlZC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0Q2hlY2tib3hSZXF1aXJlZC5qc1wiLFxuXHRcdDFcblx0XSxcblx0XCIuL2NoZWNrSW5wdXRDb250YWluQ2FwaXRhbExldHRlcnMuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5DYXBpdGFsTGV0dGVycy5qc1wiLFxuXHRcdDJcblx0XSxcblx0XCIuL2NoZWNrSW5wdXRDb250YWluTnVtYmVyLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluTnVtYmVyLmpzXCIsXG5cdFx0M1xuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dENvbnRhaW5TbWFsbExldHRlcnMuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5TbWFsbExldHRlcnMuanNcIixcblx0XHQ0XG5cdF0sXG5cdFwiLi9jaGVja0lucHV0Q29udGFpblNwZWNpYWxDaGFyYWN0ZXJzLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXRDb250YWluU3BlY2lhbENoYXJhY3RlcnMuanNcIixcblx0XHQ1XG5cdF0sXG5cdFwiLi9jaGVja0lucHV0Q29udGFpbldoaXRlU3BhY2UuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dENvbnRhaW5XaGl0ZVNwYWNlLmpzXCIsXG5cdFx0NlxuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dERhdGVGb3JtYXQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dERhdGVGb3JtYXQuanNcIixcblx0XHQ3XG5cdF0sXG5cdFwiLi9jaGVja0lucHV0RW1haWwuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dEVtYWlsLmpzXCIsXG5cdFx0OFxuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dE1heExlbmd0aC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0TWF4TGVuZ3RoLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dE1pbkxlbmd0aC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0TWluTGVuZ3RoLmpzXCIsXG5cdFx0MTBcblx0XSxcblx0XCIuL2NoZWNrSW5wdXROdW1iZXJCaWdnZXJUaGFuLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzL2NoZWNrSW5wdXROdW1iZXJCaWdnZXJUaGFuLmpzXCIsXG5cdFx0MTFcblx0XSxcblx0XCIuL2NoZWNrSW5wdXROdW1iZXJTbWFsbGVyVGhhbi5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0TnVtYmVyU21hbGxlclRoYW4uanNcIixcblx0XHQxMlxuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dFJhZGlvUmVxdWlyZWQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZm9ybXJpZGVyanMvc3JjL3ZhbGlkYXRvcnMvY2hlY2tJbnB1dFJhZGlvUmVxdWlyZWQuanNcIixcblx0XHQxM1xuXHRdLFxuXHRcIi4vY2hlY2tJbnB1dFJlZ2V4VGVzdC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0UmVnZXhUZXN0LmpzXCIsXG5cdFx0MTRcblx0XSxcblx0XCIuL2NoZWNrSW5wdXRSZXF1aXJlZC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mb3JtcmlkZXJqcy9zcmMvdmFsaWRhdG9ycy9jaGVja0lucHV0UmVxdWlyZWQuanNcIixcblx0XHQxNVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL2Zvcm1yaWRlcmpzL3NyYy92YWxpZGF0b3JzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvY2hlY2tJbnB1dC4qXFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IExheW91dFN0YW5kYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFN0YW5kYXJkL0xheW91dFN0YW5kYXJkXCI7XHJcbmltcG9ydCBTaW5nbGVXaHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2luZ2xlV2h5L1NpbmdsZVdoeVwiO1xyXG5pbXBvcnQgRXhhbXBsZTFGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2V4YW1wbGUxRm9ybS9FeGFtcGxlMUZvcm1cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgRm9ybVJpZGVyanMgZnJvbSBcImZvcm1yaWRlcmpzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhbm5lckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCYW5uZXJ9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17XCIvYnJhbmQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFubmVyQnJhbmR9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRnJvbSBSaWRlciBsb2dvIGhvbWUgcGFnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCYW5uZXJUZXh0fT5Gb3JtUmlkZXIuanM8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhbm5lclRleHR9PlxyXG4gICAgICAgICAgICAgICAgQSBKYXZhc2NyaXB0IGZvcm0gdmFsaWRhdGlvbiBwbHVnaW4sIGJhc2VkIG9uIEpTT05cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCYW5uZXJCdXR0b25zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2RvY3MvaW50cm9kdWN0aW9uXCJ9ID48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhbm5lckJ1dHRvbiArIFwiIFwiICsgc3R5bGVzLmdldHRpbmdTdGFydGVkQnV0dG9ufT5HZXQgU3RhcnRlZDwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiL0Zvcm1SaWRlcmpzLnppcFwifSBkb3dubG9hZD48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhbm5lckJ1dHRvbiArIFwiIFwiICsgc3R5bGVzLmRvd25sb2FkQnV0dG9ufT5Eb3dubG9hZDwvZGl2PjwvYT4gPHNwYW4gc3R5bGU9e3tjb2xvciA6IFwiI2ZmZmZmZlwifX0+b3I8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5wbUluc3RhbGx9PjxzcGFuIHN0eWxlPXt7Y29sb3I6IFwiI0ZGQUYyNlwifX0+JDwvc3Bhbj4gbnBtIC1pIGZvcm1yaWRlcmpzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPExheW91dFN0YW5kYXJkPlxyXG4gICAgICAgIHsvKiBXSFkgVVNJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2h5VXNpbmdUaXRsZX0+V2h5IHVzaW5nIEZvcm1SaXJkZXIuanM8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndoeVJvd0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8U2luZ2xlV2h5XHJcbiAgICAgICAgICAgIHJlYXNvbj17XCJBdXRvbWF0aWMgQ29kZSBMb2FkaW5nXCJ9XHJcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uPXtcclxuICAgICAgICAgICAgICBcIk9ubHkgbmVjZXNzYXJ5IHZhbGlkYXRvcnMgYXJlIGxvYWRlZCwgcmVzdWx0aW5nIGluIGEgZmFzdCBsb2FkaW5nIHRpbWUuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFzb25CYXJDb2xvcj17XCIjNDU2OERDXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNpbmdsZVdoeVxyXG4gICAgICAgICAgICByZWFzb249e1wiTm8gQ29kaW5nXCJ9XHJcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uPXtcclxuICAgICAgICAgICAgICBcIk5vIGNvZGUgdHlwaW5nIG90aGVyIHRoYW4gYWRkaW5nIEhUTUwgYXR0cmlidXRlcyBhbmQgZWRpdGluZyBhIEpTT04gZG9jdW1lbnQuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFzb25CYXJDb2xvcj17XCIjRkZDQjI2XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNpbmdsZVdoeVxyXG4gICAgICAgICAgICByZWFzb249e1wiTm8gZGVwZW5kZW5jaWVzXCJ9XHJcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uPXtcclxuICAgICAgICAgICAgICBcIlNpbmNlIEZvcm0gUmlkZXIgaXMgY29kZWQgdXNpbmcgdmFuaWxsYSBqYXZhc2NyaXB0LCB5b3Ugd29uJ3Qgd29ycnkgYWJvdXQgb3RoZXIgZGVwZW5kZWNpZXMuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFzb25CYXJDb2xvcj17XCIjNTBDRjk2XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2h5Um93Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxTaW5nbGVXaHlcclxuICAgICAgICAgICAgcmVhc29uPXtcIk1haW50YWluZWQgJiBEb2N1bWVudGVkXCJ9XHJcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uPXtcclxuICAgICAgICAgICAgICBcIkZvcm0gUmlkZXIgZG9jdW1lbnRhdGlvbiBpcyBjb25zdGFudGx5IHNjYW5uZWQgYW5kIHRoZSBsaWJyYXJ5IGlzIGNvbnRpbnVvdXNseSB1cGRhdGVkIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYXNvbkJhckNvbG9yPXtcIiNGRjUxMkZcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2luZ2xlV2h5XHJcbiAgICAgICAgICAgIHJlYXNvbj17XCJPcGVuIFNvdXJjZVwifVxyXG4gICAgICAgICAgICBleHBsYW5hdGlvbj17XHJcbiAgICAgICAgICAgICAgXCJKb2luIHRoZSBEaXNjb3JkIGNoYW5uZWwsIGdpdmUgbmV3IGlkZWFzIG9yIGNvZGUgaXQgeW91ciBzZWxmLCBmZWVsIGZyZWUgdG8gYWRkIG5ldyBub3RpZmljYXRpb24gZGVzaWducyB0byB0aGUgbGlicmFyeSAhIDopXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFzb25CYXJDb2xvcj17XCIjNEQ0RDREXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNpbmdsZVdoeVxyXG4gICAgICAgICAgICByZWFzb249e1wiQXV0b21hdGljIENvZGUgTG9hZGluZ1wifVxyXG4gICAgICAgICAgICBleHBsYW5hdGlvbj17XCJGb3JtIFJpZGVyIHNpemUgaXMgb25seSAxOTNrYi5cIn1cclxuICAgICAgICAgICAgcmVhc29uQmFyQ29sb3I9e1wiI0U1NkM2Q1wifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogRVhBTVBMRSAxID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4YW1wbGUxQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhhbXBsZTFMZWZ0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGFtcGxlMUxlZnRDb250YWluZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgRG9uJ3QgZ28gaW50byBib3JpbmcgY29kaW5nLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICBGb3JtIFJpZGVyIGhhcyBtYW55IHZhbGlkYXRpb24gZnVuY3Rpb25hbGl0aWVzLCBzdGFydGluZyBmcm9tXHJcbiAgICAgICAgICAgICAgYmFzaWMgdmFsaWRhdG9ycyBzdWNoIGFzIDxMaW5rIGhyZWY9e1wiL2RvY3MvcmVxdWlyZWRcIn0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXhhbXBsZTFMZWZ0Q29udGFpbmVyTGlua30+XCJyZXF1aXJlZFwiPC9zcGFuPjwvTGluaz4gdGlsbCBcInJlZ2V4XCIgYW5kIDxMaW5rIGhyZWY9e1wiL2RvY3MvY29uZGl0aW9uYWxSZXF1aXJlZFwifT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5leGFtcGxlMUxlZnRDb250YWluZXJMaW5rfT5jb25kaXRpb25hbFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM8L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGFtcGxlMUZvcm19PlxyXG4gICAgICAgICAgICAgIDxFeGFtcGxlMUZvcm0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhhbXBsZTFSaWdodENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4YW1wbGUxVGV4dEFyZWFDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4YW1wbGUxVGV4dEFyZWF9PlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucG9uY3R1YXRpb259PntcIntcIn08L3NwYW4+PGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuLz4gIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cIm5vdGlmaWNhdGlvbnNcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT5be1wie1wifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cIm5vdGlmaWNhdGlvbkNvZGVcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT4xPC9zcGFuPiw8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cInRleHRcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIkNhbm5vdCBzdWJzY3JpYmUsIGVycm9yIHdpdGggc29tZSBpbnB1dHNcIjwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJ0ZXh0Q29sb3JcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIiNmZmZmZmZcIjwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJiYWNrZ3JvdW5kQ29sb3JcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIiNFNTZDNkNcIjwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifVwifTwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucG9uY3R1YXRpb259PntcIntcIn08L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJub3RpZmljYXRpb25Db2RlXCI8L3NwYW4+OiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+Mjwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJ0ZXh0XCI8L3NwYW4+OiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlVGV4dH0+XCJUaGFuayB5b3UgZm9yIHN1YnNjcmliaW5nICFcIjwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJ0ZXh0Q29sb3JcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIiNmZmZmZmZcIjwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJiYWNrZ3JvdW5kQ29sb3JcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIiM1MENGOTZcIjwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifV1cIn08L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwiZWxlbWVudHNUb0FwcGx5VmFsaWRhdGlvbk9uXCI8L3NwYW4+OiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wie1wifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cInNpZ251cFRlc3RcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ7XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJub3RpZmljYXRpb25Db2RlXCI8L3NwYW4+OiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wie1wifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJ2YWxpZGF0ZWRcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT4yPC9zcGFuPiw8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJub3RWYWxpZGF0ZWRcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT4xPC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifVwifTwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cInJlc2V0Rm9ybVVwb25TdWJtaXRcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT5mYWxzZTwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cImlucHV0TmFtZVRvVmFsaWRhdGVcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ7XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cInVzZXJOYW1lXCI8L3NwYW4+OiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wie1wifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cInJlcXVpcmVkXCI8L3NwYW4+OiBbPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlWYWx1ZU5vdFRleHR9PnRydWU8L3NwYW4+LCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlVGV4dH0+XCJBIHVzZXIgbmFtZSBpcyByZXF1aXJlZFwiPC9zcGFuPl08YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifVwifTwvc3Bhbj4sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwicGFzc3dvcmRcIjwvc3Bhbj46IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ7XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwicmVxdWlyZWRcIjwvc3Bhbj46IFs8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+dHJ1ZTwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cIkEgcGFzc3dvcmQgaXMgcmVxdWlyZWRcIjwvc3Bhbj5dLDxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwibWluTGVuZ3RoXCI8L3NwYW4+OiBbPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlWYWx1ZU5vdFRleHR9PjY8L3NwYW4+LCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlVGV4dH0+XCJwYXNzd29yZCBzaG91bGQgaGF2ZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjwvc3Bhbj5dLDxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwiY29udGFpbk51bWJlclwiPC9zcGFuPjogW1s8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+MTwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT50cnVlPC9zcGFuPl0sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cInBhc3N3b3JkIHNob3VsZCBoYXZlIGF0IGxlYXN0IDEgbnVtYmVyXCI8L3NwYW4+XSw8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5S2V5fT5cImNvbnRhaW5TcGVjaWFsQ2hhcmFjdGVyc1wiPC9zcGFuPjogW1s8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+MTwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT50cnVlPC9zcGFuPl0sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVUZXh0fT5cInBhc3N3b3JkIHNob3VsZCBjb250YWluIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3RlclwiPC9zcGFuPl0sPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4vPiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eUtleX0+XCJjb250YWluV2hpdGVTcGFjZVwiPC9zcGFuPjogW1s8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+ZmFsc2U8L3NwYW4+LCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJ0eVZhbHVlTm90VGV4dH0+ZmFsc2U8L3NwYW4+XSwgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlWYWx1ZVRleHR9PlwicGFzc3dvcmQgc2hvdWxkIG5vdCBjb250YWluIGFueSB3aGl0ZSBzcGFjZXNcIjwvc3Bhbj5dLDxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlLZXl9PlwiY29udGFpbkNhcGl0YWxMZXR0ZXJzXCI8L3NwYW4+OiBbWzxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnR5VmFsdWVOb3RUZXh0fT4xPC9zcGFuPiwgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlWYWx1ZU5vdFRleHR9PnRydWU8L3NwYW4+XSwgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydHlWYWx1ZVRleHR9PlwicGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNhcGl0YWwgbGV0dGVyXCI8L3NwYW4+XTxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ9XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifVwifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbi8+ICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ9XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz4gIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvbmN0dWF0aW9ufT57XCJ9XCJ9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuLz48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb25jdHVhdGlvbn0+e1wifVwifTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0U3RhbmRhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=