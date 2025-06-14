/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/base.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/base.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-font: 'Poppins', sans-serif;
    --primary-color-dark: #222222;
    --secondary-color: #7b7b7b;
    --color-tertiary: #F8F8F8;
    --primary-color-light: var(--color-tertiary);
    --primary-font-color-dark: #000;
    --primary-font-color-light: #fff;
    --primary-bg-color-dark: var(--primary-color-dark);
    --button-color: var(--primary-bg-color-dark);
    --color-cyan: rgb(0, 247, 255);

    --color-navy-blue: #1A2B49;
    --color-lighter-blue: #273c63;

    --color-dark: #222222;
    --color-white: #fff;

    --color-beige-100: #f9f2e7;
    --color-beige-200: #f1e3cd;
    --color-beige-300: #e6cfae; /* base */
    --color-beige-400: #d4b991;
    --color-beige-500: #c0a273;
    --color-beige-600: #a98758;
    --color-beige-700: #8f6e43;
    --color-beige-800: #755836;
    --color-beige-900: #5c4428;

    --text-primary-color:  #3a2f1d;
    --text-secondary-color: var(--color-white);
    --bg-color-primary: var(--color-beige-300);
    --bg-color-secondary: var(--color-dark);

    --button-arrow-down: #3a2f1d;
    --button-arrow-down-hover: #3a2f1d;
    --button-arrow-down-text: #3a2f1d;


}
[data-theme='dark'] {
    --text-primary-color: var(--color-white);
    --text-secondary-color: var(--color-dark);

    --bg-color-primary: var(--color-dark);
    --bg-color-secondary: var(--color-tertiary);

    --button-arrow-down: var(--color-tertiary);
    --button-arrow-down-hover: #3a2f1d;
    --button-arrow-down-text: #3a2f1d;



}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color-primary);
    font-family: var(--primary-font);
}
`, "",{"version":3,"sources":["webpack://./src/styles/base.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,4CAA4C;IAC5C,+BAA+B;IAC/B,gCAAgC;IAChC,kDAAkD;IAClD,4CAA4C;IAC5C,8BAA8B;;IAE9B,0BAA0B;IAC1B,6BAA6B;;IAE7B,qBAAqB;IACrB,mBAAmB;;IAEnB,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B,EAAE,SAAS;IACrC,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;IAC1B,0BAA0B;;IAE1B,8BAA8B;IAC9B,0CAA0C;IAC1C,0CAA0C;IAC1C,uCAAuC;;IAEvC,4BAA4B;IAC5B,kCAAkC;IAClC,iCAAiC;;;AAGrC;AACA;IACI,wCAAwC;IACxC,yCAAyC;;IAEzC,qCAAqC;IACrC,2CAA2C;;IAE3C,0CAA0C;IAC1C,kCAAkC;IAClC,iCAAiC;;;;AAIrC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yCAAyC;IACzC,gCAAgC;AACpC","sourcesContent":[":root {\n    --primary-font: 'Poppins', sans-serif;\n    --primary-color-dark: #222222;\n    --secondary-color: #7b7b7b;\n    --color-tertiary: #F8F8F8;\n    --primary-color-light: var(--color-tertiary);\n    --primary-font-color-dark: #000;\n    --primary-font-color-light: #fff;\n    --primary-bg-color-dark: var(--primary-color-dark);\n    --button-color: var(--primary-bg-color-dark);\n    --color-cyan: rgb(0, 247, 255);\n\n    --color-navy-blue: #1A2B49;\n    --color-lighter-blue: #273c63;\n\n    --color-dark: #222222;\n    --color-white: #fff;\n\n    --color-beige-100: #f9f2e7;\n    --color-beige-200: #f1e3cd;\n    --color-beige-300: #e6cfae; /* base */\n    --color-beige-400: #d4b991;\n    --color-beige-500: #c0a273;\n    --color-beige-600: #a98758;\n    --color-beige-700: #8f6e43;\n    --color-beige-800: #755836;\n    --color-beige-900: #5c4428;\n\n    --text-primary-color:  #3a2f1d;\n    --text-secondary-color: var(--color-white);\n    --bg-color-primary: var(--color-beige-300);\n    --bg-color-secondary: var(--color-dark);\n\n    --button-arrow-down: #3a2f1d;\n    --button-arrow-down-hover: #3a2f1d;\n    --button-arrow-down-text: #3a2f1d;\n\n\n}\n[data-theme='dark'] {\n    --text-primary-color: var(--color-white);\n    --text-secondary-color: var(--color-dark);\n\n    --bg-color-primary: var(--color-dark);\n    --bg-color-secondary: var(--color-tertiary);\n\n    --button-arrow-down: var(--color-tertiary);\n    --button-arrow-down-hover: #3a2f1d;\n    --button-arrow-down-text: #3a2f1d;\n\n\n\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--bg-color-primary);\n    font-family: var(--primary-font);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* footer */
footer {
    h1, h2, h3, h4, h5, p {
        color: var(--primary-color-light);
    }
}
.footer-container{
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    text-align: center;
    padding: 1.2rem 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.css"],"names":[],"mappings":"AAAA,WAAW;AACX;IACI;QACI,iCAAiC;IACrC;AACJ;AACA;IACI,2CAA2C;IAC3C,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["/* footer */\nfooter {\n    h1, h2, h3, h4, h5, p {\n        color: var(--primary-color-light);\n    }\n}\n.footer-container{\n    background-color: var(--primary-color-dark);\n    color: var(--primary-color-light);\n    text-align: center;\n    padding: 1.2rem 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    position: absolute;
    z-index: 100;
    top: 3rem;
    width: 100%;
    background: rgba(25, 25, 25, 0.7);
}

.header-container {
    position: relative;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--primary-color-light);
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
}
.title-logo {
    height: auto;
    /* border: 1px solid black; */
    width: 75px;
    margin-left: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
}

@media (max-width: 55em) {
    header {
        position: sticky;
        top: 0;
    }

    .header-container {
        flex-direction: column;
        align-items: normal;
    }
}

button{
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,iCAAiC;IACjC,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI;QACI,gBAAgB;QAChB,MAAM;IACV;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ;;AAEA;IACI,eAAe;AACnB","sourcesContent":["header {\n    position: absolute;\n    z-index: 100;\n    top: 3rem;\n    width: 100%;\n    background: rgba(25, 25, 25, 0.7);\n}\n\n.header-container {\n    position: relative;\n    font-size: 1rem;\n    text-transform: uppercase;\n    color: var(--primary-color-light);\n    max-width: 1440px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-inline: auto;\n}\n.title-logo {\n    height: auto;\n    /* border: 1px solid black; */\n    width: 75px;\n    margin-left: 1.2rem;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n}\n\n@media (max-width: 55em) {\n    header {\n        position: sticky;\n        top: 0;\n    }\n\n    .header-container {\n        flex-direction: column;\n        align-items: normal;\n    }\n}\n\nbutton{\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Navigation */

.primary-navigation[aria-hidden="true"]{
    display: none;
}
.nav-container{
    list-style: none;
    display: flex;
    gap: 1.88rem;
    padding: 12px 12px;
}

.nav-links{
    position: relative;
    --color: var(--color-cyan);
    padding-bottom: 6px;
    cursor: pointer;
    color: var(--primary-color-light);
    font-weight: 700;
    text-decoration: none;
    font-size: inherit;
    transition: color ease-in .7s;
}
.nav-links:hover, .nav-links:focus{
    color: var(--color);
}

@media (max-width: 55em){

    nav{
        background-color: rgba(25, 25, 25, 0.9);
        width: 100%;
        height: 100vh;
        position: absolute;
    }
   
    .nav-container{
        /* display: flex; */
        margin-top: 3rem;
        flex-direction: column;
        align-items: center;
    }
    .nav-container > li{
        width: 100%;
        border-bottom: 1px solid white;
        padding: 1rem .5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/navigation.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;IACI,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;IAClB,6BAA6B;AACjC;AACA;IACI,mBAAmB;AACvB;;AAEA;;IAEI;QACI,uCAAuC;QACvC,WAAW;QACX,aAAa;QACb,kBAAkB;IACtB;;IAEA;QACI,mBAAmB;QACnB,gBAAgB;QAChB,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,8BAA8B;QAC9B,mBAAmB;IACvB;AACJ","sourcesContent":["/* Navigation */\n\n.primary-navigation[aria-hidden=\"true\"]{\n    display: none;\n}\n.nav-container{\n    list-style: none;\n    display: flex;\n    gap: 1.88rem;\n    padding: 12px 12px;\n}\n\n.nav-links{\n    position: relative;\n    --color: var(--color-cyan);\n    padding-bottom: 6px;\n    cursor: pointer;\n    color: var(--primary-color-light);\n    font-weight: 700;\n    text-decoration: none;\n    font-size: inherit;\n    transition: color ease-in .7s;\n}\n.nav-links:hover, .nav-links:focus{\n    color: var(--color);\n}\n\n@media (max-width: 55em){\n\n    nav{\n        background-color: rgba(25, 25, 25, 0.9);\n        width: 100%;\n        height: 100vh;\n        position: absolute;\n    }\n   \n    .nav-container{\n        /* display: flex; */\n        margin-top: 3rem;\n        flex-direction: column;\n        align-items: center;\n    }\n    .nav-container > li{\n        width: 100%;\n        border-bottom: 1px solid white;\n        padding: 1rem .5rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./typography.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/typography.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./navigation.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./utility.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --total-brand: 9;
    --logo-width: 4rem;
    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);
}
.website-logo {
    width: 100%;
    height: auto;

}
/* Content */

.content-container{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    padding: 0;
    background-color: var(--bg-color-primary);

}
/* Banner */
.banner-title{
    color: vr(--text-primary-color);
    line-height: 1;
    font-size: 7rem;
    padding: 0 12px;
}

.subtitle{
    color: var(--text-primary-color);
    font-size: 1.6rem;
    padding-top: 1.2rem;
}
@media (max-width: 55em){
    .banner-title{
        font-size: 4rem;
    }
    .subtitle{
        font-size: 1.2rem;
    }
}
.outer-banner-container{
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100vh;
    overflow: visible;
    display: flex;
    justify-content: center;
    background-color: var(--bg-color-primary);

}
.inner-banner-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 1440px;
    width: 100%;
}
.outer-banner-container::before{
    content: "";
    position: absolute;
    bottom: 0;
    top: 100%;
    height: 30%;
    width: 100%;
    z-index: -10;
    background-color: var(--bg-color-primary);
    clip-path: polygon(0% 0%, 100% 0%, 100% 35%, 0% 75%);
}

.banner-btn-nav-about
{
    cursor: pointer;
    height: 70px;
    width: 70px;
    fill: var(--button-arrow-down);
    background: none;
    border: 1px solid var(--button-arrow-down);
    border-radius: 50%;
    /* box-shadow: 1px 1px 4px 2px var(--color-opacity); */
    animation: slidein ease-in-out .5s;
    margin-top: 7rem;
    transition: background-color ease-in 500ms,
                fill ease-in 500ms,
                border ease-in 500ms;

}

#theme-toggle{
    bottom: 24px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    z-index: 10000;
    
    border: 1 px solid black;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: white;
}

#theme-toggle.sticky{
    position: sticky;
    margin-right: 25px;
    left: 100%;
    
}

#theme-toggle.absolute{
    position: absolute;
    right: 0;
    margin-right: 25px;

}
@keyframes slidein{

    from{margin-top: 0;}
    to{margin-top: 7rem;}
        
}

.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{
    --color: rgb(0, 247, 255);
    background-color: var(--color-cyan);
    border: 3px solid var(--color-cyan);
    box-shadow: 1px 1px 4px 2px rgba(0, 247, 255, 0.3);
    fill: var(--text-color);
}

/* About */
#about{
    /* height: 100vh; */
}
.section-container{
    width: 100%;
    display: block;
}
.about-background{
    background: var(--color-beige-100);
    /* height: 100vh; */
}
.profile-image-container, .about-description{
    z-index: 10;
}
.profile-image-container{
    margin-top: 5rem;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 3px solid;
    border-color: rgba(0,0,0,.3);
    overflow: hidden;
    background-color: var(--color-tertiary);
}
@media (max-width: 55em){
    .profile-image-container{
        width: 200px;
        height: 200px;
    }
    .imageDescription-container{
        margin-top: 3rem;
    }
}
.about-description{
    box-sizing: border-box;
    background-color: var(--color-tertiary);
    padding: 3rem 1.2rem;
    border-radius: 8px;
    box-shadow: 0px 0px 1px 2px rgba(55, 55, 55, 0.3); /* Soft white */    
    max-width: 600px;
    height: auto;
    width: 100%;

    p{
        color: var(--color-dark);
    }
}

.about-description > p, .about-description > h2{
    color: var(--color-dark);
}

.imageDescription-container{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
    align-items: center;
    margin-inline: auto;
    padding-bottom: 0 3rem;
    gap: 30px;
    z-index: 0;
    
}


.profile-picture{
    width: 100%;
    max-width: 400px;
    height: auto;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.15); /* Soft white */
}


@media (max-width: 55em) {
    .imageDescription-container{
        flex-wrap: wrap;
        justify-content: center;
    }
}

/*Skills */


#skills{
    margin-top: 5rem;
    background-color: var(--color-beige-100);
    color: var(--color-dark);
}
.slider{
    position: relative;
    height: auto;
    background-color: inherit;
    box-shadow: 0.8rem 1.4rem -.2rem #0001;
    
    display: flex;
    align-items: center;

    overflow: hidden;
}

.slider::before,
.slider::after{
    position: absolute;
    content: "";

    height: 100%;
    width: var(--logo-width);
}
.slider::before{
    left: 0;
    background: linear-gradient(to right, var(--color-tertiary) 0%,#0000 100%);
}
.slider::after{
    right: 0;
    background: linear-gradient(to left, var(--color-tertiary) 0%,#0000 100%);
}

.slider ul.brands{
    list-style: none;
    width: var(--total-logo-width);
    display: flex;

    animation: slideLeft 24s linear infinite;
}
.slider:hover ul.brands{
    animation-play-state: paused;
}

@keyframes slideLeft {
    100%{
        transform: translateX(calc(-100% / 2));
    }
}

ul.brands li.brand-logo{
    width: var(--logo-width);
    font-size: 1.2rem;
    text-align: center;
    margin-left: 3rem
}

.icon{
    height: 80px;
    width: 80px;
}
/* Work */

#work{
    background-color: var(--color-beige-100);
    margin-top: 0;
}

.work-title {
    margin-top: 3rem;
    color: var(--color-dark);
}

.content{
    /* padding-top: 3rem; */
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
}

.top-container{
    display: flex;
    justify-content: space-between;
}
.mdi-icons{
    height: 1.9rem;
    width: 1.9rem;
    fill: var(--primary-color-dark);
    background-color: inherit;
}
.mdi-icons:hover, .mdi-icons:active{
    fill: rgba(0,0,0,.3);
}

.link-file-container{
    display: flex;
    justify-content: flex-end;
    gap: .3rem;
}
.link-file-container{
    list-style: none;
}
.link-file-container a{
    cursor: pointer;
    text-decoration: none;
}
.project-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.6rem;
    padding: 2rem 12px;
}
@media (max-width: 55em)
{
    .project-container{
        grid-template-columns: 1fr;
    }
}

.title-name{
    --spacing: 1.2rem;
    font-size: 1.8rem;
    padding-bottom: var(--spacing);
    color: var(--color-dark);
}

.project-cards{
    /* background-color: #1a1a1a; */
    z-index: 10;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    transform: transform 0.3s ease;
    display: grid;
    grid-template-rows: 1fr 250px;
    border: 1px solid gray;
    /* border-bottom: 5px solid black; */
    box-shadow: 0px 5px 0px 0px rgba(25, 25, 25);
}

.project-image{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.project-bottom{
    border-top: 3px solid black;
    padding: 1.2rem 1.2rem;

}
.project-description{
    color: var(--color-dark);
    font-size: .9rem;
    line-height: 1.5;
}

/* Contact */

#contact{
    position: relative;
    background-color: var(--bg-color-primary);
    color: var(--text-color);
    width: 100%;
}
#contact::before{
    content: "";
    position: absolute;
    bottom: 100%;
    height: 30vh;
    width: 100%;
    z-index: 1;
    background-color: var(--bg-color-primary);
    clip-path: polygon(0% 0%, 100% 25%, 100% 100%, 0% 100%);
}

.contact-container{
    --spacing-big: 3rem;
    z-index: 10;
    margin-top: var(--spacing-big);
    max-width: 1100px;
    width: 100%;
    margin-inline: auto;
    display: flex;
    padding-bottom: 3rem;
}

@media (max-width: 55em)
{
    .contact-container{
        display: block;
    }
}

.contact-flex{
    display: flex;
    gap: 8px;
}

.contact-flex > svg{
    fill: var(--text-primary-color);
}
.contact-image{
    max-width: 700px;
    width: 100%;
    height: auto;
}
.social-media-icons-container{
    display: flex;
    gap: 16px;
}
@media (max-width: 55em)
{
    .social-media-icons-container{
        justify-content: center;
        padding: 1.2rem;
    }
}
.social-media-icons{
    list-style: none;
}
.social-media-icons-links{
    cursor: pointer;
    
}
.devicon{
    font-size: 2rem;
}

.social-media-links{
    text-decoration: none;
    color: var(--text-primary-color);
}

.left-container{
    --spacing-1: 1rem;
    padding: 0 var(--spacing-1);
}

.left-container h2{
    --spacing-2: 1.2rem;
    padding-bottom: 1.12rem;
}
.left-container .contact-subtitle{
    --spacing-1: 1rem;
    padding-bottom: var(--spacing-1);
}

.right-container{
    padding: 0 12px;
}



/*Components */

.menu-btn{
    --button-color: var(--primary-color-light);
        cursor: pointer;
        display: none;   
        fill: var(--button-color);
        
        position: absolute;
        right: 12px;
        top: 13px;
        z-index: 100;
        background: transparent;
        border: 1px solid var(--button-color);
        border-radius: 8px;
    }

    .menu-btn .line{
        transition: 
            y 300ms ease-in 300ms,
            rotate 300ms ease-in ,
            opacity 0ms 300ms;
        transform-origin: center;
    }
    .menu-btn:hover .line{
        transition: 
            y 300ms ease-in,
            rotate 300ms ease-in 300ms,
            opacity 0ms 300ms;
    }


    .menu-btn[aria-expanded ="true"] .top
    {
        y: 48;
        rotate: 45deg;
    }
    .menu-btn[aria-expanded ="true"] .middle
    {
        opacity: 0;
    }
    .menu-btn[aria-expanded ="true"] .bottom
    {
        y: 48;
        rotate: -45deg;
    }

    .menu-btn:hover :is(.top, .bottom){
        y: 48;
    }
    .menu-btn:hover .top{
        rotate: 45deg;
    }
    .menu-btn:hover .bottom{
        rotate: -45deg;
    }
    .menu-btn:hover .middle{
        opacity: 0;
    }
 
    @media (max-width: 55em){
        .menu-btn{
            display: block;
        }
    }
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import './base.css';\n@import './typography.css';\n@import './header.css';\n@import './navigation.css';\n@import './utility.css';\n@import './footer.css';\n\n:root{\n    --total-brand: 9;\n    --logo-width: 4rem;\n    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);\n}\n.website-logo {\n    width: 100%;\n    height: auto;\n\n}\n/* Content */\n\n.content-container{\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-inline: auto;\n    padding: 0;\n    background-color: var(--bg-color-primary);\n\n}\n/* Banner */\n.banner-title{\n    color: vr(--text-primary-color);\n    line-height: 1;\n    font-size: 7rem;\n    padding: 0 12px;\n}\n\n.subtitle{\n    color: var(--text-primary-color);\n    font-size: 1.6rem;\n    padding-top: 1.2rem;\n}\n@media (max-width: 55em){\n    .banner-title{\n        font-size: 4rem;\n    }\n    .subtitle{\n        font-size: 1.2rem;\n    }\n}\n.outer-banner-container{\n    position: relative;\n    z-index: 0;\n    width: 100%;\n    height: 100vh;\n    overflow: visible;\n    display: flex;\n    justify-content: center;\n    background-color: var(--bg-color-primary);\n\n}\n.inner-banner-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    max-width: 1440px;\n    width: 100%;\n}\n.outer-banner-container::before{\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    top: 100%;\n    height: 30%;\n    width: 100%;\n    z-index: -10;\n    background-color: var(--bg-color-primary);\n    clip-path: polygon(0% 0%, 100% 0%, 100% 35%, 0% 75%);\n}\n\n.banner-btn-nav-about\n{\n    cursor: pointer;\n    height: 70px;\n    width: 70px;\n    fill: var(--button-arrow-down);\n    background: none;\n    border: 1px solid var(--button-arrow-down);\n    border-radius: 50%;\n    /* box-shadow: 1px 1px 4px 2px var(--color-opacity); */\n    animation: slidein ease-in-out .5s;\n    margin-top: 7rem;\n    transition: background-color ease-in 500ms,\n                fill ease-in 500ms,\n                border ease-in 500ms;\n\n}\n\n#theme-toggle{\n    bottom: 24px;\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n    z-index: 10000;\n    \n    border: 1 px solid black;\n    border-radius: 4px;\n    margin-bottom: 1rem;\n    background-color: white;\n}\n\n#theme-toggle.sticky{\n    position: sticky;\n    margin-right: 25px;\n    left: 100%;\n    \n}\n\n#theme-toggle.absolute{\n    position: absolute;\n    right: 0;\n    margin-right: 25px;\n\n}\n@keyframes slidein{\n\n    from{margin-top: 0;}\n    to{margin-top: 7rem;}\n        \n}\n\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\n    --color: rgb(0, 247, 255);\n    background-color: var(--color-cyan);\n    border: 3px solid var(--color-cyan);\n    box-shadow: 1px 1px 4px 2px rgba(0, 247, 255, 0.3);\n    fill: var(--text-color);\n}\n\n/* About */\n#about{\n    /* height: 100vh; */\n}\n.section-container{\n    width: 100%;\n    display: block;\n}\n.about-background{\n    background: var(--color-beige-100);\n    /* height: 100vh; */\n}\n.profile-image-container, .about-description{\n    z-index: 10;\n}\n.profile-image-container{\n    margin-top: 5rem;\n    width: 400px;\n    height: 400px;\n    border-radius: 100%;\n    border: 3px solid;\n    border-color: rgba(0,0,0,.3);\n    overflow: hidden;\n    background-color: var(--color-tertiary);\n}\n@media (max-width: 55em){\n    .profile-image-container{\n        width: 200px;\n        height: 200px;\n    }\n    .imageDescription-container{\n        margin-top: 3rem;\n    }\n}\n.about-description{\n    box-sizing: border-box;\n    background-color: var(--color-tertiary);\n    padding: 3rem 1.2rem;\n    border-radius: 8px;\n    box-shadow: 0px 0px 1px 2px rgba(55, 55, 55, 0.3); /* Soft white */    \n    max-width: 600px;\n    height: auto;\n    width: 100%;\n\n    p{\n        color: var(--color-dark);\n    }\n}\n\n.about-description > p, .about-description > h2{\n    color: var(--color-dark);\n}\n\n.imageDescription-container{\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    max-width: 1100px;\n    width: 100%;\n    align-items: center;\n    margin-inline: auto;\n    padding-bottom: 0 3rem;\n    gap: 30px;\n    z-index: 0;\n    \n}\n\n\n.profile-picture{\n    width: 100%;\n    max-width: 400px;\n    height: auto;\n    box-shadow: 0 0 12px rgba(255, 255, 255, 0.15); /* Soft white */\n}\n\n\n@media (max-width: 55em) {\n    .imageDescription-container{\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n}\n\n/*Skills */\n\n\n#skills{\n    margin-top: 5rem;\n    background-color: var(--color-beige-100);\n    color: var(--color-dark);\n}\n.slider{\n    position: relative;\n    height: auto;\n    background-color: inherit;\n    box-shadow: 0.8rem 1.4rem -.2rem #0001;\n    \n    display: flex;\n    align-items: center;\n\n    overflow: hidden;\n}\n\n.slider::before,\n.slider::after{\n    position: absolute;\n    content: \"\";\n\n    height: 100%;\n    width: var(--logo-width);\n}\n.slider::before{\n    left: 0;\n    background: linear-gradient(to right, var(--color-tertiary) 0%,#0000 100%);\n}\n.slider::after{\n    right: 0;\n    background: linear-gradient(to left, var(--color-tertiary) 0%,#0000 100%);\n}\n\n.slider ul.brands{\n    list-style: none;\n    width: var(--total-logo-width);\n    display: flex;\n\n    animation: slideLeft 24s linear infinite;\n}\n.slider:hover ul.brands{\n    animation-play-state: paused;\n}\n\n@keyframes slideLeft {\n    100%{\n        transform: translateX(calc(-100% / 2));\n    }\n}\n\nul.brands li.brand-logo{\n    width: var(--logo-width);\n    font-size: 1.2rem;\n    text-align: center;\n    margin-left: 3rem\n}\n\n.icon{\n    height: 80px;\n    width: 80px;\n}\n/* Work */\n\n#work{\n    background-color: var(--color-beige-100);\n    margin-top: 0;\n}\n\n.work-title {\n    margin-top: 3rem;\n    color: var(--color-dark);\n}\n\n.content{\n    /* padding-top: 3rem; */\n    width: 100%;\n    max-width: 1440px;\n    margin-inline: auto;\n}\n\n.top-container{\n    display: flex;\n    justify-content: space-between;\n}\n.mdi-icons{\n    height: 1.9rem;\n    width: 1.9rem;\n    fill: var(--primary-color-dark);\n    background-color: inherit;\n}\n.mdi-icons:hover, .mdi-icons:active{\n    fill: rgba(0,0,0,.3);\n}\n\n.link-file-container{\n    display: flex;\n    justify-content: flex-end;\n    gap: .3rem;\n}\n.link-file-container{\n    list-style: none;\n}\n.link-file-container a{\n    cursor: pointer;\n    text-decoration: none;\n}\n.project-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 1.6rem;\n    padding: 2rem 12px;\n}\n@media (max-width: 55em)\n{\n    .project-container{\n        grid-template-columns: 1fr;\n    }\n}\n\n.title-name{\n    --spacing: 1.2rem;\n    font-size: 1.8rem;\n    padding-bottom: var(--spacing);\n    color: var(--color-dark);\n}\n\n.project-cards{\n    /* background-color: #1a1a1a; */\n    z-index: 10;\n    background-color: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    transform: transform 0.3s ease;\n    display: grid;\n    grid-template-rows: 1fr 250px;\n    border: 1px solid gray;\n    /* border-bottom: 5px solid black; */\n    box-shadow: 0px 5px 0px 0px rgba(25, 25, 25);\n}\n\n.project-image{\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n.project-bottom{\n    border-top: 3px solid black;\n    padding: 1.2rem 1.2rem;\n\n}\n.project-description{\n    color: var(--color-dark);\n    font-size: .9rem;\n    line-height: 1.5;\n}\n\n/* Contact */\n\n#contact{\n    position: relative;\n    background-color: var(--bg-color-primary);\n    color: var(--text-color);\n    width: 100%;\n}\n#contact::before{\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    height: 30vh;\n    width: 100%;\n    z-index: 1;\n    background-color: var(--bg-color-primary);\n    clip-path: polygon(0% 0%, 100% 25%, 100% 100%, 0% 100%);\n}\n\n.contact-container{\n    --spacing-big: 3rem;\n    z-index: 10;\n    margin-top: var(--spacing-big);\n    max-width: 1100px;\n    width: 100%;\n    margin-inline: auto;\n    display: flex;\n    padding-bottom: 3rem;\n}\n\n@media (max-width: 55em)\n{\n    .contact-container{\n        display: block;\n    }\n}\n\n.contact-flex{\n    display: flex;\n    gap: 8px;\n}\n\n.contact-flex > svg{\n    fill: var(--text-primary-color);\n}\n.contact-image{\n    max-width: 700px;\n    width: 100%;\n    height: auto;\n}\n.social-media-icons-container{\n    display: flex;\n    gap: 16px;\n}\n@media (max-width: 55em)\n{\n    .social-media-icons-container{\n        justify-content: center;\n        padding: 1.2rem;\n    }\n}\n.social-media-icons{\n    list-style: none;\n}\n.social-media-icons-links{\n    cursor: pointer;\n    \n}\n.devicon{\n    font-size: 2rem;\n}\n\n.social-media-links{\n    text-decoration: none;\n    color: var(--text-primary-color);\n}\n\n.left-container{\n    --spacing-1: 1rem;\n    padding: 0 var(--spacing-1);\n}\n\n.left-container h2{\n    --spacing-2: 1.2rem;\n    padding-bottom: 1.12rem;\n}\n.left-container .contact-subtitle{\n    --spacing-1: 1rem;\n    padding-bottom: var(--spacing-1);\n}\n\n.right-container{\n    padding: 0 12px;\n}\n\n\n\n/*Components */\n\n.menu-btn{\n    --button-color: var(--primary-color-light);\n        cursor: pointer;\n        display: none;   \n        fill: var(--button-color);\n        \n        position: absolute;\n        right: 12px;\n        top: 13px;\n        z-index: 100;\n        background: transparent;\n        border: 1px solid var(--button-color);\n        border-radius: 8px;\n    }\n\n    .menu-btn .line{\n        transition: \n            y 300ms ease-in 300ms,\n            rotate 300ms ease-in ,\n            opacity 0ms 300ms;\n        transform-origin: center;\n    }\n    .menu-btn:hover .line{\n        transition: \n            y 300ms ease-in,\n            rotate 300ms ease-in 300ms,\n            opacity 0ms 300ms;\n    }\n\n\n    .menu-btn[aria-expanded =\"true\"] .top\n    {\n        y: 48;\n        rotate: 45deg;\n    }\n    .menu-btn[aria-expanded =\"true\"] .middle\n    {\n        opacity: 0;\n    }\n    .menu-btn[aria-expanded =\"true\"] .bottom\n    {\n        y: 48;\n        rotate: -45deg;\n    }\n\n    .menu-btn:hover :is(.top, .bottom){\n        y: 48;\n    }\n    .menu-btn:hover .top{\n        rotate: 45deg;\n    }\n    .menu-btn:hover .bottom{\n        rotate: -45deg;\n    }\n    .menu-btn:hover .middle{\n        opacity: 0;\n    }\n \n    @media (max-width: 55em){\n        .menu-btn{\n            display: block;\n        }\n    }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/typography.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/typography.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/base.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Roboto', sans-serif;

    --line-height-heading: 1.2;
    --line-height-body: 1.6;
}

h1, h2, h3, h4, h5 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--text-primary-color);
    line-height: var(--line-height-heading);
    margin-bottom: 1rem;
}
h2 {
    font: 3rem sans-serif;
    font-weight: 700;
    text-align: center;
}

h3 {
    font: 2rem sans-serif;
    font-weight: 700;
}

p {
    font-family: var(--font-body);
    line-height: var(--line-height-body);
    font-size: 1.1rem;
    color: var(--text-primary-color);
    margin-bottom: 1.25rem;
}

a{
    text-decoration: underline;
    font-family: inherit;
    color: inherit;
}
a:hover{
    color: var(--color-cyan);
}


@media (max-width: 768px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.2rem; }
  p  { font-size: 1rem; }
}
`, "",{"version":3,"sources":["webpack://./src/styles/typography.css"],"names":[],"mappings":"AAEA;IACI,qCAAqC;IACrC,iCAAiC;;IAEjC,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,gCAAgC;IAChC,uCAAuC;IACvC,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;IACpC,iBAAiB;IACjB,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,cAAc;AAClB;AACA;IACI,wBAAwB;AAC5B;;;AAGA;EACE,KAAK,kBAAkB,EAAE;EACzB,KAAK,eAAe,EAAE;EACtB,KAAK,kBAAkB,EAAE;EACzB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,eAAe,EAAE;AACxB","sourcesContent":["@import './base.css';\n\n:root{\n    --font-heading: 'Poppins', sans-serif;\n    --font-body: 'Roboto', sans-serif;\n\n    --line-height-heading: 1.2;\n    --line-height-body: 1.6;\n}\n\nh1, h2, h3, h4, h5 {\n    font-family: var(--font-heading);\n    font-weight: 700;\n    color: var(--text-primary-color);\n    line-height: var(--line-height-heading);\n    margin-bottom: 1rem;\n}\nh2 {\n    font: 3rem sans-serif;\n    font-weight: 700;\n    text-align: center;\n}\n\nh3 {\n    font: 2rem sans-serif;\n    font-weight: 700;\n}\n\np {\n    font-family: var(--font-body);\n    line-height: var(--line-height-body);\n    font-size: 1.1rem;\n    color: var(--text-primary-color);\n    margin-bottom: 1.25rem;\n}\n\na{\n    text-decoration: underline;\n    font-family: inherit;\n    color: inherit;\n}\na:hover{\n    color: var(--color-cyan);\n}\n\n\n@media (max-width: 768px) {\n  h1 { font-size: 2.25rem; }\n  h2 { font-size: 2rem; }\n  h3 { font-size: 1.75rem; }\n  h4 { font-size: 1.5rem; }\n  h5 { font-size: 1.2rem; }\n  p  { font-size: 1rem; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.two-columns{
    display: flex;
    justify-content: space-between;
}

.hidden{
    display: none;
}

.sticky{
    position: sticky;
    top: 0;
    background: rgba(25, 25, 25, 0.7);
    z-index: 20;
}

.blink{
    animation: customBlink 2s infinite ease;
}

@keyframes customBlink{
    0%,
    50%,
    100%{
        opacity: 1;
    }
    25%,
    75%{
        opacity: 0;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/utility.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI;;;QAGI,UAAU;IACd;IACA;;QAEI,UAAU;IACd;AACJ","sourcesContent":[".two-columns{\n    display: flex;\n    justify-content: space-between;\n}\n\n.hidden{\n    display: none;\n}\n\n.sticky{\n    position: sticky;\n    top: 0;\n    background: rgba(25, 25, 25, 0.7);\n    z-index: 20;\n}\n\n.blink{\n    animation: customBlink 2s infinite ease;\n}\n\n@keyframes customBlink{\n    0%,\n    50%,\n    100%{\n        opacity: 1;\n    }\n    25%,\n    75%{\n        opacity: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/darkLightModeButton.js":
/*!***********************************************!*\
  !*** ./src/components/darkLightModeButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const darkLightModeButton = () => {   
    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "theme-toggle");
    console.log(document.documentElement.getAttribute("data-theme"));
    toggleButton.textContent = "Light";
    let isDark = false;
    
    toggleButton.addEventListener(("click"), () => {

        isDark = !isDark;
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        toggleButton.textContent = `${isDark ? "Dark" : "light"}`
    })

    const scrollHandler = () => {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // When it's scroll to the buttom, adds a class called absolute and when it's
    // not, adds a class "sticky"
        if(windowHeight + scrollPosition != documentHeight) {
            toggleButton.classList.remove("absolute");
            toggleButton.classList.add("sticky");
        } else {
            toggleButton.classList.remove("sticky");
            toggleButton.classList.add("absolute");
        }

    }
    window.addEventListener("scroll", scrollHandler);


    return toggleButton;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkLightModeButton);

/***/ }),

/***/ "./src/components/eventHandlers.js":
/*!*****************************************!*\
  !*** ./src/components/eventHandlers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handlers)
/* harmony export */ });
class Handlers {

    static loadHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
        this.navigationSectionHandler();
        this.sliderHandler();
        this.mobileNavLinks();
    }

    static sliderHandler = () =>{
        const brands = document.querySelector("ul.brands"),
        total_brand = brands.children.length;

        document.documentElement.style.setProperty('--total-brand', total_brand);

        for(let i = 0; i < total_brand; i++){
            brands.appendChild(brands.children[i].cloneNode(true));
        }
    }

    static menuBtnHandler = () =>{

        const menu = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector(".primary-navigation");
            
        const handler = () =>{

            if(menu.getAttribute("aria-expanded") === "false"){
                console.log("You have clicked this button when aria-expanded was false.  Now you changed it to true")
                menu.setAttribute("aria-expanded", true);
                navigationPage.setAttribute("aria-hidden", false);
                navigationPage.setAttribute("aria-expanded", true);
            } else {
                console.log("You have clicked this button when aria-expanded was true.  Now you changed it to false")
                menu.setAttribute("aria-expanded", false);
                navigationPage.setAttribute("aria-hidden", true);
                navigationPage.setAttribute("aria-expanded", false);
            } 
        }
        menu.addEventListener(("click"), handler);
    
    }
    static navigationHandler = () =>{
        const menuBtn = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
        window.addEventListener(("resize"), () =>{
            const width = window.innerWidth;
            if(width > 880)
            {
                // if it's more than 880, the navigation should stay hidden until the hamburger button is clicked.
                navigationPage.setAttribute("aria-hidden", "false"); //Disables mobile version
                menuBtn.setAttribute("aria-hidden", true); //Hides the hamburger button.
                menuBtn.setAttribute("aria-expanded", false); //Menu button sets to default
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
                menuBtn.setAttribute("aria-hidden", false);
                // menuBtn.setAttribute("aria-expanded", true); //Menu button sets to default

            }
        });   
    }

    static scrollToSection = (name) => {
        const section = document.getElementById(name);
        section.scrollIntoView({behavior: "smooth"});
    }

    static navigationSectionHandler = () =>{

        const navBtn = (e) =>{
            const section = e.currentTarget.textContent;
            this.scrollToSection(section);
        }
        const nav = document.querySelectorAll(".nav-links");
        nav.forEach((item) => item.addEventListener(("click"), navBtn))
    }

    static mobileNavLinks = () =>{
        const closeNavigation = () =>{
            const menuBtn = document.querySelector(".menu-btn");
            const primaryNavigation = document.querySelector(".primary-navigation");
            const width = window.innerWidth;
            if(width > 880){
                return;
            }
            primaryNavigation.setAttribute("aria-hidden", true);
            menuBtn.setAttribute("aria-expanded", false);
        }
        const links = document.querySelectorAll(".nav-links");
        links.forEach((item) =>{
            item.addEventListener(("click"), closeNavigation);
        })
    }
}




