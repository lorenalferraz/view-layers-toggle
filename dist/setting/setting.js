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
    layoutSection: 'Layout do widget',
    widgetPart: 'Parte exibida',
    widgetPartCombined: 'Completo (formato em T)',
    widgetPartFilters: 'Somente barra de filtros',
    widgetPartPanel: 'Somente indicadores e legenda',
    widgetPartHelp: 'Use duas instâncias do widget (filtros + painel) com o mesmo ID de vínculo para posicioná-las separadamente.',
    linkGroupId: 'ID de vínculo',
    linkGroupIdHelp: 'Deve ser idêntico na barra de filtros e no painel de indicadores.',
    mapsSection: 'Mapas para comparação',
    leftMap: 'Mapa esquerdo',
    rightMap: 'Mapa direito',
    layersSection: 'Camadas (opcional)',
    subBaciasUrl: 'URL Sub-bacias',
    indiceUrl: 'URL Índice atual',
    cenario245Url: 'URL Cenário moderado (245)',
    cenario585Url: 'URL Cenário pessimista (585)',
    tShapeSection: 'Formato em T',
    tTopBarHeight: 'Altura da barra superior (px)',
    tTopBarHeightHelp: 'Controla a espessura vertical da barra horizontal do T (filtros).',
    tStemWidthPercent: 'Largura da haste central (%)',
    tStemWidthPercentHelp: 'Controla a grossura horizontal da coluna central (indicadores e legenda).',
    tStemMinHeight: 'Altura mínima da haste (px)',
    tStemMinHeightHelp: 'Controla até onde a haste central se estende para baixo.'
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




