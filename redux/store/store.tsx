// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import favoriteReducer from "../slice/favoriteSlice";
// import authReducer, { name as authName } from "../slice/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    // [authName]: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