/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
class Footer{
    static loadFooter = () =>{
        const element = document.createElement("footer");

        const footerContainer = document.createElement("div");
        footerContainer.classList.add("footer-container");
    
        const title = (fName, lName) =>{
            const text = document.createElement("p");
            text.textContent = `© Copyright 2024, ${fName} ${lName}`;
            return text;
        }
  
        footerContainer.appendChild(title("Gary", "Lei"));

        element.appendChild(footerContainer);
    
        return element;
    }
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _assets_images_light_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/light-logo.png */ "./src/assets/images/light-logo.png");
/* harmony import */ var _darkLightModeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkLightModeButton */ "./src/components/darkLightModeButton.js");



class Header{
    static loadHeader = () =>{
        const element = document.createElement("header");

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");
        
        //Sticky on scroll
        const handleScroll = () =>{
            if(window.pageYOffset != 0){
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
        }

        window.addEventListener("scroll", handleScroll);
    
        // Logo title
        const title = () =>{
            const box = document.createElement("div");
            box.className = "title-logo";

            const image = document.createElement("img");
            image.className = "website-logo"
            image.src = _assets_images_light_logo_png__WEBPACK_IMPORTED_MODULE_0__;
            image.alt = "website-logo-light"

            box.appendChild(image);
            // box.innerHTML = `
            //     <a href="/"><span>${logoName}</span></a>`;
            return box;
        }

        // Hamburger menu button
        const menuButton = () =>{
            const button = document.createElement("button");
            button.classList.add("menu-btn");
            // Loads as default
            button.setAttribute("aria-controls", "primary-navigation");
            button.setAttribute("aria-expanded", false);

            // Sets the visibility depending on the mobile version
            const setVisibility = () => {
                button.setAttribute("aria-hidden", window.innerWidth > 800);
            }
            setVisibility();
            button.innerHTML = `
                <svg fill="var(--button-color)" class ="hamburger" viewBox ="0 0 100 100" width ="30" height = "30">
                    <rect class ="line top" width ="80" height="6" x="10" y="30" rx="5">
                    </rect>
                    <rect class ="line middle" width ="80" height="6" x="10" y="50" rx="5">
                    </rect>
                    <rect class ="line bottom" width ="80" height="6" x="10" y="70" rx="5"></rect>
                </svg>`
            return button;
        }
    
        //Navigation
        //Bug: 
        //When window is minimized, navigation becomes in visible which is ok.  But, when maximize the window, navigation stays hidden.
        const navigation = () => {
            const container = document.createElement("nav");
            container.className = "primary-navigation";
            container.setAttribute("aria-hidden", false);
            container.setAttribute("aria-expanded", true);

            const setVisibility = () =>{
                container.setAttribute("aria-hidden", window.innerWidth <= 880);
                // container.setAttribute("aria-expanded", !window.innerWidth <=880);
            };
            setVisibility();
            window.addEventListener("resize", setVisibility); // This fixes for resize bug
                        
            const lists = () => {
                const unOrderedList = document.createElement("ul");
                unOrderedList.classList.add("nav-container");
                 const tabs = [{page: "about", link: "about"}, {page: "work", link: "work"}, {page: "contact", link: "contact"}]
                 tabs.forEach((item) =>{
                    const list = document.createElement("li");
                    list.innerHTML = `<a class="nav-links">${item.page}</a>`;
                    unOrderedList.appendChild(list);
                 });
    
                return unOrderedList;
            }
            container.appendChild(lists());
            return container;
        }

        headerContainer.appendChild(title("Go Gary!"));
        headerContainer.appendChild(menuButton());
        headerContainer.appendChild(navigation());

        element.appendChild(headerContainer);
    
        return element;
    }
}

/***/ }),

