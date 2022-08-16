/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n    // Get #content\n    const content = document.getElementById('content');\n\n    // Header\n    const header = document.createElement('header');\n    const left = document.createElement('div');\n    const logo = document.createElement('div');\n    const h1 = document.createElement('h1');\n    const right = document.createElement('div');\n    const fb = document.createElement('div');\n    const insta = document.createElement('div');\n    const phone = document.createElement('div');\n    const email = document.createElement('div');\n\n    h1.innerText = \"Edelweiss Tavern\";\n    fb.innerText = \"fb\";\n    insta.innerText = \"insta\";\n    phone.innerText = \"phone\";\n    email.innerText = 'email';\n\n    right.classList.add('right');\n\n    header.appendChild(left);\n    left.appendChild(logo);\n    left.appendChild(h1);\n    header.appendChild(right);\n    right.appendChild(fb);\n    right.appendChild(insta);\n    right.appendChild(phone);\n    right.appendChild(email);\n\n    // Navigation\n    const nav = document.createElement('section');\n    const ul = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const contact = document.createElement('li');\n\n    home.innerText = 'Home';\n    menu.innerText = 'Menu';\n    contact.innerText = 'Contact';\n\n    home.setAttribute('id', 'homeButton');\n    menu.setAttribute('id', 'menuButton');\n    contact.setAttribute('id', 'contactButton');\n\n    nav.classList.add('nav');\n\n    nav.appendChild(ul);\n    ul.appendChild(home);\n    ul.appendChild(menu);\n    ul.appendChild(contact);\n\n    const mainContent = document.createElement('section');\n    mainContent.classList.add('main-content');\n\n    // Footer\n    const footer = document.createElement('footer');\n    const copyright = document.createElement('div');\n    const designer = document.createElement('div');\n\n    copyright.innerText = 'Copyright Edleweiss Tavern 2022';\n    designer.innerText = \"Website developed by WebsiteSolutions.ca\";\n\n    copyright.classList.add('copyright');\n    designer.classList.add('designer');\n\n    footer.appendChild(copyright);\n    footer.appendChild(designer);\n\n    // Finalize\n    content.appendChild(header);\n    content.appendChild(nav);\n    content.appendChild(mainContent);\n    content.appendChild(footer);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page-load.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;