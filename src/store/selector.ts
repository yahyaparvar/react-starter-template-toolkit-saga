import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from "./slice";

const selectDomains = {
  root: (state: RootState) => state.global || initialState,
  theme: (state: RootState) => state.global?.theme || initialState.theme,
};

export const globalSelectors = {
  root: createSelector([selectDomains.root], (root) => root),
  theme: createSelector([selectDomains.theme], (state) => state),
};
