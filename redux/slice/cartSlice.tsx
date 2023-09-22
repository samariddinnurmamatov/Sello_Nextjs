import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity: number;
  imageURL: string | number;
  name?: string | number;
  price?: number;
  slug: string; // Add the 'slug' property here
}

interface CartState {
  cartData: CartItem[];
  cartCount: number;
}

export const loadCartDataFromLocalStorage = (): CartItem[] => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading CartData from localStorage:", error);
    return [];
  }
};

const saveCartDataToLocalStorage = (cartData: CartItem[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartData));
  } catch (error) {
    console.error("Error saving CartData to localStorage:", error);
  }
};

const initialState: CartState = {
  cartData: loadCartDataFromLocalStorage(),
  cartCount: loadCartDataFromLocalStorage().length,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItem = state.cartData.find(
        (item) => item.id === itemToAdd.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartData.push({ ...itemToAdd, quantity: 1 });
      }
      saveCartDataToLocalStorage(state.cartData);
      state.cartCount++;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ): void => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartData.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveCartDataToLocalStorage(state.cartData);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>): void => {
      const idToRemove = action.payload;
      const itemIndexToRemove = state.cartData.findIndex(
        (item) => item.id === idToRemove
      );

      if (itemIndexToRemove !== -1) {
        const itemToRemove = state.cartData[itemIndexToRemove];
        state.cartData.splice(itemIndexToRemove, 1);
        saveCartDataToLocalStorage(state.cartData);
      }
    },
    clearCartData: (state) => {
      state.cartData = [];
      saveCartDataToLocalStorage([]);
      state.cartCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCartData } =
  cartSlice.actions;

export default cartSlice.reducer;
