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
      lineNumber: 54,
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
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconClosedRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
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
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(Docs, "PASlYDtoI/9lqHdmTYPuhWsXpu4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInRvZ2dsZVNpZGVOYXYiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwiYnVyZ2VySWNvbkhpZGRlbiIsInNpZGVOYXZCdXR0b24iLCJidXJnZXJJY29uIiwicGFnZUxheW91dCIsIm1haW5MYXlvdXQiLCJ0aXRsZUNvbnRhaW5lciIsImJyYW5kIiwidGl0bGUiLCJ0aXRsZUV4cGxhaW5lZCIsImNvbnRlbnQiLCJlZGl0UGFnZUNvbnRhaW5lciIsImVkaXRQYWdlIiwiZWRpdFBhZ2VJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQixDQUZzQixDQUd0Qjs7QUFDQSxNQUFNRSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7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O0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFLLG1CQUFTLEVBQUVULDhEQUFNLENBQUNVLE9BQXZCO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBZSxzQkFBVSxFQUFFLEtBQTNCO0FBQWtDLHFCQUFTLEVBQUV0QixTQUE3QztBQUFBLHNCQUNHSCxhQUFhLENBQUN5QjtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWVFO0FBQUssbUJBQVMsRUFBRVYsOERBQU0sQ0FBQ1csaUJBQXZCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFWCw4REFBTSxDQUFDWSxRQURwQjtBQUVFLGdCQUFJLEVBQ0YsaUZBQ0c3QixJQURILElBRUEsS0FMSjtBQU9FLGtCQUFNLEVBQUMsUUFQVDtBQUFBLG9DQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFDRSx1QkFBUyxFQUFFaUIsOERBQU0sQ0FBQ2EsWUFEcEI7QUFFRSxpQkFBRyxFQUFDLGdDQUZOO0FBR0UsaUJBQUcsRUFBRTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F6RlEzQyxJO1VBV1FZLHFEOzs7S0FYUlosSTs7QUEyR01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW3NsdWddLmJiOGUzOTA5ZTVjZTZmYzQ3MTZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zaWRlTmF2L1NpZGVuYXZcIjtcclxuaW1wb3J0IFJlYWN0bWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9kb2NzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCB7IGF0b21PbmVEYXJrIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvaGxqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERvY3MoeyBkYXRhIH0pIHtcclxuICAvL2V4dHJhY3RpbmcgcmVhbCBkYXRhIGZyb20gZGF0YSB1c2luZyBncmF5LW1hdHRlciBwYWNrYWdlXHJcbiAgY29uc3QgcmVhbERhdGEgPSBkYXRhLm1hcCgoZG9jcykgPT4gbWF0dGVyKGRvY3MpKTtcclxuICAvL3RoZW4gd2UgbWFwIG92ZXIgdGhlc2UgcmVhbCBkYXRhIHRvIGdldCB3aGF0IGlzIGluc2lkZSB0aGlzIGZyZWFraW5nIG9iamVjdFxyXG4gIGNvbnN0IHVuU29ydGVkRG9jcyA9IHJlYWxEYXRhLm1hcCgoZG9jcykgPT4gZG9jcy5kYXRhKTtcclxuXHJcbiAgLy9zb3J0aW5nIGRvY3NcclxuICBjb25zdCBkb2NzID0gdW5Tb3J0ZWREb2NzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGxldCBkb2NzVG9CZVNob3duO1xyXG4gIHJlYWxEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRhdGEuc2x1ZyA9PT0gc2x1Zykge1xyXG4gICAgICBkb2NzVG9CZVNob3duID0gZWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXJzID0ge1xyXG4gICAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIHN0eWxlPXthdG9tT25lRGFya31cclxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgICAgIGNoaWxkcmVuPXt2YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGJ1cmdlckljb25PcGVuZWRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYnVyZ2VySWNvbkNsb3NlZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgYnVyZ2VySWNvbk9wZW5lZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYCR7c3R5bGVzLmJ1cmdlckljb25IaWRkZW59YCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTaWRlTmF2IGRvY3M9e2RvY3N9IGN1cnJlbnRseU9wZW5lZFNsdWc9e3NsdWd9IGlzT3BlbmVkPXtmYWxzZX0gLz5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2QnV0dG9ufT5cclxuICAgICAgICA8aW1nIHJlZj17YnVyZ2VySWNvbk9wZW5lZFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbn0gc3JjPXtcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wifSAvPlxyXG4gICAgICAgIDxpbWcgcmVmPXtidXJnZXJJY29uQ2xvc2VkUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29uICsgXCIgXCIgKyBzdHlsZXMuYnVyZ2VySWNvbkhpZGRlbn0gc3JjPXtcIi9idXJnZXJJY29uQ2xvc2VkLnN2Z1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtcImZvcm0gcmlkZXIgYnJhbmRcIn1cclxuICAgICAgICAgICAgICBzcmM9e1wiL2JyYW5kLnBuZ1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntkb2NzVG9CZVNob3duLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntkb2NzVG9CZVNob3duLmRhdGEudGl0bGVFeHBsYWluZWR9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZWFjdG1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSByZW5kZXJlcnM9e3JlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAge2RvY3NUb0JlU2hvd24uY29udGVudH1cclxuICAgICAgICAgICAgPC9SZWFjdG1hcmtkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZX1cclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3NpcmFnZURiL0Zvcm1SaWRlcmpzLXdlYnNpdGUvdHJlZS9tYWluL2NvbnRlbnQvXCIgK1xyXG4gICAgICAgICAgICAgICAgYCR7c2x1Z31gICtcclxuICAgICAgICAgICAgICAgIFwiLm1kXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RWRpdCB0aGlzIHBhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGb3JtIHJpZGVyIHBhZ2UgZWRpdCBvbiBnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9lZGl0LnN2Z1wifVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRgLCBcInV0Zi04XCIpO1xyXG4gIGNvbnN0IGRvY3MgPSBmaWxlcy5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMuZW5kc1dpdGgoXCIubWRcIikpO1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudC8ke2RvY31gO1xyXG4gICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==