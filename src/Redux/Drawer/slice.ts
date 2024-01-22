import {  createSlice } from "@reduxjs/toolkit";

 

export interface TypeDrawer {
  isMainOpen: boolean;
  sidebar: boolean;
}

const initialState: TypeDrawer = {
  isMainOpen: false,
  sidebar:false
};

const mainDrawerslice = createSlice({
  name: "drawers",
  initialState,
  reducers: {
    openMainDrawer: (state, action) => {
      state.isMainOpen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});

export const { openMainDrawer } = mainDrawerslice.actions;
export default mainDrawerslice.reducer;
