import { createSlice } from "@reduxjs/toolkit";

const DialogSlice = createSlice({
  name: "dialog",
  initialState: {
    show: false,
    header: "",
    msgs: [],
    link: {
      link: "",
      link_text: "",
    },
  },
  reducers: {
    showDialog: (state, action) => {
      state.show = true;
      state.header = action.payload.header;
      state.msgs = action.payload.msgs;
      state.link = action.payload.link;
    },
    hideDialog: (state, action) => {
      state.show = false;
      state.header = "";
      state.msgs = [];
      state.link = {};
    },
  },
});

export const dialog = DialogSlice.reducer;

export const { showDialog, hideDialog } = DialogSlice.actions;
