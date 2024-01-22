import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "./serviceLogin";
import registerService from "./serviceRegister";
import serviceUpdateUserInfo from "./serviceUpdateUserInfo";

export interface User {
  id: string;
  name: string;
  age: number;
}

export interface TypeAuthState {
  result: any | null;
  isError: boolean;
  isLoading: boolean;
  isAuth: boolean;
  message: string;
  loader: boolean;
  update: any | null;
  user: User[] 
}


const initialState: TypeAuthState = {
  result: null,
  isError: false,
  isLoading: false,
  isAuth: false,
  message: "",
  loader: false,
  update: null,
  user:[]
};
export interface LoginPayload {
  obj: any;
  onSuccessAction: (message,obj: string | any) => void;
  onErrorAction: (message: string | any) => void;
}

export interface RegisterPayload {
  obj: any;
  onSuccessAction: (message: string | any)  => void;
  onErrorAction: (message: string| any) => void;
}

export interface UpdateUserInfoPayload {
  data: any;
  onSuccessUpdate: () => void;
  onErrorAction: (message: string | any) => void;
}

export const login = createAsyncThunk(
  "auth/login",
  async (object: LoginPayload, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    try {
      let res = await loginService.api(obj);
      // console.log("res.data", res.status);
      if (res.status == 200) {
        onSuccessAction("Connection completed successfully",obj);
        return res.data.data;
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
      console.log("message --- ", message);

      if(message =='Network Error'){
      onErrorAction(message);

      }
      onErrorAction(message.status + "  : " + message.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const register = createAsyncThunk(
  "register/sigin",
  async (object:RegisterPayload, thunkAPI) => {
    const { obj, onSuccessAction,onErrorAction } = object;
    try {
      let res = await registerService.api(obj);

      if (res.status == 201) {
        onSuccessAction("Account created successfully");
        return res.data.data;
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
      onErrorAction(message.message ? message.message : message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateUserInfo = createAsyncThunk(
  "update/user",
  async (object:UpdateUserInfoPayload, thunkAPI) => {
    const { data, onSuccessUpdate,onErrorAction } = object;
    try {
      let res = await serviceUpdateUserInfo.api(data);
      console.log("res---update", res);

      if (res.status == 200) {
        onSuccessUpdate();
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
      onErrorAction(message.message ? message.message : message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice  = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = [];
      state.isAuth = false;
    },

    getPermission: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
    },

    setUserInfoOnLogin: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.message = "";
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
        state.result = null;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isAuth = true;
        state.message = "";
        state.isError = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
        state.result = null;
      })

      .addCase(updateUserInfo.pending, (state) => {
        state.loader = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.update = true;
        state.loader = false;
        state.message = "";
        state.result = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loader = false;
        state.isError = true;
        state.message = String(action.payload);
        state.update = false;
      });
  },
});

export const {
  Logout,
  getPermission,
  setUserInfoOnLogin,
} = loginSlice.actions;
export default loginSlice.reducer;
