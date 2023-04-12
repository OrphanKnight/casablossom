import { configureStore } from "@reduxjs/toolkit";
import { addToCart, updateCart } from "@/store/cartSlice";
import thunk from "redux-thunk";

const initialState = {
  cart: {
    cartItems: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCart.type:
      return {
        ...state,
        cart: addToCart.reducer(state.cart, action),
      };
    case updateCart.type:
      return {
        ...state,
        cart: updateCart.reducer(state.cart, action),
      };
    default:
      return state;
  }
};

const createMockStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [thunk],
  });
};

export default createMockStore;