const T_DEFAULTS = {
    tTopBarHeight: 120,
    tStemWidthPercent: 42,
    tStemMinHeight: 220
};
function Setting(props) {
    var _a, _b, _c;
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
    const helpStyle = { fontSize: '11px', color: '#888', marginTop: '4px', lineHeight: 1.4 };
    const topBarH = (_a = cfg.tTopBarHeight) !== null && _a !== void 0 ? _a : T_DEFAULTS.tTopBarHeight;
    const stemW = (_b = cfg.tStemWidthPercent) !== null && _b !== void 0 ? _b : T_DEFAULTS.tStemWidthPercent;
    const stemH = (_c = cfg.tStemMinHeight) !== null && _c !== void 0 ? _c : T_DEFAULTS.tStemMinHeight;
    const widgetPart = cfg.widgetPart || 'combined';
    const isPanelOnly = widgetPart === 'panel';
    const isFiltersOnly = widgetPart === 'filters';
    const isCombined = widgetPart === 'combined';
    const selectStyle = {
        width: '100%',
        padding: '6px 8px',
        fontSize: '13px',
        borderRadius: '4px',
        border: '1px solid #d0d0d0'
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'view-layers-toggle-setting' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].layoutSection },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].widgetPart),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { style: selectStyle, value: widgetPart, onChange: (e) => { updateConfig('widgetPart', e.target.value); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'combined' }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].widgetPartCombined),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'filters' }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].widgetPartFilters),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'panel' }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].widgetPartPanel)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: helpStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].widgetPartHelp)),
            !isCombined && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].linkGroupId),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.linkGroupId || 'default', onChange: (e) => { updateConfig('linkGroupId', e.target.value || 'default'); } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: helpStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].linkGroupIdHelp)))),
        !isPanelOnly && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].mapsSection },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].leftMap),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: cfg.leftMapWidgetId ? [cfg.leftMapWidgetId] : [], onSelect: onLeftMapSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].rightMap),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: cfg.rightMapWidgetId ? [cfg.rightMapWidgetId] : [], onSelect: onRightMapSelect })))),
        (isCombined || isFiltersOnly) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: isCombined ? _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tShapeSection : _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tTopBarHeight },
            (isCombined || isFiltersOnly) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tTopBarHeight),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', value: topBarH, min: 72, max: 280, onChange: (v) => { updateConfig('tTopBarHeight', Number(v) || T_DEFAULTS.tTopBarHeight); } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: helpStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tTopBarHeightHelp))),
            isCombined && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tStemWidthPercent),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', value: stemW, min: 18, max: 75, onChange: (v) => { updateConfig('tStemWidthPercent', Number(v) || T_DEFAULTS.tStemWidthPercent); } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: helpStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tStemWidthPercentHelp))
                ,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tStemMinHeight),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', value: stemH, min: 120, max: 600, onChange: (v) => { updateConfig('tStemMinHeight', Number(v) || T_DEFAULTS.tStemMinHeight); } }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: helpStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].tStemMinHeightHelp))))),
        !isPanelOnly && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].layersSection },
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
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'w-100', value: cfg.cenarioGrande585Url || '', onChange: (e) => { updateConfig('cenarioGrande585Url', e.target.value); } }))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLGFBQWEsRUFBRSxrQkFBa0I7SUFDakMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLGlCQUFpQixFQUFFLDBCQUEwQjtJQUM3QyxlQUFlLEVBQUUsK0JBQStCO0lBQ2hELGNBQWMsRUFBRSw4R0FBOEc7SUFDOUgsV0FBVyxFQUFFLGVBQWU7SUFDNUIsZUFBZSxFQUFFLG1FQUFtRTtJQUNwRixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixTQUFTLEVBQUUsa0JBQWtCO0lBQzdCLGFBQWEsRUFBRSw0QkFBNEI7SUFDM0MsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QyxhQUFhLEVBQUUsY0FBYztJQUM3QixhQUFhLEVBQUUsK0JBQStCO0lBQzlDLGlCQUFpQixFQUFFLG1FQUFtRTtJQUN0RixpQkFBaUIsRUFBRSw4QkFBOEI7SUFDakQscUJBQXFCLEVBQUUsMkVBQTJFO0lBQ2xHLGNBQWMsRUFBRSw2QkFBNkI7SUFDN0Msa0JBQWtCLEVBQUUsMERBQTBEO0NBQy9FOzs7Ozs7Ozs7Ozs7QUN4QkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7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Q0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNO2dCQUNyQiwwREFBTyxLQUFLLEVBQUUsVUFBVSxJQUFHLDZEQUFtQixDQUFDLGFBQWEsQ0FBUztnQkFDckUsK0NBQUMsOENBQVMsSUFDUixTQUFTLEVBQUMsT0FBTyxFQUNqQixLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFDcEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQ3hFLENBQ1M7WUFDYiwrQ0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNO2dCQUNyQiwwREFBTyxLQUFLLEVBQUUsVUFBVSxJQUFHLDZEQUFtQixDQUFDLGFBQWEsQ0FBUztnQkFDckUsK0NBQUMsOENBQVMsSUFDUixTQUFTLEVBQUMsT0FBTyxFQUNqQixLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFDcEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQ3hFLENBQ1MsQ0FDRSxDQUNoQixDQUNHLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgbGF5b3V0U2VjdGlvbjogJ0xheW91dCBkbyB3aWRnZXQnLFxuICB3aWRnZXRQYXJ0OiAnUGFydGUgZXhpYmlkYScsXG4gIHdpZGdldFBhcnRDb21iaW5lZDogJ0NvbXBsZXRvIChmb3JtYXRvIGVtIFQpJyxcbiAgd2lkZ2V0UGFydEZpbHRlcnM6ICdTb21lbnRlIGJhcnJhIGRlIGZpbHRyb3MnLFxuICB3aWRnZXRQYXJ0UGFuZWw6ICdTb21lbnRlIGluZGljYWRvcmVzIGUgbGVnZW5kYScsXG4gIHdpZGdldFBhcnRIZWxwOiAnVXNlIGR1YXMgaW5zdMOibmNpYXMgZG8gd2lkZ2V0IChmaWx0cm9zICsgcGFpbmVsKSBjb20gbyBtZXNtbyBJRCBkZSB2w61uY3VsbyBwYXJhIHBvc2ljaW9uw6EtbGFzIHNlcGFyYWRhbWVudGUuJyxcbiAgbGlua0dyb3VwSWQ6ICdJRCBkZSB2w61uY3VsbycsXG4gIGxpbmtHcm91cElkSGVscDogJ0RldmUgc2VyIGlkw6pudGljbyBuYSBiYXJyYSBkZSBmaWx0cm9zIGUgbm8gcGFpbmVsIGRlIGluZGljYWRvcmVzLicsXG4gIG1hcHNTZWN0aW9uOiAnTWFwYXMgcGFyYSBjb21wYXJhw6fDo28nLFxuICBsZWZ0TWFwOiAnTWFwYSBlc3F1ZXJkbycsXG4gIHJpZ2h0TWFwOiAnTWFwYSBkaXJlaXRvJyxcbiAgbGF5ZXJzU2VjdGlvbjogJ0NhbWFkYXMgKG9wY2lvbmFsKScsXG4gIHN1YkJhY2lhc1VybDogJ1VSTCBTdWItYmFjaWFzJyxcbiAgaW5kaWNlVXJsOiAnVVJMIMONbmRpY2UgYXR1YWwnLFxuICBjZW5hcmlvMjQ1VXJsOiAnVVJMIENlbsOhcmlvIG1vZGVyYWRvICgyNDUpJyxcbiAgY2VuYXJpbzU4NVVybDogJ1VSTCBDZW7DoXJpbyBwZXNzaW1pc3RhICg1ODUpJyxcbiAgdFNoYXBlU2VjdGlvbjogJ0Zvcm1hdG8gZW0gVCcsXG4gIHRUb3BCYXJIZWlnaHQ6ICdBbHR1cmEgZGEgYmFycmEgc3VwZXJpb3IgKHB4KScsXG4gIHRUb3BCYXJIZWlnaHRIZWxwOiAnQ29udHJvbGEgYSBlc3Blc3N1cmEgdmVydGljYWwgZGEgYmFycmEgaG9yaXpvbnRhbCBkbyBUIChmaWx0cm9zKS4nLFxuICB0U3RlbVdpZHRoUGVyY2VudDogJ0xhcmd1cmEgZGEgaGFzdGUgY2VudHJhbCAoJSknLFxuICB0U3RlbVdpZHRoUGVyY2VudEhlbHA6ICdDb250cm9sYSBhIGdyb3NzdXJhIGhvcml6b250YWwgZGEgY29sdW5hIGNlbnRyYWwgKGluZGljYWRvcmVzIGUgbGVnZW5kYSkuJyxcbiAgdFN0ZW1NaW5IZWlnaHQ6ICdBbHR1cmEgbcOtbmltYSBkYSBoYXN0ZSAocHgpJyxcbiAgdFN0ZW1NaW5IZWlnaHRIZWxwOiAnQ29udHJvbGEgYXTDqSBvbmRlIGEgaGFzdGUgY2VudHJhbCBzZSBlc3RlbmRlIHBhcmEgYmFpeG8uJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yLCBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTnVtZXJpY0lucHV0LCBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmNvbnN0IFRfREVGQVVMVFMgPSB7XG4gIHRUb3BCYXJIZWlnaHQ6IDEyMCxcbiAgdFN0ZW1XaWR0aFBlcmNlbnQ6IDQyLFxuICB0U3RlbU1pbkhlaWdodDogMjIwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcgKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IGNmZyA9IChwcm9wcy5jb25maWcgfHwgSW1tdXRhYmxlKHt9KSkgYXMgSU1Db25maWdcblxuICBjb25zdCB1cGRhdGVDb25maWcgPSAoa2V5OiBrZXlvZiBJTUNvbmZpZywgdmFsdWU6IHVua25vd24pID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKHByb3BzLmNvbmZpZyB8fCBJbW11dGFibGUoe30pKS5zZXQoa2V5LCB2YWx1ZSlcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogcHJvcHMuaWQsIGNvbmZpZzogbmV4dCB9KVxuICB9XG5cbiAgY29uc3Qgb25MZWZ0TWFwU2VsZWN0ID0gKGlkczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBsZWZ0SWQgPSBpZHNbMF0gfHwgJydcbiAgICBjb25zdCByaWdodElkID0gY2ZnLnJpZ2h0TWFwV2lkZ2V0SWQgfHwgJydcbiAgICB1cGRhdGVDb25maWcoJ2xlZnRNYXBXaWRnZXRJZCcsIGxlZnRJZClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBbbGVmdElkLCByaWdodElkXS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25SaWdodE1hcFNlbGVjdCA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgcmlnaHRJZCA9IGlkc1swXSB8fCAnJ1xuICAgIGNvbnN0IGxlZnRJZCA9IGNmZy5sZWZ0TWFwV2lkZ2V0SWQgfHwgJydcbiAgICB1cGRhdGVDb25maWcoJ3JpZ2h0TWFwV2lkZ2V0SWQnLCByaWdodElkKVxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IFtsZWZ0SWQsIHJpZ2h0SWRdLmZpbHRlcihCb29sZWFuKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBsYWJlbFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM1NTUnLCBtYXJnaW5Cb3R0b206ICc0cHgnLCBkaXNwbGF5OiAnYmxvY2snIH1cbiAgY29uc3QgaGVscFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBmb250U2l6ZTogJzExcHgnLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Ub3A6ICc0cHgnLCBsaW5lSGVpZ2h0OiAxLjQgfVxuXG4gIGNvbnN0IHRvcEJhckg6IG51bWJlciA9IGNmZy50VG9wQmFySGVpZ2h0ID8/IFRfREVGQVVMVFMudFRvcEJhckhlaWdodFxuICBjb25zdCBzdGVtVzogbnVtYmVyID0gY2ZnLnRTdGVtV2lkdGhQZXJjZW50ID8/IFRfREVGQVVMVFMudFN0ZW1XaWR0aFBlcmNlbnRcbiAgY29uc3Qgc3RlbUg6IG51bWJlciA9IGNmZy50U3RlbU1pbkhlaWdodCA/PyBUX0RFRkFVTFRTLnRTdGVtTWluSGVpZ2h0XG4gIGNvbnN0IHdpZGdldFBhcnQgPSBjZmcud2lkZ2V0UGFydCB8fCAnY29tYmluZWQnXG4gIGNvbnN0IGlzUGFuZWxPbmx5ID0gd2lkZ2V0UGFydCA9PT0gJ3BhbmVsJ1xuICBjb25zdCBpc0ZpbHRlcnNPbmx5ID0gd2lkZ2V0UGFydCA9PT0gJ2ZpbHRlcnMnXG4gIGNvbnN0IGlzQ29tYmluZWQgPSB3aWRnZXRQYXJ0ID09PSAnY29tYmluZWQnXG5cbiAgY29uc3Qgc2VsZWN0U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldy1sYXllcnMtdG9nZ2xlLXNldHRpbmcnPlxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmxheW91dFNlY3Rpb259PlxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLndpZGdldFBhcnR9PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBzdHlsZT17c2VsZWN0U3R5bGV9XG4gICAgICAgICAgICB2YWx1ZT17d2lkZ2V0UGFydH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB1cGRhdGVDb25maWcoJ3dpZGdldFBhcnQnLCBlLnRhcmdldC52YWx1ZSkgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjb21iaW5lZCc+e2RlZmF1bHRJMThuTWVzc2FnZXMud2lkZ2V0UGFydENvbWJpbmVkfTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZmlsdGVycyc+e2RlZmF1bHRJMThuTWVzc2FnZXMud2lkZ2V0UGFydEZpbHRlcnN9PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdwYW5lbCc+e2RlZmF1bHRJMThuTWVzc2FnZXMud2lkZ2V0UGFydFBhbmVsfTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2hlbHBTdHlsZX0+e2RlZmF1bHRJMThuTWVzc2FnZXMud2lkZ2V0UGFydEhlbHB9PC9kaXY+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgeyFpc0NvbWJpbmVkICYmIChcbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxTdHlsZX0+e2RlZmF1bHRJMThuTWVzc2FnZXMubGlua0dyb3VwSWR9PC9sYWJlbD5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcbiAgICAgICAgICAgICAgdmFsdWU9e2NmZy5saW5rR3JvdXBJZCB8fCAnZGVmYXVsdCd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB1cGRhdGVDb25maWcoJ2xpbmtHcm91cElkJywgZS50YXJnZXQudmFsdWUgfHwgJ2RlZmF1bHQnKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hlbHBTdHlsZX0+e2RlZmF1bHRJMThuTWVzc2FnZXMubGlua0dyb3VwSWRIZWxwfTwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgKFxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLm1hcHNTZWN0aW9ufT5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy5sZWZ0TWFwfTwvbGFiZWw+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e2NmZy5sZWZ0TWFwV2lkZ2V0SWQgPyBbY2ZnLmxlZnRNYXBXaWRnZXRJZF0gOiBbXX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvbkxlZnRNYXBTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnJpZ2h0TWFwfTwvbGFiZWw+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e2NmZy5yaWdodE1hcFdpZGdldElkID8gW2NmZy5yaWdodE1hcFdpZGdldElkXSA6IFtdfVxuICAgICAgICAgICAgb25TZWxlY3Q9e29uUmlnaHRNYXBTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHsoaXNDb21iaW5lZCB8fCBpc0ZpbHRlcnNPbmx5KSAmJiAoXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e2lzQ29tYmluZWQgPyBkZWZhdWx0STE4bk1lc3NhZ2VzLnRTaGFwZVNlY3Rpb24gOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnRUb3BCYXJIZWlnaHR9PlxuICAgICAgICB7KGlzQ29tYmluZWQgfHwgaXNGaWx0ZXJzT25seSkgJiYgKFxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnRUb3BCYXJIZWlnaHR9PC9sYWJlbD5cbiAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgIHZhbHVlPXt0b3BCYXJIfVxuICAgICAgICAgICAgbWluPXs3Mn1cbiAgICAgICAgICAgIG1heD17MjgwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7IHVwZGF0ZUNvbmZpZygndFRvcEJhckhlaWdodCcsIE51bWJlcih2KSB8fCBUX0RFRkFVTFRTLnRUb3BCYXJIZWlnaHQpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoZWxwU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnRUb3BCYXJIZWlnaHRIZWxwfTwvZGl2PlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0NvbWJpbmVkICYmIChcbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCc+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy50U3RlbVdpZHRoUGVyY2VudH08L2xhYmVsPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgdmFsdWU9e3N0ZW1XfVxuICAgICAgICAgICAgbWluPXsxOH1cbiAgICAgICAgICAgIG1heD17NzV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHsgdXBkYXRlQ29uZmlnKCd0U3RlbVdpZHRoUGVyY2VudCcsIE51bWJlcih2KSB8fCBUX0RFRkFVTFRTLnRTdGVtV2lkdGhQZXJjZW50KSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aGVscFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy50U3RlbVdpZHRoUGVyY2VudEhlbHB9PC9kaXY+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCc+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy50U3RlbU1pbkhlaWdodH08L2xhYmVsPlxuICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgdmFsdWU9e3N0ZW1IfVxuICAgICAgICAgICAgbWluPXsxMjB9XG4gICAgICAgICAgICBtYXg9ezYwMH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4geyB1cGRhdGVDb25maWcoJ3RTdGVtTWluSGVpZ2h0JywgTnVtYmVyKHYpIHx8IFRfREVGQVVMVFMudFN0ZW1NaW5IZWlnaHQpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoZWxwU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnRTdGVtTWluSGVpZ2h0SGVscH08L2Rpdj5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICApfVxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgKFxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmxheWVyc1NlY3Rpb259PlxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLnN1YkJhY2lhc1VybH08L2xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICB2YWx1ZT17Y2ZnLnN1YkJhY2lhc1VybCB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB1cGRhdGVDb25maWcoJ3N1YkJhY2lhc1VybCcsIGUudGFyZ2V0LnZhbHVlKSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCc+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdEkxOG5NZXNzYWdlcy5pbmRpY2VVcmx9PC9sYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xuICAgICAgICAgICAgdmFsdWU9e2NmZy5pbmRpY2VVcmwgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdXBkYXRlQ29uZmlnKCdpbmRpY2VVcmwnLCBlLnRhcmdldC52YWx1ZSkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnPlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxTdHlsZX0+e2RlZmF1bHRJMThuTWVzc2FnZXMuY2VuYXJpbzI0NVVybH08L2xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICB2YWx1ZT17Y2ZnLmNlbmFyaW9HcmFuZGUyNDVVcmwgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdXBkYXRlQ29uZmlnKCdjZW5hcmlvR3JhbmRlMjQ1VXJsJywgZS50YXJnZXQudmFsdWUpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0STE4bk1lc3NhZ2VzLmNlbmFyaW81ODVVcmx9PC9sYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xuICAgICAgICAgICAgdmFsdWU9e2NmZy5jZW5hcmlvR3JhbmRlNTg1VXJsIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHVwZGF0ZUNvbmZpZygnY2VuYXJpb0dyYW5kZTU4NVVybCcsIGUudGFyZ2V0LnZhbHVlKSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9