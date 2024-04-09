/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "app/types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "./redux-injectors";
import { globalSaga } from "./saga";

export interface GlobalState {
  loggedIn: boolean;
  theme: string;
}
// The initial state of the LoginPage container
export const initialState: GlobalState = {
  loggedIn: false,
  theme: Themes.LIGHT,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {},
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    getAndSetTheme() {},
  },
});

export const {
  actions: globalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice;
export const useglobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer });
  useInjectSaga({ key: sliceKey, saga: globalSaga });
  return { globalActions };
};
