System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mapsSection: 'Mapas para comparação',
    leftMap: 'Mapa esquerdo',
    rightMap: 'Mapa direito',
    layersSection: 'Camadas (opcional)',
    subBaciasUrl: 'URL Sub-bacias',
    indiceUrl: 'URL Índice atual',
    cenario245Url: 'URL Cenário moderado (245)',
    cenario585Url: 'URL Cenário pessimista (585)'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/setting/setting.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts");
/** @jsx jsx */




function Setting(props) {
    const cfg = (props.config || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
    const updateConfig = (key, value) => {
        const next = (props.config || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({})).set(key, value);
        props.onSettingChange({ id: props.id, config: next });
    };
    const onLeftMapSelect = (ids) => {
        const leftId = ids[0] || '';
        const rightId = cfg.rightMapWidgetId || '';
        updateConfig('leftMapWidgetId', leftId);
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: [leftId, rightId].filter(Boolean)
        });
    };
    const onRightMapSelect = (ids) => {
        const rightId = ids[0] || '';
        const leftId = cfg.leftMapWidgetId || '';
        updateConfig('rightMapWidgetId', rightId);
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: [leftId, rightId].filter(Boolean)
        });
    };
    const labelStyle = { fontSize: '12px', color: '#555', marginBottom: '4px', display: 'block' };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'view-layers-toggle-setting' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].mapsSection },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].leftMap),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: cfg.leftMapWidgetId ? [cfg.leftMapWidgetId] : [], onSelect: onLeftMapSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].rightMap),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: cfg.rightMapWidgetId ? [cfg.rightMapWidgetId] : [], onSelect: onRightMapSelect }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].layersSection },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].subBaciasUrl),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.subBaciasUrl || '', onChange: (e) => { updateConfig('subBaciasUrl', e.target.value); } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].indiceUrl),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.indiceUrl || '', onChange: (e) => { updateConfig('indiceUrl', e.target.value); } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].cenario245Url),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.cenarioGrande245Url || '', onChange: (e) => { updateConfig('cenarioGrande245Url', e.target.value); } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].cenario585Url),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.cenarioGrande585Url || '', onChange: (e) => { updateConfig('cenarioGrande585Url', e.target.value); } })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0IsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyxhQUFhLEVBQUUsOEJBQThCO0NBQzlDOzs7Ozs7Ozs7Ozs7QUNURDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUMyQjtBQUV5RDtBQUNoRTtBQUVxQjtBQUV6QyxTQUFTLE9BQU8sQ0FBRSxLQUFzQztJQUNyRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBYTtJQUV2RCxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQW1CLEVBQUUsS0FBYyxFQUFFLEVBQUU7UUFDM0QsTUFBTSxJ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QTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIG1hcHNTZWN0aW9uOiAnTWFwYXMgcGFyYSBjb21wYXJhw6fDo28nLFxuICBsZWZ0TWFwOiAnTWFwYSBlc3F1ZXJkbycsXG4gIHJpZ2h0TWFwOiAnTWFwYSBkaXJlaXRvJyxcbiAgbGF5ZXJzU2VjdGlvbjogJ0NhbWFkYXMgKG9wY2lvbmFsKScsXG4gIHN1YkJhY2lhc1VybDogJ1VSTCBTdWItYmFjaWFzJyxcbiAgaW5kaWNlVXJsOiAnVVJMIMONbmRpY2UgYXR1YWwnLFxuICBjZW5hcmlvMjQ1VXJsOiAnVVJMIENlbsOhcmlvIG1vZGVyYWRvICgyNDUpJyxcbiAgY2VuYXJpbzU4NVVybDogJ1VSTCBDZW7DoXJpbyBwZXNzaW1pc3RhICg1ODUpJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yLCBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nIChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBjZmcgPSAocHJvcHMuY29uZmlnIHx8IEltbXV0YWJsZSh7fSkpIGFzIElNQ29uZmlnXG5cbiAgY29uc3QgdXBkYXRlQ29uZmlnID0gKGtleToga2V5b2YgSU1Db25maWcsIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChwcm9wcy5jb25maWcgfHwgSW1tdXRhYmxlKHt9KSkuc2V0KGtleSwgdmFsdWUpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IG5leHQgfSlcbiAgfVxuXG4gIGNvbnN0IG9uTGVmdE1hcFNlbGVjdCA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgbGVmdElkID0gaWRzWzBdIHx8ICcnXG4gICAgY29uc3QgcmlnaHRJZCA9IGNmZy5yaWdodE1hcFdpZGdldElkIHx8ICcnXG4gICAgdXBkYXRlQ29uZmlnKCdsZWZ0TWFwV2lkZ2V0SWQnLCBsZWZ0SWQpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkczogW2xlZnRJZCwgcmlnaHRJZF0uZmlsdGVyKEJvb2xlYW4pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uUmlnaHRNYXBTZWxlY3QgPSAoaWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IHJpZ2h0SWQgPSBpZHNbMF0gfHwgJydcbiAgICBjb25zdCBsZWZ0SWQgPSBjZmcubGVmdE1hcFdpZGdldElkIHx8ICcnXG4gICAgdXBkYXRlQ29uZmlnKCdyaWdodE1hcFdpZGdldElkJywgcmlnaHRJZClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBbbGVmdElkLCByaWdodElkXS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgbGFiZWxTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNTU1JywgbWFyZ2luQm90dG9tOiAnNHB4JywgZGlzcGxheTogJ2Jsb2NrJyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldy1sYXllcnMtdG9nZ2xlLXNldHRpbmcnPlxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLm1hcHNTZWN0aW9ufT5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy5sZWZ0TWFwfTwvbGFiZWw+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e2NmZy5sZWZ0TWFwV2lkZ2V0SWQgPyBbY2ZnLmxlZnRNYXBXaWRnZXRJZF0gOiBbXX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvbkxlZnRNYXBTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnJpZ2h0TWFwfTwvbGFiZWw+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e2NmZy5yaWdodE1hcFdpZGdldElkID8gW2NmZy5yaWdodE1hcFdpZGdldElkXSA6IFtdfVxuICAgICAgICAgICAgb25TZWxlY3Q9e29uUmlnaHRNYXBTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmxheWVyc1NlY3Rpb259PlxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnN1YkJhY2lhc1VybH08L2xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICB2YWx1ZT17Y2ZnLnN1YkJhY2lhc1VybCB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB1cGRhdGVDb25maWcoJ3N1YkJhY2lhc1VybCcsIGUudGFyZ2V0LnZhbHVlKSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCc+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy5pbmRpY2VVcmx9PC9sYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xuICAgICAgICAgICAgdmFsdWU9e2NmZy5pbmRpY2VVcmwgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdXBkYXRlQ29uZmlnKCdpbmRpY2VVcmwnLCBlLnRhcmdldC52YWx1ZSkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnPlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxTdHlsZX0+e2RlZmF1bHRJMThuTWVzc2FnZXMuY2VuYXJpbzI0NVVybH08L2xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICB2YWx1ZT17Y2ZnLmNlbmFyaW9HcmFuZGUyNDVVcmwgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdXBkYXRlQ29uZmlnKCdjZW5hcmlvR3JhbmRlMjQ1VXJsJywgZS50YXJnZXQudmFsdWUpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLmNlbmFyaW81ODVVcmx9PC9sYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xuICAgICAgICAgICAgdmFsdWU9e2NmZy5jZW5hcmlvR3JhbmRlNTg1VXJsIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHVwZGF0ZUNvbmZpZygnY2VuYXJpb0dyYW5kZTU4NVVybCcsIGUudGFyZ2V0LnZhbHVlKSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=