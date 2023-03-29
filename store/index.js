// https://www.youtube.com/watch?v=D2MqT4OEgoE&ab_channel=Academind
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { cart } from "./cartSlice";
import expandSidebar from "./ExpandSlice";
import { dialog } from "./DialogSlice";
const reducers = combineReducers({ cart, expandSidebar, dialog });

const congfig = {
  key: "root",
  storage,
};

const reducer = persistReducer(congfig, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
