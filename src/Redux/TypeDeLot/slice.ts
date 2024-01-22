import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceAllLots from "./serviceAllTypeLots";
import { TypeLot } from "./types";



interface TypeLotsState {
  isLoading: boolean;
  message: string;
  allTypeLots: TypeLot[];
}

const initialState: TypeLotsState = {
  isLoading: false,
  message: "",
  allTypeLots: [],
};


 

export const getAllTypeLots = createAsyncThunk(
  "all/Typelots",
  async (_, thunkAPI) => {
    try {
      let res = await serviceAllLots.api();
      if (res.status == 200) {
        return res.data;
      } else {
        return res.data;
      }
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const TypeLotsSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    resetTypeLots: (state, action) => {
      state.allTypeLots = [];
      state.isLoading = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAllTypeLots.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTypeLots.fulfilled, (state, action) => {
        state.message = "";
        state.allTypeLots = action.payload  
        state.isLoading = false;
      })
      .addCase(getAllTypeLots.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.allTypeLots = [];
      });
  },
});

export const { resetTypeLots } = TypeLotsSlice.actions;
export default TypeLotsSlice.reducer;



// import { ApiResponse, TypeLot } from "./types";

// interface typedata {
//   data: any[]
// }

// export interface TypeLotsTypesState {
//   isLoading: boolean;
//   message: string;
//   allTypeLots: typedata;

// }