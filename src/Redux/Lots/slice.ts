import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceAllLots from "./serviceAllLots";
import serviceCheckLots from "./serviceCheckLots";
import serviceCreateLot from "./serviceCreateLot";
import serviceDeleteLot from "./serviceDeleteLot";

export type checkLots = {
  projet: string;
};

export type deleteLots = {
  id: string;
};
export interface LotPayload {
  obj: any;
  onSuccessAction: (message: string | any) => void;
  onErrorAction: (message: string | any) => void;
}

export interface AllLot {
  id: string;
  name: string;
  age: number;
}

export interface Typelots {
  isLoading: boolean;
  message: string;
  allLots: null | AllLot[]; // Assuming AllLot is a defined type/interface
  exist: any | boolean;
  createLotResult: any[] | null;
}

export interface LotPayload {
  obj: any;
  onSuccessAction: (message: string | any) => void;
  onErrorAction: (message: string | any) => void;
}

const initialState: Typelots = {
  isLoading: false,
  message: "",
  allLots: null,
  exist: false,
  createLotResult: null,
};

export const getAllLots = createAsyncThunk("aget/lots", async (_, thunkAPI) => {
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
});

export const checkLotExistence = createAsyncThunk(
  "all/checkprojects",
  async (object: checkLots, thunkAPI) => {
    try {
      let res = await serviceCheckLots.api(object);
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

export const createLots = createAsyncThunk(
  "all/Lots",
  async (object: LotPayload, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;

    try {
      let res = await serviceCreateLot.api(obj);

      if (res.status == 201) {
        onSuccessAction("Lot created successfully");
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      onErrorAction(message.status + "  : " + message.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const DeleteLot = createAsyncThunk(
  "delete/Lots",
  async (object: LotPayload, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;

    try {
      let res = await serviceDeleteLot.api(obj);

      if (res.status == 200) {
        onSuccessAction("Lot deleted successfully");
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message", message);
      onErrorAction(message.status + "  : " + message.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const projestsSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    resetLots: (state, action) => {
      state.allLots = null;
      state.isLoading = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAllLots.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLots.fulfilled, (state, action) => {
        state.message = "";
        state.allLots = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllLots.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.allLots = null;
      })

      .addCase(checkLotExistence.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkLotExistence.fulfilled, (state, action) => {
        state.message = "";
        state.exist = action.payload !== null;
        state.isLoading = false;
      })
      .addCase(checkLotExistence.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.exist = false;
      })

      .addCase(createLots.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLots.fulfilled, (state, action) => {
        state.message = "";
        state.createLotResult = action.payload;
        state.isLoading = false;
      })
      .addCase(createLots.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.createLotResult = null;
      });
  },
});

export const { resetLots } = projestsSlice.actions;
export default projestsSlice.reducer;
