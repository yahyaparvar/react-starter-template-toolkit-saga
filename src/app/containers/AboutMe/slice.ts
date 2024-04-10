/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { aboutMeSaga } from './saga';

// The initial state of the AboutMe container
export const initialState: ContainerState = {};

const aboutMeSlice = createSlice({
  name: 'aboutMe',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:AboutMeActions, reducer:AboutMeReducer, name: sliceKey } = aboutMeSlice;

export const useAboutMeSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: AboutMeReducer });
useInjectSaga({ key: sliceKey, saga: aboutMeSaga });
return { AboutMeActions }
}