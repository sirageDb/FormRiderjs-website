module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SpAJ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "SpAJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__("uo/4");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: ./components/sideNav/sideNav.module.scss
var sideNav_module = __webpack_require__("vnNi");
var sideNav_module_default = /*#__PURE__*/__webpack_require__.n(sideNav_module);

// CONCATENATED MODULE: ./components/sideNav/Sidenav.js






function SideNav(props) {
  const sideNavRef = Object(external_react_["useRef"])();
  const validatorsContainerRef = Object(external_react_["useRef"])();
  const listArrowRef = Object(external_react_["useRef"])();
  const {
    0: validatorsSectionOpened,
    1: setOpen
  } = Object(external_react_["useState"])(true); //currently opened docs

  let currentlyOpenedSlug = props.currentlyOpenedSlug;
  Object(external_react_["useEffect"])(() => {
    const sideNav = sideNavRef.current;
    const validatorsContainer = validatorsContainerRef.current; //check all doc titles in sidenav, when the title has an idslug and holding the same slug as the url slug add a style class to it

    [...sideNav.childNodes].forEach(child => {
      if (child.attributes.idslug && child.attributes.idslug.value === currentlyOpenedSlug) {
        child.classList.add(`${sideNav_module_default.a.currentlyOpenedDoc}`);
      }

      if (child.attributes.idslug && child.attributes.idslug.value !== currentlyOpenedSlug) {
        child.classList.remove(`${sideNav_module_default.a.currentlyOpenedDoc}`);
      }
    }); //check all subtitles, if a subtitle has the same idslug as the url slug then currentlyOpneedSubDOc class will be added

    [...validatorsContainer.childNodes].forEach(child => {
      if (child.attributes.idslug.value === currentlyOpenedSlug) {
        child.classList.add(`${sideNav_module_default.a.currentlyOpenedSubDoc}`);
      }

      if (child.attributes.idslug.value !== currentlyOpenedSlug) {
        child.classList.remove(`${sideNav_module_default.a.currentlyOpenedSubDoc}`);
      }
    });
  }); //when a section is opened we add a display block and add rotate the arrow, when closed we do the opposite

  function opneSection() {
    let validatorsContainer = validatorsContainerRef.current;
    let listArrow = listArrowRef.current;
    console.log(listArrow);
    validatorsSectionOpened ? (validatorsContainer.style.display = "block", listArrow.classList.add(`${sideNav_module_default.a.listArrowRotated}`)) : (validatorsContainer.style.display = "none", listArrow.classList.remove(`${sideNav_module_default.a.listArrowRotated}`));
    setOpen(!validatorsSectionOpened);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    className: sideNav_module_default.a.sideNavContainer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      ref: sideNavRef,
      className: sideNav_module_default.a.sideNav,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/introduction`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "introduction",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Introduction"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/getting-started`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "getting-started",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Getting started"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/installation`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "installation",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Installation"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/understanding-configurations-and-main-concepts`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "understanding-configurations-and-main-concepts",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Understanding configurations and main concepts"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: sideNav_module_default.a.titleWithSubTitles,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          onClick: opneSection,
          className: sideNav_module_default.a.supTitleContainer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: " Validators and functionalities"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            ref: listArrowRef,
            className: sideNav_module_default.a.listArrowUnRotated,
            alt: "list arrow",
            src: "/arrow.svg"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          ref: validatorsContainerRef,
          className: sideNav_module_default.a.subTitleContainer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/required",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "required",
              className: sideNav_module_default.a.subTitle,
              children: "required"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/email",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "email",
              className: sideNav_module_default.a.subTitle,
              children: "email"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/minLength",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "minLength",
              className: sideNav_module_default.a.subTitle,
              children: "minLength"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/maxLength",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "maxLength",
              className: sideNav_module_default.a.subTitle,
              children: "maxLength"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/containNumber",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "containNumber",
              className: sideNav_module_default.a.subTitle,
              children: "containNumber"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/numberBiggerThan",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "numberBiggerThan",
              className: sideNav_module_default.a.subTitle,
              children: "numberBiggerThan"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/numberSmallerThan",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "numberSmallerThan",
              className: sideNav_module_default.a.subTitle,
              children: "numberSmallerThan"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/containSpecialCharacters",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "containSpecialCharacters",
              className: sideNav_module_default.a.subTitle,
              children: "containSpecialCharacters"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/containWhiteSpace",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "containWhiteSpace",
              className: sideNav_module_default.a.subTitle,
              children: "containWhiteSpace"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/containCapitalLetters",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "containCapitalLetters",
              className: sideNav_module_default.a.subTitle,
              children: "containCapitalLetters"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/containSmallLetters",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "containSmallLetters",
              className: sideNav_module_default.a.subTitle,
              children: "containSmallLetters"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/dateFormat",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "dateFormat",
              className: sideNav_module_default.a.subTitle,
              children: "dateFormat"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/regexTest",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "regexTest",
              className: sideNav_module_default.a.subTitle,
              children: "regexTest"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/checkboxRequired",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "checkboxRequired",
              className: sideNav_module_default.a.subTitle,
              children: "checkboxRequired"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/radioRequired",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "radioRequired",
              className: sideNav_module_default.a.subTitle,
              children: "radioRequired"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/docs/conditionalRequired",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              idslug: "conditionalRequired",
              className: sideNav_module_default.a.subTitle,
              children: "conditionalRequired"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/notifications`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "notifications",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Notifications"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        href: `/docs/understanding-error-messages`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          idslug: "understanding-error-messages",
          className: sideNav_module_default.a.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: sideNav_module_default.a.titleContainer,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Understanding error messages"
            })
          })
        })
      })]
    })
  });
}

