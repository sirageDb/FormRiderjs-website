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
  var burgerIconOpened = React.createRef(); //sorting docs

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

  var toggleSideNav = function toggleSideNav() {};

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
        ref: burgerIconClosed,
        className: _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIcon + " " + _pages_docs_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.burgerIconHidden,
        src: "/burgerIconClosed.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        ref: burgerIconOpened,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bc2x1Z10vaW5kZXguanMiXSwibmFtZXMiOlsiRG9jcyIsImRhdGEiLCJyZWFsRGF0YSIsIm1hcCIsImRvY3MiLCJtYXR0ZXIiLCJ1blNvcnRlZERvY3MiLCJidXJnZXJJY29uT3BlbmVkIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImRvY3NUb0JlU2hvd24iLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiYXRvbU9uZURhcmsiLCJ0b2dnbGVTaWRlTmF2Iiwic3R5bGVzIiwic2lkZU5hdkJ1dHRvbiIsImJ1cmdlckljb25DbG9zZWQiLCJidXJnZXJJY29uIiwiYnVyZ2VySWNvbkhpZGRlbiIsInBhZ2VMYXlvdXQiLCJtYWluTGF5b3V0IiwidGl0bGVDb250YWluZXIiLCJicmFuZCIsInRpdGxlIiwidGl0bGVFeHBsYWluZWQiLCJjb250ZW50IiwiZWRpdFBhZ2VDb250YWluZXIiLCJlZGl0UGFnZSIsImVkaXRQYWdlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3RCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FBVUMsa0RBQU0sQ0FBQ0QsSUFBRCxDQUFoQjtBQUFBLEdBQVQsQ0FBakIsQ0FGc0IsQ0FHdEI7O0FBQ0EsTUFBTUUsWUFBWSxHQUFHSixRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDSCxJ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QTdDO0FBQUEsc0JBQ0dILGFBQWEsQ0FBQ29CO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBZUU7QUFBSyxtQkFBUyxFQUFFWCw4REFBTSxDQUFDWSxpQkFBdkI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUVaLDhEQUFNLENBQUNhLFFBRHBCO0FBRUUsZ0JBQUksRUFDRixpRkFDR3hCLElBREgsSUFFQSxLQUxKO0FBT0Usa0JBQU0sRUFBQyxRQVBUO0FBQUEsb0NBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsZUFVRTtBQUNFLHVCQUFTLEVBQUVXLDhEQUFNLENBQUNjLFlBRHBCO0FBRUUsaUJBQUcsRUFBQyxnQ0FGTjtBQUdFLGlCQUFHLEVBQUU7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMENFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBckZRekMsSTtVQVdRZSxxRDs7O0tBWFJmLEk7O0FBdUdNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS5lNTFhZjBiMTJhOGZiYmI1M2YyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2lkZU5hdi9TaWRlbmF2XCI7XHJcbmltcG9ydCBSZWFjdG1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZG9jcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBhdG9tT25lRGFyayB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIjtcclxuaW1wb3J0IHVzZVJlZiBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIERvY3MoeyBkYXRhIH0pIHtcclxuICAvL2V4dHJhY3RpbmcgcmVhbCBkYXRhIGZyb20gZGF0YSB1c2luZyBncmF5LW1hdHRlciBwYWNrYWdlXHJcbiAgY29uc3QgcmVhbERhdGEgPSBkYXRhLm1hcCgoZG9jcykgPT4gbWF0dGVyKGRvY3MpKTtcclxuICAvL3RoZW4gd2UgbWFwIG92ZXIgdGhlc2UgcmVhbCBkYXRhIHRvIGdldCB3aGF0IGlzIGluc2lkZSB0aGlzIGZyZWFraW5nIG9iamVjdFxyXG4gIGNvbnN0IHVuU29ydGVkRG9jcyA9IHJlYWxEYXRhLm1hcCgoZG9jcykgPT4gZG9jcy5kYXRhKTtcclxuICBjb25zdCBidXJnZXJJY29uT3BlbmVkID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgLy9zb3J0aW5nIGRvY3NcclxuICBjb25zdCBkb2NzID0gdW5Tb3J0ZWREb2NzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGxldCBkb2NzVG9CZVNob3duO1xyXG4gIHJlYWxEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmRhdGEuc2x1ZyA9PT0gc2x1Zykge1xyXG4gICAgICBkb2NzVG9CZVNob3duID0gZWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyZXJzID0ge1xyXG4gICAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIHN0eWxlPXthdG9tT25lRGFya31cclxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgICAgIGNoaWxkcmVuPXt2YWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZU5hdiA9ICgpID0+IHtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNpZGVOYXYgZG9jcz17ZG9jc30gY3VycmVudGx5T3BlbmVkU2x1Zz17c2x1Z30gaXNPcGVuZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICA8ZGl2IG9uQ2xpY2sgPSB7dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdkJ1dHRvbn0+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25DbG9zZWR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb24gKyBcIiBcIiArIHN0eWxlcy5idXJnZXJJY29uSGlkZGVufSBzcmM9e1wiL2J1cmdlckljb25DbG9zZWQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgPGltZyByZWY9e2J1cmdlckljb25PcGVuZWR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckljb259IHNyYz17XCIvYnVyZ2VySWNvbk9wZW5lZC5zdmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17XCJmb3JtIHJpZGVyIGJyYW5kXCJ9XHJcbiAgICAgICAgICAgICAgc3JjPXtcIi9icmFuZC5wbmdcIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz57ZG9jc1RvQmVTaG93bi5kYXRhLnRpdGxlRXhwbGFpbmVkfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UmVhY3RtYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxyXG4gICAgICAgICAgICAgIHtkb2NzVG9CZVNob3duLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RtYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2V9XHJcbiAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaXJhZ2VEYi9Gb3JtUmlkZXJqcy13ZWJzaXRlL3RyZWUvbWFpbi9jb250ZW50L1wiICtcclxuICAgICAgICAgICAgICAgIGAke3NsdWd9YCArXHJcbiAgICAgICAgICAgICAgICBcIi5tZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkVkaXQgdGhpcyBwYWdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFBhZ2VJY29ufVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRm9ybSByaWRlciBwYWdlIGVkaXQgb24gZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvZWRpdC5zdmdcIn1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcclxuICBjb25zdCBkb2NzID0gZmlsZXMuZmlsdGVyKChmdW5jKSA9PiBmdW5jLmVuZHNXaXRoKFwiLm1kXCIpKTtcclxuICBjb25zdCBkYXRhID0gZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnQvJHtkb2N9YDtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pO1xyXG5cclxuICAgIHJldHVybiByYXdDb250ZW50O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=