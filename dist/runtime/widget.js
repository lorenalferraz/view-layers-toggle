System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/Dropdown.tsx":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/components/Dropdown.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronDownIcon: () => (/* binding */ ChevronDownIcon),
/* harmony export */   Dropdown: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */

const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const ChevronDownIcon = () => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', "aria-hidden": 'true' },
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: '6 9 12 15 18 9' })));
const Dropdown = ({ value, options, placeholder, disabled, onChange }) => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const onDocClick = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onDocClick);
        return () => { document.removeEventListener('mousedown', onDocClick); };
    }, [open]);
    const pill = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        border: '1px solid #d0d0d0',
        borderRadius: '999px',
        padding: '2px 4px 2px 16px',
        height: '40px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        userSelect: 'none'
    };
    const valueStyle = {
        flex: 1,
        fontSize: '14px',
        color: value ? '#333' : '#888',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    };
    const chevron = {
        color: '#555',
        width: '28px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.15s'
    };
    const list = {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        left: 0,
        right: 0,
        maxHeight: '220px',
        overflowY: 'auto',
        background: '#fff',
        border: '1px solid #d0d0d0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        zIndex: 1000,
        padding: '4px 0',
        margin: 0,
        listStyle: 'none'
    };
    const itemStyle = (selected) => ({
        padding: '8px 16px',
        fontSize: '14px',
        color: selected ? '#256B45' : '#333',
        background: selected ? '#f0f7f3' : 'transparent',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    });
    const toggle = () => {
        if (disabled)
            return;
        setOpen(o => !o);
    };
    const selectValue = (v) => {
        onChange(v);
        setOpen(false);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: wrapRef, style: { position: 'relative' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: pill, onClick: toggle, role: 'button', tabIndex: 0, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            } } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: valueStyle }, value || placeholder),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: chevron },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChevronDownIcon, null))),
        open && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { style: list },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { style: itemStyle(!value), onMouseDown: (e) => { e.preventDefault(); selectValue(''); }, onMouseEnter: (e) => { e.currentTarget.style.background = '#f5f5f5'; }, onMouseLeave: (e) => { e.currentTarget.style.background = !value ? '#f0f7f3' : 'transparent'; } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#888' } }, placeholder)),
            options.map(opt => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { key: opt, style: itemStyle(opt === value), onMouseDown: (e) => { e.preventDefault(); selectValue(opt); }, onMouseEnter: (e) => { e.currentTarget.style.background = '#f5f5f5'; }, onMouseLeave: (e) => { e.currentTarget.style.background = opt === value ? '#f0f7f3' : 'transparent'; } }, opt)))))));
};


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/LayerLegend.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/components/LayerLegend.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerLegend: () => (/* binding */ LayerLegend)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _legendUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legendUtils */ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts");
/** @jsx jsx */


