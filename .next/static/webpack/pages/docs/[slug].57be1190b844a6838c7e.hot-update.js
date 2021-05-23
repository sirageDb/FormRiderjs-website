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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      burgerIconOpened = _useState[0],
      setOpenBurgerIcon = _useState[1];

  var toggleSideNav = function toggleSideNav() {
    console.log(burgerIconOpenedRef.current.attributes.src);
    burgerIconOpened ? burgerIconOpenedRef.current.src = "/burgerIconClosed.svg" : burgerIconOpenedRef.current.src = "/burgerIconOpened.svg";
    setOpenBurgerIcon(!burgerIconOpened);
    setOpenBurgerIcon(!burgerIconOpened);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleSideNav,
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sideNavButton,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconRef,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon,
        src: "/burgerIconOpened.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(Docs, "wmGeOa90LgvySlFPVaXv1+4CUGM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJidXJnZXJJY29uT3BlbmVkIiwic2V0T3BlbkJ1cmdlckljb24iLCJ0b2dnbGVTaWRlTmF2IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJhdHRyaWJ1dGVzIiwic3JjIiwic3R5bGVzIiwic2lkZU5hdkJ1dHRvbiIsImJ1cmdlckljb25SZWYiLCJidXJnZXJJY29uIiwicGFnZUxheW91dCIsIm1haW5MYXlvdXQiLCJ0aXRsZUNvbnRhaW5lciIsImJyYW5kIiwidGl0bGUiLCJ0aXRsZUV4cGxhaW5lZCIsImNvbnRlbnQiLCJlZGl0UGFnZUNvbnRhaW5lciIsImVkaXRQYWdlIiwiZWRpdFBhZ2VJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQixDQUZzQixDQUd0Qjs7QUFDQSxNQUFNRSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNILElBQWY7QUFBQSxHQUFiLENBQXJCLENBSnNCLENBTXRCOztBQUNBLE1BQU1HLElBQUksR0FBR0UsWUFBWSxDQUFDQyxJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3ZDLFdBQU9ELENBQUMsQ0FBQ0UsS0FBRixHQUFVRCxDQUFDLENBQUNDLEtBQW5CO0FBQ0QsR0FGWSxDQUFiO0FBSUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQVhzQixNQVlkQyxJQVpjLEdBWUxGLE1BQU0sQ0FBQ0csS0FaRixDQVlkRCxJQVpjO0FBY3RCLE1BQUlFLGFBQUo7QUFDQWIsVUFBUSxDQUFDYyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixRQUFJQSxPQUFPLENBQUNoQixJQUFSLENBQWFZLElBQWIsS0FBc0JBLElBQTFCLEVBQWdDO0FBQzlCRSxtQkFBYSxHQUFHRSxPQUFoQjtBQUNEO0FBQ0YsR0FKRDtBQU1BLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsUUFBSSxFQUFFLHFCQUF5QjtBQUFBLFVBQXRCQyxRQUFzQixTQUF0QkEsUUFBc0I7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7QUFDN0IsMEJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSxhQUFLLEVBQUVDLHlGQURUO0FBRUUsZ0JBQVEsRUFBRUYsUUFGWjtBQUdFLGdCQUFRLEVBQUVDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0Q7QUFUZSxHQUFsQjtBQWNBLE1BQU1FLG1CQUFtQixHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEM7O0FBbkNzQixrQkFvQ3dCQyxzREFBUSxDQUFDLElBQUQsQ0FwQ2hDO0FBQUEsTUFvQ2ZDLGdCQXBDZTtBQUFBLE1Bb0NHQyxpQkFwQ0g7O0FBcUN0QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxtQkFBbUIsQ0FBQ1EsT0FBcEIsQ0FBNEJDLFVBQTVCLENBQXVDQyxHQUFuRDtBQUNBUCxvQkFBZ0IsR0FDWkgsbUJBQW1CLENBQUNRLE9BQXBCLENBQTRCRSxHQUE1QixHQUFrQyx1QkFEdEIsR0FFWlYsbUJBQW1CLENBQUNRLE9BQXBCLENBQTRCRSxHQUE1QixHQUFrQyx1QkFGdEM7QUFHQU4scUJBQWlCLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBakI7QUFDQUMscUJBQWlCLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBakI7QUFDRCxHQVBEOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbUVBQUQ7QUFBUyxVQUFJLEVBQUV0QixJQUFmO0FBQXFCLHlCQUFtQixFQUFFUyxJQUExQztBQUFnRCxjQUFRLEVBQUU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxhQUFPLEVBQUVlLGFBQWQ7QUFBNkIsZUFBUyxFQUFFTSw4REFBTSxDQUFDQyxhQUEvQztBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFQyxhQUFWO0FBQXlCLGlCQUFTLEVBQUVGLDhEQUFNLENBQUNHLFVBQTNDO0FBQXVELFdBQUcsRUFBRTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0U7QUFBSyxlQUFTLEVBQUVILDhEQUFNLENBQUNJLFVBQXZCO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFFSiw4REFBTSxDQUFDSyxVQUF4QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sY0FBdkI7QUFBQSxrQ0FDRTtBQUNFLGVBQUcsRUFBRSxrQkFEUDtBQUVFLGVBQUcsRUFBRSxZQUZQO0FBR0UscUJBQVMsRUFBRU4sOERBQU0sQ0FBQ087QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUkscUJBQVMsRUFBRVAsOERBQU0sQ0FBQ1EsS0FBdEI7QUFBQSxzQkFBOEIzQixhQUFhLENBQUNkLElBQWQsQ0FBbUJ5QztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQUEsb0JBQUszQixhQUFhLENBQUNkLElBQWQsQ0FBbUIwQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUU7QUFBSyxtQkFBUyxFQUFFVCw4REFBTSxDQUFDVSxPQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQWUsc0JBQVUsRUFBRSxLQUEzQjtBQUFrQyxxQkFBUyxFQUFFMUIsU0FBN0M7QUFBQSxzQkFDR0gsYUFBYSxDQUFDNkI7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFlRTtBQUFLLG1CQUFTLEVBQUVWLDhEQUFNLENBQUNXLGlCQUF2QjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksUUFEcEI7QUFFRSxnQkFBSSxFQUNGLGlGQUNHakMsSUFESCxJQUVBLEtBTEo7QUFPRSxrQkFBTSxFQUFDLFFBUFQ7QUFBQSxvQ0FTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixlQVVFO0FBQ0UsdUJBQVMsRUFBRXFCLDhEQUFNLENBQUNhLFlBRHBCO0FBRUUsaUJBQUcsRUFBQyxnQ0FGTjtBQUdFLGlCQUFHLEVBQUU7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4Q0Q7O0dBN0ZRL0MsSTtVQVdRWSxxRDs7O0tBWFJaLEk7O0FBK0dNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS41N2JlMTE5MGI4NDRhNjgzOGM3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2lkZU5hdi9TaWRlbmF2XCI7XHJcbmltcG9ydCBSZWFjdG1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZG9jcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBhdG9tT25lRGFyayB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBEb2NzKHsgZGF0YSB9KSB7XHJcbiAgLy9leHRyYWN0aW5nIHJlYWwgZGF0YSBmcm9tIGRhdGEgdXNpbmcgZ3JheS1tYXR0ZXIgcGFja2FnZVxyXG4gIGNvbnN0IHJlYWxEYXRhID0gZGF0YS5tYXAoKGRvY3MpID0+IG1hdHRlcihkb2NzKSk7XHJcbiAgLy90aGVuIHdlIG1hcCBvdmVyIHRoZXNlIHJlYWwgZGF0YSB0byBnZXQgd2hhdCBpcyBpbnNpZGUgdGhpcyBmcmVha2luZyBvYmplY3RcclxuICBjb25zdCB1blNvcnRlZERvY3MgPSByZWFsRGF0YS5tYXAoKGRvY3MpID0+IGRvY3MuZGF0YSk7XHJcblxyXG4gIC8vc29ydGluZyBkb2NzXHJcbiAgY29uc3QgZG9jcyA9IHVuU29ydGVkRG9jcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgZG9jc1RvQmVTaG93bjtcclxuICByZWFsRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5kYXRhLnNsdWcgPT09IHNsdWcpIHtcclxuICAgICAgZG9jc1RvQmVTaG93biA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVycyA9IHtcclxuICAgIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgICBzdHlsZT17YXRvbU9uZURhcmt9XHJcbiAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBjb25zdCBidXJnZXJJY29uT3BlbmVkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtidXJnZXJJY29uT3BlbmVkLCBzZXRPcGVuQnVyZ2VySWNvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYnVyZ2VySWNvbk9wZW5lZFJlZi5jdXJyZW50LmF0dHJpYnV0ZXMuc3JjKTtcclxuICAgIGJ1cmdlckljb25PcGVuZWRcclxuICAgICAgPyBidXJnZXJJY29uT3BlbmVkUmVmLmN1cnJlbnQuc3JjID0gXCIvYnVyZ2VySWNvbkNsb3NlZC5zdmdcIlxyXG4gICAgICA6IGJ1cmdlckljb25PcGVuZWRSZWYuY3VycmVudC5zcmMgPSBcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wiO1xyXG4gICAgc2V0T3BlbkJ1cmdlckljb24oIWJ1cmdlckljb25PcGVuZWQpO1xyXG4gICAgc2V0T3BlbkJ1cmdlckljb24oIWJ1cmdlckljb25PcGVuZWQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2lkZU5hdiBkb2NzPXtkb2NzfSBjdXJyZW50bHlPcGVuZWRTbHVnPXtzbHVnfSBpc09wZW5lZD17ZmFsc2V9IC8+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25SZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb259IHNyYz17XCIvYnVyZ2VySWNvbk9wZW5lZC5zdmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17XCJmb3JtIHJpZGVyIGJyYW5kXCJ9XHJcbiAgICAgICAgICAgICAgc3JjPXtcIi9icmFuZC5wbmdcIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlRXhwbGFpbmVkfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmVhY3RtYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxyXG4gICAgICAgICAgICAgIHtkb2NzVG9CZVNob3duLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RtYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2V9XHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaXJhZ2VEYi9Gb3JtUmlkZXJqcy13ZWJzaXRlL3RyZWUvbWFpbi9jb250ZW50L1wiICtcclxuICAgICAgICAgICAgICAgIGAke3NsdWd9YCArXHJcbiAgICAgICAgICAgICAgICBcIi5tZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkVkaXQgdGhpcyBwYWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRm9ybSByaWRlciBwYWdlIGVkaXQgb24gZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvZWRpdC5zdmdcIn1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcclxuICBjb25zdCBkb2NzID0gZmlsZXMuZmlsdGVyKChmdW5jKSA9PiBmdW5jLmVuZHNXaXRoKFwiLm1kXCIpKTtcclxuICBjb25zdCBkYXRhID0gZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnQvJHtkb2N9YDtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pO1xyXG5cclxuICAgIHJldHVybiByYXdDb250ZW50O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=