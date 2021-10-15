/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./menuButton.png */ "./src/menuButton.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------\n    Global styles\n  --------------------- */\n\nbody, html{\n    margin: 0;\n    padding: 0;\n    font-family: monospace;\n}\n\n*{\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n/*---------------------\n    Layout\n    -container and header\n  --------------------- */\n\n#container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n\n#header {\n    position: fixed;\n    background-color: white;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n    z-index: 10000;\n}\n\n#menu {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background: none;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    margin-left: 2em;\n}\n\n#logo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#addBtnContainer {\n    position: absolute;\n    right: 0;\n    margin-right: 1em;\n}\n\n#filterLabelDiv {\n    border-bottom: 1px solid black;\n    display: flex;\n    justify-content: center;\n    gap: 2em;\n}\n\n#filterLabel {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    font-size: 1.2em;\n    font-weight: bolder;\n}\n\n#removeFilterContainer {\n    display: flex;\n    gap: .5em;\n}\n\n#removeFilter {\n    align-content: center;\n    align-items: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    font-size: 20px;\n    border: 1px solid black;\n    border-radius: 10%;\n    padding: 0 10px 0 10px;\n    cursor: pointer;    \n}\n\n#removeFilterLabel {\n    opacity: 80%;\n}\n\n\n/*---------------------\n    sidebar \n  --------------------- */\n\n\n#sidebarHeader {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    height: 50px;\n    text-align: center;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#menuLabel {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n#sidebar {\n    width: 0;\n    transform: scale(0);\n}\n\n\n#sidebar.active {\n    transform: scale(1);\n    position: fixed;\n    height: 100%;\n    top: 80px;\n     background-color: rgba(128, 128, 128, 0.5);\n    border-right: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n\n#projects {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#projectLinkDiv {\n    display: flex;\n    flex-direction: column;\n    gap: .5em;\n}\n\n.projectFilterLabel {\n    margin: 0;\n    font-size: 1em;\n}\n\n.projectFilterLabel:hover {\n    cursor: pointer;\n}\n\n#projectsLabelDiv {\n    display: flex;\n    font-weight: normal;\n    font-size: 15px;\n    align-items: center;\n    gap: 20px;\n    color: rgb(27, 24, 24);\n}\n\n#carrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    opacity: 70%;\n    fill: green !important;\n}\n\n.carrotBtn {\n    filter: sepia(80%);\n}\n\n#carrot.active {\n    transform: rotate(180deg);\n}\n\n/*---------------------\n    main div \n    -holds tasks  \n  --------------------- */\n\n\n#listContainer {\n    width: 100%;\n    height: 100%;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: column;\n}\n\n#listContainer.active {\n    margin-left: 150px;\n}\n\n.itemDiv {\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.form {\n    \n}\nh4{\n    font-size: 1.2em;\n}\n\n.taskCompact {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    width: 100%;\n    height: 20px;\n    align-items: center;\n}\n\n.checkbox {\n    margin-left: 1em;\n    margin-top: auto;\n}\n\n.taskName {\n    min-width: 80px;\n}\n\n@media (max-width: 400px) {\n    .taskName {\n        width: 80px;\n    }\n}\n\n.date {\n    margin-left: auto;\n    margin-right: 1em;\n}\n\n/* .projectLabelDiv {\n    display: flex;\n    height: 20px;\n    gap: 1em;\n    align-items: center;\n} */\n\n/* .projectLabel {\n    margin-left: 1em;\n} */\n\n/* .projectName {\n    margin-right: 1em;\n    font-size: 1.2em;\n    font-weight: unset;\n} */\n\n.taskExtended {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    align-items: center;\n    gap: 10px;\n}\n\n.labelDiv {\n    display: flex;\n    flex-direction: column;\n    margin-left: 3em;\n}\n\n.labelDiv h5 {\n    margin-bottom: 1rem;\n    margin-top: 1.1rem;\n}\n\n.infoDiv {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.infoDiv p {\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n}\n\n.infoDiv input {\n    margin-bottom: .75rem;\n    margin-top: .75rem;\n}\n\n/* .noteDiv {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    height: 20px;\n} */\n\n/* .noteLabel {\n    margin-left: 1em;\n} */\n\n/* .notes {\n    display: flex; \n    margin-right: 1em;\n    font-size: 1.2em;\n} */\n\n/* @media (min-width: 380px) {\n    .projectLabel, .noteLabel {\n        margin-left: 4em;\n    }\n} */\n\n.buttonDiv {\n    margin-left: auto;\n    /* margin-right: 1em; */\n    display: flex;\n    gap: 10px;\n}\n\n.projectName {\n    height: ;\n}\n\n.taskCarrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    margin-left: 1em;\n}\n\n.taskCarrot.active {\n    transform: rotate(180deg);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*---------------------\n    Global styles\n  --------------------- */\n\nbody, html{\n    margin: 0;\n    padding: 0;\n    font-family: monospace;\n}\n\n*{\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n/*---------------------\n    Layout\n    -container and header\n  --------------------- */\n\n#container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n\n#header {\n    position: fixed;\n    background-color: white;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n    z-index: 10000;\n}\n\n#menu {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background: none;\n    border: none;\n    background-image: url('./menuButton.png');\n    background-position: center;\n    background-size: cover;\n    margin-left: 2em;\n}\n\n#logo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#addBtnContainer {\n    position: absolute;\n    right: 0;\n    margin-right: 1em;\n}\n\n#filterLabelDiv {\n    border-bottom: 1px solid black;\n    display: flex;\n    justify-content: center;\n    gap: 2em;\n}\n\n#filterLabel {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    font-size: 1.2em;\n    font-weight: bolder;\n}\n\n#removeFilterContainer {\n    display: flex;\n    gap: .5em;\n}\n\n#removeFilter {\n    align-content: center;\n    align-items: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    font-size: 20px;\n    border: 1px solid black;\n    border-radius: 10%;\n    padding: 0 10px 0 10px;\n    cursor: pointer;    \n}\n\n#removeFilterLabel {\n    opacity: 80%;\n}\n\n\n/*---------------------\n    sidebar \n  --------------------- */\n\n\n#sidebarHeader {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    height: 50px;\n    text-align: center;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#menuLabel {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n#sidebar {\n    width: 0;\n    transform: scale(0);\n}\n\n\n#sidebar.active {\n    transform: scale(1);\n    position: fixed;\n    height: 100%;\n    top: 80px;\n     background-color: rgba(128, 128, 128, 0.5);\n    border-right: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n\n#projects {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#projectLinkDiv {\n    display: flex;\n    flex-direction: column;\n    gap: .5em;\n}\n\n.projectFilterLabel {\n    margin: 0;\n    font-size: 1em;\n}\n\n.projectFilterLabel:hover {\n    cursor: pointer;\n}\n\n#projectsLabelDiv {\n    display: flex;\n    font-weight: normal;\n    font-size: 15px;\n    align-items: center;\n    gap: 20px;\n    color: rgb(27, 24, 24);\n}\n\n#carrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    opacity: 70%;\n    fill: green !important;\n}\n\n.carrotBtn {\n    filter: sepia(80%);\n}\n\n#carrot.active {\n    transform: rotate(180deg);\n}\n\n/*---------------------\n    main div \n    -holds tasks  \n  --------------------- */\n\n\n#listContainer {\n    width: 100%;\n    height: 100%;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: column;\n}\n\n#listContainer.active {\n    margin-left: 150px;\n}\n\n.itemDiv {\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.form {\n    \n}\nh4{\n    font-size: 1.2em;\n}\n\n.taskCompact {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    width: 100%;\n    height: 20px;\n    align-items: center;\n}\n\n.checkbox {\n    margin-left: 1em;\n    margin-top: auto;\n}\n\n.taskName {\n    min-width: 80px;\n}\n\n@media (max-width: 400px) {\n    .taskName {\n        width: 80px;\n    }\n}\n\n.date {\n    margin-left: auto;\n    margin-right: 1em;\n}\n\n/* .projectLabelDiv {\n    display: flex;\n    height: 20px;\n    gap: 1em;\n    align-items: center;\n} */\n\n/* .projectLabel {\n    margin-left: 1em;\n} */\n\n/* .projectName {\n    margin-right: 1em;\n    font-size: 1.2em;\n    font-weight: unset;\n} */\n\n.taskExtended {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    align-items: center;\n    gap: 10px;\n}\n\n.labelDiv {\n    display: flex;\n    flex-direction: column;\n    margin-left: 3em;\n}\n\n.labelDiv h5 {\n    margin-bottom: 1rem;\n    margin-top: 1.1rem;\n}\n\n.infoDiv {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.infoDiv p {\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n}\n\n.infoDiv input {\n    margin-bottom: .75rem;\n    margin-top: .75rem;\n}\n\n/* .noteDiv {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    height: 20px;\n} */\n\n/* .noteLabel {\n    margin-left: 1em;\n} */\n\n/* .notes {\n    display: flex; \n    margin-right: 1em;\n    font-size: 1.2em;\n} */\n\n/* @media (min-width: 380px) {\n    .projectLabel, .noteLabel {\n        margin-left: 4em;\n    }\n} */\n\n.buttonDiv {\n    margin-left: auto;\n    /* margin-right: 1em; */\n    display: flex;\n    gap: 10px;\n}\n\n.projectName {\n    height: ;\n}\n\n.taskCarrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    margin-left: 1em;\n}\n\n.taskCarrot.active {\n    transform: rotate(180deg);\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM-Manager.js":
/*!****************************!*\
  !*** ./src/DOM-Manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_Task_Factory": () => (/* binding */ DOM_Task_Factory),
/* harmony export */   "DOM_Factory": () => (/* binding */ DOM_Factory),
/* harmony export */   "validateForm": () => (/* binding */ validateForm),
/* harmony export */   "expandTasks": () => (/* binding */ expandTasks)
/* harmony export */ });
/* harmony import */ var _up_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./up-arrow.png */ "./src/up-arrow.png");
/* harmony import */ var _ToDo_Object_Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo_Object_Factory */ "./src/ToDo_Object_Factory.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");