const LayerLegend = ({ groups, title, emptyText }) => {
    const box = {
        marginTop: '12px',
        padding: '10px 12px',
        background: '#f7f9f8',
        borderRadius: '8px',
        border: '1px solid #e0e8e4'
    };
    const titleStyle = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#256B45',
        marginBottom: '8px'
    };
    const groupTitle = {
        fontSize: '11px',
        fontWeight: 600,
        color: '#555',
        marginBottom: '6px',
        marginTop: '4px'
    };
    const row = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 0',
        fontSize: '12px',
        color: '#333'
    };
    const swatch = {
        width: 14,
        height: 14,
        borderRadius: 3,
        flexShrink: 0,
        border: '1px solid rgba(0,0,0,0.12)'
    };
    if (groups.length === 0) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: box },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: titleStyle }, title),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', color: '#888', fontStyle: 'italic' } }, emptyText)));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: box },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: titleStyle }, title),
        groups.map((group, gi) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: group.title, style: { marginBottom: gi < groups.length - 1 ? '10px' : 0 } },
            groups.length > 1 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: groupTitle }, group.title),
            group.items.map(item => {
                const fill = item.color || (0,_legendUtils__WEBPACK_IMPORTED_MODULE_1__.severityColor)(item.severity);
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.title}-${item.label}`, style: row },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, swatch), { background: fill }) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { lineHeight: 1.3 } }, item.label)));
            }))))));
};


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLegendGroups: () => (/* binding */ buildLegendGroups),
/* harmony export */   classSeverity: () => (/* binding */ classSeverity),
/* harmony export */   extractRendererColors: () => (/* binding */ extractRendererColors),
/* harmony export */   severityColor: () => (/* binding */ severityColor)
/* harmony export */ });
const severityColor = (sev) => {
    if (sev >= 3)
        return '#a83232';
    if (sev === 2)
        return '#c97b00';
    if (sev === 1)
        return '#888';
    return '#256B45';
};
const classSeverity = (classe) => {
    const c = (classe || '').toLowerCase();
    if (!c)
        return 0;
    if (c.includes('crise') || c.includes('crítico') || c.includes('critico') || c.includes('muito alto'))
        return 4;
    if (c.includes('alto'))
        return 3;
    if (c.includes('médio') || c.includes('medio') || c.includes('moderado'))
        return 2;
    if (c.includes('baixo') || c.includes('sem ') || c === 'sem')
        return 0;
    return 1;
};
const colorToCss = (color) => {
    var _a, _b, _c, _d, _e;
    if (!color)
        return null;
    const c = color;
    if (typeof c.toCss === 'function')
        return c.toCss(true);
    const r = (_a = c.r) !== null && _a !== void 0 ? _a : color[0];
    const g = (_b = c.g) !== null && _b !== void 0 ? _b : color[1];
    const b = (_c = c.b) !== null && _c !== void 0 ? _c : color[2];
    const a = (_e = (_d = c.a) !== null && _d !== void 0 ? _d : color[3]) !== null && _e !== void 0 ? _e : 1;
    if (r == null || g == null || b == null)
        return null;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const symbolColor = (symbol) => {
    var _a;
    if (!symbol)
        return null;
    const s = symbol;
    return colorToCss(s.color) || colorToCss((_a = s.outline) === null || _a === void 0 ? void 0 : _a.color);
};
const extractRendererColors = (renderer) => {
    const m = new Map();
    if (!renderer)
        return m;
    const r = renderer;
    const defaultCss = symbolColor(r.defaultSymbol);
    if (defaultCss)
        m.set('Padrão', defaultCss);
    if (r.type === 'unique-value') {
        for (const info of r.uniqueValueInfos || []) {
            const value = info.value != null ? String(info.value).trim() : '';
            const label = info.label != null && String(info.label).trim() !== ''
                ? String(info.label).trim()
                : value;
            const css = symbolColor(info.symbol);
            if (label && css)
                m.set(label, css);
        }
    }
    else if (r.type === 'class-breaks') {
        for (const info of r.classBreakInfos || []) {
            const label = info.label != null ? String(info.label).trim() : '';
            const css = symbolColor(info.symbol);
            if (label && css)
                m.set(label, css);
        }
    }
    else if (r.type === 'simple') {
        const css = symbolColor(r.symbol);
        if (css)
            m.set('Área', css);
    }
    return m;
};
const mergeColorMaps = (...maps) => {
    const merged = new Map();
    maps.forEach(map => {
        map.forEach((css, label) => {
            if (!merged.has(label))
                merged.set(label, css);
        });
    });
    return merged;
};
const mapToLegendItems = (colors) => {
    return Array.from(colors.entries())
        .map(([label, color]) => ({
        label,
        color,
        severity: classSeverity(label)
    }))
        .sort((a, b) => b.severity - a.severity || a.label.localeCompare(b.label, 'pt-BR'));
};
function buildLegendGroups(layers) {
    var _a, _b, _c;
    const groups = [];
    const indexColors = mergeColorMaps(extractRendererColors((_a = layers.indice) === null || _a === void 0 ? void 0 : _a.renderer), extractRendererColors((_b = layers.cenarioGrande245) === null || _b === void 0 ? void 0 : _b.renderer), extractRendererColors((_c = layers.cenarioGrande585) === null || _c === void 0 ? void 0 : _c.renderer));
    if (indexColors.size > 0) {
        groups.push({
            title: 'Índice de conflito',
            items: mapToLegendItems(indexColors)
        });
    }
    if (layers.subBacias) {
        const subColors = extractRendererColors(layers.subBacias.renderer);
        if (subColors.size > 0) {
            groups.push({
                title: 'Sub-bacias',
                items: mapToLegendItems(subColors)
            });
        }
        else {
            groups.push({
                title: 'Sub-bacias',
                items: [{
                        label: 'Limite da sub-bacia',
                        color: 'rgba(37, 107, 69, 0.35)',
                        severity: 0
                    }]
            });
        }
    }
    return groups;
}


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/mapLayers.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/mapLayers.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_LAYER_URLS: () => (/* binding */ DEFAULT_LAYER_URLS),
/* harmony export */   applyScenarioToMap: () => (/* binding */ applyScenarioToMap),
/* harmony export */   buildWhere: () => (/* binding */ buildWhere),
/* harmony export */   escapeSql: () => (/* binding */ escapeSql),
/* harmony export */   initMapLayers: () => (/* binding */ initMapLayers),
/* harmony export */   loadBasinOptions: () => (/* binding */ loadBasinOptions),
/* harmony export */   mergeConfig: () => (/* binding */ mergeConfig),
/* harmony export */   removeOwnedLayers: () => (/* binding */ removeOwnedLayers),
/* harmony export */   restoreInitialView: () => (/* binding */ restoreInitialView)
/* harmony export */ });
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const DEFAULT_LAYER_URLS = {
    subBaciasUrl: 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/subbacias/FeatureServer/0',
    indiceUrl: 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/indice_atual_oeste/FeatureServer/0',
    cenarioGrande245Url: 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/grande_245/FeatureServer/0',
    cenarioGrande585Url: 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/grande_585/FeatureServer/0',
    serverUrl: 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services',
    token: '_zND49dKhvn59tDT4Hq486Up_bdHqCgGH4rzESS0XiqGJCXtUj_nLGstA_ewHvlaR_kP4EtQB-GNt-PlT91G3yqnMB4kaX8jMRojTIZ1PAVL05bdX9lqGEUUv3J13tOg'
};
function mergeConfig(cfg) {
    return {
        subBaciasUrl: (cfg === null || cfg === void 0 ? void 0 : cfg.subBaciasUrl) || DEFAULT_LAYER_URLS.subBaciasUrl,
        indiceUrl: (cfg === null || cfg === void 0 ? void 0 : cfg.indiceUrl) || DEFAULT_LAYER_URLS.indiceUrl,
        cenarioGrande245Url: (cfg === null || cfg === void 0 ? void 0 : cfg.cenarioGrande245Url) || DEFAULT_LAYER_URLS.cenarioGrande245Url,
        cenarioGrande585Url: (cfg === null || cfg === void 0 ? void 0 : cfg.cenarioGrande585Url) || DEFAULT_LAYER_URLS.cenarioGrande585Url,
        classeField245: (cfg === null || cfg === void 0 ? void 0 : cfg.classeField245) || 'classe_245',
        classeField585: (cfg === null || cfg === void 0 ? void 0 : cfg.classeField585) || 'classe_585',
        pnrh2Field: (cfg === null || cfg === void 0 ? void 0 : cfg.pnrh2Field) || 'pnrh2',
        subBaciaField: (cfg === null || cfg === void 0 ? void 0 : cfg.subBaciaField) || 'sub_bacia',
        classeField: (cfg === null || cfg === void 0 ? void 0 : cfg.classeField) || 'classe',
        zoomLayer: (cfg === null || cfg === void 0 ? void 0 : cfg.zoomLayer) || 'subbacias',
        serverUrl: (cfg === null || cfg === void 0 ? void 0 : cfg.serverUrl) || DEFAULT_LAYER_URLS.serverUrl,
        token: (cfg === null || cfg === void 0 ? void 0 : cfg.token) || DEFAULT_LAYER_URLS.token,
        leftMapWidgetId: cfg === null || cfg === void 0 ? void 0 : cfg.leftMapWidgetId,
        rightMapWidgetId: cfg === null || cfg === void 0 ? void 0 : cfg.rightMapWidgetId
    };
}
const normalize = (u) => (u || '').replace(/\/+$/, '').toLowerCase();
const escapeSql = (v) => v.replace(/'/g, "''");
const buildWhere = (config, pnrh2, subBacia) => {
    const parts = [];
    if (pnrh2)
        parts.push(`${config.pnrh2Field} = '${escapeSql(pnrh2)}'`);
    if (subBacia)
        parts.push(`${config.subBaciaField} = '${escapeSql(subBacia)}'`);
    return parts.length === 0 ? '1=1' : parts.join(' AND ');
};
const emptyLayers = () => ({
    subBacias: null,
    indice: null,
    cenarioGrande245: null,
    cenarioGrande585: null
});
function initMapLayers(jimuMapView, config) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const [FeatureLayer, IdentityManager] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/layers/FeatureLayer',
            'esri/identity/IdentityManager'
        ]);
        if (config.token && config.serverUrl) {
            try {
                IdentityManager.registerToken({
                    server: config.serverUrl,
                    token: config.token,
                    ssl: config.serverUrl.startsWith('https://')
                });
            }
            catch (e) {
                console.warn('[compare-cenarios] registerToken failed', e);
            }
        }
        try {
            yield Promise.race([
                jimuMapView.view.when(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('view timeout')), 15000))
            ]);
        }
        catch (e) {
            console.warn('[compare-cenarios] view.when', e);
        }
        const map = jimuMapView.view.map;
        const initialViewpoint = (_b = (_a = jimuMapView.view.viewpoint) === null || _a === void 0 ? void 0 : _a.clone()) !== null && _b !== void 0 ? _b : null;
        const targets = {
            sub: normalize(config.subBaciasUrl),
            ind: normalize(config.indiceUrl),
            c245: normalize(config.cenarioGrande245Url),
            c585: normalize(config.cenarioGrande585Url)
        };
        const findByUrl = (target) => {
            let found = null;
            map.allLayers.forEach((layer) => {
                if (found)
                    return;
                if ((layer === null || layer === void 0 ? void 0 : layer.type) === 'feature' && layer.url) {
                    const layerUrl = layer.layerId !== undefined
                        ? `${layer.url}/${layer.layerId}`
                        : layer.url;
                    if (normalize(layerUrl) === target)
                        found = layer;
                }
            });
            return found;
        };
        const ensureLayer = (existing, url, title, visible = true) => {
            if (existing)
                return { layer: existing, owned: false };
            const layer = new FeatureLayer({ url, title, outFields: ['*'], visible });
            map.add(layer);
            return { layer, owned: true };
        };
        const subResult = ensureLayer(findByUrl(targets.sub), config.subBaciasUrl, 'Sub-bacias', true);
        const indResult = ensureLayer(findByUrl(targets.ind), config.indiceUrl, 'Índice de Conflito', true);
        const c245Result = ensureLayer(findByUrl(targets.c245), config.cenarioGrande245Url, 'Cenário Moderado - Rio Grande', false);
        const c585Result = ensureLayer(findByUrl(targets.c585), config.cenarioGrande585Url, 'Cenário Pessimista - Rio Grande', false);
        subResult.layer.opacity = 0.6;
        yield Promise.all([
            subResult.layer.load(),
            indResult.layer.load()
        ]);
        yield c245Result.layer.load().catch(() => { });
        yield c585Result.layer.load().catch(() => { });
        const widgetUrls = new Set([targets.sub, targets.ind, targets.c245, targets.c585]);
        const extraLayers = [];
        const isExtra = (title) => {
            const t = (title || '').toLowerCase();
            return /piv[oô]/i.test(t) || /microbac/i.test(t) || /irrigad/i.test(t);
        };
        map.allLayers.forEach((layer) => {
            if ((layer === null || layer === void 0 ? void 0 : layer.type) !== 'feature')
                return;
            const layerUrl = layer.url
                ? (layer.layerId !== undefined ? `${layer.url}/${layer.layerId}` : layer.url)
                : '';
            if (widgetUrls.has(normalize(layerUrl)))
                return;
            if (isExtra(layer.title)) {
                extraLayers.push({ layer, originalVisible: !!layer.visible });
            }
        });
        return {
            layers: {
                subBacias: subResult.layer,
                indice: indResult.layer,
                cenarioGrande245: c245Result.layer,
                cenarioGrande585: c585Result.layer
            },
            owned: {
                subBacias: subResult.owned,
                indice: indResult.owned,
                cenarioGrande245: c245Result.owned,
                cenarioGrande585: c585Result.owned
            },
            extraLayers,
            initialViewpoint,
            ready: true
        };
    });
}
function removeOwnedLayers(jimuMapView, state) {
    var _a;
    if (!jimuMapView || !state)
        return;
    const map = (_a = jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map;
    if (!map)
        return;
    const { layers, owned } = state;
    if (layers.subBacias && owned.subBacias)
        map.remove(layers.subBacias);
    if (layers.indice && owned.indice)
        map.remove(layers.indice);
    if (layers.cenarioGrande245 && owned.cenarioGrande245)
        map.remove(layers.cenarioGrande245);
    if (layers.cenarioGrande585 && owned.cenarioGrande585)
        map.remove(layers.cenarioGrande585);
}
function applyScenarioToMap(jimuMapView_1, state_1, config_1, cenario_1, pnrh2_1, subBacia_1) {
    return __awaiter(this, arguments, void 0, function* (jimuMapView, state, config, cenario, pnrh2, subBacia, zoom = true) {
        const { subBacias, indice, cenarioGrande245, cenarioGrande585 } = state.layers;
        if (!indice || !subBacias)
            return;
        const isAtual = cenario === 'atual';
        indice.visible = isAtual;
        if (cenarioGrande245)
            cenarioGrande245.visible = cenario === 'ssp245';
        if (cenarioGrande585)
            cenarioGrande585.visible = cenario === 'ssp585';
        const inCenarioMode = cenario !== 'atual' || Boolean(pnrh2) || Boolean(subBacia);
        state.extraLayers.forEach(({ layer, originalVisible }) => {
            try {
                layer.visible = inCenarioMode ? false : originalVisible;
            }
            catch (_a) { }
        });
        const where = buildWhere(config, pnrh2, subBacia);
        const expression = where !== '1=1' ? where : '';
        indice.definitionExpression = expression;
        if (cenarioGrande245)
            cenarioGrande245.definitionExpression = expression;
        if (cenarioGrande585)
            cenarioGrande585.definitionExpression = expression;
        subBacias.definitionExpression = expression;
        if (!zoom)
            return;
        try {
            const zoomLayer = config.zoomLayer === 'indice' ? indice : subBacias;
            const zoomWhere = expression || '1=1';
            const extentResult = yield zoomLayer.queryExtent({ where: zoomWhere });
            if (extentResult === null || extentResult === void 0 ? void 0 : extentResult.extent) {
                const view = jimuMapView.view;
                const targetExtent = extentResult.extent.expand(1.2);
                yield view.goTo(targetExtent);
                const limitScale = Math.max(subBacias.maxScale || 0, indice.maxScale || 0);
                if (limitScale > 0 && view.scale < limitScale) {
                    yield view.goTo({ target: targetExtent.center, scale: limitScale * 1.1 });
                }
            }
        }
        catch (e) {
            console.warn('[compare-cenarios] zoom error', e);
        }
    });
}
function restoreInitialView(jimuMapView, state) {
    return __awaiter(this, void 0, void 0, function* () {
        const { subBacias, indice, cenarioGrande245, cenarioGrande585 } = state.layers;
        if (indice) {
            indice.visible = true;
            indice.definitionExpression = '';
        }
        if (cenarioGrande245) {
            cenarioGrande245.visible = false;
            cenarioGrande245.definitionExpression = '';
        }
        if (cenarioGrande585) {
            cenarioGrande585.visible = false;
            cenarioGrande585.definitionExpression = '';
        }
        if (subBacias)
            subBacias.definitionExpression = '';
        state.extraLayers.forEach(({ layer, originalVisible }) => {
            try {
                layer.visible = originalVisible;
            }
            catch (_a) { }
        });
        if (state.initialViewpoint) {
            try {
                yield jimuMapView.view.goTo(state.initialViewpoint);
            }
            catch (e) {
                console.warn('[compare-cenarios] restore viewpoint', e);
            }
        }
    });
}
function loadBasinOptions(subBacias, config) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const result = yield subBacias.queryFeatures({
            where: '1=1',
            outFields: [config.pnrh2Field, config.subBaciaField],
            returnDistinctValues: true,
            returnGeometry: false,
            orderByFields: [config.pnrh2Field, config.subBaciaField]
        });
        const subBaciaToPnrh2 = new Map();
        const pnrh2ToSubBacias = new Map();
        const allPnrhSet = new Set();
        const allSubsSet = new Set();
        for (const feat of result.features) {
            const p = (_a = feat.attributes) === null || _a === void 0 ? void 0 : _a[config.pnrh2Field];
            const s = (_b = feat.attributes) === null || _b === void 0 ? void 0 : _b[config.subBaciaField];
            const pStr = p != null && p !== '' ? String(p) : '';
            const sStr = s != null && s !== '' ? String(s) : '';
            if (pStr)
                allPnrhSet.add(pStr);
            if (sStr)
                allSubsSet.add(sStr);
            if (pStr && sStr) {
                subBaciaToPnrh2.set(sStr, pStr);
                const arr = pnrh2ToSubBacias.get(pStr) || [];
                if (!arr.includes(sStr))
                    arr.push(sStr);
                pnrh2ToSubBacias.set(pStr, arr);
            }
        }
        return {
            allPnrh2: Array.from(allPnrhSet).sort(),
            allSubBacias: Array.from(allSubsSet).sort(),
            subBaciaToPnrh2,
            pnrh2ToSubBacias
        };
    });
}


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/translations/default.ts":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/translations/default.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Comparar Cenários',
    selectMapsFirst: 'Configure os dois mapas nas configurações do widget.',
    selectLeftMap: 'Selecione o mapa da esquerda',
    selectRightMap: 'Selecione o mapa da direita',
    loading: 'Carregando...',
    pnrh2Label: 'Selecione a Bacia Hidrográfica',
    subBaciaLabel: 'Selecione a sub-bacia hidrográfica',
    selectPnrh2: 'Selecione',
    selectSubBacia: 'Selecione uma sub-bacia',
    mapLeftLabel: 'Mapa esquerdo — cenário',
    mapRightLabel: 'Mapa direito — cenário',
    cenarioAtual: 'Atual',
    cenarioSsp245: 'Moderado',
    cenarioSsp585: 'Pessimista',
    selectCenario: 'Selecione um cenário',
    clear: 'Limpar filtro',
    errorLoading: 'Erro ao carregar valores das camadas.',
    errorCors: 'Falha de CORS: o servidor ArcGIS não permite chamadas desta origem.',
    errorAuth: 'A camada exige autenticação. Compartilhe os itens como públicos ou faça login.',
    scenarioWarning: 'Os cenários Moderado e Pessimista contêm apenas dados da Bacia do Rio Grande. Para comparar os três cenários de forma justa, selecione a bacia correspondente no filtro.',
    compareTitle: 'Comparar cenários',
    syncViews: 'Sincronizar extensão dos mapas',
    legendTitle: 'Legenda',
    legendEmpty: 'Legenda indisponível — aguarde o carregamento das camadas.'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/widget.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/view-layers-toggle/src/runtime/translations/default.ts");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Dropdown */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/Dropdown.tsx");
/* harmony import */ var _components_LayerLegend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LayerLegend */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/LayerLegend.tsx");
/* harmony import */ var _mapLayers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapLayers */ "./your-extensions/widgets/view-layers-toggle/src/runtime/mapLayers.ts");
/* harmony import */ var _legendUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legendUtils */ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */







const { useState, useEffect, useRef, useCallback, useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const cenarioLabel = (id) => {
    if (id === 'ssp245')
        return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp245;
    if (id === 'ssp585')
        return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp585;
    return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioAtual;
};
const labelToCenario = (label) => {
    if (label === _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp245)
        return 'ssp245';
    if (label === _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp585)
        return 'ssp585';
    return 'atual';
};
const CENARIO_OPTIONS = [
    _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioAtual,
    _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp245,
    _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp585
];
function Widget(props) {
    var _a, _b;
    const config = (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.mergeConfig)(props.config);
    const leftMapId = config.leftMapWidgetId || ((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0]) || '';
    const rightMapId = config.rightMapWidgetId || ((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[1]) || '';
    const [left, setLeft] = useState({ jmv: null, layerState: null });
    const [right, setRight] = useState({ jmv: null, layerState: null });
    const [allPnrh2, setAllPnrh2] = useState([]);
    const [allSubBacias, setAllSubBacias] = useState([]);
    const [selectedPnrh2, setSelectedPnrh2] = useState('');
    const [selectedSubBacia, setSelectedSubBacia] = useState('');
    const [cenarioLeft, setCenarioLeft] = useState('atual');
    const [cenarioRight, setCenarioRight] = useState('atual');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [syncViews, setSyncViews] = useState(true);
    const [legendGroups, setLegendGroups] = useState([]);
    const subBaciaToPnrh2Ref = useRef(new Map());
    const pnrh2ToSubBaciasRef = useRef(new Map());
    const syncingRef = useRef(false);
    const initialViewSyncedRef = useRef(false);
    const hasBothMaps = Boolean(leftMapId && rightMapId);
    const detectError = (err) => {
        var _a, _b, _c, _d;
        const e = err;
        const msg = `${(e === null || e === void 0 ? void 0 : e.message) || ''} ${((_b = (_a = e === null || e === void 0 ? void 0 : e.details) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message) || ''}`.toLowerCase();
        if (msg.includes('cors') || msg.includes('cross-origin') || msg.includes('network')) {
            return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].errorCors;
        }
        if (msg.includes('token') || msg.includes('unauthorized') || ((_c = e === null || e === void 0 ? void 0 : e.details) === null || _c === void 0 ? void 0 : _c.httpStatus) === 401 || ((_d = e === null || e === void 0 ? void 0 : e.details) === null || _d === void 0 ? void 0 : _d.httpStatus) === 403) {
            return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].errorAuth;
        }
        return _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].errorLoading;
    };
    const loadOptionsFromMap = useCallback((layerState) => __awaiter(this, void 0, void 0, function* () {
        if (!(layerState === null || layerState === void 0 ? void 0 : layerState.layers.subBacias))
            return;
        const opts = yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.loadBasinOptions)(layerState.layers.subBacias, config);
        subBaciaToPnrh2Ref.current = opts.subBaciaToPnrh2;
        pnrh2ToSubBaciasRef.current = opts.pnrh2ToSubBacias;
        setAllPnrh2(opts.allPnrh2);
        setAllSubBacias(opts.allSubBacias);
    }), [config]);
    const applyToBothMaps = useCallback((pnrh2_1, subBacia_1, leftCenario_1, rightCenario_1, ...args_1) => __awaiter(this, [pnrh2_1, subBacia_1, leftCenario_1, rightCenario_1, ...args_1], void 0, function* (pnrh2, subBacia, leftCenario, rightCenario, zoom = true) {
        const tasks = [];
        if (left.jmv && left.layerState) {
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.applyScenarioToMap)(left.jmv, left.layerState, config, leftCenario, pnrh2, subBacia, zoom));
        }
        if (right.jmv && right.layerState) {
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.applyScenarioToMap)(right.jmv, right.layerState, config, rightCenario, pnrh2, subBacia, zoom));
        }
        yield Promise.all(tasks);
    }), [left.jmv, left.layerState, right.jmv, right.layerState, config]);
    const initSlot = useCallback((jmv, setter, isPrimaryForOptions) => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            setError('');
            const layerState = yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.initMapLayers)(jmv, config);
            setter({ jmv, layerState });
            if (isPrimaryForOptions) {
                yield loadOptionsFromMap(layerState);
                setLegendGroups((0,_legendUtils__WEBPACK_IMPORTED_MODULE_6__.buildLegendGroups)(layerState.layers));
            }
            yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.applyScenarioToMap)(jmv, layerState, config, 'atual', '', '', false);
        }
        catch (e) {
            console.error('[compare-cenarios] init', e);
            setError(detectError(e));
        }
        finally {
            setLoading(false);
        }
    }), [config, loadOptionsFromMap]);
    useEffect(() => {
        initialViewSyncedRef.current = false;
    }, [leftMapId, rightMapId]);
    useEffect(() => {
        if (!left.jmv || left.layerState)
            return;
        void initSlot(left.jmv, setLeft, true);
        return () => {
            (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.removeOwnedLayers)(left.jmv, left.layerState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [left.jmv]);
    useEffect(() => {
        if (!right.jmv || right.layerState)
            return;
        void initSlot(right.jmv, setRight, false);
        return () => {
            (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.removeOwnedLayers)(right.jmv, right.layerState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [right.jmv]);
    useEffect(() => {
        if (!left.layerState || !right.layerState || !left.jmv || !right.jmv)
            return;
        const syncInitial = () => __awaiter(this, void 0, void 0, function* () {
            if (!initialViewSyncedRef.current) {
                yield applyToBothMaps('', '', 'atual', 'atual', false);
                const vp = left.layerState.initialViewpoint;
                if (vp) {
                    try {
                        yield Promise.all([
                            left.jmv.view.goTo(vp),
                            right.jmv.view.goTo(vp)
                        ]);
                    }
                    catch (e) {
                        console.warn('[compare-cenarios] sync initial view', e);
                    }
                }
                initialViewSyncedRef.current = true;
                return;
            }
            yield applyToBothMaps(selectedPnrh2, selectedSubBacia, cenarioLeft, cenarioRight);
        });
        void syncInitial();
    }, [cenarioLeft, cenarioRight, selectedPnrh2, selectedSubBacia, left.layerState, right.layerState, left.jmv, right.jmv, applyToBothMaps]);
    const hasActiveFilter = Boolean(selectedPnrh2 || selectedSubBacia || cenarioLeft !== 'atual' || cenarioRight !== 'atual');
    useEffect(() => {
        if (!syncViews || !left.jmv || !right.jmv)
            return;
        const leftView = left.jmv.view;
        const rightView = right.jmv.view;
        const syncFromLeft = () => __awaiter(this, void 0, void 0, function* () {
            if (syncingRef.current)
                return;
            syncingRef.current = true;
            try {
                yield rightView.goTo({
                    center: leftView.center,
                    scale: leftView.scale,
                    rotation: leftView.rotation
                });
            }
            catch (_a) { }
            window.setTimeout(() => { syncingRef.current = false; }, 300);
        });
        const h1 = leftView.watch('extent', syncFromLeft);
        return () => { h1.remove(); };
    }, [syncViews, left.jmv, right.jmv]);
    const onPnrh2Select = (value) => __awaiter(this, void 0, void 0, function* () {
        setSelectedPnrh2(value);
        let subBacia = selectedSubBacia;
        if (subBacia && value) {
            const subs = pnrh2ToSubBaciasRef.current.get(value) || [];
            if (!subs.includes(subBacia)) {
                subBacia = '';
                setSelectedSubBacia('');
            }
        }
        yield applyToBothMaps(value, subBacia, cenarioLeft, cenarioRight);
    });
    const onSubBaciaSelect = (value) => __awaiter(this, void 0, void 0, function* () {
        setSelectedSubBacia(value);
        let pnrh2 = selectedPnrh2;
        if (value && !pnrh2) {
            const auto = subBaciaToPnrh2Ref.current.get(value);
            if (auto) {
                pnrh2 = auto;
                setSelectedPnrh2(auto);
            }
        }
        yield applyToBothMaps(pnrh2, value, cenarioLeft, cenarioRight);
    });
    const onCenarioLeftSelect = (label) => __awaiter(this, void 0, void 0, function* () {
        const id = labelToCenario(label);
        setCenarioLeft(id);
        yield applyToBothMaps(selectedPnrh2, selectedSubBacia, id, cenarioRight, false);
    });
    const onCenarioRightSelect = (label) => __awaiter(this, void 0, void 0, function* () {
        const id = labelToCenario(label);
        setCenarioRight(id);
        yield applyToBothMaps(selectedPnrh2, selectedSubBacia, cenarioLeft, id, false);
    });
    const onClear = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        setSelectedPnrh2('');
        setSelectedSubBacia('');
        setCenarioLeft('atual');
        setCenarioRight('atual');
        const tasks = [];
        if (left.jmv && left.layerState)
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.restoreInitialView)(left.jmv, left.layerState));
        if (right.jmv && right.layerState)
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.restoreInitialView)(right.jmv, right.layerState));
        yield Promise.all(tasks);
        const vp = (_a = left.layerState) === null || _a === void 0 ? void 0 : _a.initialViewpoint;
        if (vp && left.jmv && right.jmv) {
            try {
                yield Promise.all([
                    left.jmv.view.goTo(vp),
                    right.jmv.view.goTo(vp)
                ]);
            }
            catch (_b) { }
        }
    });
    const subBaciaOptions = selectedPnrh2
        ? (pnrh2ToSubBaciasRef.current.get(selectedPnrh2) || [])
        : allSubBacias;
    const displayLegendGroups = useMemo(() => {
        var _a, _b;
        if (legendGroups.length > 0)
            return legendGroups;
        const source = ((_a = left.layerState) === null || _a === void 0 ? void 0 : _a.layers) || ((_b = right.layerState) === null || _b === void 0 ? void 0 : _b.layers);
        if (!source)
            return [];
        return (0,_legendUtils__WEBPACK_IMPORTED_MODULE_6__.buildLegendGroups)(source);
    }, [legendGroups, left.layerState, right.layerState]);
    const wrap = { padding: '12px', fontFamily: 'inherit' };
    const fieldGroup = { marginBottom: '14px' };
    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        color: '#333',
        marginBottom: '6px'
    };
    const sectionTitle = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#256B45',
        marginBottom: '10px'
    };
    const clearBtn = {
        background: '#256B45',
        color: '#fff',
        border: 'none',
        borderRadius: '999px',
        padding: '0 22px',
        height: '34px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        minWidth: '120px'
    };
    const footer = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '8px',
        marginBottom: '4px'
    };
    const warningBox = {
        fontSize: '12px',
        color: '#666',
        background: '#f7f9f8',
        borderRadius: '8px',
        padding: '10px 12px',
        marginTop: '8px',
        lineHeight: 1.45
    };
    const mapBadge = {
        display: 'inline-block',
        fontSize: '11px',
        fontWeight: 600,
        color: '#256B45',
        background: '#f0f7f3',
        borderRadius: '999px',
        padding: '2px 10px',
        marginBottom: '6px'
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget widget-compare-cenarios', style: wrap },
        leftMapId && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: leftMapId, onActiveViewChange: (jmv) => {
                if (jmv)
                    setLeft({ jmv, layerState: null });
            } })),
        rightMapId && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: rightMapId, onActiveViewChange: (jmv) => {
                if (jmv)
                    setRight({ jmv, layerState: null });
            } })),
        !hasBothMaps && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontSize: '13px' } }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectMapsFirst)),
        hasBothMaps && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionTitle }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].compareTitle),
            error && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00020', fontSize: '12px', marginBottom: '8px' } }, error)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: fieldGroup },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].pnrh2Label),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { value: selectedPnrh2, options: allPnrh2, placeholder: loading && allPnrh2.length === 0 ? _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].loading : _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectPnrh2, disabled: loading || allPnrh2.length === 0, onChange: onPnrh2Select })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: fieldGroup },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: labelStyle }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].subBaciaLabel),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { value: selectedSubBacia, options: subBaciaOptions, placeholder: loading && allSubBacias.length === 0 ? _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].loading : _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectSubBacia, disabled: loading || allSubBacias.length === 0, onChange: onSubBaciaSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    marginTop: '6px',
                    paddingTop: '12px',
                    borderTop: '1px dashed #ccc'
                } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: fieldGroup },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: mapBadge }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].mapLeftLabel),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { value: cenarioLabel(cenarioLeft), options: CENARIO_OPTIONS, placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectCenario, onChange: onCenarioLeftSelect })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: fieldGroup },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: mapBadge }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].mapRightLabel),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { value: cenarioLabel(cenarioRight), options: CENARIO_OPTIONS, placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectCenario, onChange: onCenarioRightSelect }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: warningBox }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].scenarioWarning),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '13px', color: '#333', cursor: 'pointer' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'checkbox', checked: syncViews, onChange: (e) => { setSyncViews(e.target.checked); } }),
                _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].syncViews),
            hasActiveFilter && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: footer },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: clearBtn, onClick: () => { void onClear(); }, type: 'button' }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clear))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LayerLegend__WEBPACK_IMPORTED_MODULE_4__.LayerLegend, { groups: displayLegendGroups, title: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendTitle, emptyText: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendEmpty })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQ3VCO0FBRXRDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLDRDQUFLO0FBRXRDLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ25DLHdEQUNFLEtBQUssRUFBQyxJQUFJLEVBQ1YsTUFBTSxFQUFDLElBQUksRUFDWCxPQUFPLEVBQUMsV0FBVyxFQUNuQixJQUFJLEVBQUMsTUFBTSxFQUNYLE1BQU0sRUFBQyxjQUFjLEVBQ3JCLFdBQVcsRUFBQyxHQUFHLEVBQ2YsYUFBYSxFQUFDLE9BQU8sRUFDckIsY0FBYyxFQUFDLE9BQU8saUJBQ1YsTUFBTTtJQUVsQiw2REFBVSxNQUFNLEVBQUMsZ0JBQWdCLEdBQUcsQ0FDaEMsQ0FDUDtBQVVNLE1BQU0sUUFBUSxHQUE0QixDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDdkcsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBd0IsSUFBSSxDQUFDO0lBRW5ELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFDakIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNuQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoQixDQUFDO1FBQ0gsQ0FBQztRQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO1FBQ2xELE9BQU8sR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDO0lBQ3hFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRVYsTUFBTSxJQUFJLEdBQXdCO1FBQ2hDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixZQUFZLEVBQUUsT0FBTztRQUNyQixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsU0FBUyxFQUFFLDRCQUE0QjtRQUN2QyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDNUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLFVBQVUsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsTUFBTSxVQUFVLEdBQXdCO1FBQ3RDLElBQUksRUFBRSxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzlCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxVQUFVO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsTUFBTSxPQUFPLEdBQXdCO1FBQ25DLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsYUFBYSxFQUFFLE1BQU07UUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQWM7UUFDbkQsVUFBVSxFQUFFLGlCQUFpQjtLQUM5QjtJQUNELE1BQU0sSUFBSSxHQUF3QjtRQUNoQyxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsa0JBQWtCO1FBQ3ZCLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsT0FBTztRQUNsQixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsTUFBTTtRQUNsQixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7UUFDeEMsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsT0FBTztRQUNoQixNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxRQUFpQixFQUF1QixFQUFFLENBQUMsQ0FBQztRQUM3RCxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsTUFBTTtRQUNoQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDcEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ2hELE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxVQUFVO0tBQ3pCLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxRQUFRO1lBQUUsT0FBTTtRQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtRQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtRQUNoRCx3REFDRSxLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sRUFBRSxNQUFNLEVBQ2YsSUFBSSxFQUFDLFFBQVEsRUFDYixRQUFRLEVBQUUsQ0FBQyxFQUNYLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFBQyxNQUFNLEVBQUU7WUFBQyxDQUFDLENBQUMsQ0FBQztZQUU5Rix5REFBTSxLQUFLLEVBQUUsVUFBVSxJQUFHLEtBQUssSUFBSSxXQUFXLENBQVE7WUFDdEQseURBQU0sS0FBSyxFQUFFLE9BQU87Z0JBQUUsK0NBQUMsZUFBZSxPQUFHLENBQU8sQ0FDNUM7UUFDTCxJQUFJLElBQUksQ0FDUCx1REFBSSxLQUFLLEVBQUUsSUFBSTtZQUNiLHVEQUNFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUMzRCxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFJLENBQUMsQ0FBQyxhQUErQixDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxFQUFDLENBQUMsRUFDeEYsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBSSxDQUFDLENBQUMsYUFBK0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDO2dCQUVqSCx5REFBTSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUcsV0FBVyxDQUFRLENBQ2pEO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQ2xCLHVEQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEVBQy9CLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFDNUQsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBSSxDQUFDLENBQUMsYUFBK0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsRUFBQyxDQUFDLEVBQ3hGLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUksQ0FBQyxDQUFDLGFBQStCLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDLElBRXZILEdBQUcsQ0FDRCxDQUNOLENBQUMsQ0FDQyxDQUNOLENBQ0csQ0FDUDtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKRCxlQUFlO0FBQ3VCO0FBRVE7QUFRdkMsTUFBTSxXQUFXLEdBQStCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDdEYsTUFBTSxHQUFHLEdBQXdCO1FBQy9CLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFlBQVksRUFBRSxLQUFLO1FBQ25CLE1BQU0sRUFBRSxtQkFBbUI7S0FDNUI7SUFDRCxNQUFNLFVBQVUsR0FBd0I7UUFDdEMsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLEdBQUc7UUFDZixLQUFLLEVBQUUsU0FBUztRQUNoQixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE1BQU0sVUFBVSxHQUF3QjtRQUN0QyxRQUFRLEVBQUUsTUFBTTtRQUNoQixVQUFVLEVBQUUsR0FBRztRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNLEdBQUcsR0FBd0I7UUFDL0IsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtRQUNwQixHQUFHLEVBQUUsS0FBSztRQUNWLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRCxNQUFNLE1BQU0sR0FBd0I7UUFDbEMsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFlBQVksRUFBRSxDQUFDO1FBQ2YsVUFBVSxFQUFFLENBQUM7UUFDYixNQUFNLEVBQUUsNEJBQTRCO0tBQ3JDO0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FDTCx3REFBSyxLQUFLLEVBQUUsR0FBRztZQUNiLHdEQUFLLEtBQUssRUFBRSxVQUFVLElBQUcsS0FBSyxDQUFPO1lBQ3JDLHdEQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUcsU0FBUyxDQUFPLENBQ25GLENBQ1A7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLEtBQUssRUFBRSxHQUFHO1FBQ2Isd0RBQUssS0FBSyxFQUFFLFVBQVUsSUFBRyxLQUFLLENBQU87UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3pCLHdEQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLHdEQUFLLEtBQUssRUFBRSxVQUFVLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBTztZQUNoRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSwyREFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZELE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRztvQkFDbEQseURBQU0sS0FBSyxrQ0FBTyxNQUFNLEtBQUUsVUFBVSxFQUFFLElBQUksTUFBTTtvQkFDaEQseURBQU0sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQVEsQ0FDakQsQ0FDUDtZQUNILENBQUMsQ0FBQyxDQUNFLENBQ1AsQ0FBQyxDQUNFLENBQ1A7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RNLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBVyxFQUFVLEVBQUU7SUFDbkQsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUztJQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQUUsT0FBTyxTQUFTO0lBQy9CLElBQUksR0FBRyxLQUFLLENBQUM7UUFBRSxPQUFPLE1BQU07SUFDNUIsT0FBTyxTQUFTO0FBQ2xCLENBQUM7QUFFTSxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQWMsRUFBVSxFQUFFO0lBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtJQUN0QyxJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQztJQUNoQixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQUUsT0FBTyxDQUFDO0lBQy9HLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBRSxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFBRSxPQUFPLENBQUM7SUFDbEYsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUs7UUFBRSxPQUFPLENBQUM7SUFDdEUsT0FBTyxDQUFDO0FBQ1YsQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYyxFQUFpQixFQUFFOztJQUNuRCxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSTtJQUN2QixNQUFNLENBQUMsR0FBRyxLQUE0RjtJQUN0RyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxVQUFVO1FBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN2RCxNQUFNLENBQUMsR0FBRyxPQUFDLENBQUMsQ0FBQyxtQ0FBSyxLQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsR0FBRyxPQUFDLENBQUMsQ0FBQyxtQ0FBSyxLQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsR0FBRyxPQUFDLENBQUMsQ0FBQyxtQ0FBSyxLQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsR0FBRyxhQUFDLENBQUMsQ0FBQyxtQ0FBSyxLQUFrQixDQUFDLENBQUMsQ0FBQyxtQ0FBSSxDQUFDO0lBQzVDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQUUsT0FBTyxJQUFJO0lBQ3BELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7QUFDdkMsQ0FBQztBQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBZSxFQUFpQixFQUFFOztJQUNyRCxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sSUFBSTtJQUN4QixNQUFNLENBQUMsR0FBRyxNQUE0RDtJQUN0RSxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQUMsQ0FBQyxPQUFPLDBDQUFFLEtBQUssQ0FBQztBQUM1RCxDQUFDO0FBRU0sTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFFBQWlCLEVBQXVCLEVBQUU7SUFDOUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQWtCO0lBQ25DLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFFBS1Q7SUFFRCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUMvQyxJQUFJLFVBQVU7UUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFFM0MsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBQzlCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQzVDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFDbEUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUMzQixDQUFDLENBQUMsS0FBSztZQUNULE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksS0FBSyxJQUFJLEdBQUc7Z0JBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO1NBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUMzQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqRSxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLEtBQUssSUFBSSxHQUFHO2dCQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztTQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMvQixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUUsQ0FBMEIsQ0FBQyxNQUFNLENBQUM7UUFDM0QsSUFBSSxHQUFHO1lBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQUM7QUFDVixDQUFDO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQWdDLEVBQXVCLEVBQUU7SUFDbEYsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCO0lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQ2hELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTTtBQUNmLENBQUM7QUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBMkIsRUFBZ0IsRUFBRTtJQUNyRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDL0IsQ0FBQyxDQUFDO1NBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQUVNLFNBQVMsaUJBQWlCLENBQUUsTUFBaUI7O0lBQ2xELE1BQU0sTUFBTSxHQUFrQixFQUFFO0lBRWhDLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FDaEMscUJBQXFCLENBQUMsTUFBQyxNQUFNLENBQUMsTUFBNEMsMENBQUUsUUFBUSxDQUFDLEVBQ3JGLHFCQUFxQixDQUFDLE1BQUMsTUFBTSxDQUFDLGdCQUFzRCwwQ0FBRSxRQUFRLENBQUMsRUFDL0YscUJBQXFCLENBQUMsTUFBQyxNQUFNLENBQUMsZ0JBQXNELDBDQUFFLFFBQVEsQ0FBQyxDQUNoRztJQUVELElBQUksV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixLQUFLLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsTUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQ3BDLE1BQU0sQ0FBQyxTQUErQyxDQUFDLFFBQVEsQ0FDakU7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzthQUNuQyxDQUFDO1FBQ0osQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsQ0FBQzt3QkFDTixLQUFLLEVBQUUscUJBQXFCO3dCQUM1QixLQUFLLEVBQUUseUJBQXlCO3dCQUNoQyxRQUFRLEVBQUUsQ0FBQztxQkFDWixDQUFDO2FBQ0gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxNQUFNO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJbUQ7QUFvQjdDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsWUFBWSxFQUFFLGdHQUFnRztJQUM5RyxTQUFTLEVBQUUseUdBQXlHO0lBQ3BILG1CQUFtQixFQUFFLGlHQUFpRztJQUN0SCxtQkFBbUIsRUFBRSxpR0FBaUc7SUFDdEgsU0FBUyxFQUFFLCtEQUErRDtJQUMxRSxLQUFLLEVBQUUsa0lBQWtJO0NBQzFJO0FBRU0sU0FBUyxXQUFXLENBQUUsR0FBZ0M7SUFDM0QsT0FBTztRQUNMLFlBQVksRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsWUFBWSxLQUFJLGtCQUFrQixDQUFDLFlBQVk7UUFDbEUsU0FBUyxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLEtBQUksa0JBQWtCLENBQUMsU0FBUztRQUN6RCxtQkFBbUIsRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsbUJBQW1CLEtBQUksa0JBQWtCLENBQUMsbUJBQW1CO1FBQ3ZGLG1CQUFtQixFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxtQkFBbUIsS0FBSSxrQkFBa0IsQ0FBQyxtQkFBbUI7UUFDdkYsY0FBYyxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxjQUFjLEtBQUksWUFBWTtRQUNuRCxjQUFjLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLGNBQWMsS0FBSSxZQUFZO1FBQ25ELFVBQVUsRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsVUFBVSxLQUFJLE9BQU87UUFDdEMsYUFBYSxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxhQUFhLEtBQUksV0FBVztRQUNoRCxXQUFXLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFdBQVcsS0FBSSxRQUFRO1FBQ3pDLFNBQVMsRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsU0FBUyxLQUFJLFdBQVc7UUFDeEMsU0FBUyxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLEtBQUksa0JBQWtCLENBQUMsU0FBUztRQUN6RCxLQUFLLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssS0FBSSxrQkFBa0IsQ0FBQyxLQUFLO1FBQzdDLGVBQWUsRUFBRSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsZUFBZTtRQUNyQyxnQkFBZ0IsRUFBRSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsZ0JBQWdCO0tBQ3hDO0FBQ0gsQ0FBQztBQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtBQUVyRSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFVLEVBQUU7SUFDcEYsTUFBTSxLQUFLLEdBQWEsRUFBRTtJQUMxQixJQUFJLEtBQUs7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRSxJQUFJLFFBQVE7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUM5RSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLFdBQVcsR0FBRyxHQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLFNBQVMsRUFBRSxJQUFJO0lBQ2YsTUFBTSxFQUFFLElBQUk7SUFDWixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGdCQUFnQixFQUFFLElBQUk7Q0FDdkIsQ0FBQztBQUVLLFNBQWUsYUFBYSxDQUNqQyxXQUF3QixFQUN4QixNQUFjOzs7UUFFZCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLE1BQU0sbUVBQXNCLENBQUM7WUFDbkUsMEJBQTBCO1lBQzFCLCtCQUErQjtTQUNoQyxDQUFDO1FBRUYsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsZUFBZSxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7aUJBQzdDLENBQUM7WUFDSixDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZGLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyx1QkFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLDBDQUFFLEtBQUssRUFBRSxtQ0FBSSxJQUFJO1FBRXBFLE1BQU0sT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUMzQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUM1QztRQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBYyxFQUE4QixFQUFFO1lBQy9ELElBQUksS0FBSyxHQUErQixJQUFJO1lBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ25DLElBQUksS0FBSztvQkFBRSxPQUFNO2dCQUNqQixJQUFJLE1BQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTO3dCQUMxQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztvQkFDYixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxNQUFNO3dCQUFFLEtBQUssR0FBRyxLQUE0QjtnQkFDMUUsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUNsQixRQUFvQyxFQUNwQyxHQUFXLEVBQ1gsS0FBYSxFQUNiLE9BQU8sR0FBRyxJQUFJLEVBQ2tDLEVBQUU7WUFDbEQsSUFBSSxRQUFRO2dCQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2QsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQy9CLENBQUM7UUFFRCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7UUFDOUYsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUM7UUFDbkcsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLCtCQUErQixFQUFFLEtBQUssQ0FBQztRQUMzSCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsaUNBQWlDLEVBQUUsS0FBSyxDQUFDO1FBRTdILFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFFN0IsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3RCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1NBQ3ZCLENBQUM7UUFFRixNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUU3QyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixNQUFNLFdBQVcsR0FBb0UsRUFBRTtRQUN2RixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBVyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNyQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNuQyxJQUFJLE1BQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUssU0FBUztnQkFBRSxPQUFNO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHO2dCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDN0UsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUFFLE9BQU07WUFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0QsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUs7Z0JBQ3ZCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2dCQUNsQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsS0FBSzthQUNuQztZQUNELEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUs7Z0JBQzFCLE1BQU0sRUFBRSxTQUFTLENBQUMsS0FBSztnQkFDdkIsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLEtBQUs7Z0JBQ2xDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2FBQ25DO1lBQ0QsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBUyxpQkFBaUIsQ0FBRSxXQUErQixFQUFFLEtBQTJCOztJQUM3RixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU07SUFDbEMsTUFBTSxHQUFHLEdBQUcsaUJBQVcsQ0FBQyxJQUFJLDBDQUFFLEdBQUc7SUFDakMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFNO0lBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSztJQUMvQixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVM7UUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNO1FBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVELElBQUksTUFBTSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0I7UUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxRixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCO1FBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7QUFDNUYsQ0FBQztBQUVNLFNBQWUsa0JBQWtCO3lEQUN0QyxXQUF3QixFQUN4QixLQUFvQixFQUNwQixNQUFjLEVBQ2QsT0FBa0IsRUFDbEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLElBQUksR0FBRyxJQUFJO1FBRVgsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTTtRQUM5RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU07UUFFakMsTUFBTSxPQUFPLEdBQUcsT0FBTyxLQUFLLE9BQU87UUFDbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3hCLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxRQUFRO1FBQ3JFLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxRQUFRO1FBRXJFLE1BQU0sYUFBYSxHQUFHLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDaEYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQztnQkFBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQUMsQ0FBQztZQUFDLFdBQU0sQ0FBQyxFQUFDO1FBQzFFLENBQUMsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNqRCxNQUFNLFVBQVUsR0FBRyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFL0MsTUFBTSxDQUFDLG9CQUFvQixHQUFHLFVBQVU7UUFDeEMsSUFBSSxnQkFBZ0I7WUFBRSxnQkFBZ0IsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVO1FBQ3hFLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsb0JBQW9CLEdBQUcsVUFBVTtRQUN4RSxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBVTtRQUUzQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFFakIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNwRSxNQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksS0FBSztZQUNyQyxNQUFNLFlBQVksR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDdEUsSUFBSSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJO2dCQUM3QixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDO29CQUM5QyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUMzRSxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQ3RDLFdBQXdCLEVBQ3hCLEtBQW9COztRQUVwQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQzlFLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUk7WUFDckIsTUFBTSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7UUFDbEMsQ0FBQztRQUNELElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsS0FBSztZQUNoQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO1FBQzVDLENBQUM7UUFDRCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDckIsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLEtBQUs7WUFDaEMsZ0JBQWdCLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtRQUM1QyxDQUFDO1FBQ0QsSUFBSSxTQUFTO1lBQUUsU0FBUyxDQUFDLG9CQUFvQixHQUFHLEVBQUU7UUFDbEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQztnQkFBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGVBQWU7WUFBQyxDQUFDO1lBQUMsV0FBTSxDQUFDLEVBQUM7UUFDbEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDckQsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFTSxTQUFlLGdCQUFnQixDQUNwQyxTQUE4QixFQUM5QixNQUFjOzs7UUFPZCxNQUFNLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDM0MsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEQsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDekQsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxFQUFrQjtRQUNqRCxNQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFvQjtRQUNwRCxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVTtRQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVTtRQUVwQyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxVQUFJLENBQUMsVUFBVSwwQ0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxHQUFHLFVBQUksQ0FBQyxVQUFVLDBDQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxJQUFJO2dCQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksSUFBSTtnQkFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDakIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUMvQixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDdkMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQzNDLGVBQWU7WUFDZixnQkFBZ0I7U0FDakI7SUFDSCxDQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEQsaUVBQWU7SUFDYixZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLGVBQWUsRUFBRSxzREFBc0Q7SUFDdkUsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QyxjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSxnQ0FBZ0M7SUFDNUMsYUFBYSxFQUFFLG9DQUFvQztJQUNuRCxXQUFXLEVBQUUsV0FBVztJQUN4QixjQUFjLEVBQUUseUJBQXlCO0lBQ3pDLFlBQVksRUFBRSx5QkFBeUI7SUFDdkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxZQUFZLEVBQUUsT0FBTztJQUNyQixhQUFhLEVBQUUsVUFBVTtJQUN6QixhQUFhLEVBQUUsWUFBWTtJQUMzQixhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLEtBQUssRUFBRSxlQUFlO0lBQ3RCLFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsU0FBUyxFQUFFLHFFQUFxRTtJQUNoRixTQUFTLEVBQUUsZ0ZBQWdGO0lBQzNGLGVBQWUsRUFBRSwwS0FBMEs7SUFDM0wsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxTQUFTLEVBQUUsZ0NBQWdDO0lBQzNDLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVcsRUFBRSw0REFBNEQ7Q0FDMUU7Ozs7Ozs7Ozs7OztBQ3pCRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUM0QztBQUNTO0FBRWhCO0FBQ0o7QUFDTTtBQVVsQztBQUMrQztBQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxHQUFHLDRDQUFLO0FBRW5FLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBYSxFQUFVLEVBQUU7SUFDN0MsSUFBSSxFQUFFLEtBQUssUUFBUTtRQUFFLE9BQU8sNkRBQWUsQ0FBQyxhQUFhO0lBQ3pELElBQUksRUFBRSxLQUFLLFFBQVE7UUFBRSxPQUFPLDZEQUFlLENBQUMsYUFBYTtJQUN6RCxPQUFPLDZEQUFlLENBQUMsWUFBWTtBQUNyQyxDQUFDO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFhLEVBQWEsRUFBRTtJQUNsRCxJQUFJLEtBQUssS0FBSyw2REFBZSxDQUFDLGFBQWE7UUFBRSxPQUFPLFFBQVE7SUFDNUQsSUFBSSxLQUFLLEtBQUssNkRBQWUsQ0FBQyxhQUFhO1FBQUUsT0FBTyxRQUFRO0lBQzVELE9BQU8sT0FBTztBQUNoQixDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQUc7SUFDdEIsNkRBQWUsQ0FBQyxZQUFZO0lBQzVCLDZEQUFlLENBQUMsYUFBYTtJQUM3Qiw2REFBZSxDQUFDLGFBQWE7Q0FDOUI7QUFPYyxTQUFTLE1BQU0sQ0FBRSxLQUErQjs7SUFDN0QsTUFBTSxNQUFNLEdBQUcsdURBQVcsQ0FBQyxLQUFLLENBQUMsTUFBdUMsQ0FBQztJQUV6RSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsZUFBZSxLQUFJLFdBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxLQUFJLEVBQUU7SUFDNUUsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixLQUFJLFdBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxLQUFJLEVBQUU7SUFFOUUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxRSxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBRTVFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFXLEVBQUUsQ0FBQztJQUN0RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBVyxFQUFFLENBQUM7SUFDOUQsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEQsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUM1RCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBWSxPQUFPLENBQUM7SUFDbEUsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQVksT0FBTyxDQUFDO0lBQ3BFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFnQixFQUFFLENBQUM7SUFFbkUsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQXNCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakUsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDcEUsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNoQyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFMUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUM7SUFFcEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFZLEVBQVUsRUFBRTs7UUFDM0MsTUFBTSxDQUFDLEdBQUcsR0FBNEY7UUFDdEcsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxLQUFJLEVBQUUsSUFBSSxjQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTywwQ0FBRSxLQUFLLDBDQUFFLE9BQU8sS0FBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDbkYsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ3BGLE9BQU8sNkRBQWUsQ0FBQyxTQUFTO1FBQ2xDLENBQUM7UUFDRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTywwQ0FBRSxVQUFVLE1BQUssR0FBRyxJQUFJLFFBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxPQUFPLDBDQUFFLFVBQVUsTUFBSyxHQUFHLEVBQUUsQ0FBQztZQUM5SCxPQUFPLDZEQUFlLENBQUMsU0FBUztRQUNsQyxDQUFDO1FBQ0QsT0FBTyw2REFBZSxDQUFDLFlBQVk7SUFDckMsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLENBQU8sVUFBZ0MsRUFBRSxFQUFFO1FBQ2hGLElBQUksQ0FBQyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsTUFBTSxDQUFDLFNBQVM7WUFBRSxPQUFNO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sNERBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ3hFLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZTtRQUNqRCxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtRQUNuRCxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVaLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxnRUFNbEMsRUFBRSxxR0FMRixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsV0FBc0IsRUFDdEIsWUFBdUIsRUFDdkIsSUFBSSxHQUFHLElBQUk7UUFFWCxNQUFNLEtBQUssR0FBb0IsRUFBRTtRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsOERBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RyxDQUFDO1FBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhEQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUcsQ0FBQztRQUNELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQyxHQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVwRSxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FDM0IsR0FBZ0IsRUFDaEIsTUFBcUQsRUFDckQsbUJBQTRCLEVBQzVCLEVBQUU7UUFDRixJQUFJLENBQUM7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDWixNQUFNLFVBQVUsR0FBRyxNQUFNLHlEQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNuRCxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDM0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO2dCQUN4QixNQUFNLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztnQkFDcEMsZUFBZSxDQUFDLCtEQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsTUFBTSw4REFBa0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDM0UsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztZQUMzQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7Z0JBQVMsQ0FBQztZQUNULFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUMsR0FBRSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsS0FBSztJQUN0QyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFM0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUN4QyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDdEMsT0FBTyxHQUFHLEVBQUU7WUFDViw2REFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUMsQ0FBQztRQUNELHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFZCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVU7WUFBRSxPQUFNO1FBQzFDLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUN6QyxPQUFPLEdBQUcsRUFBRTtZQUNWLDZEQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsdURBQXVEO0lBQ3pELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVmLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFBRSxPQUFNO1FBRTVFLE1BQU0sV0FBVyxHQUFHLEdBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xDLE1BQU0sZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0JBQ3RELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO2dCQUMzQyxJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUNQLElBQUksQ0FBQzt3QkFDSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7NEJBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7NEJBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7eUJBQ3hCLENBQUM7b0JBQ0osQ0FBQztvQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsb0JBQW9CLENBQUMsT0FBTyxHQUFHLElBQUk7Z0JBQ25DLE9BQU07WUFDUixDQUFDO1lBQ0QsTUFBTSxlQUFlLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFDbkYsQ0FBQztRQUNELEtBQUssV0FBVyxFQUFFO0lBQ3BCLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFekksTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUM3QixhQUFhLElBQUksZ0JBQWdCLElBQUksV0FBVyxLQUFLLE9BQU8sSUFBSSxZQUFZLEtBQUssT0FBTyxDQUN6RjtJQUVELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQUUsT0FBTTtRQUVqRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7UUFDOUIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO1FBRWhDLE1BQU0sWUFBWSxHQUFHLEdBQVMsRUFBRTtZQUM5QixJQUFJLFVBQVUsQ0FBQyxPQUFPO2dCQUFFLE9BQU07WUFDOUIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJO1lBQ3pCLElBQUksQ0FBQztnQkFDSCxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtvQkFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUNyQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7aUJBQzVCLENBQUM7WUFDSixDQUFDO1lBQUMsV0FBTSxDQUFDLEVBQUM7WUFDVixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQztRQUVELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztRQUNqRCxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0lBQzlCLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVwQyxNQUFNLGFBQWEsR0FBRyxDQUFPLEtBQWEsRUFBRSxFQUFFO1FBQzVDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLFFBQVEsR0FBRyxnQkFBZ0I7UUFDL0IsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFLENBQUM7WUFDdEIsTUFBTSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLFFBQVEsR0FBRyxFQUFFO2dCQUNiLG1CQUFtQixDQUFDLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztJQUNuRSxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFPLEtBQWEsRUFBRSxFQUFFO1FBQy9DLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxhQUFhO1FBQ3pCLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxLQUFLLEdBQUcsSUFBSTtnQkFDWixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQUcsQ0FBTyxLQUFhLEVBQUUsRUFBRTtRQUNsRCxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ2hDLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDbEIsTUFBTSxlQUFlLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxNQUFNLG9CQUFvQixHQUFHLENBQU8sS0FBYSxFQUFFLEVBQUU7UUFDbkQsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNoQyxlQUFlLENBQUMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sZUFBZSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztJQUNoRixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFOztRQUN6QixnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDdkIsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBb0IsRUFBRTtRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLDhEQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFGLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVTtZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsOERBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUYsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4QixNQUFNLEVBQUUsR0FBRyxVQUFJLENBQUMsVUFBVSwwQ0FBRSxnQkFBZ0I7UUFDNUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDO2dCQUNILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztpQkFDeEIsQ0FBQztZQUNKLENBQUM7WUFBQyxXQUFNLENBQUMsRUFBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsYUFBYTtRQUNuQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4RCxDQUFDLENBQUMsWUFBWTtJQUVoQixNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7O1FBQ3ZDLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxZQUFZO1FBQ2hELE1BQU0sTUFBTSxHQUFHLFdBQUksQ0FBQyxVQUFVLDBDQUFFLE1BQU0sTUFBSSxXQUFLLENBQUMsVUFBVSwwQ0FBRSxNQUFNO1FBQ2xFLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFO1FBQ3RCLE9BQU8sK0RBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVyRCxNQUFNLElBQUksR0FBd0IsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7SUFDNUUsTUFBTSxVQUFVLEdBQXdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtJQUNoRSxNQUFNLFVBQVUsR0FBd0I7UUFDdEMsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE1BQU0sWUFBWSxHQUF3QjtRQUN4QyxRQUFRLEVBQUUsTUFBTTtRQUNoQixVQUFVLEVBQUUsR0FBRztRQUNmLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxNQUFNO0tBQ3JCO0lBQ0QsTUFBTSxRQUFRLEdBQXdCO1FBQ3BDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsT0FBTztRQUNyQixPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxHQUFHO1FBQ2YsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLE9BQU87S0FDbEI7SUFDRCxNQUFNLE1BQU0sR0FBd0I7UUFDbEMsT0FBTyxFQUFFLE1BQU07UUFDZixjQUFjLEVBQUUsVUFBVTtRQUMxQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELE1BQU0sVUFBVSxHQUF3QjtRQUN0QyxRQUFRLEVBQUUsTUFBTTtRQUNoQixLQUFLLEVBQUUsTUFBTTtRQUNiLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFlBQVksRUFBRSxLQUFLO1FBQ25CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsTUFBTSxRQUFRLEdBQXdCO1FBQ3BDLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxHQUFHO1FBQ2YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsWUFBWSxFQUFFLE9BQU87UUFDckIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsWUFBWSxFQUFFLEtBQUs7S0FDcEI7SUFFRCxPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLHFDQUFxQyxFQUFDLEtBQUssRUFBRSxJQUFJO1FBQzdELFNBQVMsSUFBSSxDQUNaLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsU0FBUyxFQUN6QixrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMxQixJQUFJLEdBQUc7b0JBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM3QyxDQUFDLEdBQ0QsQ0FDSDtRQUNBLFVBQVUsSUFBSSxDQUNiLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsVUFBVSxFQUMxQixrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMxQixJQUFJLEdBQUc7b0JBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM5QyxDQUFDLEdBQ0QsQ0FDSDtRQUVBLENBQUMsV0FBVyxJQUFJLENBQ2Ysd0RBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUcsNkRBQWUsQ0FBQyxlQUFlLENBQU8sQ0FDekY7UUFFQSxXQUFXLElBQUksQ0FDZDtZQUNFLHdEQUFLLEtBQUssRUFBRSxZQUFZLElBQUcsNkRBQWUsQ0FBQyxZQUFZLENBQU87WUFFN0QsS0FBSyxJQUFJLENBQ1Isd0RBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBRyxLQUFLLENBQU8sQ0FDdkY7WUFFRCx3REFBSyxLQUFLLEVBQUUsVUFBVTtnQkFDcEIsMERBQU8sS0FBSyxFQUFFLFVBQVUsSUFBRyw2REFBZSxDQUFDLFVBQVUsQ0FBUztnQkFDOUQsK0NBQUMsMERBQVEsSUFDUCxLQUFLLEVBQUUsYUFBYSxFQUNwQixPQUFPLEVBQUUsUUFBUSxFQUNqQixXQUFXLEVBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyw2REFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsNkRBQWUsQ0FBQyxXQUFXLEVBQ3JHLFFBQVEsRUFBRSxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzFDLFFBQVEsRUFBRSxhQUFhLEdBQ3ZCLENBQ0U7WUFFTix3REFBSyxLQUFLLEVBQUUsVUFBVTtnQkFDcEIsMERBQU8sS0FBSyxFQUFFLFVBQVUsSUFBRyw2REFBZSxDQUFDLGFBQWEsQ0FBUztnQkFDakUsK0NBQUMsMERBQVEsSUFDUCxLQUFLLEVBQUUsZ0JBQWdCLEVBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQ3hCLFdBQVcsRUFBRSxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZEQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyw2REFBZSxDQUFDLGNBQWMsRUFDNUcsUUFBUSxFQUFFLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUMsUUFBUSxFQUFFLGdCQUFnQixHQUMxQixDQUNFO1lBRU4sd0RBQUssS0FBSyxFQUFFO29CQUNWLFNBQVMsRUFBRSxLQUFLO29CQUNoQixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsU0FBUyxFQUFFLGlCQUFpQjtpQkFDN0I7Z0JBQ0Msd0RBQUssS0FBSyxFQUFFLFVBQVU7b0JBQ3BCLHlEQUFNLEtBQUssRUFBRSxRQUFRLElBQUcsNkRBQWUsQ0FBQyxZQUFZLENBQVE7b0JBQzVELCtDQUFDLDBEQUFRLElBQ1AsS0FBSyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFDeEIsV0FBVyxFQUFFLDZEQUFlLENBQUMsYUFBYSxFQUMxQyxRQUFRLEVBQUUsbUJBQW1CLEdBQzdCLENBQ0U7Z0JBRU4sd0RBQUssS0FBSyxFQUFFLFVBQVU7b0JBQ3BCLHlEQUFNLEtBQUssRUFBRSxRQUFRLElBQUcsNkRBQWUsQ0FBQyxhQUFhLENBQVE7b0JBQzdELCtDQUFDLDBEQUFRLElBQ1AsS0FBSyxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFDakMsT0FBTyxFQUFFLGVBQWUsRUFDeEIsV0FBVyxFQUFFLDZEQUFlLENBQUMsYUFBYSxFQUMxQyxRQUFRLEVBQUUsb0JBQW9CLEdBQzlCLENBQ0UsQ0FDRjtZQUVOLHdEQUFLLEtBQUssRUFBRSxVQUFVLElBQUcsNkRBQWUsQ0FBQyxlQUFlLENBQU87WUFFL0QsMERBQU8sS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtnQkFDeEksMERBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsU0FBUyxFQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsR0FDbkQ7Z0JBQ0QsNkRBQWUsQ0FBQyxTQUFTLENBQ3BCO1lBRVAsZUFBZSxJQUFJLENBQ2xCLHdEQUFLLEtBQUssRUFBRSxNQUFNO2dCQUNoQiwyREFBUSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLE9BQU8sRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsUUFBUSxJQUN0RSw2REFBZSxDQUFDLEtBQUssQ0FDZixDQUNMLENBQ1A7WUFFRCwrQ0FBQyxnRUFBVyxJQUNWLE1BQU0sRUFBRSxtQkFBbUIsRUFDM0IsS0FBSyxFQUFFLDZEQUFlLENBQUMsV0FBVyxFQUNsQyxTQUFTLEVBQUUsNkRBQWUsQ0FBQyxXQUFXLEdBQ3RDLENBQ0UsQ0FDUCxDQUNHLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvRHJvcGRvd24udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9MYXllckxlZ2VuZC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9sZWdlbmRVdGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL21hcExheWVycy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9ID0gUmVhY3RcblxuZXhwb3J0IGNvbnN0IENoZXZyb25Eb3duSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPScxNCdcbiAgICBoZWlnaHQ9JzE0J1xuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICBmaWxsPSdub25lJ1xuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgPlxuICAgIDxwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBvcHRpb25zOiBzdHJpbmdbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9ICh7IHZhbHVlLCBvcHRpb25zLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvcGVuKSByZXR1cm5cbiAgICBjb25zdCBvbkRvY0NsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICh3cmFwUmVmLmN1cnJlbnQgJiYgIXdyYXBSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY0NsaWNrKVxuICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jQ2xpY2spIH1cbiAgfSwgW29wZW5dKVxuXG4gIGNvbnN0IHBpbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2QwZDBkMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnOTk5cHgnLFxuICAgIHBhZGRpbmc6ICcycHggNHB4IDJweCAxNnB4JyxcbiAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLDAsMCwwLjA0KScsXG4gICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjYgOiAxLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9XG4gIGNvbnN0IHZhbHVlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZmxleDogMSxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGNvbG9yOiB2YWx1ZSA/ICcjMzMzJyA6ICcjODg4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH1cbiAgY29uc3QgY2hldnJvbjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBjb2xvcjogJyM1NTUnLFxuICAgIHdpZHRoOiAnMjhweCcsXG4gICAgaGVpZ2h0OiAnMzJweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgdHJhbnNmb3JtOiBvcGVuID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdyb3RhdGUoMGRlZyknLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4xNXMnXG4gIH1cbiAgY29uc3QgbGlzdDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICdjYWxjKDEwMCUgKyA0cHgpJyxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1heEhlaWdodDogJzIyMHB4JyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQwZDAnLFxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgIGJveFNoYWRvdzogJzAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICAgekluZGV4OiAxMDAwLFxuICAgIHBhZGRpbmc6ICc0cHggMCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnXG4gIH1cbiAgY29uc3QgaXRlbVN0eWxlID0gKHNlbGVjdGVkOiBib29sZWFuKTogUmVhY3QuQ1NTUHJvcGVydGllcyA9PiAoe1xuICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBjb2xvcjogc2VsZWN0ZWQgPyAnIzI1NkI0NScgOiAnIzMzMycsXG4gICAgYmFja2dyb3VuZDogc2VsZWN0ZWQgPyAnI2YwZjdmMycgOiAndHJhbnNwYXJlbnQnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgfSlcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm5cbiAgICBzZXRPcGVuKG8gPT4gIW8pXG4gIH1cblxuICBjb25zdCBzZWxlY3RWYWx1ZSA9ICh2OiBzdHJpbmcpID0+IHtcbiAgICBvbkNoYW5nZSh2KVxuICAgIHNldE9wZW4oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXt3cmFwUmVmfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3BpbGx9XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgICAgcm9sZT0nYnV0dG9uJ1xuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykgeyBlLnByZXZlbnREZWZhdWx0KCk7IHRvZ2dsZSgpIH0gfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3ZhbHVlU3R5bGV9Pnt2YWx1ZSB8fCBwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXtjaGV2cm9ufT48Q2hldnJvbkRvd25JY29uIC8+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDx1bCBzdHlsZT17bGlzdH0+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBzdHlsZT17aXRlbVN0eWxlKCF2YWx1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzZWxlY3RWYWx1ZSgnJykgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MTElFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY1ZjUnIH19XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTExJRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9ICF2YWx1ZSA/ICcjZjBmN2YzJyA6ICd0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0ID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e29wdH1cbiAgICAgICAgICAgICAgc3R5bGU9e2l0ZW1TdHlsZShvcHQgPT09IHZhbHVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2VsZWN0VmFsdWUob3B0KSB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTExJRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmNWY1JyB9fVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTExJRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdCA9PT0gdmFsdWUgPyAnI2YwZjdmMycgOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcHR9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgTGVnZW5kR3JvdXAgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcclxuaW1wb3J0IHsgc2V2ZXJpdHlDb2xvciB9IGZyb20gJy4uL2xlZ2VuZFV0aWxzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXllckxlZ2VuZFByb3BzIHtcclxuICBncm91cHM6IExlZ2VuZEdyb3VwW11cclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZW1wdHlUZXh0OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheWVyTGVnZW5kOiBSZWFjdC5GQzxMYXllckxlZ2VuZFByb3BzPiA9ICh7IGdyb3VwcywgdGl0bGUsIGVtcHR5VGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgYm94OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuICAgIGJhY2tncm91bmQ6ICcjZjdmOWY4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2UwZThlNCdcclxuICB9XHJcbiAgY29uc3QgdGl0bGVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBjb2xvcjogJyMyNTZCNDUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnOHB4J1xyXG4gIH1cclxuICBjb25zdCBncm91cFRpdGxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIGNvbG9yOiAnIzU1NScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICc2cHgnLFxyXG4gICAgbWFyZ2luVG9wOiAnNHB4J1xyXG4gIH1cclxuICBjb25zdCByb3c6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGdhcDogJzhweCcsXHJcbiAgICBwYWRkaW5nOiAnNHB4IDAnLFxyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIGNvbG9yOiAnIzMzMydcclxuICB9XHJcbiAgY29uc3Qgc3dhdGNoOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgd2lkdGg6IDE0LFxyXG4gICAgaGVpZ2h0OiAxNCxcclxuICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjEyKSdcclxuICB9XHJcblxyXG4gIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXtib3h9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3RpdGxlU3R5bGV9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzg4OCcsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+e2VtcHR5VGV4dH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17Ym94fT5cclxuICAgICAgPGRpdiBzdHlsZT17dGl0bGVTdHlsZX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7Z3JvdXBzLm1hcCgoZ3JvdXAsIGdpKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2dyb3VwLnRpdGxlfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdpIDwgZ3JvdXBzLmxlbmd0aCAtIDEgPyAnMTBweCcgOiAwIH19PlxyXG4gICAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAxICYmIDxkaXYgc3R5bGU9e2dyb3VwVGl0bGV9Pntncm91cC50aXRsZX08L2Rpdj59XHJcbiAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxsID0gaXRlbS5jb2xvciB8fCBzZXZlcml0eUNvbG9yKGl0ZW0uc2V2ZXJpdHkpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2dyb3VwLnRpdGxlfS0ke2l0ZW0ubGFiZWx9YH0gc3R5bGU9e3Jvd30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zd2F0Y2gsIGJhY2tncm91bmQ6IGZpbGwgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDEuMyB9fT57aXRlbS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IExheWVyUmVmcyB9IGZyb20gJy4vbWFwTGF5ZXJzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMZWdlbmRJdGVtIHtcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgY29sb3I6IHN0cmluZ1xyXG4gIHNldmVyaXR5OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMZWdlbmRHcm91cCB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGl0ZW1zOiBMZWdlbmRJdGVtW11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldmVyaXR5Q29sb3IgPSAoc2V2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gIGlmIChzZXYgPj0gMykgcmV0dXJuICcjYTgzMjMyJ1xyXG4gIGlmIChzZXYgPT09IDIpIHJldHVybiAnI2M5N2IwMCdcclxuICBpZiAoc2V2ID09PSAxKSByZXR1cm4gJyM4ODgnXHJcbiAgcmV0dXJuICcjMjU2QjQ1J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xhc3NTZXZlcml0eSA9IChjbGFzc2U6IHN0cmluZyk6IG51bWJlciA9PiB7XHJcbiAgY29uc3QgYyA9IChjbGFzc2UgfHwgJycpLnRvTG93ZXJDYXNlKClcclxuICBpZiAoIWMpIHJldHVybiAwXHJcbiAgaWYgKGMuaW5jbHVkZXMoJ2NyaXNlJykgfHwgYy5pbmNsdWRlcygnY3LDrXRpY28nKSB8fCBjLmluY2x1ZGVzKCdjcml0aWNvJykgfHwgYy5pbmNsdWRlcygnbXVpdG8gYWx0bycpKSByZXR1cm4gNFxyXG4gIGlmIChjLmluY2x1ZGVzKCdhbHRvJykpIHJldHVybiAzXHJcbiAgaWYgKGMuaW5jbHVkZXMoJ23DqWRpbycpIHx8IGMuaW5jbHVkZXMoJ21lZGlvJykgfHwgYy5pbmNsdWRlcygnbW9kZXJhZG8nKSkgcmV0dXJuIDJcclxuICBpZiAoYy5pbmNsdWRlcygnYmFpeG8nKSB8fCBjLmluY2x1ZGVzKCdzZW0gJykgfHwgYyA9PT0gJ3NlbScpIHJldHVybiAwXHJcbiAgcmV0dXJuIDFcclxufVxyXG5cclxuY29uc3QgY29sb3JUb0NzcyA9IChjb2xvcjogdW5rbm93bik6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gIGlmICghY29sb3IpIHJldHVybiBudWxsXHJcbiAgY29uc3QgYyA9IGNvbG9yIGFzIHsgdG9Dc3M/OiAoYT86IGJvb2xlYW4pID0+IHN0cmluZywgcj86IG51bWJlciwgZz86IG51bWJlciwgYj86IG51bWJlciwgYT86IG51bWJlciB9XHJcbiAgaWYgKHR5cGVvZiBjLnRvQ3NzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYy50b0Nzcyh0cnVlKVxyXG4gIGNvbnN0IHIgPSBjLnIgPz8gKGNvbG9yIGFzIG51bWJlcltdKVswXVxyXG4gIGNvbnN0IGcgPSBjLmcgPz8gKGNvbG9yIGFzIG51bWJlcltdKVsxXVxyXG4gIGNvbnN0IGIgPSBjLmIgPz8gKGNvbG9yIGFzIG51bWJlcltdKVsyXVxyXG4gIGNvbnN0IGEgPSBjLmEgPz8gKGNvbG9yIGFzIG51bWJlcltdKVszXSA/PyAxXHJcbiAgaWYgKHIgPT0gbnVsbCB8fCBnID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gbnVsbFxyXG4gIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2F9KWBcclxufVxyXG5cclxuY29uc3Qgc3ltYm9sQ29sb3IgPSAoc3ltYm9sOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgaWYgKCFzeW1ib2wpIHJldHVybiBudWxsXHJcbiAgY29uc3QgcyA9IHN5bWJvbCBhcyB7IGNvbG9yPzogdW5rbm93biwgb3V0bGluZT86IHsgY29sb3I/OiB1bmtub3duIH0gfVxyXG4gIHJldHVybiBjb2xvclRvQ3NzKHMuY29sb3IpIHx8IGNvbG9yVG9Dc3Mocy5vdXRsaW5lPy5jb2xvcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RSZW5kZXJlckNvbG9ycyA9IChyZW5kZXJlcjogdW5rbm93bik6IE1hcDxzdHJpbmcsIHN0cmluZz4gPT4ge1xyXG4gIGNvbnN0IG0gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXHJcbiAgaWYgKCFyZW5kZXJlcikgcmV0dXJuIG1cclxuICBjb25zdCByID0gcmVuZGVyZXIgYXMge1xyXG4gICAgdHlwZT86IHN0cmluZ1xyXG4gICAgZGVmYXVsdFN5bWJvbD86IHVua25vd25cclxuICAgIHVuaXF1ZVZhbHVlSW5mb3M/OiBBcnJheTx7IHZhbHVlPzogdW5rbm93biwgbGFiZWw/OiBzdHJpbmcsIHN5bWJvbD86IHVua25vd24gfT5cclxuICAgIGNsYXNzQnJlYWtJbmZvcz86IEFycmF5PHsgbGFiZWw/OiBzdHJpbmcsIHN5bWJvbD86IHVua25vd24gfT5cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRDc3MgPSBzeW1ib2xDb2xvcihyLmRlZmF1bHRTeW1ib2wpXHJcbiAgaWYgKGRlZmF1bHRDc3MpIG0uc2V0KCdQYWRyw6NvJywgZGVmYXVsdENzcylcclxuXHJcbiAgaWYgKHIudHlwZSA9PT0gJ3VuaXF1ZS12YWx1ZScpIHtcclxuICAgIGZvciAoY29uc3QgaW5mbyBvZiByLnVuaXF1ZVZhbHVlSW5mb3MgfHwgW10pIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBpbmZvLnZhbHVlICE9IG51bGwgPyBTdHJpbmcoaW5mby52YWx1ZSkudHJpbSgpIDogJydcclxuICAgICAgY29uc3QgbGFiZWwgPSBpbmZvLmxhYmVsICE9IG51bGwgJiYgU3RyaW5nKGluZm8ubGFiZWwpLnRyaW0oKSAhPT0gJydcclxuICAgICAgICA/IFN0cmluZyhpbmZvLmxhYmVsKS50cmltKClcclxuICAgICAgICA6IHZhbHVlXHJcbiAgICAgIGNvbnN0IGNzcyA9IHN5bWJvbENvbG9yKGluZm8uc3ltYm9sKVxyXG4gICAgICBpZiAobGFiZWwgJiYgY3NzKSBtLnNldChsYWJlbCwgY3NzKVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoci50eXBlID09PSAnY2xhc3MtYnJlYWtzJykge1xyXG4gICAgZm9yIChjb25zdCBpbmZvIG9mIHIuY2xhc3NCcmVha0luZm9zIHx8IFtdKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5mby5sYWJlbCAhPSBudWxsID8gU3RyaW5nKGluZm8ubGFiZWwpLnRyaW0oKSA6ICcnXHJcbiAgICAgIGNvbnN0IGNzcyA9IHN5bWJvbENvbG9yKGluZm8uc3ltYm9sKVxyXG4gICAgICBpZiAobGFiZWwgJiYgY3NzKSBtLnNldChsYWJlbCwgY3NzKVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoci50eXBlID09PSAnc2ltcGxlJykge1xyXG4gICAgY29uc3QgY3NzID0gc3ltYm9sQ29sb3IoKHIgYXMgeyBzeW1ib2w/OiB1bmtub3duIH0pLnN5bWJvbClcclxuICAgIGlmIChjc3MpIG0uc2V0KCfDgXJlYScsIGNzcylcclxuICB9XHJcblxyXG4gIHJldHVybiBtXHJcbn1cclxuXHJcbmNvbnN0IG1lcmdlQ29sb3JNYXBzID0gKC4uLm1hcHM6IEFycmF5PE1hcDxzdHJpbmcsIHN0cmluZz4+KTogTWFwPHN0cmluZywgc3RyaW5nPiA9PiB7XHJcbiAgY29uc3QgbWVyZ2VkID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxyXG4gIG1hcHMuZm9yRWFjaChtYXAgPT4ge1xyXG4gICAgbWFwLmZvckVhY2goKGNzcywgbGFiZWwpID0+IHtcclxuICAgICAgaWYgKCFtZXJnZWQuaGFzKGxhYmVsKSkgbWVyZ2VkLnNldChsYWJlbCwgY3NzKVxyXG4gICAgfSlcclxuICB9KVxyXG4gIHJldHVybiBtZXJnZWRcclxufVxyXG5cclxuY29uc3QgbWFwVG9MZWdlbmRJdGVtcyA9IChjb2xvcnM6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiBMZWdlbmRJdGVtW10gPT4ge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGNvbG9ycy5lbnRyaWVzKCkpXHJcbiAgICAubWFwKChbbGFiZWwsIGNvbG9yXSkgPT4gKHtcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzZXZlcml0eTogY2xhc3NTZXZlcml0eShsYWJlbClcclxuICAgIH0pKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2V2ZXJpdHkgLSBhLnNldmVyaXR5IHx8IGEubGFiZWwubG9jYWxlQ29tcGFyZShiLmxhYmVsLCAncHQtQlInKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTGVnZW5kR3JvdXBzIChsYXllcnM6IExheWVyUmVmcyk6IExlZ2VuZEdyb3VwW10ge1xyXG4gIGNvbnN0IGdyb3VwczogTGVnZW5kR3JvdXBbXSA9IFtdXHJcblxyXG4gIGNvbnN0IGluZGV4Q29sb3JzID0gbWVyZ2VDb2xvck1hcHMoXHJcbiAgICBleHRyYWN0UmVuZGVyZXJDb2xvcnMoKGxheWVycy5pbmRpY2UgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpLFxyXG4gICAgZXh0cmFjdFJlbmRlcmVyQ29sb3JzKChsYXllcnMuY2VuYXJpb0dyYW5kZTI0NSBhcyB1bmtub3duIGFzIHsgcmVuZGVyZXI/OiB1bmtub3duIH0pPy5yZW5kZXJlciksXHJcbiAgICBleHRyYWN0UmVuZGVyZXJDb2xvcnMoKGxheWVycy5jZW5hcmlvR3JhbmRlNTg1IGFzIHVua25vd24gYXMgeyByZW5kZXJlcj86IHVua25vd24gfSk/LnJlbmRlcmVyKVxyXG4gIClcclxuXHJcbiAgaWYgKGluZGV4Q29sb3JzLnNpemUgPiAwKSB7XHJcbiAgICBncm91cHMucHVzaCh7XHJcbiAgICAgIHRpdGxlOiAnw41uZGljZSBkZSBjb25mbGl0bycsXHJcbiAgICAgIGl0ZW1zOiBtYXBUb0xlZ2VuZEl0ZW1zKGluZGV4Q29sb3JzKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmIChsYXllcnMuc3ViQmFjaWFzKSB7XHJcbiAgICBjb25zdCBzdWJDb2xvcnMgPSBleHRyYWN0UmVuZGVyZXJDb2xvcnMoXHJcbiAgICAgIChsYXllcnMuc3ViQmFjaWFzIGFzIHVua25vd24gYXMgeyByZW5kZXJlcj86IHVua25vd24gfSkucmVuZGVyZXJcclxuICAgIClcclxuICAgIGlmIChzdWJDb2xvcnMuc2l6ZSA+IDApIHtcclxuICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgIHRpdGxlOiAnU3ViLWJhY2lhcycsXHJcbiAgICAgICAgaXRlbXM6IG1hcFRvTGVnZW5kSXRlbXMoc3ViQ29sb3JzKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgIHRpdGxlOiAnU3ViLWJhY2lhcycsXHJcbiAgICAgICAgaXRlbXM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ0xpbWl0ZSBkYSBzdWItYmFjaWEnLFxyXG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDM3LCAxMDcsIDY5LCAwLjM1KScsXHJcbiAgICAgICAgICBzZXZlcml0eTogMFxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ3JvdXBzXHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCB0eXBlIENlbmFyaW9JZCA9ICdhdHVhbCcgfCAnc3NwMjQ1JyB8ICdzc3A1ODUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJSZWZzIHtcbiAgc3ViQmFjaWFzOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbFxuICBpbmRpY2U6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsXG4gIGNlbmFyaW9HcmFuZGUyNDU6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsXG4gIGNlbmFyaW9HcmFuZGU1ODU6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwTGF5ZXJTdGF0ZSB7XG4gIGxheWVyczogTGF5ZXJSZWZzXG4gIG93bmVkOiBSZWNvcmQ8a2V5b2YgTGF5ZXJSZWZzLCBib29sZWFuPlxuICBleHRyYUxheWVyczogQXJyYXk8eyBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllciwgb3JpZ2luYWxWaXNpYmxlOiBib29sZWFuIH0+XG4gIGluaXRpYWxWaWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQgfCBudWxsXG4gIHJlYWR5OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX1VSTFMgPSB7XG4gIHN1YkJhY2lhc1VybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL3N1YmJhY2lhcy9GZWF0dXJlU2VydmVyLzAnLFxuICBpbmRpY2VVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9pbmRpY2VfYXR1YWxfb2VzdGUvRmVhdHVyZVNlcnZlci8wJyxcbiAgY2VuYXJpb0dyYW5kZTI0NVVybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2dyYW5kZV8yNDUvRmVhdHVyZVNlcnZlci8wJyxcbiAgY2VuYXJpb0dyYW5kZTU4NVVybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2dyYW5kZV81ODUvRmVhdHVyZVNlcnZlci8wJyxcbiAgc2VydmVyVXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcycsXG4gIHRva2VuOiAnX3pORDQ5ZEtodm41OXREVDRIcTQ4NlVwX2JkSHFDZ0dINHJ6RVNTMFhpcUdKQ1h0VWpfbkxHc3RBX2V3SHZsYVJfa1A0RXRRQi1HTnQtUGxUOTFHM3lxbk1CNGthWDhqTVJvalRJWjFQQVZMMDViZFg5bHFHRVVVdjNKMTN0T2cnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyAoY2ZnOiBQYXJ0aWFsPENvbmZpZz4gfCB1bmRlZmluZWQpOiBDb25maWcge1xuICByZXR1cm4ge1xuICAgIHN1YkJhY2lhc1VybDogY2ZnPy5zdWJCYWNpYXNVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLnN1YkJhY2lhc1VybCxcbiAgICBpbmRpY2VVcmw6IGNmZz8uaW5kaWNlVXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5pbmRpY2VVcmwsXG4gICAgY2VuYXJpb0dyYW5kZTI0NVVybDogY2ZnPy5jZW5hcmlvR3JhbmRlMjQ1VXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5jZW5hcmlvR3JhbmRlMjQ1VXJsLFxuICAgIGNlbmFyaW9HcmFuZGU1ODVVcmw6IGNmZz8uY2VuYXJpb0dyYW5kZTU4NVVybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuY2VuYXJpb0dyYW5kZTU4NVVybCxcbiAgICBjbGFzc2VGaWVsZDI0NTogY2ZnPy5jbGFzc2VGaWVsZDI0NSB8fCAnY2xhc3NlXzI0NScsXG4gICAgY2xhc3NlRmllbGQ1ODU6IGNmZz8uY2xhc3NlRmllbGQ1ODUgfHwgJ2NsYXNzZV81ODUnLFxuICAgIHBucmgyRmllbGQ6IGNmZz8ucG5yaDJGaWVsZCB8fCAncG5yaDInLFxuICAgIHN1YkJhY2lhRmllbGQ6IGNmZz8uc3ViQmFjaWFGaWVsZCB8fCAnc3ViX2JhY2lhJyxcbiAgICBjbGFzc2VGaWVsZDogY2ZnPy5jbGFzc2VGaWVsZCB8fCAnY2xhc3NlJyxcbiAgICB6b29tTGF5ZXI6IGNmZz8uem9vbUxheWVyIHx8ICdzdWJiYWNpYXMnLFxuICAgIHNlcnZlclVybDogY2ZnPy5zZXJ2ZXJVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLnNlcnZlclVybCxcbiAgICB0b2tlbjogY2ZnPy50b2tlbiB8fCBERUZBVUxUX0xBWUVSX1VSTFMudG9rZW4sXG4gICAgbGVmdE1hcFdpZGdldElkOiBjZmc/LmxlZnRNYXBXaWRnZXRJZCxcbiAgICByaWdodE1hcFdpZGdldElkOiBjZmc/LnJpZ2h0TWFwV2lkZ2V0SWRcbiAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAodTogc3RyaW5nKSA9PiAodSB8fCAnJykucmVwbGFjZSgvXFwvKyQvLCAnJykudG9Mb3dlckNhc2UoKVxuXG5leHBvcnQgY29uc3QgZXNjYXBlU3FsID0gKHY6IHN0cmluZykgPT4gdi5yZXBsYWNlKC8nL2csIFwiJydcIilcblxuZXhwb3J0IGNvbnN0IGJ1aWxkV2hlcmUgPSAoY29uZmlnOiBDb25maWcsIHBucmgyOiBzdHJpbmcsIHN1YkJhY2lhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuICBpZiAocG5yaDIpIHBhcnRzLnB1c2goYCR7Y29uZmlnLnBucmgyRmllbGR9ID0gJyR7ZXNjYXBlU3FsKHBucmgyKX0nYClcbiAgaWYgKHN1YkJhY2lhKSBwYXJ0cy5wdXNoKGAke2NvbmZpZy5zdWJCYWNpYUZpZWxkfSA9ICcke2VzY2FwZVNxbChzdWJCYWNpYSl9J2ApXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPT09IDAgPyAnMT0xJyA6IHBhcnRzLmpvaW4oJyBBTkQgJylcbn1cblxuY29uc3QgZW1wdHlMYXllcnMgPSAoKTogTGF5ZXJSZWZzID0+ICh7XG4gIHN1YkJhY2lhczogbnVsbCxcbiAgaW5kaWNlOiBudWxsLFxuICBjZW5hcmlvR3JhbmRlMjQ1OiBudWxsLFxuICBjZW5hcmlvR3JhbmRlNTg1OiBudWxsXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdE1hcExheWVycyAoXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcbiAgY29uZmlnOiBDb25maWdcbik6IFByb21pc2U8TWFwTGF5ZXJTdGF0ZT4ge1xuICBjb25zdCBbRmVhdHVyZUxheWVyLCBJZGVudGl0eU1hbmFnZXJdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4gICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xuICBdKVxuXG4gIGlmIChjb25maWcudG9rZW4gJiYgY29uZmlnLnNlcnZlclVybCkge1xuICAgIHRyeSB7XG4gICAgICBJZGVudGl0eU1hbmFnZXIucmVnaXN0ZXJUb2tlbih7XG4gICAgICAgIHNlcnZlcjogY29uZmlnLnNlcnZlclVybCxcbiAgICAgICAgdG9rZW46IGNvbmZpZy50b2tlbixcbiAgICAgICAgc3NsOiBjb25maWcuc2VydmVyVXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gcmVnaXN0ZXJUb2tlbiBmYWlsZWQnLCBlKVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcud2hlbigpLFxuICAgICAgbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKCd2aWV3IHRpbWVvdXQnKSksIDE1MDAwKSlcbiAgICBdKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gdmlldy53aGVuJywgZSlcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXcubWFwXG4gIGNvbnN0IGluaXRpYWxWaWV3cG9pbnQgPSBqaW11TWFwVmlldy52aWV3LnZpZXdwb2ludD8uY2xvbmUoKSA/PyBudWxsXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHtcbiAgICBzdWI6IG5vcm1hbGl6ZShjb25maWcuc3ViQmFjaWFzVXJsKSxcbiAgICBpbmQ6IG5vcm1hbGl6ZShjb25maWcuaW5kaWNlVXJsKSxcbiAgICBjMjQ1OiBub3JtYWxpemUoY29uZmlnLmNlbmFyaW9HcmFuZGUyNDVVcmwpLFxuICAgIGM1ODU6IG5vcm1hbGl6ZShjb25maWcuY2VuYXJpb0dyYW5kZTU4NVVybClcbiAgfVxuXG4gIGNvbnN0IGZpbmRCeVVybCA9ICh0YXJnZXQ6IHN0cmluZyk6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0+IHtcbiAgICBsZXQgZm91bmQ6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0gbnVsbFxuICAgIG1hcC5hbGxMYXllcnMuZm9yRWFjaCgobGF5ZXI6IGFueSkgPT4ge1xuICAgICAgaWYgKGZvdW5kKSByZXR1cm5cbiAgICAgIGlmIChsYXllcj8udHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnVybCkge1xuICAgICAgICBjb25zdCBsYXllclVybCA9IGxheWVyLmxheWVySWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gYCR7bGF5ZXIudXJsfS8ke2xheWVyLmxheWVySWR9YFxuICAgICAgICAgIDogbGF5ZXIudXJsXG4gICAgICAgIGlmIChub3JtYWxpemUobGF5ZXJVcmwpID09PSB0YXJnZXQpIGZvdW5kID0gbGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllclxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvdW5kXG4gIH1cblxuICBjb25zdCBlbnN1cmVMYXllciA9IChcbiAgICBleGlzdGluZzogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB2aXNpYmxlID0gdHJ1ZVxuICApOiB7IGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLCBvd25lZDogYm9vbGVhbiB9ID0+IHtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGxheWVyOiBleGlzdGluZywgb3duZWQ6IGZhbHNlIH1cbiAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmwsIHRpdGxlLCBvdXRGaWVsZHM6IFsnKiddLCB2aXNpYmxlIH0pXG4gICAgbWFwLmFkZChsYXllcilcbiAgICByZXR1cm4geyBsYXllciwgb3duZWQ6IHRydWUgfVxuICB9XG5cbiAgY29uc3Qgc3ViUmVzdWx0ID0gZW5zdXJlTGF5ZXIoZmluZEJ5VXJsKHRhcmdldHMuc3ViKSwgY29uZmlnLnN1YkJhY2lhc1VybCwgJ1N1Yi1iYWNpYXMnLCB0cnVlKVxuICBjb25zdCBpbmRSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5pbmQpLCBjb25maWcuaW5kaWNlVXJsLCAnw41uZGljZSBkZSBDb25mbGl0bycsIHRydWUpXG4gIGNvbnN0IGMyNDVSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5jMjQ1KSwgY29uZmlnLmNlbmFyaW9HcmFuZGUyNDVVcmwsICdDZW7DoXJpbyBNb2RlcmFkbyAtIFJpbyBHcmFuZGUnLCBmYWxzZSlcbiAgY29uc3QgYzU4NVJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmM1ODUpLCBjb25maWcuY2VuYXJpb0dyYW5kZTU4NVVybCwgJ0NlbsOhcmlvIFBlc3NpbWlzdGEgLSBSaW8gR3JhbmRlJywgZmFsc2UpXG5cbiAgc3ViUmVzdWx0LmxheWVyLm9wYWNpdHkgPSAwLjZcblxuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgc3ViUmVzdWx0LmxheWVyLmxvYWQoKSxcbiAgICBpbmRSZXN1bHQubGF5ZXIubG9hZCgpXG4gIF0pXG5cbiAgYXdhaXQgYzI0NVJlc3VsdC5sYXllci5sb2FkKCkuY2F0Y2goKCkgPT4ge30pXG4gIGF3YWl0IGM1ODVSZXN1bHQubGF5ZXIubG9hZCgpLmNhdGNoKCgpID0+IHt9KVxuXG4gIGNvbnN0IHdpZGdldFVybHMgPSBuZXcgU2V0KFt0YXJnZXRzLnN1YiwgdGFyZ2V0cy5pbmQsIHRhcmdldHMuYzI0NSwgdGFyZ2V0cy5jNTg1XSlcbiAgY29uc3QgZXh0cmFMYXllcnM6IEFycmF5PHsgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsIG9yaWdpbmFsVmlzaWJsZTogYm9vbGVhbiB9PiA9IFtdXG4gIGNvbnN0IGlzRXh0cmEgPSAodGl0bGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHQgPSAodGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gL3Bpdltvw7RdL2kudGVzdCh0KSB8fCAvbWljcm9iYWMvaS50ZXN0KHQpIHx8IC9pcnJpZ2FkL2kudGVzdCh0KVxuICB9XG4gIG1hcC5hbGxMYXllcnMuZm9yRWFjaCgobGF5ZXI6IGFueSkgPT4ge1xuICAgIGlmIChsYXllcj8udHlwZSAhPT0gJ2ZlYXR1cmUnKSByZXR1cm5cbiAgICBjb25zdCBsYXllclVybCA9IGxheWVyLnVybFxuICAgICAgPyAobGF5ZXIubGF5ZXJJZCAhPT0gdW5kZWZpbmVkID8gYCR7bGF5ZXIudXJsfS8ke2xheWVyLmxheWVySWR9YCA6IGxheWVyLnVybClcbiAgICAgIDogJydcbiAgICBpZiAod2lkZ2V0VXJscy5oYXMobm9ybWFsaXplKGxheWVyVXJsKSkpIHJldHVyblxuICAgIGlmIChpc0V4dHJhKGxheWVyLnRpdGxlKSkge1xuICAgICAgZXh0cmFMYXllcnMucHVzaCh7IGxheWVyLCBvcmlnaW5hbFZpc2libGU6ICEhbGF5ZXIudmlzaWJsZSB9KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGxheWVyczoge1xuICAgICAgc3ViQmFjaWFzOiBzdWJSZXN1bHQubGF5ZXIsXG4gICAgICBpbmRpY2U6IGluZFJlc3VsdC5sYXllcixcbiAgICAgIGNlbmFyaW9HcmFuZGUyNDU6IGMyNDVSZXN1bHQubGF5ZXIsXG4gICAgICBjZW5hcmlvR3JhbmRlNTg1OiBjNTg1UmVzdWx0LmxheWVyXG4gICAgfSxcbiAgICBvd25lZDoge1xuICAgICAgc3ViQmFjaWFzOiBzdWJSZXN1bHQub3duZWQsXG4gICAgICBpbmRpY2U6IGluZFJlc3VsdC5vd25lZCxcbiAgICAgIGNlbmFyaW9HcmFuZGUyNDU6IGMyNDVSZXN1bHQub3duZWQsXG4gICAgICBjZW5hcmlvR3JhbmRlNTg1OiBjNTg1UmVzdWx0Lm93bmVkXG4gICAgfSxcbiAgICBleHRyYUxheWVycyxcbiAgICBpbml0aWFsVmlld3BvaW50LFxuICAgIHJlYWR5OiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU93bmVkTGF5ZXJzIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcgfCBudWxsLCBzdGF0ZTogTWFwTGF5ZXJTdGF0ZSB8IG51bGwpIHtcbiAgaWYgKCFqaW11TWFwVmlldyB8fCAhc3RhdGUpIHJldHVyblxuICBjb25zdCBtYXAgPSBqaW11TWFwVmlldy52aWV3Py5tYXBcbiAgaWYgKCFtYXApIHJldHVyblxuICBjb25zdCB7IGxheWVycywgb3duZWQgfSA9IHN0YXRlXG4gIGlmIChsYXllcnMuc3ViQmFjaWFzICYmIG93bmVkLnN1YkJhY2lhcykgbWFwLnJlbW92ZShsYXllcnMuc3ViQmFjaWFzKVxuICBpZiAobGF5ZXJzLmluZGljZSAmJiBvd25lZC5pbmRpY2UpIG1hcC5yZW1vdmUobGF5ZXJzLmluZGljZSlcbiAgaWYgKGxheWVycy5jZW5hcmlvR3JhbmRlMjQ1ICYmIG93bmVkLmNlbmFyaW9HcmFuZGUyNDUpIG1hcC5yZW1vdmUobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUpXG4gIGlmIChsYXllcnMuY2VuYXJpb0dyYW5kZTU4NSAmJiBvd25lZC5jZW5hcmlvR3JhbmRlNTg1KSBtYXAucmVtb3ZlKGxheWVycy5jZW5hcmlvR3JhbmRlNTg1KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwbHlTY2VuYXJpb1RvTWFwIChcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxuICBzdGF0ZTogTWFwTGF5ZXJTdGF0ZSxcbiAgY29uZmlnOiBDb25maWcsXG4gIGNlbmFyaW86IENlbmFyaW9JZCxcbiAgcG5yaDI6IHN0cmluZyxcbiAgc3ViQmFjaWE6IHN0cmluZyxcbiAgem9vbSA9IHRydWVcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHN1YkJhY2lhcywgaW5kaWNlLCBjZW5hcmlvR3JhbmRlMjQ1LCBjZW5hcmlvR3JhbmRlNTg1IH0gPSBzdGF0ZS5sYXllcnNcbiAgaWYgKCFpbmRpY2UgfHwgIXN1YkJhY2lhcykgcmV0dXJuXG5cbiAgY29uc3QgaXNBdHVhbCA9IGNlbmFyaW8gPT09ICdhdHVhbCdcbiAgaW5kaWNlLnZpc2libGUgPSBpc0F0dWFsXG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSBjZW5hcmlvR3JhbmRlMjQ1LnZpc2libGUgPSBjZW5hcmlvID09PSAnc3NwMjQ1J1xuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkgY2VuYXJpb0dyYW5kZTU4NS52aXNpYmxlID0gY2VuYXJpbyA9PT0gJ3NzcDU4NSdcblxuICBjb25zdCBpbkNlbmFyaW9Nb2RlID0gY2VuYXJpbyAhPT0gJ2F0dWFsJyB8fCBCb29sZWFuKHBucmgyKSB8fCBCb29sZWFuKHN1YkJhY2lhKVxuICBzdGF0ZS5leHRyYUxheWVycy5mb3JFYWNoKCh7IGxheWVyLCBvcmlnaW5hbFZpc2libGUgfSkgPT4ge1xuICAgIHRyeSB7IGxheWVyLnZpc2libGUgPSBpbkNlbmFyaW9Nb2RlID8gZmFsc2UgOiBvcmlnaW5hbFZpc2libGUgfSBjYXRjaCB7fVxuICB9KVxuXG4gIGNvbnN0IHdoZXJlID0gYnVpbGRXaGVyZShjb25maWcsIHBucmgyLCBzdWJCYWNpYSlcbiAgY29uc3QgZXhwcmVzc2lvbiA9IHdoZXJlICE9PSAnMT0xJyA/IHdoZXJlIDogJydcblxuICBpbmRpY2UuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSBjZW5hcmlvR3JhbmRlMjQ1LmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkgY2VuYXJpb0dyYW5kZTU4NS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25cbiAgc3ViQmFjaWFzLmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuXG4gIGlmICghem9vbSkgcmV0dXJuXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB6b29tTGF5ZXIgPSBjb25maWcuem9vbUxheWVyID09PSAnaW5kaWNlJyA/IGluZGljZSA6IHN1YkJhY2lhc1xuICAgIGNvbnN0IHpvb21XaGVyZSA9IGV4cHJlc3Npb24gfHwgJzE9MSdcbiAgICBjb25zdCBleHRlbnRSZXN1bHQgPSBhd2FpdCB6b29tTGF5ZXIucXVlcnlFeHRlbnQoeyB3aGVyZTogem9vbVdoZXJlIH0pXG4gICAgaWYgKGV4dGVudFJlc3VsdD8uZXh0ZW50KSB7XG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xuICAgICAgY29uc3QgdGFyZ2V0RXh0ZW50ID0gZXh0ZW50UmVzdWx0LmV4dGVudC5leHBhbmQoMS4yKVxuICAgICAgYXdhaXQgdmlldy5nb1RvKHRhcmdldEV4dGVudClcbiAgICAgIGNvbnN0IGxpbWl0U2NhbGUgPSBNYXRoLm1heChzdWJCYWNpYXMubWF4U2NhbGUgfHwgMCwgaW5kaWNlLm1heFNjYWxlIHx8IDApXG4gICAgICBpZiAobGltaXRTY2FsZSA+IDAgJiYgdmlldy5zY2FsZSA8IGxpbWl0U2NhbGUpIHtcbiAgICAgICAgYXdhaXQgdmlldy5nb1RvKHsgdGFyZ2V0OiB0YXJnZXRFeHRlbnQuY2VudGVyLCBzY2FsZTogbGltaXRTY2FsZSAqIDEuMSB9KVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignW2NvbXBhcmUtY2VuYXJpb3NdIHpvb20gZXJyb3InLCBlKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN0b3JlSW5pdGlhbFZpZXcgKFxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXG4gIHN0YXRlOiBNYXBMYXllclN0YXRlXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBzdWJCYWNpYXMsIGluZGljZSwgY2VuYXJpb0dyYW5kZTI0NSwgY2VuYXJpb0dyYW5kZTU4NSB9ID0gc3RhdGUubGF5ZXJzXG4gIGlmIChpbmRpY2UpIHtcbiAgICBpbmRpY2UudmlzaWJsZSA9IHRydWVcbiAgICBpbmRpY2UuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xuICB9XG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSB7XG4gICAgY2VuYXJpb0dyYW5kZTI0NS52aXNpYmxlID0gZmFsc2VcbiAgICBjZW5hcmlvR3JhbmRlMjQ1LmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgfVxuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkge1xuICAgIGNlbmFyaW9HcmFuZGU1ODUudmlzaWJsZSA9IGZhbHNlXG4gICAgY2VuYXJpb0dyYW5kZTU4NS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXG4gIH1cbiAgaWYgKHN1YkJhY2lhcykgc3ViQmFjaWFzLmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgc3RhdGUuZXh0cmFMYXllcnMuZm9yRWFjaCgoeyBsYXllciwgb3JpZ2luYWxWaXNpYmxlIH0pID0+IHtcbiAgICB0cnkgeyBsYXllci52aXNpYmxlID0gb3JpZ2luYWxWaXNpYmxlIH0gY2F0Y2gge31cbiAgfSlcbiAgaWYgKHN0YXRlLmluaXRpYWxWaWV3cG9pbnQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgamltdU1hcFZpZXcudmlldy5nb1RvKHN0YXRlLmluaXRpYWxWaWV3cG9pbnQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gcmVzdG9yZSB2aWV3cG9pbnQnLCBlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEJhc2luT3B0aW9ucyAoXG4gIHN1YkJhY2lhczogX19lc3JpLkZlYXR1cmVMYXllcixcbiAgY29uZmlnOiBDb25maWdcbik6IFByb21pc2U8e1xuICBhbGxQbnJoMjogc3RyaW5nW11cbiAgYWxsU3ViQmFjaWFzOiBzdHJpbmdbXVxuICBzdWJCYWNpYVRvUG5yaDI6IE1hcDxzdHJpbmcsIHN0cmluZz5cbiAgcG5yaDJUb1N1YkJhY2lhczogTWFwPHN0cmluZywgc3RyaW5nW10+XG59PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1YkJhY2lhcy5xdWVyeUZlYXR1cmVzKHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbY29uZmlnLnBucmgyRmllbGQsIGNvbmZpZy5zdWJCYWNpYUZpZWxkXSxcbiAgICByZXR1cm5EaXN0aW5jdFZhbHVlczogdHJ1ZSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgb3JkZXJCeUZpZWxkczogW2NvbmZpZy5wbnJoMkZpZWxkLCBjb25maWcuc3ViQmFjaWFGaWVsZF1cbiAgfSlcblxuICBjb25zdCBzdWJCYWNpYVRvUG5yaDIgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIGNvbnN0IHBucmgyVG9TdWJCYWNpYXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KClcbiAgY29uc3QgYWxsUG5yaFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGFsbFN1YnNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGZvciAoY29uc3QgZmVhdCBvZiByZXN1bHQuZmVhdHVyZXMpIHtcbiAgICBjb25zdCBwID0gZmVhdC5hdHRyaWJ1dGVzPy5bY29uZmlnLnBucmgyRmllbGRdXG4gICAgY29uc3QgcyA9IGZlYXQuYXR0cmlidXRlcz8uW2NvbmZpZy5zdWJCYWNpYUZpZWxkXVxuICAgIGNvbnN0IHBTdHIgPSBwICE9IG51bGwgJiYgcCAhPT0gJycgPyBTdHJpbmcocCkgOiAnJ1xuICAgIGNvbnN0IHNTdHIgPSBzICE9IG51bGwgJiYgcyAhPT0gJycgPyBTdHJpbmcocykgOiAnJ1xuICAgIGlmIChwU3RyKSBhbGxQbnJoU2V0LmFkZChwU3RyKVxuICAgIGlmIChzU3RyKSBhbGxTdWJzU2V0LmFkZChzU3RyKVxuICAgIGlmIChwU3RyICYmIHNTdHIpIHtcbiAgICAgIHN1YkJhY2lhVG9QbnJoMi5zZXQoc1N0ciwgcFN0cilcbiAgICAgIGNvbnN0IGFyciA9IHBucmgyVG9TdWJCYWNpYXMuZ2V0KHBTdHIpIHx8IFtdXG4gICAgICBpZiAoIWFyci5pbmNsdWRlcyhzU3RyKSkgYXJyLnB1c2goc1N0cilcbiAgICAgIHBucmgyVG9TdWJCYWNpYXMuc2V0KHBTdHIsIGFycilcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFsbFBucmgyOiBBcnJheS5mcm9tKGFsbFBucmhTZXQpLnNvcnQoKSxcbiAgICBhbGxTdWJCYWNpYXM6IEFycmF5LmZyb20oYWxsU3Vic1NldCkuc29ydCgpLFxuICAgIHN1YkJhY2lhVG9QbnJoMixcbiAgICBwbnJoMlRvU3ViQmFjaWFzXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnQ29tcGFyYXIgQ2Vuw6FyaW9zJyxcbiAgc2VsZWN0TWFwc0ZpcnN0OiAnQ29uZmlndXJlIG9zIGRvaXMgbWFwYXMgbmFzIGNvbmZpZ3VyYcOnw7VlcyBkbyB3aWRnZXQuJyxcbiAgc2VsZWN0TGVmdE1hcDogJ1NlbGVjaW9uZSBvIG1hcGEgZGEgZXNxdWVyZGEnLFxuICBzZWxlY3RSaWdodE1hcDogJ1NlbGVjaW9uZSBvIG1hcGEgZGEgZGlyZWl0YScsXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJyxcbiAgcG5yaDJMYWJlbDogJ1NlbGVjaW9uZSBhIEJhY2lhIEhpZHJvZ3LDoWZpY2EnLFxuICBzdWJCYWNpYUxhYmVsOiAnU2VsZWNpb25lIGEgc3ViLWJhY2lhIGhpZHJvZ3LDoWZpY2EnLFxuICBzZWxlY3RQbnJoMjogJ1NlbGVjaW9uZScsXG4gIHNlbGVjdFN1YkJhY2lhOiAnU2VsZWNpb25lIHVtYSBzdWItYmFjaWEnLFxuICBtYXBMZWZ0TGFiZWw6ICdNYXBhIGVzcXVlcmRvIOKAlCBjZW7DoXJpbycsXG4gIG1hcFJpZ2h0TGFiZWw6ICdNYXBhIGRpcmVpdG8g4oCUIGNlbsOhcmlvJyxcbiAgY2VuYXJpb0F0dWFsOiAnQXR1YWwnLFxuICBjZW5hcmlvU3NwMjQ1OiAnTW9kZXJhZG8nLFxuICBjZW5hcmlvU3NwNTg1OiAnUGVzc2ltaXN0YScsXG4gIHNlbGVjdENlbmFyaW86ICdTZWxlY2lvbmUgdW0gY2Vuw6FyaW8nLFxuICBjbGVhcjogJ0xpbXBhciBmaWx0cm8nLFxuICBlcnJvckxvYWRpbmc6ICdFcnJvIGFvIGNhcnJlZ2FyIHZhbG9yZXMgZGFzIGNhbWFkYXMuJyxcbiAgZXJyb3JDb3JzOiAnRmFsaGEgZGUgQ09SUzogbyBzZXJ2aWRvciBBcmNHSVMgbsOjbyBwZXJtaXRlIGNoYW1hZGFzIGRlc3RhIG9yaWdlbS4nLFxuICBlcnJvckF1dGg6ICdBIGNhbWFkYSBleGlnZSBhdXRlbnRpY2HDp8Ojby4gQ29tcGFydGlsaGUgb3MgaXRlbnMgY29tbyBww7pibGljb3Mgb3UgZmHDp2EgbG9naW4uJyxcbiAgc2NlbmFyaW9XYXJuaW5nOiAnT3MgY2Vuw6FyaW9zIE1vZGVyYWRvIGUgUGVzc2ltaXN0YSBjb250w6ptIGFwZW5hcyBkYWRvcyBkYSBCYWNpYSBkbyBSaW8gR3JhbmRlLiBQYXJhIGNvbXBhcmFyIG9zIHRyw6pzIGNlbsOhcmlvcyBkZSBmb3JtYSBqdXN0YSwgc2VsZWNpb25lIGEgYmFjaWEgY29ycmVzcG9uZGVudGUgbm8gZmlsdHJvLicsXG4gIGNvbXBhcmVUaXRsZTogJ0NvbXBhcmFyIGNlbsOhcmlvcycsXG4gIHN5bmNWaWV3czogJ1NpbmNyb25pemFyIGV4dGVuc8OjbyBkb3MgbWFwYXMnLFxuICBsZWdlbmRUaXRsZTogJ0xlZ2VuZGEnLFxuICBsZWdlbmRFbXB0eTogJ0xlZ2VuZGEgaW5kaXNwb27DrXZlbCDigJQgYWd1YXJkZSBvIGNhcnJlZ2FtZW50byBkYXMgY2FtYWRhcy4nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJy4vY29tcG9uZW50cy9Ecm9wZG93bidcbmltcG9ydCB7IExheWVyTGVnZW5kIH0gZnJvbSAnLi9jb21wb25lbnRzL0xheWVyTGVnZW5kJ1xuaW1wb3J0IHtcbiAgdHlwZSBDZW5hcmlvSWQsXG4gIHR5cGUgTWFwTGF5ZXJTdGF0ZSxcbiAgYXBwbHlTY2VuYXJpb1RvTWFwLFxuICBpbml0TWFwTGF5ZXJzLFxuICBsb2FkQmFzaW5PcHRpb25zLFxuICBtZXJnZUNvbmZpZyxcbiAgcmVtb3ZlT3duZWRMYXllcnMsXG4gIHJlc3RvcmVJbml0aWFsVmlld1xufSBmcm9tICcuL21hcExheWVycydcbmltcG9ydCB7IGJ1aWxkTGVnZW5kR3JvdXBzLCB0eXBlIExlZ2VuZEdyb3VwIH0gZnJvbSAnLi9sZWdlbmRVdGlscydcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gPSBSZWFjdFxuXG5jb25zdCBjZW5hcmlvTGFiZWwgPSAoaWQ6IENlbmFyaW9JZCk6IHN0cmluZyA9PiB7XG4gIGlmIChpZCA9PT0gJ3NzcDI0NScpIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NVxuICBpZiAoaWQgPT09ICdzc3A1ODUnKSByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbiAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvQXR1YWxcbn1cblxuY29uc3QgbGFiZWxUb0NlbmFyaW8gPSAobGFiZWw6IHN0cmluZyk6IENlbmFyaW9JZCA9PiB7XG4gIGlmIChsYWJlbCA9PT0gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3AyNDUpIHJldHVybiAnc3NwMjQ1J1xuICBpZiAobGFiZWwgPT09IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwNTg1KSByZXR1cm4gJ3NzcDU4NSdcbiAgcmV0dXJuICdhdHVhbCdcbn1cblxuY29uc3QgQ0VOQVJJT19PUFRJT05TID0gW1xuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb0F0dWFsLFxuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NSxcbiAgZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbl1cblxuaW50ZXJmYWNlIE1hcFNsb3Qge1xuICBqbXY6IEppbXVNYXBWaWV3IHwgbnVsbFxuICBsYXllclN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgY29uZmlnID0gbWVyZ2VDb25maWcocHJvcHMuY29uZmlnIGFzIFBhcnRpYWw8SU1Db25maWc+IHwgdW5kZWZpbmVkKVxuXG4gIGNvbnN0IGxlZnRNYXBJZCA9IGNvbmZpZy5sZWZ0TWFwV2lkZ2V0SWQgfHwgcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF0gfHwgJydcbiAgY29uc3QgcmlnaHRNYXBJZCA9IGNvbmZpZy5yaWdodE1hcFdpZGdldElkIHx8IHByb3BzLnVzZU1hcFdpZGdldElkcz8uWzFdIHx8ICcnXG5cbiAgY29uc3QgW2xlZnQsIHNldExlZnRdID0gdXNlU3RhdGU8TWFwU2xvdD4oeyBqbXY6IG51bGwsIGxheWVyU3RhdGU6IG51bGwgfSlcbiAgY29uc3QgW3JpZ2h0LCBzZXRSaWdodF0gPSB1c2VTdGF0ZTxNYXBTbG90Pih7IGptdjogbnVsbCwgbGF5ZXJTdGF0ZTogbnVsbCB9KVxuXG4gIGNvbnN0IFthbGxQbnJoMiwgc2V0QWxsUG5yaDJdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbYWxsU3ViQmFjaWFzLCBzZXRBbGxTdWJCYWNpYXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbc2VsZWN0ZWRQbnJoMiwgc2V0U2VsZWN0ZWRQbnJoMl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlbGVjdGVkU3ViQmFjaWEsIHNldFNlbGVjdGVkU3ViQmFjaWFdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjZW5hcmlvTGVmdCwgc2V0Q2VuYXJpb0xlZnRdID0gdXNlU3RhdGU8Q2VuYXJpb0lkPignYXR1YWwnKVxuICBjb25zdCBbY2VuYXJpb1JpZ2h0LCBzZXRDZW5hcmlvUmlnaHRdID0gdXNlU3RhdGU8Q2VuYXJpb0lkPignYXR1YWwnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N5bmNWaWV3cywgc2V0U3luY1ZpZXdzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtsZWdlbmRHcm91cHMsIHNldExlZ2VuZEdyb3Vwc10gPSB1c2VTdGF0ZTxMZWdlbmRHcm91cFtdPihbXSlcblxuICBjb25zdCBzdWJCYWNpYVRvUG5yaDJSZWYgPSB1c2VSZWY8TWFwPHN0cmluZywgc3RyaW5nPj4obmV3IE1hcCgpKVxuICBjb25zdCBwbnJoMlRvU3ViQmFjaWFzUmVmID0gdXNlUmVmPE1hcDxzdHJpbmcsIHN0cmluZ1tdPj4obmV3IE1hcCgpKVxuICBjb25zdCBzeW5jaW5nUmVmID0gdXNlUmVmKGZhbHNlKVxuICBjb25zdCBpbml0aWFsVmlld1N5bmNlZFJlZiA9IHVzZVJlZihmYWxzZSlcblxuICBjb25zdCBoYXNCb3RoTWFwcyA9IEJvb2xlYW4obGVmdE1hcElkICYmIHJpZ2h0TWFwSWQpXG5cbiAgY29uc3QgZGV0ZWN0RXJyb3IgPSAoZXJyOiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBlID0gZXJyIGFzIHsgbWVzc2FnZT86IHN0cmluZywgZGV0YWlscz86IHsgaHR0cFN0YXR1cz86IG51bWJlciwgZXJyb3I/OiB7IG1lc3NhZ2U/OiBzdHJpbmcgfSB9IH1cbiAgICBjb25zdCBtc2cgPSBgJHtlPy5tZXNzYWdlIHx8ICcnfSAke2U/LmRldGFpbHM/LmVycm9yPy5tZXNzYWdlIHx8ICcnfWAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChtc2cuaW5jbHVkZXMoJ2NvcnMnKSB8fCBtc2cuaW5jbHVkZXMoJ2Nyb3NzLW9yaWdpbicpIHx8IG1zZy5pbmNsdWRlcygnbmV0d29yaycpKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmVycm9yQ29yc1xuICAgIH1cbiAgICBpZiAobXNnLmluY2x1ZGVzKCd0b2tlbicpIHx8IG1zZy5pbmNsdWRlcygndW5hdXRob3JpemVkJykgfHwgZT8uZGV0YWlscz8uaHR0cFN0YXR1cyA9PT0gNDAxIHx8IGU/LmRldGFpbHM/Lmh0dHBTdGF0dXMgPT09IDQwMykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5lcnJvckF1dGhcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5lcnJvckxvYWRpbmdcbiAgfVxuXG4gIGNvbnN0IGxvYWRPcHRpb25zRnJvbU1hcCA9IHVzZUNhbGxiYWNrKGFzeW5jIChsYXllclN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbCkgPT4ge1xuICAgIGlmICghbGF5ZXJTdGF0ZT8ubGF5ZXJzLnN1YkJhY2lhcykgcmV0dXJuXG4gICAgY29uc3Qgb3B0cyA9IGF3YWl0IGxvYWRCYXNpbk9wdGlvbnMobGF5ZXJTdGF0ZS5sYXllcnMuc3ViQmFjaWFzLCBjb25maWcpXG4gICAgc3ViQmFjaWFUb1BucmgyUmVmLmN1cnJlbnQgPSBvcHRzLnN1YkJhY2lhVG9QbnJoMlxuICAgIHBucmgyVG9TdWJCYWNpYXNSZWYuY3VycmVudCA9IG9wdHMucG5yaDJUb1N1YkJhY2lhc1xuICAgIHNldEFsbFBucmgyKG9wdHMuYWxsUG5yaDIpXG4gICAgc2V0QWxsU3ViQmFjaWFzKG9wdHMuYWxsU3ViQmFjaWFzKVxuICB9LCBbY29uZmlnXSlcblxuICBjb25zdCBhcHBseVRvQm90aE1hcHMgPSB1c2VDYWxsYmFjayhhc3luYyAoXG4gICAgcG5yaDI6IHN0cmluZyxcbiAgICBzdWJCYWNpYTogc3RyaW5nLFxuICAgIGxlZnRDZW5hcmlvOiBDZW5hcmlvSWQsXG4gICAgcmlnaHRDZW5hcmlvOiBDZW5hcmlvSWQsXG4gICAgem9vbSA9IHRydWVcbiAgKSA9PiB7XG4gICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGxlZnQuam12ICYmIGxlZnQubGF5ZXJTdGF0ZSkge1xuICAgICAgdGFza3MucHVzaChhcHBseVNjZW5hcmlvVG9NYXAobGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSwgY29uZmlnLCBsZWZ0Q2VuYXJpbywgcG5yaDIsIHN1YkJhY2lhLCB6b29tKSlcbiAgICB9XG4gICAgaWYgKHJpZ2h0LmptdiAmJiByaWdodC5sYXllclN0YXRlKSB7XG4gICAgICB0YXNrcy5wdXNoKGFwcGx5U2NlbmFyaW9Ub01hcChyaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUsIGNvbmZpZywgcmlnaHRDZW5hcmlvLCBwbnJoMiwgc3ViQmFjaWEsIHpvb20pKVxuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcylcbiAgfSwgW2xlZnQuam12LCBsZWZ0LmxheWVyU3RhdGUsIHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSwgY29uZmlnXSlcblxuICBjb25zdCBpbml0U2xvdCA9IHVzZUNhbGxiYWNrKGFzeW5jIChcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxuICAgIHNldHRlcjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248TWFwU2xvdD4+LFxuICAgIGlzUHJpbWFyeUZvck9wdGlvbnM6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHNldEVycm9yKCcnKVxuICAgICAgY29uc3QgbGF5ZXJTdGF0ZSA9IGF3YWl0IGluaXRNYXBMYXllcnMoam12LCBjb25maWcpXG4gICAgICBzZXR0ZXIoeyBqbXYsIGxheWVyU3RhdGUgfSlcbiAgICAgIGlmIChpc1ByaW1hcnlGb3JPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IGxvYWRPcHRpb25zRnJvbU1hcChsYXllclN0YXRlKVxuICAgICAgICBzZXRMZWdlbmRHcm91cHMoYnVpbGRMZWdlbmRHcm91cHMobGF5ZXJTdGF0ZS5sYXllcnMpKVxuICAgICAgfVxuICAgICAgYXdhaXQgYXBwbHlTY2VuYXJpb1RvTWFwKGptdiwgbGF5ZXJTdGF0ZSwgY29uZmlnLCAnYXR1YWwnLCAnJywgJycsIGZhbHNlKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjb21wYXJlLWNlbmFyaW9zXSBpbml0JywgZSlcbiAgICAgIHNldEVycm9yKGRldGVjdEVycm9yKGUpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW2NvbmZpZywgbG9hZE9wdGlvbnNGcm9tTWFwXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWxWaWV3U3luY2VkUmVmLmN1cnJlbnQgPSBmYWxzZVxuICB9LCBbbGVmdE1hcElkLCByaWdodE1hcElkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGVmdC5qbXYgfHwgbGVmdC5sYXllclN0YXRlKSByZXR1cm5cbiAgICB2b2lkIGluaXRTbG90KGxlZnQuam12LCBzZXRMZWZ0LCB0cnVlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVPd25lZExheWVycyhsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlKVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtsZWZ0Lmptdl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJpZ2h0LmptdiB8fCByaWdodC5sYXllclN0YXRlKSByZXR1cm5cbiAgICB2b2lkIGluaXRTbG90KHJpZ2h0Lmptdiwgc2V0UmlnaHQsIGZhbHNlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVPd25lZExheWVycyhyaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3JpZ2h0Lmptdl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxlZnQubGF5ZXJTdGF0ZSB8fCAhcmlnaHQubGF5ZXJTdGF0ZSB8fCAhbGVmdC5qbXYgfHwgIXJpZ2h0LmptdikgcmV0dXJuXG5cbiAgICBjb25zdCBzeW5jSW5pdGlhbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghaW5pdGlhbFZpZXdTeW5jZWRSZWYuY3VycmVudCkge1xuICAgICAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMoJycsICcnLCAnYXR1YWwnLCAnYXR1YWwnLCBmYWxzZSlcbiAgICAgICAgY29uc3QgdnAgPSBsZWZ0LmxheWVyU3RhdGUuaW5pdGlhbFZpZXdwb2ludFxuICAgICAgICBpZiAodnApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICBsZWZ0Lmptdi52aWV3LmdvVG8odnApLFxuICAgICAgICAgICAgICByaWdodC5qbXYudmlldy5nb1RvKHZwKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSBzeW5jIGluaXRpYWwgdmlldycsIGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxWaWV3U3luY2VkUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgYXdhaXQgYXBwbHlUb0JvdGhNYXBzKHNlbGVjdGVkUG5yaDIsIHNlbGVjdGVkU3ViQmFjaWEsIGNlbmFyaW9MZWZ0LCBjZW5hcmlvUmlnaHQpXG4gICAgfVxuICAgIHZvaWQgc3luY0luaXRpYWwoKVxuICB9LCBbY2VuYXJpb0xlZnQsIGNlbmFyaW9SaWdodCwgc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgbGVmdC5sYXllclN0YXRlLCByaWdodC5sYXllclN0YXRlLCBsZWZ0LmptdiwgcmlnaHQuam12LCBhcHBseVRvQm90aE1hcHNdKVxuXG4gIGNvbnN0IGhhc0FjdGl2ZUZpbHRlciA9IEJvb2xlYW4oXG4gICAgc2VsZWN0ZWRQbnJoMiB8fCBzZWxlY3RlZFN1YkJhY2lhIHx8IGNlbmFyaW9MZWZ0ICE9PSAnYXR1YWwnIHx8IGNlbmFyaW9SaWdodCAhPT0gJ2F0dWFsJ1xuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN5bmNWaWV3cyB8fCAhbGVmdC5qbXYgfHwgIXJpZ2h0LmptdikgcmV0dXJuXG5cbiAgICBjb25zdCBsZWZ0VmlldyA9IGxlZnQuam12LnZpZXdcbiAgICBjb25zdCByaWdodFZpZXcgPSByaWdodC5qbXYudmlld1xuXG4gICAgY29uc3Qgc3luY0Zyb21MZWZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHN5bmNpbmdSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgICBzeW5jaW5nUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCByaWdodFZpZXcuZ29Ubyh7XG4gICAgICAgICAgY2VudGVyOiBsZWZ0Vmlldy5jZW50ZXIsXG4gICAgICAgICAgc2NhbGU6IGxlZnRWaWV3LnNjYWxlLFxuICAgICAgICAgIHJvdGF0aW9uOiBsZWZ0Vmlldy5yb3RhdGlvblxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCB7fVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBzeW5jaW5nUmVmLmN1cnJlbnQgPSBmYWxzZSB9LCAzMDApXG4gICAgfVxuXG4gICAgY29uc3QgaDEgPSBsZWZ0Vmlldy53YXRjaCgnZXh0ZW50Jywgc3luY0Zyb21MZWZ0KVxuICAgIHJldHVybiAoKSA9PiB7IGgxLnJlbW92ZSgpIH1cbiAgfSwgW3N5bmNWaWV3cywgbGVmdC5qbXYsIHJpZ2h0Lmptdl0pXG5cbiAgY29uc3Qgb25QbnJoMlNlbGVjdCA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRQbnJoMih2YWx1ZSlcbiAgICBsZXQgc3ViQmFjaWEgPSBzZWxlY3RlZFN1YkJhY2lhXG4gICAgaWYgKHN1YkJhY2lhICYmIHZhbHVlKSB7XG4gICAgICBjb25zdCBzdWJzID0gcG5yaDJUb1N1YkJhY2lhc1JlZi5jdXJyZW50LmdldCh2YWx1ZSkgfHwgW11cbiAgICAgIGlmICghc3Vicy5pbmNsdWRlcyhzdWJCYWNpYSkpIHtcbiAgICAgICAgc3ViQmFjaWEgPSAnJ1xuICAgICAgICBzZXRTZWxlY3RlZFN1YkJhY2lhKCcnKVxuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBhcHBseVRvQm90aE1hcHModmFsdWUsIHN1YkJhY2lhLCBjZW5hcmlvTGVmdCwgY2VuYXJpb1JpZ2h0KVxuICB9XG5cbiAgY29uc3Qgb25TdWJCYWNpYVNlbGVjdCA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSh2YWx1ZSlcbiAgICBsZXQgcG5yaDIgPSBzZWxlY3RlZFBucmgyXG4gICAgaWYgKHZhbHVlICYmICFwbnJoMikge1xuICAgICAgY29uc3QgYXV0byA9IHN1YkJhY2lhVG9QbnJoMlJlZi5jdXJyZW50LmdldCh2YWx1ZSlcbiAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgIHBucmgyID0gYXV0b1xuICAgICAgICBzZXRTZWxlY3RlZFBucmgyKGF1dG8pXG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IGFwcGx5VG9Cb3RoTWFwcyhwbnJoMiwgdmFsdWUsIGNlbmFyaW9MZWZ0LCBjZW5hcmlvUmlnaHQpXG4gIH1cblxuICBjb25zdCBvbkNlbmFyaW9MZWZ0U2VsZWN0ID0gYXN5bmMgKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpZCA9IGxhYmVsVG9DZW5hcmlvKGxhYmVsKVxuICAgIHNldENlbmFyaW9MZWZ0KGlkKVxuICAgIGF3YWl0IGFwcGx5VG9Cb3RoTWFwcyhzZWxlY3RlZFBucmgyLCBzZWxlY3RlZFN1YkJhY2lhLCBpZCwgY2VuYXJpb1JpZ2h0LCBmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2VuYXJpb1JpZ2h0U2VsZWN0ID0gYXN5bmMgKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpZCA9IGxhYmVsVG9DZW5hcmlvKGxhYmVsKVxuICAgIHNldENlbmFyaW9SaWdodChpZClcbiAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMoc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgY2VuYXJpb0xlZnQsIGlkLCBmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2xlYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRQbnJoMignJylcbiAgICBzZXRTZWxlY3RlZFN1YkJhY2lhKCcnKVxuICAgIHNldENlbmFyaW9MZWZ0KCdhdHVhbCcpXG4gICAgc2V0Q2VuYXJpb1JpZ2h0KCdhdHVhbCcpXG4gICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGxlZnQuam12ICYmIGxlZnQubGF5ZXJTdGF0ZSkgdGFza3MucHVzaChyZXN0b3JlSW5pdGlhbFZpZXcobGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSkpXG4gICAgaWYgKHJpZ2h0LmptdiAmJiByaWdodC5sYXllclN0YXRlKSB0YXNrcy5wdXNoKHJlc3RvcmVJbml0aWFsVmlldyhyaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUpKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKVxuICAgIGNvbnN0IHZwID0gbGVmdC5sYXllclN0YXRlPy5pbml0aWFsVmlld3BvaW50XG4gICAgaWYgKHZwICYmIGxlZnQuam12ICYmIHJpZ2h0Lmptdikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGxlZnQuam12LnZpZXcuZ29Ubyh2cCksXG4gICAgICAgICAgcmlnaHQuam12LnZpZXcuZ29Ubyh2cClcbiAgICAgICAgXSlcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJCYWNpYU9wdGlvbnMgPSBzZWxlY3RlZFBucmgyXG4gICAgPyAocG5yaDJUb1N1YkJhY2lhc1JlZi5jdXJyZW50LmdldChzZWxlY3RlZFBucmgyKSB8fCBbXSlcbiAgICA6IGFsbFN1YkJhY2lhc1xuXG4gIGNvbnN0IGRpc3BsYXlMZWdlbmRHcm91cHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAobGVnZW5kR3JvdXBzLmxlbmd0aCA+IDApIHJldHVybiBsZWdlbmRHcm91cHNcbiAgICBjb25zdCBzb3VyY2UgPSBsZWZ0LmxheWVyU3RhdGU/LmxheWVycyB8fCByaWdodC5sYXllclN0YXRlPy5sYXllcnNcbiAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIFtdXG4gICAgcmV0dXJuIGJ1aWxkTGVnZW5kR3JvdXBzKHNvdXJjZSlcbiAgfSwgW2xlZ2VuZEdyb3VwcywgbGVmdC5sYXllclN0YXRlLCByaWdodC5sYXllclN0YXRlXSlcblxuICBjb25zdCB3cmFwOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBwYWRkaW5nOiAnMTJweCcsIGZvbnRGYW1pbHk6ICdpbmhlcml0JyB9XG4gIGNvbnN0IGZpZWxkR3JvdXA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IG1hcmdpbkJvdHRvbTogJzE0cHgnIH1cbiAgY29uc3QgbGFiZWxTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgY29sb3I6ICcjMzMzJyxcbiAgICBtYXJnaW5Cb3R0b206ICc2cHgnXG4gIH1cbiAgY29uc3Qgc2VjdGlvblRpdGxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGNvbG9yOiAnIzI1NkI0NScsXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgfVxuICBjb25zdCBjbGVhckJ0bjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzI1NkI0NScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgcGFkZGluZzogJzAgMjJweCcsXG4gICAgaGVpZ2h0OiAnMzRweCcsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWluV2lkdGg6ICcxMjBweCdcbiAgfVxuICBjb25zdCBmb290ZXI6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIG1hcmdpblRvcDogJzhweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnNHB4J1xuICB9XG4gIGNvbnN0IHdhcm5pbmdCb3g6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJyM2NjYnLFxuICAgIGJhY2tncm91bmQ6ICcjZjdmOWY4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDEycHgnLFxuICAgIG1hcmdpblRvcDogJzhweCcsXG4gICAgbGluZUhlaWdodDogMS40NVxuICB9XG4gIGNvbnN0IG1hcEJhZGdlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGNvbG9yOiAnIzI1NkI0NScsXG4gICAgYmFja2dyb3VuZDogJyNmMGY3ZjMnLFxuICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcbiAgICBwYWRkaW5nOiAnMnB4IDEwcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzZweCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0IHdpZGdldC1jb21wYXJlLWNlbmFyaW9zJyBzdHlsZT17d3JhcH0+XG4gICAgICB7bGVmdE1hcElkICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e2xlZnRNYXBJZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHtcbiAgICAgICAgICAgIGlmIChqbXYpIHNldExlZnQoeyBqbXYsIGxheWVyU3RhdGU6IG51bGwgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtyaWdodE1hcElkICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3JpZ2h0TWFwSWR9XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12KSA9PiB7XG4gICAgICAgICAgICBpZiAoam12KSBzZXRSaWdodCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7IWhhc0JvdGhNYXBzICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM4ODgnLCBmb250U2l6ZTogJzEzcHgnIH19PntkZWZhdWx0TWVzc2FnZXMuc2VsZWN0TWFwc0ZpcnN0fTwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2hhc0JvdGhNYXBzICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uVGl0bGV9PntkZWZhdWx0TWVzc2FnZXMuY29tcGFyZVRpdGxlfTwvZGl2PlxuXG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwMDIwJywgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT57ZXJyb3J9PC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkR3JvdXB9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdE1lc3NhZ2VzLnBucmgyTGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQbnJoMn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17YWxsUG5yaDJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtsb2FkaW5nICYmIGFsbFBucmgyLmxlbmd0aCA9PT0gMCA/IGRlZmF1bHRNZXNzYWdlcy5sb2FkaW5nIDogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdFBucmgyfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCBhbGxQbnJoMi5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBucmgyU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkR3JvdXB9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbFN0eWxlfT57ZGVmYXVsdE1lc3NhZ2VzLnN1YkJhY2lhTGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTdWJCYWNpYX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3ViQmFjaWFPcHRpb25zfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9hZGluZyAmJiBhbGxTdWJCYWNpYXMubGVuZ3RoID09PSAwID8gZGVmYXVsdE1lc3NhZ2VzLmxvYWRpbmcgOiBkZWZhdWx0TWVzc2FnZXMuc2VsZWN0U3ViQmFjaWF9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8IGFsbFN1YkJhY2lhcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblN1YkJhY2lhU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzZweCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTJweCcsXG4gICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggZGFzaGVkICNjY2MnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtmaWVsZEdyb3VwfT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e21hcEJhZGdlfT57ZGVmYXVsdE1lc3NhZ2VzLm1hcExlZnRMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIHZhbHVlPXtjZW5hcmlvTGFiZWwoY2VuYXJpb0xlZnQpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e0NFTkFSSU9fT1BUSU9OU31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdENlbmFyaW99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2VuYXJpb0xlZnRTZWxlY3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmllbGRHcm91cH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXttYXBCYWRnZX0+e2RlZmF1bHRNZXNzYWdlcy5tYXBSaWdodExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NlbmFyaW9MYWJlbChjZW5hcmlvUmlnaHQpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e0NFTkFSSU9fT1BUSU9OU31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdENlbmFyaW99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2VuYXJpb1JpZ2h0U2VsZWN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt3YXJuaW5nQm94fT57ZGVmYXVsdE1lc3NhZ2VzLnNjZW5hcmlvV2FybmluZ308L2Rpdj5cblxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc4cHgnLCBtYXJnaW5Ub3A6ICcxMnB4JywgZm9udFNpemU6ICcxM3B4JywgY29sb3I6ICcjMzMzJywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3N5bmNWaWV3c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFN5bmNWaWV3cyhlLnRhcmdldC5jaGVja2VkKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuc3luY1ZpZXdzfVxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICB7aGFzQWN0aXZlRmlsdGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvb3Rlcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2NsZWFyQnRufSBvbkNsaWNrPXsoKSA9PiB7IHZvaWQgb25DbGVhcigpIH19IHR5cGU9J2J1dHRvbic+XG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5jbGVhcn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPExheWVyTGVnZW5kXG4gICAgICAgICAgICBncm91cHM9e2Rpc3BsYXlMZWdlbmRHcm91cHN9XG4gICAgICAgICAgICB0aXRsZT17ZGVmYXVsdE1lc3NhZ2VzLmxlZ2VuZFRpdGxlfVxuICAgICAgICAgICAgZW1wdHlUZXh0PXtkZWZhdWx0TWVzc2FnZXMubGVnZW5kRW1wdHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9