"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_GoldenThinkerAnimation_js",{

/***/ "./components/GoldenThinkerAnimation.js":
/*!**********************************************!*\
  !*** ./components/GoldenThinkerAnimation.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene */ \"./components/Scene.js\");\n// components/GoldenThinkerAnimation.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GoldenThinkerAnimation = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const image360Path = \"images/360/back.jpg\"; // Update with the actual path\n        const objPath = \"3d/anim_goldenthinker.obj\"; // Update with the actual path\n        // Create a gold material\n        const goldMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({\n            color: 0xD4AF37,\n            metalness: 1,\n            roughness: 0.3,\n            reflectivity: 1\n        });\n        myScene.addElement(\"/3d/anim_goldenthinker.obj\", {\n            material: goldMaterial,\n            position: {\n                x: 0,\n                y: -2,\n                z: 0\n            },\n            rotation: {\n                x: 0,\n                y: 0,\n                z: 0\n            }\n        });\n        const myScene = new _Scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"](image360Path, objPath, goldMaterial);\n        myScene.init();\n        return ()=>{\n            // Clean up when the component unmounts\n            myScene.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"animation_container\"\n    }, void 0, false, {\n        fileName: \"/workspaces/www_subjectivetechnologies_com_nodejs/components/GoldenThinkerAnimation.js\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GoldenThinkerAnimation, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoldenThinkerAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoldenThinkerAnimation);\nvar _c;\n$RefreshReg$(_c, \"GoldenThinkerAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvbGRlblRoaW5rZXJBbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVDQUF1Qzs7O0FBQ1U7QUFDbEI7QUFDOEM7QUFDVDtBQUN4QztBQUU1QixNQUFNTyx5QkFBeUI7O0lBQzdCTixnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGVBQWUsdUJBQXVCLDhCQUE4QjtRQUMxRSxNQUFNQyxVQUFVLDZCQUE2Qiw4QkFBOEI7UUFHN0UseUJBQXlCO1FBQzNCLE1BQU1DLGVBQWUsSUFBSVAsdURBQTBCLENBQUM7WUFDbERTLE9BQU87WUFDUEMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLGNBQWM7UUFDaEI7UUFFQUMsUUFBUUMsVUFBVSxDQUFDLDhCQUE4QjtZQUMvQ0MsVUFBVVI7WUFDVlMsVUFBVTtnQkFBRUMsR0FBRztnQkFBR0MsR0FBRyxDQUFDO2dCQUFHQyxHQUFHO1lBQUU7WUFDOUJDLFVBQVU7Z0JBQUVILEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdDLEdBQUc7WUFBRTtRQUMvQjtRQU1JLE1BQU1OLFVBQVUsSUFBSVYsOENBQUtBLENBQUNFLGNBQWFDLFNBQVNDO1FBQ2hETSxRQUFRUSxJQUFJO1FBRVosT0FBTztZQUNMLHVDQUF1QztZQUN2Q1IsUUFBUVMsT0FBTztRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDQztRQUFJQyxJQUFHOzs7Ozs7QUFDakI7R0FsQ01wQjtLQUFBQTtBQW1DTiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR29sZGVuVGhpbmtlckFuaW1hdGlvbi5qcz9iZDU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvR29sZGVuVGhpbmtlckFuaW1hdGlvbi5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XG5cbmNvbnN0IEdvbGRlblRoaW5rZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UzNjBQYXRoID0gJ2ltYWdlcy8zNjAvYmFjay5qcGcnOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcbiAgICBjb25zdCBvYmpQYXRoID0gJzNkL2FuaW1fZ29sZGVudGhpbmtlci5vYmonOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcblxuXG4gIC8vIENyZWF0ZSBhIGdvbGQgbWF0ZXJpYWxcbmNvbnN0IGdvbGRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCh7XG4gIGNvbG9yOiAweEQ0QUYzNywgLy8gR29sZCBjb2xvclxuICBtZXRhbG5lc3M6IDEsIC8vIEZ1bGwgbWV0YWxuZXNzIG1ha2VzIGl0IGxvb2sgbW9yZSBsaWtlIGdvbGRcbiAgcm91Z2huZXNzOiAwLjMsIC8vIEFkanVzdCB0byBtYWtlIGl0IHNoaW5pZXIgb3IgbW9yZSBtYXR0ZVxuICByZWZsZWN0aXZpdHk6IDEsIC8vIEZ1bGwgcmVmbGVjdGl2aXR5IGZvciBhIG1ldGFsbGljIGxvb2tcbn0pO1xuXG5teVNjZW5lLmFkZEVsZW1lbnQoJy8zZC9hbmltX2dvbGRlbnRoaW5rZXIub2JqJywge1xuICBtYXRlcmlhbDogZ29sZE1hdGVyaWFsLFxuICBwb3NpdGlvbjogeyB4OiAwLCB5OiAtMiwgejogMCB9LFxuICByb3RhdGlvbjogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXG59KTtcblxuXG5cblxuXG4gICAgY29uc3QgbXlTY2VuZSA9IG5ldyBTY2VuZShpbWFnZTM2MFBhdGgsb2JqUGF0aCwgZ29sZE1hdGVyaWFsKTtcbiAgICBteVNjZW5lLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIG15U2NlbmUuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBpZD1cImFuaW1hdGlvbl9jb250YWluZXJcIj48L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgR29sZGVuVGhpbmtlckFuaW1hdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIk9CSkxvYWRlciIsIlNjZW5lIiwiR29sZGVuVGhpbmtlckFuaW1hdGlvbiIsImltYWdlMzYwUGF0aCIsIm9ialBhdGgiLCJnb2xkTWF0ZXJpYWwiLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsImNvbG9yIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwicmVmbGVjdGl2aXR5IiwibXlTY2VuZSIsImFkZEVsZW1lbnQiLCJtYXRlcmlhbCIsInBvc2l0aW9uIiwieCIsInkiLCJ6Iiwicm90YXRpb24iLCJpbml0IiwiZGlzcG9zZSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoldenThinkerAnimation.js\n"));

/***/ })

});