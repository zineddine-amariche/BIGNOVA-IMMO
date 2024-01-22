import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceAllUsers from "./serviceAllUsers";
import serviceUsersInfo from "./serviceUsersInfo";

export interface TypeUsersState {
  result: null | any; // Replace `any` with the appropriate type for `result`
  isLoading: boolean;
  message: string;
  allUsers: null | any[]; // Replace `any` with the appropriate type for `allUsers`
  userRole: null | string; // Replace `string` with the appropriate type for `userRole`
}

export const initialState: TypeUsersState = {
  result: null,
  isLoading: false,
  message: "",
  allUsers: null,
  userRole: null,
};

export const getUserInfo = createAsyncThunk(
  "users/fetch",
  async (object, thunkAPI) => {
    // const { data, onSuccessUpdate } = object;
    // console.log('data', data)
    try {
      let res = await serviceUsersInfo.api(object);
      // console.log("res.data", res);
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
export const getAllUsers = createAsyncThunk(
  "all/users",
  async (object, thunkAPI) => {
    try {
      let res = await serviceAllUsers.api();
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

const usersSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    resetUsers: (state, action) => {
      state.result = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.message = "";
        state.userRole = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.userRole = null;
      })

      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.message = "";
        state.allUsers = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.message = String(action.payload);
        state.allUsers = null;
      });
  },
});

export const { resetUsers } = usersSlice.actions;
export default usersSlice.reducer;
