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
    const [cenarioRight, setCenarioRight] = useState('ssp245');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [syncViews, setSyncViews] = useState(true);
    const [legendGroups, setLegendGroups] = useState([]);
    const subBaciaToPnrh2Ref = useRef(new Map());
    const pnrh2ToSubBaciasRef = useRef(new Map());
    const syncingRef = useRef(false);
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
            yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.applyScenarioToMap)(jmv, layerState, config, isPrimaryForOptions ? cenarioLeft : cenarioRight, selectedPnrh2, selectedSubBacia, false);
        }
        catch (e) {
            console.error('[compare-cenarios] init', e);
            setError(detectError(e));
        }
        finally {
            setLoading(false);
        }
    }), [config, loadOptionsFromMap, cenarioLeft, cenarioRight, selectedPnrh2, selectedSubBacia]);
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
        if (!left.layerState || !right.layerState)
            return;
        void applyToBothMaps(selectedPnrh2, selectedSubBacia, cenarioLeft, cenarioRight);
    }, [cenarioLeft, cenarioRight, selectedPnrh2, selectedSubBacia, left.layerState, right.layerState, applyToBothMaps]);
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
        setSelectedPnrh2('');
        setSelectedSubBacia('');
        setCenarioLeft('atual');
        setCenarioRight('ssp245');
        const tasks = [];
        if (left.jmv && left.layerState)
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.restoreInitialView)(left.jmv, left.layerState));
        if (right.jmv && right.layerState)
            tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_5__.restoreInitialView)(right.jmv, right.layerState));
        yield Promise.all(tasks);
    });
    const subBaciaOptions = selectedPnrh2
        ? (pnrh2ToSubBaciasRef.current.get(selectedPnrh2) || [])
        : allSubBacias;
    const hasFilter = Boolean(selectedPnrh2 || selectedSubBacia || cenarioLeft !== 'atual' || cenarioRight !== 'atual');
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
        marginTop: '8px'
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
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LayerLegend__WEBPACK_IMPORTED_MODULE_4__.LayerLegend, { groups: displayLegendGroups, title: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendTitle, emptyText: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendEmpty }),
            hasFilter && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: footer },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: clearBtn, onClick: () => { void onClear(); }, type: 'button' }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clear)))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQ3VCO0FBRXRDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLDRDQUFLO0FBRXRDLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ25DLHdEQUNFLEtBQUssRUFBQyxJQUFJLEVBQ1YsTUFBTSxFQUFDLElBQUksRUFDWCxPQUFPLEVBQUMsV0FBVyxFQUNuQixJQUFJLEVBQUMsTUFBTSxFQUNYLE1BQU0sRUFBQyxjQUFjLEVBQ3JCLFdBQVcsRUFBQyxHQUFHLEVBQ2YsYUFBYSxFQUFDLE9BQU8sRUFDckIsY0FBYyxFQUFDLE9BQU8saUJBQ1YsTUFBTTtJQUVsQiw2REFBVSxNQUFNLEVBQUMsZ0JBQWdCLEdBQUcsQ0FDaEMsQ0FDUDtBQVVNLE1BQU0sUUFBUSxHQUE0QixDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDdkcsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBd0IsSUFBSSxDQUFDO0lBRW5ELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFDakIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNuQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoQixDQUFDO1FBQ0gsQ0FBQztRQUNELFFBQVEs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QUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wb25lbnRzL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTGF5ZXJMZWdlbmQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvbGVnZW5kVXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9tYXBMYXllcnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSA9IFJlYWN0XG5cbmV4cG9ydCBjb25zdCBDaGV2cm9uRG93bkljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD0nMTQnXG4gICAgaGVpZ2h0PScxNCdcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgZmlsbD0nbm9uZSdcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICBzdHJva2VXaWR0aD0nMidcbiAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgYXJpYS1oaWRkZW49J3RydWUnXG4gID5cbiAgICA8cG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOScgLz5cbiAgPC9zdmc+XG4pXG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgb3B0aW9uczogc3RyaW5nW11cbiAgcGxhY2Vob2xkZXI6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bjogUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4gPSAoeyB2YWx1ZSwgb3B0aW9ucywgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3BlbikgcmV0dXJuXG4gICAgY29uc3Qgb25Eb2NDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAod3JhcFJlZi5jdXJyZW50ICYmICF3cmFwUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2NDbGljaylcbiAgICByZXR1cm4gKCkgPT4geyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY0NsaWNrKSB9XG4gIH0sIFtvcGVuXSlcblxuICBjb25zdCBwaWxsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQwZDAnLFxuICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcbiAgICBwYWRkaW5nOiAnMnB4IDRweCAycHggMTZweCcsXG4gICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNCknLFxuICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgIG9wYWNpdHk6IGRpc2FibGVkID8gMC42IDogMSxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfVxuICBjb25zdCB2YWx1ZVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZsZXg6IDEsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBjb2xvcjogdmFsdWUgPyAnIzMzMycgOiAnIzg4OCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9XG4gIGNvbnN0IGNoZXZyb246IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgY29sb3I6ICcjNTU1JyxcbiAgICB3aWR0aDogJzI4cHgnLFxuICAgIGhlaWdodDogJzMycHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHRyYW5zZm9ybTogb3BlbiA/ICdyb3RhdGUoMTgwZGVnKScgOiAncm90YXRlKDBkZWcpJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMTVzJ1xuICB9XG4gIGNvbnN0IGxpc3Q6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnY2FsYygxMDAlICsgNHB4KScsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBtYXhIZWlnaHQ6ICcyMjBweCcsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBwYWRkaW5nOiAnNHB4IDAnLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaXN0U3R5bGU6ICdub25lJ1xuICB9XG4gIGNvbnN0IGl0ZW1TdHlsZSA9IChzZWxlY3RlZDogYm9vbGVhbik6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPT4gKHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgY29sb3I6IHNlbGVjdGVkID8gJyMyNTZCNDUnIDogJyMzMzMnLFxuICAgIGJhY2tncm91bmQ6IHNlbGVjdGVkID8gJyNmMGY3ZjMnIDogJ3RyYW5zcGFyZW50JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gIH0pXG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuXG4gICAgc2V0T3BlbihvID0+ICFvKVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0VmFsdWUgPSAodjogc3RyaW5nKSA9PiB7XG4gICAgb25DaGFuZ2UodilcbiAgICBzZXRPcGVuKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17d3JhcFJlZn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtwaWxsfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICAgIHJvbGU9J2J1dHRvbidcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB0b2dnbGUoKSB9IH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt2YWx1ZVN0eWxlfT57dmFsdWUgfHwgcGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17Y2hldnJvbn0+PENoZXZyb25Eb3duSWNvbiAvPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge29wZW4gJiYgKFxuICAgICAgICA8dWwgc3R5bGU9e2xpc3R9PlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgc3R5bGU9e2l0ZW1TdHlsZSghdmFsdWUpfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2VsZWN0VmFsdWUoJycpIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTExJRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjVmNWY1JyB9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAhdmFsdWUgPyAnI2YwZjdmMycgOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjODg4JyB9fT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge29wdGlvbnMubWFwKG9wdCA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtvcHR9XG4gICAgICAgICAgICAgIHN0eWxlPXtpdGVtU3R5bGUob3B0ID09PSB2YWx1ZSl9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNlbGVjdFZhbHVlKG9wdCkgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjVmNScgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSBvcHQgPT09IHZhbHVlID8gJyNmMGY3ZjMnIDogJ3RyYW5zcGFyZW50JyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b3B0fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgTGVnZW5kR3JvdXAgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcbmltcG9ydCB7IHNldmVyaXR5Q29sb3IgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcblxuZXhwb3J0IGludGVyZmFjZSBMYXllckxlZ2VuZFByb3BzIHtcbiAgZ3JvdXBzOiBMZWdlbmRHcm91cFtdXG4gIHRpdGxlOiBzdHJpbmdcbiAgZW1wdHlUZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IExheWVyTGVnZW5kOiBSZWFjdC5GQzxMYXllckxlZ2VuZFByb3BzPiA9ICh7IGdyb3VwcywgdGl0bGUsIGVtcHR5VGV4dCB9KSA9PiB7XG4gIGNvbnN0IGJveDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAxMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y3ZjlmOCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2UwZThlNCdcbiAgfVxuICBjb25zdCB0aXRsZVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGNvbG9yOiAnIzI1NkI0NScsXG4gICAgbWFyZ2luQm90dG9tOiAnOHB4J1xuICB9XG4gIGNvbnN0IGdyb3VwVGl0bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgY29sb3I6ICcjNTU1JyxcbiAgICBtYXJnaW5Cb3R0b206ICc2cHgnLFxuICAgIG1hcmdpblRvcDogJzRweCdcbiAgfVxuICBjb25zdCByb3c6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdhcDogJzhweCcsXG4gICAgcGFkZGluZzogJzRweCAwJyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGNvbG9yOiAnIzMzMydcbiAgfVxuICBjb25zdCBzd2F0Y2g6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IDE0LFxuICAgIGhlaWdodDogMTQsXG4gICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMiknXG4gIH1cblxuICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtib3h9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjODg4JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT57ZW1wdHlUZXh0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtib3h9PlxuICAgICAgPGRpdiBzdHlsZT17dGl0bGVTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwLCBnaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Z3JvdXAudGl0bGV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ2kgPCBncm91cHMubGVuZ3RoIC0gMSA/ICcxMHB4JyA6IDAgfX0+XG4gICAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAxICYmIDxkaXYgc3R5bGU9e2dyb3VwVGl0bGV9Pntncm91cC50aXRsZX08L2Rpdj59XG4gICAgICAgICAge2dyb3VwLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBpdGVtLmNvbG9yIHx8IHNldmVyaXR5Q29sb3IoaXRlbS5zZXZlcml0eSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXRsZX0tJHtpdGVtLmxhYmVsfWB9IHN0eWxlPXtyb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLnN3YXRjaCwgYmFja2dyb3VuZDogZmlsbCB9fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDEuMyB9fT57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgdHlwZSB7IExheWVyUmVmcyB9IGZyb20gJy4vbWFwTGF5ZXJzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZEl0ZW0ge1xuICBsYWJlbDogc3RyaW5nXG4gIGNvbG9yOiBzdHJpbmdcbiAgc2V2ZXJpdHk6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZEdyb3VwIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBpdGVtczogTGVnZW5kSXRlbVtdXG59XG5cbmV4cG9ydCBjb25zdCBzZXZlcml0eUNvbG9yID0gKHNldjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHNldiA+PSAzKSByZXR1cm4gJyNhODMyMzInXG4gIGlmIChzZXYgPT09IDIpIHJldHVybiAnI2M5N2IwMCdcbiAgaWYgKHNldiA9PT0gMSkgcmV0dXJuICcjODg4J1xuICByZXR1cm4gJyMyNTZCNDUnXG59XG5cbmV4cG9ydCBjb25zdCBjbGFzc1NldmVyaXR5ID0gKGNsYXNzZTogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgY29uc3QgYyA9IChjbGFzc2UgfHwgJycpLnRvTG93ZXJDYXNlKClcbiAgaWYgKCFjKSByZXR1cm4gMFxuICBpZiAoYy5pbmNsdWRlcygnY3Jpc2UnKSB8fCBjLmluY2x1ZGVzKCdjcsOtdGljbycpIHx8IGMuaW5jbHVkZXMoJ2NyaXRpY28nKSB8fCBjLmluY2x1ZGVzKCdtdWl0byBhbHRvJykpIHJldHVybiA0XG4gIGlmIChjLmluY2x1ZGVzKCdhbHRvJykpIHJldHVybiAzXG4gIGlmIChjLmluY2x1ZGVzKCdtw6lkaW8nKSB8fCBjLmluY2x1ZGVzKCdtZWRpbycpIHx8IGMuaW5jbHVkZXMoJ21vZGVyYWRvJykpIHJldHVybiAyXG4gIGlmIChjLmluY2x1ZGVzKCdiYWl4bycpIHx8IGMuaW5jbHVkZXMoJ3NlbSAnKSB8fCBjID09PSAnc2VtJykgcmV0dXJuIDBcbiAgcmV0dXJuIDFcbn1cblxuY29uc3QgY29sb3JUb0NzcyA9IChjb2xvcjogdW5rbm93bik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoIWNvbG9yKSByZXR1cm4gbnVsbFxuICBjb25zdCBjID0gY29sb3IgYXMgeyB0b0Nzcz86IChhPzogYm9vbGVhbikgPT4gc3RyaW5nLCByPzogbnVtYmVyLCBnPzogbnVtYmVyLCBiPzogbnVtYmVyLCBhPzogbnVtYmVyIH1cbiAgaWYgKHR5cGVvZiBjLnRvQ3NzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYy50b0Nzcyh0cnVlKVxuICBjb25zdCByID0gYy5yID8/IChjb2xvciBhcyBudW1iZXJbXSlbMF1cbiAgY29uc3QgZyA9IGMuZyA/PyAoY29sb3IgYXMgbnVtYmVyW10pWzFdXG4gIGNvbnN0IGIgPSBjLmIgPz8gKGNvbG9yIGFzIG51bWJlcltdKVsyXVxuICBjb25zdCBhID0gYy5hID8/IChjb2xvciBhcyBudW1iZXJbXSlbM10gPz8gMVxuICBpZiAociA9PSBudWxsIHx8IGcgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBudWxsXG4gIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2F9KWBcbn1cblxuY29uc3Qgc3ltYm9sQ29sb3IgPSAoc3ltYm9sOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmICghc3ltYm9sKSByZXR1cm4gbnVsbFxuICBjb25zdCBzID0gc3ltYm9sIGFzIHsgY29sb3I/OiB1bmtub3duLCBvdXRsaW5lPzogeyBjb2xvcj86IHVua25vd24gfSB9XG4gIHJldHVybiBjb2xvclRvQ3NzKHMuY29sb3IpIHx8IGNvbG9yVG9Dc3Mocy5vdXRsaW5lPy5jb2xvcilcbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RSZW5kZXJlckNvbG9ycyA9IChyZW5kZXJlcjogdW5rbm93bik6IE1hcDxzdHJpbmcsIHN0cmluZz4gPT4ge1xuICBjb25zdCBtID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBpZiAoIXJlbmRlcmVyKSByZXR1cm4gbVxuICBjb25zdCByID0gcmVuZGVyZXIgYXMge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICBkZWZhdWx0U3ltYm9sPzogdW5rbm93blxuICAgIHVuaXF1ZVZhbHVlSW5mb3M/OiBBcnJheTx7IHZhbHVlPzogdW5rbm93biwgbGFiZWw/OiBzdHJpbmcsIHN5bWJvbD86IHVua25vd24gfT5cbiAgICBjbGFzc0JyZWFrSW5mb3M/OiBBcnJheTx7IGxhYmVsPzogc3RyaW5nLCBzeW1ib2w/OiB1bmtub3duIH0+XG4gIH1cblxuICBjb25zdCBkZWZhdWx0Q3NzID0gc3ltYm9sQ29sb3Ioci5kZWZhdWx0U3ltYm9sKVxuICBpZiAoZGVmYXVsdENzcykgbS5zZXQoJ1BhZHLDo28nLCBkZWZhdWx0Q3NzKVxuXG4gIGlmIChyLnR5cGUgPT09ICd1bmlxdWUtdmFsdWUnKSB7XG4gICAgZm9yIChjb25zdCBpbmZvIG9mIHIudW5pcXVlVmFsdWVJbmZvcyB8fCBbXSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpbmZvLnZhbHVlICE9IG51bGwgPyBTdHJpbmcoaW5mby52YWx1ZSkudHJpbSgpIDogJydcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5mby5sYWJlbCAhPSBudWxsICYmIFN0cmluZyhpbmZvLmxhYmVsKS50cmltKCkgIT09ICcnXG4gICAgICAgID8gU3RyaW5nKGluZm8ubGFiZWwpLnRyaW0oKVxuICAgICAgICA6IHZhbHVlXG4gICAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcihpbmZvLnN5bWJvbClcbiAgICAgIGlmIChsYWJlbCAmJiBjc3MpIG0uc2V0KGxhYmVsLCBjc3MpXG4gICAgfVxuICB9IGVsc2UgaWYgKHIudHlwZSA9PT0gJ2NsYXNzLWJyZWFrcycpIHtcbiAgICBmb3IgKGNvbnN0IGluZm8gb2Ygci5jbGFzc0JyZWFrSW5mb3MgfHwgW10pIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5mby5sYWJlbCAhPSBudWxsID8gU3RyaW5nKGluZm8ubGFiZWwpLnRyaW0oKSA6ICcnXG4gICAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcihpbmZvLnN5bWJvbClcbiAgICAgIGlmIChsYWJlbCAmJiBjc3MpIG0uc2V0KGxhYmVsLCBjc3MpXG4gICAgfVxuICB9IGVsc2UgaWYgKHIudHlwZSA9PT0gJ3NpbXBsZScpIHtcbiAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcigociBhcyB7IHN5bWJvbD86IHVua25vd24gfSkuc3ltYm9sKVxuICAgIGlmIChjc3MpIG0uc2V0KCfDgXJlYScsIGNzcylcbiAgfVxuXG4gIHJldHVybiBtXG59XG5cbmNvbnN0IG1lcmdlQ29sb3JNYXBzID0gKC4uLm1hcHM6IEFycmF5PE1hcDxzdHJpbmcsIHN0cmluZz4+KTogTWFwPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gIGNvbnN0IG1lcmdlZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgbWFwcy5mb3JFYWNoKG1hcCA9PiB7XG4gICAgbWFwLmZvckVhY2goKGNzcywgbGFiZWwpID0+IHtcbiAgICAgIGlmICghbWVyZ2VkLmhhcyhsYWJlbCkpIG1lcmdlZC5zZXQobGFiZWwsIGNzcylcbiAgICB9KVxuICB9KVxuICByZXR1cm4gbWVyZ2VkXG59XG5cbmNvbnN0IG1hcFRvTGVnZW5kSXRlbXMgPSAoY29sb3JzOiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogTGVnZW5kSXRlbVtdID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oY29sb3JzLmVudHJpZXMoKSlcbiAgICAubWFwKChbbGFiZWwsIGNvbG9yXSkgPT4gKHtcbiAgICAgIGxhYmVsLFxuICAgICAgY29sb3IsXG4gICAgICBzZXZlcml0eTogY2xhc3NTZXZlcml0eShsYWJlbClcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zZXZlcml0eSAtIGEuc2V2ZXJpdHkgfHwgYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwsICdwdC1CUicpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMZWdlbmRHcm91cHMgKGxheWVyczogTGF5ZXJSZWZzKTogTGVnZW5kR3JvdXBbXSB7XG4gIGNvbnN0IGdyb3VwczogTGVnZW5kR3JvdXBbXSA9IFtdXG5cbiAgY29uc3QgaW5kZXhDb2xvcnMgPSBtZXJnZUNvbG9yTWFwcyhcbiAgICBleHRyYWN0UmVuZGVyZXJDb2xvcnMoKGxheWVycy5pbmRpY2UgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpLFxuICAgIGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpLFxuICAgIGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXJzLmNlbmFyaW9HcmFuZGU1ODUgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpXG4gIClcblxuICBpZiAoaW5kZXhDb2xvcnMuc2l6ZSA+IDApIHtcbiAgICBncm91cHMucHVzaCh7XG4gICAgICB0aXRsZTogJ8ONbmRpY2UgZGUgY29uZmxpdG8nLFxuICAgICAgaXRlbXM6IG1hcFRvTGVnZW5kSXRlbXMoaW5kZXhDb2xvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChsYXllcnMuc3ViQmFjaWFzKSB7XG4gICAgY29uc3Qgc3ViQ29sb3JzID0gZXh0cmFjdFJlbmRlcmVyQ29sb3JzKFxuICAgICAgKGxheWVycy5zdWJCYWNpYXMgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KS5yZW5kZXJlclxuICAgIClcbiAgICBpZiAoc3ViQ29sb3JzLnNpemUgPiAwKSB7XG4gICAgICBncm91cHMucHVzaCh7XG4gICAgICAgIHRpdGxlOiAnU3ViLWJhY2lhcycsXG4gICAgICAgIGl0ZW1zOiBtYXBUb0xlZ2VuZEl0ZW1zKHN1YkNvbG9ycylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6ICdTdWItYmFjaWFzJyxcbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgbGFiZWw6ICdMaW1pdGUgZGEgc3ViLWJhY2lhJyxcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMzcsIDEwNywgNjksIDAuMzUpJyxcbiAgICAgICAgICBzZXZlcml0eTogMFxuICAgICAgICB9XVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ3JvdXBzXG59XG4iLCJpbXBvcnQgdHlwZSB7IEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IHR5cGUgQ2VuYXJpb0lkID0gJ2F0dWFsJyB8ICdzc3AyNDUnIHwgJ3NzcDU4NSdcblxuZXhwb3J0IGludGVyZmFjZSBMYXllclJlZnMge1xuICBzdWJCYWNpYXM6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsXG4gIGluZGljZTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbiAgY2VuYXJpb0dyYW5kZTI0NTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbiAgY2VuYXJpb0dyYW5kZTU4NTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBMYXllclN0YXRlIHtcbiAgbGF5ZXJzOiBMYXllclJlZnNcbiAgb3duZWQ6IFJlY29yZDxrZXlvZiBMYXllclJlZnMsIGJvb2xlYW4+XG4gIGV4dHJhTGF5ZXJzOiBBcnJheTx7IGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLCBvcmlnaW5hbFZpc2libGU6IGJvb2xlYW4gfT5cbiAgaW5pdGlhbFZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCB8IG51bGxcbiAgcmVhZHk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfVVJMUyA9IHtcbiAgc3ViQmFjaWFzVXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvc3ViYmFjaWFzL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIGluZGljZVVybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2luZGljZV9hdHVhbF9vZXN0ZS9GZWF0dXJlU2VydmVyLzAnLFxuICBjZW5hcmlvR3JhbmRlMjQ1VXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvZ3JhbmRlXzI0NS9GZWF0dXJlU2VydmVyLzAnLFxuICBjZW5hcmlvR3JhbmRlNTg1VXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvZ3JhbmRlXzU4NS9GZWF0dXJlU2VydmVyLzAnLFxuICBzZXJ2ZXJVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzJyxcbiAgdG9rZW46ICdfek5ENDlkS2h2bjU5dERUNEhxNDg2VXBfYmRIcUNnR0g0cnpFU1MwWGlxR0pDWHRVal9uTEdzdEFfZXdIdmxhUl9rUDRFdFFCLUdOdC1QbFQ5MUczeXFuTUI0a2FYOGpNUm9qVElaMVBBVkwwNWJkWDlscUdFVVV2M0oxM3RPZydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnIChjZmc6IFBhcnRpYWw8Q29uZmlnPiB8IHVuZGVmaW5lZCk6IENvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgc3ViQmFjaWFzVXJsOiBjZmc/LnN1YkJhY2lhc1VybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuc3ViQmFjaWFzVXJsLFxuICAgIGluZGljZVVybDogY2ZnPy5pbmRpY2VVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLmluZGljZVVybCxcbiAgICBjZW5hcmlvR3JhbmRlMjQ1VXJsOiBjZmc/LmNlbmFyaW9HcmFuZGUyNDVVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLmNlbmFyaW9HcmFuZGUyNDVVcmwsXG4gICAgY2VuYXJpb0dyYW5kZTU4NVVybDogY2ZnPy5jZW5hcmlvR3JhbmRlNTg1VXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5jZW5hcmlvR3JhbmRlNTg1VXJsLFxuICAgIGNsYXNzZUZpZWxkMjQ1OiBjZmc/LmNsYXNzZUZpZWxkMjQ1IHx8ICdjbGFzc2VfMjQ1JyxcbiAgICBjbGFzc2VGaWVsZDU4NTogY2ZnPy5jbGFzc2VGaWVsZDU4NSB8fCAnY2xhc3NlXzU4NScsXG4gICAgcG5yaDJGaWVsZDogY2ZnPy5wbnJoMkZpZWxkIHx8ICdwbnJoMicsXG4gICAgc3ViQmFjaWFGaWVsZDogY2ZnPy5zdWJCYWNpYUZpZWxkIHx8ICdzdWJfYmFjaWEnLFxuICAgIGNsYXNzZUZpZWxkOiBjZmc/LmNsYXNzZUZpZWxkIHx8ICdjbGFzc2UnLFxuICAgIHpvb21MYXllcjogY2ZnPy56b29tTGF5ZXIgfHwgJ3N1YmJhY2lhcycsXG4gICAgc2VydmVyVXJsOiBjZmc/LnNlcnZlclVybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuc2VydmVyVXJsLFxuICAgIHRva2VuOiBjZmc/LnRva2VuIHx8IERFRkFVTFRfTEFZRVJfVVJMUy50b2tlbixcbiAgICBsZWZ0TWFwV2lkZ2V0SWQ6IGNmZz8ubGVmdE1hcFdpZGdldElkLFxuICAgIHJpZ2h0TWFwV2lkZ2V0SWQ6IGNmZz8ucmlnaHRNYXBXaWRnZXRJZFxuICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9ICh1OiBzdHJpbmcpID0+ICh1IHx8ICcnKS5yZXBsYWNlKC9cXC8rJC8sICcnKS50b0xvd2VyQ2FzZSgpXG5cbmV4cG9ydCBjb25zdCBlc2NhcGVTcWwgPSAodjogc3RyaW5nKSA9PiB2LnJlcGxhY2UoLycvZywgXCInJ1wiKVxuXG5leHBvcnQgY29uc3QgYnVpbGRXaGVyZSA9IChjb25maWc6IENvbmZpZywgcG5yaDI6IHN0cmluZywgc3ViQmFjaWE6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChwbnJoMikgcGFydHMucHVzaChgJHtjb25maWcucG5yaDJGaWVsZH0gPSAnJHtlc2NhcGVTcWwocG5yaDIpfSdgKVxuICBpZiAoc3ViQmFjaWEpIHBhcnRzLnB1c2goYCR7Y29uZmlnLnN1YkJhY2lhRmllbGR9ID0gJyR7ZXNjYXBlU3FsKHN1YkJhY2lhKX0nYClcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA9PT0gMCA/ICcxPTEnIDogcGFydHMuam9pbignIEFORCAnKVxufVxuXG5jb25zdCBlbXB0eUxheWVycyA9ICgpOiBMYXllclJlZnMgPT4gKHtcbiAgc3ViQmFjaWFzOiBudWxsLFxuICBpbmRpY2U6IG51bGwsXG4gIGNlbmFyaW9HcmFuZGUyNDU6IG51bGwsXG4gIGNlbmFyaW9HcmFuZGU1ODU6IG51bGxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0TWFwTGF5ZXJzIChcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxuICBjb25maWc6IENvbmZpZ1xuKTogUHJvbWlzZTxNYXBMYXllclN0YXRlPiB7XG4gIGNvbnN0IFtGZWF0dXJlTGF5ZXIsIElkZW50aXR5TWFuYWdlcl0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcbiAgICAnZXNyaS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXInXG4gIF0pXG5cbiAgaWYgKGNvbmZpZy50b2tlbiAmJiBjb25maWcuc2VydmVyVXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIElkZW50aXR5TWFuYWdlci5yZWdpc3RlclRva2VuKHtcbiAgICAgICAgc2VydmVyOiBjb25maWcuc2VydmVyVXJsLFxuICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuLFxuICAgICAgICBzc2w6IGNvbmZpZy5zZXJ2ZXJVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSByZWdpc3RlclRva2VuIGZhaWxlZCcsIGUpXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgamltdU1hcFZpZXcudmlldy53aGVuKCksXG4gICAgICBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoJ3ZpZXcgdGltZW91dCcpKSwgMTUwMDApKVxuICAgIF0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSB2aWV3LndoZW4nLCBlKVxuICB9XG5cbiAgY29uc3QgbWFwID0gamltdU1hcFZpZXcudmlldy5tYXBcbiAgY29uc3QgaW5pdGlhbFZpZXdwb2ludCA9IGppbXVNYXBWaWV3LnZpZXcudmlld3BvaW50Py5jbG9uZSgpID8/IG51bGxcblxuICBjb25zdCB0YXJnZXRzID0ge1xuICAgIHN1Yjogbm9ybWFsaXplKGNvbmZpZy5zdWJCYWNpYXNVcmwpLFxuICAgIGluZDogbm9ybWFsaXplKGNvbmZpZy5pbmRpY2VVcmwpLFxuICAgIGMyNDU6IG5vcm1hbGl6ZShjb25maWcuY2VuYXJpb0dyYW5kZTI0NVVybCksXG4gICAgYzU4NTogbm9ybWFsaXplKGNvbmZpZy5jZW5hcmlvR3JhbmRlNTg1VXJsKVxuICB9XG5cbiAgY29uc3QgZmluZEJ5VXJsID0gKHRhcmdldDogc3RyaW5nKTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPT4ge1xuICAgIGxldCBmb3VuZDogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPSBudWxsXG4gICAgbWFwLmFsbExheWVycy5mb3JFYWNoKChsYXllcjogYW55KSA9PiB7XG4gICAgICBpZiAoZm91bmQpIHJldHVyblxuICAgICAgaWYgKGxheWVyPy50eXBlID09PSAnZmVhdHVyZScgJiYgbGF5ZXIudXJsKSB7XG4gICAgICAgIGNvbnN0IGxheWVyVXJsID0gbGF5ZXIubGF5ZXJJZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBgJHtsYXllci51cmx9LyR7bGF5ZXIubGF5ZXJJZH1gXG4gICAgICAgICAgOiBsYXllci51cmxcbiAgICAgICAgaWYgKG5vcm1hbGl6ZShsYXllclVybCkgPT09IHRhcmdldCkgZm91bmQgPSBsYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm91bmRcbiAgfVxuXG4gIGNvbnN0IGVuc3VyZUxheWVyID0gKFxuICAgIGV4aXN0aW5nOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHZpc2libGUgPSB0cnVlXG4gICk6IHsgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsIG93bmVkOiBib29sZWFuIH0gPT4ge1xuICAgIGlmIChleGlzdGluZykgcmV0dXJuIHsgbGF5ZXI6IGV4aXN0aW5nLCBvd25lZDogZmFsc2UgfVxuICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7IHVybCwgdGl0bGUsIG91dEZpZWxkczogWycqJ10sIHZpc2libGUgfSlcbiAgICBtYXAuYWRkKGxheWVyKVxuICAgIHJldHVybiB7IGxheWVyLCBvd25lZDogdHJ1ZSB9XG4gIH1cblxuICBjb25zdCBzdWJSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5zdWIpLCBjb25maWcuc3ViQmFjaWFzVXJsLCAnU3ViLWJhY2lhcycsIHRydWUpXG4gIGNvbnN0IGluZFJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmluZCksIGNvbmZpZy5pbmRpY2VVcmwsICfDjW5kaWNlIGRlIENvbmZsaXRvJywgdHJ1ZSlcbiAgY29uc3QgYzI0NVJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmMyNDUpLCBjb25maWcuY2VuYXJpb0dyYW5kZTI0NVVybCwgJ0NlbsOhcmlvIE1vZGVyYWRvIC0gUmlvIEdyYW5kZScsIGZhbHNlKVxuICBjb25zdCBjNTg1UmVzdWx0ID0gZW5zdXJlTGF5ZXIoZmluZEJ5VXJsKHRhcmdldHMuYzU4NSksIGNvbmZpZy5jZW5hcmlvR3JhbmRlNTg1VXJsLCAnQ2Vuw6FyaW8gUGVzc2ltaXN0YSAtIFJpbyBHcmFuZGUnLCBmYWxzZSlcblxuICBzdWJSZXN1bHQubGF5ZXIub3BhY2l0eSA9IDAuNlxuXG4gIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBzdWJSZXN1bHQubGF5ZXIubG9hZCgpLFxuICAgIGluZFJlc3VsdC5sYXllci5sb2FkKClcbiAgXSlcblxuICBhd2FpdCBjMjQ1UmVzdWx0LmxheWVyLmxvYWQoKS5jYXRjaCgoKSA9PiB7fSlcbiAgYXdhaXQgYzU4NVJlc3VsdC5sYXllci5sb2FkKCkuY2F0Y2goKCkgPT4ge30pXG5cbiAgY29uc3Qgd2lkZ2V0VXJscyA9IG5ldyBTZXQoW3RhcmdldHMuc3ViLCB0YXJnZXRzLmluZCwgdGFyZ2V0cy5jMjQ1LCB0YXJnZXRzLmM1ODVdKVxuICBjb25zdCBleHRyYUxheWVyczogQXJyYXk8eyBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllciwgb3JpZ2luYWxWaXNpYmxlOiBib29sZWFuIH0+ID0gW11cbiAgY29uc3QgaXNFeHRyYSA9ICh0aXRsZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgdCA9ICh0aXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiAvcGl2W2/DtF0vaS50ZXN0KHQpIHx8IC9taWNyb2JhYy9pLnRlc3QodCkgfHwgL2lycmlnYWQvaS50ZXN0KHQpXG4gIH1cbiAgbWFwLmFsbExheWVycy5mb3JFYWNoKChsYXllcjogYW55KSA9PiB7XG4gICAgaWYgKGxheWVyPy50eXBlICE9PSAnZmVhdHVyZScpIHJldHVyblxuICAgIGNvbnN0IGxheWVyVXJsID0gbGF5ZXIudXJsXG4gICAgICA/IChsYXllci5sYXllcklkICE9PSB1bmRlZmluZWQgPyBgJHtsYXllci51cmx9LyR7bGF5ZXIubGF5ZXJJZH1gIDogbGF5ZXIudXJsKVxuICAgICAgOiAnJ1xuICAgIGlmICh3aWRnZXRVcmxzLmhhcyhub3JtYWxpemUobGF5ZXJVcmwpKSkgcmV0dXJuXG4gICAgaWYgKGlzRXh0cmEobGF5ZXIudGl0bGUpKSB7XG4gICAgICBleHRyYUxheWVycy5wdXNoKHsgbGF5ZXIsIG9yaWdpbmFsVmlzaWJsZTogISFsYXllci52aXNpYmxlIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgbGF5ZXJzOiB7XG4gICAgICBzdWJCYWNpYXM6IHN1YlJlc3VsdC5sYXllcixcbiAgICAgIGluZGljZTogaW5kUmVzdWx0LmxheWVyLFxuICAgICAgY2VuYXJpb0dyYW5kZTI0NTogYzI0NVJlc3VsdC5sYXllcixcbiAgICAgIGNlbmFyaW9HcmFuZGU1ODU6IGM1ODVSZXN1bHQubGF5ZXJcbiAgICB9LFxuICAgIG93bmVkOiB7XG4gICAgICBzdWJCYWNpYXM6IHN1YlJlc3VsdC5vd25lZCxcbiAgICAgIGluZGljZTogaW5kUmVzdWx0Lm93bmVkLFxuICAgICAgY2VuYXJpb0dyYW5kZTI0NTogYzI0NVJlc3VsdC5vd25lZCxcbiAgICAgIGNlbmFyaW9HcmFuZGU1ODU6IGM1ODVSZXN1bHQub3duZWRcbiAgICB9LFxuICAgIGV4dHJhTGF5ZXJzLFxuICAgIGluaXRpYWxWaWV3cG9pbnQsXG4gICAgcmVhZHk6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlT3duZWRMYXllcnMgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyB8IG51bGwsIHN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbCkge1xuICBpZiAoIWppbXVNYXBWaWV3IHx8ICFzdGF0ZSkgcmV0dXJuXG4gIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXc/Lm1hcFxuICBpZiAoIW1hcCkgcmV0dXJuXG4gIGNvbnN0IHsgbGF5ZXJzLCBvd25lZCB9ID0gc3RhdGVcbiAgaWYgKGxheWVycy5zdWJCYWNpYXMgJiYgb3duZWQuc3ViQmFjaWFzKSBtYXAucmVtb3ZlKGxheWVycy5zdWJCYWNpYXMpXG4gIGlmIChsYXllcnMuaW5kaWNlICYmIG93bmVkLmluZGljZSkgbWFwLnJlbW92ZShsYXllcnMuaW5kaWNlKVxuICBpZiAobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUgJiYgb3duZWQuY2VuYXJpb0dyYW5kZTI0NSkgbWFwLnJlbW92ZShsYXllcnMuY2VuYXJpb0dyYW5kZTI0NSlcbiAgaWYgKGxheWVycy5jZW5hcmlvR3JhbmRlNTg1ICYmIG93bmVkLmNlbmFyaW9HcmFuZGU1ODUpIG1hcC5yZW1vdmUobGF5ZXJzLmNlbmFyaW9HcmFuZGU1ODUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseVNjZW5hcmlvVG9NYXAgKFxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXG4gIHN0YXRlOiBNYXBMYXllclN0YXRlLFxuICBjb25maWc6IENvbmZpZyxcbiAgY2VuYXJpbzogQ2VuYXJpb0lkLFxuICBwbnJoMjogc3RyaW5nLFxuICBzdWJCYWNpYTogc3RyaW5nLFxuICB6b29tID0gdHJ1ZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgc3ViQmFjaWFzLCBpbmRpY2UsIGNlbmFyaW9HcmFuZGUyNDUsIGNlbmFyaW9HcmFuZGU1ODUgfSA9IHN0YXRlLmxheWVyc1xuICBpZiAoIWluZGljZSB8fCAhc3ViQmFjaWFzKSByZXR1cm5cblxuICBjb25zdCBpc0F0dWFsID0gY2VuYXJpbyA9PT0gJ2F0dWFsJ1xuICBpbmRpY2UudmlzaWJsZSA9IGlzQXR1YWxcbiAgaWYgKGNlbmFyaW9HcmFuZGUyNDUpIGNlbmFyaW9HcmFuZGUyNDUudmlzaWJsZSA9IGNlbmFyaW8gPT09ICdzc3AyNDUnXG4gIGlmIChjZW5hcmlvR3JhbmRlNTg1KSBjZW5hcmlvR3JhbmRlNTg1LnZpc2libGUgPSBjZW5hcmlvID09PSAnc3NwNTg1J1xuXG4gIGNvbnN0IGluQ2VuYXJpb01vZGUgPSBjZW5hcmlvICE9PSAnYXR1YWwnIHx8IEJvb2xlYW4ocG5yaDIpIHx8IEJvb2xlYW4oc3ViQmFjaWEpXG4gIHN0YXRlLmV4dHJhTGF5ZXJzLmZvckVhY2goKHsgbGF5ZXIsIG9yaWdpbmFsVmlzaWJsZSB9KSA9PiB7XG4gICAgdHJ5IHsgbGF5ZXIudmlzaWJsZSA9IGluQ2VuYXJpb01vZGUgPyBmYWxzZSA6IG9yaWdpbmFsVmlzaWJsZSB9IGNhdGNoIHt9XG4gIH0pXG5cbiAgY29uc3Qgd2hlcmUgPSBidWlsZFdoZXJlKGNvbmZpZywgcG5yaDIsIHN1YkJhY2lhKVxuICBjb25zdCBleHByZXNzaW9uID0gd2hlcmUgIT09ICcxPTEnID8gd2hlcmUgOiAnJ1xuXG4gIGluZGljZS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25cbiAgaWYgKGNlbmFyaW9HcmFuZGUyNDUpIGNlbmFyaW9HcmFuZGUyNDUuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG4gIGlmIChjZW5hcmlvR3JhbmRlNTg1KSBjZW5hcmlvR3JhbmRlNTg1LmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuICBzdWJCYWNpYXMuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG5cbiAgaWYgKCF6b29tKSByZXR1cm5cblxuICB0cnkge1xuICAgIGNvbnN0IHpvb21MYXllciA9IGNvbmZpZy56b29tTGF5ZXIgPT09ICdpbmRpY2UnID8gaW5kaWNlIDogc3ViQmFjaWFzXG4gICAgY29uc3Qgem9vbVdoZXJlID0gZXhwcmVzc2lvbiB8fCAnMT0xJ1xuICAgIGNvbnN0IGV4dGVudFJlc3VsdCA9IGF3YWl0IHpvb21MYXllci5xdWVyeUV4dGVudCh7IHdoZXJlOiB6b29tV2hlcmUgfSlcbiAgICBpZiAoZXh0ZW50UmVzdWx0Py5leHRlbnQpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XG4gICAgICBjb25zdCB0YXJnZXRFeHRlbnQgPSBleHRlbnRSZXN1bHQuZXh0ZW50LmV4cGFuZCgxLjIpXG4gICAgICBhd2FpdCB2aWV3LmdvVG8odGFyZ2V0RXh0ZW50KVxuICAgICAgY29uc3QgbGltaXRTY2FsZSA9IE1hdGgubWF4KHN1YkJhY2lhcy5tYXhTY2FsZSB8fCAwLCBpbmRpY2UubWF4U2NhbGUgfHwgMClcbiAgICAgIGlmIChsaW1pdFNjYWxlID4gMCAmJiB2aWV3LnNjYWxlIDwgbGltaXRTY2FsZSkge1xuICAgICAgICBhd2FpdCB2aWV3LmdvVG8oeyB0YXJnZXQ6IHRhcmdldEV4dGVudC5jZW50ZXIsIHNjYWxlOiBsaW1pdFNjYWxlICogMS4xIH0pXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gem9vbSBlcnJvcicsIGUpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVJbml0aWFsVmlldyAoXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcbiAgc3RhdGU6IE1hcExheWVyU3RhdGVcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHN1YkJhY2lhcywgaW5kaWNlLCBjZW5hcmlvR3JhbmRlMjQ1LCBjZW5hcmlvR3JhbmRlNTg1IH0gPSBzdGF0ZS5sYXllcnNcbiAgaWYgKGluZGljZSkge1xuICAgIGluZGljZS52aXNpYmxlID0gdHJ1ZVxuICAgIGluZGljZS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXG4gIH1cbiAgaWYgKGNlbmFyaW9HcmFuZGUyNDUpIHtcbiAgICBjZW5hcmlvR3JhbmRlMjQ1LnZpc2libGUgPSBmYWxzZVxuICAgIGNlbmFyaW9HcmFuZGUyNDUuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xuICB9XG4gIGlmIChjZW5hcmlvR3JhbmRlNTg1KSB7XG4gICAgY2VuYXJpb0dyYW5kZTU4NS52aXNpYmxlID0gZmFsc2VcbiAgICBjZW5hcmlvR3JhbmRlNTg1LmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgfVxuICBpZiAoc3ViQmFjaWFzKSBzdWJCYWNpYXMuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xuICBzdGF0ZS5leHRyYUxheWVycy5mb3JFYWNoKCh7IGxheWVyLCBvcmlnaW5hbFZpc2libGUgfSkgPT4ge1xuICAgIHRyeSB7IGxheWVyLnZpc2libGUgPSBvcmlnaW5hbFZpc2libGUgfSBjYXRjaCB7fVxuICB9KVxuICBpZiAoc3RhdGUuaW5pdGlhbFZpZXdwb2ludCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBqaW11TWFwVmlldy52aWV3LmdvVG8oc3RhdGUuaW5pdGlhbFZpZXdwb2ludClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSByZXN0b3JlIHZpZXdwb2ludCcsIGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQmFzaW5PcHRpb25zIChcbiAgc3ViQmFjaWFzOiBfX2VzcmkuRmVhdHVyZUxheWVyLFxuICBjb25maWc6IENvbmZpZ1xuKTogUHJvbWlzZTx7XG4gIGFsbFBucmgyOiBzdHJpbmdbXVxuICBhbGxTdWJCYWNpYXM6IHN0cmluZ1tdXG4gIHN1YkJhY2lhVG9QbnJoMjogTWFwPHN0cmluZywgc3RyaW5nPlxuICBwbnJoMlRvU3ViQmFjaWFzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT5cbn0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3ViQmFjaWFzLnF1ZXJ5RmVhdHVyZXMoe1xuICAgIHdoZXJlOiAnMT0xJyxcbiAgICBvdXRGaWVsZHM6IFtjb25maWcucG5yaDJGaWVsZCwgY29uZmlnLnN1YkJhY2lhRmllbGRdLFxuICAgIHJldHVybkRpc3RpbmN0VmFsdWVzOiB0cnVlLFxuICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICBvcmRlckJ5RmllbGRzOiBbY29uZmlnLnBucmgyRmllbGQsIGNvbmZpZy5zdWJCYWNpYUZpZWxkXVxuICB9KVxuXG4gIGNvbnN0IHN1YkJhY2lhVG9QbnJoMiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgY29uc3QgcG5yaDJUb1N1YkJhY2lhcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKVxuICBjb25zdCBhbGxQbnJoU2V0ID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3QgYWxsU3Vic1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgZm9yIChjb25zdCBmZWF0IG9mIHJlc3VsdC5mZWF0dXJlcykge1xuICAgIGNvbnN0IHAgPSBmZWF0LmF0dHJpYnV0ZXM/Lltjb25maWcucG5yaDJGaWVsZF1cbiAgICBjb25zdCBzID0gZmVhdC5hdHRyaWJ1dGVzPy5bY29uZmlnLnN1YkJhY2lhRmllbGRdXG4gICAgY29uc3QgcFN0ciA9IHAgIT0gbnVsbCAmJiBwICE9PSAnJyA/IFN0cmluZyhwKSA6ICcnXG4gICAgY29uc3Qgc1N0ciA9IHMgIT0gbnVsbCAmJiBzICE9PSAnJyA/IFN0cmluZyhzKSA6ICcnXG4gICAgaWYgKHBTdHIpIGFsbFBucmhTZXQuYWRkKHBTdHIpXG4gICAgaWYgKHNTdHIpIGFsbFN1YnNTZXQuYWRkKHNTdHIpXG4gICAgaWYgKHBTdHIgJiYgc1N0cikge1xuICAgICAgc3ViQmFjaWFUb1BucmgyLnNldChzU3RyLCBwU3RyKVxuICAgICAgY29uc3QgYXJyID0gcG5yaDJUb1N1YkJhY2lhcy5nZXQocFN0cikgfHwgW11cbiAgICAgIGlmICghYXJyLmluY2x1ZGVzKHNTdHIpKSBhcnIucHVzaChzU3RyKVxuICAgICAgcG5yaDJUb1N1YkJhY2lhcy5zZXQocFN0ciwgYXJyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWxsUG5yaDI6IEFycmF5LmZyb20oYWxsUG5yaFNldCkuc29ydCgpLFxuICAgIGFsbFN1YkJhY2lhczogQXJyYXkuZnJvbShhbGxTdWJzU2V0KS5zb3J0KCksXG4gICAgc3ViQmFjaWFUb1BucmgyLFxuICAgIHBucmgyVG9TdWJCYWNpYXNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdDb21wYXJhciBDZW7DoXJpb3MnLFxuICBzZWxlY3RNYXBzRmlyc3Q6ICdDb25maWd1cmUgb3MgZG9pcyBtYXBhcyBuYXMgY29uZmlndXJhw6fDtWVzIGRvIHdpZGdldC4nLFxuICBzZWxlY3RMZWZ0TWFwOiAnU2VsZWNpb25lIG8gbWFwYSBkYSBlc3F1ZXJkYScsXG4gIHNlbGVjdFJpZ2h0TWFwOiAnU2VsZWNpb25lIG8gbWFwYSBkYSBkaXJlaXRhJyxcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxuICBwbnJoMkxhYmVsOiAnU2VsZWNpb25lIGEgQmFjaWEgSGlkcm9ncsOhZmljYScsXG4gIHN1YkJhY2lhTGFiZWw6ICdTZWxlY2lvbmUgYSBzdWItYmFjaWEgaGlkcm9ncsOhZmljYScsXG4gIHNlbGVjdFBucmgyOiAnU2VsZWNpb25lJyxcbiAgc2VsZWN0U3ViQmFjaWE6ICdTZWxlY2lvbmUgdW1hIHN1Yi1iYWNpYScsXG4gIG1hcExlZnRMYWJlbDogJ01hcGEgZXNxdWVyZG8g4oCUIGNlbsOhcmlvJyxcbiAgbWFwUmlnaHRMYWJlbDogJ01hcGEgZGlyZWl0byDigJQgY2Vuw6FyaW8nLFxuICBjZW5hcmlvQXR1YWw6ICdBdHVhbCcsXG4gIGNlbmFyaW9Tc3AyNDU6ICdNb2RlcmFkbycsXG4gIGNlbmFyaW9Tc3A1ODU6ICdQZXNzaW1pc3RhJyxcbiAgc2VsZWN0Q2VuYXJpbzogJ1NlbGVjaW9uZSB1bSBjZW7DoXJpbycsXG4gIGNsZWFyOiAnTGltcGFyIGZpbHRybycsXG4gIGVycm9yTG9hZGluZzogJ0Vycm8gYW8gY2FycmVnYXIgdmFsb3JlcyBkYXMgY2FtYWRhcy4nLFxuICBlcnJvckNvcnM6ICdGYWxoYSBkZSBDT1JTOiBvIHNlcnZpZG9yIEFyY0dJUyBuw6NvIHBlcm1pdGUgY2hhbWFkYXMgZGVzdGEgb3JpZ2VtLicsXG4gIGVycm9yQXV0aDogJ0EgY2FtYWRhIGV4aWdlIGF1dGVudGljYcOnw6NvLiBDb21wYXJ0aWxoZSBvcyBpdGVucyBjb21vIHDDumJsaWNvcyBvdSBmYcOnYSBsb2dpbi4nLFxuICBzY2VuYXJpb1dhcm5pbmc6ICdPcyBjZW7DoXJpb3MgTW9kZXJhZG8gZSBQZXNzaW1pc3RhIGNvbnTDqm0gYXBlbmFzIGRhZG9zIGRhIEJhY2lhIGRvIFJpbyBHcmFuZGUuIFBhcmEgY29tcGFyYXIgb3MgdHLDqnMgY2Vuw6FyaW9zIGRlIGZvcm1hIGp1c3RhLCBzZWxlY2lvbmUgYSBiYWNpYSBjb3JyZXNwb25kZW50ZSBubyBmaWx0cm8uJyxcbiAgY29tcGFyZVRpdGxlOiAnQ29tcGFyYXIgY2Vuw6FyaW9zJyxcbiAgc3luY1ZpZXdzOiAnU2luY3Jvbml6YXIgZXh0ZW5zw6NvIGRvcyBtYXBhcycsXG4gIGxlZ2VuZFRpdGxlOiAnTGVnZW5kYScsXG4gIGxlZ2VuZEVtcHR5OiAnTGVnZW5kYSBpbmRpc3BvbsOtdmVsIOKAlCBhZ3VhcmRlIG8gY2FycmVnYW1lbnRvIGRhcyBjYW1hZGFzLidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL0Ryb3Bkb3duJ1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5ZXJMZWdlbmQnXG5pbXBvcnQge1xuICB0eXBlIENlbmFyaW9JZCxcbiAgdHlwZSBNYXBMYXllclN0YXRlLFxuICBhcHBseVNjZW5hcmlvVG9NYXAsXG4gIGluaXRNYXBMYXllcnMsXG4gIGxvYWRCYXNpbk9wdGlvbnMsXG4gIG1lcmdlQ29uZmlnLFxuICByZW1vdmVPd25lZExheWVycyxcbiAgcmVzdG9yZUluaXRpYWxWaWV3XG59IGZyb20gJy4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgYnVpbGRMZWdlbmRHcm91cHMsIHR5cGUgTGVnZW5kR3JvdXAgfSBmcm9tICcuL2xlZ2VuZFV0aWxzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSA9IFJlYWN0XG5cbmNvbnN0IGNlbmFyaW9MYWJlbCA9IChpZDogQ2VuYXJpb0lkKTogc3RyaW5nID0+IHtcbiAgaWYgKGlkID09PSAnc3NwMjQ1JykgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwMjQ1XG4gIGlmIChpZCA9PT0gJ3NzcDU4NScpIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDU4NVxuICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9BdHVhbFxufVxuXG5jb25zdCBsYWJlbFRvQ2VuYXJpbyA9IChsYWJlbDogc3RyaW5nKTogQ2VuYXJpb0lkID0+IHtcbiAgaWYgKGxhYmVsID09PSBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NSkgcmV0dXJuICdzc3AyNDUnXG4gIGlmIChsYWJlbCA9PT0gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODUpIHJldHVybiAnc3NwNTg1J1xuICByZXR1cm4gJ2F0dWFsJ1xufVxuXG5jb25zdCBDRU5BUklPX09QVElPTlMgPSBbXG4gIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvQXR1YWwsXG4gIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwMjQ1LFxuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDU4NVxuXVxuXG5pbnRlcmZhY2UgTWFwU2xvdCB7XG4gIGptdjogSmltdU1hcFZpZXcgfCBudWxsXG4gIGxheWVyU3RhdGU6IE1hcExheWVyU3RhdGUgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBjb25maWcgPSBtZXJnZUNvbmZpZyhwcm9wcy5jb25maWcgYXMgUGFydGlhbDxJTUNvbmZpZz4gfCB1bmRlZmluZWQpXG5cbiAgY29uc3QgbGVmdE1hcElkID0gY29uZmlnLmxlZnRNYXBXaWRnZXRJZCB8fCBwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXSB8fCAnJ1xuICBjb25zdCByaWdodE1hcElkID0gY29uZmlnLnJpZ2h0TWFwV2lkZ2V0SWQgfHwgcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMV0gfHwgJydcblxuICBjb25zdCBbbGVmdCwgc2V0TGVmdF0gPSB1c2VTdGF0ZTxNYXBTbG90Pih7IGptdjogbnVsbCwgbGF5ZXJTdGF0ZTogbnVsbCB9KVxuICBjb25zdCBbcmlnaHQsIHNldFJpZ2h0XSA9IHVzZVN0YXRlPE1hcFNsb3Q+KHsgam12OiBudWxsLCBsYXllclN0YXRlOiBudWxsIH0pXG5cbiAgY29uc3QgW2FsbFBucmgyLCBzZXRBbGxQbnJoMl0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFthbGxTdWJCYWNpYXMsIHNldEFsbFN1YkJhY2lhc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZFBucmgyLCBzZXRTZWxlY3RlZFBucmgyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VsZWN0ZWRTdWJCYWNpYSwgc2V0U2VsZWN0ZWRTdWJCYWNpYV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NlbmFyaW9MZWZ0LCBzZXRDZW5hcmlvTGVmdF0gPSB1c2VTdGF0ZTxDZW5hcmlvSWQ+KCdhdHVhbCcpXG4gIGNvbnN0IFtjZW5hcmlvUmlnaHQsIHNldENlbmFyaW9SaWdodF0gPSB1c2VTdGF0ZTxDZW5hcmlvSWQ+KCdzc3AyNDUnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N5bmNWaWV3cywgc2V0U3luY1ZpZXdzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtsZWdlbmRHcm91cHMsIHNldExlZ2VuZEdyb3Vwc10gPSB1c2VTdGF0ZTxMZWdlbmRHcm91cFtdPihbXSlcblxuICBjb25zdCBzdWJCYWNpYVRvUG5yaDJSZWYgPSB1c2VSZWY8TWFwPHN0cmluZywgc3RyaW5nPj4obmV3IE1hcCgpKVxuICBjb25zdCBwbnJoMlRvU3ViQmFjaWFzUmVmID0gdXNlUmVmPE1hcDxzdHJpbmcsIHN0cmluZ1tdPj4obmV3IE1hcCgpKVxuICBjb25zdCBzeW5jaW5nUmVmID0gdXNlUmVmKGZhbHNlKVxuXG4gIGNvbnN0IGhhc0JvdGhNYXBzID0gQm9vbGVhbihsZWZ0TWFwSWQgJiYgcmlnaHRNYXBJZClcblxuICBjb25zdCBkZXRlY3RFcnJvciA9IChlcnI6IHVua25vd24pOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGUgPSBlcnIgYXMgeyBtZXNzYWdlPzogc3RyaW5nLCBkZXRhaWxzPzogeyBodHRwU3RhdHVzPzogbnVtYmVyLCBlcnJvcj86IHsgbWVzc2FnZT86IHN0cmluZyB9IH0gfVxuICAgIGNvbnN0IG1zZyA9IGAke2U/Lm1lc3NhZ2UgfHwgJyd9ICR7ZT8uZGV0YWlscz8uZXJyb3I/Lm1lc3NhZ2UgfHwgJyd9YC50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKG1zZy5pbmNsdWRlcygnY29ycycpIHx8IG1zZy5pbmNsdWRlcygnY3Jvc3Mtb3JpZ2luJykgfHwgbXNnLmluY2x1ZGVzKCduZXR3b3JrJykpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuZXJyb3JDb3JzXG4gICAgfVxuICAgIGlmIChtc2cuaW5jbHVkZXMoJ3Rva2VuJykgfHwgbXNnLmluY2x1ZGVzKCd1bmF1dGhvcml6ZWQnKSB8fCBlPy5kZXRhaWxzPy5odHRwU3RhdHVzID09PSA0MDEgfHwgZT8uZGV0YWlscz8uaHR0cFN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmVycm9yQXV0aFxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmVycm9yTG9hZGluZ1xuICB9XG5cbiAgY29uc3QgbG9hZE9wdGlvbnNGcm9tTWFwID0gdXNlQ2FsbGJhY2soYXN5bmMgKGxheWVyU3RhdGU6IE1hcExheWVyU3RhdGUgfCBudWxsKSA9PiB7XG4gICAgaWYgKCFsYXllclN0YXRlPy5sYXllcnMuc3ViQmFjaWFzKSByZXR1cm5cbiAgICBjb25zdCBvcHRzID0gYXdhaXQgbG9hZEJhc2luT3B0aW9ucyhsYXllclN0YXRlLmxheWVycy5zdWJCYWNpYXMsIGNvbmZpZylcbiAgICBzdWJCYWNpYVRvUG5yaDJSZWYuY3VycmVudCA9IG9wdHMuc3ViQmFjaWFUb1BucmgyXG4gICAgcG5yaDJUb1N1YkJhY2lhc1JlZi5jdXJyZW50ID0gb3B0cy5wbnJoMlRvU3ViQmFjaWFzXG4gICAgc2V0QWxsUG5yaDIob3B0cy5hbGxQbnJoMilcbiAgICBzZXRBbGxTdWJCYWNpYXMob3B0cy5hbGxTdWJCYWNpYXMpXG4gIH0sIFtjb25maWddKVxuXG4gIGNvbnN0IGFwcGx5VG9Cb3RoTWFwcyA9IHVzZUNhbGxiYWNrKGFzeW5jIChcbiAgICBwbnJoMjogc3RyaW5nLFxuICAgIHN1YkJhY2lhOiBzdHJpbmcsXG4gICAgbGVmdENlbmFyaW86IENlbmFyaW9JZCxcbiAgICByaWdodENlbmFyaW86IENlbmFyaW9JZCxcbiAgICB6b29tID0gdHJ1ZVxuICApID0+IHtcbiAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAobGVmdC5qbXYgJiYgbGVmdC5sYXllclN0YXRlKSB7XG4gICAgICB0YXNrcy5wdXNoKGFwcGx5U2NlbmFyaW9Ub01hcChsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlLCBjb25maWcsIGxlZnRDZW5hcmlvLCBwbnJoMiwgc3ViQmFjaWEsIHpvb20pKVxuICAgIH1cbiAgICBpZiAocmlnaHQuam12ICYmIHJpZ2h0LmxheWVyU3RhdGUpIHtcbiAgICAgIHRhc2tzLnB1c2goYXBwbHlTY2VuYXJpb1RvTWFwKHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSwgY29uZmlnLCByaWdodENlbmFyaW8sIHBucmgyLCBzdWJCYWNpYSwgem9vbSkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKVxuICB9LCBbbGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSwgcmlnaHQuam12LCByaWdodC5sYXllclN0YXRlLCBjb25maWddKVxuXG4gIGNvbnN0IGluaXRTbG90ID0gdXNlQ2FsbGJhY2soYXN5bmMgKFxuICAgIGptdjogSmltdU1hcFZpZXcsXG4gICAgc2V0dGVyOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxNYXBTbG90Pj4sXG4gICAgaXNQcmltYXJ5Rm9yT3B0aW9uczogYm9vbGVhblxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgc2V0RXJyb3IoJycpXG4gICAgICBjb25zdCBsYXllclN0YXRlID0gYXdhaXQgaW5pdE1hcExheWVycyhqbXYsIGNvbmZpZylcbiAgICAgIHNldHRlcih7IGptdiwgbGF5ZXJTdGF0ZSB9KVxuICAgICAgaWYgKGlzUHJpbWFyeUZvck9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgbG9hZE9wdGlvbnNGcm9tTWFwKGxheWVyU3RhdGUpXG4gICAgICAgIHNldExlZ2VuZEdyb3VwcyhidWlsZExlZ2VuZEdyb3VwcyhsYXllclN0YXRlLmxheWVycykpXG4gICAgICB9XG4gICAgICBhd2FpdCBhcHBseVNjZW5hcmlvVG9NYXAoXG4gICAgICAgIGptdixcbiAgICAgICAgbGF5ZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBpc1ByaW1hcnlGb3JPcHRpb25zID8gY2VuYXJpb0xlZnQgOiBjZW5hcmlvUmlnaHQsXG4gICAgICAgIHNlbGVjdGVkUG5yaDIsXG4gICAgICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW2NvbXBhcmUtY2VuYXJpb3NdIGluaXQnLCBlKVxuICAgICAgc2V0RXJyb3IoZGV0ZWN0RXJyb3IoZSkpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbY29uZmlnLCBsb2FkT3B0aW9uc0Zyb21NYXAsIGNlbmFyaW9MZWZ0LCBjZW5hcmlvUmlnaHQsIHNlbGVjdGVkUG5yaDIsIHNlbGVjdGVkU3ViQmFjaWFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsZWZ0LmptdiB8fCBsZWZ0LmxheWVyU3RhdGUpIHJldHVyblxuICAgIHZvaWQgaW5pdFNsb3QobGVmdC5qbXYsIHNldExlZnQsIHRydWUpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZU93bmVkTGF5ZXJzKGxlZnQuam12LCBsZWZ0LmxheWVyU3RhdGUpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2xlZnQuam12XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmlnaHQuam12IHx8IHJpZ2h0LmxheWVyU3RhdGUpIHJldHVyblxuICAgIHZvaWQgaW5pdFNsb3QocmlnaHQuam12LCBzZXRSaWdodCwgZmFsc2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZU93bmVkTGF5ZXJzKHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSlcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbcmlnaHQuam12XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGVmdC5sYXllclN0YXRlIHx8ICFyaWdodC5sYXllclN0YXRlKSByZXR1cm5cbiAgICB2b2lkIGFwcGx5VG9Cb3RoTWFwcyhzZWxlY3RlZFBucmgyLCBzZWxlY3RlZFN1YkJhY2lhLCBjZW5hcmlvTGVmdCwgY2VuYXJpb1JpZ2h0KVxuICB9LCBbY2VuYXJpb0xlZnQsIGNlbmFyaW9SaWdodCwgc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgbGVmdC5sYXllclN0YXRlLCByaWdodC5sYXllclN0YXRlLCBhcHBseVRvQm90aE1hcHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzeW5jVmlld3MgfHwgIWxlZnQuam12IHx8ICFyaWdodC5qbXYpIHJldHVyblxuXG4gICAgY29uc3QgbGVmdFZpZXcgPSBsZWZ0Lmptdi52aWV3XG4gICAgY29uc3QgcmlnaHRWaWV3ID0gcmlnaHQuam12LnZpZXdcblxuICAgIGNvbnN0IHN5bmNGcm9tTGVmdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzeW5jaW5nUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgc3luY2luZ1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgcmlnaHRWaWV3LmdvVG8oe1xuICAgICAgICAgIGNlbnRlcjogbGVmdFZpZXcuY2VudGVyLFxuICAgICAgICAgIHNjYWxlOiBsZWZ0Vmlldy5zY2FsZSxcbiAgICAgICAgICByb3RhdGlvbjogbGVmdFZpZXcucm90YXRpb25cbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2gge31cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgc3luY2luZ1JlZi5jdXJyZW50ID0gZmFsc2UgfSwgMzAwKVxuICAgIH1cblxuICAgIGNvbnN0IGgxID0gbGVmdFZpZXcud2F0Y2goJ2V4dGVudCcsIHN5bmNGcm9tTGVmdClcbiAgICByZXR1cm4gKCkgPT4geyBoMS5yZW1vdmUoKSB9XG4gIH0sIFtzeW5jVmlld3MsIGxlZnQuam12LCByaWdodC5qbXZdKVxuXG4gIGNvbnN0IG9uUG5yaDJTZWxlY3QgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkUG5yaDIodmFsdWUpXG4gICAgbGV0IHN1YkJhY2lhID0gc2VsZWN0ZWRTdWJCYWNpYVxuICAgIGlmIChzdWJCYWNpYSAmJiB2YWx1ZSkge1xuICAgICAgY29uc3Qgc3VicyA9IHBucmgyVG9TdWJCYWNpYXNSZWYuY3VycmVudC5nZXQodmFsdWUpIHx8IFtdXG4gICAgICBpZiAoIXN1YnMuaW5jbHVkZXMoc3ViQmFjaWEpKSB7XG4gICAgICAgIHN1YkJhY2lhID0gJydcbiAgICAgICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSgnJylcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgYXBwbHlUb0JvdGhNYXBzKHZhbHVlLCBzdWJCYWNpYSwgY2VuYXJpb0xlZnQsIGNlbmFyaW9SaWdodClcbiAgfVxuXG4gIGNvbnN0IG9uU3ViQmFjaWFTZWxlY3QgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkU3ViQmFjaWEodmFsdWUpXG4gICAgbGV0IHBucmgyID0gc2VsZWN0ZWRQbnJoMlxuICAgIGlmICh2YWx1ZSAmJiAhcG5yaDIpIHtcbiAgICAgIGNvbnN0IGF1dG8gPSBzdWJCYWNpYVRvUG5yaDJSZWYuY3VycmVudC5nZXQodmFsdWUpXG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBwbnJoMiA9IGF1dG9cbiAgICAgICAgc2V0U2VsZWN0ZWRQbnJoMihhdXRvKVxuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMocG5yaDIsIHZhbHVlLCBjZW5hcmlvTGVmdCwgY2VuYXJpb1JpZ2h0KVxuICB9XG5cbiAgY29uc3Qgb25DZW5hcmlvTGVmdFNlbGVjdCA9IGFzeW5jIChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaWQgPSBsYWJlbFRvQ2VuYXJpbyhsYWJlbClcbiAgICBzZXRDZW5hcmlvTGVmdChpZClcbiAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMoc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgaWQsIGNlbmFyaW9SaWdodCwgZmFsc2UpXG4gIH1cblxuICBjb25zdCBvbkNlbmFyaW9SaWdodFNlbGVjdCA9IGFzeW5jIChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaWQgPSBsYWJlbFRvQ2VuYXJpbyhsYWJlbClcbiAgICBzZXRDZW5hcmlvUmlnaHQoaWQpXG4gICAgYXdhaXQgYXBwbHlUb0JvdGhNYXBzKHNlbGVjdGVkUG5yaDIsIHNlbGVjdGVkU3ViQmFjaWEsIGNlbmFyaW9MZWZ0LCBpZCwgZmFsc2UpXG4gIH1cblxuICBjb25zdCBvbkNsZWFyID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkUG5yaDIoJycpXG4gICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSgnJylcbiAgICBzZXRDZW5hcmlvTGVmdCgnYXR1YWwnKVxuICAgIHNldENlbmFyaW9SaWdodCgnc3NwMjQ1JylcbiAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAobGVmdC5qbXYgJiYgbGVmdC5sYXllclN0YXRlKSB0YXNrcy5wdXNoKHJlc3RvcmVJbml0aWFsVmlldyhsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlKSlcbiAgICBpZiAocmlnaHQuam12ICYmIHJpZ2h0LmxheWVyU3RhdGUpIHRhc2tzLnB1c2gocmVzdG9yZUluaXRpYWxWaWV3KHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSkpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpXG4gIH1cblxuICBjb25zdCBzdWJCYWNpYU9wdGlvbnMgPSBzZWxlY3RlZFBucmgyXG4gICAgPyAocG5yaDJUb1N1YkJhY2lhc1JlZi5jdXJyZW50LmdldChzZWxlY3RlZFBucmgyKSB8fCBbXSlcbiAgICA6IGFsbFN1YkJhY2lhc1xuXG4gIGNvbnN0IGhhc0ZpbHRlciA9IEJvb2xlYW4oc2VsZWN0ZWRQbnJoMiB8fCBzZWxlY3RlZFN1YkJhY2lhIHx8IGNlbmFyaW9MZWZ0ICE9PSAnYXR1YWwnIHx8IGNlbmFyaW9SaWdodCAhPT0gJ2F0dWFsJylcblxuICBjb25zdCBkaXNwbGF5TGVnZW5kR3JvdXBzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxlZ2VuZEdyb3Vwcy5sZW5ndGggPiAwKSByZXR1cm4gbGVnZW5kR3JvdXBzXG4gICAgY29uc3Qgc291cmNlID0gbGVmdC5sYXllclN0YXRlPy5sYXllcnMgfHwgcmlnaHQubGF5ZXJTdGF0ZT8ubGF5ZXJzXG4gICAgaWYgKCFzb3VyY2UpIHJldHVybiBbXVxuICAgIHJldHVybiBidWlsZExlZ2VuZEdyb3Vwcyhzb3VyY2UpXG4gIH0sIFtsZWdlbmRHcm91cHMsIGxlZnQubGF5ZXJTdGF0ZSwgcmlnaHQubGF5ZXJTdGF0ZV0pXG5cbiAgY29uc3Qgd3JhcDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgcGFkZGluZzogJzEycHgnLCBmb250RmFtaWx5OiAnaW5oZXJpdCcgfVxuICBjb25zdCBmaWVsZEdyb3VwOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBtYXJnaW5Cb3R0b206ICcxNHB4JyB9XG4gIGNvbnN0IGxhYmVsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIGNvbG9yOiAnIzMzMycsXG4gICAgbWFyZ2luQm90dG9tOiAnNnB4J1xuICB9XG4gIGNvbnN0IHNlY3Rpb25UaXRsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjb2xvcjogJyMyNTZCNDUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gIH1cbiAgY29uc3QgY2xlYXJCdG46IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgYmFja2dyb3VuZDogJyMyNTZCNDUnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnOTk5cHgnLFxuICAgIHBhZGRpbmc6ICcwIDIycHgnLFxuICAgIGhlaWdodDogJzM0cHgnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1pbldpZHRoOiAnMTIwcHgnXG4gIH1cbiAgY29uc3QgZm9vdGVyOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtYXJnaW5Ub3A6ICc4cHgnXG4gIH1cbiAgY29uc3Qgd2FybmluZ0JveDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGNvbG9yOiAnIzY2NicsXG4gICAgYmFja2dyb3VuZDogJyNmN2Y5ZjgnLFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgcGFkZGluZzogJzEwcHggMTJweCcsXG4gICAgbWFyZ2luVG9wOiAnOHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjQ1XG4gIH1cbiAgY29uc3QgbWFwQmFkZ2U6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgY29sb3I6ICcjMjU2QjQ1JyxcbiAgICBiYWNrZ3JvdW5kOiAnI2YwZjdmMycsXG4gICAgYm9yZGVyUmFkaXVzOiAnOTk5cHgnLFxuICAgIHBhZGRpbmc6ICcycHggMTBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnNnB4J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0namltdS13aWRnZXQgd2lkZ2V0LWNvbXBhcmUtY2VuYXJpb3MnIHN0eWxlPXt3cmFwfT5cbiAgICAgIHtsZWZ0TWFwSWQgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17bGVmdE1hcElkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdikgPT4ge1xuICAgICAgICAgICAgaWYgKGptdikgc2V0TGVmdCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3JpZ2h0TWFwSWQgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cmlnaHRNYXBJZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHtcbiAgICAgICAgICAgIGlmIChqbXYpIHNldFJpZ2h0KHsgam12LCBsYXllclN0YXRlOiBudWxsIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHshaGFzQm90aE1hcHMgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzg4OCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RlZmF1bHRNZXNzYWdlcy5zZWxlY3RNYXBzRmlyc3R9PC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aGFzQm90aE1hcHMgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25UaXRsZX0+e2RlZmF1bHRNZXNzYWdlcy5jb21wYXJlVGl0bGV9PC9kaXY+XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAwMjAnLCBmb250U2l6ZTogJzEycHgnLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PntlcnJvcn08L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17ZmllbGRHcm91cH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0TWVzc2FnZXMucG5yaDJMYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFBucmgyfVxuICAgICAgICAgICAgICBvcHRpb25zPXthbGxQbnJoMn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmcgJiYgYWxsUG5yaDIubGVuZ3RoID09PSAwID8gZGVmYXVsdE1lc3NhZ2VzLmxvYWRpbmcgOiBkZWZhdWx0TWVzc2FnZXMuc2VsZWN0UG5yaDJ9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8IGFsbFBucmgyLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUG5yaDJTZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17ZmllbGRHcm91cH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PntkZWZhdWx0TWVzc2FnZXMuc3ViQmFjaWFMYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFN1YkJhY2lhfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdWJCYWNpYU9wdGlvbnN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtsb2FkaW5nICYmIGFsbFN1YkJhY2lhcy5sZW5ndGggPT09IDAgPyBkZWZhdWx0TWVzc2FnZXMubG9hZGluZyA6IGRlZmF1bHRNZXNzYWdlcy5zZWxlY3RTdWJCYWNpYX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgYWxsU3ViQmFjaWFzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU3ViQmFjaWFTZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAnNnB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxMnB4JyxcbiAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBkYXNoZWQgI2NjYydcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkR3JvdXB9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bWFwQmFkZ2V9PntkZWZhdWx0TWVzc2FnZXMubWFwTGVmdExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NlbmFyaW9MYWJlbChjZW5hcmlvTGVmdCl9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Q0VOQVJJT19PUFRJT05TfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuc2VsZWN0Q2VuYXJpb31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DZW5hcmlvTGVmdFNlbGVjdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtmaWVsZEdyb3VwfT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e21hcEJhZGdlfT57ZGVmYXVsdE1lc3NhZ2VzLm1hcFJpZ2h0TGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2VuYXJpb0xhYmVsKGNlbmFyaW9SaWdodCl9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Q0VOQVJJT19PUFRJT05TfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuc2VsZWN0Q2VuYXJpb31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DZW5hcmlvUmlnaHRTZWxlY3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3dhcm5pbmdCb3h9PntkZWZhdWx0TWVzc2FnZXMuc2NlbmFyaW9XYXJuaW5nfTwvZGl2PlxuXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzhweCcsIG1hcmdpblRvcDogJzEycHgnLCBmb250U2l6ZTogJzEzcHgnLCBjb2xvcjogJyMzMzMnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgY2hlY2tlZD17c3luY1ZpZXdzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0U3luY1ZpZXdzKGUudGFyZ2V0LmNoZWNrZWQpIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5zeW5jVmlld3N9XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxMYXllckxlZ2VuZFxuICAgICAgICAgICAgZ3JvdXBzPXtkaXNwbGF5TGVnZW5kR3JvdXBzfVxuICAgICAgICAgICAgdGl0bGU9e2RlZmF1bHRNZXNzYWdlcy5sZWdlbmRUaXRsZX1cbiAgICAgICAgICAgIGVtcHR5VGV4dD17ZGVmYXVsdE1lc3NhZ2VzLmxlZ2VuZEVtcHR5fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7aGFzRmlsdGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvb3Rlcn0+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2NsZWFyQnRufSBvbkNsaWNrPXsoKSA9PiB7IHZvaWQgb25DbGVhcigpIH19IHR5cGU9J2J1dHRvbic+XG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5jbGVhcn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=