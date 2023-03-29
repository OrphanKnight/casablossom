// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
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
  },
});

export const cart = cartSlice.reducer;
export const { addToCart, incrementqty, decrementqty, removeItem, updateCart } =
  cartSlice.actions;
