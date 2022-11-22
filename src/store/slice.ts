import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'store/toolkit';
interface ContainerState {
  loggedIn: boolean;
}
// The initial state of the LoginPage container
export const initialState: ContainerState = {
  loggedIn: false,
};

const globalSlice = createSlice({
  name: 'global',
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
