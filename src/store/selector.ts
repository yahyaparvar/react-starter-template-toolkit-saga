import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from "./slice";

const selectDomains = {
  root: (state: RootState) => state.global || initialState,
};

export const globalSelectors = {
  root: createSelector([selectDomains.root], (root) => root),
};
