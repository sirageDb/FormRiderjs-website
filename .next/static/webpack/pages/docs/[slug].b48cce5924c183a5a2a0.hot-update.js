webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
    /*     ? burgerIconOpenedRef.current.classList.remove(`${styles.burgerIconHidden}`);
        burgerIconClosedRef.current.classList.add(`${styles.burgerIconHidden}`); */
    burgerIconOpened ? burgerIconOpenedRef.current.classList.remove("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden)) : burgerIconClosedRef.current.classList.add("".concat(_pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
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
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInVzZVN0YXRlIiwiYnVyZ2VySWNvbk9wZW5lZCIsImJ1cmdlckljb25TZXRPcGVuIiwidG9nZ2xlU2lkZU5hdiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZXMiLCJidXJnZXJJY29uSGlkZGVuIiwiYWRkIiwic2lkZU5hdkJ1dHRvbiIsImJ1cmdlckljb24iLCJwYWdlTGF5b3V0IiwibWFpbkxheW91dCIsInRpdGxlQ29udGFpbmVyIiwiYnJhbmQiLCJ0aXRsZSIsInRpdGxlRXhwbGFpbmVkIiwiY29udGVudCIsImVkaXRQYWdlQ29udGFpbmVyIiwiZWRpdFBhZ2UiLCJlZGl0UGFnZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQVVDLGtEQUFNLENBQUNELElBQUQsQ0FBaEI7QUFBQSxHQUFULENBQWpCLENBRnNC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QUE7QUFBQTtBQUFBO0FBQUEsWUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBaEdRL0MsSTtVQVdRWSxxRDs7O0tBWFJaLEk7O0FBa0hNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS5iNDhjY2U1OTI0YzE4M2E1YTJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2lkZU5hdi9TaWRlbmF2XCI7XHJcbmltcG9ydCBSZWFjdG1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZG9jcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBhdG9tT25lRGFyayB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBEb2NzKHsgZGF0YSB9KSB7XHJcbiAgLy9leHRyYWN0aW5nIHJlYWwgZGF0YSBmcm9tIGRhdGEgdXNpbmcgZ3JheS1tYXR0ZXIgcGFja2FnZVxyXG4gIGNvbnN0IHJlYWxEYXRhID0gZGF0YS5tYXAoKGRvY3MpID0+IG1hdHRlcihkb2NzKSk7XHJcbiAgLy90aGVuIHdlIG1hcCBvdmVyIHRoZXNlIHJlYWwgZGF0YSB0byBnZXQgd2hhdCBpcyBpbnNpZGUgdGhpcyBmcmVha2luZyBvYmplY3RcclxuICBjb25zdCB1blNvcnRlZERvY3MgPSByZWFsRGF0YS5tYXAoKGRvY3MpID0+IGRvY3MuZGF0YSk7XHJcblxyXG4gIC8vc29ydGluZyBkb2NzXHJcbiAgY29uc3QgZG9jcyA9IHVuU29ydGVkRG9jcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgZG9jc1RvQmVTaG93bjtcclxuICByZWFsRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5kYXRhLnNsdWcgPT09IHNsdWcpIHtcclxuICAgICAgZG9jc1RvQmVTaG93biA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVycyA9IHtcclxuICAgIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgICBzdHlsZT17YXRvbU9uZURhcmt9XHJcbiAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBjb25zdCBidXJnZXJJY29uT3BlbmVkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGJ1cmdlckljb25DbG9zZWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2J1cmdlckljb25PcGVuZWQsIGJ1cmdlckljb25TZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XHJcbi8qICAgICA/IGJ1cmdlckljb25PcGVuZWRSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3N0eWxlcy5idXJnZXJJY29uSGlkZGVufWApO1xyXG4gICAgYnVyZ2VySWNvbkNsb3NlZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YCk7ICovXHJcbiAgICBidXJnZXJJY29uT3BlbmVkXHJcbiAgICAgID8gYnVyZ2VySWNvbk9wZW5lZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YClcclxuICAgICAgOiBidXJnZXJJY29uQ2xvc2VkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2lkZU5hdiBkb2NzPXtkb2NzfSBjdXJyZW50bHlPcGVuZWRTbHVnPXtzbHVnfSBpc09wZW5lZD17ZmFsc2V9IC8+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25PcGVuZWRSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb259IHNyYz17XCIvYnVyZ2VySWNvbk9wZW5lZC5zdmdcIn0gLz5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbkNsb3NlZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbiArIFwiIFwiICsgc3R5bGVzLmJ1cmdlckljb25IaWRkZW59IHNyYz17XCIvYnVyZ2VySWNvbkNsb3NlZC5zdmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17XCJmb3JtIHJpZGVyIGJyYW5kXCJ9XHJcbiAgICAgICAgICAgICAgc3JjPXtcIi9icmFuZC5wbmdcIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlRXhwbGFpbmVkfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmVhY3RtYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxyXG4gICAgICAgICAgICAgIHtkb2NzVG9CZVNob3duLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RtYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2V9XHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaXJhZ2VEYi9Gb3JtUmlkZXJqcy13ZWJzaXRlL3RyZWUvbWFpbi9jb250ZW50L1wiICtcclxuICAgICAgICAgICAgICAgIGAke3NsdWd9YCArXHJcbiAgICAgICAgICAgICAgICBcIi5tZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkVkaXQgdGhpcyBwYWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRm9ybSByaWRlciBwYWdlIGVkaXQgb24gZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvZWRpdC5zdmdcIn1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcclxuICBjb25zdCBkb2NzID0gZmlsZXMuZmlsdGVyKChmdW5jKSA9PiBmdW5jLmVuZHNXaXRoKFwiLm1kXCIpKTtcclxuICBjb25zdCBkYXRhID0gZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnQvJHtkb2N9YDtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pO1xyXG5cclxuICAgIHJldHVybiByYXdDb250ZW50O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=