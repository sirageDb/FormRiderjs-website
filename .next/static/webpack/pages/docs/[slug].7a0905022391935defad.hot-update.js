webpackHotUpdate_N_E("pages/docs/[slug]",{

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
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sideNav/Sidenav */ "./components/sideNav/Sidenav.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/docs.module.scss */ "./pages/docs.module.scss");
/* harmony import */ var _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Me\\Amigos\\formriderjs\\FormRiderjs-website\\pages\\docs\\[slug]\\index.js",
    _s = $RefreshSig$();










function Docs(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;
  //extracting real data from data using gray-matter package
  var realData = data.map(function (docs) {
    return gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(docs);
  }); //then we map over these real data to get what is inside this freaking object

  var unSortedDocs = realData.map(function (docs) {
    return docs.data;
  }); //sorting docs

  var docs = unSortedDocs.sort(function (a, b) {
    return a.order - b.order;
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_7__["atomOneDark"],
        language: language,
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    }
  };
  var burgerIconOpenedRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  var burgerIconClosedRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      burgerIconOpened = _useState[0],
      setOpenBurgerIcon = _useState[1];

  var toggleSideNav = function toggleSideNav() {
    if (burgerIconOpened) {
      burgerIconOpenedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
      burgerIconClosedRef.current.classList.remove("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
    }

    if (!burgerIconOpened) {
      burgerIconOpenedRef.current.classList.remove("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
      burgerIconClosedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
    }

    setOpenBurgerIcon(!burgerIconOpened);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleSideNav,
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sideNavButton,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconOpenedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon,
        src: "/burgerIconOpened.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.pageLayout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mainLayout,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "form rider brand",
            src: "/brand.png",
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.brand
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPage,
            href: "https://github.com/sirageDb/FormRiderjs-website/tree/main/content/" + "".concat(slug) + ".md",
            target: "_blank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Edit this page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(Docs, "v4x9SlRyjy7NKVBXPq1XQUvfMIA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInVzZVN0YXRlIiwiYnVyZ2VySWNvbk9wZW5lZCIsInNldE9wZW5CdXJnZXJJY29uIiwidG9nZ2xlU2lkZU5hdiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJidXJnZXJJY29uSGlkZGVuIiwicmVtb3ZlIiwic2lkZU5hdkJ1dHRvbiIsImJ1cmdlckljb24iLCJwYWdlTGF5b3V0IiwibWFpbkxheW91dCIsInRpdGxlQ29udGFpbmVyIiwiYnJhbmQiLCJ0aXRsZSIsInRpdGxlRXhwbGFpbmVkIiwiY29udGVudCIsImVkaXRQYWdlQ29udGFpbmVyIiwiZWRpdFBhZ2UiLCJlZGl0UGFnZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQVVDLGtEQUFNLENBQUNELElBQUQsQ0FBaEI7QUFBQSxHQUFULENBQWpCLENBRnNCLENB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LHVCQUFTLEVBQUVvQiw4REFBTSxDQUFDYyxZQURwQjtBQUVFLGlCQUFHLEVBQUMsZ0NBRk47QUFHRSxpQkFBRyxFQUFFO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQXJHUS9DLEk7VUFXUVkscUQ7OztLQVhSWixJOztBQXVITUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uN2EwOTA1MDIyMzkxOTM1ZGVmYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NpZGVOYXYvU2lkZW5hdlwiO1xyXG5pbXBvcnQgUmVhY3RtYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2RvY3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgYXRvbU9uZURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRG9jcyh7IGRhdGEgfSkge1xyXG4gIC8vZXh0cmFjdGluZyByZWFsIGRhdGEgZnJvbSBkYXRhIHVzaW5nIGdyYXktbWF0dGVyIHBhY2thZ2VcclxuICBjb25zdCByZWFsRGF0YSA9IGRhdGEubWFwKChkb2NzKSA9PiBtYXR0ZXIoZG9jcykpO1xyXG4gIC8vdGhlbiB3ZSBtYXAgb3ZlciB0aGVzZSByZWFsIGRhdGEgdG8gZ2V0IHdoYXQgaXMgaW5zaWRlIHRoaXMgZnJlYWtpbmcgb2JqZWN0XHJcbiAgY29uc3QgdW5Tb3J0ZWREb2NzID0gcmVhbERhdGEubWFwKChkb2NzKSA9PiBkb2NzLmRhdGEpO1xyXG5cclxuICAvL3NvcnRpbmcgZG9jc1xyXG4gIGNvbnN0IGRvY3MgPSB1blNvcnRlZERvY3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgbGV0IGRvY3NUb0JlU2hvd247XHJcbiAgcmVhbERhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuZGF0YS5zbHVnID09PSBzbHVnKSB7XHJcbiAgICAgIGRvY3NUb0JlU2hvd24gPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJlcnMgPSB7XHJcbiAgICBjb2RlOiAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgICAgc3R5bGU9e2F0b21PbmVEYXJrfVxyXG4gICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgY2hpbGRyZW49e3ZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgY29uc3QgYnVyZ2VySWNvbk9wZW5lZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBidXJnZXJJY29uQ2xvc2VkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtidXJnZXJJY29uT3BlbmVkLCBzZXRPcGVuQnVyZ2VySWNvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgaWYoYnVyZ2VySWNvbk9wZW5lZCl7XHJcbiAgICAgIGJ1cmdlckljb25PcGVuZWRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGAke3N0eWxlcy5idXJnZXJJY29uSGlkZGVufWApXHJcbiAgICAgIGJ1cmdlckljb25DbG9zZWRSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3N0eWxlcy5idXJnZXJJY29uSGlkZGVufWApIFxyXG4gICAgfVxyXG4gICAgaWYoIWJ1cmdlckljb25PcGVuZWQpe1xyXG4gICAgICBidXJnZXJJY29uT3BlbmVkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKVxyXG4gICAgICBidXJnZXJJY29uQ2xvc2VkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKSBcclxuICAgIH1cclxuICAgIHNldE9wZW5CdXJnZXJJY29uKCFidXJnZXJJY29uT3BlbmVkKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNpZGVOYXYgZG9jcz17ZG9jc30gY3VycmVudGx5T3BlbmVkU2x1Zz17c2x1Z30gaXNPcGVuZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZVNpZGVOYXZ9IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZCdXR0b259PlxyXG4gICAgICAgIDxpbWcgcmVmPXtidXJnZXJJY29uT3BlbmVkUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29ufSBzcmM9e1wiL2J1cmdlckljb25PcGVuZWQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25DbG9zZWRSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb24gKyBcIiBcIiArIHN0eWxlcy5idXJnZXJJY29uSGlkZGVufSBzcmM9e1wiL2J1cmdlckljb25DbG9zZWQuc3ZnXCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VMYXlvdXR9PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW5MYXlvdXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9e1wiZm9ybSByaWRlciBicmFuZFwifVxyXG4gICAgICAgICAgICAgIHNyYz17XCIvYnJhbmQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2RvY3NUb0JlU2hvd24uZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDM+e2RvY3NUb0JlU2hvd24uZGF0YS50aXRsZUV4cGxhaW5lZH08L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPFJlYWN0bWFya2Rvd24gZXNjYXBlSHRtbD17ZmFsc2V9IHJlbmRlcmVycz17cmVuZGVyZXJzfT5cclxuICAgICAgICAgICAgICB7ZG9jc1RvQmVTaG93bi5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1JlYWN0bWFya2Rvd24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlfVxyXG4gICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vc2lyYWdlRGIvRm9ybVJpZGVyanMtd2Vic2l0ZS90cmVlL21haW4vY29udGVudC9cIiArXHJcbiAgICAgICAgICAgICAgICBgJHtzbHVnfWAgK1xyXG4gICAgICAgICAgICAgICAgXCIubWRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5FZGl0IHRoaXMgcGFnZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlSWNvbn1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkZvcm0gcmlkZXIgcGFnZSBlZGl0IG9uIGdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL2VkaXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudGAsIFwidXRmLThcIik7XHJcbiAgY29uc3QgZG9jcyA9IGZpbGVzLmZpbHRlcigoZnVuYykgPT4gZnVuYy5lbmRzV2l0aChcIi5tZFwiKSk7XHJcbiAgY29uc3QgZGF0YSA9IGRvY3MubWFwKChkb2MpID0+IHtcclxuICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50LyR7ZG9jfWA7XHJcbiAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsIHsgZW5jb2Rpbmc6IFwidXRmLThcIiB9KTtcclxuXHJcbiAgICByZXR1cm4gcmF3Q29udGVudDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGE6IGRhdGEgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2NzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9