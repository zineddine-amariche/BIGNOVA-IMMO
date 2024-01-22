import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalSliceState {
  showSideBarInformations: boolean;
  informations: boolean;
  sideBarType: boolean;
}

const initialState: GlobalSliceState = {
  showSideBarInformations: false,
  informations: false,
  sideBarType: false,
};

const globalSlice = createSlice({
  name: "globalS",
  initialState,
  reducers: {
    reset: (state) => {
      state.showSideBarInformations = false;
    },
    handleShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSideBarInformations = action.payload;
    },
    handleGetSidebar: (state, action: PayloadAction<boolean>) => {
      state.informations = action.payload;
    },
    handleTypeSidebar: (state, action: PayloadAction<boolean>) => {
      state.sideBarType = action.payload;
    },
  },
});

export const { handleShowSidebar, handleTypeSidebar, handleGetSidebar, reset } =
  globalSlice.actions;
export default globalSlice.reducer;



// export const selectSideBarType = (state: GlobalSliceState) => state.sideBarType;

// export const selectSideBarType = (state: GlobalSliceState ) => state.globaleState.sideBarType;

// export  const selectSideBarType = (state: GlobalSliceState) => state.globaleState.sideBarType as GlobalSliceState["sideBarType"];


// import { createSlice } from "@reduxjs/toolkit";

// export interface globalSliceState {
//   // Define your state properties here
//   // Example:
//   showSideBarInformations: boolean;
//   informations: boolean;
//   sideBarType: boolean;
// }

// const globalSlice = createSlice({


//   name: "all",
//   initialState: {
//     showSideBarInformations: false,
//     informations:false,
//     sideBarType:false
//   },
//   reducers: {
//     reset: (state, action) => {
//       state.showSideBarInformations = false;
//     },
//     handleShowSidebar: (state, action) => {
//       state.showSideBarInformations = action.payload;
//     },
//     handleGetSidebar: (state, action) => {
//       state.informations = action.payload;
//     },
//     handleTypeSidebar: (state, action) => {
//       state.sideBarType = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder;
//   },
// });

// export const { handleShowSidebar,handleTypeSidebar, handleGetSidebar,reset } = globalSlice.actions;
// export default globalSlice.reducer;
