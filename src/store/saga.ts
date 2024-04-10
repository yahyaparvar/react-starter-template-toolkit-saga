import { Themes } from "app/types";
import { put, select, takeEvery } from "redux-saga/effects";
import { globalSelectors } from "./selector";
import { globalActions } from "./slice";
import { LocalStorageKeys, storage } from "./storage";

export function* changeTheme(
  action: ReturnType<typeof globalActions.changeTheme>
) {
  const newTheme = action.payload;
  const currentTheme: string = yield select(globalSelectors.theme);
  const app = document.querySelector("body");
  const html = document.querySelector("html");
  if (app && html) {
    app.classList.remove(currentTheme);
    app.classList.add(newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
  }
  yield put(globalActions.setTheme(newTheme));
  storage.write(LocalStorageKeys.THEME, newTheme);
}
export function* getAndSetTheme() {
  const savedTheme = storage.read(LocalStorageKeys.THEME);
  const app = document.querySelector("body");
  const html = document.querySelector("html");
  if (app && html) {
    app.classList.add(savedTheme);
    html.classList.add(savedTheme);
  }
  if (savedTheme) {
    yield put(globalActions.setTheme(savedTheme));
  } else {
    yield put(globalActions.setTheme(Themes.LIGHT));
    storage.write(LocalStorageKeys.THEME, Themes.LIGHT);
  }
}

export function* globalSaga() {
  yield takeEvery(globalActions.changeTheme.type, changeTheme);
  yield takeEvery(globalActions.getAndSetTheme.type, getAndSetTheme);
}
