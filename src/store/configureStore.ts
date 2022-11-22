import { configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";

import { createReducer } from "./reducers";

export function configureAppStore(_initialState: any | {} = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     forceReducerReload(store);
  //   });
  // }
  return store;
}
