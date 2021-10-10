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
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------\n    Global styles\n  --------------------- */\n\nbody, html{\n    margin: 0;\n    padding: 0;\n}\n\n*{\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n/*---------------------\n    Layout\n    -container and header\n  --------------------- */\n\n#container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n\n#header {\n    position: fixed;\n    background-color: white;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n}\n\n#menu {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background: none;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    margin-left: 2em;\n}\n\n#logo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#addBtnContainer {\n    position: absolute;\n    right: 0;\n    margin-right: 1em;\n}\n\n/*---------------------\n    sidebar \n  --------------------- */\n\n\n#sidebarHeader {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    height: 50px;\n    text-align: center;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#menuLabel {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n#sidebar {\n    width: 0;\n    transform: scale(0);\n}\n\n\n#sidebar.active {\n    transform: scale(1);\n    position: fixed;\n    height: 100%;\n    top: 80px;\n     background-color: rgba(128, 128, 128, 0.5);\n    border-right: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n\n\n#projects {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.projectFilterLabel {\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.projectFilterLabel:hover {\n    cursor: pointer;\n}\n\n#projectsLabelDiv {\n    display: flex;\n    font-weight: normal;\n    font-size: 15px;\n    align-items: center;\n    gap: 20px;\n    color: rgb(27, 24, 24);\n}\n\n#carrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    opacity: 70%;\n    fill: green !important;\n}\n\n.carrotBtn {\n    filter: sepia(80%);\n}\n\n#carrot.active {\n    transform: rotate(180deg);\n}\n\n/*---------------------\n    main div \n    -holds tasks  \n  --------------------- */\n\n\n#listContainer {\n    width: 100%;\n    height: 100%;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: column;\n}\n\n#listContainer.active {\n    margin-left: 150px;\n}\n\n.itemDiv {\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.form {\n    \n}\n\n.taskCompact {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    width: 100%;\n    height: 20px;\n    align-items: center;\n}\n\n.checkbox {\n    margin-left: 1em;\n    margin-top: auto;\n}\n\n.taskName {\n    min-width: 80px;\n}\n\n@media (max-width: 400px) {\n    .taskName {\n        width: 80px;\n    }\n}\n\n.date {\n    margin-left: auto;\n    margin-right: 1em;\n}\n\n.projectLabelDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 20px;\n    gap: 1em;\n    align-items: center;\n}\n\n.projectLabel {\n    margin-left: 1em;\n}\n\n.projectName {\n    margin-right: 1em;\n    width: 60%;\n}\n\n.taskExtended {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n}\n\n.noteDiv {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1em;\n    height: 20px;\n}\n\n.noteLabel {\n    margin-left: 1em;\n}\n\n.notes {\n    display: flex; \n    margin-right: 1em;\n    width: 60%;\n}\n\n@media (min-width: 380px) {\n    .projectLabel, .noteLabel {\n        margin-left: 4em;\n    }\n}\n\n.buttonDiv {\n    margin-left: auto;\n    margin-right: 1em;\n    display: flex;\n    gap: 10px;\n}\n\n.projectName {\n    height: ;\n}\n\n.taskCarrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    margin-left: 1em;\n}\n\n.taskCarrot.active {\n    transform: rotate(180deg);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*---------------------\n    Global styles\n  --------------------- */\n\nbody, html{\n    margin: 0;\n    padding: 0;\n}\n\n*{\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n/*---------------------\n    Layout\n    -container and header\n  --------------------- */\n\n#container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n\n#header {\n    position: fixed;\n    background-color: white;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n}\n\n#menu {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background: none;\n    border: none;\n    background-image: url('./menuButton.png');\n    background-position: center;\n    background-size: cover;\n    margin-left: 2em;\n}\n\n#logo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#addBtnContainer {\n    position: absolute;\n    right: 0;\n    margin-right: 1em;\n}\n\n/*---------------------\n    sidebar \n  --------------------- */\n\n\n#sidebarHeader {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    height: 50px;\n    text-align: center;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#menuLabel {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n#sidebar {\n    width: 0;\n    transform: scale(0);\n}\n\n\n#sidebar.active {\n    transform: scale(1);\n    position: fixed;\n    height: 100%;\n    top: 80px;\n     background-color: rgba(128, 128, 128, 0.5);\n    border-right: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n\n\n#projects {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.projectFilterLabel {\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.projectFilterLabel:hover {\n    cursor: pointer;\n}\n\n#projectsLabelDiv {\n    display: flex;\n    font-weight: normal;\n    font-size: 15px;\n    align-items: center;\n    gap: 20px;\n    color: rgb(27, 24, 24);\n}\n\n#carrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    opacity: 70%;\n    fill: green !important;\n}\n\n.carrotBtn {\n    filter: sepia(80%);\n}\n\n#carrot.active {\n    transform: rotate(180deg);\n}\n\n/*---------------------\n    main div \n    -holds tasks  \n  --------------------- */\n\n\n#listContainer {\n    width: 100%;\n    height: 100%;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: column;\n}\n\n#listContainer.active {\n    margin-left: 150px;\n}\n\n.itemDiv {\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.form {\n    \n}\n\n.taskCompact {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    width: 100%;\n    height: 20px;\n    align-items: center;\n}\n\n.checkbox {\n    margin-left: 1em;\n    margin-top: auto;\n}\n\n.taskName {\n    min-width: 80px;\n}\n\n@media (max-width: 400px) {\n    .taskName {\n        width: 80px;\n    }\n}\n\n.date {\n    margin-left: auto;\n    margin-right: 1em;\n}\n\n.projectLabelDiv {\n    display: flex;\n    justify-content: space-between;\n    height: 20px;\n    gap: 1em;\n    align-items: center;\n}\n\n.projectLabel {\n    margin-left: 1em;\n}\n\n.projectName {\n    margin-right: 1em;\n    width: 60%;\n}\n\n.taskExtended {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n}\n\n.noteDiv {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1em;\n    height: 20px;\n}\n\n.noteLabel {\n    margin-left: 1em;\n}\n\n.notes {\n    display: flex; \n    margin-right: 1em;\n    width: 60%;\n}\n\n@media (min-width: 380px) {\n    .projectLabel, .noteLabel {\n        margin-left: 4em;\n    }\n}\n\n.buttonDiv {\n    margin-left: auto;\n    margin-right: 1em;\n    display: flex;\n    gap: 10px;\n}\n\n.projectName {\n    height: ;\n}\n\n.taskCarrot {\n    width: 10px;\n    height: 10px;\n    transform: rotate(90deg);\n    margin-left: 1em;\n}\n\n.taskCarrot.active {\n    transform: rotate(180deg);\n}"],"sourceRoot":""}]);
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
        console.log(!carrot.classList.contains('active'));
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
        console.log(item.urgent);
        if(item.urgent == 'true') {
            console.log('help');
            itemDiv.classList.add('active');
            itemDiv.style.backgroundColor = "salmon";
        }else {
            itemDiv.classList.remove('active');
        }
    }

    const appendFilledTaskExtended = (arr, index, item) => {
        console.log({item});
        console.log(arr);
        let taskFilledExtended = newElement('div');
        taskFilledExtended.classList.add('taskExtended')

        let projectLabelDiv = newElement('div');
        projectLabelDiv.classList.add('projectLabelDiv');

        let projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:"

        let projectName = newElement('h5');
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

        projectLabelDiv.appendChild(projectLabel);
        projectLabelDiv.appendChild(projectName);
        taskFilledExtended.appendChild(projectLabelDiv);
        noteDiv.appendChild(noteLabel);
        noteDiv.appendChild(notes);
        taskFilledExtended.appendChild(noteDiv);
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

        const projectLabelDiv = newElement('div');
        projectLabelDiv.classList.add('projectLabelDiv');

        const projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project: "

        const projectName = newElement('h5');
        projectName.classList.add('projectName');

        const noteDiv = newElement('div');
        noteDiv.classList.add('noteDiv');

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
            projectLabelDiv.appendChild(projectLabel);
            projectLabelDiv.appendChild(projectInput);
            taskExtended.appendChild(projectLabelDiv);
            noteDiv.appendChild(noteLabel);
            noteDiv.appendChild(noteInput);
            taskExtended.appendChild(noteDiv);
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
            console.log(newToDo)
            for(let i=0; i<newToDo.length; i++) {
                container.taskContainer.appendChild(appendFilledTaskCompact(newToDo[i], i));
                console.log(newToDo.ToDoList);
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
        console.log(e.target.parentNode);
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.length - 1); 
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.addListenerToNewItem();
    }

    return {
        run,
        form,
    }
    
};