/* harmony default export */ var Sidenav = (SideNav);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./pages/docs.module.scss
var docs_module = __webpack_require__("l0Ek");
var docs_module_default = /*#__PURE__*/__webpack_require__.n(docs_module);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/hljs"
var hljs_ = __webpack_require__("T0ZK");

// CONCATENATED MODULE: ./pages/docs/[slug]/index.js










function Docs({
  data
}) {
  //extracting real data from data using gray-matter package
  const realData = data.map(docs => external_gray_matter_default()(docs)); //then we map over these real data to get what is inside this freaking object

  const unSortedDocs = realData.map(docs => docs.data); //sorting docs

  const docs = unSortedDocs.sort((a, b) => {
    return a.order - b.order;
  });
  const router = Object(router_["useRouter"])();
  const {
    slug
  } = router.query;
  let docsToBeShown;
  realData.forEach(element => {
    if (element.data.slug === slug) {
      docsToBeShown = element;
    }
  });
  const renderers = {
    code: ({
      language,
      value
    }) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_syntax_highlighter_default.a, {
        style: hljs_["atomOneDark"],
        language: language,
        children: value
      });
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidenav, {
      docs: docs,
      currentlyOpenedSlug: slug
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: docs_module_default.a.pageLayout,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
        className: docs_module_default.a.mainLayout,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: docs_module_default.a.titleContainer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            alt: "form rider brand",
            src: "/brand.png",
            className: docs_module_default.a.brand
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: docs_module_default.a.title,
            children: docsToBeShown.data.title
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: docsToBeShown.data.titleExplained
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: docs_module_default.a.content,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_markdown_default.a, {
            escapeHtml: false,
            renderers: renderers,
            children: docsToBeShown.content
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: docs_module_default.a.editPageContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            className: docs_module_default.a.editPage,
            href: "https://github.com/sirageDb/FormRiderjs-website/tree/main/content/" + `${slug}` + ".md",
            target: "_blank",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "Edit this page"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: docs_module_default.a.editPageIcon,
              alt: "Form rider page edit on github",
              src: "/edit.svg"
            })]
          })
        })]
      })
    })]
  });
}

async function getServerSideProps() {
  const fs = __webpack_require__("mw/K");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const docs = files.filter(func => func.endsWith(".md"));
  const data = docs.map(doc => {
    const path = `${process.cwd()}/content/${doc}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });
    return rawContent;
  });
  return {
    props: {
      data: data
    }
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Docs);

/***/ }),

/***/ "T0ZK":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "l0Ek":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageLayout": "docs_pageLayout__2bHyd",
	"mainLayout": "docs_mainLayout__LHNZC",
	"titleContainer": "docs_titleContainer__3URxJ",
	"title": "docs_title__6Fi6e",
	"brand": "docs_brand__2685u",
	"content": "docs_content__30oQp",
	"editPageContainer": "docs_editPageContainer__1CV3b",
	"editPage": "docs_editPage__chE95",
	"editPageIcon": "docs_editPageIcon__G01Vt"
};


/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vnNi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sideNavContainer": "sideNav_sideNavContainer__1_sGg",
	"sideNav": "sideNav_sideNav__kyYEd",
	"titleContainer": "sideNav_titleContainer__3QHTD",
	"title": "sideNav_title__12-jg",
	"titleIcon": "sideNav_titleIcon__1A72R",
	"currentlyOpenedDoc": "sideNav_currentlyOpenedDoc__1DvDi",
	"titleWithSubTitles": "sideNav_titleWithSubTitles__3AZ5T",
	"supTitleContainer": "sideNav_supTitleContainer__1nGg3",
	"subTitleContainer": "sideNav_subTitleContainer__3Dnou",
	"subTitle": "sideNav_subTitle__3iiGO",
	"currentlyOpenedSubDoc": "sideNav_currentlyOpenedSubDoc__2Mfn5",
	"listArrowUnRotated": "sideNav_listArrowUnRotated__1Neph",
	"listArrowRotated": "sideNav_listArrowRotated__kp3s0"
};


/***/ })

/******/ });