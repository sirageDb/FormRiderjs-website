module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: ./components/header/header.module.scss
var header_module = __webpack_require__("pWeJ");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/header/header.js




function Header() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: header_module_default.a.headerSupContainer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: header_module_default.a.headerContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: header_module_default.a.headerLeftContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: header_module_default.a.logo,
            src: "/formRiderLogo.png",
            alt: "FormRiderLogo"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: header_module_default.a.headerRightContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
          href: "/docs/introduction",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: header_module_default.a.headerButton + " " + header_module_default.a.docsLink,
            children: "Docs"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
          href: "/docs/installation",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: header_module_default.a.headerButton + " " + header_module_default.a.installLink,
            children: "Install"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: header_module_default.a.version,
          children: "v1.0.0-Beta"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: header_module_default.a.headerGithubIcon,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://github.com/sirageDb/FormRiderjs",
            target: "_blank",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: header_module_default.a.headerIcon,
              src: "/github.svg",
              alt: "github link to Form Rider"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://discord.gg/4SbzkHrm",
            target: "_blank",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: header_module_default.a.headerIcon,
              src: "/discord.svg",
              alt: "slack link to Form Rider community"
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/socialNetworkingButton/socialNetworkingButton.module.scss
var socialNetworkingButton_module = __webpack_require__("qQsK");
var socialNetworkingButton_module_default = /*#__PURE__*/__webpack_require__.n(socialNetworkingButton_module);

// CONCATENATED MODULE: ./components/socialNetworkingButton/socialNetworkingButton.js




function SocialNetworkingButton(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: socialNetworkingButton_module_default.a.buttonContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: socialNetworkingButton_module_default.a.socialNetworkingButton,
        href: props.goTo,
        rel: "noopener noreferrer",
        target: "_blank",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: props.src,
            alt: props.alt,
            className: socialNetworkingButton_module_default.a.socialNetworkingIcon
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: props.text
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/socialNetworkingContainer/socialNetworkingContainer.module.scss
var socialNetworkingContainer_module = __webpack_require__("ZsMI");
var socialNetworkingContainer_module_default = /*#__PURE__*/__webpack_require__.n(socialNetworkingContainer_module);

// CONCATENATED MODULE: ./components/socialNetworkingContainer/socialNetworkingContainer.js





function SocialNetworkingContainer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: socialNetworkingContainer_module_default.a.socialNetworkingContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialNetworkingButton, {
      className: socialNetworkingContainer_module_default.a.singleNetworkingButton,
      goTo: "https://twitter.com/iLoveSemicolon",
      src: "twitterLogo.svg",
      alt: "twitterLogo",
      text: "@iLoveSemicolon"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialNetworkingButton, {
      className: socialNetworkingContainer_module_default.a.singleNetworkingButton,
      goTo: "https://www.linkedin.com/in/sirage-al-dbiyat/",
      src: "linkedinLogo.svg",
      alt: "linkedIn logo",
      text: "Sirage Al dbiyat"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialNetworkingButton, {
      className: socialNetworkingContainer_module_default.a.singleNetworkingButton,
      goTo: "https://github.com/sirageDb",
      src: "github.svg",
      alt: "githubLogo",
      text: "sirageDb"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialNetworkingButton, {
      className: socialNetworkingContainer_module_default.a.singleNetworkingButton,
      goTo: "https://ilovesemicolons.io",
      src: "website.svg",
      alt: "sirage al dbiyta website developer",
      text: "ilovesemicolons.io"
    })]
  });
}
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__("n5M9");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// CONCATENATED MODULE: ./components/footer/Footer.js




function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: footer_module_default.a.footerContainer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: footer_module_default.a.footerMainContent,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/brand.png",
        className: footer_module_default.a.brand
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: ["FormRider.js, made with ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: footer_module_default.a.love,
          src: "/like.png"
        }), " for the community by Sirage AL DBIYAT (", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://ilovesemicolons.io",
          className: footer_module_default.a.linkToiLoveSemicolons,
          children: "iLoveSemicolons"
        }), ")", /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialNetworkingContainer, {})]
      })]
    })
  });
}
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__("H/sG");

// EXTERNAL MODULE: external "next/Head"
var Head_ = __webpack_require__("ZOYG");
var Head_default = /*#__PURE__*/__webpack_require__.n(Head_);

// CONCATENATED MODULE: ./components/meta/Meta.js



function Meta({
  title,
  keywords,
  description
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      charSet: 'utf-8'
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "icon",
      href: "/favicon.ico"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: title
    })]
  });
}
Meta.defaultProps = {
  title: "Form Rider, a javascript form validation plugin, based on JSON",
  keywords: "Form, HTML forms, validation, plugin, javascript, sirage al dbiyat, open source, opensource, notification, library, plugin",
  description: "Validate HTML forms without typing other code than editing JSON and adding HTML attributes, with many validation functionalities such as required till regex and conditional validation"
};
// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import FundingBanner from "../components/fundingBanner/FundingBanner";





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Meta, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "theMotherOfAllContainers",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZOYG":
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "ZsMI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"socialNetworkingContainer": "socialNetworkingContainer_socialNetworkingContainer__2ygkm"
};


/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "n5M9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__29_SB",
	"footerMainContent": "footer_footerMainContent__3TP_h",
	"brand": "footer_brand__2NKLr",
	"love": "footer_love__2fvxt",
	"linkToiLoveSemicolons": "footer_linkToiLoveSemicolons__1fAEy"
};


/***/ }),

/***/ "pWeJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerSupContainer": "header_headerSupContainer__1fFfC",
	"headerContainer": "header_headerContainer__3uLCo",
	"headerRightContainer": "header_headerRightContainer__2gxc-",
	"logo": "header_logo__eiLSq",
	"headerButton": "header_headerButton__HlGT3",
	"docsLink": "header_docsLink__1qdwd",
	"notificationsLink": "header_notificationsLink__YRc-l",
	"installLink": "header_installLink__1G-Hm",
	"version": "header_version__3LgiE",
	"headerIcon": "header_headerIcon__3t8Jk",
	"headerGithubIcon": "header_headerGithubIcon__1cVlf"
};


/***/ }),

/***/ "qQsK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buttonContainer": "socialNetworkingButton_buttonContainer__2jji6",
	"socialNetworkingIcon": "socialNetworkingButton_socialNetworkingIcon__2sCtj",
	"socialNetworkingButton": "socialNetworkingButton_socialNetworkingButton__18LIC"
};


/***/ })

/******/ });