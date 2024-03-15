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

    --button-color: var(--primary-bg-color-dark);
    --color-cyan: rgb(0, 247, 255);
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

    height: 70px;
}
@media (max-width: 55em)
{
    .header-container{
        background: rgba(25, 25, 25, 0.7);
    }
}

.title-logo{
    width: 100px;
}
.title-logo a{
    color: var(--primary-color-light);
    margin-left: 1.2rem;
    font-weight: 700;
    text-decoration: none;
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
    .title-logo{
        margin-top: 22.5px;
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

    .menu-btn[aria-hidden ="false"] .top
    {
        y: 48;
        rotate: 45deg;
    }
    .menu-btn[aria-hidden ="false"] .middle
    {
        opacity: 0;
    }
    .menu-btn[aria-hidden ="false"] .bottom
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --primary-font: 'Poppins', sans-serif;\r\n    --primary-color-dark: #000;\r\n    --primary-color-light: #fff;\r\n    --primary-fc-dark: #000;\r\n    --primary-bg-color-dark: var(--primary-color-dark);\r\n\r\n    --button-color: var(--primary-bg-color-dark);\r\n    --color-cyan: rgb(0, 247, 255);\r\n}\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    background-color: var(--primary-color-light);\r\n    font-family: var(--primary-font);\r\n} \r\n/* Header */\r\nheader{\r\n    position: absolute;\r\n    top: 3rem;\r\n    width: 100%;\r\n    background: rgba(25, 25, 25, 0.3);\r\n}\r\nh2{\r\n    font: 3rem sans-serif;\r\n    font-weight: 700;\r\n}\r\nh3{\r\n    font: 2rem sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\np{\r\n    font-size: .9rem;\r\n}\r\n\r\n.header-container{\r\n    position: relative;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    color: var(--primary-color-light);\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n\r\n    height: 70px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .header-container{\r\n        background: rgba(25, 25, 25, 0.7);\r\n    }\r\n}\r\n\r\n.title-logo{\r\n    width: 100px;\r\n}\r\n.title-logo a{\r\n    color: var(--primary-color-light);\r\n    margin-left: 1.2rem;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n}\r\n.nav-container{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 1.88rem;\r\n    padding: 12px 12px;\r\n}\r\n\r\n.nav-links{\r\n    position: relative;\r\n    --color: var(--color-cyan);\r\n    padding-bottom: 6px;\r\n    cursor: pointer;\r\n    color: var(--primary-color-light);\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    font-size: inherit;\r\n    transition: color ease-in .7s;\r\n}\r\n.nav-links:hover, .nav-links:focus{\r\n    color: var(--color);\r\n}\r\n\r\n@media (max-width: 55em){\r\n    header{\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n    nav{\r\n        background-color: rgba(25, 25, 25, 0.9);\r\n        width: 100%;\r\n        height: 100vh;\r\n        position: absolute;\r\n    }\r\n   \r\n    .header-container{\r\n        flex-direction: column;\r\n        align-items: normal;\r\n    }\r\n    .nav-container{\r\n        margin-top: 3rem;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .nav-container > li{\r\n        width: 100%;\r\n        border-bottom: 1px solid white;\r\n        padding: 1rem .5rem;\r\n    }\r\n    .title-logo{\r\n        margin-top: 22.5px;\r\n    }\r\n}\r\n/* Content */\r\n\r\n.content-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    padding: 0;\r\n    background-color: var(--primary-bg-color-dark);\r\n\r\n}\r\n/* Banner */\r\n.banner-title{\r\n    color: var(--primary-color-light);\r\n    line-height: 1;\r\n    font-size: 7rem;\r\n    padding: 0 12px;\r\n}\r\n\r\n.subtitle{\r\n    color: var(--primary-color-light);\r\n    font-size: 1.6rem;\r\n    padding-top: 1.2rem;\r\n}\r\n@media (max-width: 55em){\r\n    .banner-title{\r\n        font-size: 4rem;\r\n    }\r\n    .subtitle{\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n.banner-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n}\r\n.banner-btn-nav-about\r\n{\r\n    cursor: pointer;\r\n    height: 70px;\r\n    width: 70px;\r\n    fill: var(--primary-color-light);\r\n    background: none;\r\n    border: 2px solid var(--primary-color-light);\r\n    border-radius: 50%;\r\n    animation: slidein ease-in-out .5s;\r\n    margin-top: 7rem;\r\n    transition: background-color ease-in 500ms,\r\n                fill ease-in 500ms,\r\n                border ease-in 500ms;\r\n\r\n}\r\n@keyframes slidein{\r\n\r\n    from{margin-top: 0;}\r\n    to{margin-top: 7rem;}\r\n        \r\n}\r\n\r\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\r\n    --color: rgb(0, 247, 255);\r\n    background-color: var(--color);\r\n    border: 3px solid var(--color);\r\n    fill: #000;\r\n}\r\n\r\n/* About */\r\n.section-container{\r\n    background-color: var(--primary-color-light);\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.about-background{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-color-light);\r\n    height: 100vh;\r\n}\r\n.about-description{\r\n    color: var(--primary-color-dark);\r\n    background-color: var(--primary-color-light);\r\n    font-size: 1.2rem;\r\n    padding: 2rem 1.2rem;\r\n    border: 1px solid var(--primary-color-dark);\r\n    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.imageDescription-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    margin-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    z-index: 0;\r\n    \r\n}\r\n.imageDescription-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -10;\r\n    background-color: var(--primary-color-dark);\r\n    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);\r\n\r\n}\r\n\r\n@media (max-width: 55em) {\r\n    .imageDescription-container{\r\n        flex-wrap: wrap;\r\n\r\n    }\r\n}\r\n.profile-picture{\r\n    width: 400px;\r\n    height: auto;\r\n    outline: 1px solid green;\r\n    box-shadow: 1px 2px 1px 1px rgba(25, 25, 25, 0.7);\r\n}\r\n#about .social-media-icons-container{\r\n    justify-content: flex-end;\r\n}\r\n\r\n/*Skills */\r\n:root{\r\n    --total-brand: 12;\r\n    --logo-width: 12rem;\r\n    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);\r\n}\r\n\r\n.skill-title{\r\n    text-align: center;\r\n}\r\n\r\n.slider{\r\n    position: relative;\r\n    height: 20rem;\r\n    background-color: #fff;\r\n    box-shadow: 0.8rem 1.4rem -.2rem #0001;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.slider::before,\r\n.slider::after{\r\n    position: absolute;\r\n    content: \"\";\r\n\r\n    height: 100%;\r\n    width: var(--logo-width);\r\n}\r\n.slider::before{\r\n    left: 0;\r\n    background: linear-gradient(to right, #fff 0%,#0000 100%);\r\n}\r\n.slider::after{\r\n    right: 0;\r\n    background: linear-gradient(to left, #fff 0%,#0000 100%);\r\n}\r\n\r\n.slider ul.brands{\r\n    list-style: none;\r\n    width: var(--total-logo-width);\r\n    display: flex;\r\n\r\n    animation: slideLeft 12s linear infinite;\r\n}\r\n.slider:hover ul.brands{\r\n    animation-play-state: paused;\r\n}\r\n\r\n@keyframes slideLeft {\r\n    100%{\r\n        transform: translateX(calc(-100% / 2));\r\n    }\r\n}\r\n\r\nul.brands li.brand-logo{\r\n    width: var(--logo-width);\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin-left: 3rem\r\n}\r\n\r\n.skill-icon{\r\n    height: 100px;\r\n    /* margin: 0 30px; */\r\n}\r\n\r\n/* Work */\r\n\r\n.content{\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    padding: 5rem 0;\r\n}\r\n\r\n.work-title{\r\n    text-align: center;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.top-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.mdi-icons{\r\n    height: 1.9rem;\r\n    width: 1.9rem;\r\n    fill: var(--primary-color-dark);\r\n    background-color: inherit;\r\n}\r\n.mdi-icons:hover, .mdi-icons:active{\r\n    fill: blue;\r\n}\r\n\r\n.link-file-container{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: .3rem;\r\n}\r\n.link-file-container{\r\n    list-style: none;\r\n}\r\n.link-file-container a{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.project-container{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n    gap: 1.6rem;\r\n    padding: 2rem 12px;\r\n}\r\n\r\n.title-name{\r\n    --spacing: 1.2rem;\r\n    font-size: 1.8rem;\r\n    padding-bottom: var(--spacing);\r\n}\r\n\r\n.project-cards{\r\n    display: grid;\r\n    grid-template-rows: 1fr .7fr;\r\n    box-shadow: 2px 2px 3px 2px rgba(25, 25, 25, 0.3);\r\n}\r\n\r\n.project-image{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.project-bottom{\r\n    border-top: 1px solid black;\r\n    padding: 1.2rem 1.2rem;\r\n\r\n}\r\n.project-description{\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* Contact */\r\n\r\n.contact-flex{\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n    padding-bottom: .3rem;\r\n}\r\n\r\n.contact-container{\r\n    --spacing-big: 3rem;\r\n    color: var(--primary-color-light);\r\n    margin-top: var(--spacing-big);\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n@media (max-width: 55em)\r\n{\r\n    .contact-container{\r\n        display: block;\r\n    }\r\n}\r\n\r\n.contact-image{\r\n    max-width: 700px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.social-media-icons-container{\r\n    display: flex;\r\n    gap: 16px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .social-media-icons-container{\r\n        justify-content: center;\r\n        padding: 1.2rem;\r\n    }\r\n}\r\n.social-media-icons{\r\n    list-style: none;\r\n}\r\n.social-media-icons-links{\r\n    cursor: pointer;\r\n    \r\n}\r\n.devicon{\r\n    font-size: 2rem;\r\n}\r\n\r\n.social-media-links{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.left-container{\r\n    --spacing-1: 1rem;\r\n    padding: 0 var(--spacing-1);\r\n}\r\n\r\n.left-container h2{\r\n    --spacing-2: 1.2rem;\r\n    padding-bottom: 1.12rem;\r\n}\r\n.left-container .contact-subtitle{\r\n    --spacing-1: 1rem;\r\n    padding-bottom: var(--spacing-1);\r\n}\r\n\r\n.right-container{\r\n    padding: 0 12px;\r\n}\r\n\r\n/* footer */\r\n.footer-container{\r\n    background-color: var(--primary-color-dark);\r\n    color: var(--primary-color-light);\r\n    text-align: center;\r\n    padding: 1.2rem 0;\r\n}\r\n\r\n/*Components */\r\n.menu-btn{\r\n    --button-color: var(--primary-color-light);\r\n        cursor: pointer;\r\n        display: none;   \r\n        fill: var(--button-color);\r\n        \r\n        position: absolute;\r\n        right: 12px;\r\n        top: 13px;\r\n        z-index: 100;\r\n        background: transparent;\r\n        border: 1px solid var(--button-color);\r\n        border-radius: 5px;\r\n    }\r\n\r\n    .menu-btn .line{\r\n        transition: \r\n            y 300ms ease-in 300ms,\r\n            rotate 300ms ease-in ,\r\n            opacity 0ms 300ms;\r\n        transform-origin: center;\r\n    }\r\n    .menu-btn:hover .line{\r\n        transition: \r\n            y 300ms ease-in,\r\n            rotate 300ms ease-in 300ms,\r\n            opacity 0ms 300ms;\r\n    }\r\n\r\n    .menu-btn[aria-hidden =\"false\"] .top\r\n    {\r\n        y: 48;\r\n        rotate: 45deg;\r\n    }\r\n    .menu-btn[aria-hidden =\"false\"] .middle\r\n    {\r\n        opacity: 0;\r\n    }\r\n    .menu-btn[aria-hidden =\"false\"] .bottom\r\n    {\r\n        y: 48;\r\n        rotate: -45deg;\r\n    }\r\n\r\n    .menu-btn:hover :is(.top, .bottom){\r\n        y: 48;\r\n    }\r\n    .menu-btn:hover .top{\r\n        rotate: 45deg;\r\n    }\r\n    .menu-btn:hover .bottom{\r\n        rotate: -45deg;\r\n    }\r\n    .menu-btn:hover .middle{\r\n        opacity: 0;\r\n    }\r\n \r\n    @media (max-width: 55em){\r\n        .menu-btn{\r\n            display: block;\r\n        }\r\n    }\r\n\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.sticky{\r\n    position: sticky;\r\n    top: 0;\r\n    background: rgba(25, 25, 25, 0.7);\r\n    z-index: 20;\r\n}\r\n\r\n.blink{\r\n    animation: customBlink 2s infinite ease;\r\n}\r\n\r\n@keyframes customBlink{\r\n    0%,\r\n    50%,\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n    25%,\r\n    75%{\r\n        opacity: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
                menu.setAttribute("aria-hidden", "true");
                navigationPage.setAttribute("aria-hidden", "true");
                navigationPage.classList.add("hidden");
            } else{
                navigationPage.setAttribute("aria-hidden", "false");
                menu.setAttribute("aria-hidden", "false");

                navigationPage.classList.remove("hidden");
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
                navigationPage.setAttribute("aria-hidden", "false");
                menuBtn.setAttribute("aria-hidden", "true");
                navigationPage.classList.remove("hidden");
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
                navigationPage.classList.add("hidden");

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
            const box = document.createElement("div");
            box.className = "title-logo";
            box.innerHTML = `
                <a href="/"><span>${fName} ${lName}</span></a>`;
            return box;
        }

        const menuButton = () =>{
            const button = document.createElement("button");
            button.classList.add("menu-btn");
            button.setAttribute("aria-controls", "primary-navigation");
            button.setAttribute("aria-expanded", false);
            button.innerHTML = `
                <svg fill="var(--button-color)" class ="hamburger" viewBox ="0 0 100 100" width ="42" height = "42">
                    <rect class ="line top" width ="80" height="6" x="10" y="30" rx="5">
                    </rect>
                    <rect class ="line middle" width ="80" height="6" x="10" y="50" rx="5">
                    </rect>
                    <rect class ="line bottom" width ="80" height="6" x="10" y="70" rx="5"></rect>
                </svg>`
            return button;
        }
    
        const navigation = () => {
            const container = document.createElement("nav");
            container.className = "primary-navigation";
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
        }, 7000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLE1BQU0sTUFBTSxvQkFBb0Isd0JBQXdCLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksWUFBWSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsTUFBTSxLQUFLLE9BQU8sT0FBTyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxL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QTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ1k7QUFDN0M7QUFDQSxxQ0FBcUMsMkRBQVEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29ucy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvd29yay5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcclxuICAgIC0tcHJpbWFyeS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwMDtcclxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogI2ZmZjtcclxuICAgIC0tcHJpbWFyeS1mYy1kYXJrOiAjMDAwO1xyXG4gICAgLS1wcmltYXJ5LWJnLWNvbG9yLWRhcms6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcblxyXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XHJcbiAgICAtLWNvbG9yLWN5YW46IHJnYigwLCAyNDcsIDI1NSk7XHJcbn1cclxuKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWx7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxufSBcclxuLyogSGVhZGVyICovXHJcbmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3JlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjMpO1xyXG59XHJcbmgye1xyXG4gICAgZm9udDogM3JlbSBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG5cclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcclxue1xyXG4gICAgLmhlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUtbG9nb3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4udGl0bGUtbG9nbyBhe1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdi1jb250YWluZXJ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMS44OHJlbTtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxufVxyXG5cclxuLm5hdi1saW5rc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluIC43cztcclxufVxyXG4ubmF2LWxpbmtzOmhvdmVyLCAubmF2LWxpbmtzOmZvY3Vze1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAyNSwgMC45KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lcntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAubmF2LWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5uYXYtY29udGFpbmVyID4gbGl7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMi41cHg7XHJcbiAgICB9XHJcbn1cclxuLyogQ29udGVudCAqL1xyXG5cclxuLmNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XHJcblxyXG59XHJcbi8qIEJhbm5lciAqL1xyXG4uYmFubmVyLXRpdGxle1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuMnJlbTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XHJcbiAgICAuYmFubmVyLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuICAgIC5zdWJ0aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG4uYmFubmVyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJhbm5lci1idG4tbmF2LWFib3V0XHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNsaWRlaW4gZWFzZS1pbi1vdXQgLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiA1MDBtcyxcclxuICAgICAgICAgICAgICAgIGZpbGwgZWFzZS1pbiA1MDBtcyxcclxuICAgICAgICAgICAgICAgIGJvcmRlciBlYXNlLWluIDUwMG1zO1xyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlaW57XHJcblxyXG4gICAgZnJvbXttYXJnaW4tdG9wOiAwO31cclxuICAgIHRve21hcmdpbi10b3A6IDdyZW07fVxyXG4gICAgICAgIFxyXG59XHJcblxyXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXQ6aG92ZXIsIC5iYW5uZXItYnRuLW5hdi1hYm91dDpmb2N1c3tcclxuICAgIC0tY29sb3I6IHJnYigwLCAyNDcsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvcik7XHJcbiAgICBmaWxsOiAjMDAwO1xyXG59XHJcblxyXG4vKiBBYm91dCAqL1xyXG4uc2VjdGlvbi1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFib3V0LWJhY2tncm91bmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uYWJvdXQtZGVzY3JpcHRpb257XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjYpO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG59XHJcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSA0MCUsIDAlIDk1JSk7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSkge1xyXG4gICAgLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICB9XHJcbn1cclxuLnByb2ZpbGUtcGljdHVyZXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XHJcbn1cclxuI2Fib3V0IC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLypTa2lsbHMgKi9cclxuOnJvb3R7XHJcbiAgICAtLXRvdGFsLWJyYW5kOiAxMjtcclxuICAgIC0tbG9nby13aWR0aDogMTJyZW07XHJcbiAgICAtLXRvdGFsLWxvZ28td2lkdGg6IGNhbGModmFyKC0tdG90YWwtYnJhbmQpICogdmFyKC0tbG9nby13aWR0aCkgKiAyKTtcclxufVxyXG5cclxuLnNraWxsLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwLjhyZW0gMS40cmVtIC0uMnJlbSAjMDAwMTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlcjo6YmVmb3JlLFxyXG4uc2xpZGVyOjphZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xyXG59XHJcbi5zbGlkZXI6OmJlZm9yZXtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsIzAwMDAgMTAwJSk7XHJcbn1cclxuLnNsaWRlcjo6YWZ0ZXJ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmIDAlLCMwMDAwIDEwMCUpO1xyXG59XHJcblxyXG4uc2xpZGVyIHVsLmJyYW5kc3tcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogdmFyKC0tdG90YWwtbG9nby13aWR0aCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDEycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnNsaWRlcjpob3ZlciB1bC5icmFuZHN7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlIC8gMikpO1xyXG4gICAgfVxyXG59XHJcblxyXG51bC5icmFuZHMgbGkuYnJhbmQtbG9nb3tcclxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtXHJcbn1cclxuXHJcbi5za2lsbC1pY29ue1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIC8qIG1hcmdpbjogMCAzMHB4OyAqL1xyXG59XHJcblxyXG4vKiBXb3JrICovXHJcblxyXG4uY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcblxyXG4ud29yay10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4udG9wLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1kaS1pY29uc3tcclxuICAgIGhlaWdodDogMS45cmVtO1xyXG4gICAgd2lkdGg6IDEuOXJlbTtcclxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5tZGktaWNvbnM6aG92ZXIsIC5tZGktaWNvbnM6YWN0aXZle1xyXG4gICAgZmlsbDogYmx1ZTtcclxufVxyXG5cclxuLmxpbmstZmlsZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogLjNyZW07XHJcbn1cclxuLmxpbmstZmlsZS1jb250YWluZXJ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5saW5rLWZpbGUtY29udGFpbmVyIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMS42cmVtO1xyXG4gICAgcGFkZGluZzogMnJlbSAxMnB4O1xyXG59XHJcblxyXG4udGl0bGUtbmFtZXtcclxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmRze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSgyNSwgMjUsIDI1LCAwLjMpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnByb2plY3QtYm90dG9te1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDEuMnJlbTtcclxuXHJcbn1cclxuLnByb2plY3QtZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogQ29udGFjdCAqL1xyXG5cclxuLmNvbnRhY3QtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1jb250YWluZXJ7XHJcbiAgICAtLXNwYWNpbmctYmlnOiAzcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXHJcbntcclxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3QtaW1hZ2V7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxyXG57XHJcbiAgICAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgICB9XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1pY29uc3tcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNvY2lhbC1tZWRpYS1pY29ucy1saW5rc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcbi5kZXZpY29ue1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWxpbmtze1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRhaW5lcntcclxuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4ubGVmdC1jb250YWluZXIgaDJ7XHJcbiAgICAtLXNwYWNpbmctMjogMS4ycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuMTJyZW07XHJcbn1cclxuLmxlZnQtY29udGFpbmVyIC5jb250YWN0LXN1YnRpdGxle1xyXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy0xKTtcclxufVxyXG5cclxuLnJpZ2h0LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG5cclxuLyogZm9vdGVyICovXHJcbi5mb290ZXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xyXG59XHJcblxyXG4vKkNvbXBvbmVudHMgKi9cclxuLm1lbnUtYnRue1xyXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAgIFxyXG4gICAgICAgIGZpbGw6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHRvcDogMTNweDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtYnRuIC5saW5le1xyXG4gICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4gMzAwbXMsXHJcbiAgICAgICAgICAgIHJvdGF0ZSAzMDBtcyBlYXNlLWluICxcclxuICAgICAgICAgICAgb3BhY2l0eSAwbXMgMzAwbXM7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5saW5le1xyXG4gICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4sXHJcbiAgICAgICAgICAgIHJvdGF0ZSAzMDBtcyBlYXNlLWluIDMwMG1zLFxyXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVwiZmFsc2VcIl0gLnRvcFxyXG4gICAge1xyXG4gICAgICAgIHk6IDQ4O1xyXG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XHJcbiAgICB9XHJcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVwiZmFsc2VcIl0gLm1pZGRsZVxyXG4gICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVwiZmFsc2VcIl0gLmJvdHRvbVxyXG4gICAge1xyXG4gICAgICAgIHk6IDQ4O1xyXG4gICAgICAgIHJvdGF0ZTogLTQ1ZGVnO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWJ0bjpob3ZlciA6aXMoLnRvcCwgLmJvdHRvbSl7XHJcbiAgICAgICAgeTogNDg7XHJcbiAgICB9XHJcbiAgICAubWVudS1idG46aG92ZXIgLnRvcHtcclxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5ib3R0b217XHJcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XHJcbiAgICB9XHJcbiAgICAubWVudS1idG46aG92ZXIgLm1pZGRsZXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XHJcbiAgICAgICAgLm1lbnUtYnRue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5ibGlua3tcclxuICAgIGFuaW1hdGlvbjogY3VzdG9tQmxpbmsgMnMgaW5maW5pdGUgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjdXN0b21CbGlua3tcclxuICAgIDAlLFxyXG4gICAgNTAlLFxyXG4gICAgMTAwJXtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMjUlLFxyXG4gICAgNzUle1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrREFBa0Q7O0lBRWxELDRDQUE0QztJQUM1Qyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLFlBQVk7QUFDaEI7QUFDQTs7SUFFSTtRQUNJLGlDQUFpQztJQUNyQztBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtB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SUFFQTtRQUNJOzs7NkJBR3FCO1FBQ3JCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0k7Ozs2QkFHcUI7SUFDekI7O0lBRUE7O1FBRUksS0FBSztRQUNMLGFBQWE7SUFDakI7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxLQUFLO1FBQ0wsY0FBYztJQUNsQjs7SUFFQTtRQUNJLEtBQUs7SUFDVDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0k7WUFDSSxjQUFjO1FBQ2xCO0lBQ0o7OztBQUdKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJOzs7UUFHSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICMwMDA7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogI2ZmZjtcXHJcXG4gICAgLS1wcmltYXJ5LWZjLWRhcms6ICMwMDA7XFxyXFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcblxcclxcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcXHJcXG4gICAgLS1jb2xvci1jeWFuOiByZ2IoMCwgMjQ3LCAyNTUpO1xcclxcbn1cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWx7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxyXFxufSBcXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjMpO1xcclxcbn1cXHJcXG5oMntcXHJcXG4gICAgZm9udDogM3JlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5oM3tcXHJcXG4gICAgZm9udDogMnJlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5we1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxyXFxue1xcclxcbiAgICAuaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbG9nb3tcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG4udGl0bGUtbG9nbyBhe1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLm5hdi1jb250YWluZXJ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMS44OHJlbTtcXHJcXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtze1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWN5YW4pO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4gLjdzO1xcclxcbn1cXHJcXG4ubmF2LWxpbmtzOmhvdmVyLCAubmF2LWxpbmtzOmZvY3Vze1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjkpO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuICAgXFxyXFxuICAgIC5oZWFkZXItY29udGFpbmVye1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1jb250YWluZXJ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1jb250YWluZXIgPiBsaXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUtbG9nb3tcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIyLjVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKiBDb250ZW50ICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcXHJcXG5cXHJcXG59XFxyXFxuLyogQmFubmVyICovXFxyXFxuLmJhbm5lci10aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuMnJlbTtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xcclxcbiAgICAuYmFubmVyLXRpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5zdWJ0aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5iYW5uZXItY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXRcXHJcXG57XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiA1MDBtcyxcXHJcXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxcclxcbiAgICAgICAgICAgICAgICBib3JkZXIgZWFzZS1pbiA1MDBtcztcXHJcXG5cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzbGlkZWlue1xcclxcblxcclxcbiAgICBmcm9te21hcmdpbi10b3A6IDA7fVxcclxcbiAgICB0b3ttYXJnaW4tdG9wOiA3cmVtO31cXHJcXG4gICAgICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXQ6aG92ZXIsIC5iYW5uZXItYnRuLW5hdi1hYm91dDpmb2N1c3tcXHJcXG4gICAgLS1jb2xvcjogcmdiKDAsIDI0NywgMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICAgIGZpbGw6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLnNlY3Rpb24tY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uYWJvdXQtYmFja2dyb3VuZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uYWJvdXQtZGVzY3JpcHRpb257XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMS4ycmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjYpO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSA0MCUsIDAlIDk1JSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKSB7XFxyXFxuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucHJvZmlsZS1waWN0dXJle1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xcclxcbn1cXHJcXG4jYWJvdXQgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi8qU2tpbGxzICovXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tdG90YWwtYnJhbmQ6IDEyO1xcclxcbiAgICAtLWxvZ28td2lkdGg6IDEycmVtO1xcclxcbiAgICAtLXRvdGFsLWxvZ28td2lkdGg6IGNhbGModmFyKC0tdG90YWwtYnJhbmQpICogdmFyKC0tbG9nby13aWR0aCkgKiAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMC44cmVtIDEuNHJlbSAtLjJyZW0gIzAwMDE7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjpiZWZvcmUsXFxyXFxuLnNsaWRlcjo6YWZ0ZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcclxcbn1cXHJcXG4uc2xpZGVyOjpiZWZvcmV7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXHJcXG59XFxyXFxuLnNsaWRlcjo6YWZ0ZXJ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB1bC5icmFuZHN7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS10b3RhbC1sb2dvLXdpZHRoKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMTJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLnNsaWRlcjpob3ZlciB1bC5icmFuZHN7XFxyXFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlIC8gMikpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbnVsLmJyYW5kcyBsaS5icmFuZC1sb2dve1xcclxcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogM3JlbVxcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtaWNvbntcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgLyogbWFyZ2luOiAwIDMwcHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIFdvcmsgKi9cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi53b3JrLXRpdGxle1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubWRpLWljb25ze1xcclxcbiAgICBoZWlnaHQ6IDEuOXJlbTtcXHJcXG4gICAgd2lkdGg6IDEuOXJlbTtcXHJcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuLm1kaS1pY29uczpob3ZlciwgLm1kaS1pY29uczphY3RpdmV7XFxyXFxuICAgIGZpbGw6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IC4zcmVtO1xcclxcbn1cXHJcXG4ubGluay1maWxlLWNvbnRhaW5lcntcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmstZmlsZS1jb250YWluZXIgYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEycHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1uYW1le1xcclxcbiAgICAtLXNwYWNpbmc6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZHN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDI1LCAyNSwgMjUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltYWdle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtYm90dG9te1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjJyZW07XFxyXFxuXFxyXFxufVxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgLS1zcGFjaW5nLWJpZzogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWJpZyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxyXFxue1xcclxcbiAgICAuY29udGFjdC1jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWFnZXtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pXFxyXFxue1xcclxcbiAgICAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbnN7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5kZXZpY29ue1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEtbGlua3N7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWNvbnRhaW5lcntcXHJcXG4gICAgLS1zcGFjaW5nLTE6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIGgye1xcclxcbiAgICAtLXNwYWNpbmctMjogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xMnJlbTtcXHJcXG59XFxyXFxuLmxlZnQtY29udGFpbmVyIC5jb250YWN0LXN1YnRpdGxle1xcclxcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuLmZvb3Rlci1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLypDb21wb25lbnRzICovXFxyXFxuLm1lbnUtYnRue1xcclxcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgIFxcclxcbiAgICAgICAgZmlsbDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgICAgICB0b3A6IDEzcHg7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtYnRuIC5saW5le1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogXFxyXFxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluIDMwMG1zLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZSAzMDBtcyBlYXNlLWluICxcXHJcXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG46aG92ZXIgLmxpbmV7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBcXHJcXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4sXFxyXFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gMzAwbXMsXFxyXFxuICAgICAgICAgICAgb3BhY2l0eSAwbXMgMzAwbXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtYnRuW2FyaWEtaGlkZGVuID1cXFwiZmFsc2VcXFwiXSAudG9wXFxyXFxuICAgIHtcXHJcXG4gICAgICAgIHk6IDQ4O1xcclxcbiAgICAgICAgcm90YXRlOiA0NWRlZztcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVxcXCJmYWxzZVxcXCJdIC5taWRkbGVcXHJcXG4gICAge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVxcXCJmYWxzZVxcXCJdIC5ib3R0b21cXHJcXG4gICAge1xcclxcbiAgICAgICAgeTogNDg7XFxyXFxuICAgICAgICByb3RhdGU6IC00NWRlZztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1idG46aG92ZXIgOmlzKC50b3AsIC5ib3R0b20pe1xcclxcbiAgICAgICAgeTogNDg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtYnRuOmhvdmVyIC50b3B7XFxyXFxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWJ0bjpob3ZlciAuYm90dG9te1xcclxcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5taWRkbGV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuIFxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XFxyXFxuICAgICAgICAubWVudS1idG57XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uaGlkZGVue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5e1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxufVxcclxcblxcclxcbi5ibGlua3tcXHJcXG4gICAgYW5pbWF0aW9uOiBjdXN0b21CbGluayAycyBpbmZpbml0ZSBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGN1c3RvbUJsaW5re1xcclxcbiAgICAwJSxcXHJcXG4gICAgNTAlLFxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUsXFxyXFxuICAgIDc1JXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXJzIHtcclxuXHJcbiAgICBzdGF0aWMgbG9hZGVIYW5kbGVycyA9ICgpID0+e1xyXG4gICAgICAgIHRoaXMubWVudUJ0bkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb25IYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VjdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNsaWRlckhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2xpZGVySGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bC5icmFuZHNcIiksXHJcbiAgICAgICAgdG90YWxfYnJhbmQgPSBicmFuZHMuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG90YWwtYnJhbmQnLCB0b3RhbF9icmFuZCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b3RhbF9icmFuZDsgaSsrKXtcclxuICAgICAgICAgICAgYnJhbmRzLmFwcGVuZENoaWxkKGJyYW5kcy5jaGlsZHJlbltpXS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWVudUJ0bkhhbmRsZXIgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgICAgIGlmKG5hdmlnYXRpb25QYWdlLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgaGFuZGxlcik7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmF2aWdhdGlvbkhhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoKFwicmVzaXplXCIpLCAoKSA9PntcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgaWYod2lkdGggPiA4ODApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY3JvbGxUb1NlY3Rpb24gPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uU2VjdGlvbkhhbmRsZXIgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgbmF2QnRuID0gKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XHJcbiAgICAgICAgbmF2LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgbmF2QnRuKSlcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVye1xyXG4gICAgc3RhdGljIGxvYWRGb290ZXIgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChmTmFtZSwgbE5hbWUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgwqkgQ29weXJpZ2h0IDIwMjQsICR7Zk5hbWV9ICR7bE5hbWV9YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGFuIE9wZW4gU291cmNlIFByb2plY3RcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCJHYXJ5XCIsIFwiTGVpXCIpKTtcclxuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGluaygpKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJ7XHJcbiAgICBzdGF0aWMgbG9hZEhlYWRlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PntcclxuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChmTmFtZSwgbE5hbWUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NOYW1lID0gXCJ0aXRsZS1sb2dvXCI7XHJcbiAgICAgICAgICAgIGJveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxzcGFuPiR7Zk5hbWV9ICR7bE5hbWV9PC9zcGFuPjwvYT5gO1xyXG4gICAgICAgICAgICByZXR1cm4gYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBcInByaW1hcnktbmF2aWdhdGlvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwidmFyKC0tYnV0dG9uLWNvbG9yKVwiIGNsYXNzID1cImhhbWJ1cmdlclwiIHZpZXdCb3ggPVwiMCAwIDEwMCAxMDBcIiB3aWR0aCA9XCI0MlwiIGhlaWdodCA9IFwiNDJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcyA9XCJsaW5lIHRvcFwiIHdpZHRoID1cIjgwXCIgaGVpZ2h0PVwiNlwiIHg9XCIxMFwiIHk9XCIzMFwiIHJ4PVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcyA9XCJsaW5lIG1pZGRsZVwiIHdpZHRoID1cIjgwXCIgaGVpZ2h0PVwiNlwiIHg9XCIxMFwiIHk9XCI1MFwiIHJ4PVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcyA9XCJsaW5lIGJvdHRvbVwiIHdpZHRoID1cIjgwXCIgaGVpZ2h0PVwiNlwiIHg9XCIxMFwiIHk9XCI3MFwiIHJ4PVwiNVwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPmBcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJwcmltYXJ5LW5hdmlnYXRpb25cIjtcclxuICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA4ODApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bk9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdW5PcmRlcmVkTGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICAgICBjb25zdCB0YWJzID0gW3twYWdlOiBcImFib3V0XCIsIGxpbms6IFwiYWJvdXRcIn0sIHtwYWdlOiBcIndvcmtcIiwgbGluazogXCJ3b3JrXCJ9LCB7cGFnZTogXCJjb250YWN0XCIsIGxpbms6IFwiY29udGFjdFwifV1cclxuICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goKGl0ZW0pID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgPSBgPGEgY2xhc3M9XCJuYXYtbGlua3NcIj4ke2l0ZW0ucGFnZX08L2E+YDtcclxuICAgICAgICAgICAgICAgICAgICB1bk9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5PcmRlcmVkTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdHMoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZShcIkdhcnlcIiwgXCJMZWlcIikpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKCkpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKCkpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImNvbnN0IHBsb3RTb2NpYWxNZWRpYUljb25zID0gKGNsYXNzTmFtZSkgPT57XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICBgc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcmA7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmdpdGh1Yi5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rc1wiPjxpIGNsYXNzPVwiZGV2aWNvbiBkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbFwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJzb2NpYWwtbWVkaWEtaWNvbnNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy50d2l0dGVyLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tdHdpdHRlci1vcmlnaW5hbFwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJzb2NpYWwtbWVkaWEtaWNvbnNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5saW5rZWRpbi5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rc1wiPjxpIGNsYXNzPVwiZGV2aWNvbiBkZXZpY29uLWxpbmtlZGluLXBsYWluXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgYDtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbG90U29jaWFsTWVkaWFJY29uczsiLCJpbXBvcnQgcGxvdFNvY2lhbE1lZGlhSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc29jaWFsTWVkaWFJY29uc1wiO1xyXG5pbXBvcnQgcHJvZmlsZVBpY3R1cmUgZnJvbSBcIi4uL2ltYWdlcy9wcm9maWxlUGljdHVyZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0e1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250YWluZXJcIixcImFib3V0LWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uY2xhc3NOYW1lID1cImltYWdlRGVzY3JpcHRpb24tY29udGFpbmVyXCI7XHJcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmxvYWRJbWFnZSgpKTtcclxuICAgICAgICBpbWFnZURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXMucGVyc29uYWxEZXNjcmlwdGlvbigpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGVyc29uYWxEZXNjcmlwdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBtZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBcIkFzIGFuIEVTTCBFbmdsaXNoIHRlYWNoZXIsIEknbSBjb21taXR0ZWQgdG8gZm9zdGVyaW5nIGxhbmd1YWdlIHByb2ZpY2llbmN5IGFuZCBjdWx0dXJhbCB1bmRlcnN0YW5kaW5nLiBPdXRzaWRlIHRoZSBjbGFzc3Jvb20sIEknbSBhbiBhdmlkIHJ1bm5lciwgZmluZGluZyBzb2xhY2UgaW4gZWFjaCBzdHJpZGUsIGFuZCBhIHBhc3Npb25hdGUgcmVhbCBlc3RhdGUgZW50aHVzaWFzdCwgZXhwbG9yaW5nIHRoZSBpbnRyaWNhY2llcyBvZiBwcm9wZXJ0eSBpbnZlc3RtZW50LiBCYWxhbmNpbmcgcHJvZmVzc2lvbmFsIGdyb3d0aCB3aXRoIHBlcnNvbmFsIHB1cnN1aXRzIGRyaXZlcyBteSBqb3VybmV5LlwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdFNvY2lhbE1lZGlhSWNvbnMoXCJhYm91dFwiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRJbWFnZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gcHJvZmlsZVBpY3R1cmU7XHJcbiAgICAgICAgaW1hZ2UuYWx0ID0gXCJBIHBvcnRyYWl0IGZvciBtZVwiO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9IFwicHJvZmlsZS1waWN0dXJlXCI7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG59IiwiY29uc3QgdHlwZVdyaXRlciA9ICh0aXRsZSwgZWxlbWVudCkgPT57XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGl0bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihpICE9IHRpdGxlLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aXRsZS5zbGljZSgwLCBpKSArIHRpdGxlLmNoYXJBdChpKSArIGA8c3BhbiBjbGFzcz1cImJsaW5rXCI+fDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICB9LCBpICogMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICAgICAgICAgIH0sIGkgKiAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIDE1MCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFubmVye1xyXG4gICAgc3RhdGljIGxvYWQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSlcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN1YlRleHQoKSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYmFubmVySGFuZGxlckJ0bigpKTtcclxuICAgICAgICB9LCA3MDAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IFwiSGksIG15IG5hbWUgaXMgR2FyeVwiO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICB0aXRsZVRleHQuY2xhc3NOYW1lID0gXCJiYW5uZXItdGl0bGVcIjtcclxuXHJcbiAgICAgICAgIHR5cGVXcml0ZXIodGl0bGUsIHRpdGxlVGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aXRsZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1YlRleHQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IFwiQSB3ZWIgZGV2ZWxvcGVyIGFuZCBhbiBFU0wgdGVhY2hlclwiXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVXcml0ZXJcIiwgXCJzdWJ0aXRsZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0eXBlV3JpdGVyKHN1YnRpdGxlLCB0ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJhbm5lckhhbmRsZXJCdG4gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLWJ0bi1uYXYtYWJvdXRcIilcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+YXJyb3ctZG93bi10aGljazwvdGl0bGU+PHBhdGggZD1cIk0xMCw0SDE0VjEzTDE3LjUsOS41TDE5LjkyLDExLjkyTDEyLDE5Ljg0TDQuMDgsMTEuOTJMNi41LDkuNUwxMCwxM1Y0WlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIGBcclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIHNjcm9sbFRvU2VjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG5cclxufSIsIlxyXG4vLyBpbXBvcnQgcGhvbmUgZnJvbSBcIi4uL2ltYWdlcy9waG9uZS5zdmdcIjtcclxuaW1wb3J0IHBsb3RTb2NpYWxNZWRpYUljb25zIGZyb20gXCIuLi9jb21wb25lbnRzL3NvY2lhbE1lZGlhSWNvbnNcIjtcclxuaW1wb3J0IGNvbnRhY3RJbWcgZnJvbSBcIi4uL2ltYWdlcy9jb250YWN0LmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdHtcclxuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IHthZGRyZXNzOiBcIjEyMzQgU21pdGggU3RyZWV0IE1pYW1pLCBGbG9yaWRhIDMzMTU2XCIsIHBob25lOiBcIjU1NS01NTUtNTU1NVwiLCBlbWFpbDogXCJnMTIzNDU2QG1haWwuY29tXCJ9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxlZnQuY2xhc3NMaXN0LmFkZChcImxlZnQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcclxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHRoaXMuY29udGVudChjb250YWN0KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKHRoaXMucGxvdEltYWdlKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgTWVcIjtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsb3RJbWFnZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1hZ2VcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gY29udGFjdEltZztcclxuXHJcbiAgICAgICAgY3JlYXRlRGl2LmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURpdjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29udGVudCA9IChjb250YWN0KSA9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc3VidGl0bGVcIik7XHJcbiAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHRoaW5rIG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5IGJlbmVmaWNpYWwuXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcGxvdENvbnRhY3RJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiAgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm1hcC1tYXJrZXItb3V0bGluZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsNi41QTIuNSwyLjUgMCAwLDEgMTQuNSw5QTIuNSwyLjUgMCAwLDEgMTIsMTEuNUEyLjUsMi41IDAgMCwxIDkuNSw5QTIuNSwyLjUgMCAwLDEgMTIsNi41TTEyLDJBNyw3IDAgMCwxIDE5LDlDMTksMTQuMjUgMTIsMjIgMTIsMjJDMTIsMjIgNSwxNC4yNSA1LDlBNyw3IDAgMCwxIDEyLDJNMTIsNEE1LDUgMCAwLDAgNyw5QzcsMTAgNywxMiAxMiwxOC43MUMxNywxMiAxNywxMCAxNyw5QTUsNSAwIDAsMCAxMiw0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtjb250YWN0LmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnBob25lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNSwyMkMyMC4zMywyMiAyMSwyMS4zMyAyMSwyMC41VjE3QzIxLDE2LjE3IDIwLjMzLDE1LjUgMTkuNSwxNS41QzE4LjMzLDE1LjUgMTcuMTgsMTUuMzIgMTYuMDgsMTQuOTVDMTUuNTUsMTQuNzggMTQuOTcsMTQuOTIgMTQuNTYsMTUuMzJMMTMuMTIsMTYuNzZDMTAuNjQsMTUuNDEgOC41NywxMy4zNCA3LjIzLDEwLjg3TDguNjYsOS40NEM5LjA3LDkuMDUgOS4yMiw4LjQ3IDkuMDQsNy45MUM4LjY4LDYuODIgOC41LDUuNjcgOC41LDQuNUM4LjUsMy42NyA3LjgzLDMgNywzSDMuNUMyLjY3LDMgMiwzLjY3IDIsNC41QzIsMTQuMTUgOS44NSwyMiAxOS41LDIyTTMuNSw0SDdDNy4yOCw0IDcuNSw0LjIyIDcuNSw0LjVDNy41LDUuNzggNy43LDcuMDMgOC4wOSw4LjIyQzguMTQsOC4zNiA4LjEzLDguNTYgNy45Nyw4LjcyTDYsMTAuNjhDNy42NSwxMy45MSAxMC4wNywxNi4zMyAxMy4zMSwxOEwxNS4yNiwxNi4wM0MxNS40LDE1Ljg5IDE1LjU5LDE1Ljg1IDE1Ljc3LDE1LjlDMTYuOTcsMTYuMyAxOC4yMiwxNi41IDE5LjUsMTYuNUMxOS43OCwxNi41IDIwLDE2LjcyIDIwLDE3VjIwLjVDMjAsMjAuNzggMTkuNzgsMjEgMTkuNSwyMUMxMC40LDIxIDMsMTMuNiAzLDQuNUMzLDQuMjIgMy4yMiw0IDMuNSw0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2NvbnRhY3QucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5lbWFpbC1vdXRsaW5lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMiA2QzIyIDQuOSAyMS4xIDQgMjAgNEg0QzIuOSA0IDIgNC45IDIgNlYxOEMyIDE5LjEgMi45IDIwIDQgMjBIMjBDMjEuMSAyMCAyMiAxOS4xIDIyIDE4VjZNMjAgNkwxMiAxMUw0IDZIMjBNMjAgMThINFY4TDEyIDEzTDIwIDhWMThaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtjb250YWN0LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90Q29udGFjdEluZm8oKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsb3RTb2NpYWxNZWRpYUljb25zKFwiY29udGFjdFwiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzJztcclxuaW1wb3J0IGJhbm5lciBmcm9tIFwiLi9iYW5uZXIuanNcIjtcclxuaW1wb3J0IHdvcmsgZnJvbSBcIi4vd29yay5qc1wiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIjtcclxuaW1wb3J0IHNraWxscyBmcm9tIFwiLi9za2lsbHMuanNcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgZXZlbnRIYW5kbGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9ldmVudEhhbmRsZXJzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSB7XHJcbiAgICBzdGF0aWMgbG9hZFBhZ2UgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyLmxvYWRIZWFkZXIoKSk7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxvYWRDb250ZW50KCkpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyLmxvYWRGb290ZXIoKSk7XHJcblxyXG4gICAgICAgIGV2ZW50SGFuZGxlcnMubG9hZGVIYW5kbGVycygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZENvbnRlbnQgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXIubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0LmxvYWQoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChza2lsbHMubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmsubG9hZCgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QubG9hZCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcblxyXG4gICAgfVxyXG59IiwiY29uc3QgaWNvbnMgPSBbYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjRTQ0RDI2XCIgZD1cIk0xOS4wMzcgMTEzLjg3Nkw5LjAzMiAxLjY2MWgxMDkuOTM2bC0xMC4wMTYgMTEyLjE5OC00NS4wMTkgMTIuNDh6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRjE2NTI5XCIgZD1cIk02NCAxMTYuOGwzNi4zNzgtMTAuMDg2IDguNTU5LTk1Ljg3OEg2NHpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNFQkVCRUJcIiBkPVwiTTY0IDUyLjQ1NUg0NS43ODhMNDQuNTMgMzguMzYxSDY0VjI0LjU5OUgyOS40ODlsLjMzIDMuNjkyIDMuMzgyIDM3LjkyN0g2NHptMCAzNS43NDNsLS4wNjEuMDE3LTE1LjMyNy00LjE0LS45NzktMTAuOTc1SDMzLjgxNmwxLjkyOCAyMS42MDkgMjguMTkzIDcuODI2LjA2My0uMDE3elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjMuOTUyIDUyLjQ1NXYxMy43NjNoMTYuOTQ3bC0xLjU5NyAxNy44NDktMTUuMzUgNC4xNDN2MTQuMzE5bDI4LjIxNS03LjgyLjIwNy0yLjMyNSAzLjIzNC0zNi4yMzMuMzM1LTMuNjk2aC0zLjcwOHptMC0yNy44NTZ2MTMuNzYyaDMzLjI0NGwuMjc2LTMuMDkyLjYyOC02Ljk3OC4zMjktMy42OTJ6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbD1cIiMxMzEzMTNcIiBkPVwiTTg5LjIzNCA1Ljg1Nkg4MS44NWw3LjY3OSA4LjMzM3YzLjk2N0g3My43MTN2LTQuNjQ1aDcuNjc4bC03LjY3OC04LjMzM1YxLjIwN2gxNS41MjF2NC42NDl6bS0xOC42NTcgMGgtNy4zODRsNy42NzkgOC4zMzN2My45NjdINTUuMDU1di00LjY0NWg3LjY3OWwtNy42NzktOC4zMzNWMS4yMDdoMTUuNTIydjQuNjQ5em0tMTguNDc0LjE5aC03Ljk2OHY3LjI3MWg3Ljk2OHY0LjgzOUgzOC40NzFWMS4yMDdoMTMuNjMydjQuODM5elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzE1NzJCNlwiIGQ9XCJNMjcuNjEzIDExNi43MDZsLTguMDk3LTkwLjgxM2g4OC45NjdsLTguMTA0IDkwLjc5OC0zNi40MzQgMTAuMTAyLTM2LjMzMi0xMC4wODd6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjMzNBOURDXCIgZD1cIk02NC4wMDEgMTE5LjA3MmwyOS40MzktOC4xNjIgNi45MjYtNzcuNTkxSDY0LjAwMXY4NS43NTN6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02NCA2Ni4yMmgxNC43MzhsMS4wMTktMTEuNDA1SDY0VjQzLjY3N2gyNy45MjlsLS4yNjcgMi45ODgtMi43MzcgMzAuNjkySDY0VjY2LjIyelwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI0VCRUJFQlwiIGQ9XCJNNjQuMDY3IDk1LjE0NmwtLjA0OS4wMTQtMTIuNDA0LTMuMzUtLjc5NC04Ljg4M0gzOS42NDFsMS41NjEgMTcuNDg4IDIyLjgxNCA2LjMzMy4wNTItLjAxNVY5NS4xNDZ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk03Ny43OTIgNzYuODg2TDc2LjQ1IDkxLjgwMmwtMTIuNDIyIDMuMzUzdjExLjU4OGwyMi44MzMtNi4zMjguMTY4LTEuODgyIDEuOTM4LTIxLjY0N0g3Ny43OTJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRUJFQkVCXCIgZD1cIk02NC4wMzkgNDMuNjc3djExLjEzN0gzNy4xMzZsLS4yMjQtMi41MDMtLjUwNy01LjY0Ni0uMjY3LTIuOTg4aDI3LjkwMXpNNjQgNjYuMjIxdjExLjEzOEg1MS43NTNsLS4yMjMtMi41MDMtLjUwOC01LjY0Ny0uMjY3LTIuOTg4SDY0elwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjRjBEQjRGXCIgZD1cIk0xLjQwOCAxLjQwOGgxMjUuMTg0djEyNS4xODVIMS40MDh6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjMzIzMzMwXCIgZD1cIk0xMTYuMzQ3IDk2LjczNmMtLjkxNy01LjcxMS00LjY0MS0xMC41MDgtMTUuNjcyLTE0Ljk4MS0zLjgzMi0xLjc2MS04LjEwNC0zLjAyMi05LjM3Ny01LjkyNi0uNDUyLTEuNjktLjUxMi0yLjY0Mi0uMjI2LTMuNjY1LjgyMS0zLjMyIDQuNzg0LTQuMzU1IDcuOTI1LTMuNDAzIDIuMDIzLjY3OCAzLjkzOCAyLjIzNyA1LjA5MyA0LjcyNCA1LjQwMi0zLjQ5OCA1LjM5MS0zLjQ3NSA5LjE2My01Ljg3OS0xLjM4MS0yLjE0MS0yLjExOC0zLjEyOS0zLjAyMi00LjA0NS0zLjI0OS0zLjYyOS03LjY3Ni01LjQ5OC0xNC43NTYtNS4zNTVsLTMuNjg4LjQ3N2MtMy41MzQuODkzLTYuOTAyIDIuNzQ4LTguODc3IDUuMjM1LTUuOTI2IDYuNzI0LTQuMjM2IDE4LjQ5MiAyLjk3NSAyMy4zMzUgNy4xMDQgNS4zMzIgMTcuNTQgNi41NDUgMTguODczIDExLjUzMSAxLjI5NyA2LjEwNC00LjQ4NiA4LjA4LTEwLjIzNCA3LjM3OC00LjIzNi0uODgxLTYuNTkyLTMuMDM0LTkuMTM5LTYuOTQ5LTQuNjg4IDIuNzEzLTQuNjg4IDIuNzEzLTkuNTA4IDUuNDg1IDEuMTQzIDIuNDk5IDIuMzQ0IDMuNjMgNC4yNiA1Ljc5NSA5LjA2OCA5LjE5OCAzMS43NiA4Ljc0NiAzNS44My01LjE3Ni4xNjUtLjQ3OCAxLjI2MS0zLjY2Ni4zOC04LjU4MXpNNjkuNDYyIDU4Ljk0M0g1Ny43NTNsLS4wNDggMzAuMjcyYzAgNi40MzguMzMzIDEyLjM0LS43MTQgMTQuMTQ5LTEuNzEzIDMuNTU4LTYuMTUyIDMuMTE3LTguMTc1IDIuNDI3LTIuMDU5LTEuMDEyLTMuMTA2LTIuNDUxLTQuMzE5LTQuNDg1LS4zMzMtLjU4NC0uNTgzLTEuMDM2LS42NjctMS4wNzFsLTkuNTIgNS44M2MxLjU4MyAzLjI0OSAzLjkxNSA2LjA2OSA2LjkwMiA3LjkwMSA0LjQ2MiAyLjY3OCAxMC40NTkgMy40OTkgMTYuNzMxIDIuMDU5IDQuMDgyLTEuMTg5IDcuNjA0LTMuNjUyIDkuNDQ4LTcuNDAxIDIuNjY2LTQuOTE1IDIuMDk0LTEwLjg2NCAyLjA3LTE3LjQ0NC4wNi0xMC43MzUuMDAxLTIxLjQ2OC4wMDEtMzIuMjM3elwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxnIGZpbGw9XCIjNjFEQUZCXCI+PGNpcmNsZSBjeD1cIjY0XCIgY3k9XCI2NFwiIHI9XCIxMS40XCI+PC9jaXJjbGU+PHBhdGggZD1cIk0xMDcuMyA0NS4yYy0yLjItLjgtNC41LTEuNi02LjktMi4zLjYtMi40IDEuMS00LjggMS41LTcuMSAyLjEtMTMuMi0uMi0yMi41LTYuNi0yNi4xLTEuOS0xLjEtNC0xLjYtNi40LTEuNi03IDAtMTUuOSA1LjItMjQuOSAxMy45LTktOC43LTE3LjktMTMuOS0yNC45LTEzLjktMi40IDAtNC41LjUtNi40IDEuNi02LjQgMy43LTguNyAxMy02LjYgMjYuMS40IDIuMy45IDQuNyAxLjUgNy4xLTIuNC43LTQuNyAxLjQtNi45IDIuM0M4LjIgNTAgMS40IDU2LjYgMS40IDY0czYuOSAxNCAxOS4zIDE4LjhjMi4yLjggNC41IDEuNiA2LjkgMi4zLS42IDIuNC0xLjEgNC44LTEuNSA3LjEtMi4xIDEzLjIuMiAyMi41IDYuNiAyNi4xIDEuOSAxLjEgNCAxLjYgNi40IDEuNiA3LjEgMCAxNi01LjIgMjQuOS0xMy45IDkgOC43IDE3LjkgMTMuOSAyNC45IDEzLjkgMi40IDAgNC41LS41IDYuNC0xLjYgNi40LTMuNyA4LjctMTMgNi42LTI2LjEtLjQtMi4zLS45LTQuNy0xLjUtNy4xIDIuNC0uNyA0LjctMS40IDYuOS0yLjMgMTIuNS00LjggMTkuMy0xMS40IDE5LjMtMTguOHMtNi44LTE0LTE5LjMtMTguOHpNOTIuNSAxNC43YzQuMSAyLjQgNS41IDkuOCAzLjggMjAuMy0uMyAyLjEtLjggNC4zLTEuNCA2LjYtNS4yLTEuMi0xMC43LTItMTYuNS0yLjUtMy40LTQuOC02LjktOS4xLTEwLjQtMTMgNy40LTcuMyAxNC45LTEyLjMgMjEtMTIuMyAxLjMgMCAyLjUuMyAzLjUuOXpNODEuMyA3NGMtMS44IDMuMi0zLjkgNi40LTYuMSA5LjYtMy43LjMtNy40LjQtMTEuMi40LTMuOSAwLTcuNi0uMS0xMS4yLS40LTIuMi0zLjItNC4yLTYuNC02LTkuNi0xLjktMy4zLTMuNy02LjctNS4zLTEwIDEuNi0zLjMgMy40LTYuNyA1LjMtMTAgMS44LTMuMiAzLjktNi40IDYuMS05LjYgMy43LS4zIDcuNC0uNCAxMS4yLS40IDMuOSAwIDcuNi4xIDExLjIuNCAyLjIgMy4yIDQuMiA2LjQgNiA5LjYgMS45IDMuMyAzLjcgNi43IDUuMyAxMC0xLjcgMy4zLTMuNCA2LjYtNS4zIDEwem04LjMtMy4zYzEuNSAzLjUgMi43IDYuOSAzLjggMTAuMy0zLjQuOC03IDEuNC0xMC44IDEuOSAxLjItMS45IDIuNS0zLjkgMy42LTYgMS4yLTIuMSAyLjMtNC4yIDMuNC02LjJ6TTY0IDk3LjhjLTIuNC0yLjYtNC43LTUuNC02LjktOC4zIDIuMy4xIDQuNi4yIDYuOS4yIDIuMyAwIDQuNi0uMSA2LjktLjItMi4yIDIuOS00LjUgNS43LTYuOSA4LjN6bS0xOC42LTE1Yy0zLjgtLjUtNy40LTEuMS0xMC44LTEuOSAxLjEtMy4zIDIuMy02LjggMy44LTEwLjMgMS4xIDIgMi4yIDQuMSAzLjQgNi4xIDEuMiAyLjIgMi40IDQuMSAzLjYgNi4xem0tNy0yNS41Yy0xLjUtMy41LTIuNy02LjktMy44LTEwLjMgMy40LS44IDctMS40IDEwLjgtMS45LTEuMiAxLjktMi41IDMuOS0zLjYgNi0xLjIgMi4xLTIuMyA0LjItMy40IDYuMnpNNjQgMzAuMmMyLjQgMi42IDQuNyA1LjQgNi45IDguMy0yLjMtLjEtNC42LS4yLTYuOS0uMi0yLjMgMC00LjYuMS02LjkuMiAyLjItMi45IDQuNS01LjcgNi45LTguM3ptMjIuMiAyMWwtMy42LTZjMy44LjUgNy40IDEuMSAxMC44IDEuOS0xLjEgMy4zLTIuMyA2LjgtMy44IDEwLjMtMS4xLTIuMS0yLjItNC4yLTMuNC02LjJ6TTMxLjcgMzVjLTEuNy0xMC41LS4zLTE3LjkgMy44LTIwLjMgMS0uNiAyLjItLjkgMy41LS45IDYgMCAxMy41IDQuOSAyMSAxMi4zLTMuNSAzLjgtNyA4LjItMTAuNCAxMy01LjguNS0xMS4zIDEuNC0xNi41IDIuNS0uNi0yLjMtMS00LjUtMS40LTYuNnpNNyA2NGMwLTQuNyA1LjctOS43IDE1LjctMTMuNCAyLS44IDQuMi0xLjUgNi40LTIuMSAxLjYgNSAzLjYgMTAuMyA2IDE1LjYtMi40IDUuMy00LjUgMTAuNS02IDE1LjVDMTUuMyA3NS42IDcgNjkuNiA3IDY0em0yOC41IDQ5LjNjLTQuMS0yLjQtNS41LTkuOC0zLjgtMjAuMy4zLTIuMS44LTQuMyAxLjQtNi42IDUuMiAxLjIgMTAuNyAyIDE2LjUgMi41IDMuNCA0LjggNi45IDkuMSAxMC40IDEzLTcuNCA3LjMtMTQuOSAxMi4zLTIxIDEyLjMtMS4zIDAtMi41LS4zLTMuNS0uOXpNOTYuMyA5M2MxLjcgMTAuNS4zIDE3LjktMy44IDIwLjMtMSAuNi0yLjIuOS0zLjUuOS02IDAtMTMuNS00LjktMjEtMTIuMyAzLjUtMy44IDctOC4yIDEwLjQtMTMgNS44LS41IDExLjMtMS40IDE2LjUtMi41LjYgMi4zIDEgNC41IDEuNCA2LjZ6bTktMTUuNmMtMiAuOC00LjIgMS41LTYuNCAyLjEtMS42LTUtMy42LTEwLjMtNi0xNS42IDIuNC01LjMgNC41LTEwLjUgNi0xNS41IDEzLjggNCAyMi4xIDEwIDIyLjEgMTUuNiAwIDQuNy01LjggOS43LTE1LjcgMTMuNHpcIj48L3BhdGg+PC9nPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwiYVwiIHgxPVwiNzYuMDc5XCIgeDI9XCI1MjMuNDhcIiB5MT1cIjEwLjc5OFwiIHkyPVwiMzY1Ljk1XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS4xMSAxNC42MTMpIHNjYWxlKC4yNDU2NilcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM5MDEzZmVcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjNjYxMGYyXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPVwiYlwiIHgxPVwiMTkzLjUxXCIgeDI9XCIyOTMuNTFcIiB5MT1cIjEwOS43NFwiIHkyPVwiMjc4Ljg3XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA1MilcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNmZmZcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjZjFlNWZjXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD1cImNcIiB3aWR0aD1cIjE5N1wiIGhlaWdodD1cIjI0OVwiIHg9XCIxNjEuOVwiIHk9XCIxMzUuNDZcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCI+PC9mZUZsb29kPjxmZUNvbG9yTWF0cml4IGluPVwiU291cmNlQWxwaGFcIiB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiPjwvZmVDb2xvck1hdHJpeD48ZmVPZmZzZXQgZHk9XCI0XCI+PC9mZU9mZnNldD48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiOFwiPjwvZmVHYXVzc2lhbkJsdXI+PGZlQ29sb3JNYXRyaXggdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwXCI+PC9mZUNvbG9yTWF0cml4PjxmZUJsZW5kIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cImVmZmVjdDFfZHJvcFNoYWRvd1wiPjwvZmVCbGVuZD48ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJlZmZlY3QxX2Ryb3BTaGFkb3dcIiByZXN1bHQ9XCJzaGFwZVwiPjwvZmVCbGVuZD48L2ZpbHRlcj48L2RlZnM+PHBhdGggZmlsbD1cInVybCgjYSlcIiBkPVwiTTE0Ljk4NSAyNy43MTJjLS4yMzctNi44MTUgNS4wNzItMTMuMDk5IDEyLjI0OS0xMy4wOTloNzMuNTRjNy4xNzcgMCAxMi40ODYgNi4yODQgMTIuMjQ5IDEzLjA5OS0uMjI4IDYuNTQ2LjA2OCAxNS4wMjYgMi4yMDIgMjEuOTQgMi4xNDEgNi45MzYgNS43NTEgMTEuMzE5IDExLjY2NCAxMS44ODN2Ni4zODdjLTUuOTEzLjU2NC05LjUyMyA0Ljk0Ny0xMS42NjQgMTEuODgzLTIuMTM0IDYuOTE0LTIuNDMgMTUuMzk0LTIuMjAyIDIxLjk0LjIzNyA2LjgxNS01LjA3MiAxMy4wOTgtMTIuMjQ5IDEzLjA5OGgtNzMuNTRjLTcuMTc3IDAtMTIuNDg2LTYuMjg0LTEyLjI0OS0xMy4wOTguMjI4LTYuNTQ2LS4wNjgtMTUuMDI2LTIuMjAzLTIxLjk0LTIuMTQtNi45MzUtNS43Ni0xMS4zMTktMTEuNjczLTExLjg4M3YtNi4zODdjNS45MTMtLjU2MyA5LjUzMy00Ljk0NyAxMS42NzMtMTEuODgzIDIuMTM1LTYuOTE0IDIuNDMtMTUuMzk0IDIuMjAzLTIxLjk0elwiPjwvcGF0aD48cGF0aCBmaWxsPVwidXJsKCNiKVwiIGQ9XCJNMjY3LjEgMzY0LjQ2YzQ3LjI5NyAwIDc1Ljc5OC0yMy4xNTggNzUuNzk4LTYxLjM1NSAwLTI4Ljg3My0yMC4zMzYtNDkuNzc2LTUwLjUzMi01My4wODV2LTEuMjAzYzIyLjE4NS0zLjYwOSAzOS41OTQtMjQuMjExIDM5LjU5NC00Ny4yMTkgMC0zMi43ODMtMjUuODgyLTU0LjEzOC02NS4zMjItNTQuMTM4aC04OC43NHYyMTd6bS01NC42OTItMTg5LjQ4aDQ1LjkxMWMyNC45NTggMCAzOS4xMzEgMTEuMTI4IDM5LjEzMSAzMS4yNzkgMCAyMS41MDUtMTYuNDg0IDMzLjUzNS00Ni4zNzIgMzMuNTM1aC0zOC42N3ptMCAxNjEuOTZ2LTcxLjQzMWg0NS42MDJjMzIuNjYxIDAgNDkuNjA4IDEyLjAzIDQ5LjYwOCAzNS40OSAwIDIzLjQ1OS0xNi40ODQgMzUuOTQxLTQ3LjYwNSAzNS45NDF6XCIgZmlsdGVyPVwidXJsKCNjKVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjQ5NCAyLjIwMykgc2NhbGUoLjI0NTY2KVwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjMGFjZjgzXCIgZD1cIk00NS41IDEyOWMxMS45IDAgMjEuNS05LjYgMjEuNS0yMS41Vjg2SDQ1LjVDMzMuNiA4NiAyNCA5NS42IDI0IDEwNy41UzMzLjYgMTI5IDQ1LjUgMTI5em0wIDBcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNhMjU5ZmZcIiBkPVwiTTI0IDY0LjVDMjQgNTIuNiAzMy42IDQzIDQ1LjUgNDNINjd2NDNINDUuNUMzMy42IDg2IDI0IDc2LjQgMjQgNjQuNXptMCAwXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZjI0ZTFlXCIgZD1cIk0yNCAyMS41QzI0IDkuNiAzMy42IDAgNDUuNSAwSDY3djQzSDQ1LjVDMzMuNiA0MyAyNCAzMy40IDI0IDIxLjV6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmNzI2MlwiIGQ9XCJNNjcgMGgyMS41QzEwMC40IDAgMTEwIDkuNiAxMTAgMjEuNVMxMDAuNCA0MyA4OC41IDQzSDY3em0wIDBcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMxYWJjZmVcIiBkPVwiTTExMCA2NC41YzAgMTEuOS05LjYgMjEuNS0yMS41IDIxLjVTNjcgNzYuNCA2NyA2NC41IDc2LjYgNDMgODguNSA0MyAxMTAgNTIuNiAxMTAgNjQuNXptMCAwXCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5gPHN2ZyBjbGFzcz1cInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPGcgZmlsbD1cIiMxODE2MTZcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNjQgMS41MTJjLTIzLjQ5MyAwLTQyLjU0NSAxOS4wNDctNDIuNTQ1IDQyLjU0NSAwIDE4Ljc5NyAxMi4xOSAzNC43NDUgMjkuMDk1IDQwLjM3IDIuMTI2LjM5NCAyLjkwNy0uOTIzIDIuOTA3LTIuMDQ3IDAtMS4wMTQtLjA0LTQuMzY2LS4wNTgtNy45Mi0xMS44MzcgMi41NzMtMTQuMzM0LTUuMDItMTQuMzM0LTUuMDItMS45MzUtNC45MTgtNC43MjQtNi4yMjYtNC43MjQtNi4yMjYtMy44Ni0yLjY0LjI5LTIuNTg2LjI5LTIuNTg2IDQuMjczLjMgNi41MjMgNC4zODUgNi41MjMgNC4zODUgMy43OTQgNi41MDQgOS45NTMgNC42MjMgMTIuMzggMy41MzYuMzgzLTIuNzUgMS40ODUtNC42MjggMi43MDItNS42OS05LjQ1LTEuMDc1LTE5LjM4NC00LjcyNC0xOS4zODQtMjEuMDI2IDAtNC42NDUgMS42NjItOC40NCA0LjM4NC0xMS40Mi0uNDQyLTEuMDcyLTEuODk4LTUuNC40MTItMTEuMjYgMCAwIDMuNTcyLTEuMTQyIDExLjcgNC4zNjMgMy4zOTUtLjk0MyA3LjAzNS0xLjQxNiAxMC42NS0xLjQzMiAzLjYxNi4wMTcgNy4yNTguNDkgMTAuNjU4IDEuNDMyIDguMTItNS41MDQgMTEuNjg4LTQuMzYyIDExLjY4OC00LjM2MiAyLjMxNiA1Ljg2Ljg2IDEwLjE4Ny40MTggMTEuMjYgMi43MjggMi45NzggNC4zNzggNi43NzQgNC4zNzggMTEuNDIgMCAxNi4zNC05Ljk1MyAxOS45MzgtMTkuNDI3IDIwLjk5IDEuNTI2IDEuMzIgMi44ODYgMy45MSAyLjg4NiA3Ljg4IDAgNS42OTItLjA0OCAxMC4yNzMtLjA0OCAxMS42NzQgMCAxLjEzLjc2NiAyLjQ1OCAyLjkyMiAyLjA0IDE2Ljg5Ni01LjYzMiAyOS4wNy0yMS41NzQgMjkuMDctNDAuMzY1QzEwNi41NDUgMjAuNTYgODcuNDk3IDEuNTEyIDY0IDEuNTEyelwiPjwvcGF0aD48cGF0aCBkPVwiTTM3LjU3IDYyLjU5NmMtLjA5NS4yMTItLjQyOC4yNzUtLjczLjEzLS4zMS0uMTQtLjQ4Mi0uNDI3LS4zODItLjY0LjA5LS4yMTYuNDI0LS4yNzcuNzMzLS4xMzIuMzEuMTQuNDg2LjQzLjM4LjY0MnpNMzkuMjkzIDY0LjUyYy0uMjAzLjE4Ny0uNi4xLS44Ny0uMTk4LS4yNzgtLjI5Ny0uMzMtLjY5NC0uMTI0LS44ODQuMjA4LS4xODguNTkzLS4xLjg3LjE5Ny4yOC4zLjMzNS42OTMuMTIzLjg4NHptMS42NzcgMi40NDhjLS4yNi4xODItLjY4Ny4wMTItLjk1LS4zNjctLjI2Mi0uMzc3LS4yNjItLjgzLjAwNS0xLjAxMy4yNjQtLjE4Mi42ODQtLjAxOC45NS4zNTcuMjYyLjM4NS4yNjIuODQtLjAwNSAxLjAyNHptMi4yOTggMi4zNjhjLS4yMzMuMjU3LS43My4xODgtMS4wOTMtLjE2My0uMzcyLS4zNDMtLjQ3NS0uODMtLjI0Mi0xLjA4Ny4yMzctLjI1Ny43MzYtLjE4NSAxLjEwMi4xNjMuMzcuMzQyLjQ4Mi44My4yMzMgMS4wODZ6bTMuMTcyIDEuMzc0Yy0uMTA0LjMzNC0uNTgyLjQ4NS0xLjA2NC4zNDQtLjQ4Mi0uMTQ2LS43OTYtLjUzNi0uNy0uODcyLjEtLjMzNi41ODItLjQ5MyAxLjA2Ny0uMzQyLjQ4LjE0NC43OTUuNTMuNjk2Ljg3em0zLjQ4LjI1NWMuMDEzLjM1LS4zOTYuNjQyLS45MDIuNjQ4LS41MDguMDEyLS45Mi0uMjcyLS45MjYtLjYxOCAwLS4zNTQuNC0uNjQyLjkwOC0uNjUuNTA2LS4wMS45Mi4yNzIuOTIuNjJ6bTMuMjQtLjU1MWMuMDYuMzQyLS4yOS42OTQtLjc5My43ODctLjQ5NC4wOTItLjk1LS4xMi0xLjAxNC0uNDYtLjA2LS4zNS4yOTctLjcuNzktLjc5Mi41MDMtLjA4OC45NTMuMTE4IDEuMDE3LjQ2NnptMCAwXCI+PC9wYXRoPjwvZz48cGF0aCBkPVwiTTI0Ljg1NSAxMDguMzAyaC0xMC43YS41LjUgMCAwMC0uNS41djUuMjMyYS41LjUgMCAwMC41LjVoNC4xNzN2Ni41cy0uOTM3LjMyLTMuNTMuMzJjLTMuMDU2IDAtNy4zMjctMS4xMTYtNy4zMjctMTAuNTA4IDAtOS4zOTMgNC40NDgtMTAuNjMgOC42MjQtMTAuNjMgMy42MTQgMCA1LjE3LjYzNiA2LjE2Mi45NDMuMzEuMDk0LjYtLjIxNi42LS40OTJsMS4xOTMtNS4wNTVhLjQ2OC40NjggMCAwMC0uMTkyLS4zOWMtLjQwMy0uMjg4LTIuODU3LTEuNjYtOS4wNTgtMS42Ni03LjE0NCAwLTE0LjQ3MiAzLjAzOC0xNC40NzIgMTcuNjUgMCAxNC42MSA4LjM5IDE2Ljc4NyAxNS40NiAxNi43ODcgNS44NTQgMCA5LjQwNS0yLjUwMiA5LjQwNS0yLjUwMi4xNDYtLjA4LjE2Mi0uMjg1LjE2Mi0uMzh2LTE2LjMxNmEuNS41IDAgMDAtLjUtLjV6TTc5LjUwNiA5NC44MUg3My40OGEuNS41IDAgMDAtLjQ5OC41MDNsLjAwMiAxMS42NDRoLTkuMzkyVjk1LjMxM2EuNS41IDAgMDAtLjQ5Ny0uNTAzSDU3LjA3YS41LjUgMCAwMC0uNDk4LjUwM3YzMS41M2MwIC4yNzcuMjI0LjUwMy40OTguNTAzaDYuMDI1YS41LjUgMCAwMC40OTctLjUwNHYtMTMuNDg2aDkuMzkybC0uMDE2IDEzLjQ4NmMwIC4yNzguMjI0LjUwNC41LjUwNGg2LjAzOGEuNS41IDAgMDAuNDk3LS41MDR2LTMxLjUzYS40OTcuNDk3IDAgMDAtLjQ5Ny0uNTAyem0tNDcuMTY2LjcxN2MtMi4xNDQgMC0zLjg4NCAxLjc1My0zLjg4NCAzLjkyMyAwIDIuMTY3IDEuNzQgMy45MjUgMy44ODQgMy45MjUgMi4xNDYgMCAzLjg4NS0xLjc1OCAzLjg4NS0zLjkyNSAwLTIuMTctMS43NC0zLjkyMy0zLjg4NS0zLjkyM3ptMi45NTYgOS42MDhIMjkuMjljLS4yNzYgMC0uNTIyLjI4NC0uNTIyLjU2djIwLjg1MmMwIC42MTMuMzgyLjc5NS44NzYuNzk1aDUuNDFjLjU5NSAwIC43NC0uMjkyLjc0LS44MDV2LTIwLjg5OWEuNS41IDAgMDAtLjQ5OC0uNTAyem02Ny42MDYuMDQ3aC01Ljk4YS41LjUgMCAwMC0uNDk2LjUwNHYxNS40NnMtMS41MiAxLjExLTMuNjc1IDEuMTEtMi43MjctLjk3Ny0yLjcyNy0zLjA4OHYtMTMuNDgyYS41LjUgMCAwMC0uNDk3LS41MDRoLTYuMDY4YS41MDIuNTAyIDAgMDAtLjQ5OC41MDR2MTQuNTAyYzAgNi4yNyAzLjQ5NSA3LjgwNCA4LjMwMiA3LjgwNCAzLjk0NCAwIDcuMTI0LTIuMTggNy4xMjQtMi4xOHMuMTUgMS4xNS4yMiAxLjI4NWMuMDcuMTM2LjI0Ny4yNzMuNDQuMjczbDMuODYtLjAxN2EuNTAyLjUwMiAwIDAwLjUtLjUwNGwtLjAwMy0yMS4xNjZhLjUwNC41MDQgMCAwMC0uNS0uNTAyem0xNi4zNDItLjcwOGMtMy4zOTYgMC01LjcwNiAxLjUxNS01LjcwNiAxLjUxNVY5NS4zMTJhLjUuNSAwIDAwLS40OTctLjUwM0gxMDdhLjUuNSAwIDAwLS41LjUwM3YzMS41M2EuNS41IDAgMDAuNS41MDNoNC4xOTJjLjE5IDAgLjMzMi0uMDk3LjQzNy0uMjY4LjEwMy0uMTcuMjU0LTEuNDU0LjI1NC0xLjQ1NHMyLjQ3IDIuMzQgNy4xNDggMi4zNGM1LjQ5IDAgOC42NC0yLjc4NCA4LjY0LTEyLjUwMnMtNS4wMy0xMC45ODgtOC40MjgtMTAuOTg4em0tMi4zNiAxNy43NjRjLTIuMDczLS4wNjMtMy40OC0xLjAwNC0zLjQ4LTEuMDA0di05Ljk4NXMxLjM4OC0uODUgMy4wOS0xLjAwNGMyLjE1My0uMTkzIDQuMjI4LjQ1OCA0LjIyOCA1LjU5NCAwIDUuNDE3LS45MzUgNi40ODYtMy44MzcgNi4zOTh6bS02My42ODktLjExOGMtLjI2MyAwLS45MzcuMTA3LTEuNjMuMTA3LTIuMjIgMC0yLjk3My0xLjAzMi0yLjk3My0yLjM2OHYtOC44NjZoNC41MmEuNS41IDAgMDAuNS0uNTA0di00Ljg1NmEuNS41IDAgMDAtLjUtLjUwMmgtNC41MmwtLjAwNy01Ljk3YzAtLjIyNy0uMTE2LS4zNC0uMzc4LS4zNGgtNi4xNmMtLjIzOCAwLS4zNjcuMTA2LS4zNjcuMzM1djYuMTdzLTMuMDg3Ljc0NS0zLjI5NS44MDVhLjUuNSAwIDAwLS4zNi40OHYzLjg3N2EuNS41IDAgMDAuNDk3LjUwM2gzLjE1OHY5LjMyOGMwIDYuOTMgNC44NiA3LjYxIDguMTQgNy42MSAxLjQ5NyAwIDMuMjktLjQ4IDMuNTg2LS41OS4xOC0uMDY3LjI4My0uMjUyLjI4My0uNDUzbC4wMDQtNC4yNjVhLjUxLjUxIDAgMDAtLjUtLjUwMnpcIiBmaWxsPVwiIzEwMEUwRlwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCJ1cmwoI2EpXCIgZD1cIk0wIDY0YzAgMTguNTkzIDI4LjY1NCAzMy42NjcgNjQgMzMuNjY3IDM1LjM0NiAwIDY0LTE1LjA3NCA2NC0zMy42NjcgMC0xOC41OTMtMjguNjU1LTMzLjY2Ny02NC0zMy42NjdDMjguNjU0IDMwLjMzMyAwIDQ1LjQwNyAwIDY0WlwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzc3N2JiM1wiIGQ9XCJNNjQgOTUuMTY3YzMzLjk2NSAwIDYxLjUtMTMuOTU1IDYxLjUtMzEuMTY3IDAtMTcuMjE0LTI3LjUzNS0zMS4xNjctNjEuNS0zMS4xNjdTMi41IDQ2Ljc4NiAyLjUgNjRjMCAxNy4yMTIgMjcuNTM1IDMxLjE2NyA2MS41IDMxLjE2N1pcIj48L3BhdGg+PHBhdGggZD1cIk0zNC43NzIgNjcuODY0YzIuNzkzIDAgNC44NzctLjUxNSA2LjE5Ni0xLjUzIDEuMzA2LTEuMDA2IDIuMjA3LTIuNzQ3IDIuNjgtNS4xNzUuNDQtMi4yNy4yNzItMy44NTQtLjUtNC43MS0uNzg4LS44NzQtMi40OTMtMS4zMTctNS4wNjctMS4zMTdoLTQuNDY0bC0yLjQ3MyAxMi43MzJ6TTIwLjE3MyA4My41NDdhLjY5NC42OTQgMCAwIDEtLjY4LS44MjhsNi41NTctMzMuNzM4YS42OTUuNjk1IDAgMCAxIC42OC0uNTYxaDE0LjEzNGM0LjQ0MiAwIDcuNzQ4IDEuMjA2IDkuODI3IDMuNTg1IDIuMDg4IDIuMzkgMi43MzQgNS43MzQgMS45MTcgOS45MzUtLjMzMyAxLjcxMS0uOTA1IDMuMy0xLjcgNC43MjRhMTUuODE4IDE1LjgxOCAwIDAgMS0zLjEyOCAzLjkyYy0xLjUzMSAxLjQzMi0zLjI2NCAyLjQ3Mi01LjE0NyAzLjA4My0xLjg1Mi42MDQtNC4yMzIuOTEtNy4wNy45MWgtNS43MjRsLTEuNjM0IDguNDA4YS42OTUuNjk1IDAgMCAxLS42ODIuNTYyelwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzQuMTkgNTUuODI2aDMuODkxYzMuMTA3IDAgNC4xODYuNjgyIDQuNTUzIDEuMDg5LjYwNy42NzQuNzIzIDIuMDk3LjMzMSA0LjExMi0uNDM5IDIuMjU3LTEuMjUzIDMuODU4LTIuNDIgNC43NTYtMS4xOTQuOTItMy4xMzggMS4zODYtNS43NzMgMS4zODZoLTIuNzg2bDIuMjA1LTExLjM0MnptNi42NzQtOC4xSDI2LjczMWExLjM5IDEuMzkgMCAwIDAtMS4zNjQgMS4xMjNMMTguODEgODIuNTg4YTEuMzkgMS4zOSAwIDAgMCAxLjM2MyAxLjY1M2g3LjM1YTEuMzkgMS4zOSAwIDAgMCAxLjM2My0xLjEyNGwxLjUyNS03Ljg0Nmg1LjE1MWMyLjkxMiAwIDUuMzY0LS4zMTggNy4yODctLjk0NCAxLjk3Ny0uNjQyIDMuNzk2LTEuNzMxIDUuNDA2LTMuMjM3YTE2LjUyMiAxNi41MjIgMCAwIDAgMy4yNTktNC4wODdjLjgzMS0xLjQ4NyAxLjQyOS0zLjE0NyAxLjc3NS00LjkzMS44Ni00LjQyMy4xNjEtNy45NjQtMi4wNzYtMTAuNTI0LTIuMjE2LTIuNTM3LTUuNjk4LTMuODIzLTEwLjM0OS0zLjgyM3pNMzAuMzAxIDY4LjU1N2g0LjQ3MWMyLjk2MyAwIDUuMTctLjU1NyA2LjYyLTEuNjc1IDEuNDUxLTEuMTE2IDIuNDI4LTIuOTggMi45MzgtNS41OTEuNDg1LTIuNTA4LjI2NC00LjI3Ny0uNjY1LTUuMzA4LS45MzEtMS4wMy0yLjc5MS0xLjU0Ni01LjU4NC0xLjU0NmgtNS4wMzZsLTIuNzQzIDE0LjEybTEwLjU2My0xOS40NDVjNC4yNTIgMCA3LjM1MyAxLjExNyA5LjMwMyAzLjM0OCAxLjk1IDIuMjMyIDIuNTM2IDUuMzQ3IDEuNzYgOS4zNDYtLjMyMiAxLjY0OC0uODYzIDMuMTU0LTEuNjI1IDQuNTE4LS43NjQgMS4zNjYtMS43NiAyLjYxNC0yLjk5MSAzLjc0Ny0xLjQ2OCAxLjM3My0zLjA5NyAyLjM1Mi00Ljg5MiAyLjkzNS0xLjc5NC41ODQtNC4wOC44NzUtNi44NTcuODc1aC02LjI5NmwtMS43NDMgOC45N2gtNy4zNWw2LjU1OC0zMy43MzloMTQuMTMzXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjkuNDU5IDc0LjU3N2EuNjk0LjY5NCAwIDAgMS0uNjgyLS44MjdsMi45LTE0LjkyOGMuMjc3LTEuNDIuMjA5LTIuNDM4LS4xOS0yLjg3LS4yNDUtLjI2My0uOTc5LS43MDQtMy4xNS0uNzA0aC01LjI1NmwtMy42NDYgMTguNzY4YS42OTUuNjk1IDAgMCAxLS42ODMuNTZoLTcuMjlhLjY5NS42OTUgMCAwIDEtLjY4My0uODI2bDYuNTU4LTMzLjczOWEuNjk1LjY5NSAwIDAgMSAuNjgyLS41NjFoNy4yOWEuNjk1LjY5NSAwIDAgMSAuNjgzLjgyNkw2NC40MSA0OC40Mmg1LjY1M2M0LjMwNyAwIDcuMjI3Ljc1OCA4LjkyOCAyLjMyMSAxLjczMyAxLjU5MyAyLjI3NSA0LjE0IDEuNjA4IDcuNTczbC0zLjA1MSAxNS43MDJhLjY5NS42OTUgMCAwIDEtLjY4Mi41NmgtNy40MDd6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02NS4zMSAzOC43NTVoLTcuMjkxYTEuMzkgMS4zOSAwIDAgMC0xLjM2NCAxLjEyNGwtNi41NTcgMzMuNzM4YTEuMzkgMS4zOSAwIDAgMCAxLjM2MyAxLjY1NGg3LjI5MWExLjM5IDEuMzkgMCAwIDAgMS4zNjQtMS4xMjRsMy41MzctMTguMjA1aDQuNjgyYzIuMTY4IDAgMi42MjQuNDYzIDIuNjQxLjQ4NC4xMzIuMTQuMzA1Ljc5NS4wMTkgMi4yNjRsLTIuOSAxNC45MjdhMS4zOSAxLjM5IDAgMCAwIDEuMzY0IDEuNjU0aDcuNDA4YTEuMzkgMS4zOSAwIDAgMCAxLjM2My0xLjEyNGwzLjA1MS0xNS43Yy43MTUtMy42ODYuMTAzLTYuNDUtMS44Mi04LjIxNy0xLjgzNi0xLjY4Ni00LjkxLTIuNTA1LTkuMzk4LTIuNTA1aC00LjgxbDEuNDIxLTcuMzE1YTEuMzkgMS4zOSAwIDAgMC0xLjM2NC0xLjY1NXptMCAxLjM5LTEuNzQzIDguOTY4aDYuNDk2YzQuMDg3IDAgNi45MDcuNzE0IDguNDU3IDIuMTQgMS41NTMgMS40MjYgMi4wMTcgMy43MzUgMS4zOTggNi45M2wtMy4wNTIgMTUuNjk5aC03LjQwN2wyLjkwMS0xNC45MjhjLjMzLTEuNjk4LjIwOC0yLjg1Ni0uMzY1LTMuNDc0LS41NzMtLjYxNy0xLjc5My0uOTI2LTMuNjU4LS45MjZoLTUuODI5bC0zLjc1NiAxOS4zMjdINTEuNDZsNi41NTgtMzMuNzM5aDcuMjkyelwiPjwvcGF0aD48cGF0aCBkPVwiTTkyLjEzNiA2Ny44NjRjMi43OTMgMCA0Ljg3OC0uNTE1IDYuMTk4LTEuNTMgMS4zMDQtMS4wMDYgMi4yMDYtMi43NDcgMi42NzktNS4xNzUuNDQtMi4yNy4yNzMtMy44NTQtLjUtNC43MS0uNzg4LS44NzQtMi40OTMtMS4zMTctNS4wNjctMS4zMTdoLTQuNDYzbC0yLjQ3NSAxMi43MzJ6TTc3LjU0IDgzLjU0N2EuNjk0LjY5NCAwIDAgMS0uNjgyLS44MjhsNi41NTctMzMuNzM4YS42OTUuNjk1IDAgMCAxIC42ODItLjU2MUg5OC4yM2M0LjQ0MiAwIDcuNzQ4IDEuMjA2IDkuODI2IDMuNTg1IDIuMDg5IDIuMzkgMi43MzQgNS43MzQgMS45MTcgOS45MzVhMTUuODc4IDE1Ljg3OCAwIDAgMS0xLjY5OSA0LjcyNCAxNS44MzggMTUuODM4IDAgMCAxLTMuMTI4IDMuOTJjLTEuNTMgMS40MzItMy4yNjUgMi40NzItNS4xNDcgMy4wODMtMS44NTIuNjA0LTQuMjMyLjkxLTcuMDcxLjkxaC01LjcyM2wtMS42MzMgOC40MDhhLjY5NS42OTUgMCAwIDEtLjY4My41NjJ6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk05MS41NTUgNTUuODI2aDMuODkxYzMuMTA3IDAgNC4xODYuNjgyIDQuNTUyIDEuMDg5LjYxLjY3NC43MjQgMi4wOTcuMzMzIDQuMTEyLS40NCAyLjI1Ny0xLjI1NCAzLjg1OC0yLjQyMSA0Ljc1Ni0xLjE5NS45Mi0zLjEzOSAxLjM4Ni01Ljc3MyAxLjM4NmgtMi43ODZsMi4yMDQtMTEuMzQyem02LjY3NC04LjFIODQuMDk2YTEuMzkgMS4zOSAwIDAgMC0xLjM2MyAxLjEyM2wtNi41NTggMzMuNzM5YTEuMzkgMS4zOSAwIDAgMCAxLjM2NCAxLjY1M2g3LjM1YTEuMzkgMS4zOSAwIDAgMCAxLjM2My0xLjEyNGwxLjUyNS03Ljg0Nmg1LjE1YzIuOTExIDAgNS4zNjQtLjMxOCA3LjI4Ni0uOTQ0IDEuOTc4LS42NDIgMy43OTctMS43MzEgNS40MDgtMy4yMzhhMTYuNTIgMTYuNTIgMCAwIDAgMy4yNTgtNC4wODZjLjgzMi0xLjQ4NyAxLjQyOC0zLjE0NyAxLjc3NS00LjkzMS44Ni00LjQyMy4xNjItNy45NjQtMi4wNzYtMTAuNTI0LTIuMjE2LTIuNTM3LTUuNjk3LTMuODIzLTEwLjM1LTMuODIzek04Ny42NjYgNjguNTU3aDQuNDdjMi45NjQgMCA1LjE3LS41NTcgNi42MjItMS42NzUgMS40NS0xLjExNiAyLjQyOC0yLjk4IDIuOTM2LTUuNTkxLjQ4Ny0yLjUwOC4yNjYtNC4yNzctLjY2NS01LjMwOC0uOTMtMS4wMy0yLjc5MS0xLjU0Ni01LjU4My0xLjU0NmgtNS4wMzVabTEwLjU2My0xOS40NDVjNC4yNTEgMCA3LjM1NCAxLjExNyA5LjMwMyAzLjM0OCAxLjk1IDIuMjMyIDIuNTM3IDUuMzQ3IDEuNzU5IDkuMzQ2LS4zMiAxLjY0OC0uODYyIDMuMTU0LTEuNjI0IDQuNTE4LS43NjMgMS4zNjYtMS43NiAyLjYxNC0yLjk5MiAzLjc0Ny0xLjQ2NyAxLjM3My0zLjA5NyAyLjM1Mi00Ljg5MiAyLjkzNS0xLjc5My41ODQtNC4wNzguODc1LTYuODU2Ljg3NWgtNi4yOTVsLTEuNzQ1IDguOTdoLTcuMzVsNi41NTgtMzMuNzM5aDE0LjEzM1wiPjwvcGF0aD48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9XCJhXCIgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjFcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCg4NC4wNDEzNiAwIDAgODQuMDQxMzYgMzguNDI2IDQyLjE2OSlcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBzdG9wLWNvbG9yPVwiI0FFQjJENVwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIuM1wiIHN0b3AtY29sb3I9XCIjQUVCMkQ1XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIi43NVwiIHN0b3AtY29sb3I9XCIjNDg0Qzg5XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzQ4NEM4OVwiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjZjM3MDM2XCIgZD1cIk0xMTMuMTE3IDI2LjA2NkM5Mi4xNjgtMS4wNjIgNTMuMTkxLTYuMDcgMjYuMDYyIDE0Ljg4M2MtMjcuMTI1IDIwLjk1My0zMi4xMjggNTkuOTMtMTEuMTc1IDg3LjA1NSAyMC45NTcgMjcuMTI0IDU5LjkzNyAzMi4xMjQgODcuMDU4IDExLjE2NyAyNy4xMTQtMjAuOTUzIDMyLjExOC01OS45MTggMTEuMTcyLTg3LjAzOVptMCAwXCI+PC9wYXRoPlxyXG48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNOTEuMDc4IDI0LjE2NGExMC4wMzggMTAuMDM4IDAgMCAwLTUuNzgxIDIuNDI2IDEwLjAyOCAxMC4wMjggMCAwIDAtMS41NCAxMy40NjUgMTAuMDI4IDEwLjAyOCAwIDAgMCAxMy4yNzYgMi43MTVoLjAwMnYuMDAxbC4xNTYuMTU1YTEwLjYzIDEwLjYzIDAgMCAwIDEuOTY1LTEuNDVBMTAuMzQxIDEwLjM0MSAwIDAgMCA5OSAyNy4xMDd2LS4wMDJsLTguODQ0IDguNzg5LS4xNTYtLjE1NSA4Ljg0NC04Ljc5M2ExMC4wMzggMTAuMDM4IDAgMCAwLTcuNzY2LTIuNzh6TTc5LjQzNCAzOC41NTFjLTQuMjQtLjAwNy0xMS4xNjMgNC43OTktMjguMDY3IDIxLjcwM2wuMDg0LjA4NmMtLjA5Mi0uMDMyLS4xODUtLjAzNS0uMTg1LS4wMzVsLTYuMzY0IDYuMzA4YTEuMDM1IDEuMDM1IDAgMCAwIC45MyAxLjc2MmwxMC45MTQtMi4zMjhhLjMwNy4zMDcgMCAwIDAgLjA5Mi0uMTdsLjI0Mi4yNS0zLjcyIDMuNjloLS4xOGwtMjIuMDg2IDIyLjI2IDcuMDg2IDYuODI0YTEuMjU0IDEuMjU0IDAgMCAwIDEuNDc2LjE0OSAxLjMyNyAxLjMyNyAwIDAgMCAuNjQ1LTEuMzU2bC0xLjAzNS00LjVhLjUzNC41MzQgMCAwIDEgMC0uNjIgMTE3LjI4NSAxMTcuMjg1IDAgMCAwIDI2LjczOC0xNy41ODNsLTQuNTM1LTQuNTM3LjA4Ni0uMDE0LTIuNjktMi42ODkuMTcyLS4xNzQuMTgyLjE4Ni0uMDk0LjA5MSA3LjEzNyA3LjI5M3YtLjAwM2MxMy42OC0xMi45NTQgMjMuMzktMjMuMzY3IDIwLjg2NS0zMC4zNzVhMy44MyAzLjgzIDAgMCAwLTEuMTA3LTIuMjA4di4wMDRhMy43NzggMy43NzggMCAwIDAtLjQ4My0uMzA2Yy0uMDgzLS4wODgtLjE1Ni0uMTc4LS4yNDQtLjI2NGwtLjA2Ni4wNjZhMy43NzggMy43NzggMCAwIDAtLjU4Mi0uMjlsLjI4OS0uMjkyYy0xLjc5Ni0xLjYtMy4yOC0yLjkyNC01LjUtMi45M3pNMzAuOTQgOTIuMjFsLTUuMTcxIDUuMTcydi4wMDRhMS4wMyAxLjAzIDAgMCAwLS40NTcgMS4xMjUgMS4wMzUgMS4wMzUgMCAwIDAgLjkyMS43ODlsMTIuNjcyLjg3NS03Ljk2NS03Ljk2NXpcIj48L3BhdGg+XHJcbjxwYXRoIGZpbGw9XCIjZjM3MDM2XCIgZD1cIk05MS45NSAyMy4zMWExMS4wNDcgMTEuMDQ3IDAgMCAwLTcuNzU5IDMuMTcgMTAuOTg4IDEwLjk4OCAwIDAgMC0yLjM5IDExLjY0MWMtNC43NDEtMi4wMy0xMS4xNTUgMS41MS0zMS4xMDYgMjEuNDU3YS45MzIuOTMyIDAgMCAwLS4wMzcuMDk0IDEuMjQyIDEuMjQyIDAgMCAwLS4xMTkuMDYybC02LjMwOSA2LjM2NGExLjk3IDEuOTcgMCAwIDAtLjM2MyAyLjMyNCAyLjAxMiAyLjAxMiAwIDAgMCAxLjcwNy45ODRsLjMxMy0uMjAzIDguNDI0LTEuNzk3LTQuMDMgNC4wNjdhLjg3My44NzMgMCAwIDAtLjA1NC4xNjZsLTE5Ljc1IDE5Ljc5OWEuNzk4Ljc5OCAwIDAgMC0uMTkyLjIzOGwtNS4wODYgNS4wOWExLjk2NyAxLjk2NyAwIDAgMC0uNDE0IDIuMDQzIDEuOTk1IDEuOTk1IDAgMCAwIDEuNjU2IDEuMjY1bDEyLjYxOC44OGExLjAxIDEuMDEgMCAwIDAgLjUyLS40MTUuODg2Ljg4NiAwIDAgMCAwLTEuMDM1bC0uMDI2LS4wMjVhMi4yNDMgMi4yNDMgMCAwIDAgLjcwNS0uNTggMi4yMzcgMi4yMzcgMCAwIDAgLjQwNi0xLjg3NmwtLjk4NC00LjE4N2ExMjYuNzI1IDEyNi43MjUgMCAwIDAgMjYuMzM0LTE2Ljg2MSAxLjA5MSAxLjA5MSAwIDAgMCAuMjQ4LjEwM2MuMjU0LS4wMTkuNDkyLS4xMjguNjcyLS4zMDggMTMuNTUtMTIuODMgMjEuNTE1LTIxLjYyMiAyMS41MTUtMjguNjAyYTguMDMgOC4wMyAwIDAgMC0uNDMxLTIuODUgMTAuOTU3IDEwLjk1NyAwIDAgMCAzLjg0NS44M2wtLjAxNS4wMDRhMTEuMjE5IDExLjIxOSAwIDAgMCA1LjE4My0xLjQ1Ljc3NS43NzUgMCAwIDAgLjAwNC4wMDEuODM1LjgzNSAwIDAgMCAuNjE3LS4wNTUgOS4zOTggOS4zOTggMCAwIDAgMi4wNy0xLjY1MiAxMC44NzMgMTAuODczIDAgMCAwIDMuMjU4LTcuNzU4IDEwLjg3MyAxMC44NzMgMCAwIDAtMy4yNTctNy43NTguOTMuOTMgMCAwIDAtLjExOC0uMDkxIDExLjA0NSAxMS4wNDUgMCAwIDAtNy42NTYtMy4wNzh6bS0uMDg3IDEuNzcyYTkuMjcgOS4yNyAwIDAgMSA1LjU4NiAxLjkxNGwtOC4wNjggOC4xMTdhLjg0Ljg0IDAgMCAwLS4wNzYuMDk4LjgzLjgzIDAgMCAwLS4yMzkuNTUuODMyLjgzMiAwIDAgMCAuMzEzLjY1aC4wMDJsNi4xIDYuMWE5LjA0NCA5LjA0NCAwIDAgMS0xMC4wMjgtMS45MTNjLTIuNTg2LTIuNi0zLjMzNi02LjUwNC0xLjk1My05Ljg5MSAxLjM4My0zLjM5IDQuNjgtNS42MDUgOC4zNjMtNS42MjV6bTcuMTIgMy40MzJhOC44NyA4Ljg3IDAgMCAxIDIuMDMzIDUuNjc0IDkuMTUgOS4xNSAwIDAgMS0yLjY4OCA2LjQ2NCA5Ljk4OSA5Ljk4OSAwIDAgMS0xLjA5OC44OTVMOTIuMzA3IDM2LjdsLS45NjMtLjk2My4yNjUtLjI2NSA3LjM3My02Ljk2em0tLjM2NiA0LjE5M2EuNzc3Ljc3NyAwIDAgMC0uNTUuMDMxLjczMS43MzEgMCAwIDAtLjM2LjQyNi43My43MyAwIDAgMCAuMDUuNTU5IDIuMjI2IDIuMjI2IDAgMCAxLS4yNTcgMi4zMjguNjQuNjQgMCAwIDAtLjE5NS40ODhjLjAwNC4xODQuMDcuMzYuMTk1LjQ5MmEuNTguNTggMCAwIDAgLjQxNCAwIC42OC42OCAwIDAgMCAuNjcyLS4yMDcgMy41NzMgMy41NzMgMCAwIDAgLjQ2NS0zLjc3N3YuMDA0YS43NzcuNzc3IDAgMCAwLS40MzQtLjM0NHpNNzkuMzQgMzkuNDNhNS41ODQgNS41ODQgMCAwIDEgMy4zMSAxLjIyNiA0Ljc1NiA0Ljc1NiAwIDAgMC0yLjY4MSAxLjM0TDU3LjE2MiA2NC43MDFsLTQuNDc2LTQuNDc2YzExLjgyOC0xMS43NzIgMTkuMDYtMTcuOTIxIDIzLjU1Ni0xOS45MzZhNS41ODQgNS41ODQgMCAwIDEgMy4wOTgtLjg2em0zLjk2NSAyLjk2YTIuODk1IDIuODk1IDAgMCAxIDIuMDQzLjg0NCAyLjc4NiAyLjc4NiAwIDAgMSAuODc5IDIuMTIxIDIuODY5IDIuODY5IDAgMCAxLS45ODUgMi4wN2wtMjQuMjUgMjEuMTA2LTIuNjE3LTIuNjE3IDIyLjg4Ny0yMi42OGEyLjg5NSAyLjg5NSAwIDAgMSAyLjA0My0uODQzem0yLjk5NCA2LjY5OGMtMS42OSA2LjcwMi0xMC42NDcgMTUuNzgzLTE5Ljk4NyAyNC42MDdsLTMuNzc3LTMuNzczTDg2LjMgNDkuMDg4ek01MS4zNjcgNjEuNTQ3bC4yNzQuMjcgMy41MTMgMy41MTMtOS42MyAyLjA2IDUuODQzLTUuODQzem01Ljc5MyA1Ljg0LjAwNC4wMDQgMS4xNjggMS4xOTVhMS4wODYgMS4wODYgMCAwIDAgLjAxOC4wODRsLjA3OC4wMTIuMjQ4LjI1NC44Mi44NC01LjM4NS42NiAzLjA1LTMuMDV6bTMuODY3IDQuMDc2IDMuNTc4IDMuNTc2QTEyNi45OTIgMTI2Ljk5MiAwIDAgMSAzOC43NSA5MS42OTVhMS40NCAxLjQ0IDAgMCAwLS43NzcgMS42NTNsMS4wMzUgNC41YS4zMS4zMSAwIDAgMSAwIC4zNjMuMzEuMzEgMCAwIDEtLjQxNCAwbC02LjEwMi02LjE1Mkw1MS4zIDcyLjk3NWw5LjcyOC0xLjUxMnptLTI5LjkzMyAyMS45NC44NjkuODE0IDQuNDkyIDQuNDkyLTEwLjAxNi0uNjQ4IDQuNjU1LTQuNjU5elwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxsaW5lYXJHcmFkaWVudCBpZD1cInB5dGhvbi1vcmlnaW5hbC1hXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeDE9XCI3MC4yNTJcIiB5MT1cIjEyMzcuNDc2XCIgeDI9XCIxNzAuNjU5XCIgeTI9XCIxMTUxLjA4OVwiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC41NjMgMCAwIC0uNTY4IC0yOS4yMTUgNzA3LjgxNylcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM1QTlGRDRcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMzA2OTk4XCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPVwicHl0aG9uLW9yaWdpbmFsLWJcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4MT1cIjIwOS40NzRcIiB5MT1cIjEwOTguODExXCIgeDI9XCIxNzMuNjJcIiB5Mj1cIjExNDkuNTM3XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjU2MyAwIDAgLS41NjggLTI5LjIxNSA3MDcuODE3KVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI0ZGRDQzQlwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNGRkU4NzNcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPVwidXJsKCNweXRob24tb3JpZ2luYWwtYSlcIiBkPVwiTTYzLjM5MSAxLjk4OGMtNC4yMjIuMDItOC4yNTIuMzc5LTExLjggMS4wMDctMTAuNDUgMS44NDYtMTIuMzQ2IDUuNzEtMTIuMzQ2IDEyLjgzN3Y5LjQxMWgyNC42OTN2My4xMzdIMjkuOTc3Yy03LjE3NiAwLTEzLjQ2IDQuMzEzLTE1LjQyNiAxMi41MjEtMi4yNjggOS40MDUtMi4zNjggMTUuMjc1IDAgMjUuMDk2IDEuNzU1IDcuMzExIDUuOTQ3IDEyLjUxOSAxMy4xMjQgMTIuNTE5aDguNDkxVjY3LjIzNGMwLTguMTUxIDcuMDUxLTE1LjM0IDE1LjQyNi0xNS4zNGgyNC42NjVjNi44NjYgMCAxMi4zNDYtNS42NTQgMTIuMzQ2LTEyLjU0OFYxNS44MzNjMC02LjY5My01LjY0Ni0xMS43Mi0xMi4zNDYtMTIuODM3LTQuMjQ0LS43MDYtOC42NDUtMS4wMjctMTIuODY2LTEuMDA4ek01MC4wMzcgOS41NTdjMi41NSAwIDQuNjM0IDIuMTE3IDQuNjM0IDQuNzIxIDAgMi41OTMtMi4wODMgNC42OS00LjYzNCA0LjY5LTIuNTYgMC00LjYzMy0yLjA5Ny00LjYzMy00LjY5LS4wMDEtMi42MDQgMi4wNzMtNC43MjEgNC42MzMtNC43MjF6XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMTAuMjYpXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJ1cmwoI3B5dGhvbi1vcmlnaW5hbC1iKVwiIGQ9XCJNOTEuNjgyIDI4LjM4djEwLjk2NmMwIDguNS03LjIwOCAxNS42NTUtMTUuNDI2IDE1LjY1NUg1MS41OTFjLTYuNzU2IDAtMTIuMzQ2IDUuNzgzLTEyLjM0NiAxMi41NDl2MjMuNTE1YzAgNi42OTEgNS44MTggMTAuNjI4IDEyLjM0NiAxMi41NDcgNy44MTYgMi4yOTcgMTUuMzEyIDIuNzEzIDI0LjY2NSAwIDYuMjE2LTEuODAxIDEyLjM0Ni01LjQyMyAxMi4zNDYtMTIuNTQ3di05LjQxMkg2My45Mzh2LTMuMTM4aDM3LjAxMmM3LjE3NiAwIDkuODUyLTUuMDA1IDEyLjM0OC0xMi41MTkgMi41NzgtNy43MzUgMi40NjctMTUuMTc0IDAtMjUuMDk2LTEuNzc0LTcuMTQ1LTUuMTYxLTEyLjUyMS0xMi4zNDgtMTIuNTIxaC05LjI2OHpNNzcuODA5IDg3LjkyN2MyLjU2MSAwIDQuNjM0IDIuMDk3IDQuNjM0IDQuNjkyIDAgMi42MDItMi4wNzQgNC43MTktNC42MzQgNC43MTktMi41NSAwLTQuNjMzLTIuMTE3LTQuNjMzLTQuNzE5IDAtMi41OTUgMi4wODMtNC42OTIgNC42MzMtNC42OTJ6XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMTAuMjYpXCI+PC9wYXRoPjxyYWRpYWxHcmFkaWVudCBpZD1cInB5dGhvbi1vcmlnaW5hbC1jXCIgY3g9XCIxODI1LjY3OFwiIGN5PVwiNDQ0LjQ1XCIgcj1cIjI2Ljc0M1wiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KDAgLS4yNCAtMS4wNTUgMCA1MzIuOTc5IDU1Ny41NzYpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjQjhCOEI4XCIgc3RvcC1vcGFjaXR5PVwiLjQ5OFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3RjdGN0ZcIiBzdG9wLW9wYWNpdHk9XCIwXCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggb3BhY2l0eT1cIi40NDRcIiBmaWxsPVwidXJsKCNweXRob24tb3JpZ2luYWwtYylcIiBkPVwiTTk3LjMwOSAxMTkuNTk3YzAgMy41NDMtMTQuODE2IDYuNDE2LTMzLjA5MSA2LjQxNi0xOC4yNzYgMC0zMy4wOTItMi44NzMtMzMuMDkyLTYuNDE2IDAtMy41NDQgMTQuODE1LTYuNDE3IDMzLjA5Mi02LjQxNyAxOC4yNzUgMCAzMy4wOTEgMi44NzIgMzMuMDkxIDYuNDE3elwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0yMi42NyA0N2g5OS42N3Y3My42N0gyMi42N3pcIj48L3BhdGg+PHBhdGggZGF0YS1uYW1lPVwib3JpZ2luYWxcIiBmaWxsPVwiIzAwN2FjY1wiIGQ9XCJNMS41IDYzLjkxdjYyLjVoMTI1di0xMjVIMS41em0xMDAuNzMtNWExNS41NiAxNS41NiAwIDAxNy44MiA0LjUgMjAuNTggMjAuNTggMCAwMTMgNGMwIC4xNi01LjQgMy44MS04LjY5IDUuODUtLjEyLjA4LS42LS40NC0xLjEzLTEuMjNhNy4wOSA3LjA5IDAgMDAtNS44Ny0zLjUzYy0zLjc5LS4yNi02LjIzIDEuNzMtNi4yMSA1YTQuNTggNC41OCAwIDAwLjU0IDIuMzRjLjgzIDEuNzMgMi4zOCAyLjc2IDcuMjQgNC44NiA4Ljk1IDMuODUgMTIuNzggNi4zOSAxNS4xNiAxMCAyLjY2IDQgMy4yNSAxMC40NiAxLjQ1IDE1LjI0LTIgNS4yLTYuOSA4LjczLTEzLjgzIDkuOWEzOC4zMiAzOC4zMiAwIDAxLTkuNTItLjEgMjMgMjMgMCAwMS0xMi43Mi02LjYzYy0xLjE1LTEuMjctMy4zOS00LjU4LTMuMjUtNC44MmE5LjM0IDkuMzQgMCAwMTEuMTUtLjczTDgyIDEwMWwzLjU5LTIuMDguNzUgMS4xMWExNi43OCAxNi43OCAwIDAwNC43NCA0LjU0YzQgMi4xIDkuNDYgMS44MSAxMi4xNi0uNjJhNS40MyA1LjQzIDAgMDAuNjktNi45MmMtMS0xLjM5LTMtMi41Ni04LjU5LTUtNi40NS0yLjc4LTkuMjMtNC41LTExLjc3LTcuMjRhMTYuNDggMTYuNDggMCAwMS0zLjQzLTYuMjUgMjUgMjUgMCAwMS0uMjItOGMxLjMzLTYuMjMgNi0xMC41OCAxMi44Mi0xMS44N2EzMS42NiAzMS42NiAwIDAxOS40OS4yNnptLTI5LjM0IDUuMjR2NS4xMkg1Ni42NnY0Ni4yM0g0NS4xNVY2OS4yNkgyOC44OHYtNWE0OS4xOSA0OS4xOSAwIDAxLjEyLTUuMTdDMjkuMDggNTkgMzkgNTkgNTEgNTloMjEuODN6XCI+PC9wYXRoPlxyXG48L3N2Zz5gLFxyXG5cclxuYDxzdmcgY2xhc3M9IFwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCIjNDk0OTQ5XCIgZD1cIk02NC4wOTQgMTI2LjIyNGMzNC4yNzUtLjA1MiA2Mi4wMjEtMjcuOTMzIDYyLjAyMS02Mi4zMjUgMC0zMy44MzMtMjcuNjE4LTYxLjY5Ny02MC42MTMtNjIuMjg2QzMwLjg1Ljk5NSAxLjg5NCAyOS4xMTMgMS44ODUgNjMuMjFjLS4wMSAzNS4wNzkgMjcuNjEyIDYzLjA2NCA2Mi4yMDkgNjMuMDE0ek02My45OTMgNC42M2MzMi45MDctLjAxMSA1OS4xMjYgMjYuNzI1IDU5LjExNiA2MC4yOC0uMDExIDMxLjY3OS0yNi45MjUgNTguMTgtNTkuMDkyIDU4LjE4Ny0zMi43NzEuMDA3LTU5LjEyNS0yNi41NjMtNTkuMTI0LTU5LjYwOC4wMDItMzIuMTkzIDI2Ljc2Ni01OC44NDggNTkuMS01OC44NTl6TTM5LjE1NyAzNS44OTZjLjUzOCAxLjc5My0uOTY4IDIuNDE3LTIuNTY5IDIuNTQyLTEuNjg1LjEzLTMuMzY5LjI1Ny01LjMyNS40MDYgNi40NTYgMTkuMjM0IDEyLjgxNSAzOC4xODMgMTkuMzI1IDU3LjU3My40NjQtLjc1OS42NTUtLjk3My43MzktMS4yMjMgMy41NzQtMTAuNjgyIDcuMTY4LTIxLjM1NyAxMC42NTEtMzIuMDY5LjMxOC0uOTc3LjE2LTIuMjcxLS4xODgtMy4yNzUtMS44NDMtNS4zMi00LjA1MS0xMC41MjQtNS42NjctMTUuOTA4LTEuMTA1LTMuNjg2LTIuNTcxLTYuMDcxLTYuOTI4LTUuNjQ0LS43NDIuMDczLTEuNjQ4LTEuNTI0LTIuNDc5LTIuMzQ5IDEuMDA1LS42IDIuMDAzLTEuNzA0IDMuMDE3LTEuNzE5YTg0OS41OTMgODQ5LjU5MyAwIDAxMjYuNjE4LjAwOGMxLjAxOC4wMTcgMi4wMTYgMS4xNSAzLjAyMSAxLjc2NS0uODguODA0LTEuNjM5IDIuMDEtMi42NjggMi4zMjEtMS42NTEuNDk4LTMuNDgyLjQwNC01LjQ1OC41OGwxOS4zNDkgNTcuNTZjMi45MzEtOS43MzYgNS42NTgtMTguNjc2IDguMzEtMjcuNjM5IDIuMzY2LTguMDAxLjk1Ni0xNS40NzMtMy4zMjItMjIuNTItMS4yODYtMi4xMTktMi44NjYtNC4xNzUtMy41OTUtNi40ODYtLjgyOC0yLjYyOS0xLjUxNi01LjYyMi0xLjA3Ny04LjI1OS43NDUtNC40NjkgNC4xNzQtNi42ODggOC44MTQtNy4xMTNDNzQuMzMzLjg4MSAzNC40MzEgOS4zMTcgMTkuNzI4IDM0LjkyMmM1LjY2LS4yNjEgMTEuMDY0LS42MDQgMTYuNDcyLS42NzggMS4wMjItLjAxMyAyLjcxNy44NTEgMi45NTcgMS42NTJ6bTEwLjExNyA3Ny45NzFjLS4xMTguMzQ1LS4xMjUuNzI5LS4yMTggMS4zMDIgMTAuOTQzIDMuMDM0IDIxLjY3NSAyLjgxNSAzMi42NTktLjg4NmwtMTYuNzgtNDUuOTZjLTUuMzcgMTUuNjExLTEwLjUyIDMwLjU3NS0xNS42NjEgNDUuNTQ0em0tOC40NTYtMi4wNzhsLTI1LjI4MS02OS4zNWMtMTEuNDA1IDIyLjI3OC0yLjcyOSA1Ni4yNjggMjUuMjgxIDY5LjM1em03Ni40MjgtNDQuNTYyYy44MDItMTAuNTM0LTIuODMyLTI1LjExOS01Ljk3LTI3LjEyNS0uMzUgMy44NzUtLjEwNiA4LjE4Ni0xLjIxOCAxMi4xMTQtMi42MTcgOS4yNTUtNS44MTcgMTguMzQ5LTguODk5IDI3LjQ2OC0zLjM1IDkuOTEyLTYuODMyIDE5Ljc3OS0xMC4yNTcgMjkuNjY2IDE2LjA5Mi05LjUzOSAyNC45MzUtMjMuNjE4IDI2LjM0NC00Mi4xMjN6XCI+PC9wYXRoPlxyXG48L3N2Zz5gXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsc3tcclxuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNraWxsc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcclxuXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXIoKSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJza2lsbC10aXRsZVwiKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXkgU2tpbGxzXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2xpZGVyID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzbGlkZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBpdGVtc0hvbGRlci5jbGFzc05hbWUgPSBcImJyYW5kc1wiO1xyXG5cclxuICAgICAgICAgICAgaWNvbnMuZm9yRWFjaCgoaXRlbSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5jbGFzc05hbWUgPSBcImJyYW5kLWxvZ29cIjtcclxuICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gYCR7aXRlbX1gO1xyXG4gICAgICAgICAgICAgICAgaXRlbXNIb2xkZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtc0hvbGRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmFuZHMoKSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGN2TWFrZXJJbWcgZnJvbSBcIi4uL2ltYWdlcy9jdi1tYWtlci5wbmdcIjtcclxuaW1wb3J0IG1lbW9yeUltZyBmcm9tIFwiLi4vaW1hZ2VzL21lbW9yeS5wbmdcIjtcclxuaW1wb3J0IHRvZG9saXN0SW1nIGZyb20gXCIuLi9pbWFnZXMvdG9kb2xpc3QucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyQXBwSW1nIGZyb20gJy4uL2ltYWdlcy93ZWF0aGVyLWFwcC5wbmcnXHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtuYW1lOiBcIldlYXRoZXIgQXBwXCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogd2VhdGhlckFwcEltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vd2VhdGhlci1hcHAvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS93ZWF0aGVyLWFwcFwifSxcclxuICAgIHtuYW1lOiBcIlRvZG8gTGlzdFwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IHRvZG9saXN0SW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby90b2RvbGlzdC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L3RvZG9saXN0XCJ9LFxyXG4gICAge25hbWU6IFwiTWVtb3J5XCIsIFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaG9ydCBkZXNjcmlwdGlvbi4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby5cIiwgXHJcbiAgICBpbWFnZTogbWVtb3J5SW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly94c3ltbWV0cnk5LmdpdGh1Yi5pby9tZW1vcnkvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS9tZW1vcnlcIn0sXHJcbiAgICB7bmFtZTogXCJDViBNYWtlclwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IGN2TWFrZXJJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL2xvcXVhY2lvdXMtcGFwcmVuamFrLWIyMzU2NS5uZXRsaWZ5LmFwcC9cIiwgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94c3ltbWV0cnk5L2N2LW1ha2VyXCJ9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya3tcclxuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwid29yay10aXRsZVwiKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXkgV29ya1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3RzID0gKCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+e1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmRzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRzXCIpXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJBbiBpbWFnZSBvZiAke2l0ZW0ubmFtZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+JHtpdGVtLm5hbWV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpbmstZmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2l0ZW0uZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kaS1pY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Z2l0PC90aXRsZT48cGF0aCBkPVwiTTIuNiwxMC41OUw4LjM4LDQuOEwxMC4wNyw2LjVDOS44Myw3LjM1IDEwLjIyLDguMjggMTEsOC43M1YxNC4yN0MxMC40LDE0LjYxIDEwLDE1LjI2IDEwLDE2QTIsMiAwIDAsMCAxMiwxOEEyLDIgMCAwLDAgMTQsMTZDMTQsMTUuMjYgMTMuNiwxNC42MSAxMywxNC4yN1Y5LjQxTDE1LjA3LDExLjVDMTUsMTEuNjUgMTUsMTEuODIgMTUsMTJBMiwyIDAgMCwwIDE3LDE0QTIsMiAwIDAsMCAxOSwxMkEyLDIgMCAwLDAgMTcsMTBDMTYuODIsMTAgMTYuNjUsMTAgMTYuNSwxMC4wN0wxMy45Myw3LjVDMTQuMTksNi41NyAxMy43MSw1LjU1IDEyLjc4LDUuMTZDMTIuMzUsNSAxMS45LDQuOTYgMTEuNSw1LjA3TDkuOCwzLjM4TDEwLjU5LDIuNkMxMS4zNywxLjgxIDEyLjYzLDEuODEgMTMuNDEsMi42TDIxLjQsMTAuNTlDMjIuMTksMTEuMzcgMjIuMTksMTIuNjMgMjEuNCwxMy40MUwxMy40MSwyMS40QzEyLjYzLDIyLjE5IDExLjM3LDIyLjE5IDEwLjU5LDIxLjRMMi42LDEzLjQxQzEuODEsMTIuNjMgMS44MSwxMS4zNyAyLjYsMTAuNTlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIke2l0ZW0ud2Vic2l0ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJtZGktaWNvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm9wZW4taW4tbmV3PC90aXRsZT48cGF0aCBkPVwiTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1idWlsdGluXCI+PGk+QnVpbHQgd2l0aCAke2l0ZW0ubGFuZ3VhZ2V9PC9pPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4uL3NyYy9wYWdlcy9ob21lcGFnZSc7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBob21lUGFnZS5sb2FkUGFnZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==