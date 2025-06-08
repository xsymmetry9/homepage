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
    --primary-color-dark: #000;
    --primary-color-light: #fff;
    --primary-fc-dark: #000;
    --primary-bg-color-dark: var(--primary-color-dark);
    --button-color: var(--primary-bg-color-dark);
    --color-cyan: rgb(0, 247, 255);
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
    background-color: var(--primary-color-light);
    font-family: var(--primary-font);
}
`, "",{"version":3,"sources":["webpack://./src/styles/base.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,2BAA2B;IAC3B,uBAAuB;IACvB,kDAAkD;IAClD,4CAA4C;IAC5C,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;IAC5C,gCAAgC;AACpC","sourcesContent":[":root {\n    --primary-font: 'Poppins', sans-serif;\n    --primary-color-dark: #000;\n    --primary-color-light: #fff;\n    --primary-fc-dark: #000;\n    --primary-bg-color-dark: var(--primary-color-dark);\n    --button-color: var(--primary-bg-color-dark);\n    --color-cyan: rgb(0, 247, 255);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--primary-color-light);\n    font-family: var(--primary-font);\n}\n"],"sourceRoot":""}]);
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
    top: 3rem;
    width: 100%;
    background: rgba(25, 25, 25, 0.3);
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
    height: 70px;
}
.title-logo a {
    color: var(--primary-color-light);
    margin-left: 1.2rem;
    font-weight: 700;
    text-decoration: none;
}

@media (max-width: 55em) {
    header {
        position: sticky;
        top: 0;
    }

    .header-container {
        flex-direction: column;
        align-items: normal;
        background: rgba(25, 25, 25, 0.7);
    }

    .title-logo {
        margin-top: 22.5px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,iCAAiC;IACjC,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI;QACI,gBAAgB;QAChB,MAAM;IACV;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;QACnB,iCAAiC;IACrC;;IAEA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":["header {\n    position: absolute;\n    top: 3rem;\n    width: 100%;\n    background: rgba(25, 25, 25, 0.3);\n}\n\n.header-container {\n    position: relative;\n    font-size: 1rem;\n    text-transform: uppercase;\n    color: var(--primary-color-light);\n    max-width: 1440px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-inline: auto;\n    height: 70px;\n}\n.title-logo a {\n    color: var(--primary-color-light);\n    margin-left: 1.2rem;\n    font-weight: 700;\n    text-decoration: none;\n}\n\n@media (max-width: 55em) {\n    header {\n        position: sticky;\n        top: 0;\n    }\n\n    .header-container {\n        flex-direction: column;\n        align-items: normal;\n        background: rgba(25, 25, 25, 0.7);\n    }\n\n    .title-logo {\n        margin-top: 22.5px;\n    }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Content */

.content-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    padding: 0;
    background-color: var(--primary-bg-color-dark);

}
/* Banner */
.banner-title{
    color: var(--primary-color-light);
    line-height: 1;
    font-size: 7rem;
    padding: 0 12px;
}

.subtitle{
    color: var(--primary-color-light);
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
.banner-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 1440px;
    width: 100%;
}
.banner-btn-nav-about
{
    cursor: pointer;
    height: 70px;
    width: 70px;
    fill: var(--primary-color-light);
    background: none;
    border: 2px solid var(--primary-color-light);
    border-radius: 50%;
    animation: slidein ease-in-out .5s;
    margin-top: 7rem;
    transition: background-color ease-in 500ms,
                fill ease-in 500ms,
                border ease-in 500ms;

}
@keyframes slidein{

    from{margin-top: 0;}
    to{margin-top: 7rem;}
        
}

.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{
    --color: rgb(0, 247, 255);
    background-color: var(--color);
    border: 3px solid var(--color);
    fill: #000;
}

/* About */
.section-container{
    background-color: var(--primary-color-light);
    width: 100%;
    display: block;
}
.about-background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--primary-color-light);
    height: 100vh;
}
.about-description{
    color: var(--primary-color-dark);
    background-color: var(--primary-color-light);
    font-size: 1.2rem;
    padding: 3rem 1.2rem;
    border: 1px solid var(--primary-color-dark);
    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);
    max-width: 750px;
    width: 100%;
}
.about-description h2{
    padding-bottom: 2rem;
}
.about-description p{
    padding-bottom: 1.2rem;
}
.imageDescription-container{
    display: flex;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
    align-items: center;
    margin-inline: auto;
    margin-top: 3rem;
    padding-bottom: 3rem;
    z-index: 0;
    
}
.imageDescription-container::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -10;
    background-color: var(--primary-color-dark);
    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);

}

@media (max-width: 55em) {
    .imageDescription-container{
        flex-wrap: wrap;

    }
}
.profile-picture{
    width: 100%;
    max-width: 400px;
    height: auto;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.15); /* Soft white */
}
#about .social-media-icons-container{
    justify-content: flex-end;
}

/*Skills */
:root{
    --total-brand: 12;
    --logo-width: 12rem;
    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);
}

.skill-title{
    text-align: center;
}

.slider{
    position: relative;
    height: 20rem;
    background-color: #fff;
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
    background: linear-gradient(to right, #fff 0%,#0000 100%);
}
.slider::after{
    right: 0;
    background: linear-gradient(to left, #fff 0%,#0000 100%);
}

.slider ul.brands{
    list-style: none;
    width: var(--total-logo-width);
    display: flex;

    animation: slideLeft 12s linear infinite;
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
    font-size: 2rem;
    text-align: center;
    margin-left: 3rem
}

.skill-icon{
    height: 100px;
    /* margin: 0 30px; */
}

/* Work */

.content{
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
    padding: 5rem 0;
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
    fill: var(--);
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
}

.project-cards{
    /* background-color: #1a1a1a; */
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
    object-fit: cover;
}
.project-bottom{
    border-top: 3px solid black;
    padding: 1.2rem 1.2rem;

}
.project-description{
    font-size: .9rem;
    line-height: 1.5;
}

/* Contact */

#contact{
    h1, h2, h3, h4, h5, p{
        color: var(--primary-color-light);
    }
}
.contact-flex{
    display: flex;
    gap: 12px;
    align-items: center;
    padding-bottom: .3rem;
}

.contact-container{
    --spacing-big: 3rem;
    color: var(--primary-color-light);
    margin-top: var(--spacing-big);
    display: flex;
    gap: 12px;
}

.contact-title{
    color: var(--primary-color-light);
}
@media (max-width: 55em)
{
    .contact-container{
        display: block;
    }
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
    color: inherit;
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
        border-radius: 5px;
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

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import './base.css';\n@import './typography.css';\n@import './header.css';\n@import './navigation.css';\n@import './utility.css';\n@import './footer.css';\n\n/* Content */\n\n.content-container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-inline: auto;\n    padding: 0;\n    background-color: var(--primary-bg-color-dark);\n\n}\n/* Banner */\n.banner-title{\n    color: var(--primary-color-light);\n    line-height: 1;\n    font-size: 7rem;\n    padding: 0 12px;\n}\n\n.subtitle{\n    color: var(--primary-color-light);\n    font-size: 1.6rem;\n    padding-top: 1.2rem;\n}\n@media (max-width: 55em){\n    .banner-title{\n        font-size: 4rem;\n    }\n    .subtitle{\n        font-size: 1.2rem;\n    }\n}\n.banner-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    max-width: 1440px;\n    width: 100%;\n}\n.banner-btn-nav-about\n{\n    cursor: pointer;\n    height: 70px;\n    width: 70px;\n    fill: var(--primary-color-light);\n    background: none;\n    border: 2px solid var(--primary-color-light);\n    border-radius: 50%;\n    animation: slidein ease-in-out .5s;\n    margin-top: 7rem;\n    transition: background-color ease-in 500ms,\n                fill ease-in 500ms,\n                border ease-in 500ms;\n\n}\n@keyframes slidein{\n\n    from{margin-top: 0;}\n    to{margin-top: 7rem;}\n        \n}\n\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\n    --color: rgb(0, 247, 255);\n    background-color: var(--color);\n    border: 3px solid var(--color);\n    fill: #000;\n}\n\n/* About */\n.section-container{\n    background-color: var(--primary-color-light);\n    width: 100%;\n    display: block;\n}\n.about-background{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: var(--primary-color-light);\n    height: 100vh;\n}\n.about-description{\n    color: var(--primary-color-dark);\n    background-color: var(--primary-color-light);\n    font-size: 1.2rem;\n    padding: 3rem 1.2rem;\n    border: 1px solid var(--primary-color-dark);\n    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);\n    max-width: 750px;\n    width: 100%;\n}\n.about-description h2{\n    padding-bottom: 2rem;\n}\n.about-description p{\n    padding-bottom: 1.2rem;\n}\n.imageDescription-container{\n    display: flex;\n    justify-content: center;\n    max-width: 1440px;\n    width: 100%;\n    align-items: center;\n    margin-inline: auto;\n    margin-top: 3rem;\n    padding-bottom: 3rem;\n    z-index: 0;\n    \n}\n.imageDescription-container::before{\n    content: \"\";\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: -10;\n    background-color: var(--primary-color-dark);\n    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);\n\n}\n\n@media (max-width: 55em) {\n    .imageDescription-container{\n        flex-wrap: wrap;\n\n    }\n}\n.profile-picture{\n    width: 100%;\n    max-width: 400px;\n    height: auto;\n    box-shadow: 0 0 12px rgba(255, 255, 255, 0.15); /* Soft white */\n}\n#about .social-media-icons-container{\n    justify-content: flex-end;\n}\n\n/*Skills */\n:root{\n    --total-brand: 12;\n    --logo-width: 12rem;\n    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);\n}\n\n.skill-title{\n    text-align: center;\n}\n\n.slider{\n    position: relative;\n    height: 20rem;\n    background-color: #fff;\n    box-shadow: 0.8rem 1.4rem -.2rem #0001;\n    \n    display: flex;\n    align-items: center;\n\n    overflow: hidden;\n}\n\n.slider::before,\n.slider::after{\n    position: absolute;\n    content: \"\";\n\n    height: 100%;\n    width: var(--logo-width);\n}\n.slider::before{\n    left: 0;\n    background: linear-gradient(to right, #fff 0%,#0000 100%);\n}\n.slider::after{\n    right: 0;\n    background: linear-gradient(to left, #fff 0%,#0000 100%);\n}\n\n.slider ul.brands{\n    list-style: none;\n    width: var(--total-logo-width);\n    display: flex;\n\n    animation: slideLeft 12s linear infinite;\n}\n.slider:hover ul.brands{\n    animation-play-state: paused;\n}\n\n@keyframes slideLeft {\n    100%{\n        transform: translateX(calc(-100% / 2));\n    }\n}\n\nul.brands li.brand-logo{\n    width: var(--logo-width);\n    font-size: 2rem;\n    text-align: center;\n    margin-left: 3rem\n}\n\n.skill-icon{\n    height: 100px;\n    /* margin: 0 30px; */\n}\n\n/* Work */\n\n.content{\n    width: 100%;\n    max-width: 1440px;\n    margin-inline: auto;\n    padding: 5rem 0;\n}\n\n.top-container{\n    display: flex;\n    justify-content: space-between;\n}\n.mdi-icons{\n    height: 1.9rem;\n    width: 1.9rem;\n    fill: var(--primary-color-dark);\n    background-color: inherit;\n}\n.mdi-icons:hover, .mdi-icons:active{\n    fill: var(--);\n}\n\n.link-file-container{\n    display: flex;\n    justify-content: flex-end;\n    gap: .3rem;\n}\n.link-file-container{\n    list-style: none;\n}\n.link-file-container a{\n    cursor: pointer;\n    text-decoration: none;\n}\n.project-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 1.6rem;\n    padding: 2rem 12px;\n}\n@media (max-width: 55em)\n{\n    .project-container{\n        grid-template-columns: 1fr;\n    }\n}\n\n.title-name{\n    --spacing: 1.2rem;\n    font-size: 1.8rem;\n    padding-bottom: var(--spacing);\n}\n\n.project-cards{\n    /* background-color: #1a1a1a; */\n    background-color: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    transform: transform 0.3s ease;\n    display: grid;\n    grid-template-rows: 1fr 250px;\n    border: 1px solid gray;\n    /* border-bottom: 5px solid black; */\n    box-shadow: 0px 5px 0px 0px rgba(25, 25, 25);\n}\n\n.project-image{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n.project-bottom{\n    border-top: 3px solid black;\n    padding: 1.2rem 1.2rem;\n\n}\n.project-description{\n    font-size: .9rem;\n    line-height: 1.5;\n}\n\n/* Contact */\n\n#contact{\n    h1, h2, h3, h4, h5, p{\n        color: var(--primary-color-light);\n    }\n}\n.contact-flex{\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    padding-bottom: .3rem;\n}\n\n.contact-container{\n    --spacing-big: 3rem;\n    color: var(--primary-color-light);\n    margin-top: var(--spacing-big);\n    display: flex;\n    gap: 12px;\n}\n\n.contact-title{\n    color: var(--primary-color-light);\n}\n@media (max-width: 55em)\n{\n    .contact-container{\n        display: block;\n    }\n}\n\n.contact-image{\n    max-width: 700px;\n    width: 100%;\n    height: auto;\n}\n.social-media-icons-container{\n    display: flex;\n    gap: 16px;\n}\n@media (max-width: 55em)\n{\n    .social-media-icons-container{\n        justify-content: center;\n        padding: 1.2rem;\n    }\n}\n.social-media-icons{\n    list-style: none;\n}\n.social-media-icons-links{\n    cursor: pointer;\n    \n}\n.devicon{\n    font-size: 2rem;\n}\n\n.social-media-links{\n    text-decoration: none;\n    color: inherit;\n}\n\n.left-container{\n    --spacing-1: 1rem;\n    padding: 0 var(--spacing-1);\n}\n\n.left-container h2{\n    --spacing-2: 1.2rem;\n    padding-bottom: 1.12rem;\n}\n.left-container .contact-subtitle{\n    --spacing-1: 1rem;\n    padding-bottom: var(--spacing-1);\n}\n\n.right-container{\n    padding: 0 12px;\n}\n\n\n\n/*Components */\n\n.menu-btn{\n    --button-color: var(--primary-color-light);\n        cursor: pointer;\n        display: none;   \n        fill: var(--button-color);\n        \n        position: absolute;\n        right: 12px;\n        top: 13px;\n        z-index: 100;\n        background: transparent;\n        border: 1px solid var(--button-color);\n        border-radius: 5px;\n    }\n\n    .menu-btn .line{\n        transition: \n            y 300ms ease-in 300ms,\n            rotate 300ms ease-in ,\n            opacity 0ms 300ms;\n        transform-origin: center;\n    }\n    .menu-btn:hover .line{\n        transition: \n            y 300ms ease-in,\n            rotate 300ms ease-in 300ms,\n            opacity 0ms 300ms;\n    }\n\n\n    .menu-btn[aria-expanded =\"true\"] .top\n    {\n        y: 48;\n        rotate: 45deg;\n    }\n    .menu-btn[aria-expanded =\"true\"] .middle\n    {\n        opacity: 0;\n    }\n    .menu-btn[aria-expanded =\"true\"] .bottom\n    {\n        y: 48;\n        rotate: -45deg;\n    }\n\n    .menu-btn:hover :is(.top, .bottom){\n        y: 48;\n    }\n    .menu-btn:hover .top{\n        rotate: 45deg;\n    }\n    .menu-btn:hover .bottom{\n        rotate: -45deg;\n    }\n    .menu-btn:hover .middle{\n        opacity: 0;\n    }\n \n    @media (max-width: 55em){\n        .menu-btn{\n            display: block;\n        }\n    }\n\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Roboto', sans-serif;

    --color-text: #1f1f1f;
    --line-height-heading: 1.2;
    --line-height-body: 1.6;
}

h1, h2, h3, h4, h5 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-text);
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
    color: var(--color-text);
    margin-bottom: 1.25rem;
}


@media (max-width: 768px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.2rem; }
  p  { font-size: 1rem; }
}
`, "",{"version":3,"sources":["webpack://./src/styles/typography.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,iCAAiC;;IAEjC,qBAAqB;IACrB,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,wBAAwB;IACxB,uCAAuC;IACvC,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;IACpC,iBAAiB;IACjB,wBAAwB;IACxB,sBAAsB;AAC1B;;;AAGA;EACE,KAAK,kBAAkB,EAAE;EACzB,KAAK,eAAe,EAAE;EACtB,KAAK,kBAAkB,EAAE;EACzB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,eAAe,EAAE;AACxB","sourcesContent":[":root{\n    --font-heading: 'Poppins', sans-serif;\n    --font-body: 'Roboto', sans-serif;\n\n    --color-text: #1f1f1f;\n    --line-height-heading: 1.2;\n    --line-height-body: 1.6;\n}\n\nh1, h2, h3, h4, h5 {\n    font-family: var(--font-heading);\n    font-weight: 700;\n    color: var(--color-text);\n    line-height: var(--line-height-heading);\n    margin-bottom: 1rem;\n}\nh2 {\n    font: 3rem sans-serif;\n    font-weight: 700;\n    text-align: center;\n}\n\nh3 {\n    font: 2rem sans-serif;\n    font-weight: 700;\n}\n\np {\n    font-family: var(--font-body);\n    line-height: var(--line-height-body);\n    font-size: 1.1rem;\n    color: var(--color-text);\n    margin-bottom: 1.25rem;\n}\n\n\n@media (max-width: 768px) {\n  h1 { font-size: 2.25rem; }\n  h2 { font-size: 2rem; }\n  h3 { font-size: 1.75rem; }\n  h4 { font-size: 1.5rem; }\n  h5 { font-size: 1.2rem; }\n  p  { font-size: 1rem; }\n}\n"],"sourceRoot":""}]);
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
        const title = (logoName) =>{
            const box = document.createElement("div");
            box.className = "title-logo";
            box.innerHTML = `
                <a href="/"><span>${logoName}</span></a>`;
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
/* harmony import */ var _sections_skills_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/skills.js */ "./src/sections/skills.js");
/* harmony import */ var _sections_contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/contact.js */ "./src/sections/contact.js");
/* harmony import */ var _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/eventHandlers.js */ "./src/components/eventHandlers.js");









