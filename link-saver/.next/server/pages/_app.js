/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children  }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check active sessions and sets the user\n        _lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getSession().then(({ data: { session  }  })=>{\n            setUser(session?.user ?? null);\n            setLoading(false);\n        });\n        // Listen for changes on auth state (sign in, sign out, etc.)\n        const { data: { subscription  }  } = _lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setUser(session?.user ?? null);\n            setLoading(false);\n        });\n        return ()=>subscription.unsubscribe();\n    }, []);\n    const value = {\n        signUp: (data)=>_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signUp(data),\n        signIn: (data)=>_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signInWithPassword(data),\n        signOut: ()=>_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signOut(),\n        user\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRTtBQUM1QjtBQUUxQyxNQUFNSyw0QkFBY0wsb0RBQWFBLENBQUMsQ0FBQztBQUU1QixTQUFTTSxhQUFhLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsMENBQTBDO1FBQzFDRSxtRUFBd0IsR0FBR1UsSUFBSSxDQUFDLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBRSxHQUFLO1lBQ3pEUCxRQUFRTyxTQUFTUixRQUFRLElBQUk7WUFDN0JHLFdBQVcsS0FBSztRQUNsQjtRQUVBLDZEQUE2RDtRQUM3RCxNQUFNLEVBQUVJLE1BQU0sRUFBRUUsYUFBWSxFQUFFLEdBQUUsR0FBR2IsMEVBQStCLENBQUMsQ0FBQ2UsUUFBUUgsVUFBWTtZQUN0RlAsUUFBUU8sU0FBU1IsUUFBUSxJQUFJO1lBQzdCRyxXQUFXLEtBQUs7UUFDbEI7UUFFQSxPQUFPLElBQU1NLGFBQWFHLFdBQVc7SUFDdkMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsUUFBUTtRQUNaQyxRQUFRLENBQUNQLE9BQVNYLCtEQUFvQixDQUFDVztRQUN2Q1EsUUFBUSxDQUFDUixPQUFTWCwyRUFBZ0MsQ0FBQ1c7UUFDbkRVLFNBQVMsSUFBTXJCLGdFQUFxQjtRQUNwQ0k7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSCxZQUFZcUIsUUFBUTtRQUFDTCxPQUFPQTtrQkFDMUIsQ0FBQ1gsV0FBV0g7Ozs7OztBQUduQixDQUFDO0FBRU0sTUFBTW9CLFVBQVUsSUFBTTtJQUMzQixPQUFPMUIsaURBQVVBLENBQUNJO0FBQ3BCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rLXNhdmVyLy4vY29udGV4dHMvQXV0aENvbnRleHQuanM/NTljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vbGliL3N1cGFiYXNlJ1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBhY3RpdmUgc2Vzc2lvbnMgYW5kIHNldHMgdGhlIHVzZXJcclxuICAgIHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpLnRoZW4oKHsgZGF0YTogeyBzZXNzaW9uIH0gfSkgPT4ge1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgPz8gbnVsbClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIG9uIGF1dGggc3RhdGUgKHNpZ24gaW4sIHNpZ24gb3V0LCBldGMuKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHN1YnNjcmlwdGlvbiB9IH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQsIHNlc3Npb24pID0+IHtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyID8/IG51bGwpXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIHNpZ25VcDogKGRhdGEpID0+IHN1cGFiYXNlLmF1dGguc2lnblVwKGRhdGEpLFxyXG4gICAgc2lnbkluOiAoZGF0YSkgPT4gc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoUGFzc3dvcmQoZGF0YSksXHJcbiAgICBzaWduT3V0OiAoKSA9PiBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKSxcclxuICAgIHVzZXIsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHshbG9hZGluZyAmJiBjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF1dGgiLCJnZXRTZXNzaW9uIiwidGhlbiIsImRhdGEiLCJzZXNzaW9uIiwic3Vic2NyaXB0aW9uIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJfZXZlbnQiLCJ1bnN1YnNjcmliZSIsInZhbHVlIiwic2lnblVwIiwic2lnbkluIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2lnbk91dCIsIlByb3ZpZGVyIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServiceSupabase\": () => (/* binding */ getServiceSupabase),\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://ybhnortglxsgrmpugkny.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliaG5vcnRnbHhzZ3JtcHVna255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODkzNzgsImV4cCI6MjA2Mzc2NTM3OH0.2EZI4oUTS0FnkKl8JrtK_bX3cUB5brSqhImem3_faBM\";\n// Create a single supabase client for the browser\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey, {\n    auth: {\n        persistSession: true,\n        autoRefreshToken: true // This ensures the token is refreshed automatically\n    }\n});\n// Helper to get server-side client with user's token (for API routes)\nconst getServiceSupabase = (accessToken)=>{\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey, {\n        global: {\n            headers: {\n                Authorization: `Bearer ${accessToken}`\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUVyRCxNQUFNQyxjQUFjQywwQ0FBb0M7QUFDeEQsTUFBTUcsa0JBQWtCSCxrTkFBeUM7QUFFakUsa0RBQWtEO0FBQzNDLE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFhSSxpQkFBaUI7SUFDakVHLE1BQU07UUFDSkMsZ0JBQWdCLElBQUk7UUFDcEJDLGtCQUFrQixJQUFJLENBQUMsb0RBQW9EO0lBQzdFO0FBQ0YsR0FBRztBQUVILHNFQUFzRTtBQUMvRCxNQUFNQyxxQkFBcUIsQ0FBQ0MsY0FBZ0I7SUFDakQsT0FBT1osbUVBQVlBLENBQ2pCQyxhQUNBSSxpQkFDQTtRQUNFUSxRQUFRO1lBQ05DLFNBQVM7Z0JBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVILFlBQVksQ0FBQztZQUN4QztRQUNGO0lBQ0Y7QUFFSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluay1zYXZlci8uL2xpYi9zdXBhYmFzZS5qcz8xNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XHJcblxyXG4vLyBDcmVhdGUgYSBzaW5nbGUgc3VwYWJhc2UgY2xpZW50IGZvciB0aGUgYnJvd3NlclxyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSwge1xyXG4gIGF1dGg6IHtcclxuICAgIHBlcnNpc3RTZXNzaW9uOiB0cnVlLCAvLyBUaGlzIGVuc3VyZXMgdGhlIHNlc3Npb24gaXMgcGVyc2lzdGVkIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgYXV0b1JlZnJlc2hUb2tlbjogdHJ1ZSAvLyBUaGlzIGVuc3VyZXMgdGhlIHRva2VuIGlzIHJlZnJlc2hlZCBhdXRvbWF0aWNhbGx5XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEhlbHBlciB0byBnZXQgc2VydmVyLXNpZGUgY2xpZW50IHdpdGggdXNlcidzIHRva2VuIChmb3IgQVBJIHJvdXRlcylcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZpY2VTdXBhYmFzZSA9IChhY2Nlc3NUb2tlbikgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVDbGllbnQoXHJcbiAgICBzdXBhYmFzZVVybCxcclxuICAgIHN1cGFiYXNlQW5vbktleSxcclxuICAgIHtcclxuICAgICAgZ2xvYmFsOiB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIiwiYXV0b1JlZnJlc2hUb2tlbiIsImdldFNlcnZpY2VTdXBhYmFzZSIsImFjY2Vzc1Rva2VuIiwiZ2xvYmFsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDeEI7QUFFOUIsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmstc2F2ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();