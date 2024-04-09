import { takeEvery } from "redux-saga/effects";
import { globalActions } from "./slice";

export function* setIsLoggedIn() {}

export function* globalSaga() {
  yield takeEvery(globalActions.setIsLoggedIn.type, setIsLoggedIn);
}
