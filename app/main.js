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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://timeline-app-v1/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://timeline-app-v1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://timeline-app-v1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/JSModules/CONTROLLER.js":
/*!*************************************!*\
  !*** ./src/JSModules/CONTROLLER.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CONTROLLER)\n/* harmony export */ });\n/* harmony import */ var _VIEW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VIEW */ \"./src/JSModules/VIEW.js\");\n/* harmony import */ var _FictionalTimeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FictionalTimeline */ \"./src/JSModules/FictionalTimeline.js\");\n\r\n\r\n\r\nclass CONTROLLER {\r\n    constructor(V = new _VIEW__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()) {\r\n        this.TimelineCreation = {\r\n            BTN: {},\r\n            AREA: {},\r\n            INPUT: {}\r\n        };\r\n        this.VIEW = V;\r\n        this.eventCount = 0;\r\n        this.eventCount = this.VIEW.printNewEventForm(this.eventCount);\r\n\r\n        this.DOMevents();\r\n        \r\n    }\r\n    DOMevents() {\r\n        this.VIEW.HTML.TimelineCreation.BTN.addEvent.addEventListener('click', () => {\r\n            this.eventCount = this.VIEW.printNewEventForm(this.eventCount); \r\n        });\r\n        this.VIEW.HTML.TimelineCreation.BTN.saveTimeline.addEventListener('click', () => {\r\n            this.saveTimeline();\r\n        });\r\n\r\n        this.VIEW.HTML.TimelineCreation.BTN.generateTimeline.addEventListener('click', () => {\r\n            let code = this.VIEW.getInput('timelineModCode');\r\n            if (!code) {\r\n                alert('Algo salió mal');\r\n            } else {\r\n                this.TimelineCREATED = new _FictionalTimeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"](code);\r\n                let newCount = this.VIEW.updateFromValues(\r\n                    this.TimelineCREATED.name,\r\n                    this.TimelineCREATED.subname,\r\n                    this.TimelineCREATED.events\r\n                );\r\n                this.eventCount = newCount;\r\n            }\r\n        });\r\n    }\r\n\r\n    saveTimeline() {\r\n        this.TimelineCREATED = new _FictionalTimeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.TimelineCREATED.name = this.VIEW.getInput('timelineName');\r\n        this.TimelineCREATED.subname = this.VIEW.getInput('timelineSubname');\r\n\r\n        console.log('EVENTS COUNT'+ this.eventCount);\r\n\r\n        let events = new Array(this.eventCount);\r\n        for (let i = 0; i < this.eventCount; i++) {\r\n            events[i] = {};\r\n            events[i].name = document.querySelector('#name' + i).value;\r\n            events[i].day = document.querySelector('#day' + i).value;\r\n            events[i].month = document.querySelector('#month' + i).value;\r\n            events[i].year = document.querySelector('#year' + i).value;\r\n            events[i].hour = document.querySelector('#hour' + i).value;\r\n            events[i].min = document.querySelector('#min' + i).value;\r\n            events[i].desc = document.querySelector('#desc' + i).value;\r\n        }\r\n\r\n        this.TimelineCREATED.events = events;\r\n        this.VIEW.updateInput('timelineCode',  this.TimelineCREATED.dataToString());\r\n    }\r\n}\n\n//# sourceURL=webpack://timeline-app-v1/./src/JSModules/CONTROLLER.js?");

/***/ }),