const editTasks = () => {

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
        if(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].urgent !== 'false') taskEditingForm.style.backgroundColor = 'salmon';
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
        if(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].urgent == 'true') {
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
        taskNameInput.placeholder = `${___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].description}`;
        return taskNameInput;
    }

    const _createDateInput = (index) => {
        const dateInput = document.createElement('input');
        dateInput.classList.add('date');
        dateInput.id = 'dateEditor';
        dateInput.type = 'date';
        dateInput.value = `${___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].date}`;
        dateInput.placeholder = `"${___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].date}"`;
        return dateInput;
    }

    const _createTaskExtended = (index) => {
        const taskExtended = document.createElement('div');
        taskExtended.classList.add('taskExtended');

        taskExtended.appendChild(_createProjectDiv(index));
        taskExtended.appendChild(_createNoteDiv(index));

        return taskExtended;
    }

    const _createProjectDiv = (index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectLabelDiv');

        projectDiv.appendChild(_createProjectLabel(index));
        projectDiv.appendChild(_createProjectInput(index));

        return projectDiv;
    }

    const _createProjectLabel = (index) => {
        const projectLabel = document.createElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:";

        return projectLabel;
    }

    const _createProjectInput = (index) => {
        const projectInput = document.createElement('input');
        projectInput.classList.add('projectLabel');
        projectInput.id = 'projectEditor';
        projectInput.placeholder = `${___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].project}`;

        return projectInput;
    }

    const _createNoteDiv = (index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('noteDiv');

        noteDiv.appendChild(_createNoteLabel(index));
        noteDiv.appendChild(_createNoteInput(index));

        return noteDiv;
    }

    const _createNoteLabel = (index) => {
        const noteLabel = document.createElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = "Notes:";

        return noteLabel;
    }

    const _createNoteInput = (index) => {
        const noteInput = document.createElement('input');
        noteInput.classList.add('notes');   
        noteInput.id = 'noteEditor';
        noteInput.placeholder = `${___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].notes}`;

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

    return {
        replaceNode,
    }
}

