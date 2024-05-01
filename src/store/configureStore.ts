import { configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";

import { createReducer } from "./reducers";
import { RootState } from "./types";

export function configureAppStore(_initialState: RootState | {} = {}) {
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
    //@ts-ignore
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    //@ts-ignore
    enhancers: (getDefaultEnhancers) => [
      ...getDefaultEnhancers(),
      ...enhancers
    ]
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     forceReducerReload(store);
  //   });
  // }
  return store;
}