/* get DOM elements */
const DOM_Factory = () => {
    const sidebar = document.getElementById('sidebar');
    const projectsLabelDiv = document.getElementById('projectsLabelDiv');
    const menu = document.getElementById('menu');
    const taskContainer = document.getElementById('listContainer');
    const addBtn = document.getElementById('addBtn');
    
    const carrot = document.createElement('img');
    carrot.id = "carrot";
    carrot.src = _up_arrow_png__WEBPACK_IMPORTED_MODULE_0__;

    const showMenu = (event) => {
        
        if(sidebar.classList.contains('active')){
            sidebar.classList.remove('active');
            taskContainer.classList.remove('active');
        }else {
            sidebar.classList.add('active');
            taskContainer.classList.add('active');
        }
    }

    const expandProjectsMenu = (event) => {
        (carrot.classList.contains('active')) ? carrot.classList.remove('active') :
            carrot.classList.add('active');
        if(carrot.classList.contains('active')) {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.push(handleCarrotClicks.filterProjects(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        }
    }

    return {
        addBtn,
        sidebar,
        projectsLabelDiv,
        carrot,
        menu,
        taskContainer,
        showMenu,
        expandProjectsMenu,
    }
}

/* create and append new DOM elements when user adds or edits task */
const DOM_Task_Factory = () => {
    const newElement = tag => {
        let element;
        element = document.createElement(tag);
        return element;
    }

    const markUrgent = (item, itemDiv) => {
        if(item.urgent == 'true') {
            itemDiv.classList.add('active');
            itemDiv.style.backgroundColor = "salmon";
        }else {
            itemDiv.classList.remove('active');
        }
    }

    const appendFilledTaskExtended = (arr, index, item) => {
        let taskFilledExtended = newElement('div');
        taskFilledExtended.classList.add('taskExtended')

        let labels = newElement('div');
        labels.classList.add('labelDiv');

        let info = newElement('div');
        info.classList.add('infoDiv');

        let projectLabelDiv = newElement('div');
        projectLabelDiv.classList.add('projectLabelDiv');

        let projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:"

        let projectName = newElement('p');
        projectName.classList.add('projectName');
        projectName.textContent = `${arr.project}`;

        let noteDiv = newElement('div');
        noteDiv.classList.add('noteDiv');

        let noteLabel = newElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = 'Notes:'
        
        let notes = newElement('p');
        notes.classList.add('notes');
        notes.textContent = `${arr.notes}`

        let buttonDiv = newElement('div');
        buttonDiv.classList.add('buttonDiv');

        let editButton = newElement('button');
        editButton.classList.add('editEntry');
        editButton.textContent = 'Edit';

        let deleteButton = newElement('button');
        deleteButton.classList.add('deleteEntry');
        deleteButton.textContent = 'Delete';

        labels.appendChild(projectLabel);
        labels.appendChild(noteLabel);
        info.appendChild(projectName);
        info.appendChild(notes);
        taskFilledExtended.appendChild(labels);
        taskFilledExtended.appendChild(info);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        taskFilledExtended.appendChild(buttonDiv);
        item.appendChild(taskFilledExtended);
        }

    const newItemForm = () => {
        const ToDo = (0,_ToDo_Object_Factory__WEBPACK_IMPORTED_MODULE_1__.ToDo_Item)();

        const  itemDiv = newElement('div');
        itemDiv.classList.add('itemDiv');

        const itemForm = newElement('form');
        itemForm.classList.add('itemDiv');
        itemForm.setAttribute('action', '/');
        itemForm.setAttribute('method', 'GET');

        const taskCompact = newElement('div');
        taskCompact.classList.add('taskCompact');

        const checkbox = newElement('input');
        checkbox.classList.add('checkbox');
        checkbox.id = 'urgent';
        checkbox.setAttribute('type', 'checkbox');

        const taskName = newElement('h4');
        taskName.classList.add('taskName');

        const date = newElement('h4');
        date.classList.add('date');

        const container = DOM_Factory();
        

        const taskExtended = newElement('div');
        taskExtended.classList.add('taskExtended');

        const taskExtendedLabels = newElement('div');
        taskExtendedLabels.classList.add('labelDiv');

        const taskExtendedInputs = newElement('div');
        taskExtendedInputs.classList.add('infoDiv');

        const projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project: "

        const projectName = newElement('h5');
        projectName.classList.add('projectName');


        const noteLabel = newElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = "Notes:";

        const notes = newElement('p');
        notes.classList.add('notes');

        const buttonDiv = newElement('div');
        buttonDiv.classList.add('buttonDiv');

        const editBtn = newElement('button');
        editBtn.classList.add('editEntry');
        editBtn.textContent = "Edit";

        const deleteBtn = newElement('button');
        deleteBtn.classList.add('deleteEntry');
        deleteBtn.textContent = "Delete";

        const deleteFormBtn = newElement('button');
        deleteFormBtn.id = "deleteBtn";
        deleteFormBtn.textContent = "Delete";

        const enterBtn = newElement('button');
        enterBtn.classList.add('enterBtn');
        enterBtn.id  = 'enter';
        enterBtn.textContent = "Enter";
        enterBtn.setAttribute('type', 'submit');

        const taskInput = newElement('input');
        taskInput.classList.add = "taskName";
        taskInput.id = 'name';
        taskInput.setAttribute('placeholder', 'Enter Task');
        taskInput.setAttribute('name', 'name');
        taskInput.setAttribute('type', 'text');
        taskInput.required = true;

        const dateInput = newElement('input');
        dateInput.classList.add = "date";
        dateInput.id = "date";
        dateInput.setAttribute('placeholder', 'Enter Date: "yyyy-mm-dd"');
        dateInput.setAttribute('name', 'date');
        dateInput.setAttribute('type', 'date');
        dateInput.required = true;

        const projectInput = newElement('input');
        projectInput.classList.add("projectName");
        projectInput.id = "project";
        projectInput.setAttribute('placeholder', 'Enter Project');
        projectInput.setAttribute('name', 'project');
        projectInput.setAttribute('type', 'text');
        projectInput.required = true;

        const noteInput = newElement('input');
        noteInput.classList.add("notes");
        noteInput.setAttribute('placeholder', 'Enter Notes');
        noteInput.setAttribute('name', 'note');
        noteInput.setAttribute('type', 'text');

        const appendEmptyTaskCompact = () => {
            taskCompact.appendChild(checkbox.cloneNode(true));
            taskCompact.appendChild(taskInput.cloneNode(true));
            taskCompact.appendChild(dateInput.cloneNode(true));
            itemForm.appendChild(taskCompact.cloneNode(true));
            itemForm.id = 'emptyForm';
        }

        const appendFilledTaskCompact = (item, index) => {
            let filledItemDiv = newElement('div');
            filledItemDiv.classList.add('itemDiv');
            filledItemDiv.setAttribute('data-index', `${index}`);

            let  taskCompactFilled = newElement('div');
            taskCompactFilled.classList.add('taskCompact');

            let taskCarrot = newElement('img');
            taskCarrot.classList = 'taskCarrot';
            taskCarrot.src = _up_arrow_png__WEBPACK_IMPORTED_MODULE_0__;

            let filledTaskName = newElement('h4');
            filledTaskName.classList.add('taskName');
            filledTaskName.textContent = `${item.description}`;

            let filledTaskDate = newElement('h4');
            filledTaskDate.classList.add('date');
            filledTaskDate.textContent = `${item.date}`;

            markUrgent(item, filledItemDiv);

            taskCompactFilled.appendChild(taskCarrot.cloneNode(true));
            taskCompactFilled.appendChild(filledTaskName.cloneNode(true));
            taskCompactFilled.appendChild(filledTaskDate.cloneNode(true));
            filledItemDiv.appendChild(taskCompactFilled.cloneNode(true));

            return filledItemDiv;
        }

        

        const appendEmptyTaskExtended = () => {
            taskExtendedLabels.appendChild(projectLabel);
            taskExtendedLabels.appendChild(noteLabel);
            taskExtendedInputs.appendChild(projectInput);
            taskExtendedInputs.appendChild(noteInput);
            // projectLabelDiv.appendChild(projectLabel);
            // projectLabelDiv.appendChild(projectInput);
            // taskExtended.appendChild(projectLabelDiv);
            // noteDiv.appendChild(noteLabel);
            // noteDiv.appendChild(noteInput);
            taskExtended.appendChild(taskExtendedLabels);
            taskExtended.appendChild(taskExtendedInputs);
            itemForm.appendChild(taskExtended);
    

        }

        const appendEmptyButtons = () => {
            buttonDiv.appendChild(enterBtn);
            buttonDiv.appendChild(deleteFormBtn);
            itemForm.appendChild(buttonDiv);
        }

        const appendEmptyItemForm = () => {
            appendEmptyTaskCompact();
            appendEmptyTaskExtended();
            appendEmptyButtons();
            container.taskContainer.appendChild(itemForm.cloneNode(true));
            container.addBtn.removeEventListener('click', appendEmptyItemForm);
            const validate = validateForm();
            validate.run();
        }

        const appendFilledItemForm = (newToDo) => {
            for(let i=0; i<newToDo.length; i++) {
                container.taskContainer.appendChild(appendFilledTaskCompact(newToDo[i], i));
            }
        }

        const appendNewItem = (item) => {
            let index = item.ToDoList.length - 1;
            container.taskContainer.appendChild(appendFilledTaskCompact(item.ToDoList[index], index));
        }

        return {
            appendEmptyItemForm,
            appendFilledItemForm,
            appendNewItem, 
            appendFilledTaskCompact,
         }
    }

    
return {
        newItemForm,
        markUrgent,
        appendFilledTaskExtended,
    }
}

const validateForm = () => {
    const name = document.getElementById('name');
    const date = document.getElementById('date');
    const project = document.getElementById('project');
    const form = document.getElementById('emptyForm');
    const deleteFormBtn = document.getElementById('deleteBtn');
    const checkbox = document.getElementById('urgent');
    
    let userEntries;
    
    const run = () => {
        if(form !== null) form.addEventListener('submit', collect);
        if(form !== null) form.addEventListener('submit', addExpandListener);
        if(deleteFormBtn !== null) {
            deleteFormBtn.addEventListener('click', function(e){
                form.remove();
                DOM_Factory().addBtn.addEventListener('click', DOM_Task_Factory().newItemForm().appendEmptyItemForm);
            })
        }
    } 

    function collect(e) {
        const enter = document.getElementById('enter');
        e.preventDefault();
        let isUrgent = check(checkbox, e);
        isUrgent;
        userEntries = ___WEBPACK_IMPORTED_MODULE_2__.newToDo.newItem(`${e.target.name.value}`, `${e.target.date.value}`,
            `${e.target.project.value}`, `${e.target.note.value}`, `${e.target.urgent.value}`);
    
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.push(userEntries);
        localStorage.setItem('ToDo_List', JSON.stringify(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        form.remove();
        ___WEBPACK_IMPORTED_MODULE_2__.taskFactory.newItemForm().appendNewItem(___WEBPACK_IMPORTED_MODULE_2__.newToDo);
        ___WEBPACK_IMPORTED_MODULE_2__.doc.addBtn.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_2__.taskFactory.newItemForm().appendEmptyItemForm);
    }

    function check(checkbox, e) {
        checkbox.checked === true ? e.target.urgent.value = true :
            e.target.urgent.value = false;
    }

    const addExpandListener = (e) => {
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.addListenerToNewItem(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList);
    }

    return {
        run,
        form,
    }
    
};

const editTasks = () => {
    let filtered = document.querySelector('#filterLabel');

    const replaceNode = (e) => {
        let index =  e.target.parentNode.parentNode.parentNode.dataset.index;
        let clickedDiv = document.querySelectorAll(`[data-index = '${index}']`);

        e.target.parentNode.parentNode.parentNode.after(_createEditForm(index));
        e.target.parentNode.parentNode.parentNode.remove();
        editTaskBtns().validateUserEdit(e);
        editTaskBtns().createCancelBtnListener();
    }

    const _createEditForm = (index) => {
        const taskEditingForm = document.createElement('form');
        taskEditingForm.action = "/";
        taskEditingForm.id = "editTaskForm"
        if(checkIfFiltered(filtered, index).urgent !== 'false') taskEditingForm.style.backgroundColor = 'salmon';
        taskEditingForm.classList.add('form', 'itemDiv');
        taskEditingForm.setAttribute('data-index', index);

        taskEditingForm.appendChild(_createTaskCompact(index));
        taskEditingForm.appendChild(_createTaskExtended(index));
        taskEditingForm.appendChild(_createButtonDiv(index));
        return taskEditingForm;
    }

    const _createTaskCompact = (index) => {
        const taskCompactEditor = document.createElement('div');
        taskCompactEditor.classList.add('taskCompact')

        taskCompactEditor.appendChild(_createCheckBoxInput(index));
        taskCompactEditor.appendChild(_createTaskNameInput(index)); 
        taskCompactEditor.appendChild(_createDateInput(index));
        return taskCompactEditor;
    }

    const _createCheckBoxInput = (index) => {
        const editFormCheckBox = document.createElement('input');
        editFormCheckBox.type = 'checkbox'; 
        editFormCheckBox.classList.add('checkbox');
        editFormCheckBox.id = 'editCheckbox';
        
        if(checkIfFiltered(filtered, index).urgent == 'true') {
            editFormCheckBox.checked = true;
        }else {
            editFormCheckBox.checked = false;
        } 
        return editFormCheckBox;
    }

    const _createTaskNameInput = (index) => {
        const taskNameInput = document.createElement('input');
        taskNameInput.classList.add('taskName');
        taskNameInput.id = 'taskNameEditor';
        taskNameInput.placeholder = `${checkIfFiltered(filtered, index).description}`;
        return taskNameInput;
    }

    const _createDateInput = (index) => {
        const dateInput = document.createElement('input');
        dateInput.classList.add('date');
        dateInput.id = 'dateEditor';
        dateInput.type = 'date';
        dateInput.value = `${checkIfFiltered(filtered, index).date}`;
        dateInput.placeholder = `"${checkIfFiltered(filtered, index).date}"`;
        return dateInput;
    }

    const _createTaskExtended = (index) => {
        const taskExtended = document.createElement('div');
        taskExtended.classList.add('taskExtended');

        taskExtended.appendChild(_createLabelDiv(index));
        taskExtended.appendChild(_createInputDiv(index));

        return taskExtended;
    }

    const _createLabelDiv = (index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('labelDiv');

        projectDiv.appendChild(_createProjectLabel(index));
        projectDiv.appendChild(_createNoteLabel(index));

        return projectDiv;
    }

    const _createProjectLabel = (index) => {
        const projectLabel = document.createElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:";

        return projectLabel;
    }

    const _createNoteLabel = (index) => {
        const noteLabel = document.createElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = "Notes:";

        return noteLabel;
    }

    const _createInputDiv = (index) => {
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('infoDiv');

        inputDiv.appendChild(_createProjectInput(index));
        inputDiv.appendChild(_createNoteInput(index));

        return inputDiv;
    }

     const _createProjectInput = (index) => {
        const projectInput = document.createElement('input');
        projectInput.classList.add('projectLabel');
        projectInput.id = 'projectEditor';
        projectInput.placeholder = `${checkIfFiltered(filtered, index).project}`;

        return projectInput;
    }   

    const _createNoteInput = (index) => {
        const noteInput = document.createElement('input');
        noteInput.classList.add('notes');   
        noteInput.id = 'noteEditor';
        noteInput.placeholder = `${checkIfFiltered(filtered, index).notes}`;

        return noteInput;
    }

    const _createButtonDiv = (index) => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');

        buttonDiv.appendChild(_createEnterBtn(index));
        buttonDiv.appendChild(_createCancelBtn(index));

        return buttonDiv;
    }

    const _createEnterBtn = (index) => {
        const enter = document.createElement('input');
        enter.type = "submit";
        enter.classList.add('enterBtn');
        enter.textContent = "Enter";

        return enter;
    }

    const _createCancelBtn = (index) => {
        const cancelBtn = document.createElement('input');
        cancelBtn.type = "button";
        cancelBtn.value = "Cancel";
        cancelBtn.name = "Cancel";
        cancelBtn.classList.add('cancelBtn');
        cancelBtn.textContent = "Cancel";

        return cancelBtn;
    }

    const checkIfFiltered = (filtered, index) => {
        if(filtered.innerText === "Project : All") {
            return ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index];
        }else {
            return ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index];
        }
    }

    return {
        replaceNode,
        checkIfFiltered,
    }
}

