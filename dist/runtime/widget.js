System.register(["jimu-core","jimu-arcgis","jimu-core/react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/compareCenariosBridge.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/compareCenariosBridge.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCompareBridgeSnapshot: () => (/* binding */ getCompareBridgeSnapshot),
/* harmony export */   recordToClassColors: () => (/* binding */ recordToClassColors),
/* harmony export */   subscribeCompareBridge: () => (/* binding */ subscribeCompareBridge),
/* harmony export */   updateCompareBridge: () => (/* binding */ updateCompareBridge)
/* harmony export */ });
const EMPTY = {
    selectedPnrh2: '',
    selectedSubBacia: '',
    cenarioLeft: 'atual',
    cenarioRight: 'atual',
    stats: null,
    statsLoading: false,
    legendGroups: [],
    classColors: {},
    hasMapsReady: false
};
const snapshots = new Map();
const listeners = new Map();
const ensureGroup = (linkGroupId) => {
    const id = (linkGroupId || 'default').trim() || 'default';
    if (!snapshots.has(id))
        snapshots.set(id, Object.assign({}, EMPTY));
    if (!listeners.has(id))
        listeners.set(id, new Set());
    return id;
};
const getCompareBridgeSnapshot = (linkGroupId) => {
    const id = ensureGroup(linkGroupId);
    return snapshots.get(id) || EMPTY;
};
const subscribeCompareBridge = (linkGroupId, listener) => {
    var _a;
    const id = ensureGroup(linkGroupId);
    (_a = listeners.get(id)) === null || _a === void 0 ? void 0 : _a.add(listener);
    return () => { var _a; (_a = listeners.get(id)) === null || _a === void 0 ? void 0 : _a.delete(listener); };
};
const updateCompareBridge = (linkGroupId, patch) => {
    var _a;
    const id = ensureGroup(linkGroupId);
    const prev = snapshots.get(id) || EMPTY;
    snapshots.set(id, Object.assign(Object.assign({}, prev), patch));
    (_a = listeners.get(id)) === null || _a === void 0 ? void 0 : _a.forEach(fn => { fn(); });
};
const recordToClassColors = (record) => {
    return new Map(Object.entries(record));
};


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/ContentPanel.tsx":
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/components/ContentPanel.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentPanel: () => (/* binding */ ContentPanel)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _ScenarioIndicators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenarioIndicators */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/ScenarioIndicators.tsx");
/* harmony import */ var _LayerLegend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerLegend */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/LayerLegend.tsx");
/** @jsx jsx */



const scrollHoverCss = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  &.compare-cenarios-panel .compare-cenarios-scroll {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  &.compare-cenarios-panel:hover .compare-cenarios-scroll {
    scrollbar-color: rgba(0, 0, 0, 0.28) transparent;
  }
  &.compare-cenarios-panel .compare-cenarios-scroll::-webkit-scrollbar {
    width: 6px;
  }
  &.compare-cenarios-panel .compare-cenarios-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  &.compare-cenarios-panel .compare-cenarios-scroll::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }
  &.compare-cenarios-panel:hover .compare-cenarios-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.28);
  }
