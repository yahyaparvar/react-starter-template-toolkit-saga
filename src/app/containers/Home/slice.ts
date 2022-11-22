/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { homeSaga } from './saga';

// The initial state of the Home container
export const initialState: ContainerState = {};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:homeActions, reducer:homeReducer, name: sliceKey } = homeSlice;

export const usehomeSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: homeReducer });
useInjectSaga({ key: sliceKey, saga: homeSaga });
return { homeActions }
}