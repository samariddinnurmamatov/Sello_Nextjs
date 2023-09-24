"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(public)/savat/page",{

/***/ "(app-pages-browser)/./redux/slice/cartSlice.tsx":
/*!***********************************!*\
  !*** ./redux/slice/cartSlice.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; },\n/* harmony export */   clearCartData: function() { return /* binding */ clearCartData; },\n/* harmony export */   loadCartDataFromLocalStorage: function() { return /* binding */ loadCartDataFromLocalStorage; },\n/* harmony export */   removeFromCart: function() { return /* binding */ removeFromCart; },\n/* harmony export */   updateQuantity: function() { return /* binding */ updateQuantity; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst loadCartDataFromLocalStorage = ()=>{\n    try {\n        const cartData = localStorage.getItem(\"cart\");\n        return cartData ? JSON.parse(cartData) : [];\n    } catch (error) {\n        console.error(\"Error loading CartData from localStorage:\", error);\n        return [];\n    }\n};\nconst saveCartDataToLocalStorage = (cartData)=>{\n    try {\n        localStorage.setItem(\"cart\", JSON.stringify(cartData));\n    } catch (error) {\n        console.error(\"Error saving CartData to localStorage:\", error);\n    }\n};\nconst initialState = {\n    cartData: loadCartDataFromLocalStorage(),\n    cartCount: loadCartDataFromLocalStorage().length\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addToCart: (state, action)=>{\n            const itemToAdd = action.payload;\n            const existingItem = state.cartData.find((item)=>item.id === itemToAdd.id);\n            if (existingItem) {\n                existingItem.quantity += 1;\n            } else {\n                state.cartData.push({\n                    ...itemToAdd,\n                    quantity: 1\n                });\n            }\n            saveCartDataToLocalStorage(state.cartData);\n            state.cartCount++;\n        },\n        updateQuantity: (state, action)=>{\n            const { id, quantity } = action.payload;\n            const itemToUpdate = state.cartData.find((item)=>item.id === id);\n            if (itemToUpdate) {\n                itemToUpdate.quantity = quantity;\n                saveCartDataToLocalStorage(state.cartData);\n            }\n        },\n        removeFromCart: (state, action)=>{\n            const idToRemove = action.payload;\n            const itemIndexToRemove = state.cartData.findIndex((item)=>item.id === idToRemove);\n            if (itemIndexToRemove !== -1) {\n                const itemToRemove = state.cartData[itemIndexToRemove];\n                state.cartData.splice(itemIndexToRemove, 1);\n                saveCartDataToLocalStorage(state.cartData);\n            }\n        },\n        clearCartData: (state)=>{\n            state.cartData = [];\n            saveCartDataToLocalStorage([]);\n            state.cartCount = 0;\n        }\n    }\n});\nconst { addToCart, removeFromCart, updateQuantity, clearCartData } = cartSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlL2NhcnRTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBaUJ2RCxNQUFNQywrQkFBK0I7SUFDMUMsSUFBSTtRQUNGLE1BQU1DLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztRQUN0QyxPQUFPRixXQUFXRyxLQUFLQyxLQUFLLENBQUNKLFlBQVksRUFBRTtJQUM3QyxFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZDQUE2Q0E7UUFDM0QsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFO0FBRUYsTUFBTUUsNkJBQTZCLENBQUNQO0lBQ2xDLElBQUk7UUFDRkMsYUFBYU8sT0FBTyxDQUFDLFFBQVFMLEtBQUtNLFNBQVMsQ0FBQ1Q7SUFDOUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQ0FBMENBO0lBQzFEO0FBQ0Y7QUFFQSxNQUFNSyxlQUEwQjtJQUM5QlYsVUFBVUQ7SUFDVlksV0FBV1osK0JBQStCYSxNQUFNO0FBQ2xEO0FBRUEsTUFBTUMsWUFBWWYsNkRBQVdBLENBQUM7SUFDNUJnQixNQUFNO0lBQ05KO0lBQ0FLLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQixNQUFNQyxZQUFZRCxPQUFPRSxPQUFPO1lBQ2hDLE1BQU1DLGVBQWVKLE1BQU1qQixRQUFRLENBQUNzQixJQUFJLENBQ3RDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0wsVUFBVUssRUFBRTtZQUVwQyxJQUFJSCxjQUFjO2dCQUNoQkEsYUFBYUksUUFBUSxJQUFJO1lBQzNCLE9BQU87Z0JBQ0xSLE1BQU1qQixRQUFRLENBQUMwQixJQUFJLENBQUM7b0JBQUUsR0FBR1AsU0FBUztvQkFBRU0sVUFBVTtnQkFBRTtZQUNsRDtZQUNBbEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUN6Q2lCLE1BQU1OLFNBQVM7UUFDakI7UUFDQWdCLGdCQUFnQixDQUNkVixPQUNBQztZQUVBLE1BQU0sRUFBRU0sRUFBRSxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsT0FBT0UsT0FBTztZQUN2QyxNQUFNUSxlQUFlWCxNQUFNakIsUUFBUSxDQUFDc0IsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0E7WUFFL0QsSUFBSUksY0FBYztnQkFDaEJBLGFBQWFILFFBQVEsR0FBR0E7Z0JBQ3hCbEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUMzQztRQUNGO1FBQ0E2QixnQkFBZ0IsQ0FBQ1osT0FBT0M7WUFDdEIsTUFBTVksYUFBYVosT0FBT0UsT0FBTztZQUNqQyxNQUFNVyxvQkFBb0JkLE1BQU1qQixRQUFRLENBQUNnQyxTQUFTLENBQ2hELENBQUNULE9BQVNBLEtBQUtDLEVBQUUsS0FBS007WUFHeEIsSUFBSUMsc0JBQXNCLENBQUMsR0FBRztnQkFDNUIsTUFBTUUsZUFBZWhCLE1BQU1qQixRQUFRLENBQUMrQixrQkFBa0I7Z0JBQ3REZCxNQUFNakIsUUFBUSxDQUFDa0MsTUFBTSxDQUFDSCxtQkFBbUI7Z0JBQ3pDeEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUMzQztRQUNGO1FBQ0FtQyxlQUFlLENBQUNsQjtZQUNkQSxNQUFNakIsUUFBUSxHQUFHLEVBQUU7WUFDbkJPLDJCQUEyQixFQUFFO1lBQzdCVSxNQUFNTixTQUFTLEdBQUc7UUFDcEI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSyxTQUFTLEVBQUVhLGNBQWMsRUFBRUYsY0FBYyxFQUFFUSxhQUFhLEVBQUUsR0FDdkV0QixVQUFVdUIsT0FBTyxDQUFDO0FBRXBCLCtEQUFldkIsVUFBVXdCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZS9jYXJ0U2xpY2UudHN4PzQwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5pbnRlcmZhY2UgQ2FydEl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICBxdWFudGl0eTogbnVtYmVyO1xuICBpbWFnZVVSTDogc3RyaW5nIHwgbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcmljZT86IG51bWJlciB8IHN0cmluZztcbiAgZGlzY291bnRlZF9wcmljZT86IG51bWJlciB8IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nOyAvLyBBZGQgdGhlICdzbHVnJyBwcm9wZXJ0eSBoZXJlXG59XG5cbmludGVyZmFjZSBDYXJ0U3RhdGUge1xuICBjYXJ0RGF0YTogQ2FydEl0ZW1bXTtcbiAgY2FydENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2FydERhdGFGcm9tTG9jYWxTdG9yYWdlID0gKCk6IENhcnRJdGVtW10gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNhcnREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpO1xuICAgIHJldHVybiBjYXJ0RGF0YSA/IEpTT04ucGFyc2UoY2FydERhdGEpIDogW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgQ2FydERhdGEgZnJvbSBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVDYXJ0RGF0YVRvTG9jYWxTdG9yYWdlID0gKGNhcnREYXRhOiBDYXJ0SXRlbVtdKSA9PiB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnREYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBDYXJ0RGF0YSB0byBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XG4gIGNhcnREYXRhOiBsb2FkQ2FydERhdGFGcm9tTG9jYWxTdG9yYWdlKCksXG4gIGNhcnRDb3VudDogbG9hZENhcnREYXRhRnJvbUxvY2FsU3RvcmFnZSgpLmxlbmd0aCxcbn07XG5cbmNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPENhcnRJdGVtPikgPT4ge1xuICAgICAgY29uc3QgaXRlbVRvQWRkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBzdGF0ZS5jYXJ0RGF0YS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaXRlbVRvQWRkLmlkXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgICBleGlzdGluZ0l0ZW0ucXVhbnRpdHkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnREYXRhLnB1c2goeyAuLi5pdGVtVG9BZGQsIHF1YW50aXR5OiAxIH0pO1xuICAgICAgfVxuICAgICAgc2F2ZUNhcnREYXRhVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUuY2FydERhdGEpO1xuICAgICAgc3RhdGUuY2FydENvdW50Kys7XG4gICAgfSxcbiAgICB1cGRhdGVRdWFudGl0eTogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpZDogbnVtYmVyOyBxdWFudGl0eTogbnVtYmVyIH0+XG4gICAgKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB7IGlkLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBpdGVtVG9VcGRhdGUgPSBzdGF0ZS5jYXJ0RGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbiAgICAgIGlmIChpdGVtVG9VcGRhdGUpIHtcbiAgICAgICAgaXRlbVRvVXBkYXRlLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gICAgICAgIHNhdmVDYXJ0RGF0YVRvTG9jYWxTdG9yYWdlKHN0YXRlLmNhcnREYXRhKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUZyb21DYXJ0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBpZFRvUmVtb3ZlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBpdGVtSW5kZXhUb1JlbW92ZSA9IHN0YXRlLmNhcnREYXRhLmZpbmRJbmRleChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkVG9SZW1vdmVcbiAgICAgICk7XG5cbiAgICAgIGlmIChpdGVtSW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gc3RhdGUuY2FydERhdGFbaXRlbUluZGV4VG9SZW1vdmVdO1xuICAgICAgICBzdGF0ZS5jYXJ0RGF0YS5zcGxpY2UoaXRlbUluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgICBzYXZlQ2FydERhdGFUb0xvY2FsU3RvcmFnZShzdGF0ZS5jYXJ0RGF0YSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckNhcnREYXRhOiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmNhcnREYXRhID0gW107XG4gICAgICBzYXZlQ2FydERhdGFUb0xvY2FsU3RvcmFnZShbXSk7XG4gICAgICBzdGF0ZS5jYXJ0Q291bnQgPSAwO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlUXVhbnRpdHksIGNsZWFyQ2FydERhdGEgfSA9XG4gIGNhcnRTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImxvYWRDYXJ0RGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJjYXJ0RGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJzYXZlQ2FydERhdGFUb0xvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpbml0aWFsU3RhdGUiLCJjYXJ0Q291bnQiLCJsZW5ndGgiLCJjYXJ0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0NhcnQiLCJzdGF0ZSIsImFjdGlvbiIsIml0ZW1Ub0FkZCIsInBheWxvYWQiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwicXVhbnRpdHkiLCJwdXNoIiwidXBkYXRlUXVhbnRpdHkiLCJpdGVtVG9VcGRhdGUiLCJyZW1vdmVGcm9tQ2FydCIsImlkVG9SZW1vdmUiLCJpdGVtSW5kZXhUb1JlbW92ZSIsImZpbmRJbmRleCIsIml0ZW1Ub1JlbW92ZSIsInNwbGljZSIsImNsZWFyQ2FydERhdGEiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slice/cartSlice.tsx\n"));

/***/ })

});