/***/ "./src/components/socialMediaIcons.js":
/*!********************************************!*\
  !*** ./src/components/socialMediaIcons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const plotSocialMediaIcons = () =>{

    const container = document.createElement("ul");
    container.className =  `social-media-icons-container`;
    container.innerHTML = `
        <li class="social-media-icons">
            <a href="www.github.com" target="_blank" class="social-media-links"><i class="devicon devicon-github-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.twitter.com" target="_blank" class="social-media-links"><i class="devicon devicon-twitter-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.linkedin.com" target="_blank" class="social-media-links"><i class="devicon devicon-linkedin-plain"></i></a>
        </li>
    `;
    return container;
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plotSocialMediaIcons);

/***/ }),

/***/ "./src/components/typewriter.js":
/*!**************************************!*\
  !*** ./src/components/typewriter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typeWriter: () => (/* binding */ typeWriter)
/* harmony export */ });
const typeWriter = (title, element) =>{

    for (let i = 0; i <= title.length; i++) {
        if(i != title.length)
        {
            setTimeout(() => {
                element.innerHTML = title.slice(0, i) + title.charAt(i) + `<span class="blink">|</span>`;
            }, i * 100 + (Math.random() * 100));
        } else {
            setTimeout(() => {
                element.innerHTML = title;
            }, i * 100 + (Math.random() * 150));
        }
    }

}

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer.js */ "./src/components/footer.js");
/* harmony import */ var _sections_banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/banner.js */ "./src/sections/banner.js");
/* harmony import */ var _sections_work_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/work.js */ "./src/sections/work.js");
/* harmony import */ var _sections_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/about.js */ "./src/sections/about.js");
/* harmony import */ var _sections_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/contact.js */ "./src/sections/contact.js");
/* harmony import */ var _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eventHandlers.js */ "./src/components/eventHandlers.js");
/* harmony import */ var _components_darkLightModeButton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/darkLightModeButton.js */ "./src/components/darkLightModeButton.js");









class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter());

        _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__["default"].loadHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(_sections_banner_js__WEBPACK_IMPORTED_MODULE_2__["default"].load());
        content.appendChild(_sections_about_js__WEBPACK_IMPORTED_MODULE_4__["default"].load());
        content.appendChild(_sections_work_js__WEBPACK_IMPORTED_MODULE_3__["default"].load());
        content.appendChild(_sections_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"].load());
        content.appendChild((0,_components_darkLightModeButton_js__WEBPACK_IMPORTED_MODULE_7__["default"])());



        return content;

    }
}

/***/ }),

/***/ "./src/sections/about.js":
/*!*******************************!*\
  !*** ./src/sections/about.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _assets_images_profile_nobg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/profile-nobg.png */ "./src/assets/images/profile-nobg.png");
/* harmony import */ var _sections_skills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/skills.js */ "./src/sections/skills.js");



class About{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container","about-background");
        container.setAttribute("id", "about");

        const imageDescription = document.createElement("div");
        imageDescription.className ="imageDescription-container";
        imageDescription.appendChild(this.loadImage());
        imageDescription.appendChild(this.personalDescription());
        container.appendChild(imageDescription);

        container.appendChild(_sections_skills_js__WEBPACK_IMPORTED_MODULE_1__["default"].load());
        return container;
    }

    static personalDescription = () =>{
        const container = document.createElement("div");
        container.classList.add("about-description");

        const title = () =>{
            const title = document.createElement("h2");
            title.textContent = "About me";
            return title;
        }

        const description = () =>{
            const p = document.createElement("p");
            p.textContent = "I am currently living on the beautiful island of Taiwan, teaching students English as their second language. In my free time, I enjoy long runs. Running helps me reflect on life, providing me with the time and space for deep thinking. When I am not running, I am coding. I began coding in high school and college, but never managed to finish what I started. Now, I have developed a keen interest in computer languages and aspire to dedicate myself to creating apps, hopefully contributing to the community.";
    
            return p;
        }

        container.appendChild(title());
        container.appendChild(description());

        return container;
  
    }

    static loadImage = () =>{
        const div = document.createElement("div");
        div.classList.add("profile-image-container");
        const image = new Image();
        image.src = _assets_images_profile_nobg_png__WEBPACK_IMPORTED_MODULE_0__;
        image.alt = "A portrait for me";
        image.className = "profile-picture";
        
        div.appendChild(image);

        return div;

    }
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/typewriter */ "./src/components/typewriter.js");


class Banner{
    static load = () =>{
        const createOuterLayer = document.createElement("div");
        createOuterLayer.classList.add("outer-banner-container");

        const createInnerLayer = document.createElement("div");
        createInnerLayer.classList.add("inner-banner-container");

        setTimeout(() =>{
            createInnerLayer.appendChild(this.title())
        }, 500);
        setTimeout(() =>{
            createInnerLayer.appendChild(this.subText());
        }, 3000);
        setTimeout(() =>{
            createInnerLayer.appendChild(this.bannerHandlerBtn());
        }, 7000);

        createOuterLayer.appendChild(createInnerLayer);

        return createOuterLayer;
    }

