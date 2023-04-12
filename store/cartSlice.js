// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => {
        console.log("Customize", action.payload._uid, "ItemID", item._uid);
        return item._uid === action.payload._uid;
      });
      if (itemInCart) {
        itemInCart.qty += action.payload.qty;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    updateCart: (state, action) => {
      state.cartItems = action.payload;
    },

    incrementqty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.qty++;
    },

    decrementqty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.qty === 1) {
        item.qty = 1;
      } else {
        item.qty--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = removeItem;
    },
    toggleSelect: (state, action) => {
      console.log(
        "Item",
        JSON.stringify(
          state.cartItems.find((item) => item._uid === action.payload)
        )
      );
      const item = state.cartItems.find((item) => item._uid === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
    },

    toggleAllSelected: (state, action) => {
      state.cartItems = state.cartItems.map((item) => ({
        ...item,
        selected: action.payload,
      }));
    },

    removeSelectedItems: (state) => {
      const unselectedItems = state.cartItems.filter((item) => !item.selected);
      state.cartItems = unselectedItems;
    },
  },
});

export const cart = cartSlice.reducer;
export const {
  addToCart,
  incrementqty,
  decrementqty,
  removeItem,
  updateCart,
  toggleSelect,
  toggleAllSelected,
  removeSelectedItems,
} = cartSlice.actions;
