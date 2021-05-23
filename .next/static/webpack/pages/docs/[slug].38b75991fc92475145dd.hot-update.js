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
        lineNumber: 33,
        columnNumber: 9
      }, _this);
    }
  };

  var toggleSideNav = function toggleSideNav() {
    window.alert("a");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sideNav_Sidenav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      docs: docs,
      currentlyOpenedSlug: slug,
      isOpened: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggleSideNav,
      className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sideNavButton,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + "burgerIconHidden",
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon,
        src: "/burgerIconOpened.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
            children: docsToBeShown.data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: docsToBeShown.data.titleExplained
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJ0b2dnbGVTaWRlTmF2Iiwid2luZG93IiwiYWxlcnQiLCJzdHlsZXMiLCJzaWRlTmF2QnV0dG9uIiwiYnVyZ2VySWNvbiIsInBhZ2VMYXlvdXQiLCJtYWluTGF5b3V0IiwidGl0bGVDb250YWluZXIiLCJicmFuZCIsInRpdGxlIiwidGl0bGVFeHBsYWluZWQiLCJjb250ZW50IiwiZWRpdFBhZ2VDb250YWluZXIiLCJlZGl0UGFnZSIsImVkaXRQYWdlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQixDQUZzQixDQUd0Qjs7QUFDQSxNQUFNRSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNILElBQWY7QUFBQSxHQUFiLENBQXJCLENBSnNCLENBTXRCOztBQUNBLE1BQU1HLElBQUksR0FBR0UsWUFBWSxDQUFDQyxJ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UyxFQUFFViw4REFBTSxDQUFDVyxRQURwQjtBQUVFLGdCQUFJLEVBQ0YsaUZBQ0d4QixJQURILElBRUEsS0FMSjtBQU9FLGtCQUFNLEVBQUMsUUFQVDtBQUFBLG9DQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFDRSx1QkFBUyxFQUFFYSw4REFBTSxDQUFDWSxZQURwQjtBQUVFLGlCQUFHLEVBQUMsZ0NBRk47QUFHRSxpQkFBRyxFQUFFO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQXRGUXRDLEk7VUFXUVkscUQ7OztLQVhSWixJOztBQXdHTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uMzhiNzU5OTFmYzkyNDc1MTQ1ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3NpZGVOYXYvU2lkZW5hdlwiO1xyXG5pbXBvcnQgUmVhY3RtYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2RvY3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgYXRvbU9uZURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCI7XHJcblxyXG5mdW5jdGlvbiBEb2NzKHsgZGF0YSB9KSB7XHJcbiAgLy9leHRyYWN0aW5nIHJlYWwgZGF0YSBmcm9tIGRhdGEgdXNpbmcgZ3JheS1tYXR0ZXIgcGFja2FnZVxyXG4gIGNvbnN0IHJlYWxEYXRhID0gZGF0YS5tYXAoKGRvY3MpID0+IG1hdHRlcihkb2NzKSk7XHJcbiAgLy90aGVuIHdlIG1hcCBvdmVyIHRoZXNlIHJlYWwgZGF0YSB0byBnZXQgd2hhdCBpcyBpbnNpZGUgdGhpcyBmcmVha2luZyBvYmplY3RcclxuICBjb25zdCB1blNvcnRlZERvY3MgPSByZWFsRGF0YS5tYXAoKGRvY3MpID0+IGRvY3MuZGF0YSk7XHJcblxyXG4gIC8vc29ydGluZyBkb2NzXHJcbiAgY29uc3QgZG9jcyA9IHVuU29ydGVkRG9jcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgZG9jc1RvQmVTaG93bjtcclxuICByZWFsRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5kYXRhLnNsdWcgPT09IHNsdWcpIHtcclxuICAgICAgZG9jc1RvQmVTaG93biA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVycyA9IHtcclxuICAgIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgICBzdHlsZT17YXRvbU9uZURhcmt9XHJcbiAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXCJhXCIpOyBcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNpZGVOYXYgZG9jcz17ZG9jc30gY3VycmVudGx5T3BlbmVkU2x1Zz17c2x1Z30gaXNPcGVuZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICA8ZGl2IG9uQ2xpY2sgPSB7dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJJY29uICsgXCIgXCIgKyBcImJ1cmdlckljb25IaWRkZW5cIn0gc3JjPXtcIi9idXJnZXJJY29uQ2xvc2VkLnN2Z1wifSAvPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VySWNvbn0gc3JjPXtcIi9idXJnZXJJY29uT3BlbmVkLnN2Z1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtcImZvcm0gcmlkZXIgYnJhbmRcIn1cclxuICAgICAgICAgICAgICBzcmM9e1wiL2JyYW5kLnBuZ1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntkb2NzVG9CZVNob3duLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPntkb2NzVG9CZVNob3duLmRhdGEudGl0bGVFeHBsYWluZWR9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZWFjdG1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSByZW5kZXJlcnM9e3JlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAge2RvY3NUb0JlU2hvd24uY29udGVudH1cclxuICAgICAgICAgICAgPC9SZWFjdG1hcmtkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZX1cclxuICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL3NpcmFnZURiL0Zvcm1SaWRlcmpzLXdlYnNpdGUvdHJlZS9tYWluL2NvbnRlbnQvXCIgK1xyXG4gICAgICAgICAgICAgICAgYCR7c2x1Z31gICtcclxuICAgICAgICAgICAgICAgIFwiLm1kXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RWRpdCB0aGlzIHBhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUljb259XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGb3JtIHJpZGVyIHBhZ2UgZWRpdCBvbiBnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9lZGl0LnN2Z1wifVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRgLCBcInV0Zi04XCIpO1xyXG4gIGNvbnN0IGRvY3MgPSBmaWxlcy5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMuZW5kc1dpdGgoXCIubWRcIikpO1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vY29udGVudC8ke2RvY31gO1xyXG4gICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==