    static title = () =>{
        const title = "Hi, I'm Gary";
        const titleText = document.createElement("h1");
        titleText.className = "banner-title";

         (0,_components_typewriter__WEBPACK_IMPORTED_MODULE_0__.typeWriter)(title, titleText);

        return titleText;
    }

    static subText = () =>{
        const subtitle = "A full-stack enthusiast."
        const text = document.createElement("p");
        text.classList.add("typeWriter", "subtitle");
        
        (0,_components_typewriter__WEBPACK_IMPORTED_MODULE_0__.typeWriter)(subtitle, text);

        return text;
    }

    static bannerHandlerBtn = () =>{
        const button = document.createElement("button");
        button.classList.add("banner-btn-nav-about")
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>arrow-down-thick</title><path d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z" />
            </svg>
        `

        const scrollToSection = () => {
            const section = document.getElementById("about");
            section.scrollIntoView({behavior: "smooth"});
        }
        button.addEventListener(("click"), scrollToSection);

        return button;
    }


}

/***/ }),

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/socialMediaIcons */ "./src/components/socialMediaIcons.js");
/* harmony import */ var _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/contact.jpg */ "./src/assets/images/contact.jpg");




const contact = {
    address: "Taipei, Taiwan", 
    phone: "555-555-5555", 
    email: "g123456@mail.com"};

class Contact{
    static load = () =>{
        const section = document.createElement("section");
        section.setAttribute("id", "contact");

        const container = document.createElement("div");
        container.classList.add("contact-container");
  
        const left = document.createElement("div");
        left.classList.add("left-container");
        left.appendChild(this.title());
        left.appendChild(this.content(contact));

        const right = document.createElement("div");
        right.classList.add("right-container");
        right.appendChild(this.plotImage());
        
        container.appendChild(left);
        container.appendChild(right);

        section.appendChild(container);
        return section;
    }

    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("contact-title");
        title.textContent = "Contact Me";
        return title;
    }

    static plotImage = () =>{
        const createDiv = document.createElement("div");
        const credited = document.createElement("p");
        credited.innerHTML = `
        Photo by 
        <a href="https://unsplash.com/@firmbee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Firmbee.com</a> 
        on 
        <a href="https://unsplash.com/photos/woman-holding-silver-iphone-6-SpVHcbuKi6E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Unsplash</a>
    `;
      
        const image = new Image();
        image.classList.add("contact-image");
        image.src = _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__;
        image.alt = "A hand holding a phone"

        createDiv.appendChild(image);
        createDiv.appendChild(credited);



        return createDiv;
    }

    static content = (contact) =>{
        const container = document.createElement("div");
        const subTitle = document.createElement("p");
        subTitle.classList.add("contact-subtitle");
        subTitle.textContent = "Please get in touch if you think our work could be mutually beneficial.";
        
        const plotContactInfo = () => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="contact-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="#fff" width="30" height="30">
                        <title>map-marker-outline</title>
                        <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                    </svg>
                    <p>${contact.address}</p>
                </div>
                <div class="contact-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="30" height="30">
                            <title>phone</title>
                            <path d="M19.5,22C20.33,22 21,21.33 21,20.5V17C21,16.17 20.33,15.5 19.5,15.5C18.33,15.5 17.18,15.32 16.08,14.95C15.55,14.78 14.97,14.92 14.56,15.32L13.12,16.76C10.64,15.41 8.57,13.34 7.23,10.87L8.66,9.44C9.07,9.05 9.22,8.47 9.04,7.91C8.68,6.82 8.5,5.67 8.5,4.5C8.5,3.67 7.83,3 7,3H3.5C2.67,3 2,3.67 2,4.5C2,14.15 9.85,22 19.5,22M3.5,4H7C7.28,4 7.5,4.22 7.5,4.5C7.5,5.78 7.7,7.03 8.09,8.22C8.14,8.36 8.13,8.56 7.97,8.72L6,10.68C7.65,13.91 10.07,16.33 13.31,18L15.26,16.03C15.4,15.89 15.59,15.85 15.77,15.9C16.97,16.3 18.22,16.5 19.5,16.5C19.78,16.5 20,16.72 20,17V20.5C20,20.78 19.78,21 19.5,21C10.4,21 3,13.6 3,4.5C3,4.22 3.22,4 3.5,4Z" />
                        </svg>
                        <p>${contact.phone}</p>
                </div>
                <div class="contact-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="30" height="30">
                        <title>email-outline</title>
                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                    </svg>
                        <p>${contact.email}</p>
                </div>`;
            return container;
        }

        container.appendChild(subTitle);
        container.appendChild(plotContactInfo());
        container.appendChild((0,_components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__["default"])("contact"));

        return container;
    }

    
}

/***/ }),

/***/ "./src/sections/skills.js":
/*!********************************!*\
  !*** ./src/sections/skills.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ skillSection)
/* harmony export */ });
/* harmony import */ var _assets_icons_bootstrap_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/bootstrap-icon.svg */ "./src/assets/icons/bootstrap-icon.svg");
/* harmony import */ var _assets_icons_css_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/css-icon.svg */ "./src/assets/icons/css-icon.svg");
/* harmony import */ var _assets_icons_figma_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/figma-icon.svg */ "./src/assets/icons/figma-icon.svg");
/* harmony import */ var _assets_icons_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/github-icon.svg */ "./src/assets/icons/github-icon.svg");
/* harmony import */ var _assets_icons_html_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/html-icon.svg */ "./src/assets/icons/html-icon.svg");
/* harmony import */ var _assets_icons_js_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/js-icon.svg */ "./src/assets/icons/js-icon.svg");
/* harmony import */ var _assets_icons_postman_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/postman-icon.svg */ "./src/assets/icons/postman-icon.svg");
/* harmony import */ var _assets_icons_react_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/react-icon.svg */ "./src/assets/icons/react-icon.svg");
/* harmony import */ var _assets_icons_ts_icon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/ts-icon.svg */ "./src/assets/icons/ts-icon.svg");










const icons = [
    {name: "Bootstrap", link: _assets_icons_bootstrap_icon_svg__WEBPACK_IMPORTED_MODULE_0__},
    {name: "CSS", link: _assets_icons_css_icon_svg__WEBPACK_IMPORTED_MODULE_1__},
    {name: "Figma", link: _assets_icons_figma_icon_svg__WEBPACK_IMPORTED_MODULE_2__},
    {name: "Github", link: _assets_icons_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__},
    {name: "HTML", link: _assets_icons_html_icon_svg__WEBPACK_IMPORTED_MODULE_4__},
    {name: "Javascript", link: _assets_icons_js_icon_svg__WEBPACK_IMPORTED_MODULE_5__},
    {name: "Postman", link: _assets_icons_postman_icon_svg__WEBPACK_IMPORTED_MODULE_6__},
    {name: "Typescript", link: _assets_icons_ts_icon_svg__WEBPACK_IMPORTED_MODULE_8__},
    {name: "React", link: _assets_icons_react_icon_svg__WEBPACK_IMPORTED_MODULE_7__},

];

class skillSection{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container");
        container.setAttribute("id", "skills");

        const content = document.createElement("div");
        content.className = "content";

        content.appendChild(this.slider());

        container.appendChild(content);
        return container;
    }

    static slider = () =>{
        const container = document.createElement("div");
        container.className = "slider";

        const brands = () =>{
            const itemsHolder = document.createElement("ul");
            itemsHolder.className = "brands";

            icons.forEach((item) =>{
                const list = document.createElement("li");
                list.className = "brand-logo";

                const img = document.createElement("img");
                img.src = item.link;
                img.alt = `${item.name}`;
                img.className = "icon";

                list.appendChild(img);
                itemsHolder.appendChild(list);
            });
      

            return itemsHolder;
        }

        container.appendChild(brands());
    
        return container;
    }
}

/***/ }),

/***/ "./src/sections/work.js":
/*!******************************!*\
  !*** ./src/sections/work.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Work)
/* harmony export */ });
/* harmony import */ var _assets_images_cv_maker_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/cv-maker.png */ "./src/assets/images/cv-maker.png");
/* harmony import */ var _assets_images_memory_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/memory.png */ "./src/assets/images/memory.png");
/* harmony import */ var _assets_images_todolist_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/todolist.png */ "./src/assets/images/todolist.png");
/* harmony import */ var _assets_images_weather_app_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/weather-app.png */ "./src/assets/images/weather-app.png");
/* harmony import */ var _assets_images_geos_app_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/geos_app.png */ "./src/assets/images/geos_app.png");






const projects = [
    {
        name: "Weather App", 
        description: "A simple app that searches through the api to find the city's weather forecast.  This project is from the Odin Project and it is used to practice and play around with the language that is being learned", 
    image: _assets_images_weather_app_png__WEBPACK_IMPORTED_MODULE_3__, language: "HTML, JS, CSS5", website: "https://xsymmetry9.github.io/weather-app/", github: "https://github.com/xsymmetry9/weather-app"},
    {name: "Todo List", 
    description: "A simple to do list app.  It can create projects and add tasks.  It can also check the income projects and it tells you when a project is do today.", 
    image: _assets_images_todolist_png__WEBPACK_IMPORTED_MODULE_2__, language: "React, CSS5", website: "https://xsymmetry9.github.io/todolist/", github: "https://github.com/xsymmetry9/todolist"},
    {name: "Memory", 
    description: "A simple game and first game I have created. Continue to practice fetching datas and playing around with the objects I have received.  Also, it is a good practice to play around with data structure ", 
    image: _assets_images_memory_png__WEBPACK_IMPORTED_MODULE_1__, language: "React, CSS5", website: "https://xsymmetry9.github.io/memory/", github: "https://github.com/xsymmetry9/memory"},
    {name: "CV Maker", 
    description: "My first practical project for a company that I worked for.  It facilitates teachers to create an evaluation form and render to a customized form and save as PDF or print it out.", 
    image: _assets_images_cv_maker_png__WEBPACK_IMPORTED_MODULE_0__, language: "HTML, JS, CSS", website: "https://loquacious-paprenjak-b23565.netlify.app/", github: "https://github.com/xsymmetry9/cv-maker"},
    {
        name: "GEOS App",
        description: "My first practical project for a company that I worked for.  It facilitates teachers to create an evaluation form and render to a customized form and save as PDF or print it out.", 
        image: _assets_images_geos_app_png__WEBPACK_IMPORTED_MODULE_4__,
        language: "REACT, Tailwind, Typescript", 
        website: "https://main.geos-project.pages.dev/home/english/", 
        github: "https://github.com/xsymmetry9/geos-project"}
];

class Work{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container");
        container.setAttribute("id", "work");


        const content = document.createElement("div");
        content.className = "content";

        content.appendChild(this.title());
        content.appendChild(this.projects());

        container.appendChild(content);
        return container;
    }

    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("work-title");
        title.textContent = "My Work";

        return title;
    }

    static projects = () =>{

        const createElement = document.createElement("div");
        createElement.classList.add("project-container");
        projects.forEach((item) =>{

            const projectCards = document.createElement("div");
            projectCards.classList.add("project-cards")
            projectCards.innerHTML = `
                <div class="project-top">
                    <img class="project-image" src="${item.image}" alt="An image of ${item.name}" />
                </div>
                <div class="project-bottom">
                    <div class="top-container">
                        <h3 class="title-name">${item.name}</h3>

                        <ul class="link-file-container">
                        <li><a href="${item.github}" target="_blank">
                            <svg class="mdi-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                                <title>git</title><path d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                            </svg>
                        </a></li>
                        <li><a href="${item.website}" target="_blank">
                            <svg class="mdi-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                                <title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                        </a></li>
                    </ul>

                    </div>
                    <p class="project-description">${item.description}</p>
                    <p class="project-builtin"><i>Built with ${item.language}</i></p>
                    
                </div>`;


                createElement.appendChild(projectCards);
        });

        return createElement;
    }
}

/***/ }),

/***/ "./src/assets/icons/bootstrap-icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/bootstrap-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5acbe722f149066cd080.svg";

/***/ }),

/***/ "./src/assets/icons/css-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/css-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff7323b82a9993fc6fdd.svg";

/***/ }),

/***/ "./src/assets/icons/figma-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/figma-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53be9b852823ff508557.svg";

/***/ }),

/***/ "./src/assets/icons/github-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/github-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd87f304e2e617a69a8e.svg";

/***/ }),

/***/ "./src/assets/icons/html-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/html-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa55ce32b45c7403db5e.svg";

/***/ }),

/***/ "./src/assets/icons/js-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/js-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6d7da4a0514a4cf5534.svg";

/***/ }),

/***/ "./src/assets/icons/postman-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/postman-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0554f86a07681b61293c.svg";

/***/ }),

/***/ "./src/assets/icons/react-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/react-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "364f24a123a846282452.svg";

/***/ }),

/***/ "./src/assets/icons/ts-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/ts-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a45e44f21173649cda34.svg";

/***/ }),

/***/ "./src/assets/images/contact.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/contact.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d3ecb91ad7420dce0b3.jpg";

/***/ }),

/***/ "./src/assets/images/cv-maker.png":
/*!****************************************!*\
  !*** ./src/assets/images/cv-maker.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e827143ed3dc4193f356.png";

/***/ }),

/***/ "./src/assets/images/geos_app.png":
/*!****************************************!*\
  !*** ./src/assets/images/geos_app.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "948f0aef8ef125098902.png";

/***/ }),

/***/ "./src/assets/images/light-logo.png":
/*!******************************************!*\
  !*** ./src/assets/images/light-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b9c13cced02d24fa5bb.png";

/***/ }),

/***/ "./src/assets/images/memory.png":
/*!**************************************!*\
  !*** ./src/assets/images/memory.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "448120fdc0bf7889d20b.png";

/***/ }),

/***/ "./src/assets/images/profile-nobg.png":
/*!********************************************!*\
  !*** ./src/assets/images/profile-nobg.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc261640ef6d3bab9398.png";

/***/ }),

/***/ "./src/assets/images/todolist.png":
/*!****************************************!*\
  !*** ./src/assets/images/todolist.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af7dea15017fb9513633.png";

/***/ }),

/***/ "./src/assets/images/weather-app.png":
/*!*******************************************!*\
  !*** ./src/assets/images/weather-app.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "614a7f9e82b4e75c7848.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _src_pages_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/homepage */ "./src/pages/homepage.js");
// index.js




