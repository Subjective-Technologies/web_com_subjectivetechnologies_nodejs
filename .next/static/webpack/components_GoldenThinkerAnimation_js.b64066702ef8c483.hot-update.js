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

/***/ "./components/Scene.js":
/*!*****************************!*\
  !*** ./components/Scene.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"relative\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        this.renderer.gammaOutput = false;\n        const container = document.getElementById(\"animation_container\"); // Make sure this is the ID of your container div\n        container.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModel(this.objPath);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    loadObjModelWithMaterial(objPath, material) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child.isMesh) {\n                    child.material = material || child.material;\n                }\n            });\n            this.scene.add(obj);\n        });\n    }\n    // ... rest of the Scene class\n    dispose() {\n        // Dispose of geometries, materials, textures, etc.\n        this.scene.traverse((object)=>{\n            if (!object.isMesh) return;\n            object.geometry.dispose();\n            if (object.material.isMaterial) {\n                this.cleanMaterial(object.material);\n            } else {\n                // An array of materials\n                for (const material of object.material)cleanMaterial(material);\n            }\n        });\n        if (this.renderer) {\n            this.renderer.dispose();\n        }\n    // Additional cleanup if needed\n    }\n    cleanMaterial(material) {\n        material.dispose();\n        // Dispose textures\n        for (const key of Object.keys(material)){\n            const value = material[key];\n            if (value && typeof value === \"object\" && \"minFilter\" in value) {\n                value.dispose();\n            }\n        }\n    }\n    constructor(image360Path, objPath, material){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.material = material; // Store the material\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n        this.init();\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtRQUNGO0lBQ0Y7SUFqT0FPLFlBQVluRSxZQUFZLEVBQUVFLE9BQU8sRUFBRXlDLFFBQVEsQ0FBRTtRQUMzQyxJQUFJLENBQUMzQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0UsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ3lDLFFBQVEsR0FBR0EsVUFBVSxxQkFBcUI7UUFDL0MsSUFBSSxDQUFDN0IsS0FBSyxHQUFHLElBQUk1Qyx3Q0FBVztRQUU1QixJQUFJLElBQWtCLEVBQWE7WUFDL0IsSUFBSSxDQUFDdUIsTUFBTSxHQUFHLElBQUl2QixvREFBdUIsQ0FBQyxJQUFJTyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1lBQzNGLElBQUksQ0FBQ0osUUFBUSxHQUFHLElBQUlMLGdEQUFtQjtZQUN2QyxJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSXhCLHVGQUFhQSxDQUFDLElBQUksQ0FBQ3NCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixRQUFRLENBQUNLLFVBQVU7UUFDM0U7UUFFQSxJQUFJLENBQUNzRCxlQUFlLEdBQUcsRUFBRTtRQUN6QixJQUFJLENBQUM1RCxJQUFJO0lBQ1g7QUF3TkY7QUFFQSwrREFBZUQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NjZW5lLmpzPzFkNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoaW1hZ2UzNjBQYXRoLCBvYmpQYXRoLCBtYXRlcmlhbCkge1xuICAgIHRoaXMuaW1hZ2UzNjBQYXRoID0gaW1hZ2UzNjBQYXRoO1xuICAgIHRoaXMub2JqUGF0aCA9IG9ialBhdGg7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsOyAvLyBTdG9yZSB0aGUgbWF0ZXJpYWxcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5ID0gW107XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZWxhdGl2ZSc7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgLy8gRXhhbXBsZSB0byBtYWtlIGl0IGFic29sdXRlIHBvc2l0aW9uZWRcbiAgICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbiAgICBjYW52YXMuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cblxuICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSBmYWxzZTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWF0aW9uX2NvbnRhaW5lcicpOyAvLyBNYWtlIHN1cmUgdGhpcyBpcyB0aGUgSUQgb2YgeW91ciBjb250YWluZXIgZGl2XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgICB0aGlzLmNvbnRyb2xzLnRhcmdldC5zZXQoMCwgMCwgMCk7XG5cbiAgICB0aGlzLmFkZExpZ2h0cygpO1xuICAgIHRoaXMuYWRkQmFja2dyb3VuZFNwaGVyZSh0aGlzLmltYWdlMzYwUGF0aCk7IC8vIFVzZSB0aGUgcHJvdmlkZWQgMzYwIGltYWdlIHBhdGhcblxuICAgIC8vIExvYWQgdGhlIC5vYmogZmlsZVxuICAgIHRoaXMubG9hZE9iak1vZGVsKHRoaXMub2JqUGF0aCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlT2JqZWN0SW5mb0FycmF5KCk7XG4gICAgICB0aGlzLnByaW50U2NlbmVTdGF0ZSgpO1xuICAgIH0pO1xuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnUycpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnUicpIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3RKU09OID0gcHJvbXB0KCdFbnRlciB0aGUgc25hcHNob3QgSlNPTjonKTtcbiAgICAgICAgaWYgKHNuYXBzaG90SlNPTikge1xuICAgICAgICAgIHRoaXMucmVzdG9yZVNjZW5lU3RhdGUoc25hcHNob3RKU09OKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XG4gICAgLy8gQWRkIGFueSBhbmltYXRpb25zIG9yIHVwZGF0ZXMgaGVyZVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIGFkZExpZ2h0cygpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjIpO1xuICAgIHRoaXMuc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBwb2ludExpZ2h0MS5wb3NpdGlvbi5zZXQoMTAsIDEwLCAxMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDEpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgcG9pbnRMaWdodDIucG9zaXRpb24uc2V0KC0xMCwgLTEwLCAtMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQyKTtcbiAgfVxuXG4gIGFkZEJhY2tncm91bmRTcGhlcmUodGV4dHVyZVBhdGgpIHtcbiAgICBjb25zdCBzcGhlcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxMCwgMzIsIDMyKTtcbiAgICBzcGhlcmVHZW9tZXRyeS5zY2FsZSgtMSwgMSwgMSk7XG5cbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICBjb25zdCBzcGhlcmVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBzcGhlcmVUZXh0dXJlIH0pO1xuXG4gICAgY29uc3Qgc3BoZXJlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gICAgdGhpcy5zY2VuZS5hZGQoc3BoZXJlTWVzaCk7XG4gIH1cblxuICB1cGRhdGVPYmplY3RJbmZvQXJyYXkoKSB7XG4gICAgdGhpcy5vYmplY3RJbmZvQXJyYXkubGVuZ3RoID0gMDtcbiAgICBcbiAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBvYmplY3QgaW5mb3JtYXRpb24gYW5kIGFkZCB0byB0aGlzLm9iamVjdEluZm9BcnJheVxuICAgICAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaW50U2NlbmVTdGF0ZSgpIHtcbiAgICAvLyBDcmVhdGUgYSBzbmFwc2hvdCBvZiB0aGUgc2NlbmUncyBzdGF0ZSBhbmQgcHJpbnQgaXRcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIHJlc3RvcmVTY2VuZVN0YXRlKHNjZW5lU3RhdGVKU09OKSB7XG4gICAgLy8gUmVzdG9yZSB0aGUgc2NlbmUncyBzdGF0ZSBmcm9tIGEgSlNPTiBzdHJpbmdcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIC8vIEFkZCBtZXRob2RzIHRvIGFkZCBjdXN0b20gZWxlbWVudHMsIG1hbmFnZSBldmVudHMsIGV0Yy5cbiAgYWRkRWxlbWVudChlbGVtZW50UGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB0ZXh0dXJlUGF0aCA9IG51bGwsIG1hdGVyaWFsID0gbnVsbCwgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSwgcm90YXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSB9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChlbGVtZW50UGF0aCwgKG9iaikgPT4ge1xuICAgICAgb2JqLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIG1hdGVyaWFsIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0ZXh0dXJlUGF0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21UZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSB0ZXh0dXJlIHRvIHRoZSBtZXNoXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbC5tYXAgPSBjdXN0b21UZXh0dXJlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG9iai5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICBvYmoucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbiAvLyBNZXRob2QgdG8gdGFrZSBhIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFuZCByZXR1cm4gaXQgYXMgSlNPTlxuICB0YWtlU25hcHNob3QoKSB7XG4gICAgY29uc3Qgc25hcHNob3QgPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcHJvcGVydGllcyBvZiB0aGUgU2NlbmUgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBTYXZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgc25hcHNob3RcbiAgICAgICAgICBzbmFwc2hvdFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBzbmFwc2hvdCBvYmplY3QgdG8gSlNPTlxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzbmFwc2hvdCwgbnVsbCwgMik7XG4gIH1cblxuXG4gIGxvYWRPYmpNb2RlbChvYmpQYXRoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKG9ialBhdGgsIChvYmopID0+IHtcbiAgICAgIC8vIFByb2Nlc3MgdGhlIGxvYWRlZCAub2JqIGZpbGVcbiAgICAgIC8vIEZvciBleGFtcGxlLCBzZXR0aW5nIHBvc2l0aW9uLCBzY2FsZSwgZXRjLlxuICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRPYmpNb2RlbFdpdGhNYXRlcmlhbChvYmpQYXRoLCBtYXRlcmlhbCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChvYmpQYXRoLCAob2JqKSA9PiB7XG4gICAgICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IGNoaWxkLm1hdGVyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG5cbi8vIC4uLiByZXN0IG9mIHRoZSBTY2VuZSBjbGFzc1xuXG4gIFxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgLy8gRGlzcG9zZSBvZiBnZW9tZXRyaWVzLCBtYXRlcmlhbHMsIHRleHR1cmVzLCBldGMuXG4gICAgdGhpcy5zY2VuZS50cmF2ZXJzZShvYmplY3QgPT4ge1xuICAgICAgaWYgKCFvYmplY3QuaXNNZXNoKSByZXR1cm47XG5cbiAgICAgIG9iamVjdC5nZW9tZXRyeS5kaXNwb3NlKCk7XG5cbiAgICAgIGlmIChvYmplY3QubWF0ZXJpYWwuaXNNYXRlcmlhbCkge1xuICAgICAgICB0aGlzLmNsZWFuTWF0ZXJpYWwob2JqZWN0Lm1hdGVyaWFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFuIGFycmF5IG9mIG1hdGVyaWFsc1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG9iamVjdC5tYXRlcmlhbCkgY2xlYW5NYXRlcmlhbChtYXRlcmlhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBjbGVhbnVwIGlmIG5lZWRlZFxuICBcbiAgfVxuXG4gIGNsZWFuTWF0ZXJpYWwobWF0ZXJpYWwpIHtcbiAgICBtYXRlcmlhbC5kaXNwb3NlKCk7XG4gIFxuICAgIC8vIERpc3Bvc2UgdGV4dHVyZXNcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtYXRlcmlhbCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbWF0ZXJpYWxba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdtaW5GaWx0ZXInIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuXG4iXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiT0JKTG9hZGVyIiwiU2NlbmUiLCJpbml0IiwicmVuZGVyZXIiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZG9tRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsImNhbnZhcyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImdhbW1hT3V0cHV0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY2FtZXJhIiwieiIsImNvbnRyb2xzIiwidGFyZ2V0Iiwic2V0IiwiYWRkTGlnaHRzIiwiYWRkQmFja2dyb3VuZFNwaGVyZSIsImltYWdlMzYwUGF0aCIsImxvYWRPYmpNb2RlbCIsIm9ialBhdGgiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlT2JqZWN0SW5mb0FycmF5IiwicHJpbnRTY2VuZVN0YXRlIiwiZXZlbnQiLCJrZXkiLCJzbmFwc2hvdEpTT04iLCJwcm9tcHQiLCJyZXN0b3JlU2NlbmVTdGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJzY2VuZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsInBvaW50TGlnaHQxIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHQyIiwidGV4dHVyZVBhdGgiLCJzcGhlcmVHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5Iiwic2NhbGUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInNwaGVyZVRleHR1cmUiLCJsb2FkIiwic3BoZXJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNwaGVyZU1lc2giLCJNZXNoIiwib2JqZWN0SW5mb0FycmF5IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqZWN0Iiwic2NlbmVTdGF0ZUpTT04iLCJhZGRFbGVtZW50IiwiZWxlbWVudFBhdGgiLCJvcHRpb25zIiwibWF0ZXJpYWwiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkT2JqTW9kZWxXaXRoTWF0ZXJpYWwiLCJpc01lc2giLCJkaXNwb3NlIiwiZ2VvbWV0cnkiLCJpc01hdGVyaWFsIiwiY2xlYW5NYXRlcmlhbCIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});