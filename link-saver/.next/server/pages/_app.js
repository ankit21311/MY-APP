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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children  }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check for active session\n        const checkSession = async ()=>{\n            const { data: { session  }  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession();\n            setUser(session?.user || null);\n            setLoading(false);\n            // Listen for auth changes\n            const { data: { subscription  }  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n                setUser(session?.user || null);\n            });\n            return ()=>subscription.unsubscribe();\n        };\n        checkSession();\n    }, []);\n    const signUp = async (email, password)=>{\n        try {\n            const { error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signUp({\n                email,\n                password\n            });\n            if (error) throw error;\n            return true;\n        } catch (error) {\n            throw error;\n        }\n    };\n    const signIn = async (email, password)=>{\n        try {\n            const { error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signInWithPassword({\n                email,\n                password\n            });\n            if (error) throw error;\n            router.push(\"/\");\n        } catch (error) {\n            throw error;\n        }\n    };\n    const signOut = async ()=>{\n        await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n        router.push(\"/login\");\n    };\n    const value = {\n        user,\n        loading,\n        signUp,\n        signIn,\n        signOut\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQy9CO0FBQ0c7QUFFM0MsTUFBTU0sNEJBQWNOLG9EQUFhQTtBQUUxQixTQUFTTyxhQUFhLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU1VLFNBQVNULHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLDJCQUEyQjtRQUMzQixNQUFNWSxlQUFlLFVBQVk7WUFDL0IsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFFLEdBQUcsTUFBTVgsbUVBQXdCO1lBQzVESyxRQUFRTSxTQUFTUCxRQUFRLElBQUk7WUFDN0JHLFdBQVcsS0FBSztZQUVoQiwwQkFBMEI7WUFDMUIsTUFBTSxFQUFFRyxNQUFNLEVBQUVJLGFBQVksRUFBRSxHQUFFLEdBQUcsTUFBTWQsMEVBQStCLENBQ3RFLENBQUNnQixRQUFRTCxVQUFZO2dCQUNuQk4sUUFBUU0sU0FBU1AsUUFBUSxJQUFJO1lBQy9CO1lBR0YsT0FBTyxJQUFNVSxhQUFhRyxXQUFXO1FBQ3ZDO1FBRUFSO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVMsU0FBUyxPQUFPQyxPQUFPQyxXQUFhO1FBQ3hDLElBQUk7WUFDRixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1yQiwrREFBb0IsQ0FBQztnQkFDM0NtQjtnQkFDQUM7WUFDRjtZQUVBLElBQUlDLE9BQU8sTUFBTUEsTUFBTTtZQUN2QixPQUFPLElBQUk7UUFDYixFQUFFLE9BQU9BLE9BQU87WUFDZCxNQUFNQSxNQUFNO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLFNBQVMsT0FBT0gsT0FBT0MsV0FBYTtRQUN4QyxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNckIsMkVBQWdDLENBQUM7Z0JBQ3ZEbUI7Z0JBQ0FDO1lBQ0Y7WUFFQSxJQUFJQyxPQUFPLE1BQU1BLE1BQU07WUFDdkJiLE9BQU9nQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9ILE9BQU87WUFDZCxNQUFNQSxNQUFNO1FBQ2Q7SUFDRjtJQUVBLE1BQU1JLFVBQVUsVUFBWTtRQUMxQixNQUFNekIsZ0VBQXFCO1FBQzNCUSxPQUFPZ0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNRSxRQUFRO1FBQ1p0QjtRQUNBRTtRQUNBWTtRQUNBSTtRQUNBRztJQUNGO0lBRUEscUJBQU8sOERBQUN4QixZQUFZMEIsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUXZCOzs7Ozs7QUFDOUMsQ0FBQztBQUVNLFNBQVN5QixVQUFVO0lBQ3hCLE9BQU9oQyxpREFBVUEsQ0FBQ0s7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmstc2F2ZXIvLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcz81OWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2UnO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgZm9yIGFjdGl2ZSBzZXNzaW9uXHJcbiAgICBjb25zdCBjaGVja1Nlc3Npb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogeyBzZXNzaW9uIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBcclxuICAgICAgLy8gTGlzdGVuIGZvciBhdXRoIGNoYW5nZXNcclxuICAgICAgY29uc3QgeyBkYXRhOiB7IHN1YnNjcmlwdGlvbiB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKFxyXG4gICAgICAgIChfZXZlbnQsIHNlc3Npb24pID0+IHtcclxuICAgICAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlciB8fCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrU2Vzc2lvbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduVXAoe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoUGFzc3dvcmQoe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICB1c2VyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIHNpZ25VcCxcclxuICAgIHNpZ25JbixcclxuICAgIHNpZ25PdXQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiY2hlY2tTZXNzaW9uIiwiZGF0YSIsInNlc3Npb24iLCJhdXRoIiwiZ2V0U2Vzc2lvbiIsInN1YnNjcmlwdGlvbiIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50IiwidW5zdWJzY3JpYmUiLCJzaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzaWduSW4iLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJwdXNoIiwic2lnbk91dCIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ankit\\\\OneDrive\\\\Desktop\\\\My App\\\\link-saver\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUQ7QUFDeEI7QUFFL0IsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmstc2F2ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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