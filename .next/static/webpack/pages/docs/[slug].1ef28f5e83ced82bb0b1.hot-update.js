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
  });
  var burgerIconOpenedRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  var burgerIconClosedRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null); //sorting docs

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
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    }
  };

  var toggleSideNav = function toggleSideNav() {
    burgerIconOpenedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
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
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(Docs, "hcrTN99bKvvmxQ6cK0o0aSNik0c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZG9jc1RvQmVTaG93biIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJhdG9tT25lRGFyayIsInRvZ2dsZVNpZGVOYXYiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwiYnVyZ2VySWNvbkhpZGRlbiIsInNpZGVOYXZCdXR0b24iLCJidXJnZXJJY29uIiwicGFnZUxheW91dCIsIm1haW5MYXlvdXQiLCJ0aXRsZUNvbnRhaW5lciIsImJyYW5kIiwidGl0bGUiLCJ0aXRsZUV4cGxhaW5lZCIsImNvbnRlbnQiLCJlZGl0UGFnZUNvbnRhaW5lciIsImVkaXRQYWdlIiwiZWRpdFBhZ2VJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQixDQUZzQixDQUd0Qjs7QUFDQSxNQUFNRSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7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QWQsQ0FBbUJzQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUU7QUFBSyxtQkFBUyxFQUFFVCw4REFBTSxDQUFDVSxPQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQWUsc0JBQVUsRUFBRSxLQUEzQjtBQUFrQyxxQkFBUyxFQUFFbkIsU0FBN0M7QUFBQSxzQkFDR0gsYUFBYSxDQUFDc0I7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFlRTtBQUFLLG1CQUFTLEVBQUVWLDhEQUFNLENBQUNXLGlCQUF2QjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksUUFEcEI7QUFFRSxnQkFBSSxFQUNGLGlGQUNHMUIsSUFESCxJQUVBLEtBTEo7QUFPRSxrQkFBTSxFQUFDLFFBUFQ7QUFBQSxvQ0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixlQVVFO0FBQ0UsdUJBQVMsRUFBRWMsOERBQU0sQ0FBQ2EsWUFEcEI7QUFFRSxpQkFBRyxFQUFDLGdDQUZOO0FBR0UsaUJBQUcsRUFBRTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F2RlEzQyxJO1VBWVFlLHFEOzs7S0FaUmYsSTs7QUF5R01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW3NsdWddLjFlZjI4ZjVlODNjZWQ4MmJiMGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zaWRlTmF2L1NpZGVuYXZcIjtcclxuaW1wb3J0IFJlYWN0bWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9kb2NzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCB7IGF0b21PbmVEYXJrIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvaGxqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERvY3MoeyBkYXRhIH0pIHtcclxuICAvL2V4dHJhY3RpbmcgcmVhbCBkYXRhIGZyb20gZGF0YSB1c2luZyBncmF5LW1hdHRlciBwYWNrYWdlXHJcbiAgY29uc3QgcmVhbERhdGEgPSBkYXRhLm1hcCgoZG9jcykgPT4gbWF0dGVyKGRvY3MpKTtcclxuICAvL3RoZW4gd2UgbWFwIG92ZXIgdGhlc2UgcmVhbCBkYXRhIHRvIGdldCB3aGF0IGlzIGluc2lkZSB0aGlzIGZyZWFraW5nIG9iamVjdFxyXG4gIGNvbnN0IHVuU29ydGVkRG9jcyA9IHJlYWxEYXRhLm1hcCgoZG9jcykgPT4gZG9jcy5kYXRhKTtcclxuICBjb25zdCBidXJnZXJJY29uT3BlbmVkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGJ1cmdlckljb25DbG9zZWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy9zb3J0aW5nIGRvY3NcclxuICBjb25zdCBkb2NzID0gdW5Tb3J0ZWREb2NzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGxldCBkb2NzVG9CZVNob3duO1xyXG4gIHJlYWxEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRhdGEuc2x1ZyA9PT0gc2x1Zykge1xyXG4gICAgICBkb2NzVG9CZVNob3duID0gZWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXJzID0ge1xyXG4gICAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIHN0eWxlPXthdG9tT25lRGFya31cclxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgICAgIGNoaWxkcmVuPXt2YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZU5hdiA9ICgpID0+IHtcclxuICAgIGJ1cmdlckljb25PcGVuZWRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGAke3N0eWxlcy5idXJnZXJJY29uSGlkZGVufWApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2lkZU5hdiBkb2NzPXtkb2NzfSBjdXJyZW50bHlPcGVuZWRTbHVnPXtzbHVnfSBpc09wZW5lZD17ZmFsc2V9IC8+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25PcGVuZWRSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb259IHNyYz17XCIvYnVyZ2VySWNvbk9wZW5lZC5zdmdcIn0gLz5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbkNsb3NlZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbiArIFwiIFwiICsgc3R5bGVzLmJ1cmdlckljb25IaWRkZW59IHNyYz17XCIvYnVyZ2VySWNvbkNsb3NlZC5zdmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17XCJmb3JtIHJpZGVyIGJyYW5kXCJ9XHJcbiAgICAgICAgICAgICAgc3JjPXtcIi9icmFuZC5wbmdcIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlRXhwbGFpbmVkfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmVhY3RtYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxyXG4gICAgICAgICAgICAgIHtkb2NzVG9CZVNob3duLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RtYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2V9XHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaXJhZ2VEYi9Gb3JtUmlkZXJqcy13ZWJzaXRlL3RyZWUvbWFpbi9jb250ZW50L1wiICtcclxuICAgICAgICAgICAgICAgIGAke3NsdWd9YCArXHJcbiAgICAgICAgICAgICAgICBcIi5tZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkVkaXQgdGhpcyBwYWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRm9ybSByaWRlciBwYWdlIGVkaXQgb24gZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvZWRpdC5zdmdcIn1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcclxuICBjb25zdCBkb2NzID0gZmlsZXMuZmlsdGVyKChmdW5jKSA9PiBmdW5jLmVuZHNXaXRoKFwiLm1kXCIpKTtcclxuICBjb25zdCBkYXRhID0gZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnQvJHtkb2N9YDtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pO1xyXG5cclxuICAgIHJldHVybiByYXdDb250ZW50O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=