/***/ "./src/JSModules/FictionalTimeline.js":
/*!********************************************!*\
  !*** ./src/JSModules/FictionalTimeline.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FictionalTimeline)\n/* harmony export */ });\nclass FictionalTimeline {\r\n    name = null;\r\n    subname = null;\r\n    events = [];\r\n    code = null;\r\n\r\n    constructor(data = null) {\r\n        if (data !== null) {\r\n            let v = data.split(';');\r\n            this.name = v[0];\r\n            this.subname = v[1];\r\n            let events = v[2].split('/');\r\n            this.events = new Array(events.length);\r\n            events.forEach((e, index) => {\r\n                let eD = e.split('|');\r\n                this.events[index] = {};\r\n                this.events[index].day = parseInt(eD[0]);\r\n                this.events[index].month = parseInt(eD[1]);\r\n                this.events[index].year = parseInt(eD[2]);\r\n                this.events[index].hour = parseInt(eD[3]);\r\n                this.events[index].min = parseInt(eD[4]);\r\n                this.events[index].name = eD[5];\r\n                this.events[index].desc = eD[6];\r\n            });\r\n        }\r\n\r\n    }\r\n\r\n    getName = () => {\r\n        return this.name;\r\n    }\r\n\r\n    dataToString = () => {\r\n        let str = '';\r\n        str = this.pyc(str, this.name);\r\n        str = this.pyc(str, this.subname);\r\n        str = this.sla(str, this.events, true);\r\n        return str;\r\n    }\r\n    pyc(str, data) {\r\n        return str += data + ';';\r\n    }\r\n    sla(str, data, final = false) {\r\n        let result = '';\r\n        let helper = false;\r\n        data.forEach(event => {\r\n            if (helper) result += '/';\r\n            result += event.day + '|';\r\n            result += event.month + '|';\r\n            result += event.year + '|';\r\n            result += event.hour + '|';\r\n            result += event.min + '|';\r\n            result += event.name + '|';\r\n            result += event.desc;\r\n            helper = true;\r\n        })\r\n\r\n        str += result;\r\n        if (!final) str += ';'\r\n        return str;\r\n    }\r\n}\n\n//# sourceURL=webpack://timeline-app-v1/./src/JSModules/FictionalTimeline.js?");

/***/ }),

/***/ "./src/JSModules/VIEW.js":
/*!*******************************!*\
  !*** ./src/JSModules/VIEW.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VIEW)\n/* harmony export */ });\n/* harmony import */ var _ViewTemplates_TimelineCreationTEMPLATE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewTemplates/TimelineCreationTEMPLATE */ \"./src/JSModules/ViewTemplates/TimelineCreationTEMPLATE.js\");\n\r\n\r\nclass VIEW {\r\n    constructor() {\r\n        this.INFO = {};\r\n        this.FOOTER = {};\r\n        this.HTML = {\r\n            TimelineCreation: {\r\n                BTN: {},\r\n                AREA: {},\r\n                INPUT: {}\r\n            }\r\n        };\r\n        this.TEMPLATE = {};\r\n        this.TEMPLATE.TimelineCreation = new _ViewTemplates_TimelineCreationTEMPLATE__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.loadHTML();\r\n\r\n    }\r\n    loadHTML() {\r\n        //TIMELINE CREATION\r\n        this.HTML.TimelineCreation.BTN.addEvent = document.querySelector('#addEventBTN');\r\n        this.HTML.TimelineCreation.BTN.saveTimeline = document.querySelector('#saveTimelineBTN');\r\n        this.HTML.TimelineCreation.BTN.generateTimeline = document.querySelector('#generateTimelineBTN');\r\n        this.HTML.TimelineCreation.AREA.events = document.querySelector('#eventDataArea');\r\n        this.HTML.TimelineCreation.INPUT.timelineCode = document.querySelector('#timelineCode');\r\n        this.HTML.TimelineCreation.INPUT.timelineModCode = document.querySelector('#timelineModCode');\r\n        this.HTML.TimelineCreation.INPUT.timelineName = document.querySelector('#timelineName');\r\n        this.HTML.TimelineCreation.INPUT.timelineSubname = document.querySelector('#subname');\r\n\r\n        //FOOTER\r\n        this.FOOTER.yearSpan = document.querySelector('#yearSpan') ? document.querySelector('#yearSpan') : false;\r\n        this.INFO.year = new Date().getFullYear();\r\n        if(this.FOOTER.yearSpan) this.FOOTER.yearSpan.innerHTML = year;\r\n    }\r\n\r\n    printNewEventForm(eventCount) {\r\n        let html = this.TEMPLATE.TimelineCreation.getEventForm(eventCount);\r\n        this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);\r\n        return ++eventCount;\r\n    }\r\n\r\n    updateFromValues(name, subname, events) {\r\n        this.HTML.TimelineCreation.INPUT.timelineName.value = this.TimelineCREATED.name;\r\n        this.HTML.TimelineCreation.INPUT.timelineSubname.value = this.TimelineCREATED.subname;\r\n        let eventCount = events.length;\r\n        this.HTML.TimelineCreation.AREA.events.innerHTML = \"\";\r\n        this.TimelineCREATED.events.forEach((event, index) => {\r\n            let html = this.TEMPLATE.TimelineCreation.printSingleEvent(event, index);\r\n            this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);\r\n        });\r\n        return eventCount;\r\n    }\r\n\r\n    getInput = (inputName) => {\r\n        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode.value;\r\n        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode.value;\r\n        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName.value;\r\n        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname.value;\r\n        return false;\r\n    }\r\n    updateInput = (inputName, value) => {\r\n        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode.value = value;\r\n        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode.value = value;\r\n        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName.value = value;\r\n        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname.value = value;\r\n        return false;\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://timeline-app-v1/./src/JSModules/VIEW.js?");

