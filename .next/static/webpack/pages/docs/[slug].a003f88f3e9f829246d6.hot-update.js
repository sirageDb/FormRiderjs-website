webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./pages/docs.module.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./pages/docs.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".docs_pageLayout__2bHyd {\n  margin-left: 200px;\n  padding-top: 40px;\n}\n\n.docs_mainLayout__LHNZC {\n  max-width: 900px;\n  margin: auto;\n  padding-top: 20px;\n  color: #4D4D4D;\n}\n\n.docs_titleContainer__3URxJ {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.docs_title__6Fi6e {\n  margin-left: 10px;\n}\n\n.docs_brand__2685u {\n  width: 25px;\n}\n\n.docs_content__30oQp {\n  line-height: 1.6;\n  margin-top: 15px;\n}\n.docs_content__30oQp a {\n  color: #4568DC;\n  text-decoration: underline;\n}\n\n.docs_editPageContainer__1CV3b {\n  display: inline-block;\n}\n\n.docs_editPage__chE95 {\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  color: #4568DC;\n}\n\n.docs_editPageIcon__G01Vt {\n  width: 20px;\n  margin-left: 5px;\n}\n\n.docs_sideNavButton__36o6L {\n  display: none;\n}\n\n@media screen and (max-width: 481px) {\n  .docs_pageLayout__2bHyd {\n    margin-left: 0;\n    margin: auto;\n    width: 95%;\n    padding-top: 0;\n  }\n\n  .docs_sideNavButton__36o6L {\n    display: block;\n    position: fixed;\n    z-index: 10;\n    width: 60px;\n    height: 60px;\n    right: 20px;\n    top: 75%;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n    background-color: #202020;\n    cursor: pointer;\n  }\n\n  .docs_burgerIcon__Eluk2 {\n    max-width: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://docs.module.scss","webpack://../styles/colors.scss","webpack://../styles/mediaQueyrBreakPoints.scss"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,cCVU;ADQd;;AAKA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,iBAAA;AAFJ;;AAKA;EACI,WAAA;AAFJ;;AAMA;EACI,gBAAA;EACA,gBAAA;AAHJ;AAII;EACI,cC3BK;ED4BL,0BAAA;AAFR;;AAOA;EACI,qBAAA;AAJJ;;AAOA;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,cCzCS;ADqCb;;AAOA;EACI,WAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,aAAA;AAJJ;;AAQA;EACI;IACI,cAAA;IACA,YAAA;IACA,UE1DW;IF2DX,cAAA;EALN;;EAOE;IACI,cAAA;IACA,eAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,WAAA;IACA,QAAA;IACA,kBAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,yBCjFI;IDkFJ,eAAA;EAJN;;EAME;IACI,eAAA;EAHN;AACF","sourcesContent":["@import \"../styles/colors.scss\";\r\n@import \"../styles/fontStyles.scss\";\r\n@import \"../styles/mediaQueyrBreakPoints.scss\";\r\n.pageLayout {\r\n    margin-left: 200px;\r\n    padding-top: 40px;\r\n}\r\n\r\n.mainLayout {\r\n    max-width: 900px;\r\n    margin: auto;\r\n    padding-top: 20px;\r\n    color: $blackBright;\r\n}\r\n\r\n.titleContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.title {\r\n    margin-left: 10px;\r\n}\r\n\r\n.brand {\r\n    width: 25px;\r\n}\r\n\r\n//=========================\r\n.content {\r\n    line-height: 1.6;\r\n    margin-top: 15px;\r\n    a {\r\n        color: $blueViolet;\r\n        text-decoration: underline;\r\n    }\r\n}\r\n\r\n// edit page banner ========================\r\n.editPageContainer {\r\n    display: inline-block;\r\n}\r\n\r\n.editPage {\r\n    margin-top: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: $blueViolet;\r\n}\r\n\r\n.editPageIcon {\r\n    width: 20px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.sideNavButton {\r\n    display: none;\r\n}\r\n\r\n//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@media screen and (max-width: $smallWidth) {\r\n    .pageLayout {\r\n        margin-left: 0;\r\n        margin: auto;\r\n        width: $layoutWidthSmall;\r\n        padding-top: 0;\r\n    }\r\n    .sideNavButton {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 10;\r\n        width: 60px;\r\n        height: 60px;\r\n        right: 20px;\r\n        top: 75%;\r\n        border-radius: 50%;\r\n        -webkit-border-radius: 50%;\r\n        -moz-border-radius: 50%;\r\n        -ms-border-radius: 50%;\r\n        -o-border-radius: 50%;\r\n        background-color: $blackDark;\r\n        cursor: pointer;\r\n    }\r\n    .burgerIcon {\r\n        max-width: 30px;\r\n    }\r\n}","$blackDark: #202020;\r\n$blackNoraml: #2C2F33;\r\n$blackBright: #4D4D4D;\r\n$whiteDark: #D4D4D4;\r\n$whiteNormal: #E1E1E1;\r\n$whiteBright:#EEEEEE;\r\n$whiteExtra :#ffffff;\r\n$blueViolet: #4568DC;\r\n$blueBright: #2BA0FF;\r\n$red: #E56C6C;\r\n$orange: #FF512F;\r\n$yellowDark: #FFAF26;\r\n$yellowNormal: #FFCB26;\r\n$green: #50CF96;","// screen width =====================================================================\r\n$smallWidth: 481px;\r\n// $mediumWidth: 768px;\r\n// $standardWidth: 1024px;\r\n// $largeWidth: 1200px;\r\n// $extraLargeWidth: 1201px;\r\n// Layout width =====================================================================\r\n$layoutWidthSmall: 95%;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pageLayout": "docs_pageLayout__2bHyd",
	"mainLayout": "docs_mainLayout__LHNZC",
	"titleContainer": "docs_titleContainer__3URxJ",
	"title": "docs_title__6Fi6e",
	"brand": "docs_brand__2685u",
	"content": "docs_content__30oQp",
	"editPageContainer": "docs_editPageContainer__1CV3b",
	"editPage": "docs_editPage__chE95",
	"editPageIcon": "docs_editPageIcon__G01Vt",
	"sideNavButton": "docs_sideNavButton__36o6L",
	"burgerIcon": "docs_burgerIcon__Eluk2"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLHVCQUF1QixzQkFBc0IsR0FBRyw2QkFBNkIscUJBQXFCLGlCQUFpQixzQkFBc0IsbUJBQW1CLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLHdCQUF3QixnQkFBZ0IsR0FBRywwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsK0JBQStCLEdBQUcsb0NBQW9DLDBCQUEwQixHQUFHLDJCQUEyQixxQkFBcUIsa0JBQWtCLHdCQUF3QixtQkFBbUIsR0FBRywrQkFBK0IsZ0JBQWdCLHFCQUFxQixHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRywwQ0FBMEMsNkJBQTZCLHFCQUFxQixtQkFBbUIsaUJBQWlCLHFCQUFxQixLQUFLLGtDQUFrQyxxQkFBcUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsbUJBQW1CLGtCQUFrQixlQUFlLHlCQUF5QixpQ0FBaUMsOEJBQThCLDZCQUE2Qiw0QkFBNEIsZ0NBQWdDLHNCQUFzQixLQUFLLCtCQUErQixzQkFBc0IsS0FBSyxHQUFHLE9BQU8sb0tBQW9LLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssMkRBQTJELDBDQUEwQyxxREFBcUQsaUJBQWlCLDJCQUEyQiwwQkFBMEIsS0FBSyxxQkFBcUIseUJBQXlCLHFCQUFxQiwwQkFBMEIsNEJBQTRCLEtBQUsseUJBQXlCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLEtBQUssZ0JBQWdCLDBCQUEwQixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxpREFBaUQseUJBQXlCLHlCQUF5QixXQUFXLCtCQUErQix1Q0FBdUMsU0FBUyxLQUFLLDRFQUE0RSw4QkFBOEIsS0FBSyxtQkFBbUIseUJBQXlCLHNCQUFzQiw0QkFBNEIsMkJBQTJCLEtBQUssdUJBQXVCLG9CQUFvQix5QkFBeUIsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUsseUpBQXlKLHFCQUFxQiwyQkFBMkIseUJBQXlCLHFDQUFxQywyQkFBMkIsU0FBUyx3QkFBd0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix3QkFBd0IscUJBQXFCLCtCQUErQix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MseUNBQXlDLDRCQUE0QixTQUFTLHFCQUFxQiw0QkFBNEIsU0FBUyxLQUFLLHVCQUF1QiwwQkFBMEIsMEJBQTBCLHdCQUF3QiwwQkFBMEIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLGtCQUFrQixxQkFBcUIseUJBQXlCLDJCQUEyQixvQkFBb0IsK0dBQStHLDJCQUEyQiw4QkFBOEIsMkJBQTJCLGdDQUFnQyxvSEFBb0gsbUJBQW1CO0FBQzF1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uYTAwM2Y4OGYzZTlmODI5MjQ2ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kb2NzX3BhZ2VMYXlvdXRfXzJiSHlkIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uZG9jc19tYWluTGF5b3V0X19MSE5aQyB7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBjb2xvcjogIzRENEQ0RDtcXG59XFxuXFxuLmRvY3NfdGl0bGVDb250YWluZXJfXzNVUnhKIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRvY3NfdGl0bGVfXzZGaTZlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZG9jc19icmFuZF9fMjY4NXUge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5kb2NzX2NvbnRlbnRfXzMwb1FwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uZG9jc19jb250ZW50X18zMG9RcCBhIHtcXG4gIGNvbG9yOiAjNDU2OERDO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5kb2NzX2VkaXRQYWdlQ29udGFpbmVyX18xQ1YzYiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kb2NzX2VkaXRQYWdlX19jaEU5NSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzQ1NjhEQztcXG59XFxuXFxuLmRvY3NfZWRpdFBhZ2VJY29uX19HMDFWdCB7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kb2NzX3NpZGVOYXZCdXR0b25fXzM2bzZMIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MXB4KSB7XFxuICAuZG9jc19wYWdlTGF5b3V0X18yYkh5ZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgfVxcblxcbiAgLmRvY3Nfc2lkZU5hdkJ1dHRvbl9fMzZvNkwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHRvcDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuZG9jc19idXJnZXJJY29uX19FbHVrMiB7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2RvY3MubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi9zdHlsZXMvY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi9zdHlsZXMvbWVkaWFRdWV5ckJyZWFrUG9pbnRzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNDVlU7QURRZDs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBSUk7RUFDSSxjQzNCSztFRDRCTCwwQkFBQTtBQUZSOztBQU9BO0VBQ0kscUJBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N6Q1M7QURxQ2I7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7QUFKSjs7QUFRQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxVRTFEVztJRjJEWCxjQUFBO0VBTE47O0VBT0U7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQ2pGSTtJRGtGSixlQUFBO0VBSk47O0VBTUU7SUFDSSxlQUFBO0VBSE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi9zdHlsZXMvY29sb3JzLnNjc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3N0eWxlcy9mb250U3R5bGVzLnNjc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uL3N0eWxlcy9tZWRpYVF1ZXlyQnJlYWtQb2ludHMuc2Nzc1xcXCI7XFxyXFxuLnBhZ2VMYXlvdXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkxheW91dCB7XFxyXFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAkYmxhY2tCcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkYmx1ZVZpb2xldDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vIGVkaXQgcGFnZSBiYW5uZXIgPT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmVkaXRQYWdlQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFBhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogJGJsdWVWaW9sZXQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0UGFnZUljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVOYXZCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vL0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsV2lkdGgpIHtcXHJcXG4gICAgLnBhZ2VMYXlvdXQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogJGxheW91dFdpZHRoU21hbGw7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2lkZU5hdkJ1dHRvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgICAgIHRvcDogNzUlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tEYXJrO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5idXJnZXJJY29uIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzBweDtcXHJcXG4gICAgfVxcclxcbn1cIixcIiRibGFja0Rhcms6ICMyMDIwMjA7XFxyXFxuJGJsYWNrTm9yYW1sOiAjMkMyRjMzO1xcclxcbiRibGFja0JyaWdodDogIzRENEQ0RDtcXHJcXG4kd2hpdGVEYXJrOiAjRDRENEQ0O1xcclxcbiR3aGl0ZU5vcm1hbDogI0UxRTFFMTtcXHJcXG4kd2hpdGVCcmlnaHQ6I0VFRUVFRTtcXHJcXG4kd2hpdGVFeHRyYSA6I2ZmZmZmZjtcXHJcXG4kYmx1ZVZpb2xldDogIzQ1NjhEQztcXHJcXG4kYmx1ZUJyaWdodDogIzJCQTBGRjtcXHJcXG4kcmVkOiAjRTU2QzZDO1xcclxcbiRvcmFuZ2U6ICNGRjUxMkY7XFxyXFxuJHllbGxvd0Rhcms6ICNGRkFGMjY7XFxyXFxuJHllbGxvd05vcm1hbDogI0ZGQ0IyNjtcXHJcXG4kZ3JlZW46ICM1MENGOTY7XCIsXCIvLyBzY3JlZW4gd2lkdGggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJHNtYWxsV2lkdGg6IDQ4MXB4O1xcclxcbi8vICRtZWRpdW1XaWR0aDogNzY4cHg7XFxyXFxuLy8gJHN0YW5kYXJkV2lkdGg6IDEwMjRweDtcXHJcXG4vLyAkbGFyZ2VXaWR0aDogMTIwMHB4O1xcclxcbi8vICRleHRyYUxhcmdlV2lkdGg6IDEyMDFweDtcXHJcXG4vLyBMYXlvdXQgd2lkdGggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGxheW91dFdpZHRoU21hbGw6IDk1JTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwYWdlTGF5b3V0XCI6IFwiZG9jc19wYWdlTGF5b3V0X18yYkh5ZFwiLFxuXHRcIm1haW5MYXlvdXRcIjogXCJkb2NzX21haW5MYXlvdXRfX0xITlpDXCIsXG5cdFwidGl0bGVDb250YWluZXJcIjogXCJkb2NzX3RpdGxlQ29udGFpbmVyX18zVVJ4SlwiLFxuXHRcInRpdGxlXCI6IFwiZG9jc190aXRsZV9fNkZpNmVcIixcblx0XCJicmFuZFwiOiBcImRvY3NfYnJhbmRfXzI2ODV1XCIsXG5cdFwiY29udGVudFwiOiBcImRvY3NfY29udGVudF9fMzBvUXBcIixcblx0XCJlZGl0UGFnZUNvbnRhaW5lclwiOiBcImRvY3NfZWRpdFBhZ2VDb250YWluZXJfXzFDVjNiXCIsXG5cdFwiZWRpdFBhZ2VcIjogXCJkb2NzX2VkaXRQYWdlX19jaEU5NVwiLFxuXHRcImVkaXRQYWdlSWNvblwiOiBcImRvY3NfZWRpdFBhZ2VJY29uX19HMDFWdFwiLFxuXHRcInNpZGVOYXZCdXR0b25cIjogXCJkb2NzX3NpZGVOYXZCdXR0b25fXzM2bzZMXCIsXG5cdFwiYnVyZ2VySWNvblwiOiBcImRvY3NfYnVyZ2VySWNvbl9fRWx1azJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9