const editTaskBtns = () => {
    let _checkbox = document.getElementById('editCheckbox');
    let _name = document.getElementById('taskNameEditor');
    let _date = document.getElementById('dateEditor');
    let _project = document.getElementById('projectEditor');
    let _notes = document.getElementById('noteEditor');
    let _form = document.getElementById('editTaskForm');
    let _filtered =  document.querySelector('#filterLabel');

    const createCancelBtnListener = () => {
        let _allCancelBtns = document.getElementsByClassName('cancelBtn');
        for(let i=0; i<_allCancelBtns.length; i++){
            _allCancelBtns[i].addEventListener('click', _callCancel);
        }
    }

    const _callCancel = (e) => {
        e.preventDefault();
        _cancelEdit(e);
    }

    const _cancelEdit = (e) => {
        let index = e.target.parentNode.parentNode.dataset.index;
        e.target.parentNode.parentNode.after(DOM_Task_Factory()
            .newItemForm().appendFilledTaskCompact(editTasks().checkIfFiltered(_filtered, index), index));
        e.target.parentNode.parentNode.remove();
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.resetCarrotListeners();
    }
    
    const checkIfFiltered = (filtered, index) => {
        if(filtered.innerText === "Project : All") {
            return ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index]; 
        }else {
            return ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index];
        }
    }

    const validateUserEdit = () => {
        const _submitEditBtns = document.getElementsByClassName('enterBtn');
        for(let i=0; i<_submitEditBtns.length; i++){
            _submitEditBtns[i].addEventListener('click', _callEditSubmit);
        }
    }

    const _callEditSubmit = (e) => {
        return _submitUserEdit(e);
    }

    const _submitUserEdit = (e) => {
        e.preventDefault();
        let _index = e.target.parentNode.parentNode.dataset.index;
        let _filtered = document.querySelector('#filterLabel');
        _checkForNullEdit(e, _index);
        e.target.parentNode.parentNode.after(DOM_Task_Factory().newItemForm()
            .appendFilledTaskCompact(checkIfFiltered(_filtered, _index), _index));
        e.target.parentNode.parentNode.remove();
        localStorage.setItem('ToDo_List', JSON.stringify(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.resetCarrotListeners();
    }

    const _checkForNullEdit = (e, index) => {
        let ToDoListIndex = checkIndex(e);
        console.log(checkIndex(e));
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index]);
        if(_name.value !== '') {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].description = _name.value;
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].description = _name.value;
        }
        if(_date.value !== '') {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].date = _date.value;
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].date = _date.value;
        }
        if(_project.value !== '') {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].project = _project.value;
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].project = _project.value;
        }
        if(_notes.value !== '') {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].notes = _notes.value;
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].notes = _notes.value;
        }
        if(_checkbox.checked) {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].urgent = 'true';
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].urgent = 'true'; 
        }else {
            ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[ToDoListIndex].urgent = 'false';
            if(_filtered.innerText !== "Project : All") ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[index].urgent = 'false';
        } 
    }

    const checkIndex = (e) => {
        //=================================================
        let _filtered = document.querySelector('#filterLabel');
        let _index = e.target.parentNode.parentNode.dataset.index;
        for(let i=0; i<___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.length; i++){
            if(checkIfFiltered(_filtered, _index).description 
                === ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[i].description){
                    return i;
            }
        }
    }

    return {
        createCancelBtnListener,
        validateUserEdit,
    }
}
    
const expandTasks = () => {
    let _allCarrots = document.getElementsByClassName('taskCarrot');
    let deleteTaskBtns = document.getElementsByClassName('deleteEntry');
    let editTaskBtns = document.getElementsByClassName('editEntry');
    let _allItems = document.getElementsByClassName('itemDiv');
    const validate = validateForm();

    const addListenerToNewItem = (list) => {
        let i = (list.length - 1);
        _allCarrots[i].addEventListener('click', _callExpand);
    }
    
    const resetCarrotListeners = () => {
        let _allCarrotsDup = document.querySelectorAll('.taskCarrot');
        console.log(_allCarrotsDup);
        for(let i=0; i<_allCarrotsDup.length; i++) _resetCarrotNodes(_allCarrotsDup, i);
        listen(_allCarrotsDup);
    }

    const _resetCarrotNodes = (carrots, i) => {
        carrots[i].parentNode.parentNode.dataset.index = '';
        carrots[i].parentNode.parentNode.dataset.index = `${i}`;
        carrots[i].removeEventListener('click', _callExpand);

    }

    const _callExpand = (e) => {
        return _expand(e, e.target.parentNode.parentNode.getAttribute('data-index'));
    }

    const _expand = (e, i) => {
        let _selectTasks = document.querySelectorAll('.itemDiv');
        let _filter = document.querySelector('#filterLabel');
        let _allProjects = "Project : All";
        if(!e.target.classList.contains('active')){
            _checkForFilter(_allProjects, _selectTasks, _filter, i);
            _turnCarrot(e);
            _edit();
            _remove();
        }else {
            _shrink(e);
            _turnCarrot(e);
        }
    }

    const _checkForFilter = (allProjects, selectTasks, filter, i) => {
        if(filter.innerText == allProjects) {
            ___WEBPACK_IMPORTED_MODULE_2__.taskFactory.appendFilledTaskExtended(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[i], i, selectTasks[i]);
        }else {
            ___WEBPACK_IMPORTED_MODULE_2__.taskFactory.appendFilledTaskExtended(___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList[i], i, selectTasks[i]);
        }

    }

    const _edit = () => {
        for(let i=0; i<_allCarrots.length; i++){
            for(let j=0; j<editTaskBtns.length; j++){
                editTaskBtns[j].addEventListener('click', _callEdit);
            }

        }
    }

    const _callEdit = (e) => {
        _editTask(e);
    }

    const _editTask = (e) => {
        editTasks().replaceNode(e);
    }

   const _remove = () => {
        for(let i=0; i<_allCarrots.length; i++){
            for(let j=0; j<deleteTaskBtns.length; j++){
                deleteTaskBtns[j].addEventListener('click', deleteTask);
            }
        }
    }

    const deleteTask = (e) => {
        const containerDiv = e.target.parentNode.parentNode.parentNode;
        containerDiv.remove();
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.splice(containerDiv.dataset.index, 1);
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList.splice(containerDiv.dataset.index, 1);
            
        window.localStorage.setItem('ToDo_List', JSON.stringify(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        resetCarrotListeners();
    }

    const _shrink = (e) => {
        e.target.parentNode.parentNode.lastChild.remove();
    }

    const _turnCarrot = (e) => {
        e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
    }



    const listen = (carrots) => {
        console.log(carrots);
        for(let i=0; i<carrots.length; i++){
            carrots[i].addEventListener('click', _callExpand);
        }
    }
    
    return {
        listen,
        addListenerToNewItem,
        resetCarrotListeners,
    }
        
}

const handleCarrotClicks = (() => {

    const filterProjects = (list) => {
        addProjectsToArray(list);
        appendProjectsToSidebar(___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList);
        addListenerToProjectLabels();
        ___WEBPACK_IMPORTED_MODULE_2__.doc.carrot.removeEventListener('click', ___WEBPACK_IMPORTED_MODULE_2__.callExpandProjects);
        ___WEBPACK_IMPORTED_MODULE_2__.doc.carrot.addEventListener('click', callReduceProjects);
    }

    const addProjectsToArray = (list) => {
        for(let i=0; i<list.length; i++){
            if(!___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.includes(list[i].project)) {
                if(list[i].project != null) {
                    ___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.push(list[i].project);
                }
            }
        }
    }

    const callReduceProjects = () => {
        return reduceProjects();
    }
    
    const reduceProjects = () => {
        ___WEBPACK_IMPORTED_MODULE_2__.doc.expandProjectsMenu();
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.splice(0, ___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.length);
        clearProjects();
        ___WEBPACK_IMPORTED_MODULE_2__.doc.carrot.removeEventListener('click', callReduceProjects);
        ___WEBPACK_IMPORTED_MODULE_2__.doc.carrot.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_2__.callExpandProjects);
    }

    const clearProjects = () => {
        const projectLabels = document.querySelectorAll('.projectFilterLabel');
        for(let i=0; i<projectLabels.length; i++){
            projectLabels[i].remove();
        }
    }

    const appendProjectsToSidebar = (list) => {
        const sidebar = document.getElementById('sidebar');
        const projectLinkDiv = document.createElement('div');
        projectLinkDiv.id = "projectLinkDiv";
        for(let i=0; i<list.length; i++){
            projectLinkDiv.appendChild(createProjectLink(list[i])); 
        }
        sidebar.append(projectLinkDiv);
    }

    const createProjectLink = (input) => {
        const label = document.createElement('h5');
        label.classList.add('projectFilterLabel');
        label.textContent = input;
        return label;
    }

    const addListenerToProjectLabels = () => {
        const projectLabels = document.querySelectorAll('.projectFilterLabel');
        for(let i=0; i<projectLabels.length; i++) {
            projectLabels[i].addEventListener('click', callFilterToDos);
        }
    }

    const callFilterToDos = (e) => {
        return filter().filterToDos(e);
    }

    return {
        filterProjects,
    }
})();

const filter = () => {
    let filterLabel = document.querySelector('#filterLabel');
    const container = document.querySelector('#listContainer');

    const createRemoveFilterBtn = (() => {
        const removeFilterContainer = document.createElement('div');
        removeFilterContainer.id = "removeFilterContainer";

        const filterCancelBtn = document.createElement('div');
        filterCancelBtn.id = "removeFilter";
        filterCancelBtn.textContent = "-";

        const removeFilterLabel = document.createElement('p');
        removeFilterLabel.id = "removeFilterLabel";
        removeFilterLabel.textContent = "remove filter";

        return {
            removeFilterContainer,
            filterCancelBtn,
            removeFilterLabel,
        }
    })();
    
    const filterToDos = (e) => {
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList = ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.reduce((a, current, i) => 
            (current.project === e.target.textContent) ? a.concat(current) : a, []);
        if(filterLabel.innerText == "Project : All") _appendRemoveFilterBtn();
        filterLabel.textContent = `Project : ${e.target.textContent}`;
        _applyFilter(___WEBPACK_IMPORTED_MODULE_2__.newToDo.filteredList, e);
        _createFilteredCarrotListeners();
    }

    const _appendRemoveFilterBtn = () => {
        let filterLabelDiv = document.querySelector("#filterLabelDiv");
        createRemoveFilterBtn.removeFilterContainer.appendChild(createRemoveFilterBtn.filterCancelBtn);
        createRemoveFilterBtn.removeFilterContainer.appendChild(createRemoveFilterBtn.removeFilterLabel);
        filterLabelDiv.appendChild(createRemoveFilterBtn.removeFilterContainer);
        _addRemoveFilterListener();
    }

    const _addRemoveFilterListener = () => {
        createRemoveFilterBtn.filterCancelBtn.addEventListener('click', _callRemoveFilter);
    }

    const _callRemoveFilter = (e) => {
        return removeFilter(e, filterLabel);
    }

    const _applyFilter = (list, e) => {
        const tasks = document.querySelectorAll('.itemDiv');
        _removeUnfilteredTasks(tasks);        
        _appendFilteredTasks(list, container);
    }

    const _removeUnfilteredTasks = (tasks) => {
        for(let i=0; i<tasks.length; i++) tasks[i].remove();
    }

    const _appendFilteredTasks = (list, container) => {
        for(let i=0; i<list.length; i++){
            container.appendChild(___WEBPACK_IMPORTED_MODULE_2__.taskFactory.newItemForm().appendFilledTaskCompact(list[i], i));
        }
    }

    const _createFilteredCarrotListeners = () => {
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.resetCarrotListeners();
    }

    const removeFilter = (e, label) => {
        label.innerText = "Project : All";
        const _tasks = document.querySelectorAll('.itemDiv');
        e.target.parentNode.remove();
        for(let i=0; i<_tasks.length; i++) _tasks[i].remove();
        for(let i=0; i<___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.length; i++){
            container.appendChild(___WEBPACK_IMPORTED_MODULE_2__.taskFactory.newItemForm()
            .appendFilledTaskCompact(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[i], i));
        }
        let carrots = document.querySelectorAll('.taskCarrot');
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.listen(carrots);
    }

    return {
        filterToDos,
    }
}







            

/***/ }),

