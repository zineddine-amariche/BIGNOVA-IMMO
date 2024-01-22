import thunk from "redux-thunk";
import AppTheme,{ThemeType} from "./theme";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import auth, { TypeAuthState } from "./auth/slice";
import users, { TypeUsersState } from "./users/slice";
import projects, { TypeProjectsState } from "./projects/slice";
import globaleState, { GlobalSliceState } from "./global/slice";
import lots, { Typelots } from "./Lots/slice";
import typeLots, { TypeLotsTypesState } from "./TypeDeLot/slice";


// Define the type for your overall state

export interface RootState {
  auth: TypeAuthState;
  users: TypeUsersState;
  projects: TypeProjectsState;
  AppTheme:  ThemeType;
  lots: Typelots;
  typeLots: TypeLotsTypesState;
  globaleState:GlobalSliceState
}

const reducers = combineReducers({
  AppTheme,
  auth,
  users,
  projects,
  globaleState,
  lots,
  typeLots
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
