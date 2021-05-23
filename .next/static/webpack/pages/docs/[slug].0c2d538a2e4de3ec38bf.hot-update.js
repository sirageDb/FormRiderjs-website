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
    consoe.log(burgerIconOpenedRef.src);

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
      lineNumber: 68,
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
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInVzZVN0YXRlIiwiYnVyZ2VySWNvbk9wZW5lZCIsInNldE9wZW5CdXJnZXJJY29uIiwidG9nZ2xlU2lkZU5hdiIsImNvbnNvZSIsImxvZyIsInNyYyIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJidXJnZXJJY29uSGlkZGVuIiwicmVtb3ZlIiwic2lkZU5hdkJ1dHRvbiIsImJ1cmdlckljb24iLCJwYWdlTGF5b3V0IiwibWFpbkxheW91dCIsInRpdGxlQ29udGFpbmVyIiwiYnJhbmQiLCJ0aXRsZSIsInRpdGxlRXhwbGFpbmVkIiwiY29udGVudCIsImVkaXRQYWdlQ29udGFpbmVyIiwiZWRpdFBhZ2UiLCJlZGl0UGFnZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQVVDLGtEQUFNLENBQUNELElBQUQsQ0FBaEI7QUFBQSxHQUFULENBQWpCLENBRnNCLENBR3RCOztBQUNBLE1BQU1FLFlBQVksR0FBR0osUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0gsSUFBZjtBQUFBLEdBQWIsQ0FBckIsQ0FKc0IsQ0FNdEI7O0FBQ0EsTUFBTUcsSUFBSSxHQUFHRSxZQUFZLENBQUNDLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDdkMsV0FBT0QsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FBbkI7QUFDRCxHQUZZLENBQWI7QUFJQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBWHNCLE1BWWRDLElBWmMsR0FZTEYsTUFBTSxDQUFDRyxLQVpGLENBWWRELElBWmM7QUFjdEIsTUFBSUUsYUFBSjtBQUNBYixVQUFRLENBQUNjLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLFFBQUlBLE9BQU8sQ0FBQ2hCLElBQVIsQ0FBYVksSUFBYixLQUFzQkEsSUFBMUIsRUFBZ0M7QUFDOUJFLG1CQUFhLEdBQUdFLE9BQWhCO0FBQ0Q7QUFDRixHQUpEO0FBTUEsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxRQUFJLEVBQUUscUJBQXlCO0FBQUEsVUFBdEJDLFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTtBQUM3QiwwQkFDRSxxRUFBQyxnRUFBRDtBQUNFLGFBQUssRUFBRUMseUZBRFQ7QUFFRSxnQkFBUSxFQUFFRixRQUZaO0FBR0UsZ0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRDtBQVRlLEdBQWxCO0FBY0EsTUFBTUUsbUJBQW1CLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQztBQUNBLE1BQU1DLG1CQUFtQixHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEM7O0FBcENzQixrQkFxQ3dCRSxzREFBUSxDQUFDLElBQUQsQ0FyQ2hDO0FBQUEsTUFxQ2ZDLGdCQXJDZTtBQUFBLE1BcUNHQyxpQkFyQ0g7O0FBc0N0QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFHMUJDLFVBQU0sQ0FBQ0MsR0FBUCxDQUFXUixtQkFBbUIsQ0FBQ1MsR0FBL0I7O0FBR0EsUUFBR0wsZ0JBQUgsRUFBb0I7QUFDbEJKLHlCQUFtQixDQUFDVSxPQUFwQixDQUE0QkMsU0FBNUIsQ0FBc0NDLEdBQXRDLFdBQTZDQyw4REFBTSxDQUFDQyxnQkFBcEQ7QUFDQVoseUJBQW1CLENBQUNRLE9BQXBCLENBQTRCQyxTQUE1QixDQUFzQ0ksTUFBdEMsV0FBZ0RGLDhEQUFNLENBQUNDLGdCQUF2RDtBQUNEOztBQUNELFFBQUcsQ0FBQ1YsZ0JBQUosRUFBcUI7QUFDbkJKLHlCQUFtQixDQUFDVSxPQUFwQixDQUE0QkMsU0FBNUIsQ0FBc0NJLE1BQXRDLFdBQWdERiw4REFBTSxDQUFDQyxnQkFBdkQ7QUFDQVoseUJBQW1CLENBQUNRLE9BQXBCLENBQTRCQyxTQUE1QixDQUFzQ0MsR0FBdEMsV0FBNkNDLDhEQUFNLENBQUNDLGdCQUFwRDtBQUNEOztBQUNEVCxxQkFBaUIsQ0FBQyxDQUFDRCxnQkFBRixDQUFqQjtBQUNELEdBZkQ7O0FBa0JBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbUVBQUQ7QUFBUyxVQUFJLEVBQUV2QixJQUFmO0FBQXFCLHlCQUFtQixFQUFFUyxJQUExQztBQUFnRCxjQUFRLEVBQUU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxhQUFPLEVBQUVnQixhQUFkO0FBQTZCLGVBQVMsRUFBRU8sOERBQU0sQ0FBQ0csYUFBL0M7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRWhCLG1CQUFWO0FBQStCLGlCQUFTLEVBQUVhLDhEQUFNLENBQUNJLFVBQWpEO0FBQTZELFdBQUcsRUFBRTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLFdBQUcsRUFBRWYsbUJBQVY7QUFBK0IsaUJBQVMsRUFBRVcsOERBQU0sQ0FBQ0ksVUFBUCxHQUFvQixHQUFwQixHQUEwQkosOERBQU0sQ0FBQ0MsZ0JBQTNFO0FBQTZGLFdBQUcsRUFBRTtBQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRTtBQUFLLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0ssVUFBdkI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUVMLDhEQUFNLENBQUNNLFVBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFTiw4REFBTSxDQUFDTyxjQUF2QjtBQUFBLGtDQUNFO0FBQ0UsZUFBRyxFQUFFLGtCQURQO0FBRUUsZUFBRyxFQUFFLFlBRlA7QUFHRSxxQkFBUyxFQUFFUCw4REFBTSxDQUFDUTtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUU7QUFBSSxxQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxLQUF0QjtBQUFBLHNCQUE4QjlCLGFBQWEsQ0FBQ2QsSUFBZCxDQUFtQjRDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBQSxvQkFBSzlCLGFBQWEsQ0FBQ2QsSUFBZCxDQUFtQjZDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFLLG1CQUFTLEVBQUVWLDhEQUFNLENBQUNXLE9BQXZCO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBZSxzQkFBVSxFQUFFLEtBQTNCO0FBQWtDLHFCQUFTLEVBQUU3QixTQUE3QztBQUFBLHNCQUNHSCxhQUFhLENBQUNnQztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWVFO0FBQUssbUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksaUJBQXZCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFWiw4REFBTSxDQUFDYSxRQURwQjtBQUVFLGdCQUFJLEVBQ0YsaUZBQ0dwQyxJQURILElBRUEsS0FMSjtBQU9FLGtCQUFNLEVBQUMsUUFQVDtBQUFBLG9DQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFDRSx1QkFBUyxFQUFFdUIsOERBQU0sQ0FBQ2MsWUFEcEI7QUFFRSxpQkFBRyxFQUFDLGdDQUZOO0FBR0UsaUJBQUcsRUFBRTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F2R1FsRCxJO1VBV1FZLHFEOzs7S0FYUlosSTs7QUF5SE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW3NsdWddLjBjMmQ1MzhhMmU0ZGUzZWMzOGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zaWRlTmF2L1NpZGVuYXZcIjtcclxuaW1wb3J0IFJlYWN0bWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9kb2NzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCB7IGF0b21PbmVEYXJrIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvaGxqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERvY3MoeyBkYXRhIH0pIHtcclxuICAvL2V4dHJhY3RpbmcgcmVhbCBkYXRhIGZyb20gZGF0YSB1c2luZyBncmF5LW1hdHRlciBwYWNrYWdlXHJcbiAgY29uc3QgcmVhbERhdGEgPSBkYXRhLm1hcCgoZG9jcykgPT4gbWF0dGVyKGRvY3MpKTtcclxuICAvL3RoZW4gd2UgbWFwIG92ZXIgdGhlc2UgcmVhbCBkYXRhIHRvIGdldCB3aGF0IGlzIGluc2lkZSB0aGlzIGZyZWFraW5nIG9iamVjdFxyXG4gIGNvbnN0IHVuU29ydGVkRG9jcyA9IHJlYWxEYXRhLm1hcCgoZG9jcykgPT4gZG9jcy5kYXRhKTtcclxuXHJcbiAgLy9zb3J0aW5nIGRvY3NcclxuICBjb25zdCBkb2NzID0gdW5Tb3J0ZWREb2NzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGxldCBkb2NzVG9CZVNob3duO1xyXG4gIHJlYWxEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRhdGEuc2x1ZyA9PT0gc2x1Zykge1xyXG4gICAgICBkb2NzVG9CZVNob3duID0gZWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXJzID0ge1xyXG4gICAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIHN0eWxlPXthdG9tT25lRGFya31cclxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgICAgIGNoaWxkcmVuPXt2YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGJ1cmdlckljb25PcGVuZWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYnVyZ2VySWNvbkNsb3NlZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbYnVyZ2VySWNvbk9wZW5lZCwgc2V0T3BlbkJ1cmdlckljb25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlU2lkZU5hdiA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc29lLmxvZyhidXJnZXJJY29uT3BlbmVkUmVmLnNyYyk7XHJcblxyXG5cclxuICAgIGlmKGJ1cmdlckljb25PcGVuZWQpe1xyXG4gICAgICBidXJnZXJJY29uT3BlbmVkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKVxyXG4gICAgICBidXJnZXJJY29uQ2xvc2VkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn1gKSBcclxuICAgIH1cclxuICAgIGlmKCFidXJnZXJJY29uT3BlbmVkKXtcclxuICAgICAgYnVyZ2VySWNvbk9wZW5lZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YClcclxuICAgICAgYnVyZ2VySWNvbkNsb3NlZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YCkgXHJcbiAgICB9XHJcbiAgICBzZXRPcGVuQnVyZ2VySWNvbighYnVyZ2VySWNvbk9wZW5lZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTaWRlTmF2IGRvY3M9e2RvY3N9IGN1cnJlbnRseU9wZW5lZFNsdWc9e3NsdWd9IGlzT3BlbmVkPXtmYWxzZX0gLz5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2QnV0dG9ufT5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbk9wZW5lZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbn0gc3JjPXtcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wifSAvPlxyXG4gICAgICAgIDxpbWcgcmVmPXtidXJnZXJJY29uQ2xvc2VkUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29uICsgXCIgXCIgKyBzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn0gc3JjPXtcIi9idXJnZXJJY29uQ2xvc2VkLnN2Z1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtcImZvcm0gcmlkZXIgYnJhbmRcIn1cclxuICAgICAgICAgICAgICBzcmM9e1wiL2JyYW5kLnBuZ1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntkb2NzVG9CZVNob3duLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntkb2NzVG9CZVNob3duLmRhdGEudGl0bGVFeHBsYWluZWR9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZWFjdG1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSByZW5kZXJlcnM9e3JlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAge2RvY3NUb0JlU2hvd24uY29udGVudH1cclxuICAgICAgICAgICAgPC9SZWFjdG1hcmtkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZX1cclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3NpcmFnZURiL0Zvcm1SaWRlcmpzLXdlYnNpdGUvdHJlZS9tYWluL2NvbnRlbnQvXCIgK1xyXG4gICAgICAgICAgICAgICAgYCR7c2x1Z31gICtcclxuICAgICAgICAgICAgICAgIFwiLm1kXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RWRpdCB0aGlzIHBhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGb3JtIHJpZGVyIHBhZ2UgZWRpdCBvbiBnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9lZGl0LnN2Z1wifVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRgLCBcInV0Zi04XCIpO1xyXG4gIGNvbnN0IGRvY3MgPSBmaWxlcy5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMuZW5kc1dpdGgoXCIubWRcIikpO1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudC8ke2RvY31gO1xyXG4gICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==