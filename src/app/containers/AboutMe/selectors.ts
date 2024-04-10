import { createSelector } from '@reduxjs/toolkit'; import { RootState } from
'store/types'; import { initialState } from './slice'; 
const domains = {
  root: (state: RootState) => state.aboutMe|| initialState
} 
export const AboutMeselectors = { root: createSelector( [domains.root],
(state) => state,) }