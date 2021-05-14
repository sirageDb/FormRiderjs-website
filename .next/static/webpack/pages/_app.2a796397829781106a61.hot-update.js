webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  padding-top: 27px;\n  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  background-color: #EEEEEE;\n  position: relative;\n  min-height: 100vh;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton:hover {\n  text-decoration: none;\n}\nbutton:focus {\n  text-decoration: none;\n}\n\ninput {\n  font-family: inherit;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  font-family: inherit;\n}\n\n.theMotherOfAllContainers {\n  padding-bottom: 200px;\n}\n\n@media only screen and (max-width: 481px) {\n  theMotherOfAllContainers {\n    padding-bottom: 400px;\n  }\n}\npre {\n  width: 800px;\n  margin: 20px auto;\n  font-size: 14px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\nhr {\n  color: #969595;\n  background-color: #969595;\n  height: 3px;\n  width: 800px;\n  margin: 20px auto;\n  outline: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://globals.scss","webpack://colors.scss","webpack://fontStyles.scss"],"names":[],"mappings":"AAGA;;EAEI,iBAAA;EACA,2GAAA;EACA,yBCFS;EDIT,kBAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,qBAAA;AAHJ;;AAMA;EACI,sBAAA;EACA,SAAA;AAHJ;;AAMA;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,YAAA;AAHJ;AAII;EACI,qBAAA;AAFR;AAII;EACI,qBAAA;AAFR;;AAMA;EACI,oBAAA;EACA,aAAA;EACA,YAAA;AAHJ;;AAMA;EACI,oBAAA;AAHJ;;AAMA;EACI,qBAAA;AAHJ;;AAMA;EACI;IACI,qBAAA;EAHN;AACF;AAOA;EACI,YAAA;EACA,iBAAA;EACA,eE5DY;EF6DZ,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;AALJ;;AAQA;EACI,cAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;AALJ","sourcesContent":["@import \"./colors.scss\";\r\n@import \"./fontStyles.scss\";\r\n@import \"./mediaQueyrBreakPoints.scss\";\r\nhtml,\r\nbody {\r\n    padding-top: 27px;\r\n    font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n    background-color: $whiteBright;\r\n    //These combined with the footer will keep it at the bottom of any page\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    outline: none;\r\n    text-decoration: none;\r\n    border: none;\r\n    &:hover {\r\n        text-decoration: none;\r\n    }\r\n    &:focus {\r\n        text-decoration: none;\r\n    }\r\n}\r\n\r\ninput {\r\n    font-family: inherit;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\ntextarea {\r\n    font-family: inherit;\r\n}\r\n\r\n.theMotherOfAllContainers {\r\n    padding-bottom: 200px;\r\n}\r\n\r\n@media only screen and (max-width: $smallWidth) {\r\n    theMotherOfAllContainers {\r\n        padding-bottom: 400px;\r\n    }\r\n}\r\n\r\n//content styles==============================================================\r\npre {\r\n    width: 800px;\r\n    margin: 20px auto;\r\n    font-size: $fontSizeSmall;\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n}\r\n\r\nhr {\r\n    color: rgb(150, 149, 149);\r\n    background-color: rgb(150, 149, 149);\r\n    height: 3px;\r\n    width: 800px;\r\n    margin: 20px auto;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n// Media queries @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@media screen and (max-width: $smallWidth) {}","$blackDark: #202020;\r\n$blackNoraml: #2C2F33;\r\n$blackBright: #4D4D4D;\r\n$whiteDark: #D4D4D4;\r\n$whiteNormal: #E1E1E1;\r\n$whiteBright:#EEEEEE;\r\n$whiteExtra :#ffffff;\r\n$blueViolet: #4568DC;\r\n$blueBright: #2BA0FF;\r\n$red: #E56C6C;\r\n$orange: #FF512F;\r\n$yellowDark: #FFAF26;\r\n$yellowNormal: #FFCB26;\r\n$green: #50CF96;","$fontSizeSmaller: 12px;\r\n$fontSizeSmall: 14px;\r\n$fontSizeNormal: 16px;\r\n$fontSizeMedium: 18px;\r\n$fontSizeBig: 20px;\r\n$fontSizeBigger: 26px;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixzQkFBc0IsZ0hBQWdILDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsY0FBYyxHQUFHLFlBQVkseUJBQXlCLHVCQUF1QixrQkFBa0IsMEJBQTBCLGlCQUFpQixHQUFHLGdCQUFnQiwwQkFBMEIsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLGlCQUFpQixHQUFHLGNBQWMseUJBQXlCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLCtDQUErQyw4QkFBOEIsNEJBQTRCLEtBQUssR0FBRyxPQUFPLGlCQUFpQixzQkFBc0Isb0JBQW9CLHVCQUF1QiwrQkFBK0IsNEJBQTRCLDJCQUEyQiwwQkFBMEIsR0FBRyxRQUFRLG1CQUFtQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQixzQkFBc0Isa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sa0lBQWtJLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsbURBQW1ELGtDQUFrQyw2Q0FBNkMsbUJBQW1CLDBCQUEwQixvSEFBb0gsdUNBQXVDLDBHQUEwRywwQkFBMEIsS0FBSyxXQUFXLHVCQUF1Qiw4QkFBOEIsS0FBSyxXQUFXLCtCQUErQixrQkFBa0IsS0FBSyxnQkFBZ0IsNkJBQTZCLDJCQUEyQixzQkFBc0IsOEJBQThCLHFCQUFxQixpQkFBaUIsa0NBQWtDLFNBQVMsaUJBQWlCLGtDQUFrQyxTQUFTLEtBQUssZUFBZSw2QkFBNkIsc0JBQXNCLHFCQUFxQixLQUFLLGtCQUFrQiw2QkFBNkIsS0FBSyxtQ0FBbUMsOEJBQThCLEtBQUsseURBQXlELGtDQUFrQyxrQ0FBa0MsU0FBUyxLQUFLLCtGQUErRixxQkFBcUIsMEJBQTBCLGtDQUFrQywyQkFBMkIsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLEtBQUssWUFBWSxrQ0FBa0MsNkNBQTZDLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQixxQkFBcUIsS0FBSyw4SkFBOEosdUJBQXVCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLHFCQUFxQix5QkFBeUIsMkJBQTJCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDBCQUEwQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixtQkFBbUI7QUFDbHVJO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYTc5NjM5NzgyOTc4MTEwNmE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAyN3B4O1xcbiAgZm9udC1mYW1pbHk6IFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnRoZU1vdGhlck9mQWxsQ29udGFpbmVycyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcXG4gIHRoZU1vdGhlck9mQWxsQ29udGFpbmVycyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MDBweDtcXG4gIH1cXG59XFxucHJlIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmhyIHtcXG4gIGNvbG9yOiAjOTY5NTk1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2OTU5NTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vZ2xvYmFscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly9mb250U3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0VBRUksaUJBQUE7RUFDQSwyR0FBQTtFQUNBLHlCQ0ZTO0VESVQsa0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFJSTtFQUNJLHFCQUFBO0FBRlI7QUFJSTtFQUNJLHFCQUFBO0FBRlI7O0FBTUE7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJO0lBQ0kscUJBQUE7RUFITjtBQUNGO0FBT0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlRTVEWTtFRjZEWixrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFMSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL2ZvbnRTdHlsZXMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9tZWRpYVF1ZXlyQnJlYWtQb2ludHMuc2Nzc1xcXCI7XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVCcmlnaHQ7XFxyXFxuICAgIC8vVGhlc2UgY29tYmluZWQgd2l0aCB0aGUgZm9vdGVyIHdpbGwga2VlcCBpdCBhdCB0aGUgYm90dG9tIG9mIGFueSBwYWdlXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4udGhlTW90aGVyT2ZBbGxDb250YWluZXJzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbFdpZHRoKSB7XFxyXFxuICAgIHRoZU1vdGhlck9mQWxsQ29udGFpbmVycyB7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9jb250ZW50IHN0eWxlcz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxucHJlIHtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAkZm9udFNpemVTbWFsbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBjb2xvcjogcmdiKDE1MCwgMTQ5LCAxNDkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNDksIDE0OSk7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhIHF1ZXJpZXMgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsV2lkdGgpIHt9XCIsXCIkYmxhY2tEYXJrOiAjMjAyMDIwO1xcclxcbiRibGFja05vcmFtbDogIzJDMkYzMztcXHJcXG4kYmxhY2tCcmlnaHQ6ICM0RDRENEQ7XFxyXFxuJHdoaXRlRGFyazogI0Q0RDRENDtcXHJcXG4kd2hpdGVOb3JtYWw6ICNFMUUxRTE7XFxyXFxuJHdoaXRlQnJpZ2h0OiNFRUVFRUU7XFxyXFxuJHdoaXRlRXh0cmEgOiNmZmZmZmY7XFxyXFxuJGJsdWVWaW9sZXQ6ICM0NTY4REM7XFxyXFxuJGJsdWVCcmlnaHQ6ICMyQkEwRkY7XFxyXFxuJHJlZDogI0U1NkM2QztcXHJcXG4kb3JhbmdlOiAjRkY1MTJGO1xcclxcbiR5ZWxsb3dEYXJrOiAjRkZBRjI2O1xcclxcbiR5ZWxsb3dOb3JtYWw6ICNGRkNCMjY7XFxyXFxuJGdyZWVuOiAjNTBDRjk2O1wiLFwiJGZvbnRTaXplU21hbGxlcjogMTJweDtcXHJcXG4kZm9udFNpemVTbWFsbDogMTRweDtcXHJcXG4kZm9udFNpemVOb3JtYWw6IDE2cHg7XFxyXFxuJGZvbnRTaXplTWVkaXVtOiAxOHB4O1xcclxcbiRmb250U2l6ZUJpZzogMjBweDtcXHJcXG4kZm9udFNpemVCaWdnZXI6IDI2cHg7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=