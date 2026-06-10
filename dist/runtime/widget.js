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
    const shell = Object.assign({ background: '#fff', border: '1px solid #d0d0d0', boxShadow: '0 4px 16px rgba(0,0,0,0.14)', borderRadius: 0, borderTop: rounded === 'all' ? '1px solid #d0d0d0' : 'none', padding: '12px 14px 14px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch', overflow: 'hidden', boxSizing: 'border-box', width: '100%', height: '100%', minHeight: 0 }, panelStyle);
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
        borderRadius: 0,
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
    const placeholderBox = Object.assign(Object.assign({}, panelSurface), { padding: '14px 16px', borderRadius: 0, color: '#888', fontSize: '13px', textAlign: 'center', lineHeight: 1.45 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNLEtBQUssR0FBdUI7SUFDaEMsYUFBYSxFQUFFLEVBQUU7SUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixXQUFXLEVBQUUsT0FBTztJQUNwQixZQUFZLEVBQUUsT0FBTztJQUNyQixLQUFLLEVBQUUsSUFBSTtJQUNYLFlBQVksRUFBRSxLQUFLO0lBQ25CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLEtBQUs7Q0FDcEI7QUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBOEI7QUFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTJCO0FBRXBELE1BQU0sV0FBVyxHQUFHLENBQUMsV0FBbUIsRUFBVSxFQUFFO0lBQ2xELE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFNBQVM7SUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLG9CQUFPLEtBQUssRUFBRztJQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BELE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFTSxNQUFNLHdCQUF3QixHQUFHLENBQUMsV0FBbUIsRUFBc0IsRUFBRTtJQUNsRixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ25DLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLO0FBQ25DLENBQUM7QUFF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USxFQUFFLFVBQVUsQ0FBQztJQUUzQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFLENBQUM7UUFDOUIsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFFLENBQUM7WUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUNsRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzNCLENBQUMsQ0FBQyxLQUFLO1lBQ1QsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxLQUFLLElBQUksR0FBRztnQkFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7U0FBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFLENBQUM7UUFDckMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksS0FBSyxJQUFJLEdBQUc7Z0JBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO1NBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBRSxDQUEwQixDQUFDLE1BQU0sQ0FBQztRQUMzRCxJQUFJLEdBQUc7WUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQztBQUNWLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBZ0MsRUFBdUIsRUFBRTtJQUNsRixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0I7SUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDaEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNO0FBQ2YsQ0FBQztBQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUEyQixFQUFnQixFQUFFO0lBQ3JFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsS0FBSztRQUNMLEtBQUs7UUFDTCxRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQztLQUMvQixDQUFDLENBQUM7U0FDRixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FBRSxNQUFpQjtJQUNuRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0I7SUFDeEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDakYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU07UUFDbEIsTUFBTSxNQUFNLEdBQUcscUJBQXFCLENBQUUsS0FBMkMsQ0FBQyxRQUFRLENBQUM7UUFDM0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQ2xELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTTtBQUNmLENBQUM7QUFFTSxTQUFTLGlCQUFpQixDQUFFLE1BQWlCOztJQUNsRCxNQUFNLE1BQU0sR0FBa0IsRUFBRTtJQUVoQyxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQ2hDLHFCQUFxQixDQUFDLE1BQUMsTUFBTSxDQUFDLE1BQTRDLDBDQUFFLFFBQVEsQ0FBQyxFQUNyRixxQkFBcUIsQ0FBQyxNQUFDLE1BQU0sQ0FBQyxnQkFBc0QsMENBQUUsUUFBUSxDQUFDLEVBQy9GLHFCQUFxQixDQUFDLE1BQUMsTUFBTSxDQUFDLGdCQUFzRCwwQ0FBRSxRQUFRLENBQUMsQ0FDaEc7SUFFRCxJQUFJLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sU0FBUyxHQUFHLHFCQUFxQixDQUNwQyxNQUFNLENBQUMsU0FBK0MsQ0FBQyxRQUFRLENBQ2pFO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7YUFDbkMsQ0FBQztRQUNKLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLENBQUM7d0JBQ04sS0FBSyxFQUFFLHFCQUFxQjt3QkFDNUIsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsUUFBUSxFQUFFLENBQUM7cUJBQ1osQ0FBQzthQUNILENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sTUFBTTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSm1EO0FBb0I3QyxNQUFNLGtCQUFrQixHQUFHO0lBQ2hDLFlBQVksRUFBRSxnR0FBZ0c7SUFDOUcsU0FBUyxFQUFFLHlHQUF5RztJQUNwSCxtQkFBbUIsRUFBRSxpR0FBaUc7SUFDdEgsbUJBQW1CLEVBQUUsaUdBQWlHO0lBQ3RILFNBQVMsRUFBRSwrREFBK0Q7SUFDMUUsS0FBSyxFQUFFLGtJQUFrSTtDQUMxSTtBQUVNLFNBQVMsV0FBVyxDQUFFLEdBQWdDOztJQUMzRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxZQUFZLEtBQUksa0JBQWtCLENBQUMsWUFBWTtRQUNsRSxTQUFTLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFNBQVMsS0FBSSxrQkFBa0IsQ0FBQyxTQUFTO1FBQ3pELG1CQUFtQixFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxtQkFBbUIsS0FBSSxrQkFBa0IsQ0FBQyxtQkFBbUI7UUFDdkYsbUJBQW1CLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLG1CQUFtQixLQUFJLGtCQUFrQixDQUFDLG1CQUFtQjtRQUN2RixjQUFjLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLGNBQWMsS0FBSSxZQUFZO1FBQ25ELGNBQWMsRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsY0FBYyxLQUFJLFlBQVk7UUFDbkQsVUFBVSxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxVQUFVLEtBQUksT0FBTztRQUN0QyxhQUFhLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLGFBQWEsS0FBSSxXQUFXO1FBQ2hELFdBQVcsRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsV0FBVyxLQUFJLFFBQVE7UUFDekMsU0FBUyxFQUFFLElBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLEtBQUksV0FBVztRQUN4QyxTQUFTLEVBQUUsSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFNBQVMsS0FBSSxrQkFBa0IsQ0FBQyxTQUFTO1FBQ3pELEtBQUssRUFBRSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsS0FBSyxLQUFJLGtCQUFrQixDQUFDLEtBQUs7UUFDN0MsZUFBZSxFQUFFLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxlQUFlO1FBQ3JDLGdCQUFnQixFQUFFLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxnQkFBZ0I7UUFDdkMsVUFBVSxFQUFFLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxVQUFVLG1DQUFJLFVBQVU7UUFDekMsV0FBVyxFQUFFLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxXQUFXLG1DQUFJLFNBQVM7UUFDMUMsYUFBYSxFQUFFLFNBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxhQUFhLG1DQUFJLEdBQUc7UUFDeEMsaUJBQWlCLEVBQUUsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLGlCQUFpQixtQ0FBSSxFQUFFO1FBQy9DLGNBQWMsRUFBRSxTQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsY0FBYyxtQ0FBSSxHQUFHO0tBQzNDO0FBQ0gsQ0FBQztBQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtBQUVyRSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFVLEVBQUU7SUFDcEYsTUFBTSxLQUFLLEdBQWEsRUFBRTtJQUMxQixJQUFJLEtBQUs7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRSxJQUFJLFFBQVE7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUM5RSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLFdBQVcsR0FBRyxHQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLFNBQVMsRUFBRSxJQUFJO0lBQ2YsTUFBTSxFQUFFLElBQUk7SUFDWixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGdCQUFnQixFQUFFLElBQUk7Q0FDdkIsQ0FBQztBQUVLLFNBQWUsYUFBYSxDQUNqQyxXQUF3QixFQUN4QixNQUFjOzs7UUFFZCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLE1BQU0sbUVBQXNCLENBQUM7WUFDbkUsMEJBQTBCO1lBQzFCLCtCQUErQjtTQUNoQyxDQUFDO1FBRUYsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsZUFBZSxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7aUJBQzdDLENBQUM7WUFDSixDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQztZQUNILE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZGLENBQUM7UUFDSixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyx1QkFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLDBDQUFFLEtBQUssRUFBRSxtQ0FBSSxJQUFJO1FBRXBFLE1BQU0sT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUMzQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUM1QztRQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBYyxFQUE4QixFQUFFO1lBQy9ELElBQUksS0FBSyxHQUErQixJQUFJO1lBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ25DLElBQUksS0FBSztvQkFBRSxPQUFNO2dCQUNqQixJQUFJLE1BQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTO3dCQUMxQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztvQkFDYixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxNQUFNO3dCQUFFLEtBQUssR0FBRyxLQUE0QjtnQkFDMUUsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUNsQixRQUFvQyxFQUNwQyxHQUFXLEVBQ1gsS0FBYSxFQUNiLE9BQU8sR0FBRyxJQUFJLEVBQ2tDLEVBQUU7WUFDbEQsSUFBSSxRQUFRO2dCQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2QsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQy9CLENBQUM7UUFFRCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7UUFDOUYsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUM7UUFDbkcsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLCtCQUErQixFQUFFLEtBQUssQ0FBQztRQUMzSCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsaUNBQWlDLEVBQUUsS0FBSyxDQUFDO1FBRTdILFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFFN0IsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3RCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1NBQ3ZCLENBQUM7UUFFRixNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUU3QyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixNQUFNLFdBQVcsR0FBb0UsRUFBRTtRQUN2RixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBVyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNyQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNuQyxJQUFJLE1BQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUssU0FBUztnQkFBRSxPQUFNO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHO2dCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDN0UsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUFFLE9BQU07WUFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0QsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUs7Z0JBQ3ZCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2dCQUNsQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsS0FBSzthQUNuQztZQUNELEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUs7Z0JBQzFCLE1BQU0sRUFBRSxTQUFTLENBQUMsS0FBSztnQkFDdkIsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLEtBQUs7Z0JBQ2xDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2FBQ25DO1lBQ0QsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBUyxpQkFBaUIsQ0FBRSxXQUErQixFQUFFLEtBQTJCOztJQUM3RixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU07SUFDbEMsTUFBTSxHQUFHLEdBQUcsaUJBQVcsQ0FBQyxJQUFJLDBDQUFFLEdBQUc7SUFDakMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFNO0lBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSztJQUMvQixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVM7UUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNO1FBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVELElBQUksTUFBTSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0I7UUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxRixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCO1FBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7QUFDNUYsQ0FBQztBQUVNLFNBQWUsa0JBQWtCO3lEQUN0QyxXQUF3QixFQUN4QixLQUFvQixFQUNwQixNQUFjLEVBQ2QsT0FBa0IsRUFDbEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLElBQUksR0FBRyxJQUFJO1FBRVgsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTTtRQUM5RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU07UUFFakMsTUFBTSxPQUFPLEdBQUcsT0FBTyxLQUFLLE9BQU87UUFDbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3hCLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxRQUFRO1FBQ3JFLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxRQUFRO1FBRXJFLE1BQU0sYUFBYSxHQUFHLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDaEYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQztnQkFBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQUMsQ0FBQztZQUFDLFdBQU0sQ0FBQyxFQUFDO1FBQzFFLENBQUMsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUNqRCxNQUFNLFVBQVUsR0FBRyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFL0MsTUFBTSxDQUFDLG9CQUFvQixHQUFHLFVBQVU7UUFDeEMsSUFBSSxnQkFBZ0I7WUFBRSxnQkFBZ0IsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVO1FBQ3hFLElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsb0JBQW9CLEdBQUcsVUFBVTtRQUN4RSxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBVTtRQUUzQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFFakIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNwRSxNQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksS0FBSztZQUNyQyxNQUFNLFlBQVksR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDdEUsSUFBSSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJO2dCQUM3QixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ2pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDO29CQUM5QyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUMvRixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQ3RDLFdBQXdCLEVBQ3hCLEtBQW9COztRQUVwQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQzlFLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUk7WUFDckIsTUFBTSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7UUFDbEMsQ0FBQztRQUNELElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsS0FBSztZQUNoQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO1FBQzVDLENBQUM7UUFDRCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDckIsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLEtBQUs7WUFDaEMsZ0JBQWdCLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtRQUM1QyxDQUFDO1FBQ0QsSUFBSSxTQUFTO1lBQUUsU0FBUyxDQUFDLG9CQUFvQixHQUFHLEVBQUU7UUFDbEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQztnQkFBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGVBQWU7WUFBQyxDQUFDO1lBQUMsV0FBTSxDQUFDLEVBQUM7UUFDbEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDekUsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFTSxTQUFlLGdCQUFnQixDQUNwQyxTQUE4QixFQUM5QixNQUFjOzs7UUFPZCxNQUFNLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDM0MsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEQsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDekQsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxFQUFrQjtRQUNqRCxNQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFvQjtRQUNwRCxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVTtRQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVTtRQUVwQyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxVQUFJLENBQUMsVUFBVSwwQ0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxHQUFHLFVBQUksQ0FBQyxVQUFVLDBDQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxJQUFJO2dCQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksSUFBSTtnQkFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDakIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUMvQixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDdkMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQzNDLGVBQWU7WUFDZixnQkFBZ0I7U0FDakI7SUFDSCxDQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pVdUM7QUFDSztBQTJCN0MsTUFBTSxVQUFVLEdBQUcsR0FBaUIsRUFBRSxDQUFDLENBQUM7SUFDdEMsT0FBTyxFQUFFLEVBQUU7SUFDWCxVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBRSxDQUFDO0lBQ1IsUUFBUSxFQUFFLENBQUM7Q0FDWixDQUFDO0FBRUssTUFBTSxvQkFBb0IsR0FBRyxDQUNsQyxRQUEwQixFQUMxQixTQUFpQixFQUNILEVBQUU7SUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCO0lBQ3JDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1FBQ25CLE1BQU0sR0FBRyxHQUFHLE9BQUMsQ0FBQyxVQUFVLDBDQUFHLFNBQVMsQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSwyREFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2pFLENBQUM7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFFBQTBCLEVBQzFCLFdBQW1CLEVBQ25CLGFBQXFCLEVBQ1AsRUFBRTtJQUNoQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBK0M7SUFDcEUsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNiLElBQUksUUFBUSxHQUFHLENBQUM7SUFFaEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7UUFDbkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGFBQUMsQ0FBQyxVQUFVLDBDQUFHLGFBQWEsQ0FBQyxtQ0FBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHO1FBQ3JFLE1BQU0sU0FBUyxHQUFHLE9BQUMsQ0FBQyxVQUFVLDBDQUFHLFdBQVcsQ0FBQztRQUM3QyxNQUFNLE1BQU0sR0FBRyxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUN2RixNQUFNLEdBQUcsR0FBRywyREFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQztRQUNWLElBQUksR0FBRyxJQUFJLENBQUM7WUFBRSxRQUFRLElBQUksQ0FBQztRQUMzQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUM7WUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUM7UUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNyRixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRS9ELE9BQU87UUFDTCxPQUFPLEVBQUUsb0JBQW9CLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztRQUNwRCxVQUFVLEVBQUUsUUFBUTtRQUNwQixLQUFLO1FBQ0wsUUFBUTtLQUNUO0FBQ0gsQ0FBQztBQUVNLFNBQWUsaUJBQWlCLENBQ3JDLE1BQWlCLEVBQ2pCLE1BQWMsRUFDZCxLQUFhLEVBQ2IsUUFBZ0I7O1FBRWhCLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNO1FBQzdELE1BQU0sS0FBSyxHQUFHLHNEQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDakQsTUFBTSxVQUFVLEdBQUcsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ2xELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1FBRXJDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNuRCxNQUFNO2dCQUNKLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUNyQixLQUFLLEVBQUUsVUFBVTtvQkFDakIsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUM7b0JBQ3pDLGNBQWMsRUFBRSxLQUFLO29CQUNyQixHQUFHLEVBQUUsS0FBSztpQkFDWCxDQUFDO2dCQUNGLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN6QixnQkFBZ0I7Z0JBQ2QsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztvQkFDL0IsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO29CQUM1QyxjQUFjLEVBQUUsS0FBSztvQkFDckIsR0FBRyxFQUFFLEtBQUs7aUJBQ1gsQ0FBQztnQkFDRixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDekIsZ0JBQWdCO2dCQUNkLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7b0JBQy9CLEtBQUssRUFBRSxVQUFVO29CQUNqQixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQztvQkFDNUMsY0FBYyxFQUFFLEtBQUs7b0JBQ3JCLEdBQUcsRUFBRSxLQUFLO2lCQUNYLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzFCLENBQUM7UUFFRixPQUFPO1lBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDbkcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDbkcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7U0FDcEc7SUFDSCxDQUFDO0NBQUE7QUFRTSxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBYSxFQUFFLFFBQXlCLEVBQVUsRUFBRTtJQUNuRixJQUFJLEVBQUUsS0FBSyxRQUFRO1FBQUUsT0FBTyxRQUFRLENBQUMsYUFBYTtJQUNsRCxJQUFJLEVBQUUsS0FBSyxRQUFRO1FBQUUsT0FBTyxRQUFRLENBQUMsYUFBYTtJQUNsRCxPQUFPLFFBQVEsQ0FBQyxZQUFZO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUQsaUVBQWU7SUFDYixZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLGVBQWUsRUFBRSxzREFBc0Q7SUFDdkUsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QyxjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsYUFBYSxFQUFFLFdBQVc7SUFDMUIsV0FBVyxFQUFFLFdBQVc7SUFDeEIsY0FBYyxFQUFFLHlCQUF5QjtJQUN6QyxZQUFZLEVBQUUsZUFBZTtJQUM3QixhQUFhLEVBQUUsY0FBYztJQUM3QixZQUFZLEVBQUUsT0FBTztJQUNyQixhQUFhLEVBQUUsVUFBVTtJQUN6QixhQUFhLEVBQUUsWUFBWTtJQUMzQixhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLEtBQUssRUFBRSxRQUFRO0lBQ2YsWUFBWSxFQUFFLHVDQUF1QztJQUNyRCxTQUFTLEVBQUUscUVBQXFFO0lBQ2hGLFNBQVMsRUFBRSxnRkFBZ0Y7SUFDM0YsZUFBZSxFQUFFLCtEQUErRDtJQUNoRixZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLFNBQVMsRUFBRSxtQkFBbUI7SUFDOUIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsV0FBVyxFQUFFLDREQUE0RDtJQUN6RSxpQkFBaUIsRUFBRSxPQUFPO0lBQzFCLG9CQUFvQixFQUFFLFdBQVc7SUFDakMsZUFBZSxFQUFFLGtDQUFrQztJQUNuRCxvQkFBb0IsRUFBRSx1REFBdUQ7SUFDN0Usa0JBQWtCLEVBQUUsb0NBQW9DO0lBQ3hELGNBQWMsRUFBRSxzQ0FBc0M7SUFDdEQsc0JBQXNCLEVBQUUsaURBQWlEO0lBQ3pFLGtCQUFrQixFQUFFLDRCQUE0QjtDQUNqRDs7Ozs7Ozs7Ozs7O0FDakNEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDaUQ7QUFDSTtBQUVoQjtBQUNGO0FBQ007QUFNeEI7QUFVWjtBQUNtRTtBQUNiO0FBRTFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsNENBQUs7QUFFbkUsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFhLEVBQVUsRUFBRTtJQUM3QyxJQUFJLEVBQUUsS0FBSyxRQUFRO1FBQUUsT0FBTyw2REFBZSxDQUFDLGFBQWE7SUFDekQsSUFBSSxFQUFFLEtBQUssUUFBUTtRQUFFLE9BQU8sNkRBQWUsQ0FBQyxhQUFhO0lBQ3pELE9BQU8sNkRBQWUsQ0FBQyxZQUFZO0FBQ3JDLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQWEsRUFBYSxFQUFFO0lBQ2xELElBQUksS0FBSyxLQUFLLDZEQUFlLENBQUMsYUFBYTtRQUFFLE9BQU8sUUFBUTtJQUM1RCxJQUFJLEtBQUssS0FBSyw2REFBZSxDQUFDLGFBQWE7UUFBRSxPQUFPLFFBQVE7SUFDNUQsT0FBTyxPQUFPO0FBQ2hCLENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBRztJQUN0Qiw2REFBZSxDQUFDLFlBQVk7SUFDNUIsNkRBQWUsQ0FBQyxhQUFhO0lBQzdCLDZEQUFlLENBQUMsYUFBYTtDQUM5QjtBQU9jLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLE1BQU0sR0FBRyx1REFBVyxDQUFDLEtBQUssQ0FBQyxNQUF1QyxDQUFDO0lBQ3pFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVO0lBQ3BDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXO0lBQ3RDLE1BQU0sV0FBVyxHQUFHLFVBQVUsS0FBSyxPQUFPO0lBQzFDLE1BQU0sYUFBYSxHQUFHLFVBQVUsS0FBSyxTQUFTO0lBQzlDLE1BQU0sVUFBVSxHQUFHLFVBQVUsS0FBSyxVQUFVO0lBQzVDLE1BQU0sV0FBVyxHQUFHLGFBQWEsSUFBSSxVQUFVO0lBRS9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxlQUFlLEtBQUksV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEtBQUksRUFBRTtJQUM1RSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEtBQUksV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEtBQUksRUFBRTtJQUU5RSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFNUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQVcsRUFBRSxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFXLEVBQUUsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUN0RCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFZLE9BQU8sQ0FBQztJQUNsRSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBWSxPQUFPLENBQUM7SUFDcEUsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUN2RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUEwQixJQUFJLENBQUM7SUFDakYsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNoRCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBZ0IsRUFBRSxDQUFDO0lBQ25FLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRTlFLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pFLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDaEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDekQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUVsQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQztJQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxJQUFJLGdCQUFnQixDQUFDO0lBQzVELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FDN0IsYUFBYSxJQUFJLGdCQUFnQixJQUFJLFdBQVcsS0FBSyxPQUFPLElBQUksWUFBWSxLQUFLLE9BQU8sQ0FDekY7SUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVksRUFBVSxFQUFFOztRQUMzQyxNQUFNLENBQUMsR0FBRyxHQUE0RjtRQUN0RyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxPQUFPLEtBQUksRUFBRSxJQUFJLGNBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxPQUFPLDBDQUFFLEtBQUssMENBQUUsT0FBTyxLQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNuRixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDcEYsT0FBTyw2REFBZSxDQUFDLFNBQVM7UUFDbEMsQ0FBQztRQUNELElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFFBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxPQUFPLDBDQUFFLFVBQVUsTUFBSyxHQUFHLElBQUksUUFBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE9BQU8sMENBQUUsVUFBVSxNQUFLLEdBQUcsRUFBRSxDQUFDO1lBQzlILE9BQU8sNkRBQWUsQ0FBQyxTQUFTO1FBQ2xDLENBQUM7UUFDRCxPQUFPLDZEQUFlLENBQUMsWUFBWTtJQUNyQyxDQUFDO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsQ0FBTyxVQUFnQyxFQUFFLEVBQUU7UUFDaEYsSUFBSSxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxNQUFNLENBQUMsU0FBUztZQUFFLE9BQU07UUFDekMsTUFBTSxJQUFJLEdBQUcsTUFBTSw0REFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFDeEUsa0JBQWtCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQ2pELG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1FBQ25ELFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2xDLGVBQWUsQ0FBQywrREFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsY0FBYyxDQUFDLGdFQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVaLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFTLEVBQUU7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztZQUFFLE9BQU07UUFDbkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ3pCLElBQUksQ0FBQztZQUNILE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUN4QixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7WUFDekIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNaLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTTtnQkFDakIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUTthQUN0QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxXQUFNLENBQUMsRUFBQztRQUNWLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSztJQUM1QixDQUFDLEdBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QixNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsZ0VBTWxDLEVBQUUscUdBTEYsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLFdBQXNCLEVBQ3RCLFlBQXVCLEVBQ3ZCLElBQUksR0FBRyxLQUFLO1FBRVosSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUFFLE9BQU07UUFDakQsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQzFCLElBQUksQ0FBQztZQUNILE1BQU0sS0FBSyxHQUFvQixFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsOERBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RyxDQUFDO1lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyw4REFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNHLENBQUM7WUFDRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxlQUFlLEVBQUU7WUFDekIsQ0FBQztRQUNILENBQUM7Z0JBQVMsQ0FBQztZQUNULFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUM3QixDQUFDO0lBQ0gsQ0FBQyxHQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFckYsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQzNCLEdBQWdCLEVBQ2hCLE1BQXFELEVBQ3JELG1CQUE0QixFQUM1QixFQUFFO1FBQ0YsSUFBSSxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNoQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ1osTUFBTSxVQUFVLEdBQUcsTUFBTSx5REFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQzNCLElBQUksbUJBQW1CLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7WUFDdEMsQ0FBQztZQUNELE1BQU0sOERBQWtCLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO1FBQzNFLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7WUFDM0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO2dCQUFTLENBQUM7WUFDVCxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDLEdBQUUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUVoQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2Isb0JBQW9CLENBQUMsT0FBTyxHQUFHLEtBQUs7SUFDdEMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTNCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU07UUFDeEMsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxFQUFFLEdBQUcsNkRBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQztRQUM3RCx1REFBdUQ7SUFDekQsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVO1lBQUUsT0FBTTtRQUMxQyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDekMsT0FBTyxHQUFHLEVBQUUsR0FBRyw2REFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDO1FBQy9ELHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFZixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBSSxDQUFDLFVBQVUsMENBQUUsS0FBSyxNQUFJLFdBQUssQ0FBQyxVQUFVLDBDQUFFLEtBQUssRUFBQztJQUU5RSxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztZQUFFLE9BQU07UUFFbkQsTUFBTSxHQUFHLEdBQUcsR0FBUyxFQUFFOztZQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSTtnQkFDMUIsSUFBSSxDQUFDO29CQUNILE1BQU0sZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7b0JBQ3RELE1BQU0sRUFBRSxHQUFHLFVBQUksQ0FBQyxVQUFVLDBDQUFFLGdCQUFnQjtvQkFDNUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzt3QkFDUCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7d0JBQ2hELE1BQU0sZUFBZSxFQUFFO29CQUN6QixDQUFDO2dCQUNILENBQUM7d0JBQVMsQ0FBQztvQkFDVCxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUs7Z0JBQzdCLENBQUM7Z0JBQ0Qsb0JBQW9CLENBQUMsT0FBTyxHQUFHLElBQUk7Z0JBQ25DLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU07WUFDUixDQUFDO1lBRUQsTUFBTSxhQUFhLEdBQ2pCLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLGFBQWE7Z0JBQzdDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLGdCQUFnQjtZQUNyRCxNQUFNLFVBQVUsR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxnQkFBZ0IsQ0FBQztZQUM5RSxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7WUFFNUUsTUFBTSxlQUFlLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDO1FBQy9GLENBQUM7UUFDRCxLQUFLLEdBQUcsRUFBRTtJQUNaLENBQUMsRUFBRTtRQUNELFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUc7UUFDUixLQUFLLENBQUMsR0FBRztRQUNULGVBQWU7UUFDZixlQUFlO0tBQ2hCLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNiLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxXQUFJLENBQUMsVUFBVSwwQ0FBRSxNQUFNLENBQUMsTUFBTSxHQUFFLENBQUM7WUFDbEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLEdBQUcsRUFBRTtZQUM1QixPQUFNO1FBQ1IsQ0FBQztRQUNELE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLGdCQUFnQixFQUFFO1FBQ2xELElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxHQUFHO1lBQUUsT0FBTTtRQUUzQyxJQUFJLFNBQVMsR0FBRyxLQUFLO1FBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDckIsaUVBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzthQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWixJQUFJLFNBQVM7Z0JBQUUsT0FBTTtZQUNyQixlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUc7WUFDN0IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTO2dCQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUN4QyxDQUFDLENBQUM7YUFDRCxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVM7Z0JBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFDSixPQUFPLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxJQUFJLEVBQUMsQ0FBQztJQUNuQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVyRSxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztZQUFFLE9BQU07UUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJO1FBQzlCLElBQUksYUFBaUM7UUFFckMsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksV0FBVyxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTztnQkFBRSxPQUFNO1lBQ3JELElBQUksYUFBYTtnQkFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JDLEtBQUssZUFBZSxFQUFFO1lBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxDQUFDO1FBRUQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDO1FBQ2pELE9BQU8sR0FBRyxFQUFFO1lBQ1YsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksYUFBYTtnQkFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUVyRCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQzlCLE1BQU0sSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDekMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxJQUFJO2dCQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUM1QyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDN0MsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFO1FBQ3pCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUMxQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDdkIsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUN4QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDdEIsZUFBZSxDQUFDLE9BQU8sR0FBRyxFQUFFO1FBQzVCLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDbkQsSUFBSSxDQUFDO1lBQ0gsTUFBTSxLQUFLLEdBQW9CLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsOERBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUYsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVO2dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsOERBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUYsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLGVBQWUsRUFBRTtRQUN6QixDQUFDO2dCQUFTLENBQUM7WUFDVCxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxhQUFhO1FBQ25DLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hELENBQUMsQ0FBQyxZQUFZO0lBRWhCLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTs7UUFDdkMsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLFlBQVk7UUFDaEQsTUFBTSxNQUFNLEdBQUcsV0FBSSxDQUFDLFVBQVUsMENBQUUsTUFBTSxNQUFJLFdBQUssQ0FBQyxVQUFVLDBDQUFFLE1BQU07UUFDbEUsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLEVBQUU7UUFDdEIsT0FBTywrREFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXJELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGVBQWUsRUFBRSw2REFBZSxDQUFDLGVBQWU7UUFDaEQsb0JBQW9CLEVBQUUsNkRBQWUsQ0FBQyxvQkFBb0I7UUFDMUQsaUJBQWlCLEVBQUUsNkRBQWUsQ0FBQyxpQkFBaUI7UUFDcEQsb0JBQW9CLEVBQUUsNkRBQWUsQ0FBQyxvQkFBb0I7UUFDMUQsWUFBWSxFQUFFLDZEQUFlLENBQUMsWUFBWTtRQUMxQyxhQUFhLEVBQUUsNkRBQWUsQ0FBQyxhQUFhO1FBQzVDLGFBQWEsRUFBRSw2REFBZSxDQUFDLGFBQWE7UUFDNUMsa0JBQWtCLEVBQUUsNkRBQWUsQ0FBQyxrQkFBa0I7UUFDdEQsY0FBYyxFQUFFLDZEQUFlLENBQUMsY0FBYztLQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRVAsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEMsVUFBVSxFQUFFLDZEQUFlLENBQUMsVUFBVTtRQUN0QyxhQUFhLEVBQUUsNkRBQWUsQ0FBQyxhQUFhO1FBQzVDLFlBQVksRUFBRSw2REFBZSxDQUFDLFlBQVk7UUFDMUMsYUFBYSxFQUFFLDZEQUFlLENBQUMsYUFBYTtRQUM1QyxPQUFPLEVBQUUsNkRBQWUsQ0FBQyxPQUFPO1FBQ2hDLFdBQVcsRUFBRSw2REFBZSxDQUFDLFdBQVc7UUFDeEMsY0FBYyxFQUFFLDZEQUFlLENBQUMsY0FBYztRQUM5QyxhQUFhLEVBQUUsNkRBQWUsQ0FBQyxhQUFhO1FBQzVDLFNBQVMsRUFBRSw2REFBZSxDQUFDLFNBQVM7UUFDcEMsS0FBSyxFQUFFLDZEQUFlLENBQUMsS0FBSztLQUM3QixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRVAsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTTtRQUN4QiwyRUFBbUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsWUFBWTtZQUNaLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFlBQVk7WUFDWixZQUFZLEVBQUUsbUJBQW1CO1lBQ2pDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUM1QyxZQUFZLEVBQUUsV0FBVyxJQUFJLFdBQVc7U0FDekMsQ0FBQztJQUNKLENBQUMsRUFBRTtRQUNELFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztLQUNaLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyw0Q0FBSyxDQUFDLG9CQUFvQixDQUM1QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsOEVBQXNCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUMvQyxHQUFHLEVBQUUsQ0FBQyxnRkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FDNUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWE7SUFDbEUsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVk7SUFDL0UsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhO0lBQzFFLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7SUFDbkYsTUFBTSxhQUFhLEdBQWdCLFdBQVc7UUFDNUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtJQUN0RixNQUFNLGdCQUFnQixHQUFHLFdBQVc7UUFDbEMsQ0FBQyxDQUFDLDJFQUFtQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDOUMsQ0FBQyxDQUFDLFdBQVc7SUFFZixNQUFNLFNBQVMsR0FBRyw4Q0FBRzs7Ozs7Ozs7O0dBU3BCO0lBRUQsTUFBTSxZQUFZLEdBQXdCO1FBQ3hDLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxhQUFhLEVBQUUsTUFBTTtLQUN0QjtJQUVELE1BQU0sSUFBSSxHQUF3QjtRQUNoQyxVQUFVLEVBQUUsU0FBUztRQUNyQixPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsYUFBYTtLQUMxQjtJQUNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEUsTUFBTSxNQUFNLG1DQUNQLFlBQVksS0FDZixLQUFLLEVBQUUsTUFBTSxFQUNiLElBQUksRUFBRSxPQUFPLFVBQVUsSUFBSSxFQUMzQixTQUFTLEVBQUUsVUFBVSxFQUNyQixTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQUUsZUFBZSxFQUM3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQ3pCLFlBQVksRUFBRSxtQkFBbUIsRUFDakMsUUFBUSxFQUFFLFNBQVMsRUFDbkIsU0FBUyxFQUFFLFlBQVksR0FDeEI7SUFDRCxNQUFNLFNBQVMsR0FBd0I7UUFDckMsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxhQUFhO0tBQzFCO0lBQ0QsTUFBTSxJQUFJLEdBQXdCO1FBQ2hDLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLENBQUM7UUFDWCxVQUFVLEVBQUUsYUFBYTtRQUN6QixhQUFhLEVBQUUsTUFBTTtLQUN0QjtJQUNELE1BQU0sY0FBYyxtQ0FDZixZQUFZLEtBQ2YsT0FBTyxFQUFFLFdBQVcsRUFDcEIsWUFBWSxFQUFFLENBQUMsRUFDZixLQUFLLEVBQUUsTUFBTSxFQUNiLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLFNBQVMsRUFBRSxRQUFRLEVBQ25CLFVBQVUsRUFBRSxJQUFJLEdBQ2pCO0lBRUQsTUFBTSxjQUFjLEdBQUc7UUFDckIsS0FBSyxFQUFFLDZEQUFlLENBQUMsWUFBWTtRQUNuQyxLQUFLO1FBQ0wsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7UUFDWixTQUFTO1FBQ1QsZUFBZTtRQUNmLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVk7UUFDWixRQUFRLEVBQUUsY0FBYztRQUN4QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsRUFBQyxDQUFDO0tBQ2xDO0lBRUQsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUUsaUJBQWlCO1FBQy9CLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsWUFBWSxFQUFFLGlCQUFpQjtRQUMvQixlQUFlO1FBQ2YsV0FBVyxFQUFFLDZEQUFlLENBQUMsV0FBVztRQUN4QyxXQUFXLEVBQUUsNkRBQWUsQ0FBQyxXQUFXO0tBQ3pDO0lBRUQsTUFBTSxXQUFXLEdBQUcsVUFBVTtRQUM1QixDQUFDLENBQUMsOENBQThDO1FBQ2hELENBQUMsQ0FBQyxxQ0FBcUM7SUFFekMsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDOUUsQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLENBQzVCLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsU0FBUyxFQUN6QixrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLEdBQzVFLENBQ0g7UUFDQSxDQUFDLFdBQVcsSUFBSSxVQUFVLElBQUksQ0FDN0IsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxVQUFVLEVBQzFCLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUc7Z0JBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FDN0UsQ0FDSDtRQUVBLFdBQVcsSUFBSSxDQUNkLFdBQVcsQ0FBQyxZQUFZO1lBQ3RCLENBQUMsQ0FBQywrQ0FBQyxrRUFBWSxvQkFBSyxpQkFBaUIsSUFBRSxPQUFPLEVBQUMsS0FBSyxJQUFHO1lBQ3ZELENBQUMsQ0FBQyxDQUNBLHdEQUFLLEtBQUssRUFBRSxjQUFjO2dCQUN4Qiw0REFBTSw2REFBZSxDQUFDLHNCQUFzQixDQUFPO2dCQUNuRCx3REFBSyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7b0JBQy9DLDZEQUFlLENBQUMsa0JBQWtCOztvQkFBRSwrREFBUyxXQUFXLENBQVUsQ0FDL0QsQ0FDRixDQUNMLENBQ047UUFFQSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUMvQix3REFBSyxLQUFLLGtDQUFPLGNBQWMsR0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FDOUQsNkRBQWUsQ0FBQyxlQUFlLENBQzVCLENBQ1A7UUFFQSxDQUFDLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYSxJQUFJLENBQy9DLCtDQUFDLDREQUFTLG9CQUNKLGNBQWMsSUFDbEIsT0FBTyxFQUFDLEtBQUssRUFDYixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU8sVUFBVSxJQUFJO2dCQUMzQixTQUFTLEVBQUUsVUFBVTtnQkFDckIsU0FBUyxFQUFFLFVBQVU7YUFDdEIsSUFDRCxDQUNIO1FBRUEsQ0FBQyxXQUFXLElBQUksV0FBVyxJQUFJLFVBQVUsSUFBSSxDQUM1QztZQUNFLCtDQUFDLDREQUFTLG9CQUNKLGNBQWMsSUFDbEIsT0FBTyxFQUFDLEtBQUssRUFDYixRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE9BQU8sVUFBVSxJQUFJO29CQUMzQixTQUFTLEVBQUUsVUFBVTtvQkFDckIsU0FBUyxFQUFFLFVBQVU7aUJBQ3RCLElBQ0Q7WUFDRix3REFBSyxLQUFLLEVBQUUsU0FBUztnQkFDbkIsd0RBQUssS0FBSyxFQUFFLElBQUksaUJBQWMsTUFBTSxHQUFHO2dCQUN2QywrQ0FBQyxrRUFBWSxvQkFDUCxpQkFBaUIsSUFDckIsT0FBTyxFQUFDLFFBQVEsRUFDaEIsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxPQUFPLFlBQVksR0FBRzt3QkFDNUIsS0FBSyxFQUFFLEdBQUcsWUFBWSxHQUFHO3dCQUN6QixTQUFTLEVBQUUsUUFBUTtxQkFDcEIsSUFDRDtnQkFDRix3REFBSyxLQUFLLEVBQUUsSUFBSSxpQkFBYyxNQUFNLEdBQUcsQ0FDbkMsQ0FDTCxDQUNKLENBQ0csQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvY29tcGFyZUNlbmFyaW9zQnJpZGdlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9Db250ZW50UGFuZWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wb25lbnRzL0ZpbHRlckJhci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvcnVudGltZS9jb21wb25lbnRzL0xheWVyTGVnZW5kLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvU2NlbmFyaW9JbmRpY2F0b3JzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL2xlZ2VuZFV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvbWFwTGF5ZXJzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3J1bnRpbWUvc2NlbmFyaW9TdGF0cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0LWRvbVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDZW5hcmlvSWQgfSBmcm9tICcuL21hcExheWVycydcbmltcG9ydCB0eXBlIHsgQWxsQ2VuYXJpb3NTdGF0cyB9IGZyb20gJy4vc2NlbmFyaW9TdGF0cydcbmltcG9ydCB0eXBlIHsgTGVnZW5kR3JvdXAgfSBmcm9tICcuL2xlZ2VuZFV0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhcmVCcmlkZ2VTdGF0ZSB7XG4gIHNlbGVjdGVkUG5yaDI6IHN0cmluZ1xuICBzZWxlY3RlZFN1YkJhY2lhOiBzdHJpbmdcbiAgY2VuYXJpb0xlZnQ6IENlbmFyaW9JZFxuICBjZW5hcmlvUmlnaHQ6IENlbmFyaW9JZFxuICBzdGF0czogQWxsQ2VuYXJpb3NTdGF0cyB8IG51bGxcbiAgc3RhdHNMb2FkaW5nOiBib29sZWFuXG4gIGxlZ2VuZEdyb3VwczogTGVnZW5kR3JvdXBbXVxuICBjbGFzc0NvbG9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBoYXNNYXBzUmVhZHk6IGJvb2xlYW5cbn1cblxuY29uc3QgRU1QVFk6IENvbXBhcmVCcmlkZ2VTdGF0ZSA9IHtcbiAgc2VsZWN0ZWRQbnJoMjogJycsXG4gIHNlbGVjdGVkU3ViQmFjaWE6ICcnLFxuICBjZW5hcmlvTGVmdDogJ2F0dWFsJyxcbiAgY2VuYXJpb1JpZ2h0OiAnYXR1YWwnLFxuICBzdGF0czogbnVsbCxcbiAgc3RhdHNMb2FkaW5nOiBmYWxzZSxcbiAgbGVnZW5kR3JvdXBzOiBbXSxcbiAgY2xhc3NDb2xvcnM6IHt9LFxuICBoYXNNYXBzUmVhZHk6IGZhbHNlXG59XG5cbmNvbnN0IHNuYXBzaG90cyA9IG5ldyBNYXA8c3RyaW5nLCBDb21wYXJlQnJpZGdlU3RhdGU+KClcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8KCkgPT4gdm9pZD4+KClcblxuY29uc3QgZW5zdXJlR3JvdXAgPSAobGlua0dyb3VwSWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGlkID0gKGxpbmtHcm91cElkIHx8ICdkZWZhdWx0JykudHJpbSgpIHx8ICdkZWZhdWx0J1xuICBpZiAoIXNuYXBzaG90cy5oYXMoaWQpKSBzbmFwc2hvdHMuc2V0KGlkLCB7IC4uLkVNUFRZIH0pXG4gIGlmICghbGlzdGVuZXJzLmhhcyhpZCkpIGxpc3RlbmVycy5zZXQoaWQsIG5ldyBTZXQoKSlcbiAgcmV0dXJuIGlkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wYXJlQnJpZGdlU25hcHNob3QgPSAobGlua0dyb3VwSWQ6IHN0cmluZyk6IENvbXBhcmVCcmlkZ2VTdGF0ZSA9PiB7XG4gIGNvbnN0IGlkID0gZW5zdXJlR3JvdXAobGlua0dyb3VwSWQpXG4gIHJldHVybiBzbmFwc2hvdHMuZ2V0KGlkKSB8fCBFTVBUWVxufVxuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQ29tcGFyZUJyaWRnZSA9IChsaW5rR3JvdXBJZDogc3RyaW5nLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6ICgoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IGlkID0gZW5zdXJlR3JvdXAobGlua0dyb3VwSWQpXG4gIGxpc3RlbmVycy5nZXQoaWQpPy5hZGQobGlzdGVuZXIpXG4gIHJldHVybiAoKSA9PiB7IGxpc3RlbmVycy5nZXQoaWQpPy5kZWxldGUobGlzdGVuZXIpIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbXBhcmVCcmlkZ2UgPSAobGlua0dyb3VwSWQ6IHN0cmluZywgcGF0Y2g6IFBhcnRpYWw8Q29tcGFyZUJyaWRnZVN0YXRlPik6IHZvaWQgPT4ge1xuICBjb25zdCBpZCA9IGVuc3VyZUdyb3VwKGxpbmtHcm91cElkKVxuICBjb25zdCBwcmV2ID0gc25hcHNob3RzLmdldChpZCkgfHwgRU1QVFlcbiAgc25hcHNob3RzLnNldChpZCwgeyAuLi5wcmV2LCAuLi5wYXRjaCB9KVxuICBsaXN0ZW5lcnMuZ2V0KGlkKT8uZm9yRWFjaChmbiA9PiB7IGZuKCkgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlY29yZFRvQ2xhc3NDb2xvcnMgPSAocmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogTWFwPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gIHJldHVybiBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKHJlY29yZCkpXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQ2VuYXJpb0lkIH0gZnJvbSAnLi4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHR5cGUgeyBBbGxDZW5hcmlvc1N0YXRzIH0gZnJvbSAnLi4vc2NlbmFyaW9TdGF0cydcbmltcG9ydCB0eXBlIHsgTGVnZW5kR3JvdXAgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcbmltcG9ydCB7IFNjZW5hcmlvSW5kaWNhdG9ycyB9IGZyb20gJy4vU2NlbmFyaW9JbmRpY2F0b3JzJ1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmQgfSBmcm9tICcuL0xheWVyTGVnZW5kJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRQYW5lbFByb3BzIHtcbiAgc3RhdHM6IEFsbENlbmFyaW9zU3RhdHMgfCBudWxsXG4gIHN0YXRzTG9hZGluZzogYm9vbGVhblxuICBiYWNpYTogc3RyaW5nXG4gIHN1YkJhY2lhOiBzdHJpbmdcbiAgY29tcGFyZUNlbmFyaW9zOiBDZW5hcmlvSWRbXVxuICBjbGFzc0NvbG9yczogTWFwPHN0cmluZywgc3RyaW5nPlxuICBsZWdlbmRHcm91cHM6IExlZ2VuZEdyb3VwW11cbiAgcGFuZWxTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgcm91bmRlZD86ICdib3R0b20nIHwgJ2FsbCdcbiAgY2VuYXJpb01lc3NhZ2VzOiB7XG4gICAgY2VuYXJpb3NMb2FkaW5nOiBzdHJpbmdcbiAgICBjZW5hcmlvc1NlbGVjdEZpbHRlcjogc3RyaW5nXG4gICAgY2VuYXJpb0JhY2lhTGFiZWw6IHN0cmluZ1xuICAgIGNlbmFyaW9TdWJCYWNpYUxhYmVsOiBzdHJpbmdcbiAgICBjZW5hcmlvQXR1YWw6IHN0cmluZ1xuICAgIGNlbmFyaW9Tc3AyNDU6IHN0cmluZ1xuICAgIGNlbmFyaW9Tc3A1ODU6IHN0cmluZ1xuICAgIGNlbmFyaW9zQ2hhcnRUaXRsZTogc3RyaW5nXG4gICAgY2VuYXJpb3NOb0RhdGE6IHN0cmluZ1xuICB9XG4gIGxlZ2VuZFRpdGxlOiBzdHJpbmdcbiAgbGVnZW5kRW1wdHk6IHN0cmluZ1xufVxuXG5jb25zdCBzY3JvbGxIb3ZlckNzcyA9IGNzc2BcbiAgJi5jb21wYXJlLWNlbmFyaW9zLXBhbmVsIC5jb21wYXJlLWNlbmFyaW9zLXNjcm9sbCB7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJi5jb21wYXJlLWNlbmFyaW9zLXBhbmVsOmhvdmVyIC5jb21wYXJlLWNlbmFyaW9zLXNjcm9sbCB7XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjgpIHRyYW5zcGFyZW50O1xuICB9XG4gICYuY29tcGFyZS1jZW5hcmlvcy1wYW5lbCAuY29tcGFyZS1jZW5hcmlvcy1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG4gICYuY29tcGFyZS1jZW5hcmlvcy1wYW5lbCAuY29tcGFyZS1jZW5hcmlvcy1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmLmNvbXBhcmUtY2VuYXJpb3MtcGFuZWwgLmNvbXBhcmUtY2VuYXJpb3Mtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gICYuY29tcGFyZS1jZW5hcmlvcy1wYW5lbDpob3ZlciAuY29tcGFyZS1jZW5hcmlvcy1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50UGFuZWw6IFJlYWN0LkZDPENvbnRlbnRQYW5lbFByb3BzPiA9ICh7XG4gIHN0YXRzLFxuICBzdGF0c0xvYWRpbmcsXG4gIGJhY2lhLFxuICBzdWJCYWNpYSxcbiAgY29tcGFyZUNlbmFyaW9zLFxuICBjbGFzc0NvbG9ycyxcbiAgbGVnZW5kR3JvdXBzLFxuICBwYW5lbFN0eWxlLFxuICByb3VuZGVkID0gJ2JvdHRvbScsXG4gIGNlbmFyaW9NZXNzYWdlcyxcbiAgbGVnZW5kVGl0bGUsXG4gIGxlZ2VuZEVtcHR5XG59KSA9PiB7XG4gIGNvbnN0IHNoZWxsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2QwZDBkMCcsXG4gICAgYm94U2hhZG93OiAnMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm9yZGVyVG9wOiByb3VuZGVkID09PSAnYWxsJyA/ICcxcHggc29saWQgI2QwZDBkMCcgOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzEycHggMTRweCAxNHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZ2FwOiAnMTJweCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogMCxcbiAgICAuLi5wYW5lbFN0eWxlXG4gIH1cbiAgY29uc3Qgc2Nyb2xsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICBtaW5IZWlnaHQ6IDBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhcmUtY2VuYXJpb3MtcGFuZWwnIGNzcz17c2Nyb2xsSG92ZXJDc3N9IHN0eWxlPXtzaGVsbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFyZS1jZW5hcmlvcy1zY3JvbGwnIHN0eWxlPXtzY3JvbGx9PlxuICAgICAgICA8U2NlbmFyaW9JbmRpY2F0b3JzXG4gICAgICAgICAgc3RhdHM9e3N0YXRzfVxuICAgICAgICAgIGxvYWRpbmc9e3N0YXRzTG9hZGluZ31cbiAgICAgICAgICBiYWNpYT17YmFjaWF9XG4gICAgICAgICAgc3ViQmFjaWE9e3N1YkJhY2lhfVxuICAgICAgICAgIGNvbXBhcmVDZW5hcmlvcz17Y29tcGFyZUNlbmFyaW9zfVxuICAgICAgICAgIGNsYXNzQ29sb3JzPXtjbGFzc0NvbG9yc31cbiAgICAgICAgICBtZXNzYWdlcz17Y2VuYXJpb01lc3NhZ2VzfVxuICAgICAgICAvPlxuICAgICAgICA8TGF5ZXJMZWdlbmRcbiAgICAgICAgICBncm91cHM9e2xlZ2VuZEdyb3Vwc31cbiAgICAgICAgICB0aXRsZT17bGVnZW5kVGl0bGV9XG4gICAgICAgICAgZW1wdHlUZXh0PXtsZWdlbmRFbXB0eX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcblxuZXhwb3J0IGNvbnN0IENoZXZyb25Eb3duSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPScxNCdcbiAgICBoZWlnaHQ9JzE0J1xuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICBmaWxsPSdub25lJ1xuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgPlxuICAgIDxwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBvcHRpb25zOiBzdHJpbmdbXVxuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9ICh7IHZhbHVlLCBvcHRpb25zLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsaXN0UG9zLCBzZXRMaXN0UG9zXSA9IHVzZVN0YXRlKHsgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCB9KVxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgY29uc3QgcG9ydGFsSWRSZWYgPSB1c2VSZWYoYGNvbXBhcmUtY2VuYXJpb3MtZGQtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gKVxuXG4gIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghd3JhcFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBjb25zdCByID0gd3JhcFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgc2V0TGlzdFBvcyh7IHRvcDogci5ib3R0b20gKyA0LCBsZWZ0OiByLmxlZnQsIHdpZHRoOiByLndpZHRoIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvcGVuKSByZXR1cm5cbiAgICB1cGRhdGVQb3NpdGlvbigpXG4gICAgY29uc3Qgb25Eb2NDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0ID0gZS50YXJnZXQgYXMgTm9kZVxuICAgICAgaWYgKHdyYXBSZWYuY3VycmVudD8uY29udGFpbnModCkpIHJldHVyblxuICAgICAgY29uc3QgcG9ydGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsSWRSZWYuY3VycmVudClcbiAgICAgIGlmIChwb3J0YWw/LmNvbnRhaW5zKHQpKSByZXR1cm5cbiAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jQ2xpY2spXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBvc2l0aW9uLCB0cnVlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQb3NpdGlvbilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2NDbGljaylcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQb3NpdGlvbiwgdHJ1ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQb3NpdGlvbilcbiAgICB9XG4gIH0sIFtvcGVuLCB1cGRhdGVQb3NpdGlvbl0pXG5cbiAgY29uc3QgcGlsbDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgcGFkZGluZzogJzJweCA0cHggMnB4IDE2cHgnLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDQpJyxcbiAgICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuNiA6IDEsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH1cbiAgY29uc3QgdmFsdWVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmbGV4OiAxLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgY29sb3I6IHZhbHVlID8gJyMzMzMnIDogJyM4ODgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfVxuICBjb25zdCBjaGV2cm9uOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGNvbG9yOiAnIzU1NScsXG4gICAgd2lkdGg6ICcyOHB4JyxcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB0cmFuc2Zvcm06IG9wZW4gPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwZGVnKScsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjE1cydcbiAgfVxuICBjb25zdCBsaXN0OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogbGlzdFBvcy50b3AsXG4gICAgbGVmdDogbGlzdFBvcy5sZWZ0LFxuICAgIHdpZHRoOiBsaXN0UG9zLndpZHRoLFxuICAgIG1heEhlaWdodDogJzIyMHB4JyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQwZDAnLFxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgIGJveFNoYWRvdzogJzAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICAgekluZGV4OiAxMDAwMDAsXG4gICAgcGFkZGluZzogJzRweCAwJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZSdcbiAgfVxuICBjb25zdCBpdGVtU3R5bGUgPSAoc2VsZWN0ZWQ6IGJvb2xlYW4pOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0+ICh7XG4gICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGNvbG9yOiBzZWxlY3RlZCA/ICcjMjU2QjQ1JyA6ICcjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiBzZWxlY3RlZCA/ICcjZjBmN2YzJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICB9KVxuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVyblxuICAgIHNldE9wZW4obyA9PiAhbylcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdFZhbHVlID0gKHY6IHN0cmluZykgPT4ge1xuICAgIG9uQ2hhbmdlKHYpXG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGxpc3RFbCA9IG9wZW4gJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IChcbiAgICBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICA8dWwgaWQ9e3BvcnRhbElkUmVmLmN1cnJlbnR9IHN0eWxlPXtsaXN0fT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgc3R5bGU9e2l0ZW1TdHlsZSghdmFsdWUpfVxuICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNlbGVjdFZhbHVlKCcnKSB9fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MTElFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmNWY1ZjUnIH19XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAhdmFsdWUgPyAnI2YwZjdmMycgOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtvcHRpb25zLm1hcChvcHQgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtvcHR9XG4gICAgICAgICAgICBzdHlsZT17aXRlbVN0eWxlKG9wdCA9PT0gdmFsdWUpfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc2VsZWN0VmFsdWUob3B0KSB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4geyAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxMSUVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSAnI2Y1ZjVmNScgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MTElFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0ID09PSB2YWx1ZSA/ICcjZjBmN2YzJyA6ICd0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD4sXG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgKVxuICApIDogbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3dyYXBSZWZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17cGlsbH1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICByb2xlPSdidXR0b24nXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7IGUucHJldmVudERlZmF1bHQoKTsgdG9nZ2xlKCkgfSB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBzdHlsZT17dmFsdWVTdHlsZX0+e3ZhbHVlIHx8IHBsYWNlaG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e2NoZXZyb259PjxDaGV2cm9uRG93bkljb24gLz48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0RWx9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQ2VuYXJpb0lkIH0gZnJvbSAnLi4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuL0Ryb3Bkb3duJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBlcnJvcjogc3RyaW5nXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgYWxsUG5yaDI6IHN0cmluZ1tdXG4gIGFsbFN1YkJhY2lhczogc3RyaW5nW11cbiAgc3ViQmFjaWFPcHRpb25zOiBzdHJpbmdbXVxuICBzZWxlY3RlZFBucmgyOiBzdHJpbmdcbiAgc2VsZWN0ZWRTdWJCYWNpYTogc3RyaW5nXG4gIGNlbmFyaW9MZWZ0OiBDZW5hcmlvSWRcbiAgY2VuYXJpb1JpZ2h0OiBDZW5hcmlvSWRcbiAgc3luY1ZpZXdzOiBib29sZWFuXG4gIGhhc0FjdGl2ZUZpbHRlcjogYm9vbGVhblxuICBjZW5hcmlvT3B0aW9uczogc3RyaW5nW11cbiAgY2VuYXJpb0xhYmVsOiAoaWQ6IENlbmFyaW9JZCkgPT4gc3RyaW5nXG4gIG1lc3NhZ2VzOiB7XG4gICAgcG5yaDJMYWJlbDogc3RyaW5nXG4gICAgc3ViQmFjaWFMYWJlbDogc3RyaW5nXG4gICAgbWFwTGVmdExhYmVsOiBzdHJpbmdcbiAgICBtYXBSaWdodExhYmVsOiBzdHJpbmdcbiAgICBsb2FkaW5nOiBzdHJpbmdcbiAgICBzZWxlY3RQbnJoMjogc3RyaW5nXG4gICAgc2VsZWN0U3ViQmFjaWE6IHN0cmluZ1xuICAgIHNlbGVjdENlbmFyaW86IHN0cmluZ1xuICAgIHN5bmNWaWV3czogc3RyaW5nXG4gICAgY2xlYXI6IHN0cmluZ1xuICB9XG4gIG9uUG5yaDJTZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU3ViQmFjaWFTZWxlY3Q6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2VuYXJpb0xlZnRTZWxlY3Q6IChsYWJlbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2VuYXJpb1JpZ2h0U2VsZWN0OiAobGFiZWw6IHN0cmluZykgPT4gdm9pZFxuICBvblN5bmNWaWV3c0NoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25DbGVhcjogKCkgPT4gdm9pZFxuICBiYXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgcm91bmRlZD86ICd0b3AnIHwgJ2FsbCdcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlckJhcjogUmVhY3QuRkM8RmlsdGVyQmFyUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGVycm9yLFxuICBsb2FkaW5nLFxuICBhbGxQbnJoMixcbiAgYWxsU3ViQmFjaWFzLFxuICBzdWJCYWNpYU9wdGlvbnMsXG4gIHNlbGVjdGVkUG5yaDIsXG4gIHNlbGVjdGVkU3ViQmFjaWEsXG4gIGNlbmFyaW9MZWZ0LFxuICBjZW5hcmlvUmlnaHQsXG4gIHN5bmNWaWV3cyxcbiAgaGFzQWN0aXZlRmlsdGVyLFxuICBjZW5hcmlvT3B0aW9ucyxcbiAgY2VuYXJpb0xhYmVsLFxuICBtZXNzYWdlcyxcbiAgb25QbnJoMlNlbGVjdCxcbiAgb25TdWJCYWNpYVNlbGVjdCxcbiAgb25DZW5hcmlvTGVmdFNlbGVjdCxcbiAgb25DZW5hcmlvUmlnaHRTZWxlY3QsXG4gIG9uU3luY1ZpZXdzQ2hhbmdlLFxuICBvbkNsZWFyLFxuICBiYXJTdHlsZSxcbiAgcm91bmRlZCA9ICd0b3AnXG59KSA9PiB7XG4gIGNvbnN0IHRvcEJhcjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgIGdhcDogJzEwcHggMTRweCcsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG4gIGNvbnN0IGZpbHRlckNlbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZmxleDogJzEgMSAxNDBweCcsXG4gICAgbWluV2lkdGg6IDEzMCxcbiAgICBtYXhXaWR0aDogMjIwXG4gIH1cbiAgY29uc3QgZmlsdGVyTGFiZWw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzExcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjb2xvcjogJyM1NTUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzRweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDNlbSdcbiAgfVxuICBjb25zdCBhY3Rpb25zQ2VsbDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZ2FwOiAnMTBweCcsXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgcGFkZGluZ0JvdHRvbTogJzJweCdcbiAgfVxuICBjb25zdCBjbGVhckJ0bjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzI1NkI0NScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgcGFkZGluZzogJzAgMThweCcsXG4gICAgaGVpZ2h0OiAnMzRweCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfVxuICBjb25zdCBzeW5jTGFiZWw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdhcDogJzZweCcsXG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH1cbiAgY29uc3Qgc2hlbGw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDBkMGQwJyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xNCknLFxuICAgIGJvcmRlclJhZGl1czogcm91bmRlZCA9PT0gJ2FsbCcgPyAnMTJweCcgOiAnMTJweCAxMnB4IDAgMCcsXG4gICAgcGFkZGluZzogJzEwcHggMTRweCAxMnB4JyxcbiAgICBib3JkZXJCb3R0b206IHJvdW5kZWQgPT09ICdhbGwnID8gJzFweCBzb2xpZCAjZDBkMGQwJyA6ICcycHggc29saWQgIzI1NkI0NScsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIC4uLmJhclN0eWxlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3NoZWxsfT5cbiAgICAgIDxkaXYgc3R5bGU9e3RvcEJhcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogJzEgMSAxMDAlJywgZm9udFNpemU6ICcxNHB4JywgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMyNTZCNDUnLCBtYXJnaW5Cb3R0b206ICcycHgnIH19PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6ICcxIDEgMTAwJScsIGNvbG9yOiAnI2IwMDAyMCcsIGZvbnRTaXplOiAnMTJweCcgfX0+e2Vycm9yfTwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgc3R5bGU9e2ZpbHRlckNlbGx9PlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17ZmlsdGVyTGFiZWx9PnttZXNzYWdlcy5wbnJoMkxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQbnJoMn1cbiAgICAgICAgICAgIG9wdGlvbnM9e2FsbFBucmgyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmcgJiYgYWxsUG5yaDIubGVuZ3RoID09PSAwID8gbWVzc2FnZXMubG9hZGluZyA6IG1lc3NhZ2VzLnNlbGVjdFBucmgyfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgYWxsUG5yaDIubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uUG5yaDJTZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17ZmlsdGVyQ2VsbH0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtmaWx0ZXJMYWJlbH0+e21lc3NhZ2VzLnN1YkJhY2lhTGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFN1YkJhY2lhfVxuICAgICAgICAgICAgb3B0aW9ucz17c3ViQmFjaWFPcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvYWRpbmcgJiYgYWxsU3ViQmFjaWFzLmxlbmd0aCA9PT0gMCA/IG1lc3NhZ2VzLmxvYWRpbmcgOiBtZXNzYWdlcy5zZWxlY3RTdWJCYWNpYX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8IGFsbFN1YkJhY2lhcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TdWJCYWNpYVNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWx0ZXJDZWxsfT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpbHRlckxhYmVsfT57bWVzc2FnZXMubWFwTGVmdExhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICB2YWx1ZT17Y2VuYXJpb0xhYmVsKGNlbmFyaW9MZWZ0KX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2NlbmFyaW9PcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e21lc3NhZ2VzLnNlbGVjdENlbmFyaW99XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DZW5hcmlvTGVmdFNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWx0ZXJDZWxsfT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpbHRlckxhYmVsfT57bWVzc2FnZXMubWFwUmlnaHRMYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgdmFsdWU9e2NlbmFyaW9MYWJlbChjZW5hcmlvUmlnaHQpfVxuICAgICAgICAgICAgb3B0aW9ucz17Y2VuYXJpb09wdGlvbnN9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17bWVzc2FnZXMuc2VsZWN0Q2VuYXJpb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNlbmFyaW9SaWdodFNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXthY3Rpb25zQ2VsbH0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtzeW5jTGFiZWx9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICBjaGVja2VkPXtzeW5jVmlld3N9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBvblN5bmNWaWV3c0NoYW5nZShlLnRhcmdldC5jaGVja2VkKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHttZXNzYWdlcy5zeW5jVmlld3N9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7aGFzQWN0aXZlRmlsdGVyICYmIChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2NsZWFyQnRufSBvbkNsaWNrPXtvbkNsZWFyfSB0eXBlPSdidXR0b24nPlxuICAgICAgICAgICAgICB7bWVzc2FnZXMuY2xlYXJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5pbXBvcnQgdHlwZSB7IExlZ2VuZEdyb3VwIH0gZnJvbSAnLi4vbGVnZW5kVXRpbHMnXHJcblxyXG5pbXBvcnQgeyBzZXZlcml0eUNvbG9yIH0gZnJvbSAnLi4vbGVnZW5kVXRpbHMnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJMZWdlbmRQcm9wcyB7XHJcblxyXG4gIGdyb3VwczogTGVnZW5kR3JvdXBbXVxyXG5cclxuICB0aXRsZTogc3RyaW5nXHJcblxyXG4gIGVtcHR5VGV4dDogc3RyaW5nXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMYXllckxlZ2VuZDogUmVhY3QuRkM8TGF5ZXJMZWdlbmRQcm9wcz4gPSAoeyBncm91cHMsIHRpdGxlLCBlbXB0eVRleHQgfSkgPT4ge1xyXG5cclxuICBjb25zdCBib3g6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAnI2Y3ZjlmOCcsXHJcblxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG5cclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlOGU0J1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHRpdGxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblxyXG4gICAgZm9udFNpemU6ICcxM3B4JyxcclxuXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcblxyXG4gICAgY29sb3I6ICcjMjU2QjQ1JyxcclxuXHJcbiAgICBtYXJnaW5Cb3R0b206ICc4cHgnXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3JvdXBUaXRsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXG5cclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuXHJcbiAgICBjb2xvcjogJyM1NTUnLFxyXG5cclxuICAgIG1hcmdpbkJvdHRvbTogJzZweCcsXHJcblxyXG4gICAgbWFyZ2luVG9wOiAnNHB4J1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcblxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblxyXG4gICAgZ2FwOiAnOHB4JyxcclxuXHJcbiAgICBwYWRkaW5nOiAnNHB4IDAnLFxyXG5cclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcblxyXG4gICAgY29sb3I6ICcjMzMzJ1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHN3YXRjaDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHJcbiAgICB3aWR0aDogMTQsXHJcblxyXG4gICAgaGVpZ2h0OiAxNCxcclxuXHJcbiAgICBib3JkZXJSYWRpdXM6IDMsXHJcblxyXG4gICAgZmxleFNocmluazogMCxcclxuXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjEyKSdcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e2JveH0+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3RpdGxlU3R5bGV9Pnt0aXRsZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM4ODgnLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PntlbXB0eVRleHR9PC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgc3R5bGU9e2JveH0+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9kaXY+XHJcblxyXG4gICAgICB7Z3JvdXBzLm1hcCgoZ3JvdXAsIGdpKSA9PiAoXHJcblxyXG4gICAgICAgIDxkaXYga2V5PXtncm91cC50aXRsZX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBnaSA8IGdyb3Vwcy5sZW5ndGggLSAxID8gJzEwcHgnIDogMCB9fT5cclxuXHJcbiAgICAgICAgICB7Z3JvdXBzLmxlbmd0aCA+IDEgJiYgPGRpdiBzdHlsZT17Z3JvdXBUaXRsZX0+e2dyb3VwLnRpdGxlfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsbCA9IGl0ZW0uY29sb3IgfHwgc2V2ZXJpdHlDb2xvcihpdGVtLnNldmVyaXR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2dyb3VwLnRpdGxlfS0ke2l0ZW0ubGFiZWx9YH0gc3R5bGU9e3Jvd30+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4uc3dhdGNoLCBiYWNrZ3JvdW5kOiBmaWxsIH19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbGluZUhlaWdodDogMS4zIH19PntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgKSl9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxuXHJcbn1cclxuXHJcblxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgdHlwZSB7IENlbmFyaW9JZCB9IGZyb20gJy4uL21hcExheWVycydcbmltcG9ydCB7IHNldmVyaXR5Q29sb3IgfSBmcm9tICcuLi9sZWdlbmRVdGlscydcbmltcG9ydCB0eXBlIHsgQWxsQ2VuYXJpb3NTdGF0cyB9IGZyb20gJy4uL3NjZW5hcmlvU3RhdHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmFyaW9JbmRpY2F0b3JzUHJvcHMge1xuICBzdGF0czogQWxsQ2VuYXJpb3NTdGF0cyB8IG51bGxcbiAgbG9hZGluZzogYm9vbGVhblxuICBiYWNpYTogc3RyaW5nXG4gIHN1YkJhY2lhOiBzdHJpbmdcbiAgY29tcGFyZUNlbmFyaW9zOiBDZW5hcmlvSWRbXVxuICBjbGFzc0NvbG9yczogTWFwPHN0cmluZywgc3RyaW5nPlxuICBtZXNzYWdlczoge1xuICAgIGNlbmFyaW9zTG9hZGluZzogc3RyaW5nXG4gICAgY2VuYXJpb3NTZWxlY3RGaWx0ZXI6IHN0cmluZ1xuICAgIGNlbmFyaW9CYWNpYUxhYmVsOiBzdHJpbmdcbiAgICBjZW5hcmlvU3ViQmFjaWFMYWJlbDogc3RyaW5nXG4gICAgY2VuYXJpb0F0dWFsOiBzdHJpbmdcbiAgICBjZW5hcmlvU3NwMjQ1OiBzdHJpbmdcbiAgICBjZW5hcmlvU3NwNTg1OiBzdHJpbmdcbiAgICBjZW5hcmlvc0NoYXJ0VGl0bGU6IHN0cmluZ1xuICAgIGNlbmFyaW9zTm9EYXRhOiBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBjZW5hcmlvTGFiZWwgPSAoaWQ6IENlbmFyaW9JZCwgbWVzc2FnZXM6IFNjZW5hcmlvSW5kaWNhdG9yc1Byb3BzWydtZXNzYWdlcyddKTogc3RyaW5nID0+IHtcbiAgaWYgKGlkID09PSAnc3NwMjQ1JykgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9Tc3AyNDVcbiAgaWYgKGlkID09PSAnc3NwNTg1JykgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbiAgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9BdHVhbFxufVxuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9JbmRpY2F0b3JzOiBSZWFjdC5GQzxTY2VuYXJpb0luZGljYXRvcnNQcm9wcz4gPSAoe1xuICBzdGF0cyxcbiAgbG9hZGluZyxcbiAgYmFjaWEsXG4gIHN1YkJhY2lhLFxuICBjb21wYXJlQ2VuYXJpb3MsXG4gIGNsYXNzQ29sb3JzLFxuICBtZXNzYWdlc1xufSkgPT4ge1xuICBpZiAoIWJhY2lhICYmICFzdWJCYWNpYSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzg4OCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc4cHggMCcgfX0+XG4gICAgICAgIHttZXNzYWdlcy5jZW5hcmlvc1NlbGVjdEZpbHRlcn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFN0eWxlOiAnaXRhbGljJywgZm9udFNpemU6ICcxM3B4JywgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzhweCAwJyB9fT5cbiAgICAgICAge21lc3NhZ2VzLmNlbmFyaW9zTG9hZGluZ31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmICghc3RhdHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyM4ODgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCBmb250U2l6ZTogJzEzcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnOHB4IDAnIH19PlxuICAgICAgICB7bWVzc2FnZXMuY2VuYXJpb3NTZWxlY3RGaWx0ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCB1bmlxdWVJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoY29tcGFyZUNlbmFyaW9zKSlcbiAgY29uc3QgY2VuYXJpb3MgPSB1bmlxdWVJZHMubWFwKGlkID0+ICh7XG4gICAgaWQsXG4gICAgbGFiZWw6IGNlbmFyaW9MYWJlbChpZCwgbWVzc2FnZXMpLFxuICAgIHN0YXRzOiBzdGF0c1tpZF1cbiAgfSkpXG5cbiAgaWYgKGNlbmFyaW9zLmV2ZXJ5KGMgPT4gYy5zdGF0cy50b3RhbCA9PT0gMCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM4ODgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnOHB4IDAnIH19PlxuICAgICAgICB7bWVzc2FnZXMuY2VuYXJpb3NOb0RhdGF9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCBhbGxDbGFzc2VzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICBjZW5hcmlvcy5mb3JFYWNoKGMgPT4ge1xuICAgIGMuc3RhdHMuY2xhc3Nlcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICBpZiAoIWFsbENsYXNzZXMuaGFzKGNscy5jbGFzc2UpIHx8IChhbGxDbGFzc2VzLmdldChjbHMuY2xhc3NlKSB8fCAwKSA8IGNscy5zZXZlcml0eSkge1xuICAgICAgICBhbGxDbGFzc2VzLnNldChjbHMuY2xhc3NlLCBjbHMuc2V2ZXJpdHkpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgY29uc3Qgb3JkZXJlZENsYXNzZXMgPSBBcnJheS5mcm9tKGFsbENsYXNzZXMuZW50cmllcygpKVxuICAgIC5tYXAoKFtjbGFzc2UsIHNldmVyaXR5XSkgPT4gKHsgY2xhc3NlLCBzZXZlcml0eSB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zZXZlcml0eSAtIGEuc2V2ZXJpdHkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyhiYWNpYSB8fCBzdWJCYWNpYSkgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzhweCcsIGZvbnRTaXplOiAnMTJweCcgfX0+XG4gICAgICAgICAge2JhY2lhICYmIChcbiAgICAgICAgICAgIDxkaXY+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjNjY2JyB9fT57bWVzc2FnZXMuY2VuYXJpb0JhY2lhTGFiZWx9OiA8L3NwYW4+PHN0cm9uZz57YmFjaWF9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c3ViQmFjaWEgJiYgKFxuICAgICAgICAgICAgPGRpdj48c3BhbiBzdHlsZT17eyBjb2xvcjogJyM2NjYnIH19PnttZXNzYWdlcy5jZW5hcmlvU3ViQmFjaWFMYWJlbH06IDwvc3Bhbj48c3Ryb25nPntzdWJCYWNpYX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJyMzMzMnLCBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxuICAgICAgICB7bWVzc2FnZXMuY2VuYXJpb3NDaGFydFRpdGxlfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMTJweCcgfX0+XG4gICAgICAgIHtvcmRlcmVkQ2xhc3Nlcy5tYXAoY2xzID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudHMgPSBjZW5hcmlvcy5tYXAoYyA9PiBjLnN0YXRzLmNsYXNzZXMuZmluZChkID0+IGQuY2xhc3NlID09PSBjbHMuY2xhc3NlKT8uY291bnQgfHwgMClcbiAgICAgICAgICBjb25zdCBtYXhDID0gTWF0aC5tYXgoLi4uY291bnRzLCAxKVxuICAgICAgICAgIGNvbnN0IGNvbG9yID0gY2xhc3NDb2xvcnMuZ2V0KGNscy5jbGFzc2UpIHx8IHNldmVyaXR5Q29sb3IoY2xzLnNldmVyaXR5KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2xzLmNsYXNzZX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjNDQ0JywgbWFyZ2luQm90dG9tOiAnNHB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNnB4JyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJhY2tncm91bmQ6IGNvbG9yLCBib3JkZXJSYWRpdXM6IDIsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IC8+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57Y2xzLmNsYXNzZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBnYXA6ICc2cHgnLCBoZWlnaHQ6ICc2MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnLCBwYWRkaW5nQm90dG9tOiAnMnB4JyB9fT5cbiAgICAgICAgICAgICAgICB7Y2VuYXJpb3MubWFwKChjZW4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSAoY291bnRzW2ldIC8gbWF4QykgKiA1MFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2VuLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YCR7Y2VuLmxhYmVsfTogJHtjb3VudHNbaV19YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JywgY29sb3I6ICcjMzMzJywgZm9udFdlaWdodDogNjAwIH19Pntjb3VudHNbaV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc3MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7TWF0aC5tYXgoaCwgMSl9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczcHggM3B4IDAgMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzI1NkI0NSdcbiAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2cHgnLCBtYXJnaW5Ub3A6ICcycHgnIH19PlxuICAgICAgICAgICAgICAgIHtjZW5hcmlvcy5tYXAoY2VuID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjZW4uaWR9IHN0eWxlPXt7IGZsZXg6IDEsIGZvbnRTaXplOiAnOXB4JywgY29sb3I6ICcjODg4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge2Nlbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHR5cGUgeyBMYXllclJlZnMgfSBmcm9tICcuL21hcExheWVycydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGVnZW5kSXRlbSB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIGNvbG9yOiBzdHJpbmdcclxuICBzZXZlcml0eTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGVnZW5kR3JvdXAge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBpdGVtczogTGVnZW5kSXRlbVtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXZlcml0eUNvbG9yID0gKHNldjogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBpZiAoc2V2ID49IDMpIHJldHVybiAnI2E4MzIzMidcclxuICBpZiAoc2V2ID09PSAyKSByZXR1cm4gJyNjOTdiMDAnXHJcbiAgaWYgKHNldiA9PT0gMSkgcmV0dXJuICcjODg4J1xyXG4gIHJldHVybiAnIzI1NkI0NSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsYXNzU2V2ZXJpdHkgPSAoY2xhc3NlOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xyXG4gIGNvbnN0IGMgPSAoY2xhc3NlIHx8ICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgaWYgKCFjKSByZXR1cm4gMFxyXG4gIGlmIChjLmluY2x1ZGVzKCdjcmlzZScpIHx8IGMuaW5jbHVkZXMoJ2Nyw610aWNvJykgfHwgYy5pbmNsdWRlcygnY3JpdGljbycpIHx8IGMuaW5jbHVkZXMoJ211aXRvIGFsdG8nKSkgcmV0dXJuIDRcclxuICBpZiAoYy5pbmNsdWRlcygnYWx0bycpKSByZXR1cm4gM1xyXG4gIGlmIChjLmluY2x1ZGVzKCdtw6lkaW8nKSB8fCBjLmluY2x1ZGVzKCdtZWRpbycpIHx8IGMuaW5jbHVkZXMoJ21vZGVyYWRvJykpIHJldHVybiAyXHJcbiAgaWYgKGMuaW5jbHVkZXMoJ2JhaXhvJykgfHwgYy5pbmNsdWRlcygnc2VtICcpIHx8IGMgPT09ICdzZW0nKSByZXR1cm4gMFxyXG4gIHJldHVybiAxXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9yVG9Dc3MgPSAoY29sb3I6IHVua25vd24pOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICBpZiAoIWNvbG9yKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IGMgPSBjb2xvciBhcyB7IHRvQ3NzPzogKGE/OiBib29sZWFuKSA9PiBzdHJpbmcsIHI/OiBudW1iZXIsIGc/OiBudW1iZXIsIGI/OiBudW1iZXIsIGE/OiBudW1iZXIgfVxyXG4gIGlmICh0eXBlb2YgYy50b0NzcyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGMudG9Dc3ModHJ1ZSlcclxuICBjb25zdCByID0gYy5yID8/IChjb2xvciBhcyBudW1iZXJbXSlbMF1cclxuICBjb25zdCBnID0gYy5nID8/IChjb2xvciBhcyBudW1iZXJbXSlbMV1cclxuICBjb25zdCBiID0gYy5iID8/IChjb2xvciBhcyBudW1iZXJbXSlbMl1cclxuICBjb25zdCBhID0gYy5hID8/IChjb2xvciBhcyBudW1iZXJbXSlbM10gPz8gMVxyXG4gIGlmIChyID09IG51bGwgfHwgZyA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIG51bGxcclxuICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgXHJcbn1cclxuXHJcbmNvbnN0IHN5bWJvbENvbG9yID0gKHN5bWJvbDogdW5rbm93bik6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gIGlmICghc3ltYm9sKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IHMgPSBzeW1ib2wgYXMgeyBjb2xvcj86IHVua25vd24sIG91dGxpbmU/OiB7IGNvbG9yPzogdW5rbm93biB9IH1cclxuICByZXR1cm4gY29sb3JUb0NzcyhzLmNvbG9yKSB8fCBjb2xvclRvQ3NzKHMub3V0bGluZT8uY29sb3IpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0UmVuZGVyZXJDb2xvcnMgPSAocmVuZGVyZXI6IHVua25vd24pOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0+IHtcclxuICBjb25zdCBtID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxyXG4gIGlmICghcmVuZGVyZXIpIHJldHVybiBtXHJcbiAgY29uc3QgciA9IHJlbmRlcmVyIGFzIHtcclxuICAgIHR5cGU/OiBzdHJpbmdcclxuICAgIGRlZmF1bHRTeW1ib2w/OiB1bmtub3duXHJcbiAgICB1bmlxdWVWYWx1ZUluZm9zPzogQXJyYXk8eyB2YWx1ZT86IHVua25vd24sIGxhYmVsPzogc3RyaW5nLCBzeW1ib2w/OiB1bmtub3duIH0+XHJcbiAgICBjbGFzc0JyZWFrSW5mb3M/OiBBcnJheTx7IGxhYmVsPzogc3RyaW5nLCBzeW1ib2w/OiB1bmtub3duIH0+XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWZhdWx0Q3NzID0gc3ltYm9sQ29sb3Ioci5kZWZhdWx0U3ltYm9sKVxyXG4gIGlmIChkZWZhdWx0Q3NzKSBtLnNldCgnUGFkcsOjbycsIGRlZmF1bHRDc3MpXHJcblxyXG4gIGlmIChyLnR5cGUgPT09ICd1bmlxdWUtdmFsdWUnKSB7XHJcbiAgICBmb3IgKGNvbnN0IGluZm8gb2Ygci51bmlxdWVWYWx1ZUluZm9zIHx8IFtdKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5mby52YWx1ZSAhPSBudWxsID8gU3RyaW5nKGluZm8udmFsdWUpLnRyaW0oKSA6ICcnXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5mby5sYWJlbCAhPSBudWxsICYmIFN0cmluZyhpbmZvLmxhYmVsKS50cmltKCkgIT09ICcnXHJcbiAgICAgICAgPyBTdHJpbmcoaW5mby5sYWJlbCkudHJpbSgpXHJcbiAgICAgICAgOiB2YWx1ZVxyXG4gICAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcihpbmZvLnN5bWJvbClcclxuICAgICAgaWYgKGxhYmVsICYmIGNzcykgbS5zZXQobGFiZWwsIGNzcylcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHIudHlwZSA9PT0gJ2NsYXNzLWJyZWFrcycpIHtcclxuICAgIGZvciAoY29uc3QgaW5mbyBvZiByLmNsYXNzQnJlYWtJbmZvcyB8fCBbXSkge1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGluZm8ubGFiZWwgIT0gbnVsbCA/IFN0cmluZyhpbmZvLmxhYmVsKS50cmltKCkgOiAnJ1xyXG4gICAgICBjb25zdCBjc3MgPSBzeW1ib2xDb2xvcihpbmZvLnN5bWJvbClcclxuICAgICAgaWYgKGxhYmVsICYmIGNzcykgbS5zZXQobGFiZWwsIGNzcylcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHIudHlwZSA9PT0gJ3NpbXBsZScpIHtcclxuICAgIGNvbnN0IGNzcyA9IHN5bWJvbENvbG9yKChyIGFzIHsgc3ltYm9sPzogdW5rbm93biB9KS5zeW1ib2wpXHJcbiAgICBpZiAoY3NzKSBtLnNldCgnw4FyZWEnLCBjc3MpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbVxyXG59XHJcblxyXG5jb25zdCBtZXJnZUNvbG9yTWFwcyA9ICguLi5tYXBzOiBBcnJheTxNYXA8c3RyaW5nLCBzdHJpbmc+Pik6IE1hcDxzdHJpbmcsIHN0cmluZz4gPT4ge1xyXG4gIGNvbnN0IG1lcmdlZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcclxuICBtYXBzLmZvckVhY2gobWFwID0+IHtcclxuICAgIG1hcC5mb3JFYWNoKChjc3MsIGxhYmVsKSA9PiB7XHJcbiAgICAgIGlmICghbWVyZ2VkLmhhcyhsYWJlbCkpIG1lcmdlZC5zZXQobGFiZWwsIGNzcylcclxuICAgIH0pXHJcbiAgfSlcclxuICByZXR1cm4gbWVyZ2VkXHJcbn1cclxuXHJcbmNvbnN0IG1hcFRvTGVnZW5kSXRlbXMgPSAoY29sb3JzOiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogTGVnZW5kSXRlbVtdID0+IHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShjb2xvcnMuZW50cmllcygpKVxyXG4gICAgLm1hcCgoW2xhYmVsLCBjb2xvcl0pID0+ICh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgc2V2ZXJpdHk6IGNsYXNzU2V2ZXJpdHkobGFiZWwpXHJcbiAgICB9KSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiBiLnNldmVyaXR5IC0gYS5zZXZlcml0eSB8fCBhLmxhYmVsLmxvY2FsZUNvbXBhcmUoYi5sYWJlbCwgJ3B0LUJSJykpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0Q2xhc3NDb2xvcnMgKGxheWVyczogTGF5ZXJSZWZzKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgY29uc3QgbWVyZ2VkID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxyXG4gIGNvbnN0IHNvdXJjZXMgPSBbbGF5ZXJzLmluZGljZSwgbGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUsIGxheWVycy5jZW5hcmlvR3JhbmRlNTg1XVxyXG4gIHNvdXJjZXMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICBpZiAoIWxheWVyKSByZXR1cm5cclxuICAgIGNvbnN0IGNvbG9ycyA9IGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXIgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KS5yZW5kZXJlcilcclxuICAgIGNvbG9ycy5mb3JFYWNoKChjc3MsIGNsYXNzZSkgPT4ge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMoY2xhc3NlKSkgbWVyZ2VkLnNldChjbGFzc2UsIGNzcylcclxuICAgIH0pXHJcbiAgfSlcclxuICByZXR1cm4gbWVyZ2VkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZExlZ2VuZEdyb3VwcyAobGF5ZXJzOiBMYXllclJlZnMpOiBMZWdlbmRHcm91cFtdIHtcclxuICBjb25zdCBncm91cHM6IExlZ2VuZEdyb3VwW10gPSBbXVxyXG5cclxuICBjb25zdCBpbmRleENvbG9ycyA9IG1lcmdlQ29sb3JNYXBzKFxyXG4gICAgZXh0cmFjdFJlbmRlcmVyQ29sb3JzKChsYXllcnMuaW5kaWNlIGFzIHVua25vd24gYXMgeyByZW5kZXJlcj86IHVua25vd24gfSk/LnJlbmRlcmVyKSxcclxuICAgIGV4dHJhY3RSZW5kZXJlckNvbG9ycygobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUgYXMgdW5rbm93biBhcyB7IHJlbmRlcmVyPzogdW5rbm93biB9KT8ucmVuZGVyZXIpLFxyXG4gICAgZXh0cmFjdFJlbmRlcmVyQ29sb3JzKChsYXllcnMuY2VuYXJpb0dyYW5kZTU4NSBhcyB1bmtub3duIGFzIHsgcmVuZGVyZXI/OiB1bmtub3duIH0pPy5yZW5kZXJlcilcclxuICApXHJcblxyXG4gIGlmIChpbmRleENvbG9ycy5zaXplID4gMCkge1xyXG4gICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICB0aXRsZTogJ8ONbmRpY2UgZGUgY29uZmxpdG8nLFxyXG4gICAgICBpdGVtczogbWFwVG9MZWdlbmRJdGVtcyhpbmRleENvbG9ycylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAobGF5ZXJzLnN1YkJhY2lhcykge1xyXG4gICAgY29uc3Qgc3ViQ29sb3JzID0gZXh0cmFjdFJlbmRlcmVyQ29sb3JzKFxyXG4gICAgICAobGF5ZXJzLnN1YkJhY2lhcyBhcyB1bmtub3duIGFzIHsgcmVuZGVyZXI/OiB1bmtub3duIH0pLnJlbmRlcmVyXHJcbiAgICApXHJcbiAgICBpZiAoc3ViQ29sb3JzLnNpemUgPiAwKSB7XHJcbiAgICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgICB0aXRsZTogJ1N1Yi1iYWNpYXMnLFxyXG4gICAgICAgIGl0ZW1zOiBtYXBUb0xlZ2VuZEl0ZW1zKHN1YkNvbG9ycylcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgICB0aXRsZTogJ1N1Yi1iYWNpYXMnLFxyXG4gICAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdMaW1pdGUgZGEgc3ViLWJhY2lhJyxcclxuICAgICAgICAgIGNvbG9yOiAncmdiYSgzNywgMTA3LCA2OSwgMC4zNSknLFxyXG4gICAgICAgICAgc2V2ZXJpdHk6IDBcclxuICAgICAgICB9XVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdyb3Vwc1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgdHlwZSBDZW5hcmlvSWQgPSAnYXR1YWwnIHwgJ3NzcDI0NScgfCAnc3NwNTg1J1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyUmVmcyB7XG4gIHN1YkJhY2lhczogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGxcbiAgaW5kaWNlOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbFxuICBjZW5hcmlvR3JhbmRlMjQ1OiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbFxuICBjZW5hcmlvR3JhbmRlNTg1OiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcExheWVyU3RhdGUge1xuICBsYXllcnM6IExheWVyUmVmc1xuICBvd25lZDogUmVjb3JkPGtleW9mIExheWVyUmVmcywgYm9vbGVhbj5cbiAgZXh0cmFMYXllcnM6IEFycmF5PHsgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsIG9yaWdpbmFsVmlzaWJsZTogYm9vbGVhbiB9PlxuICBpbml0aWFsVmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50IHwgbnVsbFxuICByZWFkeTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQVlFUl9VUkxTID0ge1xuICBzdWJCYWNpYXNVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9zdWJiYWNpYXMvRmVhdHVyZVNlcnZlci8wJyxcbiAgaW5kaWNlVXJsOiAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvaW5kaWNlX2F0dWFsX29lc3RlL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIGNlbmFyaW9HcmFuZGUyNDVVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9ncmFuZGVfMjQ1L0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIGNlbmFyaW9HcmFuZGU1ODVVcmw6ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9ncmFuZGVfNTg1L0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHNlcnZlclVybDogJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMnLFxuICB0b2tlbjogJ196TkQ0OWRLaHZuNTl0RFQ0SHE0ODZVcF9iZEhxQ2dHSDRyekVTUzBYaXFHSkNYdFVqX25MR3N0QV9ld0h2bGFSX2tQNEV0UUItR050LVBsVDkxRzN5cW5NQjRrYVg4ak1Sb2pUSVoxUEFWTDA1YmRYOWxxR0VVVXYzSjEzdE9nJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWcgKGNmZzogUGFydGlhbDxDb25maWc+IHwgdW5kZWZpbmVkKTogQ29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBzdWJCYWNpYXNVcmw6IGNmZz8uc3ViQmFjaWFzVXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5zdWJCYWNpYXNVcmwsXG4gICAgaW5kaWNlVXJsOiBjZmc/LmluZGljZVVybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuaW5kaWNlVXJsLFxuICAgIGNlbmFyaW9HcmFuZGUyNDVVcmw6IGNmZz8uY2VuYXJpb0dyYW5kZTI0NVVybCB8fCBERUZBVUxUX0xBWUVSX1VSTFMuY2VuYXJpb0dyYW5kZTI0NVVybCxcbiAgICBjZW5hcmlvR3JhbmRlNTg1VXJsOiBjZmc/LmNlbmFyaW9HcmFuZGU1ODVVcmwgfHwgREVGQVVMVF9MQVlFUl9VUkxTLmNlbmFyaW9HcmFuZGU1ODVVcmwsXG4gICAgY2xhc3NlRmllbGQyNDU6IGNmZz8uY2xhc3NlRmllbGQyNDUgfHwgJ2NsYXNzZV8yNDUnLFxuICAgIGNsYXNzZUZpZWxkNTg1OiBjZmc/LmNsYXNzZUZpZWxkNTg1IHx8ICdjbGFzc2VfNTg1JyxcbiAgICBwbnJoMkZpZWxkOiBjZmc/LnBucmgyRmllbGQgfHwgJ3BucmgyJyxcbiAgICBzdWJCYWNpYUZpZWxkOiBjZmc/LnN1YkJhY2lhRmllbGQgfHwgJ3N1Yl9iYWNpYScsXG4gICAgY2xhc3NlRmllbGQ6IGNmZz8uY2xhc3NlRmllbGQgfHwgJ2NsYXNzZScsXG4gICAgem9vbUxheWVyOiBjZmc/Lnpvb21MYXllciB8fCAnc3ViYmFjaWFzJyxcbiAgICBzZXJ2ZXJVcmw6IGNmZz8uc2VydmVyVXJsIHx8IERFRkFVTFRfTEFZRVJfVVJMUy5zZXJ2ZXJVcmwsXG4gICAgdG9rZW46IGNmZz8udG9rZW4gfHwgREVGQVVMVF9MQVlFUl9VUkxTLnRva2VuLFxuICAgIGxlZnRNYXBXaWRnZXRJZDogY2ZnPy5sZWZ0TWFwV2lkZ2V0SWQsXG4gICAgcmlnaHRNYXBXaWRnZXRJZDogY2ZnPy5yaWdodE1hcFdpZGdldElkLFxuICAgIHdpZGdldFBhcnQ6IGNmZz8ud2lkZ2V0UGFydCA/PyAnY29tYmluZWQnLFxuICAgIGxpbmtHcm91cElkOiBjZmc/LmxpbmtHcm91cElkID8/ICdkZWZhdWx0JyxcbiAgICB0VG9wQmFySGVpZ2h0OiBjZmc/LnRUb3BCYXJIZWlnaHQgPz8gMTIwLFxuICAgIHRTdGVtV2lkdGhQZXJjZW50OiBjZmc/LnRTdGVtV2lkdGhQZXJjZW50ID8/IDQyLFxuICAgIHRTdGVtTWluSGVpZ2h0OiBjZmc/LnRTdGVtTWluSGVpZ2h0ID8/IDIyMFxuICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZSA9ICh1OiBzdHJpbmcpID0+ICh1IHx8ICcnKS5yZXBsYWNlKC9cXC8rJC8sICcnKS50b0xvd2VyQ2FzZSgpXG5cbmV4cG9ydCBjb25zdCBlc2NhcGVTcWwgPSAodjogc3RyaW5nKSA9PiB2LnJlcGxhY2UoLycvZywgXCInJ1wiKVxuXG5leHBvcnQgY29uc3QgYnVpbGRXaGVyZSA9IChjb25maWc6IENvbmZpZywgcG5yaDI6IHN0cmluZywgc3ViQmFjaWE6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIGlmIChwbnJoMikgcGFydHMucHVzaChgJHtjb25maWcucG5yaDJGaWVsZH0gPSAnJHtlc2NhcGVTcWwocG5yaDIpfSdgKVxuICBpZiAoc3ViQmFjaWEpIHBhcnRzLnB1c2goYCR7Y29uZmlnLnN1YkJhY2lhRmllbGR9ID0gJyR7ZXNjYXBlU3FsKHN1YkJhY2lhKX0nYClcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA9PT0gMCA/ICcxPTEnIDogcGFydHMuam9pbignIEFORCAnKVxufVxuXG5jb25zdCBlbXB0eUxheWVycyA9ICgpOiBMYXllclJlZnMgPT4gKHtcbiAgc3ViQmFjaWFzOiBudWxsLFxuICBpbmRpY2U6IG51bGwsXG4gIGNlbmFyaW9HcmFuZGUyNDU6IG51bGwsXG4gIGNlbmFyaW9HcmFuZGU1ODU6IG51bGxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0TWFwTGF5ZXJzIChcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxuICBjb25maWc6IENvbmZpZ1xuKTogUHJvbWlzZTxNYXBMYXllclN0YXRlPiB7XG4gIGNvbnN0IFtGZWF0dXJlTGF5ZXIsIElkZW50aXR5TWFuYWdlcl0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcbiAgICAnZXNyaS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXInXG4gIF0pXG5cbiAgaWYgKGNvbmZpZy50b2tlbiAmJiBjb25maWcuc2VydmVyVXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIElkZW50aXR5TWFuYWdlci5yZWdpc3RlclRva2VuKHtcbiAgICAgICAgc2VydmVyOiBjb25maWcuc2VydmVyVXJsLFxuICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuLFxuICAgICAgICBzc2w6IGNvbmZpZy5zZXJ2ZXJVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSByZWdpc3RlclRva2VuIGZhaWxlZCcsIGUpXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgamltdU1hcFZpZXcudmlldy53aGVuKCksXG4gICAgICBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoJ3ZpZXcgdGltZW91dCcpKSwgMTUwMDApKVxuICAgIF0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSB2aWV3LndoZW4nLCBlKVxuICB9XG5cbiAgY29uc3QgbWFwID0gamltdU1hcFZpZXcudmlldy5tYXBcbiAgY29uc3QgaW5pdGlhbFZpZXdwb2ludCA9IGppbXVNYXBWaWV3LnZpZXcudmlld3BvaW50Py5jbG9uZSgpID8/IG51bGxcblxuICBjb25zdCB0YXJnZXRzID0ge1xuICAgIHN1Yjogbm9ybWFsaXplKGNvbmZpZy5zdWJCYWNpYXNVcmwpLFxuICAgIGluZDogbm9ybWFsaXplKGNvbmZpZy5pbmRpY2VVcmwpLFxuICAgIGMyNDU6IG5vcm1hbGl6ZShjb25maWcuY2VuYXJpb0dyYW5kZTI0NVVybCksXG4gICAgYzU4NTogbm9ybWFsaXplKGNvbmZpZy5jZW5hcmlvR3JhbmRlNTg1VXJsKVxuICB9XG5cbiAgY29uc3QgZmluZEJ5VXJsID0gKHRhcmdldDogc3RyaW5nKTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPT4ge1xuICAgIGxldCBmb3VuZDogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPSBudWxsXG4gICAgbWFwLmFsbExheWVycy5mb3JFYWNoKChsYXllcjogYW55KSA9PiB7XG4gICAgICBpZiAoZm91bmQpIHJldHVyblxuICAgICAgaWYgKGxheWVyPy50eXBlID09PSAnZmVhdHVyZScgJiYgbGF5ZXIudXJsKSB7XG4gICAgICAgIGNvbnN0IGxheWVyVXJsID0gbGF5ZXIubGF5ZXJJZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBgJHtsYXllci51cmx9LyR7bGF5ZXIubGF5ZXJJZH1gXG4gICAgICAgICAgOiBsYXllci51cmxcbiAgICAgICAgaWYgKG5vcm1hbGl6ZShsYXllclVybCkgPT09IHRhcmdldCkgZm91bmQgPSBsYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm91bmRcbiAgfVxuXG4gIGNvbnN0IGVuc3VyZUxheWVyID0gKFxuICAgIGV4aXN0aW5nOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHZpc2libGUgPSB0cnVlXG4gICk6IHsgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsIG93bmVkOiBib29sZWFuIH0gPT4ge1xuICAgIGlmIChleGlzdGluZykgcmV0dXJuIHsgbGF5ZXI6IGV4aXN0aW5nLCBvd25lZDogZmFsc2UgfVxuICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7IHVybCwgdGl0bGUsIG91dEZpZWxkczogWycqJ10sIHZpc2libGUgfSlcbiAgICBtYXAuYWRkKGxheWVyKVxuICAgIHJldHVybiB7IGxheWVyLCBvd25lZDogdHJ1ZSB9XG4gIH1cblxuICBjb25zdCBzdWJSZXN1bHQgPSBlbnN1cmVMYXllcihmaW5kQnlVcmwodGFyZ2V0cy5zdWIpLCBjb25maWcuc3ViQmFjaWFzVXJsLCAnU3ViLWJhY2lhcycsIHRydWUpXG4gIGNvbnN0IGluZFJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmluZCksIGNvbmZpZy5pbmRpY2VVcmwsICfDjW5kaWNlIGRlIENvbmZsaXRvJywgdHJ1ZSlcbiAgY29uc3QgYzI0NVJlc3VsdCA9IGVuc3VyZUxheWVyKGZpbmRCeVVybCh0YXJnZXRzLmMyNDUpLCBjb25maWcuY2VuYXJpb0dyYW5kZTI0NVVybCwgJ0NlbsOhcmlvIE1vZGVyYWRvIC0gUmlvIEdyYW5kZScsIGZhbHNlKVxuICBjb25zdCBjNTg1UmVzdWx0ID0gZW5zdXJlTGF5ZXIoZmluZEJ5VXJsKHRhcmdldHMuYzU4NSksIGNvbmZpZy5jZW5hcmlvR3JhbmRlNTg1VXJsLCAnQ2Vuw6FyaW8gUGVzc2ltaXN0YSAtIFJpbyBHcmFuZGUnLCBmYWxzZSlcblxuICBzdWJSZXN1bHQubGF5ZXIub3BhY2l0eSA9IDAuNlxuXG4gIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBzdWJSZXN1bHQubGF5ZXIubG9hZCgpLFxuICAgIGluZFJlc3VsdC5sYXllci5sb2FkKClcbiAgXSlcblxuICBhd2FpdCBjMjQ1UmVzdWx0LmxheWVyLmxvYWQoKS5jYXRjaCgoKSA9PiB7fSlcbiAgYXdhaXQgYzU4NVJlc3VsdC5sYXllci5sb2FkKCkuY2F0Y2goKCkgPT4ge30pXG5cbiAgY29uc3Qgd2lkZ2V0VXJscyA9IG5ldyBTZXQoW3RhcmdldHMuc3ViLCB0YXJnZXRzLmluZCwgdGFyZ2V0cy5jMjQ1LCB0YXJnZXRzLmM1ODVdKVxuICBjb25zdCBleHRyYUxheWVyczogQXJyYXk8eyBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllciwgb3JpZ2luYWxWaXNpYmxlOiBib29sZWFuIH0+ID0gW11cbiAgY29uc3QgaXNFeHRyYSA9ICh0aXRsZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgdCA9ICh0aXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiAvcGl2W2/DtF0vaS50ZXN0KHQpIHx8IC9taWNyb2JhYy9pLnRlc3QodCkgfHwgL2lycmlnYWQvaS50ZXN0KHQpXG4gIH1cbiAgbWFwLmFsbExheWVycy5mb3JFYWNoKChsYXllcjogYW55KSA9PiB7XG4gICAgaWYgKGxheWVyPy50eXBlICE9PSAnZmVhdHVyZScpIHJldHVyblxuICAgIGNvbnN0IGxheWVyVXJsID0gbGF5ZXIudXJsXG4gICAgICA/IChsYXllci5sYXllcklkICE9PSB1bmRlZmluZWQgPyBgJHtsYXllci51cmx9LyR7bGF5ZXIubGF5ZXJJZH1gIDogbGF5ZXIudXJsKVxuICAgICAgOiAnJ1xuICAgIGlmICh3aWRnZXRVcmxzLmhhcyhub3JtYWxpemUobGF5ZXJVcmwpKSkgcmV0dXJuXG4gICAgaWYgKGlzRXh0cmEobGF5ZXIudGl0bGUpKSB7XG4gICAgICBleHRyYUxheWVycy5wdXNoKHsgbGF5ZXIsIG9yaWdpbmFsVmlzaWJsZTogISFsYXllci52aXNpYmxlIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgbGF5ZXJzOiB7XG4gICAgICBzdWJCYWNpYXM6IHN1YlJlc3VsdC5sYXllcixcbiAgICAgIGluZGljZTogaW5kUmVzdWx0LmxheWVyLFxuICAgICAgY2VuYXJpb0dyYW5kZTI0NTogYzI0NVJlc3VsdC5sYXllcixcbiAgICAgIGNlbmFyaW9HcmFuZGU1ODU6IGM1ODVSZXN1bHQubGF5ZXJcbiAgICB9LFxuICAgIG93bmVkOiB7XG4gICAgICBzdWJCYWNpYXM6IHN1YlJlc3VsdC5vd25lZCxcbiAgICAgIGluZGljZTogaW5kUmVzdWx0Lm93bmVkLFxuICAgICAgY2VuYXJpb0dyYW5kZTI0NTogYzI0NVJlc3VsdC5vd25lZCxcbiAgICAgIGNlbmFyaW9HcmFuZGU1ODU6IGM1ODVSZXN1bHQub3duZWRcbiAgICB9LFxuICAgIGV4dHJhTGF5ZXJzLFxuICAgIGluaXRpYWxWaWV3cG9pbnQsXG4gICAgcmVhZHk6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlT3duZWRMYXllcnMgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyB8IG51bGwsIHN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbCkge1xuICBpZiAoIWppbXVNYXBWaWV3IHx8ICFzdGF0ZSkgcmV0dXJuXG4gIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXc/Lm1hcFxuICBpZiAoIW1hcCkgcmV0dXJuXG4gIGNvbnN0IHsgbGF5ZXJzLCBvd25lZCB9ID0gc3RhdGVcbiAgaWYgKGxheWVycy5zdWJCYWNpYXMgJiYgb3duZWQuc3ViQmFjaWFzKSBtYXAucmVtb3ZlKGxheWVycy5zdWJCYWNpYXMpXG4gIGlmIChsYXllcnMuaW5kaWNlICYmIG93bmVkLmluZGljZSkgbWFwLnJlbW92ZShsYXllcnMuaW5kaWNlKVxuICBpZiAobGF5ZXJzLmNlbmFyaW9HcmFuZGUyNDUgJiYgb3duZWQuY2VuYXJpb0dyYW5kZTI0NSkgbWFwLnJlbW92ZShsYXllcnMuY2VuYXJpb0dyYW5kZTI0NSlcbiAgaWYgKGxheWVycy5jZW5hcmlvR3JhbmRlNTg1ICYmIG93bmVkLmNlbmFyaW9HcmFuZGU1ODUpIG1hcC5yZW1vdmUobGF5ZXJzLmNlbmFyaW9HcmFuZGU1ODUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseVNjZW5hcmlvVG9NYXAgKFxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXG4gIHN0YXRlOiBNYXBMYXllclN0YXRlLFxuICBjb25maWc6IENvbmZpZyxcbiAgY2VuYXJpbzogQ2VuYXJpb0lkLFxuICBwbnJoMjogc3RyaW5nLFxuICBzdWJCYWNpYTogc3RyaW5nLFxuICB6b29tID0gdHJ1ZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgc3ViQmFjaWFzLCBpbmRpY2UsIGNlbmFyaW9HcmFuZGUyNDUsIGNlbmFyaW9HcmFuZGU1ODUgfSA9IHN0YXRlLmxheWVyc1xuICBpZiAoIWluZGljZSB8fCAhc3ViQmFjaWFzKSByZXR1cm5cblxuICBjb25zdCBpc0F0dWFsID0gY2VuYXJpbyA9PT0gJ2F0dWFsJ1xuICBpbmRpY2UudmlzaWJsZSA9IGlzQXR1YWxcbiAgaWYgKGNlbmFyaW9HcmFuZGUyNDUpIGNlbmFyaW9HcmFuZGUyNDUudmlzaWJsZSA9IGNlbmFyaW8gPT09ICdzc3AyNDUnXG4gIGlmIChjZW5hcmlvR3JhbmRlNTg1KSBjZW5hcmlvR3JhbmRlNTg1LnZpc2libGUgPSBjZW5hcmlvID09PSAnc3NwNTg1J1xuXG4gIGNvbnN0IGluQ2VuYXJpb01vZGUgPSBjZW5hcmlvICE9PSAnYXR1YWwnIHx8IEJvb2xlYW4ocG5yaDIpIHx8IEJvb2xlYW4oc3ViQmFjaWEpXG4gIHN0YXRlLmV4dHJhTGF5ZXJzLmZvckVhY2goKHsgbGF5ZXIsIG9yaWdpbmFsVmlzaWJsZSB9KSA9PiB7XG4gICAgdHJ5IHsgbGF5ZXIudmlzaWJsZSA9IGluQ2VuYXJpb01vZGUgPyBmYWxzZSA6IG9yaWdpbmFsVmlzaWJsZSB9IGNhdGNoIHt9XG4gIH0pXG5cbiAgY29uc3Qgd2hlcmUgPSBidWlsZFdoZXJlKGNvbmZpZywgcG5yaDIsIHN1YkJhY2lhKVxuICBjb25zdCBleHByZXNzaW9uID0gd2hlcmUgIT09ICcxPTEnID8gd2hlcmUgOiAnJ1xuXG4gIGluZGljZS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25cbiAgaWYgKGNlbmFyaW9HcmFuZGUyNDUpIGNlbmFyaW9HcmFuZGUyNDUuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG4gIGlmIChjZW5hcmlvR3JhbmRlNTg1KSBjZW5hcmlvR3JhbmRlNTg1LmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvblxuICBzdWJCYWNpYXMuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uXG5cbiAgaWYgKCF6b29tKSByZXR1cm5cblxuICB0cnkge1xuICAgIGNvbnN0IHpvb21MYXllciA9IGNvbmZpZy56b29tTGF5ZXIgPT09ICdpbmRpY2UnID8gaW5kaWNlIDogc3ViQmFjaWFzXG4gICAgY29uc3Qgem9vbVdoZXJlID0gZXhwcmVzc2lvbiB8fCAnMT0xJ1xuICAgIGNvbnN0IGV4dGVudFJlc3VsdCA9IGF3YWl0IHpvb21MYXllci5xdWVyeUV4dGVudCh7IHdoZXJlOiB6b29tV2hlcmUgfSlcbiAgICBpZiAoZXh0ZW50UmVzdWx0Py5leHRlbnQpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XG4gICAgICBjb25zdCB0YXJnZXRFeHRlbnQgPSBleHRlbnRSZXN1bHQuZXh0ZW50LmV4cGFuZCgxLjIpXG4gICAgICBhd2FpdCB2aWV3LmdvVG8odGFyZ2V0RXh0ZW50LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gICAgICBjb25zdCBsaW1pdFNjYWxlID0gTWF0aC5tYXgoc3ViQmFjaWFzLm1heFNjYWxlIHx8IDAsIGluZGljZS5tYXhTY2FsZSB8fCAwKVxuICAgICAgaWYgKGxpbWl0U2NhbGUgPiAwICYmIHZpZXcuc2NhbGUgPCBsaW1pdFNjYWxlKSB7XG4gICAgICAgIGF3YWl0IHZpZXcuZ29Ubyh7IHRhcmdldDogdGFyZ2V0RXh0ZW50LmNlbnRlciwgc2NhbGU6IGxpbWl0U2NhbGUgKiAxLjEgfSwgeyBhbmltYXRlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignW2NvbXBhcmUtY2VuYXJpb3NdIHpvb20gZXJyb3InLCBlKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN0b3JlSW5pdGlhbFZpZXcgKFxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXG4gIHN0YXRlOiBNYXBMYXllclN0YXRlXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBzdWJCYWNpYXMsIGluZGljZSwgY2VuYXJpb0dyYW5kZTI0NSwgY2VuYXJpb0dyYW5kZTU4NSB9ID0gc3RhdGUubGF5ZXJzXG4gIGlmIChpbmRpY2UpIHtcbiAgICBpbmRpY2UudmlzaWJsZSA9IHRydWVcbiAgICBpbmRpY2UuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xuICB9XG4gIGlmIChjZW5hcmlvR3JhbmRlMjQ1KSB7XG4gICAgY2VuYXJpb0dyYW5kZTI0NS52aXNpYmxlID0gZmFsc2VcbiAgICBjZW5hcmlvR3JhbmRlMjQ1LmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgfVxuICBpZiAoY2VuYXJpb0dyYW5kZTU4NSkge1xuICAgIGNlbmFyaW9HcmFuZGU1ODUudmlzaWJsZSA9IGZhbHNlXG4gICAgY2VuYXJpb0dyYW5kZTU4NS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXG4gIH1cbiAgaWYgKHN1YkJhY2lhcykgc3ViQmFjaWFzLmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcbiAgc3RhdGUuZXh0cmFMYXllcnMuZm9yRWFjaCgoeyBsYXllciwgb3JpZ2luYWxWaXNpYmxlIH0pID0+IHtcbiAgICB0cnkgeyBsYXllci52aXNpYmxlID0gb3JpZ2luYWxWaXNpYmxlIH0gY2F0Y2gge31cbiAgfSlcbiAgaWYgKHN0YXRlLmluaXRpYWxWaWV3cG9pbnQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgamltdU1hcFZpZXcudmlldy5nb1RvKHN0YXRlLmluaXRpYWxWaWV3cG9pbnQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tjb21wYXJlLWNlbmFyaW9zXSByZXN0b3JlIHZpZXdwb2ludCcsIGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQmFzaW5PcHRpb25zIChcbiAgc3ViQmFjaWFzOiBfX2VzcmkuRmVhdHVyZUxheWVyLFxuICBjb25maWc6IENvbmZpZ1xuKTogUHJvbWlzZTx7XG4gIGFsbFBucmgyOiBzdHJpbmdbXVxuICBhbGxTdWJCYWNpYXM6IHN0cmluZ1tdXG4gIHN1YkJhY2lhVG9QbnJoMjogTWFwPHN0cmluZywgc3RyaW5nPlxuICBwbnJoMlRvU3ViQmFjaWFzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT5cbn0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3ViQmFjaWFzLnF1ZXJ5RmVhdHVyZXMoe1xuICAgIHdoZXJlOiAnMT0xJyxcbiAgICBvdXRGaWVsZHM6IFtjb25maWcucG5yaDJGaWVsZCwgY29uZmlnLnN1YkJhY2lhRmllbGRdLFxuICAgIHJldHVybkRpc3RpbmN0VmFsdWVzOiB0cnVlLFxuICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICBvcmRlckJ5RmllbGRzOiBbY29uZmlnLnBucmgyRmllbGQsIGNvbmZpZy5zdWJCYWNpYUZpZWxkXVxuICB9KVxuXG4gIGNvbnN0IHN1YkJhY2lhVG9QbnJoMiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgY29uc3QgcG5yaDJUb1N1YkJhY2lhcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKVxuICBjb25zdCBhbGxQbnJoU2V0ID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3QgYWxsU3Vic1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgZm9yIChjb25zdCBmZWF0IG9mIHJlc3VsdC5mZWF0dXJlcykge1xuICAgIGNvbnN0IHAgPSBmZWF0LmF0dHJpYnV0ZXM/Lltjb25maWcucG5yaDJGaWVsZF1cbiAgICBjb25zdCBzID0gZmVhdC5hdHRyaWJ1dGVzPy5bY29uZmlnLnN1YkJhY2lhRmllbGRdXG4gICAgY29uc3QgcFN0ciA9IHAgIT0gbnVsbCAmJiBwICE9PSAnJyA/IFN0cmluZyhwKSA6ICcnXG4gICAgY29uc3Qgc1N0ciA9IHMgIT0gbnVsbCAmJiBzICE9PSAnJyA/IFN0cmluZyhzKSA6ICcnXG4gICAgaWYgKHBTdHIpIGFsbFBucmhTZXQuYWRkKHBTdHIpXG4gICAgaWYgKHNTdHIpIGFsbFN1YnNTZXQuYWRkKHNTdHIpXG4gICAgaWYgKHBTdHIgJiYgc1N0cikge1xuICAgICAgc3ViQmFjaWFUb1BucmgyLnNldChzU3RyLCBwU3RyKVxuICAgICAgY29uc3QgYXJyID0gcG5yaDJUb1N1YkJhY2lhcy5nZXQocFN0cikgfHwgW11cbiAgICAgIGlmICghYXJyLmluY2x1ZGVzKHNTdHIpKSBhcnIucHVzaChzU3RyKVxuICAgICAgcG5yaDJUb1N1YkJhY2lhcy5zZXQocFN0ciwgYXJyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWxsUG5yaDI6IEFycmF5LmZyb20oYWxsUG5yaFNldCkuc29ydCgpLFxuICAgIGFsbFN1YkJhY2lhczogQXJyYXkuZnJvbShhbGxTdWJzU2V0KS5zb3J0KCksXG4gICAgc3ViQmFjaWFUb1BucmgyLFxuICAgIHBucmgyVG9TdWJCYWNpYXNcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgdHlwZSB7IENlbmFyaW9JZCwgTGF5ZXJSZWZzIH0gZnJvbSAnLi9tYXBMYXllcnMnXG5pbXBvcnQgeyBidWlsZFdoZXJlIH0gZnJvbSAnLi9tYXBMYXllcnMnXG5pbXBvcnQgeyBjbGFzc1NldmVyaXR5IH0gZnJvbSAnLi9sZWdlbmRVdGlscydcblxuZXhwb3J0IGludGVyZmFjZSBDbGFzc0NvdW50IHtcbiAgY2xhc3NlOiBzdHJpbmdcbiAgY291bnQ6IG51bWJlclxuICBzZXZlcml0eTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ViQmFjaWFDb3VudCB7XG4gIHN1YkJhY2lhOiBzdHJpbmdcbiAgdG90YWw6IG51bWJlclxuICBjcml0aWNhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VuYXJpb1N0YXRzIHtcbiAgY2xhc3NlczogQ2xhc3NDb3VudFtdXG4gIGJ5U3ViQmFjaWE6IFN1YkJhY2lhQ291bnRbXVxuICB0b3RhbDogbnVtYmVyXG4gIGNyaXRpY2FsOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGxDZW5hcmlvc1N0YXRzIHtcbiAgYXR1YWw6IENlbmFyaW9TdGF0c1xuICBzc3AyNDU6IENlbmFyaW9TdGF0c1xuICBzc3A1ODU6IENlbmFyaW9TdGF0c1xufVxuXG5jb25zdCBlbXB0eVN0YXRzID0gKCk6IENlbmFyaW9TdGF0cyA9PiAoe1xuICBjbGFzc2VzOiBbXSxcbiAgYnlTdWJCYWNpYTogW10sXG4gIHRvdGFsOiAwLFxuICBjcml0aWNhbDogMFxufSlcblxuZXhwb3J0IGNvbnN0IGNvdW50RmVhdHVyZXNCeUNsYXNzID0gKFxuICBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSxcbiAgZmllbGROYW1lOiBzdHJpbmdcbik6IENsYXNzQ291bnRbXSA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICBjb25zdCByYXcgPSBmLmF0dHJpYnV0ZXM/LltmaWVsZE5hbWVdXG4gICAgY29uc3QgY2xhc3NlID0gcmF3ICE9IG51bGwgJiYgcmF3ICE9PSAnJyA/IFN0cmluZyhyYXcpLnRyaW0oKSA6ICdzZW0nXG4gICAgbWFwLnNldChjbGFzc2UsIChtYXAuZ2V0KGNsYXNzZSkgfHwgMCkgKyAxKVxuICB9KVxuICByZXR1cm4gQXJyYXkuZnJvbShtYXAuZW50cmllcygpKVxuICAgIC5tYXAoKFtjbGFzc2UsIGNvdW50XSkgPT4gKHsgY2xhc3NlLCBjb3VudCwgc2V2ZXJpdHk6IGNsYXNzU2V2ZXJpdHkoY2xhc3NlKSB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zZXZlcml0eSAtIGEuc2V2ZXJpdHkgfHwgYi5jb3VudCAtIGEuY291bnQpXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZENlbmFyaW9TdGF0cyA9IChcbiAgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sXG4gIGNsYXNzZUZpZWxkOiBzdHJpbmcsXG4gIHN1YkJhY2lhRmllbGQ6IHN0cmluZ1xuKTogQ2VuYXJpb1N0YXRzID0+IHtcbiAgY29uc3QgYnlTdWIgPSBuZXcgTWFwPHN0cmluZywgeyB0b3RhbDogbnVtYmVyLCBjcml0aWNhbDogbnVtYmVyIH0+KClcbiAgbGV0IHRvdGFsID0gMFxuICBsZXQgY3JpdGljYWwgPSAwXG5cbiAgZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICBjb25zdCBzdWIgPSBTdHJpbmcoZi5hdHRyaWJ1dGVzPy5bc3ViQmFjaWFGaWVsZF0gPz8gJycpLnRyaW0oKSB8fCAn4oCUJ1xuICAgIGNvbnN0IGNsYXNzZVJhdyA9IGYuYXR0cmlidXRlcz8uW2NsYXNzZUZpZWxkXVxuICAgIGNvbnN0IGNsYXNzZSA9IGNsYXNzZVJhdyAhPSBudWxsICYmIGNsYXNzZVJhdyAhPT0gJycgPyBTdHJpbmcoY2xhc3NlUmF3KS50cmltKCkgOiAnc2VtJ1xuICAgIGNvbnN0IHNldiA9IGNsYXNzU2V2ZXJpdHkoY2xhc3NlKVxuICAgIHRvdGFsICs9IDFcbiAgICBpZiAoc2V2ID49IDMpIGNyaXRpY2FsICs9IDFcbiAgICBjb25zdCBlID0gYnlTdWIuZ2V0KHN1YikgfHwgeyB0b3RhbDogMCwgY3JpdGljYWw6IDAgfVxuICAgIGUudG90YWwgKz0gMVxuICAgIGlmIChzZXYgPj0gMykgZS5jcml0aWNhbCArPSAxXG4gICAgYnlTdWIuc2V0KHN1YiwgZSlcbiAgfSlcblxuICBjb25zdCBieVN1YkFyciA9IEFycmF5LmZyb20oYnlTdWIuZW50cmllcygpKVxuICAgIC5tYXAoKFtzdWJCYWNpYSwgaW5mb10pID0+ICh7IHN1YkJhY2lhLCB0b3RhbDogaW5mby50b3RhbCwgY3JpdGljYWw6IGluZm8uY3JpdGljYWwgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuY3JpdGljYWwgLSBhLmNyaXRpY2FsIHx8IGIudG90YWwgLSBhLnRvdGFsKVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NlczogY291bnRGZWF0dXJlc0J5Q2xhc3MoZmVhdHVyZXMsIGNsYXNzZUZpZWxkKSxcbiAgICBieVN1YkJhY2lhOiBieVN1YkFycixcbiAgICB0b3RhbCxcbiAgICBjcml0aWNhbFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2VuYXJpb3NTdGF0cyAoXG4gIGxheWVyczogTGF5ZXJSZWZzLFxuICBjb25maWc6IENvbmZpZyxcbiAgcG5yaDI6IHN0cmluZyxcbiAgc3ViQmFjaWE6IHN0cmluZ1xuKTogUHJvbWlzZTxBbGxDZW5hcmlvc1N0YXRzPiB7XG4gIGNvbnN0IHsgaW5kaWNlLCBjZW5hcmlvR3JhbmRlMjQ1LCBjZW5hcmlvR3JhbmRlNTg1IH0gPSBsYXllcnNcbiAgY29uc3Qgd2hlcmUgPSBidWlsZFdoZXJlKGNvbmZpZywgcG5yaDIsIHN1YkJhY2lhKVxuICBjb25zdCBleHByZXNzaW9uID0gd2hlcmUgIT09ICcxPTEnID8gd2hlcmUgOiAnMT0xJ1xuICBjb25zdCBzdWJGaWVsZCA9IGNvbmZpZy5zdWJCYWNpYUZpZWxkXG5cbiAgY29uc3QgW3Jlc0F0dWFsLCByZXMyNDUsIHJlczU4NV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgaW5kaWNlXG4gICAgICA/IGluZGljZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgd2hlcmU6IGV4cHJlc3Npb24sXG4gICAgICAgIG91dEZpZWxkczogW2NvbmZpZy5jbGFzc2VGaWVsZCwgc3ViRmllbGRdLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIG51bTogNTAwMDBcbiAgICAgIH0pXG4gICAgICA6IFByb21pc2UucmVzb2x2ZShudWxsKSxcbiAgICBjZW5hcmlvR3JhbmRlMjQ1XG4gICAgICA/IGNlbmFyaW9HcmFuZGUyNDUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHdoZXJlOiBleHByZXNzaW9uLFxuICAgICAgICBvdXRGaWVsZHM6IFtjb25maWcuY2xhc3NlRmllbGQyNDUsIHN1YkZpZWxkXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBudW06IDUwMDAwXG4gICAgICB9KVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUobnVsbCksXG4gICAgY2VuYXJpb0dyYW5kZTU4NVxuICAgICAgPyBjZW5hcmlvR3JhbmRlNTg1LnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICB3aGVyZTogZXhwcmVzc2lvbixcbiAgICAgICAgb3V0RmllbGRzOiBbY29uZmlnLmNsYXNzZUZpZWxkNTg1LCBzdWJGaWVsZF0sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgbnVtOiA1MDAwMFxuICAgICAgfSlcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBhdHVhbDogcmVzQXR1YWwgPyBidWlsZENlbmFyaW9TdGF0cyhyZXNBdHVhbC5mZWF0dXJlcywgY29uZmlnLmNsYXNzZUZpZWxkLCBzdWJGaWVsZCkgOiBlbXB0eVN0YXRzKCksXG4gICAgc3NwMjQ1OiByZXMyNDUgPyBidWlsZENlbmFyaW9TdGF0cyhyZXMyNDUuZmVhdHVyZXMsIGNvbmZpZy5jbGFzc2VGaWVsZDI0NSwgc3ViRmllbGQpIDogZW1wdHlTdGF0cygpLFxuICAgIHNzcDU4NTogcmVzNTg1ID8gYnVpbGRDZW5hcmlvU3RhdHMocmVzNTg1LmZlYXR1cmVzLCBjb25maWcuY2xhc3NlRmllbGQ1ODUsIHN1YkZpZWxkKSA6IGVtcHR5U3RhdHMoKVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIENlbmFyaW9NZXNzYWdlcyA9IHtcbiAgY2VuYXJpb0F0dWFsOiBzdHJpbmdcbiAgY2VuYXJpb1NzcDI0NTogc3RyaW5nXG4gIGNlbmFyaW9Tc3A1ODU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgY2VuYXJpb0lkVG9MYWJlbCA9IChpZDogQ2VuYXJpb0lkLCBtZXNzYWdlczogQ2VuYXJpb01lc3NhZ2VzKTogc3RyaW5nID0+IHtcbiAgaWYgKGlkID09PSAnc3NwMjQ1JykgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9Tc3AyNDVcbiAgaWYgKGlkID09PSAnc3NwNTg1JykgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODVcbiAgcmV0dXJuIG1lc3NhZ2VzLmNlbmFyaW9BdHVhbFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdDb21wYXJhciBDZW7DoXJpb3MnLFxuICBzZWxlY3RNYXBzRmlyc3Q6ICdDb25maWd1cmUgb3MgZG9pcyBtYXBhcyBuYXMgY29uZmlndXJhw6fDtWVzIGRvIHdpZGdldC4nLFxuICBzZWxlY3RMZWZ0TWFwOiAnU2VsZWNpb25lIG8gbWFwYSBkYSBlc3F1ZXJkYScsXG4gIHNlbGVjdFJpZ2h0TWFwOiAnU2VsZWNpb25lIG8gbWFwYSBkYSBkaXJlaXRhJyxcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxuICBwbnJoMkxhYmVsOiAnQmFjaWEgaGlkcm9ncsOhZmljYScsXG4gIHN1YkJhY2lhTGFiZWw6ICdTdWItYmFjaWEnLFxuICBzZWxlY3RQbnJoMjogJ1NlbGVjaW9uZScsXG4gIHNlbGVjdFN1YkJhY2lhOiAnU2VsZWNpb25lIHVtYSBzdWItYmFjaWEnLFxuICBtYXBMZWZ0TGFiZWw6ICdNYXBhIGVzcXVlcmRvJyxcbiAgbWFwUmlnaHRMYWJlbDogJ01hcGEgZGlyZWl0bycsXG4gIGNlbmFyaW9BdHVhbDogJ0F0dWFsJyxcbiAgY2VuYXJpb1NzcDI0NTogJ01vZGVyYWRvJyxcbiAgY2VuYXJpb1NzcDU4NTogJ1Blc3NpbWlzdGEnLFxuICBzZWxlY3RDZW5hcmlvOiAnU2VsZWNpb25lIHVtIGNlbsOhcmlvJyxcbiAgY2xlYXI6ICdMaW1wYXInLFxuICBlcnJvckxvYWRpbmc6ICdFcnJvIGFvIGNhcnJlZ2FyIHZhbG9yZXMgZGFzIGNhbWFkYXMuJyxcbiAgZXJyb3JDb3JzOiAnRmFsaGEgZGUgQ09SUzogbyBzZXJ2aWRvciBBcmNHSVMgbsOjbyBwZXJtaXRlIGNoYW1hZGFzIGRlc3RhIG9yaWdlbS4nLFxuICBlcnJvckF1dGg6ICdBIGNhbWFkYSBleGlnZSBhdXRlbnRpY2HDp8Ojby4gQ29tcGFydGlsaGUgb3MgaXRlbnMgY29tbyBww7pibGljb3Mgb3UgZmHDp2EgbG9naW4uJyxcbiAgc2NlbmFyaW9XYXJuaW5nOiAnQ2Vuw6FyaW9zIE1vZGVyYWRvIGUgUGVzc2ltaXN0YTogZGFkb3MgZGEgQmFjaWEgZG8gUmlvIEdyYW5kZS4nLFxuICBjb21wYXJlVGl0bGU6ICdDb21wYXJhciBjZW7DoXJpb3MnLFxuICBzeW5jVmlld3M6ICdTaW5jcm9uaXphciBtYXBhcycsXG4gIGxlZ2VuZFRpdGxlOiAnTGVnZW5kYScsXG4gIGxlZ2VuZEVtcHR5OiAnTGVnZW5kYSBpbmRpc3BvbsOtdmVsIOKAlCBhZ3VhcmRlIG8gY2FycmVnYW1lbnRvIGRhcyBjYW1hZGFzLicsXG4gIGNlbmFyaW9CYWNpYUxhYmVsOiAnQmFjaWEnLFxuICBjZW5hcmlvU3ViQmFjaWFMYWJlbDogJ1N1Yi1iYWNpYScsXG4gIGNlbmFyaW9zTG9hZGluZzogJ0NhbGN1bGFuZG8gdHJlY2hvcyBwb3IgY2xhc3NlLi4uJyxcbiAgY2VuYXJpb3NTZWxlY3RGaWx0ZXI6ICdTZWxlY2lvbmUgYmFjaWEgZS9vdSBzdWItYmFjaWEgcGFyYSB2ZXIgYSBjb21wYXJhw6fDo28uJyxcbiAgY2VuYXJpb3NDaGFydFRpdGxlOiAnVHJlY2hvcyBwb3IgY2xhc3NlIGVtIGNhZGEgY2Vuw6FyaW8nLFxuICBjZW5hcmlvc05vRGF0YTogJ1NlbSBkYWRvcyBwYXJhIGEgcmVnacOjbyBzZWxlY2lvbmFkYS4nLFxuICBwYW5lbFdhaXRpbmdGb3JGaWx0ZXJzOiAnQWd1YXJkYW5kbyBvIHdpZGdldCBkZSBmaWx0cm9zIG5hIG1lc21hIHDDoWdpbmEuJyxcbiAgcGFuZWxMaW5rR3JvdXBIaW50OiAnVXNlIG8gbWVzbW8gSUQgZGUgdsOtbmN1bG86J1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBjc3MsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IHsgRmlsdGVyQmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlckJhcidcbmltcG9ydCB7IENvbnRlbnRQYW5lbCB9IGZyb20gJy4vY29tcG9uZW50cy9Db250ZW50UGFuZWwnXG5pbXBvcnQge1xuICBnZXRDb21wYXJlQnJpZGdlU25hcHNob3QsXG4gIHJlY29yZFRvQ2xhc3NDb2xvcnMsXG4gIHN1YnNjcmliZUNvbXBhcmVCcmlkZ2UsXG4gIHVwZGF0ZUNvbXBhcmVCcmlkZ2Vcbn0gZnJvbSAnLi9jb21wYXJlQ2VuYXJpb3NCcmlkZ2UnXG5pbXBvcnQge1xuICB0eXBlIENlbmFyaW9JZCxcbiAgdHlwZSBNYXBMYXllclN0YXRlLFxuICBhcHBseVNjZW5hcmlvVG9NYXAsXG4gIGluaXRNYXBMYXllcnMsXG4gIGxvYWRCYXNpbk9wdGlvbnMsXG4gIG1lcmdlQ29uZmlnLFxuICByZW1vdmVPd25lZExheWVycyxcbiAgcmVzdG9yZUluaXRpYWxWaWV3XG59IGZyb20gJy4vbWFwTGF5ZXJzJ1xuaW1wb3J0IHsgYnVpbGRMZWdlbmRHcm91cHMsIGV4dHJhY3RDbGFzc0NvbG9ycywgdHlwZSBMZWdlbmRHcm91cCB9IGZyb20gJy4vbGVnZW5kVXRpbHMnXG5pbXBvcnQgeyBsb2FkQ2VuYXJpb3NTdGF0cywgdHlwZSBBbGxDZW5hcmlvc1N0YXRzIH0gZnJvbSAnLi9zY2VuYXJpb1N0YXRzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSA9IFJlYWN0XG5cbmNvbnN0IGNlbmFyaW9MYWJlbCA9IChpZDogQ2VuYXJpb0lkKTogc3RyaW5nID0+IHtcbiAgaWYgKGlkID09PSAnc3NwMjQ1JykgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwMjQ1XG4gIGlmIChpZCA9PT0gJ3NzcDU4NScpIHJldHVybiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDU4NVxuICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9BdHVhbFxufVxuXG5jb25zdCBsYWJlbFRvQ2VuYXJpbyA9IChsYWJlbDogc3RyaW5nKTogQ2VuYXJpb0lkID0+IHtcbiAgaWYgKGxhYmVsID09PSBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDI0NSkgcmV0dXJuICdzc3AyNDUnXG4gIGlmIChsYWJlbCA9PT0gZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODUpIHJldHVybiAnc3NwNTg1J1xuICByZXR1cm4gJ2F0dWFsJ1xufVxuXG5jb25zdCBDRU5BUklPX09QVElPTlMgPSBbXG4gIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvQXR1YWwsXG4gIGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3NwMjQ1LFxuICBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb1NzcDU4NVxuXVxuXG5pbnRlcmZhY2UgTWFwU2xvdCB7XG4gIGptdjogSmltdU1hcFZpZXcgfCBudWxsXG4gIGxheWVyU3RhdGU6IE1hcExheWVyU3RhdGUgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBjb25maWcgPSBtZXJnZUNvbmZpZyhwcm9wcy5jb25maWcgYXMgUGFydGlhbDxJTUNvbmZpZz4gfCB1bmRlZmluZWQpXG4gIGNvbnN0IHdpZGdldFBhcnQgPSBjb25maWcud2lkZ2V0UGFydFxuICBjb25zdCBsaW5rR3JvdXBJZCA9IGNvbmZpZy5saW5rR3JvdXBJZFxuICBjb25zdCBpc1BhbmVsT25seSA9IHdpZGdldFBhcnQgPT09ICdwYW5lbCdcbiAgY29uc3QgaXNGaWx0ZXJzT25seSA9IHdpZGdldFBhcnQgPT09ICdmaWx0ZXJzJ1xuICBjb25zdCBpc0NvbWJpbmVkID0gd2lkZ2V0UGFydCA9PT0gJ2NvbWJpbmVkJ1xuICBjb25zdCBpc1B1Ymxpc2hlciA9IGlzRmlsdGVyc09ubHkgfHwgaXNDb21iaW5lZFxuXG4gIGNvbnN0IGxlZnRNYXBJZCA9IGNvbmZpZy5sZWZ0TWFwV2lkZ2V0SWQgfHwgcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF0gfHwgJydcbiAgY29uc3QgcmlnaHRNYXBJZCA9IGNvbmZpZy5yaWdodE1hcFdpZGdldElkIHx8IHByb3BzLnVzZU1hcFdpZGdldElkcz8uWzFdIHx8ICcnXG5cbiAgY29uc3QgW2xlZnQsIHNldExlZnRdID0gdXNlU3RhdGU8TWFwU2xvdD4oeyBqbXY6IG51bGwsIGxheWVyU3RhdGU6IG51bGwgfSlcbiAgY29uc3QgW3JpZ2h0LCBzZXRSaWdodF0gPSB1c2VTdGF0ZTxNYXBTbG90Pih7IGptdjogbnVsbCwgbGF5ZXJTdGF0ZTogbnVsbCB9KVxuXG4gIGNvbnN0IFthbGxQbnJoMiwgc2V0QWxsUG5yaDJdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbYWxsU3ViQmFjaWFzLCBzZXRBbGxTdWJCYWNpYXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbc2VsZWN0ZWRQbnJoMiwgc2V0U2VsZWN0ZWRQbnJoMl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlbGVjdGVkU3ViQmFjaWEsIHNldFNlbGVjdGVkU3ViQmFjaWFdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjZW5hcmlvTGVmdCwgc2V0Q2VuYXJpb0xlZnRdID0gdXNlU3RhdGU8Q2VuYXJpb0lkPignYXR1YWwnKVxuICBjb25zdCBbY2VuYXJpb1JpZ2h0LCBzZXRDZW5hcmlvUmlnaHRdID0gdXNlU3RhdGU8Q2VuYXJpb0lkPignYXR1YWwnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXRzTG9hZGluZywgc2V0U3RhdHNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2VuYXJpb3NTdGF0cywgc2V0Q2VuYXJpb3NTdGF0c10gPSB1c2VTdGF0ZTxBbGxDZW5hcmlvc1N0YXRzIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N5bmNWaWV3cywgc2V0U3luY1ZpZXdzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtsZWdlbmRHcm91cHMsIHNldExlZ2VuZEdyb3Vwc10gPSB1c2VTdGF0ZTxMZWdlbmRHcm91cFtdPihbXSlcbiAgY29uc3QgW2NsYXNzQ29sb3JzLCBzZXRDbGFzc0NvbG9yc10gPSB1c2VTdGF0ZTxNYXA8c3RyaW5nLCBzdHJpbmc+PihuZXcgTWFwKCkpXG5cbiAgY29uc3Qgc3ViQmFjaWFUb1BucmgyUmVmID0gdXNlUmVmPE1hcDxzdHJpbmcsIHN0cmluZz4+KG5ldyBNYXAoKSlcbiAgY29uc3QgcG5yaDJUb1N1YkJhY2lhc1JlZiA9IHVzZVJlZjxNYXA8c3RyaW5nLCBzdHJpbmdbXT4+KG5ldyBNYXAoKSlcbiAgY29uc3Qgc3luY2luZ1JlZiA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgYXBwbHlpbmdSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IGluaXRpYWxWaWV3U3luY2VkUmVmID0gdXNlUmVmKGZhbHNlKVxuICBjb25zdCBwcmV2RmlsdGVyUmVmID0gdXNlUmVmKHsgcG5yaDI6ICcnLCBzdWJCYWNpYTogJycgfSlcbiAgY29uc3Qgc3RhdHNMb2FkS2V5UmVmID0gdXNlUmVmKCcnKVxuXG4gIGNvbnN0IGhhc0JvdGhNYXBzID0gQm9vbGVhbihsZWZ0TWFwSWQgJiYgcmlnaHRNYXBJZClcbiAgY29uc3QgaGFzUmVnaW9uID0gQm9vbGVhbihzZWxlY3RlZFBucmgyIHx8IHNlbGVjdGVkU3ViQmFjaWEpXG4gIGNvbnN0IGhhc0FjdGl2ZUZpbHRlciA9IEJvb2xlYW4oXG4gICAgc2VsZWN0ZWRQbnJoMiB8fCBzZWxlY3RlZFN1YkJhY2lhIHx8IGNlbmFyaW9MZWZ0ICE9PSAnYXR1YWwnIHx8IGNlbmFyaW9SaWdodCAhPT0gJ2F0dWFsJ1xuICApXG5cbiAgY29uc3QgZGV0ZWN0RXJyb3IgPSAoZXJyOiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBlID0gZXJyIGFzIHsgbWVzc2FnZT86IHN0cmluZywgZGV0YWlscz86IHsgaHR0cFN0YXR1cz86IG51bWJlciwgZXJyb3I/OiB7IG1lc3NhZ2U/OiBzdHJpbmcgfSB9IH1cbiAgICBjb25zdCBtc2cgPSBgJHtlPy5tZXNzYWdlIHx8ICcnfSAke2U/LmRldGFpbHM/LmVycm9yPy5tZXNzYWdlIHx8ICcnfWAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChtc2cuaW5jbHVkZXMoJ2NvcnMnKSB8fCBtc2cuaW5jbHVkZXMoJ2Nyb3NzLW9yaWdpbicpIHx8IG1zZy5pbmNsdWRlcygnbmV0d29yaycpKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE1lc3NhZ2VzLmVycm9yQ29yc1xuICAgIH1cbiAgICBpZiAobXNnLmluY2x1ZGVzKCd0b2tlbicpIHx8IG1zZy5pbmNsdWRlcygndW5hdXRob3JpemVkJykgfHwgZT8uZGV0YWlscz8uaHR0cFN0YXR1cyA9PT0gNDAxIHx8IGU/LmRldGFpbHM/Lmh0dHBTdGF0dXMgPT09IDQwMykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5lcnJvckF1dGhcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRNZXNzYWdlcy5lcnJvckxvYWRpbmdcbiAgfVxuXG4gIGNvbnN0IGxvYWRPcHRpb25zRnJvbU1hcCA9IHVzZUNhbGxiYWNrKGFzeW5jIChsYXllclN0YXRlOiBNYXBMYXllclN0YXRlIHwgbnVsbCkgPT4ge1xuICAgIGlmICghbGF5ZXJTdGF0ZT8ubGF5ZXJzLnN1YkJhY2lhcykgcmV0dXJuXG4gICAgY29uc3Qgb3B0cyA9IGF3YWl0IGxvYWRCYXNpbk9wdGlvbnMobGF5ZXJTdGF0ZS5sYXllcnMuc3ViQmFjaWFzLCBjb25maWcpXG4gICAgc3ViQmFjaWFUb1BucmgyUmVmLmN1cnJlbnQgPSBvcHRzLnN1YkJhY2lhVG9QbnJoMlxuICAgIHBucmgyVG9TdWJCYWNpYXNSZWYuY3VycmVudCA9IG9wdHMucG5yaDJUb1N1YkJhY2lhc1xuICAgIHNldEFsbFBucmgyKG9wdHMuYWxsUG5yaDIpXG4gICAgc2V0QWxsU3ViQmFjaWFzKG9wdHMuYWxsU3ViQmFjaWFzKVxuICAgIHNldExlZ2VuZEdyb3VwcyhidWlsZExlZ2VuZEdyb3VwcyhsYXllclN0YXRlLmxheWVycykpXG4gICAgc2V0Q2xhc3NDb2xvcnMoZXh0cmFjdENsYXNzQ29sb3JzKGxheWVyU3RhdGUubGF5ZXJzKSlcbiAgfSwgW2NvbmZpZ10pXG5cbiAgY29uc3Qgc3luY1JpZ2h0VG9MZWZ0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbGVmdC5qbXYgfHwgIXJpZ2h0LmptdikgcmV0dXJuXG4gICAgc3luY2luZ1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsdiA9IGxlZnQuam12LnZpZXdcbiAgICAgIGNvbnN0IHJ2ID0gcmlnaHQuam12LnZpZXdcbiAgICAgIGF3YWl0IHJ2LmdvVG8oe1xuICAgICAgICBjZW50ZXI6IGx2LmNlbnRlcixcbiAgICAgICAgc2NhbGU6IGx2LnNjYWxlLFxuICAgICAgICByb3RhdGlvbjogbHYucm90YXRpb25cbiAgICAgIH0sIHsgYW5pbWF0ZTogZmFsc2UgfSlcbiAgICB9IGNhdGNoIHt9XG4gICAgc3luY2luZ1JlZi5jdXJyZW50ID0gZmFsc2VcbiAgfSwgW2xlZnQuam12LCByaWdodC5qbXZdKVxuXG4gIGNvbnN0IGFwcGx5VG9Cb3RoTWFwcyA9IHVzZUNhbGxiYWNrKGFzeW5jIChcbiAgICBwbnJoMjogc3RyaW5nLFxuICAgIHN1YkJhY2lhOiBzdHJpbmcsXG4gICAgbGVmdENlbmFyaW86IENlbmFyaW9JZCxcbiAgICByaWdodENlbmFyaW86IENlbmFyaW9JZCxcbiAgICB6b29tID0gZmFsc2VcbiAgKSA9PiB7XG4gICAgaWYgKCFsZWZ0LmxheWVyU3RhdGUgJiYgIXJpZ2h0LmxheWVyU3RhdGUpIHJldHVyblxuICAgIGFwcGx5aW5nUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRhc2tzOiBQcm9taXNlPHZvaWQ+W10gPSBbXVxuICAgICAgaWYgKGxlZnQuam12ICYmIGxlZnQubGF5ZXJTdGF0ZSkge1xuICAgICAgICB0YXNrcy5wdXNoKGFwcGx5U2NlbmFyaW9Ub01hcChsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlLCBjb25maWcsIGxlZnRDZW5hcmlvLCBwbnJoMiwgc3ViQmFjaWEsIHpvb20pKVxuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0LmptdiAmJiByaWdodC5sYXllclN0YXRlKSB7XG4gICAgICAgIHRhc2tzLnB1c2goYXBwbHlTY2VuYXJpb1RvTWFwKHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSwgY29uZmlnLCByaWdodENlbmFyaW8sIHBucmgyLCBzdWJCYWNpYSwgZmFsc2UpKVxuICAgICAgfVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGFza3MpXG4gICAgICBpZiAoem9vbSkge1xuICAgICAgICBhd2FpdCBzeW5jUmlnaHRUb0xlZnQoKVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhcHBseWluZ1JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICB9XG4gIH0sIFtsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlLCByaWdodC5qbXYsIHJpZ2h0LmxheWVyU3RhdGUsIGNvbmZpZywgc3luY1JpZ2h0VG9MZWZ0XSlcblxuICBjb25zdCBpbml0U2xvdCA9IHVzZUNhbGxiYWNrKGFzeW5jIChcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxuICAgIHNldHRlcjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248TWFwU2xvdD4+LFxuICAgIGlzUHJpbWFyeUZvck9wdGlvbnM6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHNldEVycm9yKCcnKVxuICAgICAgY29uc3QgbGF5ZXJTdGF0ZSA9IGF3YWl0IGluaXRNYXBMYXllcnMoam12LCBjb25maWcpXG4gICAgICBzZXR0ZXIoeyBqbXYsIGxheWVyU3RhdGUgfSlcbiAgICAgIGlmIChpc1ByaW1hcnlGb3JPcHRpb25zKSB7XG4gICAgICAgIGF3YWl0IGxvYWRPcHRpb25zRnJvbU1hcChsYXllclN0YXRlKVxuICAgICAgfVxuICAgICAgYXdhaXQgYXBwbHlTY2VuYXJpb1RvTWFwKGptdiwgbGF5ZXJTdGF0ZSwgY29uZmlnLCAnYXR1YWwnLCAnJywgJycsIGZhbHNlKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjb21wYXJlLWNlbmFyaW9zXSBpbml0JywgZSlcbiAgICAgIHNldEVycm9yKGRldGVjdEVycm9yKGUpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW2NvbmZpZywgbG9hZE9wdGlvbnNGcm9tTWFwXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWxWaWV3U3luY2VkUmVmLmN1cnJlbnQgPSBmYWxzZVxuICB9LCBbbGVmdE1hcElkLCByaWdodE1hcElkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGVmdC5qbXYgfHwgbGVmdC5sYXllclN0YXRlKSByZXR1cm5cbiAgICB2b2lkIGluaXRTbG90KGxlZnQuam12LCBzZXRMZWZ0LCB0cnVlKVxuICAgIHJldHVybiAoKSA9PiB7IHJlbW92ZU93bmVkTGF5ZXJzKGxlZnQuam12LCBsZWZ0LmxheWVyU3RhdGUpIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtsZWZ0Lmptdl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJpZ2h0LmptdiB8fCByaWdodC5sYXllclN0YXRlKSByZXR1cm5cbiAgICB2b2lkIGluaXRTbG90KHJpZ2h0Lmptdiwgc2V0UmlnaHQsIGZhbHNlKVxuICAgIHJldHVybiAoKSA9PiB7IHJlbW92ZU93bmVkTGF5ZXJzKHJpZ2h0LmptdiwgcmlnaHQubGF5ZXJTdGF0ZSkgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3JpZ2h0Lmptdl0pXG5cbiAgY29uc3QgbGF5ZXJzUmVhZHkgPSBCb29sZWFuKGxlZnQubGF5ZXJTdGF0ZT8ucmVhZHkgJiYgcmlnaHQubGF5ZXJTdGF0ZT8ucmVhZHkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxheWVyc1JlYWR5IHx8ICFsZWZ0LmptdiB8fCAhcmlnaHQuam12KSByZXR1cm5cblxuICAgIGNvbnN0IHJ1biA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghaW5pdGlhbFZpZXdTeW5jZWRSZWYuY3VycmVudCkge1xuICAgICAgICBhcHBseWluZ1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwcGx5VG9Cb3RoTWFwcygnJywgJycsICdhdHVhbCcsICdhdHVhbCcsIGZhbHNlKVxuICAgICAgICAgIGNvbnN0IHZwID0gbGVmdC5sYXllclN0YXRlPy5pbml0aWFsVmlld3BvaW50XG4gICAgICAgICAgaWYgKHZwKSB7XG4gICAgICAgICAgICBhd2FpdCBsZWZ0Lmptdi52aWV3LmdvVG8odnAsIHsgYW5pbWF0ZTogZmFsc2UgfSlcbiAgICAgICAgICAgIGF3YWl0IHN5bmNSaWdodFRvTGVmdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGFwcGx5aW5nUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxWaWV3U3luY2VkUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgIHByZXZGaWx0ZXJSZWYuY3VycmVudCA9IHsgcG5yaDI6ICcnLCBzdWJCYWNpYTogJycgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyQ2hhbmdlZCA9XG4gICAgICAgIHByZXZGaWx0ZXJSZWYuY3VycmVudC5wbnJoMiAhPT0gc2VsZWN0ZWRQbnJoMiB8fFxuICAgICAgICBwcmV2RmlsdGVyUmVmLmN1cnJlbnQuc3ViQmFjaWEgIT09IHNlbGVjdGVkU3ViQmFjaWFcbiAgICAgIGNvbnN0IHNob3VsZFpvb20gPSBmaWx0ZXJDaGFuZ2VkICYmIEJvb2xlYW4oc2VsZWN0ZWRQbnJoMiB8fCBzZWxlY3RlZFN1YkJhY2lhKVxuICAgICAgcHJldkZpbHRlclJlZi5jdXJyZW50ID0geyBwbnJoMjogc2VsZWN0ZWRQbnJoMiwgc3ViQmFjaWE6IHNlbGVjdGVkU3ViQmFjaWEgfVxuXG4gICAgICBhd2FpdCBhcHBseVRvQm90aE1hcHMoc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgY2VuYXJpb0xlZnQsIGNlbmFyaW9SaWdodCwgc2hvdWxkWm9vbSlcbiAgICB9XG4gICAgdm9pZCBydW4oKVxuICB9LCBbXG4gICAgbGF5ZXJzUmVhZHksXG4gICAgY2VuYXJpb0xlZnQsXG4gICAgY2VuYXJpb1JpZ2h0LFxuICAgIHNlbGVjdGVkUG5yaDIsXG4gICAgc2VsZWN0ZWRTdWJCYWNpYSxcbiAgICBsZWZ0LmptdixcbiAgICByaWdodC5qbXYsXG4gICAgYXBwbHlUb0JvdGhNYXBzLFxuICAgIHN5bmNSaWdodFRvTGVmdFxuICBdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNSZWdpb24gfHwgIWxlZnQubGF5ZXJTdGF0ZT8ubGF5ZXJzLmluZGljZSkge1xuICAgICAgc2V0Q2VuYXJpb3NTdGF0cyhudWxsKVxuICAgICAgc3RhdHNMb2FkS2V5UmVmLmN1cnJlbnQgPSAnJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IGAke3NlbGVjdGVkUG5yaDJ9fCR7c2VsZWN0ZWRTdWJCYWNpYX1gXG4gICAgaWYgKHN0YXRzTG9hZEtleVJlZi5jdXJyZW50ID09PSBrZXkpIHJldHVyblxuXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgc2V0U3RhdHNMb2FkaW5nKHRydWUpXG4gICAgbG9hZENlbmFyaW9zU3RhdHMobGVmdC5sYXllclN0YXRlLmxheWVycywgY29uZmlnLCBzZWxlY3RlZFBucmgyLCBzZWxlY3RlZFN1YkJhY2lhKVxuICAgICAgLnRoZW4oc3RhdHMgPT4ge1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgc3RhdHNMb2FkS2V5UmVmLmN1cnJlbnQgPSBrZXlcbiAgICAgICAgc2V0Q2VuYXJpb3NTdGF0cyhzdGF0cylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbY29tcGFyZS1jZW5hcmlvc10gc3RhdHMgZXJyb3InLCBlcnIpXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRDZW5hcmlvc1N0YXRzKG51bGwpXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0U3RhdHNMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgfSwgW2hhc1JlZ2lvbiwgc2VsZWN0ZWRQbnJoMiwgc2VsZWN0ZWRTdWJCYWNpYSwgbGF5ZXJzUmVhZHksIGNvbmZpZ10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN5bmNWaWV3cyB8fCAhbGVmdC5qbXYgfHwgIXJpZ2h0LmptdikgcmV0dXJuXG4gICAgY29uc3QgbGVmdFZpZXcgPSBsZWZ0Lmptdi52aWV3XG4gICAgbGV0IGRlYm91bmNlVGltZXI6IG51bWJlciB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3Qgc3luY0Zyb21MZWZ0ID0gKCkgPT4ge1xuICAgICAgaWYgKGFwcGx5aW5nUmVmLmN1cnJlbnQgfHwgc3luY2luZ1JlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgIGlmIChkZWJvdW5jZVRpbWVyKSB3aW5kb3cuY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpXG4gICAgICBkZWJvdW5jZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2b2lkIHN5bmNSaWdodFRvTGVmdCgpXG4gICAgICB9LCAyMDApXG4gICAgfVxuXG4gICAgY29uc3QgaDEgPSBsZWZ0Vmlldy53YXRjaCgnZXh0ZW50Jywgc3luY0Zyb21MZWZ0KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBoMS5yZW1vdmUoKVxuICAgICAgaWYgKGRlYm91bmNlVGltZXIpIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcilcbiAgICB9XG4gIH0sIFtzeW5jVmlld3MsIGxlZnQuam12LCByaWdodC5qbXYsIHN5bmNSaWdodFRvTGVmdF0pXG5cbiAgY29uc3Qgb25QbnJoMlNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRQbnJoMih2YWx1ZSlcbiAgICBpZiAodmFsdWUgJiYgc2VsZWN0ZWRTdWJCYWNpYSkge1xuICAgICAgY29uc3Qgc3VicyA9IHBucmgyVG9TdWJCYWNpYXNSZWYuY3VycmVudC5nZXQodmFsdWUpIHx8IFtdXG4gICAgICBpZiAoIXN1YnMuaW5jbHVkZXMoc2VsZWN0ZWRTdWJCYWNpYSkpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRTdWJCYWNpYSgnJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBvblN1YkJhY2lhU2VsZWN0ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZFN1YkJhY2lhKHZhbHVlKVxuICAgIGlmICh2YWx1ZSAmJiAhc2VsZWN0ZWRQbnJoMikge1xuICAgICAgY29uc3QgYXV0byA9IHN1YkJhY2lhVG9QbnJoMlJlZi5jdXJyZW50LmdldCh2YWx1ZSlcbiAgICAgIGlmIChhdXRvKSBzZXRTZWxlY3RlZFBucmgyKGF1dG8pXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25DZW5hcmlvTGVmdFNlbGVjdCA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q2VuYXJpb0xlZnQobGFiZWxUb0NlbmFyaW8obGFiZWwpKVxuICB9XG5cbiAgY29uc3Qgb25DZW5hcmlvUmlnaHRTZWxlY3QgPSAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIHNldENlbmFyaW9SaWdodChsYWJlbFRvQ2VuYXJpbyhsYWJlbCkpXG4gIH1cblxuICBjb25zdCBvbkNsZWFyID0gYXN5bmMgKCkgPT4ge1xuICAgIGFwcGx5aW5nUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgc2V0U2VsZWN0ZWRQbnJoMignJylcbiAgICBzZXRTZWxlY3RlZFN1YkJhY2lhKCcnKVxuICAgIHNldENlbmFyaW9MZWZ0KCdhdHVhbCcpXG4gICAgc2V0Q2VuYXJpb1JpZ2h0KCdhdHVhbCcpXG4gICAgc2V0Q2VuYXJpb3NTdGF0cyhudWxsKVxuICAgIHN0YXRzTG9hZEtleVJlZi5jdXJyZW50ID0gJydcbiAgICBwcmV2RmlsdGVyUmVmLmN1cnJlbnQgPSB7IHBucmgyOiAnJywgc3ViQmFjaWE6ICcnIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgdGFza3M6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgICBpZiAobGVmdC5qbXYgJiYgbGVmdC5sYXllclN0YXRlKSB0YXNrcy5wdXNoKHJlc3RvcmVJbml0aWFsVmlldyhsZWZ0LmptdiwgbGVmdC5sYXllclN0YXRlKSlcbiAgICAgIGlmIChyaWdodC5qbXYgJiYgcmlnaHQubGF5ZXJTdGF0ZSkgdGFza3MucHVzaChyZXN0b3JlSW5pdGlhbFZpZXcocmlnaHQuam12LCByaWdodC5sYXllclN0YXRlKSlcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRhc2tzKVxuICAgICAgYXdhaXQgc3luY1JpZ2h0VG9MZWZ0KClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXBwbHlpbmdSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3ViQmFjaWFPcHRpb25zID0gc2VsZWN0ZWRQbnJoMlxuICAgID8gKHBucmgyVG9TdWJCYWNpYXNSZWYuY3VycmVudC5nZXQoc2VsZWN0ZWRQbnJoMikgfHwgW10pXG4gICAgOiBhbGxTdWJCYWNpYXNcblxuICBjb25zdCBkaXNwbGF5TGVnZW5kR3JvdXBzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxlZ2VuZEdyb3Vwcy5sZW5ndGggPiAwKSByZXR1cm4gbGVnZW5kR3JvdXBzXG4gICAgY29uc3Qgc291cmNlID0gbGVmdC5sYXllclN0YXRlPy5sYXllcnMgfHwgcmlnaHQubGF5ZXJTdGF0ZT8ubGF5ZXJzXG4gICAgaWYgKCFzb3VyY2UpIHJldHVybiBbXVxuICAgIHJldHVybiBidWlsZExlZ2VuZEdyb3Vwcyhzb3VyY2UpXG4gIH0sIFtsZWdlbmRHcm91cHMsIGxlZnQubGF5ZXJTdGF0ZSwgcmlnaHQubGF5ZXJTdGF0ZV0pXG5cbiAgY29uc3QgY2VuYXJpb01lc3NhZ2VzID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGNlbmFyaW9zTG9hZGluZzogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9zTG9hZGluZyxcbiAgICBjZW5hcmlvc1NlbGVjdEZpbHRlcjogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9zU2VsZWN0RmlsdGVyLFxuICAgIGNlbmFyaW9CYWNpYUxhYmVsOiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb0JhY2lhTGFiZWwsXG4gICAgY2VuYXJpb1N1YkJhY2lhTGFiZWw6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvU3ViQmFjaWFMYWJlbCxcbiAgICBjZW5hcmlvQXR1YWw6IGRlZmF1bHRNZXNzYWdlcy5jZW5hcmlvQXR1YWwsXG4gICAgY2VuYXJpb1NzcDI0NTogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3AyNDUsXG4gICAgY2VuYXJpb1NzcDU4NTogZGVmYXVsdE1lc3NhZ2VzLmNlbmFyaW9Tc3A1ODUsXG4gICAgY2VuYXJpb3NDaGFydFRpdGxlOiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb3NDaGFydFRpdGxlLFxuICAgIGNlbmFyaW9zTm9EYXRhOiBkZWZhdWx0TWVzc2FnZXMuY2VuYXJpb3NOb0RhdGFcbiAgfSksIFtdKVxuXG4gIGNvbnN0IGZpbHRlck1lc3NhZ2VzID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIHBucmgyTGFiZWw6IGRlZmF1bHRNZXNzYWdlcy5wbnJoMkxhYmVsLFxuICAgIHN1YkJhY2lhTGFiZWw6IGRlZmF1bHRNZXNzYWdlcy5zdWJCYWNpYUxhYmVsLFxuICAgIG1hcExlZnRMYWJlbDogZGVmYXVsdE1lc3NhZ2VzLm1hcExlZnRMYWJlbCxcbiAgICBtYXBSaWdodExhYmVsOiBkZWZhdWx0TWVzc2FnZXMubWFwUmlnaHRMYWJlbCxcbiAgICBsb2FkaW5nOiBkZWZhdWx0TWVzc2FnZXMubG9hZGluZyxcbiAgICBzZWxlY3RQbnJoMjogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdFBucmgyLFxuICAgIHNlbGVjdFN1YkJhY2lhOiBkZWZhdWx0TWVzc2FnZXMuc2VsZWN0U3ViQmFjaWEsXG4gICAgc2VsZWN0Q2VuYXJpbzogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdENlbmFyaW8sXG4gICAgc3luY1ZpZXdzOiBkZWZhdWx0TWVzc2FnZXMuc3luY1ZpZXdzLFxuICAgIGNsZWFyOiBkZWZhdWx0TWVzc2FnZXMuY2xlYXJcbiAgfSksIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1B1Ymxpc2hlcikgcmV0dXJuXG4gICAgdXBkYXRlQ29tcGFyZUJyaWRnZShsaW5rR3JvdXBJZCwge1xuICAgICAgc2VsZWN0ZWRQbnJoMixcbiAgICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgICBjZW5hcmlvTGVmdCxcbiAgICAgIGNlbmFyaW9SaWdodCxcbiAgICAgIHN0YXRzOiBjZW5hcmlvc1N0YXRzLFxuICAgICAgc3RhdHNMb2FkaW5nLFxuICAgICAgbGVnZW5kR3JvdXBzOiBkaXNwbGF5TGVnZW5kR3JvdXBzLFxuICAgICAgY2xhc3NDb2xvcnM6IE9iamVjdC5mcm9tRW50cmllcyhjbGFzc0NvbG9ycyksXG4gICAgICBoYXNNYXBzUmVhZHk6IGhhc0JvdGhNYXBzICYmIGxheWVyc1JlYWR5XG4gICAgfSlcbiAgfSwgW1xuICAgIGlzUHVibGlzaGVyLFxuICAgIGxpbmtHcm91cElkLFxuICAgIHNlbGVjdGVkUG5yaDIsXG4gICAgc2VsZWN0ZWRTdWJCYWNpYSxcbiAgICBjZW5hcmlvTGVmdCxcbiAgICBjZW5hcmlvUmlnaHQsXG4gICAgY2VuYXJpb3NTdGF0cyxcbiAgICBzdGF0c0xvYWRpbmcsXG4gICAgZGlzcGxheUxlZ2VuZEdyb3VwcyxcbiAgICBjbGFzc0NvbG9ycyxcbiAgICBoYXNCb3RoTWFwcyxcbiAgICBsYXllcnNSZWFkeVxuICBdKVxuXG4gIGNvbnN0IGJyaWRnZVN0YXRlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgKGNiKSA9PiBzdWJzY3JpYmVDb21wYXJlQnJpZGdlKGxpbmtHcm91cElkLCBjYiksXG4gICAgKCkgPT4gZ2V0Q29tcGFyZUJyaWRnZVNuYXBzaG90KGxpbmtHcm91cElkKVxuICApXG5cbiAgY29uc3QgcGFuZWxTdGF0cyA9IGlzUGFuZWxPbmx5ID8gYnJpZGdlU3RhdGUuc3RhdHMgOiBjZW5hcmlvc1N0YXRzXG4gIGNvbnN0IHBhbmVsU3RhdHNMb2FkaW5nID0gaXNQYW5lbE9ubHkgPyBicmlkZ2VTdGF0ZS5zdGF0c0xvYWRpbmcgOiBzdGF0c0xvYWRpbmdcbiAgY29uc3QgcGFuZWxCYWNpYSA9IGlzUGFuZWxPbmx5ID8gYnJpZGdlU3RhdGUuc2VsZWN0ZWRQbnJoMiA6IHNlbGVjdGVkUG5yaDJcbiAgY29uc3QgcGFuZWxTdWJCYWNpYSA9IGlzUGFuZWxPbmx5ID8gYnJpZGdlU3RhdGUuc2VsZWN0ZWRTdWJCYWNpYSA6IHNlbGVjdGVkU3ViQmFjaWFcbiAgY29uc3QgcGFuZWxDZW5hcmlvczogQ2VuYXJpb0lkW10gPSBpc1BhbmVsT25seVxuICAgID8gW2JyaWRnZVN0YXRlLmNlbmFyaW9MZWZ0LCBicmlkZ2VTdGF0ZS5jZW5hcmlvUmlnaHRdXG4gICAgOiBbY2VuYXJpb0xlZnQsIGNlbmFyaW9SaWdodF1cbiAgY29uc3QgcGFuZWxMZWdlbmRHcm91cHMgPSBpc1BhbmVsT25seSA/IGJyaWRnZVN0YXRlLmxlZ2VuZEdyb3VwcyA6IGRpc3BsYXlMZWdlbmRHcm91cHNcbiAgY29uc3QgcGFuZWxDbGFzc0NvbG9ycyA9IGlzUGFuZWxPbmx5XG4gICAgPyByZWNvcmRUb0NsYXNzQ29sb3JzKGJyaWRnZVN0YXRlLmNsYXNzQ29sb3JzKVxuICAgIDogY2xhc3NDb2xvcnNcblxuICBjb25zdCB0U2hhcGVDc3MgPSBjc3NgXG4gICAgJi53aWRnZXQtY29tcGFyZS1jZW5hcmlvcy50LWxheW91dCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICBgXG5cbiAgY29uc3QgcGFuZWxTdXJmYWNlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2QwZDBkMCcsXG4gICAgYm94U2hhZG93OiAnMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTQpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bydcbiAgfVxuXG4gIGNvbnN0IHJvb3Q6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gIH1cbiAgY29uc3Qgc3RlbVdpZHRoUGN0ID0gTWF0aC5taW4oNzUsIE1hdGgubWF4KDE4LCBjb25maWcudFN0ZW1XaWR0aFBlcmNlbnQpKVxuICBjb25zdCB0b3BCYXJNaW5IID0gTWF0aC5taW4oMjgwLCBNYXRoLm1heCg3MiwgY29uZmlnLnRUb3BCYXJIZWlnaHQpKVxuICBjb25zdCBzdGVtTWluSCA9IE1hdGgubWluKDYwMCwgTWF0aC5tYXgoMTIwLCBjb25maWcudFN0ZW1NaW5IZWlnaHQpKVxuXG4gIGNvbnN0IHRvcEFybTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAuLi5wYW5lbFN1cmZhY2UsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4OiBgMCAwICR7dG9wQmFyTWluSH1weGAsXG4gICAgbWluSGVpZ2h0OiB0b3BCYXJNaW5ILFxuICAgIG1heEhlaWdodDogdG9wQmFyTWluSCxcbiAgICBib3JkZXJSYWRpdXM6ICcxMnB4IDEycHggMCAwJyxcbiAgICBwYWRkaW5nOiAnMTBweCAxNHB4IDEycHgnLFxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMjU2QjQ1JyxcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbiAgY29uc3QgYm90dG9tUm93OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgfVxuICBjb25zdCB3aW5nOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIGZsZXg6ICcxIDEgMCcsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxuICBjb25zdCBwbGFjZWhvbGRlckJveDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAuLi5wYW5lbFN1cmZhY2UsXG4gICAgcGFkZGluZzogJzE0cHggMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiAnIzg4OCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGxpbmVIZWlnaHQ6IDEuNDVcbiAgfVxuXG4gIGNvbnN0IGZpbHRlckJhclByb3BzID0ge1xuICAgIHRpdGxlOiBkZWZhdWx0TWVzc2FnZXMuY29tcGFyZVRpdGxlLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgYWxsUG5yaDIsXG4gICAgYWxsU3ViQmFjaWFzLFxuICAgIHN1YkJhY2lhT3B0aW9ucyxcbiAgICBzZWxlY3RlZFBucmgyLFxuICAgIHNlbGVjdGVkU3ViQmFjaWEsXG4gICAgY2VuYXJpb0xlZnQsXG4gICAgY2VuYXJpb1JpZ2h0LFxuICAgIHN5bmNWaWV3cyxcbiAgICBoYXNBY3RpdmVGaWx0ZXIsXG4gICAgY2VuYXJpb09wdGlvbnM6IENFTkFSSU9fT1BUSU9OUyxcbiAgICBjZW5hcmlvTGFiZWwsXG4gICAgbWVzc2FnZXM6IGZpbHRlck1lc3NhZ2VzLFxuICAgIG9uUG5yaDJTZWxlY3QsXG4gICAgb25TdWJCYWNpYVNlbGVjdCxcbiAgICBvbkNlbmFyaW9MZWZ0U2VsZWN0LFxuICAgIG9uQ2VuYXJpb1JpZ2h0U2VsZWN0LFxuICAgIG9uU3luY1ZpZXdzQ2hhbmdlOiBzZXRTeW5jVmlld3MsXG4gICAgb25DbGVhcjogKCkgPT4geyB2b2lkIG9uQ2xlYXIoKSB9XG4gIH1cblxuICBjb25zdCBjb250ZW50UGFuZWxQcm9wcyA9IHtcbiAgICBzdGF0czogcGFuZWxTdGF0cyxcbiAgICBzdGF0c0xvYWRpbmc6IHBhbmVsU3RhdHNMb2FkaW5nLFxuICAgIGJhY2lhOiBwYW5lbEJhY2lhLFxuICAgIHN1YkJhY2lhOiBwYW5lbFN1YkJhY2lhLFxuICAgIGNvbXBhcmVDZW5hcmlvczogcGFuZWxDZW5hcmlvcyxcbiAgICBjbGFzc0NvbG9yczogcGFuZWxDbGFzc0NvbG9ycyxcbiAgICBsZWdlbmRHcm91cHM6IHBhbmVsTGVnZW5kR3JvdXBzLFxuICAgIGNlbmFyaW9NZXNzYWdlcyxcbiAgICBsZWdlbmRUaXRsZTogZGVmYXVsdE1lc3NhZ2VzLmxlZ2VuZFRpdGxlLFxuICAgIGxlZ2VuZEVtcHR5OiBkZWZhdWx0TWVzc2FnZXMubGVnZW5kRW1wdHlcbiAgfVxuXG4gIGNvbnN0IGxheW91dENsYXNzID0gaXNDb21iaW5lZFxuICAgID8gJ2ppbXUtd2lkZ2V0IHdpZGdldC1jb21wYXJlLWNlbmFyaW9zIHQtbGF5b3V0J1xuICAgIDogJ2ppbXUtd2lkZ2V0IHdpZGdldC1jb21wYXJlLWNlbmFyaW9zJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2xheW91dENsYXNzfSBjc3M9e2lzQ29tYmluZWQgPyB0U2hhcGVDc3MgOiB1bmRlZmluZWR9IHN0eWxlPXtyb290fT5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgbGVmdE1hcElkICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e2xlZnRNYXBJZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHsgaWYgKGptdikgc2V0TGVmdCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgcmlnaHRNYXBJZCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtyaWdodE1hcElkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdikgPT4geyBpZiAoam12KSBzZXRSaWdodCh7IGptdiwgbGF5ZXJTdGF0ZTogbnVsbCB9KSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2lzUGFuZWxPbmx5ICYmIChcbiAgICAgICAgYnJpZGdlU3RhdGUuaGFzTWFwc1JlYWR5XG4gICAgICAgICAgPyA8Q29udGVudFBhbmVsIHsuLi5jb250ZW50UGFuZWxQcm9wc30gcm91bmRlZD0nYWxsJyAvPlxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cGxhY2Vob2xkZXJCb3h9PlxuICAgICAgICAgICAgICA8ZGl2PntkZWZhdWx0TWVzc2FnZXMucGFuZWxXYWl0aW5nRm9yRmlsdGVyc308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc4cHgnLCBmb250U2l6ZTogJzEycHgnIH19PlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMucGFuZWxMaW5rR3JvdXBIaW50fSA8c3Ryb25nPntsaW5rR3JvdXBJZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICl9XG5cbiAgICAgIHshaXNQYW5lbE9ubHkgJiYgIWhhc0JvdGhNYXBzICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5wbGFjZWhvbGRlckJveCwgLi4uKGlzRmlsdGVyc09ubHkgPyB7fSA6IHRvcEFybSkgfX0+XG4gICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5zZWxlY3RNYXBzRmlyc3R9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgeyFpc1BhbmVsT25seSAmJiBoYXNCb3RoTWFwcyAmJiBpc0ZpbHRlcnNPbmx5ICYmIChcbiAgICAgICAgPEZpbHRlckJhclxuICAgICAgICAgIHsuLi5maWx0ZXJCYXJQcm9wc31cbiAgICAgICAgICByb3VuZGVkPSdhbGwnXG4gICAgICAgICAgYmFyU3R5bGU9e3tcbiAgICAgICAgICAgIGZsZXg6IGAwIDAgJHt0b3BCYXJNaW5IfXB4YCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogdG9wQmFyTWluSCxcbiAgICAgICAgICAgIG1heEhlaWdodDogdG9wQmFyTWluSFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7IWlzUGFuZWxPbmx5ICYmIGhhc0JvdGhNYXBzICYmIGlzQ29tYmluZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWx0ZXJCYXJcbiAgICAgICAgICAgIHsuLi5maWx0ZXJCYXJQcm9wc31cbiAgICAgICAgICAgIHJvdW5kZWQ9J3RvcCdcbiAgICAgICAgICAgIGJhclN0eWxlPXt7XG4gICAgICAgICAgICAgIGZsZXg6IGAwIDAgJHt0b3BCYXJNaW5IfXB4YCxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0b3BCYXJNaW5ILFxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRvcEJhck1pbkhcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtib3R0b21Sb3d9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17d2luZ30gYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8Q29udGVudFBhbmVsXG4gICAgICAgICAgICAgIHsuLi5jb250ZW50UGFuZWxQcm9wc31cbiAgICAgICAgICAgICAgcm91bmRlZD0nYm90dG9tJ1xuICAgICAgICAgICAgICBwYW5lbFN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleDogYDAgMCAke3N0ZW1XaWR0aFBjdH0lYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7c3RlbVdpZHRoUGN0fSVgLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogc3RlbU1pbkhcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt3aW5nfSBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9