const editTaskBtns = () => {
    let _checkbox = document.getElementById('editCheckbox');
    let _name = document.getElementById('taskNameEditor');
    let _date = document.getElementById('dateEditor');
    let _project = document.getElementById('projectEditor');
    let _notes = document.getElementById('noteEditor');
    let _form = document.getElementById('editTaskForm');

    const createCancelBtnListener = () => {
        let _allCancelBtns = document.getElementsByClassName('cancelBtn');
        for(let i=0; i<_allCancelBtns.length; i++){
            _allCancelBtns[i].addEventListener('click', _callCancel);
        }
    }

    const _callCancel = (e) => {
        console.log(e.target.parentNode.parentNode);
        e.preventDefault();
        _cancelEdit(e);
    }

    const _cancelEdit = (e) => {
        console.log(e.target.parentNode.parentNode.dataset.index); 
        let index = e.target.parentNode.parentNode.dataset.index;
        e.target.parentNode.parentNode.after(DOM_Task_Factory()
            .newItemForm().appendFilledTaskCompact(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index], index));
        e.target.parentNode.parentNode.remove();
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.resetCarrotListeners();
    }

    const validateUserEdit = () => {
        const _submitEditBtns = document.getElementsByClassName('enterBtn');
        for(let i=0; i<_submitEditBtns.length; i++){
            _submitEditBtns[i].addEventListener('click', _callEditSubmit);
        }
        console.log(_submitEditBtns[0].parentNode.parentNode);
    }

    const _callEditSubmit = (e) => {
        console.log('i love you');
        return _submitUserEdit(e);
    }

    const _submitUserEdit = (e) => {
        e.preventDefault();
        let _index = e.target.parentNode.parentNode.dataset.index;
        _checkForNullEdit(e, _index);
        e.target.parentNode.parentNode.after(DOM_Task_Factory().newItemForm()
            .appendFilledTaskCompact(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[_index], _index));
        e.target.parentNode.parentNode.remove();
        localStorage.setItem('ToDo_List', JSON.stringify(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        ___WEBPACK_IMPORTED_MODULE_2__.listenForExpand.resetCarrotListeners();
    }

    const _checkForNullEdit = (e, index) => {
        if(_name.value !== '') ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].description = _name.value;
        if(_date.value !== '') ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].date = _date.value;
        if(_project.value !== '') ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].project = _project.value;
        if(_notes.value !== '') ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].notes = _notes.value;
        (_checkbox.checked) ? ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].urgent = 'true' : ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index].urgent = 'false';
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[index]);
        console.log(_project.value);
        console.log(_notes.value);
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
    
    console.log(_allCarrots);

    const deleteTask = (e) => {
        console.log(e.target);
        const containerDiv = e.target.parentNode.parentNode.parentNode;
        containerDiv.remove();
        ___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.splice(containerDiv.dataset.index, 1);
            
        window.localStorage.setItem('ToDo_List', JSON.stringify(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList));
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList);
        resetCarrotListeners();
    }

    const _remove = () => {
        for(let i=0; i<_allCarrots.length; i++){
            console.log(deleteTaskBtns);
            console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList);
            for(let j=0; j<deleteTaskBtns.length; j++){
                deleteTaskBtns[j].addEventListener('click', deleteTask);
            }
        }
    }



    const _edit = () => {
        for(let i=0; i<_allCarrots.length; i++){
            console.log(editTaskBtns);
            for(let j=0; j<editTaskBtns.length; j++){
                editTaskBtns[j].addEventListener('click', _callEdit);
            }

        }
    }

    const _callEdit = (e) => {
        console.log(e.target);
        _editTask(e);
    }

    const _editTask = (e) => {
        editTasks().replaceNode(e);
    }

    const _shrink = (e) => {
        console.log(e.target.parentNode.parentNode.lastChild);
        e.target.parentNode.parentNode.lastChild.remove();
    }

    const _turnCarrot = (e) => {
        console.log(e);
        e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
    }

    const addListenerToNewItem = () => {
        let i = (___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList.length - 1);
        _allCarrots[i].addEventListener('click', _callExpand)
    }
    
    const resetCarrotListeners = () => {
        let _allCarrotsDup = document.querySelectorAll('.taskCarrot');
        console.log(_allCarrotsDup);
        for(let i=0; i<_allCarrotsDup.length; i++){
            console.log(_allCarrotsDup[i].parentNode.parentNode.getAttribute('data-index'));
            _allCarrotsDup[i].parentNode.parentNode.dataset.index = '';
            _allCarrotsDup[i].parentNode.parentNode.dataset.index = `${i}`;
            _allCarrotsDup[i].removeEventListener('click', _callExpand);
            console.log(_allCarrotsDup[i].parentNode.parentNode);
            console.log({i});
        }
        listen();
    }

    const _callExpand = (e) => {
        console.log(e.target.parentNode.parentNode.dataset.index);
        return _expand(e, e.target.parentNode.parentNode.getAttribute('data-index'));
    }

    const _expand = (e, i) => {
        let _selectTasks = document.querySelectorAll('.itemDiv');
        if(!e.target.classList.contains('active')){
            ___WEBPACK_IMPORTED_MODULE_2__.taskFactory.appendFilledTaskExtended(___WEBPACK_IMPORTED_MODULE_2__.newToDo.ToDoList[i], i, _selectTasks[i]);
            _turnCarrot(e);
            _edit();
            _remove();
        }else {
            _shrink(e);
            _turnCarrot(e);
        }
    }

    const listen = () => {
        console.log(_allCarrots);
        for(let i=0; i<_allCarrots.length; i++){
            _allCarrots[i].addEventListener('click', _callExpand);
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
                if(list[i].project != null) ___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList.push(list[i].project);
            }
        }
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList);
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
        console.log(___WEBPACK_IMPORTED_MODULE_2__.newToDo.projectList);
    }

    const clearProjects = () => {
        const projectLabels = document.querySelectorAll('.projectFilterLabel');
        console.log(projectLabels);
        for(let i=0; i<projectLabels.length; i++){
            projectLabels[i].remove();
        }
    }

    const appendProjectsToSidebar = (list) => {
        const sidebar = document.getElementById('sidebar');
        for(let i=0; i<list.length; i++){
            sidebar.append(createProjectLink(list[i])) 
        }
        console.log(sidebar);
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
    const filterToDos = (e) => {
        console.log(e.target.textContent);
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
let addItem = newToDo.newItem('get groceries', '08/13/21', 'groceries', 'get milk, and eggs', 'true');
let addAnotherItem = newToDo.newItem('clean room', '08/14/21', 'housework', 'room is dirty, clean it!', 'false');
let addAnotherTestItem = newToDo.newItem('test', 'test', 'test', 'test');

newToDo.ToDoList.push(addItem, addAnotherItem);

window.addEventListener("load", taskFactory.newItemForm().appendFilledItemForm(JSON.parse(window.localStorage.getItem('ToDo_List'))));

let testValidate = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.validateForm)();
testValidate.run();


doc.addBtn.addEventListener('click', function(){
    console.log(testValidate.form)})
    
const listenForExpand = (0,_DOM_Manager__WEBPACK_IMPORTED_MODULE_3__.expandTasks)();
listenForExpand.listen();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sU0FBUyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxTQUFTLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxNQUFNOztBQUU5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQU07O0FBRW5DO0FBQ0E7QUFDQSw0Q0FBNEMsaUJBQWlCOztBQUU3RDtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7O0FBRXREOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7QUFHQSxjQUFjLCtEQUFTO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsMERBQVk7QUFDL0I7OztBQUdBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0Esd0JBQXdCLHlEQUFXO0FBQ25DOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS1NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub0RvX09iamVjdF9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbWVudUJ1dHRvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBHbG9iYWwgc3R5bGVzXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbip7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIExheW91dFxcbiAgICAtY29udGFpbmVyIGFuZCBoZWFkZXJcXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbiNtZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jYWRkQnRuQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIHNpZGViYXIgXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4jc2lkZWJhckhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtZW51TGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG5cXG4jc2lkZWJhci5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiA4MHB4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RGaWx0ZXJMYWJlbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0RmlsdGVyTGFiZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjcsIDI0LCAyNCk7XFxufVxcblxcbiNjYXJyb3Qge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gICAgZmlsbDogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmNhcnJvdEJ0biB7XFxuICAgIGZpbHRlcjogc2VwaWEoODAlKTtcXG59XFxuXFxuI2NhcnJvdC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBtYWluIGRpdiBcXG4gICAgLWhvbGRzIHRhc2tzICBcXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xpc3RDb250YWluZXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbn1cXG5cXG4uaXRlbURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIFxcbn1cXG5cXG4udGFza0NvbXBhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi50YXNrTmFtZSB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC50YXNrTmFtZSB7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgfVxcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2plY3RMYWJlbERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4udGFza0V4dGVuZGVkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubm90ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm5vdGVMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5ub3RlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAgIC5wcm9qZWN0TGFiZWwsIC5ub3RlTGFiZWwge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gICAgfVxcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICAgIGhlaWdodDogO1xcbn1cXG5cXG4udGFza0NhcnJvdCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLnRhc2tDYXJyb3QuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7eUJBRXlCOztBQUV6QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOzs7eUJBR3lCOztBQUV6QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFD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d0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIEdsb2JhbCBzdHlsZXNcXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmJvZHksIGh0bWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKntcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgTGF5b3V0XFxuICAgIC1jb250YWluZXIgYW5kIGhlYWRlclxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI21lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL21lbnVCdXR0b24ucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jYWRkQnRuQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIHNpZGViYXIgXFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4jc2lkZWJhckhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtZW51TGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG5cXG4jc2lkZWJhci5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiA4MHB4O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RGaWx0ZXJMYWJlbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0RmlsdGVyTGFiZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjcsIDI0LCAyNCk7XFxufVxcblxcbiNjYXJyb3Qge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gICAgZmlsbDogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmNhcnJvdEJ0biB7XFxuICAgIGZpbHRlcjogc2VwaWEoODAlKTtcXG59XFxuXFxuI2NhcnJvdC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBtYWluIGRpdiBcXG4gICAgLWhvbGRzIHRhc2tzICBcXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xpc3RDb250YWluZXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbn1cXG5cXG4uaXRlbURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIFxcbn1cXG5cXG4udGFza0NvbXBhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi50YXNrTmFtZSB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC50YXNrTmFtZSB7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgfVxcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnByb2plY3RMYWJlbERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4udGFza0V4dGVuZGVkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubm90ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm5vdGVMYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5ub3RlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAgIC5wcm9qZWN0TGFiZWwsIC5ub3RlTGFiZWwge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gICAgfVxcbn1cXG5cXG4uYnV0dG9uRGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICAgIGhlaWdodDogO1xcbn1cXG5cXG4udGFza0NhcnJvdCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLnRhc2tDYXJyb3QuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDYXJyb3QgZnJvbSAnLi91cC1hcnJvdy5wbmcnO1xuaW1wb3J0IHsgVG9Eb19JdGVtIH0gZnJvbSAnLi9Ub0RvX09iamVjdF9GYWN0b3J5JztcbmltcG9ydCB7IG5ld1RvRG8sIHRhc2tGYWN0b3J5LCBkb2MsIGxpc3RlbkZvckV4cGFuZCwgY2FsbEV4cGFuZFByb2plY3RzIH0gZnJvbSAnLic7XG5cblxuLyogZ2V0IERPTSBlbGVtZW50cyAqL1xuY29uc3QgRE9NX0ZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdHNMYWJlbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xhYmVsRGl2Jyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ0bicpO1xuICAgIFxuICAgIGNvbnN0IGNhcnJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhcnJvdC5pZCA9IFwiY2Fycm90XCI7XG4gICAgY2Fycm90LnNyYyA9IENhcnJvdDtcblxuICAgIGNvbnN0IHNob3dNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZihzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXhwYW5kUHJvamVjdHNNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCFjYXJyb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgIChjYXJyb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgPyBjYXJyb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOlxuICAgICAgICAgICAgY2Fycm90LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBpZihjYXJyb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgbmV3VG9Eby5wcm9qZWN0TGlzdC5wdXNoKGhhbmRsZUNhcnJvdENsaWNrcy5maWx0ZXJQcm9qZWN0cyhuZXdUb0RvLlRvRG9MaXN0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRCdG4sXG4gICAgICAgIHNpZGViYXIsXG4gICAgICAgIHByb2plY3RzTGFiZWxEaXYsXG4gICAgICAgIGNhcnJvdCxcbiAgICAgICAgbWVudSxcbiAgICAgICAgdGFza0NvbnRhaW5lcixcbiAgICAgICAgc2hvd01lbnUsXG4gICAgICAgIGV4cGFuZFByb2plY3RzTWVudSxcbiAgICB9XG59XG5cbi8qIGNyZWF0ZSBhbmQgYXBwZW5kIG5ldyBET00gZWxlbWVudHMgd2hlbiB1c2VyIGFkZHMgb3IgZWRpdHMgdGFzayAqL1xuY29uc3QgRE9NX1Rhc2tfRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gdGFnID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtVcmdlbnQgPSAoaXRlbSwgaXRlbURpdikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVyZ2VudCk7XG4gICAgICAgIGlmKGl0ZW0udXJnZW50ID09ICd0cnVlJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlbHAnKTtcbiAgICAgICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpdGVtRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2FsbW9uXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRGaWxsZWRUYXNrRXh0ZW5kZWQgPSAoYXJyLCBpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh7aXRlbX0pO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBsZXQgdGFza0ZpbGxlZEV4dGVuZGVkID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGaWxsZWRFeHRlbmRlZC5jbGFzc0xpc3QuYWRkKCd0YXNrRXh0ZW5kZWQnKVxuXG4gICAgICAgIGxldCBwcm9qZWN0TGFiZWxEaXYgPSBuZXdFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdExhYmVsRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbERpdicpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TGFiZWwgPSBuZXdFbGVtZW50KCdoNScpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIlxuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IG5ld0VsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7YXJyLnByb2plY3R9YDtcblxuICAgICAgICBsZXQgbm90ZURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVEaXYnKTtcblxuICAgICAgICBsZXQgbm90ZUxhYmVsID0gbmV3RWxlbWVudCgnaDUnKTtcbiAgICAgICAgbm90ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ25vdGVMYWJlbCcpO1xuICAgICAgICBub3RlTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXM6J1xuICAgICAgICBcbiAgICAgICAgbGV0IG5vdGVzID0gbmV3RWxlbWVudCgncCcpO1xuICAgICAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xuICAgICAgICBub3Rlcy50ZXh0Q29udGVudCA9IGAke2Fyci5ub3Rlc31gXG5cbiAgICAgICAgbGV0IGJ1dHRvbkRpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uRGl2Jyk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBuZXdFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0RW50cnknKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gbmV3RWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVFbnRyeScpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICBwcm9qZWN0TGFiZWxEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgcHJvamVjdExhYmVsRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFza0ZpbGxlZEV4dGVuZGVkLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbERpdik7XG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUxhYmVsKTtcbiAgICAgICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgICAgIHRhc2tGaWxsZWRFeHRlbmRlZC5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgdGFza0ZpbGxlZEV4dGVuZGVkLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGFza0ZpbGxlZEV4dGVuZGVkKTtcbiAgICAgICAgfVxuXG4gICAgY29uc3QgbmV3SXRlbUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFRvRG8gPSBUb0RvX0l0ZW0oKTtcblxuICAgICAgICBjb25zdCAgaXRlbURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcblxuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IG5ld0VsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICBpdGVtRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcvJyk7XG4gICAgICAgIGl0ZW1Gb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ0dFVCcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wYWN0ID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb21wYWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb21wYWN0Jyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBuZXdFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveC5pZCA9ICd1cmdlbnQnO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTV9GYWN0b3J5KCk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRhc2tFeHRlbmRlZCA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRXh0ZW5kZWQuY2xhc3NMaXN0LmFkZCgndGFza0V4dGVuZGVkJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsRGl2ID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RMYWJlbERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWxEaXYnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBuZXdFbGVtZW50KCdoNScpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCJcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld0VsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG5cbiAgICAgICAgY29uc3Qgbm90ZURpdiA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVEaXYnKTtcblxuICAgICAgICBjb25zdCBub3RlTGFiZWwgPSBuZXdFbGVtZW50KCdoNScpO1xuICAgICAgICBub3RlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbm90ZUxhYmVsJyk7XG4gICAgICAgIG5vdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSBuZXdFbGVtZW50KCdwJyk7XG4gICAgICAgIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ25vdGVzJyk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gbmV3RWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25EaXYnKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gbmV3RWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdEVudHJ5Jyk7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBuZXdFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUVudHJ5Jyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlRm9ybUJ0biA9IG5ld0VsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVGb3JtQnRuLmlkID0gXCJkZWxldGVCdG5cIjtcbiAgICAgICAgZGVsZXRlRm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgICAgY29uc3QgZW50ZXJCdG4gPSBuZXdFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZW50ZXJCdG4uY2xhc3NMaXN0LmFkZCgnZW50ZXJCdG4nKTtcbiAgICAgICAgZW50ZXJCdG4uaWQgID0gJ2VudGVyJztcbiAgICAgICAgZW50ZXJCdG4udGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XG4gICAgICAgIGVudGVyQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5wdXQgPSBuZXdFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCA9IFwidGFza05hbWVcIjtcbiAgICAgICAgdGFza0lucHV0LmlkID0gJ25hbWUnO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBUYXNrJyk7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGFza0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBuZXdFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCA9IFwiZGF0ZVwiO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgRGF0ZTogXCJ5eXl5LW1tLWRkXCInKTtcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IG5ld0VsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVcIik7XG4gICAgICAgIHByb2plY3RJbnB1dC5pZCA9IFwicHJvamVjdFwiO1xuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgcHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBub3RlSW5wdXQgPSBuZXdFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBub3RlSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgICAgICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBOb3RlcycpO1xuICAgICAgICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25vdGUnKTtcbiAgICAgICAgbm90ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgY29uc3QgYXBwZW5kRW1wdHlUYXNrQ29tcGFjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb21wYWN0LmFwcGVuZENoaWxkKGNoZWNrYm94LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICB0YXNrQ29tcGFjdC5hcHBlbmRDaGlsZCh0YXNrSW5wdXQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIHRhc2tDb21wYWN0LmFwcGVuZENoaWxkKGRhdGVJbnB1dC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQodGFza0NvbXBhY3QuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIGl0ZW1Gb3JtLmlkID0gJ2VtcHR5Rm9ybSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBlbmRGaWxsZWRUYXNrQ29tcGFjdCA9IChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGxlZEl0ZW1EaXYgPSBuZXdFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZpbGxlZEl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgICAgZmlsbGVkSXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpbmRleH1gKTtcblxuICAgICAgICAgICAgbGV0ICB0YXNrQ29tcGFjdEZpbGxlZCA9IG5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NvbXBhY3RGaWxsZWQuY2xhc3NMaXN0LmFkZCgndGFza0NvbXBhY3QnKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tDYXJyb3QgPSBuZXdFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHRhc2tDYXJyb3QuY2xhc3NMaXN0ID0gJ3Rhc2tDYXJyb3QnO1xuICAgICAgICAgICAgdGFza0NhcnJvdC5zcmMgPSBDYXJyb3Q7XG5cbiAgICAgICAgICAgIGxldCBmaWxsZWRUYXNrTmFtZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBmaWxsZWRUYXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZScpO1xuICAgICAgICAgICAgZmlsbGVkVGFza05hbWUudGV4dENvbnRlbnQgPSBgJHtpdGVtLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgICAgIGxldCBmaWxsZWRUYXNrRGF0ZSA9IG5ld0VsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBmaWxsZWRUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICAgICAgICBmaWxsZWRUYXNrRGF0ZS50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGF0ZX1gO1xuXG4gICAgICAgICAgICBtYXJrVXJnZW50KGl0ZW0sIGZpbGxlZEl0ZW1EaXYpO1xuXG4gICAgICAgICAgICB0YXNrQ29tcGFjdEZpbGxlZC5hcHBlbmRDaGlsZCh0YXNrQ2Fycm90LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICB0YXNrQ29tcGFjdEZpbGxlZC5hcHBlbmRDaGlsZChmaWxsZWRUYXNrTmFtZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgdGFza0NvbXBhY3RGaWxsZWQuYXBwZW5kQ2hpbGQoZmlsbGVkVGFza0RhdGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIGZpbGxlZEl0ZW1EaXYuYXBwZW5kQ2hpbGQodGFza0NvbXBhY3RGaWxsZWQuY2xvbmVOb2RlKHRydWUpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGxlZEl0ZW1EaXY7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICBjb25zdCBhcHBlbmRFbXB0eVRhc2tFeHRlbmRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICAgICAgcHJvamVjdExhYmVsRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgICAgICAgICB0YXNrRXh0ZW5kZWQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsRGl2KTtcbiAgICAgICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUxhYmVsKTtcbiAgICAgICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUlucHV0KTtcbiAgICAgICAgICAgIHRhc2tFeHRlbmRlZC5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICAgICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHRhc2tFeHRlbmRlZCk7XG4gICAgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFwcGVuZEVtcHR5QnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChlbnRlckJ0bik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlRm9ybUJ0bik7XG4gICAgICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXBwZW5kRW1wdHlJdGVtRm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcGVuZEVtcHR5VGFza0NvbXBhY3QoKTtcbiAgICAgICAgICAgIGFwcGVuZEVtcHR5VGFza0V4dGVuZGVkKCk7XG4gICAgICAgICAgICBhcHBlbmRFbXB0eUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci50YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Gb3JtLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgdmFsaWRhdGUucnVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBlbmRGaWxsZWRJdGVtRm9ybSA9IChuZXdUb0RvKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvKVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bmV3VG9Eby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci50YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGVuZEZpbGxlZFRhc2tDb21wYWN0KG5ld1RvRG9baV0sIGkpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvLlRvRG9MaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFwcGVuZE5ld0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gaXRlbS5Ub0RvTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29udGFpbmVyLnRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwZW5kRmlsbGVkVGFza0NvbXBhY3QoaXRlbS5Ub0RvTGlzdFtpbmRleF0sIGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwZW5kRW1wdHlJdGVtRm9ybSxcbiAgICAgICAgICAgIGFwcGVuZEZpbGxlZEl0ZW1Gb3JtLFxuICAgICAgICAgICAgYXBwZW5kTmV3SXRlbSwgXG4gICAgICAgICAgICBhcHBlbmRGaWxsZWRUYXNrQ29tcGFjdCxcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBcbnJldHVybiB7XG4gICAgICAgIG5ld0l0ZW1Gb3JtLFxuICAgICAgICBtYXJrVXJnZW50LFxuICAgICAgICBhcHBlbmRGaWxsZWRUYXNrRXh0ZW5kZWQsXG4gICAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXB0eUZvcm0nKTtcbiAgICBjb25zdCBkZWxldGVGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUJ0bicpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VyZ2VudCcpO1xuICAgIFxuICAgIGxldCB1c2VyRW50cmllcztcbiAgICBcbiAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKGZvcm0gIT09IG51bGwpIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY29sbGVjdCk7XG4gICAgICAgIGlmKGZvcm0gIT09IG51bGwpIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkRXhwYW5kTGlzdGVuZXIpO1xuICAgICAgICBpZihkZWxldGVGb3JtQnRuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBET01fRmFjdG9yeSgpLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTV9UYXNrX0ZhY3RvcnkoKS5uZXdJdGVtRm9ybSgpLmFwcGVuZEVtcHR5SXRlbUZvcm0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0KGUpIHtcbiAgICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaXNVcmdlbnQgPSBjaGVjayhjaGVja2JveCwgZSk7XG4gICAgICAgIGlzVXJnZW50O1xuICAgICAgICB1c2VyRW50cmllcyA9IG5ld1RvRG8ubmV3SXRlbShgJHtlLnRhcmdldC5uYW1lLnZhbHVlfWAsIGAke2UudGFyZ2V0LmRhdGUudmFsdWV9YCxcbiAgICAgICAgICAgIGAke2UudGFyZ2V0LnByb2plY3QudmFsdWV9YCwgYCR7ZS50YXJnZXQubm90ZS52YWx1ZX1gLCBgJHtlLnRhcmdldC51cmdlbnQudmFsdWV9YCk7XG4gICAgXG4gICAgICAgIG5ld1RvRG8uVG9Eb0xpc3QucHVzaCh1c2VyRW50cmllcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb0RvX0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdUb0RvLlRvRG9MaXN0KSk7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kTmV3SXRlbShuZXdUb0RvKTtcbiAgICAgICAgZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2soY2hlY2tib3gsIGUpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSA/IGUudGFyZ2V0LnVyZ2VudC52YWx1ZSA9IHRydWUgOlxuICAgICAgICAgICAgZS50YXJnZXQudXJnZW50LnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRXhwYW5kTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VG9Eby5Ub0RvTGlzdC5sZW5ndGggLSAxKTsgXG4gICAgICAgIGxpc3RlbkZvckV4cGFuZC5hZGRMaXN0ZW5lclRvTmV3SXRlbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bixcbiAgICAgICAgZm9ybSxcbiAgICB9XG4gICAgXG59O1xuXG5jb25zdCBlZGl0VGFza3MgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByZXBsYWNlTm9kZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9ICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBsZXQgY2xpY2tlZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWluZGV4ID0gJyR7aW5kZXh9J11gKTtcblxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hZnRlcihfY3JlYXRlRWRpdEZvcm0oaW5kZXgpKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRUYXNrQnRucygpLnZhbGlkYXRlVXNlckVkaXQoZSk7XG4gICAgICAgIGVkaXRUYXNrQnRucygpLmNyZWF0ZUNhbmNlbEJ0bkxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUVkaXRGb3JtID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFZGl0aW5nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0VkaXRpbmdGb3JtLmFjdGlvbiA9IFwiL1wiO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uaWQgPSBcImVkaXRUYXNrRm9ybVwiXG4gICAgICAgIGlmKG5ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLnVyZ2VudCAhPT0gJ2ZhbHNlJykgdGFza0VkaXRpbmdGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdzYWxtb24nO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScsICdpdGVtRGl2Jyk7XG4gICAgICAgIHRhc2tFZGl0aW5nRm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG5cbiAgICAgICAgdGFza0VkaXRpbmdGb3JtLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrQ29tcGFjdChpbmRleCkpO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFeHRlbmRlZChpbmRleCkpO1xuICAgICAgICB0YXNrRWRpdGluZ0Zvcm0uYXBwZW5kQ2hpbGQoX2NyZWF0ZUJ1dHRvbkRpdihpbmRleCkpO1xuICAgICAgICByZXR1cm4gdGFza0VkaXRpbmdGb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ29tcGFjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ29tcGFjdEVkaXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ29tcGFjdEVkaXRvci5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGFjdCcpXG5cbiAgICAgICAgdGFza0NvbXBhY3RFZGl0b3IuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNoZWNrQm94SW5wdXQoaW5kZXgpKTtcbiAgICAgICAgdGFza0NvbXBhY3RFZGl0b3IuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tOYW1lSW5wdXQoaW5kZXgpKTsgXG4gICAgICAgIHRhc2tDb21wYWN0RWRpdG9yLmFwcGVuZENoaWxkKF9jcmVhdGVEYXRlSW5wdXQoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIHRhc2tDb21wYWN0RWRpdG9yO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVDaGVja0JveElucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnOyBcbiAgICAgICAgZWRpdEZvcm1DaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICBlZGl0Rm9ybUNoZWNrQm94LmlkID0gJ2VkaXRDaGVja2JveCc7XG4gICAgICAgIGlmKG5ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLnVyZ2VudCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtQ2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGVkaXRGb3JtQ2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gZWRpdEZvcm1DaGVja0JveDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlVGFza05hbWVJbnB1dCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZScpO1xuICAgICAgICB0YXNrTmFtZUlucHV0LmlkID0gJ3Rhc2tOYW1lRWRpdG9yJztcbiAgICAgICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9IGAke25ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHJldHVybiB0YXNrTmFtZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVEYXRlSW5wdXQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2RhdGVFZGl0b3InO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gYCR7bmV3VG9Eby5Ub0RvTGlzdFtpbmRleF0uZGF0ZX1gO1xuICAgICAgICBkYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBgXCIke25ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLmRhdGV9XCJgO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVUYXNrRXh0ZW5kZWQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0V4dGVuZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tFeHRlbmRlZC5jbGFzc0xpc3QuYWRkKCd0YXNrRXh0ZW5kZWQnKTtcblxuICAgICAgICB0YXNrRXh0ZW5kZWQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByb2plY3REaXYoaW5kZXgpKTtcbiAgICAgICAgdGFza0V4dGVuZGVkLmFwcGVuZENoaWxkKF9jcmVhdGVOb3RlRGl2KGluZGV4KSk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tFeHRlbmRlZDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlUHJvamVjdERpdiA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsRGl2Jyk7XG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdExhYmVsKGluZGV4KSk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByb2plY3RJbnB1dChpbmRleCkpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0RGl2O1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVQcm9qZWN0TGFiZWwgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RMYWJlbDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlUHJvamVjdElucHV0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICAgICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3RFZGl0b3InO1xuICAgICAgICBwcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSBgJHtuZXdUb0RvLlRvRG9MaXN0W2luZGV4XS5wcm9qZWN0fWA7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlTm90ZURpdiA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZURpdicpO1xuXG4gICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZU5vdGVMYWJlbChpbmRleCkpO1xuICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVOb3RlSW5wdXQoaW5kZXgpKTtcblxuICAgICAgICByZXR1cm4gbm90ZURpdjtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlTm90ZUxhYmVsID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIG5vdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdub3RlTGFiZWwnKTtcbiAgICAgICAgbm90ZUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlczpcIjtcblxuICAgICAgICByZXR1cm4gbm90ZUxhYmVsO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVOb3RlSW5wdXQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbm90ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25vdGVzJyk7ICAgXG4gICAgICAgIG5vdGVJbnB1dC5pZCA9ICdub3RlRWRpdG9yJztcbiAgICAgICAgbm90ZUlucHV0LnBsYWNlaG9sZGVyID0gYCR7bmV3VG9Eby5Ub0RvTGlzdFtpbmRleF0ubm90ZXN9YDtcblxuICAgICAgICByZXR1cm4gbm90ZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVCdXR0b25EaXYgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25EaXYnKTtcblxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVudGVyQnRuKGluZGV4KSk7XG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChfY3JlYXRlQ2FuY2VsQnRuKGluZGV4KSk7XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRW50ZXJCdG4gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlbnRlci50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgZW50ZXIuY2xhc3NMaXN0LmFkZCgnZW50ZXJCdG4nKTtcbiAgICAgICAgZW50ZXIudGV4dENvbnRlbnQgPSBcIkVudGVyXCI7XG5cbiAgICAgICAgcmV0dXJuIGVudGVyO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVDYW5jZWxCdG4gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBjYW5jZWxCdG4udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4ubmFtZSA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgICAgICByZXR1cm4gY2FuY2VsQnRuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcGxhY2VOb2RlLFxuICAgIH1cbn1cblxuY29uc3QgZWRpdFRhc2tCdG5zID0gKCkgPT4ge1xuICAgIGxldCBfY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENoZWNrYm94Jyk7XG4gICAgbGV0IF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lRWRpdG9yJyk7XG4gICAgbGV0IF9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVFZGl0b3InKTtcbiAgICBsZXQgX3Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEVkaXRvcicpO1xuICAgIGxldCBfbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZUVkaXRvcicpO1xuICAgIGxldCBfZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbmNlbEJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgX2FsbENhbmNlbEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW5jZWxCdG4nKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhbmNlbEJ0bnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgX2FsbENhbmNlbEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2FsbENhbmNlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfY2FsbENhbmNlbCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX2NhbmNlbEVkaXQoZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2NhbmNlbEVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleCk7IFxuICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFmdGVyKERPTV9UYXNrX0ZhY3RvcnkoKVxuICAgICAgICAgICAgLm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRmlsbGVkVGFza0NvbXBhY3QobmV3VG9Eby5Ub0RvTGlzdFtpbmRleF0sIGluZGV4KSk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgbGlzdGVuRm9yRXhwYW5kLnJlc2V0Q2Fycm90TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGVVc2VyRWRpdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgX3N1Ym1pdEVkaXRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZW50ZXJCdG4nKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X3N1Ym1pdEVkaXRCdG5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIF9zdWJtaXRFZGl0QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRWRpdFN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coX3N1Ym1pdEVkaXRCdG5zWzBdLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2NhbGxFZGl0U3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2kgbG92ZSB5b3UnKTtcbiAgICAgICAgcmV0dXJuIF9zdWJtaXRVc2VyRWRpdChlKTtcbiAgICB9XG5cbiAgICBjb25zdCBfc3VibWl0VXNlckVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBfaW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgX2NoZWNrRm9yTnVsbEVkaXQoZSwgX2luZGV4KTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFmdGVyKERPTV9UYXNrX0ZhY3RvcnkoKS5uZXdJdGVtRm9ybSgpXG4gICAgICAgICAgICAuYXBwZW5kRmlsbGVkVGFza0NvbXBhY3QobmV3VG9Eby5Ub0RvTGlzdFtfaW5kZXhdLCBfaW5kZXgpKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9Eb19MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3VG9Eby5Ub0RvTGlzdCkpO1xuICAgICAgICBsaXN0ZW5Gb3JFeHBhbmQucmVzZXRDYXJyb3RMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBfY2hlY2tGb3JOdWxsRWRpdCA9IChlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihfbmFtZS52YWx1ZSAhPT0gJycpIG5ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gX25hbWUudmFsdWU7XG4gICAgICAgIGlmKF9kYXRlLnZhbHVlICE9PSAnJykgbmV3VG9Eby5Ub0RvTGlzdFtpbmRleF0uZGF0ZSA9IF9kYXRlLnZhbHVlO1xuICAgICAgICBpZihfcHJvamVjdC52YWx1ZSAhPT0gJycpIG5ld1RvRG8uVG9Eb0xpc3RbaW5kZXhdLnByb2plY3QgPSBfcHJvamVjdC52YWx1ZTtcbiAgICAgICAgaWYoX25vdGVzLnZhbHVlICE9PSAnJykgbmV3VG9Eby5Ub0RvTGlzdFtpbmRleF0ubm90ZXMgPSBfbm90ZXMudmFsdWU7XG4gICAgICAgIChfY2hlY2tib3guY2hlY2tlZCkgPyBuZXdUb0RvLlRvRG9MaXN0W2luZGV4XS51cmdlbnQgPSAndHJ1ZScgOiBuZXdUb0RvLlRvRG9MaXN0W2luZGV4XS51cmdlbnQgPSAnZmFsc2UnO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvLlRvRG9MaXN0W2luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coX25vdGVzLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVDYW5jZWxCdG5MaXN0ZW5lcixcbiAgICAgICAgdmFsaWRhdGVVc2VyRWRpdCxcbiAgICB9XG59XG4gICAgXG5jb25zdCBleHBhbmRUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgX2FsbENhcnJvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrQ2Fycm90Jyk7XG4gICAgbGV0IGRlbGV0ZVRhc2tCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlRW50cnknKTtcbiAgICBsZXQgZWRpdFRhc2tCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdEVudHJ5Jyk7XG4gICAgbGV0IF9hbGxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1EaXYnKTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRlRm9ybSgpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKF9hbGxDYXJyb3RzKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb250YWluZXJEaXYucmVtb3ZlKCk7XG4gICAgICAgIG5ld1RvRG8uVG9Eb0xpc3Quc3BsaWNlKGNvbnRhaW5lckRpdi5kYXRhc2V0LmluZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvRG9fTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld1RvRG8uVG9Eb0xpc3QpKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VG9Eby5Ub0RvTGlzdCk7XG4gICAgICAgIHJlc2V0Q2Fycm90TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX3JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhcnJvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlVGFza0J0bnMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VG9Eby5Ub0RvTGlzdCk7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajxkZWxldGVUYXNrQnRucy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFza0J0bnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBfZWRpdCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhcnJvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFRhc2tCdG5zKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPGVkaXRUYXNrQnRucy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tCdG5zW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbGxFZGl0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgX2NhbGxFZGl0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICBfZWRpdFRhc2soZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2VkaXRUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZWRpdFRhc2tzKCkucmVwbGFjZU5vZGUoZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX3NocmluayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IF90dXJuQ2Fycm90ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSA6IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZExpc3RlbmVyVG9OZXdJdGVtID0gKCkgPT4ge1xuICAgICAgICBsZXQgaSA9IChuZXdUb0RvLlRvRG9MaXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBfYWxsQ2Fycm90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYWxsRXhwYW5kKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZXNldENhcnJvdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgbGV0IF9hbGxDYXJyb3RzRHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tDYXJyb3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coX2FsbENhcnJvdHNEdXApO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxfYWxsQ2Fycm90c0R1cC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfYWxsQ2Fycm90c0R1cFtpXS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgX2FsbENhcnJvdHNEdXBbaV0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXggPSAnJztcbiAgICAgICAgICAgIF9hbGxDYXJyb3RzRHVwW2ldLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4ID0gYCR7aX1gO1xuICAgICAgICAgICAgX2FsbENhcnJvdHNEdXBbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2FsbEV4cGFuZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfYWxsQ2Fycm90c0R1cFtpXS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2l9KTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBfY2FsbEV4cGFuZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgcmV0dXJuIF9leHBhbmQoZSwgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZXhwYW5kID0gKGUsIGkpID0+IHtcbiAgICAgICAgbGV0IF9zZWxlY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtRGl2Jyk7XG4gICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIHRhc2tGYWN0b3J5LmFwcGVuZEZpbGxlZFRhc2tFeHRlbmRlZChuZXdUb0RvLlRvRG9MaXN0W2ldLCBpLCBfc2VsZWN0VGFza3NbaV0pO1xuICAgICAgICAgICAgX3R1cm5DYXJyb3QoZSk7XG4gICAgICAgICAgICBfZWRpdCgpO1xuICAgICAgICAgICAgX3JlbW92ZSgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBfc2hyaW5rKGUpO1xuICAgICAgICAgICAgX3R1cm5DYXJyb3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9hbGxDYXJyb3RzKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8X2FsbENhcnJvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgX2FsbENhcnJvdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2FsbEV4cGFuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdGVuLFxuICAgICAgICBhZGRMaXN0ZW5lclRvTmV3SXRlbSxcbiAgICAgICAgcmVzZXRDYXJyb3RMaXN0ZW5lcnMsXG4gICAgfVxuICAgICAgICBcbn1cblxuY29uc3QgaGFuZGxlQ2Fycm90Q2xpY2tzID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGZpbHRlclByb2plY3RzID0gKGxpc3QpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdHNUb0FycmF5KGxpc3QpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0c1RvU2lkZWJhcihuZXdUb0RvLnByb2plY3RMaXN0KTtcbiAgICAgICAgYWRkTGlzdGVuZXJUb1Byb2plY3RMYWJlbHMoKTtcbiAgICAgICAgZG9jLmNhcnJvdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxFeHBhbmRQcm9qZWN0cyk7XG4gICAgICAgIGRvYy5jYXJyb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsUmVkdWNlUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RzVG9BcnJheSA9IChsaXN0KSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoIW5ld1RvRG8ucHJvamVjdExpc3QuaW5jbHVkZXMobGlzdFtpXS5wcm9qZWN0KSkge1xuICAgICAgICAgICAgICAgIGlmKGxpc3RbaV0ucHJvamVjdCAhPSBudWxsKSBuZXdUb0RvLnByb2plY3RMaXN0LnB1c2gobGlzdFtpXS5wcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvLnByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsUmVkdWNlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZWR1Y2VQcm9qZWN0cygpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWR1Y2VQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZG9jLmV4cGFuZFByb2plY3RzTWVudSgpO1xuICAgICAgICBuZXdUb0RvLnByb2plY3RMaXN0LnNwbGljZSgwLCBuZXdUb0RvLnByb2plY3RMaXN0Lmxlbmd0aCk7XG4gICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgZG9jLmNhcnJvdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxSZWR1Y2VQcm9qZWN0cyk7XG4gICAgICAgIGRvYy5jYXJyb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsRXhwYW5kUHJvamVjdHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvLnByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RGaWx0ZXJMYWJlbCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGFiZWxzKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdExhYmVscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBwcm9qZWN0TGFiZWxzW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kUHJvamVjdHNUb1NpZGViYXIgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZChjcmVhdGVQcm9qZWN0TGluayhsaXN0W2ldKSkgXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc2lkZWJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdExpbmsgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RmlsdGVyTGFiZWwnKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZExpc3RlbmVyVG9Qcm9qZWN0TGFiZWxzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RGaWx0ZXJMYWJlbCcpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0TGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGFiZWxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEZpbHRlclRvRG9zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxGaWx0ZXJUb0RvcyA9IChlKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWx0ZXIoKS5maWx0ZXJUb0RvcyhlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXJQcm9qZWN0cyxcbiAgICB9XG59KSgpO1xuXG5jb25zdCBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVG9Eb3MgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlsdGVyVG9Eb3MsXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgRE9NX1Rhc2tfRmFjdG9yeSwgRE9NX0ZhY3RvcnksIHZhbGlkYXRlRm9ybSwgZXhwYW5kVGFza3MgfVxuXG5cblxuICAgICAgICAgICAgIiwiY29uc3QgVG9Eb19JdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlc3QgPSBjb25zb2xlLmxvZygnd29ya3MnKTtcbiAgICBjb25zdCBUb0RvTGlzdCA9IFtdO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBjb25zdCBuZXdJdGVtID0gKGRlc2NyaXB0aW9uICwgZGF0ZSwgcHJvamVjdCwgbm90ZXMsIHVyZ2VudCkgPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgICAgbm90ZXMsIFxuICAgICAgICAgICAgdXJnZW50LFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByaW50QXJyYXlJdGVtID0gKGFycmF5SXRlbSkgPT4ge1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlc3QsXG4gICAgICAgIFRvRG9MaXN0LFxuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgbmV3SXRlbSxcbiAgICB9XG59XG5cbmV4cG9ydCB7VG9Eb19JdGVtfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7SWNvbn0gZnJvbSAnLi9tZW51QnV0dG9uLnBuZyc7XG5pbXBvcnQge0NhcnJvdH0gZnJvbSAnLi91cC1hcnJvdy5wbmcnO1xuaW1wb3J0IHtET01fRmFjdG9yeSwgRE9NX1Rhc2tfRmFjdG9yeSwgdmFsaWRhdGVGb3JtLCBleHBhbmRUYXNrc30gZnJvbSAnLi9ET00tTWFuYWdlcic7XG5pbXBvcnQge1RvRG9fSXRlbX0gZnJvbSAnLi9Ub0RvX09iamVjdF9GYWN0b3J5JztcblxuY29uc29sZS5sb2coJ2hlbGxvJyk7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gRE9NX1Rhc2tfRmFjdG9yeSgpO1xuY29uc3QgZGl2ID0gdGFza0ZhY3RvcnkuaXRlbURpdjtcbmNvbnNvbGUubG9nKHtkaXZ9KTtcblxuY29uc3QgZG9jID0gRE9NX0ZhY3RvcnkoKTtcblxuXG5cbmRvYy5wcm9qZWN0c0xhYmVsRGl2Lmluc2VydEJlZm9yZShkb2MuY2Fycm90LCBkb2MucHJvamVjdHNMYWJlbERpdi5maXJzdENoaWxkKTtcblxuZG9jLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2Muc2hvd01lbnUpO1xuXG5jb25zdCBjYWxsRXhwYW5kUHJvamVjdHMgPSAoZSkgPT4ge1xuICAgIHJldHVybiBkb2MuZXhwYW5kUHJvamVjdHNNZW51KCk7XG59XG5kb2MuY2Fycm90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEV4cGFuZFByb2plY3RzKTtcblxuZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG5cblxuY29uc3QgcmVtb3ZlSXRlbSA9IG5vZGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgIGNvbnNvbGUubG9nKG5vZGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgbm9kZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGlmKG5vZGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCA9PT0gJ2VtcHR5Rm9ybScpIHtcbiAgICAgICAgZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGYWN0b3J5Lm5ld0l0ZW1Gb3JtKCkuYXBwZW5kRW1wdHlJdGVtRm9ybSk7XG4gICAgfVxufVxuXG5jb25zdCBsaXN0ZW5Gb3JEZWxldGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlRW50cnknKTtcbiAgICBmb3IobGV0IGk9MDsgaTxkZWxldGVCdG4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBkZWxldGVCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKTtcbiAgICB9XG59XG5cbmxpc3RlbkZvckRlbGV0ZSgpO1xuZG9jLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckRlbGV0ZSk7XG5cblxuY29uc3QgcmVzcG9uc2l2ZVNpZGViYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1pblNpemUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBtYXhTaXplID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1MDBweClcIik7XG4gICAgXG5cbiAgICBjb25zdCBzaWRlYmFyTWVkaWFRdWVyeSA9IChtaW4sIG1heCkgPT4ge1xuICAgICAgICBpZihtYXgubWF0Y2hlcykge1xuICAgICAgICAgICAgZG9jLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2MudGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfWVsc2UgaWYobWluLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGRvYy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jLnRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWluU2l6ZSxcbiAgICAgICAgbWF4U2l6ZSxcbiAgICAgICAgc2lkZWJhck1lZGlhUXVlcnksXG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5vbmxvYWQgPSByZXNwb25zaXZlU2lkZWJhci5zaWRlYmFyTWVkaWFRdWVyeShyZXNwb25zaXZlU2lkZWJhci5taW5TaXplLCByZXNwb25zaXZlU2lkZWJhci5tYXhTaXplKTtcblxuXG5sZXQgbmV3VG9EbyA9IFRvRG9fSXRlbSgpO1xubGV0IGFkZEl0ZW0gPSBuZXdUb0RvLm5ld0l0ZW0oJ2dldCBncm9jZXJpZXMnLCAnMDgvMTMvMjEnLCAnZ3JvY2VyaWVzJywgJ2dldCBtaWxrLCBhbmQgZWdncycsICd0cnVlJyk7XG5sZXQgYWRkQW5vdGhlckl0ZW0gPSBuZXdUb0RvLm5ld0l0ZW0oJ2NsZWFuIHJvb20nLCAnMDgvMTQvMjEnLCAnaG91c2V3b3JrJywgJ3Jvb20gaXMgZGlydHksIGNsZWFuIGl0IScsICdmYWxzZScpO1xubGV0IGFkZEFub3RoZXJUZXN0SXRlbSA9IG5ld1RvRG8ubmV3SXRlbSgndGVzdCcsICd0ZXN0JywgJ3Rlc3QnLCAndGVzdCcpO1xuXG5uZXdUb0RvLlRvRG9MaXN0LnB1c2goYWRkSXRlbSwgYWRkQW5vdGhlckl0ZW0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGFza0ZhY3RvcnkubmV3SXRlbUZvcm0oKS5hcHBlbmRGaWxsZWRJdGVtRm9ybShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb19MaXN0JykpKSk7XG5cbmxldCB0ZXN0VmFsaWRhdGUgPSB2YWxpZGF0ZUZvcm0oKTtcbnRlc3RWYWxpZGF0ZS5ydW4oKTtcblxuXG5kb2MuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyh0ZXN0VmFsaWRhdGUuZm9ybSl9KVxuICAgIFxuY29uc3QgbGlzdGVuRm9yRXhwYW5kID0gZXhwYW5kVGFza3MoKTtcbmxpc3RlbkZvckV4cGFuZC5saXN0ZW4oKTtcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvRG9fTGlzdCcpKSk7XG5uZXdUb0RvLlRvRG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb19MaXN0JykpO1xuXG5leHBvcnQge25ld1RvRG8sIHRhc2tGYWN0b3J5LCBkb2MsIGxpc3RlbkZvckV4cGFuZCwgY2FsbEV4cGFuZFByb2plY3RzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9