`;
const ContentPanel = ({ stats, statsLoading, bacia, subBacia, compareCenarios, classColors, legendGroups, panelStyle, rounded = 'bottom', cenarioMessages, legendTitle, legendEmpty }) => {
    const shell = Object.assign({ background: '#fff', border: '1px solid #d0d0d0', boxShadow: '0 4px 16px rgba(0,0,0,0.14)', borderRadius: rounded === 'all' ? '12px' : '0 0 12px 12px', borderTop: rounded === 'all' ? '1px solid #d0d0d0' : 'none', padding: '12px 14px 14px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch', overflow: 'hidden', boxSizing: 'border-box', width: '100%', height: '100%', minHeight: 0 }, panelStyle);
    const scroll = {
        flex: '1 1 auto',
        overflowY: 'auto',
        overflowX: 'hidden',
        minHeight: 0
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compare-cenarios-panel', css: scrollHoverCss, style: shell },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compare-cenarios-scroll', style: scroll },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ScenarioIndicators__WEBPACK_IMPORTED_MODULE_1__.ScenarioIndicators, { stats: stats, loading: statsLoading, bacia: bacia, subBacia: subBacia, compareCenarios: compareCenarios, classColors: classColors, messages: cenarioMessages }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LayerLegend__WEBPACK_IMPORTED_MODULE_2__.LayerLegend, { groups: legendGroups, title: legendTitle, emptyText: legendEmpty }))));
};


/***/ }),

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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/** @jsx jsx */


const { useState, useEffect, useRef, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const ChevronDownIcon = () => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', "aria-hidden": 'true' },
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: '6 9 12 15 18 9' })));
const Dropdown = ({ value, options, placeholder, disabled, onChange }) => {
    const [open, setOpen] = useState(false);
    const [listPos, setListPos] = useState({ top: 0, left: 0, width: 0 });
    const wrapRef = useRef(null);
    const portalIdRef = useRef(`compare-cenarios-dd-${Math.random().toString(36).slice(2, 9)}`);
    const updatePosition = useCallback(() => {
        if (!wrapRef.current)
            return;
        const r = wrapRef.current.getBoundingClientRect();
        setListPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }, []);
    useEffect(() => {
        if (!open)
            return;
        updatePosition();
        const onDocClick = (e) => {
            var _a;
            const t = e.target;
            if ((_a = wrapRef.current) === null || _a === void 0 ? void 0 : _a.contains(t))
                return;
            const portal = document.getElementById(portalIdRef.current);
            if (portal === null || portal === void 0 ? void 0 : portal.contains(t))
                return;
            setOpen(false);
        };
        document.addEventListener('mousedown', onDocClick);
        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);
        return () => {
            document.removeEventListener('mousedown', onDocClick);
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [open, updatePosition]);
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
        position: 'fixed',
        top: listPos.top,
        left: listPos.left,
        width: listPos.width,
        maxHeight: '220px',
        overflowY: 'auto',
        background: '#fff',
        border: '1px solid #d0d0d0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        zIndex: 100000,
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
    const listEl = open && typeof document !== 'undefined' ? (react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { id: portalIdRef.current, style: list },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { style: itemStyle(!value), onMouseDown: (e) => { e.preventDefault(); selectValue(''); }, onMouseEnter: (e) => { e.currentTarget.style.background = '#f5f5f5'; }, onMouseLeave: (e) => { e.currentTarget.style.background = !value ? '#f0f7f3' : 'transparent'; } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#888' } }, placeholder)),
        options.map(opt => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { key: opt, style: itemStyle(opt === value), onMouseDown: (e) => { e.preventDefault(); selectValue(opt); }, onMouseEnter: (e) => { e.currentTarget.style.background = '#f5f5f5'; }, onMouseLeave: (e) => { e.currentTarget.style.background = opt === value ? '#f0f7f3' : 'transparent'; } }, opt)))), document.body)) : null;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: wrapRef, style: { position: 'relative' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: pill, onClick: toggle, role: 'button', tabIndex: 0, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            } } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: valueStyle }, value || placeholder),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: chevron },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChevronDownIcon, null))),
        listEl));
};


/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/FilterBar.tsx":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/components/FilterBar.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBar: () => (/* binding */ FilterBar)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/Dropdown.tsx");
/** @jsx jsx */


const FilterBar = ({ title, error, loading, allPnrh2, allSubBacias, subBaciaOptions, selectedPnrh2, selectedSubBacia, cenarioLeft, cenarioRight, syncViews, hasActiveFilter, cenarioOptions, cenarioLabel, messages, onPnrh2Select, onSubBaciaSelect, onCenarioLeftSelect, onCenarioRightSelect, onSyncViewsChange, onClear, barStyle, rounded = 'top' }) => {
    const topBar = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        gap: '10px 14px',
        width: '100%'
    };
    const filterCell = {
        flex: '1 1 140px',
        minWidth: 130,
        maxWidth: 220
    };
    const filterLabel = {
        display: 'block',
        fontSize: '11px',
        fontWeight: 600,
        color: '#555',
        marginBottom: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.03em'
    };
    const actionsCell = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flex: '0 0 auto',
        marginLeft: 'auto',
        paddingBottom: '2px'
    };
    const clearBtn = {
        background: '#256B45',
        color: '#fff',
        border: 'none',
        borderRadius: '999px',
        padding: '0 18px',
        height: '34px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        whiteSpace: 'nowrap'
    };
    const syncLabel = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        color: '#333',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
    };
    const shell = Object.assign({ background: '#fff', border: '1px solid #d0d0d0', boxShadow: '0 4px 16px rgba(0,0,0,0.14)', borderRadius: rounded === 'all' ? '12px' : '12px 12px 0 0', padding: '10px 14px 12px', borderBottom: rounded === 'all' ? '1px solid #d0d0d0' : '2px solid #256B45', overflow: 'visible', boxSizing: 'border-box', width: '100%' }, barStyle);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: shell },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: topBar },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { flex: '1 1 100%', fontSize: '14px', fontWeight: 700, color: '#256B45', marginBottom: '2px' } }, title),
            error && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { flex: '1 1 100%', color: '#b00020', fontSize: '12px' } }, error)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: filterCell },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: filterLabel }, messages.pnrh2Label),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { value: selectedPnrh2, options: allPnrh2, placeholder: loading && allPnrh2.length === 0 ? messages.loading : messages.selectPnrh2, disabled: loading || allPnrh2.length === 0, onChange: onPnrh2Select })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: filterCell },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: filterLabel }, messages.subBaciaLabel),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { value: selectedSubBacia, options: subBaciaOptions, placeholder: loading && allSubBacias.length === 0 ? messages.loading : messages.selectSubBacia, disabled: loading || allSubBacias.length === 0, onChange: onSubBaciaSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: filterCell },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: filterLabel }, messages.mapLeftLabel),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { value: cenarioLabel(cenarioLeft), options: cenarioOptions, placeholder: messages.selectCenario, onChange: onCenarioLeftSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: filterCell },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: filterLabel }, messages.mapRightLabel),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { value: cenarioLabel(cenarioRight), options: cenarioOptions, placeholder: messages.selectCenario, onChange: onCenarioRightSelect })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: actionsCell },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: syncLabel },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'checkbox', checked: syncViews, onChange: (e) => { onSyncViewsChange(e.target.checked); } }),
                    messages.syncViews),
                hasActiveFilter && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: clearBtn, onClick: onClear, type: 'button' }, messages.clear))))));
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
        width: '100%',
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

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/ScenarioIndicators.tsx":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/components/ScenarioIndicators.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScenarioIndicators: () => (/* binding */ ScenarioIndicators)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _legendUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legendUtils */ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts");
/** @jsx jsx */


const cenarioLabel = (id, messages) => {
    if (id === 'ssp245')
        return messages.cenarioSsp245;
    if (id === 'ssp585')
        return messages.cenarioSsp585;
    return messages.cenarioAtual;
};
const ScenarioIndicators = ({ stats, loading, bacia, subBacia, compareCenarios, classColors, messages }) => {
    if (!bacia && !subBacia) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', color: '#888', fontStyle: 'italic', textAlign: 'center', padding: '8px 0' } }, messages.cenariosSelectFilter));
    }
    if (loading) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontStyle: 'italic', fontSize: '13px', textAlign: 'center', padding: '8px 0' } }, messages.cenariosLoading));
    }
    if (!stats) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#888', fontStyle: 'italic', fontSize: '13px', textAlign: 'center', padding: '8px 0' } }, messages.cenariosSelectFilter));
    }
    const uniqueIds = Array.from(new Set(compareCenarios));
    const cenarios = uniqueIds.map(id => ({
        id,
        label: cenarioLabel(id, messages),
        stats: stats[id]
    }));
    if (cenarios.every(c => c.stats.total === 0)) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', color: '#888', fontStyle: 'italic', textAlign: 'center', padding: '8px 0' } }, messages.cenariosNoData));
    }
    const allClasses = new Map();
    cenarios.forEach(c => {
        c.stats.classes.forEach(cls => {
            if (!allClasses.has(cls.classe) || (allClasses.get(cls.classe) || 0) < cls.severity) {
                allClasses.set(cls.classe, cls.severity);
            }
        });
    });
    const orderedClasses = Array.from(allClasses.entries())
        .map(([classe, severity]) => ({ classe, severity }))
        .sort((a, b) => b.severity - a.severity);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        (bacia || subBacia) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '8px', fontSize: '12px' } },
            bacia && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#666' } },
                    messages.cenarioBaciaLabel,
                    ": "),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, bacia))),
            subBacia && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#666' } },
                    messages.cenarioSubBaciaLabel,
                    ": "),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, subBacia))))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', fontWeight: 600, color: '#333', marginBottom: '6px' } }, messages.cenariosChartTitle),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' } }, orderedClasses.map(cls => {
            const counts = cenarios.map(c => { var _a; return ((_a = c.stats.classes.find(d => d.classe === cls.classe)) === null || _a === void 0 ? void 0 : _a.count) || 0; });
            const maxC = Math.max(...counts, 1);
            const color = classColors.get(cls.classe) || (0,_legendUtils__WEBPACK_IMPORTED_MODULE_1__.severityColor)(cls.severity);
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: cls.classe },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '11px', color: '#444', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { width: 10, height: 10, background: color, borderRadius: 2, display: 'inline-block' } }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, cls.classe)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px', borderBottom: '1px solid #eee', paddingBottom: '2px' } }, cenarios.map((cen, i) => {
                    const h = (counts[i] / maxC) * 50;
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: cen.id, style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }, title: `${cen.label}: ${counts[i]}` },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '10px', color: '#333', fontWeight: 600 } }, counts[i]),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                width: '70%',
                                maxWidth: '36px',
                                height: `${Math.max(h, 1)}px`,
                                background: color,
                                borderRadius: '3px 3px 0 0',
                                border: '1px solid #256B45'
                            } })));
                })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', gap: '6px', marginTop: '2px' } }, cenarios.map(cen => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: cen.id, style: { flex: 1, fontSize: '9px', color: '#888', textAlign: 'center' } }, cen.label))))));
        }))));
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
/* harmony export */   extractClassColors: () => (/* binding */ extractClassColors),
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
function extractClassColors(layers) {
    const merged = new Map();
    const sources = [layers.indice, layers.cenarioGrande245, layers.cenarioGrande585];
    sources.forEach(layer => {
        if (!layer)
            return;
        const colors = extractRendererColors(layer.renderer);
        colors.forEach((css, classe) => {
            if (!merged.has(classe))
                merged.set(classe, css);
        });
    });
    return merged;
}
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
    var _a, _b, _c, _d, _e;
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
        rightMapWidgetId: cfg === null || cfg === void 0 ? void 0 : cfg.rightMapWidgetId,
        widgetPart: (_a = cfg === null || cfg === void 0 ? void 0 : cfg.widgetPart) !== null && _a !== void 0 ? _a : 'combined',
        linkGroupId: (_b = cfg === null || cfg === void 0 ? void 0 : cfg.linkGroupId) !== null && _b !== void 0 ? _b : 'default',
        tTopBarHeight: (_c = cfg === null || cfg === void 0 ? void 0 : cfg.tTopBarHeight) !== null && _c !== void 0 ? _c : 120,
        tStemWidthPercent: (_d = cfg === null || cfg === void 0 ? void 0 : cfg.tStemWidthPercent) !== null && _d !== void 0 ? _d : 42,
        tStemMinHeight: (_e = cfg === null || cfg === void 0 ? void 0 : cfg.tStemMinHeight) !== null && _e !== void 0 ? _e : 220
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
                yield view.goTo(targetExtent, { animate: false });
                const limitScale = Math.max(subBacias.maxScale || 0, indice.maxScale || 0);
                if (limitScale > 0 && view.scale < limitScale) {
                    yield view.goTo({ target: targetExtent.center, scale: limitScale * 1.1 }, { animate: false });
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
                yield jimuMapView.view.goTo(state.initialViewpoint, { animate: false });
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

/***/ "./your-extensions/widgets/view-layers-toggle/src/runtime/scenarioStats.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/runtime/scenarioStats.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildCenarioStats: () => (/* binding */ buildCenarioStats),
/* harmony export */   cenarioIdToLabel: () => (/* binding */ cenarioIdToLabel),
/* harmony export */   countFeaturesByClass: () => (/* binding */ countFeaturesByClass),
/* harmony export */   loadCenariosStats: () => (/* binding */ loadCenariosStats)
/* harmony export */ });
/* harmony import */ var _mapLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapLayers */ "./your-extensions/widgets/view-layers-toggle/src/runtime/mapLayers.ts");
/* harmony import */ var _legendUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legendUtils */ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const emptyStats = () => ({
    classes: [],
    bySubBacia: [],
    total: 0,
    critical: 0
});
const countFeaturesByClass = (features, fieldName) => {
    const map = new Map();
    features.forEach(f => {
        var _a;
        const raw = (_a = f.attributes) === null || _a === void 0 ? void 0 : _a[fieldName];
        const classe = raw != null && raw !== '' ? String(raw).trim() : 'sem';
        map.set(classe, (map.get(classe) || 0) + 1);
    });
    return Array.from(map.entries())
        .map(([classe, count]) => ({ classe, count, severity: (0,_legendUtils__WEBPACK_IMPORTED_MODULE_1__.classSeverity)(classe) }))
        .sort((a, b) => b.severity - a.severity || b.count - a.count);
};
const buildCenarioStats = (features, classeField, subBaciaField) => {
    const bySub = new Map();
    let total = 0;
    let critical = 0;
    features.forEach(f => {
        var _a, _b, _c;
        const sub = String((_b = (_a = f.attributes) === null || _a === void 0 ? void 0 : _a[subBaciaField]) !== null && _b !== void 0 ? _b : '').trim() || '—';
        const classeRaw = (_c = f.attributes) === null || _c === void 0 ? void 0 : _c[classeField];
        const classe = classeRaw != null && classeRaw !== '' ? String(classeRaw).trim() : 'sem';
        const sev = (0,_legendUtils__WEBPACK_IMPORTED_MODULE_1__.classSeverity)(classe);
        total += 1;
        if (sev >= 3)
            critical += 1;
        const e = bySub.get(sub) || { total: 0, critical: 0 };
        e.total += 1;
        if (sev >= 3)
            e.critical += 1;
        bySub.set(sub, e);
    });
    const bySubArr = Array.from(bySub.entries())
        .map(([subBacia, info]) => ({ subBacia, total: info.total, critical: info.critical }))
        .sort((a, b) => b.critical - a.critical || b.total - a.total);
    return {
        classes: countFeaturesByClass(features, classeField),
        bySubBacia: bySubArr,
        total,
        critical
    };
};
function loadCenariosStats(layers, config, pnrh2, subBacia) {
    return __awaiter(this, void 0, void 0, function* () {
        const { indice, cenarioGrande245, cenarioGrande585 } = layers;
        const where = (0,_mapLayers__WEBPACK_IMPORTED_MODULE_0__.buildWhere)(config, pnrh2, subBacia);
        const expression = where !== '1=1' ? where : '1=1';
        const subField = config.subBaciaField;
        const [resAtual, res245, res585] = yield Promise.all([
            indice
                ? indice.queryFeatures({
                    where: expression,
                    outFields: [config.classeField, subField],
                    returnGeometry: false,
                    num: 50000
                })
                : Promise.resolve(null),
            cenarioGrande245
                ? cenarioGrande245.queryFeatures({
                    where: expression,
                    outFields: [config.classeField245, subField],
                    returnGeometry: false,
                    num: 50000
                })
                : Promise.resolve(null),
            cenarioGrande585
                ? cenarioGrande585.queryFeatures({
                    where: expression,
                    outFields: [config.classeField585, subField],
                    returnGeometry: false,
                    num: 50000
                })
                : Promise.resolve(null)
        ]);
        return {
            atual: resAtual ? buildCenarioStats(resAtual.features, config.classeField, subField) : emptyStats(),
            ssp245: res245 ? buildCenarioStats(res245.features, config.classeField245, subField) : emptyStats(),
            ssp585: res585 ? buildCenarioStats(res585.features, config.classeField585, subField) : emptyStats()
        };
    });
}
const cenarioIdToLabel = (id, messages) => {
    if (id === 'ssp245')
        return messages.cenarioSsp245;
    if (id === 'ssp585')
        return messages.cenarioSsp585;
    return messages.cenarioAtual;
};


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
    pnrh2Label: 'Bacia hidrográfica',
    subBaciaLabel: 'Sub-bacia',
    selectPnrh2: 'Selecione',
    selectSubBacia: 'Selecione uma sub-bacia',
    mapLeftLabel: 'Mapa esquerdo',
    mapRightLabel: 'Mapa direito',
    cenarioAtual: 'Atual',
    cenarioSsp245: 'Moderado',
    cenarioSsp585: 'Pessimista',
    selectCenario: 'Selecione um cenário',
    clear: 'Limpar',
    errorLoading: 'Erro ao carregar valores das camadas.',
    errorCors: 'Falha de CORS: o servidor ArcGIS não permite chamadas desta origem.',
    errorAuth: 'A camada exige autenticação. Compartilhe os itens como públicos ou faça login.',
    scenarioWarning: 'Cenários Moderado e Pessimista: dados da Bacia do Rio Grande.',
    compareTitle: 'Comparar cenários',
    syncViews: 'Sincronizar mapas',
    legendTitle: 'Legenda',
    legendEmpty: 'Legenda indisponível — aguarde o carregamento das camadas.',
    cenarioBaciaLabel: 'Bacia',
    cenarioSubBaciaLabel: 'Sub-bacia',
    cenariosLoading: 'Calculando trechos por classe...',
    cenariosSelectFilter: 'Selecione bacia e/ou sub-bacia para ver a comparação.',
    cenariosChartTitle: 'Trechos por classe em cada cenário',
    cenariosNoData: 'Sem dados para a região selecionada.',
    panelWaitingForFilters: 'Aguardando o widget de filtros na mesma página.',
    panelLinkGroupHint: 'Use o mesmo ID de vínculo:'
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

/***/ }),

/***/ "react-dom":
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

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
/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FilterBar */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/FilterBar.tsx");
/* harmony import */ var _components_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ContentPanel */ "./your-extensions/widgets/view-layers-toggle/src/runtime/components/ContentPanel.tsx");
/* harmony import */ var _compareCenariosBridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compareCenariosBridge */ "./your-extensions/widgets/view-layers-toggle/src/runtime/compareCenariosBridge.ts");
/* harmony import */ var _mapLayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapLayers */ "./your-extensions/widgets/view-layers-toggle/src/runtime/mapLayers.ts");
/* harmony import */ var _legendUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./legendUtils */ "./your-extensions/widgets/view-layers-toggle/src/runtime/legendUtils.ts");
/* harmony import */ var _scenarioStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scenarioStats */ "./your-extensions/widgets/view-layers-toggle/src/runtime/scenarioStats.ts");
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
    var _a, _b, _c, _d;
    const config = (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.mergeConfig)(props.config);
    const widgetPart = config.widgetPart;
    const linkGroupId = config.linkGroupId;
    const isPanelOnly = widgetPart === 'panel';
    const isFiltersOnly = widgetPart === 'filters';
    const isCombined = widgetPart === 'combined';
    const isPublisher = isFiltersOnly || isCombined;
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
    const [statsLoading, setStatsLoading] = useState(false);
    const [cenariosStats, setCenariosStats] = useState(null);
    const [error, setError] = useState('');
    const [syncViews, setSyncViews] = useState(true);
    const [legendGroups, setLegendGroups] = useState([]);
    const [classColors, setClassColors] = useState(new Map());
    const subBaciaToPnrh2Ref = useRef(new Map());
    const pnrh2ToSubBaciasRef = useRef(new Map());
    const syncingRef = useRef(false);
    const applyingRef = useRef(false);
    const initialViewSyncedRef = useRef(false);
    const prevFilterRef = useRef({ pnrh2: '', subBacia: '' });
    const statsLoadKeyRef = useRef('');
    const hasBothMaps = Boolean(leftMapId && rightMapId);
    const hasRegion = Boolean(selectedPnrh2 || selectedSubBacia);
    const hasActiveFilter = Boolean(selectedPnrh2 || selectedSubBacia || cenarioLeft !== 'atual' || cenarioRight !== 'atual');
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
        const opts = yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.loadBasinOptions)(layerState.layers.subBacias, config);
        subBaciaToPnrh2Ref.current = opts.subBaciaToPnrh2;
        pnrh2ToSubBaciasRef.current = opts.pnrh2ToSubBacias;
        setAllPnrh2(opts.allPnrh2);
        setAllSubBacias(opts.allSubBacias);
        setLegendGroups((0,_legendUtils__WEBPACK_IMPORTED_MODULE_7__.buildLegendGroups)(layerState.layers));
        setClassColors((0,_legendUtils__WEBPACK_IMPORTED_MODULE_7__.extractClassColors)(layerState.layers));
    }), [config]);
    const syncRightToLeft = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!left.jmv || !right.jmv)
            return;
        syncingRef.current = true;
        try {
            const lv = left.jmv.view;
            const rv = right.jmv.view;
            yield rv.goTo({
                center: lv.center,
                scale: lv.scale,
                rotation: lv.rotation
            }, { animate: false });
        }
        catch (_a) { }
        syncingRef.current = false;
    }), [left.jmv, right.jmv]);
    const applyToBothMaps = useCallback((pnrh2_1, subBacia_1, leftCenario_1, rightCenario_1, ...args_1) => __awaiter(this, [pnrh2_1, subBacia_1, leftCenario_1, rightCenario_1, ...args_1], void 0, function* (pnrh2, subBacia, leftCenario, rightCenario, zoom = false) {
        if (!left.layerState && !right.layerState)
            return;
        applyingRef.current = true;
        try {
            const tasks = [];
            if (left.jmv && left.layerState) {
                tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.applyScenarioToMap)(left.jmv, left.layerState, config, leftCenario, pnrh2, subBacia, zoom));
            }
            if (right.jmv && right.layerState) {
                tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.applyScenarioToMap)(right.jmv, right.layerState, config, rightCenario, pnrh2, subBacia, false));
            }
            yield Promise.all(tasks);
            if (zoom) {
                yield syncRightToLeft();
            }
        }
        finally {
            applyingRef.current = false;
        }
    }), [left.jmv, left.layerState, right.jmv, right.layerState, config, syncRightToLeft]);
    const initSlot = useCallback((jmv, setter, isPrimaryForOptions) => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            setError('');
            const layerState = yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.initMapLayers)(jmv, config);
            setter({ jmv, layerState });
            if (isPrimaryForOptions) {
                yield loadOptionsFromMap(layerState);
            }
            yield (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.applyScenarioToMap)(jmv, layerState, config, 'atual', '', '', false);
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
        return () => { (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.removeOwnedLayers)(left.jmv, left.layerState); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [left.jmv]);
    useEffect(() => {
        if (!right.jmv || right.layerState)
            return;
        void initSlot(right.jmv, setRight, false);
        return () => { (0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.removeOwnedLayers)(right.jmv, right.layerState); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [right.jmv]);
    const layersReady = Boolean(((_c = left.layerState) === null || _c === void 0 ? void 0 : _c.ready) && ((_d = right.layerState) === null || _d === void 0 ? void 0 : _d.ready));
    useEffect(() => {
        if (!layersReady || !left.jmv || !right.jmv)
            return;
        const run = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!initialViewSyncedRef.current) {
                applyingRef.current = true;
                try {
                    yield applyToBothMaps('', '', 'atual', 'atual', false);
                    const vp = (_a = left.layerState) === null || _a === void 0 ? void 0 : _a.initialViewpoint;
                    if (vp) {
                        yield left.jmv.view.goTo(vp, { animate: false });
                        yield syncRightToLeft();
                    }
                }
                finally {
                    applyingRef.current = false;
                }
                initialViewSyncedRef.current = true;
                prevFilterRef.current = { pnrh2: '', subBacia: '' };
                return;
            }
            const filterChanged = prevFilterRef.current.pnrh2 !== selectedPnrh2 ||
                prevFilterRef.current.subBacia !== selectedSubBacia;
            const shouldZoom = filterChanged && Boolean(selectedPnrh2 || selectedSubBacia);
            prevFilterRef.current = { pnrh2: selectedPnrh2, subBacia: selectedSubBacia };
            yield applyToBothMaps(selectedPnrh2, selectedSubBacia, cenarioLeft, cenarioRight, shouldZoom);
        });
        void run();
    }, [
        layersReady,
        cenarioLeft,
        cenarioRight,
        selectedPnrh2,
        selectedSubBacia,
        left.jmv,
        right.jmv,
        applyToBothMaps,
        syncRightToLeft
    ]);
    useEffect(() => {
        var _a;
        if (!hasRegion || !((_a = left.layerState) === null || _a === void 0 ? void 0 : _a.layers.indice)) {
            setCenariosStats(null);
            statsLoadKeyRef.current = '';
            return;
        }
        const key = `${selectedPnrh2}|${selectedSubBacia}`;
        if (statsLoadKeyRef.current === key)
            return;
        let cancelled = false;
        setStatsLoading(true);
        (0,_scenarioStats__WEBPACK_IMPORTED_MODULE_8__.loadCenariosStats)(left.layerState.layers, config, selectedPnrh2, selectedSubBacia)
            .then(stats => {
            if (cancelled)
                return;
            statsLoadKeyRef.current = key;
            setCenariosStats(stats);
        })
            .catch(err => {
            console.warn('[compare-cenarios] stats error', err);
            if (!cancelled)
                setCenariosStats(null);
        })
            .finally(() => {
            if (!cancelled)
                setStatsLoading(false);
        });
        return () => { cancelled = true; };
    }, [hasRegion, selectedPnrh2, selectedSubBacia, layersReady, config]);
    useEffect(() => {
        if (!syncViews || !left.jmv || !right.jmv)
            return;
        const leftView = left.jmv.view;
        let debounceTimer;
        const syncFromLeft = () => {
            if (applyingRef.current || syncingRef.current)
                return;
            if (debounceTimer)
                window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(() => {
                void syncRightToLeft();
            }, 200);
        };
        const h1 = leftView.watch('extent', syncFromLeft);
        return () => {
            h1.remove();
            if (debounceTimer)
                window.clearTimeout(debounceTimer);
        };
    }, [syncViews, left.jmv, right.jmv, syncRightToLeft]);
    const onPnrh2Select = (value) => {
        setSelectedPnrh2(value);
        if (value && selectedSubBacia) {
            const subs = pnrh2ToSubBaciasRef.current.get(value) || [];
            if (!subs.includes(selectedSubBacia)) {
                setSelectedSubBacia('');
            }
        }
    };
    const onSubBaciaSelect = (value) => {
        setSelectedSubBacia(value);
        if (value && !selectedPnrh2) {
            const auto = subBaciaToPnrh2Ref.current.get(value);
            if (auto)
                setSelectedPnrh2(auto);
        }
    };
    const onCenarioLeftSelect = (label) => {
        setCenarioLeft(labelToCenario(label));
    };
    const onCenarioRightSelect = (label) => {
        setCenarioRight(labelToCenario(label));
    };
    const onClear = () => __awaiter(this, void 0, void 0, function* () {
        applyingRef.current = true;
        setSelectedPnrh2('');
        setSelectedSubBacia('');
        setCenarioLeft('atual');
        setCenarioRight('atual');
        setCenariosStats(null);
        statsLoadKeyRef.current = '';
        prevFilterRef.current = { pnrh2: '', subBacia: '' };
        try {
            const tasks = [];
            if (left.jmv && left.layerState)
                tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.restoreInitialView)(left.jmv, left.layerState));
            if (right.jmv && right.layerState)
                tasks.push((0,_mapLayers__WEBPACK_IMPORTED_MODULE_6__.restoreInitialView)(right.jmv, right.layerState));
            yield Promise.all(tasks);
            yield syncRightToLeft();
        }
        finally {
            applyingRef.current = false;
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
        return (0,_legendUtils__WEBPACK_IMPORTED_MODULE_7__.buildLegendGroups)(source);
    }, [legendGroups, left.layerState, right.layerState]);
    const cenarioMessages = useMemo(() => ({
        cenariosLoading: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenariosLoading,
        cenariosSelectFilter: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenariosSelectFilter,
        cenarioBaciaLabel: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioBaciaLabel,
        cenarioSubBaciaLabel: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSubBaciaLabel,
        cenarioAtual: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioAtual,
        cenarioSsp245: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp245,
        cenarioSsp585: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenarioSsp585,
        cenariosChartTitle: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenariosChartTitle,
        cenariosNoData: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].cenariosNoData
    }), []);
    const filterMessages = useMemo(() => ({
        pnrh2Label: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].pnrh2Label,
        subBaciaLabel: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].subBaciaLabel,
        mapLeftLabel: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].mapLeftLabel,
        mapRightLabel: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].mapRightLabel,
        loading: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].loading,
        selectPnrh2: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectPnrh2,
        selectSubBacia: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectSubBacia,
        selectCenario: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectCenario,
        syncViews: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].syncViews,
        clear: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clear
    }), []);
    useEffect(() => {
        if (!isPublisher)
            return;
        (0,_compareCenariosBridge__WEBPACK_IMPORTED_MODULE_5__.updateCompareBridge)(linkGroupId, {
            selectedPnrh2,
            selectedSubBacia,
            cenarioLeft,
            cenarioRight,
            stats: cenariosStats,
            statsLoading,
            legendGroups: displayLegendGroups,
            classColors: Object.fromEntries(classColors),
            hasMapsReady: hasBothMaps && layersReady
        });
    }, [
        isPublisher,
        linkGroupId,
        selectedPnrh2,
        selectedSubBacia,
        cenarioLeft,
        cenarioRight,
        cenariosStats,
        statsLoading,
        displayLegendGroups,
        classColors,
        hasBothMaps,
        layersReady
    ]);
    const bridgeState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useSyncExternalStore((cb) => (0,_compareCenariosBridge__WEBPACK_IMPORTED_MODULE_5__.subscribeCompareBridge)(linkGroupId, cb), () => (0,_compareCenariosBridge__WEBPACK_IMPORTED_MODULE_5__.getCompareBridgeSnapshot)(linkGroupId));
    const panelStats = isPanelOnly ? bridgeState.stats : cenariosStats;
    const panelStatsLoading = isPanelOnly ? bridgeState.statsLoading : statsLoading;
    const panelBacia = isPanelOnly ? bridgeState.selectedPnrh2 : selectedPnrh2;
    const panelSubBacia = isPanelOnly ? bridgeState.selectedSubBacia : selectedSubBacia;
    const panelCenarios = isPanelOnly
        ? [bridgeState.cenarioLeft, bridgeState.cenarioRight]
        : [cenarioLeft, cenarioRight];
    const panelLegendGroups = isPanelOnly ? bridgeState.legendGroups : displayLegendGroups;
    const panelClassColors = isPanelOnly
        ? (0,_compareCenariosBridge__WEBPACK_IMPORTED_MODULE_5__.recordToClassColors)(bridgeState.classColors)
        : classColors;
    const tShapeCss = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &.widget-compare-cenarios.t-layout {
      background: transparent !important;
      box-shadow: none !important;
      border: none !important;
      padding: 0 !important;
      overflow: visible !important;
      pointer-events: none;
    }
  `;
    const panelSurface = {
        background: '#fff',
        border: '1px solid #d0d0d0',
        boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
        pointerEvents: 'auto'
    };
    const root = {
        fontFamily: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        background: 'transparent'
    };
    const stemWidthPct = Math.min(75, Math.max(18, config.tStemWidthPercent));
    const topBarMinH = Math.min(280, Math.max(72, config.tTopBarHeight));
    const stemMinH = Math.min(600, Math.max(120, config.tStemMinHeight));
    const topArm = Object.assign(Object.assign({}, panelSurface), { width: '100%', flex: `0 0 ${topBarMinH}px`, minHeight: topBarMinH, maxHeight: topBarMinH, borderRadius: '12px 12px 0 0', padding: '10px 14px 12px', borderBottom: '2px solid #256B45', overflow: 'visible', boxSizing: 'border-box' });
    const bottomRow = {
        display: 'flex',
        width: '100%',
        flex: '1 1 auto',
        alignItems: 'stretch',
        background: 'transparent'
    };
    const wing = {
        flex: '1 1 0',
        minWidth: 0,
        background: 'transparent',
        pointerEvents: 'none'
    };
    const placeholderBox = Object.assign(Object.assign({}, panelSurface), { padding: '14px 16px', borderRadius: '12px', color: '#888', fontSize: '13px', textAlign: 'center', lineHeight: 1.45 });
    const filterBarProps = {
        title: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].compareTitle,
        error,
        loading,
        allPnrh2,
        allSubBacias,
        subBaciaOptions,
        selectedPnrh2,
        selectedSubBacia,
        cenarioLeft,
        cenarioRight,
        syncViews,
        hasActiveFilter,
        cenarioOptions: CENARIO_OPTIONS,
        cenarioLabel,
        messages: filterMessages,
        onPnrh2Select,
        onSubBaciaSelect,
        onCenarioLeftSelect,
        onCenarioRightSelect,
        onSyncViewsChange: setSyncViews,
        onClear: () => { void onClear(); }
    };
    const contentPanelProps = {
        stats: panelStats,
        statsLoading: panelStatsLoading,
        bacia: panelBacia,
        subBacia: panelSubBacia,
        compareCenarios: panelCenarios,
        classColors: panelClassColors,
        legendGroups: panelLegendGroups,
        cenarioMessages,
        legendTitle: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendTitle,
        legendEmpty: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].legendEmpty
    };
    const layoutClass = isCombined
        ? 'jimu-widget widget-compare-cenarios t-layout'
        : 'jimu-widget widget-compare-cenarios';
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: layoutClass, css: isCombined ? tShapeCss : undefined, style: root },
        !isPanelOnly && leftMapId && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: leftMapId, onActiveViewChange: (jmv) => { if (jmv)
                setLeft({ jmv, layerState: null }); } })),
        !isPanelOnly && rightMapId && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: rightMapId, onActiveViewChange: (jmv) => { if (jmv)
                setRight({ jmv, layerState: null }); } })),
        isPanelOnly && (bridgeState.hasMapsReady
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContentPanel__WEBPACK_IMPORTED_MODULE_4__.ContentPanel, Object.assign({}, contentPanelProps, { rounded: 'all' }))
            : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: placeholderBox },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].panelWaitingForFilters),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: '8px', fontSize: '12px' } },
                    _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].panelLinkGroupHint,
                    " ",
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, linkGroupId))))),
        !isPanelOnly && !hasBothMaps && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, placeholderBox), (isFiltersOnly ? {} : topArm)) }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectMapsFirst)),
        !isPanelOnly && hasBothMaps && isFiltersOnly && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_3__.FilterBar, Object.assign({}, filterBarProps, { rounded: 'all', barStyle: {
                flex: `0 0 ${topBarMinH}px`,
                minHeight: topBarMinH,
                maxHeight: topBarMinH
            } }))),
        !isPanelOnly && hasBothMaps && isCombined && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_3__.FilterBar, Object.assign({}, filterBarProps, { rounded: 'top', barStyle: {
                    flex: `0 0 ${topBarMinH}px`,
                    minHeight: topBarMinH,
                    maxHeight: topBarMinH
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: bottomRow },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: wing, "aria-hidden": 'true' }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContentPanel__WEBPACK_IMPORTED_MODULE_4__.ContentPanel, Object.assign({}, contentPanelProps, { rounded: 'bottom', panelStyle: {
                        flex: `0 0 ${stemWidthPct}%`,
                        width: `${stemWidthPct}%`,
                        minHeight: stemMinH
                    } })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: wing, "aria-hidden": 'true' }))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNLEtBQUssR0FBdUI7SUFDaEMsYUFBYSxFQUFFLEVBQUU7SUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixXQUFXLEVBQUUsT0FBTztJQUNwQixZQUFZLEVBQUUsT0FBTztJQUNyQixLQUFLLEVBQUUsSUFBSTtJQUNYLFlBQVksRUFBRSxLQUFLO0lBQ25CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLEtBQUs7Q0FDcEI7QUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBOEI7QUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTJCO0FBRXBELE1BQU0sV0FBVyxHQUFHLENBQUMsV0FBbUIsRUFBVSxFQUFFO0lBQ2xELE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFNBQVM7SUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLG9CQUFPLEtBQUssRUFBRztJQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BELE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFTSxNQUFNLHdCQUF3QixHQUFHLENBQUMsV0FBbUIsRUFBc0IsRUFBRTtJQUNsRixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ25DLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLO0FBQ25DLENBQUM7QUFF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LEVBQUMsS0FBSyxFQUNiLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsT0FBTyxVQUFVLElBQUk7b0JBQzNCLFNBQVMsRUFBRSxVQUFVO29CQUNyQixTQUFTLEVBQUUsVUFBVTtpQkFDdEIsSUFDRDtZQUNGLHdEQUFLLEtBQUssRUFBRSxTQUFTO2dCQUNuQix3REFBSyxLQUFLLEVBQUUsSUFBSSxpQkFBYyxNQUFNLEdBQUc7Z0JBQ3ZDLCtDQUFDLGtFQUFZLG9CQUNQLGlCQUFpQixJQUNyQixPQUFPLEVBQUMsUUFBUSxFQUNoQixVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLE9BQU8sWUFBWSxHQUFHO3dCQUM1QixLQUFLLEVBQUUsR0FBRyxZQUFZLEdBQUc7d0JBQ3pCLFNBQVMsRUFBRSxRQUFRO3FCQUNwQixJQUNEO2dCQUNGLHdEQUFLLEtBQUssRUFBRSxJQUFJLGlCQUFjLE1BQU0sR0FBRyxDQUNuQyxDQUNMLENBQ0osQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wYXJlQ2VuYXJpb3NCcmlkZ2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wb25lbnRzL0NvbnRlbnRQYW5lbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wb25lbnRzL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvRmlsdGVyQmFyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvTGF5ZXJMZWdlbmQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9TY2VuYXJpb0luZGljYXRvcnMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvbGVnZW5kVXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9tYXBMYXllcnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9zY2VuYXJpb1N0YXRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENlbmFyaW9JZCB9IGZyb20gJy4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHR5cGUgeyBBbGxDZW5hcmlvc1N0YXRzIH0gZnJvbSAnLi9zY2VuYXJpb1N0YXRzJ1xuaW1wb3J0IHR5cGUgeyBMZWdlbmRHcm91cCB9IGZyb20gJy4vbGVnZW5kVXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGFyZUJyaWRnZVN0YXRlIHtcbiAgc2VsZWN0ZWRQbnJoMjogc3RyaW5nXG4gIHNlbGVjdGVkU3ViQmFjaWE6IHN0cmluZ1xuICBjZW5hcmlvTGVmdDogQ2VuYXJpb0lkXG4gIGNlbmFyaW9SaWdodDogQ2VuYXJpb0lkXG4gIHN0YXRzOiBBbGxDZW5hcmlvc1N0YXRzIHwgbnVsbFxuICBzdGF0c0xvYWRpbmc6IGJvb2xlYW5cbiAgbGVnZW5kR3JvdXBzOiBMZWdlbmRHcm91cFtdXG4gIGNsYXNzQ29sb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIGhhc01hcHNSZWFkeTogYm9vbGVhblxufVxuXG5jb25zdCBFTVBUWTogQ29tcGFyZUJyaWRnZVN0YXRlID0ge1xuICBzZWxlY3RlZFBucmgyOiAnJyxcbiAgc2VsZWN0ZWRTdWJCYWNpYTogJycsXG4gIGNlbmFyaW9MZWZ0OiAnYXR1YWwnLFxuICBjZW5hcmlvUmlnaHQ6ICdhdHVhbCcsXG4gIHN0YXRzOiBudWxsLFxuICBzdGF0c0xvYWRpbmc6IGZhbHNlLFxuICBsZWdlbmRHcm91cHM6IFtdLFxuICBjbGFzc0NvbG9yczoge30sXG4gIGhhc01hcHNSZWFkeTogZmFsc2Vcbn1cblxuY29uc3Qgc25hcHNob3RzID0gbmV3IE1hcDxzdHJpbmcsIENvbXBhcmVCcmlkZ2VTdGF0ZT4oKVxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIFNldDwoKSA9PiB2b2lkPj4oKVxuXG5jb25zdCBlbnN1cmVHcm91cCA9IChsaW5rR3JvdXBJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaWQgPSAobGlua0dyb3VwSWQgfHwgJ2RlZmF1bHQnKS50cmltKCkgfHwgJ2RlZmF1bHQnXG4gIGlmICghc25hcHNob3RzLmhhcyhpZCkpIHNuYXBzaG90cy5zZXQoaWQsIHsgLi4uRU1QVFkgfSlcbiAgaWYgKCFsaXN0ZW5lcnMuaGFzKGlkKSkgbGlzdGVuZXJzLnNldChpZCwgbmV3IFNldCgpKVxuICByZXR1cm4gaWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbXBhcmVCcmlkZ2VTbmFwc2hvdCA9IChsaW5rR3JvdXBJZDogc3RyaW5nKTogQ29tcGFyZUJyaWRnZVN0YXRlID0+IHtcbiAgY29uc3QgaWQgPSBlbnN1cmVHcm91cChsaW5rR3JvdXBJZClcbiAgcmV0dXJuIHNuYXBzaG90cy5nZXQoaWQpIHx8IEVNUFRZXG59XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDb21wYXJlQnJpZGdlID0gKGxpbmtHcm91cElkOiBzdHJpbmcsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTogKCgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgaWQgPSBlbnN1cmVHcm91cChsaW5rR3JvdXBJZClcbiAgbGlzdGVuZXJzLmdldChpZCk/LmFkZChsaXN0ZW5lcilcbiAgcmV0dXJuICgpID0+IHsgbGlzdGVuZXJzLmdldChpZCk/LmRlbGV0ZShsaXN0ZW5lcikgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tcGFyZUJyaWRnZSA9IChsaW5rR3JvdXBJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxDb21wYXJlQnJpZGdlU3RhdGU+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGlkID0gZW5zdXJlR3JvdXAobGlua0dyb3VwSWQpXG4gIGNvbnN0IHByZXYgPSBzbmFwc2hvdHMuZ2V0KGlkKSB8fCBFTVBUWVxuICBzbmFwc2hvdHMuc2V0KGlkLCB7IC4uLnByZXYsIC4uLnBhdGNoIH0pXG4gIGxpc3RlbmVycy5nZXQoaWQpPy5mb3JFYWNoKGZuID0+IHsgZm4oKSB9KVxufVxuXG5leHBvcnQgY29uc3QgcmVjb3JkVG9DbGFzc0NvbG9ycyA9IChyZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIG5ldyBNYXAoT2JqZWN0LmVudHJpZXMocmVjb3JkKSlcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHR5cGUgeyBDZW5hcmlvSWQgfSBmcm9tICcuLi9tYXBMYXllcnMnXG5pbXBvcnQgdHlwZSB7IEFsbENlbmFyaW9zU3RhdHMgfSBmcm9tICcuLi9zY2VuYXJpb1N0YXRzJ1xuaW1wb3J0IHR5cGUgeyBMZWdlbmRHcm91cCB9IGZyb20gJy4uL2xlZ2VuZFV0aWxzJ1xuaW1wb3J0IHsgU2NlbmFyaW9JbmRpY2F0b3JzIH0gZnJvbSAnLi9TY2VuYXJpb0luZGljYXRvcnMnXG5pbXBvcnQgeyBMYXllckxlZ2VuZCB9IGZyb20gJy4vTGF5ZXJMZWdlbmQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFBhbmVsUHJvcHMge1xuICBzdGF0czogQWxsQ2VuYXJpb3NTdGF0cyB8IG51bGxcbiAgc3RhdHNMb2FkaW5nOiBib29sZWFuXG4gIGJhY2lhOiBzdHJpbmdcbiAgc3ViQmFjaWE6IHN0cmluZ1xuICBjb21wYXJlQ2VuYXJpb3M6IENlbmFyaW9JZFtdXG4gIGNsYXNzQ29sb3JzOiBNYXA8c3RyaW5nLCBzdHJpbmc+XG4gIGxlZ2VuZEdyb3VwczogTGVnZW5kR3JvdXBbXVxuICBwYW5lbFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICByb3VuZGVkPzogJ2JvdHRvbScgfCAnYWxsJ1xuICBjZW5hcmlvTWVzc2FnZXM6IHtcbiAgICBjZW5hcmlvc0xvYWRpbmc6IHN0cmluZ1xuICAgIGNlbmFyaW9zU2VsZWN0RmlsdGVyOiBzdHJpbmdcbiAgICBjZW5hcmlvQmFjaWFMYWJlbDogc3RyaW5nXG4gICAgY2VuYXJpb1N1YkJhY2lhTGFiZWw6IHN0cmluZ1xuICAgIGNlbmFyaW9BdHVhbDogc3RyaW5nXG4gICAgY2VuYXJpb1NzcDI0NTogc3RyaW5nXG4gICAgY2VuYXJpb1NzcDU4NTogc3RyaW5nXG4gICAgY2VuYXJpb3NDaGFydFRpdGxlOiBzdHJpbmdcbiAgICBjZW5hcmlvc05vRGF0YTogc3RyaW5nXG4gIH1cbiAgbGVnZW5kVGl0bGU6IHN0cmluZ1xuICBsZWdlbmRFbXB0eTogc3RyaW5nXG59XG5cbmNvbnN0IHNjcm9sbEhvdmVyQ3NzID0gY3NzYFxuICAmLmNvbXBhcmUtY2VuYXJpb3MtcGFuZWwgLmNvbXBhcmUtY2VuYXJpb3Mtc2Nyb2xsIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxuICAmLmNvbXBhcmUtY2VuYXJpb3MtcGFuZWw6aG92ZXIgLmNvbXBhcmUtY2VuYXJpb3Mtc2Nyb2xsIHtcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yOCkgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJi5jb21wYXJlLWNlbmFyaW9zLXBhbmVsIC5jb21wYXJlLWNlbmFyaW9zLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cbiAgJi5jb21wYXJlLWNlbmFyaW9zLXBhbmVsIC5jb21wYXJlLWNlbmFyaW9zLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICYuY29tcGFyZS1jZW5hcmlvcy1wYW5lbCAuY29tcGFyZS1jZW5hcmlvcy1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgJi5jb21wYXJlLWNlbmFyaW9zLXBhbmVsOmhvdmVyIC5jb21wYXJlLWNlbmFyaW9zLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRQYW5lbDogUmVhY3QuRkM8Q29udGVudFBhbmVsUHJvcHM+ID0gKHtcbiAgc3RhdHMsXG4gIHN0YXRzTG9hZGluZyxcbiAgYmFjaWEsXG4gIHN1YkJhY2lhLFxuICBjb21wYXJlQ2VuYXJpb3MsXG4gIGNsYXNzQ29sb3JzLFxuICBsZWdlbmRHcm91cHMsXG4gIHBhbmVsU3R5bGUsXG4gIHJvdW5kZWQgPSAnYm90dG9tJyxcbiAgY2VuYXJpb01lc3NhZ2VzLFxuICBsZWdlbmRUaXRsZSxcbiAgbGVnZW5kRW1wdHlcbn0pID0+IHtcbiAgY29uc3Qgc2hlbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xNCknLFxuICAgIGJvcmRlclJhZGl1czogcm91bmRlZCA9PT0gJ2FsbCcgPyAnMTJweCcgOiAnMCAwIDEycHggMTJweCcsXG4gICAgYm9yZGVyVG9wOiByb3VuZGVkID09PSAnYWxsJyA/ICcxcHggc29saWQgI2QwZDBkMCcgOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzEycHggMTRweCAxNHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZ2FwOiAnMTJweCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogMCxcbiAgICAuLi5wYW5lbFN0eWxlXG4gIH1cbiAgY29uc3Qgc2Nyb2xsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICBtaW5IZWlnaHQ6IDBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhcmUtY2VuYXJpb3MtcGFuZWwnIGNzcz17c2Nyb2xsSG92ZXJDc3N9IHN0eWxlPXtzaGVsbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFyZS1jZW5hcmlvcy1zY3JvbGwnIHN0eWxlPXtzY3JvbGx9PlxuICAgICAgICA8U2NlbmFyaW9JbmRpY2F0b3JzXG4gICAgICAgICAgc3RhdHM9e3N0YXRzfVxuICAgICAgICAgIGxvYWRpbmc9e3N0YXRzTG9hZGluZ31cbiAgICAgICAgICBiYWNpYT17YmFjaWF9XG4gICAgICAgICAgc3ViQmFjaWE9e3N1YkJhY2lhfVxuICAgICAgICAgIGNvbXBhcmVDZW5hcmlvcz17Y29tcGFyZUNlbmFyaW9zfVxuICAgICAgICAgIGNsYXNzQ29sb3JzPXtjbGFzc0NvbG9yc31cbiAgICAgICAgICBtZXNzYWdlcz17Y2VuYXJpb01lc3NhZ2VzfVxuICAgICAgICAvPlxuICAgICAgICA8TGF5ZXJMZWdlbmRcbiAgICAgICAgICBncm91cHM9e2xlZ2VuZEdyb3Vwc31cbiAgICAgICAgICB0aXRsZT17bGVnZW5kVGl0bGV9XG4gICAgICAgICAgZW1wdHlUZXh0PXtsZWdlbmRFbXB0eX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcblxuZXhwb3J0IGNvbnN0IENoZXZyb25Eb3duSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPScxNCdcbiAgICBoZWlnaHQ9JzE0J1xuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICBmaWxsPSdub25lJ1xuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgPlxuICAgIDxwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBvcHRpb25zOiBzdHJpbmdbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9ICh7IHZhbHVlLCBvcHRpb25zLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsaXN0UG9zLCBzZXRMaXN0UG9zXSA9IHVzZVN0YXRlKHsgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCB9KVxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgY29uc3QgcG9ydGFsSWRSZWYgPSB1c2VSZWYoYGNvbXBhcmUtY2VuYXJpb3MtZGQtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gKVxuXG4gIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghd3JhcFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBjb25zdCByID0gd3JhcFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgc2V0TGlzdFBvcyh7IHRvcDogci5ib3R0b20gKyA0LCBsZWZ0OiByLmxlZnQsIHdpZHRoOiByLndpZHRoIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvcGVuKSByZXR1cm5cbiAgICB1cGRhdGVQb3NpdGlvbigpXG4gICAgY29uc3Qgb25Eb2NDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0ID0gZS50YXJnZXQgYXMgTm9kZVxuICAgICAgaWYgKHdyYXBSZWYuY3VycmVudD8uY29udGFpbnModCkpIHJldHVyblxuICAgICAgY29uc3QgcG9ydGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsSWRSZWYuY3VycmVudClcbiAgICAgIGlmIChwb3J0YWw/LmNvbnRhaW5zKHQpKSByZXR1cm5cbiAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jQ2xpY2spXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBvc2l0aW9uLCB0cnVlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQb3NpdGlvbilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2NDbGljaylcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQb3NpdGlvbiwgdHJ1ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQb3NpdGlvbilcbiAgICB9XG4gIH0sIFtvcGVuLCB1cGRhdGVQb3NpdGlvbl0pXG5cbiAgY29uc3QgcGlsbDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgcGFkZGluZzogJzJweCA0cHggMnB4IDE2cHgnLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDQpJyxcbiAgICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuNiA6IDEsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH1cbiAgY29uc3QgdmFsdWVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmbGV4OiAxLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgY29sb3I6IHZhbHVlID8gJyMzMzMnIDogJyM4ODgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfVxuICBjb25zdCBjaGV2cm9uOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGNvbG9yOiAnIzU1NScsXG4gICAgd2lkdGg6ICcyOHB4JyxcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB0cmFuc2Zvcm06IG9wZW4gPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwZGVnKScsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjE1cydcbiAgfVxuICBjb25zdCBsaXN0OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogbGlzdFBvcy50b3AsXG4gICAgbGVmdDogbGlzdFBvcy5sZWZ0LFxuICAgIHdpZHRoOiBsaXN0UG9zLndpZHRoLFxuICAgIG1heEhlaWdodDogJzIyMHB4JyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQwZDAnLFxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgIGJveFNoYWRvdzogJzAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICAgekluZGV4OiAxMDAwMDAsXG4gICAgcGFkZGluZzogJzRweCAwJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZSdcbiAgfVxuICBjb25zdCBpdGVtU3R5bGUgPSAoc2VsZWN0ZWQ6IGJvb2xlYW4pOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0+ICh7XG4gICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGNvbG9yOiBzZWxlY3RlZCA/ICcjMjU2QjQ1JyA6ICcjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiBzZWxlY3RlZCA/ICcjZjBmN2YzJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICB9KVxuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVyblxuICAgIHNldE9wZW4obyA9PiAhbylcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdFZhbHVlID0gKHY6IHN0cmluZykgPT4ge1xuICAgIG9uQ2hhbmdlKHYpXG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGxpc3RFbCA9IG9wZW4gJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IChcbiAgICBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICA8dWwgaWQ9e3BvcnRhbElkUmVmLmN1cnJlbnR9IHN0eWxlPXtsaXN0fT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e2l0ZW1TdHlsZSghdmFsdWUpfVxuICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNlbGVjdFZhbHVlKCcnKSB9fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MTElFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY1ZjUnIH19XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAhdmFsdWUgPyAnI2YwZjdmMycgOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtvcHRpb25zLm1hcChvcHQgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtvcHR9XG4gICAgICAgICAgICBzdHlsZT17aXRlbVN0eWxlKG9wdCA9PT0gdmFsdWUpfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2VsZWN0VmFsdWUob3B0KSB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjVmNScgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MTElFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0ID09PSB2YWx1ZSA/ICcjZjBmN2YzJyA6ICd0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD4sXG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgKVxuICApIDogbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3dyYXBSZWZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17cGlsbH1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICByb2xlPSdidXR0b24nXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7IGUucHJldmVudERlZmF1bHQoKTsgdG9nZ2xlKCkgfSB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBzdHlsZT17dmFsdWVTdHlsZX0+e3ZhbHVlIHx8IHBsYWNlaG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e2NoZXZyb259PjxDaGV2cm9uRG93bkljb24gLz48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0RWx9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQ2VuYXJpb0lkIH0gZnJvbSAnLi4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuL0Ryb3Bkb3duJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBlcnJvcjogc3RyaW5nXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgYWxsUG5yaDI6IHN0cmluZ1tdXG4gIGFsbFN1YkJhY2lhczogc3RyaW5nW11cbiAgc3ViQmFjaWFPcHRpb25zOiBzdHJpbmdbXVxuICBzZWxlY3RlZFBucmgyOiBzdHJpbmdcbiAgc2VsZWN0ZWRTdWJCYWNpYTogc3RyaW5nXG4gIGNlbmFyaW9MZWZ0OiBDZW5hcmlvSWRcbiAgY2VuYXJpb1JpZ2h0OiBDZW5hcmlvSWRcbiAgc3luY1ZpZXdzOiBib29sZWFuXG4gIGhhc0FjdGl2ZUZpbHRlcjogYm9vbGVhblxuICBjZW5hcmlvT3B0aW9uczogc3RyaW5nW11cbiAgY2VuYXJpb0xhYmVsOiAoaWQ6IENlbmFyaW9JZCkgPT4gc3RyaW5nXG4gIG1lc3NhZ2VzOiB7XG4gICAgcG5yaDJMYWJlbDogc3RyaW5nXG4gICAgc3ViQmFjaWFMYWJlbDogc3RyaW5nXG4gICAgbWFwTGVmdExhYmVsOiBzdHJpbmdcbiAgICBtYXBSaWdodExhYmVsOiBzdHJpbmdcbiAgICBsb2FkaW5nOiBzdHJpbmdcbiAgICBzZWxlY3RQbnJoMjogc3RyaW5nXG4gICAgc2VsZWN0U3ViQmFjaWE6IHN0cmluZ1xuICAgIHNlbGVjdENlbmFyaW86IHN0cmluZ1xuICAgIHN5bmNWaWV3czogc3RyaW5nXG4gICAgY2xlYXI6IHN0cmluZ1xuICB9XG4gIG9uUG5yaDJTZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU3ViQmFjaWFTZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2VuYXJpb0xlZnRTZWxlY3Q6IChsYWJlbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2VuYXJpb1JpZ2h0U2VsZWN0OiAobGFiZWw6IHN0cmluZykgPT4gdm9pZFxuICBvblN5bmNWaWV3c0NoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25DbGVhcjogKCkgPT4gdm9pZFxuICBiYXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgcm91bmRlZD86ICd0b3AnIHwgJ2FsbCdcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlckJhcjogUmVhY3QuRkM8RmlsdGVyQmFyUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGVycm9yLFxuICBsb2FkaW5nLFxuICBhbGxQbnJoMixcbiAgYWxsU3ViQmFjaWFzLFxuICBzdWJCYWNpYU9wdGlvbnMsXG4gIHNlbGVjdGVkUG5yaDIsXG4gIHNlbGVjdGVkU3ViQmFjaWEsXG4gIGNlbmFyaW9MZWZ0LFxuICBjZW5hcmlvUmlnaHQsXG4gIHN5bmNWaWV3cyxcbiAgaGFzQWN0aXZlRmlsdGVyLFxuICBjZW5hcmlvT3B0aW9ucyxcbiAgY2VuYXJpb0xhYmVsLFxuICBtZXNzYWdlcyxcbiAgb25QbnJoMlNlbGVjdCxcbiAgb25TdWJCYWNpYVNlbGVjdCxcbiAgb25DZW5hcmlvTGVmdFNlbGVjdCxcbiAgb25DZW5hcmlvUmlnaHRTZWxlY3QsXG4gIG9uU3luY1ZpZXdzQ2hhbmdlLFxuICBvbkNsZWFyLFxuICBiYXJTdHlsZSxcbiAgcm91bmRlZCA9ICd0b3AnXG59KSA9PiB7XG4gIGNvbnN0IHRvcEJhcjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgIGdhcDogJzEwcHggMTRweCcsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG4gIGNvbnN0IGZpbHRlckNlbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZmxleDogJzEgMSAxNDBweCcsXG4gICAgbWluV2lkdGg6IDEzMCxcbiAgICBtYXhXaWR0aDogMjIwXG4gIH1cbiAgY29uc3QgZmlsdGVyTGFiZWw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzExcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjb2xvcjogJyM1NTUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzRweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDNlbSdcbiAgfVxuICBjb25zdCBhY3Rpb25zQ2VsbDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZ2FwOiAnMTBweCcsXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgcGFkZGluZ0JvdHRvbTogJzJweCdcbiAgfVxuICBjb25zdCBjbGVhckJ0bjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzI1NkI0NScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgcGFkZGluZzogJzAgMThweCcsXG4gICAgaGVpZ2h0OiAnMzRweCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfVxuICBjb25zdCBzeW5jTGFiZWw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdhcDogJzZweCcsXG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH1cbiAgY29uc3Qgc2hlbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xNCknLFxuICAgIGJvcmRlclJhZGl1czogcm91bmRlZCA9PT0gJ2FsbCcgPyAnMTJweCcgOiAnMTJweCAxMnB4IDAgMCcsXG4gICAgcGFkZGluZzogJzEwcHggMTRweCAxMnB4JyxcbiAgICBib3JkZXJCb3R0b206IHJvdW5kZWQgPT09ICdhbGwnID8gJzFweCBzb2xpZCAjZDBkMGQwJyA6ICcycHggc29saWQgIzI1NkI0NScsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIC4uLmJhclN0eWxlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3NoZWxsfT5cbiAgICAgIDxkaXYgc3R5bGU9e3RvcEJhcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogJzEgMSAxMDAlJywgZm9udFNpemU6ICcxNHB4JywgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMyNTZCNDUnLCBtYXJnaW5Cb3R0b206ICcycHgnIH19PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6ICcxIDEgMTAwJScsIGNvbG9yOiAnI2IwMDAyMCcsIGZvbnRTaXplOiAnMTJweCcgfX0+e2Vycm9yfTwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e2ZpbHRlckNlbGx9PlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17ZmlsdGVyTGFiZWx9PnttZXNzYWdlcy5wbnJoMkxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQbnJoMn1cbiAgICAgICAgICAgIG9wdGlvbnM9e2FsbFBucmgyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmcgJiYgYWxsUG5yaDIubGVuZ3RoID09PSAwID8gbWVzc2FnZXMubG9hZGluZyA6IG1lc3NhZ2VzLnNlbGVjdFBucmgyfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgYWxsUG5yaDIubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uUG5yaDJTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17ZmlsdGVyQ2VsbH0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtmaWx0ZXJMYWJlbH0+e21lc3NhZ2VzLnN1YkJhY2lhTGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFN1YkJhY2lhfVxuICAgICAgICAgICAgb3B0aW9ucz17c3ViQmFjaWFPcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmcgJiYgYWxsU3ViQmFjaWFzLmxlbmd0aCA9PT0gMCA/IG1lc3NhZ2VzLmxvYWRpbmcgOiBtZXNzYWdlcy5zZWxlY3RTdWJCYWNpYX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8IGFsbFN1YkJhY2lhcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TdWJCYWNpYVNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWx0ZXJDZWxsfT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpbHRlckxhYmVsfT57bWVzc2FnZXMubWFwTGVmdExhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICB2YWx1ZT17Y2VuYXJpb0xhYmVsKGNlbmFyaW9MZWZ0KX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2NlbmFyaW9PcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e21lc3NhZ2VzLnNlbGVjdENlbmFyaW99XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DZW5hcmlvTGVmdFNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWx0ZXJDZWxsfT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpbHRlckxhYmVsfT57bWVzc2FnZXMubWFwUmlnaHRMYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgdmFsdWU9e2NlbmFyaW9MYWJlbChjZW5hcmlvUmlnaHQpfVxuICAgICAgICAgICAgb3B0aW9ucz17Y2VuYXJpb09wdGlvbnN9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17bWVzc2FnZXMuc2VsZWN0Q2VuYXJpb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNlbmFyaW9SaWdodFNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXthY3Rpb25zQ2VsbH0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtzeW5jTGFiZWx9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICBjaGVja2VkPXtzeW5jVmlld3N9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBvblN5bmNWaWV3c0NoYW5nZShlLnRhcmdldC5jaGVja2VkKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHttZXNzYWdlcy5zeW5jVmlld3N9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7aGFzQWN0aXZlRmlsdGVyICYmIChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2NsZWFyQnRufSBvbkNsaWNrPXtvbkNsZWFyfSB0eXBlPSdidXR0b24nPlxuICAgICAgICAgICAgICB7bWVzc2FnZXMuY2xlYXJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cclxyXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXHJcbmltcG9ydCB0eXBlIHsgTGVnZW5kR3JvdXAgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcclxyXG5pbXBvcnQgeyBzZXZlcml0eUNvbG9yIH0gZnJvbSAnLi4vbGVnZW5kVXRpbHMnXHJcclxuXHJcclxuZXhwb3J0IGludGVyZmFjZSBMYXllckxlZ2VuZFByb3BzIHtcclxyXG4gIGdyb3VwczogTGVnZW5kR3JvdXBbXVxyXHJcbiAgdGl0bGU6IHN0cmluZ1xyXHJcbiAgZW1wdHlUZXh0OiBzdHJpbmdcclxyXG59XHJcclxuXHJcclxuZXhwb3J0IGNvbnN0IExheWVyTGVnZW5kOiBSZWFjdC5GQzxMYXllckxlZ2VuZFByb3BzPiA9ICh7IGdyb3VwcywgdGl0bGUsIGVtcHR5VGV4dCB9KSA9PiB7XHJcclxuICBjb25zdCBib3g6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcclxuICAgIHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXHJcbiAgICBiYWNrZ3JvdW5kOiAnI2Y3ZjlmOCcsXHJcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlOGU0J1xyXHJcbiAgfVxyXHJcbiAgY29uc3QgdGl0bGVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxyXG4gICAgZm9udFNpemU6ICcxM3B4JyxcclxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXHJcbiAgICBjb2xvcjogJyMyNTZCNDUnLFxyXHJcbiAgICBtYXJnaW5Cb3R0b206ICc4cHgnXHJcclxuICB9XHJcclxuICBjb25zdCBncm91cFRpdGxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcclxuICAgIGNvbG9yOiAnIzU1NScsXHJcclxuICAgIG1hcmdpbkJvdHRvbTogJzZweCcsXHJcclxuICAgIG1hcmdpblRvcDogJzRweCdcclxyXG4gIH1cclxyXG4gIGNvbnN0IHJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxyXG4gICAgZ2FwOiAnOHB4JyxcclxyXG4gICAgcGFkZGluZzogJzRweCAwJyxcclxyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxyXG4gICAgY29sb3I6ICcjMzMzJ1xyXHJcbiAgfVxyXHJcbiAgY29uc3Qgc3dhdGNoOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXHJcbiAgICB3aWR0aDogMTQsXHJcclxuICAgIGhlaWdodDogMTQsXHJcclxuICAgIGJvcmRlclJhZGl1czogMyxcclxyXG4gICAgZmxleFNocmluazogMCxcclxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMiknXHJcclxuICB9XHJcclxuXHJcclxuICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gMCkge1xyXHJcbiAgICByZXR1cm4gKFxyXHJcbiAgICAgIDxkaXYgc3R5bGU9e2JveH0+XHJcclxuICAgICAgICA8ZGl2IHN0eWxlPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9kaXY+XHJcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzg4OCcsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+e2VtcHR5VGV4dH08L2Rpdj5cclxyXG4gICAgICA8L2Rpdj5cclxyXG4gICAgKVxyXHJcbiAgfVxyXHJcblxyXHJcbiAgcmV0dXJuIChcclxyXG4gICAgPGRpdiBzdHlsZT17Ym94fT5cclxyXG4gICAgICA8ZGl2IHN0eWxlPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9kaXY+XHJcclxuICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwLCBnaSkgPT4gKFxyXHJcbiAgICAgICAgPGRpdiBrZXk9e2dyb3VwLnRpdGxlfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdpIDwgZ3JvdXBzLmxlbmd0aCAtIDEgPyAnMTBweCcgOiAwIH19PlxyXHJcbiAgICAgICAgICB7Z3JvdXBzLmxlbmd0aCA+IDEgJiYgPGRpdiBzdHlsZT17Z3JvdXBUaXRsZX0+e2dyb3VwLnRpdGxlfTwvZGl2Pn1cclxyXG4gICAgICAgICAge2dyb3VwLml0ZW1zLm1hcChpdGVtID0+IHtcclxyXG4gICAgICAgICAgICBjb25zdCBmaWxsID0gaXRlbS5jb2xvciB8fCBzZXZlcml0eUNvbG9yKGl0ZW0uc2V2ZXJpdHkpXHJcclxuICAgICAgICAgICAgcmV0dXJuIChcclxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXRsZX0tJHtpdGVtLmxhYmVsfWB9IHN0eWxlPXtyb3d9PlxyXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5zd2F0Y2gsIGJhY2tncm91bmQ6IGZpbGwgfX0gLz5cclxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbGluZUhlaWdodDogMS4zIH19PntpdGVtLmxhYmVsfTwvc3Bhbj5cclxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXHJcbiAgICAgICAgICAgIClcclxyXG4gICAgICAgICAgfSl9XHJcclxuICAgICAgICA8L2Rpdj5cclxyXG4gICAgICApKX1cclxyXG4gICAgPC9kaXY+XHJcclxuICApXHJcclxufVxyXHJcblxyIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHR5cGUgeyBDZW5hcmlvSWQgfSBmcm9tICcuLi9tYXBMYXllcnMnXG5pbXBvcnQgeyBzZXZlcml0eUNvbG9yIH0gZnJvbSAnLi4vbGVnZW5kVXRpbHMnXG5pbXBvcnQgdHlwZSB7IEFsbENlbmFyaW9zU3RhdHMgfSBmcm9tICcuLi9zY2VuYXJpb1N0YXRzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvSW5kaWNhdG9yc1Byb3BzIHtcbiAgc3RhdHM6IEFsbENlbmFyaW9zU3RhdHMgfCBudWxsXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgYmFjaWE6IHN0cmluZ1xuICBzdWJCYWNpYTogc3RyaW5nXG4gIGNvbXBhcmVDZW5hcmlvczogQ2VuYXJpb0lkW11cbiAgY2xhc3NDb2xvcnM6IE1hcDxzdHJpbmcsIHN0cmluZz5cbiAgbWVzc2FnZXM6IHtcbiAgICBjZW5hcmlvc0xvYWRpbmc6IHN0cmluZ1xuICAgIGNlbmFyaW9zU2VsZWN0RmlsdGVyOiBzdHJpbmdcbiAgICBjZW5hcmlvQmFjaWFMYWJlbDogc3RyaW5nXG4gICAgY2VuYXJpb1N1YkJhY2lhTGFiZWw6IHN0cmluZ1xuICAgIGNlbmFyaW9BdHVhbDogc3RyaW5nXG4gICAgY2VuYXJpb1NzcDI0NTogc3RyaW5nXG4gICAgY2VuYXJpb1NzcDU4NTogc3RyaW5nXG4gICAgY2VuYXJpb3NDaGFydFRpdGxlOiBzdHJpbmdcbiAgICBjZW5hcmlvc05vRGF0YTogc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgY2VuYXJpb0xhYmVsID0gKGlkOiBDZW5hcmlvSWQsIG1lc3NhZ2VzOiBTY2VuYXJpb0luZGljYXRvcnNQcm9wc1snbWVzc2FnZXMnXSk6IHN0cmluZyA9PiB7XG4gIGlmIChpZCA9PT0gJ3NzcDI0NScpIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvU3NwMjQ1XG4gIGlmIChpZCA9PT0gJ3NzcDU4NScpIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvU3NwNTg1XG4gIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvQXR1YWxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvSW5kaWNhdG9yczogUmVhY3QuRkM8U2NlbmFyaW9JbmRpY2F0b3JzUHJvcHM+ID0gKHtcbiAgc3RhdHMsXG4gIGxvYWRpbmcsXG4gIGJhY2lhLFxuICBzdWJCYWNpYSxcbiAgY29tcGFyZUNlbmFyaW9zLFxuICBjbGFzc0NvbG9ycyxcbiAgbWVzc2FnZXNcbn0pID0+IHtcbiAgaWYgKCFiYWNpYSAmJiAhc3ViQmFjaWEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM4ODgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnOHB4IDAnIH19PlxuICAgICAgICB7bWVzc2FnZXMuY2VuYXJpb3NTZWxlY3RGaWx0ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzg4OCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIGZvbnRTaXplOiAnMTNweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc4cHggMCcgfX0+XG4gICAgICAgIHttZXNzYWdlcy5jZW5hcmlvc0xvYWRpbmd9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAoIXN0YXRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFN0eWxlOiAnaXRhbGljJywgZm9udFNpemU6ICcxM3B4JywgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzhweCAwJyB9fT5cbiAgICAgICAge21lc3NhZ2VzLmNlbmFyaW9zU2VsZWN0RmlsdGVyfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgdW5pcXVlSWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KGNvbXBhcmVDZW5hcmlvcykpXG4gIGNvbnN0IGNlbmFyaW9zID0gdW5pcXVlSWRzLm1hcChpZCA9PiAoe1xuICAgIGlkLFxuICAgIGxhYmVsOiBjZW5hcmlvTGFiZWwoaWQsIG1lc3NhZ2VzKSxcbiAgICBzdGF0czogc3RhdHNbaWRdXG4gIH0pKVxuXG4gIGlmIChjZW5hcmlvcy5ldmVyeShjID0+IGMuc3RhdHMudG90YWwgPT09IDApKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjODg4JywgZm9udFN0eWxlOiAnaXRhbGljJywgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzhweCAwJyB9fT5cbiAgICAgICAge21lc3NhZ2VzLmNlbmFyaW9zTm9EYXRhfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgY2VuYXJpb3MuZm9yRWFjaChjID0+IHtcbiAgICBjLnN0YXRzLmNsYXNzZXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgaWYgKCFhbGxDbGFzc2VzLmhhcyhjbHMuY2xhc3NlKSB8fCAoYWxsQ2xhc3Nlcy5nZXQoY2xzLmNsYXNzZSkgfHwgMCkgPCBjbHMuc2V2ZXJpdHkpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5zZXQoY2xzLmNsYXNzZSwgY2xzLnNldmVyaXR5KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIGNvbnN0IG9yZGVyZWRDbGFzc2VzID0gQXJyYXkuZnJvbShhbGxDbGFzc2VzLmVudHJpZXMoKSlcbiAgICAubWFwKChbY2xhc3NlLCBzZXZlcml0eV0pID0+ICh7IGNsYXNzZSwgc2V2ZXJpdHkgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2V2ZXJpdHkgLSBhLnNldmVyaXR5KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsoYmFjaWEgfHwgc3ViQmFjaWEpICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc4cHgnLCBmb250U2l6ZTogJzEycHgnIH19PlxuICAgICAgICAgIHtiYWNpYSAmJiAoXG4gICAgICAgICAgICA8ZGl2PjxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzY2NicgfX0+e21lc3NhZ2VzLmNlbmFyaW9CYWNpYUxhYmVsfTogPC9zcGFuPjxzdHJvbmc+e2JhY2lhfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3N1YkJhY2lhICYmIChcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjNjY2JyB9fT57bWVzc2FnZXMuY2VuYXJpb1N1YkJhY2lhTGFiZWx9OiA8L3NwYW4+PHN0cm9uZz57c3ViQmFjaWF9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICcjMzMzJywgbWFyZ2luQm90dG9tOiAnNnB4JyB9fT5cbiAgICAgICAge21lc3NhZ2VzLmNlbmFyaW9zQ2hhcnRUaXRsZX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzEycHgnIH19PlxuICAgICAgICB7b3JkZXJlZENsYXNzZXMubWFwKGNscyA9PiB7XG4gICAgICAgICAgY29uc3QgY291bnRzID0gY2VuYXJpb3MubWFwKGMgPT4gYy5zdGF0cy5jbGFzc2VzLmZpbmQoZCA9PiBkLmNsYXNzZSA9PT0gY2xzLmNsYXNzZSk/LmNvdW50IHx8IDApXG4gICAgICAgICAgY29uc3QgbWF4QyA9IE1hdGgubWF4KC4uLmNvdW50cywgMSlcbiAgICAgICAgICBjb25zdCBjb2xvciA9IGNsYXNzQ29sb3JzLmdldChjbHMuY2xhc3NlKSB8fCBzZXZlcml0eUNvbG9yKGNscy5zZXZlcml0eSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2Nscy5jbGFzc2V9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzQ0NCcsIG1hcmdpbkJvdHRvbTogJzRweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzZweCcgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBiYWNrZ3JvdW5kOiBjb2xvciwgYm9yZGVyUmFkaXVzOiAyLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSAvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e2Nscy5jbGFzc2V9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZ2FwOiAnNnB4JywgaGVpZ2h0OiAnNjBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJywgcGFkZGluZ0JvdHRvbTogJzJweCcgfX0+XG4gICAgICAgICAgICAgICAge2NlbmFyaW9zLm1hcCgoY2VuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBoID0gKGNvdW50c1tpXSAvIG1heEMpICogNTBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Nlbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake2Nlbi5sYWJlbH06ICR7Y291bnRzW2ldfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTBweCcsIGNvbG9yOiAnIzMzMycsIGZvbnRXZWlnaHQ6IDYwMCB9fT57Y291bnRzW2ldfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke01hdGgubWF4KGgsIDEpfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4IDNweCAwIDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyNTZCNDUnXG4gICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNnB4JywgbWFyZ2luVG9wOiAnMnB4JyB9fT5cbiAgICAgICAgICAgICAgICB7Y2VuYXJpb3MubWFwKGNlbiA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2VuLmlkfSBzdHlsZT17eyBmbGV4OiAxLCBmb250U2l6ZTogJzlweCcsIGNvbG9yOiAnIzg4OCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtjZW4ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCB0eXBlIHsgTGF5ZXJSZWZzIH0gZnJvbSAnLi9tYXBMYXllcnMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZEl0ZW0ge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBjb2xvcjogc3RyaW5nXHJcbiAgc2V2ZXJpdHk6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZEdyb3VwIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgaXRlbXM6IExlZ2VuZEl0ZW1bXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V2ZXJpdHlDb2xvciA9IChzZXY6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgaWYgKHNldiA+PSAzKSByZXR1cm4gJyNhODMyMzInXHJcbiAgaWYgKHNldiA9PT0gMikgcmV0dXJuICcjYzk3YjAwJ1xyXG4gIGlmIChzZXYgPT09IDEpIHJldHVybiAnIzg4OCdcclxuICByZXR1cm4gJyMyNTZCNDUnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc1NldmVyaXR5ID0gKGNsYXNzZTogc3RyaW5nKTogbnVtYmVyID0+IHtcclxuICBjb25zdCBjID0gKGNsYXNzZSB8fCAnJykudG9Mb3dlckNhc2UoKVxyXG4gIGlmICghYykgcmV0dXJuIDBcclxuICBpZiAoYy5pbmNsdWRlcygnY3Jpc2UnKSB8fCBjLmluY2x1ZGVzKCdjcsOtdGljbycpIHx8IGMuaW5jbHVkZXMoJ2NyaXRpY28nKSB8fCBjLmluY2x1ZGVzKCdtdWl0byBhbHRvJykpIHJldHVybiA0XHJcbiAgaWYgKGMuaW5jbHVkZXMoJ2FsdG8nKSkgcmV0dXJuIDNcclxuICBpZiAoYy5pbmNsdWRlcygnbcOpZGlvJykgfHwgYy5pbmNsdWRlcygnbWVkaW8nKSB8fCBjLmluY2x1ZGVzKCdtb2RlcmFkbycpKSByZXR1cm4gMlxyXG4gIGlmIChjLmluY2x1ZGVzKCdiYWl4bycpIHx8IGMuaW5jbHVkZXMoJ3NlbSAnKSB8fCBjID09PSAnc2VtJykgcmV0dXJuIDBcclxuICByZXR1cm4gMVxyXG59XHJcblxyXG5jb25zdCBjb2xvclRvQ3NzID0gKGNvbG9yOiB1bmtub3duKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgaWYgKCFjb2xvcikgcmV0dXJuIG51bGxcclxuICBjb25zdCBjID0gY29sb3IgYXMgeyB0b0Nzcz86IChhPzogYm9vbGVhbikgPT4gc3RyaW5nLCByPzogbnVtYmVyLCBnPzogbnVtYmVyLCBiPzogbnVtYmVyLCBhPzogbnVtYmVyIH1cclxuICBpZiAodHlwZW9mIGMudG9Dc3MgPT09ICdmdW5jdGlvbicpIHJldHVybiBjLnRvQ3NzKHRydWUpXHJcbiAgY29uc3QgciA9IGMuciA/PyAoY29sb3IgYXMgbnVtYmVyW10pWzBdXHJcbiAgY29uc3QgZyA9IGMuZyA/PyAoY29sb3IgYXMgbnVtYmVyW10pWzFdXHJcbiAgY29uc3QgYiA9IGMuYiA/PyAoY29sb3IgYXMgbnVtYmVyW10pWzJdXHJcbiAgY29uc3QgYSA9IGMuYSA/PyAoY29sb3IgYXMgbnVtYmVyW10pWzNdID8/IDFcclxuICBpZiAociA9PSBudWxsIHx8IGcgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBudWxsXHJcbiAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYFxyXG59XHJcblxyXG5jb25zdCBzeW1ib2xDb2xvciA9IChzeW1ib2w6IHVua25vd24pOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICBpZiAoIXN5bWJvbCkgcmV0dXJuIG51bGxcclxuICBjb25zdCBzID0gc3ltYm9sIGFzIHsgY29sb3I/OiB1bmtub3duLCBvdXRsaW5lPzogeyBjb2xvcj86IHVua25vd24gfSB9XHJcbiAgcmV0dXJuIGNvbG9yVG9Dc3Mocy5jb2xvcikgfHwgY29sb3JUb0NzcyhzLm91dGxpbmU/LmNvbG9yKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdFJlbmRlcmVyQ29sb3JzID0gKHJlbmRlcmVyOiB1bmtub3duKTogTWFwPHN0cmluZywgc3RyaW5nPiA9PiB7XHJcbiAgY29uc3QgbSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcclxuICBpZiAoIXJlbmRlcmVyKSByZXR1cm4gbVxyXG4gIGNvbnN0IHIgPSByZW5kZXJlciBhcyB7XHJcbiAgICB0eXBlPzogc3RyaW5nXHJcbiAgICBkZWZhdWx0U3ltYm9sPzogdW5rbm93blxyXG4gICAgdW5pcXVlVmFsdWVJbmZvcz86IEFycmF5PHsgdmFsdWU/OiB1bmtub3duLCBsYWJlbD86IHN0cmluZywgc3ltYm9sPzogdW5rbm93biB9PlxyXG4gICAgY2xhc3NCcmVha0luZm9zPzogQXJyYXk8eyBsYWJlbD86IHN0cmluZywgc3ltYm9sPzogdW5rbm93biB9PlxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVmYXVsdENzcyA9IHN5bWJvbENvbG9yKHIuZGVmYXVsdFN5bWJvbClcclxuICBpZiAoZGVmYXVsdENzcykgbS5zZXQoJ1BhZHLDo28nLCBkZWZhdWx0Q3NzKVxyXG5cclxuICBpZiAoci50eXBlID09PSAndW5pcXVlLXZhbHVlJykge1xyXG4gICAgZm9yIChjb25zdCBpbmZvIG9mIHIudW5pcXVlVmFsdWVJbmZvcyB8fCBbXSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGluZm8udmFsdWUgIT0gbnVsbCA/IFN0cmluZyhpbmZvLnZhbHVlKS50cmltKCkgOiAnJ1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGluZm8ubGFiZWwgIT0gbnVsbCAmJiBTdHJpbmcoaW5mby5sYWJlbCkudHJpbSgpICE9PSAnJ1xyXG4gICAgICAgID8gU3RyaW5nKGluZm8ubGFiZWwpLnRyaW0oKVxyXG4gICAgICAgIDogdmFsdWVcclxuICAgICAgY29uc3QgY3NzID0gc3ltYm9sQ29sb3IoaW5mby5zeW1ib2wpXHJcbiAgICAgIGlmIChsYWJlbCAmJiBjc3MpIG0uc2V0KGxhYmVsLCBjc3MpXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChyLnR5cGUgPT09ICdjbGFzcy1icmVha3MnKSB7XHJcbiAgICBmb3IgKGNvbnN0IGluZm8gb2Ygci5jbGFzc0JyZWFrSW5mb3MgfHwgW10pIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSBpbmZvLmxhYmVsICE9IG51bGwgPyBTdHJpbmcoaW5mby5sYWJlbCkudHJpbSgpIDogJydcclxuICAgICAgY29uc3QgY3NzID0gc3ltYm9sQ29sb3IoaW5mby5zeW1ib2wpXHJcbiAgICAgIGlmIChsYWJlbCAmJiBjc3MpIG0uc2V0KGxhYmVsLCBjc3MpXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChyLnR5cGUgPT09ICdzaW1wbGUnKSB7XHJcbiAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcigociBhcyB7IHN5bWJvbD86IHVua25vd24gfSkuc3ltYm9sKVxyXG4gICAgaWYgKGNzcykgbS5zZXQoJ8OBcmVhJywgY3NzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1cclxufVxyXG5cclxuY29uc3QgbWVyZ2VDb2xvck1hcHMgPSAoLi4ubWFwczogQXJyYXk8TWFwPHN0cmluZywgc3RyaW5nPj4pOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0+IHtcclxuICBjb25zdCBtZXJnZWQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXHJcbiAgbWFwcy5mb3JFYWNoKG1hcCA9PiB7XHJcbiAgICBtYXAuZm9yRWFjaCgoY3NzLCBsYWJlbCkgPT4ge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMobGFiZWwpKSBtZXJnZWQuc2V0KGxhYmVsLCBjc3MpXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lcmdlZFxyXG59XHJcblxyXG5jb25zdCBtYXBUb0xlZ2VuZEl0ZW1zID0gKGNvbG9yczogTWFwPHN0cmluZywgc3RyaW5nPik6IExlZ2VuZEl0ZW1bXSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oY29sb3JzLmVudHJpZXMoKSlcclxuICAgIC5tYXAoKFtsYWJlbCwgY29sb3JdKSA9PiAoe1xyXG4gICAgICBsYWJlbCxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIHNldmVyaXR5OiBjbGFzc1NldmVyaXR5KGxhYmVsKVxyXG4gICAgfSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zZXZlcml0eSAtIGEuc2V2ZXJpdHkgfHwgYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwsICdwdC1CUicpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdENsYXNzQ29sb3JzIChsYXllcnM6IExheWVyUmVmcyk6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gIGNvbnN0IG1lcmdlZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcclxuICBjb25zdCBzb3VyY2VzID0gW2xheWVycy5pbmRpY2UsIGxheWVycy5jZW5hcmlvR3JhbmRlMjQ1LCBsYXllcnMuY2VuYXJpb0dyYW5kZTU4NV1cclxuICBzb3VyY2VzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgICBjb25zdCBjb2xvcnMgPSBleHRyYWN0UmVuZGVyZXJDb2xvcnMoKGxheWVyIGFzIHVua25vd24gYXMgeyByZW5kZXJlcj86IHVua25vd24gfSkucmVuZGVyZXIpXHJcbiAgICBjb2xvcnMuZm9yRWFjaCgoY3NzLCBjbGFzc2UpID0+IHtcclxuICAgICAgaWYgKCFtZXJnZWQuaGFzKGNsYXNzZSkpIG1lcmdlZC5zZXQoY2xhc3NlLCBjc3MpXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lcmdlZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMZWdlbmRHcm91cHMgKGxheWVyczogTGF5ZXJSZWZzKTogTGVnZW5kR3JvdXBbXSB7XHJcbiAgY29uc3QgZ3JvdXBzOiBMZWdlbmRHcm91cFtdID0gW11cclxuXHJcbiAgY29uc3QgaW5kZXhDb2xvcnMgPSBtZXJnZUNvbG9yTWFwcyhcclxuICAgIGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXJzLmluZGljZSBhcyB1bmtub3duIGFzIHsgcmVuZGVyZXI/OiB1bmtub3duIH0pPy5yZW5kZXJlciksXHJcbiAgICBleHRyYWN0UmVuZGVyZXJDb2xvcnMoKGxheWVycy5jZW5hcmlvR3JhbmRlMjQ1IGFzIHVua25vd24gYXMgeyByZW5kZXJlcj86IHVua25vd24gfSk/LnJlbmRlcmVyKSxcclxuICAgIGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXJzLmNlbmFyaW9HcmFuZGU1ODUgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpXHJcbiAgKVxyXG5cclxuICBpZiAoaW5kZXhDb2xvcnMuc2l6ZSA+IDApIHtcclxuICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgdGl0bGU6ICfDjW5kaWNlIGRlIGNvbmZsaXRvJyxcclxuICAgICAgaXRlbXM6IG1hcFRvTGVnZW5kSXRlbXMoaW5kZXhDb2xvcnMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaWYgKGxheWVycy5zdWJCYWNpYXMpIHtcclxuICAgIGNvbnN0IHN1YkNvbG9ycyA9IGV4dHJhY3RSZW5kZXJlckNvbG9ycyhcclxuICAgICAgKGxheWVycy5zdWJCYWNpYXMgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KS5yZW5kZXJlclxyXG4gICAgKVxyXG4gICAgaWYgKHN1YkNvbG9ycy5zaXplID4gMCkge1xyXG4gICAgICBncm91cHMucHVzaCh7XHJcbiAgICAgICAgdGl0bGU6ICdTdWItYmFjaWFzJyxcclxuICAgICAgICBpdGVtczogbWFwVG9MZWdlbmRJdGVtcyhzdWJDb2xvcnMpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncm91cHMucHVzaCh7XHJcbiAgICAgICAgdGl0bGU6ICdTdWItYmFjaWFzJyxcclxuICAgICAgICBpdGVtczogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTGltaXRlIGRhIHN1Yi1iYWNpYScsXHJcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMzcsIDEwNywgNjksIDAuMzUpJyxcclxuICAgICAgICAgIHNldmVyaXR5OiAwXHJcbiAgICAgICAgfV1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBncm91cHNcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IHR5cGUgQ2VuYXJpb0lkID0gJ2F0dWFsJyB8ICdzc3AyNDUnIHwgJ3NzcDU4NSdcblxuZXhwb3J0IGludGVyZmFjZSBMYXllclJlZnMge1xuICBzdWJCYWNpYXM6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsXG4gIGluZGljZTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbiAgY2VuYXJpb0dyYW5kZTI0NTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbiAgY2VuYXJpb0dyYW5kZTU4NTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBMYXllclN0YXRlIHtcbiAgbGF5ZXJzOiBMYXllclJlZnNcbiAgb3duZWQ6IFJlY29yZDxrZXlvZiBMYXllclJlZnMsIGJvb2xlYW4+XG4gIGV4dHJhTGF5ZXJzOiBBcnJheTx7IGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLCBvcmlnaW5hbFZpc2libGU6IGJvb2xlYW4gfT5cbiAgaW5pdGlhbFZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCB8IG51bGxcbiAgcmVhZHk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfVVJMUyA9IHtcbiAgc3ViQmFjaWFzVXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvc3ViYmFjaWFzL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIGluZGljZVVybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2luZGljZV9hdHVhbF9vZXN0ZS9GZWF0dXJlU2VydmVyLzAnLFxuICBjZW5hcmlvR3JhbmRlMjQ1VXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvZ3JhbmRlXzI0NS9GZWF0dXJlU2VydmVyLzAnLFxuICBjZW5hcmlvR3JhbmRlNTg1VXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvZ3JhbmRlXzU4NS9GZWF0dXJlU2VydmVyLzAnLFxuICBzZXJ2ZXJVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzJyxcbiAgdG9rZW46ICdfek5ENDlkS2h2bjU5dERUNEhxNDg2VXBfYmRIcUNnR0g0cnpFU1MwWGlxR0pDWHRVal9uTEdzdEFfZXdIdmxhUl9rUDRFdFFCLUdOdC1QbFQ5MUczeXFuTUI0a2FYOGpNUm9qVElaMVBBVkwwNWJkWDlscUdFVVV2M0oxM3RPZydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnIChjZmc6IFBhcnRpYWw8Q29uZmlnPiB8IHVuZGVmaW5lZCk6IENvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgc3ViQmFjaWFzVXJsOiBjZmc/LnN1YkJhY2lhc1VybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuc3ViQmFjaWFzVXJsLFxuICAgIGluZGljZVVybDogY2ZnPy5pbmRpY2VVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLmluZGljZVVybCxcbiAgICBjZW5hcmlvR3JhbmRlMjQ1VXJsOiBjZmc/LmNlbmFyaW9HcmFuZGUyNDVVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLmNlbmFyaW9HcmFuZGUyNDVVcmwsXG4gICAgY2VuYXJpb0dyYW5kZTU4NVVybDogY2ZnPy5jZW5hcmlvR3JhbmRlNTg1VXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5jZW5hcmlvR3JhbmRlNTg1VXJsLFxuICAgIGNsYXNzZUZpZWxkMjQ1OiBjZmc/LmNsYXNzZUZpZWxkMjQ1IHx8ICdjbGFzc2VfMjQ1JyxcbiAgICBjbGFzc2VGaWVsZDU4NTogY2ZnPy5jbGFzc2VGaWVsZDU4NSB8fCAnY2xhc3NlXzU4NScsXG4gICAgcG5yaDJGaWVsZDogY2ZnPy5wbnJoMkZpZWxkIHx8ICdwbnJoMicsXG4gICAgc3ViQmFjaWFGaWVsZDogY2ZnPy5zdWJCYWNpYUZpZWxkIHx8ICdzdWJfYmFjaWEnLFxuICAgIGNsYXNzZUZpZWxkOiBjZmc/LmNsYXNzZUZpZWxkIHx8ICdjbGFzc2UnLFxuICAgIHpvb21MYXllcjogY2ZnPy56b29tTGF5ZXIgfHwgJ3N1YmJhY2lhcycsXG4gICAgc2VydmVyVXJsOiBjZmc/LnNlcnZlclVybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuc2VydmVyVXJsLFxuICAgIHRva2VuOiBjZmc/LnRva2VuIHx8IERFRkFVTFRfTEFZRVJfVVJMUy50b2tlbixcbiAgICBsZWZ0TWFwV2lkZ2V0SWQ6IGNmZz8ubGVmdE1hcFdpZGdldElkLFxuICAgIHJpZ2h0TWFwV2lkZ2V0SWQ6IGNmZz8ucmlnaHRNYXBXaWRnZXRJZCxcbiAgICB3aWRnZXRQYXJ0OiBjZmc/LndpZGdldFBhcnQgPz8gJ2NvbWJpbmVkJyxcbiAgICBsaW5rR3JvdXBJZDogY2ZnPy5saW5rR3JvdXBJZCA/PyAnZGVmYXVsdCcsXG4gICAgdFRvcEJhckhlaWdodDogY2ZnPy50VG9wQmFySGVpZ2h0ID8/IDEyMCxcbiAgICB0U3RlbVdpZHRoUGVyY2VudDogY2ZnPy50U3RlbVdpZHRoUGVyY2VudCA/PyA0MixcbiAgICB0U3RlbU1pbkhlaWdodDogY2ZnPy50U3RlbU1pbkhlaWdodCA/PyAyMjBcbiAgfVxufVxuXG5jb25zdCBub3JtYWxpemUgPSAodTogc3RyaW5nKSA9PiAodSB8fCAnJykucmVwbGFjZSgvXFwvKyQvLCAnJykudG9Mb3dlckNhc2UoKVxuXG5leHBvcnQgY29uc3QgZXNjYXBlU3FsID0gKHY6IHN0cmluZykgPT4gdi5yZXBsYWNlKC8nL2csIFwiJydcIilcblxuZXhwb3J0IGNvbnN0IGJ1aWxkV2hlcmUgPSAoY29uZmlnOiBDb25maWcsIHBucmgyOiBzdHJpbmcsIHN1YkJhY2lhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuICBpZiAocG5yaDIpIHBhcnRzLnB1c2goYCR7Y29uZmlnLnBucmgyRmllbGR9ID0gJyR7ZXNjYXBlU3FsKHBucmgyKX0nYClcbiAgaWYgKHN1YkJhY2lhKSBwYXJ0cy5wdXNoKGAke2NvbmZpZy5zdWJCYWNpYUZpZWxkfSA9ICcke2VzY2FwZVNxbChzdWJCYWNpYSl9J2ApXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPT09IDAgPyAnMT0xJyA6IHBhcnRzLmpvaW4oJyBBTkQgJylcbn1cblxuY29uc3QgZW1wdHlMYXllcnMgPSAoKTogTGF5ZXJSZWZzID0+ICh7XG4gIHN1YkJhY2lhczogbnVsbCxcbiAgaW5kaWNlOiBudWxsLFxuICBjZW5hcmlvR3JhbmRlMjQ1OiBudWxsLFxuICBjZW5hcmlvR3JhbmRlNTg1OiBudWxsXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdE1hcExheWVycyAoXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcbiAgY29uZmlnOiBDb25maWdcbik6IFByb21pc2U8TWFwTGF5ZXJTdGF0ZT4ge1xuICBjb25zdCBbRmVhdHVyZUxheWVyLCBJZGVudGl0eU1hbmFnZXJdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4gICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xuICBdKVxuXG4gIGlmIChjb25maWcudG9rZW4gJiYgY29uZmlnLnNlcnZlclVybCkge1xuICAgIHRyeSB7XG4gICAgICBJZGVudGl0eU1hbmFnZXIucmVnaXN0ZXJUb2tlbih7XG4gICAgICAgIHNlcnZlcjogY29uZmlnLnNlcnZlclVybCxcbiAgICAgICAgdG9rZW46IGNvbmZpZy50b2tlbixcbiAgICAgICAgc3NsOiBjb25maWcuc2VydmVyVXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gcmVnaXN0ZXJUb2tlbiBmYWlsZWQnLCBlKVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcud2hlbigpLFxuICAgICAgbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKCd2aWV3IHRpbWVvdXQnKSksIDE1MDAwKSlcbiAgICBdKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gdmlldy53aGVuJywgZSlcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXcubWFwXG4gIGNvbnN0IGluaXRpYWxWaWV3cG9pbnQgPSBqaW11TWFwVmlldy52aWV3LnZpZXdwb2ludD8uY2xvbmUoKSA/PyBudWxsXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHtcbiAgICBzdWI6IG5vcm1hbGl6ZShjb25maWcuc3ViQmFjaWFzVXJsKSxcbiAgICBpbmQ6IG5vcm1hbGl6ZShjb25maWcuaW5kaWNlVXJsKSxcbiAgICBjMjQ1OiBub3JtYWxpemUoY29uZmlnLmNlbmFyaW9HcmFuZGUyNDVVcmwpLFxuICAgIGM1ODU6IG5vcm1hbGl6ZShjb25maWcuY2VuYXJpb0dyYW5kZTU4NVVybClcbiAgfVxuXG4gIGNvbnN0IGZpbmRCeVVybCA9ICh0YXJnZXQ6IHN0cmluZyk6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0+IHtcbiAgICBsZXQgZm91bmQ6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0gbnVsbFxuICAgIG1hcC5hbGxMYXllcnMuZm9yRWFjaCgobGF5ZXI6IGFueSkgPT4ge1xuICAgICAgaWYgKGZvdW5kKSByZXR1cm5cbiAgICAgIGlmIChsYXllcj8udHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnVybCkge1xuICAgICAgICBjb25zdCBsYXllclVybCA9IGxheWVyLmxheWVySWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gYCR7bGF5ZXIudXJsfS8ke2xheWVyLmxheWVySWR9YFxuICAgICAgICAgIDogbGF5ZXIudXJsXG4gICAgICAgIGlmIChub3JtYWxpemUobGF5ZXJVcmwpID09PSB0YXJnZXQpIGZvdW5kID0gbGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllclxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvdW5kXG4gIH1cblxuICBjb25zdCBlbnN1cmVMYXllciA9IChcbiAgICBleGlzdGluZzogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB2aXNpYmxlID0gdHJ1ZVxuICApOiB7IGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLCBvd25lZDogYm9vbGVhbiB9ID0+IHtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiB7IGxheWVyOiBleGlzdGluZywgb3duZWQ6IGZhbHNlIH1cbiAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmwsIHRpdGxlLCBvdXRGaWVsZHM6IFsnKiddLCB2aXNpYmxlIH0pXG4gICAgbWFwLmFkZChsYXllcilcbiAgICByZXR1cm4geyBsYXllciwgb3duZWQ6IHRydWUgfVxuICB9XG5cbiAgY29uc3Qgc3ViUmVzdWx0ID0gZW5zdXJlTGF5ZXIoZmluZEJ5VXJsKHRhcmdldHMuc3ViKSwgY29uZmlnLnN1YkJhY2lhc1VybCwgJ1N1Yi1iYWNpYXMnLCB0cnVlKVxuICBjb25zdCBpbmRSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5pbmQpLCBjb25maWcuaW5kaWNlVXJsLCAnw41uZGljZSBkZSBDb25mbGl0bycsIHRydWUpXG4gIGNvbnN0IGMyNDVSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5jMjQ1KSwgY29uZmlnLmNlbmFyaW9HcmFuZGUyNDVVcmwsICdDZW7DoXJpbyBNb2RlcmFkbyAtIFJpbyBHcmFuZGUnLCBmYWxzZSlcbiAgY29uc3QgYzU4NVJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmM1ODUpLCBjb25maWcuY2VuYXJpb0dyYW5kZTU4NVVybCwgJ0NlbsOhcmlvIFBlc3NpbWlzdGEgLSBSaW8gR3JhbmRlJywgZmFsc2UpXG5cbiAgc3ViUmVzdWx0LmxheWVyLm9wYWNpdHkgPSAwLjZcblxuICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgc3ViUmVzdWx0LmxheWVyLmxvYWQoKSxcbiAgICBpbmRSZXN1bHQubGF5ZXIubG9hZCgpXG4gIF0pXG5cbiAgYXdhaXQgYzI0NVJlc3VsdC5sYXllci5sb2FkKCkuY2F0Y2goKCkgPT4ge30pXG4gIGF3YWl0IGM1ODVSZXN1bHQubGF5ZXIubG9hZCgpLmNhdGNoKCgpID0+IHt9KVxuXG4gIGNvbnN0IHdpZGdldFVybHMgPSBuZXcgU2V0KFt0YXJnZXRzLnN1YiwgdGFyZ2V0cy5pbmQsIHRhcmdldHMuYzI0NSwgdGFyZ2V0cy5jNTg1XSlcbiAgY29uc3QgZXh0cmFMYXllcnM6IEFycmF5PHsgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsIG9yaWdpbmFsVmlzaWJsZTogYm9vbGVhbiB9PiA9IFtdXG4gIGNvbnN0IGlzRXh0cmEgPSAodGl0bGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHQgPSAodGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gL3Bpdltvw7RdL2kudGVzdCh0KSB8fCAvbWljcm9iYWMvaS50ZXN0KHQpIHx8IC9pcnJpZ2FkL2kudGVzdCh0KVxuICB9XG4gIG1hcC5hbGxMYXllcnMuZm9yRWFjaCgobGF5ZXI6IGFueSkgPT4ge1xuICAgIGlmIChsYXllcj8udHlwZSAhPT0gJ2ZlYXR1cmUnKSByZXR1cm5cbiAgICBjb25zdCBsYXllclVybCA9IGxheWVyLnVybFxuICAgICAgPyAobGF5ZXIubGF5ZXJJZCAhPT0gdW5kZWZpbmVkID8gYCR7bGF5ZXIudXJsfS8ke2xheWVyLmxheWVySWR9YCA6IGxheWVyLnVybClcbiAgICAgIDogJydcbiAgICBpZiAod2lkZ2V0VXJscy5oYXMobm9ybWFsaXplKGxheWVyVXJsKSkpIHJldHVyblxuICAgIGlmIChpc0V4dHJhKGxheWVyLnRpdGxlKSkge1xuICAgICAgZXh0cmFMYXllcnMucHVzaCh7IGxheWVyLCBvcmlnaW5hbFZpc2libGU6ICEhbGF5ZXIudmlzaWJsZSB9KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGxheWVyczoge1xuICAgICAgc3ViQmFjaWFzOiBzdWJSZXN1bHQubGF5ZXIsXG4gICAgICBpbmRpY2U6IGluZFJlc3VsdC5sYXllcixcbiAgICAgIGNlbmFyaW9HcmFuZGUyNDU6IGMyNDVSZXN1bHQubGF5ZXIsXG4gICAgICBjZW5hcmlvR3JhbmRlNTg1OiBjNTg1UmVzdWx0LmxheWVyXG4gICAgfSxcbiAgICBvd25lZDoge1xuICAgICAgc3ViQmFjaWFzOiBzdWJSZXN1bHQub3duZWQsXG4gICAgICBpbmRpY2U6IGluZFJlc3VsdC5vd25lZCxcbiAgICAgIGNlbmFyaW9HcmFuZGUyNDU6IGMyNDVSZXN1bHQub3duZWQsXG4gICAgICBjZW5hcmlvR3JhbmRlNTg1OiBjNTg1UmVzdWx0Lm93bmVkXG4gICAgfSxcbiAgICBleHRyYUxheWVycyxcbiAgICBpbml0aWFsVmlld3BvaW50LFxuICAgIHJlYWR5OiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU93bmVkTGF5ZXJzIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcgfCBudWxsLCBzdGF0ZTogTWFwTGF5ZXJTdGF0ZSB8IG51bGwpIHtcbiAgaWYgKCFqaW11TWFwVmlldyB8fCAhc3RhdGUpIHJldHVyblxuICBjb25zdCBtYXAgPSBqaW11TWFwVmlldy52aWV3Py5tYXBcbiAgaWYgKCFtYXApIHJldHVyblxuICBjb25zdCB7IGxheWVycywgb3duZWQgfSA9IHN0YXRlXG4gIGlmIChsYXllcnMuc3ViQmFjaWFzICYmIG93bmVkLnN1YkJhY2lhcykgbWFwLnJlbW92ZShsYXllcnMuc3ViQmFjaWFzKVxuICBpZiAobGF5ZXJzLmluZGljZSAmJiBvd25lZC5pbmRpY2UpIG1hcC5yZW1vdmUobGF5ZXJzLmluZGljZSlcbiAgaWYgKGxheWVycy5jZW5hcmlvR3JhbmRlMjQ1ICYmIG93bmVkLmNlbmFyaW9HcmFuZGUyNDUpIG1hcC5yZW1vdmUobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUpXG4gIGlmIChsYXllcnMuY2VuYXJpb0dyYW5kZTU4NSAmJiBvd25lZC5jZW5hcmlvR3JhbmRlNTg1KSBtYXAucmVtb3ZlKGxheWVycy5jZW5hcmlvR3JhbmRlNTg1KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwbHlTY2VuYXJpb1RvTWFwIChcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxuICBzdGF0ZTogTWFwTGF5ZXJTdGF0ZSxcbiAgY29uZmlnOiBDb25maWcsXG4gIGNlbmFyaW86IENlbmFyaW9JZCxcbiAgcG5yaDI6IHN0cmluZyxcbiAgc3ViQmFjaWE6IHN0cmluZyxcbiAgem9vbSA9IHRydWVcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHN1YkJhY2lhcywgaW5kaWNlLCBjZW5hcmlvR3JhbmRlMjQ1LCBjZW5hcmlvR3JhbmRlNTg1IH0gPSBzdGF0ZS5sYXllcnNcbiAgaWYgKCFpbmRpY2UgfHwgIXN1YkJhY2lhcykgcmV0dXJuXG5cbiAgY29uc3QgaXNBdHVhbCA9IGNlbmFyaW8gPT09ICdhdHVhbCdcbiAgaW5kaWNlLnZpc2libGUgPSBpc0F0dWFsXG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSBjZW5hcmlvR3JhbmRlMjQ1LnZpc2libGUgPSBjZW5hcmlvID09PSAnc3NwMjQ1J1xuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkgY2VuYXJpb0dyYW5kZTU4NS52aXNpYmxlID0gY2VuYXJpbyA9PT0gJ3NzcDU4NSdcblxuICBjb25zdCBpbkNlbmFyaW9Nb2RlID0gY2VuYXJpbyAhPT0gJ2F0dWFsJyB8fCBCb29sZWFuKHBucmgyKSB8fCBCb29sZWFuKHN1YkJhY2lhKVxuICBzdGF0ZS5leHRyYUxheWVycy5mb3JFYWNoKCh7IGxheWVyLCBvcmlnaW5hbFZpc2libGUgfSkgPT4ge1xuICAgIHRyeSB7IGxheWVyLnZpc2libGUgPSBpbkNlbmFyaW9Nb2RlID8gZmFsc2UgOiBvcmlnaW5hbFZpc2libGUgfSBjYXRjaCB7fVxuICB9KVxuXG4gIGNvbnN0IHdoZXJlID0gYnVpbGRXaGVyZShjb25maWcsIHBucmgyLCBzdWJCYWNpYSlcbiAgY29uc3QgZXhwcmVzc2lvbiA9IHdoZXJlICE9PSAnMT0xJyA/IHdoZXJlIDogJydcblxuICBpbmRpY2UuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSBjZW5hcmlvR3JhbmRlMjQ1LmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkgY2VuYXJpb0dyYW5kZTU4NS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25cbiAgc3ViQmFjaWFzLmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuXG4gIGlmICghem9vbSkgcmV0dXJuXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB6b29tTGF5ZXIgPSBjb25maWcuem9vbUxheWVyID09PSAnaW5kaWNlJyA/IGluZGljZSA6IHN1YkJhY2lhc1xuICAgIGNvbnN0IHpvb21XaGVyZSA9IGV4cHJlc3Npb24gfHwgJzE9MSdcbiAgICBjb25zdCBleHRlbnRSZXN1bHQgPSBhd2FpdCB6b29tTGF5ZXIucXVlcnlFeHRlbnQoeyB3aGVyZTogem9vbVdoZXJlIH0pXG4gICAgaWYgKGV4dGVudFJlc3VsdD8uZXh0ZW50KSB7XG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xuICAgICAgY29uc3QgdGFyZ2V0RXh0ZW50ID0gZXh0ZW50UmVzdWx0LmV4dGVudC5leHBhbmQoMS4yKVxuICAgICAgYXdhaXQgdmlldy5nb1RvKHRhcmdldEV4dGVudCwgeyBhbmltYXRlOiBmYWxzZSB9KVxuICAgICAgY29uc3QgbGltaXRTY2FsZSA9IE1hdGgubWF4KHN1YkJhY2lhcy5tYXhTY2FsZSB8fCAwLCBpbmRpY2UubWF4U2NhbGUgfHwgMClcbiAgICAgIGlmIChsaW1pdFNjYWxlID4gMCAmJiB2aWV3LnNjYWxlIDwgbGltaXRTY2FsZSkge1xuICAgICAgICBhd2FpdCB2aWV3LmdvVG8oeyB0YXJnZXQ6IHRhcmdldEV4dGVudC5jZW50ZXIsIHNjYWxlOiBsaW1pdFNjYWxlICogMS4xIH0sIHsgYW5pbWF0ZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSB6b29tIGVycm9yJywgZSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZUluaXRpYWxWaWV3IChcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxuICBzdGF0ZTogTWFwTGF5ZXJTdGF0ZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgc3ViQmFjaWFzLCBpbmRpY2UsIGNlbmFyaW9HcmFuZGUyNDUsIGNlbmFyaW9HcmFuZGU1ODUgfSA9IHN0YXRlLmxheWVyc1xuICBpZiAoaW5kaWNlKSB7XG4gICAgaW5kaWNlLnZpc2libGUgPSB0cnVlXG4gICAgaW5kaWNlLmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgfVxuICBpZiAoY2VuYXJpb0dyYW5kZTI0NSkge1xuICAgIGNlbmFyaW9HcmFuZGUyNDUudmlzaWJsZSA9IGZhbHNlXG4gICAgY2VuYXJpb0dyYW5kZTI0NS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXG4gIH1cbiAgaWYgKGNlbmFyaW9HcmFuZGU1ODUpIHtcbiAgICBjZW5hcmlvR3JhbmRlNTg1LnZpc2libGUgPSBmYWxzZVxuICAgIGNlbmFyaW9HcmFuZGU1ODUuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xuICB9XG4gIGlmIChzdWJCYWNpYXMpIHN1YkJhY2lhcy5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXG4gIHN0YXRlLmV4dHJhTGF5ZXJzLmZvckVhY2goKHsgbGF5ZXIsIG9yaWdpbmFsVmlzaWJsZSB9KSA9PiB7XG4gICAgdHJ5IHsgbGF5ZXIudmlzaWJsZSA9IG9yaWdpbmFsVmlzaWJsZSB9IGNhdGNoIHt9XG4gIH0pXG4gIGlmIChzdGF0ZS5pbml0aWFsVmlld3BvaW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGppbXVNYXBWaWV3LnZpZXcuZ29UbyhzdGF0ZS5pbml0aWFsVmlld3BvaW50LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gcmVzdG9yZSB2aWV3cG9pbnQnLCBlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEJhc2luT3B0aW9ucyAoXG4gIHN1YkJhY2lhczogX19lc3JpLkZlYXR1cmVMYXllcixcbiAgY29uZmlnOiBDb25maWdcbik6IFByb21pc2U8e1xuICBhbGxQbnJoMjogc3RyaW5nW11cbiAgYWxsU3ViQmFjaWFzOiBzdHJpbmdbXVxuICBzdWJCYWNpYVRvUG5yaDI6IE1hcDxzdHJpbmcsIHN0cmluZz5cbiAgcG5yaDJUb1N1YkJhY2lhczogTWFwPHN0cmluZywgc3RyaW5nW10+XG59PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1YkJhY2lhcy5xdWVyeUZlYXR1cmVzKHtcbiAgICB3aGVyZTogJzE9MScsXG4gICAgb3V0RmllbGRzOiBbY29uZmlnLnBucmgyRmllbGQsIGNvbmZpZy5zdWJCYWNpYUZpZWxkXSxcbiAgICByZXR1cm5EaXN0aW5jdFZhbHVlczogdHJ1ZSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgb3JkZXJCeUZpZWxkczogW2NvbmZpZy5wbnJoMkZpZWxkLCBjb25maWcuc3ViQmFjaWFGaWVsZF1cbiAgfSlcblxuICBjb25zdCBzdWJCYWNpYVRvUG5yaDIgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIGNvbnN0IHBucmgyVG9TdWJCYWNpYXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KClcbiAgY29uc3QgYWxsUG5yaFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGFsbFN1YnNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGZvciAoY29uc3QgZmVhdCBvZiByZXN1bHQuZmVhdHVyZXMpIHtcbiAgICBjb25zdCBwID0gZmVhdC5hdHRyaWJ1dGVzPy5bY29uZmlnLnBucmgyRmllbGRdXG4gICAgY29uc3QgcyA9IGZlYXQuYXR0cmlidXRlcz8uW2NvbmZpZy5zdWJCYWNpYUZpZWxkXVxuICAgIGNvbnN0IHBTdHIgPSBwICE9IG51bGwgJiYgcCAhPT0gJycgPyBTdHJpbmcocCkgOiAnJ1xuICAgIGNvbnN0IHNTdHIgPSBzICE9IG51bGwgJiYgcyAhPT0gJycgPyBTdHJpbmcocykgOiAnJ1xuICAgIGlmIChwU3RyKSBhbGxQbnJoU2V0LmFkZChwU3RyKVxuICAgIGlmIChzU3RyKSBhbGxTdWJzU2V0LmFkZChzU3RyKVxuICAgIGlmIChwU3RyICYmIHNTdHIpIHtcbiAgICAgIHN1YkJhY2lhVG9QbnJoMi5zZXQoc1N0ciwgcFN0cilcbiAgICAgIGNvbnN0IGFyciA9IHBucmgyVG9TdWJCYWNpYXMuZ2V0KHBTdHIpIHx8IFtdXG4gICAgICBpZiAoIWFyci5pbmNsdWRlcyhzU3RyKSkgYXJyLnB1c2goc1N0cilcbiAgICAgIHBucmgyVG9TdWJCYWNpYXMuc2V0KHBTdHIsIGFycilcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFsbFBucmgyOiBBcnJheS5mcm9tKGFsbFBucmhTZXQpLnNvcnQoKSxcbiAgICBhbGxTdWJCYWNpYXM6IEFycmF5LmZyb20oYWxsU3Vic1NldCkuc29ydCgpLFxuICAgIHN1YkJhY2lhVG9QbnJoMixcbiAgICBwbnJoMlRvU3ViQmFjaWFzXG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHR5cGUgeyBDZW5hcmlvSWQsIExheWVyUmVmcyB9IGZyb20gJy4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgYnVpbGRXaGVyZSB9IGZyb20gJy4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgY2xhc3NTZXZlcml0eSB9IGZyb20gJy4vbGVnZW5kVXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NDb3VudCB7XG4gIGNsYXNzZTogc3RyaW5nXG4gIGNvdW50OiBudW1iZXJcbiAgc2V2ZXJpdHk6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YkJhY2lhQ291bnQge1xuICBzdWJCYWNpYTogc3RyaW5nXG4gIHRvdGFsOiBudW1iZXJcbiAgY3JpdGljYWw6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlbmFyaW9TdGF0cyB7XG4gIGNsYXNzZXM6IENsYXNzQ291bnRbXVxuICBieVN1YkJhY2lhOiBTdWJCYWNpYUNvdW50W11cbiAgdG90YWw6IG51bWJlclxuICBjcml0aWNhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxsQ2VuYXJpb3NTdGF0cyB7XG4gIGF0dWFsOiBDZW5hcmlvU3RhdHNcbiAgc3NwMjQ1OiBDZW5hcmlvU3RhdHNcbiAgc3NwNTg1OiBDZW5hcmlvU3RhdHNcbn1cblxuY29uc3QgZW1wdHlTdGF0cyA9ICgpOiBDZW5hcmlvU3RhdHMgPT4gKHtcbiAgY2xhc3NlczogW10sXG4gIGJ5U3ViQmFjaWE6IFtdLFxuICB0b3RhbDogMCxcbiAgY3JpdGljYWw6IDBcbn0pXG5cbmV4cG9ydCBjb25zdCBjb3VudEZlYXR1cmVzQnlDbGFzcyA9IChcbiAgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sXG4gIGZpZWxkTmFtZTogc3RyaW5nXG4pOiBDbGFzc0NvdW50W10gPT4ge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gIGZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgY29uc3QgcmF3ID0gZi5hdHRyaWJ1dGVzPy5bZmllbGROYW1lXVxuICAgIGNvbnN0IGNsYXNzZSA9IHJhdyAhPSBudWxsICYmIHJhdyAhPT0gJycgPyBTdHJpbmcocmF3KS50cmltKCkgOiAnc2VtJ1xuICAgIG1hcC5zZXQoY2xhc3NlLCAobWFwLmdldChjbGFzc2UpIHx8IDApICsgMSlcbiAgfSlcbiAgcmV0dXJuIEFycmF5LmZyb20obWFwLmVudHJpZXMoKSlcbiAgICAubWFwKChbY2xhc3NlLCBjb3VudF0pID0+ICh7IGNsYXNzZSwgY291bnQsIHNldmVyaXR5OiBjbGFzc1NldmVyaXR5KGNsYXNzZSkgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2V2ZXJpdHkgLSBhLnNldmVyaXR5IHx8IGIuY291bnQgLSBhLmNvdW50KVxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRDZW5hcmlvU3RhdHMgPSAoXG4gIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLFxuICBjbGFzc2VGaWVsZDogc3RyaW5nLFxuICBzdWJCYWNpYUZpZWxkOiBzdHJpbmdcbik6IENlbmFyaW9TdGF0cyA9PiB7XG4gIGNvbnN0IGJ5U3ViID0gbmV3IE1hcDxzdHJpbmcsIHsgdG90YWw6IG51bWJlciwgY3JpdGljYWw6IG51bWJlciB9PigpXG4gIGxldCB0b3RhbCA9IDBcbiAgbGV0IGNyaXRpY2FsID0gMFxuXG4gIGZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgY29uc3Qgc3ViID0gU3RyaW5nKGYuYXR0cmlidXRlcz8uW3N1YkJhY2lhRmllbGRdID8/ICcnKS50cmltKCkgfHwgJ+KAlCdcbiAgICBjb25zdCBjbGFzc2VSYXcgPSBmLmF0dHJpYnV0ZXM/LltjbGFzc2VGaWVsZF1cbiAgICBjb25zdCBjbGFzc2UgPSBjbGFzc2VSYXcgIT0gbnVsbCAmJiBjbGFzc2VSYXcgIT09ICcnID8gU3RyaW5nKGNsYXNzZVJhdykudHJpbSgpIDogJ3NlbSdcbiAgICBjb25zdCBzZXYgPSBjbGFzc1NldmVyaXR5KGNsYXNzZSlcbiAgICB0b3RhbCArPSAxXG4gICAgaWYgKHNldiA+PSAzKSBjcml0aWNhbCArPSAxXG4gICAgY29uc3QgZSA9IGJ5U3ViLmdldChzdWIpIHx8IHsgdG90YWw6IDAsIGNyaXRpY2FsOiAwIH1cbiAgICBlLnRvdGFsICs9IDFcbiAgICBpZiAoc2V2ID49IDMpIGUuY3JpdGljYWwgKz0gMVxuICAgIGJ5U3ViLnNldChzdWIsIGUpXG4gIH0pXG5cbiAgY29uc3QgYnlTdWJBcnIgPSBBcnJheS5mcm9tKGJ5U3ViLmVudHJpZXMoKSlcbiAgICAubWFwKChbc3ViQmFjaWEsIGluZm9dKSA9PiAoeyBzdWJCYWNpYSwgdG90YWw6IGluZm8udG90YWwsIGNyaXRpY2FsOiBpbmZvLmNyaXRpY2FsIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmNyaXRpY2FsIC0gYS5jcml0aWNhbCB8fCBiLnRvdGFsIC0gYS50b3RhbClcblxuICByZXR1cm4ge1xuICAgIGNsYXNzZXM6IGNvdW50RmVhdHVyZXNCeUNsYXNzKGZlYXR1cmVzLCBjbGFzc2VGaWVsZCksXG4gICAgYnlTdWJCYWNpYTogYnlTdWJBcnIsXG4gICAgdG90YWwsXG4gICAgY3JpdGljYWxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENlbmFyaW9zU3RhdHMgKFxuICBsYXllcnM6IExheWVyUmVmcyxcbiAgY29uZmlnOiBDb25maWcsXG4gIHBucmgyOiBzdHJpbmcsXG4gIHN1YkJhY2lhOiBzdHJpbmdcbik6IFByb21pc2U8QWxsQ2VuYXJpb3NTdGF0cz4ge1xuICBjb25zdCB7IGluZGljZSwgY2VuYXJpb0dyYW5kZTI0NSwgY2VuYXJpb0dyYW5kZTU4NSB9ID0gbGF5ZXJzXG4gIGNvbnN0IHdoZXJlID0gYnVpbGRXaGVyZShjb25maWcsIHBucmgyLCBzdWJCYWNpYSlcbiAgY29uc3QgZXhwcmVzc2lvbiA9IHdoZXJlICE9PSAnMT0xJyA/IHdoZXJlIDogJzE9MSdcbiAgY29uc3Qgc3ViRmllbGQgPSBjb25maWcuc3ViQmFjaWFGaWVsZFxuXG4gIGNvbnN0IFtyZXNBdHVhbCwgcmVzMjQ1LCByZXM1ODVdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGluZGljZVxuICAgICAgPyBpbmRpY2UucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHdoZXJlOiBleHByZXNzaW9uLFxuICAgICAgICBvdXRGaWVsZHM6IFtjb25maWcuY2xhc3NlRmllbGQsIHN1YkZpZWxkXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBudW06IDUwMDAwXG4gICAgICB9KVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUobnVsbCksXG4gICAgY2VuYXJpb0dyYW5kZTI0NVxuICAgICAgPyBjZW5hcmlvR3JhbmRlMjQ1LnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICB3aGVyZTogZXhwcmVzc2lvbixcbiAgICAgICAgb3V0RmllbGRzOiBbY29uZmlnLmNsYXNzZUZpZWxkMjQ1LCBzdWJGaWVsZF0sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgbnVtOiA1MDAwMFxuICAgICAgfSlcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpLFxuICAgIGNlbmFyaW9HcmFuZGU1ODVcbiAgICAgID8gY2VuYXJpb0dyYW5kZTU4NS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgd2hlcmU6IGV4cHJlc3Npb24sXG4gICAgICAgIG91dEZpZWxkczogW2NvbmZpZy5jbGFzc2VGaWVsZDU4NSwgc3ViRmllbGRdLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIG51bTogNTAwMDBcbiAgICAgIH0pXG4gICAgICA6IFByb21pc2UucmVzb2x2ZShudWxsKVxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgYXR1YWw6IHJlc0F0dWFsID8gYnVpbGRDZW5hcmlvU3RhdHMocmVzQXR1YWwuZmVhdHVyZXMsIGNvbmZpZy5jbGFzc2VGaWVsZCwgc3ViRmllbGQpIDogZW1wdHlTdGF0cygpLFxuICAgIHNzcDI0NTogcmVzMjQ1ID8gYnVpbGRDZW5hcmlvU3RhdHMocmVzMjQ1LmZlYXR1cmVzLCBjb25maWcuY2xhc3NlRmllbGQyNDUsIHN1YkZpZWxkKSA6IGVtcHR5U3RhdHMoKSxcbiAgICBzc3A1ODU6IHJlczU4NSA/IGJ1aWxkQ2VuYXJpb1N0YXRzKHJlczU4NS5mZWF0dXJlcywgY29uZmlnLmNsYXNzZUZpZWxkNTg1LCBzdWJGaWVsZCkgOiBlbXB0eVN0YXRzKClcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDZW5hcmlvTWVzc2FnZXMgPSB7XG4gIGNlbmFyaW9BdHVhbDogc3RyaW5nXG4gIGNlbmFyaW9Tc3AyNDU6IHN0cmluZ1xuICBjZW5hcmlvU3NwNTg1OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGNlbmFyaW9JZFRvTGFiZWwgPSAoaWQ6IENlbmFyaW9JZCwgbWVzc2FnZXM6IENlbmFyaW9NZXNzYWdlcyk6IHN0cmluZyA9PiB7XG4gIGlmIChpZCA9PT0gJ3NzcDI0NScpIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvU3NwMjQ1XG4gIGlmIChpZCA9PT0gJ3NzcDU4NScpIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvU3NwNTg1XG4gIHJldHVybiBtZXNzYWdlcy5jZW5hcmlvQXR1YWxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnQ29tcGFyYXIgQ2Vuw6FyaW9zJyxcbiAgc2VsZWN0TWFwc0ZpcnN0OiAnQ29uZmlndXJlIG9zIGRvaXMgbWFwYXMgbmFzIGNvbmZpZ3VyYcOnw7VlcyBkbyB3aWRnZXQuJyxcbiAgc2VsZWN0TGVmdE1hcDogJ1NlbGVjaW9uZSBvIG1hcGEgZGEgZXNxdWVyZGEnLFxuICBzZWxlY3RSaWdodE1hcDogJ1NlbGVjaW9uZSBvIG1hcGEgZGEgZGlyZWl0YScsXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJyxcbiAgcG5yaDJMYWJlbDogJ0JhY2lhIGhpZHJvZ3LDoWZpY2EnLFxuICBzdWJCYWNpYUxhYmVsOiAnU3ViLWJhY2lhJyxcbiAgc2VsZWN0UG5yaDI6ICdTZWxlY2lvbmUnLFxuICBzZWxlY3RTdWJCYWNpYTogJ1NlbGVjaW9uZSB1bWEgc3ViLWJhY2lhJyxcbiAgbWFwTGVmdExhYmVsOiAnTWFwYSBlc3F1ZXJkbycsXG4gIG1hcFJpZ2h0TGFiZWw6ICdNYXBhIGRpcmVpdG8nLFxuICBjZW5hcmlvQXR1YWw6ICdBdHVhbCcsXG4gIGNlbmFyaW9Tc3AyNDU6ICdNb2RlcmFkbycsXG4gIGNlbmFyaW9Tc3A1ODU6ICdQZXNzaW1pc3RhJyxcbiAgc2VsZWN0Q2VuYXJpbzogJ1NlbGVjaW9uZSB1bSBjZW7DoXJpbycsXG4gIGNsZWFyOiAnTGltcGFyJyxcbiAgZXJyb3JMb2FkaW5nOiAnRXJybyBhbyBjYXJyZWdhciB2YWxvcmVzIGRhcyBjYW1hZGFzLicsXG4gIGVycm9yQ29yczogJ0ZhbGhhIGRlIENPUlM6IG8gc2Vydmlkb3IgQXJjR0lTIG7Do28gcGVybWl0ZSBjaGFtYWRhcyBkZXN0YSBvcmlnZW0uJyxcbiAgZXJyb3JBdXRoOiAnQSBjYW1hZGEgZXhpZ2UgYXV0ZW50aWNhw6fDo28uIENvbXBhcnRpbGhlIG9zIGl0ZW5zIGNvbW8gcMO6YmxpY29zIG91IGZhw6dhIGxvZ2luLicsXG4gIHNjZW5hcmlvV2FybmluZzogJ0NlbsOhcmlvcyBNb2RlcmFkbyBlIFBlc3NpbWlzdGE6IGRhZG9zIGRhIEJhY2lhIGRvIFJpbyBHcmFuZGUuJyxcbiAgY29tcGFyZVRpdGxlOiAnQ29tcGFyYXIgY2Vuw6FyaW9zJyxcbiAgc3luY1ZpZXdzOiAnU2luY3Jvbml6YXIgbWFwYXMnLFxuICBsZWdlbmRUaXRsZTogJ0xlZ2VuZGEnLFxuICBsZWdlbmRFbXB0eTogJ0xlZ2VuZGEgaW5kaXNwb27DrXZlbCDigJQgYWd1YXJkZSBvIGNhcnJlZ2FtZW50byBkYXMgY2FtYWRhcy4nLFxuICBjZW5hcmlvQmFjaWFMYWJlbDogJ0JhY2lhJyxcbiAgY2VuYXJpb1N1YkJhY2lhTGFiZWw6ICdTdWItYmFjaWEnLFxuICBjZW5hcmlvc0xvYWRpbmc6ICdDYWxjdWxhbmRvIHRyZWNob3MgcG9yIGNsYXNzZS4uLicsXG4gIGNlbmFyaW9zU2VsZWN0RmlsdGVyOiAnU2VsZWNpb25lIGJhY2lhIGUvb3Ugc3ViLWJhY2lhIHBhcmEgdmVyIGEgY29tcGFyYcOnw6NvLicsXG4gIGNlbmFyaW9zQ2hhcnRUaXRsZTogJ1RyZWNob3MgcG9yIGNsYXNzZSBlbSBjYWRhIGNlbsOhcmlvJyxcbiAgY2VuYXJpb3NOb0RhdGE6ICdTZW0gZGFkb3MgcGFyYSBhIHJlZ2nDo28gc2VsZWNpb25hZGEuJyxcbiAgcGFuZWxXYWl0aW5nRm9yRmlsdGVyczogJ0FndWFyZGFuZG8gbyB3aWRnZXQgZGUgZmlsdHJvcyBuYSBtZXNtYSBww6FnaW5hLicsXG4gIHBhbmVsTGlua0dyb3VwSGludDogJ1VzZSBvIG1lc21vIElEIGRlIHbDrW5jdWxvOidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgY3NzLCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IEZpbHRlckJhciB9IGZyb20gJy4vY29tcG9uZW50cy9GaWx0ZXJCYXInXG5pbXBvcnQgeyBDb250ZW50UGFuZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGVudFBhbmVsJ1xuaW1wb3J0IHtcbiAgZ2V0Q29tcGFyZUJyaWRnZVNuYXBzaG90LFxuICByZWNvcmRUb0NsYXNzQ29sb3JzLFxuICBzdWJzY3JpYmVDb21wYXJlQnJpZGdlLFxuICB1cGRhdGVDb21wYXJlQnJpZGdlXG59IGZyb20gJy4vY29tcGFyZUNlbmFyaW9zQnJpZGdlJ1xuaW1wb3J0IHtcbiAgdHlwZSBDZW5hcmlvSWQsXG4gIHR5cGUgTWFwTGF5ZXJTdGF0ZSxcbiAgYXBwbHlTY2VuYXJpb1RvTWFwLFxuICBpbml0TWFwTGF5ZXJzLFxuICBsb2FkQmFzaW5PcHRpb25zLFxuICBtZXJnZUNvbmZpZyxcbiAgcmVtb3ZlT3duZWRMYXllcnMsXG4gIHJlc3RvcmVJbml0aWFsVmlld1xufSBmcm9tICcuL21hcExheWVycydcbmltcG9ydCB7IGJ1aWxkTGVnZW5kR3JvdXBzLCBleHRyYWN0Q2xhc3NDb2xvcnMsIHR5cGUgTGVnZW5kR3JvdXAgfSBmcm9tICcuL2xlZ2VuZFV0aWxzJ1xuaW1wb3J0IHsgbG9hZENlbmFyaW9zU3RhdHMsIHR5cGUgQWxsQ2VuYXJpb3NTdGF0cyB9IGZyb20gJy4vc2NlbmFyaW9TdGF0cydcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gPSBSZWFjdFxuXG5jb25zdCBjZW5hcmlvTGFiZWwgPSAoaWQ6IENlbmFyaW9JZCk6IHN0cmluZyA9PiB7XG4gIGlmIChpZCA9PT0gJ3NzcDI0NScpIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NVxuICBpZiAoaWQgPT09ICdzc3A1ODUnKSByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbiAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvQXR1YWxcbn1cblxuY29uc3QgbGFiZWxUb0NlbmFyaW8gPSAobGFiZWw6IHN0cmluZyk6IENlbmFyaW9JZCA9PiB7XG4gIGlmIChsYWJlbCA9PT0gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3AyNDUpIHJldHVybiAnc3NwMjQ1J1xuICBpZiAobGFiZWwgPT09IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwNTg1KSByZXR1cm4gJ3NzcDU4NSdcbiAgcmV0dXJuICdhdHVhbCdcbn1cblxuY29uc3QgQ0VOQVJJT19PUFRJT05TID0gW1xuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb0F0dWFsLFxuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NSxcbiAgZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbl1cblxuaW50ZXJmYWNlIE1hcFNsb3Qge1xuICBqbXY6IEppbXVNYXBWaWV3IHwgbnVsbFxuICBsYXllclN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgY29uZmlnID0gbWVyZ2VDb25maWcocHJvcHMuY29uZmlnIGFzIFBhcnRpYWw8SU1Db25maWc+IHwgdW5kZWZpbmVkKVxuICBjb25zdCB3aWRnZXRQYXJ0ID0gY29uZmlnLndpZGdldFBhcnRcbiAgY29uc3QgbGlua0dyb3VwSWQgPSBjb25maWcubGlua0dyb3VwSWRcbiAgY29uc3QgaXNQYW5lbE9ubHkgPSB3aWRnZXRQYXJ0ID09PSAncGFuZWwnXG4gIGNvbnN0IGlzRmlsdGVyc09ubHkgPSB3aWRnZXRQYXJ0ID09PSAnZmlsdGVycydcbiAgY29uc3QgaXNDb21iaW5lZCA9IHdpZGdldFBhcnQgPT09ICdjb21iaW5lZCdcbiAgY29uc3QgaXNQdWJsaXNoZXIgPSBpc0ZpbHRlcnNPbmx5IHx8IGlzQ29tYmluZWRcblxuICBjb25zdCBsZWZ0TWFwSWQgPSBjb25maWcubGVmdE1hcFdpZGdldElkIHx8IHByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdIHx8ICcnXG4gIGNvbnN0IHJpZ2h0TWFwSWQgPSBjb25maWcucmlnaHRNYXBXaWRnZXRJZCB8fCBwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlsxXSB8fCAnJ1xuXG4gIGNvbnN0IFtsZWZ0LCBzZXRMZWZ0XSA9IHVzZVN0YXRlPE1hcFNsb3Q+KHsgam12OiBudWxsLCBsYXllclN0YXRlOiBudWxsIH0pXG4gIGNvbnN0IFtyaWdodCwgc2V0UmlnaHRdID0gdXNlU3RhdGU8TWFwU2xvdD4oeyBqbXY6IG51bGwsIGxheWVyU3RhdGU6IG51bGwgfSlcblxuICBjb25zdCBbYWxsUG5yaDIsIHNldEFsbFBucmgyXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2FsbFN1YkJhY2lhcywgc2V0QWxsU3ViQmFjaWFzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW3NlbGVjdGVkUG5yaDIsIHNldFNlbGVjdGVkUG5yaDJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWxlY3RlZFN1YkJhY2lhLCBzZXRTZWxlY3RlZFN1YkJhY2lhXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY2VuYXJpb0xlZnQsIHNldENlbmFyaW9MZWZ0XSA9IHVzZVN0YXRlPENlbmFyaW9JZD4oJ2F0dWFsJylcbiAgY29uc3QgW2NlbmFyaW9SaWdodCwgc2V0Q2VuYXJpb1JpZ2h0XSA9IHVzZVN0YXRlPENlbmFyaW9JZD4oJ2F0dWFsJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0c0xvYWRpbmcsIHNldFN0YXRzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NlbmFyaW9zU3RhdHMsIHNldENlbmFyaW9zU3RhdHNdID0gdXNlU3RhdGU8QWxsQ2VuYXJpb3NTdGF0cyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzeW5jVmlld3MsIHNldFN5bmNWaWV3c10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbbGVnZW5kR3JvdXBzLCBzZXRMZWdlbmRHcm91cHNdID0gdXNlU3RhdGU8TGVnZW5kR3JvdXBbXT4oW10pXG4gIGNvbnN0IFtjbGFzc0NvbG9ycywgc2V0Q2xhc3NDb2xvcnNdID0gdXNlU3RhdGU8TWFwPHN0cmluZywgc3RyaW5nPj4obmV3IE1hcCgpKVxuXG4gIGNvbnN0IHN1YkJhY2lhVG9QbnJoMlJlZiA9IHVzZVJlZjxNYXA8c3RyaW5nLCBzdHJpbmc+PihuZXcgTWFwKCkpXG4gIGNvbnN0IHBucmgyVG9TdWJCYWNpYXNSZWYgPSB1c2VSZWY8TWFwPHN0cmluZywgc3RyaW5nW10+PihuZXcgTWFwKCkpXG4gIGNvbnN0IHN5bmNpbmdSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IGFwcGx5aW5nUmVmID0gdXNlUmVmKGZhbHNlKVxuICBjb25zdCBpbml0aWFsVmlld1N5bmNlZFJlZiA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgcHJldkZpbHRlclJlZiA9IHVzZVJlZih7IHBucmgyOiAnJywgc3ViQmFjaWE6ICcnIH0pXG4gIGNvbnN0IHN0YXRzTG9hZEtleVJlZiA9IHVzZVJlZignJylcblxuICBjb25zdCBoYXNCb3RoTWFwcyA9IEJvb2xlYW4obGVmdE1hcElkICYmIHJpZ2h0TWFwSWQpXG4gIGNvbnN0IGhhc1JlZ2lvbiA9IEJvb2xlYW4oc2VsZWN0ZWRQbnJoMiB8fCBzZWxlY3RlZFN1YkJhY2lhKVxuICBjb25zdCBoYXNBY3RpdmVGaWx0ZXIgPSBCb29sZWFuKFxuICAgIHNlbGVjdGVkUG5yaDIgfHwgc2VsZWN0ZWRTdWJCYWNpYSB8fCBjZW5hcmlvTGVmdCAhPT0gJ2F0dWFsJyB8fCBjZW5hcmlvUmlnaHQgIT09ICdhdHVhbCdcbiAgKVxuXG4gIGNvbnN0IGRldGVjdEVycm9yID0gKGVycjogdW5rbm93bik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgZSA9IGVyciBhcyB7IG1lc3NhZ2U/OiBzdHJpbmcsIGRldGFpbHM/OiB7IGh0dHBTdGF0dXM/OiBudW1iZXIsIGVycm9yPzogeyBtZXNzYWdlPzogc3RyaW5nIH0gfSB9XG4gICAgY29uc3QgbXNnID0gYCR7ZT8ubWVzc2FnZSB8fCAnJ30gJHtlPy5kZXRhaWxzPy5lcnJvcj8ubWVzc2FnZSB8fCAnJ31gLnRvTG93ZXJDYXNlKClcbiAgICBpZiAobXNnLmluY2x1ZGVzKCdjb3JzJykgfHwgbXNnLmluY2x1ZGVzKCdjcm9zcy1vcmlnaW4nKSB8fCBtc2cuaW5jbHVkZXMoJ25ldHdvcmsnKSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5lcnJvckNvcnNcbiAgICB9XG4gICAgaWYgKG1zZy5pbmNsdWRlcygndG9rZW4nKSB8fCBtc2cuaW5jbHVkZXMoJ3VuYXV0aG9yaXplZCcpIHx8IGU/LmRldGFpbHM/Lmh0dHBTdGF0dXMgPT09IDQwMSB8fCBlPy5kZXRhaWxzPy5odHRwU3RhdHVzID09PSA0MDMpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuZXJyb3JBdXRoXG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuZXJyb3JMb2FkaW5nXG4gIH1cblxuICBjb25zdCBsb2FkT3B0aW9uc0Zyb21NYXAgPSB1c2VDYWxsYmFjayhhc3luYyAobGF5ZXJTdGF0ZTogTWFwTGF5ZXJTdGF0ZSB8IG51bGwpID0+IHtcbiAgICBpZiAoIWxheWVyU3RhdGU/LmxheWVycy5zdWJCYWNpYXMpIHJldHVyblxuICAgIGNvbnN0IG9wdHMgPSBhd2FpdCBsb2FkQmFzaW5PcHRpb25zKGxheWVyU3RhdGUubGF5ZXJzLnN1YkJhY2lhcywgY29uZmlnKVxuICAgIHN1YkJhY2lhVG9QbnJoMlJlZi5jdXJyZW50ID0gb3B0cy5zdWJCYWNpYVRvUG5yaDJcbiAgICBwbnJoMlRvU3ViQmFjaWFzUmVmLmN1cnJlbnQgPSBvcHRzLnBucmgyVG9TdWJCYWNpYXNcbiAgICBzZXRBbGxQbnJoMihvcHRzLmFsbFBucmgyKVxuICAgIHNldEFsbFN1YkJhY2lhcyhvcHRzLmFsbFN1YkJhY2lhcylcbiAgICBzZXRMZWdlbmRHcm91cHMoYnVpbGRMZWdlbmRHcm91cHMobGF5ZXJTdGF0ZS5sYXllcnMpKVxuICAgIHNldENsYXNzQ29sb3JzKGV4dHJhY3RDbGFzc0NvbG9ycyhsYXllclN0YXRlLmxheWVycykpXG4gIH0sIFtjb25maWddKVxuXG4gIGNvbnN0IHN5bmNSaWdodFRvTGVmdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWxlZnQuam12IHx8ICFyaWdodC5qbXYpIHJldHVyblxuICAgIHN5bmNpbmdSZWYuY3VycmVudCA9IHRydWVcbiAgICB0cnkge1xuICAgICAgY29uc3QgbHYgPSBsZWZ0Lmptdi52aWV3XG4gICAgICBjb25zdCBydiA9IHJpZ2h0Lmptdi52aWV3XG4gICAgICBhd2FpdCBydi5nb1RvKHtcbiAgICAgICAgY2VudGVyOiBsdi5jZW50ZXIsXG4gICAgICAgIHNjYWxlOiBsdi5zY2FsZSxcbiAgICAgICAgcm90YXRpb246IGx2LnJvdGF0aW9uXG4gICAgICB9LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gICAgfSBjYXRjaCB7fVxuICAgIHN5bmNpbmdSZWYuY3VycmVudCA9IGZhbHNlXG4gIH0sIFtsZWZ0LmptdiwgcmlnaHQuam12XSlcblxuICBjb25zdCBhcHBseVRvQm90aE1hcHMgPSB1c2VDYWxsYmFjayhhc3luYyAoXG4gICAgcG5yaDI6IHN0cmluZyxcbiAgICBzdWJCYWNpYTogc3RyaW5nLFxuICAgIGxlZnRDZW5hcmlvOiBDZW5hcmlvSWQsXG4gICAgcmlnaHRDZW5hcmlvOiBDZW5hcmlvSWQsXG4gICAgem9vbSA9IGZhbHNlXG4gICkgPT4ge1xuICAgIGlmICghbGVmdC5sYXllclN0YXRlICYmICFyaWdodC5sYXllclN0YXRlKSByZXR1cm5cbiAgICBhcHBseWluZ1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YXNrczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICAgIGlmIChsZWZ0LmptdiAmJiBsZWZ0LmxheWVyU3RhdGUpIHtcbiAgICAgICAgdGFza3MucHVzaChhcHBseVNjZW5hcmlvVG9NYXAobGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSwgY29uZmlnLCBsZWZ0Q2VuYXJpbywgcG5yaDIsIHN1YkJhY2lhLCB6b29tKSlcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodC5qbXYgJiYgcmlnaHQubGF5ZXJTdGF0ZSkge1xuICAgICAgICB0YXNrcy5wdXNoKGFwcGx5U2NlbmFyaW9Ub01hcChyaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUsIGNvbmZpZywgcmlnaHRDZW5hcmlvLCBwbnJoMiwgc3ViQmFjaWEsIGZhbHNlKSlcbiAgICAgIH1cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKVxuICAgICAgaWYgKHpvb20pIHtcbiAgICAgICAgYXdhaXQgc3luY1JpZ2h0VG9MZWZ0KClcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXBwbHlpbmdSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgfVxuICB9LCBbbGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSwgcmlnaHQuam12LCByaWdodC5sYXllclN0YXRlLCBjb25maWcsIHN5bmNSaWdodFRvTGVmdF0pXG5cbiAgY29uc3QgaW5pdFNsb3QgPSB1c2VDYWxsYmFjayhhc3luYyAoXG4gICAgam12OiBKaW11TWFwVmlldyxcbiAgICBzZXR0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPE1hcFNsb3Q+PixcbiAgICBpc1ByaW1hcnlGb3JPcHRpb25zOiBib29sZWFuXG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcignJylcbiAgICAgIGNvbnN0IGxheWVyU3RhdGUgPSBhd2FpdCBpbml0TWFwTGF5ZXJzKGptdiwgY29uZmlnKVxuICAgICAgc2V0dGVyKHsgam12LCBsYXllclN0YXRlIH0pXG4gICAgICBpZiAoaXNQcmltYXJ5Rm9yT3B0aW9ucykge1xuICAgICAgICBhd2FpdCBsb2FkT3B0aW9uc0Zyb21NYXAobGF5ZXJTdGF0ZSlcbiAgICAgIH1cbiAgICAgIGF3YWl0IGFwcGx5U2NlbmFyaW9Ub01hcChqbXYsIGxheWVyU3RhdGUsIGNvbmZpZywgJ2F0dWFsJywgJycsICcnLCBmYWxzZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbY29tcGFyZS1jZW5hcmlvc10gaW5pdCcsIGUpXG4gICAgICBzZXRFcnJvcihkZXRlY3RFcnJvcihlKSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH0sIFtjb25maWcsIGxvYWRPcHRpb25zRnJvbU1hcF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0aWFsVmlld1N5bmNlZFJlZi5jdXJyZW50ID0gZmFsc2VcbiAgfSwgW2xlZnRNYXBJZCwgcmlnaHRNYXBJZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxlZnQuam12IHx8IGxlZnQubGF5ZXJTdGF0ZSkgcmV0dXJuXG4gICAgdm9pZCBpbml0U2xvdChsZWZ0Lmptdiwgc2V0TGVmdCwgdHJ1ZSlcbiAgICByZXR1cm4gKCkgPT4geyByZW1vdmVPd25lZExheWVycyhsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlKSB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbGVmdC5qbXZdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyaWdodC5qbXYgfHwgcmlnaHQubGF5ZXJTdGF0ZSkgcmV0dXJuXG4gICAgdm9pZCBpbml0U2xvdChyaWdodC5qbXYsIHNldFJpZ2h0LCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4geyByZW1vdmVPd25lZExheWVycyhyaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUpIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtyaWdodC5qbXZdKVxuXG4gIGNvbnN0IGxheWVyc1JlYWR5ID0gQm9vbGVhbihsZWZ0LmxheWVyU3RhdGU/LnJlYWR5ICYmIHJpZ2h0LmxheWVyU3RhdGU/LnJlYWR5KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYXllcnNSZWFkeSB8fCAhbGVmdC5qbXYgfHwgIXJpZ2h0LmptdikgcmV0dXJuXG5cbiAgICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWluaXRpYWxWaWV3U3luY2VkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgYXBwbHlpbmdSZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMoJycsICcnLCAnYXR1YWwnLCAnYXR1YWwnLCBmYWxzZSlcbiAgICAgICAgICBjb25zdCB2cCA9IGxlZnQubGF5ZXJTdGF0ZT8uaW5pdGlhbFZpZXdwb2ludFxuICAgICAgICAgIGlmICh2cCkge1xuICAgICAgICAgICAgYXdhaXQgbGVmdC5qbXYudmlldy5nb1RvKHZwLCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gICAgICAgICAgICBhd2FpdCBzeW5jUmlnaHRUb0xlZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBhcHBseWluZ1JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsVmlld1N5bmNlZFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICBwcmV2RmlsdGVyUmVmLmN1cnJlbnQgPSB7IHBucmgyOiAnJywgc3ViQmFjaWE6ICcnIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlckNoYW5nZWQgPVxuICAgICAgICBwcmV2RmlsdGVyUmVmLmN1cnJlbnQucG5yaDIgIT09IHNlbGVjdGVkUG5yaDIgfHxcbiAgICAgICAgcHJldkZpbHRlclJlZi5jdXJyZW50LnN1YkJhY2lhICE9PSBzZWxlY3RlZFN1YkJhY2lhXG4gICAgICBjb25zdCBzaG91bGRab29tID0gZmlsdGVyQ2hhbmdlZCAmJiBCb29sZWFuKHNlbGVjdGVkUG5yaDIgfHwgc2VsZWN0ZWRTdWJCYWNpYSlcbiAgICAgIHByZXZGaWx0ZXJSZWYuY3VycmVudCA9IHsgcG5yaDI6IHNlbGVjdGVkUG5yaDIsIHN1YkJhY2lhOiBzZWxlY3RlZFN1YkJhY2lhIH1cblxuICAgICAgYXdhaXQgYXBwbHlUb0JvdGhNYXBzKHNlbGVjdGVkUG5yaDIsIHNlbGVjdGVkU3ViQmFjaWEsIGNlbmFyaW9MZWZ0LCBjZW5hcmlvUmlnaHQsIHNob3VsZFpvb20pXG4gICAgfVxuICAgIHZvaWQgcnVuKClcbiAgfSwgW1xuICAgIGxheWVyc1JlYWR5LFxuICAgIGNlbmFyaW9MZWZ0LFxuICAgIGNlbmFyaW9SaWdodCxcbiAgICBzZWxlY3RlZFBucmgyLFxuICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgbGVmdC5qbXYsXG4gICAgcmlnaHQuam12LFxuICAgIGFwcGx5VG9Cb3RoTWFwcyxcbiAgICBzeW5jUmlnaHRUb0xlZnRcbiAgXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzUmVnaW9uIHx8ICFsZWZ0LmxheWVyU3RhdGU/LmxheWVycy5pbmRpY2UpIHtcbiAgICAgIHNldENlbmFyaW9zU3RhdHMobnVsbClcbiAgICAgIHN0YXRzTG9hZEtleVJlZi5jdXJyZW50ID0gJydcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBrZXkgPSBgJHtzZWxlY3RlZFBucmgyfXwke3NlbGVjdGVkU3ViQmFjaWF9YFxuICAgIGlmIChzdGF0c0xvYWRLZXlSZWYuY3VycmVudCA9PT0ga2V5KSByZXR1cm5cblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIHNldFN0YXRzTG9hZGluZyh0cnVlKVxuICAgIGxvYWRDZW5hcmlvc1N0YXRzKGxlZnQubGF5ZXJTdGF0ZS5sYXllcnMsIGNvbmZpZywgc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSlcbiAgICAgIC50aGVuKHN0YXRzID0+IHtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgIHN0YXRzTG9hZEtleVJlZi5jdXJyZW50ID0ga2V5XG4gICAgICAgIHNldENlbmFyaW9zU3RhdHMoc3RhdHMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignW2NvbXBhcmUtY2VuYXJpb3NdIHN0YXRzIGVycm9yJywgZXJyKVxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0Q2VuYXJpb3NTdGF0cyhudWxsKVxuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHNldFN0YXRzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XG4gIH0sIFtoYXNSZWdpb24sIHNlbGVjdGVkUG5yaDIsIHNlbGVjdGVkU3ViQmFjaWEsIGxheWVyc1JlYWR5LCBjb25maWddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzeW5jVmlld3MgfHwgIWxlZnQuam12IHx8ICFyaWdodC5qbXYpIHJldHVyblxuICAgIGNvbnN0IGxlZnRWaWV3ID0gbGVmdC5qbXYudmlld1xuICAgIGxldCBkZWJvdW5jZVRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0IHN5bmNGcm9tTGVmdCA9ICgpID0+IHtcbiAgICAgIGlmIChhcHBseWluZ1JlZi5jdXJyZW50IHx8IHN5bmNpbmdSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgICBpZiAoZGVib3VuY2VUaW1lcikgd2luZG93LmNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKVxuICAgICAgZGVib3VuY2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdm9pZCBzeW5jUmlnaHRUb0xlZnQoKVxuICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGNvbnN0IGgxID0gbGVmdFZpZXcud2F0Y2goJ2V4dGVudCcsIHN5bmNGcm9tTGVmdClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaDEucmVtb3ZlKClcbiAgICAgIGlmIChkZWJvdW5jZVRpbWVyKSB3aW5kb3cuY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpXG4gICAgfVxuICB9LCBbc3luY1ZpZXdzLCBsZWZ0LmptdiwgcmlnaHQuam12LCBzeW5jUmlnaHRUb0xlZnRdKVxuXG4gIGNvbnN0IG9uUG5yaDJTZWxlY3QgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkUG5yaDIodmFsdWUpXG4gICAgaWYgKHZhbHVlICYmIHNlbGVjdGVkU3ViQmFjaWEpIHtcbiAgICAgIGNvbnN0IHN1YnMgPSBwbnJoMlRvU3ViQmFjaWFzUmVmLmN1cnJlbnQuZ2V0KHZhbHVlKSB8fCBbXVxuICAgICAgaWYgKCFzdWJzLmluY2x1ZGVzKHNlbGVjdGVkU3ViQmFjaWEpKSB7XG4gICAgICAgIHNldFNlbGVjdGVkU3ViQmFjaWEoJycpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25TdWJCYWNpYVNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSh2YWx1ZSlcbiAgICBpZiAodmFsdWUgJiYgIXNlbGVjdGVkUG5yaDIpIHtcbiAgICAgIGNvbnN0IGF1dG8gPSBzdWJCYWNpYVRvUG5yaDJSZWYuY3VycmVudC5nZXQodmFsdWUpXG4gICAgICBpZiAoYXV0bykgc2V0U2VsZWN0ZWRQbnJoMihhdXRvKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uQ2VuYXJpb0xlZnRTZWxlY3QgPSAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIHNldENlbmFyaW9MZWZ0KGxhYmVsVG9DZW5hcmlvKGxhYmVsKSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2VuYXJpb1JpZ2h0U2VsZWN0ID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRDZW5hcmlvUmlnaHQobGFiZWxUb0NlbmFyaW8obGFiZWwpKVxuICB9XG5cbiAgY29uc3Qgb25DbGVhciA9IGFzeW5jICgpID0+IHtcbiAgICBhcHBseWluZ1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgIHNldFNlbGVjdGVkUG5yaDIoJycpXG4gICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSgnJylcbiAgICBzZXRDZW5hcmlvTGVmdCgnYXR1YWwnKVxuICAgIHNldENlbmFyaW9SaWdodCgnYXR1YWwnKVxuICAgIHNldENlbmFyaW9zU3RhdHMobnVsbClcbiAgICBzdGF0c0xvYWRLZXlSZWYuY3VycmVudCA9ICcnXG4gICAgcHJldkZpbHRlclJlZi5jdXJyZW50ID0geyBwbnJoMjogJycsIHN1YkJhY2lhOiAnJyB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRhc2tzOiBQcm9taXNlPHZvaWQ+W10gPSBbXVxuICAgICAgaWYgKGxlZnQuam12ICYmIGxlZnQubGF5ZXJTdGF0ZSkgdGFza3MucHVzaChyZXN0b3JlSW5pdGlhbFZpZXcobGVmdC5qbXYsIGxlZnQubGF5ZXJTdGF0ZSkpXG4gICAgICBpZiAocmlnaHQuam12ICYmIHJpZ2h0LmxheWVyU3RhdGUpIHRhc2tzLnB1c2gocmVzdG9yZUluaXRpYWxWaWV3KHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSkpXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXNrcylcbiAgICAgIGF3YWl0IHN5bmNSaWdodFRvTGVmdCgpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGFwcGx5aW5nUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN1YkJhY2lhT3B0aW9ucyA9IHNlbGVjdGVkUG5yaDJcbiAgICA/IChwbnJoMlRvU3ViQmFjaWFzUmVmLmN1cnJlbnQuZ2V0KHNlbGVjdGVkUG5yaDIpIHx8IFtdKVxuICAgIDogYWxsU3ViQmFjaWFzXG5cbiAgY29uc3QgZGlzcGxheUxlZ2VuZEdyb3VwcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChsZWdlbmRHcm91cHMubGVuZ3RoID4gMCkgcmV0dXJuIGxlZ2VuZEdyb3Vwc1xuICAgIGNvbnN0IHNvdXJjZSA9IGxlZnQubGF5ZXJTdGF0ZT8ubGF5ZXJzIHx8IHJpZ2h0LmxheWVyU3RhdGU/LmxheWVyc1xuICAgIGlmICghc291cmNlKSByZXR1cm4gW11cbiAgICByZXR1cm4gYnVpbGRMZWdlbmRHcm91cHMoc291cmNlKVxuICB9LCBbbGVnZW5kR3JvdXBzLCBsZWZ0LmxheWVyU3RhdGUsIHJpZ2h0LmxheWVyU3RhdGVdKVxuXG4gIGNvbnN0IGNlbmFyaW9NZXNzYWdlcyA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBjZW5hcmlvc0xvYWRpbmc6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvc0xvYWRpbmcsXG4gICAgY2VuYXJpb3NTZWxlY3RGaWx0ZXI6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvc1NlbGVjdEZpbHRlcixcbiAgICBjZW5hcmlvQmFjaWFMYWJlbDogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9CYWNpYUxhYmVsLFxuICAgIGNlbmFyaW9TdWJCYWNpYUxhYmVsOiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1N1YkJhY2lhTGFiZWwsXG4gICAgY2VuYXJpb0F0dWFsOiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb0F0dWFsLFxuICAgIGNlbmFyaW9Tc3AyNDU6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwMjQ1LFxuICAgIGNlbmFyaW9Tc3A1ODU6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwNTg1LFxuICAgIGNlbmFyaW9zQ2hhcnRUaXRsZTogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9zQ2hhcnRUaXRsZSxcbiAgICBjZW5hcmlvc05vRGF0YTogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9zTm9EYXRhXG4gIH0pLCBbXSlcblxuICBjb25zdCBmaWx0ZXJNZXNzYWdlcyA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBwbnJoMkxhYmVsOiBkZWZhdWx0TWVzc2FnZXMucG5yaDJMYWJlbCxcbiAgICBzdWJCYWNpYUxhYmVsOiBkZWZhdWx0TWVzc2FnZXMuc3ViQmFjaWFMYWJlbCxcbiAgICBtYXBMZWZ0TGFiZWw6IGRlZmF1bHRNZXNzYWdlcy5tYXBMZWZ0TGFiZWwsXG4gICAgbWFwUmlnaHRMYWJlbDogZGVmYXVsdE1lc3NhZ2VzLm1hcFJpZ2h0TGFiZWwsXG4gICAgbG9hZGluZzogZGVmYXVsdE1lc3NhZ2VzLmxvYWRpbmcsXG4gICAgc2VsZWN0UG5yaDI6IGRlZmF1bHRNZXNzYWdlcy5zZWxlY3RQbnJoMixcbiAgICBzZWxlY3RTdWJCYWNpYTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdFN1YkJhY2lhLFxuICAgIHNlbGVjdENlbmFyaW86IGRlZmF1bHRNZXNzYWdlcy5zZWxlY3RDZW5hcmlvLFxuICAgIHN5bmNWaWV3czogZGVmYXVsdE1lc3NhZ2VzLnN5bmNWaWV3cyxcbiAgICBjbGVhcjogZGVmYXVsdE1lc3NhZ2VzLmNsZWFyXG4gIH0pLCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNQdWJsaXNoZXIpIHJldHVyblxuICAgIHVwZGF0ZUNvbXBhcmVCcmlkZ2UobGlua0dyb3VwSWQsIHtcbiAgICAgIHNlbGVjdGVkUG5yaDIsXG4gICAgICBzZWxlY3RlZFN1YkJhY2lhLFxuICAgICAgY2VuYXJpb0xlZnQsXG4gICAgICBjZW5hcmlvUmlnaHQsXG4gICAgICBzdGF0czogY2VuYXJpb3NTdGF0cyxcbiAgICAgIHN0YXRzTG9hZGluZyxcbiAgICAgIGxlZ2VuZEdyb3VwczogZGlzcGxheUxlZ2VuZEdyb3VwcyxcbiAgICAgIGNsYXNzQ29sb3JzOiBPYmplY3QuZnJvbUVudHJpZXMoY2xhc3NDb2xvcnMpLFxuICAgICAgaGFzTWFwc1JlYWR5OiBoYXNCb3RoTWFwcyAmJiBsYXllcnNSZWFkeVxuICAgIH0pXG4gIH0sIFtcbiAgICBpc1B1Ymxpc2hlcixcbiAgICBsaW5rR3JvdXBJZCxcbiAgICBzZWxlY3RlZFBucmgyLFxuICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgY2VuYXJpb0xlZnQsXG4gICAgY2VuYXJpb1JpZ2h0LFxuICAgIGNlbmFyaW9zU3RhdHMsXG4gICAgc3RhdHNMb2FkaW5nLFxuICAgIGRpc3BsYXlMZWdlbmRHcm91cHMsXG4gICAgY2xhc3NDb2xvcnMsXG4gICAgaGFzQm90aE1hcHMsXG4gICAgbGF5ZXJzUmVhZHlcbiAgXSlcblxuICBjb25zdCBicmlkZ2VTdGF0ZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgIChjYikgPT4gc3Vic2NyaWJlQ29tcGFyZUJyaWRnZShsaW5rR3JvdXBJZCwgY2IpLFxuICAgICgpID0+IGdldENvbXBhcmVCcmlkZ2VTbmFwc2hvdChsaW5rR3JvdXBJZClcbiAgKVxuXG4gIGNvbnN0IHBhbmVsU3RhdHMgPSBpc1BhbmVsT25seSA/IGJyaWRnZVN0YXRlLnN0YXRzIDogY2VuYXJpb3NTdGF0c1xuICBjb25zdCBwYW5lbFN0YXRzTG9hZGluZyA9IGlzUGFuZWxPbmx5ID8gYnJpZGdlU3RhdGUuc3RhdHNMb2FkaW5nIDogc3RhdHNMb2FkaW5nXG4gIGNvbnN0IHBhbmVsQmFjaWEgPSBpc1BhbmVsT25seSA/IGJyaWRnZVN0YXRlLnNlbGVjdGVkUG5yaDIgOiBzZWxlY3RlZFBucmgyXG4gIGNvbnN0IHBhbmVsU3ViQmFjaWEgPSBpc1BhbmVsT25seSA/IGJyaWRnZVN0YXRlLnNlbGVjdGVkU3ViQmFjaWEgOiBzZWxlY3RlZFN1YkJhY2lhXG4gIGNvbnN0IHBhbmVsQ2VuYXJpb3M6IENlbmFyaW9JZFtdID0gaXNQYW5lbE9ubHlcbiAgICA/IFticmlkZ2VTdGF0ZS5jZW5hcmlvTGVmdCwgYnJpZGdlU3RhdGUuY2VuYXJpb1JpZ2h0XVxuICAgIDogW2NlbmFyaW9MZWZ0LCBjZW5hcmlvUmlnaHRdXG4gIGNvbnN0IHBhbmVsTGVnZW5kR3JvdXBzID0gaXNQYW5lbE9ubHkgPyBicmlkZ2VTdGF0ZS5sZWdlbmRHcm91cHMgOiBkaXNwbGF5TGVnZW5kR3JvdXBzXG4gIGNvbnN0IHBhbmVsQ2xhc3NDb2xvcnMgPSBpc1BhbmVsT25seVxuICAgID8gcmVjb3JkVG9DbGFzc0NvbG9ycyhicmlkZ2VTdGF0ZS5jbGFzc0NvbG9ycylcbiAgICA6IGNsYXNzQ29sb3JzXG5cbiAgY29uc3QgdFNoYXBlQ3NzID0gY3NzYFxuICAgICYud2lkZ2V0LWNvbXBhcmUtY2VuYXJpb3MudC1sYXlvdXQge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHBhbmVsU3VyZmFjZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQwZDAnLFxuICAgIGJveFNoYWRvdzogJzAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjE0KScsXG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nXG4gIH1cblxuICBjb25zdCByb290OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICB9XG4gIGNvbnN0IHN0ZW1XaWR0aFBjdCA9IE1hdGgubWluKDc1LCBNYXRoLm1heCgxOCwgY29uZmlnLnRTdGVtV2lkdGhQZXJjZW50KSlcbiAgY29uc3QgdG9wQmFyTWluSCA9IE1hdGgubWluKDI4MCwgTWF0aC5tYXgoNzIsIGNvbmZpZy50VG9wQmFySGVpZ2h0KSlcbiAgY29uc3Qgc3RlbU1pbkggPSBNYXRoLm1pbig2MDAsIE1hdGgubWF4KDEyMCwgY29uZmlnLnRTdGVtTWluSGVpZ2h0KSlcblxuICBjb25zdCB0b3BBcm06IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgLi4ucGFuZWxTdXJmYWNlLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleDogYDAgMCAke3RvcEJhck1pbkh9cHhgLFxuICAgIG1pbkhlaWdodDogdG9wQmFyTWluSCxcbiAgICBtYXhIZWlnaHQ6IHRvcEJhck1pbkgsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTJweCAxMnB4IDAgMCcsXG4gICAgcGFkZGluZzogJzEwcHggMTRweCAxMnB4JyxcbiAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgIzI1NkI0NScsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG4gIGNvbnN0IGJvdHRvbVJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gIH1cbiAgY29uc3Qgd2luZzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmbGV4OiAnMSAxIDAnLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbiAgY29uc3QgcGxhY2Vob2xkZXJCb3g6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgLi4ucGFuZWxTdXJmYWNlLFxuICAgIHBhZGRpbmc6ICcxNHB4IDE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgIGNvbG9yOiAnIzg4OCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGxpbmVIZWlnaHQ6IDEuNDVcbiAgfVxuXG4gIGNvbnN0IGZpbHRlckJhclByb3BzID0ge1xuICAgIHRpdGxlOiBkZWZhdWx0TWVzc2FnZXMuY29tcGFyZVRpdGxlLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgYWxsUG5yaDIsXG4gICAgYWxsU3ViQmFjaWFzLFxuICAgIHN1YkJhY2lhT3B0aW9ucyxcbiAgICBzZWxlY3RlZFBucmgyLFxuICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgY2VuYXJpb0xlZnQsXG4gICAgY2VuYXJpb1JpZ2h0LFxuICAgIHN5bmNWaWV3cyxcbiAgICBoYXNBY3RpdmVGaWx0ZXIsXG4gICAgY2VuYXJpb09wdGlvbnM6IENFTkFSSU9fT1BUSU9OUyxcbiAgICBjZW5hcmlvTGFiZWwsXG4gICAgbWVzc2FnZXM6IGZpbHRlck1lc3NhZ2VzLFxuICAgIG9uUG5yaDJTZWxlY3QsXG4gICAgb25TdWJCYWNpYVNlbGVjdCxcbiAgICBvbkNlbmFyaW9MZWZ0U2VsZWN0LFxuICAgIG9uQ2VuYXJpb1JpZ2h0U2VsZWN0LFxuICAgIG9uU3luY1ZpZXdzQ2hhbmdlOiBzZXRTeW5jVmlld3MsXG4gICAgb25DbGVhcjogKCkgPT4geyB2b2lkIG9uQ2xlYXIoKSB9XG4gIH1cblxuICBjb25zdCBjb250ZW50UGFuZWxQcm9wcyA9IHtcbiAgICBzdGF0czogcGFuZWxTdGF0cyxcbiAgICBzdGF0c0xvYWRpbmc6IHBhbmVsU3RhdHNMb2FkaW5nLFxuICAgIGJhY2lhOiBwYW5lbEJhY2lhLFxuICAgIHN1YkJhY2lhOiBwYW5lbFN1YkJhY2lhLFxuICAgIGNvbXBhcmVDZW5hcmlvczogcGFuZWxDZW5hcmlvcyxcbiAgICBjbGFzc0NvbG9yczogcGFuZWxDbGFzc0NvbG9ycyxcbiAgICBsZWdlbmRHcm91cHM6IHBhbmVsTGVnZW5kR3JvdXBzLFxuICAgIGNlbmFyaW9NZXNzYWdlcyxcbiAgICBsZWdlbmRUaXRsZTogZGVmYXVsdE1lc3NhZ2VzLmxlZ2VuZFRpdGxlLFxuICAgIGxlZ2VuZEVtcHR5OiBkZWZhdWx0TWVzc2FnZXMubGVnZW5kRW1wdHlcbiAgfVxuXG4gIGNvbnN0IGxheW91dENsYXNzID0gaXNDb21iaW5lZFxuICAgID8gJ2ppbXUtd2lkZ2V0IHdpZGdldC1jb21wYXJlLWNlbmFyaW9zIHQtbGF5b3V0J1xuICAgIDogJ2ppbXUtd2lkZ2V0IHdpZGdldC1jb21wYXJlLWNlbmFyaW9zJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2xheW91dENsYXNzfSBjc3M9e2lzQ29tYmluZWQgPyB0U2hhcGVDc3MgOiB1bmRlZmluZWR9IHN0eWxlPXtyb290fT5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgbGVmdE1hcElkICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e2xlZnRNYXBJZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHsgaWYgKGptdikgc2V0TGVmdCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgcmlnaHRNYXBJZCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtyaWdodE1hcElkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdikgPT4geyBpZiAoam12KSBzZXRSaWdodCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2lzUGFuZWxPbmx5ICYmIChcbiAgICAgICAgYnJpZGdlU3RhdGUuaGFzTWFwc1JlYWR5XG4gICAgICAgICAgPyA8Q29udGVudFBhbmVsIHsuLi5jb250ZW50UGFuZWxQcm9wc30gcm91bmRlZD0nYWxsJyAvPlxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cGxhY2Vob2xkZXJCb3h9PlxuICAgICAgICAgICAgICA8ZGl2PntkZWZhdWx0TWVzc2FnZXMucGFuZWxXYWl0aW5nRm9yRmlsdGVyc308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc4cHgnLCBmb250U2l6ZTogJzEycHgnIH19PlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMucGFuZWxMaW5rR3JvdXBIaW50fSA8c3Ryb25nPntsaW5rR3JvdXBJZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICl9XG5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgIWhhc0JvdGhNYXBzICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5wbGFjZWhvbGRlckJveCwgLi4uKGlzRmlsdGVyc09ubHkgPyB7fSA6IHRvcEFybSkgfX0+XG4gICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5zZWxlY3RNYXBzRmlyc3R9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgeyFpc1BhbmVsT25seSAmJiBoYXNCb3RoTWFwcyAmJiBpc0ZpbHRlcnNPbmx5ICYmIChcbiAgICAgICAgPEZpbHRlckJhclxuICAgICAgICAgIHsuLi5maWx0ZXJCYXJQcm9wc31cbiAgICAgICAgICByb3VuZGVkPSdhbGwnXG4gICAgICAgICAgYmFyU3R5bGU9e3tcbiAgICAgICAgICAgIGZsZXg6IGAwIDAgJHt0b3BCYXJNaW5IfXB4YCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogdG9wQmFyTWluSCxcbiAgICAgICAgICAgIG1heEhlaWdodDogdG9wQmFyTWluSFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7IWlzUGFuZWxPbmx5ICYmIGhhc0JvdGhNYXBzICYmIGlzQ29tYmluZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWx0ZXJCYXJcbiAgICAgICAgICAgIHsuLi5maWx0ZXJCYXJQcm9wc31cbiAgICAgICAgICAgIHJvdW5kZWQ9J3RvcCdcbiAgICAgICAgICAgIGJhclN0eWxlPXt7XG4gICAgICAgICAgICAgIGZsZXg6IGAwIDAgJHt0b3BCYXJNaW5IfXB4YCxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0b3BCYXJNaW5ILFxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRvcEJhck1pbkhcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtib3R0b21Sb3d9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17d2luZ30gYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8Q29udGVudFBhbmVsXG4gICAgICAgICAgICAgIHsuLi5jb250ZW50UGFuZWxQcm9wc31cbiAgICAgICAgICAgICAgcm91bmRlZD0nYm90dG9tJ1xuICAgICAgICAgICAgICBwYW5lbFN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleDogYDAgMCAke3N0ZW1XaWR0aFBjdH0lYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7c3RlbVdpZHRoUGN0fSVgLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogc3RlbU1pbkhcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt3aW5nfSBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9