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
    box-sizing: border-box;
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
    font: 3rem sans-serif;
    font-weight: 700;
}
h3{
    font: 2rem sans-serif;
    font-weight: 700;
}

p{
    font-size: .9rem;
}

*[aria-hidden = true]{
    display: none;
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
@media (max-width: 55em)
{
    .header-container{
        background: rgba(25, 25, 25, 0.7);
    }
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

.nav-links{
    color: var(--primary-color-light);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    font-size: inherit;
}
.nav-links:hover, .nav-links:focus{
    color: rgba(250,250,250,.7);
}
.menu-btn{
    font-weight: 600;
    font-size: .9rem;
    text-transform: uppercase;
    cursor: pointer;
    display: none;
    position: absolute;
    top: .77rem;
    right: .5rem;
    z-index: 100;
    background-color: var(--primary-color-light);
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
    margin-top: 10rem;
    cursor: pointer;
    height: 70px;
    width: 70px;
    fill: var(--primary-color-light);
    background: none;
    border: 2px solid var(--primary-color-light);
    border-radius: 50%;
}

.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{
    animation: rotate infinite .5s linear;
}
@keyframes rotate{
    0%{transform:rotate(0deg) scale(1.2)};
    100%{transform: rotate(360deg) scale(1.2);}
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
    padding: 2rem 1.2rem;
    border: 1px solid var(--primary-color-dark);
    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);
    max-width: 500px;
    width: 100%;

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
    width: 400px;
    height: auto;
    outline: 1px solid green;
    box-shadow: 1px 2px 1px 1px rgba(25, 25, 25, 0.7);
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

.work-title{
    text-align: center;
    padding-bottom: 3rem;
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
}

/* footer */
.footer-container{
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    text-align: center;
    padding: 1.2rem 0;
}

/*Componets */

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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --primary-font: 'Poppins', sans-serif;\r\n    --primary-color-dark: #000;\r\n    --primary-color-light: #fff;\r\n    --primary-fc-dark: #000;\r\n    --primary-bg-color-dark: var(--primary-color-dark);\r\n    --view-small: 55em;\r\n}\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    background-color: var(--primary-color-light);\r\n    font-family: var(--primary-font);\r\n} \r\n/* Header */\r\nheader{\r\n    position: absolute;\r\n    top: 3rem;\r\n    width: 100%;\r\n    background: rgba(25, 25, 25, 0.3);\r\n}\r\nh2{\r\n    font: 3rem sans-serif;\r\n    font-weight: 700;\r\n}\r\nh3{\r\n    font: 2rem sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\np{\r\n    font-size: .9rem;\r\n}\r\n\r\n*[aria-hidden = true]{\r\n    display: none;\r\n}\r\n\r\n.header-container{\r\n    position: relative;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    color: var(--primary-color-light);\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .header-container{\r\n        background: rgba(25, 25, 25, 0.7);\r\n    }\r\n}\r\n\r\n.title-logo{\r\n    padding: 12px 12px;\r\n    font-weight: 700;\r\n}\r\n.nav-container{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 1.88rem;\r\n    padding: 12px 12px;\r\n}\r\n\r\n.nav-links{\r\n    color: var(--primary-color-light);\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    font-size: inherit;\r\n}\r\n.nav-links:hover, .nav-links:focus{\r\n    color: rgba(250,250,250,.7);\r\n}\r\n.menu-btn{\r\n    font-weight: 600;\r\n    font-size: .9rem;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    display: none;\r\n    position: absolute;\r\n    top: .77rem;\r\n    right: .5rem;\r\n    z-index: 100;\r\n    background-color: var(--primary-color-light);\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 6px 12px;\r\n}\r\n.menu-btn:focus, .menu-btn:hover{\r\n    background-color: rgba(255, 165, 0, 0.7);\r\n}\r\n\r\n@media (max-width: 55em){\r\n    header{\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n    nav{\r\n        background-color: rgba(25, 25, 25, 0.9);\r\n        width: 100%;\r\n        height: 100vh;\r\n        position: absolute;\r\n    }\r\n   \r\n    .header-container{\r\n        flex-direction: column;\r\n        align-items: normal;\r\n    }\r\n    .menu-btn{\r\n        display: block;\r\n    }\r\n    .nav-container{\r\n        margin-top: 3rem;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .nav-container > li{\r\n        width: 100%;\r\n        border-bottom: 1px solid white;\r\n        padding: 1rem .5rem;\r\n    }\r\n}\r\n/* Content */\r\n\r\n.content-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    padding: 0;\r\n    background-color: var(--primary-bg-color-dark);\r\n\r\n}\r\n/* Banner */\r\n.banner-title{\r\n    color: var(--primary-color-light);\r\n    line-height: 1;\r\n    font-size: 7rem;\r\n    padding: 0 12px;\r\n}\r\n\r\n.subtitle{\r\n    color: var(--primary-color-light);\r\n    font-size: 1.6rem;\r\n    padding-top: 1.2rem;\r\n}\r\n@media (max-width: 55em){\r\n    .banner-title{\r\n        font-size: 4rem;\r\n    }\r\n    .subtitle{\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n.banner-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n}\r\n.banner-btn-nav-about\r\n{\r\n    margin-top: 10rem;\r\n    cursor: pointer;\r\n    height: 70px;\r\n    width: 70px;\r\n    fill: var(--primary-color-light);\r\n    background: none;\r\n    border: 2px solid var(--primary-color-light);\r\n    border-radius: 50%;\r\n}\r\n\r\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\r\n    animation: rotate infinite .5s linear;\r\n}\r\n@keyframes rotate{\r\n    0%{transform:rotate(0deg) scale(1.2)};\r\n    100%{transform: rotate(360deg) scale(1.2);}\r\n}\r\n\r\n/* About */\r\n.section-container{\r\n    background-color: var(--primary-color-light);\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.about-background{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-color-light);\r\n    height: 100vh;\r\n}\r\n.about-description{\r\n    color: var(--primary-color-dark);\r\n    background-color: var(--primary-color-light);\r\n    font-size: 1.2rem;\r\n    padding: 2rem 1.2rem;\r\n    border: 1px solid var(--primary-color-dark);\r\n    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.imageDescription-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    margin-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    z-index: 0;\r\n    \r\n}\r\n.imageDescription-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -10;\r\n    background-color: var(--primary-color-dark);\r\n    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);\r\n\r\n}\r\n\r\n@media (max-width: 55em) {\r\n    .imageDescription-container{\r\n        flex-wrap: wrap;\r\n\r\n    }\r\n}\r\n.profile-picture{\r\n    width: 400px;\r\n    height: auto;\r\n    outline: 1px solid green;\r\n    box-shadow: 1px 2px 1px 1px rgba(25, 25, 25, 0.7);\r\n}\r\n#about .social-media-icons-container{\r\n    justify-content: flex-end;\r\n}\r\n\r\n/*Skills */\r\n:root{\r\n    --total-brand: 12;\r\n    --logo-width: 12rem;\r\n    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);\r\n}\r\n\r\n.skill-title{\r\n    text-align: center;\r\n}\r\n\r\n.slider{\r\n    position: relative;\r\n    height: 20rem;\r\n    background-color: #fff;\r\n    box-shadow: 0.8rem 1.4rem -.2rem #0001;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.slider::before,\r\n.slider::after{\r\n    position: absolute;\r\n    content: \"\";\r\n\r\n    height: 100%;\r\n    width: var(--logo-width);\r\n}\r\n.slider::before{\r\n    left: 0;\r\n    background: linear-gradient(to right, #fff 0%,#0000 100%);\r\n}\r\n.slider::after{\r\n    right: 0;\r\n    background: linear-gradient(to left, #fff 0%,#0000 100%);\r\n}\r\n\r\n.slider ul.brands{\r\n    list-style: none;\r\n    width: var(--total-logo-width);\r\n    display: flex;\r\n\r\n    animation: slideLeft 12s linear infinite;\r\n}\r\n.slider:hover ul.brands{\r\n    animation-play-state: paused;\r\n}\r\n\r\n@keyframes slideLeft {\r\n    100%{\r\n        transform: translateX(calc(-100% / 2));\r\n    }\r\n}\r\n\r\nul.brands li.brand-logo{\r\n    width: var(--logo-width);\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin-left: 3rem\r\n}\r\n\r\n.skill-icon{\r\n    height: 100px;\r\n    /* margin: 0 30px; */\r\n}\r\n\r\n/* Work */\r\n\r\n.content{\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    padding: 5rem 0;\r\n}\r\n\r\n.work-title{\r\n    text-align: center;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.top-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.mdi-icons{\r\n    height: 1.9rem;\r\n    width: 1.9rem;\r\n    fill: var(--primary-color-dark);\r\n    background-color: inherit;\r\n}\r\n.mdi-icons:hover, .mdi-icons:active{\r\n    fill: blue;\r\n}\r\n\r\n.link-file-container{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: .3rem;\r\n}\r\n.link-file-container{\r\n    list-style: none;\r\n}\r\n.link-file-container a{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.project-container{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n    gap: 1.6rem;\r\n    padding: 2rem 12px;\r\n}\r\n\r\n.title-name{\r\n    --spacing: 1.2rem;\r\n    font-size: 1.8rem;\r\n    padding-bottom: var(--spacing);\r\n}\r\n\r\n.project-cards{\r\n    display: grid;\r\n    grid-template-rows: 1fr .7fr;\r\n    box-shadow: 2px 2px 3px 2px rgba(25, 25, 25, 0.3);\r\n}\r\n\r\n.project-image{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.project-bottom{\r\n    border-top: 1px solid black;\r\n    padding: 1.2rem 1.2rem;\r\n\r\n}\r\n.project-description{\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* Contact */\r\n\r\n.contact-flex{\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n    padding-bottom: .3rem;\r\n}\r\n\r\n.contact-container{\r\n    --spacing-big: 3rem;\r\n    color: var(--primary-color-light);\r\n    margin-top: var(--spacing-big);\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n@media (max-width: 55em)\r\n{\r\n    .contact-container{\r\n        display: block;\r\n    }\r\n}\r\n\r\n.contact-image{\r\n    max-width: 700px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.social-media-icons-container{\r\n    display: flex;\r\n    gap: 16px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .social-media-icons-container{\r\n        justify-content: center;\r\n        padding: 1.2rem;\r\n    }\r\n}\r\n.social-media-icons{\r\n    list-style: none;\r\n}\r\n.social-media-icons-links{\r\n    cursor: pointer;\r\n    \r\n}\r\n.devicon{\r\n    font-size: 2rem;\r\n}\r\n\r\n.social-media-links{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.left-container{\r\n    --spacing-1: 1rem;\r\n    padding: 0 var(--spacing-1);\r\n}\r\n\r\n.left-container h2{\r\n    --spacing-2: 1.2rem;\r\n    padding-bottom: 1.12rem;\r\n}\r\n.left-container .contact-subtitle{\r\n    --spacing-1: 1rem;\r\n    padding-bottom: var(--spacing-1);\r\n}\r\n\r\n.right-container{\r\n    padding: 0 12px;\r\n}\r\n\r\n/* footer */\r\n.footer-container{\r\n    background-color: var(--primary-color-dark);\r\n    color: var(--primary-color-light);\r\n    text-align: center;\r\n    padding: 1.2rem 0;\r\n}\r\n\r\n/*Componets */\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.sticky{\r\n    position: sticky;\r\n    top: 0;\r\n    background: rgba(25, 25, 25, 0.7);\r\n    z-index: 20;\r\n}\r\n\r\n.blink{\r\n    animation: customBlink 2s infinite ease;\r\n}\r\n\r\n@keyframes customBlink{\r\n    0%,\r\n    50%,\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n    25%,\r\n    75%{\r\n        opacity: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
        this.navigationSectionHandler();
        this.sliderHandler();
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
        const navigationPage = document.querySelector("nav");
            
        const handler = () =>{
            if(navigationPage.getAttribute("aria-hidden") === "false") {
                navigationPage.setAttribute("aria-hidden", "true");
                menu.textContent = "menu";
            } else{
                navigationPage.setAttribute("aria-hidden", "false");
                menu.textContent = "close";
            }   
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
        image.className = "profile-picture";
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
        }, 6000);

        return container;
    }

    static title = () =>{
        const title = "Hi, my name is Gary";
        const titleText = document.createElement("h1");
        titleText.className = "banner-title";

         typeWriter(title, titleText);

        return titleText;
    }

    static subText = () =>{
        const subtitle = "A web developer and an ESL teacher"
        const text = document.createElement("p");
        text.classList.add("typeWriter", "subtitle");
        
        typeWriter(subtitle, text);

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
/* harmony import */ var _skills_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills.js */ "./src/pages/skills.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.js */ "./src/pages/contact.js");
/* harmony import */ var _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/eventHandlers.js */ "./src/components/eventHandlers.js");









class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter());

        _components_eventHandlers_js__WEBPACK_IMPORTED_MODULE_7__["default"].loadeHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(_banner_js__WEBPACK_IMPORTED_MODULE_2__["default"].load());
        content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_4__["default"].load());
        content.appendChild(_skills_js__WEBPACK_IMPORTED_MODULE_5__["default"].load());
        content.appendChild(_work_js__WEBPACK_IMPORTED_MODULE_3__["default"].load());
        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_6__["default"].load());

        return content;

    }
}

/***/ }),