class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter());

        _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_7__["default"].loadHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(_sections_banner_js__WEBPACK_IMPORTED_MODULE_2__["default"].load());
        content.appendChild(_sections_about_js__WEBPACK_IMPORTED_MODULE_4__["default"].load());
        content.appendChild(_sections_skills_js__WEBPACK_IMPORTED_MODULE_5__["default"].load());
        content.appendChild(_sections_work_js__WEBPACK_IMPORTED_MODULE_3__["default"].load());
        content.appendChild(_sections_contact_js__WEBPACK_IMPORTED_MODULE_6__["default"].load());

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
/* harmony import */ var _components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/socialMediaIcons */ "./src/components/socialMediaIcons.js");
/* harmony import */ var _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/profile.png */ "./src/assets/images/profile.png");



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
        container.appendChild((0,_components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__["default"])("about"));

        return container;
  
    }

    static loadImage = () =>{
        const image = new Image();
        image.src = _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_1__;
        image.alt = "A portrait for me";
        image.className = "profile-picture";
        return image;
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
        const container = document.createElement("div");
        container.classList.add("banner-container");

        setTimeout(() =>{
            container.appendChild(this.title())
        }, 500);
        setTimeout(() =>{
            container.appendChild(this.subText());
        }, 3000);
        setTimeout(() =>{
            container.appendChild(this.bannerHandlerBtn());
        }, 7000);

        return container;
    }

    static title = () =>{
        const title = "Hi, my name is Gary";
        const titleText = document.createElement("h1");
        titleText.className = "banner-title";

         (0,_components_typewriter__WEBPACK_IMPORTED_MODULE_0__.typeWriter)(title, titleText);

        return titleText;
    }

    static subText = () =>{
        const subtitle = "A web developer and an ESL teacher"
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




class Contact{
    static load = () =>{
        const contact = {address: "1234 Smith Street Miami, Florida 33156", phone: "555-555-5555", email: "g123456@mail.com"};
        const container = document.createElement("div");
        container.classList.add("contact-container");
        container.setAttribute("id", "contact");
  
        const left = document.createElement("div");
        left.classList.add("left-container");
        left.appendChild(this.title());
        left.appendChild(this.content(contact));

        const right = document.createElement("div");
        right.classList.add("right-container");
        right.appendChild(this.plotImage());
        
        container.appendChild(left);
        container.appendChild(right);
        return container;
    }

    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("contact-title");
        title.textContent = "Contact Me";
        return title;
    }

    static plotImage = () =>{
        const createDiv = document.createElement("div");

        const image = new Image();
        image.classList.add("contact-image");
        image.src = _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__;

        createDiv.appendChild(image);

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
/* harmony export */   "default": () => (/* binding */ Skills)
/* harmony export */ });
const icons = [`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#131313" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<defs><linearGradient id="a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9013fe"></stop><stop offset="1" stop-color="#6610f2"></stop></linearGradient><linearGradient id="b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><filter id="c" width="197" height="249" x="161.9" y="135.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path fill="url(#a)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"></path><path fill="url(#b)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" filter="url(#c)" transform="translate(1.494 2.203) scale(.24566)"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><path d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z" fill="#100E0F"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="url(#a)" d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z"></path><path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z"></path><path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z"></path><path fill="#fff" d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471c2.963 0 5.17-.557 6.62-1.675 1.451-1.116 2.428-2.98 2.938-5.591.485-2.508.264-4.277-.665-5.308-.931-1.03-2.791-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445c4.252 0 7.353 1.117 9.303 3.348 1.95 2.232 2.536 5.347 1.76 9.346-.322 1.648-.863 3.154-1.625 4.518-.764 1.366-1.76 2.614-2.991 3.747-1.468 1.373-3.097 2.352-4.892 2.935-1.794.584-4.08.875-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739h14.133"></path><path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407z"></path><path fill="#fff" d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655zm0 1.39-1.743 8.968h6.496c4.087 0 6.907.714 8.457 2.14 1.553 1.426 2.017 3.735 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928c.33-1.698.208-2.856-.365-3.474-.573-.617-1.793-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z"></path><path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z"></path><path fill="#fff" d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47c2.964 0 5.17-.557 6.622-1.675 1.45-1.116 2.428-2.98 2.936-5.591.487-2.508.266-4.277-.665-5.308-.93-1.03-2.791-1.546-5.583-1.546h-5.035Zm10.563-19.445c4.251 0 7.354 1.117 9.303 3.348 1.95 2.232 2.537 5.347 1.759 9.346-.32 1.648-.862 3.154-1.624 4.518-.763 1.366-1.76 2.614-2.992 3.747-1.467 1.373-3.097 2.352-4.892 2.935-1.793.584-4.078.875-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133"></path><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)" gradientUnits="userSpaceOnUse"><stop stop-color="#AEB2D5"></stop><stop offset=".3" stop-color="#AEB2D5"></stop><stop offset=".75" stop-color="#484C89"></stop><stop offset="1" stop-color="#484C89"></stop></radialGradient></defs>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"></path>
<path fill="#fff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"></path>
<path fill="#f37036" d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
</svg>`,
`<svg class="skill-icon" viewBox="0 0 128 128">
<path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
</svg>`,

`<svg class= "skill-icon" viewBox="0 0 128 128">
<path fill-rule="evenodd" clip-rule="evenodd" fill="#494949" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014zM63.993 4.63c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719a849.593 849.593 0 0126.618.008c1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zm10.117 77.971c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zm-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zm76.428-44.562c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
</svg>`];

class Skills{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container");
        container.setAttribute("id", "skills");

        const content = document.createElement("div");
        content.className = "content";

        content.appendChild(this.title());
        content.appendChild(this.slider());

        container.appendChild(content);
        return container;
    }

    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("skill-title");
        title.textContent = "My Skills";

        return title;
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
                list.innerHTML = `${item}`;
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
    {name: "GEOS App", description: "My first practical project for a company that I worked for.  It facilitates teachers to create an evaluation form and render to a customized form and save as PDF or print it out.", image: "", language: "REACT, Tailwind, Typescript", website: "https://xsymmetry9.github.io/car-wash/", github: "https://github.com/xsymmetry9/car-wash"}
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

/***/ "./src/assets/images/contact.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/contact.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e071530d05d16045923c.jpg";

/***/ }),

/***/ "./src/assets/images/cv-maker.png":
/*!****************************************!*\
  !*** ./src/assets/images/cv-maker.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e827143ed3dc4193f356.png";

/***/ }),

/***/ "./src/assets/images/memory.png":
/*!**************************************!*\
  !*** ./src/assets/images/memory.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "448120fdc0bf7889d20b.png";

/***/ }),

/***/ "./src/assets/images/profile.png":
/*!***************************************!*\
  !*** ./src/assets/images/profile.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61a16d94d681e9bd59f7.png";

/***/ }),

/***/ "./src/assets/images/todolist.png":
/*!****************************************!*\
  !*** ./src/assets/images/todolist.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "872a01c5c5d30faba4b8.png";

/***/ }),

