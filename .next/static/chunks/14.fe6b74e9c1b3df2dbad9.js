(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{BCIP:function(r,t,i){"use strict";i.r(t),i.d(t,"CheckInputContainSpecialCharacters",(function(){return e}));class e{constructor(){this.validationErrorArray=[]}validate(r,t,i,e,n){let o=function(r){return r.length>0||0!==r.length&&void 0},a=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,s=(e.match(a)||[]).length;let u=e.length;if(!0===t){if(!(u>s))return!0;this.validationErrorArray.push(i,n)}else if(!1===t){if(!a.test(e))return!0;this.validationErrorArray.push(i,n)}if("number"===typeof t&&o(e)){if(s===t)return!0;this.validationErrorArray.push(i,n)}if("object"===typeof t&&o(e)){let r=t[0],e=t[1];if("number"===typeof r&&!0===e){if(!(s<r))return!0;this.validationErrorArray.push(i,n)}else if(!0===r&&"number"===typeof e){if(!(s>e))return!0;this.validationErrorArray.push(i,n)}else"number"===typeof r&&"number"===typeof e&&(s<r||s>e)&&this.validationErrorArray.push(i,n)}}}}}]);