"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_components_Card_index_tsx",{

/***/ "(app-pages-browser)/./redux/slice/cartSlice.tsx":
/*!***********************************!*\
  !*** ./redux/slice/cartSlice.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; },\n/* harmony export */   clearCartData: function() { return /* binding */ clearCartData; },\n/* harmony export */   loadCartDataFromLocalStorage: function() { return /* binding */ loadCartDataFromLocalStorage; },\n/* harmony export */   removeFromCart: function() { return /* binding */ removeFromCart; },\n/* harmony export */   updateQuantity: function() { return /* binding */ updateQuantity; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst loadCartDataFromLocalStorage = ()=>{\n    try {\n        const cartData = localStorage.getItem(\"cart\");\n        return cartData ? JSON.parse(cartData) : [];\n    } catch (error) {\n        console.error(\"Error loading CartData from localStorage:\", error);\n        return [];\n    }\n};\nconst saveCartDataToLocalStorage = (cartData)=>{\n    try {\n        localStorage.setItem(\"cart\", JSON.stringify(cartData));\n    } catch (error) {\n        console.error(\"Error saving CartData to localStorage:\", error);\n    }\n};\nconst initialState = {\n    cartData: loadCartDataFromLocalStorage(),\n    cartCount: loadCartDataFromLocalStorage().length\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addToCart: (state, action)=>{\n            const itemToAdd = action.payload;\n            const existingItem = state.cartData.find((item)=>item.id === itemToAdd.id);\n            if (existingItem) {\n                existingItem.quantity += 1;\n            } else {\n                state.cartData.push({\n                    ...itemToAdd,\n                    quantity: 1\n                });\n            }\n            saveCartDataToLocalStorage(state.cartData);\n            state.cartCount++;\n        },\n        updateQuantity: (state, action)=>{\n            const { id, quantity } = action.payload;\n            const itemToUpdate = state.cartData.find((item)=>item.id === id);\n            if (itemToUpdate) {\n                itemToUpdate.quantity = quantity;\n                saveCartDataToLocalStorage(state.cartData);\n            }\n        },\n        removeFromCart: (state, action)=>{\n            const idToRemove = action.payload;\n            const itemIndexToRemove = state.cartData.findIndex((item)=>item.id === idToRemove);\n            if (itemIndexToRemove !== -1) {\n                const itemToRemove = state.cartData[itemIndexToRemove];\n                state.cartData.splice(itemIndexToRemove, 1);\n                saveCartDataToLocalStorage(state.cartData);\n            }\n        },\n        clearCartData: (state)=>{\n            state.cartData = [];\n            saveCartDataToLocalStorage([]);\n            state.cartCount = 0;\n        }\n    }\n});\nconst { addToCart, removeFromCart, updateQuantity, clearCartData } = cartSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlL2NhcnRTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBZ0J2RCxNQUFNQywrQkFBK0I7SUFDMUMsSUFBSTtRQUNGLE1BQU1DLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztRQUN0QyxPQUFPRixXQUFXRyxLQUFLQyxLQUFLLENBQUNKLFlBQVksRUFBRTtJQUM3QyxFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZDQUE2Q0E7UUFDM0QsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFO0FBRUYsTUFBTUUsNkJBQTZCLENBQUNQO0lBQ2xDLElBQUk7UUFDRkMsYUFBYU8sT0FBTyxDQUFDLFFBQVFMLEtBQUtNLFNBQVMsQ0FBQ1Q7SUFDOUMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQ0FBMENBO0lBQzFEO0FBQ0Y7QUFFQSxNQUFNSyxlQUEwQjtJQUM5QlYsVUFBVUQ7SUFDVlksV0FBV1osK0JBQStCYSxNQUFNO0FBQ2xEO0FBRUEsTUFBTUMsWUFBWWYsNkRBQVdBLENBQUM7SUFDNUJnQixNQUFNO0lBQ05KO0lBQ0FLLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQixNQUFNQyxZQUFZRCxPQUFPRSxPQUFPO1lBQ2hDLE1BQU1DLGVBQWVKLE1BQU1qQixRQUFRLENBQUNzQixJQUFJLENBQ3RDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0wsVUFBVUssRUFBRTtZQUVwQyxJQUFJSCxjQUFjO2dCQUNoQkEsYUFBYUksUUFBUSxJQUFJO1lBQzNCLE9BQU87Z0JBQ0xSLE1BQU1qQixRQUFRLENBQUMwQixJQUFJLENBQUM7b0JBQUUsR0FBR1AsU0FBUztvQkFBRU0sVUFBVTtnQkFBRTtZQUNsRDtZQUNBbEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUN6Q2lCLE1BQU1OLFNBQVM7UUFDakI7UUFDQWdCLGdCQUFnQixDQUNkVixPQUNBQztZQUVBLE1BQU0sRUFBRU0sRUFBRSxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsT0FBT0UsT0FBTztZQUN2QyxNQUFNUSxlQUFlWCxNQUFNakIsUUFBUSxDQUFDc0IsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0E7WUFFL0QsSUFBSUksY0FBYztnQkFDaEJBLGFBQWFILFFBQVEsR0FBR0E7Z0JBQ3hCbEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUMzQztRQUNGO1FBQ0E2QixnQkFBZ0IsQ0FBQ1osT0FBT0M7WUFDdEIsTUFBTVksYUFBYVosT0FBT0UsT0FBTztZQUNqQyxNQUFNVyxvQkFBb0JkLE1BQU1qQixRQUFRLENBQUNnQyxTQUFTLENBQ2hELENBQUNULE9BQVNBLEtBQUtDLEVBQUUsS0FBS007WUFHeEIsSUFBSUMsc0JBQXNCLENBQUMsR0FBRztnQkFDNUIsTUFBTUUsZUFBZWhCLE1BQU1qQixRQUFRLENBQUMrQixrQkFBa0I7Z0JBQ3REZCxNQUFNakIsUUFBUSxDQUFDa0MsTUFBTSxDQUFDSCxtQkFBbUI7Z0JBQ3pDeEIsMkJBQTJCVSxNQUFNakIsUUFBUTtZQUMzQztRQUNGO1FBQ0FtQyxlQUFlLENBQUNsQjtZQUNkQSxNQUFNakIsUUFBUSxHQUFHLEVBQUU7WUFDbkJPLDJCQUEyQixFQUFFO1lBQzdCVSxNQUFNTixTQUFTLEdBQUc7UUFDcEI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSyxTQUFTLEVBQUVhLGNBQWMsRUFBRUYsY0FBYyxFQUFFUSxhQUFhLEVBQUUsR0FDdkV0QixVQUFVdUIsT0FBTyxDQUFDO0FBRXBCLCtEQUFldkIsVUFBVXdCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZS9jYXJ0U2xpY2UudHN4PzQwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgaW1hZ2VTcmM6IHN0cmluZyB8IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgcHJpY2U/OiBudW1iZXI7XG4gIHNsdWc6IHN0cmluZzsgLy8gQWRkIHRoZSAnc2x1ZycgcHJvcGVydHkgaGVyZVxufVxuXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcbiAgY2FydERhdGE6IENhcnRJdGVtW107XG4gIGNhcnRDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENhcnREYXRhRnJvbUxvY2FsU3RvcmFnZSA9ICgpOiBDYXJ0SXRlbVtdID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKTtcbiAgICByZXR1cm4gY2FydERhdGEgPyBKU09OLnBhcnNlKGNhcnREYXRhKSA6IFtdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIENhcnREYXRhIGZyb20gbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBzYXZlQ2FydERhdGFUb0xvY2FsU3RvcmFnZSA9IChjYXJ0RGF0YTogQ2FydEl0ZW1bXSkgPT4ge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0RGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgQ2FydERhdGEgdG8gbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ2FydFN0YXRlID0ge1xuICBjYXJ0RGF0YTogbG9hZENhcnREYXRhRnJvbUxvY2FsU3RvcmFnZSgpLFxuICBjYXJ0Q291bnQ6IGxvYWRDYXJ0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoKS5sZW5ndGgsXG59O1xuXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9DYXJ0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDYXJ0SXRlbT4pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1Ub0FkZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gc3RhdGUuY2FydERhdGEuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1Ub0FkZC5pZFxuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgICAgZXhpc3RpbmdJdGVtLnF1YW50aXR5ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5jYXJ0RGF0YS5wdXNoKHsgLi4uaXRlbVRvQWRkLCBxdWFudGl0eTogMSB9KTtcbiAgICAgIH1cbiAgICAgIHNhdmVDYXJ0RGF0YVRvTG9jYWxTdG9yYWdlKHN0YXRlLmNhcnREYXRhKTtcbiAgICAgIHN0YXRlLmNhcnRDb3VudCsrO1xuICAgIH0sXG4gICAgdXBkYXRlUXVhbnRpdHk6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlcjsgcXVhbnRpdHk6IG51bWJlciB9PlxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgcXVhbnRpdHkgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgaXRlbVRvVXBkYXRlID0gc3RhdGUuY2FydERhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXG4gICAgICBpZiAoaXRlbVRvVXBkYXRlKSB7XG4gICAgICAgIGl0ZW1Ub1VwZGF0ZS5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgICBzYXZlQ2FydERhdGFUb0xvY2FsU3RvcmFnZShzdGF0ZS5jYXJ0RGF0YSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVGcm9tQ2FydDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPik6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgaWRUb1JlbW92ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgaXRlbUluZGV4VG9SZW1vdmUgPSBzdGF0ZS5jYXJ0RGF0YS5maW5kSW5kZXgoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBpZFRvUmVtb3ZlXG4gICAgICApO1xuXG4gICAgICBpZiAoaXRlbUluZGV4VG9SZW1vdmUgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHN0YXRlLmNhcnREYXRhW2l0ZW1JbmRleFRvUmVtb3ZlXTtcbiAgICAgICAgc3RhdGUuY2FydERhdGEuc3BsaWNlKGl0ZW1JbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgc2F2ZUNhcnREYXRhVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUuY2FydERhdGEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXJDYXJ0RGF0YTogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0RGF0YSA9IFtdO1xuICAgICAgc2F2ZUNhcnREYXRhVG9Mb2NhbFN0b3JhZ2UoW10pO1xuICAgICAgc3RhdGUuY2FydENvdW50ID0gMDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIHVwZGF0ZVF1YW50aXR5LCBjbGVhckNhcnREYXRhIH0gPVxuICBjYXJ0U2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJsb2FkQ2FydERhdGFGcm9tTG9jYWxTdG9yYWdlIiwiY2FydERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwic2F2ZUNhcnREYXRhVG9Mb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaW5pdGlhbFN0YXRlIiwiY2FydENvdW50IiwibGVuZ3RoIiwiY2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9DYXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJpdGVtVG9BZGQiLCJwYXlsb2FkIiwiZXhpc3RpbmdJdGVtIiwiZmluZCIsIml0ZW0iLCJpZCIsInF1YW50aXR5IiwicHVzaCIsInVwZGF0ZVF1YW50aXR5IiwiaXRlbVRvVXBkYXRlIiwicmVtb3ZlRnJvbUNhcnQiLCJpZFRvUmVtb3ZlIiwiaXRlbUluZGV4VG9SZW1vdmUiLCJmaW5kSW5kZXgiLCJpdGVtVG9SZW1vdmUiLCJzcGxpY2UiLCJjbGVhckNhcnREYXRhIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slice/cartSlice.tsx\n"));

/***/ })

});