addEventListener("DOMContentLoaded", _src_pages_homepage__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLE1BQU0sTUFBTSxvQkFBb0Isd0JBQXdCLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLHNCQUFzQixRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxXQUFXLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxTQUFTLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE1BQU0sS0FBSyxPQUFPLE9BQU8sUUFBUSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFB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QUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFaUM7QUFDWTs7QUFFN0MscUNBQXFDLDJEQUFRLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy91dGlsaXR5LmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2RhcmtMaWdodE1vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29ucy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL3R5cGV3cml0ZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc2VjdGlvbnMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc2VjdGlvbnMvc2tpbGxzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3NlY3Rpb25zL3dvcmsuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICMyMjIyMjI7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICM3YjdiN2I7XG4gICAgLS1jb2xvci10ZXJ0aWFyeTogI0Y4RjhGODtcbiAgICAtLXByaW1hcnktY29sb3ItbGlnaHQ6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAtLXByaW1hcnktZm9udC1jb2xvci1kYXJrOiAjMDAwO1xuICAgIC0tcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmO1xuICAgIC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRhcmspO1xuICAgIC0tY29sb3ItY3lhbjogcmdiKDAsIDI0NywgMjU1KTtcblxuICAgIC0tY29sb3ItbmF2eS1ibHVlOiAjMUEyQjQ5O1xuICAgIC0tY29sb3ItbGlnaHRlci1ibHVlOiAjMjczYzYzO1xuXG4gICAgLS1jb2xvci1kYXJrOiAjMjIyMjIyO1xuICAgIC0tY29sb3Itd2hpdGU6ICNmZmY7XG5cbiAgICAtLWNvbG9yLWJlaWdlLTEwMDogI2Y5ZjJlNztcbiAgICAtLWNvbG9yLWJlaWdlLTIwMDogI2YxZTNjZDtcbiAgICAtLWNvbG9yLWJlaWdlLTMwMDogI2U2Y2ZhZTsgLyogYmFzZSAqL1xuICAgIC0tY29sb3ItYmVpZ2UtNDAwOiAjZDRiOTkxO1xuICAgIC0tY29sb3ItYmVpZ2UtNTAwOiAjYzBhMjczO1xuICAgIC0tY29sb3ItYmVpZ2UtNjAwOiAjYTk4NzU4O1xuICAgIC0tY29sb3ItYmVpZ2UtNzAwOiAjOGY2ZTQzO1xuICAgIC0tY29sb3ItYmVpZ2UtODAwOiAjNzU1ODM2O1xuICAgIC0tY29sb3ItYmVpZ2UtOTAwOiAjNWM0NDI4O1xuXG4gICAgLS10ZXh0LXByaW1hcnktY29sb3I6ICAjM2EyZjFkO1xuICAgIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAtLWJnLWNvbG9yLXByaW1hcnk6IHZhcigtLWNvbG9yLWJlaWdlLTMwMCk7XG4gICAgLS1iZy1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWNvbG9yLWRhcmspO1xuXG4gICAgLS1idXR0b24tYXJyb3ctZG93bjogIzNhMmYxZDtcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duLWhvdmVyOiAjM2EyZjFkO1xuICAgIC0tYnV0dG9uLWFycm93LWRvd24tdGV4dDogIzNhMmYxZDtcblxuXG59XG5bZGF0YS10aGVtZT0nZGFyayddIHtcbiAgICAtLXRleHQtcHJpbWFyeS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuXG4gICAgLS1iZy1jb2xvci1wcmltYXJ5OiB2YXIoLS1jb2xvci1kYXJrKTtcbiAgICAtLWJnLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuXG4gICAgLS1idXR0b24tYXJyb3ctZG93bjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuICAgIC0tYnV0dG9uLWFycm93LWRvd24taG92ZXI6ICMzYTJmMWQ7XG4gICAgLS1idXR0b24tYXJyb3ctZG93bi10ZXh0OiAjM2EyZjFkO1xuXG5cblxufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsa0RBQWtEO0lBQ2xELDRDQUE0QztJQUM1Qyw4QkFBOEI7O0lBRTlCLDBCQUEwQjtJQUMxQiw2QkFBNkI7O0lBRTdCLHFCQUFxQjtJQUNyQixtQkFBbUI7O0lBRW5CLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMEJBQTBCLEVBQUUsU0FBUztJQUNyQywwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLDBCQUEwQjs7SUFFMUIsOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsdUNBQXVDOztJQUV2Qyw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGlDQUFpQzs7O0FBR3JDO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMseUNBQXlDOztJQUV6QyxxQ0FBcUM7SUFDckMsMkNBQTJDOztJQUUzQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGlDQUFpQzs7OztBQUlyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMjIyMjIyO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzdiN2I3YjtcXG4gICAgLS1jb2xvci10ZXJ0aWFyeTogI0Y4RjhGODtcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICAgIC0tcHJpbWFyeS1mb250LWNvbG9yLWRhcms6ICMwMDA7XFxuICAgIC0tcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmO1xcbiAgICAtLXByaW1hcnktYmctY29sb3ItZGFyazogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XFxuICAgIC0tY29sb3ItY3lhbjogcmdiKDAsIDI0NywgMjU1KTtcXG5cXG4gICAgLS1jb2xvci1uYXZ5LWJsdWU6ICMxQTJCNDk7XFxuICAgIC0tY29sb3ItbGlnaHRlci1ibHVlOiAjMjczYzYzO1xcblxcbiAgICAtLWNvbG9yLWRhcms6ICMyMjIyMjI7XFxuICAgIC0tY29sb3Itd2hpdGU6ICNmZmY7XFxuXFxuICAgIC0tY29sb3ItYmVpZ2UtMTAwOiAjZjlmMmU3O1xcbiAgICAtLWNvbG9yLWJlaWdlLTIwMDogI2YxZTNjZDtcXG4gICAgLS1jb2xvci1iZWlnZS0zMDA6ICNlNmNmYWU7IC8qIGJhc2UgKi9cXG4gICAgLS1jb2xvci1iZWlnZS00MDA6ICNkNGI5OTE7XFxuICAgIC0tY29sb3ItYmVpZ2UtNTAwOiAjYzBhMjczO1xcbiAgICAtLWNvbG9yLWJlaWdlLTYwMDogI2E5ODc1ODtcXG4gICAgLS1jb2xvci1iZWlnZS03MDA6ICM4ZjZlNDM7XFxuICAgIC0tY29sb3ItYmVpZ2UtODAwOiAjNzU1ODM2O1xcbiAgICAtLWNvbG9yLWJlaWdlLTkwMDogIzVjNDQyODtcXG5cXG4gICAgLS10ZXh0LXByaW1hcnktY29sb3I6ICAjM2EyZjFkO1xcbiAgICAtLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIC0tYmctY29sb3ItcHJpbWFyeTogdmFyKC0tY29sb3ItYmVpZ2UtMzAwKTtcXG4gICAgLS1iZy1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWNvbG9yLWRhcmspO1xcblxcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duOiAjM2EyZjFkO1xcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duLWhvdmVyOiAjM2EyZjFkO1xcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duLXRleHQ6ICMzYTJmMWQ7XFxuXFxuXFxufVxcbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgICAtLXRleHQtcHJpbWFyeS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICAtLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG5cXG4gICAgLS1iZy1jb2xvci1wcmltYXJ5OiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gICAgLS1iZy1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG5cXG4gICAgLS1idXR0b24tYXJyb3ctZG93bjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duLWhvdmVyOiAjM2EyZjFkO1xcbiAgICAtLWJ1dHRvbi1hcnJvdy1kb3duLXRleHQ6ICMzYTJmMWQ7XFxuXFxuXFxuXFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXByaW1hcnkpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIH1cbn1cbi5mb290ZXItY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjJyZW0gMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7SUFDSTtRQUNJLGlDQUFpQztJQUNyQztBQUNKO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gICAgfVxcbn1cXG4uZm9vdGVyLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDNyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG4udGl0bGUtbG9nbyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgIH1cbn1cblxuYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLE1BQU07SUFDVjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuLnRpdGxlLWxvZ28ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXG4gICAgfVxcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBOYXZpZ2F0aW9uICovXG5cbi5wcmltYXJ5LW5hdmlnYXRpb25bYXJpYS1oaWRkZW49XCJ0cnVlXCJde1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2LWNvbnRhaW5lcntcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxLjg4cmVtO1xuICAgIHBhZGRpbmc6IDEycHggMTJweDtcbn1cblxuLm5hdi1saW5rc3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1jb2xvcjogdmFyKC0tY29sb3ItY3lhbik7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluIC43cztcbn1cbi5uYXYtbGlua3M6aG92ZXIsIC5uYXYtbGlua3M6Zm9jdXN7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xuXG4gICAgbmF2e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMjUsIDAuOSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgXG4gICAgLm5hdi1jb250YWluZXJ7XG4gICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5uYXYtY29udGFpbmVyID4gbGl7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlOztBQUVmO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLHVDQUF1QztRQUN2QyxXQUFXO1FBQ1gsYUFBYTtRQUNiLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLDhCQUE4QjtRQUM5QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZpZ2F0aW9uICovXFxuXFxuLnByaW1hcnktbmF2aWdhdGlvblthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJde1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubmF2LWNvbnRhaW5lcntcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjg4cmVtO1xcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XFxufVxcblxcbi5uYXYtbGlua3N7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLS1jb2xvcjogdmFyKC0tY29sb3ItY3lhbik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbiAuN3M7XFxufVxcbi5uYXYtbGlua3M6aG92ZXIsIC5uYXYtbGlua3M6Zm9jdXN7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXG5cXG4gICAgbmF2e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjkpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuICAgXFxuICAgIC5uYXYtY29udGFpbmVye1xcbiAgICAgICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubmF2LWNvbnRhaW5lciA+IGxpe1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tdG90YWwtYnJhbmQ6IDk7XG4gICAgLS1sb2dvLXdpZHRoOiA0cmVtO1xuICAgIC0tdG90YWwtbG9nby13aWR0aDogY2FsYyh2YXIoLS10b3RhbC1icmFuZCkgKiB2YXIoLS1sb2dvLXdpZHRoKSAqIDIpO1xufVxuLndlYnNpdGUtbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG59XG4vKiBDb250ZW50ICovXG5cbi5jb250ZW50LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXByaW1hcnkpO1xuXG59XG4vKiBCYW5uZXIgKi9cbi5iYW5uZXItdGl0bGV7XG4gICAgY29sb3I6IHZyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXNpemU6IDdyZW07XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uc3VidGl0bGV7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgcGFkZGluZy10b3A6IDEuMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcbiAgICAuYmFubmVyLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuLm91dGVyLWJhbm5lci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXByaW1hcnkpO1xuXG59XG4uaW5uZXItYmFubmVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm91dGVyLWJhbm5lci1jb250YWluZXI6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1wcmltYXJ5KTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgMzUlLCAwJSA3NSUpO1xufVxuXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXRcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGZpbGw6IHZhcigtLWJ1dHRvbi1hcnJvdy1kb3duKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1hcnJvdy1kb3duKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCA0cHggMnB4IHZhcigtLWNvbG9yLW9wYWNpdHkpOyAqL1xuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gNTAwbXMsXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxuICAgICAgICAgICAgICAgIGJvcmRlciBlYXNlLWluIDUwMG1zO1xuXG59XG5cbiN0aGVtZS10b2dnbGV7XG4gICAgYm90dG9tOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBcbiAgICBib3JkZXI6IDEgcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiN0aGVtZS10b2dnbGUuc3RpY2t5e1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgXG59XG5cbiN0aGVtZS10b2dnbGUuYWJzb2x1dGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcblxufVxuQGtleWZyYW1lcyBzbGlkZWlue1xuXG4gICAgZnJvbXttYXJnaW4tdG9wOiAwO31cbiAgICB0b3ttYXJnaW4tdG9wOiA3cmVtO31cbiAgICAgICAgXG59XG5cbi5iYW5uZXItYnRuLW5hdi1hYm91dDpob3ZlciwgLmJhbm5lci1idG4tbmF2LWFib3V0OmZvY3Vze1xuICAgIC0tY29sb3I6IHJnYigwLCAyNDcsIDI1NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3lhbik7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItY3lhbik7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMnB4IHJnYmEoMCwgMjQ3LCAyNTUsIDAuMyk7XG4gICAgZmlsbDogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi8qIEFib3V0ICovXG4jYWJvdXR7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbn1cbi5zZWN0aW9uLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5hYm91dC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJlaWdlLTEwMCk7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbn1cbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciwgLmFib3V0LWRlc2NyaXB0aW9ue1xuICAgIHotaW5kZXg6IDEwO1xufVxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xuICAgIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAuaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgfVxufVxuLmFib3V0LWRlc2NyaXB0aW9ue1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuICAgIHBhZGRpbmc6IDNyZW0gMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggcmdiYSg1NSwgNTUsIDU1LCAwLjMpOyAvKiBTb2Z0IHdoaXRlICovICAgIFxuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAgIH1cbn1cblxuLmFib3V0LWRlc2NyaXB0aW9uID4gcCwgLmFib3V0LWRlc2NyaXB0aW9uID4gaDJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xufVxuXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDAgM3JlbTtcbiAgICBnYXA6IDMwcHg7XG4gICAgei1pbmRleDogMDtcbiAgICBcbn1cblxuXG4ucHJvZmlsZS1waWN0dXJle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IC8qIFNvZnQgd2hpdGUgKi9cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbi8qU2tpbGxzICovXG5cblxuI3NraWxsc3tcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaWdlLTEwMCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xufVxuLnNsaWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNoYWRvdzogMC44cmVtIDEuNHJlbSAtLjJyZW0gIzAwMDE7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlcjo6YmVmb3JlLFxuLnNsaWRlcjo6YWZ0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xufVxuLnNsaWRlcjo6YmVmb3Jle1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jb2xvci10ZXJ0aWFyeSkgMCUsIzAwMDAgMTAwJSk7XG59XG4uc2xpZGVyOjphZnRlcntcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tY29sb3ItdGVydGlhcnkpIDAlLCMwMDAwIDEwMCUpO1xufVxuXG4uc2xpZGVyIHVsLmJyYW5kc3tcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMjRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zbGlkZXI6aG92ZXIgdWwuYnJhbmRze1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSAvIDIpKTtcbiAgICB9XG59XG5cbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW1cbn1cblxuLmljb257XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xufVxuLyogV29yayAqL1xuXG4jd29ya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZWlnZS0xMDApO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi53b3JrLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcbn1cblxuLmNvbnRlbnR7XG4gICAgLyogcGFkZGluZy10b3A6IDNyZW07ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnRvcC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWRpLWljb25ze1xuICAgIGhlaWdodDogMS45cmVtO1xuICAgIHdpZHRoOiAxLjlyZW07XG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLm1kaS1pY29uczpob3ZlciwgLm1kaS1pY29uczphY3RpdmV7XG4gICAgZmlsbDogcmdiYSgwLDAsMCwuMyk7XG59XG5cbi5saW5rLWZpbGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IC4zcmVtO1xufVxuLmxpbmstZmlsZS1jb250YWluZXJ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saW5rLWZpbGUtY29udGFpbmVyIGF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9qZWN0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcbntcbiAgICAucHJvamVjdC1jb250YWluZXJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbn1cblxuLnRpdGxlLW5hbWV7XG4gICAgLS1zcGFjaW5nOiAxLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcbn1cblxuLnByb2plY3QtY2FyZHN7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsgKi9cbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCByZ2JhKDI1LCAyNSwgMjUpO1xufVxuXG4ucHJvamVjdC1pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9qZWN0LWJvdHRvbXtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMS4ycmVtIDEuMnJlbTtcblxufVxuLnByb2plY3QtZGVzY3JpcHRpb257XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQ29udGFjdCAqL1xuXG4jY29udGFjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRhY3Q6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcHJpbWFyeSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVye1xuICAgIC0tc3BhY2luZy1iaWc6IDNyZW07XG4gICAgei1pbmRleDogMTA7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1iaWcpO1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXG57XG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5jb250YWN0LWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbn1cblxuLmNvbnRhY3QtZmxleCA+IHN2Z3tcbiAgICBmaWxsOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xufVxuLmNvbnRhY3QtaW1hZ2V7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxue1xuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgIH1cbn1cbi5zb2NpYWwtbWVkaWEtaWNvbnN7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufVxuLmRldmljb257XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uc29jaWFsLW1lZGlhLWxpbmtze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmxlZnQtY29udGFpbmVye1xuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcbn1cblxuLmxlZnQtY29udGFpbmVyIGgye1xuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuMTJyZW07XG59XG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XG59XG5cbi5yaWdodC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuXG5cblxuLypDb21wb25lbnRzICovXG5cbi5tZW51LWJ0bntcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgICBcbiAgICAgICAgZmlsbDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIHRvcDogMTNweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5tZW51LWJ0biAubGluZXtcbiAgICAgICAgdHJhbnNpdGlvbjogXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4gMzAwbXMsXG4gICAgICAgICAgICByb3RhdGUgMzAwbXMgZWFzZS1pbiAsXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cbiAgICAubWVudS1idG46aG92ZXIgLmxpbmV7XG4gICAgICAgIHRyYW5zaXRpb246IFxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluLFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gMzAwbXMsXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcbiAgICB9XG5cblxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cInRydWVcIl0gLnRvcFxuICAgIHtcbiAgICAgICAgeTogNDg7XG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XG4gICAgfVxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cInRydWVcIl0gLm1pZGRsZVxuICAgIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVwidHJ1ZVwiXSAuYm90dG9tXG4gICAge1xuICAgICAgICB5OiA0ODtcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XG4gICAgfVxuXG4gICAgLm1lbnUtYnRuOmhvdmVyIDppcygudG9wLCAuYm90dG9tKXtcbiAgICAgICAgeTogNDg7XG4gICAgfVxuICAgIC5tZW51LWJ0bjpob3ZlciAudG9we1xuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xuICAgIH1cbiAgICAubWVudS1idG46aG92ZXIgLmJvdHRvbXtcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XG4gICAgfVxuICAgIC5tZW51LWJ0bjpob3ZlciAubWlkZGxle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XG4gICAgICAgIC5tZW51LWJ0bntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0VBQW9FO0FBQ3hFO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFDQSxZQUFZOztBQUVa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SUFDckIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBSUEsY0FBYzs7QUFFZDtJQUNJLDBDQUEwQztRQUN0QyxlQUFlO1FBQ2YsYUFBYTtRQUNiLHlCQUF5Qjs7UUFFekIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixxQ0FBcUM7UUFDckMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0k7Ozs2QkFHcUI7UUFDckIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSTs7OzZCQUdxQjtJQUN6Qjs7O0lBR0E7O1FBRUksS0FBSztRQUNMLGFBQWE7SUFDakI7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxLQUFLO1FBQ0wsY0FBYztJQUNsQjs7SUFFQTtRQUNJLEtBQUs7SUFDVDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0k7WUFDSSxjQUFjO1FBQ2xCO0lBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9iYXNlLmNzcyc7XFxuQGltcG9ydCAnLi90eXBvZ3JhcGh5LmNzcyc7XFxuQGltcG9ydCAnLi9oZWFkZXIuY3NzJztcXG5AaW1wb3J0ICcuL25hdmlnYXRpb24uY3NzJztcXG5AaW1wb3J0ICcuL3V0aWxpdHkuY3NzJztcXG5AaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xcblxcbjpyb290e1xcbiAgICAtLXRvdGFsLWJyYW5kOiA5O1xcbiAgICAtLWxvZ28td2lkdGg6IDRyZW07XFxuICAgIC0tdG90YWwtbG9nby13aWR0aDogY2FsYyh2YXIoLS10b3RhbC1icmFuZCkgKiB2YXIoLS1sb2dvLXdpZHRoKSAqIDIpO1xcbn1cXG4ud2Vic2l0ZS1sb2dvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG59XFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcHJpbWFyeSk7XFxuXFxufVxcbi8qIEJhbm5lciAqL1xcbi5iYW5uZXItdGl0bGV7XFxuICAgIGNvbG9yOiB2cigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDdyZW07XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG59XFxuXFxuLnN1YnRpdGxle1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXG4gICAgLmJhbm5lci10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcbiAgICAuc3VidGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbn1cXG4ub3V0ZXItYmFubmVyLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1wcmltYXJ5KTtcXG5cXG59XFxuLmlubmVyLWJhbm5lci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlci1iYW5uZXItY29udGFpbmVyOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0xMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcHJpbWFyeSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAzNSUsIDAlIDc1JSk7XFxufVxcblxcbi5iYW5uZXItYnRuLW5hdi1hYm91dFxcbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBmaWxsOiB2YXIoLS1idXR0b24tYXJyb3ctZG93bik7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1hcnJvdy1kb3duKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDRweCAycHggdmFyKC0tY29sb3Itb3BhY2l0eSk7ICovXFxuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XFxuICAgIG1hcmdpbi10b3A6IDdyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiA1MDBtcyxcXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxcbiAgICAgICAgICAgICAgICBib3JkZXIgZWFzZS1pbiA1MDBtcztcXG5cXG59XFxuXFxuI3RoZW1lLXRvZ2dsZXtcXG4gICAgYm90dG9tOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgXFxuICAgIGJvcmRlcjogMSBweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RoZW1lLXRvZ2dsZS5zdGlja3l7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgXFxufVxcblxcbiN0aGVtZS10b2dnbGUuYWJzb2x1dGV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG5cXG59XFxuQGtleWZyYW1lcyBzbGlkZWlue1xcblxcbiAgICBmcm9te21hcmdpbi10b3A6IDA7fVxcbiAgICB0b3ttYXJnaW4tdG9wOiA3cmVtO31cXG4gICAgICAgIFxcbn1cXG5cXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXQ6aG92ZXIsIC5iYW5uZXItYnRuLW5hdi1hYm91dDpmb2N1c3tcXG4gICAgLS1jb2xvcjogcmdiKDAsIDI0NywgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3lhbik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWN5YW4pO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAycHggcmdiYSgwLCAyNDcsIDI1NSwgMC4zKTtcXG4gICAgZmlsbDogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi8qIEFib3V0ICovXFxuI2Fib3V0e1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbn1cXG4uc2VjdGlvbi1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFib3V0LWJhY2tncm91bmR7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJlaWdlLTEwMCk7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxufVxcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciwgLmFib3V0LWRlc2NyaXB0aW9ue1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXG4gICAgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICB9XFxufVxcbi5hYm91dC1kZXNjcmlwdGlvbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgICBwYWRkaW5nOiAzcmVtIDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggcmdiYSg1NSwgNTUsIDU1LCAwLjMpOyAvKiBTb2Z0IHdoaXRlICovICAgIFxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwe1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgICB9XFxufVxcblxcbi5hYm91dC1kZXNjcmlwdGlvbiA+IHAsIC5hYm91dC1kZXNjcmlwdGlvbiA+IGgye1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAwIDNyZW07XFxuICAgIGdhcDogMzBweDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgXFxufVxcblxcblxcbi5wcm9maWxlLXBpY3R1cmV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IC8qIFNvZnQgd2hpdGUgKi9cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcXG4gICAgLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLypTa2lsbHMgKi9cXG5cXG5cXG4jc2tpbGxze1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZWlnZS0xMDApO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcbi5zbGlkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3gtc2hhZG93OiAwLjhyZW0gMS40cmVtIC0uMnJlbSAjMDAwMTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSxcXG4uc2xpZGVyOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxufVxcbi5zbGlkZXI6OmJlZm9yZXtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jb2xvci10ZXJ0aWFyeSkgMCUsIzAwMDAgMTAwJSk7XFxufVxcbi5zbGlkZXI6OmFmdGVye1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHZhcigtLWNvbG9yLXRlcnRpYXJ5KSAwJSwjMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNsaWRlciB1bC5icmFuZHN7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMjRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLnNsaWRlcjpob3ZlciB1bC5icmFuZHN7XFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlIC8gMikpO1xcbiAgICB9XFxufVxcblxcbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtXFxufVxcblxcbi5pY29ue1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG4vKiBXb3JrICovXFxuXFxuI3dvcmt7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaWdlLTEwMCk7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi53b3JrLXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgLyogcGFkZGluZy10b3A6IDNyZW07ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnRvcC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1kaS1pY29uc3tcXG4gICAgaGVpZ2h0OiAxLjlyZW07XFxuICAgIHdpZHRoOiAxLjlyZW07XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGktaWNvbnM6aG92ZXIsIC5tZGktaWNvbnM6YWN0aXZle1xcbiAgICBmaWxsOiByZ2JhKDAsMCwwLC4zKTtcXG59XFxuXFxuLmxpbmstZmlsZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjNyZW07XFxufVxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICAgIGdhcDogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxcbntcXG4gICAgLnByb2plY3QtY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG59XFxuXFxuLnRpdGxlLW5hbWV7XFxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbi5wcm9qZWN0LWNhcmRze1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyAqL1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICAvKiBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCByZ2JhKDI1LCAyNSwgMjUpO1xcbn1cXG5cXG4ucHJvamVjdC1pbWFnZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnByb2plY3QtYm90dG9te1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjJyZW07XFxuXFxufVxcbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG4jY29udGFjdHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRhY3Q6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1wcmltYXJ5KTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICAtLXNwYWNpbmctYmlnOiAzcmVtO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1iaWcpO1xcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcXG57XFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbi5jb250YWN0LWZsZXh7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY29udGFjdC1mbGV4ID4gc3Zne1xcbiAgICBmaWxsOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbn1cXG4uY29udGFjdC1pbWFnZXtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxue1xcbiAgICAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcbiAgICB9XFxufVxcbi5zb2NpYWwtbWVkaWEtaWNvbnN7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcbi5kZXZpY29ue1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtbGlua3N7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5sZWZ0LWNvbnRhaW5lcntcXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcXG59XFxuXFxuLmxlZnQtY29udGFpbmVyIGgye1xcbiAgICAtLXNwYWNpbmctMjogMS4ycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcXG59XFxuLmxlZnQtY29udGFpbmVyIC5jb250YWN0LXN1YnRpdGxle1xcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XFxufVxcblxcbi5yaWdodC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG59XFxuXFxuXFxuXFxuLypDb21wb25lbnRzICovXFxuXFxuLm1lbnUtYnRue1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgIFxcbiAgICAgICAgZmlsbDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgICB0b3A6IDEzcHg7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYnRuIC5saW5le1xcbiAgICAgICAgdHJhbnNpdGlvbjogXFxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluIDMwMG1zLFxcbiAgICAgICAgICAgIHJvdGF0ZSAzMDBtcyBlYXNlLWluICxcXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubWVudS1idG46aG92ZXIgLmxpbmV7XFxuICAgICAgICB0cmFuc2l0aW9uOiBcXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4sXFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gMzAwbXMsXFxuICAgICAgICAgICAgb3BhY2l0eSAwbXMgMzAwbXM7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVxcXCJ0cnVlXFxcIl0gLnRvcFxcbiAgICB7XFxuICAgICAgICB5OiA0ODtcXG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVxcXCJ0cnVlXFxcIl0gLm1pZGRsZVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cXFwidHJ1ZVxcXCJdIC5ib3R0b21cXG4gICAge1xcbiAgICAgICAgeTogNDg7XFxuICAgICAgICByb3RhdGU6IC00NWRlZztcXG4gICAgfVxcblxcbiAgICAubWVudS1idG46aG92ZXIgOmlzKC50b3AsIC5ib3R0b20pe1xcbiAgICAgICAgeTogNDg7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuOmhvdmVyIC50b3B7XFxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xcbiAgICB9XFxuICAgIC5tZW51LWJ0bjpob3ZlciAuYm90dG9te1xcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5taWRkbGV7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuIFxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XFxuICAgICAgICAubWVudS1idG57XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1mb250LWhlYWRpbmc6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtYm9keTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbiAgICAtLWxpbmUtaGVpZ2h0LWhlYWRpbmc6IDEuMjtcbiAgICAtLWxpbmUtaGVpZ2h0LWJvZHk6IDEuNjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkaW5nKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkaW5nKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuaDIge1xuICAgIGZvbnQ6IDNyZW0gc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYm9keSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cbmE6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBoMSB7IGZvbnQtc2l6ZTogMi4yNXJlbTsgfVxuICBoMiB7IGZvbnQtc2l6ZTogMnJlbTsgfVxuICBoMyB7IGZvbnQtc2l6ZTogMS43NXJlbTsgfVxuICBoNCB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG4gIGg1IHsgZm9udC1zaXplOiAxLjJyZW07IH1cbiAgcCAgeyBmb250LXNpemU6IDFyZW07IH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90eXBvZ3JhcGh5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQ0FBaUM7O0lBRWpDLDBCQUEwQjtJQUMxQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBO0VBQ0UsS0FBSyxrQkFBa0IsRUFBRTtFQUN6QixLQUFLLGVBQWUsRUFBRTtFQUN0QixLQUFLLGtCQUFrQixFQUFFO0VBQ3pCLEtBQUssaUJBQWlCLEVBQUU7RUFDeEIsS0FBSyxpQkFBaUIsRUFBRTtFQUN4QixLQUFLLGVBQWUsRUFBRTtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2Jhc2UuY3NzJztcXG5cXG46cm9vdHtcXG4gICAgLS1mb250LWhlYWRpbmc6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgLS1mb250LWJvZHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcbiAgICAtLWxpbmUtaGVpZ2h0LWhlYWRpbmc6IDEuMjtcXG4gICAgLS1saW5lLWhlaWdodC1ib2R5OiAxLjY7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWhlYWRpbmcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5oMiB7XFxuICAgIGZvbnQ6IDNyZW0gc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYm9keSk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuYTpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiAyLjI1cmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDEuNzVyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAxLjJyZW07IH1cXG4gIHAgIHsgZm9udC1zaXplOiAxcmVtOyB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnR3by1jb2x1bW5ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdGlja3l7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xuICAgIHotaW5kZXg6IDIwO1xufVxuXG4uYmxpbmt7XG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xuICAgIDAlLFxuICAgIDUwJSxcbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyNSUsXG4gICAgNzUle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91dGlsaXR5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0k7OztRQUdJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50d28tY29sdW1uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RpY2t5e1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXG4gICAgei1pbmRleDogMjA7XFxufVxcblxcbi5ibGlua3tcXG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xcbiAgICAwJSxcXG4gICAgNTAlLFxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAyNSUsXFxuICAgIDc1JXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRhcmtMaWdodE1vZGVCdXR0b24gPSAoKSA9PiB7ICAgXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aGVtZS10b2dnbGVcIik7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1xuICAgIHRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTGlnaHRcIjtcbiAgICBsZXQgaXNEYXJrID0gZmFsc2U7XG4gICAgXG4gICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcblxuICAgICAgICBpc0RhcmsgPSAhaXNEYXJrO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBpc0RhcmsgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IGAke2lzRGFyayA/IFwiRGFya1wiIDogXCJsaWdodFwifWBcbiAgICB9KVxuXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICBcbiAgICAgICAgLy8gV2hlbiBpdCdzIHNjcm9sbCB0byB0aGUgYnV0dG9tLCBhZGRzIGEgY2xhc3MgY2FsbGVkIGFic29sdXRlIGFuZCB3aGVuIGl0J3NcbiAgICAvLyBub3QsIGFkZHMgYSBjbGFzcyBcInN0aWNreVwiXG4gICAgICAgIGlmKHdpbmRvd0hlaWdodCArIHNjcm9sbFBvc2l0aW9uICE9IGRvY3VtZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFic29sdXRlXCIpO1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWJzb2x1dGVcIik7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcblxuXG4gICAgcmV0dXJuIHRvZ2dsZUJ1dHRvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGFya0xpZ2h0TW9kZUJ1dHRvbjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGVycyB7XG5cbiAgICBzdGF0aWMgbG9hZEhhbmRsZXJzID0gKCkgPT57XG4gICAgICAgIHRoaXMubWVudUJ0bkhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uSGFuZGxlcigpO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZWN0aW9uSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnNsaWRlckhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5tb2JpbGVOYXZMaW5rcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzbGlkZXJIYW5kbGVyID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bC5icmFuZHNcIiksXG4gICAgICAgIHRvdGFsX2JyYW5kID0gYnJhbmRzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG90YWwtYnJhbmQnLCB0b3RhbF9icmFuZCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvdGFsX2JyYW5kOyBpKyspe1xuICAgICAgICAgICAgYnJhbmRzLmFwcGVuZENoaWxkKGJyYW5kcy5jaGlsZHJlbltpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1lbnVCdG5IYW5kbGVyID0gKCkgPT57XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LW5hdmlnYXRpb25cIik7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+e1xuXG4gICAgICAgICAgICBpZihtZW51LmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBjbGlja2VkIHRoaXMgYnV0dG9uIHdoZW4gYXJpYS1leHBhbmRlZCB3YXMgZmFsc2UuICBOb3cgeW91IGNoYW5nZWQgaXQgdG8gdHJ1ZVwiKVxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBjbGlja2VkIHRoaXMgYnV0dG9uIHdoZW4gYXJpYS1leHBhbmRlZCB3YXMgdHJ1ZS4gIE5vdyB5b3UgY2hhbmdlZCBpdCB0byBmYWxzZVwiKVxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgaGFuZGxlcik7XG4gICAgXG4gICAgfVxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uSGFuZGxlciA9ICgpID0+e1xuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigoXCJyZXNpemVcIiksICgpID0+e1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGlmKHdpZHRoID4gODgwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0J3MgbW9yZSB0aGFuIDg4MCwgdGhlIG5hdmlnYXRpb24gc2hvdWxkIHN0YXkgaGlkZGVuIHVudGlsIHRoZSBoYW1idXJnZXIgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTsgLy9EaXNhYmxlcyBtb2JpbGUgdmVyc2lvblxuICAgICAgICAgICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7IC8vSGlkZXMgdGhlIGhhbWJ1cmdlciBidXR0b24uXG4gICAgICAgICAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTsgLy9NZW51IGJ1dHRvbiBzZXRzIHRvIGRlZmF1bHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTsgLy9NZW51IGJ1dHRvbiBzZXRzIHRvIGRlZmF1bHRcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2Nyb2xsVG9TZWN0aW9uID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uU2VjdGlvbkhhbmRsZXIgPSAoKSA9PntcblxuICAgICAgICBjb25zdCBuYXZCdG4gPSAoZSkgPT57XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlY3Rpb24oc2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XG4gICAgICAgIG5hdi5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIG5hdkJ0bikpXG4gICAgfVxuXG4gICAgc3RhdGljIG1vYmlsZU5hdkxpbmtzID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNsb3NlTmF2aWdhdGlvbiA9ICgpID0+e1xuICAgICAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG4gICAgICAgICAgICBjb25zdCBwcmltYXJ5TmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbWFyeS1uYXZpZ2F0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGlmKHdpZHRoID4gODgwKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmltYXJ5TmF2aWdhdGlvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcbiAgICAgICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcbiAgICAgICAgbGlua3MuZm9yRWFjaCgoaXRlbSkgPT57XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIGNsb3NlTmF2aWdhdGlvbik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlcntcbiAgICBzdGF0aWMgbG9hZEZvb3RlciA9ICgpID0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1jb250YWluZXJcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGZOYW1lLCBsTmFtZSkgPT57XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYMKpIENvcHlyaWdodCAyMDI0LCAke2ZOYW1lfSAke2xOYW1lfWA7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKFwiR2FyeVwiLCBcIkxlaVwiKSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuICAgIFxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59IiwiaW1wb3J0IHdlYnNpdGVMb2dvIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xpZ2h0LWxvZ28ucG5nXCI7XG5pbXBvcnQgZGFya0xpZ2h0TW9kZUJ1dHRvbiBmcm9tIFwiLi9kYXJrTGlnaHRNb2RlQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcntcbiAgICBzdGF0aWMgbG9hZEhlYWRlciA9ICgpID0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIFxuICAgICAgICAvL1N0aWNreSBvbiBzY3JvbGxcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT57XG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgIT0gMCl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgXG4gICAgICAgIC8vIExvZ28gdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NOYW1lID0gXCJ0aXRsZS1sb2dvXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTmFtZSA9IFwid2Vic2l0ZS1sb2dvXCJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHdlYnNpdGVMb2dvO1xuICAgICAgICAgICAgaW1hZ2UuYWx0ID0gXCJ3ZWJzaXRlLWxvZ28tbGlnaHRcIlxuXG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgLy8gYm94LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIC8vICAgICA8YSBocmVmPVwiL1wiPjxzcGFuPiR7bG9nb05hbWV9PC9zcGFuPjwvYT5gO1xuICAgICAgICAgICAgcmV0dXJuIGJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbWJ1cmdlciBtZW51IGJ1dHRvblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gKCkgPT57XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgICAgICAgICAgIC8vIExvYWRzIGFzIGRlZmF1bHRcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIFwicHJpbWFyeS1uYXZpZ2F0aW9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBTZXRzIHRoZSB2aXNpYmlsaXR5IGRlcGVuZGluZyBvbiB0aGUgbW9iaWxlIHZlcnNpb25cbiAgICAgICAgICAgIGNvbnN0IHNldFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHdpbmRvdy5pbm5lcldpZHRoID4gODAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwidmFyKC0tYnV0dG9uLWNvbG9yKVwiIGNsYXNzID1cImhhbWJ1cmdlclwiIHZpZXdCb3ggPVwiMCAwIDEwMCAxMDBcIiB3aWR0aCA9XCIzMFwiIGhlaWdodCA9IFwiMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3MgPVwibGluZSB0b3BcIiB3aWR0aCA9XCI4MFwiIGhlaWdodD1cIjZcIiB4PVwiMTBcIiB5PVwiMzBcIiByeD1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcyA9XCJsaW5lIG1pZGRsZVwiIHdpZHRoID1cIjgwXCIgaGVpZ2h0PVwiNlwiIHg9XCIxMFwiIHk9XCI1MFwiIHJ4PVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzID1cImxpbmUgYm90dG9tXCIgd2lkdGggPVwiODBcIiBoZWlnaHQ9XCI2XCIgeD1cIjEwXCIgeT1cIjcwXCIgcng9XCI1XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDwvc3ZnPmBcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9OYXZpZ2F0aW9uXG4gICAgICAgIC8vQnVnOiBcbiAgICAgICAgLy9XaGVuIHdpbmRvdyBpcyBtaW5pbWl6ZWQsIG5hdmlnYXRpb24gYmVjb21lcyBpbiB2aXNpYmxlIHdoaWNoIGlzIG9rLiAgQnV0LCB3aGVuIG1heGltaXplIHRoZSB3aW5kb3csIG5hdmlnYXRpb24gc3RheXMgaGlkZGVuLlxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInByaW1hcnktbmF2aWdhdGlvblwiO1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRWaXNpYmlsaXR5ID0gKCkgPT57XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHdpbmRvdy5pbm5lcldpZHRoIDw9IDg4MCk7XG4gICAgICAgICAgICAgICAgLy8gY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgIXdpbmRvdy5pbm5lcldpZHRoIDw9ODgwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzZXRWaXNpYmlsaXR5KTsgLy8gVGhpcyBmaXhlcyBmb3IgcmVzaXplIGJ1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsaXN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bk9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuY2xhc3NMaXN0LmFkZChcIm5hdi1jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHRhYnMgPSBbe3BhZ2U6IFwiYWJvdXRcIiwgbGluazogXCJhYm91dFwifSwge3BhZ2U6IFwid29ya1wiLCBsaW5rOiBcIndvcmtcIn0sIHtwYWdlOiBcImNvbnRhY3RcIiwgbGluazogXCJjb250YWN0XCJ9XVxuICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goKGl0ZW0pID0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCA9IGA8YSBjbGFzcz1cIm5hdi1saW5rc1wiPiR7aXRlbS5wYWdlfTwvYT5gO1xuICAgICAgICAgICAgICAgICAgICB1bk9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5PcmRlcmVkTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0cygpKTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCJHbyBHYXJ5IVwiKSk7XG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKCkpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbigpKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbn0iLCJjb25zdCBwbG90U29jaWFsTWVkaWFJY29ucyA9ICgpID0+e1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAgYHNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJgO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5naXRodWIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi1naXRodWItb3JpZ2luYWxcIj48L2k+PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzb2NpYWwtbWVkaWEtaWNvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cudHdpdHRlci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rc1wiPjxpIGNsYXNzPVwiZGV2aWNvbiBkZXZpY29uLXR3aXR0ZXItb3JpZ2luYWxcIj48L2k+PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJzb2NpYWwtbWVkaWEtaWNvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cubGlua2VkaW4uY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi1saW5rZWRpbi1wbGFpblwiPjwvaT48L2E+XG4gICAgICAgIDwvbGk+XG4gICAgYDtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgcGxvdFNvY2lhbE1lZGlhSWNvbnM7IiwiZXhwb3J0IGNvbnN0IHR5cGVXcml0ZXIgPSAodGl0bGUsIGVsZW1lbnQpID0+e1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGl0bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoaSAhPSB0aXRsZS5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGUuc2xpY2UoMCwgaSkgKyB0aXRsZS5jaGFyQXQoaSkgKyBgPHNwYW4gY2xhc3M9XCJibGlua1wiPnw8L3NwYW4+YDtcbiAgICAgICAgICAgIH0sIGkgKiAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIH0sIGkgKiAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIDE1MCkpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIjtcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuanMnO1xuaW1wb3J0IGJhbm5lciBmcm9tIFwiLi4vc2VjdGlvbnMvYmFubmVyLmpzXCI7XG5pbXBvcnQgd29yayBmcm9tIFwiLi4vc2VjdGlvbnMvd29yay5qc1wiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuLi9zZWN0aW9ucy9hYm91dC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4uL3NlY3Rpb25zL2NvbnRhY3QuanNcIjtcbmltcG9ydCBldmVudEhhbmRsZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnMuanNcIjtcbmltcG9ydCBkYXJrTGlnaHRNb2RlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2RhcmtMaWdodE1vZGVCdXR0b24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xuICAgIHN0YXRpYyBsb2FkUGFnZSA9ICgpID0+e1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlci5sb2FkSGVhZGVyKCkpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMubG9hZENvbnRlbnQoKSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyLmxvYWRGb290ZXIoKSk7XG5cbiAgICAgICAgZXZlbnRIYW5kbGVycy5sb2FkSGFuZGxlcnMoKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkQ29udGVudCA9ICgpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXIubG9hZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dC5sb2FkKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmsubG9hZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0LmxvYWQoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGFya0xpZ2h0TW9kZUJ1dHRvbigpKTtcblxuXG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG5cbiAgICB9XG59IiwiaW1wb3J0IHByb2ZpbGVQaWN1dHJlTm9CZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLW5vYmcucG5nXCI7XG5pbXBvcnQgc2tpbGxTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9za2lsbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXR7XG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiLFwiYWJvdXQtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uY2xhc3NOYW1lID1cImltYWdlRGVzY3JpcHRpb24tY29udGFpbmVyXCI7XG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGhpcy5sb2FkSW1hZ2UoKSk7XG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGhpcy5wZXJzb25hbERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNraWxsU2VjdGlvbi5sb2FkKCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBwZXJzb25hbERlc2NyaXB0aW9uID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IG1lXCI7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICgpID0+e1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiSSBhbSBjdXJyZW50bHkgbGl2aW5nIG9uIHRoZSBiZWF1dGlmdWwgaXNsYW5kIG9mIFRhaXdhbiwgdGVhY2hpbmcgc3R1ZGVudHMgRW5nbGlzaCBhcyB0aGVpciBzZWNvbmQgbGFuZ3VhZ2UuIEluIG15IGZyZWUgdGltZSwgSSBlbmpveSBsb25nIHJ1bnMuIFJ1bm5pbmcgaGVscHMgbWUgcmVmbGVjdCBvbiBsaWZlLCBwcm92aWRpbmcgbWUgd2l0aCB0aGUgdGltZSBhbmQgc3BhY2UgZm9yIGRlZXAgdGhpbmtpbmcuIFdoZW4gSSBhbSBub3QgcnVubmluZywgSSBhbSBjb2RpbmcuIEkgYmVnYW4gY29kaW5nIGluIGhpZ2ggc2Nob29sIGFuZCBjb2xsZWdlLCBidXQgbmV2ZXIgbWFuYWdlZCB0byBmaW5pc2ggd2hhdCBJIHN0YXJ0ZWQuIE5vdywgSSBoYXZlIGRldmVsb3BlZCBhIGtlZW4gaW50ZXJlc3QgaW4gY29tcHV0ZXIgbGFuZ3VhZ2VzIGFuZCBhc3BpcmUgdG8gZGVkaWNhdGUgbXlzZWxmIHRvIGNyZWF0aW5nIGFwcHMsIGhvcGVmdWxseSBjb250cmlidXRpbmcgdG8gdGhlIGNvbW11bml0eS5cIjtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24oKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRJbWFnZSA9ICgpID0+e1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBwcm9maWxlUGljdXRyZU5vQmc7XG4gICAgICAgIGltYWdlLmFsdCA9IFwiQSBwb3J0cmFpdCBmb3IgbWVcIjtcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gXCJwcm9maWxlLXBpY3R1cmVcIjtcbiAgICAgICAgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyB0eXBlV3JpdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdHlwZXdyaXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5uZXJ7XG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY3JlYXRlT3V0ZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNyZWF0ZU91dGVyTGF5ZXIuY2xhc3NMaXN0LmFkZChcIm91dGVyLWJhbm5lci1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlSW5uZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNyZWF0ZUlubmVyTGF5ZXIuY2xhc3NMaXN0LmFkZChcImlubmVyLWJhbm5lci1jb250YWluZXJcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGNyZWF0ZUlubmVyTGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgY3JlYXRlSW5uZXJMYXllci5hcHBlbmRDaGlsZCh0aGlzLnN1YlRleHQoKSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgY3JlYXRlSW5uZXJMYXllci5hcHBlbmRDaGlsZCh0aGlzLmJhbm5lckhhbmRsZXJCdG4oKSk7XG4gICAgICAgIH0sIDcwMDApO1xuXG4gICAgICAgIGNyZWF0ZU91dGVyTGF5ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5uZXJMYXllcik7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZU91dGVyTGF5ZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHRpdGxlID0gXCJIaSwgSSdtIEdhcnlcIjtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZVRleHQuY2xhc3NOYW1lID0gXCJiYW5uZXItdGl0bGVcIjtcblxuICAgICAgICAgdHlwZVdyaXRlcih0aXRsZSwgdGl0bGVUZXh0KTtcblxuICAgICAgICByZXR1cm4gdGl0bGVUZXh0O1xuICAgIH1cblxuICAgIHN0YXRpYyBzdWJUZXh0ID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHN1YnRpdGxlID0gXCJBIGZ1bGwtc3RhY2sgZW50aHVzaWFzdC5cIlxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVXcml0ZXJcIiwgXCJzdWJ0aXRsZVwiKTtcbiAgICAgICAgXG4gICAgICAgIHR5cGVXcml0ZXIoc3VidGl0bGUsIHRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIHN0YXRpYyBiYW5uZXJIYW5kbGVyQnRuID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLWJ0bi1uYXYtYWJvdXRcIilcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+YXJyb3ctZG93bi10aGljazwvdGl0bGU+PHBhdGggZD1cIk0xMCw0SDE0VjEzTDE3LjUsOS41TDE5LjkyLDExLjkyTDEyLDE5Ljg0TDQuMDgsMTEuOTJMNi41LDkuNUwxMCwxM1Y0WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgYFxuXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuICAgICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgc2Nyb2xsVG9TZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuXG59IiwiXG5pbXBvcnQgcGxvdFNvY2lhbE1lZGlhSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29uc1wiO1xuaW1wb3J0IGNvbnRhY3RJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC5qcGdcIjtcblxuY29uc3QgY29udGFjdCA9IHtcbiAgICBhZGRyZXNzOiBcIlRhaXBlaSwgVGFpd2FuXCIsIFxuICAgIHBob25lOiBcIjU1NS01NTUtNTU1NVwiLCBcbiAgICBlbWFpbDogXCJnMTIzNDU2QG1haWwuY29tXCJ9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0e1xuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHRoaXMuY29udGVudChjb250YWN0KSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtY29udGFpbmVyXCIpO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0aGlzLnBsb3RJbWFnZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0KTtcblxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH1cblxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IE1lXCI7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGxvdEltYWdlID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNyZWRpdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNyZWRpdGVkLmlubmVySFRNTCA9IGBcbiAgICAgICAgUGhvdG8gYnkgXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZmlybWJlZT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+RmlybWJlZS5jb208L2E+IFxuICAgICAgICBvbiBcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy93b21hbi1ob2xkaW5nLXNpbHZlci1pcGhvbmUtNi1TcFZIY2J1S2k2RT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+VW5zcGxhc2g8L2E+XG4gICAgYDtcbiAgICAgIFxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWFnZVwiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY29udGFjdEltZztcbiAgICAgICAgaW1hZ2UuYWx0ID0gXCJBIGhhbmQgaG9sZGluZyBhIHBob25lXCJcblxuICAgICAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY3JlZGl0ZWQpO1xuXG5cblxuICAgICAgICByZXR1cm4gY3JlYXRlRGl2O1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZW50ID0gKGNvbnRhY3QpID0+e1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zdWJ0aXRsZVwiKTtcbiAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHRoaW5rIG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5IGJlbmVmaWNpYWwuXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbG90Q29udGFjdEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiAgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5tYXAtbWFya2VyLW91dGxpbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVNMTIsMkE3LDcgMCAwLDEgMTksOUMxOSwxNC4yNSAxMiwyMiAxMiwyMkMxMiwyMiA1LDE0LjI1IDUsOUE3LDcgMCAwLDEgMTIsMk0xMiw0QTUsNSAwIDAsMCA3LDlDNywxMCA3LDEyIDEyLDE4LjcxQzE3LDEyIDE3LDEwIDE3LDlBNSw1IDAgMCwwIDEyLDRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cGhvbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNSwyMkMyMC4zMywyMiAyMSwyMS4zMyAyMSwyMC41VjE3QzIxLDE2LjE3IDIwLjMzLDE1LjUgMTkuNSwxNS41QzE4LjMzLDE1LjUgMTcuMTgsMTUuMzIgMTYuMDgsMTQuOTVDMTUuNTUsMTQuNzggMTQuOTcsMTQuOTIgMTQuNTYsMTUuMzJMMTMuMTIsMTYuNzZDMTAuNjQsMTUuNDEgOC41NywxMy4zNCA3LjIzLDEwLjg3TDguNjYsOS40NEM5LjA3LDkuMDUgOS4yMiw4LjQ3IDkuMDQsNy45MUM4LjY4LDYuODIgOC41LDUuNjcgOC41LDQuNUM4LjUsMy42NyA3LjgzLDMgNywzSDMuNUMyLjY3LDMgMiwzLjY3IDIsNC41QzIsMTQuMTUgOS44NSwyMiAxOS41LDIyTTMuNSw0SDdDNy4yOCw0IDcuNSw0LjIyIDcuNSw0LjVDNy41LDUuNzggNy43LDcuMDMgOC4wOSw4LjIyQzguMTQsOC4zNiA4LjEzLDguNTYgNy45Nyw4LjcyTDYsMTAuNjhDNy42NSwxMy45MSAxMC4wNywxNi4zMyAxMy4zMSwxOEwxNS4yNiwxNi4wM0MxNS40LDE1Ljg5IDE1LjU5LDE1Ljg1IDE1Ljc3LDE1LjlDMTYuOTcsMTYuMyAxOC4yMiwxNi41IDE5LjUsMTYuNUMxOS43OCwxNi41IDIwLDE2LjcyIDIwLDE3VjIwLjVDMjAsMjAuNzggMTkuNzgsMjEgMTkuNSwyMUMxMC40LDIxIDMsMTMuNiAzLDQuNUMzLDQuMjIgMy4yMiw0IDMuNSw0WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5lbWFpbC1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIgNkMyMiA0LjkgMjEuMSA0IDIwIDRINEMyLjkgNCAyIDQuOSAyIDZWMThDMiAxOS4xIDIuOSAyMCA0IDIwSDIwQzIxLjEgMjAgMjIgMTkuMSAyMiAxOFY2TTIwIDZMMTIgMTFMNCA2SDIwTTIwIDE4SDRWOEwxMiAxM0wyMCA4VjE4WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtjb250YWN0LmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90Q29udGFjdEluZm8oKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90U29jaWFsTWVkaWFJY29ucyhcImNvbnRhY3RcIikpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgXG59IiwiaW1wb3J0IGJvb3RTdHJhcEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9ib290c3RyYXAtaWNvbi5zdmdcIjtcbmltcG9ydCBjc3NJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvY3NzLWljb24uc3ZnXCI7XG5pbXBvcnQgZmlnbWFJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmlnbWEtaWNvbi5zdmdcIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZ2l0aHViLWljb24uc3ZnXCI7XG5pbXBvcnQgaHRtbEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9odG1sLWljb24uc3ZnXCI7XG5pbXBvcnQganNJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvanMtaWNvbi5zdmdcIjtcbmltcG9ydCBwb3N0bWFuSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3Bvc3RtYW4taWNvbi5zdmdcIjtcbmltcG9ydCByZWFjdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9yZWFjdC1pY29uLnN2Z1wiO1xuaW1wb3J0IHRzSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3RzLWljb24uc3ZnXCI7XG5cbmNvbnN0IGljb25zID0gW1xuICAgIHtuYW1lOiBcIkJvb3RzdHJhcFwiLCBsaW5rOiBib290U3RyYXBJY29ufSxcbiAgICB7bmFtZTogXCJDU1NcIiwgbGluazogY3NzSWNvbn0sXG4gICAge25hbWU6IFwiRmlnbWFcIiwgbGluazogZmlnbWFJY29ufSxcbiAgICB7bmFtZTogXCJHaXRodWJcIiwgbGluazogZ2l0aHViSWNvbn0sXG4gICAge25hbWU6IFwiSFRNTFwiLCBsaW5rOiBodG1sSWNvbn0sXG4gICAge25hbWU6IFwiSmF2YXNjcmlwdFwiLCBsaW5rOiBqc0ljb259LFxuICAgIHtuYW1lOiBcIlBvc3RtYW5cIiwgbGluazogcG9zdG1hbkljb259LFxuICAgIHtuYW1lOiBcIlR5cGVzY3JpcHRcIiwgbGluazogdHNJY29ufSxcbiAgICB7bmFtZTogXCJSZWFjdFwiLCBsaW5rOiByZWFjdEljb259LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBza2lsbFNlY3Rpb257XG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2tpbGxzXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXIoKSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBzbGlkZXIgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2xpZGVyXCI7XG5cbiAgICAgICAgY29uc3QgYnJhbmRzID0gKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpdGVtc0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGl0ZW1zSG9sZGVyLmNsYXNzTmFtZSA9IFwiYnJhbmRzXCI7XG5cbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGl0ZW0pID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgbGlzdC5jbGFzc05hbWUgPSBcImJyYW5kLWxvZ29cIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW0ubGluaztcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICAgIGl0ZW1zSG9sZGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zSG9sZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyYW5kcygpKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG59IiwiaW1wb3J0IGN2TWFrZXJJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvY3YtbWFrZXIucG5nXCI7XG5pbXBvcnQgbWVtb3J5SW1nIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL21lbW9yeS5wbmdcIjtcbmltcG9ydCB0b2RvbGlzdEltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy90b2RvbGlzdC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyQXBwSW1nIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItYXBwLnBuZ1wiO1xuaW1wb3J0IGdlb3NBcHAgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvZ2Vvc19hcHAucG5nXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLCBcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgYXBwIHRoYXQgc2VhcmNoZXMgdGhyb3VnaCB0aGUgYXBpIHRvIGZpbmQgdGhlIGNpdHkncyB3ZWF0aGVyIGZvcmVjYXN0LiAgVGhpcyBwcm9qZWN0IGlzIGZyb20gdGhlIE9kaW4gUHJvamVjdCBhbmQgaXQgaXMgdXNlZCB0byBwcmFjdGljZSBhbmQgcGxheSBhcm91bmQgd2l0aCB0aGUgbGFuZ3VhZ2UgdGhhdCBpcyBiZWluZyBsZWFybmVkXCIsIFxuICAgIGltYWdlOiB3ZWF0aGVyQXBwSW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTNVwiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vd2VhdGhlci1hcHAvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS93ZWF0aGVyLWFwcFwifSxcbiAgICB7bmFtZTogXCJUb2RvIExpc3RcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgdG8gZG8gbGlzdCBhcHAuICBJdCBjYW4gY3JlYXRlIHByb2plY3RzIGFuZCBhZGQgdGFza3MuICBJdCBjYW4gYWxzbyBjaGVjayB0aGUgaW5jb21lIHByb2plY3RzIGFuZCBpdCB0ZWxscyB5b3Ugd2hlbiBhIHByb2plY3QgaXMgZG8gdG9kYXkuXCIsIFxuICAgIGltYWdlOiB0b2RvbGlzdEltZywgbGFuZ3VhZ2U6IFwiUmVhY3QsIENTUzVcIiwgd2Vic2l0ZTogXCJodHRwczovL3hzeW1tZXRyeTkuZ2l0aHViLmlvL3RvZG9saXN0L1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvdG9kb2xpc3RcIn0sXG4gICAge25hbWU6IFwiTWVtb3J5XCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIGdhbWUgYW5kIGZpcnN0IGdhbWUgSSBoYXZlIGNyZWF0ZWQuIENvbnRpbnVlIHRvIHByYWN0aWNlIGZldGNoaW5nIGRhdGFzIGFuZCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBvYmplY3RzIEkgaGF2ZSByZWNlaXZlZC4gIEFsc28sIGl0IGlzIGEgZ29vZCBwcmFjdGljZSB0byBwbGF5IGFyb3VuZCB3aXRoIGRhdGEgc3RydWN0dXJlIFwiLCBcbiAgICBpbWFnZTogbWVtb3J5SW1nLCBsYW5ndWFnZTogXCJSZWFjdCwgQ1NTNVwiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vbWVtb3J5L1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvbWVtb3J5XCJ9LFxuICAgIHtuYW1lOiBcIkNWIE1ha2VyXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIk15IGZpcnN0IHByYWN0aWNhbCBwcm9qZWN0IGZvciBhIGNvbXBhbnkgdGhhdCBJIHdvcmtlZCBmb3IuICBJdCBmYWNpbGl0YXRlcyB0ZWFjaGVycyB0byBjcmVhdGUgYW4gZXZhbHVhdGlvbiBmb3JtIGFuZCByZW5kZXIgdG8gYSBjdXN0b21pemVkIGZvcm0gYW5kIHNhdmUgYXMgUERGIG9yIHByaW50IGl0IG91dC5cIiwgXG4gICAgaW1hZ2U6IGN2TWFrZXJJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL2xvcXVhY2lvdXMtcGFwcmVuamFrLWIyMzU2NS5uZXRsaWZ5LmFwcC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L2N2LW1ha2VyXCJ9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHRU9TIEFwcFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNeSBmaXJzdCBwcmFjdGljYWwgcHJvamVjdCBmb3IgYSBjb21wYW55IHRoYXQgSSB3b3JrZWQgZm9yLiAgSXQgZmFjaWxpdGF0ZXMgdGVhY2hlcnMgdG8gY3JlYXRlIGFuIGV2YWx1YXRpb24gZm9ybSBhbmQgcmVuZGVyIHRvIGEgY3VzdG9taXplZCBmb3JtIGFuZCBzYXZlIGFzIFBERiBvciBwcmludCBpdCBvdXQuXCIsIFxuICAgICAgICBpbWFnZTogZ2Vvc0FwcCxcbiAgICAgICAgbGFuZ3VhZ2U6IFwiUkVBQ1QsIFRhaWx3aW5kLCBUeXBlc2NyaXB0XCIsIFxuICAgICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vbWFpbi5nZW9zLXByb2plY3QucGFnZXMuZGV2L2hvbWUvZW5nbGlzaC9cIiwgXG4gICAgICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS9nZW9zLXByb2plY3RcIn1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmt7XG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid29ya1wiKTtcblxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RzKCkpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3b3JrLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXkgV29ya1wiO1xuXG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvamVjdHMgPSAoKSA9PntcblxuICAgICAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+e1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdENhcmRzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRzXCIpXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJBbiBpbWFnZSBvZiAke2l0ZW0ubmFtZX1cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtbmFtZVwiPiR7aXRlbS5uYW1lfTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmstZmlsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiJHtpdGVtLmdpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibWRpLWljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Z2l0PC90aXRsZT48cGF0aCBkPVwiTTIuNiwxMC41OUw4LjM4LDQuOEwxMC4wNyw2LjVDOS44Myw3LjM1IDEwLjIyLDguMjggMTEsOC43M1YxNC4yN0MxMC40LDE0LjYxIDEwLDE1LjI2IDEwLDE2QTIsMiAwIDAsMCAxMiwxOEEyLDIgMCAwLDAgMTQsMTZDMTQsMTUuMjYgMTMuNiwxNC42MSAxMywxNC4yN1Y5LjQxTDE1LjA3LDExLjVDMTUsMTEuNjUgMTUsMTEuODIgMTUsMTJBMiwyIDAgMCwwIDE3LDE0QTIsMiAwIDAsMCAxOSwxMkEyLDIgMCAwLDAgMTcsMTBDMTYuODIsMTAgMTYuNjUsMTAgMTYuNSwxMC4wN0wxMy45Myw3LjVDMTQuMTksNi41NyAxMy43MSw1LjU1IDEyLjc4LDUuMTZDMTIuMzUsNSAxMS45LDQuOTYgMTEuNSw1LjA3TDkuOCwzLjM4TDEwLjU5LDIuNkMxMS4zNywxLjgxIDEyLjYzLDEuODEgMTMuNDEsMi42TDIxLjQsMTAuNTlDMjIuMTksMTEuMzcgMjIuMTksMTIuNjMgMjEuNCwxMy40MUwxMy40MSwyMS40QzEyLjYzLDIyLjE5IDExLjM3LDIyLjE5IDEwLjU5LDIxLjRMMi42LDEzLjQxQzEuODEsMTIuNjMgMS44MSwxMS4zNyAyLjYsMTAuNTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2l0ZW0ud2Vic2l0ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibWRpLWljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+b3Blbi1pbi1uZXc8L3RpdGxlPjxwYXRoIGQ9XCJNMTQsM1Y1SDE3LjU5TDcuNzYsMTQuODNMOS4xNywxNi4yNEwxOSw2LjQxVjEwSDIxVjNNMTksMTlINVY1SDEyVjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOVpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1idWlsdGluXCI+PGk+QnVpbHQgd2l0aCAke2l0ZW0ubGFuZ3VhZ2V9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluZGV4LmpzXG5cbmltcG9ydCBcIi4uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi4vc3JjL3BhZ2VzL2hvbWVwYWdlJztcblxuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaG9tZVBhZ2UubG9hZFBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==