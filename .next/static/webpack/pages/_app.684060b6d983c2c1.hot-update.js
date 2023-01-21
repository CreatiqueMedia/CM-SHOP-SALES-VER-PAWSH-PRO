"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/sections/Navbar.tsx":
/*!****************************************!*\
  !*** ./components/sections/Navbar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"transparent\");\n    const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"white\");\n    const handleNav = ()=>{\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const changeColor = ()=>{\n            if (window.scrollY >= 90) {\n                setColor(\"#ffffff\");\n                setTextColor(\"#000000\");\n            } else {\n                setColor(\"transparent\");\n                setTextColor(\"#ffffff\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"\".concat(color)\n        },\n        className: \"fixed left-0 top-0 w-full z-10 ease-in duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] m-auto flex justify-between items-center p-4 text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            color: \"\".concat(textColor)\n                        },\n                        className: \"font-bold text-4xl\",\n                        children: \"PAWSH Photography\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: {\n                        color: \"\".concat(textColor)\n                    },\n                    className: \"hidden sm:flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#gallery\",\n                                children: \"Gallery\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: \"Work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handleNav,\n                    className: \"block sm:hidden z-10\",\n                    children: nav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineClose, {\n                        size: 20,\n                        style: {\n                            color: \"\".concat(textColor)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineMenu, {\n                        size: 20,\n                        style: {\n                            color: \"\".concat(textColor)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: nav ? \"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300\" : \"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/#gallery\",\n                                    children: \"Gallery\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/work\",\n                                    children: \"Work\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ronratzlaff/Projects/Sales/Photography Pro/CM-SALES-PHOTOGRAPHY-PRO/cm-photography-pro/components/sections/Navbar.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"hM4e+HsCErmOPmilgtBeBMrfzzY=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDc0I7QUFDWTtBQUUvRCxNQUFNTSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVcsWUFBWSxJQUFNO1FBQ3RCTCxPQUFPLENBQUNEO0lBQ1Y7SUFFQUosZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLGNBQWMsSUFBTTtZQUN4QixJQUFJQyxPQUFPQyxPQUFPLElBQUksSUFBSTtnQkFDeEJOLFNBQVM7Z0JBQ1RFLGFBQWE7WUFDZixPQUFPO2dCQUNMRixTQUFTO2dCQUNURSxhQUFhO1lBQ2YsQ0FBQztRQUNIO1FBQ0FHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSTtRQUNDQyxPQUFPO1lBQUVDLGlCQUFpQixHQUFTLE9BQU5YO1FBQVE7UUFDckNZLFdBQVU7a0JBRVYsNEVBQUNIO1lBQUlHLFdBQVU7OzhCQUNiLDhEQUFDckIsa0RBQUlBO29CQUFDc0IsTUFBSzs4QkFDVCw0RUFBQ0M7d0JBQUdKLE9BQU87NEJBQUVWLE9BQU8sR0FBYSxPQUFWRTt3QkFBWTt3QkFBR1UsV0FBVTtrQ0FBcUI7Ozs7Ozs7Ozs7OzhCQUl2RSw4REFBQ0c7b0JBQUdMLE9BQU87d0JBQUVWLE9BQU8sR0FBYSxPQUFWRTtvQkFBWTtvQkFBR1UsV0FBVTs7c0NBQzlDLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FDWiw0RUFBQ3JCLGtEQUFJQTtnQ0FBQ3NCLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7O3NDQUVqQiw4REFBQ0c7NEJBQUdKLFdBQVU7c0NBQ1osNEVBQUNyQixrREFBSUE7Z0NBQUNzQixNQUFLOzBDQUFZOzs7Ozs7Ozs7OztzQ0FFekIsOERBQUNHOzRCQUFHSixXQUFVO3NDQUNaLDRFQUFDckIsa0RBQUlBO2dDQUFDc0IsTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDRzs0QkFBR0osV0FBVTtzQ0FDWiw0RUFBQ3JCLGtEQUFJQTtnQ0FBQ3NCLE1BQUs7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUsxQiw4REFBQ0o7b0JBQUlRLFNBQVNiO29CQUFXUSxXQUFVOzhCQUNoQ2Qsb0JBQ0MsOERBQUNGLDBEQUFjQTt3QkFBQ3NCLE1BQU07d0JBQUlSLE9BQU87NEJBQUVWLE9BQU8sR0FBYSxPQUFWRTt3QkFBWTs7Ozs7a0RBRXpELDhEQUFDUCx5REFBYUE7d0JBQUN1QixNQUFNO3dCQUFJUixPQUFPOzRCQUFFVixPQUFPLEdBQWEsT0FBVkU7d0JBQVk7Ozs7O2lDQUN6RDs7Ozs7OzhCQUdILDhEQUFDTztvQkFDQ0csV0FDRWQsTUFDSSxnSkFDQSxtSkFBbUo7OEJBR3pKLDRFQUFDaUI7OzBDQUNDLDhEQUFDQztnQ0FBR0MsU0FBU2I7Z0NBQVdRLFdBQVU7MENBQ2hDLDRFQUFDckIsa0RBQUlBO29DQUFDc0IsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBRWpCLDhEQUFDRztnQ0FBR0MsU0FBU2I7Z0NBQVdRLFdBQVU7MENBQ2hDLDRFQUFDckIsa0RBQUlBO29DQUFDc0IsTUFBSzs4Q0FBWTs7Ozs7Ozs7Ozs7MENBRXpCLDhEQUFDRztnQ0FBR0MsU0FBU2I7Z0NBQVdRLFdBQVU7MENBQ2hDLDRFQUFDckIsa0RBQUlBO29DQUFDc0IsTUFBSzs4Q0FBUTs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDRztnQ0FBR0MsU0FBU2I7Z0NBQVdRLFdBQVU7MENBQ2hDLDRFQUFDckIsa0RBQUlBO29DQUFDc0IsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBbEZNaEI7S0FBQUE7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9OYXZiYXIudHN4P2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSwgQWlPdXRsaW5lQ2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgndHJhbnNwYXJlbnQnKTtcbiAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKCd3aGl0ZScpO1xuXG4gIGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcbiAgICBzZXROYXYoIW5hdik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuICAgICAgICBzZXRDb2xvcignI2ZmZmZmZicpO1xuICAgICAgICBzZXRUZXh0Q29sb3IoJyMwMDAwMDAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbG9yKCd0cmFuc3BhcmVudCcpO1xuICAgICAgICBzZXRUZXh0Q29sb3IoJyNmZmZmZmYnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VDb2xvcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCB9fVxuICAgICAgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTAgdG9wLTAgdy1mdWxsIHotMTAgZWFzZS1pbiBkdXJhdGlvbi0zMDAnXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LVsxMjQwcHhdIG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC00IHRleHQtd2hpdGUnPlxuICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IGAke3RleHRDb2xvcn1gIH19IGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtNHhsJz5cbiAgICAgICAgICAgIFBBV1NIIFBob3RvZ3JhcGh5XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgc3R5bGU9e3sgY29sb3I6IGAke3RleHRDb2xvcn1gIH19IGNsYXNzTmFtZT0naGlkZGVuIHNtOmZsZXgnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8jZ2FsbGVyeSc+R2FsbGVyeTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvd29yayc+V29yazwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIHsvKiBNb2JpbGUgQnV0dG9uICovfVxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZU5hdn0gY2xhc3NOYW1lPSdibG9jayBzbTpoaWRkZW4gei0xMCc+XG4gICAgICAgICAge25hdiA/IChcbiAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBzaXplPXsyMH0gc3R5bGU9e3sgY29sb3I6IGAke3RleHRDb2xvcn1gIH19IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBaU91dGxpbmVNZW51IHNpemU9ezIwfSBzdHlsZT17eyBjb2xvcjogYCR7dGV4dENvbG9yfWAgfX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIG5hdlxuICAgICAgICAgICAgICA/ICdzbTpoaWRkZW4gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLWJsYWNrIHRleHQtY2VudGVyIGVhc2UtaW4gZHVyYXRpb24tMzAwJ1xuICAgICAgICAgICAgICA6ICdzbTpoaWRkZW4gYWJzb2x1dGUgdG9wLTAgbGVmdC1bLTEwMCVdIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLWJsYWNrIHRleHQtY2VudGVyIGVhc2UtaW4gZHVyYXRpb24tMzAwJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvI2dhbGxlcnknPkdhbGxlcnk8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2hhbmRsZU5hdn0gY2xhc3NOYW1lPSdwLTQgdGV4dC00eGwgaG92ZXI6dGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy93b3JrJz5Xb3JrPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBaU91dGxpbmVNZW51IiwiQWlPdXRsaW5lQ2xvc2UiLCJOYXZiYXIiLCJuYXYiLCJzZXROYXYiLCJjb2xvciIsInNldENvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwiaGFuZGxlTmF2IiwiY2hhbmdlQ29sb3IiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/Navbar.tsx\n"));

/***/ })

});