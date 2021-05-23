webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/docs/[slug]/index.js":
/*!************************************!*\
  !*** ./pages/docs/[slug]/index.js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Me_Amigos_formriderjs_FormRiderjs_website_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/sideNav/Sidenav */ "./components/sideNav/Sidenav.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages/docs.module.scss */ "./pages/docs.module.scss");
/* harmony import */ var _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Me\\Amigos\\formriderjs\\FormRiderjs-website\\pages\\docs\\[slug]\\index.js",
    _s = $RefreshSig$();










function Docs(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;
  //extracting real data from data using gray-matter package
  var realData = data.map(function (docs) {
    return gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(docs);
  }); //then we map over these real data to get what is inside this freaking object

  var unSortedDocs = realData.map(function (docs) {
    return docs.data;
  }); //sorting docs

  var docs = unSortedDocs.sort(function (a, b) {
    return a.order - b.order;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var slug = router.query.slug;
  var docsToBeShown;
  realData.forEach(function (element) {
    if (element.data.slug === slug) {
      docsToBeShown = element;
    }
  });
  var renderers = {
    code: function code(_ref2) {
      var language = _ref2.language,
          value = _ref2.value;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__["atomOneDark"],
        language: language,
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    }
  };
  var burgerIconOpenedRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var burgerIconClosedRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(true),
      burgerIconOpened = _useState[0],
      burgerIconSetOpen = _useState[1];

  var toggleSideNav = function toggleSideNav() {
    if (burgerIconOpenedRef) {
      burgerIconOpenedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIconHidden));
      burgerIconClosedRef.current.classList.remove("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIconHidden));
      burgerIconSetOpen = (Object(C_Me_Amigos_formriderjs_FormRiderjs_website_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("burgerIconSetOpen"), !burgerIconSetOpen);
    }

    if (!burgerIconOpenedRef) {
      burgerIconOpenedRef.current.classList.remove("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIconHidden));
      burgerIconClosedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIconHidden));
      !burgerIconSetOpen;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleSideNav,
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sideNavButton,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconOpenedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIcon,
        src: "/burgerIconOpened.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.pageLayout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainLayout,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.titleContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "form rider brand",
            src: "/brand.png",
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.brand
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.editPageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.editPage,
            href: "https://github.com/sirageDb/FormRiderjs-website/tree/main/content/" + "".concat(slug) + ".md",
            target: "_blank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Edit this page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(Docs, "UQ7/8Cgz5kyKlhmL9boox9cJ1SE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Docs;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Docs);

var _c;

$RefreshReg$(_c, "Docs");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RvY3MvW3NsdWddL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRvY3MiLCJkYXRhIiwicmVhbERhdGEiLCJtYXAiLCJkb2NzIiwibWF0dGVyIiwidW5Tb3J0ZWREb2NzIiwic29ydCIsImEiLCJiIiwib3JkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJkb2NzVG9CZVNob3duIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyZW5kZXJlcnMiLCJjb2RlIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsImF0b21PbmVEYXJrIiwiYnVyZ2VySWNvbk9wZW5lZFJlZiIsInVzZVJlZiIsImJ1cmdlckljb25DbG9zZWRSZWYiLCJ1c2VTdGF0ZSIsImJ1cmdlckljb25PcGVuZWQiLCJidXJnZXJJY29uU2V0T3BlbiIsInRvZ2dsZVNpZGVOYXYiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwiYnVyZ2VySWNvbkhpZGRlbiIsInJlbW92ZSIsInNpZGVOYXZCdXR0b24iLCJidXJnZXJJY29uIiwicGFnZUxheW91dCIsIm1haW5MYXlvdXQiLCJ0aXRsZUNvbnRhaW5lciIsImJyYW5kIiwidGl0bGUiLCJ0aXRsZUV4cGxhaW5lZCIsImNvbnRlbnQiLCJlZGl0UGFnZUNvbnRhaW5lciIsImVkaXRQYWdlIiwiZWRpdFBhZ2VJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FB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QUFNLENBQUNhLFFBRHBCO0FBRUUsZ0JBQUksRUFDRixpRkFDR2pDLElBREgsSUFFQSxLQUxKO0FBT0Usa0JBQU0sRUFBQyxRQVBUO0FBQUEsb0NBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsZUFVRTtBQUNFLHVCQUFTLEVBQUVvQiw4REFBTSxDQUFDYyxZQURwQjtBQUVFLGlCQUFHLEVBQUMsZ0NBRk47QUFHRSxpQkFBRyxFQUFFO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQW5HUS9DLEk7VUFXUVkscUQ7OztLQVhSWixJOztBQXFITUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uNzUyY2IzYmQzZmMzODI1OWVmNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NpZGVOYXYvU2lkZW5hdlwiO1xyXG5pbXBvcnQgUmVhY3RtYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2RvY3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgYXRvbU9uZURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRG9jcyh7IGRhdGEgfSkge1xyXG4gIC8vZXh0cmFjdGluZyByZWFsIGRhdGEgZnJvbSBkYXRhIHVzaW5nIGdyYXktbWF0dGVyIHBhY2thZ2VcclxuICBjb25zdCByZWFsRGF0YSA9IGRhdGEubWFwKChkb2NzKSA9PiBtYXR0ZXIoZG9jcykpO1xyXG4gIC8vdGhlbiB3ZSBtYXAgb3ZlciB0aGVzZSByZWFsIGRhdGEgdG8gZ2V0IHdoYXQgaXMgaW5zaWRlIHRoaXMgZnJlYWtpbmcgb2JqZWN0XHJcbiAgY29uc3QgdW5Tb3J0ZWREb2NzID0gcmVhbERhdGEubWFwKChkb2NzKSA9PiBkb2NzLmRhdGEpO1xyXG5cclxuICAvL3NvcnRpbmcgZG9jc1xyXG4gIGNvbnN0IGRvY3MgPSB1blNvcnRlZERvY3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgbGV0IGRvY3NUb0JlU2hvd247XHJcbiAgcmVhbERhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuZGF0YS5zbHVnID09PSBzbHVnKSB7XHJcbiAgICAgIGRvY3NUb0JlU2hvd24gPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJlcnMgPSB7XHJcbiAgICBjb2RlOiAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgICAgc3R5bGU9e2F0b21PbmVEYXJrfVxyXG4gICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgY2hpbGRyZW49e3ZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgY29uc3QgYnVyZ2VySWNvbk9wZW5lZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBidXJnZXJJY29uQ2xvc2VkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtidXJnZXJJY29uT3BlbmVkLCBidXJnZXJJY29uU2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgaWYoYnVyZ2VySWNvbk9wZW5lZFJlZikge1xyXG4gICAgICBidXJnZXJJY29uT3BlbmVkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKTtcclxuICAgICAgYnVyZ2VySWNvbkNsb3NlZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YCk7XHJcbiAgICAgIGJ1cmdlckljb25TZXRPcGVuID0gIWJ1cmdlckljb25TZXRPcGVuO1xyXG4gICAgfVxyXG4gICAgaWYoIWJ1cmdlckljb25PcGVuZWRSZWYpIHtcclxuICAgICAgYnVyZ2VySWNvbk9wZW5lZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YCk7XHJcbiAgICAgIGJ1cmdlckljb25DbG9zZWRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGAke3N0eWxlcy5idXJnZXJJY29uSGlkZGVufWApO1xyXG4gICAgICAhYnVyZ2VySWNvblNldE9wZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTaWRlTmF2IGRvY3M9e2RvY3N9IGN1cnJlbnRseU9wZW5lZFNsdWc9e3NsdWd9IGlzT3BlbmVkPXtmYWxzZX0gLz5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2QnV0dG9ufT5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbk9wZW5lZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbn0gc3JjPXtcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wifSAvPlxyXG4gICAgICAgIDxpbWcgcmVmPXtidXJnZXJJY29uQ2xvc2VkUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29uICsgXCIgXCIgKyBzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn0gc3JjPXtcIi9idXJnZXJJY29uQ2xvc2VkLnN2Z1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtcImZvcm0gcmlkZXIgYnJhbmRcIn1cclxuICAgICAgICAgICAgICBzcmM9e1wiL2JyYW5kLnBuZ1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntkb2NzVG9CZVNob3duLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntkb2NzVG9CZVNob3duLmRhdGEudGl0bGVFeHBsYWluZWR9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZWFjdG1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSByZW5kZXJlcnM9e3JlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAge2RvY3NUb0JlU2hvd24uY29udGVudH1cclxuICAgICAgICAgICAgPC9SZWFjdG1hcmtkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZX1cclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3NpcmFnZURiL0Zvcm1SaWRlcmpzLXdlYnNpdGUvdHJlZS9tYWluL2NvbnRlbnQvXCIgK1xyXG4gICAgICAgICAgICAgICAgYCR7c2x1Z31gICtcclxuICAgICAgICAgICAgICAgIFwiLm1kXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RWRpdCB0aGlzIHBhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGb3JtIHJpZGVyIHBhZ2UgZWRpdCBvbiBnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9lZGl0LnN2Z1wifVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRgLCBcInV0Zi04XCIpO1xyXG4gIGNvbnN0IGRvY3MgPSBmaWxlcy5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMuZW5kc1dpdGgoXCIubWRcIikpO1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudC8ke2RvY31gO1xyXG4gICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==