/***/ "./src/ToDo_Object_Factory.js":
/*!************************************!*\
  !*** ./src/ToDo_Object_Factory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo_Item": () => (/* binding */ ToDo_Item)
/* harmony export */ });
const ToDo_Item = () => {
    const test = console.log('works');
    const ToDoList = [];
    const projectList = [];
    const filteredList = [];

    const newItem = (description , date, project, notes, urgent) =>{
        return {
            description,
            date,
            project,
            notes, 
            urgent,
        }
    }
    
    const printArrayItem = (arrayItem) => {
        
    }


    return {
        test,
        ToDoList,
        projectList,
        filteredList,
        newItem,
    }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newToDo": () => (/* binding */ newToDo),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory),
/* harmony export */   "doc": () => (/* binding */ doc),
/* harmony export */   "listenForExpand": () => (/* binding */ listenForExpand),
/* harmony export */   "callExpandProjects": () => (/* binding */ callExpandProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menuButton_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuButton.png */ "./src/menuButton.png");
/* harmony import */ var _up_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./up-arrow.png */ "./src/up-arrow.png");
/* harmony import */ var _DOM_Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM-Manager */ "./src/DOM-Manager.js");
/* harmony import */ var _ToDo_Object_Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToDo_Object_Factory */ "./src/ToDo_Object_Factory.js");






console.log('hello');

const taskFactory = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.DOM_Task_Factory)();
const div = taskFactory.itemDiv;
console.log({div});

const doc = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.DOM_Factory)();

const listenForExpand = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.expandTasks)();



doc.projectsLabelDiv.insertBefore(doc.carrot, doc.projectsLabelDiv.firstChild);

doc.menu.addEventListener('click', doc.showMenu);

const callExpandProjects = (e) => {
    return doc.expandProjectsMenu();
}
doc.carrot.addEventListener('click', callExpandProjects);

doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);


const removeItem = node => {
    console.log(node);
    console.log(node.target.parentNode.parentNode);
    node.target.parentNode.parentNode.remove();
    if(node.target.parentNode.parentNode.id === 'emptyForm') {
        doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);
    }
}

const listenForDelete = () => {
    const deleteBtn = document.getElementsByClassName('deleteEntry');
    for(let i=0; i<deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', removeItem);
    }
}

listenForDelete();
doc.addBtn.addEventListener('click', listenForDelete);


const responsiveSidebar = (() => {
    const minSize = window.matchMedia("(min-width: 500px)");
    const maxSize = window.matchMedia("(max-width: 500px)");
    

    const sidebarMediaQuery = (min, max) => {
        if(max.matches) {
            doc.sidebar.classList.remove('active');
            doc.taskContainer.classList.remove('active');
        }else if(min.matches) {
            doc.sidebar.classList.add('active');
            doc.taskContainer.classList.add('active');
        }
    } 

    return {
        minSize,
        maxSize,
        sidebarMediaQuery,
    };
})();

window.onload = responsiveSidebar.sidebarMediaQuery(responsiveSidebar.minSize, responsiveSidebar.maxSize);


let newToDo = (0,_ToDo_Object_Factory__WEBPACK_IMPORTED_MODULE_4__.ToDo_Item)();

window.addEventListener("load", taskFactory.newItemForm().appendFilledItemForm(JSON.parse(window.localStorage.getItem('ToDo_List'))));

let testValidate = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.validateForm)();
testValidate.run();


doc.addBtn.addEventListener('click', function(){
    console.log(testValidate.form)})

let allCarrots = document.querySelectorAll('.taskCarrot');
listenForExpand.listen(allCarrots);

console.log(JSON.parse(window.localStorage.getItem('ToDo_List')));
newToDo.ToDoList = JSON.parse(localStorage.getItem('ToDo_List'));



/***/ }),

/***/ "./src/menuButton.png":
/*!****************************!*\
  !*** ./src/menuButton.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2da5477c2f328eb794b2.png";

/***/ }),