/***/ "./src/assets/images/weather-app.png":
/*!*******************************************!*\
  !*** ./src/assets/images/weather-app.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02a70abe3f63546ab53b.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLDZGQUE2RixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsTUFBTSxNQUFNLG9CQUFvQix3QkFBd0IsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsc0JBQXNCLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFB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Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3V0aWxpdHkuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL3NvY2lhbE1lZGlhSWNvbnMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy90eXBld3JpdGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3NlY3Rpb25zL2Fib3V0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zZWN0aW9ucy9jb250YWN0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3NlY3Rpb25zL3NraWxscy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zZWN0aW9ucy93b3JrLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMDAwO1xuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogI2ZmZjtcbiAgICAtLXByaW1hcnktZmMtZGFyazogIzAwMDtcbiAgICAtLXByaW1hcnktYmctY29sb3ItZGFyazogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWN5YW46IHJnYigwLCAyNDcsIDI1NSk7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrREFBa0Q7SUFDbEQsNENBQTRDO0lBQzVDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMDAwO1xcbiAgICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICNmZmY7XFxuICAgIC0tcHJpbWFyeS1mYy1kYXJrOiAjMDAwO1xcbiAgICAtLXByaW1hcnktYmctY29sb3ItZGFyazogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XFxuICAgIC0tY29sb3ItY3lhbjogcmdiKDAsIDI0NywgMjU1KTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgfVxufVxuLmZvb3Rlci1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtJQUNJO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICB9XFxufVxcbi5mb290ZXItY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS4ycmVtIDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgIGhlaWdodDogNzBweDtcbn1cbi50aXRsZS1sb2dvIGEge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcbiAgICB9XG5cbiAgICAudGl0bGUtbG9nbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIyLjVweDtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixNQUFNO0lBQ1Y7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjMpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcbi50aXRsZS1sb2dvIGEge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlci1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlLWxvZ28ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjIuNXB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTmF2aWdhdGlvbiAqL1xuXG4ucHJpbWFyeS1uYXZpZ2F0aW9uW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm5hdi1jb250YWluZXJ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS44OHJlbTtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG59XG5cbi5uYXYtbGlua3N7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbiAuN3M7XG59XG4ubmF2LWxpbmtzOmhvdmVyLCAubmF2LWxpbmtzOmZvY3Vze1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcblxuICAgIG5hdntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgIFxuICAgIC5uYXYtY29udGFpbmVye1xuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubmF2LWNvbnRhaW5lciA+IGxpe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSx1Q0FBdUM7UUFDdkMsV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2aWdhdGlvbiAqL1xcblxcbi5wcmltYXJ5LW5hdmlnYXRpb25bYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdi1jb250YWluZXJ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMS44OHJlbTtcXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xcbn1cXG5cXG4ubmF2LWxpbmtze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4gLjdzO1xcbn1cXG4ubmF2LWxpbmtzOmhvdmVyLCAubmF2LWxpbmtzOmZvY3Vze1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XFxuXFxuICAgIG5hdntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAyNSwgMC45KTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcbiAgIFxcbiAgICAubmF2LWNvbnRhaW5lcntcXG4gICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLm5hdi1jb250YWluZXIgPiBsaXtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDb250ZW50ICovXG5cbi5jb250ZW50LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcblxufVxuLyogQmFubmVyICovXG4uYmFubmVyLXRpdGxle1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXNpemU6IDdyZW07XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uc3VidGl0bGV7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XG4gICAgLmJhbm5lci10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgICAuc3VidGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cbi5iYW5uZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmFubmVyLWJ0bi1uYXYtYWJvdXRcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gNTAwbXMsXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxuICAgICAgICAgICAgICAgIGJvcmRlciBlYXNlLWluIDUwMG1zO1xuXG59XG5Aa2V5ZnJhbWVzIHNsaWRlaW57XG5cbiAgICBmcm9te21hcmdpbi10b3A6IDA7fVxuICAgIHRve21hcmdpbi10b3A6IDdyZW07fVxuICAgICAgICBcbn1cblxuLmJhbm5lci1idG4tbmF2LWFib3V0OmhvdmVyLCAuYmFubmVyLWJ0bi1uYXYtYWJvdXQ6Zm9jdXN7XG4gICAgLS1jb2xvcjogcmdiKDAsIDI0NywgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3IpO1xuICAgIGZpbGw6ICMwMDA7XG59XG5cbi8qIEFib3V0ICovXG4uc2VjdGlvbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYWJvdXQtYmFja2dyb3VuZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmFib3V0LWRlc2NyaXB0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDNyZW0gMS4ycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggMXB4IHJnYmEoMjUsIDI1LCAyNSwgMC42KTtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmFib3V0LWRlc2NyaXB0aW9uIGgye1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLmFib3V0LWRlc2NyaXB0aW9uIHB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMnJlbTtcbn1cbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIHotaW5kZXg6IDA7XG4gICAgXG59XG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXI6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDQwJSwgMCUgOTUlKTtcblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgfVxufVxuLnByb2ZpbGUtcGljdHVyZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyAvKiBTb2Z0IHdoaXRlICovXG59XG4jYWJvdXQgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLypTa2lsbHMgKi9cbjpyb290e1xuICAgIC0tdG90YWwtYnJhbmQ6IDEyO1xuICAgIC0tbG9nby13aWR0aDogMTJyZW07XG4gICAgLS10b3RhbC1sb2dvLXdpZHRoOiBjYWxjKHZhcigtLXRvdGFsLWJyYW5kKSAqIHZhcigtLWxvZ28td2lkdGgpICogMik7XG59XG5cbi5za2lsbC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwLjhyZW0gMS40cmVtIC0uMnJlbSAjMDAwMTtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVyOjpiZWZvcmUsXG4uc2xpZGVyOjphZnRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG59XG4uc2xpZGVyOjpiZWZvcmV7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsIzAwMDAgMTAwJSk7XG59XG4uc2xpZGVyOjphZnRlcntcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcbn1cblxuLnNsaWRlciB1bC5icmFuZHN7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogdmFyKC0tdG90YWwtbG9nby13aWR0aCk7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDEycyBsaW5lYXIgaW5maW5pdGU7XG59XG4uc2xpZGVyOmhvdmVyIHVsLmJyYW5kc3tcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgLyAyKSk7XG4gICAgfVxufVxuXG51bC5icmFuZHMgbGkuYnJhbmQtbG9nb3tcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogM3JlbVxufVxuXG4uc2tpbGwtaWNvbntcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIG1hcmdpbjogMCAzMHB4OyAqL1xufVxuXG4vKiBXb3JrICovXG5cbi5jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gICAgcGFkZGluZzogNXJlbSAwO1xufVxuXG4udG9wLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tZGktaWNvbnN7XG4gICAgaGVpZ2h0OiAxLjlyZW07XG4gICAgd2lkdGg6IDEuOXJlbTtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG4ubWRpLWljb25zOmhvdmVyLCAubWRpLWljb25zOmFjdGl2ZXtcbiAgICBmaWxsOiB2YXIoLS0pO1xufVxuXG4ubGluay1maWxlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAuM3JlbTtcbn1cbi5saW5rLWZpbGUtY29udGFpbmVye1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvamVjdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxLjZyZW07XG4gICAgcGFkZGluZzogMnJlbSAxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXG57XG4gICAgLnByb2plY3QtY29udGFpbmVye1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG59XG5cbi50aXRsZS1uYW1le1xuICAgIC0tc3BhY2luZzogMS4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nKTtcbn1cblxuLnByb2plY3QtY2FyZHN7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCByZ2JhKDI1LCAyNSwgMjUpO1xufVxuXG4ucHJvamVjdC1pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucHJvamVjdC1ib3R0b217XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjJyZW07XG5cbn1cbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQ29udGFjdCAqL1xuXG4jY29udGFjdHtcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIHB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICB9XG59XG4uY29udGFjdC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xufVxuXG4uY29udGFjdC1jb250YWluZXJ7XG4gICAgLS1zcGFjaW5nLWJpZzogM3JlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1iaWcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4uY29udGFjdC10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcbntcbiAgICAuY29udGFjdC1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLmNvbnRhY3QtaW1hZ2V7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxue1xuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgIH1cbn1cbi5zb2NpYWwtbWVkaWEtaWNvbnN7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufVxuLmRldmljb257XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uc29jaWFsLW1lZGlhLWxpbmtze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmxlZnQtY29udGFpbmVye1xuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcbn1cblxuLmxlZnQtY29udGFpbmVyIGgye1xuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuMTJyZW07XG59XG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XG59XG5cbi5yaWdodC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuXG5cblxuLypDb21wb25lbnRzICovXG5cbi5tZW51LWJ0bntcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgICBcbiAgICAgICAgZmlsbDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIHRvcDogMTNweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5tZW51LWJ0biAubGluZXtcbiAgICAgICAgdHJhbnNpdGlvbjogXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4gMzAwbXMsXG4gICAgICAgICAgICByb3RhdGUgMzAwbXMgZWFzZS1pbiAsXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cbiAgICAubWVudS1idG46aG92ZXIgLmxpbmV7XG4gICAgICAgIHRyYW5zaXRpb246IFxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluLFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gMzAwbXMsXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcbiAgICB9XG5cblxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cInRydWVcIl0gLnRvcFxuICAgIHtcbiAgICAgICAgeTogNDg7XG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XG4gICAgfVxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cInRydWVcIl0gLm1pZGRsZVxuICAgIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVwidHJ1ZVwiXSAuYm90dG9tXG4gICAge1xuICAgICAgICB5OiA0ODtcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XG4gICAgfVxuXG4gICAgLm1lbnUtYnRuOmhvdmVyIDppcygudG9wLCAuYm90dG9tKXtcbiAgICAgICAgeTogNDg7XG4gICAgfVxuICAgIC5tZW51LWJ0bjpob3ZlciAudG9we1xuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xuICAgIH1cbiAgICAubWVudS1idG46aG92ZXIgLmJvdHRvbXtcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XG4gICAgfVxuICAgIC5tZW51LWJ0bjpob3ZlciAubWlkZGxle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XG4gICAgICAgIC5tZW51LWJ0bntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BLFlBQVk7O0FBRVo7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw4Q0FBOEM7O0FBRWxEO0FBQ0EsV0FBVztBQUNYO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQjs7b0NBRWdDOztBQUVwQztBQUNBOztJQUVJLEtBQUssYUFBYSxDQUFDO0lBQ25CLEdBQUcsZ0JBQWdCLENBQUM7O0FBRXhCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBLFVBQVU7QUFDVjtJQUNJLDRDQUE0QztJ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QWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJO1lBQ0ksY0FBYztRQUNsQjtJQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYmFzZS5jc3MnO1xcbkBpbXBvcnQgJy4vdHlwb2dyYXBoeS5jc3MnO1xcbkBpbXBvcnQgJy4vaGVhZGVyLmNzcyc7XFxuQGltcG9ydCAnLi9uYXZpZ2F0aW9uLmNzcyc7XFxuQGltcG9ydCAnLi91dGlsaXR5LmNzcyc7XFxuQGltcG9ydCAnLi9mb290ZXIuY3NzJztcXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLmNvbnRlbnQtY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcXG5cXG59XFxuLyogQmFubmVyICovXFxuLmJhbm5lci10aXRsZXtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxufVxcblxcbi5zdWJ0aXRsZXtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEuMnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xcbiAgICAuYmFubmVyLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuICAgIC5zdWJ0aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxufVxcbi5iYW5uZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXRcXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XFxuICAgIG1hcmdpbi10b3A6IDdyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiA1MDBtcyxcXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxcbiAgICAgICAgICAgICAgICBib3JkZXIgZWFzZS1pbiA1MDBtcztcXG5cXG59XFxuQGtleWZyYW1lcyBzbGlkZWlue1xcblxcbiAgICBmcm9te21hcmdpbi10b3A6IDA7fVxcbiAgICB0b3ttYXJnaW4tdG9wOiA3cmVtO31cXG4gICAgICAgIFxcbn1cXG5cXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXQ6aG92ZXIsIC5iYW5uZXItYnRuLW5hdi1hYm91dDpmb2N1c3tcXG4gICAgLS1jb2xvcjogcmdiKDAsIDI0NywgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxuICAgIGZpbGw6ICMwMDA7XFxufVxcblxcbi8qIEFib3V0ICovXFxuLnNlY3Rpb24tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYWJvdXQtYmFja2dyb3VuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uYWJvdXQtZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDNyZW0gMS4ycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjYpO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmFib3V0LWRlc2NyaXB0aW9uIGgye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuLmFib3V0LWRlc2NyaXB0aW9uIHB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjJyZW07XFxufVxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIFxcbn1cXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXI6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogLTEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgNDAlLCAwJSA5NSUpO1xcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xcbiAgICAuaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIH1cXG59XFxuLnByb2ZpbGUtcGljdHVyZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgLyogU29mdCB3aGl0ZSAqL1xcbn1cXG4jYWJvdXQgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qU2tpbGxzICovXFxuOnJvb3R7XFxuICAgIC0tdG90YWwtYnJhbmQ6IDEyO1xcbiAgICAtLWxvZ28td2lkdGg6IDEycmVtO1xcbiAgICAtLXRvdGFsLWxvZ28td2lkdGg6IGNhbGModmFyKC0tdG90YWwtYnJhbmQpICogdmFyKC0tbG9nby13aWR0aCkgKiAyKTtcXG59XFxuXFxuLnNraWxsLXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMC44cmVtIDEuNHJlbSAtLjJyZW0gIzAwMDE7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUsXFxuLnNsaWRlcjo6YWZ0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbn1cXG4uc2xpZGVyOjpiZWZvcmV7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXG59XFxuLnNsaWRlcjo6YWZ0ZXJ7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXG59XFxuXFxuLnNsaWRlciB1bC5icmFuZHN7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMTJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLnNsaWRlcjpob3ZlciB1bC5icmFuZHN7XFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlIC8gMikpO1xcbiAgICB9XFxufVxcblxcbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbVxcbn1cXG5cXG4uc2tpbGwtaWNvbntcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgLyogbWFyZ2luOiAwIDMwcHg7ICovXFxufVxcblxcbi8qIFdvcmsgKi9cXG5cXG4uY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxufVxcblxcbi50b3AtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tZGktaWNvbnN7XFxuICAgIGhlaWdodDogMS45cmVtO1xcbiAgICB3aWR0aDogMS45cmVtO1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4ubWRpLWljb25zOmhvdmVyLCAubWRpLWljb25zOmFjdGl2ZXtcXG4gICAgZmlsbDogdmFyKC0tKTtcXG59XFxuXFxuLmxpbmstZmlsZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogLjNyZW07XFxufVxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICAgIGdhcDogMS42cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxcbntcXG4gICAgLnByb2plY3QtY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG59XFxuXFxuLnRpdGxlLW5hbWV7XFxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkc3tcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICAvKiBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCByZ2JhKDI1LCAyNSwgMjUpO1xcbn1cXG5cXG4ucHJvamVjdC1pbWFnZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5wcm9qZWN0LWJvdHRvbXtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS4ycmVtO1xcblxcbn1cXG4ucHJvamVjdC1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbiNjb250YWN0e1xcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIHB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIH1cXG59XFxuLmNvbnRhY3QtZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgLS1zcGFjaW5nLWJpZzogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWJpZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGV7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxue1xcbiAgICAuY29udGFjdC1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbn1cXG5cXG4uY29udGFjdC1pbWFnZXtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxue1xcbiAgICAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcbiAgICB9XFxufVxcbi5zb2NpYWwtbWVkaWEtaWNvbnN7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcbi5kZXZpY29ue1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtbGlua3N7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5sZWZ0LWNvbnRhaW5lcntcXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcXG59XFxuXFxuLmxlZnQtY29udGFpbmVyIGgye1xcbiAgICAtLXNwYWNpbmctMjogMS4ycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcXG59XFxuLmxlZnQtY29udGFpbmVyIC5jb250YWN0LXN1YnRpdGxle1xcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XFxufVxcblxcbi5yaWdodC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG59XFxuXFxuXFxuXFxuLypDb21wb25lbnRzICovXFxuXFxuLm1lbnUtYnRue1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgIFxcbiAgICAgICAgZmlsbDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgICB0b3A6IDEzcHg7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYnRuIC5saW5le1xcbiAgICAgICAgdHJhbnNpdGlvbjogXFxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluIDMwMG1zLFxcbiAgICAgICAgICAgIHJvdGF0ZSAzMDBtcyBlYXNlLWluICxcXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubWVudS1idG46aG92ZXIgLmxpbmV7XFxuICAgICAgICB0cmFuc2l0aW9uOiBcXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4sXFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gMzAwbXMsXFxuICAgICAgICAgICAgb3BhY2l0eSAwbXMgMzAwbXM7XFxuICAgIH1cXG5cXG5cXG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVxcXCJ0cnVlXFxcIl0gLnRvcFxcbiAgICB7XFxuICAgICAgICB5OiA0ODtcXG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuW2FyaWEtZXhwYW5kZWQgPVxcXCJ0cnVlXFxcIl0gLm1pZGRsZVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5tZW51LWJ0blthcmlhLWV4cGFuZGVkID1cXFwidHJ1ZVxcXCJdIC5ib3R0b21cXG4gICAge1xcbiAgICAgICAgeTogNDg7XFxuICAgICAgICByb3RhdGU6IC00NWRlZztcXG4gICAgfVxcblxcbiAgICAubWVudS1idG46aG92ZXIgOmlzKC50b3AsIC5ib3R0b20pe1xcbiAgICAgICAgeTogNDg7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuOmhvdmVyIC50b3B7XFxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xcbiAgICB9XFxuICAgIC5tZW51LWJ0bjpob3ZlciAuYm90dG9te1xcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XFxuICAgIH1cXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5taWRkbGV7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuIFxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XFxuICAgICAgICAubWVudS1idG57XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tZm9udC1oZWFkaW5nOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgLS1mb250LWJvZHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4gICAgLS1jb2xvci10ZXh0OiAjMWYxZjFmO1xuICAgIC0tbGluZS1oZWlnaHQtaGVhZGluZzogMS4yO1xuICAgIC0tbGluZS1oZWlnaHQtYm9keTogMS42O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkaW5nKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuaDIge1xuICAgIGZvbnQ6IDNyZW0gc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYm9keSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGgxIHsgZm9udC1zaXplOiAyLjI1cmVtOyB9XG4gIGgyIHsgZm9udC1zaXplOiAycmVtOyB9XG4gIGgzIHsgZm9udC1zaXplOiAxLjc1cmVtOyB9XG4gIGg0IHsgZm9udC1zaXplOiAxLjVyZW07IH1cbiAgaDUgeyBmb250LXNpemU6IDEuMnJlbTsgfVxuICBwICB7IGZvbnQtc2l6ZTogMXJlbTsgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLGlDQUFpQzs7SUFFakMscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtFQUNFLEtBQUssa0JBQWtCLEVBQUU7RUFDekIsS0FBSyxlQUFlLEVBQUU7RUFDdEIsS0FBSyxrQkFBa0IsRUFBRTtFQUN6QixLQUFLLGlCQUFpQixFQUFFO0VBQ3hCLEtBQUssaUJBQWlCLEVBQUU7RUFDeEIsS0FBSyxlQUFlLEVBQUU7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9udC1oZWFkaW5nOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIC0tZm9udC1ib2R5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLS1jb2xvci10ZXh0OiAjMWYxZjFmO1xcbiAgICAtLWxpbmUtaGVpZ2h0LWhlYWRpbmc6IDEuMjtcXG4gICAgLS1saW5lLWhlaWdodC1ib2R5OiAxLjY7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWRpbmcpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkaW5nKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuaDIge1xcbiAgICBmb250OiAzcmVtIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgICBmb250OiAycmVtIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbnAge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJvZHkpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiAyLjI1cmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgaDMgeyBmb250LXNpemU6IDEuNzVyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAxLjJyZW07IH1cXG4gIHAgIHsgZm9udC1zaXplOiAxcmVtOyB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnR3by1jb2x1bW5ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdGlja3l7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xuICAgIHotaW5kZXg6IDIwO1xufVxuXG4uYmxpbmt7XG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xuICAgIDAlLFxuICAgIDUwJSxcbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyNSUsXG4gICAgNzUle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy91dGlsaXR5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0k7OztRQUdJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50d28tY29sdW1uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RpY2t5e1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXG4gICAgei1pbmRleDogMjA7XFxufVxcblxcbi5ibGlua3tcXG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xcbiAgICAwJSxcXG4gICAgNTAlLFxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAyNSUsXFxuICAgIDc1JXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXJzIHtcblxuICAgIHN0YXRpYyBsb2FkSGFuZGxlcnMgPSAoKSA9PntcbiAgICAgICAgdGhpcy5tZW51QnRuSGFuZGxlcigpO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25IYW5kbGVyKCk7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlY3Rpb25IYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuc2xpZGVySGFuZGxlcigpO1xuICAgICAgICB0aGlzLm1vYmlsZU5hdkxpbmtzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNsaWRlckhhbmRsZXIgPSAoKSA9PntcbiAgICAgICAgY29uc3QgYnJhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLmJyYW5kc1wiKSxcbiAgICAgICAgdG90YWxfYnJhbmQgPSBicmFuZHMuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3RhbC1icmFuZCcsIHRvdGFsX2JyYW5kKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG90YWxfYnJhbmQ7IGkrKyl7XG4gICAgICAgICAgICBicmFuZHMuYXBwZW5kQ2hpbGQoYnJhbmRzLmNoaWxkcmVuW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWVudUJ0bkhhbmRsZXIgPSAoKSA9PntcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktbmF2aWdhdGlvblwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT57XG5cbiAgICAgICAgICAgIGlmKG1lbnUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJmYWxzZVwiKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBoYXZlIGNsaWNrZWQgdGhpcyBidXR0b24gd2hlbiBhcmlhLWV4cGFuZGVkIHdhcyBmYWxzZS4gIE5vdyB5b3UgY2hhbmdlZCBpdCB0byB0cnVlXCIpXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBoYXZlIGNsaWNrZWQgdGhpcyBidXR0b24gd2hlbiBhcmlhLWV4cGFuZGVkIHdhcyB0cnVlLiAgTm93IHlvdSBjaGFuZ2VkIGl0IHRvIGZhbHNlXCIpXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBoYW5kbGVyKTtcbiAgICBcbiAgICB9XG4gICAgc3RhdGljIG5hdmlnYXRpb25IYW5kbGVyID0gKCkgPT57XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKChcInJlc2l6ZVwiKSwgKCkgPT57XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgaWYod2lkdGggPiA4ODApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQncyBtb3JlIHRoYW4gODgwLCB0aGUgbmF2aWdhdGlvbiBzaG91bGQgc3RheSBoaWRkZW4gdW50aWwgdGhlIGhhbWJ1cmdlciBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpOyAvL0Rpc2FibGVzIG1vYmlsZSB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTsgLy9IaWRlcyB0aGUgaGFtYnVyZ2VyIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpOyAvL01lbnUgYnV0dG9uIHNldHMgdG8gZGVmYXVsdFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpOyAvL01lbnUgYnV0dG9uIHNldHMgdG8gZGVmYXVsdFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBzY3JvbGxUb1NlY3Rpb24gPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG5hdmlnYXRpb25TZWN0aW9uSGFuZGxlciA9ICgpID0+e1xuXG4gICAgICAgIGNvbnN0IG5hdkJ0biA9IChlKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcbiAgICAgICAgbmF2LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgbmF2QnRuKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbW9iaWxlTmF2TGlua3MgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY2xvc2VOYXZpZ2F0aW9uID0gKCkgPT57XG4gICAgICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW1hcnlOYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LW5hdmlnYXRpb25cIik7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgaWYod2lkdGggPiA4ODApe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW1hcnlOYXZpZ2F0aW9uLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xuICAgICAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuICAgICAgICBsaW5rcy5mb3JFYWNoKChpdGVtKSA9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgY2xvc2VOYXZpZ2F0aW9uKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVye1xuICAgIHN0YXRpYyBsb2FkRm9vdGVyID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSAoZk5hbWUsIGxOYW1lKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgwqkgQ29weXJpZ2h0IDIwMjQsICR7Zk5hbWV9ICR7bE5hbWV9YDtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gIFxuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCJHYXJ5XCIsIFwiTGVpXCIpKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJ7XG4gICAgc3RhdGljIGxvYWRIZWFkZXIgPSAoKSA9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgLy9TdGlja3kgb24gc2Nyb2xsXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+e1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ICE9IDApe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIFxuICAgICAgICAvLyBMb2dvIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxvZ29OYW1lKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NOYW1lID0gXCJ0aXRsZS1sb2dvXCI7XG4gICAgICAgICAgICBib3guaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+PHNwYW4+JHtsb2dvTmFtZX08L3NwYW4+PC9hPmA7XG4gICAgICAgICAgICByZXR1cm4gYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFtYnVyZ2VyIG1lbnUgYnV0dG9uXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICAgICAgICAgICAgLy8gTG9hZHMgYXMgZGVmYXVsdFxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgXCJwcmltYXJ5LW5hdmlnYXRpb25cIik7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIFNldHMgdGhlIHZpc2liaWxpdHkgZGVwZW5kaW5nIG9uIHRoZSBtb2JpbGUgdmVyc2lvblxuICAgICAgICAgICAgY29uc3Qgc2V0VmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgd2luZG93LmlubmVyV2lkdGggPiA4MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJ2YXIoLS1idXR0b24tY29sb3IpXCIgY2xhc3MgPVwiaGFtYnVyZ2VyXCIgdmlld0JveCA9XCIwIDAgMTAwIDEwMFwiIHdpZHRoID1cIjMwXCIgaGVpZ2h0ID0gXCIzMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcyA9XCJsaW5lIHRvcFwiIHdpZHRoID1cIjgwXCIgaGVpZ2h0PVwiNlwiIHg9XCIxMFwiIHk9XCIzMFwiIHJ4PVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzID1cImxpbmUgbWlkZGxlXCIgd2lkdGggPVwiODBcIiBoZWlnaHQ9XCI2XCIgeD1cIjEwXCIgeT1cIjUwXCIgcng9XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3MgPVwibGluZSBib3R0b21cIiB3aWR0aCA9XCI4MFwiIGhlaWdodD1cIjZcIiB4PVwiMTBcIiB5PVwiNzBcIiByeD1cIjVcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPC9zdmc+YFxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvL05hdmlnYXRpb25cbiAgICAgICAgLy9CdWc6IFxuICAgICAgICAvL1doZW4gd2luZG93IGlzIG1pbmltaXplZCwgbmF2aWdhdGlvbiBiZWNvbWVzIGluIHZpc2libGUgd2hpY2ggaXMgb2suICBCdXQsIHdoZW4gbWF4aW1pemUgdGhlIHdpbmRvdywgbmF2aWdhdGlvbiBzdGF5cyBoaWRkZW4uXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJpbWFyeS1uYXZpZ2F0aW9uXCI7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldFZpc2liaWxpdHkgPSAoKSA9PntcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgd2luZG93LmlubmVyV2lkdGggPD0gODgwKTtcbiAgICAgICAgICAgICAgICAvLyBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCAhd2luZG93LmlubmVyV2lkdGggPD04ODApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNldFZpc2liaWxpdHkpOyAvLyBUaGlzIGZpeGVzIGZvciByZXNpemUgYnVnXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpc3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuT3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICAgICAgICAgdW5PcmRlcmVkTGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFicyA9IFt7cGFnZTogXCJhYm91dFwiLCBsaW5rOiBcImFib3V0XCJ9LCB7cGFnZTogXCJ3b3JrXCIsIGxpbms6IFwid29ya1wifSwge3BhZ2U6IFwiY29udGFjdFwiLCBsaW5rOiBcImNvbnRhY3RcIn1dXG4gICAgICAgICAgICAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwibmF2LWxpbmtzXCI+JHtpdGVtLnBhZ2V9PC9hPmA7XG4gICAgICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB1bk9yZGVyZWRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RzKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKFwiR28gR2FyeSFcIikpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbigpKTtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgIFxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59IiwiY29uc3QgcGxvdFNvY2lhbE1lZGlhSWNvbnMgPSAoKSA9PntcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gIGBzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyYDtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8bGkgY2xhc3M9XCJzb2NpYWwtbWVkaWEtaWNvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ2l0aHViLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tZ2l0aHViLW9yaWdpbmFsXCI+PC9pPjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWljb25zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnR3aXR0ZXIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi10d2l0dGVyLW9yaWdpbmFsXCI+PC9pPjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWljb25zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tbGlua2VkaW4tcGxhaW5cIj48L2k+PC9hPlxuICAgICAgICA8L2xpPlxuICAgIGA7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHBsb3RTb2NpYWxNZWRpYUljb25zOyIsImV4cG9ydCBjb25zdCB0eXBlV3JpdGVyID0gKHRpdGxlLCBlbGVtZW50KSA9PntcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRpdGxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGkgIT0gdGl0bGUubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRpdGxlLnNsaWNlKDAsIGkpICsgdGl0bGUuY2hhckF0KGkpICsgYDxzcGFuIGNsYXNzPVwiYmxpbmtcIj58PC9zcGFuPmA7XG4gICAgICAgICAgICB9LCBpICogMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgICB9LCBpICogMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxNTApKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzJztcbmltcG9ydCBiYW5uZXIgZnJvbSBcIi4uL3NlY3Rpb25zL2Jhbm5lci5qc1wiO1xuaW1wb3J0IHdvcmsgZnJvbSBcIi4uL3NlY3Rpb25zL3dvcmsuanNcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi4vc2VjdGlvbnMvYWJvdXQuanNcIjtcbmltcG9ydCBza2lsbHMgZnJvbSBcIi4uL3NlY3Rpb25zL3NraWxscy5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4uL3NlY3Rpb25zL2NvbnRhY3QuanNcIjtcbmltcG9ydCBldmVudEhhbmRsZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xuICAgIHN0YXRpYyBsb2FkUGFnZSA9ICgpID0+e1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlci5sb2FkSGVhZGVyKCkpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMubG9hZENvbnRlbnQoKSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyLmxvYWRGb290ZXIoKSk7XG5cbiAgICAgICAgZXZlbnRIYW5kbGVycy5sb2FkSGFuZGxlcnMoKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkQ29udGVudCA9ICgpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXIubG9hZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dC5sb2FkKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNraWxscy5sb2FkKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmsubG9hZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0LmxvYWQoKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG5cbiAgICB9XG59IiwiaW1wb3J0IHBsb3RTb2NpYWxNZWRpYUljb25zIGZyb20gXCIuLi9jb21wb25lbnRzL3NvY2lhbE1lZGlhSWNvbnNcIjtcbmltcG9ydCBwcm9maWxlUGljdHVyZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dHtcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY29udGFpbmVyXCIsXCJhYm91dC1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcblxuICAgICAgICBjb25zdCBpbWFnZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5jbGFzc05hbWUgPVwiaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJcIjtcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmxvYWRJbWFnZSgpKTtcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aGlzLnBlcnNvbmFsRGVzY3JpcHRpb24oKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZURlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGVyc29uYWxEZXNjcmlwdGlvbiA9ICgpID0+e1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKCkgPT57XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBtZVwiO1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBcIkkgYW0gY3VycmVudGx5IGxpdmluZyBvbiB0aGUgYmVhdXRpZnVsIGlzbGFuZCBvZiBUYWl3YW4sIHRlYWNoaW5nIHN0dWRlbnRzIEVuZ2xpc2ggYXMgdGhlaXIgc2Vjb25kIGxhbmd1YWdlLiBJbiBteSBmcmVlIHRpbWUsIEkgZW5qb3kgbG9uZyBydW5zLiBSdW5uaW5nIGhlbHBzIG1lIHJlZmxlY3Qgb24gbGlmZSwgcHJvdmlkaW5nIG1lIHdpdGggdGhlIHRpbWUgYW5kIHNwYWNlIGZvciBkZWVwIHRoaW5raW5nLiBXaGVuIEkgYW0gbm90IHJ1bm5pbmcsIEkgYW0gY29kaW5nLiBJIGJlZ2FuIGNvZGluZyBpbiBoaWdoIHNjaG9vbCBhbmQgY29sbGVnZSwgYnV0IG5ldmVyIG1hbmFnZWQgdG8gZmluaXNoIHdoYXQgSSBzdGFydGVkLiBOb3csIEkgaGF2ZSBkZXZlbG9wZWQgYSBrZWVuIGludGVyZXN0IGluIGNvbXB1dGVyIGxhbmd1YWdlcyBhbmQgYXNwaXJlIHRvIGRlZGljYXRlIG15c2VsZiB0byBjcmVhdGluZyBhcHBzLCBob3BlZnVsbHkgY29udHJpYnV0aW5nIHRvIHRoZSBjb21tdW5pdHkuXCI7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdFNvY2lhbE1lZGlhSWNvbnMoXCJhYm91dFwiKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRJbWFnZSA9ICgpID0+e1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBwcm9maWxlUGljdHVyZTtcbiAgICAgICAgaW1hZ2UuYWx0ID0gXCJBIHBvcnRyYWl0IGZvciBtZVwiO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBcInByb2ZpbGUtcGljdHVyZVwiO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxufSIsImltcG9ydCB7IHR5cGVXcml0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBld3JpdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbm5lcntcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1jb250YWluZXJcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zdWJUZXh0KCkpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJhbm5lckhhbmRsZXJCdG4oKSk7XG4gICAgICAgIH0sIDcwMDApO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHRpdGxlID0gXCJIaSwgbXkgbmFtZSBpcyBHYXJ5XCI7XG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGVUZXh0LmNsYXNzTmFtZSA9IFwiYmFubmVyLXRpdGxlXCI7XG5cbiAgICAgICAgIHR5cGVXcml0ZXIodGl0bGUsIHRpdGxlVGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlVGV4dDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3ViVGV4dCA9ICgpID0+e1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IFwiQSB3ZWIgZGV2ZWxvcGVyIGFuZCBhbiBFU0wgdGVhY2hlclwiXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidHlwZVdyaXRlclwiLCBcInN1YnRpdGxlXCIpO1xuICAgICAgICBcbiAgICAgICAgdHlwZVdyaXRlcihzdWJ0aXRsZSwgdGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGJhbm5lckhhbmRsZXJCdG4gPSAoKSA9PntcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItYnRuLW5hdi1hYm91dFwiKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5hcnJvdy1kb3duLXRoaWNrPC90aXRsZT48cGF0aCBkPVwiTTEwLDRIMTRWMTNMMTcuNSw5LjVMMTkuOTIsMTEuOTJMMTIsMTkuODRMNC4wOCwxMS45Mkw2LjUsOS41TDEwLDEzVjRaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICBgXG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBzY3JvbGxUb1NlY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG5cbn0iLCJcbmltcG9ydCBwbG90U29jaWFsTWVkaWFJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zXCI7XG5pbXBvcnQgY29udGFjdEltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0e1xuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSB7YWRkcmVzczogXCIxMjM0IFNtaXRoIFN0cmVldCBNaWFtaSwgRmxvcmlkYSAzMzE1NlwiLCBwaG9uZTogXCI1NTUtNTU1LTU1NTVcIiwgZW1haWw6IFwiZzEyMzQ1NkBtYWlsLmNvbVwifTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHRoaXMuY29udGVudChjb250YWN0KSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtY29udGFpbmVyXCIpO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0aGlzLnBsb3RJbWFnZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBNZVwiO1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgc3RhdGljIHBsb3RJbWFnZSA9ICgpID0+e1xuICAgICAgICBjb25zdCBjcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltYWdlXCIpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0SW1nO1xuXG4gICAgICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZURpdjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGVudCA9IChjb250YWN0KSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc3VidGl0bGVcIik7XG4gICAgICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZ2V0IGluIHRvdWNoIGlmIHlvdSB0aGluayBvdXIgd29yayBjb3VsZCBiZSBtdXR1YWxseSBiZW5lZmljaWFsLlwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxvdENvbnRhY3RJbmZvID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bWFwLW1hcmtlci1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsNi41QTIuNSwyLjUgMCAwLDEgMTQuNSw5QTIuNSwyLjUgMCAwLDEgMTIsMTEuNUEyLjUsMi41IDAgMCwxIDkuNSw5QTIuNSwyLjUgMCAwLDEgMTIsNi41TTEyLDJBNyw3IDAgMCwxIDE5LDlDMTksMTQuMjUgMTIsMjIgMTIsMjJDMTIsMjIgNSwxNC4yNSA1LDlBNyw3IDAgMCwxIDEyLDJNMTIsNEE1LDUgMCAwLDAgNyw5QzcsMTAgNywxMiAxMiwxOC43MUMxNywxMiAxNywxMCAxNyw5QTUsNSAwIDAsMCAxMiw0WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnBob25lPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjUsMjJDMjAuMzMsMjIgMjEsMjEuMzMgMjEsMjAuNVYxN0MyMSwxNi4xNyAyMC4zMywxNS41IDE5LjUsMTUuNUMxOC4zMywxNS41IDE3LjE4LDE1LjMyIDE2LjA4LDE0Ljk1QzE1LjU1LDE0Ljc4IDE0Ljk3LDE0LjkyIDE0LjU2LDE1LjMyTDEzLjEyLDE2Ljc2QzEwLjY0LDE1LjQxIDguNTcsMTMuMzQgNy4yMywxMC44N0w4LjY2LDkuNDRDOS4wNyw5LjA1IDkuMjIsOC40NyA5LjA0LDcuOTFDOC42OCw2LjgyIDguNSw1LjY3IDguNSw0LjVDOC41LDMuNjcgNy44MywzIDcsM0gzLjVDMi42NywzIDIsMy42NyAyLDQuNUMyLDE0LjE1IDkuODUsMjIgMTkuNSwyMk0zLjUsNEg3QzcuMjgsNCA3LjUsNC4yMiA3LjUsNC41QzcuNSw1Ljc4IDcuNyw3LjAzIDguMDksOC4yMkM4LjE0LDguMzYgOC4xMyw4LjU2IDcuOTcsOC43Mkw2LDEwLjY4QzcuNjUsMTMuOTEgMTAuMDcsMTYuMzMgMTMuMzEsMThMMTUuMjYsMTYuMDNDMTUuNCwxNS44OSAxNS41OSwxNS44NSAxNS43NywxNS45QzE2Ljk3LDE2LjMgMTguMjIsMTYuNSAxOS41LDE2LjVDMTkuNzgsMTYuNSAyMCwxNi43MiAyMCwxN1YyMC41QzIwLDIwLjc4IDE5Ljc4LDIxIDE5LjUsMjFDMTAuNCwyMSAzLDEzLjYgMyw0LjVDMyw0LjIyIDMuMjIsNCAzLjUsNFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QucGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZW1haWwtb3V0bGluZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDZDMjIgNC45IDIxLjEgNCAyMCA0SDRDMi45IDQgMiA0LjkgMiA2VjE4QzIgMTkuMSAyLjkgMjAgNCAyMEgyMEMyMS4xIDIwIDIyIDE5LjEgMjIgMThWNk0yMCA2TDEyIDExTDQgNkgyME0yMCAxOEg0VjhMMTIgMTNMMjAgOFYxOFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdENvbnRhY3RJbmZvKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdFNvY2lhbE1lZGlhSWNvbnMoXCJjb250YWN0XCIpKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIFxufSIsImNvbnN0IGljb25zID0gW2A8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPHBhdGggZmlsbD1cIiNFNDREMjZcIiBkPVwiTTE5LjAzNyAxMTMuODc2TDkuMDMyIDEuNjYxaDEwOS45MzZsLTEwLjAxNiAxMTIuMTk4LTQ1LjAxOSAxMi40OHpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNGMTY1MjlcIiBkPVwiTTY0IDExNi44bDM2LjM3OC0xMC4wODYgOC41NTktOTUuODc4SDY0elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI0VCRUJFQlwiIGQ9XCJNNjQgNTIuNDU1SDQ1Ljc4OEw0NC41MyAzOC4zNjFINjRWMjQuNTk5SDI5LjQ4OWwuMzMgMy42OTIgMy4zODIgMzcuOTI3SDY0em0wIDM1Ljc0M2wtLjA2MS4wMTctMTUuMzI3LTQuMTQtLjk3OS0xMC45NzVIMzMuODE2bDEuOTI4IDIxLjYwOSAyOC4xOTMgNy44MjYuMDYzLS4wMTd6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02My45NTIgNTIuNDU1djEzLjc2M2gxNi45NDdsLTEuNTk3IDE3Ljg0OS0xNS4zNSA0LjE0M3YxNC4zMTlsMjguMjE1LTcuODIuMjA3LTIuMzI1IDMuMjM0LTM2LjIzMy4zMzUtMy42OTZoLTMuNzA4em0wLTI3Ljg1NnYxMy43NjJoMzMuMjQ0bC4yNzYtMy4wOTIuNjI4LTYuOTc4LjMyOS0zLjY5MnpcIj48L3BhdGg+XG48L3N2Zz5gLFxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XG48cGF0aCBmaWxsPVwiIzEzMTMxM1wiIGQ9XCJNODkuMjM0IDUuODU2SDgxLjg1bDcuNjc5IDguMzMzdjMuOTY3SDczLjcxM3YtNC42NDVoNy42NzhsLTcuNjc4LTguMzMzVjEuMjA3aDE1LjUyMXY0LjY0OXptLTE4LjY1NyAwaC03LjM4NGw3LjY3OSA4LjMzM3YzLjk2N0g1NS4wNTV2LTQuNjQ1aDcuNjc5bC03LjY3OS04LjMzM1YxLjIwN2gxNS41MjJ2NC42NDl6bS0xOC40NzQuMTloLTcuOTY4djcuMjcxaDcuOTY4djQuODM5SDM4LjQ3MVYxLjIwN2gxMy42MzJ2NC44Mzl6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjMTU3MkI2XCIgZD1cIk0yNy42MTMgMTE2LjcwNmwtOC4wOTctOTAuODEzaDg4Ljk2N2wtOC4xMDQgOTAuNzk4LTM2LjQzNCAxMC4xMDItMzYuMzMyLTEwLjA4N3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMzM0E5RENcIiBkPVwiTTY0LjAwMSAxMTkuMDcybDI5LjQzOS04LjE2MiA2LjkyNi03Ny41OTFINjQuMDAxdjg1Ljc1M3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTY0IDY2LjIyaDE0LjczOGwxLjAxOS0xMS40MDVINjRWNDMuNjc3aDI3LjkyOWwtLjI2NyAyLjk4OC0yLjczNyAzMC42OTJINjRWNjYuMjJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRUJFQkVCXCIgZD1cIk02NC4wNjcgOTUuMTQ2bC0uMDQ5LjAxNC0xMi40MDQtMy4zNS0uNzk0LTguODgzSDM5LjY0MWwxLjU2MSAxNy40ODggMjIuODE0IDYuMzMzLjA1Mi0uMDE1Vjk1LjE0NnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTc3Ljc5MiA3Ni44ODZMNzYuNDUgOTEuODAybC0xMi40MjIgMy4zNTN2MTEuNTg4bDIyLjgzMy02LjMyOC4xNjgtMS44ODIgMS45MzgtMjEuNjQ3SDc3Ljc5MnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNFQkVCRUJcIiBkPVwiTTY0LjAzOSA0My42Nzd2MTEuMTM3SDM3LjEzNmwtLjIyNC0yLjUwMy0uNTA3LTUuNjQ2LS4yNjctMi45ODhoMjcuOTAxek02NCA2Ni4yMjF2MTEuMTM4SDUxLjc1M2wtLjIyMy0yLjUwMy0uNTA4LTUuNjQ3LS4yNjctMi45ODhINjR6XCI+PC9wYXRoPlxuPC9zdmc+YCxcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPHBhdGggZmlsbD1cIiNGMERCNEZcIiBkPVwiTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMzMjMzMzBcIiBkPVwiTTExNi4zNDcgOTYuNzM2Yy0uOTE3LTUuNzExLTQuNjQxLTEwLjUwOC0xNS42NzItMTQuOTgxLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2LS40NTItMS42OS0uNTEyLTIuNjQyLS4yMjYtMy42NjUuODIxLTMuMzIgNC43ODQtNC4zNTUgNy45MjUtMy40MDMgMi4wMjMuNjc4IDMuOTM4IDIuMjM3IDUuMDkzIDQuNzI0IDUuNDAyLTMuNDk4IDUuMzkxLTMuNDc1IDkuMTYzLTUuODc5LTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1LTMuMjQ5LTMuNjI5LTcuNjc2LTUuNDk4LTE0Ljc1Ni01LjM1NWwtMy42ODguNDc3Yy0zLjUzNC44OTMtNi45MDIgMi43NDgtOC44NzcgNS4yMzUtNS45MjYgNi43MjQtNC4yMzYgMTguNDkyIDIuOTc1IDIzLjMzNSA3LjEwNCA1LjMzMiAxNy41NCA2LjU0NSAxOC44NzMgMTEuNTMxIDEuMjk3IDYuMTA0LTQuNDg2IDguMDgtMTAuMjM0IDcuMzc4LTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDktNC42ODggMi43MTMtNC42ODggMi43MTMtOS41MDggNS40ODUgMS4xNDMgMi40OTkgMi4zNDQgMy42MyA0LjI2IDUuNzk1IDkuMDY4IDkuMTk4IDMxLjc2IDguNzQ2IDM1LjgzLTUuMTc2LjE2NS0uNDc4IDEuMjYxLTMuNjY2LjM4LTguNTgxek02OS40NjIgNTguOTQzSDU3Ljc1M2wtLjA0OCAzMC4yNzJjMCA2LjQzOC4zMzMgMTIuMzQtLjcxNCAxNC4xNDktMS43MTMgMy41NTgtNi4xNTIgMy4xMTctOC4xNzUgMi40MjctMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODUtLjMzMy0uNTg0LS41ODMtMS4wMzYtLjY2Ny0xLjA3MWwtOS41MiA1LjgzYzEuNTgzIDMuMjQ5IDMuOTE1IDYuMDY5IDYuOTAyIDcuOTAxIDQuNDYyIDIuNjc4IDEwLjQ1OSAzLjQ5OSAxNi43MzEgMi4wNTkgNC4wODItMS4xODkgNy42MDQtMy42NTIgOS40NDgtNy40MDEgMi42NjYtNC45MTUgMi4wOTQtMTAuODY0IDIuMDctMTcuNDQ0LjA2LTEwLjczNS4wMDEtMjEuNDY4LjAwMS0zMi4yMzd6XCI+PC9wYXRoPlxuPC9zdmc+YCxcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPGcgZmlsbD1cIiM2MURBRkJcIj48Y2lyY2xlIGN4PVwiNjRcIiBjeT1cIjY0XCIgcj1cIjExLjRcIj48L2NpcmNsZT48cGF0aCBkPVwiTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNSA3LjEtMi40LjctNC43IDEuNC02LjkgMi4zQzguMiA1MCAxLjQgNTYuNiAxLjQgNjRzNi45IDE0IDE5LjMgMTguOGMyLjIuOCA0LjUgMS42IDYuOSAyLjMtLjYgMi40LTEuMSA0LjgtMS41IDcuMS0yLjEgMTMuMi4yIDIyLjUgNi42IDI2LjEgMS45IDEuMSA0IDEuNiA2LjQgMS42IDcuMSAwIDE2LTUuMiAyNC45LTEzLjkgOSA4LjcgMTcuOSAxMy45IDI0LjkgMTMuOSAyLjQgMCA0LjUtLjUgNi40LTEuNiA2LjQtMy43IDguNy0xMyA2LjYtMjYuMS0uNC0yLjMtLjktNC43LTEuNS03LjEgMi40LS43IDQuNy0xLjQgNi45LTIuMyAxMi41LTQuOCAxOS4zLTExLjQgMTkuMy0xOC44cy02LjgtMTQtMTkuMy0xOC44ek05Mi41IDE0LjdjNC4xIDIuNCA1LjUgOS44IDMuOCAyMC4zLS4zIDIuMS0uOCA0LjMtMS40IDYuNi01LjItMS4yLTEwLjctMi0xNi41LTIuNS0zLjQtNC44LTYuOS05LjEtMTAuNC0xMyA3LjQtNy4zIDE0LjktMTIuMyAyMS0xMi4zIDEuMyAwIDIuNS4zIDMuNS45ek04MS4zIDc0Yy0xLjggMy4yLTMuOSA2LjQtNi4xIDkuNi0zLjcuMy03LjQuNC0xMS4yLjQtMy45IDAtNy42LS4xLTExLjItLjQtMi4yLTMuMi00LjItNi40LTYtOS42LTEuOS0zLjMtMy43LTYuNy01LjMtMTAgMS42LTMuMyAzLjQtNi43IDUuMy0xMCAxLjgtMy4yIDMuOS02LjQgNi4xLTkuNiAzLjctLjMgNy40LS40IDExLjItLjQgMy45IDAgNy42LjEgMTEuMi40IDIuMiAzLjIgNC4yIDYuNCA2IDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNi01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnpNNjQgOTcuOGMtMi40LTIuNi00LjctNS40LTYuOS04LjMgMi4zLjEgNC42LjIgNi45LjIgMi4zIDAgNC42LS4xIDYuOS0uMi0yLjIgMi45LTQuNSA1LjctNi45IDguM3ptLTE4LjYtMTVjLTMuOC0uNS03LjQtMS4xLTEwLjgtMS45IDEuMS0zLjMgMi4zLTYuOCAzLjgtMTAuMyAxLjEgMiAyLjIgNC4xIDMuNCA2LjEgMS4yIDIuMiAyLjQgNC4xIDMuNiA2LjF6bS03LTI1LjVjLTEuNS0zLjUtMi43LTYuOS0zLjgtMTAuMyAzLjQtLjggNy0xLjQgMTAuOC0xLjktMS4yIDEuOS0yLjUgMy45LTMuNiA2LTEuMiAyLjEtMi4zIDQuMi0zLjQgNi4yek02NCAzMC4yYzIuNCAyLjYgNC43IDUuNCA2LjkgOC4zLTIuMy0uMS00LjYtLjItNi45LS4yLTIuMyAwLTQuNi4xLTYuOS4yIDIuMi0yLjkgNC41LTUuNyA2LjktOC4zem0yMi4yIDIxbC0zLjYtNmMzLjguNSA3LjQgMS4xIDEwLjggMS45LTEuMSAzLjMtMi4zIDYuOC0zLjggMTAuMy0xLjEtMi4xLTIuMi00LjItMy40LTYuMnpNMzEuNyAzNWMtMS43LTEwLjUtLjMtMTcuOSAzLjgtMjAuMyAxLS42IDIuMi0uOSAzLjUtLjkgNiAwIDEzLjUgNC45IDIxIDEyLjMtMy41IDMuOC03IDguMi0xMC40IDEzLTUuOC41LTExLjMgMS40LTE2LjUgMi41LS42LTIuMy0xLTQuNS0xLjQtNi42ek03IDY0YzAtNC43IDUuNy05LjcgMTUuNy0xMy40IDItLjggNC4yLTEuNSA2LjQtMi4xIDEuNiA1IDMuNiAxMC4zIDYgMTUuNi0yLjQgNS4zLTQuNSAxMC41LTYgMTUuNUMxNS4zIDc1LjYgNyA2OS42IDcgNjR6bTI4LjUgNDkuM2MtNC4xLTIuNC01LjUtOS44LTMuOC0yMC4zLjMtMi4xLjgtNC4zIDEuNC02LjYgNS4yIDEuMiAxMC43IDIgMTYuNSAyLjUgMy40IDQuOCA2LjkgOS4xIDEwLjQgMTMtNy40IDcuMy0xNC45IDEyLjMtMjEgMTIuMy0xLjMgMC0yLjUtLjMtMy41LS45ek05Ni4zIDkzYzEuNyAxMC41LjMgMTcuOS0zLjggMjAuMy0xIC42LTIuMi45LTMuNS45LTYgMC0xMy41LTQuOS0yMS0xMi4zIDMuNS0zLjggNy04LjIgMTAuNC0xMyA1LjgtLjUgMTEuMy0xLjQgMTYuNS0yLjUuNiAyLjMgMSA0LjUgMS40IDYuNnptOS0xNS42Yy0yIC44LTQuMiAxLjUtNi40IDIuMS0xLjYtNS0zLjYtMTAuMy02LTE1LjYgMi40LTUuMyA0LjUtMTAuNSA2LTE1LjUgMTMuOCA0IDIyLjEgMTAgMjIuMSAxNS42IDAgNC43LTUuOCA5LjctMTUuNyAxMy40elwiPjwvcGF0aD48L2c+XG48L3N2Zz5gLFxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XG48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJhXCIgeDE9XCI3Ni4wNzlcIiB4Mj1cIjUyMy40OFwiIHkxPVwiMTAuNzk4XCIgeTI9XCIzNjUuOTVcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjExIDE0LjYxMykgc2NhbGUoLjI0NTY2KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzkwMTNmZVwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM2NjEwZjJcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9XCJiXCIgeDE9XCIxOTMuNTFcIiB4Mj1cIjI5My41MVwiIHkxPVwiMTA5Ljc0XCIgeTI9XCIyNzguODdcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDUyKVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmMWU1ZmNcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPVwiY1wiIHdpZHRoPVwiMTk3XCIgaGVpZ2h0PVwiMjQ5XCIgeD1cIjE2MS45XCIgeT1cIjEzNS40NlwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIj48L2ZlRmxvb2Q+PGZlQ29sb3JNYXRyaXggaW49XCJTb3VyY2VBbHBoYVwiIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCI+PC9mZUNvbG9yTWF0cml4PjxmZU9mZnNldCBkeT1cIjRcIj48L2ZlT2Zmc2V0PjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCI4XCI+PC9mZUdhdXNzaWFuQmx1cj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDBcIj48L2ZlQ29sb3JNYXRyaXg+PGZlQmxlbmQgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwiZWZmZWN0MV9kcm9wU2hhZG93XCI+PC9mZUJsZW5kPjxmZUJsZW5kIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImVmZmVjdDFfZHJvcFNoYWRvd1wiIHJlc3VsdD1cInNoYXBlXCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBmaWxsPVwidXJsKCNhKVwiIGQ9XCJNMTQuOTg1IDI3LjcxMmMtLjIzNy02LjgxNSA1LjA3Mi0xMy4wOTkgMTIuMjQ5LTEzLjA5OWg3My41NGM3LjE3NyAwIDEyLjQ4NiA2LjI4NCAxMi4yNDkgMTMuMDk5LS4yMjggNi41NDYuMDY4IDE1LjAyNiAyLjIwMiAyMS45NCAyLjE0MSA2LjkzNiA1Ljc1MSAxMS4zMTkgMTEuNjY0IDExLjg4M3Y2LjM4N2MtNS45MTMuNTY0LTkuNTIzIDQuOTQ3LTExLjY2NCAxMS44ODMtMi4xMzQgNi45MTQtMi40MyAxNS4zOTQtMi4yMDIgMjEuOTQuMjM3IDYuODE1LTUuMDcyIDEzLjA5OC0xMi4yNDkgMTMuMDk4aC03My41NGMtNy4xNzcgMC0xMi40ODYtNi4yODQtMTIuMjQ5LTEzLjA5OC4yMjgtNi41NDYtLjA2OC0xNS4wMjYtMi4yMDMtMjEuOTQtMi4xNC02LjkzNS01Ljc2LTExLjMxOS0xMS42NzMtMTEuODgzdi02LjM4N2M1LjkxMy0uNTYzIDkuNTMzLTQuOTQ3IDExLjY3My0xMS44ODMgMi4xMzUtNi45MTQgMi40My0xNS4zOTQgMi4yMDMtMjEuOTR6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJ1cmwoI2IpXCIgZD1cIk0yNjcuMSAzNjQuNDZjNDcuMjk3IDAgNzUuNzk4LTIzLjE1OCA3NS43OTgtNjEuMzU1IDAtMjguODczLTIwLjMzNi00OS43NzYtNTAuNTMyLTUzLjA4NXYtMS4yMDNjMjIuMTg1LTMuNjA5IDM5LjU5NC0yNC4yMTEgMzkuNTk0LTQ3LjIxOSAwLTMyLjc4My0yNS44ODItNTQuMTM4LTY1LjMyMi01NC4xMzhoLTg4Ljc0djIxN3ptLTU0LjY5Mi0xODkuNDhoNDUuOTExYzI0Ljk1OCAwIDM5LjEzMSAxMS4xMjggMzkuMTMxIDMxLjI3OSAwIDIxLjUwNS0xNi40ODQgMzMuNTM1LTQ2LjM3MiAzMy41MzVoLTM4LjY3em0wIDE2MS45NnYtNzEuNDMxaDQ1LjYwMmMzMi42NjEgMCA0OS42MDggMTIuMDMgNDkuNjA4IDM1LjQ5IDAgMjMuNDU5LTE2LjQ4NCAzNS45NDEtNDcuNjA1IDM1Ljk0MXpcIiBmaWx0ZXI9XCJ1cmwoI2MpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuNDk0IDIuMjAzKSBzY2FsZSguMjQ1NjYpXCI+PC9wYXRoPlxuPC9zdmc+YCxcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPHBhdGggZmlsbD1cIiMwYWNmODNcIiBkPVwiTTQ1LjUgMTI5YzExLjkgMCAyMS41LTkuNiAyMS41LTIxLjVWODZINDUuNUMzMy42IDg2IDI0IDk1LjYgMjQgMTA3LjVTMzMuNiAxMjkgNDUuNSAxMjl6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2EyNTlmZlwiIGQ9XCJNMjQgNjQuNUMyNCA1Mi42IDMzLjYgNDMgNDUuNSA0M0g2N3Y0M0g0NS41QzMzLjYgODYgMjQgNzYuNCAyNCA2NC41em0wIDBcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmMjRlMWVcIiBkPVwiTTI0IDIxLjVDMjQgOS42IDMzLjYgMCA0NS41IDBINjd2NDNINDUuNUMzMy42IDQzIDI0IDMzLjQgMjQgMjEuNXptMCAwXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmY3MjYyXCIgZD1cIk02NyAwaDIxLjVDMTAwLjQgMCAxMTAgOS42IDExMCAyMS41UzEwMC40IDQzIDg4LjUgNDNINjd6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzFhYmNmZVwiIGQ9XCJNMTEwIDY0LjVjMCAxMS45LTkuNiAyMS41LTIxLjUgMjEuNVM2NyA3Ni40IDY3IDY0LjUgNzYuNiA0MyA4OC41IDQzIDExMCA1Mi42IDExMCA2NC41em0wIDBcIj48L3BhdGg+XG48L3N2Zz5gLFxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XG48ZyBmaWxsPVwiIzE4MTYxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02NCAxLjUxMmMtMjMuNDkzIDAtNDIuNTQ1IDE5LjA0Ny00Mi41NDUgNDIuNTQ1IDAgMTguNzk3IDEyLjE5IDM0Ljc0NSAyOS4wOTUgNDAuMzcgMi4xMjYuMzk0IDIuOTA3LS45MjMgMi45MDctMi4wNDcgMC0xLjAxNC0uMDQtNC4zNjYtLjA1OC03LjkyLTExLjgzNyAyLjU3My0xNC4zMzQtNS4wMi0xNC4zMzQtNS4wMi0xLjkzNS00LjkxOC00LjcyNC02LjIyNi00LjcyNC02LjIyNi0zLjg2LTIuNjQuMjktMi41ODYuMjktMi41ODYgNC4yNzMuMyA2LjUyMyA0LjM4NSA2LjUyMyA0LjM4NSAzLjc5NCA2LjUwNCA5Ljk1MyA0LjYyMyAxMi4zOCAzLjUzNi4zODMtMi43NSAxLjQ4NS00LjYyOCAyLjcwMi01LjY5LTkuNDUtMS4wNzUtMTkuMzg0LTQuNzI0LTE5LjM4NC0yMS4wMjYgMC00LjY0NSAxLjY2Mi04LjQ0IDQuMzg0LTExLjQyLS40NDItMS4wNzItMS44OTgtNS40LjQxMi0xMS4yNiAwIDAgMy41NzItMS4xNDIgMTEuNyA0LjM2MyAzLjM5NS0uOTQzIDcuMDM1LTEuNDE2IDEwLjY1LTEuNDMyIDMuNjE2LjAxNyA3LjI1OC40OSAxMC42NTggMS40MzIgOC4xMi01LjUwNCAxMS42ODgtNC4zNjIgMTEuNjg4LTQuMzYyIDIuMzE2IDUuODYuODYgMTAuMTg3LjQxOCAxMS4yNiAyLjcyOCAyLjk3OCA0LjM3OCA2Ljc3NCA0LjM3OCAxMS40MiAwIDE2LjM0LTkuOTUzIDE5LjkzOC0xOS40MjcgMjAuOTkgMS41MjYgMS4zMiAyLjg4NiAzLjkxIDIuODg2IDcuODggMCA1LjY5Mi0uMDQ4IDEwLjI3My0uMDQ4IDExLjY3NCAwIDEuMTMuNzY2IDIuNDU4IDIuOTIyIDIuMDQgMTYuODk2LTUuNjMyIDI5LjA3LTIxLjU3NCAyOS4wNy00MC4zNjVDMTA2LjU0NSAyMC41NiA4Ny40OTcgMS41MTIgNjQgMS41MTJ6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMzcuNTcgNjIuNTk2Yy0uMDk1LjIxMi0uNDI4LjI3NS0uNzMuMTMtLjMxLS4xNC0uNDgyLS40MjctLjM4Mi0uNjQuMDktLjIxNi40MjQtLjI3Ny43MzMtLjEzMi4zMS4xNC40ODYuNDMuMzguNjQyek0zOS4yOTMgNjQuNTJjLS4yMDMuMTg3LS42LjEtLjg3LS4xOTgtLjI3OC0uMjk3LS4zMy0uNjk0LS4xMjQtLjg4NC4yMDgtLjE4OC41OTMtLjEuODcuMTk3LjI4LjMuMzM1LjY5My4xMjMuODg0em0xLjY3NyAyLjQ0OGMtLjI2LjE4Mi0uNjg3LjAxMi0uOTUtLjM2Ny0uMjYyLS4zNzctLjI2Mi0uODMuMDA1LTEuMDEzLjI2NC0uMTgyLjY4NC0uMDE4Ljk1LjM1Ny4yNjIuMzg1LjI2Mi44NC0uMDA1IDEuMDI0em0yLjI5OCAyLjM2OGMtLjIzMy4yNTctLjczLjE4OC0xLjA5My0uMTYzLS4zNzItLjM0My0uNDc1LS44My0uMjQyLTEuMDg3LjIzNy0uMjU3LjczNi0uMTg1IDEuMTAyLjE2My4zNy4zNDIuNDgyLjgzLjIzMyAxLjA4NnptMy4xNzIgMS4zNzRjLS4xMDQuMzM0LS41ODIuNDg1LTEuMDY0LjM0NC0uNDgyLS4xNDYtLjc5Ni0uNTM2LS43LS44NzIuMS0uMzM2LjU4Mi0uNDkzIDEuMDY3LS4zNDIuNDguMTQ0Ljc5NS41My42OTYuODd6bTMuNDguMjU1Yy4wMTMuMzUtLjM5Ni42NDItLjkwMi42NDgtLjUwOC4wMTItLjkyLS4yNzItLjkyNi0uNjE4IDAtLjM1NC40LS42NDIuOTA4LS42NS41MDYtLjAxLjkyLjI3Mi45Mi42MnptMy4yNC0uNTUxYy4wNi4zNDItLjI5LjY5NC0uNzkzLjc4Ny0uNDk0LjA5Mi0uOTUtLjEyLTEuMDE0LS40Ni0uMDYtLjM1LjI5Ny0uNy43OS0uNzkyLjUwMy0uMDg4Ljk1My4xMTggMS4wMTcuNDY2em0wIDBcIj48L3BhdGg+PC9nPjxwYXRoIGQ9XCJNMjQuODU1IDEwOC4zMDJoLTEwLjdhLjUuNSAwIDAwLS41LjV2NS4yMzJhLjUuNSAwIDAwLjUuNWg0LjE3M3Y2LjVzLS45MzcuMzItMy41My4zMmMtMy4wNTYgMC03LjMyNy0xLjExNi03LjMyNy0xMC41MDggMC05LjM5MyA0LjQ0OC0xMC42MyA4LjYyNC0xMC42MyAzLjYxNCAwIDUuMTcuNjM2IDYuMTYyLjk0My4zMS4wOTQuNi0uMjE2LjYtLjQ5MmwxLjE5My01LjA1NWEuNDY4LjQ2OCAwIDAwLS4xOTItLjM5Yy0uNDAzLS4yODgtMi44NTctMS42Ni05LjA1OC0xLjY2LTcuMTQ0IDAtMTQuNDcyIDMuMDM4LTE0LjQ3MiAxNy42NSAwIDE0LjYxIDguMzkgMTYuNzg3IDE1LjQ2IDE2Ljc4NyA1Ljg1NCAwIDkuNDA1LTIuNTAyIDkuNDA1LTIuNTAyLjE0Ni0uMDguMTYyLS4yODUuMTYyLS4zOHYtMTYuMzE2YS41LjUgMCAwMC0uNS0uNXpNNzkuNTA2IDk0LjgxSDczLjQ4YS41LjUgMCAwMC0uNDk4LjUwM2wuMDAyIDExLjY0NGgtOS4zOTJWOTUuMzEzYS41LjUgMCAwMC0uNDk3LS41MDNINTcuMDdhLjUuNSAwIDAwLS40OTguNTAzdjMxLjUzYzAgLjI3Ny4yMjQuNTAzLjQ5OC41MDNoNi4wMjVhLjUuNSAwIDAwLjQ5Ny0uNTA0di0xMy40ODZoOS4zOTJsLS4wMTYgMTMuNDg2YzAgLjI3OC4yMjQuNTA0LjUuNTA0aDYuMDM4YS41LjUgMCAwMC40OTctLjUwNHYtMzEuNTNhLjQ5Ny40OTcgMCAwMC0uNDk3LS41MDJ6bS00Ny4xNjYuNzE3Yy0yLjE0NCAwLTMuODg0IDEuNzUzLTMuODg0IDMuOTIzIDAgMi4xNjcgMS43NCAzLjkyNSAzLjg4NCAzLjkyNSAyLjE0NiAwIDMuODg1LTEuNzU4IDMuODg1LTMuOTI1IDAtMi4xNy0xLjc0LTMuOTIzLTMuODg1LTMuOTIzem0yLjk1NiA5LjYwOEgyOS4yOWMtLjI3NiAwLS41MjIuMjg0LS41MjIuNTZ2MjAuODUyYzAgLjYxMy4zODIuNzk1Ljg3Ni43OTVoNS40MWMuNTk1IDAgLjc0LS4yOTIuNzQtLjgwNXYtMjAuODk5YS41LjUgMCAwMC0uNDk4LS41MDJ6bTY3LjYwNi4wNDdoLTUuOThhLjUuNSAwIDAwLS40OTYuNTA0djE1LjQ2cy0xLjUyIDEuMTEtMy42NzUgMS4xMS0yLjcyNy0uOTc3LTIuNzI3LTMuMDg4di0xMy40ODJhLjUuNSAwIDAwLS40OTctLjUwNGgtNi4wNjhhLjUwMi41MDIgMCAwMC0uNDk4LjUwNHYxNC41MDJjMCA2LjI3IDMuNDk1IDcuODA0IDguMzAyIDcuODA0IDMuOTQ0IDAgNy4xMjQtMi4xOCA3LjEyNC0yLjE4cy4xNSAxLjE1LjIyIDEuMjg1Yy4wNy4xMzYuMjQ3LjI3My40NC4yNzNsMy44Ni0uMDE3YS41MDIuNTAyIDAgMDAuNS0uNTA0bC0uMDAzLTIxLjE2NmEuNTA0LjUwNCAwIDAwLS41LS41MDJ6bTE2LjM0Mi0uNzA4Yy0zLjM5NiAwLTUuNzA2IDEuNTE1LTUuNzA2IDEuNTE1Vjk1LjMxMmEuNS41IDAgMDAtLjQ5Ny0uNTAzSDEwN2EuNS41IDAgMDAtLjUuNTAzdjMxLjUzYS41LjUgMCAwMC41LjUwM2g0LjE5MmMuMTkgMCAuMzMyLS4wOTcuNDM3LS4yNjguMTAzLS4xNy4yNTQtMS40NTQuMjU0LTEuNDU0czIuNDcgMi4zNCA3LjE0OCAyLjM0YzUuNDkgMCA4LjY0LTIuNzg0IDguNjQtMTIuNTAycy01LjAzLTEwLjk4OC04LjQyOC0xMC45ODh6bS0yLjM2IDE3Ljc2NGMtMi4wNzMtLjA2My0zLjQ4LTEuMDA0LTMuNDgtMS4wMDR2LTkuOTg1czEuMzg4LS44NSAzLjA5LTEuMDA0YzIuMTUzLS4xOTMgNC4yMjguNDU4IDQuMjI4IDUuNTk0IDAgNS40MTctLjkzNSA2LjQ4Ni0zLjgzNyA2LjM5OHptLTYzLjY4OS0uMTE4Yy0uMjYzIDAtLjkzNy4xMDctMS42My4xMDctMi4yMiAwLTIuOTczLTEuMDMyLTIuOTczLTIuMzY4di04Ljg2Nmg0LjUyYS41LjUgMCAwMC41LS41MDR2LTQuODU2YS41LjUgMCAwMC0uNS0uNTAyaC00LjUybC0uMDA3LTUuOTdjMC0uMjI3LS4xMTYtLjM0LS4zNzgtLjM0aC02LjE2Yy0uMjM4IDAtLjM2Ny4xMDYtLjM2Ny4zMzV2Ni4xN3MtMy4wODcuNzQ1LTMuMjk1LjgwNWEuNS41IDAgMDAtLjM2LjQ4djMuODc3YS41LjUgMCAwMC40OTcuNTAzaDMuMTU4djkuMzI4YzAgNi45MyA0Ljg2IDcuNjEgOC4xNCA3LjYxIDEuNDk3IDAgMy4yOS0uNDggMy41ODYtLjU5LjE4LS4wNjcuMjgzLS4yNTIuMjgzLS40NTNsLjAwNC00LjI2NWEuNTEuNTEgMCAwMC0uNS0uNTAyelwiIGZpbGw9XCIjMTAwRTBGXCI+PC9wYXRoPlxuPC9zdmc+YCxcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPHBhdGggZmlsbD1cInVybCgjYSlcIiBkPVwiTTAgNjRjMCAxOC41OTMgMjguNjU0IDMzLjY2NyA2NCAzMy42NjcgMzUuMzQ2IDAgNjQtMTUuMDc0IDY0LTMzLjY2NyAwLTE4LjU5My0yOC42NTUtMzMuNjY3LTY0LTMzLjY2N0MyOC42NTQgMzAuMzMzIDAgNDUuNDA3IDAgNjRaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjNzc3YmIzXCIgZD1cIk02NCA5NS4xNjdjMzMuOTY1IDAgNjEuNS0xMy45NTUgNjEuNS0zMS4xNjcgMC0xNy4yMTQtMjcuNTM1LTMxLjE2Ny02MS41LTMxLjE2N1MyLjUgNDYuNzg2IDIuNSA2NGMwIDE3LjIxMiAyNy41MzUgMzEuMTY3IDYxLjUgMzEuMTY3WlwiPjwvcGF0aD48cGF0aCBkPVwiTTM0Ljc3MiA2Ny44NjRjMi43OTMgMCA0Ljg3Ny0uNTE1IDYuMTk2LTEuNTMgMS4zMDYtMS4wMDYgMi4yMDctMi43NDcgMi42OC01LjE3NS40NC0yLjI3LjI3Mi0zLjg1NC0uNS00LjcxLS43ODgtLjg3NC0yLjQ5My0xLjMxNy01LjA2Ny0xLjMxN2gtNC40NjRsLTIuNDczIDEyLjczMnpNMjAuMTczIDgzLjU0N2EuNjk0LjY5NCAwIDAgMS0uNjgtLjgyOGw2LjU1Ny0zMy43MzhhLjY5NS42OTUgMCAwIDEgLjY4LS41NjFoMTQuMTM0YzQuNDQyIDAgNy43NDggMS4yMDYgOS44MjcgMy41ODUgMi4wODggMi4zOSAyLjczNCA1LjczNCAxLjkxNyA5LjkzNS0uMzMzIDEuNzExLS45MDUgMy4zLTEuNyA0LjcyNGExNS44MTggMTUuODE4IDAgMCAxLTMuMTI4IDMuOTJjLTEuNTMxIDEuNDMyLTMuMjY0IDIuNDcyLTUuMTQ3IDMuMDgzLTEuODUyLjYwNC00LjIzMi45MS03LjA3LjkxaC01LjcyNGwtMS42MzQgOC40MDhhLjY5NS42OTUgMCAwIDEtLjY4Mi41NjJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0zNC4xOSA1NS44MjZoMy44OTFjMy4xMDcgMCA0LjE4Ni42ODIgNC41NTMgMS4wODkuNjA3LjY3NC43MjMgMi4wOTcuMzMxIDQuMTEyLS40MzkgMi4yNTctMS4yNTMgMy44NTgtMi40MiA0Ljc1Ni0xLjE5NC45Mi0zLjEzOCAxLjM4Ni01Ljc3MyAxLjM4NmgtMi43ODZsMi4yMDUtMTEuMzQyem02LjY3NC04LjFIMjYuNzMxYTEuMzkgMS4zOSAwIDAgMC0xLjM2NCAxLjEyM0wxOC44MSA4Mi41ODhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzIDEuNjUzaDcuMzVhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDEuNTI1LTcuODQ2aDUuMTUxYzIuOTEyIDAgNS4zNjQtLjMxOCA3LjI4Ny0uOTQ0IDEuOTc3LS42NDIgMy43OTYtMS43MzEgNS40MDYtMy4yMzdhMTYuNTIyIDE2LjUyMiAwIDAgMCAzLjI1OS00LjA4N2MuODMxLTEuNDg3IDEuNDI5LTMuMTQ3IDEuNzc1LTQuOTMxLjg2LTQuNDIzLjE2MS03Ljk2NC0yLjA3Ni0xMC41MjQtMi4yMTYtMi41MzctNS42OTgtMy44MjMtMTAuMzQ5LTMuODIzek0zMC4zMDEgNjguNTU3aDQuNDcxYzIuOTYzIDAgNS4xNy0uNTU3IDYuNjItMS42NzUgMS40NTEtMS4xMTYgMi40MjgtMi45OCAyLjkzOC01LjU5MS40ODUtMi41MDguMjY0LTQuMjc3LS42NjUtNS4zMDgtLjkzMS0xLjAzLTIuNzkxLTEuNTQ2LTUuNTg0LTEuNTQ2aC01LjAzNmwtMi43NDMgMTQuMTJtMTAuNTYzLTE5LjQ0NWM0LjI1MiAwIDcuMzUzIDEuMTE3IDkuMzAzIDMuMzQ4IDEuOTUgMi4yMzIgMi41MzYgNS4zNDcgMS43NiA5LjM0Ni0uMzIyIDEuNjQ4LS44NjMgMy4xNTQtMS42MjUgNC41MTgtLjc2NCAxLjM2Ni0xLjc2IDIuNjE0LTIuOTkxIDMuNzQ3LTEuNDY4IDEuMzczLTMuMDk3IDIuMzUyLTQuODkyIDIuOTM1LTEuNzk0LjU4NC00LjA4Ljg3NS02Ljg1Ny44NzVoLTYuMjk2bC0xLjc0MyA4Ljk3aC03LjM1bDYuNTU4LTMzLjczOWgxNC4xMzNcIj48L3BhdGg+PHBhdGggZD1cIk02OS40NTkgNzQuNTc3YS42OTQuNjk0IDAgMCAxLS42ODItLjgyN2wyLjktMTQuOTI4Yy4yNzctMS40Mi4yMDktMi40MzgtLjE5LTIuODctLjI0NS0uMjYzLS45NzktLjcwNC0zLjE1LS43MDRoLTUuMjU2bC0zLjY0NiAxOC43NjhhLjY5NS42OTUgMCAwIDEtLjY4My41NmgtNy4yOWEuNjk1LjY5NSAwIDAgMS0uNjgzLS44MjZsNi41NTgtMzMuNzM5YS42OTUuNjk1IDAgMCAxIC42ODItLjU2MWg3LjI5YS42OTUuNjk1IDAgMCAxIC42ODMuODI2TDY0LjQxIDQ4LjQyaDUuNjUzYzQuMzA3IDAgNy4yMjcuNzU4IDguOTI4IDIuMzIxIDEuNzMzIDEuNTkzIDIuMjc1IDQuMTQgMS42MDggNy41NzNsLTMuMDUxIDE1LjcwMmEuNjk1LjY5NSAwIDAgMS0uNjgyLjU2aC03LjQwN3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTY1LjMxIDM4Ljc1NWgtNy4yOTFhMS4zOSAxLjM5IDAgMCAwLTEuMzY0IDEuMTI0bC02LjU1NyAzMy43MzhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzIDEuNjU0aDcuMjkxYTEuMzkgMS4zOSAwIDAgMCAxLjM2NC0xLjEyNGwzLjUzNy0xOC4yMDVoNC42ODJjMi4xNjggMCAyLjYyNC40NjMgMi42NDEuNDg0LjEzMi4xNC4zMDUuNzk1LjAxOSAyLjI2NGwtMi45IDE0LjkyN2ExLjM5IDEuMzkgMCAwIDAgMS4zNjQgMS42NTRoNy40MDhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDMuMDUxLTE1LjdjLjcxNS0zLjY4Ni4xMDMtNi40NS0xLjgyLTguMjE3LTEuODM2LTEuNjg2LTQuOTEtMi41MDUtOS4zOTgtMi41MDVoLTQuODFsMS40MjEtNy4zMTVhMS4zOSAxLjM5IDAgMCAwLTEuMzY0LTEuNjU1em0wIDEuMzktMS43NDMgOC45NjhoNi40OTZjNC4wODcgMCA2LjkwNy43MTQgOC40NTcgMi4xNCAxLjU1MyAxLjQyNiAyLjAxNyAzLjczNSAxLjM5OCA2LjkzbC0zLjA1MiAxNS42OTloLTcuNDA3bDIuOTAxLTE0LjkyOGMuMzMtMS42OTguMjA4LTIuODU2LS4zNjUtMy40NzQtLjU3My0uNjE3LTEuNzkzLS45MjYtMy42NTgtLjkyNmgtNS44MjlsLTMuNzU2IDE5LjMyN0g1MS40Nmw2LjU1OC0zMy43MzloNy4yOTJ6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNOTIuMTM2IDY3Ljg2NGMyLjc5MyAwIDQuODc4LS41MTUgNi4xOTgtMS41MyAxLjMwNC0xLjAwNiAyLjIwNi0yLjc0NyAyLjY3OS01LjE3NS40NC0yLjI3LjI3My0zLjg1NC0uNS00LjcxLS43ODgtLjg3NC0yLjQ5My0xLjMxNy01LjA2Ny0xLjMxN2gtNC40NjNsLTIuNDc1IDEyLjczMnpNNzcuNTQgODMuNTQ3YS42OTQuNjk0IDAgMCAxLS42ODItLjgyOGw2LjU1Ny0zMy43MzhhLjY5NS42OTUgMCAwIDEgLjY4Mi0uNTYxSDk4LjIzYzQuNDQyIDAgNy43NDggMS4yMDYgOS44MjYgMy41ODUgMi4wODkgMi4zOSAyLjczNCA1LjczNCAxLjkxNyA5LjkzNWExNS44NzggMTUuODc4IDAgMCAxLTEuNjk5IDQuNzI0IDE1LjgzOCAxNS44MzggMCAwIDEtMy4xMjggMy45MmMtMS41MyAxLjQzMi0zLjI2NSAyLjQ3Mi01LjE0NyAzLjA4My0xLjg1Mi42MDQtNC4yMzIuOTEtNy4wNzEuOTFoLTUuNzIzbC0xLjYzMyA4LjQwOGEuNjk1LjY5NSAwIDAgMS0uNjgzLjU2MnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTkxLjU1NSA1NS44MjZoMy44OTFjMy4xMDcgMCA0LjE4Ni42ODIgNC41NTIgMS4wODkuNjEuNjc0LjcyNCAyLjA5Ny4zMzMgNC4xMTItLjQ0IDIuMjU3LTEuMjU0IDMuODU4LTIuNDIxIDQuNzU2LTEuMTk1LjkyLTMuMTM5IDEuMzg2LTUuNzczIDEuMzg2aC0yLjc4NmwyLjIwNC0xMS4zNDJ6bTYuNjc0LTguMUg4NC4wOTZhMS4zOSAxLjM5IDAgMCAwLTEuMzYzIDEuMTIzbC02LjU1OCAzMy43MzlhMS4zOSAxLjM5IDAgMCAwIDEuMzY0IDEuNjUzaDcuMzVhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDEuNTI1LTcuODQ2aDUuMTVjMi45MTEgMCA1LjM2NC0uMzE4IDcuMjg2LS45NDQgMS45NzgtLjY0MiAzLjc5Ny0xLjczMSA1LjQwOC0zLjIzOGExNi41MiAxNi41MiAwIDAgMCAzLjI1OC00LjA4NmMuODMyLTEuNDg3IDEuNDI4LTMuMTQ3IDEuNzc1LTQuOTMxLjg2LTQuNDIzLjE2Mi03Ljk2NC0yLjA3Ni0xMC41MjQtMi4yMTYtMi41MzctNS42OTctMy44MjMtMTAuMzUtMy44MjN6TTg3LjY2NiA2OC41NTdoNC40N2MyLjk2NCAwIDUuMTctLjU1NyA2LjYyMi0xLjY3NSAxLjQ1LTEuMTE2IDIuNDI4LTIuOTggMi45MzYtNS41OTEuNDg3LTIuNTA4LjI2Ni00LjI3Ny0uNjY1LTUuMzA4LS45My0xLjAzLTIuNzkxLTEuNTQ2LTUuNTgzLTEuNTQ2aC01LjAzNVptMTAuNTYzLTE5LjQ0NWM0LjI1MSAwIDcuMzU0IDEuMTE3IDkuMzAzIDMuMzQ4IDEuOTUgMi4yMzIgMi41MzcgNS4zNDcgMS43NTkgOS4zNDYtLjMyIDEuNjQ4LS44NjIgMy4xNTQtMS42MjQgNC41MTgtLjc2MyAxLjM2Ni0xLjc2IDIuNjE0LTIuOTkyIDMuNzQ3LTEuNDY3IDEuMzczLTMuMDk3IDIuMzUyLTQuODkyIDIuOTM1LTEuNzkzLjU4NC00LjA3OC44NzUtNi44NTYuODc1aC02LjI5NWwtMS43NDUgOC45N2gtNy4zNWw2LjU1OC0zMy43MzloMTQuMTMzXCI+PC9wYXRoPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD1cImFcIiBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMVwiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KDg0LjA0MTM2IDAgMCA4NC4wNDEzNiAzOC40MjYgNDIuMTY5KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIHN0b3AtY29sb3I9XCIjQUVCMkQ1XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIi4zXCIgc3RvcC1jb2xvcj1cIiNBRUIyRDVcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiM0ODRDODlcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjNDg0Qzg5XCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPlxuPC9zdmc+YCxcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxuPHBhdGggZmlsbD1cIiNmMzcwMzZcIiBkPVwiTTExMy4xMTcgMjYuMDY2QzkyLjE2OC0xLjA2MiA1My4xOTEtNi4wNyAyNi4wNjIgMTQuODgzYy0yNy4xMjUgMjAuOTUzLTMyLjEyOCA1OS45My0xMS4xNzUgODcuMDU1IDIwLjk1NyAyNy4xMjQgNTkuOTM3IDMyLjEyNCA4Ny4wNTggMTEuMTY3IDI3LjExNC0yMC45NTMgMzIuMTE4LTU5LjkxOCAxMS4xNzItODcuMDM5Wm0wIDBcIj48L3BhdGg+XG48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNOTEuMDc4IDI0LjE2NGExMC4wMzggMTAuMDM4IDAgMCAwLTUuNzgxIDIuNDI2IDEwLjAyOCAxMC4wMjggMCAwIDAtMS41NCAxMy40NjUgMTAuMDI4IDEwLjAyOCAwIDAgMCAxMy4yNzYgMi43MTVoLjAwMnYuMDAxbC4xNTYuMTU1YTEwLjYzIDEwLjYzIDAgMCAwIDEuOTY1LTEuNDVBMTAuMzQxIDEwLjM0MSAwIDAgMCA5OSAyNy4xMDd2LS4wMDJsLTguODQ0IDguNzg5LS4xNTYtLjE1NSA4Ljg0NC04Ljc5M2ExMC4wMzggMTAuMDM4IDAgMCAwLTcuNzY2LTIuNzh6TTc5LjQzNCAzOC41NTFjLTQuMjQtLjAwNy0xMS4xNjMgNC43OTktMjguMDY3IDIxLjcwM2wuMDg0LjA4NmMtLjA5Mi0uMDMyLS4xODUtLjAzNS0uMTg1LS4wMzVsLTYuMzY0IDYuMzA4YTEuMDM1IDEuMDM1IDAgMCAwIC45MyAxLjc2MmwxMC45MTQtMi4zMjhhLjMwNy4zMDcgMCAwIDAgLjA5Mi0uMTdsLjI0Mi4yNS0zLjcyIDMuNjloLS4xOGwtMjIuMDg2IDIyLjI2IDcuMDg2IDYuODI0YTEuMjU0IDEuMjU0IDAgMCAwIDEuNDc2LjE0OSAxLjMyNyAxLjMyNyAwIDAgMCAuNjQ1LTEuMzU2bC0xLjAzNS00LjVhLjUzNC41MzQgMCAwIDEgMC0uNjIgMTE3LjI4NSAxMTcuMjg1IDAgMCAwIDI2LjczOC0xNy41ODNsLTQuNTM1LTQuNTM3LjA4Ni0uMDE0LTIuNjktMi42ODkuMTcyLS4xNzQuMTgyLjE4Ni0uMDk0LjA5MSA3LjEzNyA3LjI5M3YtLjAwM2MxMy42OC0xMi45NTQgMjMuMzktMjMuMzY3IDIwLjg2NS0zMC4zNzVhMy44MyAzLjgzIDAgMCAwLTEuMTA3LTIuMjA4di4wMDRhMy43NzggMy43NzggMCAwIDAtLjQ4My0uMzA2Yy0uMDgzLS4wODgtLjE1Ni0uMTc4LS4yNDQtLjI2NGwtLjA2Ni4wNjZhMy43NzggMy43NzggMCAwIDAtLjU4Mi0uMjlsLjI4OS0uMjkyYy0xLjc5Ni0xLjYtMy4yOC0yLjkyNC01LjUtMi45M3pNMzAuOTQgOTIuMjFsLTUuMTcxIDUuMTcydi4wMDRhMS4wMyAxLjAzIDAgMCAwLS40NTcgMS4xMjUgMS4wMzUgMS4wMzUgMCAwIDAgLjkyMS43ODlsMTIuNjcyLjg3NS03Ljk2NS03Ljk2NXpcIj48L3BhdGg+XG48cGF0aCBmaWxsPVwiI2YzNzAzNlwiIGQ9XCJNOTEuOTUgMjMuMzFhMTEuMDQ3IDExLjA0NyAwIDAgMC03Ljc1OSAzLjE3IDEwLjk4OCAxMC45ODggMCAwIDAtMi4zOSAxMS42NDFjLTQuNzQxLTIuMDMtMTEuMTU1IDEuNTEtMzEuMTA2IDIxLjQ1N2EuOTMyLjkzMiAwIDAgMC0uMDM3LjA5NCAxLjI0MiAxLjI0MiAwIDAgMC0uMTE5LjA2MmwtNi4zMDkgNi4zNjRhMS45NyAxLjk3IDAgMCAwLS4zNjMgMi4zMjQgMi4wMTIgMi4wMTIgMCAwIDAgMS43MDcuOTg0bC4zMTMtLjIwMyA4LjQyNC0xLjc5Ny00LjAzIDQuMDY3YS44NzMuODczIDAgMCAwLS4wNTQuMTY2bC0xOS43NSAxOS43OTlhLjc5OC43OTggMCAwIDAtLjE5Mi4yMzhsLTUuMDg2IDUuMDlhMS45NjcgMS45NjcgMCAwIDAtLjQxNCAyLjA0MyAxLjk5NSAxLjk5NSAwIDAgMCAxLjY1NiAxLjI2NWwxMi42MTguODhhMS4wMSAxLjAxIDAgMCAwIC41Mi0uNDE1Ljg4Ni44ODYgMCAwIDAgMC0xLjAzNWwtLjAyNi0uMDI1YTIuMjQzIDIuMjQzIDAgMCAwIC43MDUtLjU4IDIuMjM3IDIuMjM3IDAgMCAwIC40MDYtMS44NzZsLS45ODQtNC4xODdhMTI2LjcyNSAxMjYuNzI1IDAgMCAwIDI2LjMzNC0xNi44NjEgMS4wOTEgMS4wOTEgMCAwIDAgLjI0OC4xMDNjLjI1NC0uMDE5LjQ5Mi0uMTI4LjY3Mi0uMzA4IDEzLjU1LTEyLjgzIDIxLjUxNS0yMS42MjIgMjEuNTE1LTI4LjYwMmE4LjAzIDguMDMgMCAwIDAtLjQzMS0yLjg1IDEwLjk1NyAxMC45NTcgMCAwIDAgMy44NDUuODNsLS4wMTUuMDA0YTExLjIxOSAxMS4yMTkgMCAwIDAgNS4xODMtMS40NS43NzUuNzc1IDAgMCAwIC4wMDQuMDAxLjgzNS44MzUgMCAwIDAgLjYxNy0uMDU1IDkuMzk4IDkuMzk4IDAgMCAwIDIuMDctMS42NTIgMTAuODczIDEwLjg3MyAwIDAgMCAzLjI1OC03Ljc1OCAxMC44NzMgMTAuODczIDAgMCAwLTMuMjU3LTcuNzU4LjkzLjkzIDAgMCAwLS4xMTgtLjA5MSAxMS4wNDUgMTEuMDQ1IDAgMCAwLTcuNjU2LTMuMDc4em0tLjA4NyAxLjc3MmE5LjI3IDkuMjcgMCAwIDEgNS41ODYgMS45MTRsLTguMDY4IDguMTE3YS44NC44NCAwIDAgMC0uMDc2LjA5OC44My44MyAwIDAgMC0uMjM5LjU1LjgzMi44MzIgMCAwIDAgLjMxMy42NWguMDAybDYuMSA2LjFhOS4wNDQgOS4wNDQgMCAwIDEtMTAuMDI4LTEuOTEzYy0yLjU4Ni0yLjYtMy4zMzYtNi41MDQtMS45NTMtOS44OTEgMS4zODMtMy4zOSA0LjY4LTUuNjA1IDguMzYzLTUuNjI1em03LjEyIDMuNDMyYTguODcgOC44NyAwIDAgMSAyLjAzMyA1LjY3NCA5LjE1IDkuMTUgMCAwIDEtMi42ODggNi40NjQgOS45ODkgOS45ODkgMCAwIDEtMS4wOTguODk1TDkyLjMwNyAzNi43bC0uOTYzLS45NjMuMjY1LS4yNjUgNy4zNzMtNi45NnptLS4zNjYgNC4xOTNhLjc3Ny43NzcgMCAwIDAtLjU1LjAzMS43MzEuNzMxIDAgMCAwLS4zNi40MjYuNzMuNzMgMCAwIDAgLjA1LjU1OSAyLjIyNiAyLjIyNiAwIDAgMS0uMjU3IDIuMzI4LjY0LjY0IDAgMCAwLS4xOTUuNDg4Yy4wMDQuMTg0LjA3LjM2LjE5NS40OTJhLjU4LjU4IDAgMCAwIC40MTQgMCAuNjguNjggMCAwIDAgLjY3Mi0uMjA3IDMuNTczIDMuNTczIDAgMCAwIC40NjUtMy43Nzd2LjAwNGEuNzc3Ljc3NyAwIDAgMC0uNDM0LS4zNDR6TTc5LjM0IDM5LjQzYTUuNTg0IDUuNTg0IDAgMCAxIDMuMzEgMS4yMjYgNC43NTYgNC43NTYgMCAwIDAtMi42ODEgMS4zNEw1Ny4xNjIgNjQuNzAxbC00LjQ3Ni00LjQ3NmMxMS44MjgtMTEuNzcyIDE5LjA2LTE3LjkyMSAyMy41NTYtMTkuOTM2YTUuNTg0IDUuNTg0IDAgMCAxIDMuMDk4LS44NnptMy45NjUgMi45NmEyLjg5NSAyLjg5NSAwIDAgMSAyLjA0My44NDQgMi43ODYgMi43ODYgMCAwIDEgLjg3OSAyLjEyMSAyLjg2OSAyLjg2OSAwIDAgMS0uOTg1IDIuMDdsLTI0LjI1IDIxLjEwNi0yLjYxNy0yLjYxNyAyMi44ODctMjIuNjhhMi44OTUgMi44OTUgMCAwIDEgMi4wNDMtLjg0M3ptMi45OTQgNi42OThjLTEuNjkgNi43MDItMTAuNjQ3IDE1Ljc4My0xOS45ODcgMjQuNjA3bC0zLjc3Ny0zLjc3M0w4Ni4zIDQ5LjA4OHpNNTEuMzY3IDYxLjU0N2wuMjc0LjI3IDMuNTEzIDMuNTEzLTkuNjMgMi4wNiA1Ljg0My01Ljg0M3ptNS43OTMgNS44NC4wMDQuMDA0IDEuMTY4IDEuMTk1YTEuMDg2IDEuMDg2IDAgMCAwIC4wMTguMDg0bC4wNzguMDEyLjI0OC4yNTQuODIuODQtNS4zODUuNjYgMy4wNS0zLjA1em0zLjg2NyA0LjA3NiAzLjU3OCAzLjU3NkExMjYuOTkyIDEyNi45OTIgMCAwIDEgMzguNzUgOTEuNjk1YTEuNDQgMS40NCAwIDAgMC0uNzc3IDEuNjUzbDEuMDM1IDQuNWEuMzEuMzEgMCAwIDEgMCAuMzYzLjMxLjMxIDAgMCAxLS40MTQgMGwtNi4xMDItNi4xNTJMNTEuMyA3Mi45NzVsOS43MjgtMS41MTJ6bS0yOS45MzMgMjEuOTQuODY5LjgxNCA0LjQ5MiA0LjQ5Mi0xMC4wMTYtLjY0OCA0LjY1NS00LjY1OXpcIj48L3BhdGg+XG48L3N2Zz5gLFxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XG48bGluZWFyR3JhZGllbnQgaWQ9XCJweXRob24tb3JpZ2luYWwtYVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHgxPVwiNzAuMjUyXCIgeTE9XCIxMjM3LjQ3NlwiIHgyPVwiMTcwLjY1OVwiIHkyPVwiMTE1MS4wODlcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguNTYzIDAgMCAtLjU2OCAtMjkuMjE1IDcwNy44MTcpXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjNUE5RkQ0XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzMwNjk5OFwiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD1cInB5dGhvbi1vcmlnaW5hbC1iXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeDE9XCIyMDkuNDc0XCIgeTE9XCIxMDk4LjgxMVwiIHgyPVwiMTczLjYyXCIgeTI9XCIxMTQ5LjUzN1wiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC41NjMgMCAwIC0uNTY4IC0yOS4yMTUgNzA3LjgxNylcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNGRkQ0M0JcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjRkZFODczXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD1cInVybCgjcHl0aG9uLW9yaWdpbmFsLWEpXCIgZD1cIk02My4zOTEgMS45ODhjLTQuMjIyLjAyLTguMjUyLjM3OS0xMS44IDEuMDA3LTEwLjQ1IDEuODQ2LTEyLjM0NiA1LjcxLTEyLjM0NiAxMi44Mzd2OS40MTFoMjQuNjkzdjMuMTM3SDI5Ljk3N2MtNy4xNzYgMC0xMy40NiA0LjMxMy0xNS40MjYgMTIuNTIxLTIuMjY4IDkuNDA1LTIuMzY4IDE1LjI3NSAwIDI1LjA5NiAxLjc1NSA3LjMxMSA1Ljk0NyAxMi41MTkgMTMuMTI0IDEyLjUxOWg4LjQ5MVY2Ny4yMzRjMC04LjE1MSA3LjA1MS0xNS4zNCAxNS40MjYtMTUuMzRoMjQuNjY1YzYuODY2IDAgMTIuMzQ2LTUuNjU0IDEyLjM0Ni0xMi41NDhWMTUuODMzYzAtNi42OTMtNS42NDYtMTEuNzItMTIuMzQ2LTEyLjgzNy00LjI0NC0uNzA2LTguNjQ1LTEuMDI3LTEyLjg2Ni0xLjAwOHpNNTAuMDM3IDkuNTU3YzIuNTUgMCA0LjYzNCAyLjExNyA0LjYzNCA0LjcyMSAwIDIuNTkzLTIuMDgzIDQuNjktNC42MzQgNC42OS0yLjU2IDAtNC42MzMtMi4wOTctNC42MzMtNC42OS0uMDAxLTIuNjA0IDIuMDczLTQuNzIxIDQuNjMzLTQuNzIxelwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwLjI2KVwiPjwvcGF0aD48cGF0aCBmaWxsPVwidXJsKCNweXRob24tb3JpZ2luYWwtYilcIiBkPVwiTTkxLjY4MiAyOC4zOHYxMC45NjZjMCA4LjUtNy4yMDggMTUuNjU1LTE1LjQyNiAxNS42NTVINTEuNTkxYy02Ljc1NiAwLTEyLjM0NiA1Ljc4My0xMi4zNDYgMTIuNTQ5djIzLjUxNWMwIDYuNjkxIDUuODE4IDEwLjYyOCAxMi4zNDYgMTIuNTQ3IDcuODE2IDIuMjk3IDE1LjMxMiAyLjcxMyAyNC42NjUgMCA2LjIxNi0xLjgwMSAxMi4zNDYtNS40MjMgMTIuMzQ2LTEyLjU0N3YtOS40MTJINjMuOTM4di0zLjEzOGgzNy4wMTJjNy4xNzYgMCA5Ljg1Mi01LjAwNSAxMi4zNDgtMTIuNTE5IDIuNTc4LTcuNzM1IDIuNDY3LTE1LjE3NCAwLTI1LjA5Ni0xLjc3NC03LjE0NS01LjE2MS0xMi41MjEtMTIuMzQ4LTEyLjUyMWgtOS4yNjh6TTc3LjgwOSA4Ny45MjdjMi41NjEgMCA0LjYzNCAyLjA5NyA0LjYzNCA0LjY5MiAwIDIuNjAyLTIuMDc0IDQuNzE5LTQuNjM0IDQuNzE5LTIuNTUgMC00LjYzMy0yLjExNy00LjYzMy00LjcxOSAwLTIuNTk1IDIuMDgzLTQuNjkyIDQuNjMzLTQuNjkyelwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwLjI2KVwiPjwvcGF0aD48cmFkaWFsR3JhZGllbnQgaWQ9XCJweXRob24tb3JpZ2luYWwtY1wiIGN4PVwiMTgyNS42NzhcIiBjeT1cIjQ0NC40NVwiIHI9XCIyNi43NDNcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCgwIC0uMjQgLTEuMDU1IDAgNTMyLjk3OSA1NTcuNTc2KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI0I4QjhCOFwiIHN0b3Atb3BhY2l0eT1cIi40OThcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN0Y3RjdGXCIgc3RvcC1vcGFjaXR5PVwiMFwiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjxwYXRoIG9wYWNpdHk9XCIuNDQ0XCIgZmlsbD1cInVybCgjcHl0aG9uLW9yaWdpbmFsLWMpXCIgZD1cIk05Ny4zMDkgMTE5LjU5N2MwIDMuNTQzLTE0LjgxNiA2LjQxNi0zMy4wOTEgNi40MTYtMTguMjc2IDAtMzMuMDkyLTIuODczLTMzLjA5Mi02LjQxNiAwLTMuNTQ0IDE0LjgxNS02LjQxNyAzMy4wOTItNi40MTcgMTguMjc1IDAgMzMuMDkxIDIuODcyIDMzLjA5MSA2LjQxN3pcIj48L3BhdGg+XG48L3N2Zz5gLFxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XG48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjIuNjcgNDdoOTkuNjd2NzMuNjdIMjIuNjd6XCI+PC9wYXRoPjxwYXRoIGRhdGEtbmFtZT1cIm9yaWdpbmFsXCIgZmlsbD1cIiMwMDdhY2NcIiBkPVwiTTEuNSA2My45MXY2Mi41aDEyNXYtMTI1SDEuNXptMTAwLjczLTVhMTUuNTYgMTUuNTYgMCAwMTcuODIgNC41IDIwLjU4IDIwLjU4IDAgMDEzIDRjMCAuMTYtNS40IDMuODEtOC42OSA1Ljg1LS4xMi4wOC0uNi0uNDQtMS4xMy0xLjIzYTcuMDkgNy4wOSAwIDAwLTUuODctMy41M2MtMy43OS0uMjYtNi4yMyAxLjczLTYuMjEgNWE0LjU4IDQuNTggMCAwMC41NCAyLjM0Yy44MyAxLjczIDIuMzggMi43NiA3LjI0IDQuODYgOC45NSAzLjg1IDEyLjc4IDYuMzkgMTUuMTYgMTAgMi42NiA0IDMuMjUgMTAuNDYgMS40NSAxNS4yNC0yIDUuMi02LjkgOC43My0xMy44MyA5LjlhMzguMzIgMzguMzIgMCAwMS05LjUyLS4xIDIzIDIzIDAgMDEtMTIuNzItNi42M2MtMS4xNS0xLjI3LTMuMzktNC41OC0zLjI1LTQuODJhOS4zNCA5LjM0IDAgMDExLjE1LS43M0w4MiAxMDFsMy41OS0yLjA4Ljc1IDEuMTFhMTYuNzggMTYuNzggMCAwMDQuNzQgNC41NGM0IDIuMSA5LjQ2IDEuODEgMTIuMTYtLjYyYTUuNDMgNS40MyAwIDAwLjY5LTYuOTJjLTEtMS4zOS0zLTIuNTYtOC41OS01LTYuNDUtMi43OC05LjIzLTQuNS0xMS43Ny03LjI0YTE2LjQ4IDE2LjQ4IDAgMDEtMy40My02LjI1IDI1IDI1IDAgMDEtLjIyLThjMS4zMy02LjIzIDYtMTAuNTggMTIuODItMTEuODdhMzEuNjYgMzEuNjYgMCAwMTkuNDkuMjZ6bS0yOS4zNCA1LjI0djUuMTJINTYuNjZ2NDYuMjNINDUuMTVWNjkuMjZIMjguODh2LTVhNDkuMTkgNDkuMTkgMCAwMS4xMi01LjE3QzI5LjA4IDU5IDM5IDU5IDUxIDU5aDIxLjgzelwiPjwvcGF0aD5cbjwvc3ZnPmAsXG5cbmA8c3ZnIGNsYXNzPSBcInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIiM0OTQ5NDlcIiBkPVwiTTY0LjA5NCAxMjYuMjI0YzM0LjI3NS0uMDUyIDYyLjAyMS0yNy45MzMgNjIuMDIxLTYyLjMyNSAwLTMzLjgzMy0yNy42MTgtNjEuNjk3LTYwLjYxMy02Mi4yODZDMzAuODUuOTk1IDEuODk0IDI5LjExMyAxLjg4NSA2My4yMWMtLjAxIDM1LjA3OSAyNy42MTIgNjMuMDY0IDYyLjIwOSA2My4wMTR6TTYzLjk5MyA0LjYzYzMyLjkwNy0uMDExIDU5LjEyNiAyNi43MjUgNTkuMTE2IDYwLjI4LS4wMTEgMzEuNjc5LTI2LjkyNSA1OC4xOC01OS4wOTIgNTguMTg3LTMyLjc3MS4wMDctNTkuMTI1LTI2LjU2My01OS4xMjQtNTkuNjA4LjAwMi0zMi4xOTMgMjYuNzY2LTU4Ljg0OCA1OS4xLTU4Ljg1OXpNMzkuMTU3IDM1Ljg5NmMuNTM4IDEuNzkzLS45NjggMi40MTctMi41NjkgMi41NDItMS42ODUuMTMtMy4zNjkuMjU3LTUuMzI1LjQwNiA2LjQ1NiAxOS4yMzQgMTIuODE1IDM4LjE4MyAxOS4zMjUgNTcuNTczLjQ2NC0uNzU5LjY1NS0uOTczLjczOS0xLjIyMyAzLjU3NC0xMC42ODIgNy4xNjgtMjEuMzU3IDEwLjY1MS0zMi4wNjkuMzE4LS45NzcuMTYtMi4yNzEtLjE4OC0zLjI3NS0xLjg0My01LjMyLTQuMDUxLTEwLjUyNC01LjY2Ny0xNS45MDgtMS4xMDUtMy42ODYtMi41NzEtNi4wNzEtNi45MjgtNS42NDQtLjc0Mi4wNzMtMS42NDgtMS41MjQtMi40NzktMi4zNDkgMS4wMDUtLjYgMi4wMDMtMS43MDQgMy4wMTctMS43MTlhODQ5LjU5MyA4NDkuNTkzIDAgMDEyNi42MTguMDA4YzEuMDE4LjAxNyAyLjAxNiAxLjE1IDMuMDIxIDEuNzY1LS44OC44MDQtMS42MzkgMi4wMS0yLjY2OCAyLjMyMS0xLjY1MS40OTgtMy40ODIuNDA0LTUuNDU4LjU4bDE5LjM0OSA1Ny41NmMyLjkzMS05LjczNiA1LjY1OC0xOC42NzYgOC4zMS0yNy42MzkgMi4zNjYtOC4wMDEuOTU2LTE1LjQ3My0zLjMyMi0yMi41Mi0xLjI4Ni0yLjExOS0yLjg2Ni00LjE3NS0zLjU5NS02LjQ4Ni0uODI4LTIuNjI5LTEuNTE2LTUuNjIyLTEuMDc3LTguMjU5Ljc0NS00LjQ2OSA0LjE3NC02LjY4OCA4LjgxNC03LjExM0M3NC4zMzMuODgxIDM0LjQzMSA5LjMxNyAxOS43MjggMzQuOTIyYzUuNjYtLjI2MSAxMS4wNjQtLjYwNCAxNi40NzItLjY3OCAxLjAyMi0uMDEzIDIuNzE3Ljg1MSAyLjk1NyAxLjY1MnptMTAuMTE3IDc3Ljk3MWMtLjExOC4zNDUtLjEyNS43MjktLjIxOCAxLjMwMiAxMC45NDMgMy4wMzQgMjEuNjc1IDIuODE1IDMyLjY1OS0uODg2bC0xNi43OC00NS45NmMtNS4zNyAxNS42MTEtMTAuNTIgMzAuNTc1LTE1LjY2MSA0NS41NDR6bS04LjQ1Ni0yLjA3OGwtMjUuMjgxLTY5LjM1Yy0xMS40MDUgMjIuMjc4LTIuNzI5IDU2LjI2OCAyNS4yODEgNjkuMzV6bTc2LjQyOC00NC41NjJjLjgwMi0xMC41MzQtMi44MzItMjUuMTE5LTUuOTctMjcuMTI1LS4zNSAzLjg3NS0uMTA2IDguMTg2LTEuMjE4IDEyLjExNC0yLjYxNyA5LjI1NS01LjgxNyAxOC4zNDktOC44OTkgMjcuNDY4LTMuMzUgOS45MTItNi44MzIgMTkuNzc5LTEwLjI1NyAyOS42NjYgMTYuMDkyLTkuNTM5IDI0LjkzNS0yMy42MTggMjYuMzQ0LTQyLjEyM3pcIj48L3BhdGg+XG48L3N2Zz5gXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxze1xuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNraWxsc1wiKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXIoKSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInNraWxsLXRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXkgU2tpbGxzXCI7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzbGlkZXIgPSAoKSA9PntcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2xpZGVyXCI7XG5cbiAgICAgICAgY29uc3QgYnJhbmRzID0gKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpdGVtc0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGl0ZW1zSG9sZGVyLmNsYXNzTmFtZSA9IFwiYnJhbmRzXCI7XG5cbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGl0ZW0pID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgbGlzdC5jbGFzc05hbWUgPSBcImJyYW5kLWxvZ29cIjtcbiAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCA9IGAke2l0ZW19YDtcbiAgICAgICAgICAgICAgICBpdGVtc0hvbGRlci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtc0hvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmFuZHMoKSk7XG4gICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxufSIsImltcG9ydCBjdk1ha2VySW1nIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2N2LW1ha2VyLnBuZ1wiO1xuaW1wb3J0IG1lbW9yeUltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9tZW1vcnkucG5nXCI7XG5pbXBvcnQgdG9kb2xpc3RJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvdG9kb2xpc3QucG5nXCI7XG5pbXBvcnQgd2VhdGhlckFwcEltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy93ZWF0aGVyLWFwcC5wbmdcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsIFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBhcHAgdGhhdCBzZWFyY2hlcyB0aHJvdWdoIHRoZSBhcGkgdG8gZmluZCB0aGUgY2l0eSdzIHdlYXRoZXIgZm9yZWNhc3QuICBUaGlzIHByb2plY3QgaXMgZnJvbSB0aGUgT2RpbiBQcm9qZWN0IGFuZCBpdCBpcyB1c2VkIHRvIHByYWN0aWNlIGFuZCBwbGF5IGFyb3VuZCB3aXRoIHRoZSBsYW5ndWFnZSB0aGF0IGlzIGJlaW5nIGxlYXJuZWRcIiwgXG4gICAgaW1hZ2U6IHdlYXRoZXJBcHBJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1M1XCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L3dlYXRoZXItYXBwXCJ9LFxuICAgIHtuYW1lOiBcIlRvZG8gTGlzdFwiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSB0byBkbyBsaXN0IGFwcC4gIEl0IGNhbiBjcmVhdGUgcHJvamVjdHMgYW5kIGFkZCB0YXNrcy4gIEl0IGNhbiBhbHNvIGNoZWNrIHRoZSBpbmNvbWUgcHJvamVjdHMgYW5kIGl0IHRlbGxzIHlvdSB3aGVuIGEgcHJvamVjdCBpcyBkbyB0b2RheS5cIiwgXG4gICAgaW1hZ2U6IHRvZG9saXN0SW1nLCBsYW5ndWFnZTogXCJSZWFjdCwgQ1NTNVwiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vdG9kb2xpc3QvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS90b2RvbGlzdFwifSxcbiAgICB7bmFtZTogXCJNZW1vcnlcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgZ2FtZSBhbmQgZmlyc3QgZ2FtZSBJIGhhdmUgY3JlYXRlZC4gQ29udGludWUgdG8gcHJhY3RpY2UgZmV0Y2hpbmcgZGF0YXMgYW5kIHBsYXlpbmcgYXJvdW5kIHdpdGggdGhlIG9iamVjdHMgSSBoYXZlIHJlY2VpdmVkLiAgQWxzbywgaXQgaXMgYSBnb29kIHByYWN0aWNlIHRvIHBsYXkgYXJvdW5kIHdpdGggZGF0YSBzdHJ1Y3R1cmUgXCIsIFxuICAgIGltYWdlOiBtZW1vcnlJbWcsIGxhbmd1YWdlOiBcIlJlYWN0LCBDU1M1XCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby9tZW1vcnkvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS9tZW1vcnlcIn0sXG4gICAge25hbWU6IFwiQ1YgTWFrZXJcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiTXkgZmlyc3QgcHJhY3RpY2FsIHByb2plY3QgZm9yIGEgY29tcGFueSB0aGF0IEkgd29ya2VkIGZvci4gIEl0IGZhY2lsaXRhdGVzIHRlYWNoZXJzIHRvIGNyZWF0ZSBhbiBldmFsdWF0aW9uIGZvcm0gYW5kIHJlbmRlciB0byBhIGN1c3RvbWl6ZWQgZm9ybSBhbmQgc2F2ZSBhcyBQREYgb3IgcHJpbnQgaXQgb3V0LlwiLCBcbiAgICBpbWFnZTogY3ZNYWtlckltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8vbG9xdWFjaW91cy1wYXByZW5qYWstYjIzNTY1Lm5ldGxpZnkuYXBwL1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvY3YtbWFrZXJcIn0sXG4gICAge25hbWU6IFwiR0VPUyBBcHBcIiwgZGVzY3JpcHRpb246IFwiTXkgZmlyc3QgcHJhY3RpY2FsIHByb2plY3QgZm9yIGEgY29tcGFueSB0aGF0IEkgd29ya2VkIGZvci4gIEl0IGZhY2lsaXRhdGVzIHRlYWNoZXJzIHRvIGNyZWF0ZSBhbiBldmFsdWF0aW9uIGZvcm0gYW5kIHJlbmRlciB0byBhIGN1c3RvbWl6ZWQgZm9ybSBhbmQgc2F2ZSBhcyBQREYgb3IgcHJpbnQgaXQgb3V0LlwiLCBpbWFnZTogXCJcIiwgbGFuZ3VhZ2U6IFwiUkVBQ1QsIFRhaWx3aW5kLCBUeXBlc2NyaXB0XCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby9jYXItd2FzaC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L2Nhci13YXNoXCJ9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3Jre1xuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XG5cblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0cygpKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwid29yay10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IFdvcmtcIjtcblxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgc3RhdGljIHByb2plY3RzID0gKCkgPT57XG5cbiAgICAgICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PntcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3RDYXJkcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkc1wiKVxuICAgICAgICAgICAgcHJvamVjdENhcmRzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiQW4gaW1hZ2Ugb2YgJHtpdGVtLm5hbWV9XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlLW5hbWVcIj4ke2l0ZW0ubmFtZX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaW5rLWZpbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiR7aXRlbS5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kaS1pY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmdpdDwvdGl0bGU+PHBhdGggZD1cIk0yLjYsMTAuNTlMOC4zOCw0LjhMMTAuMDcsNi41QzkuODMsNy4zNSAxMC4yMiw4LjI4IDExLDguNzNWMTQuMjdDMTAuNCwxNC42MSAxMCwxNS4yNiAxMCwxNkEyLDIgMCAwLDAgMTIsMThBMiwyIDAgMCwwIDE0LDE2QzE0LDE1LjI2IDEzLjYsMTQuNjEgMTMsMTQuMjdWOS40MUwxNS4wNywxMS41QzE1LDExLjY1IDE1LDExLjgyIDE1LDEyQTIsMiAwIDAsMCAxNywxNEEyLDIgMCAwLDAgMTksMTJBMiwyIDAgMCwwIDE3LDEwQzE2LjgyLDEwIDE2LjY1LDEwIDE2LjUsMTAuMDdMMTMuOTMsNy41QzE0LjE5LDYuNTcgMTMuNzEsNS41NSAxMi43OCw1LjE2QzEyLjM1LDUgMTEuOSw0Ljk2IDExLjUsNS4wN0w5LjgsMy4zOEwxMC41OSwyLjZDMTEuMzcsMS44MSAxMi42MywxLjgxIDEzLjQxLDIuNkwyMS40LDEwLjU5QzIyLjE5LDExLjM3IDIyLjE5LDEyLjYzIDIxLjQsMTMuNDFMMTMuNDEsMjEuNEMxMi42MywyMi4xOSAxMS4zNywyMi4xOSAxMC41OSwyMS40TDIuNiwxMy40MUMxLjgxLDEyLjYzIDEuODEsMTEuMzcgMi42LDEwLjU5WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiJHtpdGVtLndlYnNpdGV9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kaS1pY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm9wZW4taW4tbmV3PC90aXRsZT48cGF0aCBkPVwiTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtYnVpbHRpblwiPjxpPkJ1aWx0IHdpdGggJHtpdGVtLmxhbmd1YWdlfTwvaT48L3A+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cblxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQ7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmRleC5qc1xuXG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4uL3NyYy9wYWdlcy9ob21lcGFnZSc7XG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhvbWVQYWdlLmxvYWRQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=