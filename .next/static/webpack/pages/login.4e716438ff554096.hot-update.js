"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/utils/FirebaseConfig.js":
/*!*************************************!*\
  !*** ./src/utils/FirebaseConfig.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseAuth\": function() { return /* binding */ firebaseAuth; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA7HMKjOrZ3R3LOZbGQEI11c-or1FJHhIA\",\n    authDomain: \"wapp-eca53.firebaseapp.com\",\n    projectId: \"wapp-eca53\",\n    storageBucket: \"wapp-eca53.appspot.com\",\n    messagingSenderId: \"561272908549\",\n    appId: \"1:561272908549:web:2cdc16c6347711f980656c\",\n    measurementId: \"G-BV6KX6RJ94\"\n};\n// const firebaseConfig = {\n//     apiKey: \"AIzaSyA7HMKjOrZ3R3LOZbGQEI11c-or1FJHhIA\",\n//     authDomain: \"wapp-eca53.firebaseapp.com\",\n//     projectId: \"wapp-eca53\",\n//     storageBucket: \"wapp-eca53.appspot.com\",\n//     messagingSenderId: \"561272908549\",\n//     appId: \"1:561272908549:web:2cdc16c6347711f980656c\",\n//     measurementId: \"G-BV6KX6RJ94\"\n// };\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst firebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvRmlyZWJhc2VDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ0w7QUFFeEMsTUFBTUUsaUJBQWlCO0lBQ25CQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ25CO0FBQ0EsMkJBQTJCO0FBQzNCLHlEQUF5RDtBQUN6RCxnREFBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLCtDQUErQztBQUMvQyx5Q0FBeUM7QUFDekMsMERBQTBEO0FBQzFELG9DQUFvQztBQUNwQyxLQUFLO0FBRUwsTUFBTUMsTUFBTVYsMkRBQWFBLENBQUNFO0FBRW5CLE1BQU1TLGVBQWVWLHNEQUFPQSxDQUFDUyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9GaXJlYmFzZUNvbmZpZy5qcz9jNzJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QTdITUtqT3JaM1IzTE9aYkdRRUkxMWMtb3IxRkpIaElBXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIndhcHAtZWNhNTMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwid2FwcC1lY2E1M1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ3YXBwLWVjYTUzLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1NjEyNzI5MDg1NDlcIixcclxuICAgIGFwcElkOiBcIjE6NTYxMjcyOTA4NTQ5OndlYjoyY2RjMTZjNjM0NzcxMWY5ODA2NTZjXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctQlY2S1g2Uko5NFwiXHJcbn07XHJcbi8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4vLyAgICAgYXBpS2V5OiBcIkFJemFTeUE3SE1Lak9yWjNSM0xPWmJHUUVJMTFjLW9yMUZKSGhJQVwiLFxyXG4vLyAgICAgYXV0aERvbWFpbjogXCJ3YXBwLWVjYTUzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4vLyAgICAgcHJvamVjdElkOiBcIndhcHAtZWNhNTNcIixcclxuLy8gICAgIHN0b3JhZ2VCdWNrZXQ6IFwid2FwcC1lY2E1My5hcHBzcG90LmNvbVwiLFxyXG4vLyAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTYxMjcyOTA4NTQ5XCIsXHJcbi8vICAgICBhcHBJZDogXCIxOjU2MTI3MjkwODU0OTp3ZWI6MmNkYzE2YzYzNDc3MTFmOTgwNjU2Y1wiLFxyXG4vLyAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUJWNktYNlJKOTRcIlxyXG4vLyB9O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2VBdXRoID0gZ2V0QXV0aChhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmViYXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/FirebaseConfig.js\n"));

/***/ })

});