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
  var burgerIconOpenedRef = createRef(null);
  var burgerIconClosedRef = createRef(null); //sorting docs

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
    console.log(burgerIconClosedRef.current.classList);
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
        ref: burgerIconClosed,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconOpened,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon,
        src: "/burgerIconOpened.svg"
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

_s(Docs, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJidXJnZXJJY29uT3BlbmVkUmVmIiwiY3JlYXRlUmVmIiwiYnVyZ2VySWNvbkNsb3NlZFJlZiIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZG9jc1RvQmVTaG93biIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJhdG9tT25lRGFyayIsInRvZ2dsZVNpZGVOYXYiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInN0eWxlcyIsInNpZGVOYXZCdXR0b24iLCJidXJnZXJJY29uQ2xvc2VkIiwiYnVyZ2VySWNvbiIsImJ1cmdlckljb25IaWRkZW4iLCJidXJnZXJJY29uT3BlbmVkIiwicGFnZUxheW91dCIsIm1haW5MYXlvdXQiLCJ0aXRsZUNvbnRhaW5lciIsImJyYW5kIiwidGl0bGUiLCJ0aXRsZUV4cGxhaW5lZCIsImNvbnRlbnQiLCJlZGl0UGFnZUNvbnRhaW5lciIsImVkaXRQYWdlIiwiZWRpdFBhZ2VJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQixDQUZzQixDQUd0Qjs7QUFD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RTtBQUFBLG9CQUFLdkIsYUFBYSxDQUFDakIsSUFBZCxDQUFtQnlDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFLLG1CQUFTLEVBQUVYLDhEQUFNLENBQUNZLE9BQXZCO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBZSxzQkFBVSxFQUFFLEtBQTNCO0FBQWtDLHFCQUFTLEVBQUV0QixTQUE3QztBQUFBLHNCQUNHSCxhQUFhLENBQUN5QjtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWVFO0FBQUssbUJBQVMsRUFBRVosOERBQU0sQ0FBQ2EsaUJBQXZCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFYiw4REFBTSxDQUFDYyxRQURwQjtBQUVFLGdCQUFJLEVBQ0YsaUZBQ0c3QixJQURILElBRUEsS0FMSjtBQU9FLGtCQUFNLEVBQUMsUUFQVDtBQUFBLG9DQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFDRSx1QkFBUyxFQUFFZSw4REFBTSxDQUFDZSxZQURwQjtBQUVFLGlCQUFHLEVBQUMsZ0NBRk47QUFHRSxpQkFBRyxFQUFFO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQXZGUTlDLEk7VUFZUWUscUQ7OztLQVpSZixJOztBQXlHTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uZWY2OWI4NGJkYjJhMjExZTQ4ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NpZGVOYXYvU2lkZW5hdlwiO1xyXG5pbXBvcnQgUmVhY3RtYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2RvY3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgYXRvbU9uZURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCI7XHJcbmltcG9ydCB1c2VSZWYgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBEb2NzKHsgZGF0YSB9KSB7XHJcbiAgLy9leHRyYWN0aW5nIHJlYWwgZGF0YSBmcm9tIGRhdGEgdXNpbmcgZ3JheS1tYXR0ZXIgcGFja2FnZVxyXG4gIGNvbnN0IHJlYWxEYXRhID0gZGF0YS5tYXAoKGRvY3MpID0+IG1hdHRlcihkb2NzKSk7XHJcbiAgLy90aGVuIHdlIG1hcCBvdmVyIHRoZXNlIHJlYWwgZGF0YSB0byBnZXQgd2hhdCBpcyBpbnNpZGUgdGhpcyBmcmVha2luZyBvYmplY3RcclxuICBjb25zdCB1blNvcnRlZERvY3MgPSByZWFsRGF0YS5tYXAoKGRvY3MpID0+IGRvY3MuZGF0YSk7XHJcbiAgY29uc3QgYnVyZ2VySWNvbk9wZW5lZFJlZiA9IGNyZWF0ZVJlZihudWxsKTtcclxuICBjb25zdCBidXJnZXJJY29uQ2xvc2VkUmVmID0gY3JlYXRlUmVmKG51bGwpO1xyXG4gIC8vc29ydGluZyBkb2NzXHJcbiAgY29uc3QgZG9jcyA9IHVuU29ydGVkRG9jcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgZG9jc1RvQmVTaG93bjtcclxuICByZWFsRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5kYXRhLnNsdWcgPT09IHNsdWcpIHtcclxuICAgICAgZG9jc1RvQmVTaG93biA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVycyA9IHtcclxuICAgIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgICBzdHlsZT17YXRvbU9uZURhcmt9XHJcbiAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhidXJnZXJJY29uQ2xvc2VkUmVmLmN1cnJlbnQuY2xhc3NMaXN0KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNpZGVOYXYgZG9jcz17ZG9jc30gY3VycmVudGx5T3BlbmVkU2x1Zz17c2x1Z30gaXNPcGVuZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICA8ZGl2IG9uQ2xpY2sgPSB7dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25DbG9zZWR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb24gKyBcIiBcIiArIHN0eWxlcy5idXJnZXJJY29uSGlkZGVufSBzcmM9e1wiL2J1cmdlckljb25DbG9zZWQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25PcGVuZWR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb259IHNyYz17XCIvYnVyZ2VySWNvbk9wZW5lZC5zdmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17XCJmb3JtIHJpZGVyIGJyYW5kXCJ9XHJcbiAgICAgICAgICAgICAgc3JjPXtcIi9icmFuZC5wbmdcIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlRXhwbGFpbmVkfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmVhY3RtYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxyXG4gICAgICAgICAgICAgIHtkb2NzVG9CZVNob3duLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RtYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2V9XHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaXJhZ2VEYi9Gb3JtUmlkZXJqcy13ZWJzaXRlL3RyZWUvbWFpbi9jb250ZW50L1wiICtcclxuICAgICAgICAgICAgICAgIGAke3NsdWd9YCArXHJcbiAgICAgICAgICAgICAgICBcIi5tZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkVkaXQgdGhpcyBwYWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRm9ybSByaWRlciBwYWdlIGVkaXQgb24gZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvZWRpdC5zdmdcIn1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcclxuICBjb25zdCBkb2NzID0gZmlsZXMuZmlsdGVyKChmdW5jKSA9PiBmdW5jLmVuZHNXaXRoKFwiLm1kXCIpKTtcclxuICBjb25zdCBkYXRhID0gZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnQvJHtkb2N9YDtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pO1xyXG5cclxuICAgIHJldHVybiByYXdDb250ZW50O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=