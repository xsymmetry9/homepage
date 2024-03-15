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
    text-align: center;
}
h3{
    font: 2rem sans-serif;
    font-weight: 700;
}

p{
    font-size: .9rem;
    line-height: 1.5;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --primary-font: 'Poppins', sans-serif;\r\n    --primary-color-dark: #000;\r\n    --primary-color-light: #fff;\r\n    --primary-fc-dark: #000;\r\n    --primary-bg-color-dark: var(--primary-color-dark);\r\n\r\n    --button-color: var(--primary-bg-color-dark);\r\n    --color-cyan: rgb(0, 247, 255);\r\n}\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    background-color: var(--primary-color-light);\r\n    font-family: var(--primary-font);\r\n} \r\n/* Header */\r\nheader{\r\n    position: absolute;\r\n    top: 3rem;\r\n    width: 100%;\r\n    background: rgba(25, 25, 25, 0.3);\r\n}\r\nh2{\r\n    font: 3rem sans-serif;\r\n    font-weight: 700;\r\n    text-align: center;\r\n}\r\nh3{\r\n    font: 2rem sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\np{\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.header-container{\r\n    position: relative;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    color: var(--primary-color-light);\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n\r\n    height: 70px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .header-container{\r\n        background: rgba(25, 25, 25, 0.7);\r\n    }\r\n}\r\n\r\n.title-logo{\r\n    width: 100px;\r\n}\r\n.title-logo a{\r\n    color: var(--primary-color-light);\r\n    margin-left: 1.2rem;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n}\r\n.nav-container{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 1.88rem;\r\n    padding: 12px 12px;\r\n}\r\n\r\n.nav-links{\r\n    position: relative;\r\n    --color: var(--color-cyan);\r\n    padding-bottom: 6px;\r\n    cursor: pointer;\r\n    color: var(--primary-color-light);\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    font-size: inherit;\r\n    transition: color ease-in .7s;\r\n}\r\n.nav-links:hover, .nav-links:focus{\r\n    color: var(--color);\r\n}\r\n\r\n@media (max-width: 55em){\r\n    header{\r\n        position: sticky;\r\n        top: 0;\r\n    }\r\n    nav{\r\n        background-color: rgba(25, 25, 25, 0.9);\r\n        width: 100%;\r\n        height: 100vh;\r\n        position: absolute;\r\n    }\r\n   \r\n    .header-container{\r\n        flex-direction: column;\r\n        align-items: normal;\r\n    }\r\n    .nav-container{\r\n        margin-top: 3rem;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .nav-container > li{\r\n        width: 100%;\r\n        border-bottom: 1px solid white;\r\n        padding: 1rem .5rem;\r\n    }\r\n    .title-logo{\r\n        margin-top: 22.5px;\r\n    }\r\n}\r\n/* Content */\r\n\r\n.content-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    padding: 0;\r\n    background-color: var(--primary-bg-color-dark);\r\n\r\n}\r\n/* Banner */\r\n.banner-title{\r\n    color: var(--primary-color-light);\r\n    line-height: 1;\r\n    font-size: 7rem;\r\n    padding: 0 12px;\r\n}\r\n\r\n.subtitle{\r\n    color: var(--primary-color-light);\r\n    font-size: 1.6rem;\r\n    padding-top: 1.2rem;\r\n}\r\n@media (max-width: 55em){\r\n    .banner-title{\r\n        font-size: 4rem;\r\n    }\r\n    .subtitle{\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n.banner-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n}\r\n.banner-btn-nav-about\r\n{\r\n    cursor: pointer;\r\n    height: 70px;\r\n    width: 70px;\r\n    fill: var(--primary-color-light);\r\n    background: none;\r\n    border: 2px solid var(--primary-color-light);\r\n    border-radius: 50%;\r\n    animation: slidein ease-in-out .5s;\r\n    margin-top: 7rem;\r\n    transition: background-color ease-in 500ms,\r\n                fill ease-in 500ms,\r\n                border ease-in 500ms;\r\n\r\n}\r\n@keyframes slidein{\r\n\r\n    from{margin-top: 0;}\r\n    to{margin-top: 7rem;}\r\n        \r\n}\r\n\r\n.banner-btn-nav-about:hover, .banner-btn-nav-about:focus{\r\n    --color: rgb(0, 247, 255);\r\n    background-color: var(--color);\r\n    border: 3px solid var(--color);\r\n    fill: #000;\r\n}\r\n\r\n/* About */\r\n.section-container{\r\n    background-color: var(--primary-color-light);\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.about-background{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-color-light);\r\n    height: 100vh;\r\n}\r\n.about-description{\r\n    color: var(--primary-color-dark);\r\n    background-color: var(--primary-color-light);\r\n    font-size: 1.2rem;\r\n    padding: 3rem 1.2rem;\r\n    border: 1px solid var(--primary-color-dark);\r\n    box-shadow: 2px 2px 1px 1px rgba(25, 25, 25, 0.6);\r\n    max-width: 750px;\r\n    width: 100%;\r\n}\r\n.about-description h2{\r\n    padding-bottom: 2rem;\r\n}\r\n.about-description p{\r\n    padding-bottom: 1.2rem;\r\n}\r\n.imageDescription-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-inline: auto;\r\n    margin-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    z-index: 0;\r\n    \r\n}\r\n.imageDescription-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -10;\r\n    background-color: var(--primary-color-dark);\r\n    clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 95%);\r\n\r\n}\r\n\r\n@media (max-width: 55em) {\r\n    .imageDescription-container{\r\n        flex-wrap: wrap;\r\n\r\n    }\r\n}\r\n.profile-picture{\r\n    width: 400px;\r\n    height: auto;\r\n    outline: 1px solid green;\r\n    box-shadow: 1px 2px 1px 1px rgba(25, 25, 25, 0.7);\r\n}\r\n#about .social-media-icons-container{\r\n    justify-content: flex-end;\r\n}\r\n\r\n/*Skills */\r\n:root{\r\n    --total-brand: 12;\r\n    --logo-width: 12rem;\r\n    --total-logo-width: calc(var(--total-brand) * var(--logo-width) * 2);\r\n}\r\n\r\n.skill-title{\r\n    text-align: center;\r\n}\r\n\r\n.slider{\r\n    position: relative;\r\n    height: 20rem;\r\n    background-color: #fff;\r\n    box-shadow: 0.8rem 1.4rem -.2rem #0001;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.slider::before,\r\n.slider::after{\r\n    position: absolute;\r\n    content: \"\";\r\n\r\n    height: 100%;\r\n    width: var(--logo-width);\r\n}\r\n.slider::before{\r\n    left: 0;\r\n    background: linear-gradient(to right, #fff 0%,#0000 100%);\r\n}\r\n.slider::after{\r\n    right: 0;\r\n    background: linear-gradient(to left, #fff 0%,#0000 100%);\r\n}\r\n\r\n.slider ul.brands{\r\n    list-style: none;\r\n    width: var(--total-logo-width);\r\n    display: flex;\r\n\r\n    animation: slideLeft 12s linear infinite;\r\n}\r\n.slider:hover ul.brands{\r\n    animation-play-state: paused;\r\n}\r\n\r\n@keyframes slideLeft {\r\n    100%{\r\n        transform: translateX(calc(-100% / 2));\r\n    }\r\n}\r\n\r\nul.brands li.brand-logo{\r\n    width: var(--logo-width);\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin-left: 3rem\r\n}\r\n\r\n.skill-icon{\r\n    height: 100px;\r\n    /* margin: 0 30px; */\r\n}\r\n\r\n/* Work */\r\n\r\n.content{\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    padding: 5rem 0;\r\n}\r\n\r\n.work-title{\r\n    text-align: center;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.top-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.mdi-icons{\r\n    height: 1.9rem;\r\n    width: 1.9rem;\r\n    fill: var(--primary-color-dark);\r\n    background-color: inherit;\r\n}\r\n.mdi-icons:hover, .mdi-icons:active{\r\n    fill: blue;\r\n}\r\n\r\n.link-file-container{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: .3rem;\r\n}\r\n.link-file-container{\r\n    list-style: none;\r\n}\r\n.link-file-container a{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.project-container{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin-inline: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n    gap: 1.6rem;\r\n    padding: 2rem 12px;\r\n}\r\n\r\n.title-name{\r\n    --spacing: 1.2rem;\r\n    font-size: 1.8rem;\r\n    padding-bottom: var(--spacing);\r\n}\r\n\r\n.project-cards{\r\n    display: grid;\r\n    grid-template-rows: 1fr .7fr;\r\n    box-shadow: 2px 2px 3px 2px rgba(25, 25, 25, 0.3);\r\n}\r\n\r\n.project-image{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.project-bottom{\r\n    border-top: 1px solid black;\r\n    padding: 1.2rem 1.2rem;\r\n\r\n}\r\n.project-description{\r\n    font-size: .9rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* Contact */\r\n\r\n.contact-flex{\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n    padding-bottom: .3rem;\r\n}\r\n\r\n.contact-container{\r\n    --spacing-big: 3rem;\r\n    color: var(--primary-color-light);\r\n    margin-top: var(--spacing-big);\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n@media (max-width: 55em)\r\n{\r\n    .contact-container{\r\n        display: block;\r\n    }\r\n}\r\n\r\n.contact-image{\r\n    max-width: 700px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.social-media-icons-container{\r\n    display: flex;\r\n    gap: 16px;\r\n}\r\n@media (max-width: 55em)\r\n{\r\n    .social-media-icons-container{\r\n        justify-content: center;\r\n        padding: 1.2rem;\r\n    }\r\n}\r\n.social-media-icons{\r\n    list-style: none;\r\n}\r\n.social-media-icons-links{\r\n    cursor: pointer;\r\n    \r\n}\r\n.devicon{\r\n    font-size: 2rem;\r\n}\r\n\r\n.social-media-links{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.left-container{\r\n    --spacing-1: 1rem;\r\n    padding: 0 var(--spacing-1);\r\n}\r\n\r\n.left-container h2{\r\n    --spacing-2: 1.2rem;\r\n    padding-bottom: 1.12rem;\r\n}\r\n.left-container .contact-subtitle{\r\n    --spacing-1: 1rem;\r\n    padding-bottom: var(--spacing-1);\r\n}\r\n\r\n.right-container{\r\n    padding: 0 12px;\r\n}\r\n\r\n/* footer */\r\n.footer-container{\r\n    background-color: var(--primary-color-dark);\r\n    color: var(--primary-color-light);\r\n    text-align: center;\r\n    padding: 1.2rem 0;\r\n}\r\n\r\n/*Components */\r\n.menu-btn{\r\n    --button-color: var(--primary-color-light);\r\n        cursor: pointer;\r\n        display: none;   \r\n        fill: var(--button-color);\r\n        \r\n        position: absolute;\r\n        right: 12px;\r\n        top: 13px;\r\n        z-index: 100;\r\n        background: transparent;\r\n        border: 1px solid var(--button-color);\r\n        border-radius: 5px;\r\n    }\r\n\r\n    .menu-btn .line{\r\n        transition: \r\n            y 300ms ease-in 300ms,\r\n            rotate 300ms ease-in ,\r\n            opacity 0ms 300ms;\r\n        transform-origin: center;\r\n    }\r\n    .menu-btn:hover .line{\r\n        transition: \r\n            y 300ms ease-in,\r\n            rotate 300ms ease-in 300ms,\r\n            opacity 0ms 300ms;\r\n    }\r\n\r\n    .menu-btn[aria-hidden =\"false\"] .top\r\n    {\r\n        y: 48;\r\n        rotate: 45deg;\r\n    }\r\n    .menu-btn[aria-hidden =\"false\"] .middle\r\n    {\r\n        opacity: 0;\r\n    }\r\n    .menu-btn[aria-hidden =\"false\"] .bottom\r\n    {\r\n        y: 48;\r\n        rotate: -45deg;\r\n    }\r\n\r\n    .menu-btn:hover :is(.top, .bottom){\r\n        y: 48;\r\n    }\r\n    .menu-btn:hover .top{\r\n        rotate: 45deg;\r\n    }\r\n    .menu-btn:hover .bottom{\r\n        rotate: -45deg;\r\n    }\r\n    .menu-btn:hover .middle{\r\n        opacity: 0;\r\n    }\r\n \r\n    @media (max-width: 55em){\r\n        .menu-btn{\r\n            display: block;\r\n        }\r\n    }\r\n\r\n\r\n.hidden{\r\n    display: none;\r\n}\r\n\r\n.sticky{\r\n    position: sticky;\r\n    top: 0;\r\n    background: rgba(25, 25, 25, 0.7);\r\n    z-index: 20;\r\n}\r\n\r\n.blink{\r\n    animation: customBlink 2s infinite ease;\r\n}\r\n\r\n@keyframes customBlink{\r\n    0%,\r\n    50%,\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n    25%,\r\n    75%{\r\n        opacity: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
    
        const title = (logoName) =>{
            const box = document.createElement("div");
            box.className = "title-logo";
            box.innerHTML = `
                <a href="/"><span>${logoName}</span></a>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxNQUFNLE1BQU0sb0JBQW9CLHdCQUF3QixPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE1BQU0sS0FBSyxPQUFPLE9BQU8sT0FBTyxNQUFNLFVBQVUsVUFBVSxN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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNZO0FBQzdDO0FBQ0EscUNBQXFDLDJEQUFRLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL3NvY2lhbE1lZGlhSWNvbnMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvYmFubmVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvc2tpbGxzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL3dvcmsuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XHJcbiAgICAtLXByaW1hcnktZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICMwMDA7XHJcbiAgICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICNmZmY7XHJcbiAgICAtLXByaW1hcnktZmMtZGFyazogIzAwMDtcclxuICAgIC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG5cclxuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRhcmspO1xyXG4gICAgLS1jb2xvci1jeWFuOiByZ2IoMCwgMjQ3LCAyNTUpO1xyXG59XHJcbip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1se1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn0gXHJcbi8qIEhlYWRlciAqL1xyXG5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcclxufVxyXG5oMntcclxuICAgIGZvbnQ6IDNyZW0gc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDN7XHJcbiAgICBmb250OiAycmVtIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcblxyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxyXG57XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZS1sb2dve1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi50aXRsZS1sb2dvIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmF2LWNvbnRhaW5lcntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxLjg4cmVtO1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tY29sb3ItY3lhbik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4gLjdzO1xyXG59XHJcbi5uYXYtbGlua3M6aG92ZXIsIC5uYXYtbGlua3M6Zm9jdXN7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDI1LCAwLjkpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5oZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5uYXYtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdi1jb250YWluZXIgPiBsaXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbTtcclxuICAgIH1cclxuICAgIC50aXRsZS1sb2dve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIyLjVweDtcclxuICAgIH1cclxufVxyXG4vKiBDb250ZW50ICovXHJcblxyXG4uY29udGVudC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1kYXJrKTtcclxuXHJcbn1cclxuLyogQmFubmVyICovXHJcbi5iYW5uZXItdGl0bGV7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtc2l6ZTogN3JlbTtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG5cclxuLnN1YnRpdGxle1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMS4ycmVtO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcclxuICAgIC5iYW5uZXItdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcbi5iYW5uZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmFubmVyLWJ0bi1uYXYtYWJvdXRcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVpbiBlYXNlLWluLW91dCAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLWluIDUwMG1zLFxyXG4gICAgICAgICAgICAgICAgZmlsbCBlYXNlLWluIDUwMG1zLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyIGVhc2UtaW4gNTAwbXM7XHJcblxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVpbntcclxuXHJcbiAgICBmcm9te21hcmdpbi10b3A6IDA7fVxyXG4gICAgdG97bWFyZ2luLXRvcDogN3JlbTt9XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5iYW5uZXItYnRuLW5hdi1hYm91dDpob3ZlciwgLmJhbm5lci1idG4tbmF2LWFib3V0OmZvY3Vze1xyXG4gICAgLS1jb2xvcjogcmdiKDAsIDI0NywgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yKTtcclxuICAgIGZpbGw6ICMwMDA7XHJcbn1cclxuXHJcbi8qIEFib3V0ICovXHJcbi5zZWN0aW9uLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYWJvdXQtYmFja2dyb3VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5hYm91dC1kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDNyZW0gMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNik7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFib3V0LWRlc2NyaXB0aW9uIGgye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuLmFib3V0LWRlc2NyaXB0aW9uIHB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xyXG59XHJcbi5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBcclxufVxyXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXI6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgNDAlLCAwJSA5NSUpO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcclxuICAgIC5pbWFnZURlc2NyaXB0aW9uLWNvbnRhaW5lcntcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlLXBpY3R1cmV7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xyXG59XHJcbiNhYm91dCAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi8qU2tpbGxzICovXHJcbjpyb290e1xyXG4gICAgLS10b3RhbC1icmFuZDogMTI7XHJcbiAgICAtLWxvZ28td2lkdGg6IDEycmVtO1xyXG4gICAgLS10b3RhbC1sb2dvLXdpZHRoOiBjYWxjKHZhcigtLXRvdGFsLWJyYW5kKSAqIHZhcigtLWxvZ28td2lkdGgpICogMik7XHJcbn1cclxuXHJcbi5za2lsbC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMC44cmVtIDEuNHJlbSAtLjJyZW0gIzAwMDE7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZXI6OmJlZm9yZSxcclxuLnNsaWRlcjo6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcclxufVxyXG4uc2xpZGVyOjpiZWZvcmV7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCMwMDAwIDEwMCUpO1xyXG59XHJcbi5zbGlkZXI6OmFmdGVye1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiAwJSwjMDAwMCAxMDAlKTtcclxufVxyXG5cclxuLnNsaWRlciB1bC5icmFuZHN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IHZhcigtLXRvdGFsLWxvZ28td2lkdGgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdCAxMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5zbGlkZXI6aG92ZXIgdWwuYnJhbmRze1xyXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSAvIDIpKTtcclxuICAgIH1cclxufVxyXG5cclxudWwuYnJhbmRzIGxpLmJyYW5kLWxvZ297XHJcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbVxyXG59XHJcblxyXG4uc2tpbGwtaWNvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgMzBweDsgKi9cclxufVxyXG5cclxuLyogV29yayAqL1xyXG5cclxuLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxufVxyXG5cclxuLndvcmstdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuLnRvcC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tZGktaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDEuOXJlbTtcclxuICAgIHdpZHRoOiAxLjlyZW07XHJcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG4ubWRpLWljb25zOmhvdmVyLCAubWRpLWljb25zOmFjdGl2ZXtcclxuICAgIGZpbGw6IGJsdWU7XHJcbn1cclxuXHJcbi5saW5rLWZpbGUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBnYXA6IC4zcmVtO1xyXG59XHJcbi5saW5rLWZpbGUtY29udGFpbmVye1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wcm9qZWN0LWNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDEuNnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTJweDtcclxufVxyXG5cclxuLnRpdGxlLW5hbWV7XHJcbiAgICAtLXNwYWNpbmc6IDEuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAuN2ZyO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5wcm9qZWN0LWJvdHRvbXtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjJyZW07XHJcblxyXG59XHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi8qIENvbnRhY3QgKi9cclxuXHJcbi5jb250YWN0LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGFpbmVye1xyXG4gICAgLS1zcGFjaW5nLWJpZzogM3JlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctYmlnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxyXG57XHJcbiAgICAuY29udGFjdC1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWltYWdle1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcclxue1xyXG4gICAgLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcbi5zb2NpYWwtbWVkaWEtaWNvbnN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwtbWVkaWEtaWNvbnMtbGlua3N7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4uZGV2aWNvbntcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1saW5rc3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGVmdC1jb250YWluZXJ7XHJcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy0xKTtcclxufVxyXG5cclxuLmxlZnQtY29udGFpbmVyIGgye1xyXG4gICAgLS1zcGFjaW5nLTI6IDEuMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjEycmVtO1xyXG59XHJcbi5sZWZ0LWNvbnRhaW5lciAuY29udGFjdC1zdWJ0aXRsZXtcclxuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctMSk7XHJcbn1cclxuXHJcbi5yaWdodC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuXHJcbi8qIGZvb3RlciAqL1xyXG4uZm9vdGVyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMDtcclxufVxyXG5cclxuLypDb21wb25lbnRzICovXHJcbi5tZW51LWJ0bntcclxuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgICBcclxuICAgICAgICBmaWxsOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICB0b3A6IDEzcHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWJ0biAubGluZXtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluIDMwMG1zLFxyXG4gICAgICAgICAgICByb3RhdGUgMzAwbXMgZWFzZS1pbiAsXHJcbiAgICAgICAgICAgIG9wYWNpdHkgMG1zIDMwMG1zO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tZW51LWJ0bjpob3ZlciAubGluZXtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgeSAzMDBtcyBlYXNlLWluLFxyXG4gICAgICAgICAgICByb3RhdGUgMzAwbXMgZWFzZS1pbiAzMDBtcyxcclxuICAgICAgICAgICAgb3BhY2l0eSAwbXMgMzAwbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtYnRuW2FyaWEtaGlkZGVuID1cImZhbHNlXCJdIC50b3BcclxuICAgIHtcclxuICAgICAgICB5OiA0ODtcclxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuW2FyaWEtaGlkZGVuID1cImZhbHNlXCJdIC5taWRkbGVcclxuICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuW2FyaWEtaGlkZGVuID1cImZhbHNlXCJdIC5ib3R0b21cclxuICAgIHtcclxuICAgICAgICB5OiA0ODtcclxuICAgICAgICByb3RhdGU6IC00NWRlZztcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1idG46aG92ZXIgOmlzKC50b3AsIC5ib3R0b20pe1xyXG4gICAgICAgIHk6IDQ4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuOmhvdmVyIC50b3B7XHJcbiAgICAgICAgcm90YXRlOiA0NWRlZztcclxuICAgIH1cclxuICAgIC5tZW51LWJ0bjpob3ZlciAuYm90dG9te1xyXG4gICAgICAgIHJvdGF0ZTogLTQ1ZGVnO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5taWRkbGV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xyXG4gICAgICAgIC5tZW51LWJ0bntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3RpY2t5e1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uYmxpbmt7XHJcbiAgICBhbmltYXRpb246IGN1c3RvbUJsaW5rIDJzIGluZmluaXRlIGVhc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3VzdG9tQmxpbmt7XHJcbiAgICAwJSxcclxuICAgIDUwJSxcclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDI1JSxcclxuICAgIDc1JXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0RBQWtEOztJQUVsRCw0Q0FBNEM7SUFDNUMsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0FBQ3BDO0FBQ0EsV0FBVztBQUNYO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxxQkFBcUI7SUFD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SSxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksMkNBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLGNBQWM7QUFDZDtJQUNJLDBDQUEwQztRQUN0QyxlQUFlO1FBQ2YsYUFBYTtRQUNiLHlCQUF5Qjs7UUFFekIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixxQ0FBcUM7UUFDckMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0k7Ozs2QkFHcUI7UUFDckIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSTs7OzZCQUdxQjtJQUN6Qjs7SUFFQTs7UUFFSSxLQUFLO1FBQ0wsYUFBYTtJQUNqQjtJQUNBOztRQUVJLFVBQVU7SUFDZDtJQUNBOztRQUVJLEtBQUs7UUFDTCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksS0FBSztJQUNUO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSTtZQUNJLGNBQWM7UUFDbEI7SUFDSjs7O0FBR0o7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0k7OztRQUdJLFVBQVU7SUFDZDtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLXByaW1hcnktZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjZmZmO1xcclxcbiAgICAtLXByaW1hcnktZmMtZGFyazogIzAwMDtcXHJcXG4gICAgLS1wcmltYXJ5LWJnLWNvbG9yLWRhcms6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxyXFxuXFxyXFxuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRhcmspO1xcclxcbiAgICAtLWNvbG9yLWN5YW46IHJnYigwLCAyNDcsIDI1NSk7XFxyXFxufVxcclxcbip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXHJcXG59IFxcclxcbi8qIEhlYWRlciAqL1xcclxcbmhlYWRlcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDNyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuMyk7XFxyXFxufVxcclxcbmgye1xcclxcbiAgICBmb250OiAzcmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuaDN7XFxyXFxuICAgIGZvbnQ6IDJyZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKVxcclxcbntcXHJcXG4gICAgLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWxvZ297XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuLnRpdGxlLWxvZ28gYXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5uYXYtY29udGFpbmVye1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEuODhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rc3tcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtLWNvbG9yOiB2YXIoLS1jb2xvci1jeWFuKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluIC43cztcXHJcXG59XFxyXFxuLm5hdi1saW5rczpob3ZlciwgLm5hdi1saW5rczpmb2N1c3tcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pe1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIG5hdntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI1LCAyNSwgMC45KTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcbiAgIFxcclxcbiAgICAuaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtY29udGFpbmVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtY29udGFpbmVyID4gbGl7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdGxlLWxvZ297XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMi41cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyogQ29udGVudCAqL1xcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItZGFyayk7XFxyXFxuXFxyXFxufVxcclxcbi8qIEJhbm5lciAqL1xcclxcbi5iYW5uZXItdGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXHJcXG4gICAgLmJhbm5lci10aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuc3VidGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYmFubmVyLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmJhbm5lci1idG4tbmF2LWFib3V0XFxyXFxue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlaW4gZWFzZS1pbi1vdXQgLjVzO1xcclxcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gNTAwbXMsXFxyXFxuICAgICAgICAgICAgICAgIGZpbGwgZWFzZS1pbiA1MDBtcyxcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyIGVhc2UtaW4gNTAwbXM7XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZGVpbntcXHJcXG5cXHJcXG4gICAgZnJvbXttYXJnaW4tdG9wOiAwO31cXHJcXG4gICAgdG97bWFyZ2luLXRvcDogN3JlbTt9XFxyXFxuICAgICAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1idG4tbmF2LWFib3V0OmhvdmVyLCAuYmFubmVyLWJ0bi1uYXYtYWJvdXQ6Zm9jdXN7XFxyXFxuICAgIC0tY29sb3I6IHJnYigwLCAyNDcsIDI1NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgICBmaWxsOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5zZWN0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmFib3V0LWJhY2tncm91bmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLmFib3V0LWRlc2NyaXB0aW9ue1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggMXB4IHJnYmEoMjUsIDI1LCAyNSwgMC42KTtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hYm91dC1kZXNjcmlwdGlvbiBoMntcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcbi5hYm91dC1kZXNjcmlwdGlvbiBwe1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xcclxcbn1cXHJcXG4uaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVyOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IC0xMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDQwJSwgMCUgOTUlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1ZW0pIHtcXHJcXG4gICAgLmltYWdlRGVzY3JpcHRpb24tY29udGFpbmVye1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcbi5wcm9maWxlLXBpY3R1cmV7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMXB4IDFweCByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XFxyXFxufVxcclxcbiNhYm91dCAuc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLypTa2lsbHMgKi9cXHJcXG46cm9vdHtcXHJcXG4gICAgLS10b3RhbC1icmFuZDogMTI7XFxyXFxuICAgIC0tbG9nby13aWR0aDogMTJyZW07XFxyXFxuICAgIC0tdG90YWwtbG9nby13aWR0aDogY2FsYyh2YXIoLS10b3RhbC1icmFuZCkgKiB2YXIoLS1sb2dvLXdpZHRoKSAqIDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDIwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwLjhyZW0gMS40cmVtIC0uMnJlbSAjMDAwMTtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6OmJlZm9yZSxcXHJcXG4uc2xpZGVyOjphZnRlcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxyXFxufVxcclxcbi5zbGlkZXI6OmJlZm9yZXtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCMwMDAwIDEwMCUpO1xcclxcbn1cXHJcXG4uc2xpZGVyOjphZnRlcntcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmIDAlLCMwMDAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHVsLmJyYW5kc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXRvdGFsLWxvZ28td2lkdGgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdCAxMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc2xpZGVyOmhvdmVyIHVsLmJyYW5kc3tcXHJcXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgLyAyKSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxudWwuYnJhbmRzIGxpLmJyYW5kLWxvZ297XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtXFxyXFxufVxcclxcblxcclxcbi5za2lsbC1pY29ue1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAvKiBtYXJnaW46IDAgMzBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogV29yayAqL1xcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi50b3AtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZGktaWNvbnN7XFxyXFxuICAgIGhlaWdodDogMS45cmVtO1xcclxcbiAgICB3aWR0aDogMS45cmVtO1xcclxcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG4ubWRpLWljb25zOmhvdmVyLCAubWRpLWljb25zOmFjdGl2ZXtcXHJcXG4gICAgZmlsbDogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstZmlsZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogLjNyZW07XFxyXFxufVxcclxcbi5saW5rLWZpbGUtY29udGFpbmVye1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ubGluay1maWxlLWNvbnRhaW5lciBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtY29udGFpbmVye1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLW5hbWV7XFxyXFxuICAgIC0tc3BhY2luZzogMS4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgLjdmcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoMjUsIDI1LCAyNSwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1hZ2V7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1ib3R0b217XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtIDEuMnJlbTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb2plY3QtZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgKi9cXHJcXG5cXHJcXG4uY29udGFjdC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVye1xcclxcbiAgICAtLXNwYWNpbmctYmlnOiAzcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctYmlnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcXHJcXG57XFxyXFxuICAgIC5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTVlbSlcXHJcXG57XFxyXFxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVye1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29uc3tcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1saW5rc3tcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmRldmljb257XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYS1saW5rc3tcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVye1xcclxcbiAgICAtLXNwYWNpbmctMTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIgaDJ7XFxyXFxuICAgIC0tc3BhY2luZy0yOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjEycmVtO1xcclxcbn1cXHJcXG4ubGVmdC1jb250YWluZXIgLmNvbnRhY3Qtc3VidGl0bGV7XFxyXFxuICAgIC0tc3BhY2luZy0xOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG4uZm9vdGVyLWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNvbXBvbmVudHMgKi9cXHJcXG4ubWVudS1idG57XFxyXFxuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAgXFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMTJweDtcXHJcXG4gICAgICAgIHRvcDogMTNweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1idG4gLmxpbmV7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBcXHJcXG4gICAgICAgICAgICB5IDMwMG1zIGVhc2UtaW4gMzAwbXMsXFxyXFxuICAgICAgICAgICAgcm90YXRlIDMwMG1zIGVhc2UtaW4gLFxcclxcbiAgICAgICAgICAgIG9wYWNpdHkgMG1zIDMwMG1zO1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWJ0bjpob3ZlciAubGluZXtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgICAgIHkgMzAwbXMgZWFzZS1pbixcXHJcXG4gICAgICAgICAgICByb3RhdGUgMzAwbXMgZWFzZS1pbiAzMDBtcyxcXHJcXG4gICAgICAgICAgICBvcGFjaXR5IDBtcyAzMDBtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1idG5bYXJpYS1oaWRkZW4gPVxcXCJmYWxzZVxcXCJdIC50b3BcXHJcXG4gICAge1xcclxcbiAgICAgICAgeTogNDg7XFxyXFxuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWJ0blthcmlhLWhpZGRlbiA9XFxcImZhbHNlXFxcIl0gLm1pZGRsZVxcclxcbiAgICB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWJ0blthcmlhLWhpZGRlbiA9XFxcImZhbHNlXFxcIl0gLmJvdHRvbVxcclxcbiAgICB7XFxyXFxuICAgICAgICB5OiA0ODtcXHJcXG4gICAgICAgIHJvdGF0ZTogLTQ1ZGVnO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWJ0bjpob3ZlciA6aXMoLnRvcCwgLmJvdHRvbSl7XFxyXFxuICAgICAgICB5OiA0ODtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG46aG92ZXIgLnRvcHtcXHJcXG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtYnRuOmhvdmVyIC5ib3R0b217XFxyXFxuICAgICAgICByb3RhdGU6IC00NWRlZztcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1idG46aG92ZXIgLm1pZGRsZXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NWVtKXtcXHJcXG4gICAgICAgIC5tZW51LWJ0bntcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdGlja3l7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjUsIDI1LCAwLjcpO1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsaW5re1xcclxcbiAgICBhbmltYXRpb246IGN1c3RvbUJsaW5rIDJzIGluZmluaXRlIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY3VzdG9tQmxpbmt7XFxyXFxuICAgIDAlLFxcclxcbiAgICA1MCUsXFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDI1JSxcXHJcXG4gICAgNzUle1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlcnMge1xyXG5cclxuICAgIHN0YXRpYyBsb2FkZUhhbmRsZXJzID0gKCkgPT57XHJcbiAgICAgICAgdGhpcy5tZW51QnRuSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZWN0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVySGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbGlkZXJIYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgYnJhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLmJyYW5kc1wiKSxcclxuICAgICAgICB0b3RhbF9icmFuZCA9IGJyYW5kcy5jaGlsZHJlbi5sZW5ndGg7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3RhbC1icmFuZCcsIHRvdGFsX2JyYW5kKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvdGFsX2JyYW5kOyBpKyspe1xyXG4gICAgICAgICAgICBicmFuZHMuYXBwZW5kQ2hpbGQoYnJhbmRzLmNoaWxkcmVuW2ldLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtZW51QnRuSGFuZGxlciA9ICgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICAgICAgaWYobmF2aWdhdGlvblBhZ2UuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUGFnZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBoYW5kbGVyKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuYXZpZ2F0aW9uSGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigoXCJyZXNpemVcIiksICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBpZih3aWR0aCA+IDg4MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjcm9sbFRvU2VjdGlvbiA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xyXG4gICAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5hdmlnYXRpb25TZWN0aW9uSGFuZGxlciA9ICgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBuYXZCdG4gPSAoZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcclxuICAgICAgICBuYXYuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBuYXZCdG4pKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXJ7XHJcbiAgICBzdGF0aWMgbG9hZEZvb3RlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGZOYW1lLCBsTmFtZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGDCqSBDb3B5cmlnaHQgMjAyNCwgJHtmTmFtZX0gJHtsTmFtZX1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGluayA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYW4gT3BlbiBTb3VyY2UgUHJvamVjdFwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZShcIkdhcnlcIiwgXCJMZWlcIikpO1xyXG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKCkpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcntcclxuICAgIHN0YXRpYyBsb2FkSGVhZGVyID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+e1xyXG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxvZ29OYW1lKSA9PntcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9IFwidGl0bGUtbG9nb1wiO1xyXG4gICAgICAgICAgICBib3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48c3Bhbj4ke2xvZ29OYW1lfTwvc3Bhbj48L2E+YDtcclxuICAgICAgICAgICAgcmV0dXJuIGJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgXCJwcmltYXJ5LW5hdmlnYXRpb25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cInZhcigtLWJ1dHRvbi1jb2xvcilcIiBjbGFzcyA9XCJoYW1idXJnZXJcIiB2aWV3Qm94ID1cIjAgMCAxMDAgMTAwXCIgd2lkdGggPVwiNDJcIiBoZWlnaHQgPSBcIjQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3MgPVwibGluZSB0b3BcIiB3aWR0aCA9XCI4MFwiIGhlaWdodD1cIjZcIiB4PVwiMTBcIiB5PVwiMzBcIiByeD1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3MgPVwibGluZSBtaWRkbGVcIiB3aWR0aCA9XCI4MFwiIGhlaWdodD1cIjZcIiB4PVwiMTBcIiB5PVwiNTBcIiByeD1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgY2xhc3MgPVwibGluZSBib3R0b21cIiB3aWR0aCA9XCI4MFwiIGhlaWdodD1cIjZcIiB4PVwiMTBcIiB5PVwiNzBcIiByeD1cIjVcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5gXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJpbWFyeS1uYXZpZ2F0aW9uXCI7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gODgwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5PcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgICAgIHVuT3JkZXJlZExpc3QuY2xhc3NMaXN0LmFkZChcIm5hdi1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGFicyA9IFt7cGFnZTogXCJhYm91dFwiLCBsaW5rOiBcImFib3V0XCJ9LCB7cGFnZTogXCJ3b3JrXCIsIGxpbms6IFwid29ya1wifSwge3BhZ2U6IFwiY29udGFjdFwiLCBsaW5rOiBcImNvbnRhY3RcIn1dXHJcbiAgICAgICAgICAgICAgICAgdGFicy5mb3JFYWNoKChpdGVtKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwibmF2LWxpbmtzXCI+JHtpdGVtLnBhZ2V9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5PcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuT3JkZXJlZExpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RzKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCJHbyBHYXJ5IVwiKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24oKSk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiY29uc3QgcGxvdFNvY2lhbE1lZGlhSWNvbnMgPSAoY2xhc3NOYW1lKSA9PntcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gIGBzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyYDtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWljb25zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ2l0aHViLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tZ2l0aHViLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnR3aXR0ZXIuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtbWVkaWEtbGlua3NcIj48aSBjbGFzcz1cImRldmljb24gZGV2aWNvbi10d2l0dGVyLW9yaWdpbmFsXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInNvY2lhbC1tZWRpYS1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+PGkgY2xhc3M9XCJkZXZpY29uIGRldmljb24tbGlua2VkaW4tcGxhaW5cIj48L2k+PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsb3RTb2NpYWxNZWRpYUljb25zOyIsImltcG9ydCBwbG90U29jaWFsTWVkaWFJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zXCI7XHJcbmltcG9ydCBwcm9maWxlUGljdHVyZSBmcm9tIFwiLi4vaW1hZ2VzL3Byb2ZpbGVQaWN0dXJlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXR7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiLFwiYWJvdXQtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbi5jbGFzc05hbWUgPVwiaW1hZ2VEZXNjcmlwdGlvbi1jb250YWluZXJcIjtcclxuICAgICAgICBpbWFnZURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRoaXMubG9hZEltYWdlKCkpO1xyXG4gICAgICAgIGltYWdlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGhpcy5wZXJzb25hbERlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZURlc2NyaXB0aW9uKTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXJzb25hbERlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IG1lXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiSSBhbSBjdXJyZW50bHkgbGl2aW5nIG9uIHRoZSBiZWF1dGlmdWwgaXNsYW5kIG9mIFRhaXdhbiwgdGVhY2hpbmcgc3R1ZGVudHMgRW5nbGlzaCBhcyB0aGVpciBzZWNvbmQgbGFuZ3VhZ2UuIEluIG15IGZyZWUgdGltZSwgSSBlbmpveSBsb25nIHJ1bnMuIFJ1bm5pbmcgaGVscHMgbWUgcmVmbGVjdCBvbiBsaWZlLCBwcm92aWRpbmcgbWUgd2l0aCB0aGUgdGltZSBhbmQgc3BhY2UgZm9yIGRlZXAgdGhpbmtpbmcuIFdoZW4gSSBhbSBub3QgcnVubmluZywgSSBhbSBjb2RpbmcuIEkgYmVnYW4gY29kaW5nIGluIGhpZ2ggc2Nob29sIGFuZCBjb2xsZWdlLCBidXQgbmV2ZXIgbWFuYWdlZCB0byBmaW5pc2ggd2hhdCBJIHN0YXJ0ZWQuIE5vdywgSSBoYXZlIGRldmVsb3BlZCBhIGtlZW4gaW50ZXJlc3QgaW4gY29tcHV0ZXIgbGFuZ3VhZ2VzIGFuZCBhc3BpcmUgdG8gZGVkaWNhdGUgbXlzZWxmIHRvIGNyZWF0aW5nIGFwcHMsIGhvcGVmdWxseSBjb250cmlidXRpbmcgdG8gdGhlIGNvbW11bml0eS5cIjtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSgpKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24oKSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsb3RTb2NpYWxNZWRpYUljb25zKFwiYWJvdXRcIikpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkSW1hZ2UgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHByb2ZpbGVQaWN0dXJlO1xyXG4gICAgICAgIGltYWdlLmFsdCA9IFwiQSBwb3J0cmFpdCBmb3IgbWVcIjtcclxuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBcInByb2ZpbGUtcGljdHVyZVwiO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxufSIsImNvbnN0IHR5cGVXcml0ZXIgPSAodGl0bGUsIGVsZW1lbnQpID0+e1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRpdGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoaSAhPSB0aXRsZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGUuc2xpY2UoMCwgaSkgKyB0aXRsZS5jaGFyQXQoaSkgKyBgPHNwYW4gY2xhc3M9XCJibGlua1wiPnw8L3NwYW4+YDtcclxuICAgICAgICAgICAgfSwgaSAqIDEwMCArIChNYXRoLnJhbmRvbSgpICogMTAwKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgICAgICAgICB9LCBpICogMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxNTApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbm5lcntcclxuICAgIHN0YXRpYyBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zdWJUZXh0KCkpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJhbm5lckhhbmRsZXJCdG4oKSk7XHJcbiAgICAgICAgfSwgNzAwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBcIkhpLCBteSBuYW1lIGlzIEdhcnlcIjtcclxuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgdGl0bGVUZXh0LmNsYXNzTmFtZSA9IFwiYmFubmVyLXRpdGxlXCI7XHJcblxyXG4gICAgICAgICB0eXBlV3JpdGVyKHRpdGxlLCB0aXRsZVRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGl0bGVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWJUZXh0ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBcIkEgd2ViIGRldmVsb3BlciBhbmQgYW4gRVNMIHRlYWNoZXJcIlxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0eXBlV3JpdGVyXCIsIFwic3VidGl0bGVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHlwZVdyaXRlcihzdWJ0aXRsZSwgdGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYW5uZXJIYW5kbGVyQnRuID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJhbm5lci1idG4tbmF2LWFib3V0XCIpXHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPmFycm93LWRvd24tdGhpY2s8L3RpdGxlPjxwYXRoIGQ9XCJNMTAsNEgxNFYxM0wxNy41LDkuNUwxOS45MiwxMS45MkwxMiwxOS44NEw0LjA4LDExLjkyTDYuNSw5LjVMMTAsMTNWNFpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICBgXHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCBzY3JvbGxUb1NlY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJcclxuLy8gaW1wb3J0IHBob25lIGZyb20gXCIuLi9pbWFnZXMvcGhvbmUuc3ZnXCI7XHJcbmltcG9ydCBwbG90U29jaWFsTWVkaWFJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxNZWRpYUljb25zXCI7XHJcbmltcG9ydCBjb250YWN0SW1nIGZyb20gXCIuLi9pbWFnZXMvY29udGFjdC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3R7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSB7YWRkcmVzczogXCIxMjM0IFNtaXRoIFN0cmVldCBNaWFtaSwgRmxvcmlkYSAzMzE1NlwiLCBwaG9uZTogXCI1NTUtNTU1LTU1NTVcIiwgZW1haWw6IFwiZzEyMzQ1NkBtYWlsLmNvbVwifTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcclxuICBcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHRoaXMudGl0bGUoKSk7XHJcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQoY29udGFjdCkpO1xyXG5cclxuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZCh0aGlzLnBsb3RJbWFnZSgpKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0aXRsZSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IE1lXCI7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwbG90SW1hZ2UgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBjcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltYWdlXCIpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGNvbnRhY3RJbWc7XHJcblxyXG4gICAgICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVEaXY7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnRlbnQgPSAoY29udGFjdCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXN1YnRpdGxlXCIpO1xyXG4gICAgICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZ2V0IGluIHRvdWNoIGlmIHlvdSB0aGluayBvdXIgd29yayBjb3VsZCBiZSBtdXR1YWxseSBiZW5lZmljaWFsLlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBsb3RDb250YWN0SW5mbyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgIGZpbGw9XCIjZmZmXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5tYXAtbWFya2VyLW91dGxpbmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDYuNUEyLjUsMi41IDAgMCwxIDE0LjUsOUEyLjUsMi41IDAgMCwxIDEyLDExLjVBMi41LDIuNSAwIDAsMSA5LjUsOUEyLjUsMi41IDAgMCwxIDEyLDYuNU0xMiwyQTcsNyAwIDAsMSAxOSw5QzE5LDE0LjI1IDEyLDIyIDEyLDIyQzEyLDIyIDUsMTQuMjUgNSw5QTcsNyAwIDAsMSAxMiwyTTEyLDRBNSw1IDAgMCwwIDcsOUM3LDEwIDcsMTIgMTIsMTguNzFDMTcsMTIgMTcsMTAgMTcsOUE1LDUgMCAwLDAgMTIsNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNmZmZcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5waG9uZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjUsMjJDMjAuMzMsMjIgMjEsMjEuMzMgMjEsMjAuNVYxN0MyMSwxNi4xNyAyMC4zMywxNS41IDE5LjUsMTUuNUMxOC4zMywxNS41IDE3LjE4LDE1LjMyIDE2LjA4LDE0Ljk1QzE1LjU1LDE0Ljc4IDE0Ljk3LDE0LjkyIDE0LjU2LDE1LjMyTDEzLjEyLDE2Ljc2QzEwLjY0LDE1LjQxIDguNTcsMTMuMzQgNy4yMywxMC44N0w4LjY2LDkuNDRDOS4wNyw5LjA1IDkuMjIsOC40NyA5LjA0LDcuOTFDOC42OCw2LjgyIDguNSw1LjY3IDguNSw0LjVDOC41LDMuNjcgNy44MywzIDcsM0gzLjVDMi42NywzIDIsMy42NyAyLDQuNUMyLDE0LjE1IDkuODUsMjIgMTkuNSwyMk0zLjUsNEg3QzcuMjgsNCA3LjUsNC4yMiA3LjUsNC41QzcuNSw1Ljc4IDcuNyw3LjAzIDguMDksOC4yMkM4LjE0LDguMzYgOC4xMyw4LjU2IDcuOTcsOC43Mkw2LDEwLjY4QzcuNjUsMTMuOTEgMTAuMDcsMTYuMzMgMTMuMzEsMThMMTUuMjYsMTYuMDNDMTUuNCwxNS44OSAxNS41OSwxNS44NSAxNS43NywxNS45QzE2Ljk3LDE2LjMgMTguMjIsMTYuNSAxOS41LDE2LjVDMTkuNzgsMTYuNSAyMCwxNi43MiAyMCwxN1YyMC41QzIwLDIwLjc4IDE5Ljc4LDIxIDE5LjUsMjFDMTAuNCwyMSAzLDEzLjYgMyw0LjVDMyw0LjIyIDMuMjIsNCAzLjUsNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtjb250YWN0LnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZW1haWwtb3V0bGluZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIgNkMyMiA0LjkgMjEuMSA0IDIwIDRINEMyLjkgNCAyIDQuOSAyIDZWMThDMiAxOS4xIDIuOSAyMCA0IDIwSDIwQzIxLjEgMjAgMjIgMTkuMSAyMiAxOFY2TTIwIDZMMTIgMTFMNCA2SDIwTTIwIDE4SDRWOEwxMiAxM0wyMCA4VjE4WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29udGFjdC5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxvdENvbnRhY3RJbmZvKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbG90U29jaWFsTWVkaWFJY29ucyhcImNvbnRhY3RcIikpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5qcyc7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSBcIi4vYmFubmVyLmpzXCI7XHJcbmltcG9ydCB3b3JrIGZyb20gXCIuL3dvcmsuanNcIjtcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XHJcbmltcG9ydCBza2lsbHMgZnJvbSBcIi4vc2tpbGxzLmpzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IGV2ZW50SGFuZGxlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXZlbnRIYW5kbGVycy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xyXG4gICAgc3RhdGljIGxvYWRQYWdlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlci5sb2FkSGVhZGVyKCkpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sb2FkQ29udGVudCgpKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlci5sb2FkRm9vdGVyKCkpO1xyXG5cclxuICAgICAgICBldmVudEhhbmRsZXJzLmxvYWRlSGFuZGxlcnMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRDb250ZW50ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFubmVyLmxvYWQoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dC5sb2FkKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2tpbGxzLmxvYWQoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh3b3JrLmxvYWQoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0LmxvYWQoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG5cclxuICAgIH1cclxufSIsImNvbnN0IGljb25zID0gW2A8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiI0U0NEQyNlwiIGQ9XCJNMTkuMDM3IDExMy44NzZMOS4wMzIgMS42NjFoMTA5LjkzNmwtMTAuMDE2IDExMi4xOTgtNDUuMDE5IDEyLjQ4elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI0YxNjUyOVwiIGQ9XCJNNjQgMTE2LjhsMzYuMzc4LTEwLjA4NiA4LjU1OS05NS44NzhINjR6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRUJFQkVCXCIgZD1cIk02NCA1Mi40NTVINDUuNzg4TDQ0LjUzIDM4LjM2MUg2NFYyNC41OTlIMjkuNDg5bC4zMyAzLjY5MiAzLjM4MiAzNy45MjdINjR6bTAgMzUuNzQzbC0uMDYxLjAxNy0xNS4zMjctNC4xNC0uOTc5LTEwLjk3NUgzMy44MTZsMS45MjggMjEuNjA5IDI4LjE5MyA3LjgyNi4wNjMtLjAxN3pcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzLjk1MiA1Mi40NTV2MTMuNzYzaDE2Ljk0N2wtMS41OTcgMTcuODQ5LTE1LjM1IDQuMTQzdjE0LjMxOWwyOC4yMTUtNy44Mi4yMDctMi4zMjUgMy4yMzQtMzYuMjMzLjMzNS0zLjY5NmgtMy43MDh6bTAtMjcuODU2djEzLjc2MmgzMy4yNDRsLjI3Ni0zLjA5Mi42MjgtNi45NzguMzI5LTMuNjkyelwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxwYXRoIGZpbGw9XCIjMTMxMzEzXCIgZD1cIk04OS4yMzQgNS44NTZIODEuODVsNy42NzkgOC4zMzN2My45NjdINzMuNzEzdi00LjY0NWg3LjY3OGwtNy42NzgtOC4zMzNWMS4yMDdoMTUuNTIxdjQuNjQ5em0tMTguNjU3IDBoLTcuMzg0bDcuNjc5IDguMzMzdjMuOTY3SDU1LjA1NXYtNC42NDVoNy42NzlsLTcuNjc5LTguMzMzVjEuMjA3aDE1LjUyMnY0LjY0OXptLTE4LjQ3NC4xOWgtNy45Njh2Ny4yNzFoNy45Njh2NC44MzlIMzguNDcxVjEuMjA3aDEzLjYzMnY0LjgzOXpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiMxNTcyQjZcIiBkPVwiTTI3LjYxMyAxMTYuNzA2bC04LjA5Ny05MC44MTNoODguOTY3bC04LjEwNCA5MC43OTgtMzYuNDM0IDEwLjEwMi0zNi4zMzItMTAuMDg3elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzMzQTlEQ1wiIGQ9XCJNNjQuMDAxIDExOS4wNzJsMjkuNDM5LTguMTYyIDYuOTI2LTc3LjU5MUg2NC4wMDF2ODUuNzUzelwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjQgNjYuMjJoMTQuNzM4bDEuMDE5LTExLjQwNUg2NFY0My42NzdoMjcuOTI5bC0uMjY3IDIuOTg4LTIuNzM3IDMwLjY5Mkg2NFY2Ni4yMnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNFQkVCRUJcIiBkPVwiTTY0LjA2NyA5NS4xNDZsLS4wNDkuMDE0LTEyLjQwNC0zLjM1LS43OTQtOC44ODNIMzkuNjQxbDEuNTYxIDE3LjQ4OCAyMi44MTQgNi4zMzMuMDUyLS4wMTVWOTUuMTQ2elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNzcuNzkyIDc2Ljg4Nkw3Ni40NSA5MS44MDJsLTEyLjQyMiAzLjM1M3YxMS41ODhsMjIuODMzLTYuMzI4LjE2OC0xLjg4MiAxLjkzOC0yMS42NDdINzcuNzkyelwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI0VCRUJFQlwiIGQ9XCJNNjQuMDM5IDQzLjY3N3YxMS4xMzdIMzcuMTM2bC0uMjI0LTIuNTAzLS41MDctNS42NDYtLjI2Ny0yLjk4OGgyNy45MDF6TTY0IDY2LjIyMXYxMS4xMzhINTEuNzUzbC0uMjIzLTIuNTAzLS41MDgtNS42NDctLjI2Ny0yLjk4OEg2NHpcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiI0YwREI0RlwiIGQ9XCJNMS40MDggMS40MDhoMTI1LjE4NHYxMjUuMTg1SDEuNDA4elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiIzMyMzMzMFwiIGQ9XCJNMTE2LjM0NyA5Ni43MzZjLS45MTctNS43MTEtNC42NDEtMTAuNTA4LTE1LjY3Mi0xNC45ODEtMy44MzItMS43NjEtOC4xMDQtMy4wMjItOS4zNzctNS45MjYtLjQ1Mi0xLjY5LS41MTItMi42NDItLjIyNi0zLjY2NS44MjEtMy4zMiA0Ljc4NC00LjM1NSA3LjkyNS0zLjQwMyAyLjAyMy42NzggMy45MzggMi4yMzcgNS4wOTMgNC43MjQgNS40MDItMy40OTggNS4zOTEtMy40NzUgOS4xNjMtNS44NzktMS4zODEtMi4xNDEtMi4xMTgtMy4xMjktMy4wMjItNC4wNDUtMy4yNDktMy42MjktNy42NzYtNS40OTgtMTQuNzU2LTUuMzU1bC0zLjY4OC40NzdjLTMuNTM0Ljg5My02LjkwMiAyLjc0OC04Ljg3NyA1LjIzNS01LjkyNiA2LjcyNC00LjIzNiAxOC40OTIgMi45NzUgMjMuMzM1IDcuMTA0IDUuMzMyIDE3LjU0IDYuNTQ1IDE4Ljg3MyAxMS41MzEgMS4yOTcgNi4xMDQtNC40ODYgOC4wOC0xMC4yMzQgNy4zNzgtNC4yMzYtLjg4MS02LjU5Mi0zLjAzNC05LjEzOS02Ljk0OS00LjY4OCAyLjcxMy00LjY4OCAyLjcxMy05LjUwOCA1LjQ4NSAxLjE0MyAyLjQ5OSAyLjM0NCAzLjYzIDQuMjYgNS43OTUgOS4wNjggOS4xOTggMzEuNzYgOC43NDYgMzUuODMtNS4xNzYuMTY1LS40NzggMS4yNjEtMy42NjYuMzgtOC41ODF6TTY5LjQ2MiA1OC45NDNINTcuNzUzbC0uMDQ4IDMwLjI3MmMwIDYuNDM4LjMzMyAxMi4zNC0uNzE0IDE0LjE0OS0xLjcxMyAzLjU1OC02LjE1MiAzLjExNy04LjE3NSAyLjQyNy0yLjA1OS0xLjAxMi0zLjEwNi0yLjQ1MS00LjMxOS00LjQ4NS0uMzMzLS41ODQtLjU4My0xLjAzNi0uNjY3LTEuMDcxbC05LjUyIDUuODNjMS41ODMgMy4yNDkgMy45MTUgNi4wNjkgNi45MDIgNy45MDEgNC40NjIgMi42NzggMTAuNDU5IDMuNDk5IDE2LjczMSAyLjA1OSA0LjA4Mi0xLjE4OSA3LjYwNC0zLjY1MiA5LjQ0OC03LjQwMSAyLjY2Ni00LjkxNSAyLjA5NC0xMC44NjQgMi4wNy0xNy40NDQuMDYtMTAuNzM1LjAwMS0yMS40NjguMDAxLTMyLjIzN3pcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48ZyBmaWxsPVwiIzYxREFGQlwiPjxjaXJjbGUgY3g9XCI2NFwiIGN5PVwiNjRcIiByPVwiMTEuNFwiPjwvY2lyY2xlPjxwYXRoIGQ9XCJNMTA3LjMgNDUuMmMtMi4yLS44LTQuNS0xLjYtNi45LTIuMy42LTIuNCAxLjEtNC44IDEuNS03LjEgMi4xLTEzLjItLjItMjIuNS02LjYtMjYuMS0xLjktMS4xLTQtMS42LTYuNC0xLjYtNyAwLTE1LjkgNS4yLTI0LjkgMTMuOS05LTguNy0xNy45LTEzLjktMjQuOS0xMy45LTIuNCAwLTQuNS41LTYuNCAxLjYtNi40IDMuNy04LjcgMTMtNi42IDI2LjEuNCAyLjMuOSA0LjcgMS41IDcuMS0yLjQuNy00LjcgMS40LTYuOSAyLjNDOC4yIDUwIDEuNCA1Ni42IDEuNCA2NHM2LjkgMTQgMTkuMyAxOC44YzIuMi44IDQuNSAxLjYgNi45IDIuMy0uNiAyLjQtMS4xIDQuOC0xLjUgNy4xLTIuMSAxMy4yLjIgMjIuNSA2LjYgMjYuMSAxLjkgMS4xIDQgMS42IDYuNCAxLjYgNy4xIDAgMTYtNS4yIDI0LjktMTMuOSA5IDguNyAxNy45IDEzLjkgMjQuOSAxMy45IDIuNCAwIDQuNS0uNSA2LjQtMS42IDYuNC0zLjcgOC43LTEzIDYuNi0yNi4xLS40LTIuMy0uOS00LjctMS41LTcuMSAyLjQtLjcgNC43LTEuNCA2LjktMi4zIDEyLjUtNC44IDE5LjMtMTEuNCAxOS4zLTE4LjhzLTYuOC0xNC0xOS4zLTE4Ljh6TTkyLjUgMTQuN2M0LjEgMi40IDUuNSA5LjggMy44IDIwLjMtLjMgMi4xLS44IDQuMy0xLjQgNi42LTUuMi0xLjItMTAuNy0yLTE2LjUtMi41LTMuNC00LjgtNi45LTkuMS0xMC40LTEzIDcuNC03LjMgMTQuOS0xMi4zIDIxLTEyLjMgMS4zIDAgMi41LjMgMy41Ljl6TTgxLjMgNzRjLTEuOCAzLjItMy45IDYuNC02LjEgOS42LTMuNy4zLTcuNC40LTExLjIuNC0zLjkgMC03LjYtLjEtMTEuMi0uNC0yLjItMy4yLTQuMi02LjQtNi05LjYtMS45LTMuMy0zLjctNi43LTUuMy0xMCAxLjYtMy4zIDMuNC02LjcgNS4zLTEwIDEuOC0zLjIgMy45LTYuNCA2LjEtOS42IDMuNy0uMyA3LjQtLjQgMTEuMi0uNCAzLjkgMCA3LjYuMSAxMS4yLjQgMi4yIDMuMiA0LjIgNi40IDYgOS42IDEuOSAzLjMgMy43IDYuNyA1LjMgMTAtMS43IDMuMy0zLjQgNi42LTUuMyAxMHptOC4zLTMuM2MxLjUgMy41IDIuNyA2LjkgMy44IDEwLjMtMy40LjgtNyAxLjQtMTAuOCAxLjkgMS4yLTEuOSAyLjUtMy45IDMuNi02IDEuMi0yLjEgMi4zLTQuMiAzLjQtNi4yek02NCA5Ny44Yy0yLjQtMi42LTQuNy01LjQtNi45LTguMyAyLjMuMSA0LjYuMiA2LjkuMiAyLjMgMCA0LjYtLjEgNi45LS4yLTIuMiAyLjktNC41IDUuNy02LjkgOC4zem0tMTguNi0xNWMtMy44LS41LTcuNC0xLjEtMTAuOC0xLjkgMS4xLTMuMyAyLjMtNi44IDMuOC0xMC4zIDEuMSAyIDIuMiA0LjEgMy40IDYuMSAxLjIgMi4yIDIuNCA0LjEgMy42IDYuMXptLTctMjUuNWMtMS41LTMuNS0yLjctNi45LTMuOC0xMC4zIDMuNC0uOCA3LTEuNCAxMC44LTEuOS0xLjIgMS45LTIuNSAzLjktMy42IDYtMS4yIDIuMS0yLjMgNC4yLTMuNCA2LjJ6TTY0IDMwLjJjMi40IDIuNiA0LjcgNS40IDYuOSA4LjMtMi4zLS4xLTQuNi0uMi02LjktLjItMi4zIDAtNC42LjEtNi45LjIgMi4yLTIuOSA0LjUtNS43IDYuOS04LjN6bTIyLjIgMjFsLTMuNi02YzMuOC41IDcuNCAxLjEgMTAuOCAxLjktMS4xIDMuMy0yLjMgNi44LTMuOCAxMC4zLTEuMS0yLjEtMi4yLTQuMi0zLjQtNi4yek0zMS43IDM1Yy0xLjctMTAuNS0uMy0xNy45IDMuOC0yMC4zIDEtLjYgMi4yLS45IDMuNS0uOSA2IDAgMTMuNSA0LjkgMjEgMTIuMy0zLjUgMy44LTcgOC4yLTEwLjQgMTMtNS44LjUtMTEuMyAxLjQtMTYuNSAyLjUtLjYtMi4zLTEtNC41LTEuNC02LjZ6TTcgNjRjMC00LjcgNS43LTkuNyAxNS43LTEzLjQgMi0uOCA0LjItMS41IDYuNC0yLjEgMS42IDUgMy42IDEwLjMgNiAxNS42LTIuNCA1LjMtNC41IDEwLjUtNiAxNS41QzE1LjMgNzUuNiA3IDY5LjYgNyA2NHptMjguNSA0OS4zYy00LjEtMi40LTUuNS05LjgtMy44LTIwLjMuMy0yLjEuOC00LjMgMS40LTYuNiA1LjIgMS4yIDEwLjcgMiAxNi41IDIuNSAzLjQgNC44IDYuOSA5LjEgMTAuNCAxMy03LjQgNy4zLTE0LjkgMTIuMy0yMSAxMi4zLTEuMyAwLTIuNS0uMy0zLjUtLjl6TTk2LjMgOTNjMS43IDEwLjUuMyAxNy45LTMuOCAyMC4zLTEgLjYtMi4yLjktMy41LjktNiAwLTEzLjUtNC45LTIxLTEyLjMgMy41LTMuOCA3LTguMiAxMC40LTEzIDUuOC0uNSAxMS4zLTEuNCAxNi41LTIuNS42IDIuMyAxIDQuNSAxLjQgNi42em05LTE1LjZjLTIgLjgtNC4yIDEuNS02LjQgMi4xLTEuNi01LTMuNi0xMC4zLTYtMTUuNiAyLjQtNS4zIDQuNS0xMC41IDYtMTUuNSAxMy44IDQgMjIuMSAxMCAyMi4xIDE1LjYgMCA0LjctNS44IDkuNy0xNS43IDEzLjR6XCI+PC9wYXRoPjwvZz5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImFcIiB4MT1cIjc2LjA3OVwiIHgyPVwiNTIzLjQ4XCIgeTE9XCIxMC43OThcIiB5Mj1cIjM2NS45NVwiIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMTEgMTQuNjEzKSBzY2FsZSguMjQ1NjYpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjOTAxM2ZlXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzY2MTBmMlwiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD1cImJcIiB4MT1cIjE5My41MVwiIHgyPVwiMjkzLjUxXCIgeTE9XCIxMDkuNzRcIiB5Mj1cIjI3OC44N1wiIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNTIpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZmZmXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2YxZTVmY1wiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9XCJjXCIgd2lkdGg9XCIxOTdcIiBoZWlnaHQ9XCIyNDlcIiB4PVwiMTYxLjlcIiB5PVwiMTM1LjQ2XCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiPjwvZmVGbG9vZD48ZmVDb2xvck1hdHJpeCBpbj1cIlNvdXJjZUFscGhhXCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDBcIj48L2ZlQ29sb3JNYXRyaXg+PGZlT2Zmc2V0IGR5PVwiNFwiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjhcIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUNvbG9yTWF0cml4IHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMFwiPjwvZmVDb2xvck1hdHJpeD48ZmVCbGVuZCBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJlZmZlY3QxX2Ryb3BTaGFkb3dcIj48L2ZlQmxlbmQ+PGZlQmxlbmQgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZWZmZWN0MV9kcm9wU2hhZG93XCIgcmVzdWx0PVwic2hhcGVcIj48L2ZlQmxlbmQ+PC9maWx0ZXI+PC9kZWZzPjxwYXRoIGZpbGw9XCJ1cmwoI2EpXCIgZD1cIk0xNC45ODUgMjcuNzEyYy0uMjM3LTYuODE1IDUuMDcyLTEzLjA5OSAxMi4yNDktMTMuMDk5aDczLjU0YzcuMTc3IDAgMTIuNDg2IDYuMjg0IDEyLjI0OSAxMy4wOTktLjIyOCA2LjU0Ni4wNjggMTUuMDI2IDIuMjAyIDIxLjk0IDIuMTQxIDYuOTM2IDUuNzUxIDExLjMxOSAxMS42NjQgMTEuODgzdjYuMzg3Yy01LjkxMy41NjQtOS41MjMgNC45NDctMTEuNjY0IDExLjg4My0yLjEzNCA2LjkxNC0yLjQzIDE1LjM5NC0yLjIwMiAyMS45NC4yMzcgNi44MTUtNS4wNzIgMTMuMDk4LTEyLjI0OSAxMy4wOThoLTczLjU0Yy03LjE3NyAwLTEyLjQ4Ni02LjI4NC0xMi4yNDktMTMuMDk4LjIyOC02LjU0Ni0uMDY4LTE1LjAyNi0yLjIwMy0yMS45NC0yLjE0LTYuOTM1LTUuNzYtMTEuMzE5LTExLjY3My0xMS44ODN2LTYuMzg3YzUuOTEzLS41NjMgOS41MzMtNC45NDcgMTEuNjczLTExLjg4MyAyLjEzNS02LjkxNCAyLjQzLTE1LjM5NCAyLjIwMy0yMS45NHpcIj48L3BhdGg+PHBhdGggZmlsbD1cInVybCgjYilcIiBkPVwiTTI2Ny4xIDM2NC40NmM0Ny4yOTcgMCA3NS43OTgtMjMuMTU4IDc1Ljc5OC02MS4zNTUgMC0yOC44NzMtMjAuMzM2LTQ5Ljc3Ni01MC41MzItNTMuMDg1di0xLjIwM2MyMi4xODUtMy42MDkgMzkuNTk0LTI0LjIxMSAzOS41OTQtNDcuMjE5IDAtMzIuNzgzLTI1Ljg4Mi01NC4xMzgtNjUuMzIyLTU0LjEzOGgtODguNzR2MjE3em0tNTQuNjkyLTE4OS40OGg0NS45MTFjMjQuOTU4IDAgMzkuMTMxIDExLjEyOCAzOS4xMzEgMzEuMjc5IDAgMjEuNTA1LTE2LjQ4NCAzMy41MzUtNDYuMzcyIDMzLjUzNWgtMzguNjd6bTAgMTYxLjk2di03MS40MzFoNDUuNjAyYzMyLjY2MSAwIDQ5LjYwOCAxMi4wMyA0OS42MDggMzUuNDkgMCAyMy40NTktMTYuNDg0IDM1Ljk0MS00Ny42MDUgMzUuOTQxelwiIGZpbHRlcj1cInVybCgjYylcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS40OTQgMi4yMDMpIHNjYWxlKC4yNDU2NilcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiIzBhY2Y4M1wiIGQ9XCJNNDUuNSAxMjljMTEuOSAwIDIxLjUtOS42IDIxLjUtMjEuNVY4Nkg0NS41QzMzLjYgODYgMjQgOTUuNiAyNCAxMDcuNVMzMy42IDEyOSA0NS41IDEyOXptMCAwXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjYTI1OWZmXCIgZD1cIk0yNCA2NC41QzI0IDUyLjYgMzMuNiA0MyA0NS41IDQzSDY3djQzSDQ1LjVDMzMuNiA4NiAyNCA3Ni40IDI0IDY0LjV6bTAgMFwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2YyNGUxZVwiIGQ9XCJNMjQgMjEuNUMyNCA5LjYgMzMuNiAwIDQ1LjUgMEg2N3Y0M0g0NS41QzMzLjYgNDMgMjQgMzMuNCAyNCAyMS41em0wIDBcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZjcyNjJcIiBkPVwiTTY3IDBoMjEuNUMxMDAuNCAwIDExMCA5LjYgMTEwIDIxLjVTMTAwLjQgNDMgODguNSA0M0g2N3ptMCAwXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjMWFiY2ZlXCIgZD1cIk0xMTAgNjQuNWMwIDExLjktOS42IDIxLjUtMjEuNSAyMS41UzY3IDc2LjQgNjcgNjQuNSA3Ni42IDQzIDg4LjUgNDMgMTEwIDUyLjYgMTEwIDY0LjV6bTAgMFwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuYDxzdmcgY2xhc3M9XCJza2lsbC1pY29uXCIgdmlld0JveD1cIjAgMCAxMjggMTI4XCI+XHJcbjxnIGZpbGw9XCIjMTgxNjE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTY0IDEuNTEyYy0yMy40OTMgMC00Mi41NDUgMTkuMDQ3LTQyLjU0NSA0Mi41NDUgMCAxOC43OTcgMTIuMTkgMzQuNzQ1IDI5LjA5NSA0MC4zNyAyLjEyNi4zOTQgMi45MDctLjkyMyAyLjkwNy0yLjA0NyAwLTEuMDE0LS4wNC00LjM2Ni0uMDU4LTcuOTItMTEuODM3IDIuNTczLTE0LjMzNC01LjAyLTE0LjMzNC01LjAyLTEuOTM1LTQuOTE4LTQuNzI0LTYuMjI2LTQuNzI0LTYuMjI2LTMuODYtMi42NC4yOS0yLjU4Ni4yOS0yLjU4NiA0LjI3My4zIDYuNTIzIDQuMzg1IDYuNTIzIDQuMzg1IDMuNzk0IDYuNTA0IDkuOTUzIDQuNjIzIDEyLjM4IDMuNTM2LjM4My0yLjc1IDEuNDg1LTQuNjI4IDIuNzAyLTUuNjktOS40NS0xLjA3NS0xOS4zODQtNC43MjQtMTkuMzg0LTIxLjAyNiAwLTQuNjQ1IDEuNjYyLTguNDQgNC4zODQtMTEuNDItLjQ0Mi0xLjA3Mi0xLjg5OC01LjQuNDEyLTExLjI2IDAgMCAzLjU3Mi0xLjE0MiAxMS43IDQuMzYzIDMuMzk1LS45NDMgNy4wMzUtMS40MTYgMTAuNjUtMS40MzIgMy42MTYuMDE3IDcuMjU4LjQ5IDEwLjY1OCAxLjQzMiA4LjEyLTUuNTA0IDExLjY4OC00LjM2MiAxMS42ODgtNC4zNjIgMi4zMTYgNS44Ni44NiAxMC4xODcuNDE4IDExLjI2IDIuNzI4IDIuOTc4IDQuMzc4IDYuNzc0IDQuMzc4IDExLjQyIDAgMTYuMzQtOS45NTMgMTkuOTM4LTE5LjQyNyAyMC45OSAxLjUyNiAxLjMyIDIuODg2IDMuOTEgMi44ODYgNy44OCAwIDUuNjkyLS4wNDggMTAuMjczLS4wNDggMTEuNjc0IDAgMS4xMy43NjYgMi40NTggMi45MjIgMi4wNCAxNi44OTYtNS42MzIgMjkuMDctMjEuNTc0IDI5LjA3LTQwLjM2NUMxMDYuNTQ1IDIwLjU2IDg3LjQ5NyAxLjUxMiA2NCAxLjUxMnpcIj48L3BhdGg+PHBhdGggZD1cIk0zNy41NyA2Mi41OTZjLS4wOTUuMjEyLS40MjguMjc1LS43My4xMy0uMzEtLjE0LS40ODItLjQyNy0uMzgyLS42NC4wOS0uMjE2LjQyNC0uMjc3LjczMy0uMTMyLjMxLjE0LjQ4Ni40My4zOC42NDJ6TTM5LjI5MyA2NC41MmMtLjIwMy4xODctLjYuMS0uODctLjE5OC0uMjc4LS4yOTctLjMzLS42OTQtLjEyNC0uODg0LjIwOC0uMTg4LjU5My0uMS44Ny4xOTcuMjguMy4zMzUuNjkzLjEyMy44ODR6bTEuNjc3IDIuNDQ4Yy0uMjYuMTgyLS42ODcuMDEyLS45NS0uMzY3LS4yNjItLjM3Ny0uMjYyLS44My4wMDUtMS4wMTMuMjY0LS4xODIuNjg0LS4wMTguOTUuMzU3LjI2Mi4zODUuMjYyLjg0LS4wMDUgMS4wMjR6bTIuMjk4IDIuMzY4Yy0uMjMzLjI1Ny0uNzMuMTg4LTEuMDkzLS4xNjMtLjM3Mi0uMzQzLS40NzUtLjgzLS4yNDItMS4wODcuMjM3LS4yNTcuNzM2LS4xODUgMS4xMDIuMTYzLjM3LjM0Mi40ODIuODMuMjMzIDEuMDg2em0zLjE3MiAxLjM3NGMtLjEwNC4zMzQtLjU4Mi40ODUtMS4wNjQuMzQ0LS40ODItLjE0Ni0uNzk2LS41MzYtLjctLjg3Mi4xLS4zMzYuNTgyLS40OTMgMS4wNjctLjM0Mi40OC4xNDQuNzk1LjUzLjY5Ni44N3ptMy40OC4yNTVjLjAxMy4zNS0uMzk2LjY0Mi0uOTAyLjY0OC0uNTA4LjAxMi0uOTItLjI3Mi0uOTI2LS42MTggMC0uMzU0LjQtLjY0Mi45MDgtLjY1LjUwNi0uMDEuOTIuMjcyLjkyLjYyem0zLjI0LS41NTFjLjA2LjM0Mi0uMjkuNjk0LS43OTMuNzg3LS40OTQuMDkyLS45NS0uMTItMS4wMTQtLjQ2LS4wNi0uMzUuMjk3LS43Ljc5LS43OTIuNTAzLS4wODguOTUzLjExOCAxLjAxNy40NjZ6bTAgMFwiPjwvcGF0aD48L2c+PHBhdGggZD1cIk0yNC44NTUgMTA4LjMwMmgtMTAuN2EuNS41IDAgMDAtLjUuNXY1LjIzMmEuNS41IDAgMDAuNS41aDQuMTczdjYuNXMtLjkzNy4zMi0zLjUzLjMyYy0zLjA1NiAwLTcuMzI3LTEuMTE2LTcuMzI3LTEwLjUwOCAwLTkuMzkzIDQuNDQ4LTEwLjYzIDguNjI0LTEwLjYzIDMuNjE0IDAgNS4xNy42MzYgNi4xNjIuOTQzLjMxLjA5NC42LS4yMTYuNi0uNDkybDEuMTkzLTUuMDU1YS40NjguNDY4IDAgMDAtLjE5Mi0uMzljLS40MDMtLjI4OC0yLjg1Ny0xLjY2LTkuMDU4LTEuNjYtNy4xNDQgMC0xNC40NzIgMy4wMzgtMTQuNDcyIDE3LjY1IDAgMTQuNjEgOC4zOSAxNi43ODcgMTUuNDYgMTYuNzg3IDUuODU0IDAgOS40MDUtMi41MDIgOS40MDUtMi41MDIuMTQ2LS4wOC4xNjItLjI4NS4xNjItLjM4di0xNi4zMTZhLjUuNSAwIDAwLS41LS41ek03OS41MDYgOTQuODFINzMuNDhhLjUuNSAwIDAwLS40OTguNTAzbC4wMDIgMTEuNjQ0aC05LjM5MlY5NS4zMTNhLjUuNSAwIDAwLS40OTctLjUwM0g1Ny4wN2EuNS41IDAgMDAtLjQ5OC41MDN2MzEuNTNjMCAuMjc3LjIyNC41MDMuNDk4LjUwM2g2LjAyNWEuNS41IDAgMDAuNDk3LS41MDR2LTEzLjQ4Nmg5LjM5MmwtLjAxNiAxMy40ODZjMCAuMjc4LjIyNC41MDQuNS41MDRoNi4wMzhhLjUuNSAwIDAwLjQ5Ny0uNTA0di0zMS41M2EuNDk3LjQ5NyAwIDAwLS40OTctLjUwMnptLTQ3LjE2Ni43MTdjLTIuMTQ0IDAtMy44ODQgMS43NTMtMy44ODQgMy45MjMgMCAyLjE2NyAxLjc0IDMuOTI1IDMuODg0IDMuOTI1IDIuMTQ2IDAgMy44ODUtMS43NTggMy44ODUtMy45MjUgMC0yLjE3LTEuNzQtMy45MjMtMy44ODUtMy45MjN6bTIuOTU2IDkuNjA4SDI5LjI5Yy0uMjc2IDAtLjUyMi4yODQtLjUyMi41NnYyMC44NTJjMCAuNjEzLjM4Mi43OTUuODc2Ljc5NWg1LjQxYy41OTUgMCAuNzQtLjI5Mi43NC0uODA1di0yMC44OTlhLjUuNSAwIDAwLS40OTgtLjUwMnptNjcuNjA2LjA0N2gtNS45OGEuNS41IDAgMDAtLjQ5Ni41MDR2MTUuNDZzLTEuNTIgMS4xMS0zLjY3NSAxLjExLTIuNzI3LS45NzctMi43MjctMy4wODh2LTEzLjQ4MmEuNS41IDAgMDAtLjQ5Ny0uNTA0aC02LjA2OGEuNTAyLjUwMiAwIDAwLS40OTguNTA0djE0LjUwMmMwIDYuMjcgMy40OTUgNy44MDQgOC4zMDIgNy44MDQgMy45NDQgMCA3LjEyNC0yLjE4IDcuMTI0LTIuMThzLjE1IDEuMTUuMjIgMS4yODVjLjA3LjEzNi4yNDcuMjczLjQ0LjI3M2wzLjg2LS4wMTdhLjUwMi41MDIgMCAwMC41LS41MDRsLS4wMDMtMjEuMTY2YS41MDQuNTA0IDAgMDAtLjUtLjUwMnptMTYuMzQyLS43MDhjLTMuMzk2IDAtNS43MDYgMS41MTUtNS43MDYgMS41MTVWOTUuMzEyYS41LjUgMCAwMC0uNDk3LS41MDNIMTA3YS41LjUgMCAwMC0uNS41MDN2MzEuNTNhLjUuNSAwIDAwLjUuNTAzaDQuMTkyYy4xOSAwIC4zMzItLjA5Ny40MzctLjI2OC4xMDMtLjE3LjI1NC0xLjQ1NC4yNTQtMS40NTRzMi40NyAyLjM0IDcuMTQ4IDIuMzRjNS40OSAwIDguNjQtMi43ODQgOC42NC0xMi41MDJzLTUuMDMtMTAuOTg4LTguNDI4LTEwLjk4OHptLTIuMzYgMTcuNzY0Yy0yLjA3My0uMDYzLTMuNDgtMS4wMDQtMy40OC0xLjAwNHYtOS45ODVzMS4zODgtLjg1IDMuMDktMS4wMDRjMi4xNTMtLjE5MyA0LjIyOC40NTggNC4yMjggNS41OTQgMCA1LjQxNy0uOTM1IDYuNDg2LTMuODM3IDYuMzk4em0tNjMuNjg5LS4xMThjLS4yNjMgMC0uOTM3LjEwNy0xLjYzLjEwNy0yLjIyIDAtMi45NzMtMS4wMzItMi45NzMtMi4zNjh2LTguODY2aDQuNTJhLjUuNSAwIDAwLjUtLjUwNHYtNC44NTZhLjUuNSAwIDAwLS41LS41MDJoLTQuNTJsLS4wMDctNS45N2MwLS4yMjctLjExNi0uMzQtLjM3OC0uMzRoLTYuMTZjLS4yMzggMC0uMzY3LjEwNi0uMzY3LjMzNXY2LjE3cy0zLjA4Ny43NDUtMy4yOTUuODA1YS41LjUgMCAwMC0uMzYuNDh2My44NzdhLjUuNSAwIDAwLjQ5Ny41MDNoMy4xNTh2OS4zMjhjMCA2LjkzIDQuODYgNy42MSA4LjE0IDcuNjEgMS40OTcgMCAzLjI5LS40OCAzLjU4Ni0uNTkuMTgtLjA2Ny4yODMtLjI1Mi4yODMtLjQ1M2wuMDA0LTQuMjY1YS41MS41MSAwIDAwLS41LS41MDJ6XCIgZmlsbD1cIiMxMDBFMEZcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwidXJsKCNhKVwiIGQ9XCJNMCA2NGMwIDE4LjU5MyAyOC42NTQgMzMuNjY3IDY0IDMzLjY2NyAzNS4zNDYgMCA2NC0xNS4wNzQgNjQtMzMuNjY3IDAtMTguNTkzLTI4LjY1NS0zMy42NjctNjQtMzMuNjY3QzI4LjY1NCAzMC4zMzMgMCA0NS40MDcgMCA2NFpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiM3NzdiYjNcIiBkPVwiTTY0IDk1LjE2N2MzMy45NjUgMCA2MS41LTEzLjk1NSA2MS41LTMxLjE2NyAwLTE3LjIxNC0yNy41MzUtMzEuMTY3LTYxLjUtMzEuMTY3UzIuNSA0Ni43ODYgMi41IDY0YzAgMTcuMjEyIDI3LjUzNSAzMS4xNjcgNjEuNSAzMS4xNjdaXCI+PC9wYXRoPjxwYXRoIGQ9XCJNMzQuNzcyIDY3Ljg2NGMyLjc5MyAwIDQuODc3LS41MTUgNi4xOTYtMS41MyAxLjMwNi0xLjAwNiAyLjIwNy0yLjc0NyAyLjY4LTUuMTc1LjQ0LTIuMjcuMjcyLTMuODU0LS41LTQuNzEtLjc4OC0uODc0LTIuNDkzLTEuMzE3LTUuMDY3LTEuMzE3aC00LjQ2NGwtMi40NzMgMTIuNzMyek0yMC4xNzMgODMuNTQ3YS42OTQuNjk0IDAgMCAxLS42OC0uODI4bDYuNTU3LTMzLjczOGEuNjk1LjY5NSAwIDAgMSAuNjgtLjU2MWgxNC4xMzRjNC40NDIgMCA3Ljc0OCAxLjIwNiA5LjgyNyAzLjU4NSAyLjA4OCAyLjM5IDIuNzM0IDUuNzM0IDEuOTE3IDkuOTM1LS4zMzMgMS43MTEtLjkwNSAzLjMtMS43IDQuNzI0YTE1LjgxOCAxNS44MTggMCAwIDEtMy4xMjggMy45MmMtMS41MzEgMS40MzItMy4yNjQgMi40NzItNS4xNDcgMy4wODMtMS44NTIuNjA0LTQuMjMyLjkxLTcuMDcuOTFoLTUuNzI0bC0xLjYzNCA4LjQwOGEuNjk1LjY5NSAwIDAgMS0uNjgyLjU2MnpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTM0LjE5IDU1LjgyNmgzLjg5MWMzLjEwNyAwIDQuMTg2LjY4MiA0LjU1MyAxLjA4OS42MDcuNjc0LjcyMyAyLjA5Ny4zMzEgNC4xMTItLjQzOSAyLjI1Ny0xLjI1MyAzLjg1OC0yLjQyIDQuNzU2LTEuMTk0LjkyLTMuMTM4IDEuMzg2LTUuNzczIDEuMzg2aC0yLjc4NmwyLjIwNS0xMS4zNDJ6bTYuNjc0LTguMUgyNi43MzFhMS4zOSAxLjM5IDAgMCAwLTEuMzY0IDEuMTIzTDE4LjgxIDgyLjU4OGExLjM5IDEuMzkgMCAwIDAgMS4zNjMgMS42NTNoNy4zNWExLjM5IDEuMzkgMCAwIDAgMS4zNjMtMS4xMjRsMS41MjUtNy44NDZoNS4xNTFjMi45MTIgMCA1LjM2NC0uMzE4IDcuMjg3LS45NDQgMS45NzctLjY0MiAzLjc5Ni0xLjczMSA1LjQwNi0zLjIzN2ExNi41MjIgMTYuNTIyIDAgMCAwIDMuMjU5LTQuMDg3Yy44MzEtMS40ODcgMS40MjktMy4xNDcgMS43NzUtNC45MzEuODYtNC40MjMuMTYxLTcuOTY0LTIuMDc2LTEwLjUyNC0yLjIxNi0yLjUzNy01LjY5OC0zLjgyMy0xMC4zNDktMy44MjN6TTMwLjMwMSA2OC41NTdoNC40NzFjMi45NjMgMCA1LjE3LS41NTcgNi42Mi0xLjY3NSAxLjQ1MS0xLjExNiAyLjQyOC0yLjk4IDIuOTM4LTUuNTkxLjQ4NS0yLjUwOC4yNjQtNC4yNzctLjY2NS01LjMwOC0uOTMxLTEuMDMtMi43OTEtMS41NDYtNS41ODQtMS41NDZoLTUuMDM2bC0yLjc0MyAxNC4xMm0xMC41NjMtMTkuNDQ1YzQuMjUyIDAgNy4zNTMgMS4xMTcgOS4zMDMgMy4zNDggMS45NSAyLjIzMiAyLjUzNiA1LjM0NyAxLjc2IDkuMzQ2LS4zMjIgMS42NDgtLjg2MyAzLjE1NC0xLjYyNSA0LjUxOC0uNzY0IDEuMzY2LTEuNzYgMi42MTQtMi45OTEgMy43NDctMS40NjggMS4zNzMtMy4wOTcgMi4zNTItNC44OTIgMi45MzUtMS43OTQuNTg0LTQuMDguODc1LTYuODU3Ljg3NWgtNi4yOTZsLTEuNzQzIDguOTdoLTcuMzVsNi41NTgtMzMuNzM5aDE0LjEzM1wiPjwvcGF0aD48cGF0aCBkPVwiTTY5LjQ1OSA3NC41NzdhLjY5NC42OTQgMCAwIDEtLjY4Mi0uODI3bDIuOS0xNC45MjhjLjI3Ny0xLjQyLjIwOS0yLjQzOC0uMTktMi44Ny0uMjQ1LS4yNjMtLjk3OS0uNzA0LTMuMTUtLjcwNGgtNS4yNTZsLTMuNjQ2IDE4Ljc2OGEuNjk1LjY5NSAwIDAgMS0uNjgzLjU2aC03LjI5YS42OTUuNjk1IDAgMCAxLS42ODMtLjgyNmw2LjU1OC0zMy43MzlhLjY5NS42OTUgMCAwIDEgLjY4Mi0uNTYxaDcuMjlhLjY5NS42OTUgMCAwIDEgLjY4My44MjZMNjQuNDEgNDguNDJoNS42NTNjNC4zMDcgMCA3LjIyNy43NTggOC45MjggMi4zMjEgMS43MzMgMS41OTMgMi4yNzUgNC4xNCAxLjYwOCA3LjU3M2wtMy4wNTEgMTUuNzAyYS42OTUuNjk1IDAgMCAxLS42ODIuNTZoLTcuNDA3elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjUuMzEgMzguNzU1aC03LjI5MWExLjM5IDEuMzkgMCAwIDAtMS4zNjQgMS4xMjRsLTYuNTU3IDMzLjczOGExLjM5IDEuMzkgMCAwIDAgMS4zNjMgMS42NTRoNy4yOTFhMS4zOSAxLjM5IDAgMCAwIDEuMzY0LTEuMTI0bDMuNTM3LTE4LjIwNWg0LjY4MmMyLjE2OCAwIDIuNjI0LjQ2MyAyLjY0MS40ODQuMTMyLjE0LjMwNS43OTUuMDE5IDIuMjY0bC0yLjkgMTQuOTI3YTEuMzkgMS4zOSAwIDAgMCAxLjM2NCAxLjY1NGg3LjQwOGExLjM5IDEuMzkgMCAwIDAgMS4zNjMtMS4xMjRsMy4wNTEtMTUuN2MuNzE1LTMuNjg2LjEwMy02LjQ1LTEuODItOC4yMTctMS44MzYtMS42ODYtNC45MS0yLjUwNS05LjM5OC0yLjUwNWgtNC44MWwxLjQyMS03LjMxNWExLjM5IDEuMzkgMCAwIDAtMS4zNjQtMS42NTV6bTAgMS4zOS0xLjc0MyA4Ljk2OGg2LjQ5NmM0LjA4NyAwIDYuOTA3LjcxNCA4LjQ1NyAyLjE0IDEuNTUzIDEuNDI2IDIuMDE3IDMuNzM1IDEuMzk4IDYuOTNsLTMuMDUyIDE1LjY5OWgtNy40MDdsMi45MDEtMTQuOTI4Yy4zMy0xLjY5OC4yMDgtMi44NTYtLjM2NS0zLjQ3NC0uNTczLS42MTctMS43OTMtLjkyNi0zLjY1OC0uOTI2aC01LjgyOWwtMy43NTYgMTkuMzI3SDUxLjQ2bDYuNTU4LTMzLjczOWg3LjI5MnpcIj48L3BhdGg+PHBhdGggZD1cIk05Mi4xMzYgNjcuODY0YzIuNzkzIDAgNC44NzgtLjUxNSA2LjE5OC0xLjUzIDEuMzA0LTEuMDA2IDIuMjA2LTIuNzQ3IDIuNjc5LTUuMTc1LjQ0LTIuMjcuMjczLTMuODU0LS41LTQuNzEtLjc4OC0uODc0LTIuNDkzLTEuMzE3LTUuMDY3LTEuMzE3aC00LjQ2M2wtMi40NzUgMTIuNzMyek03Ny41NCA4My41NDdhLjY5NC42OTQgMCAwIDEtLjY4Mi0uODI4bDYuNTU3LTMzLjczOGEuNjk1LjY5NSAwIDAgMSAuNjgyLS41NjFIOTguMjNjNC40NDIgMCA3Ljc0OCAxLjIwNiA5LjgyNiAzLjU4NSAyLjA4OSAyLjM5IDIuNzM0IDUuNzM0IDEuOTE3IDkuOTM1YTE1Ljg3OCAxNS44NzggMCAwIDEtMS42OTkgNC43MjQgMTUuODM4IDE1LjgzOCAwIDAgMS0zLjEyOCAzLjkyYy0xLjUzIDEuNDMyLTMuMjY1IDIuNDcyLTUuMTQ3IDMuMDgzLTEuODUyLjYwNC00LjIzMi45MS03LjA3MS45MWgtNS43MjNsLTEuNjMzIDguNDA4YS42OTUuNjk1IDAgMCAxLS42ODMuNTYyelwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNOTEuNTU1IDU1LjgyNmgzLjg5MWMzLjEwNyAwIDQuMTg2LjY4MiA0LjU1MiAxLjA4OS42MS42NzQuNzI0IDIuMDk3LjMzMyA0LjExMi0uNDQgMi4yNTctMS4yNTQgMy44NTgtMi40MjEgNC43NTYtMS4xOTUuOTItMy4xMzkgMS4zODYtNS43NzMgMS4zODZoLTIuNzg2bDIuMjA0LTExLjM0MnptNi42NzQtOC4xSDg0LjA5NmExLjM5IDEuMzkgMCAwIDAtMS4zNjMgMS4xMjNsLTYuNTU4IDMzLjczOWExLjM5IDEuMzkgMCAwIDAgMS4zNjQgMS42NTNoNy4zNWExLjM5IDEuMzkgMCAwIDAgMS4zNjMtMS4xMjRsMS41MjUtNy44NDZoNS4xNWMyLjkxMSAwIDUuMzY0LS4zMTggNy4yODYtLjk0NCAxLjk3OC0uNjQyIDMuNzk3LTEuNzMxIDUuNDA4LTMuMjM4YTE2LjUyIDE2LjUyIDAgMCAwIDMuMjU4LTQuMDg2Yy44MzItMS40ODcgMS40MjgtMy4xNDcgMS43NzUtNC45MzEuODYtNC40MjMuMTYyLTcuOTY0LTIuMDc2LTEwLjUyNC0yLjIxNi0yLjUzNy01LjY5Ny0zLjgyMy0xMC4zNS0zLjgyM3pNODcuNjY2IDY4LjU1N2g0LjQ3YzIuOTY0IDAgNS4xNy0uNTU3IDYuNjIyLTEuNjc1IDEuNDUtMS4xMTYgMi40MjgtMi45OCAyLjkzNi01LjU5MS40ODctMi41MDguMjY2LTQuMjc3LS42NjUtNS4zMDgtLjkzLTEuMDMtMi43OTEtMS41NDYtNS41ODMtMS41NDZoLTUuMDM1Wm0xMC41NjMtMTkuNDQ1YzQuMjUxIDAgNy4zNTQgMS4xMTcgOS4zMDMgMy4zNDggMS45NSAyLjIzMiAyLjUzNyA1LjM0NyAxLjc1OSA5LjM0Ni0uMzIgMS42NDgtLjg2MiAzLjE1NC0xLjYyNCA0LjUxOC0uNzYzIDEuMzY2LTEuNzYgMi42MTQtMi45OTIgMy43NDctMS40NjcgMS4zNzMtMy4wOTcgMi4zNTItNC44OTIgMi45MzUtMS43OTMuNTg0LTQuMDc4Ljg3NS02Ljg1Ni44NzVoLTYuMjk1bC0xLjc0NSA4Ljk3aC03LjM1bDYuNTU4LTMzLjczOWgxNC4xMzNcIj48L3BhdGg+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPVwiYVwiIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIxXCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoODQuMDQxMzYgMCAwIDg0LjA0MTM2IDM4LjQyNiA0Mi4xNjkpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agc3RvcC1jb2xvcj1cIiNBRUIyRDVcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiLjNcIiBzdG9wLWNvbG9yPVwiI0FFQjJENVwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIuNzVcIiBzdG9wLWNvbG9yPVwiIzQ4NEM4OVwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM0ODRDODlcIj48L3N0b3A+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiI2YzNzAzNlwiIGQ9XCJNMTEzLjExNyAyNi4wNjZDOTIuMTY4LTEuMDYyIDUzLjE5MS02LjA3IDI2LjA2MiAxNC44ODNjLTI3LjEyNSAyMC45NTMtMzIuMTI4IDU5LjkzLTExLjE3NSA4Ny4wNTUgMjAuOTU3IDI3LjEyNCA1OS45MzcgMzIuMTI0IDg3LjA1OCAxMS4xNjcgMjcuMTE0LTIwLjk1MyAzMi4xMTgtNTkuOTE4IDExLjE3Mi04Ny4wMzlabTAgMFwiPjwvcGF0aD5cclxuPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTkxLjA3OCAyNC4xNjRhMTAuMDM4IDEwLjAzOCAwIDAgMC01Ljc4MSAyLjQyNiAxMC4wMjggMTAuMDI4IDAgMCAwLTEuNTQgMTMuNDY1IDEwLjAyOCAxMC4wMjggMCAwIDAgMTMuMjc2IDIuNzE1aC4wMDJ2LjAwMWwuMTU2LjE1NWExMC42MyAxMC42MyAwIDAgMCAxLjk2NS0xLjQ1QTEwLjM0MSAxMC4zNDEgMCAwIDAgOTkgMjcuMTA3di0uMDAybC04Ljg0NCA4Ljc4OS0uMTU2LS4xNTUgOC44NDQtOC43OTNhMTAuMDM4IDEwLjAzOCAwIDAgMC03Ljc2Ni0yLjc4ek03OS40MzQgMzguNTUxYy00LjI0LS4wMDctMTEuMTYzIDQuNzk5LTI4LjA2NyAyMS43MDNsLjA4NC4wODZjLS4wOTItLjAzMi0uMTg1LS4wMzUtLjE4NS0uMDM1bC02LjM2NCA2LjMwOGExLjAzNSAxLjAzNSAwIDAgMCAuOTMgMS43NjJsMTAuOTE0LTIuMzI4YS4zMDcuMzA3IDAgMCAwIC4wOTItLjE3bC4yNDIuMjUtMy43MiAzLjY5aC0uMThsLTIyLjA4NiAyMi4yNiA3LjA4NiA2LjgyNGExLjI1NCAxLjI1NCAwIDAgMCAxLjQ3Ni4xNDkgMS4zMjcgMS4zMjcgMCAwIDAgLjY0NS0xLjM1NmwtMS4wMzUtNC41YS41MzQuNTM0IDAgMCAxIDAtLjYyIDExNy4yODUgMTE3LjI4NSAwIDAgMCAyNi43MzgtMTcuNTgzbC00LjUzNS00LjUzNy4wODYtLjAxNC0yLjY5LTIuNjg5LjE3Mi0uMTc0LjE4Mi4xODYtLjA5NC4wOTEgNy4xMzcgNy4yOTN2LS4wMDNjMTMuNjgtMTIuOTU0IDIzLjM5LTIzLjM2NyAyMC44NjUtMzAuMzc1YTMuODMgMy44MyAwIDAgMC0xLjEwNy0yLjIwOHYuMDA0YTMuNzc4IDMuNzc4IDAgMCAwLS40ODMtLjMwNmMtLjA4My0uMDg4LS4xNTYtLjE3OC0uMjQ0LS4yNjRsLS4wNjYuMDY2YTMuNzc4IDMuNzc4IDAgMCAwLS41ODItLjI5bC4yODktLjI5MmMtMS43OTYtMS42LTMuMjgtMi45MjQtNS41LTIuOTN6TTMwLjk0IDkyLjIxbC01LjE3MSA1LjE3MnYuMDA0YTEuMDMgMS4wMyAwIDAgMC0uNDU3IDEuMTI1IDEuMDM1IDEuMDM1IDAgMCAwIC45MjEuNzg5bDEyLjY3Mi44NzUtNy45NjUtNy45NjV6XCI+PC9wYXRoPlxyXG48cGF0aCBmaWxsPVwiI2YzNzAzNlwiIGQ9XCJNOTEuOTUgMjMuMzFhMTEuMDQ3IDExLjA0NyAwIDAgMC03Ljc1OSAzLjE3IDEwLjk4OCAxMC45ODggMCAwIDAtMi4zOSAxMS42NDFjLTQuNzQxLTIuMDMtMTEuMTU1IDEuNTEtMzEuMTA2IDIxLjQ1N2EuOTMyLjkzMiAwIDAgMC0uMDM3LjA5NCAxLjI0MiAxLjI0MiAwIDAgMC0uMTE5LjA2MmwtNi4zMDkgNi4zNjRhMS45NyAxLjk3IDAgMCAwLS4zNjMgMi4zMjQgMi4wMTIgMi4wMTIgMCAwIDAgMS43MDcuOTg0bC4zMTMtLjIwMyA4LjQyNC0xLjc5Ny00LjAzIDQuMDY3YS44NzMuODczIDAgMCAwLS4wNTQuMTY2bC0xOS43NSAxOS43OTlhLjc5OC43OTggMCAwIDAtLjE5Mi4yMzhsLTUuMDg2IDUuMDlhMS45NjcgMS45NjcgMCAwIDAtLjQxNCAyLjA0MyAxLjk5NSAxLjk5NSAwIDAgMCAxLjY1NiAxLjI2NWwxMi42MTguODhhMS4wMSAxLjAxIDAgMCAwIC41Mi0uNDE1Ljg4Ni44ODYgMCAwIDAgMC0xLjAzNWwtLjAyNi0uMDI1YTIuMjQzIDIuMjQzIDAgMCAwIC43MDUtLjU4IDIuMjM3IDIuMjM3IDAgMCAwIC40MDYtMS44NzZsLS45ODQtNC4xODdhMTI2LjcyNSAxMjYuNzI1IDAgMCAwIDI2LjMzNC0xNi44NjEgMS4wOTEgMS4wOTEgMCAwIDAgLjI0OC4xMDNjLjI1NC0uMDE5LjQ5Mi0uMTI4LjY3Mi0uMzA4IDEzLjU1LTEyLjgzIDIxLjUxNS0yMS42MjIgMjEuNTE1LTI4LjYwMmE4LjAzIDguMDMgMCAwIDAtLjQzMS0yLjg1IDEwLjk1NyAxMC45NTcgMCAwIDAgMy44NDUuODNsLS4wMTUuMDA0YTExLjIxOSAxMS4yMTkgMCAwIDAgNS4xODMtMS40NS43NzUuNzc1IDAgMCAwIC4wMDQuMDAxLjgzNS44MzUgMCAwIDAgLjYxNy0uMDU1IDkuMzk4IDkuMzk4IDAgMCAwIDIuMDctMS42NTIgMTAuODczIDEwLjg3MyAwIDAgMCAzLjI1OC03Ljc1OCAxMC44NzMgMTAuODczIDAgMCAwLTMuMjU3LTcuNzU4LjkzLjkzIDAgMCAwLS4xMTgtLjA5MSAxMS4wNDUgMTEuMDQ1IDAgMCAwLTcuNjU2LTMuMDc4em0tLjA4NyAxLjc3MmE5LjI3IDkuMjcgMCAwIDEgNS41ODYgMS45MTRsLTguMDY4IDguMTE3YS44NC44NCAwIDAgMC0uMDc2LjA5OC44My44MyAwIDAgMC0uMjM5LjU1LjgzMi44MzIgMCAwIDAgLjMxMy42NWguMDAybDYuMSA2LjFhOS4wNDQgOS4wNDQgMCAwIDEtMTAuMDI4LTEuOTEzYy0yLjU4Ni0yLjYtMy4zMzYtNi41MDQtMS45NTMtOS44OTEgMS4zODMtMy4zOSA0LjY4LTUuNjA1IDguMzYzLTUuNjI1em03LjEyIDMuNDMyYTguODcgOC44NyAwIDAgMSAyLjAzMyA1LjY3NCA5LjE1IDkuMTUgMCAwIDEtMi42ODggNi40NjQgOS45ODkgOS45ODkgMCAwIDEtMS4wOTguODk1TDkyLjMwNyAzNi43bC0uOTYzLS45NjMuMjY1LS4yNjUgNy4zNzMtNi45NnptLS4zNjYgNC4xOTNhLjc3Ny43NzcgMCAwIDAtLjU1LjAzMS43MzEuNzMxIDAgMCAwLS4zNi40MjYuNzMuNzMgMCAwIDAgLjA1LjU1OSAyLjIyNiAyLjIyNiAwIDAgMS0uMjU3IDIuMzI4LjY0LjY0IDAgMCAwLS4xOTUuNDg4Yy4wMDQuMTg0LjA3LjM2LjE5NS40OTJhLjU4LjU4IDAgMCAwIC40MTQgMCAuNjguNjggMCAwIDAgLjY3Mi0uMjA3IDMuNTczIDMuNTczIDAgMCAwIC40NjUtMy43Nzd2LjAwNGEuNzc3Ljc3NyAwIDAgMC0uNDM0LS4zNDR6TTc5LjM0IDM5LjQzYTUuNTg0IDUuNTg0IDAgMCAxIDMuMzEgMS4yMjYgNC43NTYgNC43NTYgMCAwIDAtMi42ODEgMS4zNEw1Ny4xNjIgNjQuNzAxbC00LjQ3Ni00LjQ3NmMxMS44MjgtMTEuNzcyIDE5LjA2LTE3LjkyMSAyMy41NTYtMTkuOTM2YTUuNTg0IDUuNTg0IDAgMCAxIDMuMDk4LS44NnptMy45NjUgMi45NmEyLjg5NSAyLjg5NSAwIDAgMSAyLjA0My44NDQgMi43ODYgMi43ODYgMCAwIDEgLjg3OSAyLjEyMSAyLjg2OSAyLjg2OSAwIDAgMS0uOTg1IDIuMDdsLTI0LjI1IDIxLjEwNi0yLjYxNy0yLjYxNyAyMi44ODctMjIuNjhhMi44OTUgMi44OTUgMCAwIDEgMi4wNDMtLjg0M3ptMi45OTQgNi42OThjLTEuNjkgNi43MDItMTAuNjQ3IDE1Ljc4My0xOS45ODcgMjQuNjA3bC0zLjc3Ny0zLjc3M0w4Ni4zIDQ5LjA4OHpNNTEuMzY3IDYxLjU0N2wuMjc0LjI3IDMuNTEzIDMuNTEzLTkuNjMgMi4wNiA1Ljg0My01Ljg0M3ptNS43OTMgNS44NC4wMDQuMDA0IDEuMTY4IDEuMTk1YTEuMDg2IDEuMDg2IDAgMCAwIC4wMTguMDg0bC4wNzguMDEyLjI0OC4yNTQuODIuODQtNS4zODUuNjYgMy4wNS0zLjA1em0zLjg2NyA0LjA3NiAzLjU3OCAzLjU3NkExMjYuOTkyIDEyNi45OTIgMCAwIDEgMzguNzUgOTEuNjk1YTEuNDQgMS40NCAwIDAgMC0uNzc3IDEuNjUzbDEuMDM1IDQuNWEuMzEuMzEgMCAwIDEgMCAuMzYzLjMxLjMxIDAgMCAxLS40MTQgMGwtNi4xMDItNi4xNTJMNTEuMyA3Mi45NzVsOS43MjgtMS41MTJ6bS0yOS45MzMgMjEuOTQuODY5LjgxNCA0LjQ5MiA0LjQ5Mi0xMC4wMTYtLjY0OCA0LjY1NS00LjY1OXpcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48bGluZWFyR3JhZGllbnQgaWQ9XCJweXRob24tb3JpZ2luYWwtYVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHgxPVwiNzAuMjUyXCIgeTE9XCIxMjM3LjQ3NlwiIHgyPVwiMTcwLjY1OVwiIHkyPVwiMTE1MS4wODlcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguNTYzIDAgMCAtLjU2OCAtMjkuMjE1IDcwNy44MTcpXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjNUE5RkQ0XCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzMwNjk5OFwiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD1cInB5dGhvbi1vcmlnaW5hbC1iXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeDE9XCIyMDkuNDc0XCIgeTE9XCIxMDk4LjgxMVwiIHgyPVwiMTczLjYyXCIgeTI9XCIxMTQ5LjUzN1wiIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC41NjMgMCAwIC0uNTY4IC0yOS4yMTUgNzA3LjgxNylcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNGRkQ0M0JcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjRkZFODczXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD1cInVybCgjcHl0aG9uLW9yaWdpbmFsLWEpXCIgZD1cIk02My4zOTEgMS45ODhjLTQuMjIyLjAyLTguMjUyLjM3OS0xMS44IDEuMDA3LTEwLjQ1IDEuODQ2LTEyLjM0NiA1LjcxLTEyLjM0NiAxMi44Mzd2OS40MTFoMjQuNjkzdjMuMTM3SDI5Ljk3N2MtNy4xNzYgMC0xMy40NiA0LjMxMy0xNS40MjYgMTIuNTIxLTIuMjY4IDkuNDA1LTIuMzY4IDE1LjI3NSAwIDI1LjA5NiAxLjc1NSA3LjMxMSA1Ljk0NyAxMi41MTkgMTMuMTI0IDEyLjUxOWg4LjQ5MVY2Ny4yMzRjMC04LjE1MSA3LjA1MS0xNS4zNCAxNS40MjYtMTUuMzRoMjQuNjY1YzYuODY2IDAgMTIuMzQ2LTUuNjU0IDEyLjM0Ni0xMi41NDhWMTUuODMzYzAtNi42OTMtNS42NDYtMTEuNzItMTIuMzQ2LTEyLjgzNy00LjI0NC0uNzA2LTguNjQ1LTEuMDI3LTEyLjg2Ni0xLjAwOHpNNTAuMDM3IDkuNTU3YzIuNTUgMCA0LjYzNCAyLjExNyA0LjYzNCA0LjcyMSAwIDIuNTkzLTIuMDgzIDQuNjktNC42MzQgNC42OS0yLjU2IDAtNC42MzMtMi4wOTctNC42MzMtNC42OS0uMDAxLTIuNjA0IDIuMDczLTQuNzIxIDQuNjMzLTQuNzIxelwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwLjI2KVwiPjwvcGF0aD48cGF0aCBmaWxsPVwidXJsKCNweXRob24tb3JpZ2luYWwtYilcIiBkPVwiTTkxLjY4MiAyOC4zOHYxMC45NjZjMCA4LjUtNy4yMDggMTUuNjU1LTE1LjQyNiAxNS42NTVINTEuNTkxYy02Ljc1NiAwLTEyLjM0NiA1Ljc4My0xMi4zNDYgMTIuNTQ5djIzLjUxNWMwIDYuNjkxIDUuODE4IDEwLjYyOCAxMi4zNDYgMTIuNTQ3IDcuODE2IDIuMjk3IDE1LjMxMiAyLjcxMyAyNC42NjUgMCA2LjIxNi0xLjgwMSAxMi4zNDYtNS40MjMgMTIuMzQ2LTEyLjU0N3YtOS40MTJINjMuOTM4di0zLjEzOGgzNy4wMTJjNy4xNzYgMCA5Ljg1Mi01LjAwNSAxMi4zNDgtMTIuNTE5IDIuNTc4LTcuNzM1IDIuNDY3LTE1LjE3NCAwLTI1LjA5Ni0xLjc3NC03LjE0NS01LjE2MS0xMi41MjEtMTIuMzQ4LTEyLjUyMWgtOS4yNjh6TTc3LjgwOSA4Ny45MjdjMi41NjEgMCA0LjYzNCAyLjA5NyA0LjYzNCA0LjY5MiAwIDIuNjAyLTIuMDc0IDQuNzE5LTQuNjM0IDQuNzE5LTIuNTUgMC00LjYzMy0yLjExNy00LjYzMy00LjcxOSAwLTIuNTk1IDIuMDgzLTQuNjkyIDQuNjMzLTQuNjkyelwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwLjI2KVwiPjwvcGF0aD48cmFkaWFsR3JhZGllbnQgaWQ9XCJweXRob24tb3JpZ2luYWwtY1wiIGN4PVwiMTgyNS42NzhcIiBjeT1cIjQ0NC40NVwiIHI9XCIyNi43NDNcIiBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCgwIC0uMjQgLTEuMDU1IDAgNTMyLjk3OSA1NTcuNTc2KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI0I4QjhCOFwiIHN0b3Atb3BhY2l0eT1cIi40OThcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN0Y3RjdGXCIgc3RvcC1vcGFjaXR5PVwiMFwiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjxwYXRoIG9wYWNpdHk9XCIuNDQ0XCIgZmlsbD1cInVybCgjcHl0aG9uLW9yaWdpbmFsLWMpXCIgZD1cIk05Ny4zMDkgMTE5LjU5N2MwIDMuNTQzLTE0LjgxNiA2LjQxNi0zMy4wOTEgNi40MTYtMTguMjc2IDAtMzMuMDkyLTIuODczLTMzLjA5Mi02LjQxNiAwLTMuNTQ0IDE0LjgxNS02LjQxNyAzMy4wOTItNi40MTcgMTguMjc1IDAgMzMuMDkxIDIuODcyIDMzLjA5MSA2LjQxN3pcIj48L3BhdGg+XHJcbjwvc3ZnPmAsXHJcbmA8c3ZnIGNsYXNzPVwic2tpbGwtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiPlxyXG48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjIuNjcgNDdoOTkuNjd2NzMuNjdIMjIuNjd6XCI+PC9wYXRoPjxwYXRoIGRhdGEtbmFtZT1cIm9yaWdpbmFsXCIgZmlsbD1cIiMwMDdhY2NcIiBkPVwiTTEuNSA2My45MXY2Mi41aDEyNXYtMTI1SDEuNXptMTAwLjczLTVhMTUuNTYgMTUuNTYgMCAwMTcuODIgNC41IDIwLjU4IDIwLjU4IDAgMDEzIDRjMCAuMTYtNS40IDMuODEtOC42OSA1Ljg1LS4xMi4wOC0uNi0uNDQtMS4xMy0xLjIzYTcuMDkgNy4wOSAwIDAwLTUuODctMy41M2MtMy43OS0uMjYtNi4yMyAxLjczLTYuMjEgNWE0LjU4IDQuNTggMCAwMC41NCAyLjM0Yy44MyAxLjczIDIuMzggMi43NiA3LjI0IDQuODYgOC45NSAzLjg1IDEyLjc4IDYuMzkgMTUuMTYgMTAgMi42NiA0IDMuMjUgMTAuNDYgMS40NSAxNS4yNC0yIDUuMi02LjkgOC43My0xMy44MyA5LjlhMzguMzIgMzguMzIgMCAwMS05LjUyLS4xIDIzIDIzIDAgMDEtMTIuNzItNi42M2MtMS4xNS0xLjI3LTMuMzktNC41OC0zLjI1LTQuODJhOS4zNCA5LjM0IDAgMDExLjE1LS43M0w4MiAxMDFsMy41OS0yLjA4Ljc1IDEuMTFhMTYuNzggMTYuNzggMCAwMDQuNzQgNC41NGM0IDIuMSA5LjQ2IDEuODEgMTIuMTYtLjYyYTUuNDMgNS40MyAwIDAwLjY5LTYuOTJjLTEtMS4zOS0zLTIuNTYtOC41OS01LTYuNDUtMi43OC05LjIzLTQuNS0xMS43Ny03LjI0YTE2LjQ4IDE2LjQ4IDAgMDEtMy40My02LjI1IDI1IDI1IDAgMDEtLjIyLThjMS4zMy02LjIzIDYtMTAuNTggMTIuODItMTEuODdhMzEuNjYgMzEuNjYgMCAwMTkuNDkuMjZ6bS0yOS4zNCA1LjI0djUuMTJINTYuNjZ2NDYuMjNINDUuMTVWNjkuMjZIMjguODh2LTVhNDkuMTkgNDkuMTkgMCAwMS4xMi01LjE3QzI5LjA4IDU5IDM5IDU5IDUxIDU5aDIxLjgzelwiPjwvcGF0aD5cclxuPC9zdmc+YCxcclxuXHJcbmA8c3ZnIGNsYXNzPSBcInNraWxsLWljb25cIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwiIzQ5NDk0OVwiIGQ9XCJNNjQuMDk0IDEyNi4yMjRjMzQuMjc1LS4wNTIgNjIuMDIxLTI3LjkzMyA2Mi4wMjEtNjIuMzI1IDAtMzMuODMzLTI3LjYxOC02MS42OTctNjAuNjEzLTYyLjI4NkMzMC44NS45OTUgMS44OTQgMjkuMTEzIDEuODg1IDYzLjIxYy0uMDEgMzUuMDc5IDI3LjYxMiA2My4wNjQgNjIuMjA5IDYzLjAxNHpNNjMuOTkzIDQuNjNjMzIuOTA3LS4wMTEgNTkuMTI2IDI2LjcyNSA1OS4xMTYgNjAuMjgtLjAxMSAzMS42NzktMjYuOTI1IDU4LjE4LTU5LjA5MiA1OC4xODctMzIuNzcxLjAwNy01OS4xMjUtMjYuNTYzLTU5LjEyNC01OS42MDguMDAyLTMyLjE5MyAyNi43NjYtNTguODQ4IDU5LjEtNTguODU5ek0zOS4xNTcgMzUuODk2Yy41MzggMS43OTMtLjk2OCAyLjQxNy0yLjU2OSAyLjU0Mi0xLjY4NS4xMy0zLjM2OS4yNTctNS4zMjUuNDA2IDYuNDU2IDE5LjIzNCAxMi44MTUgMzguMTgzIDE5LjMyNSA1Ny41NzMuNDY0LS43NTkuNjU1LS45NzMuNzM5LTEuMjIzIDMuNTc0LTEwLjY4MiA3LjE2OC0yMS4zNTcgMTAuNjUxLTMyLjA2OS4zMTgtLjk3Ny4xNi0yLjI3MS0uMTg4LTMuMjc1LTEuODQzLTUuMzItNC4wNTEtMTAuNTI0LTUuNjY3LTE1LjkwOC0xLjEwNS0zLjY4Ni0yLjU3MS02LjA3MS02LjkyOC01LjY0NC0uNzQyLjA3My0xLjY0OC0xLjUyNC0yLjQ3OS0yLjM0OSAxLjAwNS0uNiAyLjAwMy0xLjcwNCAzLjAxNy0xLjcxOWE4NDkuNTkzIDg0OS41OTMgMCAwMTI2LjYxOC4wMDhjMS4wMTguMDE3IDIuMDE2IDEuMTUgMy4wMjEgMS43NjUtLjg4LjgwNC0xLjYzOSAyLjAxLTIuNjY4IDIuMzIxLTEuNjUxLjQ5OC0zLjQ4Mi40MDQtNS40NTguNThsMTkuMzQ5IDU3LjU2YzIuOTMxLTkuNzM2IDUuNjU4LTE4LjY3NiA4LjMxLTI3LjYzOSAyLjM2Ni04LjAwMS45NTYtMTUuNDczLTMuMzIyLTIyLjUyLTEuMjg2LTIuMTE5LTIuODY2LTQuMTc1LTMuNTk1LTYuNDg2LS44MjgtMi42MjktMS41MTYtNS42MjItMS4wNzctOC4yNTkuNzQ1LTQuNDY5IDQuMTc0LTYuNjg4IDguODE0LTcuMTEzQzc0LjMzMy44ODEgMzQuNDMxIDkuMzE3IDE5LjcyOCAzNC45MjJjNS42Ni0uMjYxIDExLjA2NC0uNjA0IDE2LjQ3Mi0uNjc4IDEuMDIyLS4wMTMgMi43MTcuODUxIDIuOTU3IDEuNjUyem0xMC4xMTcgNzcuOTcxYy0uMTE4LjM0NS0uMTI1LjcyOS0uMjE4IDEuMzAyIDEwLjk0MyAzLjAzNCAyMS42NzUgMi44MTUgMzIuNjU5LS44ODZsLTE2Ljc4LTQ1Ljk2Yy01LjM3IDE1LjYxMS0xMC41MiAzMC41NzUtMTUuNjYxIDQ1LjU0NHptLTguNDU2LTIuMDc4bC0yNS4yODEtNjkuMzVjLTExLjQwNSAyMi4yNzgtMi43MjkgNTYuMjY4IDI1LjI4MSA2OS4zNXptNzYuNDI4LTQ0LjU2MmMuODAyLTEwLjUzNC0yLjgzMi0yNS4xMTktNS45Ny0yNy4xMjUtLjM1IDMuODc1LS4xMDYgOC4xODYtMS4yMTggMTIuMTE0LTIuNjE3IDkuMjU1LTUuODE3IDE4LjM0OS04Ljg5OSAyNy40NjgtMy4zNSA5LjkxMi02LjgzMiAxOS43NzktMTAuMjU3IDI5LjY2NiAxNi4wOTItOS41MzkgMjQuOTM1LTIzLjYxOCAyNi4zNDQtNDIuMTIzelwiPjwvcGF0aD5cclxuPC9zdmc+YF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbHN7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJza2lsbHNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyKCkpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGl0bGUgPSAoKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwic2tpbGwtdGl0bGVcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IFNraWxsc1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNsaWRlciA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2xpZGVyXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJyYW5kcyA9ICgpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtc0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgaXRlbXNIb2xkZXIuY2xhc3NOYW1lID0gXCJicmFuZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGl0ZW0pID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGxpc3QuY2xhc3NOYW1lID0gXCJicmFuZC1sb2dvXCI7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCA9IGAke2l0ZW19YDtcclxuICAgICAgICAgICAgICAgIGl0ZW1zSG9sZGVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXNIb2xkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJhbmRzKCkpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufSIsImltcG9ydCBjdk1ha2VySW1nIGZyb20gXCIuLi9pbWFnZXMvY3YtbWFrZXIucG5nXCI7XHJcbmltcG9ydCBtZW1vcnlJbWcgZnJvbSBcIi4uL2ltYWdlcy9tZW1vcnkucG5nXCI7XHJcbmltcG9ydCB0b2RvbGlzdEltZyBmcm9tIFwiLi4vaW1hZ2VzL3RvZG9saXN0LnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlckFwcEltZyBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci1hcHAucG5nJ1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7bmFtZTogXCJXZWF0aGVyIEFwcFwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IHdlYXRoZXJBcHBJbWcsIGxhbmd1YWdlOiBcIkhUTUwsIEpTLCBDU1NcIiwgd2Vic2l0ZTogXCJodHRwczovL3hzeW1tZXRyeTkuZ2l0aHViLmlvL3dlYXRoZXItYXBwL1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvd2VhdGhlci1hcHBcIn0sXHJcbiAgICB7bmFtZTogXCJUb2RvIExpc3RcIiwgXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNob3J0IGRlc2NyaXB0aW9uLiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvLlwiLCBcclxuICAgIGltYWdlOiB0b2RvbGlzdEltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vdG9kb2xpc3QvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS90b2RvbGlzdFwifSxcclxuICAgIHtuYW1lOiBcIk1lbW9yeVwiLCBcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2hvcnQgZGVzY3JpcHRpb24uIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG8uXCIsIFxyXG4gICAgaW1hZ2U6IG1lbW9yeUltZywgbGFuZ3VhZ2U6IFwiSFRNTCwgSlMsIENTU1wiLCB3ZWJzaXRlOiBcImh0dHBzOi8veHN5bW1ldHJ5OS5naXRodWIuaW8vbWVtb3J5L1wiLCBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hzeW1tZXRyeTkvbWVtb3J5XCJ9LFxyXG4gICAge25hbWU6IFwiQ1YgTWFrZXJcIiwgXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNob3J0IGRlc2NyaXB0aW9uLiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvLlwiLCBcclxuICAgIGltYWdlOiBjdk1ha2VySW1nLCBsYW5ndWFnZTogXCJIVE1MLCBKUywgQ1NTXCIsIHdlYnNpdGU6IFwiaHR0cHM6Ly9sb3F1YWNpb3VzLXBhcHJlbmphay1iMjM1NjUubmV0bGlmeS5hcHAvXCIsIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20veHN5bW1ldHJ5OS9jdi1tYWtlclwifSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmt7XHJcbiAgICBzdGF0aWMgbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3b3JrXCIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcclxuXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0cygpKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpdGxlID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIndvcmstdGl0bGVcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IFdvcmtcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0cyA9ICgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PntcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkc1wiKVxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZHMuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiQW4gaW1hZ2Ugb2YgJHtpdGVtLm5hbWV9XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtbmFtZVwiPiR7aXRlbS5uYW1lfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaW5rLWZpbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiJHtpdGVtLmdpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJtZGktaWNvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIjZmZmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmdpdDwvdGl0bGU+PHBhdGggZD1cIk0yLjYsMTAuNTlMOC4zOCw0LjhMMTAuMDcsNi41QzkuODMsNy4zNSAxMC4yMiw4LjI4IDExLDguNzNWMTQuMjdDMTAuNCwxNC42MSAxMCwxNS4yNiAxMCwxNkEyLDIgMCAwLDAgMTIsMThBMiwyIDAgMCwwIDE0LDE2QzE0LDE1LjI2IDEzLjYsMTQuNjEgMTMsMTQuMjdWOS40MUwxNS4wNywxMS41QzE1LDExLjY1IDE1LDExLjgyIDE1LDEyQTIsMiAwIDAsMCAxNywxNEEyLDIgMCAwLDAgMTksMTJBMiwyIDAgMCwwIDE3LDEwQzE2LjgyLDEwIDE2LjY1LDEwIDE2LjUsMTAuMDdMMTMuOTMsNy41QzE0LjE5LDYuNTcgMTMuNzEsNS41NSAxMi43OCw1LjE2QzEyLjM1LDUgMTEuOSw0Ljk2IDExLjUsNS4wN0w5LjgsMy4zOEwxMC41OSwyLjZDMTEuMzcsMS44MSAxMi42MywxLjgxIDEzLjQxLDIuNkwyMS40LDEwLjU5QzIyLjE5LDExLjM3IDIyLjE5LDEyLjYzIDIxLjQsMTMuNDFMMTMuNDEsMjEuNEMxMi42MywyMi4xOSAxMS4zNywyMi4xOSAxMC41OSwyMS40TDIuNiwxMy40MUMxLjgxLDEyLjYzIDEuODEsMTEuMzcgMi42LDEwLjU5WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiJHtpdGVtLndlYnNpdGV9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibWRpLWljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5vcGVuLWluLW5ldzwvdGl0bGU+PHBhdGggZD1cIk0xNCwzVjVIMTcuNTlMNy43NiwxNC44M0w5LjE3LDE2LjI0TDE5LDYuNDFWMTBIMjFWM00xOSwxOUg1VjVIMTJWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtYnVpbHRpblwiPjxpPkJ1aWx0IHdpdGggJHtpdGVtLmxhbmd1YWdlfTwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RDYXJkcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50O1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBob21lUGFnZSBmcm9tICcuLi9zcmMvcGFnZXMvaG9tZXBhZ2UnO1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaG9tZVBhZ2UubG9hZFBhZ2UoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=