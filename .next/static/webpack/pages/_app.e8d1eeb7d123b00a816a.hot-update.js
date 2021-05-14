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
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  padding-top: 27px;\n  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  background-color: #EEEEEE;\n  position: relative;\n  min-height: 100vh;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton:hover {\n  text-decoration: none;\n}\nbutton:focus {\n  text-decoration: none;\n}\n\ninput {\n  font-family: inherit;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  font-family: inherit;\n}\n\n.theMotherOfAllContainers {\n  padding-bottom: 200px;\n}\n\npre {\n  width: 800px;\n  margin: 20px auto;\n  font-size: 14px;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n}\n\nhr {\n  color: #969595;\n  background-color: #969595;\n  height: 3px;\n  width: 800px;\n  margin: 20px auto;\n  outline: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://globals.scss","webpack://colors.scss","webpack://fontStyles.scss"],"names":[],"mappings":"AAGA;;EAEI,iBAAA;EACA,2GAAA;EACA,yBCFS;EDIT,kBAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,qBAAA;AAHJ;;AAMA;EACI,sBAAA;EACA,SAAA;AAHJ;;AAMA;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,YAAA;AAHJ;AAII;EACI,qBAAA;AAFR;AAII;EACI,qBAAA;AAFR;;AAMA;EACI,oBAAA;EACA,aAAA;EACA,YAAA;AAHJ;;AAMA;EACI,oBAAA;AAHJ;;AAMA;EACI,qBAAA;AAHJ;;AAOA;EACI,YAAA;EACA,iBAAA;EACA,eEtDY;EFuDZ,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;AAJJ","sourcesContent":["@import \"./colors.scss\";\r\n@import \"./fontStyles.scss\";\r\n@import \"./mediaQueyrBreakPoints.scss\";\r\nhtml,\r\nbody {\r\n    padding-top: 27px;\r\n    font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n    background-color: $whiteBright;\r\n    //These combined with the footer will keep it at the bottom of any page\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    outline: none;\r\n    text-decoration: none;\r\n    border: none;\r\n    &:hover {\r\n        text-decoration: none;\r\n    }\r\n    &:focus {\r\n        text-decoration: none;\r\n    }\r\n}\r\n\r\ninput {\r\n    font-family: inherit;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\ntextarea {\r\n    font-family: inherit;\r\n}\r\n\r\n.theMotherOfAllContainers {\r\n    padding-bottom: 200px;\r\n}\r\n\r\n//content styles==============================================================\r\npre {\r\n    width: 800px;\r\n    margin: 20px auto;\r\n    font-size: $fontSizeSmall;\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n}\r\n\r\nhr {\r\n    color: rgb(150, 149, 149);\r\n    background-color: rgb(150, 149, 149);\r\n    height: 3px;\r\n    width: 800px;\r\n    margin: 20px auto;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n// Media queries @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@media screen and (max-width: $smallWidth) {}","$blackDark: #202020;\r\n$blackNoraml: #2C2F33;\r\n$blackBright: #4D4D4D;\r\n$whiteDark: #D4D4D4;\r\n$whiteNormal: #E1E1E1;\r\n$whiteBright:#EEEEEE;\r\n$whiteExtra :#ffffff;\r\n$blueViolet: #4568DC;\r\n$blueBright: #2BA0FF;\r\n$red: #E56C6C;\r\n$orange: #FF512F;\r\n$yellowDark: #FFAF26;\r\n$yellowNormal: #FFCB26;\r\n$green: #50CF96;","$fontSizeSmaller: 12px;\r\n$fontSizeSmall: 14px;\r\n$fontSizeNormal: 16px;\r\n$fontSizeMedium: 18px;\r\n$fontSizeBig: 20px;\r\n$fontSizeBigger: 26px;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixzQkFBc0IsZ0hBQWdILDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsY0FBYyxHQUFHLFlBQVkseUJBQXlCLHVCQUF1QixrQkFBa0IsMEJBQTBCLGlCQUFpQixHQUFHLGdCQUFnQiwwQkFBMEIsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLGlCQUFpQixHQUFHLGNBQWMseUJBQXlCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLFNBQVMsaUJBQWlCLHNCQUFzQixvQkFBb0IsdUJBQXVCLCtCQUErQiw0QkFBNEIsMkJBQTJCLDBCQUEwQixHQUFHLFFBQVEsbUJBQW1CLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixrQkFBa0IsaUJBQWlCLEdBQUcsT0FBTyxrSUFBa0ksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLG1EQUFtRCxrQ0FBa0MsNkNBQTZDLG1CQUFtQiwwQkFBMEIsb0hBQW9ILHVDQUF1QywwR0FBMEcsMEJBQTBCLEtBQUssV0FBVyx1QkFBdUIsOEJBQThCLEtBQUssV0FBVywrQkFBK0Isa0JBQWtCLEtBQUssZ0JBQWdCLDZCQUE2QiwyQkFBMkIsc0JBQXNCLDhCQUE4QixxQkFBcUIsaUJBQWlCLGtDQUFrQyxTQUFTLGlCQUFpQixrQ0FBa0MsU0FBUyxLQUFLLGVBQWUsNkJBQTZCLHNCQUFzQixxQkFBcUIsS0FBSyxrQkFBa0IsNkJBQTZCLEtBQUssbUNBQW1DLDhCQUE4QixLQUFLLCtGQUErRixxQkFBcUIsMEJBQTBCLGtDQUFrQywyQkFBMkIsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLEtBQUssWUFBWSxrQ0FBa0MsNkNBQTZDLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQixxQkFBcUIsS0FBSyw4SkFBOEosdUJBQXVCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLHFCQUFxQix5QkFBeUIsMkJBQTJCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDBCQUEwQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixtQkFBbUI7QUFDejhIO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lOGQxZWViN2QxMjNiMDBhODE2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmctdG9wOiAyN3B4O1xcbiAgZm9udC1mYW1pbHk6IFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnRoZU1vdGhlck9mQWxsQ29udGFpbmVycyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxufVxcblxcbnByZSB7XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5ociB7XFxuICBjb2xvcjogIzk2OTU5NTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Njk1OTU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vZm9udFN0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOztFQUVJLGlCQUFBO0VBQ0EsMkdBQUE7RUFDQSx5QkNGUztFRElULGtCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU1BO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBSUk7RUFDSSxxQkFBQTtBQUZSO0FBSUk7RUFDSSxxQkFBQTtBQUZSOztBQU1BO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksb0JBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlRXREWTtFRnVEWixrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL2ZvbnRTdHlsZXMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9tZWRpYVF1ZXlyQnJlYWtQb2ludHMuc2Nzc1xcXCI7XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVCcmlnaHQ7XFxyXFxuICAgIC8vVGhlc2UgY29tYmluZWQgd2l0aCB0aGUgZm9vdGVyIHdpbGwga2VlcCBpdCBhdCB0aGUgYm90dG9tIG9mIGFueSBwYWdlXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4udGhlTW90aGVyT2ZBbGxDb250YWluZXJzIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vL2NvbnRlbnQgc3R5bGVzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5wcmUge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICBmb250LXNpemU6ICRmb250U2l6ZVNtYWxsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNDksIDE0OSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE0OSwgMTQ5KTtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWEgcXVlcmllcyBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGxXaWR0aCkge31cIixcIiRibGFja0Rhcms6ICMyMDIwMjA7XFxyXFxuJGJsYWNrTm9yYW1sOiAjMkMyRjMzO1xcclxcbiRibGFja0JyaWdodDogIzRENEQ0RDtcXHJcXG4kd2hpdGVEYXJrOiAjRDRENEQ0O1xcclxcbiR3aGl0ZU5vcm1hbDogI0UxRTFFMTtcXHJcXG4kd2hpdGVCcmlnaHQ6I0VFRUVFRTtcXHJcXG4kd2hpdGVFeHRyYSA6I2ZmZmZmZjtcXHJcXG4kYmx1ZVZpb2xldDogIzQ1NjhEQztcXHJcXG4kYmx1ZUJyaWdodDogIzJCQTBGRjtcXHJcXG4kcmVkOiAjRTU2QzZDO1xcclxcbiRvcmFuZ2U6ICNGRjUxMkY7XFxyXFxuJHllbGxvd0Rhcms6ICNGRkFGMjY7XFxyXFxuJHllbGxvd05vcm1hbDogI0ZGQ0IyNjtcXHJcXG4kZ3JlZW46ICM1MENGOTY7XCIsXCIkZm9udFNpemVTbWFsbGVyOiAxMnB4O1xcclxcbiRmb250U2l6ZVNtYWxsOiAxNHB4O1xcclxcbiRmb250U2l6ZU5vcm1hbDogMTZweDtcXHJcXG4kZm9udFNpemVNZWRpdW06IDE4cHg7XFxyXFxuJGZvbnRTaXplQmlnOiAyMHB4O1xcclxcbiRmb250U2l6ZUJpZ2dlcjogMjZweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==