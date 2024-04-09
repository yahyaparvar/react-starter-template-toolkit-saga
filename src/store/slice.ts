/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "./redux-injectors";
import { globalSaga } from "./saga";

interface ContainerState {
  loggedIn: boolean;
}
// The initial state of the LoginPage container
export const initialState: ContainerState = {
  loggedIn: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
      if (action.payload === false) {
        localStorage.clear();
      }
    },
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