/***/ }),

/***/ "./src/JSModules/ViewTemplates/TimelineCreationTEMPLATE.js":
/*!*****************************************************************!*\
  !*** ./src/JSModules/ViewTemplates/TimelineCreationTEMPLATE.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TimelineCreationTEMPLATE)\n/* harmony export */ });\nclass TimelineCreationTEMPLATE{\r\n    constructor(){\r\n        // this.eventCount = 0;\r\n    }\r\n\r\n    getEventForm(eventCount){\r\n        return `\r\n        <div class=\"border border-secondary rounded p-3\" id=\"event${eventCount}\">\r\n            <div class=\"row justify-content-center mb-1\">\r\n                <div class=\"col-md-6\">\r\n                    <label class=\"form-label\">Nombre del evento</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"name${eventCount}\"\r\n                        placeholder=\"Ejemplo: Padres del protagonista son asesinados\">\r\n                </div>\r\n                <div class=\"col-md-4 row\">\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Día</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"day${eventCount}\" placeholder=\"31\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Mes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"month${eventCount}\" placeholder=\"12\"\r\n                            aria-label=\"Last name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Año</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"year${eventCount}\" placeholder=\"1999\"\r\n                            aria-label=\"Last name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2 row\">\r\n                    <label class=\"form-label\">Hora y min</label>\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"hour${eventCount}\" placeholder=\"23\"\r\n                            aria-label=\"Username\">\r\n                        <span class=\"input-group-text\">:</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"min${eventCount}\" placeholder=\"59\"\r\n                            aria-label=\"Server\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-floating mx-3\">\r\n                <textarea class=\"form-control\" placeholder=\"Descripción del evento\"\r\n                    id=\"desc${eventCount}\"></textarea>\r\n                <label for=\"desc\">Descripción del evento</label>\r\n            </div>\r\n        </div>\r\n        `;\r\n    }\r\n\r\n    printSingleEvent(event, counter){\r\n    return `\r\n        <div class=\"border border-secondary rounded p-3\" id=\"event${counter}\">\r\n            <div class=\"row justify-content-center mb-1\">\r\n                <div class=\"col-md-6\">\r\n                    <label class=\"form-label\">Nombre del evento</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"name${counter}\"\r\n                        placeholder=\"Ejemplo: Padres del protagonista son asesinados\" value=\"${event.name}\">\r\n                </div>\r\n                <div class=\"col-md-4 row\">\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Día</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"day${counter}\" placeholder=\"31\" value=\"${event.day}\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Mes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"month${counter}\" placeholder=\"12\" value=\"${event.month}\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <label class=\"form-label\">Año</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"year${counter}\" placeholder=\"1999\" value=\"${event.year}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2 row\">\r\n                    <label class=\"form-label\">Hora y min</label>\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"hour${counter}\" placeholder=\"23\" value=\"${event.hour}\">\r\n                        <span class=\"input-group-text\">:</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"min${counter}\" placeholder=\"59\" value=\"${event.min}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-floating mx-3\">\r\n                <textarea class=\"form-control\" placeholder=\"Descripción del evento\"\r\n                    id=\"desc${counter}\">${event.desc}</textarea>\r\n                <label for=\"desc\">Descripción del evento</label>\r\n            </div>\r\n        </div>\r\n        `;\r\n    }\r\n}\n\n//# sourceURL=webpack://timeline-app-v1/./src/JSModules/ViewTemplates/TimelineCreationTEMPLATE.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _JSModules_CONTROLLER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSModules/CONTROLLER */ \"./src/JSModules/CONTROLLER.js\");\n/* harmony import */ var _JSModules_VIEW__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSModules/VIEW */ \"./src/JSModules/VIEW.js\");\n\r\n\r\n\r\n\r\nlet view = new _JSModules_VIEW__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _JSModules_CONTROLLER__WEBPACK_IMPORTED_MODULE_1__[\"default\"](view);\n\n//# sourceURL=webpack://timeline-app-v1/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;