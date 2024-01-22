import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import serviceAllProjets from "./serviceAllProjets";
import serviceCheckProjets from "./serviceCheckProjets";
import serviceCreateProjets from "./serviceCreateProjet";
import { ApiResponse, Lot, Projet } from "./types";

export type checkProject = {
  projet: string;
};

export interface TypeProjectsState {
  result: Lot[] | null;
  isLoading: boolean;
  message: string;
  allProjets: ApiResponse; // Update the type to `Lot[] | null`
  createResult: any[] | null;
  exist: any | boolean;
}

const initialState = {
  result: null,
  isLoading: false,
  message: "",
  allProjets: [],
  createResult: null,
  exist: false,
};

export interface ProjectPayload {
  obj: any;
  onSuccessAction: (message: string | any) => void;
  onErrorAction: (message: string | any) => void;
}

export const getAllProjets = createAsyncThunk<ApiResponse, void>(
  "all/proejcts",
  async (_, thunkAPI) => {
    try {
      let res = await serviceAllProjets.api();
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

export const checkProjectExistence = createAsyncThunk(
  "all/checkprojects",
  async (object: checkProject, thunkAPI) => {
    try {
      let res = await serviceCheckProjets.api(object);
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

export const create = createAsyncThunk(
  "all/project",
  async (object: ProjectPayload, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;

    try {
      let res = await serviceCreateProjets.api(obj);

      if (res.status == 201) {
        onSuccessAction("Project Created successfully");
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
  name: "projets",
  initialState,
  reducers: {
    resetProjets: (state, action) => {
      state.result = null;
      state.allProjets = [];
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAllProjets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProjets.fulfilled, (state, action) => {
        state.message = "";
        state.allProjets = action.payload as never;
        state.isLoading = false;
      })
      .addCase(getAllProjets.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.allProjets = [];
      })

      .addCase(create.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.message = "";
        state.createResult = action.payload;
        state.isLoading = false;
      })
      .addCase(create.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.createResult = null;
      })

      .addCase(checkProjectExistence.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkProjectExistence.fulfilled, (state, action) => {
        state.message = "";
        state.exist = action.payload !== null;
        state.isLoading = false;
      })
      .addCase(checkProjectExistence.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.exist = false;
      });
  },
});

export const { resetProjets } = projestsSlice.actions;
export default projestsSlice.reducer;
