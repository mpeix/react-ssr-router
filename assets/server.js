/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.jsx */ \"./src/components/footer/footer.jsx\");\n/* harmony import */ var _components_header_header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.jsx */ \"./src/components/header/header.jsx\");\n/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.js */ \"./src/routes/routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\App.js\";\n\n\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    routes: _routes_routes_js__WEBPACK_IMPORTED_MODULE_4__[\"routes\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: this\n  }, _routes_routes_js__WEBPACK_IMPORTED_MODULE_4__[\"routes\"].map((route, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], Object.assign({\n    key: index\n  }, route, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: this\n  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/footer/footer.jsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\components\\\\footer\\\\footer.jsx\";\n\n\nfunction Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: this\n  }, \"Footer\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/footer/footer.jsx?");

/***/ }),

/***/ "./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navBar_nav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navBar/nav.jsx */ \"./src/components/navBar/nav.jsx\");\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\components\\\\header\\\\header.jsx\";\n\n\n\nfunction Header(props) {\n  console.log('header');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navBar_nav_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    routes: props.routes,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: this\n  }, \"This is the title .\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }, \"This is the subtitle\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/header/header.jsx?");

/***/ }),

/***/ "./src/components/navBar/nav.css":
/*!***************************************!*\
  !*** ./src/components/navBar/nav.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/components/navBar/nav.css?");

/***/ }),

/***/ "./src/components/navBar/nav.jsx":
/*!***************************************!*\
  !*** ./src/components/navBar/nav.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.css */ \"./src/components/navBar/nav.css\");\n/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\components\\\\navBar\\\\nav.jsx\";\n\n\n\n\nfunction Nav(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"nav\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: this\n  }, props.routes && props.routes.map(route => route.path && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: route.path,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: route.path,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }, route.name))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/components/navBar/nav.jsx?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\index.js\";\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"], {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8\n  },\n  __self: undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9\n  },\n  __self: undefined\n})), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _views_home_home_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home/home.jsx */ \"./src/views/home/home.jsx\");\n/* harmony import */ var _views_aboutUs_aboutUs_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/aboutUs/aboutUs.jsx */ \"./src/views/aboutUs/aboutUs.jsx\");\n/* harmony import */ var _views_detail_detail_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/detail/detail.jsx */ \"./src/views/detail/detail.jsx\");\n/* harmony import */ var _views_notfound_notFound_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/notfound/notFound.jsx */ \"./src/views/notfound/notFound.jsx\");\n\n\n\n\nconst routes = [{\n  path: '/',\n  component: _views_home_home_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true,\n  name: 'Home'\n}, {\n  path: '/aboutus',\n  component: _views_aboutUs_aboutUs_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: 'About us'\n}, {\n  path: '/know-more',\n  component: _views_detail_detail_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  name: 'Know more'\n}, {\n  component: _views_notfound_notFound_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\n\n\n//# sourceURL=webpack:///./src/routes/routes.js?");

/***/ }),

/***/ "./src/views/aboutUs/aboutUs.jsx":
/*!***************************************!*\
  !*** ./src/views/aboutUs/aboutUs.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\views\\\\aboutUs\\\\aboutUs.jsx\";\n\n\nfunction AboutUs() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: this\n  }, \"About us\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUs);\n\n//# sourceURL=webpack:///./src/views/aboutUs/aboutUs.jsx?");

/***/ }),

/***/ "./src/views/detail/detail.jsx":
/*!*************************************!*\
  !*** ./src/views/detail/detail.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\views\\\\detail\\\\detail.jsx\";\n\n\nfunction Detail() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: this\n  }, \"Detail\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\n//# sourceURL=webpack:///./src/views/detail/detail.jsx?");

/***/ }),

/***/ "./src/views/home/home.jsx":
/*!*********************************!*\
  !*** ./src/views/home/home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\views\\\\home\\\\home.jsx\";\n\n\nfunction Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: this\n  }, \"Home\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/views/home/home.jsx?");

/***/ }),

/***/ "./src/views/notfound/notFound.jsx":
/*!*****************************************!*\
  !*** ./src/views/notfound/notFound.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\mpeix\\\\Utils\\\\other_projects\\\\react-ssr-routing\\\\src\\\\views\\\\notfound\\\\notFound.jsx\";\n\n\nfunction NotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: this\n  }, \"Not Found\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6\n    },\n    __self: this\n  }, \"The resource you are looking for does not exixts\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/views/notfound/notFound.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });