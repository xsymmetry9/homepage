/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-font: 'Poppins', sans-serif;
    --primary-color-dark: #000;
    --primary-color-light: #fff;
    --primary-fc-dark: #000;
    --primary-bg-color-dark: var(--primary-color-dark);
    --view-small: 55em;
}
*{
    padding: 0;
    margin: 0;
}
html{
    scroll-behavior: smooth;
}
body{
    background-color: var(--primary-color-light);
    font-family: var(--primary-font);
} 
/* Header */
header{
    position: absolute;
    top: 3rem;
    width: 100%;
    background: rgba(25, 25, 25, 0.3);
}
h2{
    font-size: 2.6rem;
}
h3{
    font-size: 1.9rem;
}

p{
    font-size: 1.2rem;
}

*[aria-hidden = true]{
    display: none;
}

.hidden{
    display: none;
}

.sticky{
    position: sticky;
    top: 0;
}

.header-container{
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

.title-logo{
    padding: 12px 12px;
    font-weight: 700;
}
.nav-container{
    list-style: none;
    display: flex;
    gap: 1.88rem;
    padding: 12px 12px;
}


.nav-container > li{
  font-size: inherit;
  color: inherit;
}

.nav-container > li > a{
    font-weight: 700;
    color: var(--primary-color-light);
    text-decoration: none;
}

.menu-btn{
    cursor: pointer;
    display: none;
    position: absolute;
    top: .5rem;
    right: .5rem;
    z-index: 10000;

    background-color: orange;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
}
.menu-btn:focus, .menu-btn:hover{
    background-color: rgba(255, 165, 0, 0.7);
}

@media (max-width: 55em){
    header{
        position: sticky;
        top: 0;
    }
    nav{
        background-color: rgba(25, 25, 25, 0.9);
        width: 100%;
        height: 100vh;
        position: absolute;
    }
   
    .header-container{
        flex-direction: column;
        align-items: normal;
    }
    .menu-btn{
        display: block;
    }
    .nav-container{
        margin-top: 3rem;
        flex-direction: column;
        align-items: center;
    }
    .nav-container > li{
        width: 100%;
        border-bottom: 1px solid white;
        padding: 1rem .5rem;
    }
}
/* Content */

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
    font-size: 7rem;
    line-height: 1.5;
}
@media (max-width: 55em){
    .banner-title{
        font-size: 5.5rem;
    }
}
.subtitle{
    color: var(--primary-color-light);
    font-size: 1.6rem;
}
.banner-container{
    position: relative;
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
    position: absolute;
    bottom: 5rem;
    font-size: 1.2rem;
    height: 40px;
    width: 40px;
    fill: var(--primary-color-light);
    background: none;
    border: 2px solid var(--primary-color-light);
    border-radius: 50%;
    
}

.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{
    transform: scale(120%);
}


/* About */
.section-container{
    background-color: var(--primary-color-light);
    width: 100%;
    display: block;
}
.about-background{
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--primary-color-light);
    /* outline: 3px solid blue; */

    height: 100vh;
}
.about-description{
    color: var(--primary-color-dark);
    background-color: var(--primary-color-light);
    font-size: 1.2rem;
    padding: 2rem 1.2rem;
    border: 1px solid var(--primary-color-dark);
    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);

}

.imageDescription-container{
    display: flex;
    justify-content: center;
    max-width: 1100px;
    width: 100%;
    align-items: center;
    margin-inline: auto;
    margin-top: 3rem;
    padding-bottom: 3rem;
    z-index: 100;
    
}
.imageDescription-container::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -100;
 
    background-color: var(--primary-color-dark);
    
    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);

}

@media (max-width: 55em) {
    .imageDescription-container{
        flex-wrap: wrap;

    }
}
.profile-picture{
    padding-left: 1.2rem;
    width: 400px;
    height: auto;
}
#about .social-media-icons-container{
    justify-content: flex-end;
}

/* Work */

.content{
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
    padding: 5rem 0;
}

.work-title{
    width: 190px;
    padding: 0 1.2rem;
    border-bottom: .3rem solid blue;
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
    fill: blue;
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
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1.6rem;
    padding: 2rem 12px;
}

.title-name{
    --spacing: 1.2rem;
    font-size: 1.8rem;
    padding-bottom: var(--spacing);
}

.project-cards{
    display: grid;
    grid-template-rows: 1fr .7fr;
    box-shadow: 2px 2px 3px 2px rgba(25, 25, 25, 0.3);
}

.project-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.project-bottom{
    border-top: 1px solid black;
    padding: 1.2rem 1.2rem;

}

.project-description{
    font-size: .9rem;
    line-height: 1.5;
}

/* footer */
.footer-container{
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    text-align: center;
    padding: 1.2rem 0;
}
/* Contact */

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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --primary-font: 'Poppins', sans-serif;\r\n    --primary-color-dark: #000;\r\n    --primary-color-light: #fff;\r\n    --primary-fc-dark: #000;\r\n    --primary-bg-color-dark: var(--primary-color-dark);\r\n    --view-small: 55em;\r\n}\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    background-color: var(--primary-color-light);\r\n    font-family: var(--primary-font);\r\n} \r\n/* Header */\r\nheader{\r\n    position: absolute;\r\n    top: 3rem;\r\n    width: 100%;\r\n    background: rgba(25, 25, 25, 0.3);\r\n}\r\nh2{\r\n    font-size: 2.6rem;\r\n}\r\nh3{\r\n    font-size: 1.9rem;\r\n}\r\n\r\np{\r\n    font-size: 1.2rem;\r\n}\r\n\r\n*[aria-hidden = true]{\r\n    display: none;\r\n}\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.sticky{\r\n    position: sticky;\r\n    top: 0;\r\n}\r\n\r\n.header-container{\r\n    position: relative;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    color: var(--primary-color-light);\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n}\r\n\r\n.title-logo{\r\n    padding: 12px 12px;\r\n    font-weight: 700;\r\n}\r\n.nav-container{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 1.88rem;\r\n    padding: 12px 12px;\r\n}\r\n\r\n\r\n.nav-container > li{\r\n  font-size: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.nav-container > li > a{\r\n    font-weight: 700;\r\n    color: var(--primary-color-light);\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-btn{\r\n    cursor: pointer;\r\n    display: none;\r\n    position: absolute;\r\n    top: .5rem;\r\n    right: .5rem;\r\n    z-index: 10000;\r\n\r\n    background-color: orange;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 6px 12px;\r\n}\r\n.menu-btn:focus, .menu-btn:hover{\r\n    background-color: rgba(255, 165, 0, 0.7);\r\n}\r\n\r\n@media (max-width: 55em){\r\n    header{\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n    nav{\r\n        background-color: rgba(25, 25, 25, 0.9);\r\n        width: 100%;\r\n        height: 100vh;\r\n        position: absolute;\r\n    }\r\n   \r\n    .header-container{\r\n        flex-direction: column;\r\n        align-items: normal;\r\n    }\r\n    .menu-btn{\r\n        display: block;\r\n    }\r\n    .nav-container{\r\n        margin-top: 3rem;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .nav-container > li{\r\n        width: 100%;\r\n        border-bottom: 1px solid white;\r\n        padding: 1rem .5rem;\r\n    }\r\n}\r\n/* Content */\r\n\r\n.content-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    padding: 0;\r\n    background-color: var(--primary-bg-color-dark);\r\n    \r\n}\r\n\r\n/* Banner */\r\n.banner-title{\r\n    color: var(--primary-color-light);\r\n    font-size: 7rem;\r\n    line-height: 1.5;\r\n}\r\n@media (max-width: 55em){\r\n    .banner-title{\r\n        font-size: 5.5rem;\r\n    }\r\n}\r\n.subtitle{\r\n    color: var(--primary-color-light);\r\n    font-size: 1.6rem;\r\n}\r\n.banner-container{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n}\r\n\r\n.banner-btn-nav-about\r\n{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    bottom: 5rem;\r\n    font-size: 1.2rem;\r\n    height: 40px;\r\n    width: 40px;\r\n    fill: var(--primary-color-light);\r\n    background: none;\r\n    border: 2px solid var(--primary-color-light);\r\n    border-radius: 50%;\r\n    \r\n}\r\n\r\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\r\n    transform: scale(120%);\r\n}\r\n\r\n\r\n/* About */\r\n.section-container{\r\n    background-color: var(--primary-color-light);\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.about-background{\r\n    position: relative;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-color-light);\r\n    /* outline: 3px solid blue; */\r\n\r\n    height: 100vh;\r\n}\r\n.about-description{\r\n    color: var(--primary-color-dark);\r\n    background-color: var(--primary-color-light);\r\n    font-size: 1.2rem;\r\n    padding: 2rem 1.2rem;\r\n    border: 1px solid var(--primary-color-dark);\r\n    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);\r\n\r\n}\r\n\r\n.imageDescription-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 1100px;\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    margin-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    z-index: 100;\r\n    \r\n}\r\n.imageDescription-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -100;\r\n \r\n    background-color: var(--primary-color-dark);\r\n    \r\n    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);\r\n\r\n}\r\n\r\n@media (max-width: 55em) {\r\n    .imageDescription-container{\r\n        flex-wrap: wrap;\r\n\r\n    }\r\n}\r\n.profile-picture{\r\n    padding-left: 1.2rem;\r\n    width: 400px;\r\n    height: auto;\r\n}\r\n#about .social-media-icons-container{\r\n    justify-content: flex-end;\r\n}\r\n\r\n/* Work */\r\n\r\n.content{\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    padding: 5rem 0;\r\n}\r\n\r\n.work-title{\r\n    width: 190px;\r\n    padding: 0 1.2rem;\r\n    border-bottom: .3rem solid blue;\r\n}\r\n\r\n.top-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.mdi-icons{\r\n    height: 1.9rem;\r\n    width: 1.9rem;\r\n    fill: var(--primary-color-dark);\r\n    background-color: inherit;\r\n}\r\n.mdi-icons:hover, .mdi-icons:active{\r\n    fill: blue;\r\n}\r\n\r\n.link-file-container{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: .3rem;\r\n}\r\n.link-file-container{\r\n    list-style: none;\r\n}\r\n.link-file-container a{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.project-container{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n    gap: 1.6rem;\r\n    padding: 2rem 12px;\r\n}\r\n\r\n.title-name{\r\n    --spacing: 1.2rem;\r\n    font-size: 1.8rem;\r\n    padding-bottom: var(--spacing);\r\n}\r\n\r\n.project-cards{\r\n    display: grid;\r\n    grid-template-rows: 1fr .7fr;\r\n    box-shadow: 2px 2px 3px 2px rgba(25, 25, 25, 0.3);\r\n}\r\n\r\n.project-image{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.project-bottom{\r\n    border-top: 1px solid black;\r\n    padding: 1.2rem 1.2rem;\r\n\r\n}\r\n\r\n.project-description{\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* footer */\r\n.footer-container{\r\n    background-color: var(--primary-color-dark);\r\n    color: var(--primary-color-light);\r\n    text-align: center;\r\n    padding: 1.2rem 0;\r\n}\r\n/* Contact */\r\n\r\n.contact-flex{\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n    padding-bottom: .3rem;\r\n}\r\n\r\n.contact-container{\r\n    --spacing-big: 3rem;\r\n    color: var(--primary-color-light);\r\n    margin-top: var(--spacing-big);\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n@media (max-width: 55em)\r\n{\r\n    .contact-container{\r\n        display: block;\r\n    }\r\n}\r\n\r\n.contact-image{\r\n    max-width: 700px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.social-media-icons-container{\r\n    display: flex;\r\n    gap: 16px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .social-media-icons-container{\r\n        justify-content: center;\r\n        padding: 1.2rem;\r\n    }\r\n}\r\n.social-media-icons{\r\n    list-style: none;\r\n}\r\n.social-media-icons-links{\r\n    cursor: pointer;\r\n    \r\n}\r\n.devicon{\r\n    font-size: 2rem;\r\n}\r\n\r\n.social-media-links{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.left-container{\r\n    --spacing-1: 1rem;\r\n    padding: 0 var(--spacing-1);\r\n}\r\n\r\n.left-container h2{\r\n    --spacing-2: 1.2rem;\r\n    padding-bottom: 1.12rem;\r\n}\r\n.left-container .contact-subtitle{\r\n    --spacing-1: 1rem;\r\n    padding-bottom: var(--spacing-1);\r\n}\r\n\r\n.right-container{\r\n    padding: 0 12px;\r\n}"],"sourceRoot":""}]);
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

    static loadeHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
    }

    static menuBtnHandler = () =>{

        const menu = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
            
        const handler = () =>{

            if(navigationPage.getAttribute("aria-hidden") === "false" ?  navigationPage.setAttribute("aria-hidden", "true") : navigationPage.setAttribute("aria-hidden", "false"));

        }

        menu.addEventListener(("click"), handler);
    
    }

    static navigationHandler = () =>{
        const navigationPage = document.querySelector("nav");
        window.addEventListener(("resize"), () =>{
            const width = window.innerWidth;
            if(width > 880)
            {
                navigationPage.setAttribute("aria-hidden", "false");
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
            }
        });

       
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
        const link = () =>{
            const link = document.createElement("a");
            link.textContent = "This is an Open Source Project";

            return link;
        }
  
        footerContainer.appendChild(title("Gary", "Lei"));
        footerContainer.appendChild(link());

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
        
        const handleScroll = () =>{
            if(window.pageYOffset != 0){
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
        }

        window.addEventListener("scroll", handleScroll);
    
        const title = (fName, lName) =>{
            const text = document.createElement("p");
            text.textContent = fName + " " +lName;
            text.classList.add("title-logo");
            return text;
        }

        const menuButton = () =>{
            const button = document.createElement("button");
            button.classList.add("menu-btn");
            button.textContent = "menu";

            return button;
        }
    
        const navigation = () => {
            const container = document.createElement("nav");
            if(window.innerWidth > 880)
            {
                container.setAttribute("aria-hidden", false);
            }
            else{
                container.setAttribute("aria-hidden", true);
            }
            
            const lists = () => {
                const unOrderedList = document.createElement("ul");
                unOrderedList.classList.add("nav-container");
                 const tabs = [{page: "about", link: "#about"}, {page: "work", link: "#work"}, {page: "contact", link: "#contact"}]
                 tabs.forEach((item) =>{
                    const list = document.createElement("li");
                    list.innerHTML = `<a class="nav-links" href="${item.link}">${item.page}</a>`;
                    unOrderedList.appendChild(list);
                 });
    
                return unOrderedList;
            }
            container.appendChild(lists());
            return container;
        }
        headerContainer.appendChild(title("Gary", "Lei"));
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
const plotSocialMediaIcons = (className) =>{

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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/socialMediaIcons */ "./src/components/socialMediaIcons.js");
/* harmony import */ var _images_profilePicture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/profilePicture.png */ "./src/images/profilePicture.png");



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
            p.textContent = "As an ESL English teacher, I'm committed to fostering language proficiency and cultural understanding. Outside the classroom, I'm an avid runner, finding solace in each stride, and a passionate real estate enthusiast, exploring the intricacies of property investment. Balancing professional growth with personal pursuits drives my journey.";
    
            return p;
        }

        container.appendChild(title());
        container.appendChild(description());
        container.appendChild((0,_components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__["default"])("about"));

        return container;
  
    }

    static loadImage = () =>{
        const image = new Image();
        image.src = _images_profilePicture_png__WEBPACK_IMPORTED_MODULE_1__;
        image.alt = "A portrait for me";
        image.classList.add("profile-picture");
        return image;
    }
}

/***/ }),

/***/ "./src/pages/banner.js":
/*!*****************************!*\
  !*** ./src/pages/banner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
class Banner{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("banner-container");

        container.appendChild(this.title());
        container.appendChild(this.subText());
        container.appendChild(this.bannerHandlerBtn());

        return container;
    }

    static title = () =>{
        const text = document.createElement("h1");
        text.classList.add("banner-title")
        text.textContent = "Gary Lei";
        return text;
    }
    static subText = () =>{
        const subtitle = "A web developer and an ESL teacher"
        const text = document.createElement("p");
        text.classList.add("typeWriter", "subtitle");

        let index = 0;

        const typeWriter = () =>{
            if(index < subtitle.length){
                text.innerHTML += subtitle.charAt(index);
                index++;
                setTimeout(typeWriter, 200)    
            } else {
                setTimeout(resetIndex, 3000);
            }
        }

        const resetIndex = () =>{
            text.innerHTML = "" //clear the title
            index = 0;
            typeWriter(); //Start typewrite effect again
        }
        typeWriter();

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

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _components_socialMediaIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/socialMediaIcons */ "./src/components/socialMediaIcons.js");
/* harmony import */ var _images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/contact.jpg */ "./src/images/contact.jpg");

// import phone from "../images/phone.svg";



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
        title.textContent = "Contact Me";
        return title;
    }

    static plotImage = () =>{
        const createDiv = document.createElement("div");

        const image = new Image();
        image.classList.add("contact-image");
        image.src = _images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__;

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
/* harmony import */ var _banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.js */ "./src/pages/banner.js");
/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work.js */ "./src/pages/work.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/pages/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/pages/contact.js");
/* harmony import */ var _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eventHandlers.js */ "./src/components/eventHandlers.js");








class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter());

        _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__["default"].loadeHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(_banner_js__WEBPACK_IMPORTED_MODULE_2__["default"].load());
        content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_4__["default"].load());
        content.appendChild(_work_js__WEBPACK_IMPORTED_MODULE_3__["default"].load());
        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"].load());

        return content;

    }
}

/***/ }),

/***/ "./src/pages/work.js":
/*!***************************!*\
  !*** ./src/pages/work.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Work)
/* harmony export */ });
/* harmony import */ var _images_cv_maker_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cv-maker.png */ "./src/images/cv-maker.png");
/* harmony import */ var _images_memory_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/memory.png */ "./src/images/memory.png");
/* harmony import */ var _images_todolist_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/todolist.png */ "./src/images/todolist.png");
/* harmony import */ var _images_weather_app_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather-app.png */ "./src/images/weather-app.png");





const projects = [
    {name: "Weather App", 
    description: "A short description. Just a couple of sentences will do.", 
    image: _images_weather_app_png__WEBPACK_IMPORTED_MODULE_3__, language: "HTML, JS, CSS", website: "https://xsymmetry9.github.io/weather-app/", github: "https://github.com/xsymmetry9/weather-app"},
    {name: "Todo List", 
    description: "A short description. Just a couple of sentences will do.", 
    image: _images_todolist_png__WEBPACK_IMPORTED_MODULE_2__, language: "HTML, JS, CSS", website: "https://xsymmetry9.github.io/todolist/", github: "https://github.com/xsymmetry9/todolist"},
    {name: "Memory", 
    description: "A short description. Just a couple of sentences will do.", 
    image: _images_memory_png__WEBPACK_IMPORTED_MODULE_1__, language: "HTML, JS, CSS", website: "https://xsymmetry9.github.io/memory/", github: "https://github.com/xsymmetry9/memory"},
    {name: "CV Maker", 
    description: "A short description. Just a couple of sentences will do.", 
    image: _images_cv_maker_png__WEBPACK_IMPORTED_MODULE_0__, language: "HTML, JS, CSS", website: "https://loquacious-paprenjak-b23565.netlify.app/", github: "https://github.com/xsymmetry9/cv-maker"},
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

/***/ "./src/images/contact.jpg":
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e071530d05d16045923c.jpg";

/***/ }),

/***/ "./src/images/cv-maker.png":
/*!*********************************!*\
  !*** ./src/images/cv-maker.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e827143ed3dc4193f356.png";

/***/ }),

/***/ "./src/images/memory.png":
/*!*******************************!*\
  !*** ./src/images/memory.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "448120fdc0bf7889d20b.png";

/***/ }),

/***/ "./src/images/profilePicture.png":
/*!***************************************!*\
  !*** ./src/images/profilePicture.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61a16d94d681e9bd59f7.png";

/***/ }),

/***/ "./src/images/todolist.png":
/*!*********************************!*\
  !*** ./src/images/todolist.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "872a01c5c5d30faba4b8.png";

/***/ }),

/***/ "./src/images/weather-app.png":
/*!************************************!*\
  !*** ./src/images/weather-app.png ***!
  \************************************/
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



addEventListener("DOMContentLoaded", _src_pages_homepage__WEBPACK_IMPORTED_MODULE_1__["default"].loadPage())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxhQUFhLGNBQWMsT0FBTyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ1k7QUFDN0M7QUFDQSxxQ0FBcUMsMkRBQVEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29ucy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy93b3JrLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMDAwO1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmO1xyXG4gICAgLS1wcmltYXJ5LWZjLWRhcms6ICMwMDA7XHJcbiAgICAtLXByaW1hcnktYmctY29sb3ItZGFyazogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIC0tdmlldy1zbWFsbDogNTVlbTtcclxufVxyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5odG1se1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn0gXHJcbi8qIEhlYWRlciAqL1xyXG5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAxLjlyZW07XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuKlthcmlhLWhpZGRlbiA9IHRydWVde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUtbG9nb3tcclxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm5hdi1jb250YWluZXJ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMS44OHJlbTtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxufVxyXG5cclxuXHJcbi5uYXYtY29udGFpbmVyID4gbGl7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lciA+IGxpID4gYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51LWJ0bntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC41cmVtO1xyXG4gICAgcmlnaHQ6IC41cmVtO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbn1cclxuLm1lbnUtYnRuOmZvY3VzLCAubWVudS1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY1LCAwLCAwLjcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5oZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5tZW51LWJ0bntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uYXYtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdi1jb250YWluZXIgPiBsaXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbTtcclxuICAgIH1cclxufVxyXG4vKiBDb250ZW50ICovXHJcblxyXG4uY29udGVudC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcclxuICAgIFxyXG59XHJcblxyXG4vKiBCYW5uZXIgKi9cclxuLmJhbm5lci10aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogN3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xyXG4gICAgLmJhbm5lci10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDUuNXJlbTtcclxuICAgIH1cclxufVxyXG4uc3VidGl0bGV7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG4uYmFubmVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYW5uZXItYnRuLW5hdi1hYm91dFxyXG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxufVxyXG5cclxuLmJhbm5lci1idG4tbmF2LWFib3V0OmhvdmVyLCAuYmFubmVyLWJ0bi1uYXYtYWJvdXQ6Zm9jdXN7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xyXG59XHJcblxyXG5cclxuLyogQWJvdXQgKi9cclxuLnNlY3Rpb24tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5hYm91dC1iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICAvKiBvdXRsaW5lOiAzcHggc29saWQgYmx1ZTsgKi9cclxuXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5hYm91dC1kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNik7XHJcblxyXG59XHJcblxyXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBcclxufVxyXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXI6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSA0MCUsIDAlIDk1JSk7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xyXG4gICAgLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICB9XHJcbn1cclxuLnByb2ZpbGUtcGljdHVyZXtcclxuICAgIHBhZGRpbmctbGVmdDogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiNhYm91dCAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi8qIFdvcmsgKi9cclxuXHJcbi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbn1cclxuXHJcbi53b3JrLXRpdGxle1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogMCAxLjJyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAuM3JlbSBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4udG9wLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1kaS1pY29uc3tcclxuICAgIGhlaWdodDogMS45cmVtO1xyXG4gICAgd2lkdGg6IDEuOXJlbTtcclxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5tZGktaWNvbnM6aG92ZXIsIC5tZGktaWNvbnM6YWN0aXZle1xyXG4gICAgZmlsbDogYmx1ZTtcclxufVxyXG5cclxuLmxpbmstZmlsZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogLjNyZW07XHJcbn1cclxuLmxpbmstZmlsZS1jb250YWluZXJ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5saW5rLWZpbGUtY29udGFpbmVyIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMS42cmVtO1xyXG4gICAgcGFkZGluZzogMnJlbSAxMnB4O1xyXG59XHJcblxyXG4udGl0bGUtbmFtZXtcclxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmRze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSgyNSwgMjUsIDI1LCAwLjMpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnByb2plY3QtYm90dG9te1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDEuMnJlbTtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi8qIGZvb3RlciAqL1xyXG4uZm9vdGVyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMDtcclxufVxyXG4vKiBDb250YWN0ICovXHJcblxyXG4uY29udGFjdC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lcntcclxuICAgIC0tc3BhY2luZy1iaWc6IDNyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcclxue1xyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pbWFnZXtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXHJcbntcclxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25ze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25zLWxpbmtze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuLmRldmljb257XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEtbGlua3N7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmxlZnQtY29udGFpbmVye1xyXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctMSk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRhaW5lciBoMntcclxuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcclxufVxyXG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XHJcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4ucmlnaHQtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrREFBa0Q7SUFDbEQsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7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QWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBOztJQUVJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLXByaW1hcnktZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmO1xcclxcbiAgICAtLXByaW1hcnktZmMtZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWJnLWNvbG9yLWRhcms6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIC0tdmlldy1zbWFsbDogNTVlbTtcXHJcXG59XFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcclxcbn0gXFxyXFxuLyogSGVhZGVyICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcXHJcXG59XFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcclxcbn1cXHJcXG5oM3tcXHJcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxufVxcclxcblxcclxcbnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4qW2FyaWEtaGlkZGVuID0gdHJ1ZV17XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdGlja3l7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbG9nb3tcXHJcXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4ubmF2LWNvbnRhaW5lcntcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxLjg4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXYtY29udGFpbmVyID4gbGl7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb250YWluZXIgPiBsaSA+IGF7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idG57XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC41cmVtO1xcclxcbiAgICByaWdodDogLjVyZW07XFxyXFxuICAgIHotaW5kZXg6IDEwMDAwO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG59XFxyXFxuLm1lbnUtYnRuOmZvY3VzLCAubWVudS1idG46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjUsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBuYXZ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMjUsIDAuOSk7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG4gICBcXHJcXG4gICAgLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG57XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWNvbnRhaW5lcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWNvbnRhaW5lciA+IGxpe1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qIENvbnRlbnQgKi9cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRhcmspO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFubmVyICovXFxyXFxuLmJhbm5lci10aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDdyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXHJcXG4gICAgLmJhbm5lci10aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zdWJ0aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG59XFxyXFxuLmJhbm5lci1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1idG4tbmF2LWFib3V0XFxyXFxue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXQ6aG92ZXIsIC5iYW5uZXItYnRuLW5hdi1hYm91dDpmb2N1c3tcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQWJvdXQgKi9cXHJcXG4uc2VjdGlvbi1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5hYm91dC1iYWNrZ3JvdW5ke1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgLyogb3V0bGluZTogM3B4IHNvbGlkIGJsdWU7ICovXFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5hYm91dC1kZXNjcmlwdGlvbntcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTAwO1xcclxcbiBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgXFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSA0MCUsIDAlIDk1JSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XFxyXFxuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucHJvZmlsZS1waWN0dXJle1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbiNhYm91dCAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogV29yayAqL1xcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstdGl0bGV7XFxyXFxuICAgIHdpZHRoOiAxOTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IC4zcmVtIHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbi50b3AtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZGktaWNvbnN7XFxyXFxuICAgIGhlaWdodDogMS45cmVtO1xcclxcbiAgICB3aWR0aDogMS45cmVtO1xcclxcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG4ubWRpLWljb25zOmhvdmVyLCAubWRpLWljb25zOmFjdGl2ZXtcXHJcXG4gICAgZmlsbDogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstZmlsZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogLjNyZW07XFxyXFxufVxcclxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtY29udGFpbmVye1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLW5hbWV7XFxyXFxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgLjdmcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1hZ2V7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1ib3R0b217XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuMnJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcbi5mb290ZXItY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtIDA7XFxyXFxufVxcclxcbi8qIENvbnRhY3QgKi9cXHJcXG5cXHJcXG4uY29udGFjdC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVye1xcclxcbiAgICAtLXNwYWNpbmctYmlnOiAzcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctYmlnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcXHJcXG57XFxyXFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcXHJcXG57XFxyXFxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29uc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1saW5rc3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmRldmljb257XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYS1saW5rc3tcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVye1xcclxcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIgaDJ7XFxyXFxuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjEycmVtO1xcclxcbn1cXHJcXG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XFxyXFxuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlcnMge1xyXG5cclxuICAgIHN0YXRpYyBsb2FkZUhhbmRsZXJzID0gKCkgPT57XHJcbiAgICAgICAgdGhpcy5tZW51QnRuSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWVudUJ0bkhhbmRsZXIgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT57XHJcblxyXG4gICAgICAgICAgICBpZihuYXZpZ2F0aW9uUGFnZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSA9PT0gXCJmYWxzZVwiID8gIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKSA6IG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIikpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgaGFuZGxlcik7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmF2aWdhdGlvbkhhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoKFwicmVzaXplXCIpLCAoKSA9PntcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgaWYod2lkdGggPiA4ODApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXJ7XHJcbiAgICBzdGF0aWMgbG9hZEZvb3RlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGZOYW1lLCBsTmFtZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGDCqSBDb3B5cmlnaHQgMjAyNCwgJHtmTmFtZX0gJHtsTmFtZX1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGluayA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYW4gT3BlbiBTb3VyY2UgUHJvamVjdFwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZShcIkdhcnlcIiwgXCJMZWlcIikpO1xyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKCkpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcntcclxuICAgIHN0YXRpYyBsb2FkSGVhZGVyID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+e1xyXG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGZOYW1lLCBsTmFtZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGZOYW1lICsgXCIgXCIgK2xOYW1lO1xyXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1sb2dvXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJtZW51XCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gODgwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5PcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuY2xhc3NMaXN0LmFkZChcIm5hdi1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFicyA9IFt7cGFnZTogXCJhYm91dFwiLCBsaW5rOiBcIiNhYm91dFwifSwge3BhZ2U6IFwid29ya1wiLCBsaW5rOiBcIiN3b3JrXCJ9LCB7cGFnZTogXCJjb250YWN0XCIsIGxpbms6IFwiI2NvbnRhY3RcIn1dXHJcbiAgICAgICAgICAgICAgICAgdGFicy5mb3JFYWNoKChpdGVtKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwibmF2LWxpbmtzXCIgaHJlZj1cIiR7aXRlbS5saW5rfVwiPiR7aXRlbS5wYWdlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bk9yZGVyZWRMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0cygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKFwiR2FyeVwiLCBcIkxlaVwiKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24oKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiY29uc3QgcGxvdFNvY2lhbE1lZGlhSWNvbnMgPSAoY2xhc3NOYW1lKSA9PntcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gIGBzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyYDtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWljb25zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ2l0aHViLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tZ2l0aHViLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnR3aXR0ZXIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi10d2l0dGVyLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tbGlua2VkaW4tcGxhaW5cIj48L2k+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsb3RTb2NpYWxNZWRpYUljb25zOyIsImltcG9ydCBwbG90U29jaWFsTWVkaWFJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zXCI7XHJcbmltcG9ydCBwcm9maWxlUGljdHVyZSBmcm9tIFwiLi4vaW1hZ2VzL3Byb2ZpbGVQaWN0dXJlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXR7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiLFwiYWJvdXQtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5jbGFzc05hbWUgPVwiaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJcIjtcclxuICAgICAgICBpbWFnZURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXMubG9hZEltYWdlKCkpO1xyXG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGhpcy5wZXJzb25hbERlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZURlc2NyaXB0aW9uKTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXJzb25hbERlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IG1lXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiQXMgYW4gRVNMIEVuZ2xpc2ggdGVhY2hlciwgSSdtIGNvbW1pdHRlZCB0byBmb3N0ZXJpbmcgbGFuZ3VhZ2UgcHJvZmljaWVuY3kgYW5kIGN1bHR1cmFsIHVuZGVyc3RhbmRpbmcuIE91dHNpZGUgdGhlIGNsYXNzcm9vbSwgSSdtIGFuIGF2aWQgcnVubmVyLCBmaW5kaW5nIHNvbGFjZSBpbiBlYWNoIHN0cmlkZSwgYW5kIGEgcGFzc2lvbmF0ZSByZWFsIGVzdGF0ZSBlbnRodXNpYXN0LCBleHBsb3JpbmcgdGhlIGludHJpY2FjaWVzIG9mIHByb3BlcnR5IGludmVzdG1lbnQuIEJhbGFuY2luZyBwcm9mZXNzaW9uYWwgZ3Jvd3RoIHdpdGggcGVyc29uYWwgcHVyc3VpdHMgZHJpdmVzIG15IGpvdXJuZXkuXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90U29jaWFsTWVkaWFJY29ucyhcImFib3V0XCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZEltYWdlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBwcm9maWxlUGljdHVyZTtcclxuICAgICAgICBpbWFnZS5hbHQgPSBcIkEgcG9ydHJhaXQgZm9yIG1lXCI7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtcGljdHVyZVwiKTtcclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5uZXJ7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zdWJUZXh0KCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJhbm5lckhhbmRsZXJCdG4oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItdGl0bGVcIilcclxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJHYXJ5IExlaVwiO1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN1YlRleHQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IFwiQSB3ZWIgZGV2ZWxvcGVyIGFuZCBhbiBFU0wgdGVhY2hlclwiXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVXcml0ZXJcIiwgXCJzdWJ0aXRsZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZVdyaXRlciA9ICgpID0+e1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IHN1YnRpdGxlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCArPSBzdWJ0aXRsZS5jaGFyQXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgMjAwKSAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzZXRJbmRleCwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2V0SW5kZXggPSAoKSA9PntcclxuICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBcIlwiIC8vY2xlYXIgdGhlIHRpdGxlXHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgdHlwZVdyaXRlcigpOyAvL1N0YXJ0IHR5cGV3cml0ZSBlZmZlY3QgYWdhaW5cclxuICAgICAgICB9XHJcbiAgICAgICAgdHlwZVdyaXRlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmFubmVySGFuZGxlckJ0biA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItYnRuLW5hdi1hYm91dFwiKVxyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5hcnJvdy1kb3duLXRoaWNrPC90aXRsZT48cGF0aCBkPVwiTTEwLDRIMTRWMTNMMTcuNSw5LjVMMTkuOTIsMTEuOTJMMTIsMTkuODRMNC4wOCwxMS45Mkw2LjUsOS41TDEwLDEzVjRaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgYFxyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgc2Nyb2xsVG9TZWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcblxyXG59IiwiXHJcbi8vIGltcG9ydCBwaG9uZSBmcm9tIFwiLi4vaW1hZ2VzL3Bob25lLnN2Z1wiO1xyXG5pbXBvcnQgcGxvdFNvY2lhbE1lZGlhSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29uc1wiO1xyXG5pbXBvcnQgY29udGFjdEltZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbnRhY3QuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0e1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWN0ID0ge2FkZHJlc3M6IFwiMTIzNCBTbWl0aCBTdHJlZXQgTWlhbWksIEZsb3JpZGEgMzMxNTZcIiwgcGhvbmU6IFwiNTU1LTU1NS01NTU1XCIsIGVtYWlsOiBcImcxMjM0NTZAbWFpbC5jb21cIn07XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xyXG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KGNvbnRhY3QpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodC1jb250YWluZXJcIik7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodGhpcy5wbG90SW1hZ2UoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBNZVwiO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGxvdEltYWdlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWFnZVwiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0SW1nO1xyXG5cclxuICAgICAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb250ZW50ID0gKGNvbnRhY3QpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zdWJ0aXRsZVwiKTtcclxuICAgICAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGdldCBpbiB0b3VjaCBpZiB5b3UgdGhpbmsgb3VyIHdvcmsgY291bGQgYmUgbXV0dWFsbHkgYmVuZWZpY2lhbC5cIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwbG90Q29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiICBmaWxsPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bWFwLW1hcmtlci1vdXRsaW5lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVNMTIsMkE3LDcgMCAwLDEgMTksOUMxOSwxNC4yNSAxMiwyMiAxMiwyMkMxMiwyMiA1LDE0LjI1IDUsOUE3LDcgMCAwLDEgMTIsMk0xMiw0QTUsNSAwIDAsMCA3LDlDNywxMCA3LDEyIDEyLDE4LjcxQzE3LDEyIDE3LDEwIDE3LDlBNSw1IDAgMCwwIDEyLDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cGhvbmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS41LDIyQzIwLjMzLDIyIDIxLDIxLjMzIDIxLDIwLjVWMTdDMjEsMTYuMTcgMjAuMzMsMTUuNSAxOS41LDE1LjVDMTguMzMsMTUuNSAxNy4xOCwxNS4zMiAxNi4wOCwxNC45NUMxNS41NSwxNC43OCAxNC45NywxNC45MiAxNC41NiwxNS4zMkwxMy4xMiwxNi43NkMxMC42NCwxNS40MSA4LjU3LDEzLjM0IDcuMjMsMTAuODdMOC42Niw5LjQ0QzkuMDcsOS4wNSA5LjIyLDguNDcgOS4wNCw3LjkxQzguNjgsNi44MiA4LjUsNS42NyA4LjUsNC41QzguNSwzLjY3IDcuODMsMyA3LDNIMy41QzIuNjcsMyAyLDMuNjcgMiw0LjVDMiwxNC4xNSA5Ljg1LDIyIDE5LjUsMjJNMy41LDRIN0M3LjI4LDQgNy41LDQuMjIgNy41LDQuNUM3LjUsNS43OCA3LjcsNy4wMyA4LjA5LDguMjJDOC4xNCw4LjM2IDguMTMsOC41NiA3Ljk3LDguNzJMNiwxMC42OEM3LjY1LDEzLjkxIDEwLjA3LDE2LjMzIDEzLjMxLDE4TDE1LjI2LDE2LjAzQzE1LjQsMTUuODkgMTUuNTksMTUuODUgMTUuNzcsMTUuOUMxNi45NywxNi4zIDE4LjIyLDE2LjUgMTkuNSwxNi41QzE5Ljc4LDE2LjUgMjAsMTYuNzIgMjAsMTdWMjAuNUMyMCwyMC43OCAxOS43OCwyMSAxOS41LDIxQzEwLjQsMjEgMywxMy42IDMsNC41QzMsNC4yMiAzLjIyLDQgMy41LDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmVtYWlsLW91dGxpbmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDZDMjIgNC45IDIxLjEgNCAyMCA0SDRDMi45IDQgMiA0LjkgMiA2VjE4QzIgMTkuMSAyLjkgMjAgNCAyMEgyMEMyMS4xIDIwIDIyIDE5LjEgMjIgMThWNk0yMCA2TDEyIDExTDQgNkgyME0yMCAxOEg0VjhMMTIgMTNMMjAgOFYxOFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsb3RDb250YWN0SW5mbygpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdFNvY2lhbE1lZGlhSWNvbnMoXCJjb250YWN0XCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuanMnO1xyXG5pbXBvcnQgYmFubmVyIGZyb20gXCIuL2Jhbm5lci5qc1wiO1xyXG5pbXBvcnQgd29yayBmcm9tIFwiLi93b3JrLmpzXCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcbmltcG9ydCBldmVudEhhbmRsZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcclxuICAgIHN0YXRpYyBsb2FkUGFnZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIubG9hZEhlYWRlcigpKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMubG9hZENvbnRlbnQoKSk7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIubG9hZEZvb3RlcigpKTtcclxuXHJcbiAgICAgICAgZXZlbnRIYW5kbGVycy5sb2FkZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkQ29udGVudCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lci5sb2FkKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmsubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QubG9hZCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGN2TWFrZXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9jdi1tYWtlci5wbmdcIjtcclxuaW1wb3J0IG1lbW9yeUltZyBmcm9tIFwiLi4vaW1hZ2VzL21lbW9yeS5wbmdcIjtcclxuaW1wb3J0IHRvZG9saXN0SW1nIGZyb20gXCIuLi9pbWFnZXMvdG9kb2xpc3QucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyQXBwSW1nIGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWFwcC5wbmcnXHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtuYW1lOiBcIldlYXRoZXIgQXBwXCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogd2VhdGhlckFwcEltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vd2VhdGhlci1hcHAvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS93ZWF0aGVyLWFwcFwifSxcclxuICAgIHtuYW1lOiBcIlRvZG8gTGlzdFwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IHRvZG9saXN0SW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby90b2RvbGlzdC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L3RvZG9saXN0XCJ9LFxyXG4gICAge25hbWU6IFwiTWVtb3J5XCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogbWVtb3J5SW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby9tZW1vcnkvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS9tZW1vcnlcIn0sXHJcbiAgICB7bmFtZTogXCJDViBNYWtlclwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IGN2TWFrZXJJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL2xvcXVhY2lvdXMtcGFwcmVuamFrLWIyMzU2NS5uZXRsaWZ5LmFwcC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L2N2LW1ha2VyXCJ9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya3tcclxuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwid29yay10aXRsZVwiKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXkgV29ya1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3RzID0gKCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+e1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmRzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRzXCIpXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJBbiBpbWFnZSBvZiAke2l0ZW0ubmFtZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+JHtpdGVtLm5hbWV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmstZmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2l0ZW0uZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kaS1pY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Z2l0PC90aXRsZT48cGF0aCBkPVwiTTIuNiwxMC41OUw4LjM4LDQuOEwxMC4wNyw2LjVDOS44Myw3LjM1IDEwLjIyLDguMjggMTEsOC43M1YxNC4yN0MxMC40LDE0LjYxIDEwLDE1LjI2IDEwLDE2QTIsMiAwIDAsMCAxMiwxOEEyLDIgMCAwLDAgMTQsMTZDMTQsMTUuMjYgMTMuNiwxNC42MSAxMywxNC4yN1Y5LjQxTDE1LjA3LDExLjVDMTUsMTEuNjUgMTUsMTEuODIgMTUsMTJBMiwyIDAgMCwwIDE3LDE0QTIsMiAwIDAsMCAxOSwxMkEyLDIgMCAwLDAgMTcsMTBDMTYuODIsMTAgMTYuNjUsMTAgMTYuNSwxMC4wN0wxMy45Myw3LjVDMTQuMTksNi41NyAxMy43MSw1LjU1IDEyLjc4LDUuMTZDMTIuMzUsNSAxMS45LDQuOTYgMTEuNSw1LjA3TDkuOCwzLjM4TDEwLjU5LDIuNkMxMS4zNywxLjgxIDEyLjYzLDEuODEgMTMuNDEsMi42TDIxLjQsMTAuNTlDMjIuMTksMTEuMzcgMjIuMTksMTIuNjMgMjEuNCwxMy40MUwxMy40MSwyMS40QzEyLjYzLDIyLjE5IDExLjM3LDIyLjE5IDEwLjU5LDIxLjRMMi42LDEzLjQxQzEuODEsMTIuNjMgMS44MSwxMS4zNyAyLjYsMTAuNTlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2l0ZW0ud2Vic2l0ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJtZGktaWNvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm9wZW4taW4tbmV3PC90aXRsZT48cGF0aCBkPVwiTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1idWlsdGluXCI+PGk+QnVpbHQgd2l0aCAke2l0ZW0ubGFuZ3VhZ2V9PC9pPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4uL3NyYy9wYWdlcy9ob21lcGFnZSc7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBob21lUGFnZS5sb2FkUGFnZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==