/***/ "./src/pages/skills.js":
/*!*****************************!*\
  !*** ./src/pages/skills.js ***!
  \*****************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksWUFBWSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxV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YUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDWTtBQUM3QztBQUNBLHFDQUFxQywyREFBUSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL3NraWxscy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy93b3JrLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMDAwO1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmO1xyXG4gICAgLS1wcmltYXJ5LWZjLWRhcms6ICMwMDA7XHJcbiAgICAtLXByaW1hcnktYmctY29sb3ItZGFyazogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIC0tdmlldy1zbWFsbDogNTVlbTtcclxufVxyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG59IFxyXG4vKiBIZWFkZXIgKi9cclxuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuMyk7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250OiAzcmVtIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbmgze1xyXG4gICAgZm9udDogMnJlbSBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuXHJcbipbYXJpYS1oaWRkZW4gPSB0cnVlXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXHJcbntcclxuICAgIC5oZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlLWxvZ297XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5uYXYtY29udGFpbmVye1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEuODhyZW07XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5uYXYtbGlua3N7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcbi5uYXYtbGlua3M6aG92ZXIsIC5uYXYtbGlua3M6Zm9jdXN7XHJcbiAgICBjb2xvcjogcmdiYSgyNTAsMjUwLDI1MCwuNyk7XHJcbn1cclxuLm1lbnUtYnRue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLjc3cmVtO1xyXG4gICAgcmlnaHQ6IC41cmVtO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxufVxyXG4ubWVudS1idG46Zm9jdXMsIC5tZW51LWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjUsIDAsIDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIG5hdntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyNSwgMjUsIDAuOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmhlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdi1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmF2LWNvbnRhaW5lciA+IGxpe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xyXG4gICAgfVxyXG59XHJcbi8qIENvbnRlbnQgKi9cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRhcmspO1xyXG5cclxufVxyXG4vKiBCYW5uZXIgKi9cclxuLmJhbm5lci10aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG59XHJcblxyXG4uc3VidGl0bGV7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xyXG4gICAgLmJhbm5lci10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuc3VidGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbn1cclxuLmJhbm5lci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iYW5uZXItYnRuLW5hdi1hYm91dFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5iYW5uZXItYnRuLW5hdi1hYm91dDpob3ZlciwgLmJhbm5lci1idG4tbmF2LWFib3V0OmZvY3Vze1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgaW5maW5pdGUgLjVzIGxpbmVhcjtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZXtcclxuICAgIDAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZykgc2NhbGUoMS4yKX07XHJcbiAgICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTt9XHJcbn1cclxuXHJcbi8qIEFib3V0ICovXHJcbi5zZWN0aW9uLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYWJvdXQtYmFja2dyb3VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5hYm91dC1kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNik7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgXHJcbn1cclxuLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVyOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDQwJSwgMCUgOTUlKTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XHJcbiAgICAuaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIH1cclxufVxyXG4ucHJvZmlsZS1waWN0dXJle1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggMXB4IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcclxufVxyXG4jYWJvdXQgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4vKlNraWxscyAqL1xyXG46cm9vdHtcclxuICAgIC0tdG90YWwtYnJhbmQ6IDEyO1xyXG4gICAgLS1sb2dvLXdpZHRoOiAxMnJlbTtcclxuICAgIC0tdG90YWwtbG9nby13aWR0aDogY2FsYyh2YXIoLS10b3RhbC1icmFuZCkgKiB2YXIoLS1sb2dvLXdpZHRoKSAqIDIpO1xyXG59XHJcblxyXG4uc2tpbGwtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAuOHJlbSAxLjRyZW0gLS4ycmVtICMwMDAxO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVyOjpiZWZvcmUsXHJcbi5zbGlkZXI6OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XHJcbn1cclxuLnNsaWRlcjo6YmVmb3Jle1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcclxufVxyXG4uc2xpZGVyOjphZnRlcntcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmYgMCUsIzAwMDAgMTAwJSk7XHJcbn1cclxuXHJcbi5zbGlkZXIgdWwuYnJhbmRze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMTJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4uc2xpZGVyOmhvdmVyIHVsLmJyYW5kc3tcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgLyAyKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xyXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW1cclxufVxyXG5cclxuLnNraWxsLWljb257XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgLyogbWFyZ2luOiAwIDMwcHg7ICovXHJcbn1cclxuXHJcbi8qIFdvcmsgKi9cclxuXHJcbi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbn1cclxuXHJcbi53b3JrLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi50b3AtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubWRpLWljb25ze1xyXG4gICAgaGVpZ2h0OiAxLjlyZW07XHJcbiAgICB3aWR0aDogMS45cmVtO1xyXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLm1kaS1pY29uczpob3ZlciwgLm1kaS1pY29uczphY3RpdmV7XHJcbiAgICBmaWxsOiBibHVlO1xyXG59XHJcblxyXG4ubGluay1maWxlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAuM3JlbTtcclxufVxyXG4ubGluay1maWxlLWNvbnRhaW5lcntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmxpbmstZmlsZS1jb250YWluZXIgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxLjZyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XHJcbn1cclxuXHJcbi50aXRsZS1uYW1le1xyXG4gICAgLS1zcGFjaW5nOiAxLjJyZW07XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nKTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgLjdmcjtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDI1LCAyNSwgMjUsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ucHJvamVjdC1ib3R0b217XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS4ycmVtO1xyXG5cclxufVxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiBDb250YWN0ICovXHJcblxyXG4uY29udGFjdC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lcntcclxuICAgIC0tc3BhY2luZy1iaWc6IDNyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcclxue1xyXG4gICAgLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pbWFnZXtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXHJcbntcclxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25ze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc29jaWFsLW1lZGlhLWljb25zLWxpbmtze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuLmRldmljb257XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEtbGlua3N7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmxlZnQtY29udGFpbmVye1xyXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctMSk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRhaW5lciBoMntcclxuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcclxufVxyXG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XHJcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4ucmlnaHQtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG59XHJcblxyXG4vKiBmb290ZXIgKi9cclxuLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDA7XHJcbn1cclxuXHJcbi8qQ29tcG9uZXRzICovXHJcblxyXG4uaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN0aWNreXtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XHJcbiAgICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmJsaW5re1xyXG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xyXG4gICAgMCUsXHJcbiAgICA1MCUsXHJcbiAgICAxMDAle1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAyNSUsXHJcbiAgICA3NSV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFD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RUEsV0FBVztBQUNYO0lBQ0ksMkNBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0k7OztRQUdJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLXByaW1hcnktZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmO1xcclxcbiAgICAtLXByaW1hcnktZmMtZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWJnLWNvbG9yLWRhcms6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIC0tdmlldy1zbWFsbDogNTVlbTtcXHJcXG59XFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcclxcbn0gXFxyXFxuLyogSGVhZGVyICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcXHJcXG59XFxyXFxuaDJ7XFxyXFxuICAgIGZvbnQ6IDNyZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuaDN7XFxyXFxuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuKlthcmlhLWhpZGRlbiA9IHRydWVde1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxcclxcbntcXHJcXG4gICAgLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWxvZ297XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLm5hdi1jb250YWluZXJ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMS44OHJlbTtcXHJcXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtze1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbi5uYXYtbGlua3M6aG92ZXIsIC5uYXYtbGlua3M6Zm9jdXN7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1MCwyNTAsMjUwLC43KTtcXHJcXG59XFxyXFxuLm1lbnUtYnRue1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAuNzdyZW07XFxyXFxuICAgIHJpZ2h0OiAuNXJlbTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbn1cXHJcXG4ubWVudS1idG46Zm9jdXMsIC5tZW51LWJ0bjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NSwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIG5hdntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAyNSwgMC45KTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcbiAgIFxcclxcbiAgICAuaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWJ0bntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtY29udGFpbmVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtY29udGFpbmVyID4gbGl7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyogQ29udGVudCAqL1xcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XFxyXFxuXFxyXFxufVxcclxcbi8qIEJhbm5lciAqL1xcclxcbi5iYW5uZXItdGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXHJcXG4gICAgLmJhbm5lci10aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuc3VidGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmJhbm5lci1idG4tbmF2LWFib3V0XFxyXFxue1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1idG4tbmF2LWFib3V0OmhvdmVyLCAuYmFubmVyLWJ0bi1uYXYtYWJvdXQ6Zm9jdXN7XFxyXFxuICAgIGFuaW1hdGlvbjogcm90YXRlIGluZmluaXRlIC41cyBsaW5lYXI7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcm90YXRle1xcclxcbiAgICAwJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNjYWxlKDEuMil9O1xcclxcbiAgICAxMDAle3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTt9XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLnNlY3Rpb24tY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uYWJvdXQtYmFja2dyb3VuZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uYWJvdXQtZGVzY3JpcHRpb257XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMS4ycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjYpO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSA0MCUsIDAlIDk1JSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XFxyXFxuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucHJvZmlsZS1waWN0dXJle1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xcclxcbn1cXHJcXG4jYWJvdXQgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi8qU2tpbGxzICovXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tdG90YWwtYnJhbmQ6IDEyO1xcclxcbiAgICAtLWxvZ28td2lkdGg6IDEycmVtO1xcclxcbiAgICAtLXRvdGFsLWxvZ28td2lkdGg6IGNhbGModmFyKC0tdG90YWwtYnJhbmQpICogdmFyKC0tbG9nby13aWR0aCkgKiAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMC44cmVtIDEuNHJlbSAtLjJyZW0gIzAwMDE7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjpiZWZvcmUsXFxyXFxuLnNsaWRlcjo6YWZ0ZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcclxcbn1cXHJcXG4uc2xpZGVyOjpiZWZvcmV7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXHJcXG59XFxyXFxuLnNsaWRlcjo6YWZ0ZXJ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB1bC5icmFuZHN7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMTJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLnNsaWRlcjpob3ZlciB1bC5icmFuZHN7XFxyXFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlIC8gMikpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xcclxcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbVxcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtaWNvbntcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgLyogbWFyZ2luOiAwIDMwcHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIFdvcmsgKi9cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi53b3JrLXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubWRpLWljb25ze1xcclxcbiAgICBoZWlnaHQ6IDEuOXJlbTtcXHJcXG4gICAgd2lkdGg6IDEuOXJlbTtcXHJcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuLm1kaS1pY29uczpob3ZlciwgLm1kaS1pY29uczphY3RpdmV7XFxyXFxuICAgIGZpbGw6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IC4zcmVtO1xcclxcbn1cXHJcXG4ubGluay1maWxlLWNvbnRhaW5lcntcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmstZmlsZS1jb250YWluZXIgYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1uYW1le1xcclxcbiAgICAtLXNwYWNpbmc6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZHN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDI1LCAyNSwgMjUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltYWdle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtYm90dG9te1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjJyZW07XFxyXFxuXFxyXFxufVxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgLS1zcGFjaW5nLWJpZzogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWJpZyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxyXFxue1xcclxcbiAgICAuY29udGFjdC1jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWFnZXtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxyXFxue1xcclxcbiAgICAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbnN7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5kZXZpY29ue1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEtbGlua3N7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWNvbnRhaW5lcntcXHJcXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIGgye1xcclxcbiAgICAtLXNwYWNpbmctMjogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcXHJcXG59XFxyXFxuLmxlZnQtY29udGFpbmVyIC5jb250YWN0LXN1YnRpdGxle1xcclxcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuLmZvb3Rlci1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLypDb21wb25ldHMgKi9cXHJcXG5cXHJcXG4uaGlkZGVue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5e1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxufVxcclxcblxcclxcbi5ibGlua3tcXHJcXG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xcclxcbiAgICAwJSxcXHJcXG4gICAgNTAlLFxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUsXFxyXFxuICAgIDc1JXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXJzIHtcclxuXHJcbiAgICBzdGF0aWMgbG9hZGVIYW5kbGVycyA9ICgpID0+e1xyXG4gICAgICAgIHRoaXMubWVudUJ0bkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb25IYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VjdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNsaWRlckhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2xpZGVySGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bC5icmFuZHNcIiksXHJcbiAgICAgICAgdG90YWxfYnJhbmQgPSBicmFuZHMuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG90YWwtYnJhbmQnLCB0b3RhbF9icmFuZCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b3RhbF9icmFuZDsgaSsrKXtcclxuICAgICAgICAgICAgYnJhbmRzLmFwcGVuZENoaWxkKGJyYW5kcy5jaGlsZHJlbltpXS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWVudUJ0bkhhbmRsZXIgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgICAgIGlmKG5hdmlnYXRpb25QYWdlLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBoYW5kbGVyKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uSGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigoXCJyZXNpemVcIiksICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBpZih3aWR0aCA+IDg4MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY3JvbGxUb1NlY3Rpb24gPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uU2VjdGlvbkhhbmRsZXIgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgbmF2QnRuID0gKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XHJcbiAgICAgICAgbmF2LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgbmF2QnRuKSlcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVye1xyXG4gICAgc3RhdGljIGxvYWRGb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChmTmFtZSwgbE5hbWUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgwqkgQ29weXJpZ2h0IDIwMjQsICR7Zk5hbWV9ICR7bE5hbWV9YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGFuIE9wZW4gU291cmNlIFByb2plY3RcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCJHYXJ5XCIsIFwiTGVpXCIpKTtcclxuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGluaygpKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJ7XHJcbiAgICBzdGF0aWMgbG9hZEhlYWRlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PntcclxuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChmTmFtZSwgbE5hbWUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBmTmFtZSArIFwiIFwiICtsTmFtZTtcclxuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtbG9nb1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwibWVudVwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDg4MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsaXN0cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuT3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgICAgICB1bk9yZGVyZWRMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRhYnMgPSBbe3BhZ2U6IFwiYWJvdXRcIiwgbGluazogXCJhYm91dFwifSwge3BhZ2U6IFwid29ya1wiLCBsaW5rOiBcIndvcmtcIn0sIHtwYWdlOiBcImNvbnRhY3RcIiwgbGluazogXCJjb250YWN0XCJ9XVxyXG4gICAgICAgICAgICAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCA9IGA8YSBjbGFzcz1cIm5hdi1saW5rc1wiPiR7aXRlbS5wYWdlfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bk9yZGVyZWRMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0cygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKFwiR2FyeVwiLCBcIkxlaVwiKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24oKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiY29uc3QgcGxvdFNvY2lhbE1lZGlhSWNvbnMgPSAoY2xhc3NOYW1lKSA9PntcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gIGBzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyYDtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWljb25zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ2l0aHViLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tZ2l0aHViLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnR3aXR0ZXIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi10d2l0dGVyLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tbGlua2VkaW4tcGxhaW5cIj48L2k+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsb3RTb2NpYWxNZWRpYUljb25zOyIsImltcG9ydCBwbG90U29jaWFsTWVkaWFJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zXCI7XHJcbmltcG9ydCBwcm9maWxlUGljdHVyZSBmcm9tIFwiLi4vaW1hZ2VzL3Byb2ZpbGVQaWN0dXJlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXR7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiLFwiYWJvdXQtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5jbGFzc05hbWUgPVwiaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJcIjtcclxuICAgICAgICBpbWFnZURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXMubG9hZEltYWdlKCkpO1xyXG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGhpcy5wZXJzb25hbERlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZURlc2NyaXB0aW9uKTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXJzb25hbERlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IG1lXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiQXMgYW4gRVNMIEVuZ2xpc2ggdGVhY2hlciwgSSdtIGNvbW1pdHRlZCB0byBmb3N0ZXJpbmcgbGFuZ3VhZ2UgcHJvZmljaWVuY3kgYW5kIGN1bHR1cmFsIHVuZGVyc3RhbmRpbmcuIE91dHNpZGUgdGhlIGNsYXNzcm9vbSwgSSdtIGFuIGF2aWQgcnVubmVyLCBmaW5kaW5nIHNvbGFjZSBpbiBlYWNoIHN0cmlkZSwgYW5kIGEgcGFzc2lvbmF0ZSByZWFsIGVzdGF0ZSBlbnRodXNpYXN0LCBleHBsb3JpbmcgdGhlIGludHJpY2FjaWVzIG9mIHByb3BlcnR5IGludmVzdG1lbnQuIEJhbGFuY2luZyBwcm9mZXNzaW9uYWwgZ3Jvd3RoIHdpdGggcGVyc29uYWwgcHVyc3VpdHMgZHJpdmVzIG15IGpvdXJuZXkuXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90U29jaWFsTWVkaWFJY29ucyhcImFib3V0XCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZEltYWdlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBwcm9maWxlUGljdHVyZTtcclxuICAgICAgICBpbWFnZS5hbHQgPSBcIkEgcG9ydHJhaXQgZm9yIG1lXCI7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gXCJwcm9maWxlLXBpY3R1cmVcIjtcclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcbn0iLCJjb25zdCB0eXBlV3JpdGVyID0gKHRpdGxlLCBlbGVtZW50KSA9PntcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aXRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGkgIT0gdGl0bGUubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRpdGxlLnNsaWNlKDAsIGkpICsgdGl0bGUuY2hhckF0KGkpICsgYDxzcGFuIGNsYXNzPVwiYmxpbmtcIj58PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH0sIGkgKiAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgICAgICAgICAgfSwgaSAqIDEwMCArIChNYXRoLnJhbmRvbSgpICogMTUwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5uZXJ7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKVxyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3ViVGV4dCgpKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5iYW5uZXJIYW5kbGVyQnRuKCkpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gXCJIaSwgbXkgbmFtZSBpcyBHYXJ5XCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIHRpdGxlVGV4dC5jbGFzc05hbWUgPSBcImJhbm5lci10aXRsZVwiO1xyXG5cclxuICAgICAgICAgdHlwZVdyaXRlcih0aXRsZSwgdGl0bGVUZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViVGV4dCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHN1YnRpdGxlID0gXCJBIHdlYiBkZXZlbG9wZXIgYW5kIGFuIEVTTCB0ZWFjaGVyXCJcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidHlwZVdyaXRlclwiLCBcInN1YnRpdGxlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHR5cGVXcml0ZXIoc3VidGl0bGUsIHRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmFubmVySGFuZGxlckJ0biA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItYnRuLW5hdi1hYm91dFwiKVxyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5hcnJvdy1kb3duLXRoaWNrPC90aXRsZT48cGF0aCBkPVwiTTEwLDRIMTRWMTNMMTcuNSw5LjVMMTkuOTIsMTEuOTJMMTIsMTkuODRMNC4wOCwxMS45Mkw2LjUsOS41TDEwLDEzVjRaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgYFxyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgc2Nyb2xsVG9TZWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcblxyXG59IiwiXHJcbi8vIGltcG9ydCBwaG9uZSBmcm9tIFwiLi4vaW1hZ2VzL3Bob25lLnN2Z1wiO1xyXG5pbXBvcnQgcGxvdFNvY2lhbE1lZGlhSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29uc1wiO1xyXG5pbXBvcnQgY29udGFjdEltZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbnRhY3QuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0e1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWN0ID0ge2FkZHJlc3M6IFwiMTIzNCBTbWl0aCBTdHJlZXQgTWlhbWksIEZsb3JpZGEgMzMxNTZcIiwgcGhvbmU6IFwiNTU1LTU1NS01NTU1XCIsIGVtYWlsOiBcImcxMjM0NTZAbWFpbC5jb21cIn07XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xyXG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KGNvbnRhY3QpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodC1jb250YWluZXJcIik7XHJcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQodGhpcy5wbG90SW1hZ2UoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBNZVwiO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGxvdEltYWdlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWFnZVwiKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBjb250YWN0SW1nO1xyXG5cclxuICAgICAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb250ZW50ID0gKGNvbnRhY3QpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zdWJ0aXRsZVwiKTtcclxuICAgICAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGdldCBpbiB0b3VjaCBpZiB5b3UgdGhpbmsgb3VyIHdvcmsgY291bGQgYmUgbXV0dWFsbHkgYmVuZWZpY2lhbC5cIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwbG90Q29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiICBmaWxsPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bWFwLW1hcmtlci1vdXRsaW5lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVNMTIsMkE3LDcgMCAwLDEgMTksOUMxOSwxNC4yNSAxMiwyMiAxMiwyMkMxMiwyMiA1LDE0LjI1IDUsOUE3LDcgMCAwLDEgMTIsMk0xMiw0QTUsNSAwIDAsMCA3LDlDNywxMCA3LDEyIDEyLDE4LjcxQzE3LDEyIDE3LDEwIDE3LDlBNSw1IDAgMCwwIDEyLDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cGhvbmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS41LDIyQzIwLjMzLDIyIDIxLDIxLjMzIDIxLDIwLjVWMTdDMjEsMTYuMTcgMjAuMzMsMTUuNSAxOS41LDE1LjVDMTguMzMsMTUuNSAxNy4xOCwxNS4zMiAxNi4wOCwxNC45NUMxNS41NSwxNC43OCAxNC45NywxNC45MiAxNC41NiwxNS4zMkwxMy4xMiwxNi43NkMxMC42NCwxNS40MSA4LjU3LDEzLjM0IDcuMjMsMTAuODdMOC42Niw5LjQ0QzkuMDcsOS4wNSA5LjIyLDguNDcgOS4wNCw3LjkxQzguNjgsNi44MiA4LjUsNS42NyA4LjUsNC41QzguNSwzLjY3IDcuODMsMyA3LDNIMy41QzIuNjcsMyAyLDMuNjcgMiw0LjVDMiwxNC4xNSA5Ljg1LDIyIDE5LjUsMjJNMy41LDRIN0M3LjI4LDQgNy41LDQuMjIgNy41LDQuNUM3LjUsNS43OCA3LjcsNy4wMyA4LjA5LDguMjJDOC4xNCw4LjM2IDguMTMsOC41NiA3Ljk3LDguNzJMNiwxMC42OEM3LjY1LDEzLjkxIDEwLjA3LDE2LjMzIDEzLjMxLDE4TDE1LjI2LDE2LjAzQzE1LjQsMTUuODkgMTUuNTksMTUuODUgMTUuNzcsMTUuOUMxNi45NywxNi4zIDE4LjIyLDE2LjUgMTkuNSwxNi41QzE5Ljc4LDE2LjUgMjAsMTYuNzIgMjAsMTdWMjAuNUMyMCwyMC43OCAxOS43OCwyMSAxOS41LDIxQzEwLjQsMjEgMywxMy42IDMsNC41QzMsNC4yMiAzLjIyLDQgMy41LDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmVtYWlsLW91dGxpbmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDZDMjIgNC45IDIxLjEgNCAyMCA0SDRDMi45IDQgMiA0LjkgMiA2VjE4QzIgMTkuMSAyLjkgMjAgNCAyMEgyMEMyMS4xIDIwIDIyIDE5LjEgMjIgMThWNk0yMCA2TDEyIDExTDQgNkgyME0yMCAxOEg0VjhMMTIgMTNMMjAgOFYxOFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsb3RDb250YWN0SW5mbygpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdFNvY2lhbE1lZGlhSWNvbnMoXCJjb250YWN0XCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuanMnO1xyXG5pbXBvcnQgYmFubmVyIGZyb20gXCIuL2Jhbm5lci5qc1wiO1xyXG5pbXBvcnQgd29yayBmcm9tIFwiLi93b3JrLmpzXCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xyXG5pbXBvcnQgc2tpbGxzIGZyb20gXCIuL3NraWxscy5qc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcbmltcG9ydCBldmVudEhhbmRsZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcclxuICAgIHN0YXRpYyBsb2FkUGFnZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIubG9hZEhlYWRlcigpKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMubG9hZENvbnRlbnQoKSk7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIubG9hZEZvb3RlcigpKTtcclxuXHJcbiAgICAgICAgZXZlbnRIYW5kbGVycy5sb2FkZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkQ29udGVudCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lci5sb2FkKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNraWxscy5sb2FkKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod29yay5sb2FkKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdC5sb2FkKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudDtcclxuXHJcbiAgICB9XHJcbn0iLCJjb25zdCBpY29ucyA9IFtgPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiNFNDREMjZcIiBkPVwiTTE5LjAzNyAxMTMuODc2TDkuMDMyIDEuNjYxaDEwOS45MzZsLTEwLjAxNiAxMTIuMTk4LTQ1LjAxOSAxMi40OHpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNGMTY1MjlcIiBkPVwiTTY0IDExNi44bDM2LjM3OC0xMC4wODYgOC41NTktOTUuODc4SDY0elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI0VCRUJFQlwiIGQ9XCJNNjQgNTIuNDU1SDQ1Ljc4OEw0NC41MyAzOC4zNjFINjRWMjQuNTk5SDI5LjQ4OWwuMzMgMy42OTIgMy4zODIgMzcuOTI3SDY0em0wIDM1Ljc0M2wtLjA2MS4wMTctMTUuMzI3LTQuMTQtLjk3OS0xMC45NzVIMzMuODE2bDEuOTI4IDIxLjYwOSAyOC4xOTMgNy44MjYuMDYzLS4wMTd6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02My45NTIgNTIuNDU1djEzLjc2M2gxNi45NDdsLTEuNTk3IDE3Ljg0OS0xNS4zNSA0LjE0M3YxNC4zMTlsMjguMjE1LTcuODIuMjA3LTIuMzI1IDMuMjM0LTM2LjIzMy4zMzUtMy42OTZoLTMuNzA4em0wLTI3Ljg1NnYxMy43NjJoMzMuMjQ0bC4yNzYtMy4wOTIuNjI4LTYuOTc4LjMyOS0zLjY5MnpcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiIzEzMTMxM1wiIGQ9XCJNODkuMjM0IDUuODU2SDgxLjg1bDcuNjc5IDguMzMzdjMuOTY3SDczLjcxM3YtNC42NDVoNy42NzhsLTcuNjc4LTguMzMzVjEuMjA3aDE1LjUyMXY0LjY0OXptLTE4LjY1NyAwaC03LjM4NGw3LjY3OSA4LjMzM3YzLjk2N0g1NS4wNTV2LTQuNjQ1aDcuNjc5bC03LjY3OS04LjMzM1YxLjIwN2gxNS41MjJ2NC42NDl6bS0xOC40NzQuMTloLTcuOTY4djcuMjcxaDcuOTY4djQuODM5SDM4LjQ3MVYxLjIwN2gxMy42MzJ2NC44Mzl6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjMTU3MkI2XCIgZD1cIk0yNy42MTMgMTE2LjcwNmwtOC4wOTctOTAuODEzaDg4Ljk2N2wtOC4xMDQgOTAuNzk4LTM2LjQzNCAxMC4xMDItMzYuMzMyLTEwLjA4N3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMzM0E5RENcIiBkPVwiTTY0LjAwMSAxMTkuMDcybDI5LjQzOS04LjE2MiA2LjkyNi03Ny41OTFINjQuMDAxdjg1Ljc1M3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTY0IDY2LjIyaDE0LjczOGwxLjAxOS0xMS40MDVINjRWNDMuNjc3aDI3LjkyOWwtLjI2NyAyLjk4OC0yLjczNyAzMC42OTJINjRWNjYuMjJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRUJFQkVCXCIgZD1cIk02NC4wNjcgOTUuMTQ2bC0uMDQ5LjAxNC0xMi40MDQtMy4zNS0uNzk0LTguODgzSDM5LjY0MWwxLjU2MSAxNy40ODggMjIuODE0IDYuMzMzLjA1Mi0uMDE1Vjk1LjE0NnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTc3Ljc5MiA3Ni44ODZMNzYuNDUgOTEuODAybC0xMi40MjIgMy4zNTN2MTEuNTg4bDIyLjgzMy02LjMyOC4xNjgtMS44ODIgMS45MzgtMjEuNjQ3SDc3Ljc5MnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNFQkVCRUJcIiBkPVwiTTY0LjAzOSA0My42Nzd2MTEuMTM3SDM3LjEzNmwtLjIyNC0yLjUwMy0uNTA3LTUuNjQ2LS4yNjctMi45ODhoMjcuOTAxek02NCA2Ni4yMjF2MTEuMTM4SDUxLjc1M2wtLjIyMy0yLjUwMy0uNTA4LTUuNjQ3LS4yNjctMi45ODhINjR6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiNGMERCNEZcIiBkPVwiTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMzMjMzMzBcIiBkPVwiTTExNi4zNDcgOTYuNzM2Yy0uOTE3LTUuNzExLTQuNjQxLTEwLjUwOC0xNS42NzItMTQuOTgxLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2LS40NTItMS42OS0uNTEyLTIuNjQyLS4yMjYtMy42NjUuODIxLTMuMzIgNC43ODQtNC4zNTUgNy45MjUtMy40MDMgMi4wMjMuNjc4IDMuOTM4IDIuMjM3IDUuMDkzIDQuNzI0IDUuNDAyLTMuNDk4IDUuMzkxLTMuNDc1IDkuMTYzLTUuODc5LTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1LTMuMjQ5LTMuNjI5LTcuNjc2LTUuNDk4LTE0Ljc1Ni01LjM1NWwtMy42ODguNDc3Yy0zLjUzNC44OTMtNi45MDIgMi43NDgtOC44NzcgNS4yMzUtNS45MjYgNi43MjQtNC4yMzYgMTguNDkyIDIuOTc1IDIzLjMzNSA3LjEwNCA1LjMzMiAxNy41NCA2LjU0NSAxOC44NzMgMTEuNTMxIDEuMjk3IDYuMTA0LTQuNDg2IDguMDgtMTAuMjM0IDcuMzc4LTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDktNC42ODggMi43MTMtNC42ODggMi43MTMtOS41MDggNS40ODUgMS4xNDMgMi40OTkgMi4zNDQgMy42MyA0LjI2IDUuNzk1IDkuMDY4IDkuMTk4IDMxLjc2IDguNzQ2IDM1LjgzLTUuMTc2LjE2NS0uNDc4IDEuMjYxLTMuNjY2LjM4LTguNTgxek02OS40NjIgNTguOTQzSDU3Ljc1M2wtLjA0OCAzMC4yNzJjMCA2LjQzOC4zMzMgMTIuMzQtLjcxNCAxNC4xNDktMS43MTMgMy41NTgtNi4xNTIgMy4xMTctOC4xNzUgMi40MjctMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODUtLjMzMy0uNTg0LS41ODMtMS4wMzYtLjY2Ny0xLjA3MWwtOS41MiA1LjgzYzEuNTgzIDMuMjQ5IDMuOTE1IDYuMDY5IDYuOTAyIDcuOTAxIDQuNDYyIDIuNjc4IDEwLjQ1OSAzLjQ5OSAxNi43MzEgMi4wNTkgNC4wODItMS4xODkgNy42MDQtMy42NTIgOS40NDgtNy40MDEgMi42NjYtNC45MTUgMi4wOTQtMTAuODY0IDIuMDctMTcuNDQ0LjA2LTEwLjczNS4wMDEtMjEuNDY4LjAwMS0zMi4yMzd6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPGcgZmlsbD1cIiM2MURBRkJcIj48Y2lyY2xlIGN4PVwiNjRcIiBjeT1cIjY0XCIgcj1cIjExLjRcIj48L2NpcmNsZT48cGF0aCBkPVwiTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNSA3LjEtMi40LjctNC43IDEuNC02LjkgMi4zQzguMiA1MCAxLjQgNTYuNiAxLjQgNjRzNi45IDE0IDE5LjMgMTguOGMyLjIuOCA0LjUgMS42IDYuOSAyLjMtLjYgMi40LTEuMSA0LjgtMS41IDcuMS0yLjEgMTMuMi4yIDIyLjUgNi42IDI2LjEgMS45IDEuMSA0IDEuNiA2LjQgMS42IDcuMSAwIDE2LTUuMiAyNC45LTEzLjkgOSA4LjcgMTcuOSAxMy45IDI0LjkgMTMuOSAyLjQgMCA0LjUtLjUgNi40LTEuNiA2LjQtMy43IDguNy0xMyA2LjYtMjYuMS0uNC0yLjMtLjktNC43LTEuNS03LjEgMi40LS43IDQuNy0xLjQgNi45LTIuMyAxMi41LTQuOCAxOS4zLTExLjQgMTkuMy0xOC44cy02LjgtMTQtMTkuMy0xOC44ek05Mi41IDE0LjdjNC4xIDIuNCA1LjUgOS44IDMuOCAyMC4zLS4zIDIuMS0uOCA0LjMtMS40IDYuNi01LjItMS4yLTEwLjctMi0xNi41LTIuNS0zLjQtNC44LTYuOS05LjEtMTAuNC0xMyA3LjQtNy4zIDE0LjktMTIuMyAyMS0xMi4zIDEuMyAwIDIuNS4zIDMuNS45ek04MS4zIDc0Yy0xLjggMy4yLTMuOSA2LjQtNi4xIDkuNi0zLjcuMy03LjQuNC0xMS4yLjQtMy45IDAtNy42LS4xLTExLjItLjQtMi4yLTMuMi00LjItNi40LTYtOS42LTEuOS0zLjMtMy43LTYuNy01LjMtMTAgMS42LTMuMyAzLjQtNi43IDUuMy0xMCAxLjgtMy4yIDMuOS02LjQgNi4xLTkuNiAzLjctLjMgNy40LS40IDExLjItLjQgMy45IDAgNy42LjEgMTEuMi40IDIuMiAzLjIgNC4yIDYuNCA2IDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNi01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnpNNjQgOTcuOGMtMi40LTIuNi00LjctNS40LTYuOS04LjMgMi4zLjEgNC42LjIgNi45LjIgMi4zIDAgNC42LS4xIDYuOS0uMi0yLjIgMi45LTQuNSA1LjctNi45IDguM3ptLTE4LjYtMTVjLTMuOC0uNS03LjQtMS4xLTEwLjgtMS45IDEuMS0zLjMgMi4zLTYuOCAzLjgtMTAuMyAxLjEgMiAyLjIgNC4xIDMuNCA2LjEgMS4yIDIuMiAyLjQgNC4xIDMuNiA2LjF6bS03LTI1LjVjLTEuNS0zLjUtMi43LTYuOS0zLjgtMTAuMyAzLjQtLjggNy0xLjQgMTAuOC0xLjktMS4yIDEuOS0yLjUgMy45LTMuNiA2LTEuMiAyLjEtMi4zIDQuMi0zLjQgNi4yek02NCAzMC4yYzIuNCAyLjYgNC43IDUuNCA2LjkgOC4zLTIuMy0uMS00LjYtLjItNi45LS4yLTIuMyAwLTQuNi4xLTYuOS4yIDIuMi0yLjkgNC41LTUuNyA2LjktOC4zem0yMi4yIDIxbC0zLjYtNmMzLjguNSA3LjQgMS4xIDEwLjggMS45LTEuMSAzLjMtMi4zIDYuOC0zLjggMTAuMy0xLjEtMi4xLTIuMi00LjItMy40LTYuMnpNMzEuNyAzNWMtMS43LTEwLjUtLjMtMTcuOSAzLjgtMjAuMyAxLS42IDIuMi0uOSAzLjUtLjkgNiAwIDEzLjUgNC45IDIxIDEyLjMtMy41IDMuOC03IDguMi0xMC40IDEzLTUuOC41LTExLjMgMS40LTE2LjUgMi41LS42LTIuMy0xLTQuNS0xLjQtNi42ek03IDY0YzAtNC43IDUuNy05LjcgMTUuNy0xMy40IDItLjggNC4yLTEuNSA2LjQtMi4xIDEuNiA1IDMuNiAxMC4zIDYgMTUuNi0yLjQgNS4zLTQuNSAxMC41LTYgMTUuNUMxNS4zIDc1LjYgNyA2OS42IDcgNjR6bTI4LjUgNDkuM2MtNC4xLTIuNC01LjUtOS44LTMuOC0yMC4zLjMtMi4xLjgtNC4zIDEuNC02LjYgNS4yIDEuMiAxMC43IDIgMTYuNSAyLjUgMy40IDQuOCA2LjkgOS4xIDEwLjQgMTMtNy40IDcuMy0xNC45IDEyLjMtMjEgMTIuMy0xLjMgMC0yLjUtLjMtMy41LS45ek05Ni4zIDkzYzEuNyAxMC41LjMgMTcuOS0zLjggMjAuMy0xIC42LTIuMi45LTMuNS45LTYgMC0xMy41LTQuOS0yMS0xMi4zIDMuNS0zLjggNy04LjIgMTAuNC0xMyA1LjgtLjUgMTEuMy0xLjQgMTYuNS0yLjUuNiAyLjMgMSA0LjUgMS40IDYuNnptOS0xNS42Yy0yIC44LTQuMiAxLjUtNi40IDIuMS0xLjYtNS0zLjYtMTAuMy02LTE1LjYgMi40LTUuMyA0LjUtMTAuNSA2LTE1LjUgMTMuOCA0IDIyLjEgMTAgMjIuMSAxNS42IDAgNC43LTUuOCA5LjctMTUuNyAxMy40elwiPjwvcGF0aD48L2c+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJhXCIgeDE9XCI3Ni4wNzlcIiB4Mj1cIjUyMy40OFwiIHkxPVwiMTAuNzk4XCIgeTI9XCIzNjUuOTVcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjExIDE0LjYxMykgc2NhbGUoLjI0NTY2KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzkwMTNmZVwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM2NjEwZjJcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9XCJiXCIgeDE9XCIxOTMuNTFcIiB4Mj1cIjI5My41MVwiIHkxPVwiMTA5Ljc0XCIgeTI9XCIyNzguODdcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDUyKVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmMWU1ZmNcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPVwiY1wiIHdpZHRoPVwiMTk3XCIgaGVpZ2h0PVwiMjQ5XCIgeD1cIjE2MS45XCIgeT1cIjEzNS40NlwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIj48L2ZlRmxvb2Q+PGZlQ29sb3JNYXRyaXggaW49XCJTb3VyY2VBbHBoYVwiIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCI+PC9mZUNvbG9yTWF0cml4PjxmZU9mZnNldCBkeT1cIjRcIj48L2ZlT2Zmc2V0PjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCI4XCI+PC9mZUdhdXNzaWFuQmx1cj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDBcIj48L2ZlQ29sb3JNYXRyaXg+PGZlQmxlbmQgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwiZWZmZWN0MV9kcm9wU2hhZG93XCI+PC9mZUJsZW5kPjxmZUJsZW5kIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImVmZmVjdDFfZHJvcFNoYWRvd1wiIHJlc3VsdD1cInNoYXBlXCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBmaWxsPVwidXJsKCNhKVwiIGQ9XCJNMTQuOTg1IDI3LjcxMmMtLjIzNy02LjgxNSA1LjA3Mi0xMy4wOTkgMTIuMjQ5LTEzLjA5OWg3My41NGM3LjE3NyAwIDEyLjQ4NiA2LjI4NCAxMi4yNDkgMTMuMDk5LS4yMjggNi41NDYuMDY4IDE1LjAyNiAyLjIwMiAyMS45NCAyLjE0MSA2LjkzNiA1Ljc1MSAxMS4zMTkgMTEuNjY0IDExLjg4M3Y2LjM4N2MtNS45MTMuNTY0LTkuNTIzIDQuOTQ3LTExLjY2NCAxMS44ODMtMi4xMzQgNi45MTQtMi40MyAxNS4zOTQtMi4yMDIgMjEuOTQuMjM3IDYuODE1LTUuMDcyIDEzLjA5OC0xMi4yNDkgMTMuMDk4aC03My41NGMtNy4xNzcgMC0xMi40ODYtNi4yODQtMTIuMjQ5LTEzLjA5OC4yMjgtNi41NDYtLjA2OC0xNS4wMjYtMi4yMDMtMjEuOTQtMi4xNC02LjkzNS01Ljc2LTExLjMxOS0xMS42NzMtMTEuODgzdi02LjM4N2M1LjkxMy0uNTYzIDkuNTMzLTQuOTQ3IDExLjY3My0xMS44ODMgMi4xMzUtNi45MTQgMi40My0xNS4zOTQgMi4yMDMtMjEuOTR6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJ1cmwoI2IpXCIgZD1cIk0yNjcuMSAzNjQuNDZjNDcuMjk3IDAgNzUuNzk4LTIzLjE1OCA3NS43OTgtNjEuMzU1IDAtMjguODczLTIwLjMzNi00OS43NzYtNTAuNTMyLTUzLjA4NXYtMS4yMDNjMjIuMTg1LTMuNjA5IDM5LjU5NC0yNC4yMTEgMzkuNTk0LTQ3LjIxOSAwLTMyLjc4My0yNS44ODItNTQuMTM4LTY1LjMyMi01NC4xMzhoLTg4Ljc0djIxN3ptLTU0LjY5Mi0xODkuNDhoNDUuOTExYzI0Ljk1OCAwIDM5LjEzMSAxMS4xMjggMzkuMTMxIDMxLjI3OSAwIDIxLjUwNS0xNi40ODQgMzMuNTM1LTQ2LjM3MiAzMy41MzVoLTM4LjY3em0wIDE2MS45NnYtNzEuNDMxaDQ1LjYwMmMzMi42NjEgMCA0OS42MDggMTIuMDMgNDkuNjA4IDM1LjQ5IDAgMjMuNDU5LTE2LjQ4NCAzNS45NDEtNDcuNjA1IDM1Ljk0MXpcIiBmaWx0ZXI9XCJ1cmwoI2MpXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuNDk0IDIuMjAzKSBzY2FsZSguMjQ1NjYpXCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiMwYWNmODNcIiBkPVwiTTQ1LjUgMTI5YzExLjkgMCAyMS41LTkuNiAyMS41LTIxLjVWODZINDUuNUMzMy42IDg2IDI0IDk1LjYgMjQgMTA3LjVTMzMuNiAxMjkgNDUuNSAxMjl6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2EyNTlmZlwiIGQ9XCJNMjQgNjQuNUMyNCA1Mi42IDMzLjYgNDMgNDUuNSA0M0g2N3Y0M0g0NS41QzMzLjYgODYgMjQgNzYuNCAyNCA2NC41em0wIDBcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmMjRlMWVcIiBkPVwiTTI0IDIxLjVDMjQgOS42IDMzLjYgMCA0NS41IDBINjd2NDNINDUuNUMzMy42IDQzIDI0IDMzLjQgMjQgMjEuNXptMCAwXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmY3MjYyXCIgZD1cIk02NyAwaDIxLjVDMTAwLjQgMCAxMTAgOS42IDExMCAyMS41UzEwMC40IDQzIDg4LjUgNDNINjd6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzFhYmNmZVwiIGQ9XCJNMTEwIDY0LjVjMCAxMS45LTkuNiAyMS41LTIxLjUgMjEuNVM2NyA3Ni40IDY3IDY0LjUgNzYuNiA0MyA4OC41IDQzIDExMCA1Mi42IDExMCA2NC41em0wIDBcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48ZyBmaWxsPVwiIzE4MTYxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02NCAxLjUxMmMtMjMuNDkzIDAtNDIuNTQ1IDE5LjA0Ny00Mi41NDUgNDIuNTQ1IDAgMTguNzk3IDEyLjE5IDM0Ljc0NSAyOS4wOTUgNDAuMzcgMi4xMjYuMzk0IDIuOTA3LS45MjMgMi45MDctMi4wNDcgMC0xLjAxNC0uMDQtNC4zNjYtLjA1OC03LjkyLTExLjgzNyAyLjU3My0xNC4zMzQtNS4wMi0xNC4zMzQtNS4wMi0xLjkzNS00LjkxOC00LjcyNC02LjIyNi00LjcyNC02LjIyNi0zLjg2LTIuNjQuMjktMi41ODYuMjktMi41ODYgNC4yNzMuMyA2LjUyMyA0LjM4NSA2LjUyMyA0LjM4NSAzLjc5NCA2LjUwNCA5Ljk1MyA0LjYyMyAxMi4zOCAzLjUzNi4zODMtMi43NSAxLjQ4NS00LjYyOCAyLjcwMi01LjY5LTkuNDUtMS4wNzUtMTkuMzg0LTQuNzI0LTE5LjM4NC0yMS4wMjYgMC00LjY0NSAxLjY2Mi04LjQ0IDQuMzg0LTExLjQyLS40NDItMS4wNzItMS44OTgtNS40LjQxMi0xMS4yNiAwIDAgMy41NzItMS4xNDIgMTEuNyA0LjM2MyAzLjM5NS0uOTQzIDcuMDM1LTEuNDE2IDEwLjY1LTEuNDMyIDMuNjE2LjAxNyA3LjI1OC40OSAxMC42NTggMS40MzIgOC4xMi01LjUwNCAxMS42ODgtNC4zNjIgMTEuNjg4LTQuMzYyIDIuMzE2IDUuODYuODYgMTAuMTg3LjQxOCAxMS4yNiAyLjcyOCAyLjk3OCA0LjM3OCA2Ljc3NCA0LjM3OCAxMS40MiAwIDE2LjM0LTkuOTUzIDE5LjkzOC0xOS40MjcgMjAuOTkgMS41MjYgMS4zMiAyLjg4NiAzLjkxIDIuODg2IDcuODggMCA1LjY5Mi0uMDQ4IDEwLjI3My0uMDQ4IDExLjY3NCAwIDEuMTMuNzY2IDIuNDU4IDIuOTIyIDIuMDQgMTYuODk2LTUuNjMyIDI5LjA3LTIxLjU3NCAyOS4wNy00MC4zNjVDMTA2LjU0NSAyMC41NiA4Ny40OTcgMS41MTIgNjQgMS41MTJ6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMzcuNTcgNjIuNTk2Yy0uMDk1LjIxMi0uNDI4LjI3NS0uNzMuMTMtLjMxLS4xNC0uNDgyLS40MjctLjM4Mi0uNjQuMDktLjIxNi40MjQtLjI3Ny43MzMtLjEzMi4zMS4xNC40ODYuNDMuMzguNjQyek0zOS4yOTMgNjQuNTJjLS4yMDMuMTg3LS42LjEtLjg3LS4xOTgtLjI3OC0uMjk3LS4zMy0uNjk0LS4xMjQtLjg4NC4yMDgtLjE4OC41OTMtLjEuODcuMTk3LjI4LjMuMzM1LjY5My4xMjMuODg0em0xLjY3NyAyLjQ0OGMtLjI2LjE4Mi0uNjg3LjAxMi0uOTUtLjM2Ny0uMjYyLS4zNzctLjI2Mi0uODMuMDA1LTEuMDEzLjI2NC0uMTgyLjY4NC0uMDE4Ljk1LjM1Ny4yNjIuMzg1LjI2Mi44NC0uMDA1IDEuMDI0em0yLjI5OCAyLjM2OGMtLjIzMy4yNTctLjczLjE4OC0xLjA5My0uMTYzLS4zNzItLjM0My0uNDc1LS44My0uMjQyLTEuMDg3LjIzNy0uMjU3LjczNi0uMTg1IDEuMTAyLjE2My4zNy4zNDIuNDgyLjgzLjIzMyAxLjA4NnptMy4xNzIgMS4zNzRjLS4xMDQuMzM0LS41ODIuNDg1LTEuMDY0LjM0NC0uNDgyLS4xNDYtLjc5Ni0uNTM2LS43LS44NzIuMS0uMzM2LjU4Mi0uNDkzIDEuMDY3LS4zNDIuNDguMTQ0Ljc5NS41My42OTYuODd6bTMuNDguMjU1Yy4wMTMuMzUtLjM5Ni42NDItLjkwMi42NDgtLjUwOC4wMTItLjkyLS4yNzItLjkyNi0uNjE4IDAtLjM1NC40LS42NDIuOTA4LS42NS41MDYtLjAxLjkyLjI3Mi45Mi42MnptMy4yNC0uNTUxYy4wNi4zNDItLjI5LjY5NC0uNzkzLjc4Ny0uNDk0LjA5Mi0uOTUtLjEyLTEuMDE0LS40Ni0uMDYtLjM1LjI5Ny0uNy43OS0uNzkyLjUwMy0uMDg4Ljk1My4xMTggMS4wMTcuNDY2em0wIDBcIj48L3BhdGg+PC9nPjxwYXRoIGQ9XCJNMjQuODU1IDEwOC4zMDJoLTEwLjdhLjUuNSAwIDAwLS41LjV2NS4yMzJhLjUuNSAwIDAwLjUuNWg0LjE3M3Y2LjVzLS45MzcuMzItMy41My4zMmMtMy4wNTYgMC03LjMyNy0xLjExNi03LjMyNy0xMC41MDggMC05LjM5MyA0LjQ0OC0xMC42MyA4LjYyNC0xMC42MyAzLjYxNCAwIDUuMTcuNjM2IDYuMTYyLjk0My4zMS4wOTQuNi0uMjE2LjYtLjQ5MmwxLjE5My01LjA1NWEuNDY4LjQ2OCAwIDAwLS4xOTItLjM5Yy0uNDAzLS4yODgtMi44NTctMS42Ni05LjA1OC0xLjY2LTcuMTQ0IDAtMTQuNDcyIDMuMDM4LTE0LjQ3MiAxNy42NSAwIDE0LjYxIDguMzkgMTYuNzg3IDE1LjQ2IDE2Ljc4NyA1Ljg1NCAwIDkuNDA1LTIuNTAyIDkuNDA1LTIuNTAyLjE0Ni0uMDguMTYyLS4yODUuMTYyLS4zOHYtMTYuMzE2YS41LjUgMCAwMC0uNS0uNXpNNzkuNTA2IDk0LjgxSDczLjQ4YS41LjUgMCAwMC0uNDk4LjUwM2wuMDAyIDExLjY0NGgtOS4zOTJWOTUuMzEzYS41LjUgMCAwMC0uNDk3LS41MDNINTcuMDdhLjUuNSAwIDAwLS40OTguNTAzdjMxLjUzYzAgLjI3Ny4yMjQuNTAzLjQ5OC41MDNoNi4wMjVhLjUuNSAwIDAwLjQ5Ny0uNTA0di0xMy40ODZoOS4zOTJsLS4wMTYgMTMuNDg2YzAgLjI3OC4yMjQuNTA0LjUuNTA0aDYuMDM4YS41LjUgMCAwMC40OTctLjUwNHYtMzEuNTNhLjQ5Ny40OTcgMCAwMC0uNDk3LS41MDJ6bS00Ny4xNjYuNzE3Yy0yLjE0NCAwLTMuODg0IDEuNzUzLTMuODg0IDMuOTIzIDAgMi4xNjcgMS43NCAzLjkyNSAzLjg4NCAzLjkyNSAyLjE0NiAwIDMuODg1LTEuNzU4IDMuODg1LTMuOTI1IDAtMi4xNy0xLjc0LTMuOTIzLTMuODg1LTMuOTIzem0yLjk1NiA5LjYwOEgyOS4yOWMtLjI3NiAwLS41MjIuMjg0LS41MjIuNTZ2MjAuODUyYzAgLjYxMy4zODIuNzk1Ljg3Ni43OTVoNS40MWMuNTk1IDAgLjc0LS4yOTIuNzQtLjgwNXYtMjAuODk5YS41LjUgMCAwMC0uNDk4LS41MDJ6bTY3LjYwNi4wNDdoLTUuOThhLjUuNSAwIDAwLS40OTYuNTA0djE1LjQ2cy0xLjUyIDEuMTEtMy42NzUgMS4xMS0yLjcyNy0uOTc3LTIuNzI3LTMuMDg4di0xMy40ODJhLjUuNSAwIDAwLS40OTctLjUwNGgtNi4wNjhhLjUwMi41MDIgMCAwMC0uNDk4LjUwNHYxNC41MDJjMCA2LjI3IDMuNDk1IDcuODA0IDguMzAyIDcuODA0IDMuOTQ0IDAgNy4xMjQtMi4xOCA3LjEyNC0yLjE4cy4xNSAxLjE1LjIyIDEuMjg1Yy4wNy4xMzYuMjQ3LjI3My40NC4yNzNsMy44Ni0uMDE3YS41MDIuNTAyIDAgMDAuNS0uNTA0bC0uMDAzLTIxLjE2NmEuNTA0LjUwNCAwIDAwLS41LS41MDJ6bTE2LjM0Mi0uNzA4Yy0zLjM5NiAwLTUuNzA2IDEuNTE1LTUuNzA2IDEuNTE1Vjk1LjMxMmEuNS41IDAgMDAtLjQ5Ny0uNTAzSDEwN2EuNS41IDAgMDAtLjUuNTAzdjMxLjUzYS41LjUgMCAwMC41LjUwM2g0LjE5MmMuMTkgMCAuMzMyLS4wOTcuNDM3LS4yNjguMTAzLS4xNy4yNTQtMS40NTQuMjU0LTEuNDU0czIuNDcgMi4zNCA3LjE0OCAyLjM0YzUuNDkgMCA4LjY0LTIuNzg0IDguNjQtMTIuNTAycy01LjAzLTEwLjk4OC04LjQyOC0xMC45ODh6bS0yLjM2IDE3Ljc2NGMtMi4wNzMtLjA2My0zLjQ4LTEuMDA0LTMuNDgtMS4wMDR2LTkuOTg1czEuMzg4LS44NSAzLjA5LTEuMDA0YzIuMTUzLS4xOTMgNC4yMjguNDU4IDQuMjI4IDUuNTk0IDAgNS40MTctLjkzNSA2LjQ4Ni0zLjgzNyA2LjM5OHptLTYzLjY4OS0uMTE4Yy0uMjYzIDAtLjkzNy4xMDctMS42My4xMDctMi4yMiAwLTIuOTczLTEuMDMyLTIuOTczLTIuMzY4di04Ljg2Nmg0LjUyYS41LjUgMCAwMC41LS41MDR2LTQuODU2YS41LjUgMCAwMC0uNS0uNTAyaC00LjUybC0uMDA3LTUuOTdjMC0uMjI3LS4xMTYtLjM0LS4zNzgtLjM0aC02LjE2Yy0uMjM4IDAtLjM2Ny4xMDYtLjM2Ny4zMzV2Ni4xN3MtMy4wODcuNzQ1LTMuMjk1LjgwNWEuNS41IDAgMDAtLjM2LjQ4djMuODc3YS41LjUgMCAwMC40OTcuNTAzaDMuMTU4djkuMzI4YzAgNi45MyA0Ljg2IDcuNjEgOC4xNCA3LjYxIDEuNDk3IDAgMy4yOS0uNDggMy41ODYtLjU5LjE4LS4wNjcuMjgzLS4yNTIuMjgzLS40NTNsLjAwNC00LjI2NWEuNTEuNTEgMCAwMC0uNS0uNTAyelwiIGZpbGw9XCIjMTAwRTBGXCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cInVybCgjYSlcIiBkPVwiTTAgNjRjMCAxOC41OTMgMjguNjU0IDMzLjY2NyA2NCAzMy42NjcgMzUuMzQ2IDAgNjQtMTUuMDc0IDY0LTMzLjY2NyAwLTE4LjU5My0yOC42NTUtMzMuNjY3LTY0LTMzLjY2N0MyOC42NTQgMzAuMzMzIDAgNDUuNDA3IDAgNjRaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjNzc3YmIzXCIgZD1cIk02NCA5NS4xNjdjMzMuOTY1IDAgNjEuNS0xMy45NTUgNjEuNS0zMS4xNjcgMC0xNy4yMTQtMjcuNTM1LTMxLjE2Ny02MS41LTMxLjE2N1MyLjUgNDYuNzg2IDIuNSA2NGMwIDE3LjIxMiAyNy41MzUgMzEuMTY3IDYxLjUgMzEuMTY3WlwiPjwvcGF0aD48cGF0aCBkPVwiTTM0Ljc3MiA2Ny44NjRjMi43OTMgMCA0Ljg3Ny0uNTE1IDYuMTk2LTEuNTMgMS4zMDYtMS4wMDYgMi4yMDctMi43NDcgMi42OC01LjE3NS40NC0yLjI3LjI3Mi0zLjg1NC0uNS00LjcxLS43ODgtLjg3NC0yLjQ5My0xLjMxNy01LjA2Ny0xLjMxN2gtNC40NjRsLTIuNDczIDEyLjczMnpNMjAuMTczIDgzLjU0N2EuNjk0LjY5NCAwIDAgMS0uNjgtLjgyOGw2LjU1Ny0zMy43MzhhLjY5NS42OTUgMCAwIDEgLjY4LS41NjFoMTQuMTM0YzQuNDQyIDAgNy43NDggMS4yMDYgOS44MjcgMy41ODUgMi4wODggMi4zOSAyLjczNCA1LjczNCAxLjkxNyA5LjkzNS0uMzMzIDEuNzExLS45MDUgMy4zLTEuNyA0LjcyNGExNS44MTggMTUuODE4IDAgMCAxLTMuMTI4IDMuOTJjLTEuNTMxIDEuNDMyLTMuMjY0IDIuNDcyLTUuMTQ3IDMuMDgzLTEuODUyLjYwNC00LjIzMi45MS03LjA3LjkxaC01LjcyNGwtMS42MzQgOC40MDhhLjY5NS42OTUgMCAwIDEtLjY4Mi41NjJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0zNC4xOSA1NS44MjZoMy44OTFjMy4xMDcgMCA0LjE4Ni42ODIgNC41NTMgMS4wODkuNjA3LjY3NC43MjMgMi4wOTcuMzMxIDQuMTEyLS40MzkgMi4yNTctMS4yNTMgMy44NTgtMi40MiA0Ljc1Ni0xLjE5NC45Mi0zLjEzOCAxLjM4Ni01Ljc3MyAxLjM4NmgtMi43ODZsMi4yMDUtMTEuMzQyem02LjY3NC04LjFIMjYuNzMxYTEuMzkgMS4zOSAwIDAgMC0xLjM2NCAxLjEyM0wxOC44MSA4Mi41ODhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzIDEuNjUzaDcuMzVhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDEuNTI1LTcuODQ2aDUuMTUxYzIuOTEyIDAgNS4zNjQtLjMxOCA3LjI4Ny0uOTQ0IDEuOTc3LS42NDIgMy43OTYtMS43MzEgNS40MDYtMy4yMzdhMTYuNTIyIDE2LjUyMiAwIDAgMCAzLjI1OS00LjA4N2MuODMxLTEuNDg3IDEuNDI5LTMuMTQ3IDEuNzc1LTQuOTMxLjg2LTQuNDIzLjE2MS03Ljk2NC0yLjA3Ni0xMC41MjQtMi4yMTYtMi41MzctNS42OTgtMy44MjMtMTAuMzQ5LTMuODIzek0zMC4zMDEgNjguNTU3aDQuNDcxYzIuOTYzIDAgNS4xNy0uNTU3IDYuNjItMS42NzUgMS40NTEtMS4xMTYgMi40MjgtMi45OCAyLjkzOC01LjU5MS40ODUtMi41MDguMjY0LTQuMjc3LS42NjUtNS4zMDgtLjkzMS0xLjAzLTIuNzkxLTEuNTQ2LTUuNTg0LTEuNTQ2aC01LjAzNmwtMi43NDMgMTQuMTJtMTAuNTYzLTE5LjQ0NWM0LjI1MiAwIDcuMzUzIDEuMTE3IDkuMzAzIDMuMzQ4IDEuOTUgMi4yMzIgMi41MzYgNS4zNDcgMS43NiA5LjM0Ni0uMzIyIDEuNjQ4LS44NjMgMy4xNTQtMS42MjUgNC41MTgtLjc2NCAxLjM2Ni0xLjc2IDIuNjE0LTIuOTkxIDMuNzQ3LTEuNDY4IDEuMzczLTMuMDk3IDIuMzUyLTQuODkyIDIuOTM1LTEuNzk0LjU4NC00LjA4Ljg3NS02Ljg1Ny44NzVoLTYuMjk2bC0xLjc0MyA4Ljk3aC03LjM1bDYuNTU4LTMzLjczOWgxNC4xMzNcIj48L3BhdGg+PHBhdGggZD1cIk02OS40NTkgNzQuNTc3YS42OTQuNjk0IDAgMCAxLS42ODItLjgyN2wyLjktMTQuOTI4Yy4yNzctMS40Mi4yMDktMi40MzgtLjE5LTIuODctLjI0NS0uMjYzLS45NzktLjcwNC0zLjE1LS43MDRoLTUuMjU2bC0zLjY0NiAxOC43NjhhLjY5NS42OTUgMCAwIDEtLjY4My41NmgtNy4yOWEuNjk1LjY5NSAwIDAgMS0uNjgzLS44MjZsNi41NTgtMzMuNzM5YS42OTUuNjk1IDAgMCAxIC42ODItLjU2MWg3LjI5YS42OTUuNjk1IDAgMCAxIC42ODMuODI2TDY0LjQxIDQ4LjQyaDUuNjUzYzQuMzA3IDAgNy4yMjcuNzU4IDguOTI4IDIuMzIxIDEuNzMzIDEuNTkzIDIuMjc1IDQuMTQgMS42MDggNy41NzNsLTMuMDUxIDE1LjcwMmEuNjk1LjY5NSAwIDAgMS0uNjgyLjU2aC03LjQwN3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTY1LjMxIDM4Ljc1NWgtNy4yOTFhMS4zOSAxLjM5IDAgMCAwLTEuMzY0IDEuMTI0bC02LjU1NyAzMy43MzhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzIDEuNjU0aDcuMjkxYTEuMzkgMS4zOSAwIDAgMCAxLjM2NC0xLjEyNGwzLjUzNy0xOC4yMDVoNC42ODJjMi4xNjggMCAyLjYyNC40NjMgMi42NDEuNDg0LjEzMi4xNC4zMDUuNzk1LjAxOSAyLjI2NGwtMi45IDE0LjkyN2ExLjM5IDEuMzkgMCAwIDAgMS4zNjQgMS42NTRoNy40MDhhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDMuMDUxLTE1LjdjLjcxNS0zLjY4Ni4xMDMtNi40NS0xLjgyLTguMjE3LTEuODM2LTEuNjg2LTQuOTEtMi41MDUtOS4zOTgtMi41MDVoLTQuODFsMS40MjEtNy4zMTVhMS4zOSAxLjM5IDAgMCAwLTEuMzY0LTEuNjU1em0wIDEuMzktMS43NDMgOC45NjhoNi40OTZjNC4wODcgMCA2LjkwNy43MTQgOC40NTcgMi4xNCAxLjU1MyAxLjQyNiAyLjAxNyAzLjczNSAxLjM5OCA2LjkzbC0zLjA1MiAxNS42OTloLTcuNDA3bDIuOTAxLTE0LjkyOGMuMzMtMS42OTguMjA4LTIuODU2LS4zNjUtMy40NzQtLjU3My0uNjE3LTEuNzkzLS45MjYtMy42NTgtLjkyNmgtNS44MjlsLTMuNzU2IDE5LjMyN0g1MS40Nmw2LjU1OC0zMy43MzloNy4yOTJ6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNOTIuMTM2IDY3Ljg2NGMyLjc5MyAwIDQuODc4LS41MTUgNi4xOTgtMS41MyAxLjMwNC0xLjAwNiAyLjIwNi0yLjc0NyAyLjY3OS01LjE3NS40NC0yLjI3LjI3My0zLjg1NC0uNS00LjcxLS43ODgtLjg3NC0yLjQ5My0xLjMxNy01LjA2Ny0xLjMxN2gtNC40NjNsLTIuNDc1IDEyLjczMnpNNzcuNTQgODMuNTQ3YS42OTQuNjk0IDAgMCAxLS42ODItLjgyOGw2LjU1Ny0zMy43MzhhLjY5NS42OTUgMCAwIDEgLjY4Mi0uNTYxSDk4LjIzYzQuNDQyIDAgNy43NDggMS4yMDYgOS44MjYgMy41ODUgMi4wODkgMi4zOSAyLjczNCA1LjczNCAxLjkxNyA5LjkzNWExNS44NzggMTUuODc4IDAgMCAxLTEuNjk5IDQuNzI0IDE1LjgzOCAxNS44MzggMCAwIDEtMy4xMjggMy45MmMtMS41MyAxLjQzMi0zLjI2NSAyLjQ3Mi01LjE0NyAzLjA4My0xLjg1Mi42MDQtNC4yMzIuOTEtNy4wNzEuOTFoLTUuNzIzbC0xLjYzMyA4LjQwOGEuNjk1LjY5NSAwIDAgMS0uNjgzLjU2MnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTkxLjU1NSA1NS44MjZoMy44OTFjMy4xMDcgMCA0LjE4Ni42ODIgNC41NTIgMS4wODkuNjEuNjc0LjcyNCAyLjA5Ny4zMzMgNC4xMTItLjQ0IDIuMjU3LTEuMjU0IDMuODU4LTIuNDIxIDQuNzU2LTEuMTk1LjkyLTMuMTM5IDEuMzg2LTUuNzczIDEuMzg2aC0yLjc4NmwyLjIwNC0xMS4zNDJ6bTYuNjc0LTguMUg4NC4wOTZhMS4zOSAxLjM5IDAgMCAwLTEuMzYzIDEuMTIzbC02LjU1OCAzMy43MzlhMS4zOSAxLjM5IDAgMCAwIDEuMzY0IDEuNjUzaDcuMzVhMS4zOSAxLjM5IDAgMCAwIDEuMzYzLTEuMTI0bDEuNTI1LTcuODQ2aDUuMTVjMi45MTEgMCA1LjM2NC0uMzE4IDcuMjg2LS45NDQgMS45NzgtLjY0MiAzLjc5Ny0xLjczMSA1LjQwOC0zLjIzOGExNi41MiAxNi41MiAwIDAgMCAzLjI1OC00LjA4NmMuODMyLTEuNDg3IDEuNDI4LTMuMTQ3IDEuNzc1LTQuOTMxLjg2LTQuNDIzLjE2Mi03Ljk2NC0yLjA3Ni0xMC41MjQtMi4yMTYtMi41MzctNS42OTctMy44MjMtMTAuMzUtMy44MjN6TTg3LjY2NiA2OC41NTdoNC40N2MyLjk2NCAwIDUuMTctLjU1NyA2LjYyMi0xLjY3NSAxLjQ1LTEuMTE2IDIuNDI4LTIuOTggMi45MzYtNS41OTEuNDg3LTIuNTA4LjI2Ni00LjI3Ny0uNjY1LTUuMzA4LS45My0xLjAzLTIuNzkxLTEuNTQ2LTUuNTgzLTEuNTQ2aC01LjAzNVptMTAuNTYzLTE5LjQ0NWM0LjI1MSAwIDcuMzU0IDEuMTE3IDkuMzAzIDMuMzQ4IDEuOTUgMi4yMzIgMi41MzcgNS4zNDcgMS43NTkgOS4zNDYtLjMyIDEuNjQ4LS44NjIgMy4xNTQtMS42MjQgNC41MTgtLjc2MyAxLjM2Ni0xLjc2IDIuNjE0LTIuOTkyIDMuNzQ3LTEuNDY3IDEuMzczLTMuMDk3IDIuMzUyLTQuODkyIDIuOTM1LTEuNzkzLjU4NC00LjA3OC44NzUtNi44NTYuODc1aC02LjI5NWwtMS43NDUgOC45N2gtNy4zNWw2LjU1OC0zMy43MzloMTQuMTMzXCI+PC9wYXRoPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD1cImFcIiBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMVwiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KDg0LjA0MTM2IDAgMCA4NC4wNDEzNiAzOC40MjYgNDIuMTY5KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIHN0b3AtY29sb3I9XCIjQUVCMkQ1XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIi4zXCIgc3RvcC1jb2xvcj1cIiNBRUIyRDVcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiM0ODRDODlcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjNDg0Qzg5XCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiNmMzcwMzZcIiBkPVwiTTExMy4xMTcgMjYuMDY2QzkyLjE2OC0xLjA2MiA1My4xOTEtNi4wNyAyNi4wNjIgMTQuODgzYy0yNy4xMjUgMjAuOTUzLTMyLjEyOCA1OS45My0xMS4xNzUgODcuMDU1IDIwLjk1NyAyNy4xMjQgNTkuOTM3IDMyLjEyNCA4Ny4wNTggMTEuMTY3IDI3LjExNC0yMC45NTMgMzIuMTE4LTU5LjkxOCAxMS4xNzItODcuMDM5Wm0wIDBcIj48L3BhdGg+XHJcbjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk05MS4wNzggMjQuMTY0YTEwLjAzOCAxMC4wMzggMCAwIDAtNS43ODEgMi40MjYgMTAuMDI4IDEwLjAyOCAwIDAgMC0xLjU0IDEzLjQ2NSAxMC4wMjggMTAuMDI4IDAgMCAwIDEzLjI3NiAyLjcxNWguMDAydi4wMDFsLjE1Ni4xNTVhMTAuNjMgMTAuNjMgMCAwIDAgMS45NjUtMS40NUExMC4zNDEgMTAuMzQxIDAgMCAwIDk5IDI3LjEwN3YtLjAwMmwtOC44NDQgOC43ODktLjE1Ni0uMTU1IDguODQ0LTguNzkzYTEwLjAzOCAxMC4wMzggMCAwIDAtNy43NjYtMi43OHpNNzkuNDM0IDM4LjU1MWMtNC4yNC0uMDA3LTExLjE2MyA0Ljc5OS0yOC4wNjcgMjEuNzAzbC4wODQuMDg2Yy0uMDkyLS4wMzItLjE4NS0uMDM1LS4xODUtLjAzNWwtNi4zNjQgNi4zMDhhMS4wMzUgMS4wMzUgMCAwIDAgLjkzIDEuNzYybDEwLjkxNC0yLjMyOGEuMzA3LjMwNyAwIDAgMCAuMDkyLS4xN2wuMjQyLjI1LTMuNzIgMy42OWgtLjE4bC0yMi4wODYgMjIuMjYgNy4wODYgNi44MjRhMS4yNTQgMS4yNTQgMCAwIDAgMS40NzYuMTQ5IDEuMzI3IDEuMzI3IDAgMCAwIC42NDUtMS4zNTZsLTEuMDM1LTQuNWEuNTM0LjUzNCAwIDAgMSAwLS42MiAxMTcuMjg1IDExNy4yODUgMCAwIDAgMjYuNzM4LTE3LjU4M2wtNC41MzUtNC41MzcuMDg2LS4wMTQtMi42OS0yLjY4OS4xNzItLjE3NC4xODIuMTg2LS4wOTQuMDkxIDcuMTM3IDcuMjkzdi0uMDAzYzEzLjY4LTEyLjk1NCAyMy4zOS0yMy4zNjcgMjAuODY1LTMwLjM3NWEzLjgzIDMuODMgMCAwIDAtMS4xMDctMi4yMDh2LjAwNGEzLjc3OCAzLjc3OCAwIDAgMC0uNDgzLS4zMDZjLS4wODMtLjA4OC0uMTU2LS4xNzgtLjI0NC0uMjY0bC0uMDY2LjA2NmEzLjc3OCAzLjc3OCAwIDAgMC0uNTgyLS4yOWwuMjg5LS4yOTJjLTEuNzk2LTEuNi0zLjI4LTIuOTI0LTUuNS0yLjkzek0zMC45NCA5Mi4yMWwtNS4xNzEgNS4xNzJ2LjAwNGExLjAzIDEuMDMgMCAwIDAtLjQ1NyAxLjEyNSAxLjAzNSAxLjAzNSAwIDAgMCAuOTIxLjc4OWwxMi42NzIuODc1LTcuOTY1LTcuOTY1elwiPjwvcGF0aD5cclxuPHBhdGggZmlsbD1cIiNmMzcwMzZcIiBkPVwiTTkxLjk1IDIzLjMxYTExLjA0NyAxMS4wNDcgMCAwIDAtNy43NTkgMy4xNyAxMC45ODggMTAuOTg4IDAgMCAwLTIuMzkgMTEuNjQxYy00Ljc0MS0yLjAzLTExLjE1NSAxLjUxLTMxLjEwNiAyMS40NTdhLjkzMi45MzIgMCAwIDAtLjAzNy4wOTQgMS4yNDIgMS4yNDIgMCAwIDAtLjExOS4wNjJsLTYuMzA5IDYuMzY0YTEuOTcgMS45NyAwIDAgMC0uMzYzIDIuMzI0IDIuMDEyIDIuMDEyIDAgMCAwIDEuNzA3Ljk4NGwuMzEzLS4yMDMgOC40MjQtMS43OTctNC4wMyA0LjA2N2EuODczLjg3MyAwIDAgMC0uMDU0LjE2NmwtMTkuNzUgMTkuNzk5YS43OTguNzk4IDAgMCAwLS4xOTIuMjM4bC01LjA4NiA1LjA5YTEuOTY3IDEuOTY3IDAgMCAwLS40MTQgMi4wNDMgMS45OTUgMS45OTUgMCAwIDAgMS42NTYgMS4yNjVsMTIuNjE4Ljg4YTEuMDEgMS4wMSAwIDAgMCAuNTItLjQxNS44ODYuODg2IDAgMCAwIDAtMS4wMzVsLS4wMjYtLjAyNWEyLjI0MyAyLjI0MyAwIDAgMCAuNzA1LS41OCAyLjIzNyAyLjIzNyAwIDAgMCAuNDA2LTEuODc2bC0uOTg0LTQuMTg3YTEyNi43MjUgMTI2LjcyNSAwIDAgMCAyNi4zMzQtMTYuODYxIDEuMDkxIDEuMDkxIDAgMCAwIC4yNDguMTAzYy4yNTQtLjAxOS40OTItLjEyOC42NzItLjMwOCAxMy41NS0xMi44MyAyMS41MTUtMjEuNjIyIDIxLjUxNS0yOC42MDJhOC4wMyA4LjAzIDAgMCAwLS40MzEtMi44NSAxMC45NTcgMTAuOTU3IDAgMCAwIDMuODQ1LjgzbC0uMDE1LjAwNGExMS4yMTkgMTEuMjE5IDAgMCAwIDUuMTgzLTEuNDUuNzc1Ljc3NSAwIDAgMCAuMDA0LjAwMS44MzUuODM1IDAgMCAwIC42MTctLjA1NSA5LjM5OCA5LjM5OCAwIDAgMCAyLjA3LTEuNjUyIDEwLjg3MyAxMC44NzMgMCAwIDAgMy4yNTgtNy43NTggMTAuODczIDEwLjg3MyAwIDAgMC0zLjI1Ny03Ljc1OC45My45MyAwIDAgMC0uMTE4LS4wOTEgMTEuMDQ1IDExLjA0NSAwIDAgMC03LjY1Ni0zLjA3OHptLS4wODcgMS43NzJhOS4yNyA5LjI3IDAgMCAxIDUuNTg2IDEuOTE0bC04LjA2OCA4LjExN2EuODQuODQgMCAwIDAtLjA3Ni4wOTguODMuODMgMCAwIDAtLjIzOS41NS44MzIuODMyIDAgMCAwIC4zMTMuNjVoLjAwMmw2LjEgNi4xYTkuMDQ0IDkuMDQ0IDAgMCAxLTEwLjAyOC0xLjkxM2MtMi41ODYtMi42LTMuMzM2LTYuNTA0LTEuOTUzLTkuODkxIDEuMzgzLTMuMzkgNC42OC01LjYwNSA4LjM2My01LjYyNXptNy4xMiAzLjQzMmE4Ljg3IDguODcgMCAwIDEgMi4wMzMgNS42NzQgOS4xNSA5LjE1IDAgMCAxLTIuNjg4IDYuNDY0IDkuOTg5IDkuOTg5IDAgMCAxLTEuMDk4Ljg5NUw5Mi4zMDcgMzYuN2wtLjk2My0uOTYzLjI2NS0uMjY1IDcuMzczLTYuOTZ6bS0uMzY2IDQuMTkzYS43NzcuNzc3IDAgMCAwLS41NS4wMzEuNzMxLjczMSAwIDAgMC0uMzYuNDI2LjczLjczIDAgMCAwIC4wNS41NTkgMi4yMjYgMi4yMjYgMCAwIDEtLjI1NyAyLjMyOC42NC42NCAwIDAgMC0uMTk1LjQ4OGMuMDA0LjE4NC4wNy4zNi4xOTUuNDkyYS41OC41OCAwIDAgMCAuNDE0IDAgLjY4LjY4IDAgMCAwIC42NzItLjIwNyAzLjU3MyAzLjU3MyAwIDAgMCAuNDY1LTMuNzc3di4wMDRhLjc3Ny43NzcgMCAwIDAtLjQzNC0uMzQ0ek03OS4zNCAzOS40M2E1LjU4NCA1LjU4NCAwIDAgMSAzLjMxIDEuMjI2IDQuNzU2IDQuNzU2IDAgMCAwLTIuNjgxIDEuMzRMNTcuMTYyIDY0LjcwMWwtNC40NzYtNC40NzZjMTEuODI4LTExLjc3MiAxOS4wNi0xNy45MjEgMjMuNTU2LTE5LjkzNmE1LjU4NCA1LjU4NCAwIDAgMSAzLjA5OC0uODZ6bTMuOTY1IDIuOTZhMi44OTUgMi44OTUgMCAwIDEgMi4wNDMuODQ0IDIuNzg2IDIuNzg2IDAgMCAxIC44NzkgMi4xMjEgMi44NjkgMi44NjkgMCAwIDEtLjk4NSAyLjA3bC0yNC4yNSAyMS4xMDYtMi42MTctMi42MTcgMjIuODg3LTIyLjY4YTIuODk1IDIuODk1IDAgMCAxIDIuMDQzLS44NDN6bTIuOTk0IDYuNjk4Yy0xLjY5IDYuNzAyLTEwLjY0NyAxNS43ODMtMTkuOTg3IDI0LjYwN2wtMy43NzctMy43NzNMODYuMyA0OS4wODh6TTUxLjM2NyA2MS41NDdsLjI3NC4yNyAzLjUxMyAzLjUxMy05LjYzIDIuMDYgNS44NDMtNS44NDN6bTUuNzkzIDUuODQuMDA0LjAwNCAxLjE2OCAxLjE5NWExLjA4NiAxLjA4NiAwIDAgMCAuMDE4LjA4NGwuMDc4LjAxMi4yNDguMjU0LjgyLjg0LTUuMzg1LjY2IDMuMDUtMy4wNXptMy44NjcgNC4wNzYgMy41NzggMy41NzZBMTI2Ljk5MiAxMjYuOTkyIDAgMCAxIDM4Ljc1IDkxLjY5NWExLjQ0IDEuNDQgMCAwIDAtLjc3NyAxLjY1M2wxLjAzNSA0LjVhLjMxLjMxIDAgMCAxIDAgLjM2My4zMS4zMSAwIDAgMS0uNDE0IDBsLTYuMTAyLTYuMTUyTDUxLjMgNzIuOTc1bDkuNzI4LTEuNTEyem0tMjkuOTMzIDIxLjk0Ljg2OS44MTQgNC40OTIgNC40OTItMTAuMDE2LS42NDggNC42NTUtNC42NTl6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPGxpbmVhckdyYWRpZW50IGlkPVwicHl0aG9uLW9yaWdpbmFsLWFcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4MT1cIjcwLjI1MlwiIHkxPVwiMTIzNy40NzZcIiB4Mj1cIjE3MC42NTlcIiB5Mj1cIjExNTEuMDg5XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjU2MyAwIDAgLS41NjggLTI5LjIxNSA3MDcuODE3KVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzVBOUZENFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMzMDY5OThcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9XCJweXRob24tb3JpZ2luYWwtYlwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHgxPVwiMjA5LjQ3NFwiIHkxPVwiMTA5OC44MTFcIiB4Mj1cIjE3My42MlwiIHkyPVwiMTE0OS41MzdcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguNTYzIDAgMCAtLjU2OCAtMjkuMjE1IDcwNy44MTcpXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjRkZENDNCXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI0ZGRTg3M1wiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9XCJ1cmwoI3B5dGhvbi1vcmlnaW5hbC1hKVwiIGQ9XCJNNjMuMzkxIDEuOTg4Yy00LjIyMi4wMi04LjI1Mi4zNzktMTEuOCAxLjAwNy0xMC40NSAxLjg0Ni0xMi4zNDYgNS43MS0xMi4zNDYgMTIuODM3djkuNDExaDI0LjY5M3YzLjEzN0gyOS45NzdjLTcuMTc2IDAtMTMuNDYgNC4zMTMtMTUuNDI2IDEyLjUyMS0yLjI2OCA5LjQwNS0yLjM2OCAxNS4yNzUgMCAyNS4wOTYgMS43NTUgNy4zMTEgNS45NDcgMTIuNTE5IDEzLjEyNCAxMi41MTloOC40OTFWNjcuMjM0YzAtOC4xNTEgNy4wNTEtMTUuMzQgMTUuNDI2LTE1LjM0aDI0LjY2NWM2Ljg2NiAwIDEyLjM0Ni01LjY1NCAxMi4zNDYtMTIuNTQ4VjE1LjgzM2MwLTYuNjkzLTUuNjQ2LTExLjcyLTEyLjM0Ni0xMi44MzctNC4yNDQtLjcwNi04LjY0NS0xLjAyNy0xMi44NjYtMS4wMDh6TTUwLjAzNyA5LjU1N2MyLjU1IDAgNC42MzQgMi4xMTcgNC42MzQgNC43MjEgMCAyLjU5My0yLjA4MyA0LjY5LTQuNjM0IDQuNjktMi41NiAwLTQuNjMzLTIuMDk3LTQuNjMzLTQuNjktLjAwMS0yLjYwNCAyLjA3My00LjcyMSA0LjYzMy00LjcyMXpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMC4yNilcIj48L3BhdGg+PHBhdGggZmlsbD1cInVybCgjcHl0aG9uLW9yaWdpbmFsLWIpXCIgZD1cIk05MS42ODIgMjguMzh2MTAuOTY2YzAgOC41LTcuMjA4IDE1LjY1NS0xNS40MjYgMTUuNjU1SDUxLjU5MWMtNi43NTYgMC0xMi4zNDYgNS43ODMtMTIuMzQ2IDEyLjU0OXYyMy41MTVjMCA2LjY5MSA1LjgxOCAxMC42MjggMTIuMzQ2IDEyLjU0NyA3LjgxNiAyLjI5NyAxNS4zMTIgMi43MTMgMjQuNjY1IDAgNi4yMTYtMS44MDEgMTIuMzQ2LTUuNDIzIDEyLjM0Ni0xMi41NDd2LTkuNDEySDYzLjkzOHYtMy4xMzhoMzcuMDEyYzcuMTc2IDAgOS44NTItNS4wMDUgMTIuMzQ4LTEyLjUxOSAyLjU3OC03LjczNSAyLjQ2Ny0xNS4xNzQgMC0yNS4wOTYtMS43NzQtNy4xNDUtNS4xNjEtMTIuNTIxLTEyLjM0OC0xMi41MjFoLTkuMjY4ek03Ny44MDkgODcuOTI3YzIuNTYxIDAgNC42MzQgMi4wOTcgNC42MzQgNC42OTIgMCAyLjYwMi0yLjA3NCA0LjcxOS00LjYzNCA0LjcxOS0yLjU1IDAtNC42MzMtMi4xMTctNC42MzMtNC43MTkgMC0yLjU5NSAyLjA4My00LjY5MiA0LjYzMy00LjY5MnpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxMC4yNilcIj48L3BhdGg+PHJhZGlhbEdyYWRpZW50IGlkPVwicHl0aG9uLW9yaWdpbmFsLWNcIiBjeD1cIjE4MjUuNjc4XCIgY3k9XCI0NDQuNDVcIiByPVwiMjYuNzQzXCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoMCAtLjI0IC0xLjA1NSAwIDUzMi45NzkgNTU3LjU3NilcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNCOEI4QjhcIiBzdG9wLW9wYWNpdHk9XCIuNDk4XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdGN0Y3RlwiIHN0b3Atb3BhY2l0eT1cIjBcIj48L3N0b3A+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBvcGFjaXR5PVwiLjQ0NFwiIGZpbGw9XCJ1cmwoI3B5dGhvbi1vcmlnaW5hbC1jKVwiIGQ9XCJNOTcuMzA5IDExOS41OTdjMCAzLjU0My0xNC44MTYgNi40MTYtMzMuMDkxIDYuNDE2LTE4LjI3NiAwLTMzLjA5Mi0yLjg3My0zMy4wOTItNi40MTYgMC0zLjU0NCAxNC44MTUtNi40MTcgMzMuMDkyLTYuNDE3IDE4LjI3NSAwIDMzLjA5MSAyLjg3MiAzMy4wOTEgNi40MTd6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIyLjY3IDQ3aDk5LjY3djczLjY3SDIyLjY3elwiPjwvcGF0aD48cGF0aCBkYXRhLW5hbWU9XCJvcmlnaW5hbFwiIGZpbGw9XCIjMDA3YWNjXCIgZD1cIk0xLjUgNjMuOTF2NjIuNWgxMjV2LTEyNUgxLjV6bTEwMC43My01YTE1LjU2IDE1LjU2IDAgMDE3LjgyIDQuNSAyMC41OCAyMC41OCAwIDAxMyA0YzAgLjE2LTUuNCAzLjgxLTguNjkgNS44NS0uMTIuMDgtLjYtLjQ0LTEuMTMtMS4yM2E3LjA5IDcuMDkgMCAwMC01Ljg3LTMuNTNjLTMuNzktLjI2LTYuMjMgMS43My02LjIxIDVhNC41OCA0LjU4IDAgMDAuNTQgMi4zNGMuODMgMS43MyAyLjM4IDIuNzYgNy4yNCA0Ljg2IDguOTUgMy44NSAxMi43OCA2LjM5IDE1LjE2IDEwIDIuNjYgNCAzLjI1IDEwLjQ2IDEuNDUgMTUuMjQtMiA1LjItNi45IDguNzMtMTMuODMgOS45YTM4LjMyIDM4LjMyIDAgMDEtOS41Mi0uMSAyMyAyMyAwIDAxLTEyLjcyLTYuNjNjLTEuMTUtMS4yNy0zLjM5LTQuNTgtMy4yNS00LjgyYTkuMzQgOS4zNCAwIDAxMS4xNS0uNzNMODIgMTAxbDMuNTktMi4wOC43NSAxLjExYTE2Ljc4IDE2Ljc4IDAgMDA0Ljc0IDQuNTRjNCAyLjEgOS40NiAxLjgxIDEyLjE2LS42MmE1LjQzIDUuNDMgMCAwMC42OS02LjkyYy0xLTEuMzktMy0yLjU2LTguNTktNS02LjQ1LTIuNzgtOS4yMy00LjUtMTEuNzctNy4yNGExNi40OCAxNi40OCAwIDAxLTMuNDMtNi4yNSAyNSAyNSAwIDAxLS4yMi04YzEuMzMtNi4yMyA2LTEwLjU4IDEyLjgyLTExLjg3YTMxLjY2IDMxLjY2IDAgMDE5LjQ5LjI2em0tMjkuMzQgNS4yNHY1LjEySDU2LjY2djQ2LjIzSDQ1LjE1VjY5LjI2SDI4Ljg4di01YTQ5LjE5IDQ5LjE5IDAgMDEuMTItNS4xN0MyOS4wOCA1OSAzOSA1OSA1MSA1OWgyMS44M3pcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcblxyXG5gPHN2ZyBjbGFzcz0gXCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIiM0OTQ5NDlcIiBkPVwiTTY0LjA5NCAxMjYuMjI0YzM0LjI3NS0uMDUyIDYyLjAyMS0yNy45MzMgNjIuMDIxLTYyLjMyNSAwLTMzLjgzMy0yNy42MTgtNjEuNjk3LTYwLjYxMy02Mi4yODZDMzAuODUuOTk1IDEuODk0IDI5LjExMyAxLjg4NSA2My4yMWMtLjAxIDM1LjA3OSAyNy42MTIgNjMuMDY0IDYyLjIwOSA2My4wMTR6TTYzLjk5MyA0LjYzYzMyLjkwNy0uMDExIDU5LjEyNiAyNi43MjUgNTkuMTE2IDYwLjI4LS4wMTEgMzEuNjc5LTI2LjkyNSA1OC4xOC01OS4wOTIgNTguMTg3LTMyLjc3MS4wMDctNTkuMTI1LTI2LjU2My01OS4xMjQtNTkuNjA4LjAwMi0zMi4xOTMgMjYuNzY2LTU4Ljg0OCA1OS4xLTU4Ljg1OXpNMzkuMTU3IDM1Ljg5NmMuNTM4IDEuNzkzLS45NjggMi40MTctMi41NjkgMi41NDItMS42ODUuMTMtMy4zNjkuMjU3LTUuMzI1LjQwNiA2LjQ1NiAxOS4yMzQgMTIuODE1IDM4LjE4MyAxOS4zMjUgNTcuNTczLjQ2NC0uNzU5LjY1NS0uOTczLjczOS0xLjIyMyAzLjU3NC0xMC42ODIgNy4xNjgtMjEuMzU3IDEwLjY1MS0zMi4wNjkuMzE4LS45NzcuMTYtMi4yNzEtLjE4OC0zLjI3NS0xLjg0My01LjMyLTQuMDUxLTEwLjUyNC01LjY2Ny0xNS45MDgtMS4xMDUtMy42ODYtMi41NzEtNi4wNzEtNi45MjgtNS42NDQtLjc0Mi4wNzMtMS42NDgtMS41MjQtMi40NzktMi4zNDkgMS4wMDUtLjYgMi4wMDMtMS43MDQgMy4wMTctMS43MTlhODQ5LjU5MyA4NDkuNTkzIDAgMDEyNi42MTguMDA4YzEuMDE4LjAxNyAyLjAxNiAxLjE1IDMuMDIxIDEuNzY1LS44OC44MDQtMS42MzkgMi4wMS0yLjY2OCAyLjMyMS0xLjY1MS40OTgtMy40ODIuNDA0LTUuNDU4LjU4bDE5LjM0OSA1Ny41NmMyLjkzMS05LjczNiA1LjY1OC0xOC42NzYgOC4zMS0yNy42MzkgMi4zNjYtOC4wMDEuOTU2LTE1LjQ3My0zLjMyMi0yMi41Mi0xLjI4Ni0yLjExOS0yLjg2Ni00LjE3NS0zLjU5NS02LjQ4Ni0uODI4LTIuNjI5LTEuNTE2LTUuNjIyLTEuMDc3LTguMjU5Ljc0NS00LjQ2OSA0LjE3NC02LjY4OCA4LjgxNC03LjExM0M3NC4zMzMuODgxIDM0LjQzMSA5LjMxNyAxOS43MjggMzQuOTIyYzUuNjYtLjI2MSAxMS4wNjQtLjYwNCAxNi40NzItLjY3OCAxLjAyMi0uMDEzIDIuNzE3Ljg1MSAyLjk1NyAxLjY1MnptMTAuMTE3IDc3Ljk3MWMtLjExOC4zNDUtLjEyNS43MjktLjIxOCAxLjMwMiAxMC45NDMgMy4wMzQgMjEuNjc1IDIuODE1IDMyLjY1OS0uODg2bC0xNi43OC00NS45NmMtNS4zNyAxNS42MTEtMTAuNTIgMzAuNTc1LTE1LjY2MSA0NS41NDR6bS04LjQ1Ni0yLjA3OGwtMjUuMjgxLTY5LjM1Yy0xMS40MDUgMjIuMjc4LTIuNzI5IDU2LjI2OCAyNS4yODEgNjkuMzV6bTc2LjQyOC00NC41NjJjLjgwMi0xMC41MzQtMi44MzItMjUuMTE5LTUuOTctMjcuMTI1LS4zNSAzLjg3NS0uMTA2IDguMTg2LTEuMjE4IDEyLjExNC0yLjYxNyA5LjI1NS01LjgxNyAxOC4zNDktOC44OTkgMjcuNDY4LTMuMzUgOS45MTItNi44MzIgMTkuNzc5LTEwLjI1NyAyOS42NjYgMTYuMDkyLTkuNTM5IDI0LjkzNS0yMy42MTggMjYuMzQ0LTQyLjEyM3pcIj48L3BhdGg+XHJcbjwvc3ZnPmBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxze1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2tpbGxzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlcigpKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInNraWxsLXRpdGxlXCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBTa2lsbHNcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbGlkZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNsaWRlclwiO1xyXG5cclxuICAgICAgICBjb25zdCBicmFuZHMgPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgIGl0ZW1zSG9sZGVyLmNsYXNzTmFtZSA9IFwiYnJhbmRzXCI7XHJcblxyXG4gICAgICAgICAgICBpY29ucy5mb3JFYWNoKChpdGVtKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmNsYXNzTmFtZSA9IFwiYnJhbmQtbG9nb1wiO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgPSBgJHtpdGVtfWA7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0hvbGRlci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zSG9sZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJyYW5kcygpKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY3ZNYWtlckltZyBmcm9tIFwiLi4vaW1hZ2VzL2N2LW1ha2VyLnBuZ1wiO1xyXG5pbXBvcnQgbWVtb3J5SW1nIGZyb20gXCIuLi9pbWFnZXMvbWVtb3J5LnBuZ1wiO1xyXG5pbXBvcnQgdG9kb2xpc3RJbWcgZnJvbSBcIi4uL2ltYWdlcy90b2RvbGlzdC5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJBcHBJbWcgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXItYXBwLnBuZydcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge25hbWU6IFwiV2VhdGhlciBBcHBcIiwgXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNob3J0IGRlc2NyaXB0aW9uLiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvLlwiLCBcclxuICAgIGltYWdlOiB3ZWF0aGVyQXBwSW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L3dlYXRoZXItYXBwXCJ9LFxyXG4gICAge25hbWU6IFwiVG9kbyBMaXN0XCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogdG9kb2xpc3RJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL3hzeW1tZXRyeTkuZ2l0aHViLmlvL3RvZG9saXN0L1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvdG9kb2xpc3RcIn0sXHJcbiAgICB7bmFtZTogXCJNZW1vcnlcIiwgXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNob3J0IGRlc2NyaXB0aW9uLiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvLlwiLCBcclxuICAgIGltYWdlOiBtZW1vcnlJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL3hzeW1tZXRyeTkuZ2l0aHViLmlvL21lbW9yeS9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L21lbW9yeVwifSxcclxuICAgIHtuYW1lOiBcIkNWIE1ha2VyXCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogY3ZNYWtlckltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8vbG9xdWFjaW91cy1wYXByZW5qYWstYjIzNTY1Lm5ldGxpZnkuYXBwL1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvY3YtbWFrZXJcIn0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3Jre1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid29ya1wiKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHMoKSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3b3JrLXRpdGxlXCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBXb3JrXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdHMgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT57XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZHNcIilcclxuICAgICAgICAgICAgcHJvamVjdENhcmRzLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIkFuIGltYWdlIG9mICR7aXRlbS5uYW1lfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlLW5hbWVcIj4ke2l0ZW0ubmFtZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGluay1maWxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiR7aXRlbS5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibWRpLWljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5naXQ8L3RpdGxlPjxwYXRoIGQ9XCJNMi42LDEwLjU5TDguMzgsNC44TDEwLjA3LDYuNUM5LjgzLDcuMzUgMTAuMjIsOC4yOCAxMSw4LjczVjE0LjI3QzEwLjQsMTQuNjEgMTAsMTUuMjYgMTAsMTZBMiwyIDAgMCwwIDEyLDE4QTIsMiAwIDAsMCAxNCwxNkMxNCwxNS4yNiAxMy42LDE0LjYxIDEzLDE0LjI3VjkuNDFMMTUuMDcsMTEuNUMxNSwxMS42NSAxNSwxMS44MiAxNSwxMkEyLDIgMCAwLDAgMTcsMTRBMiwyIDAgMCwwIDE5LDEyQTIsMiAwIDAsMCAxNywxMEMxNi44MiwxMCAxNi42NSwxMCAxNi41LDEwLjA3TDEzLjkzLDcuNUMxNC4xOSw2LjU3IDEzLjcxLDUuNTUgMTIuNzgsNS4xNkMxMi4zNSw1IDExLjksNC45NiAxMS41LDUuMDdMOS44LDMuMzhMMTAuNTksMi42QzExLjM3LDEuODEgMTIuNjMsMS44MSAxMy40MSwyLjZMMjEuNCwxMC41OUMyMi4xOSwxMS4zNyAyMi4xOSwxMi42MyAyMS40LDEzLjQxTDEzLjQxLDIxLjRDMTIuNjMsMjIuMTkgMTEuMzcsMjIuMTkgMTAuNTksMjEuNEwyLjYsMTMuNDFDMS44MSwxMi42MyAxLjgxLDExLjM3IDIuNiwxMC41OVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiR7aXRlbS53ZWJzaXRlfVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kaS1pY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+b3Blbi1pbi1uZXc8L3RpdGxlPjxwYXRoIGQ9XCJNMTQsM1Y1SDE3LjU5TDcuNzYsMTQuODNMOS4xNywxNi4yNEwxOSw2LjQxVjEwSDIxVjNNMTksMTlINVY1SDEyVjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LWJ1aWx0aW5cIj48aT5CdWlsdCB3aXRoICR7aXRlbS5sYW5ndWFnZX08L2k+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudDtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi4vc3JjL3BhZ2VzL2hvbWVwYWdlJztcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhvbWVQYWdlLmxvYWRQYWdlKCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9