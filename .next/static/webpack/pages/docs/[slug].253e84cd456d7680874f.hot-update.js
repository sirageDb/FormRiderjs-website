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
___CSS_LOADER_EXPORT___.push([module.i, ".docs_pageLayout__2bHyd {\n  margin-left: 200px;\n  padding-top: 40px;\n}\n\n.docs_mainLayout__LHNZC {\n  max-width: 900px;\n  margin: auto;\n  padding-top: 20px;\n  color: #4D4D4D;\n}\n\n.docs_titleContainer__3URxJ {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.docs_title__6Fi6e {\n  margin-left: 10px;\n}\n\n.docs_brand__2685u {\n  width: 25px;\n}\n\n.docs_content__30oQp {\n  line-height: 1.6;\n  margin-top: 15px;\n}\n.docs_content__30oQp a {\n  color: #4568DC;\n  text-decoration: underline;\n}\n\n.docs_editPageContainer__1CV3b {\n  display: inline-block;\n}\n\n.docs_editPage__chE95 {\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  color: #4568DC;\n}\n\n.docs_editPageIcon__G01Vt {\n  width: 20px;\n  margin-left: 5px;\n}\n\n.docs_sideNavButton__36o6L {\n  display: none;\n}\n\n@media screen and (max-width: 481px) {\n  .docs_pageLayout__2bHyd {\n    margin-left: 0;\n    margin: auto;\n    width: 95%;\n    padding-top: 0;\n  }\n\n  .docs_sideNavButton__36o6L {\n    display: block;\n    position: fixed;\n    z-index: 10;\n    width: 60px;\n    height: 60px;\n    right: 20px;\n    top: 75%;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n    background-color: #202020;\n    cursor: pointer;\n  }\n\n  .docs_burgerIcon__Eluk2 {\n    max-width: 30px;\n  }\n\n  .docs_burgerIconHidden__y0ZOX {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://docs.module.scss","webpack://../styles/colors.scss","webpack://../styles/mediaQueyrBreakPoints.scss"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,cCVU;ADQd;;AAKA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,iBAAA;AAFJ;;AAKA;EACI,WAAA;AAFJ;;AAMA;EACI,gBAAA;EACA,gBAAA;AAHJ;AAII;EACI,cC3BK;ED4BL,0BAAA;AAFR;;AAOA;EACI,qBAAA;AAJJ;;AAOA;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,cCzCS;ADqCb;;AAOA;EACI,WAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,aAAA;AAJJ;;AAQA;EACI;IACI,cAAA;IACA,YAAA;IACA,UE1DW;IF2DX,cAAA;EALN;;EAOE;IACI,cAAA;IACA,eAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,WAAA;IACA,QAAA;IACA,kBAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,yBCjFI;IDkFJ,eAAA;EAJN;;EAME;IACI,eAAA;EAHN;;EAKE;IACI,aAAA;EAFN;AACF","sourcesContent":["@import \"../styles/colors.scss\";\r\n@import \"../styles/fontStyles.scss\";\r\n@import \"../styles/mediaQueyrBreakPoints.scss\";\r\n.pageLayout {\r\n    margin-left: 200px;\r\n    padding-top: 40px;\r\n}\r\n\r\n.mainLayout {\r\n    max-width: 900px;\r\n    margin: auto;\r\n    padding-top: 20px;\r\n    color: $blackBright;\r\n}\r\n\r\n.titleContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.title {\r\n    margin-left: 10px;\r\n}\r\n\r\n.brand {\r\n    width: 25px;\r\n}\r\n\r\n//=========================\r\n.content {\r\n    line-height: 1.6;\r\n    margin-top: 15px;\r\n    a {\r\n        color: $blueViolet;\r\n        text-decoration: underline;\r\n    }\r\n}\r\n\r\n// edit page banner ========================\r\n.editPageContainer {\r\n    display: inline-block;\r\n}\r\n\r\n.editPage {\r\n    margin-top: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: $blueViolet;\r\n}\r\n\r\n.editPageIcon {\r\n    width: 20px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.sideNavButton {\r\n    display: none;\r\n}\r\n\r\n//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@media screen and (max-width: $smallWidth) {\r\n    .pageLayout {\r\n        margin-left: 0;\r\n        margin: auto;\r\n        width: $layoutWidthSmall;\r\n        padding-top: 0;\r\n    }\r\n    .sideNavButton {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 10;\r\n        width: 60px;\r\n        height: 60px;\r\n        right: 20px;\r\n        top: 75%;\r\n        border-radius: 50%;\r\n        -webkit-border-radius: 50%;\r\n        -moz-border-radius: 50%;\r\n        -ms-border-radius: 50%;\r\n        -o-border-radius: 50%;\r\n        background-color: $blackDark;\r\n        cursor: pointer;\r\n    }\r\n    .burgerIcon {\r\n        max-width: 30px;\r\n    }\r\n    .burgerIconHidden {\r\n        display: none;\r\n    }\r\n}","$blackDark: #202020;\r\n$blackNoraml: #2C2F33;\r\n$blackBright: #4D4D4D;\r\n$whiteDark: #D4D4D4;\r\n$whiteNormal: #E1E1E1;\r\n$whiteBright:#EEEEEE;\r\n$whiteExtra :#ffffff;\r\n$blueViolet: #4568DC;\r\n$blueBright: #2BA0FF;\r\n$red: #E56C6C;\r\n$orange: #FF512F;\r\n$yellowDark: #FFAF26;\r\n$yellowNormal: #FFCB26;\r\n$green: #50CF96;","// screen width =====================================================================\r\n$smallWidth: 481px;\r\n// $mediumWidth: 768px;\r\n// $standardWidth: 1024px;\r\n// $largeWidth: 1200px;\r\n// $extraLargeWidth: 1201px;\r\n// Layout width =====================================================================\r\n$layoutWidthSmall: 95%;"],"sourceRoot":""}]);
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
	"burgerIcon": "docs_burgerIcon__Eluk2",
	"burgerIconHidden": "docs_burgerIconHidden__y0ZOX"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLHVCQUF1QixzQkFBc0IsR0FBRyw2QkFBNkIscUJBQXFCLGlCQUFpQixzQkFBc0IsbUJBQW1CLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLHdCQUF3QixnQkFBZ0IsR0FBRywwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsK0JBQStCLEdBQUcsb0NBQW9DLDBCQUEwQixHQUFHLDJCQUEyQixxQkFBcUIsa0JBQWtCLHdCQUF3QixtQkFBbUIsR0FBRywrQkFBK0IsZ0JBQWdCLHFCQUFxQixHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRywwQ0FBMEMsNkJBQTZCLHFCQUFxQixtQkFBbUIsaUJBQWlCLHFCQUFxQixLQUFLLGtDQUFrQyxxQkFBcUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsbUJBQW1CLGtCQUFrQixlQUFlLHlCQUF5QixpQ0FBaUMsOEJBQThCLDZCQUE2Qiw0QkFBNEIsZ0NBQWdDLHNCQUFzQixLQUFLLCtCQUErQixzQkFBc0IsS0FBSyxxQ0FBcUMsb0JBQW9CLEtBQUssR0FBRyxPQUFPLG9LQUFvSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLDJEQUEyRCwwQ0FBMEMscURBQXFELGlCQUFpQiwyQkFBMkIsMEJBQTBCLEtBQUsscUJBQXFCLHlCQUF5QixxQkFBcUIsMEJBQTBCLDRCQUE0QixLQUFLLHlCQUF5QixzQkFBc0IsNEJBQTRCLDRCQUE0QixLQUFLLGdCQUFnQiwwQkFBMEIsS0FBSyxnQkFBZ0Isb0JBQW9CLEtBQUssaURBQWlELHlCQUF5Qix5QkFBeUIsV0FBVywrQkFBK0IsdUNBQXVDLFNBQVMsS0FBSyw0RUFBNEUsOEJBQThCLEtBQUssbUJBQW1CLHlCQUF5QixzQkFBc0IsNEJBQTRCLDJCQUEyQixLQUFLLHVCQUF1QixvQkFBb0IseUJBQXlCLEtBQUssd0JBQXdCLHNCQUFzQixLQUFLLHlKQUF5SixxQkFBcUIsMkJBQTJCLHlCQUF5QixxQ0FBcUMsMkJBQTJCLFNBQVMsd0JBQXdCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLHFCQUFxQiwrQkFBK0IsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLHlDQUF5Qyw0QkFBNEIsU0FBUyxxQkFBcUIsNEJBQTRCLFNBQVMsMkJBQTJCLDBCQUEwQixTQUFTLEtBQUssdUJBQXVCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLHFCQUFxQix5QkFBeUIsMkJBQTJCLG9CQUFvQiwrR0FBK0csMkJBQTJCLDhCQUE4QiwyQkFBMkIsZ0NBQWdDLG9IQUFvSCxtQkFBbUI7QUFDMzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW3NsdWddLjI1M2U4NGNkNDU2ZDc2ODA4NzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZG9jc19wYWdlTGF5b3V0X18yYkh5ZCB7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuXFxuLmRvY3NfbWFpbkxheW91dF9fTEhOWkMge1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgY29sb3I6ICM0RDRENEQ7XFxufVxcblxcbi5kb2NzX3RpdGxlQ29udGFpbmVyX18zVVJ4SiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kb2NzX3RpdGxlX182Rmk2ZSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRvY3NfYnJhbmRfXzI2ODV1IHtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uZG9jc19jb250ZW50X18zMG9RcCB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmRvY3NfY29udGVudF9fMzBvUXAgYSB7XFxuICBjb2xvcjogIzQ1NjhEQztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZG9jc19lZGl0UGFnZUNvbnRhaW5lcl9fMUNWM2Ige1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZG9jc19lZGl0UGFnZV9fY2hFOTUge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM0NTY4REM7XFxufVxcblxcbi5kb2NzX2VkaXRQYWdlSWNvbl9fRzAxVnQge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZG9jc19zaWRlTmF2QnV0dG9uX18zNm82TCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODFweCkge1xcbiAgLmRvY3NfcGFnZUxheW91dF9fMmJIeWQge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5kb2NzX3NpZGVOYXZCdXR0b25fXzM2bzZMIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRvY3NfYnVyZ2VySWNvbl9fRWx1azIge1xcbiAgICBtYXgtd2lkdGg6IDMwcHg7XFxuICB9XFxuXFxuICAuZG9jc19idXJnZXJJY29uSGlkZGVuX195MFpPWCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9kb2NzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL21lZGlhUXVleXJCcmVha1BvaW50cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ1ZVO0FEUWQ7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUlJO0VBQ0ksY0MzQks7RUQ0QkwsMEJBQUE7QUFGUjs7QUFPQTtFQUNJLHFCQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNDekNTO0FEcUNiOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0FBSko7O0FBUUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsVUUxRFc7SUYyRFgsY0FBQTtFQUxOOztFQU9FO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkNqRkk7SURrRkosZUFBQTtFQUpOOztFQU1FO0lBQ0ksZUFBQTtFQUhOOztFQUtFO0lBQ0ksYUFBQTtFQUZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vc3R5bGVzL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zdHlsZXMvZm9udFN0eWxlcy5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9zdHlsZXMvbWVkaWFRdWV5ckJyZWFrUG9pbnRzLnNjc3NcXFwiO1xcclxcbi5wYWdlTGF5b3V0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5MYXlvdXQge1xcclxcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBjb2xvcjogJGJsYWNrQnJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGVDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgICBjb2xvcjogJGJsdWVWaW9sZXQ7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBlZGl0IHBhZ2UgYmFubmVyID09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5lZGl0UGFnZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRQYWdlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICRibHVlVmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFBhZ2VJY29uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlTmF2QnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLy9AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbFdpZHRoKSB7XFxyXFxuICAgIC5wYWdlTGF5b3V0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6ICRsYXlvdXRXaWR0aFNtYWxsO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNpZGVOYXZCdXR0b24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICB0b3A6IDc1JTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrRGFyaztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuYnVyZ2VySWNvbiB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1cmdlckljb25IaWRkZW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIixcIiRibGFja0Rhcms6ICMyMDIwMjA7XFxyXFxuJGJsYWNrTm9yYW1sOiAjMkMyRjMzO1xcclxcbiRibGFja0JyaWdodDogIzRENEQ0RDtcXHJcXG4kd2hpdGVEYXJrOiAjRDRENEQ0O1xcclxcbiR3aGl0ZU5vcm1hbDogI0UxRTFFMTtcXHJcXG4kd2hpdGVCcmlnaHQ6I0VFRUVFRTtcXHJcXG4kd2hpdGVFeHRyYSA6I2ZmZmZmZjtcXHJcXG4kYmx1ZVZpb2xldDogIzQ1NjhEQztcXHJcXG4kYmx1ZUJyaWdodDogIzJCQTBGRjtcXHJcXG4kcmVkOiAjRTU2QzZDO1xcclxcbiRvcmFuZ2U6ICNGRjUxMkY7XFxyXFxuJHllbGxvd0Rhcms6ICNGRkFGMjY7XFxyXFxuJHllbGxvd05vcm1hbDogI0ZGQ0IyNjtcXHJcXG4kZ3JlZW46ICM1MENGOTY7XCIsXCIvLyBzY3JlZW4gd2lkdGggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJHNtYWxsV2lkdGg6IDQ4MXB4O1xcclxcbi8vICRtZWRpdW1XaWR0aDogNzY4cHg7XFxyXFxuLy8gJHN0YW5kYXJkV2lkdGg6IDEwMjRweDtcXHJcXG4vLyAkbGFyZ2VXaWR0aDogMTIwMHB4O1xcclxcbi8vICRleHRyYUxhcmdlV2lkdGg6IDEyMDFweDtcXHJcXG4vLyBMYXlvdXQgd2lkdGggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGxheW91dFdpZHRoU21hbGw6IDk1JTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwYWdlTGF5b3V0XCI6IFwiZG9jc19wYWdlTGF5b3V0X18yYkh5ZFwiLFxuXHRcIm1haW5MYXlvdXRcIjogXCJkb2NzX21haW5MYXlvdXRfX0xITlpDXCIsXG5cdFwidGl0bGVDb250YWluZXJcIjogXCJkb2NzX3RpdGxlQ29udGFpbmVyX18zVVJ4SlwiLFxuXHRcInRpdGxlXCI6IFwiZG9jc190aXRsZV9fNkZpNmVcIixcblx0XCJicmFuZFwiOiBcImRvY3NfYnJhbmRfXzI2ODV1XCIsXG5cdFwiY29udGVudFwiOiBcImRvY3NfY29udGVudF9fMzBvUXBcIixcblx0XCJlZGl0UGFnZUNvbnRhaW5lclwiOiBcImRvY3NfZWRpdFBhZ2VDb250YWluZXJfXzFDVjNiXCIsXG5cdFwiZWRpdFBhZ2VcIjogXCJkb2NzX2VkaXRQYWdlX19jaEU5NVwiLFxuXHRcImVkaXRQYWdlSWNvblwiOiBcImRvY3NfZWRpdFBhZ2VJY29uX19HMDFWdFwiLFxuXHRcInNpZGVOYXZCdXR0b25cIjogXCJkb2NzX3NpZGVOYXZCdXR0b25fXzM2bzZMXCIsXG5cdFwiYnVyZ2VySWNvblwiOiBcImRvY3NfYnVyZ2VySWNvbl9fRWx1azJcIixcblx0XCJidXJnZXJJY29uSGlkZGVuXCI6IFwiZG9jc19idXJnZXJJY29uSGlkZGVuX195MFpPWFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=