/***/ "./src/up-arrow.png":
/*!**************************!*\
  !*** ./src/up-arrow.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23ec883ef678161c8a09.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFRDs7O0FBR0EsY0FBYywrREFBUzs7QUFFdkI7O0FBRUEsbUJBQW1CLDBEQUFZO0FBQy9COzs7QUFHQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9Eb19PYmplY3RfRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21lbnVCdXR0b24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgR2xvYmFsIHN0eWxlc1xcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4qe1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBMYXlvdXRcXG4gICAgLWNvbnRhaW5lciBhbmQgaGVhZGVyXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbiNhZGRCdG5Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuI2ZpbHRlckxhYmVsRGl2IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyZW07XFxufVxcblxcbiNmaWx0ZXJMYWJlbCB7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNyZW1vdmVGaWx0ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC41ZW07XFxufVxcblxcbiNyZW1vdmVGaWx0ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcXG59XFxuXFxuI3JlbW92ZUZpbHRlckxhYmVsIHtcXG4gICAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBzaWRlYmFyIFxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuXFxuI3NpZGViYXJIZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWVudUxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuXFxuI3NpZGViYXIuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogODBweDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jcHJvamVjdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdExpbmtEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41ZW07XFxufVxcblxcbi5wcm9qZWN0RmlsdGVyTGFiZWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ucHJvamVjdEZpbHRlckxhYmVsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHNMYWJlbERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDI3LCAyNCwgMjQpO1xcbn1cXG5cXG4jY2Fycm90IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxuICAgIGZpbGw6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jYXJyb3RCdG4ge1xcbiAgICBmaWx0ZXI6IHNlcGlhKDgwJSk7XFxufVxcblxcbiNjYXJyb3QuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgbWFpbiBkaXYgXFxuICAgIC1ob2xkcyB0YXNrcyAgXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsaXN0Q29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG59XFxuXFxuLml0ZW1EaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IC41ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBcXG59XFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi50YXNrQ29tcGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLnRhc2tOYW1lIHtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICB9XFxufVxcblxcbi5kYXRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4vKiAucHJvamVjdExhYmVsRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLnByb2plY3RMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0TmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogdW5zZXQ7XFxufSAqL1xcblxcbi50YXNrRXh0ZW5kZWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWxEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xcbn1cXG5cXG4ubGFiZWxEaXYgaDUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjFyZW07XFxufVxcblxcbi5pbmZvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5mb0RpdiBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmluZm9EaXYgaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcXG59XFxuXFxuLyogLm5vdGVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn0gKi9cXG5cXG4vKiAubm90ZUxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59ICovXFxuXFxuLyogLm5vdGVzIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn0gKi9cXG5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIHtcXG4gICAgLnByb2plY3RMYWJlbCwgLm5vdGVMYWJlbCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNGVtO1xcbiAgICB9XFxufSAqL1xcblxcbi5idXR0b25EaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxZW07ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgaGVpZ2h0OiA7XFxufVxcblxcbi50YXNrQ2Fycm90IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4udGFza0NhcnJvdC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzt5QkFFeUI7O0FBRXpCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixz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RUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDs7R0FFRzs7QUFFSDs7OztHQUlHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7OztHQUtHOztBQUVIOztHQUVHOztBQUVIOzs7O0dBSUc7O0FBRUg7Ozs7R0FJRzs7QUFFSDtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBHbG9iYWwgc3R5bGVzXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbip7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIExheW91dFxcbiAgICAtY29udGFpbmVyIGFuZCBoZWFkZXJcXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHotaW5kZXg6IDEwMDAwO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vbWVudUJ1dHRvbi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbiNhZGRCdG5Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuI2ZpbHRlckxhYmVsRGl2IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyZW07XFxufVxcblxcbiNmaWx0ZXJMYWJlbCB7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNyZW1vdmVGaWx0ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC41ZW07XFxufVxcblxcbiNyZW1vdmVGaWx0ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcXG59XFxuXFxuI3JlbW92ZUZpbHRlckxhYmVsIHtcXG4gICAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBzaWRlYmFyIFxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuXFxuI3NpZGViYXJIZWFkZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWVudUxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuXFxuI3NpZGViYXIuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogODBweDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jcHJvamVjdHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdExpbmtEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41ZW07XFxufVxcblxcbi5wcm9qZWN0RmlsdGVyTGFiZWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ucHJvamVjdEZpbHRlckxhYmVsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHNMYWJlbERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDI3LCAyNCwgMjQpO1xcbn1cXG5cXG4jY2Fycm90IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxuICAgIGZpbGw6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jYXJyb3RCdG4ge1xcbiAgICBmaWx0ZXI6IHNlcGlhKDgwJSk7XFxufVxcblxcbiNjYXJyb3QuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgbWFpbiBkaXYgXFxuICAgIC1ob2xkcyB0YXNrcyAgXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsaXN0Q29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG59XFxuXFxuLml0ZW1EaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IC41ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBcXG59XFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi50YXNrQ29tcGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLnRhc2tOYW1lIHtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICB9XFxufVxcblxcbi5kYXRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4vKiAucHJvamVjdExhYmVsRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLyogLnByb2plY3RMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0TmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogdW5zZXQ7XFxufSAqL1xcblxcbi50YXNrRXh0ZW5kZWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWxEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xcbn1cXG5cXG4ubGFiZWxEaXYgaDUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjFyZW07XFxufVxcblxcbi5pbmZvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5mb0RpdiBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmluZm9EaXYgaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcXG59XFxuXFxuLyogLm5vdGVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn0gKi9cXG5cXG4vKiAubm90ZUxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59ICovXFxuXFxuLyogLm5vdGVzIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn0gKi9cXG5cXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIHtcXG4gICAgLnByb2plY3RMYWJlbCwgLm5vdGVMYWJlbCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNGVtO1xcbiAgICB9XFxufSAqL1xcblxcbi5idXR0b25EaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxZW07ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgaGVpZ2h0OiA7XFxufVxcblxcbi50YXNrQ2Fycm90IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4udGFza0NhcnJvdC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENhcnJvdCBmcm9tICcuL3VwLWFycm93LnBuZyc7XG5pbXBvcnQgeyBUb0RvX0l0ZW0gfSBmcm9tICcuL1RvRG9fT2JqZWN0X0ZhY3RvcnknO1xuaW1wb3J0IHsgbmV3VG9EbywgdGFza0ZhY3RvcnksIGRvYywgbGlzdGVuRm9yRXhwYW5kLCBjYWxsRXhwYW5kUHJvamVjdHMgfSBmcm9tICcuJztcblxuXG4vKiBnZXQgRE9NIGVsZW1lbnRzICovXG5jb25zdCBET01fRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0c0xhYmVsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTGFiZWxEaXYnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJyk7XG4gICAgXG4gICAgY29uc3QgY2Fycm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2Fycm90LmlkID0gXCJjYXJyb3RcIjtcbiAgICBjYXJyb3Quc3JjID0gQ2Fycm90O1xuXG4gICAgY29uc3Qgc2hvd01lbnUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBleHBhbmRQcm9qZWN0c01lbnUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgKGNhcnJvdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSA/IGNhcnJvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSA6XG4gICAgICAgICAgICBjYXJyb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGlmKGNhcnJvdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBuZXdUb0RvLnByb2plY3RMaXN0LnB1c2goaGFuZGxlQ2Fycm90Q2xpY2tzLmZpbHRlclByb2plY3RzKG5ld1RvRG8uVG9Eb0xpc3QpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZEJ0bixcbiAgICAgICAgc2lkZWJhcixcbiAgICAgICAgcHJvamVjdHNMYWJlbERpdixcbiAgICAgICAgY2Fycm90LFxuICAgICAgICBtZW51LFxuICAgICAgICB0YXNrQ29udGFpbmVyLFxuICAgICAgICBzaG93TWVudSxcbiAgICAgICAgZXhwYW5kUHJvamVjdHNNZW51LFxuICAgIH1cbn1cblxuLyogY3JlYXRlIGFuZCBhcHBlbmQgbmV3IERPTSBlbGVtZW50cyB3aGVuIHVzZXIgYWRkcyBvciBlZGl0cyB0YXNrICovXG5jb25zdCBET01fVGFza19GYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0YWcgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya1VyZ2VudCA9IChpdGVtLCBpdGVtRGl2KSA9PiB7XG4gICAgICAgIGlmKGl0ZW0udXJnZW50ID09ICd0cnVlJykge1xuICAgICAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGl0ZW1EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzYWxtb25cIjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZEZpbGxlZFRhc2tFeHRlbmRlZCA9IChhcnIsIGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCB0YXNrRmlsbGVkRXh0ZW5kZWQgPSBuZXdFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0ZpbGxlZEV4dGVuZGVkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tFeHRlbmRlZCcpXG5cbiAgICAgICAgbGV0IGxhYmVscyA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYWJlbHMuY2xhc3NMaXN0LmFkZCgnbGFiZWxEaXYnKTtcblxuICAgICAgICBsZXQgaW5mbyA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm9EaXYnKTtcblxuICAgICAgICBsZXQgcHJvamVjdExhYmVsRGl2ID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RMYWJlbERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWxEaXYnKTtcblxuICAgICAgICBsZXQgcHJvamVjdExhYmVsID0gbmV3RWxlbWVudCgnaDUnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCJcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBuZXdFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7YXJyLnByb2plY3R9YDtcblxuICAgICAgICBsZXQgbm90ZURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVEaXYnKTtcblxuICAgICAgICBsZXQgbm90ZUxhYmVsID0gbmV3RWxlbWVudCgnaDUnKTtcbiAgICAgICAgbm90ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ25vdGVMYWJlbCcpO1xuICAgICAgICBub3RlTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXM6J1xuICAgICAgICBcbiAgICAgICAgbGV0IG5vdGVzID0gbmV3RWxlbWVudCgncCcpO1xuICAgICAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xuICAgICAgICBub3Rlcy50ZXh0Q29udGVudCA9IGAke2Fyci5ub3Rlc31gXG5cbiAgICAgICAgbGV0IGJ1dHRvbkRpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uRGl2Jyk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBuZXdFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0RW50cnknKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gbmV3RWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVFbnRyeScpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICBsYWJlbHMuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgbGFiZWxzLmFwcGVuZENoaWxkKG5vdGVMYWJlbCk7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICAgICAgdGFza0ZpbGxlZEV4dGVuZGVkLmFwcGVuZENoaWxkKGxhYmVscyk7XG4gICAgICAgIHRhc2tGaWxsZWRFeHRlbmRlZC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgdGFza0ZpbGxlZEV4dGVuZGVkLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGFza0ZpbGxlZEV4dGVuZGVkKTtcbiAgICAgICAgfVxuXG4gICAgY29uc3QgbmV3SXRlbUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFRvRG8gPSBUb0RvX0l0ZW0oKTtcblxuICAgICAgICBjb25zdCAgaXRlbURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcblxuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IG5ld0VsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICBpdGVtRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcvJyk7XG4gICAgICAgIGl0ZW1Gb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ0dFVCcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wYWN0ID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb21wYWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wYWN0Jyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBuZXdFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveC5pZCA9ICd1cmdlbnQnO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTV9GYWN0b3J5KCk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRhc2tFeHRlbmRlZCA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRXh0ZW5kZWQuY2xhc3NMaXN0LmFkZCgndGFza0V4dGVuZGVkJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0V4dGVuZGVkTGFiZWxzID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tFeHRlbmRlZExhYmVscy5jbGFzc0xpc3QuYWRkKCdsYWJlbERpdicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFeHRlbmRlZElucHV0cyA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRXh0ZW5kZWRJbnB1dHMuY2xhc3NMaXN0LmFkZCgnaW5mb0RpdicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IG5ld0VsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OiBcIlxuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3RWxlbWVudCgnaDUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcblxuXG4gICAgICAgIGNvbnN0IG5vdGVMYWJlbCA9IG5ld0VsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIG5vdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdub3RlTGFiZWwnKTtcbiAgICAgICAgbm90ZUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlczpcIjtcblxuICAgICAgICBjb25zdCBub3RlcyA9IG5ld0VsZW1lbnQoJ3AnKTtcbiAgICAgICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcblxuICAgICAgICBjb25zdCBidXR0b25EaXYgPSBuZXdFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkRpdicpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBuZXdFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0RW50cnknKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IG5ld0VsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlRW50cnknKTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgICAgICBjb25zdCBkZWxldGVGb3JtQnRuID0gbmV3RWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUZvcm1CdG4uaWQgPSBcImRlbGV0ZUJ0blwiO1xuICAgICAgICBkZWxldGVGb3JtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgICAgICBjb25zdCBlbnRlckJ0biA9IG5ld0VsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbnRlckJ0bi5jbGFzc0xpc3QuYWRkKCdlbnRlckJ0bicpO1xuICAgICAgICBlbnRlckJ0bi5pZCAgPSAnZW50ZXInO1xuICAgICAgICBlbnRlckJ0bi50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgICAgICAgZW50ZXJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IG5ld0VsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkID0gXCJ0YXNrTmFtZVwiO1xuICAgICAgICB0YXNrSW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFRhc2snKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0YXNrSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IG5ld0VsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBEYXRlOiBcInl5eXktbW0tZGRcIicpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gbmV3RWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgICAgcHJvamVjdElucHV0LmlkID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IG5vdGVJbnB1dCA9IG5ld0VsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5vdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibm90ZXNcIik7XG4gICAgICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIE5vdGVzJyk7XG4gICAgICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZScpO1xuICAgICAgICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBjb25zdCBhcHBlbmRFbXB0eVRhc2tDb21wYWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbXBhY3QuYXBwZW5kQ2hpbGQoY2hlY2tib3guY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIHRhc2tDb21wYWN0LmFwcGVuZENoaWxkKHRhc2tJbnB1dC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgdGFza0NvbXBhY3QuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZCh0YXNrQ29tcGFjdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgaXRlbUZvcm0uaWQgPSAnZW1wdHlGb3JtJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFwcGVuZEZpbGxlZFRhc2tDb21wYWN0ID0gKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsbGVkSXRlbURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZmlsbGVkSXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICAgICAgICBmaWxsZWRJdGVtRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2luZGV4fWApO1xuXG4gICAgICAgICAgICBsZXQgIHRhc2tDb21wYWN0RmlsbGVkID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ29tcGFjdEZpbGxlZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGFjdCcpO1xuXG4gICAgICAgICAgICBsZXQgdGFza0NhcnJvdCA9IG5ld0VsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgdGFza0NhcnJvdC5jbGFzc0xpc3QgPSAndGFza0NhcnJvdCc7XG4gICAgICAgICAgICB0YXNrQ2Fycm90LnNyYyA9IENhcnJvdDtcblxuICAgICAgICAgICAgbGV0IGZpbGxlZFRhc2tOYW1lID0gbmV3RWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGZpbGxlZFRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG4gICAgICAgICAgICBmaWxsZWRUYXNrTmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICAgICAgbGV0IGZpbGxlZFRhc2tEYXRlID0gbmV3RWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGZpbGxlZFRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgICAgIGZpbGxlZFRhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7aXRlbS5kYXRlfWA7XG5cbiAgICAgICAgICAgIG1hcmtVcmdlbnQoaXRlbSwgZmlsbGVkSXRlbURpdik7XG5cbiAgICAgICAgICAgIHRhc2tDb21wYWN0RmlsbGVkLmFwcGVuZENoaWxkKHRhc2tDYXJyb3QuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIHRhc2tDb21wYWN0RmlsbGVkLmFwcGVuZENoaWxkKGZpbGxlZFRhc2tOYW1lLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICB0YXNrQ29tcGFjdEZpbGxlZC5hcHBlbmRDaGlsZChmaWxsZWRUYXNrRGF0ZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgZmlsbGVkSXRlbURpdi5hcHBlbmRDaGlsZCh0YXNrQ29tcGFjdEZpbGxlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsbGVkSXRlbURpdjtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGFwcGVuZEVtcHR5VGFza0V4dGVuZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFza0V4dGVuZGVkTGFiZWxzLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgICAgICB0YXNrRXh0ZW5kZWRMYWJlbHMuYXBwZW5kQ2hpbGQobm90ZUxhYmVsKTtcbiAgICAgICAgICAgIHRhc2tFeHRlbmRlZElucHV0cy5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgICAgICAgICAgdGFza0V4dGVuZGVkSW5wdXRzLmFwcGVuZENoaWxkKG5vdGVJbnB1dCk7XG4gICAgICAgICAgICAvLyBwcm9qZWN0TGFiZWxEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgICAgIC8vIHByb2plY3RMYWJlbERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgICAgICAgICAgLy8gdGFza0V4dGVuZGVkLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbERpdik7XG4gICAgICAgICAgICAvLyBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVMYWJlbCk7XG4gICAgICAgICAgICAvLyBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVJbnB1dCk7XG4gICAgICAgICAgICB0YXNrRXh0ZW5kZWQuYXBwZW5kQ2hpbGQodGFza0V4dGVuZGVkTGFiZWxzKTtcbiAgICAgICAgICAgIHRhc2tFeHRlbmRlZC5hcHBlbmRDaGlsZCh0YXNrRXh0ZW5kZWRJbnB1dHMpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQodGFza0V4dGVuZGVkKTtcbiAgICBcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXBwZW5kRW1wdHlCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVudGVyQnRuKTtcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVGb3JtQnRuKTtcbiAgICAgICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBlbmRFbXB0eUl0ZW1Gb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwZW5kRW1wdHlUYXNrQ29tcGFjdCgpO1xuICAgICAgICAgICAgYXBwZW5kRW1wdHlUYXNrRXh0ZW5kZWQoKTtcbiAgICAgICAgICAgIGFwcGVuZEVtcHR5QnV0dG9ucygpO1xuICAgICAgICAgICAgY29udGFpbmVyLnRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRFbXB0eUl0ZW1Gb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICB2YWxpZGF0ZS5ydW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFwcGVuZEZpbGxlZEl0ZW1Gb3JtID0gKG5ld1RvRG8pID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG5ld1RvRG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIudGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBlbmRGaWxsZWRUYXNrQ29tcGFjdChuZXdUb0RvW2ldLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBlbmROZXdJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGl0ZW0uVG9Eb0xpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnRhaW5lci50YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGVuZEZpbGxlZFRhc2tDb21wYWN0KGl0ZW0uVG9Eb0xpc3RbaW5kZXhdLCBpbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcGVuZEVtcHR5SXRlbUZvcm0sXG4gICAgICAgICAgICBhcHBlbmRGaWxsZWRJdGVtRm9ybSxcbiAgICAgICAgICAgIGFwcGVuZE5ld0l0ZW0sIFxuICAgICAgICAgICAgYXBwZW5kRmlsbGVkVGFza0NvbXBhY3QsXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5yZXR1cm4ge1xuICAgICAgICBuZXdJdGVtRm9ybSxcbiAgICAgICAgbWFya1VyZ2VudCxcbiAgICAgICAgYXBwZW5kRmlsbGVkVGFza0V4dGVuZGVkLFxuICAgIH1cbn1cblxuY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wdHlGb3JtJyk7XG4gICAgY29uc3QgZGVsZXRlRm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVCdG4nKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmdlbnQnKTtcbiAgICBcbiAgICBsZXQgdXNlckVudHJpZXM7XG4gICAgXG4gICAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgICAgICBpZihmb3JtICE9PSBudWxsKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNvbGxlY3QpO1xuICAgICAgICBpZihmb3JtICE9PSBudWxsKSBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZEV4cGFuZExpc3RlbmVyKTtcbiAgICAgICAgaWYoZGVsZXRlRm9ybUJ0biAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVsZXRlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgRE9NX0ZhY3RvcnkoKS5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01fVGFza19GYWN0b3J5KCkubmV3SXRlbUZvcm0oKS5hcHBlbmRFbXB0eUl0ZW1Gb3JtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gY29sbGVjdChlKSB7XG4gICAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGlzVXJnZW50ID0gY2hlY2soY2hlY2tib3gsIGUpO1xuICAgICAgICBpc1VyZ2VudDtcbiAgICAgICAgdXNlckVudHJpZXMgPSBuZXdUb0RvLm5ld0l0ZW0oYCR7ZS50YXJnZXQubmFtZS52YWx1ZX1gLCBgJHtlLnRhcmdldC5kYXRlLnZhbHVlfWAsXG4gICAgICAgICAgICBgJHtlLnRhcmdldC5wcm9qZWN0LnZhbHVlfWAsIGAke2UudGFyZ2V0Lm5vdGUudmFsdWV9YCwgYCR7ZS50YXJnZXQudXJnZW50LnZhbHVlfWApO1xuICAgIFxuICAgICAgICBuZXdUb0RvLlRvRG9MaXN0LnB1c2godXNlckVudHJpZXMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9Eb19MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3VG9Eby5Ub0RvTGlzdCkpO1xuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICB0YXNrRmFjdG9yeS5uZXdJdGVtRm9ybSgpLmFwcGVuZE5ld0l0ZW0obmV3VG9Ebyk7XG4gICAgICAgIGRvYy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRmFjdG9yeS5uZXdJdGVtRm9ybSgpLmFwcGVuZEVtcHR5SXRlbUZvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrKGNoZWNrYm94LCBlKSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUgPyBlLnRhcmdldC51cmdlbnQudmFsdWUgPSB0cnVlIDpcbiAgICAgICAgICAgIGUudGFyZ2V0LnVyZ2VudC52YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEV4cGFuZExpc3RlbmVyID0gKGUpID0+IHtcbiAgICAgICAgbGlzdGVuRm9yRXhwYW5kLmFkZExpc3RlbmVyVG9OZXdJdGVtKG5ld1RvRG8uVG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bixcbiAgICAgICAgZm9ybSxcbiAgICB9XG4gICAgXG59O1xuXG5jb25zdCBlZGl0VGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IGZpbHRlcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxhYmVsJyk7XG5cbiAgICBjb25zdCByZXBsYWNlTm9kZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9ICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBsZXQgY2xpY2tlZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWluZGV4ID0gJyR7aW5kZXh9J11gKTtcblxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hZnRlcihfY3JlYXRlRWRpdEZvcm0oaW5kZXgpKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRUYXNrQnRucygpLnZhbGlkYXRlVXNlckVkaXQoZSk7XG4gICAgICAgIGVkaXRUYXNrQnRucygpLmNyZWF0ZUNhbmNlbEJ0bkxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUVkaXRGb3JtID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFZGl0aW5nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0VkaXRpbmdGb3JtLmFjdGlvbiA9IFwiL1wiO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uaWQgPSBcImVkaXRUYXNrRm9ybVwiXG4gICAgICAgIGlmKGNoZWNrSWZGaWx0ZXJlZChmaWx0ZXJlZCwgaW5kZXgpLnVyZ2VudCAhPT0gJ2ZhbHNlJykgdGFza0VkaXRpbmdGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdzYWxtb24nO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScsICdpdGVtRGl2Jyk7XG4gICAgICAgIHRhc2tFZGl0aW5nRm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG5cbiAgICAgICAgdGFza0VkaXRpbmdGb3JtLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrQ29tcGFjdChpbmRleCkpO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFeHRlbmRlZChpbmRleCkpO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uYXBwZW5kQ2hpbGQoX2NyZWF0ZUJ1dHRvbkRpdihpbmRleCkpO1xuICAgICAgICByZXR1cm4gdGFza0VkaXRpbmdGb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ29tcGFjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ29tcGFjdEVkaXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ29tcGFjdEVkaXRvci5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGFjdCcpXG5cbiAgICAgICAgdGFza0NvbXBhY3RFZGl0b3IuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNoZWNrQm94SW5wdXQoaW5kZXgpKTtcbiAgICAgICAgdGFza0NvbXBhY3RFZGl0b3IuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tOYW1lSW5wdXQoaW5kZXgpKTsgXG4gICAgICAgIHRhc2tDb21wYWN0RWRpdG9yLmFwcGVuZENoaWxkKF9jcmVhdGVEYXRlSW5wdXQoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIHRhc2tDb21wYWN0RWRpdG9yO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVDaGVja0JveElucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnOyBcbiAgICAgICAgZWRpdEZvcm1DaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LmlkID0gJ2VkaXRDaGVja2JveCc7XG4gICAgICAgIFxuICAgICAgICBpZihjaGVja0lmRmlsdGVyZWQoZmlsdGVyZWQsIGluZGV4KS51cmdlbnQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGVkaXRGb3JtQ2hlY2tCb3g7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVRhc2tOYW1lSW5wdXQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza05hbWUnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZUVkaXRvcic7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBgJHtjaGVja0lmRmlsdGVyZWQoZmlsdGVyZWQsIGluZGV4KS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICByZXR1cm4gdGFza05hbWVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRGF0ZUlucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlRWRpdG9yJztcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGAke2NoZWNrSWZGaWx0ZXJlZChmaWx0ZXJlZCwgaW5kZXgpLmRhdGV9YDtcbiAgICAgICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gYFwiJHtjaGVja0lmRmlsdGVyZWQoZmlsdGVyZWQsIGluZGV4KS5kYXRlfVwiYDtcbiAgICAgICAgcmV0dXJuIGRhdGVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlVGFza0V4dGVuZGVkID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFeHRlbmRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRXh0ZW5kZWQuY2xhc3NMaXN0LmFkZCgndGFza0V4dGVuZGVkJyk7XG5cbiAgICAgICAgdGFza0V4dGVuZGVkLmFwcGVuZENoaWxkKF9jcmVhdGVMYWJlbERpdihpbmRleCkpO1xuICAgICAgICB0YXNrRXh0ZW5kZWQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0RGl2KGluZGV4KSk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tFeHRlbmRlZDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlTGFiZWxEaXYgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2xhYmVsRGl2Jyk7XG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdExhYmVsKGluZGV4KSk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZU5vdGVMYWJlbChpbmRleCkpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0RGl2O1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVQcm9qZWN0TGFiZWwgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RMYWJlbDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlTm90ZUxhYmVsID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIG5vdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdub3RlTGFiZWwnKTtcbiAgICAgICAgbm90ZUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlczpcIjtcblxuICAgICAgICByZXR1cm4gbm90ZUxhYmVsO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVJbnB1dERpdiA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbmZvRGl2Jyk7XG5cbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByb2plY3RJbnB1dChpbmRleCkpO1xuICAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChfY3JlYXRlTm90ZUlucHV0KGluZGV4KSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0RGl2O1xuICAgIH1cblxuICAgICBjb25zdCBfY3JlYXRlUHJvamVjdElucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICAgICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3RFZGl0b3InO1xuICAgICAgICBwcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSBgJHtjaGVja0lmRmlsdGVyZWQoZmlsdGVyZWQsIGluZGV4KS5wcm9qZWN0fWA7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RJbnB1dDtcbiAgICB9ICAgXG5cbiAgICBjb25zdCBfY3JlYXRlTm90ZUlucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5vdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdub3RlcycpOyAgIFxuICAgICAgICBub3RlSW5wdXQuaWQgPSAnbm90ZUVkaXRvcic7XG4gICAgICAgIG5vdGVJbnB1dC5wbGFjZWhvbGRlciA9IGAke2NoZWNrSWZGaWx0ZXJlZChmaWx0ZXJlZCwgaW5kZXgpLm5vdGVzfWA7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlQnV0dG9uRGl2ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uRGl2Jyk7XG5cbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFbnRlckJ0bihpbmRleCkpO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNhbmNlbEJ0bihpbmRleCkpO1xuXG4gICAgICAgIHJldHVybiBidXR0b25EaXY7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUVudGVyQnRuID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZW50ZXIudHlwZSA9IFwic3VibWl0XCI7XG4gICAgICAgIGVudGVyLmNsYXNzTGlzdC5hZGQoJ2VudGVyQnRuJyk7XG4gICAgICAgIGVudGVyLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xuXG4gICAgICAgIHJldHVybiBlbnRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlQ2FuY2VsQnRuID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgY2FuY2VsQnRuLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICAgICAgY2FuY2VsQnRuLm5hbWUgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnRuJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICAgICAgcmV0dXJuIGNhbmNlbEJ0bjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmRmlsdGVyZWQgPSAoZmlsdGVyZWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKGZpbHRlcmVkLmlubmVyVGV4dCA9PT0gXCJQcm9qZWN0IDogQWxsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdUb0RvLlRvRG9MaXN0W2luZGV4XTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ld1RvRG8uZmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcGxhY2VOb2RlLFxuICAgICAgICBjaGVja0lmRmlsdGVyZWQsXG4gICAgfVxufVxuXG5jb25zdCBlZGl0VGFza0J0bnMgPSAoKSA9PiB7XG4gICAgbGV0IF9jaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2hlY2tib3gnKTtcbiAgICBsZXQgX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVFZGl0b3InKTtcbiAgICBsZXQgX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUVkaXRvcicpO1xuICAgIGxldCBfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RWRpdG9yJyk7XG4gICAgbGV0IF9ub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlRWRpdG9yJyk7XG4gICAgbGV0IF9mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgIGxldCBfZmlsdGVyZWQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxhYmVsJyk7XG5cbiAgICBjb25zdCBjcmVhdGVDYW5jZWxCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgbGV0IF9hbGxDYW5jZWxCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FuY2VsQnRuJyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPF9hbGxDYW5jZWxCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIF9hbGxDYW5jZWxCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbGxDYW5jZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgX2NhbGxDYW5jZWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9jYW5jZWxFZGl0KGUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9jYW5jZWxFZGl0ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5hZnRlcihET01fVGFza19GYWN0b3J5KClcbiAgICAgICAgICAgIC5uZXdJdGVtRm9ybSgpLmFwcGVuZEZpbGxlZFRhc2tDb21wYWN0KGVkaXRUYXNrcygpLmNoZWNrSWZGaWx0ZXJlZChfZmlsdGVyZWQsIGluZGV4KSwgaW5kZXgpKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICBsaXN0ZW5Gb3JFeHBhbmQucmVzZXRDYXJyb3RMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2tJZkZpbHRlcmVkID0gKGZpbHRlcmVkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihmaWx0ZXJlZC5pbm5lclRleHQgPT09IFwiUHJvamVjdCA6IEFsbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3VG9Eby5Ub0RvTGlzdFtpbmRleF07IFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3VG9Eby5maWx0ZXJlZExpc3RbaW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGVVc2VyRWRpdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgX3N1Ym1pdEVkaXRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZW50ZXJCdG4nKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X3N1Ym1pdEVkaXRCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIF9zdWJtaXRFZGl0QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRWRpdFN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfY2FsbEVkaXRTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICByZXR1cm4gX3N1Ym1pdFVzZXJFZGl0KGUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9zdWJtaXRVc2VyRWRpdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IF9pbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBsZXQgX2ZpbHRlcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxhYmVsJyk7XG4gICAgICAgIF9jaGVja0Zvck51bGxFZGl0KGUsIF9pbmRleCk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5hZnRlcihET01fVGFza19GYWN0b3J5KCkubmV3SXRlbUZvcm0oKVxuICAgICAgICAgICAgLmFwcGVuZEZpbGxlZFRhc2tDb21wYWN0KGNoZWNrSWZGaWx0ZXJlZChfZmlsdGVyZWQsIF9pbmRleCksIF9pbmRleCkpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb0RvX0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdUb0RvLlRvRG9MaXN0KSk7XG4gICAgICAgIGxpc3RlbkZvckV4cGFuZC5yZXNldENhcnJvdExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNvbnN0IF9jaGVja0Zvck51bGxFZGl0ID0gKGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBUb0RvTGlzdEluZGV4ID0gY2hlY2tJbmRleChlKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tJbmRleChlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RvRG8uZmlsdGVyZWRMaXN0W2luZGV4XSk7XG4gICAgICAgIGlmKF9uYW1lLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbmV3VG9Eby5Ub0RvTGlzdFtUb0RvTGlzdEluZGV4XS5kZXNjcmlwdGlvbiA9IF9uYW1lLnZhbHVlO1xuICAgICAgICAgICAgaWYoX2ZpbHRlcmVkLmlubmVyVGV4dCAhPT0gXCJQcm9qZWN0IDogQWxsXCIpIG5ld1RvRG8uZmlsdGVyZWRMaXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9IF9uYW1lLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKF9kYXRlLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbmV3VG9Eby5Ub0RvTGlzdFtUb0RvTGlzdEluZGV4XS5kYXRlID0gX2RhdGUudmFsdWU7XG4gICAgICAgICAgICBpZihfZmlsdGVyZWQuaW5uZXJUZXh0ICE9PSBcIlByb2plY3QgOiBBbGxcIikgbmV3VG9Eby5maWx0ZXJlZExpc3RbaW5kZXhdLmRhdGUgPSBfZGF0ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZihfcHJvamVjdC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIG5ld1RvRG8uVG9Eb0xpc3RbVG9Eb0xpc3RJbmRleF0ucHJvamVjdCA9IF9wcm9qZWN0LnZhbHVlO1xuICAgICAgICAgICAgaWYoX2ZpbHRlcmVkLmlubmVyVGV4dCAhPT0gXCJQcm9qZWN0IDogQWxsXCIpIG5ld1RvRG8uZmlsdGVyZWRMaXN0W2luZGV4XS5wcm9qZWN0ID0gX3Byb2plY3QudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoX25vdGVzLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbmV3VG9Eby5Ub0RvTGlzdFtUb0RvTGlzdEluZGV4XS5ub3RlcyA9IF9ub3Rlcy52YWx1ZTtcbiAgICAgICAgICAgIGlmKF9maWx0ZXJlZC5pbm5lclRleHQgIT09IFwiUHJvamVjdCA6IEFsbFwiKSBuZXdUb0RvLmZpbHRlcmVkTGlzdFtpbmRleF0ubm90ZXMgPSBfbm90ZXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoX2NoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIG5ld1RvRG8uVG9Eb0xpc3RbVG9Eb0xpc3RJbmRleF0udXJnZW50ID0gJ3RydWUnO1xuICAgICAgICAgICAgaWYoX2ZpbHRlcmVkLmlubmVyVGV4dCAhPT0gXCJQcm9qZWN0IDogQWxsXCIpIG5ld1RvRG8uZmlsdGVyZWRMaXN0W2luZGV4XS51cmdlbnQgPSAndHJ1ZSc7IFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBuZXdUb0RvLlRvRG9MaXN0W1RvRG9MaXN0SW5kZXhdLnVyZ2VudCA9ICdmYWxzZSc7XG4gICAgICAgICAgICBpZihfZmlsdGVyZWQuaW5uZXJUZXh0ICE9PSBcIlByb2plY3QgOiBBbGxcIikgbmV3VG9Eby5maWx0ZXJlZExpc3RbaW5kZXhdLnVyZ2VudCA9ICdmYWxzZSc7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJbmRleCA9IChlKSA9PiB7XG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBsZXQgX2ZpbHRlcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxhYmVsJyk7XG4gICAgICAgIGxldCBfaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bmV3VG9Eby5Ub0RvTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihjaGVja0lmRmlsdGVyZWQoX2ZpbHRlcmVkLCBfaW5kZXgpLmRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgICAgID09PSBuZXdUb0RvLlRvRG9MaXN0W2ldLmRlc2NyaXB0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVDYW5jZWxCdG5MaXN0ZW5lcixcbiAgICAgICAgdmFsaWRhdGVVc2VyRWRpdCxcbiAgICB9XG59XG4gICAgXG5jb25zdCBleHBhbmRUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgX2FsbENhcnJvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrQ2Fycm90Jyk7XG4gICAgbGV0IGRlbGV0ZVRhc2tCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlRW50cnknKTtcbiAgICBsZXQgZWRpdFRhc2tCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdEVudHJ5Jyk7XG4gICAgbGV0IF9hbGxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1EaXYnKTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRlRm9ybSgpO1xuXG4gICAgY29uc3QgYWRkTGlzdGVuZXJUb05ld0l0ZW0gPSAobGlzdCkgPT4ge1xuICAgICAgICBsZXQgaSA9IChsaXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBfYWxsQ2Fycm90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRXhwYW5kKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVzZXRDYXJyb3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBfYWxsQ2Fycm90c0R1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrQ2Fycm90Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9hbGxDYXJyb3RzRHVwKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhcnJvdHNEdXAubGVuZ3RoOyBpKyspIF9yZXNldENhcnJvdE5vZGVzKF9hbGxDYXJyb3RzRHVwLCBpKTtcbiAgICAgICAgbGlzdGVuKF9hbGxDYXJyb3RzRHVwKTtcbiAgICB9XG5cbiAgICBjb25zdCBfcmVzZXRDYXJyb3ROb2RlcyA9IChjYXJyb3RzLCBpKSA9PiB7XG4gICAgICAgIGNhcnJvdHNbaV0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXggPSAnJztcbiAgICAgICAgY2Fycm90c1tpXS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleCA9IGAke2l9YDtcbiAgICAgICAgY2Fycm90c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRXhwYW5kKTtcblxuICAgIH1cblxuICAgIGNvbnN0IF9jYWxsRXhwYW5kID0gKGUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9leHBhbmQoZSwgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZXhwYW5kID0gKGUsIGkpID0+IHtcbiAgICAgICAgbGV0IF9zZWxlY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtRGl2Jyk7XG4gICAgICAgIGxldCBfZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlckxhYmVsJyk7XG4gICAgICAgIGxldCBfYWxsUHJvamVjdHMgPSBcIlByb2plY3QgOiBBbGxcIjtcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgX2NoZWNrRm9yRmlsdGVyKF9hbGxQcm9qZWN0cywgX3NlbGVjdFRhc2tzLCBfZmlsdGVyLCBpKTtcbiAgICAgICAgICAgIF90dXJuQ2Fycm90KGUpO1xuICAgICAgICAgICAgX2VkaXQoKTtcbiAgICAgICAgICAgIF9yZW1vdmUoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgX3NocmluayhlKTtcbiAgICAgICAgICAgIF90dXJuQ2Fycm90KGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgX2NoZWNrRm9yRmlsdGVyID0gKGFsbFByb2plY3RzLCBzZWxlY3RUYXNrcywgZmlsdGVyLCBpKSA9PiB7XG4gICAgICAgIGlmKGZpbHRlci5pbm5lclRleHQgPT0gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIHRhc2tGYWN0b3J5LmFwcGVuZEZpbGxlZFRhc2tFeHRlbmRlZChuZXdUb0RvLlRvRG9MaXN0W2ldLCBpLCBzZWxlY3RUYXNrc1tpXSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRhc2tGYWN0b3J5LmFwcGVuZEZpbGxlZFRhc2tFeHRlbmRlZChuZXdUb0RvLmZpbHRlcmVkTGlzdFtpXSwgaSwgc2VsZWN0VGFza3NbaV0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBfZWRpdCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhcnJvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8ZWRpdFRhc2tCdG5zLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBlZGl0VGFza0J0bnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2FsbEVkaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfY2FsbEVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBfZWRpdFRhc2soZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2VkaXRUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZWRpdFRhc2tzKCkucmVwbGFjZU5vZGUoZSk7XG4gICAgfVxuXG4gICBjb25zdCBfcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxfYWxsQ2Fycm90cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajxkZWxldGVUYXNrQnRucy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFza0J0bnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29udGFpbmVyRGl2LnJlbW92ZSgpO1xuICAgICAgICBuZXdUb0RvLlRvRG9MaXN0LnNwbGljZShjb250YWluZXJEaXYuZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICAgIG5ld1RvRG8uZmlsdGVyZWRMaXN0LnNwbGljZShjb250YWluZXJEaXYuZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb0RvX0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdUb0RvLlRvRG9MaXN0KSk7XG4gICAgICAgIHJlc2V0Q2Fycm90TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX3NocmluayA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX3R1cm5DYXJyb3QgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgbGlzdGVuID0gKGNhcnJvdHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2Fycm90cyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGNhcnJvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY2Fycm90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRXhwYW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0ZW4sXG4gICAgICAgIGFkZExpc3RlbmVyVG9OZXdJdGVtLFxuICAgICAgICByZXNldENhcnJvdExpc3RlbmVycyxcbiAgICB9XG4gICAgICAgIFxufVxuXG5jb25zdCBoYW5kbGVDYXJyb3RDbGlja3MgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZmlsdGVyUHJvamVjdHMgPSAobGlzdCkgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0c1RvQXJyYXkobGlzdCk7XG4gICAgICAgIGFwcGVuZFByb2plY3RzVG9TaWRlYmFyKG5ld1RvRG8ucHJvamVjdExpc3QpO1xuICAgICAgICBhZGRMaXN0ZW5lclRvUHJvamVjdExhYmVscygpO1xuICAgICAgICBkb2MuY2Fycm90LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEV4cGFuZFByb2plY3RzKTtcbiAgICAgICAgZG9jLmNhcnJvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxSZWR1Y2VQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdHNUb0FycmF5ID0gKGxpc3QpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZighbmV3VG9Eby5wcm9qZWN0TGlzdC5pbmNsdWRlcyhsaXN0W2ldLnByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgaWYobGlzdFtpXS5wcm9qZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcm9qZWN0TGlzdC5wdXNoKGxpc3RbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbFJlZHVjZVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVkdWNlUHJvamVjdHMoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVkdWNlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGRvYy5leHBhbmRQcm9qZWN0c01lbnUoKTtcbiAgICAgICAgbmV3VG9Eby5wcm9qZWN0TGlzdC5zcGxpY2UoMCwgbmV3VG9Eby5wcm9qZWN0TGlzdC5sZW5ndGgpO1xuICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgIGRvYy5jYXJyb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsUmVkdWNlUHJvamVjdHMpO1xuICAgICAgICBkb2MuY2Fycm90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEV4cGFuZFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RGaWx0ZXJMYWJlbCcpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0TGFiZWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbHNbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRQcm9qZWN0c1RvU2lkZWJhciA9IChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TGlua0Rpdi5pZCA9IFwicHJvamVjdExpbmtEaXZcIjtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBwcm9qZWN0TGlua0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TGluayhsaXN0W2ldKSk7IFxuICAgICAgICB9XG4gICAgICAgIHNpZGViYXIuYXBwZW5kKHByb2plY3RMaW5rRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0TGluayA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGaWx0ZXJMYWJlbCcpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0O1xuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTGlzdGVuZXJUb1Byb2plY3RMYWJlbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdEZpbHRlckxhYmVsJyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RMYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsRmlsdGVyVG9Eb3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbEZpbHRlclRvRG9zID0gKGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcigpLmZpbHRlclRvRG9zKGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlclByb2plY3RzLFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGZpbHRlciA9ICgpID0+IHtcbiAgICBsZXQgZmlsdGVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyTGFiZWwnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY3JlYXRlUmVtb3ZlRmlsdGVyQnRuID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlRmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbW92ZUZpbHRlckNvbnRhaW5lci5pZCA9IFwicmVtb3ZlRmlsdGVyQ29udGFpbmVyXCI7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbHRlckNhbmNlbEJ0bi5pZCA9IFwicmVtb3ZlRmlsdGVyXCI7XG4gICAgICAgIGZpbHRlckNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiLVwiO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUZpbHRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICByZW1vdmVGaWx0ZXJMYWJlbC5pZCA9IFwicmVtb3ZlRmlsdGVyTGFiZWxcIjtcbiAgICAgICAgcmVtb3ZlRmlsdGVyTGFiZWwudGV4dENvbnRlbnQgPSBcInJlbW92ZSBmaWx0ZXJcIjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyQ29udGFpbmVyLFxuICAgICAgICAgICAgZmlsdGVyQ2FuY2VsQnRuLFxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyTGFiZWwsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIFxuICAgIGNvbnN0IGZpbHRlclRvRG9zID0gKGUpID0+IHtcbiAgICAgICAgbmV3VG9Eby5maWx0ZXJlZExpc3QgPSBuZXdUb0RvLlRvRG9MaXN0LnJlZHVjZSgoYSwgY3VycmVudCwgaSkgPT4gXG4gICAgICAgICAgICAoY3VycmVudC5wcm9qZWN0ID09PSBlLnRhcmdldC50ZXh0Q29udGVudCkgPyBhLmNvbmNhdChjdXJyZW50KSA6IGEsIFtdKTtcbiAgICAgICAgaWYoZmlsdGVyTGFiZWwuaW5uZXJUZXh0ID09IFwiUHJvamVjdCA6IEFsbFwiKSBfYXBwZW5kUmVtb3ZlRmlsdGVyQnRuKCk7XG4gICAgICAgIGZpbHRlckxhYmVsLnRleHRDb250ZW50ID0gYFByb2plY3QgOiAke2UudGFyZ2V0LnRleHRDb250ZW50fWA7XG4gICAgICAgIF9hcHBseUZpbHRlcihuZXdUb0RvLmZpbHRlcmVkTGlzdCwgZSk7XG4gICAgICAgIF9jcmVhdGVGaWx0ZXJlZENhcnJvdExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNvbnN0IF9hcHBlbmRSZW1vdmVGaWx0ZXJCdG4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXJMYWJlbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyTGFiZWxEaXZcIik7XG4gICAgICAgIGNyZWF0ZVJlbW92ZUZpbHRlckJ0bi5yZW1vdmVGaWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlRmlsdGVyQnRuLmZpbHRlckNhbmNlbEJ0bik7XG4gICAgICAgIGNyZWF0ZVJlbW92ZUZpbHRlckJ0bi5yZW1vdmVGaWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlRmlsdGVyQnRuLnJlbW92ZUZpbHRlckxhYmVsKTtcbiAgICAgICAgZmlsdGVyTGFiZWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlRmlsdGVyQnRuLnJlbW92ZUZpbHRlckNvbnRhaW5lcik7XG4gICAgICAgIF9hZGRSZW1vdmVGaWx0ZXJMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGNvbnN0IF9hZGRSZW1vdmVGaWx0ZXJMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlUmVtb3ZlRmlsdGVyQnRuLmZpbHRlckNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsUmVtb3ZlRmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBfY2FsbFJlbW92ZUZpbHRlciA9IChlKSA9PiB7XG4gICAgICAgIHJldHVybiByZW1vdmVGaWx0ZXIoZSwgZmlsdGVyTGFiZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IF9hcHBseUZpbHRlciA9IChsaXN0LCBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1EaXYnKTtcbiAgICAgICAgX3JlbW92ZVVuZmlsdGVyZWRUYXNrcyh0YXNrcyk7ICAgICAgICBcbiAgICAgICAgX2FwcGVuZEZpbHRlcmVkVGFza3MobGlzdCwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBfcmVtb3ZlVW5maWx0ZXJlZFRhc2tzID0gKHRhc2tzKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tzLmxlbmd0aDsgaSsrKSB0YXNrc1tpXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBfYXBwZW5kRmlsdGVyZWRUYXNrcyA9IChsaXN0LCBjb250YWluZXIpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0ZhY3RvcnkubmV3SXRlbUZvcm0oKS5hcHBlbmRGaWxsZWRUYXNrQ29tcGFjdChsaXN0W2ldLCBpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRmlsdGVyZWRDYXJyb3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGxpc3RlbkZvckV4cGFuZC5yZXNldENhcnJvdExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZpbHRlciA9IChlLCBsYWJlbCkgPT4ge1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgOiBBbGxcIjtcbiAgICAgICAgY29uc3QgX3Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1EaXYnKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X3Rhc2tzLmxlbmd0aDsgaSsrKSBfdGFza3NbaV0ucmVtb3ZlKCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG5ld1RvRG8uVG9Eb0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKClcbiAgICAgICAgICAgIC5hcHBlbmRGaWxsZWRUYXNrQ29tcGFjdChuZXdUb0RvLlRvRG9MaXN0W2ldLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhcnJvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0NhcnJvdCcpO1xuICAgICAgICBsaXN0ZW5Gb3JFeHBhbmQubGlzdGVuKGNhcnJvdHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlclRvRG9zLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IERPTV9UYXNrX0ZhY3RvcnksIERPTV9GYWN0b3J5LCB2YWxpZGF0ZUZvcm0sIGV4cGFuZFRhc2tzIH1cblxuXG5cbiAgICAgICAgICAgICIsImNvbnN0IFRvRG9fSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXN0ID0gY29uc29sZS5sb2coJ3dvcmtzJyk7XG4gICAgY29uc3QgVG9Eb0xpc3QgPSBbXTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgbmV3SXRlbSA9IChkZXNjcmlwdGlvbiAsIGRhdGUsIHByb2plY3QsIG5vdGVzLCB1cmdlbnQpID0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgICAgIG5vdGVzLCBcbiAgICAgICAgICAgIHVyZ2VudCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcmludEFycmF5SXRlbSA9IChhcnJheUl0ZW0pID0+IHtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXN0LFxuICAgICAgICBUb0RvTGlzdCxcbiAgICAgICAgcHJvamVjdExpc3QsXG4gICAgICAgIGZpbHRlcmVkTGlzdCxcbiAgICAgICAgbmV3SXRlbSxcbiAgICB9XG59XG5cbmV4cG9ydCB7VG9Eb19JdGVtfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7SWNvbn0gZnJvbSAnLi9tZW51QnV0dG9uLnBuZyc7XG5pbXBvcnQge0NhcnJvdH0gZnJvbSAnLi91cC1hcnJvdy5wbmcnO1xuaW1wb3J0IHtET01fRmFjdG9yeSwgRE9NX1Rhc2tfRmFjdG9yeSwgdmFsaWRhdGVGb3JtLCBleHBhbmRUYXNrc30gZnJvbSAnLi9ET00tTWFuYWdlcic7XG5pbXBvcnQge1RvRG9fSXRlbX0gZnJvbSAnLi9Ub0RvX09iamVjdF9GYWN0b3J5JztcblxuY29uc29sZS5sb2coJ2hlbGxvJyk7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gRE9NX1Rhc2tfRmFjdG9yeSgpO1xuY29uc3QgZGl2ID0gdGFza0ZhY3RvcnkuaXRlbURpdjtcbmNvbnNvbGUubG9nKHtkaXZ9KTtcblxuY29uc3QgZG9jID0gRE9NX0ZhY3RvcnkoKTtcblxuY29uc3QgbGlzdGVuRm9yRXhwYW5kID0gZXhwYW5kVGFza3MoKTtcblxuXG5cbmRvYy5wcm9qZWN0c0xhYmVsRGl2Lmluc2VydEJlZm9yZShkb2MuY2Fycm90LCBkb2MucHJvamVjdHNMYWJlbERpdi5maXJzdENoaWxkKTtcblxuZG9jLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2Muc2hvd01lbnUpO1xuXG5jb25zdCBjYWxsRXhwYW5kUHJvamVjdHMgPSAoZSkgPT4ge1xuICAgIHJldHVybiBkb2MuZXhwYW5kUHJvamVjdHNNZW51KCk7XG59XG5kb2MuY2Fycm90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEV4cGFuZFByb2plY3RzKTtcblxuZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG5cblxuY29uc3QgcmVtb3ZlSXRlbSA9IG5vZGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgIGNvbnNvbGUubG9nKG5vZGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgbm9kZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGlmKG5vZGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCA9PT0gJ2VtcHR5Rm9ybScpIHtcbiAgICAgICAgZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG4gICAgfVxufVxuXG5jb25zdCBsaXN0ZW5Gb3JEZWxldGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlRW50cnknKTtcbiAgICBmb3IobGV0IGk9MDsgaTxkZWxldGVCdG4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBkZWxldGVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKTtcbiAgICB9XG59XG5cbmxpc3RlbkZvckRlbGV0ZSgpO1xuZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckRlbGV0ZSk7XG5cblxuY29uc3QgcmVzcG9uc2l2ZVNpZGViYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1pblNpemUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBtYXhTaXplID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1MDBweClcIik7XG4gICAgXG5cbiAgICBjb25zdCBzaWRlYmFyTWVkaWFRdWVyeSA9IChtaW4sIG1heCkgPT4ge1xuICAgICAgICBpZihtYXgubWF0Y2hlcykge1xuICAgICAgICAgICAgZG9jLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2MudGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfWVsc2UgaWYobWluLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGRvYy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jLnRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWluU2l6ZSxcbiAgICAgICAgbWF4U2l6ZSxcbiAgICAgICAgc2lkZWJhck1lZGlhUXVlcnksXG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5vbmxvYWQgPSByZXNwb25zaXZlU2lkZWJhci5zaWRlYmFyTWVkaWFRdWVyeShyZXNwb25zaXZlU2lkZWJhci5taW5TaXplLCByZXNwb25zaXZlU2lkZWJhci5tYXhTaXplKTtcblxuXG5sZXQgbmV3VG9EbyA9IFRvRG9fSXRlbSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGFza0ZhY3RvcnkubmV3SXRlbUZvcm0oKS5hcHBlbmRGaWxsZWRJdGVtRm9ybShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb19MaXN0JykpKSk7XG5cbmxldCB0ZXN0VmFsaWRhdGUgPSB2YWxpZGF0ZUZvcm0oKTtcbnRlc3RWYWxpZGF0ZS5ydW4oKTtcblxuXG5kb2MuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyh0ZXN0VmFsaWRhdGUuZm9ybSl9KVxuXG5sZXQgYWxsQ2Fycm90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrQ2Fycm90Jyk7XG5saXN0ZW5Gb3JFeHBhbmQubGlzdGVuKGFsbENhcnJvdHMpO1xuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb19MaXN0JykpKTtcbm5ld1RvRG8uVG9Eb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb0RvX0xpc3QnKSk7XG5cbmV4cG9ydCB7bmV3VG9EbywgdGFza0ZhY3RvcnksIGRvYywgbGlzdGVuRm9yRXhwYW5kLCBjYWxsRXhwYW5kUHJvamVjdHN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=