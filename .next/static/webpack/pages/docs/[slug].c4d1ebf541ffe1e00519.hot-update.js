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
      burgerIconSetOpen = _useState[1];

  var toggleSideNav = function toggleSideNav() {
    if (burgerIconOpenedRef) {}
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
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
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(Docs, "UQ7/8Cgz5kyKlhmL9boox9cJ1SE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInVzZVN0YXRlIiwiYnVyZ2VySWNvbk9wZW5lZCIsImJ1cmdlckljb25TZXRPcGVuIiwidG9nZ2xlU2lkZU5hdiIsInN0eWxlcyIsInNpZGVOYXZCdXR0b24iLCJidXJnZXJJY29uIiwiYnVyZ2VySWNvbkhpZGRlbiIsInBhZ2VMYXlvdXQiLCJtYWluTGF5b3V0IiwidGl0bGVDb250YWluZXIiLCJicmFuZCIsInRpdGxlIiwidGl0bGVFeHBsYWluZWQiLCJjb250ZW50IiwiZWRpdFBhZ2VDb250YWluZXIiLCJlZGl0UGFnZSIsImVkaXRQYWdlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3RCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FBVUMsa0RBQU0sQ0FBQ0QsSUFBRCxDQUFoQjtBQUFBLEdBQVQsQ0FBakIsQ0FGc0IsQ0FHdEI7O0FBQ0EsTUFBTUUsWUFBWSxHQUFHSixRQUFRLENBQUND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QUE7QUFBQSxnQkFERixlQVNFO0FBQUEsb0JBQUt2QixhQUFhLENBQUNkLElBQWQsQ0FBbUJzQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUU7QUFBSyxtQkFBUyxFQUFFVCw4REFBTSxDQUFDVSxPQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQWUsc0JBQVUsRUFBRSxLQUEzQjtBQUFrQyxxQkFBUyxFQUFFdEIsU0FBN0M7QUFBQSxzQkFDR0gsYUFBYSxDQUFDeUI7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFlRTtBQUFLLG1CQUFTLEVBQUVWLDhEQUFNLENBQUNXLGlCQUF2QjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksUUFEcEI7QUFFRSxnQkFBSSxFQUNGLGlGQUNHN0IsSUFESCxJQUVBLEtBTEo7QUFPRSxrQkFBTSxFQUFDLFFBUFQ7QUFBQSxvQ0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixlQVVFO0FBQ0UsdUJBQVMsRUFBRWlCLDhEQUFNLENBQUNhLFlBRHBCO0FBRUUsaUJBQUcsRUFBQyxnQ0FGTjtBQUdFLGlCQUFHLEVBQUU7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBM0ZRM0MsSTtVQVdRWSxxRDs7O0tBWFJaLEk7O0FBNkdNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS5jNGQxZWJmNTQxZmZlMWUwMDUxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2lkZU5hdi9TaWRlbmF2XCI7XHJcbmltcG9ydCBSZWFjdG1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZG9jcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBhdG9tT25lRGFyayB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBEb2NzKHsgZGF0YSB9KSB7XHJcbiAgLy9leHRyYWN0aW5nIHJlYWwgZGF0YSBmcm9tIGRhdGEgdXNpbmcgZ3JheS1tYXR0ZXIgcGFja2FnZVxyXG4gIGNvbnN0IHJlYWxEYXRhID0gZGF0YS5tYXAoKGRvY3MpID0+IG1hdHRlcihkb2NzKSk7XHJcbiAgLy90aGVuIHdlIG1hcCBvdmVyIHRoZXNlIHJlYWwgZGF0YSB0byBnZXQgd2hhdCBpcyBpbnNpZGUgdGhpcyBmcmVha2luZyBvYmplY3RcclxuICBjb25zdCB1blNvcnRlZERvY3MgPSByZWFsRGF0YS5tYXAoKGRvY3MpID0+IGRvY3MuZGF0YSk7XHJcblxyXG4gIC8vc29ydGluZyBkb2NzXHJcbiAgY29uc3QgZG9jcyA9IHVuU29ydGVkRG9jcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgZG9jc1RvQmVTaG93bjtcclxuICByZWFsRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5kYXRhLnNsdWcgPT09IHNsdWcpIHtcclxuICAgICAgZG9jc1RvQmVTaG93biA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVycyA9IHtcclxuICAgIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgICBzdHlsZT17YXRvbU9uZURhcmt9XHJcbiAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBjb25zdCBidXJnZXJJY29uT3BlbmVkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGJ1cmdlckljb25DbG9zZWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2J1cmdlckljb25PcGVuZWQsIGJ1cmdlckljb25TZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XHJcbiAgICBpZihidXJnZXJJY29uT3BlbmVkUmVmKSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTaWRlTmF2IGRvY3M9e2RvY3N9IGN1cnJlbnRseU9wZW5lZFNsdWc9e3NsdWd9IGlzT3BlbmVkPXtmYWxzZX0gLz5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2QnV0dG9ufT5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbk9wZW5lZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbn0gc3JjPXtcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wifSAvPlxyXG4gICAgICAgIDxpbWcgcmVmPXtidXJnZXJJY29uQ2xvc2VkUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29uICsgXCIgXCIgKyBzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn0gc3JjPXtcIi9idXJnZXJJY29uQ2xvc2VkLnN2Z1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtcImZvcm0gcmlkZXIgYnJhbmRcIn1cclxuICAgICAgICAgICAgICBzcmM9e1wiL2JyYW5kLnBuZ1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntkb2NzVG9CZVNob3duLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntkb2NzVG9CZVNob3duLmRhdGEudGl0bGVFeHBsYWluZWR9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZWFjdG1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSByZW5kZXJlcnM9e3JlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAge2RvY3NUb0JlU2hvd24uY29udGVudH1cclxuICAgICAgICAgICAgPC9SZWFjdG1hcmtkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZX1cclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3NpcmFnZURiL0Zvcm1SaWRlcmpzLXdlYnNpdGUvdHJlZS9tYWluL2NvbnRlbnQvXCIgK1xyXG4gICAgICAgICAgICAgICAgYCR7c2x1Z31gICtcclxuICAgICAgICAgICAgICAgIFwiLm1kXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RWRpdCB0aGlzIHBhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGb3JtIHJpZGVyIHBhZ2UgZWRpdCBvbiBnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9lZGl0LnN2Z1wifVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRgLCBcInV0Zi04XCIpO1xyXG4gIGNvbnN0IGRvY3MgPSBmaWxlcy5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMuZW5kc1dpdGgoXCIubWRcIikpO1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudC8ke2RvY31gO1xyXG4gICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==